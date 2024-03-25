import {TitlePage} from "../../components/TitlePage";
import {render} from "../../helpers/render";
import {InputForm} from "../../components/InputForm";
import {Link} from "../../components/Link";
import {getFormData} from "../../helpers/getFormData";

const title = new TitlePage({
  title: 'Настройки'
})

const inputAvatar = new InputForm({
  type: 'file',
  class: 'input',
  name: 'avatar',
  placeholder: 'Аватар'
})

const inputFirstName = new InputForm({
  type: 'text',
  class: 'input',
  name: 'first_name',
  placeholder: 'Имя'
})

const inputSecondName = new InputForm({
  type: 'text',
  class: 'input',
  name: 'second_name',
  placeholder: 'Фамилия'
})

const inputLogin = new InputForm({
  type: 'text',
  class: 'input',
  name: 'login',
  placeholder: 'Логин'
})

const inputEmail = new InputForm({
  type: 'text',
  class: 'input',
  name: 'email',
  placeholder: 'Почта'
})

const inputPhone = new InputForm({
  type: 'text',
  class: 'input',
  name: 'phone',
  placeholder: 'Телефон'
})

const inputDisplayName = new InputForm({
  type: 'text',
  class: 'input',
  name: 'display_name',
  placeholder: 'Имя в чате'
})

const inputOldPassword = new InputForm({
  type: 'text',
  class: 'input',
  name: 'oldPassword',
  placeholder: 'Старый пароль'
})

const inputNewPassword = new InputForm({
  type: 'text',
  class: 'input',
  name: 'newPassword',
  placeholder: 'Новый пароль'
})

const linkSave = new Link({
  link: '../Profile/index.html',
  title: "Сохранить",
  id: 'save',
  events: {
    click: getFormData
  }
})

render(".section_settings", title, true);
render('.wrapper', inputAvatar)
render('.wrapper', inputFirstName)
render('.wrapper', inputSecondName)
render('.wrapper', inputLogin)
render('.wrapper', inputEmail)
render('.wrapper', inputPhone)
render('.wrapper', inputDisplayName)
render('.wrapper', inputOldPassword)
render('.wrapper', inputNewPassword)
render('.wrapper', linkSave)
