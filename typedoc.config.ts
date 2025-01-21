import { TypeDocOptions } from 'typedoc'

export default {
  entryPoints: ['src/main.ts'],
  out: 'docs',
  name: 'Amazing List',
  includeVersion: true,
  plugin: ['typedoc-plugin-vue'],
  readme: 'README.md',
  exclude: ['**/node_modules/**'],
  excludePrivate: true,
  excludeProtected: true,
  excludeExternals: true,
  hideGenerator: true,
  searchInComments: true,
  navigationLinks: {
    'GitHub': 'https://github.com/your-username/amazing-list'
  },
  customDescription: `
    Приложение для отображения бесконечного списка пользователей с использованием Vue 3 и TypeScript.
    
    ## Основные возможности
    
    - Бесконечная прокрутка списка пользователей
    - Автоматическая подгрузка данных при прокрутке
    - Оптимизация производительности через троттлинг
    - Синхронизация состояния с URL
  `
} as TypeDocOptions 