import { TitlePage } from '../../components/TitlePage';
import { render } from '../../helpers/render';
import { Description } from '../../components/Description';
import { Link } from '../../components/Link';

const title = new TitlePage({
  title: '404',
});

const description = new Description({
  text: 'Не туда попали',
});

const link = new Link({
  link: '../Profile/index.html',
  title: 'Назад к чатам',
  id: 'back',
});

render('section', title);
render('section', description);
render('section', link);
