[Български](README-BG.md) • **Deutsch** • [English](README.md) • [Русский](README-RU.md) • [Українська](README-UK.md)

---

[![License](https://img.shields.io/github/license/MaksymStoianov/EventEmitter)](https://github.com/MaksymStoianov/EventEmitter/blob/master/LICENSE.md) [![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)


# EventEmitter

EventEmitter ist ein Objekt, das die Handhabung von Ereignissen implementiert.


## Installation

1. Öffnen Sie Ihr Projekt im [Google Apps Script Dashboard](https://script.google.com/).
2. Kopieren Sie den Inhalt der Datei `index.js` und fügen Sie ihn in eine neue Datei in Ihrem Google Apps Script-Projekt ein.

## Verwendung

### Erstellung einer EventEmitter-Instanz

```javascript
const emitter = EventEmitter.create();
```

### Abonnement eines Ereignisses

```javascript
emitter.on('eventName', function(data) {
  console.log(data);
});
```

### Auslösen eines Ereignisses

```javascript
emitter.emit('eventName', { data: true });
```

### Abmeldung von einem Ereignis

```javascript
function eventHandler(data) {
  console.log(data);
}

emitter.on('eventName', eventHandler);
emitter.off('eventName', eventHandler);
```

### Einmaliges Abonnement eines Ereignisses

```javascript
emitter.once('eventName', function(data) {
  console.log(data);
});
```

## Benutzerdefinierte Ereignisse

- **newListener**: Wird jedes Mal ausgelöst, wenn neue Zuhörer hinzugefügt werden. Übermittelt den Ereignisnamen und einen Verweis auf den hinzugefügten Zuhörer.
- **removeListener**: Wird jedes Mal ausgelöst, wenn bestehende Zuhörer entfernt werden. Übermittelt den Ereignisnamen und einen Verweis auf den entfernten Zuhörer.
- **error**: Wird ausgelöst, wenn ein Fehler auftritt. Wenn das Ereignis keine Abonnenten hat, wird eine Ausnahme ausgelöst.

## Aufgaben

- [ ] Die Methode `emitter.prependListener(eventName, listener)` muss getestet werden.
- [ ] Die Methode `emitter.prependOnceListener(eventName, listener)` muss getestet werden.

## Änderungsverlauf

- **2.0.0**: Verbesserte JSDoc-Dokumentation. Zwei benutzerdefinierte Ereignisse `newListener` und `removeListener` hinzugefügt.
- **1.0.7**: Möglichkeit zur Verwendung von regulären Ausdrücken für Ereignisnamen hinzugefügt.
- **1.0.6**: Stabile Version.
- **1.0.5**: Das Ereignis `error` löst jetzt keine Ausnahme mehr aus, wenn es einen oder mehrere Abonnenten hat.
- **1.0.0**: Veröffentlichung.
