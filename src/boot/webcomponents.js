import { boot } from 'quasar/wrappers'

export default boot(({ app }) => {
  app.config.compilerOptions.isCustomElement = tag => (tag.startsWith('wc-') || ['wc-webcomponent'].includes(tag))
})
