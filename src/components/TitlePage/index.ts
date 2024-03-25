import {Block} from "../../helpers/block";
import {compile} from "handlebars";
import {template} from "./template";

export class TitlePage extends Block {
  constructor(props) {
    // Создаём враппер дом-элемент div
    super("div", props);
  }

  render() {
    const templateHandlebars = compile(template)
    return templateHandlebars({
      title: this.props.title
    });
  }
}
