import {getChats} from "../../store/selectors/chats.selector";
import {render} from "../../helpers/render";
import {Chat} from "../../components/Chat";
import {TitlePage} from "../../components/TitlePage";
import {Link} from "../../components/Link";
import {InputForm} from "../../components/InputForm";
import {messageValidation} from "../../helpers/validations";

const chatList = getChats();

const title = new TitlePage({
  title: 'Профиль'
})

const link = new Link({
  link: '../Settings/index.html',
  title: "Настройки",
  id: 'Settings'
})

const input = new InputForm({
  type: 'text',
  class: 'input',
  name: 'message',
  placeholder: 'Поиск',
  events: {
    blur: messageValidation
  },
  eventInterception: true
})

render(".wrapper", title);
render(".wrapper", link);
render(".wrapper", input);

chatList.map(el => {
  const chat = new Chat(el)
  render("#chats", chat);
})
