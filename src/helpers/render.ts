import { Block } from './block';

export const render = (query:string, block:Block, insertBefore = false) => {
  const root = document.querySelector(query);
  if (insertBefore) {
    root?.insertBefore(block.getContent() as Node, root.firstChild);
  } else {
    root?.appendChild(block.getContent() as Node);
  }
  return root;
};
