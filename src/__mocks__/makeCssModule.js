export default (classList, fakePrefix = "achqjgx") => {
  return classList.reduce((acc, klass) => {
    acc[klass] = `${fakePrefix}-${klass}`;
    return acc;
  }, {});
};
