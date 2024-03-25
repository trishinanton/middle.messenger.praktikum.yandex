import {TitlePage} from "../../components/TitlePage";
import {render} from "../../helpers/render";
import {Description} from "../../components/Description";
import {Link} from "../../components/Link";

const title = new TitlePage({
  title: '500'
})

const description = new Description({
  text: 'Мы уже фиксим'
})

const link = new Link({
  link: '../Profile/index.html',
  title: "Назад к чатам",
  id: 'back500'
})

render("section", title);
render("section", description);
render("section", link);
