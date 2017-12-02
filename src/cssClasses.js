import classNames from 'classnames';

const mapToCssModules = (className, cssModule) => {
  if (!cssModule) return className;

  return className
    .split(" ")
    .map(c => cssModule[c] || c)
    .join(" ");
};

const classNamesWithCssModule = (className, cssModule) =>
  mapToCssModules(classNames(className), cssModule);

export default {
    CAROUSEL: (cssModule, isSlider) => classNamesWithCssModule({
        "carousel": true,
        "carousel-slider": isSlider
    }, cssModule),

    CAROUSEL_STATUS: (cssModule) => classNamesWithCssModule({
        "carousel-status": true,
    }, cssModule),

    WRAPPER: (cssModule, isSlider, axis) => classNamesWithCssModule({
        "thumbs-wrapper": !isSlider,
        "slider-wrapper": isSlider,
        "axis-horizontal": axis === "horizontal",
        "axis-vertical": axis !== "horizontal"
    }, cssModule),

    SLIDER: (cssModule, isSlider, isSwiping) => classNamesWithCssModule({
        "thumbs": !isSlider,
        "slider": isSlider,
        "animated": !isSwiping
    }, cssModule),

    ITEM: (cssModule, isSlider, selected) => classNamesWithCssModule({
        "thumb": !isSlider,
        "slide": isSlider,
        "selected": selected
    }, cssModule),

    ARROW_PREV: (cssModule, disabled) => classNamesWithCssModule({
        "control-arrow control-prev": true,
        "control-disabled": disabled
    }, cssModule),

    ARROW_NEXT: (cssModule, disabled) => classNamesWithCssModule({
        "control-arrow control-next": true,
        "control-disabled": disabled
    }, cssModule),


    DOT: (cssModule, selected) => classNamesWithCssModule({
        "dot": true,
        'selected': selected
    }, cssModule),

    CONTROL_DOTS: (cssModule) => classNamesWithCssModule({
        "control-dots": true,
    }, cssModule),
};
