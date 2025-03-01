# SpendWise

Для виконання лабораторної була взята одна із версій веб-сайту **SpendWise** для керування фінансами. Він містить фронтенд на React і бекенд на Node.js з Express та використовую базу даних MySQL.

## Встановлення залежностей та запуск проекта
Для запуска проекта знадобиться запустити сервер та сам сайт, для цього відкрити 2 термінали та виконати команди: 
Backend частина:
cd backend
npm install
npm start

Frontend частина:
cd frontend
npm install
mpm run dev

## Ліцензія

Цей проєкт ліцензований під MIT. Див. [LICENSE](LICENSE).  
Усі залежності використовують відкриті ліцензії: MIT, ISC, Apache-2.0, BSD-3-Clause.

## Політика конфіденційності
Ознайомтись із [Політикою конфіденційності] можна тут: (PRIVACY_POLICY.md).

## Генерація документації
В якостІ прикладу генерації документів, були змінені файли сторінок в директорії /pages.

Для генерації документації виконати команду:
npm run jsdoc

## Storybook 
В якості прикладу роботи Storybook, було модифіковано файли userRoutes.jsx та server.js.
Для запуску виконати команду:
npm run storybook

Для успішної роботи потрібно, щоб була запущена Backend частина.

## Swagger
Було стровено новйи файл swaggerConfig.js.
Для перегляду API викликів Swagger, потрібно запустити обидві частини проекта, та перейти по посиланню:
http://localhost:5000/api-docs/