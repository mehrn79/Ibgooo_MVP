export const Changer = () => import('../../components/changer.vue' /* webpackChunkName: "components/changer" */).then(c => wrapFunctional(c.default || c))
export const CustomeInput = () => import('../../components/customeInput.vue' /* webpackChunkName: "components/custome-input" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../../components/header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const HeaderRes = () => import('../../components/header_res.vue' /* webpackChunkName: "components/header-res" */).then(c => wrapFunctional(c.default || c))
export const Home = () => import('../../components/home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c))
export const ImageContainer = () => import('../../components/imageContainer.vue' /* webpackChunkName: "components/image-container" */).then(c => wrapFunctional(c.default || c))
export const InfoTitle = () => import('../../components/infoTitle.vue' /* webpackChunkName: "components/info-title" */).then(c => wrapFunctional(c.default || c))
export const Map = () => import('../../components/map.vue' /* webpackChunkName: "components/map" */).then(c => wrapFunctional(c.default || c))
export const PinInput = () => import('../../components/pinInput.vue' /* webpackChunkName: "components/pin-input" */).then(c => wrapFunctional(c.default || c))
export const TripsCard = () => import('../../components/trips-card.vue' /* webpackChunkName: "components/trips-card" */).then(c => wrapFunctional(c.default || c))
export const HomePageCard = () => import('../../components/home-page/card.vue' /* webpackChunkName: "components/home-page-card" */).then(c => wrapFunctional(c.default || c))
export const HomePageHeader = () => import('../../components/home-page/header.vue' /* webpackChunkName: "components/home-page-header" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
