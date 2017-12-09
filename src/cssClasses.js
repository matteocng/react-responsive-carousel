import classNames from 'classnames';

const mapToCssModules = (className, cssModule) => {
  if (!cssModule) return className;

  return className
    .split(" ")
    .map(c => cssModule[c] || c)
    .join(" ");
};

export default (cssModule) => {
  const classNamesWithCssModule = (className) =>
    mapToCssModules(classNames(className), cssModule);

  return {
    CAROUSEL: (isSlider) => classNamesWithCssModule({
        "carousel": true,
        "carousel-slider": isSlider
    }),

    CAROUSEL_STATUS: () => classNamesWithCssModule({
        "carousel-status": true,
    }),

    WRAPPER: (isSlider, axis) => classNamesWithCssModule({
        "thumbs-wrapper": !isSlider,
        "slider-wrapper": isSlider,
        "axis-horizontal": axis === "horizontal",
        "axis-vertical": axis !== "horizontal"
    }),

    SLIDER: (isSlider, isSwiping) => classNamesWithCssModule({
        "thumbs": !isSlider,
        "slider": isSlider,
        "animated": !isSwiping
    }),

    ITEM: (isSlider, selected) => classNamesWithCssModule({
        "thumb": !isSlider,
        "slide": isSlider,
        "selected": selected
    }),

    ARROW_PREV: (disabled) => classNamesWithCssModule({
        "control-arrow control-prev": true,
        "control-disabled": disabled
    }),

    ARROW_NEXT: (disabled) => classNamesWithCssModule({
        "control-arrow control-next": true,
        "control-disabled": disabled
    }),


    DOT: (selected) => classNamesWithCssModule({
        "dot": true,
        'selected': selected
    }),

    CONTROL_DOTS: () => classNamesWithCssModule({
        "control-dots": true,
    }),
  };
}
