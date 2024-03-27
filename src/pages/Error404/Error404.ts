import { TitlePage } from '../../components/TitlePage';
import { render } from '../../helpers/render';
import { Description } from '../../components/Description';
import { Link } from '../../components/Link';
import { DescriptionType, LinkType, TitlePageType } from '../../types';

const title = new TitlePage<TitlePageType>({
  title: '404',
});

const description = new Description<DescriptionType>({
  text: 'Не туда попали',
});

const link = new Link<LinkType>({
  link: '../Profile/index.html',
  title: 'Назад к чатам',
  id: 'back',
});

render<TitlePageType>('section', title);
render<DescriptionType>('section', description);
render<LinkType>('section', link);
