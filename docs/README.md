[**BG**](README_bg.md) | [**DE**](README_de.md) | **EN** | [**RU**](README_ru.md) | [**UK**](README_uk.md)

# EventEmitter

EventEmitter is an object that implements event handling.

## Installation

1. Open your project in [Google Apps Script Dashboard](https://script.google.com/).
2. Copy the contents of the `index.js` file and paste it into a new file in your Google Apps Script project.

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

- **newListener**: Triggered every time new listeners are added. Passes the event name and a reference to the added listener.
- **removeListener**: Triggered every time existing listeners are removed. Passes the event name and a reference to the removed listener.
- **error**: Triggered when an error occurs. If the event has no subscribers, an exception is thrown.

## Tasks

- [ ] Need to test the method `emitter.prependListener(eventName, listener)`.
- [ ] Need to test the method `emitter.prependOnceListener(eventName, listener)`.

## Changelog

<details>
<summary>My top languages</summary>

| Rank | Languages |
|-----:|-----------|
|     1| JavaScript|
|     2| Python    |
|     3| SQL       |

</details>

- **2.0.0**: Improved JSDoc documentation. Added two custom events `newListener` and `removeListener`.
- **1.0.7**: Added the ability to use regular expressions for event names.
- **1.0.6**: Stable version.
- **1.0.5**: The `error` event no longer throws an exception if it has one or more subscribers.
- **1.0.0**: Release.
