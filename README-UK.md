[Български](README-BG.md) • [Deutsch](README-DE.md) • [English](README.md) • [Русский](README-RU.md) • **Українська**


# EventEmitter

EventEmitter - це об'єкт, який реалізує роботу з подіями.

## Встановлення

1. Відкрийте свій проєкт у [Google Apps Script Dashboard](https://script.google.com/).
2. Скопіюйте вміст файлу `index.js` та вставте його у новий файл у вашому проєкті Google Apps Script.

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

## Історія змін

- **2.0.0**: Покращена документація JSDoc. Додано дві користувацькі події `newListener` та `removeListener`.
- **1.0.7**: Додана можливість використання регулярних виразів для імен подій.
- **1.0.6**: Стабільна версія.
- **1.0.5**: Подія `error` тепер не видає виключення, якщо має одного або більше підписчиків.
- **1.0.0**: Реліз.
