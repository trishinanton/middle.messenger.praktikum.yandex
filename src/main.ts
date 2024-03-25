import {Link} from "./components/Link";
import {render} from "./helpers/render";

const linkEntry = new Link({
  link: './pages/Authorization/index.html',
  title: "Вход",
  id: 'entry'
})

render("#app", linkEntry);
