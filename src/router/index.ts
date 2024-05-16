import { Block } from '../helpers/block';

const render = (_: string, block:()=>void):void => {
  block();
};

class Route {
  _pathname: string;

  _blockClass:typeof Block;

  _block: () => { hide: ()=>void };

  _props: { rootQuery: string };

  constructor(pathname: string, view: () => { hide: ()=>void }, props: { rootQuery: string }) {
    this._pathname = pathname;
    this._block = view;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block().hide();
    }
  }

  match(pathname:string) {
    return pathname === this._pathname;
  }

  render() {
    render(this._props.rootQuery, this._block);
    // if (!this._block) {
    //   // this._block = new this._blockClass();
    //   render(this._props.rootQuery, this._block);
    // }

    // this._block.show();
  }
}

class Router {
  routes: Array<Route>;

  history: History;

  _currentRoute?: null | Route;

  _rootQuery: string;

  static __instance: Router;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      // eslint-disable-next-line no-constructor-return
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: () => { hide: ()=>void }) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  start() {
    // любое действие которое повлекло изменению активной записи history, кнопка назад/вперед или js код
    window.onpopstate = (event:PopStateEvent) => {
      const target = event.currentTarget as Window;
      if (target) {
        this._onRoute(target.location.pathname);
      }
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    if (route) {
      route.render();
    }
  }

  go(pathname: string) {
    // изменили только history
    this.history.pushState({}, '', pathname);
    // отрисовали контент
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export const router = new Router('#app');
