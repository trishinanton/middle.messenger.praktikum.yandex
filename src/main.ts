import { render } from './helpers/render';
import { ButtonType } from './types';
import { Button } from './components/Button';
import { onGoRoute } from './helpers/router';

export const MainPage = () => {
  const root = document.querySelector('#app');
  if (root) {
    root.textContent = 'Messenger';
  }

  const button = new Button<ButtonType>({
    title: 'Вход',
    id: 'entry',
    events: {
      click: () => {
        onGoRoute('/sign-in');
      },
    },
  });

  render('#app', button);

  const hide = () => {
    if (root) {
      root.textContent = '';
    }
  };

  return {
    hide,
  };
};
