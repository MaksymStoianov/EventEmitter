<div id="locales" align="right">
  <a href="../bg/CHANGELOG.md"><img src="https://img.shields.io/badge/BG-grey?style=flat" alt="Български"></a>
  <a href="../de/CHANGELOG.md"><img src="https://img.shields.io/badge/DE-grey?style=flat" alt="Deutsch"></a>
  <a href="../en/CHANGELOG.md"><img src="https://img.shields.io/badge/EN-blue?style=flat" alt="English"></a>
  <a href="../ru/CHANGELOG.md"><img src="https://img.shields.io/badge/RU-grey?style=flat" alt="Русский"></a>
  <a href="../uk/CHANGELOG.md"><img src="https://img.shields.io/badge/UK-grey?style=flat" alt="Українська"></a>
</div>


# Changelog


## [2.1.3] - 2024-07-29

### Enhancements
* Enhanced JSDoc documentation for improved clarity and detail.

### Added
* Added new static methods to the `EventEmitter` class:
  * `newEmitter(...args)`
  * `create(...args)`
  * `createEmitter(...args)`
  * `newEvent(...args)`
  * `newListener(...args)`
  * `isEmitter(input)`
  * `isEvent(input)`
  * `isListener(input)`


## [2.0.0] - 2023-10-29

### Enhancements
* Enhanced JSDoc documentation for improved clarity and detail.

### Added
* Added event `newListener` for better event handling.
* Added event `removeListener` for managing event listeners.

### Fixes
* Resolved various bugs and issues.


## [1.0.7]

### Enhancements
* Added support for using regular expressions in event names.


## [1.0.5]

### Enhancements
* Modified the `error` event to prevent exceptions when there are one or more subscribers.


## [1.0.0]

* Initial release.