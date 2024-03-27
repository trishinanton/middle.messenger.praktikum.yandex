import { compile } from 'handlebars';
import { Block } from '../../helpers/block';
import { template } from './template';
import { LinkType } from '../../types';

export class Link<T extends LinkType> extends Block<T> {
  constructor(props: T) {
    // Создаём враппер дом-элемент div
    super('div', props);
  }

  render() {
    const templateHandlebars = compile(template);
    return templateHandlebars({
      id: this.props.id,
      link: this.props.link,
      title: this.props.title,
    });
  }
}
