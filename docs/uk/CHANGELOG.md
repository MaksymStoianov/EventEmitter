<div id="locales" align="right">
  <a href="../bg/CHANGELOG.md"><img src="https://img.shields.io/badge/BG-grey?style=flat" alt="Български"></a>
  <a href="../de/CHANGELOG.md"><img src="https://img.shields.io/badge/DE-grey?style=flat" alt="Deutsch"></a>
  <a href="../en/CHANGELOG.md"><img src="https://img.shields.io/badge/EN-grey?style=flat" alt="English"></a>
  <a href="../ru/CHANGELOG.md"><img src="https://img.shields.io/badge/RU-grey?style=flat" alt="Русский"></a>
  <a href="../uk/CHANGELOG.md"><img src="https://img.shields.io/badge/UK-blue?style=flat" alt="Українська"></a>
</div>


# Журнал змін


## [2.1.3] - 2024-07-29

### Вдосконалення
* Покращено документацію JSDoc для більшої ясності та деталізації.

### Додано
* Додано нові статичні методи до класу `EventEmitter`:
  * `newEmitter(...args)`
  * `create(...args)`
  * `createEmitter(...args)` * `createEmitter(...args)`
  * `newEvent(...args)` * `newListener(...args)`
  * `newListener(...args)` * `newListener(...args)`
  * `isEmitter(input)` * `isEmitter(input)`
  * `isEvent(input)`
  * `isListener(input)` * `isListener(input)`


## [2.0.0] - 2023-10-29

### Вдосконалення
* Покращено документацію JSDoc для більшої ясності та деталізації.

### Додано
* Додано подію `newListener` для кращої обробки подій.
* Додано подію `removeListener` для керування слухачами подій.

### Виправлено
* Виправлено різноманітні вади та проблеми.


## [1.0.7]

### Вдосконалення
* Додано підтримку використання регулярних виразів у назвах подій.


## [1.0.5]

### Вдосконалення
* Модифіковано подію `error` для запобігання виникненню винятків за наявності одного або більше абонентів.


## [1.0.0]

* Початковий випуск.