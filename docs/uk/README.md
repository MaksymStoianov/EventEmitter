<div id="locales" align="right">
  <a href="../bg/README.md"><img src="https://img.shields.io/badge/BG-grey?style=flat" alt="Български"></a>
  <a href="../de/README.md"><img src="https://img.shields.io/badge/DE-grey?style=flat" alt="Deutsch"></a>
  <a href="../en/README.md"><img src="https://img.shields.io/badge/EN-grey?style=flat" alt="English"></a>
  <a href="../ru/README.md"><img src="https://img.shields.io/badge/RU-grey?style=flat" alt="Русский"></a>
  <a href="../uk/README.md"><img src="https://img.shields.io/badge/UK-blue?style=flat" alt="Українська"></a>
</div>


# EventEmitter

<div id="badges" align="left">
  <a href="LICENSE.md"><img src="https://img.shields.io/github/license/MaksymStoianov/EventEmitter" alt="License"></a>
  <a href="https://github.com/google/clasp"><img src="https://img.shields.io/badge/built%20with-clasp-4285f4.svg" alt="clasp"></a>
</div>


EventEmitter - це об'єкт, який реалізує роботу з подіями.


## Встановлення

1. Відкрийте свій проєкт у [Google Apps Script Dashboard](https://script.google.com/).
2. Скопіюйте вміст файлу [emitter.js](../../src/emitter.js) та вставте його у новий файл у вашому проєкті Google Apps Script.

## Використання

### Створення екземпляра EventEmitter

```javascript
const emitter = EventEmitter.create();
```

### Підписка на подію

```javascript
emitter.on('eventName', function(data) {
  console.log(data);
});
```

### Ініціація події

```javascript
emitter.emit('eventName', { data: true });
```

### Відписка від події

```javascript
function eventHandler(data) {
  console.log(data);
}

emitter.on('eventName', eventHandler);
emitter.off('eventName', eventHandler);
```

### Одноразова підписка на подію

```javascript
emitter.once('eventName', function(data) {
  console.log(data);
});
```

## Користувацькі події

- **newListener**: Генерується кожен раз, коли додаються нові слухачі. Передає ім'я події та посилання на додаваного слухача.
- **removeListener**: Генерується кожен раз, коли існуючі слухачі видаляються. Передає ім'я події та посилання на видаляного слухача.
- **error**: Генерується при виникненні помилки. Якщо подія не має підписчиків, то генерується виключення.

## Завдання

- [ ] Необхідно протестувати метод `emitter.prependListener(eventName, listener)`.
- [ ] Необхідно протестувати метод `emitter.prependOnceListener(eventName, listener)`.


## Внесок

Будь ласка, прочитайте [CONTRIBUTING.md](CONTRIBUTING.md) для отримання докладної інформації про те, як зробити внесок у цей проект.


## Журнал змін

Для отримання докладного списку змін і оновлень, будь ласка, зверніться до файлу [CHANGELOG.md](CHANGELOG.md).


## Ліцензія

Цей проект ліцензується відповідно до файлу [LICENSE.md](LICENSE.md).