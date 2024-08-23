<div id="locales" align="right">
  <a href="../bg/CHANGELOG.md"><img src="https://img.shields.io/badge/BG-grey?style=flat" alt="Български"></a>
  <a href="../de/CHANGELOG.md"><img src="https://img.shields.io/badge/DE-grey?style=flat" alt="Deutsch"></a>
  <a href="../en/CHANGELOG.md"><img src="https://img.shields.io/badge/EN-grey?style=flat" alt="English"></a>
  <a href="../ru/CHANGELOG.md"><img src="https://img.shields.io/badge/RU-blue?style=flat" alt="Русский"></a>
  <a href="../uk/CHANGELOG.md"><img src="https://img.shields.io/badge/UK-grey?style=flat" alt="Українська"></a>
</div>


# Журнал изменений


## [2.1.3] - 2024-07-29

### Улучшения.
* Улучшена документация JSDoc для повышения ясности и детализации.

### Добавлено.
* Добавлены новые статические методы в класс `EventEmitter`:
  * `newEmitter(...args)`
  * `create(...args)`
  * `createEmitter(...args)`
  * `newEvent(...args)`
  * `newListener(...args)`
  * `isEmitter(input)`
  * `isEvent(input)`
  * `isListener(input)`


## [2.0.0] - 2023-10-29

### Улучшения.
* Улучшена документация JSDoc для повышения ясности и детализации.

### Добавлено.
* Добавлено событие `newListener` для лучшей обработки событий.
* Добавлено событие `removeListener` для управления слушателями событий.

### Исправления.
* Устранены различные ошибки и проблемы.


## [1.0.7]

### Улучшения
* Добавлена поддержка использования регулярных выражений в именах событий.


## [1.0.5]

### Улучшения
* Модифицировано событие `error` для предотвращения исключений при наличии одного или более подписчиков.


## [1.0.0]

* Первоначальный выпуск.