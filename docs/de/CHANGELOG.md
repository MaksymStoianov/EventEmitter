# Changelog


## [2.1.3] - 2024-07-29

### Erweiterungen
* Verbesserte JSDoc-Dokumentation für mehr Klarheit und Detailgenauigkeit.

### Hinzugefügt
* Neue statische Methoden in der Klasse `EventEmitter` hinzugefügt:
  * `newEmitter(...args)`
  * `create(...args)`
  * `createEmitter(...args)`
  * `neuesEreignis(...args)`
  * `newListener(...args)`
  * `isEmitter(input)`
  * `istEreignis(Eingabe)`
  * `isListener(input)`


## [2.0.0] - 2023-10-29

### Erweiterungen
* Die JSDoc-Dokumentation wurde für mehr Klarheit und Detailreichtum erweitert.

### Hinzugefügt
* Ereignis `newListener` für bessere Ereignisbehandlung hinzugefügt.
* Ereignis `removeListener` für die Verwaltung von Ereignis-Listenern hinzugefügt.

### Korrekturen
* Verschiedene Bugs und Probleme wurden behoben.


## [1.0.7]

### Erweiterungen
* Unterstützung für die Verwendung regulärer Ausdrücke in Ereignisnamen wurde hinzugefügt.


## [1.0.5]

### Erweiterungen
* Das `error`-Ereignis wurde modifiziert, um Ausnahmen zu verhindern, wenn es einen oder mehrere Abonnenten gibt.


## [1.0.0]

* Erste Veröffentlichung.