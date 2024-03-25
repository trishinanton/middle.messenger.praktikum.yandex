import {Block} from "../../helpers/block";
import {template} from "./template";
import {compile} from "handlebars";

export class Chat extends Block {
  constructor(props) {
    // Создаём враппер дом-элемент div
    super("div", props);
  }

  render() {
    const templateHandlebars = compile(template)
    return templateHandlebars({
      text: this.props.text
    });
  }
}
