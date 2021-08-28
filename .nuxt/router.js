import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2535ea81 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _40bd844e = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _3259b3d6 = () => interopDefault(import('../pages/jokes/joke.vue' /* webpackChunkName: "pages/jokes/joke" */))
const _b2f55f54 = () => interopDefault(import('../pages/jokes/_id/index.vue' /* webpackChunkName: "pages/jokes/_id/index" */))
const _44edc546 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2535ea81,
    name: "about"
  }, {
    path: "/inspire",
    component: _40bd844e,
    name: "inspire"
  }, {
    path: "/jokes/joke",
    component: _3259b3d6,
    name: "jokes-joke"
  }, {
    path: "/jokes/:id",
    component: _b2f55f54,
    name: "jokes-id"
  }, {
    path: "/",
    component: _44edc546,
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
