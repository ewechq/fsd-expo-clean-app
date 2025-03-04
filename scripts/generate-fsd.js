const fs = require('fs');
const path = require('path');

const layers = [
  'app',
  'processes',
  'pages',
  'widgets',
  'features',
  'entities',
  'shared'
];

const segments = [
  'ui',
  'model',
  'lib',
  'api',
  'config'
];

const root = process.cwd();
const srcDir = path.join(root, 'src');

// Создаем src директорию если её нет
if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir);
}

// Создаем структуру FSD
layers.forEach(layer => {
  const layerPath = path.join(srcDir, layer);
  if (!fs.existsSync(layerPath)) {
    fs.mkdirSync(layerPath);
  }

  segments.forEach(segment => {
    const segmentPath = path.join(layerPath, segment);
    if (!fs.existsSync(segmentPath)) {
      fs.mkdirSync(segmentPath);
    }
  });
});

// Создаем базовые файлы
const createFile = (filePath, content) => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
  }
};

// README для каждого слоя
const layerDescriptions = {
  app: 'Инициализация приложения, глобальные стили, провайдеры',
  processes: 'Сложные процессы, затрагивающие несколько страниц',
  pages: 'Страницы приложения',
  widgets: 'Композиционный слой, соединяющий сущности и фичи',
  features: 'Функциональность, привязанная к бизнес-задачам',
  entities: 'Бизнес-сущности',
  shared: 'Переиспользуемый код, библиотеки, UI-kit'
};

layers.forEach(layer => {
  const readmePath = path.join(srcDir, layer, 'README.md');
  const readmeContent = `# ${layer}\n\n${layerDescriptions[layer]}\n`;
  createFile(readmePath, readmeContent);
});

// Создаем index.ts в shared/ui для базовых компонентов
const sharedUiIndexPath = path.join(srcDir, 'shared', 'ui', 'index.ts');
createFile(sharedUiIndexPath, '// Экспорт базовых UI компонентов\n');

// Создаем базовый конфиг в app/config
const appConfigPath = path.join(srcDir, 'app', 'config', 'index.ts');
createFile(appConfigPath, `// Конфигурация приложения
export const config = {
  API_URL: process.env.API_URL || 'http://localhost:3000',
  // Добавьте другие конфигурационные параметры здесь
};\n`);

console.log('✅ FSD структура успешно создана'); 