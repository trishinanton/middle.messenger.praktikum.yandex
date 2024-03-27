import { TitlePage } from '../../components/TitlePage';
import { render } from '../../helpers/render';
import { Description } from '../../components/Description';
import { Link } from '../../components/Link';
import { DescriptionType, LinkType, TitlePageType } from '../../types';

const title = new TitlePage<TitlePageType>({
  title: '500',
});

const description = new Description<DescriptionType>({
  text: 'Мы уже фиксим',
});

const link = new Link<LinkType>({
  link: '../Profile/index.html',
  title: 'Назад к чатам',
  id: 'back500',
});

render<TitlePageType>('section', title);
render<DescriptionType>('section', description);
render<LinkType>('section', link);
