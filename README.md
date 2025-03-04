# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## FSD Architecture

Проект организован по принципам Feature-Sliced Design:

```
src/
├── app/          # Композиция и инициализация приложения
│   ├── providers/     # Провайдеры приложения
│   ├── styles/       # Глобальные стили
│   └── index.ts      # Точка входа
├── processes/    # Процессы приложения
├── pages/        # Страницы приложения
├── widgets/      # Композиционные компоненты
├── features/     # Функциональности приложения
├── entities/     # Бизнес-сущности
└── shared/       # Переиспользуемый код
    ├── api/          # API клиенты
    ├── config/       # Конфигурация
    ├── lib/          # Библиотеки и утилиты
    ├── ui/           # UI компоненты
    └── types/        # Типы и интерфейсы
```

### Слои архитектуры:

1. **app** - Инициализация приложения, глобальные провайдеры и стили
2. **processes** - Сквозные процессы: авторизация, навигация
3. **pages** - Страницы приложения
4. **widgets** - Композиционные компоненты для страниц
5. **features** - Функциональности пользователя
6. **entities** - Бизнес-сущности
7. **shared** - Переиспользуемый код

### Правила импортов:

- Слои могут использовать только нижележащие слои
- Shared доступен всем слоям
- Запрещены круговые зависимости
