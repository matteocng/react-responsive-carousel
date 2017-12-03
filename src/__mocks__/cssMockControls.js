import makeCssModule from "./makeCssModule";

// Exports a fake, standard CSS module JS output:
// {
//    control-arrow: 'someprefix-control-arrow',
//    control-next: 'someprefix-control-next',
//    ...
// }
export default makeCssModule([
  "control-arrow",
  "control-dots",
  "control-prev",
  "control-disabled",
  "control-next"
]);
