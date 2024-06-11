# Мадам Роше

Мадам Роше - веб-приложение, созданное с использованием React и Vite, с добавлением анимаций с помощью библиотеки GSAP (GreenSock Animation Platform).

## Структура проекта

- `src/` - основная директория с исходным кодом
  - `app/` - папка с настройками приложения
    - `assets/` - папка с изображениями
    - `fonts/` - папка с шрифтами
    - `styles/` - папка с настройками стилей
  - `components/` - папка с компонентами React
  - `shared/` - папка с обшими данными
  - `App.jsx` - главный компонент приложения
  - `main.jsx` - точка входа в приложение
- `public/` - статические файлы
- `vite.config.js` - конфигурация Vite
- `package.json` - зависимости и скрипты проекта

## Требования

- Node.js (рекомендуется версия 18 и выше)
- npm или yarn

## Установка

1. Склонируйте репозиторий:

```bash
git clone https://github.com/<USERNAME>/dynamic_app.git
cd dynamic_app

Установите зависимости:
 - npm install
 - yarn install

Запустите приложение:
 - npm run dev
 - yarn dev
```

2. Сборка приложения:

- npm run build
- yarn build

Собранные файлы будут находиться в директории dist.

3. Использование GSAP

GSAP (GreenSock Animation Platform) используется для создания анимаций в приложении. Вы можете импортировать GSAP и использовать его в компонентах React следующим образом:

import { gsap } from 'gsap';

useEffect(() => {
gsap.to('.my-element', { rotation: 360, duration: 2 });
}, []);

Этот README файл содержит информацию о проекте, установке, запуске, сборке и деплое приложения, а также о том, как использовать GSAP в вашем проекте.