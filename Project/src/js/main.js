'use strict';

// Polyfills
import 'babel-polyfill';

// 3rd-party dependencies
import $ from 'jquery';
import 'jquery-ui/ui/effect';
import Swiper from 'swiper';
import Header from './components/header';

window.$ = $;
window.jQuery = $;

// Shortcut
// const $doc = $(document);
// const $win = $(window);

const defaults = {};

class ProjectName {
  constructor(options) {
    const settings = Object.assign({}, defaults, options);
    const header = new Header();

    const swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });

    $('.header-toggle').on('click', () => header.toggle());

    Object.assign(this, {
      settings,
      header,
      swiper
    });
  }
}

$(() => {
  const App = new ProjectName();
  window.App = App;
  console.log(App);
});
