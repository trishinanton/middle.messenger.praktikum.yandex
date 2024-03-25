export const render = (query, block, insertBefore = false) => {
  const root = document.querySelector(query);
  if (insertBefore) {
    root.insertBefore(block.getContent(), root.firstChild);
  } else {
    root.appendChild(block.getContent());
  }
  return root;
};
