<div id="locales" align="right">
  <a href="README-BG.md"><img src="https://img.shields.io/badge/BG-blue?style=flat" alt="Български"></a>
  <a href="README-DE.md"><img src="https://img.shields.io/badge/DE-grey?style=flat" alt="Deutsch"></a>
  <a href="README.md"><img src="https://img.shields.io/badge/EN-grey?style=flat" alt="English"></a>
  <a href="README-RU.md"><img src="https://img.shields.io/badge/RU-grey?style=flat" alt="Русский"></a>
  <a href="README-UK.md"><img src="https://img.shields.io/badge/UK-grey?style=flat" alt="Українська"></a>
</div>

<div id="badges" align="left">
  <a href="LICENSE.md"><img src="https://img.shields.io/github/license/MaksymStoianov/EventEmitter" alt="License"></a>
  <a href="https://github.com/google/clasp"><img src="https://img.shields.io/badge/built%20with-clasp-4285f4.svg" alt="clasp"></a>
</div>


# EventEmitter

EventEmitter е обект, който реализира работа със събития.


## Инсталация

1. Отворете вашия проект в [Google Apps Script Dashboard](https://script.google.com/).
2. Копирайте съдържанието на файла `index.js` и го поставете в нов файл във вашия проект на Google Apps Script.

## Употреба

### Създаване на инстанция на EventEmitter

```javascript
const emitter = EventEmitter.create();
```

### Абонамент за събитие

```javascript
emitter.on('eventName', function(data) {
  console.log(data);
});
```

### Инициация на събитие

```javascript
emitter.emit('eventName', { data: true });
```

### Отписване от събитие

```javascript
function eventHandler(data) {
  console.log(data);
}

emitter.on('eventName', eventHandler);
emitter.off('eventName', eventHandler);
```

### Еднократен абонамент за събитие

```javascript
emitter.once('eventName', function(data) {
  console.log(data);
});
```

## Персонализирани събития

- **newListener**: Генерира се всеки път, когато се добавят нови слушатели. Предава името на събитието и референция към добавения слушател.
- **removeListener**: Генерира се всеки път, когато съществуващи слушатели се премахват. Предава името на събитието и референция към премахнатия слушател.
- **error**: Генерира се при възникване на грешка. Ако събитието няма абонати, се генерира изключение.
- 
## Задачи

- [ ] Необходимо е да се тества методът `emitter.prependListener(eventName, listener)`.
- [ ] Необходимо е да се тества методът `emitter.prependOnceListener(eventName, listener)`.

## История на промените

- **2.0.0**: Подобрена JSDoc документация. Добавени са две персонализирани събития `newListener` и `removeListener`.
- **1.0.7**: Добавена е възможност за използване на регуларни изрази за имената на събитията.
- **1.0.6**: Стабилна версия.
- **1.0.5**: Събитието `error` вече не генерира изключение, ако има един или повече абонати.
- **1.0.0**: Издание.
