# Messenger

>  README В ПРОЦЕССЕ НАПИСАНИЯ

## Оглавление

- [**Стек**](#stack)
- [**Работа с проектом**](#work_with_project)
- [**Качество и ci**](#quality)
- [**Переменные окружения**](#vars)
- [**Как верстать?**](#styles)
- [**О работе с api**](#api)

<a name="stack"></a>

## Стек

[express](https://expressjs.com/ru/) + [sass](https://sass-lang.com/) + [vite](https://vitejs.dev/) + [vite](https://handlebarsjs.com/) + [mocha](https://mochajs.org/)

<a name="work_with_project"></a>

## Работа с проектом

Перед работой с проектом убедитесь что у вас установленны: `node` >= 18 & `npm`.
Проект содержит `.nvmrc`, если у вас установлен `nvm` (рекомендуется), то выполните nvm use перед запуском `npm` скриптов

| Шаг                                   | Команда                                                                           |
|---------------------------------------|-----------------------------------------------------------------------------------|
| Клонируем                             | `git clone https://github.com/trishinanton/middle.messenger.praktikum.yandex.git` | 
| Ставим зависимости                    | `npm i`                                                                           |                                                               
| Запускаем на http://localhost:3000/   | `npm run dev`                                                                     |                                                        


Домен на Netlify: https://fancy-jalebi-545495.netlify.app/

Схематичные макеты в папке: /ui/makets.drawio (открыть файл с разрешением .drawio, можно здесь https://app.diagrams.net/)

Страница 500 ошибок: https://fancy-jalebi-545495.netlify.app/pages/Error500/index.html
Страница 404 ошибок: https://fancy-jalebi-545495.netlify.app/pages/Error404/index.html
Страница авторизации: https://fancy-jalebi-545495.netlify.app/sign-in
Страница регистрации: https://fancy-jalebi-545495.netlify.app/sign-up
Страница профиля: https://fancy-jalebi-545495.netlify.app/messenger
Страница настроек: https://fancy-jalebi-545495.netlify.app/settings

В src/components - расположены общие компоненты, переиспользуемые во всем проекте
В src/pages - расположены страницы проекта
В src/api - необходимый функционал для работы с запросами на сервер
В src/store - в будущем будет реализован функционал бизнес логики, согласно паттерну MVC
В src/router - функционал роутинга приложения

<a name="quality"></a>

## Качество и ci

| Тип                       | Инструмент                                                                                                         |
|---------------------------|--------------------------------------------------------------------------------------------------------------------|
| eslint                    | [eslint](https://www.npmjs.com/package/eslint)                                                                     |
| stylelint                 | [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines)                   |


| Шаг                                                 | Команда            |
|-----------------------------------------------------|--------------------|
| сборка prod-версии                                  | `npm run build`    |
| запуск prod-версии                                  | `npm run start`    |

Команды по отдельности и другие команды можно посмотреть в файле package.json

Остальные разделы будут добавлены в след спринтах
