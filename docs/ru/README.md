<div id="locales" align="right">
  <a href="../bg/README.md"><img src="https://img.shields.io/badge/BG-grey?style=flat" alt="Български"></a>
  <a href="../de/README.md"><img src="https://img.shields.io/badge/DE-grey?style=flat" alt="Deutsch"></a>
  <a href="../en/README.md"><img src="https://img.shields.io/badge/EN-grey?style=flat" alt="English"></a>
  <a href="../ru/README.md"><img src="https://img.shields.io/badge/RU-blue?style=flat" alt="Русский"></a>
  <a href="../uk/README.md"><img src="https://img.shields.io/badge/UK-grey?style=flat" alt="Українська"></a>
</div>


# EventEmitter

<div id="badges" align="left">
  <img src="https://img.shields.io/github/v/release/MaksymStoianov/EventEmitter" alt="Release">
  <a href="LICENSE.md"><img src="https://img.shields.io/github/license/MaksymStoianov/EventEmitter" alt="License"></a>
  <a href="https://github.com/google/clasp"><img src="https://img.shields.io/badge/built%20with-clasp-4285f4.svg" alt="clasp"></a>
</div>


**EventEmitter** для **Google Apps Script** — это библиотека, реализующая архитектуру на основе событий, которая позволяет легко организовать взаимодействие между различными компонентами приложения с помощью механизма "издатель-подписчик".

Основная идея заключается в том, что одни части программы (эмиттеры) могут генерировать события, а другие (подписчики) — на них реагировать, не зная друг о друге напрямую. Это улучшает модульность и расширяемость кода.


## Оглавление

* [Установка](#установка)
* [Документация](#документация)
* [Использование](#использование)
  * [Создание экземпляра EventEmitter](#создание-экземпляра-eventemitter)
  * [Подписка на событие](#подписка-на-событие)
    * [Одноразовая подписка на событие](#одноразовая-подписка-на-событие)
  * [Инициация события](#инициация-события)
  * [Отписка от события](#отписка-от-события)
* [Собственные события](#собственные-события)
* [Задачи](#задачи)
* [Вклад](#вклад)
* [История изменений](#история-изменений)
* [Лицензия](#лицензия)


## Установка

1. Откройте свой проект в [Google Apps Script Dashboard](https://script.google.com/).
2. Скопируйте содержимое файла [emitter.js](../../src/emitter.js) и вставьте его в новый файл в вашем проекте Google Apps Script.


## Документация

Для получения подробной документации, пожалуйста, посетите страницу [Wiki](../../../../wiki/ru).


## Использование

### Создание экземпляра EventEmitter.

```javascript
const emitter = EventEmitter.create();
```

### Подписка на событие.

```javascript
emitter.on('eventName', function(data) {
  console.log(data);
});
```

#### Одноразовая подписка на событие.

```javascript
emitter.once('eventName', function(data) {
  console.log(data);
});
```

### Инициация события.

```javascript
emitter.emit('eventName', { data: true });
```

### Отписка от события.

```javascript
function eventHandler(data) {
  console.log(data);
}

emitter.on('eventName', eventHandler);
emitter.off('eventName', eventHandler);
```


## Собственные события

- **`newListener`**: Генерируется каждый раз, когда добавляются новые слушатели. Передает имя события и ссылку на добавляемого слушателя.
- **`removeListener`**: Генерируется каждый раз, когда существующие слушатели удаляются. Передает имя события и ссылку на удаляемого слушателя.
- **`error`**: Генерируется при возникновении ошибки. Если событие не имеет подписчиков, то генерируется исключение.


## Задачи

- [ ] Необходимо протестировать метод `emitter.prependListener(eventName, listener)`.
- [ ] Необходимо протестировать метод `emitter.prependOnceListener(eventName, listener)`.


## Вклад

Пожалуйста, прочитайте [CONTRIBUTING.md](CONTRIBUTING.md) для получения подробной информации о том, как внести вклад в этот проект.


## История изменений

Для получения подробного списка изменений и обновлений, пожалуйста, обратитесь к файлу [CHANGELOG.md](CHANGELOG.md).


## Лицензия

Этот проект лицензируется в соответствии с файлом [LICENSE.md](LICENSE.md).