import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _152eed2a = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _56e1b789 = () => interopDefault(import('../pages/trips/index.vue' /* webpackChunkName: "pages/trips/index" */))
const _349eb20e = () => interopDefault(import('../pages/auth/choose/index.vue' /* webpackChunkName: "pages/auth/choose/index" */))
const _5dc1810f = () => interopDefault(import('../pages/auth/code/index.vue' /* webpackChunkName: "pages/auth/code/index" */))
const _51ff1116 = () => interopDefault(import('../pages/auth/law/index.vue' /* webpackChunkName: "pages/auth/law/index" */))
const _5a77f22c = () => interopDefault(import('../pages/auth/phone-number/index.vue' /* webpackChunkName: "pages/auth/phone-number/index" */))
const _16876269 = () => interopDefault(import('../pages/auth/sign-in/index.vue' /* webpackChunkName: "pages/auth/sign-in/index" */))
const _1d7cc944 = () => interopDefault(import('../pages/auth/tracker-code/index.vue' /* webpackChunkName: "pages/auth/tracker-code/index" */))
const _afc06fa6 = () => interopDefault(import('../pages/trips/detail/index.vue' /* webpackChunkName: "pages/trips/detail/index" */))
const _acf7192c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/test",
    component: _152eed2a,
    name: "test"
  }, {
    path: "/trips",
    component: _56e1b789,
    name: "trips"
  }, {
    path: "/auth/choose",
    component: _349eb20e,
    name: "auth-choose"
  }, {
    path: "/auth/code",
    component: _5dc1810f,
    name: "auth-code"
  }, {
    path: "/auth/law",
    component: _51ff1116,
    name: "auth-law"
  }, {
    path: "/auth/phone-number",
    component: _5a77f22c,
    name: "auth-phone-number"
  }, {
    path: "/auth/sign-in",
    component: _16876269,
    name: "auth-sign-in"
  }, {
    path: "/auth/tracker-code",
    component: _1d7cc944,
    name: "auth-tracker-code"
  }, {
    path: "/trips/detail",
    component: _afc06fa6,
    name: "trips-detail"
  }, {
    path: "/",
    component: _acf7192c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
