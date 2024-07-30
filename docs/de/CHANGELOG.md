<div id="locales" align="right">
  <a href="../bg/CHANGELOG.md"><img src="https://img.shields.io/badge/BG-grey?style=flat" alt="Български"></a>
  <a href="../de/CHANGELOG.md"><img src="https://img.shields.io/badge/DE-blue?style=flat" alt="Deutsch"></a>
  <a href="../en/CHANGELOG.md"><img src="https://img.shields.io/badge/EN-grey?style=flat" alt="English"></a>
  <a href="../ru/CHANGELOG.md"><img src="https://img.shields.io/badge/RU-grey?style=flat" alt="Русский"></a>
  <a href="../uk/CHANGELOG.md"><img src="https://img.shields.io/badge/UK-grey?style=flat" alt="Українська"></a>
</div>


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