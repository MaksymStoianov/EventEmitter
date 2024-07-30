<div id="locales" align="right">
  <a href="../bg/CHANGELOG.md"><img src="https://img.shields.io/badge/BG-blue?style=flat" alt="Български"></a>
  <a href="../de/CHANGELOG.md"><img src="https://img.shields.io/badge/DE-grey?style=flat" alt="Deutsch"></a>
  <a href="../en/CHANGELOG.md"><img src="https://img.shields.io/badge/EN-grey?style=flat" alt="English"></a>
  <a href="../ru/CHANGELOG.md"><img src="https://img.shields.io/badge/RU-grey?style=flat" alt="Русский"></a>
  <a href="../uk/CHANGELOG.md"><img src="https://img.shields.io/badge/UK-grey?style=flat" alt="Українська"></a>
</div>


# Changelog


## [2.1.3] - 2024-07-29

### Подобрения
* Подобрена документация на JSDoc за по-голяма яснота и детайлност.

### Добавено
* Добавени са нови статични методи към класа `EventEmitter`:
  * `newEmitter(...args)`
  * `create(...args)`
  * `createEmitter(...args)`
  * `newEvent(...args)`
  * `newListener(...args)`
  * `isEmitter(input)`
  * `isEvent(input)`
  * `isListener(input)`


## [2.0.0] - 2023-10-29

### Подобрения
* Подобрена документация на JSDoc за по-голяма яснота и детайлност.

### Добавено
* Добавено е събитие `newListener` за по-добра обработка на събитията.
* Добавено е събитие `removeListener` за управление на слушателите на събития.

### Корекции
* Решени са различни грешки и проблеми.


## [1.0.7]

### Подобрения
* Добавена е поддръжка за използване на регулярни изрази в имената на събитията.


## [1.0.5]

### Enhancements
* Модифицирано е събитието `error`, за да се предотвратят изключения, когато има един или повече абонати.


## [1.0.0]

* Първоначална версия.