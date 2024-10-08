<div id="locales" align="right">
  <a href="../bg/README.md"><img src="https://img.shields.io/badge/BG-blue?style=flat" alt="Български"></a>
  <a href="../de/README.md"><img src="https://img.shields.io/badge/DE-grey?style=flat" alt="Deutsch"></a>
  <a href="../en/README.md"><img src="https://img.shields.io/badge/EN-grey?style=flat" alt="English"></a>
  <a href="../ru/README.md"><img src="https://img.shields.io/badge/RU-grey?style=flat" alt="Русский"></a>
  <a href="../uk/README.md"><img src="https://img.shields.io/badge/UK-grey?style=flat" alt="Українська"></a>
</div>


# EventEmitter

<div id="badges" align="left">
  <img src="https://img.shields.io/github/v/release/MaksymStoianov/EventEmitter" alt="Release">
  <a href="LICENSE.md"><img src="https://img.shields.io/github/license/MaksymStoianov/EventEmitter" alt="License"></a>
  <a href="https://github.com/google/clasp"><img src="https://img.shields.io/badge/built%20with-clasp-4285f4.svg" alt="clasp"></a>
</div>

**EventEmitter** е обект, който реализира работа със събития.


## Инсталация

1. Отворете вашия проект в [Google Apps Script Dashboard](https://script.google.com/).
2. Копирайте съдържанието на файла [emitter.js](../../src/emitter.js) и го поставете в нов файл във вашия проект на Google Apps Script.


## Документация

За подробна документация, моля, посетете страницата [Wiki](../../../../wiki/bg).



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


## Задачи

- [ ] Необходимо е да се тества методът `emitter.prependListener(eventName, listener)`.
- [ ] Необходимо е да се тества методът `emitter.prependOnceListener(eventName, listener)`.


## Съдействие

Моля, прочетете [CONTRIBUTING.md](CONTRIBUTING.md) за подробности относно това как да допринесете за този проект.


## Списък на промените

За подробен списък на промените и актуализациите, моля, вижте файла [CHANGELOG.md](CHANGELOG.md).


## Лиценз

Този проект е лицензиран съгласно файла [LICENSE.md](LICENSE.md).