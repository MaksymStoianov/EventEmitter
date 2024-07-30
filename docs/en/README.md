<div id="locales" align="right">
  <a href="../bg/README.md"><img src="https://img.shields.io/badge/BG-grey?style=flat" alt="Български"></a>
  <a href="../de/README.md"><img src="https://img.shields.io/badge/DE-grey?style=flat" alt="Deutsch"></a>
  <a href="../en/README.md"><img src="https://img.shields.io/badge/EN-blue?style=flat" alt="English"></a>
  <a href="../ru/README.md"><img src="https://img.shields.io/badge/RU-grey?style=flat" alt="Русский"></a>
  <a href="../uk/README.md"><img src="https://img.shields.io/badge/UK-grey?style=flat" alt="Українська"></a>
</div>


# EventEmitter

<div id="badges" align="left">
  <a href="LICENSE.md"><img src="https://img.shields.io/github/license/MaksymStoianov/EventEmitter" alt="License"></a>
  <a href="https://github.com/google/clasp"><img src="https://img.shields.io/badge/built%20with-clasp-4285f4.svg" alt="clasp"></a>
</div>

EventEmitter is an object that implements event handling.


## Installation

1. Open your project in [Google Apps Script Dashboard](https://script.google.com/).
2. Copy the contents of the [emitter.js](../../src/emitter.js) file and paste it into a new file in your Google Apps Script project.


## Usage

### Creating an EventEmitter instance

```javascript
const emitter = EventEmitter.create();
```

### Subscribing to an event

```javascript
emitter.on('eventName', function(data) {
  console.log(data);
});
```

### Initiating an event

```javascript
emitter.emit('eventName', { data: true });
```

### Unsubscribing from an event

```javascript
function eventHandler(data) {
  console.log(data);
}

emitter.on('eventName', eventHandler);
emitter.off('eventName', eventHandler);
```

### One-time event subscription

```javascript
emitter.once('eventName', function(data) {
  console.log(data);
});
```


## Custom events

- `newListener`: Triggered every time new listeners are added. Passes the event name and a reference to the added listener.
- `removeListener`: Triggered every time existing listeners are removed. Passes the event name and a reference to the removed listener.
- `error`: Triggered when an error occurs. If the event has no subscribers, an exception is thrown.


## Tasks

- [ ] Need to test the method `emitter.prependListener(eventName, listener)`.
- [ ] Need to test the method `emitter.prependOnceListener(eventName, listener)`.


## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.


## Changelog

For a detailed list of changes and updates, please refer to the [CHANGELOG.md](CHANGELOG.md) file.


## License

This project is licensed under the [LICENSE.md](LICENSE.md) file.