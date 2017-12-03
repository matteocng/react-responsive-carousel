import makeCssModule from "./makeCssModule";

// Exports a fake, standard CSS module JS output:
// {
//    carousel: 'someprefix-carousel',
//    thumbs: 'someprefix-thumbs',
//    ...
// }
export default makeCssModule([
  "carousel",
  "carousel-slider",
  "carousel-status",
  "thumbs-wrapper",
  "slider-wrapper",
  "axis-horizontal",
  "axis-vertical",
  "thumbs",
  "slider",
  "animated",
  "thumb",
  "slide",
  "control-dots",
  "control-prev",
  "control-disabled",
  "control-arrow",
  "control-next",
  "dot",
  "selected"
]);
