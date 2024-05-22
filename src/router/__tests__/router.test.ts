import { expect } from 'chai';
import sinon from 'sinon';

import { Route, Router } from '../index.ts';

describe('Route', () => {
  let route;
  const mockHide = sinon.fake();

  beforeEach(() => {
    route = new Route('/test', () => ({ hide: mockHide }), { rootQuery: '#root' });
  });

  it('should match pathname correctly', () => {
    expect(route.match('/test')).to.be.true;
    expect(route.match('/other')).to.be.false;
  });

  it('should navigate to a new pathname and render', () => {
    route.navigate('/test');
    expect(route._pathname).to.equal('/test');
  });

  it('should leave and hide the block', () => {
    route.leave();
    expect(mockHide.called).to.be.true;
  });
});

describe('Router', () => {
  let router;
  beforeEach(() => {
    router = new Router('#app');
  });

  afterEach(() => {
    router = null;
  });

  it('should add a route correctly', () => {
    router.use('/test', () => {});
    expect(router.routes.length).to.equal(1);
  });

  it('should get correct route for a given pathname', () => {
    router.use('/test', () => {});
    const route = router.getRoute('/test');
    expect(route).to.not.be.undefined;
  });

  it('should navigate back in history', () => {
    const historyBackStub = sinon.stub(router.history, 'back');
    router.back();
    expect(historyBackStub.called).to.be.true;
    historyBackStub.restore();
  });

  it('should navigate forward in history', () => {
    const historyForwardStub = sinon.stub(router.history, 'forward');
    router.forward();
    expect(historyForwardStub.called).to.be.true;
    historyForwardStub.restore();
  });

  it('should navigate to a new route', () => {
    const historyPushStateStub = sinon.stub(router.history, 'pushState');
    router.go('/new-route');
    expect(historyPushStateStub.called).to.be.true;
    expect(historyPushStateStub.args[0][2]).to.equal('/new-route');
    historyPushStateStub.restore();
  });
});
