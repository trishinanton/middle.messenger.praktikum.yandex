import { EventBus } from './eventBus.ts';

export class Block<T extends object> {
  static EVENTS:Record<string, string> = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
    FLOW_CDU: 'flow:component-did-update',
  };

  _element: HTMLElement | null = null;

  _meta: { tagName: string, props: T | {} } | null = null;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  props: T;

  eventBus: () => EventBus<T>;

  constructor(tagName = 'div', props = {}) {
    const eventBus = new EventBus<T>();
    this._meta = {
      tagName,
      props,
    };

    this.props = this._makePropsProxy(props as T);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus<T>) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta as { tagName: string };
    this._element = this._createDocumentElement(tagName) as HTMLElement;
    const { wrapperClassName } = this.props as { wrapperClassName: string };

    if (wrapperClassName) {
      this._element.setAttribute('class', `${wrapperClassName}`);
    }
  }

  _addEvents() {
    const { events = {}, eventInterception } = this.props as { events: Record<string, Function>, eventInterception:boolean };

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName] as EventListenerOrEventListenerObject, eventInterception);
    });
  }

  _removeEvents() {
    const { events = {} } = this.props as { events: Record<string, Function> };

    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName] as EventListenerOrEventListenerObject);
    });
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: T, newProps: T) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProps: T, newProps: T) {
    return JSON.stringify(oldProps) !== JSON.stringify(newProps);
  }

  setProps = (nextProps:T) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();
    const element = new DOMParser().parseFromString(block as unknown as string, 'text/html').body.firstChild;

    // Удалить старые события через removeEventListener
    this._removeEvents();
    this._element?.append(element as string | Node);

    // Навесить новые события через addEventListener
    this._addEvents();
    this.dispatchComponentDidMount();
  }

  // Может переопределять пользователь, необязательно трогать
  render() {}

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: T) {
    return new Proxy(props, {
      get(target, prop) {
        const value = (target as { [index: string]:unknown })[prop as string];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, prop, value) => {
        if (prop in target) {
          // eslint-disable-next-line no-param-reassign
          (target as { [index: string]:unknown })[prop as string] = value;
          this.eventBus().emit(Block.EVENTS.FLOW_CDU, { oldProps: props as T, newProps: target });
        } else {
          throw new Error('Access denied');
        }
        return true;
      },
      deleteProperty: () => {
        throw new Error('Access denied');
      },
    } as ProxyHandler<T>);
  }

  // eslint-disable-next-line class-methods-use-this
  _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    const el = this.getContent();
    if (el) {
      el.style.display = 'block';
    }
  }

  hide() {
    const el = this.getContent();
    if (el) {
      el.style.display = 'none';
    }
  }
}
