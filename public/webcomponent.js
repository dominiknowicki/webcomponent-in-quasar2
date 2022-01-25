class Webcomponent extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor () {
    super()
  }

  connectedCallback () {
    console.log('wc-webcomponent connectedCallback!!!')
    this.innerHTML = `${this.getAttribute('message')}`
  }
}

window.customElements.define('wc-webcomponent', Webcomponent)
