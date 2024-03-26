import { EventBus } from './eventBus';

export class Block {
  static EVENTS:Record<string, string> = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
    FLOW_CDU: 'flow:component-did-update',
  };

  _element: HTMLElement | null = null;

  _meta: { tagName: string, props: unknown } | null = null;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  props: Record<string, unknown>;

  eventBus: () => EventBus;

  constructor(tagName = 'div', props = {}) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta as { tagName: string };
    this._element = this._createDocumentElement(tagName) as HTMLElement;

    if (this.props.className) {
      this._element.setAttribute('class', `${this.props.className}`);
    }
  }

  _addEvents() {
    const { events = {}, eventInterception } = this.props as { events: Record<string, Function>, eventInterception:boolean };

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName] as EventListenerOrEventListenerObject, eventInterception);
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

  _componentDidUpdate(oldProps: unknown, newProps: unknown) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProps: unknown, newProps: unknown) {
    return JSON.stringify(oldProps) !== JSON.stringify(newProps);
  }

  setProps = (nextProps:unknown) => {
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

    this._element?.append(element as string | Node);
    this._addEvents();
    this.dispatchComponentDidMount();
  }

  // Может переопределять пользователь, необязательно трогать
  render() {}

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: {}) {
    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop as string];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, prop, value) => {
        if (prop in target) {
          // eslint-disable-next-line no-param-reassign
          target[prop as string] = value;
          this.eventBus().emit(Block.EVENTS.FLOW_CDU, { oldProps: props, newProps: target });
        } else {
          throw new Error('Access denied');
        }
        return true;
      },
      deleteProperty: () => {
        throw new Error('Access denied');
      },
    } as ProxyHandler<Record<string, unknown>>);
  }

  // eslint-disable-next-line class-methods-use-this
  _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }
}
