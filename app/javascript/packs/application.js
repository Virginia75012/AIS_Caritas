// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------
import "bootstrap";

import { loadDynamicBannerText } from '../components/banner';
import { initAutocomplete } from '../plugins/init_autocomplete';
import { initSweetalert } from '../plugins/init_sweetalert';
import { slide } from '../components/slider';
import { trash } from '../components/trash';
import { initSimulateur } from '../components/init_simulateur';
import { initSlick } from '../custom/carousel';
import { initMapbox } from '../plugins/init_mapbox';

document.addEventListener('turbolinks:load', () => {
  loadDynamicBannerText();
  initAutocomplete();
  initSweetalert();
  slide();
  initMapbox();
  trash();
  initSlick();

  if (document.querySelector('.simu')) {
    initSimulateur();
  }

});



