import { compile } from 'handlebars';
import { Block } from '../../helpers/block';
import { template } from './template';

export class Chat extends Block {
  constructor(props: {} | undefined) {
    // Создаём враппер дом-элемент div
    super('div', props);
  }

  render() {
    const templateHandlebars = compile(template);
    return templateHandlebars({
      text: this.props.text,
    });
  }
}
