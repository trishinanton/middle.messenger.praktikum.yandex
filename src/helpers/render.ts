export const render = (query:string, block:unknown, insertBefore = false) => {
  const root = document.querySelector(query);
  if (insertBefore) {
    // @ts-ignore
    root?.insertBefore(block.getContent(), root.firstChild);
  } else {
    // @ts-ignore
    root?.appendChild(block.getContent());
  }
  return root;
};
