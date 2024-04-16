export const hideContent = (element: Element | null) => () => {
  if (element) {
    // eslint-disable-next-line no-param-reassign
    element.textContent = '';
  }
};
