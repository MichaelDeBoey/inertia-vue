import { Inertia } from '@inertiajs/inertia'

import Link from './link'
import Remember from './remember'

export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$inertia', { get: () => Inertia })
    Object.defineProperty(Vue.prototype, '$page', { get: () => app.props })

    Vue.mixin(Remember)

    Vue.component('InertiaLink', Link)
  },
}
