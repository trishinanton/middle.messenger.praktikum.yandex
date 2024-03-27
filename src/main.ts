import { Link } from './components/Link';
import { render } from './helpers/render';
import { LinkType } from './types';

const linkEntry = new Link<LinkType>({
  link: './pages/Authorization/index.html',
  title: 'Вход',
  id: 'entry',
});

render('#app', linkEntry);
