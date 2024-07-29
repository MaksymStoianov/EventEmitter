[Български](README-BG.md) • [Deutsch](README-DE.md) • [English](README.md) • **Русский** • [Українська](README-UK.md)

---

[![License](https://img.shields.io/github/license/microsoft/semantic-kernel)](https://github.com/MaksymStoianov/EventEmitter/blob/master/LICENSE.md) [![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)


# EventEmitter

EventEmitter - это объект, который реализует работу с событиями.


## Установка

1. Откройте свой проект в [Google Apps Script Dashboard](https://script.google.com/).
2. Скопируйте содержимое файла `index.js` и вставьте его в новый файл в вашем проекте Google Apps Script.

## Использование

### Создание экземпляра EventEmitter

```javascript
const emitter = EventEmitter.create();
```

### Подписка на событие

```javascript
emitter.on('eventName', function(data) {
  console.log(data);
});
```

### Инициация события

```javascript
emitter.emit('eventName', { data: true });
```

### Отписка от события

```javascript
function eventHandler(data) {
  console.log(data);
}

emitter.on('eventName', eventHandler);
emitter.off('eventName', eventHandler);
```

### Одноразовая подписка на событие

```javascript
emitter.once('eventName', function(data) {
  console.log(data);
});
```

## Собственные события

- **newListener**: Генерируется каждый раз, когда добавляются новые слушатели. Передает имя события и ссылку на добавляемого слушателя.
- **removeListener**: Генерируется каждый раз, когда существующие слушатели удаляются. Передает имя события и ссылку на удаляемого слушателя.
- **error**: Генерируется при возникновении ошибки. Если событие не имеет подписчиков, то генерируется исключение.

## Задачи

- [ ] Необходимо протестировать метод `emitter.prependListener(eventName, listener)`.
- [ ] Необходимо протестировать метод `emitter.prependOnceListener(eventName, listener)`.

## История изменений

- **2.0.0**: Улучшена документация JSDoc. Добавлены два собственных события `newListener` и `removeListener`.
- **1.0.7**: Добавлена возможность использования регулярных выражений для имен событий.
- **1.0.6**: Стабильная версия.
- **1.0.5**: Событие `error` теперь не выдает исключение, если имеет одного или более подписчиков.
- **1.0.0**: Релиз.
