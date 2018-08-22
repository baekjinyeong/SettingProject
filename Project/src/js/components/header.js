// 3rd-party dependencies
import $ from 'jquery';

const defaults = {
  rootSelector: '.header',
  activeClass: 'active'
};

export default class Header {
  constructor(options) {
    const settings = Object.assign({}, defaults, options);
    const rootElement = document.querySelector(settings.rootSelector);

    Object.assign(this, { settings, rootElement });
  }

  open() {
    const { rootElement, settings } = this;
    rootElement.classList.add(settings.activeClass);
    //$(rootElement).addClass(settings.activeClass);
  }

  close() {
    const { rootElement, settings } = this;
    $(rootElement).removeClass(settings.activeClass);
  }

  toggle() {
    const { rootElement, settings } = this;

    if ($(rootElement).hasClass(settings.activeClass)) {
      $(rootElement).removeClass(settings.activeClass);
    } else {
      $(rootElement).addClass(settings.activeClass);
    }
  }
}
