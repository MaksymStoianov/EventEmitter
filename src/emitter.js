/**
 * MIT License
 * 
 * Copyright (c) 2023 Maksym Stoianov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */



/**
 * `EventEmitter` - представляет собой объект реализующий работу с событиями.
 * @class               EventEmitter
 * @namespace           EventEmitter
 * @version             2.1.3
 * @author              Maksym Stoianov <stoianov.maksym@gmail.com>
 * @license             MIT
 * @borrows             EventEmitter#newEmitter as EventEmitter#create
 * @borrows             EventEmitter#newEmitter as EventEmitter#createEmitter
 * @tutorial            https://maksymstoianov.com/
 * @see                 [Source](https://script.google.com/home/projects/1x0FGYO3nLZy71h10SmYFaiWK_nZJFkzHGe28usjhVrSKyFQ4PbCtGDsl/edit)
 * @see                 [GitHub](https://github.com/MaksymStoianov/EventEmitter)
 */
class EventEmitter {

  /**
   * Создает и возвращает экземпляр класса [`Emitter`](#Emitter).
   * @return {EventEmitter.Emitter}
   */
  static newEmitter(...args) {
    return Reflect.construct(this.Emitter, args);
  }

  static create(...args) {
    return Reflect.construct(this.Emitter, args);
  }

  static createEmitter(...args) {
    return Reflect.construct(this.Emitter, args);
  }



  /**
   * Создает и возвращает экземпляр класса [`Event`](#).
   * @return {EventEmitter.Event}
   */
  static newEvent(...args) {
    return Reflect.construct(this.Event, args);
  }



  /**
   * Создает и возвращает экземпляр класса [`Listener`](#).
   * @return {EventEmitter.Listener}
   */
  static newListener(...args) {
    return Reflect.construct(this.Listener, args);
  }



  /**
   * Проверяет, является ли заданное значение объектом типа [`Emitter`](#).
   * @param {*} input Объект для проверки.
   * @return {boolean} `true`, если объект является `Emitter`; иначе, `false`.
   */
  static isEmitter(input) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.name}.isEmitter.`);
    }

    return (input instanceof this.Emitter);
  }



  /**
   * Проверяет, является ли заданное значение объектом типа [`Event`](#).
   * @param {*} input Объект для проверки.
   * @return {boolean} `true`, если объект является `Event`; иначе, `false`.
   */
  static isEvent(input) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.name}.isEvent.`);
    }

    return (input instanceof this.Event);
  }



  /**
   * Проверяет, является ли заданное значение объектом типа [`Listener`](#).
   * @param {*} input Объект для проверки.
   * @return {boolean} `true`, если объект является `Listener`; иначе, `false`.
   */
  static isListener(input) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.name}.isListener.`);
    }

    return (input instanceof this.Listener);
  }



  constructor() {
    throw new Error(`${this.constructor.name} is not a constructor.`);
  }

}





/**
 * Конструктор `Emitter` - представляет собой объект для работы с эмиттером.
 * @class               Emitter
 * @memberof            EventEmitter
 * @version             2.1.3
 * @borrows             Emitter#addListener as Emitter#on
 * @borrows             Emitter#addListener as Emitter#subscribe
 * @borrows             Emitter#addListener as Emitter#append
 * @borrows             Emitter#removeListener as Emitter#off
 * @borrows             Emitter#removeListener as Emitter#unsubscribe
 * @borrows             Emitter#removeAllListeners as Emitter#offAll
 * @borrows             Emitter#removeAllListeners as Emitter#unsubscribeAll
 * @borrows             Emitter#emit as Emitter#trigger
 * @borrows             Emitter#emit as Emitter#publish
 * @borrows             Emitter#getEventNames as Emitter#eventNames
 * @borrows             Emitter#addOnceListener as Emitter#once
 * @borrows             Emitter#prependListener as Emitter#prepend
 * @borrows             Emitter#prependOnceListener as Emitter#prependOnce
 */
EventEmitter.Emitter = class Emitter {

  /**
   * Нормализует заданное название события, разрешая `RegExp` и ` ` сегменты.
   *
   * #### Example 1
   * ```javascript
   * const eventNames = 'event-name-1   event-name-2 ';
   * let result = Emitter.normalize(eventNames);
   *
   * console.log(result); // ['event-name-1', 'event-name-2']
   * ```
   *
   * #### Example 2
   * ```javascript
   * const eventNames = ['event-name-1 event-name-2', ['event-name-3']];
   * let result = Emitter.normalize(eventNames);
   *
   * console.log(result); // ['event-name-1', 'event-name-2', 'event-name-3']
   * ```
   *
   * #### Example 3
   * ```javascript
   * const eventNames = ['event-name-1', /event.+/];
   * let result = Emitter.normalize(eventNames, ['event-name-2','event-name-3']);
   *
   * console.log(result); // ['event-name-1', 'event-name-2', 'event-name-3']
   * ```
   *
   * @param {(string|number|Array|RegExp)} input Имя, или коллекция имен, или строка имен разделенных пробелом, или регулярное выражение.
   * @param {string[]} [eventNames = []] Не обязательно. Массив названий событий (для решения `RegExp` сегментов).
   * @return {string[]}
   */
  static normalize(input, eventNames = []) {
    input = (Array.isArray(input) ? input.flat(Infinity) : [input]);

    let result = [];

    for (let item of input) {
      if (typeof item === 'string') {
        item = item
          .split(/\s+/)
          .filter((item) => item !== '');
      }

      else if (typeof item === 'number') {
        item = [String(item)];
      }

      else if (item instanceof RegExp) {
        item = eventNames
          .filter(name => item.test(name));
      }

      else continue;

      if (item.length) {
        result = result.concat(item);
      }
    }

    return result;
  }



  constructor() {

    /**
     * Коллекция событий.
     * @readonly
     * @type {Map}
     */
    this.events = new Map();


    /**
     * Коллекция слушателей.
     * @readonly
     * @type {Map}
     */
    this.listeners = new Map();


    /**
     * Название события, для генерирования исключения.
     * @readonly
     * @type {string}
     */
    this.errorEvent = 'error';

  }



  /**
   * Добавляет функцию в конец массива слушателей для указанного события.
   * @param {(string|Array|RegExp)} eventName Имя события, или массив имен, или строка имен разделенных пробелом.
   * @param {function} callback Функция обратного вызова.
   * @param {boolean} [once = false] Не обязательно. Одноразовый запуск? По умолчанию `false`.
   */
  addListener(eventName, callback, once = false) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.constructor.name}.addListener.`);
    }

    if (!['String', 'Array', 'RegExp'].includes(Object.prototype.toString.call(eventName).slice(8, -1))) {
      throw new TypeError(`Параметры (${typeof eventName}) не соответствуют сигнатуре метода ${this.constructor.name}.addListener.`);
    }

    if (typeof callback !== 'function') {
      throw new TypeError(`Параметры (${typeof eventName}, ${typeof callback}) не соответствуют сигнатуре метода ${this.constructor.name}.addListener.`);
    }

    const eventNames = this.constructor
      .normalize(eventName, this.getEventNames());

    for (const name of eventNames) {
      let event = this.events.get(name);

      if (!EventEmitter.isEvent(event)) {
        event = EventEmitter.newEvent(name);

        event.emitter = this;

        this.events.set(name, event);
      }

      event.addListener(callback, once);
    }

    return this;
  }

  on(...args) {
    return this.addListener(...args);
  }

  subscribe(...args) {
    return this.addListener(...args);
  }

  append(...args) {
    return this.addListener(...args);
  }



  /**
   * Удаляет указанный слушатель или функцию обратного вызова из массива слушателей для указанного события.
   * @param {(string|Array|RegExp)} eventName Имя события, или массив имен, или строка имен разделенных пробелом.
   * @param {(Listener|function)} listener Слушатель или функция обратного вызова.
   */
  removeListener(eventName, listener) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.constructor.name}.removeListener.`);
    }

    if (!['String', 'Array', 'RegExp'].includes(Object.prototype.toString.call(eventName).slice(8, -1))) {
      throw new TypeError(`Параметры (${typeof eventName}) не соответствуют сигнатуре метода ${this.constructor.name}.removeListener.`);
    }

    if (!(typeof listener === 'function' || EventEmitter.isListener(listener))) {
      throw new TypeError(`Параметры (${typeof eventName}, ${typeof listener}) не соответствуют сигнатуре метода ${this.constructor.name}.removeListener.`);
    }

    const eventNames = this.constructor
      .normalize(eventName, this.getEventNames());

    for (const name of eventNames) {
      const event = this.events.get(name);

      if (EventEmitter.isEvent(event)) {
        event.removeListener(listener);
      }
    }

    return this;
  }

  off(...args) {
    return this.removeListener(...args);
  }

  unsubscribe(...args) {
    return this.removeListener(...args);
  }



  /**
   * Удаляет всех слушателей для указанного события или для всех событий если eventName не указано.
   * @param {(string|Array|RegExp)} [eventName = null] Не обязательно. Имя события, или массив имен, или строка имен разделенных пробелом.
   */
  removeAllListeners(eventName = null) {
    if (!['String', 'Array', 'RegExp'].includes(Object.prototype.toString.call(eventName).slice(8, -1))) {
      eventName = [];
    }

    let eventNames = this.constructor
      .normalize(eventName, this.getEventNames());

    if (!eventNames.length) {
      eventNames = this.getEventNames();
    }

    // Переносим собственное событие "removeListener" в конец
    eventNames = (input => eventNames.filter((item) => item !== input).push(input))('removeListener');

    for (const name of eventNames) {
      const event = this.events.get(name);

      if (EventEmitter.isEvent(event)) {
        event.removeAllListeners();
      }
    }

    return this;
  }

  offAll(...args) {
    return this.removeAllListeners(...args);
  }

  unsubscribeAll(...args) {
    return this.removeAllListeners(...args);
  }



  /**
   * Синхронно вызывает каждого из слушателей, зарегистрированных для события с именем eventName, в том порядке, в котором они были зарегистрированы, передавая каждому предоставленные аргументы.
   * @param {(string|Array|RegExp)} eventName Имя события, или массив имен, или строка имен разделенных пробелом.
   * @param {...*} args
   * @return {boolean} `true`, если хотя бы у одного из событий есть слушатели, иначе `false`.
   */
  emit(eventName, ...args) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.constructor.name}.emit.`);
    }

    if (!['String', 'Array', 'RegExp'].includes(Object.prototype.toString.call(eventName).slice(8, -1))) {
      throw new TypeError(`Параметры (${typeof eventName}) не соответствуют сигнатуре ${this.constructor.name}.emit.`);
    }

    const eventNames = this.constructor
      .normalize(eventName, this.getEventNames());

    let results = [];

    for (const [index, name] of eventNames.entries()) {
      const event = this.events.get(name);

      // Если название события соответствует "error"
      if (name == this.errorEvent) {
        if (!(args[0] instanceof Error)) {
          args[0] = new Error(`Неопределенная ошибка.`);
        }

        // Если нет слушателей для события error выбрасываем исключение
        if (!(EventEmitter.isEvent(event) && event.getListeners().length)) {
          results[index] = false;
          throw args[0];
        }
      }

      else if (!EventEmitter.isEvent(event)) continue;


      if (event.emit.apply(event, args)) {
        results[index] = true;
      }
    }

    return (results.includes(false) ? false : true);
  }

  trigger(...args) {
    return this.emit(...args);
  }

  publish(...args) {
    return this.emit(...args);
  }



  /**
   * Возвращает массив событий.
   * @return {EventEmitter.Event[]}
   */
  getEvents() {
    return [...this.events.values()];
  }



  /**
   * Удаляет событие.
   * @param {(string|Array|RegExp)} eventName Имя события, или массив имен, или строка имен разделенных пробелом.
   */
  removeEvent(eventName) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.constructor.name}.removeEvent.`);
    }

    if (!['String', 'Array', 'RegExp'].includes(Object.prototype.toString.call(eventName).slice(8, -1))) {
      throw new TypeError(`Параметры (${typeof eventName}) не соответствуют сигнатуре метода ${this.constructor.name}.removeEvent.`);
    }

    const eventNames = this.constructor
      .normalize(eventName, this.getEventNames());

    for (const name of eventNames) {
      const event = this.events.get(name);

      if (EventEmitter.isEvent(event)) {
        this.events.delete(name);
      }
    }

    return this;
  }



  /**
   * Возвращает массив имен событий, для которых эмиттер зарегистрировал слушателей.
   * @return {string[]}
   */
  getEventNames() {
    return [...this.events.keys()];
  }

  eventNames() {
    return this.getEventNames();
  }



  /**
   * Возвращает массив слушателей для события с именем eventName.
   * @param {(string|Array|RegExp)} [eventName] Имя события, или массив имен, или строка имен разделенных пробелом.
   * @return {EventEmitter.Listener[]}
   */
  getListeners(eventName) {
    if (!['String', 'Array', 'RegExp'].includes(Object.prototype.toString.call(eventName).slice(8, -1)))
      eventName = [];

    let eventNames = this.constructor
      .normalize(eventName, this.getEventNames());

    if (!eventNames.length) {
      eventNames = this.getEventNames();
    }

    let result = [];

    for (const name of eventNames) {
      const event = this.events.get(name);

      if (EventEmitter.isEvent(event)) {
        result = result.concat(event.getListeners());
      }
    }

    return result;
  }

  listeners(...args) {
    return this.getListeners(...args);
  }



  /**
   * Добавляет одноразовый слушатель для указанного события. При следующем запуске этот слушатель удаляется, а затем вызывается.
   * @param {(string|Array|RegExp)} eventName Имя события, или массив имен, или строка имен разделенных пробелом. По умолчанию 'default'.
   * @param {function} callback Функция обратного вызова.
   */
  addOnceListener(eventName, callback) {
    return this.addListener(eventName, callback, true);
  }

  once(eventName, callback) {
    return this.addListener(eventName, callback, true);
  }



  /**
   * Добавляет функцию в начало массива слушателей для указанного события.
   * @param {(string|Array|RegExp)} eventName Имя события, или массив имен, или строка имен разделенных пробелом.
   * @param {function} callback Функция обратного вызова.
   * @param {boolean} [once=false] Не обязательно. Одноразовый запуск? По умолчанию `false`.
   */
  prependListener(eventName, callback, once = false) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.constructor.name}.prependListener.`);
    }

    if (!['String', 'Array', 'RegExp'].includes(Object.prototype.toString.call(eventName).slice(8, -1))) {
      throw new TypeError(`Параметры (${typeof eventName}) не соответствуют сигнатуре метода ${this.constructor.name}.prependListener.`);
    }

    if (typeof callback !== 'function') {
      throw new TypeError(`Параметры (${typeof eventName}, ${typeof callback}) не соответствуют сигнатуре метода ${this.constructor.name}.prependListener.`);
    }

    const eventNames = this.constructor
      .normalize(eventName, this.getEventNames());

    for (const name of eventNames) {
      let event = this.events.get(name);

      if (!EventEmitter.isEvent(event)) {
        event = EventEmitter.newEvent(name);

        event.emitter = this;

        this.events.set(name, event);
      }

      event.prependListener(callback, once);
    }

    return this;
  }

  prepend(...args) {
    return this.prependListener(...args);
  }



  /**
   * Добавляет одноразовый слушатель, в начало массива слушателей, для указанного события. При следующем запуске этот слушатель удаляется, а затем вызывается.
   * @param {(string|Array|RegExp)} eventName Имя события, или массив имен, или строка имен разделенных пробелом. По умолчанию 'default'.
   * @param {function} callback Функция обратного вызова.
   */
  prependOnceListener(eventName, callback) {
    return this.prependListener(eventName, callback, true);
  }

  prependOnce(eventName, callback) {
    return this.prependListener(eventName, callback, true);
  }



  /**
   * Вызывается при преобразовании объекта в соответствующее примитивное значение.
   * @param {string} hint Строковый аргумент, который передаёт желаемый тип примитива: `string`, `number` или `default`.
   * @return {string}
   */
  [Symbol.toPrimitive](hint) {
    if (hint !== 'string') {
      return null;
    }

    return this.constructor.name;
  }



  /**
   * Возвращает значение текущего объекта.
   * @return {string}
   */
  valueOf() {
    return (this[Symbol.toPrimitive] ? this[Symbol.toPrimitive]() : this.constructor.name);
  }



  /**
   * Геттер для получения строки, представляющей тег объекта.
   * @return {string} Имя класса текущего объекта, используемое в `Object.prototype.toString`.
   */
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }



  /**
   * Возвращает строку, представляющую объект.
   * @return {string}
   */
  toString() {
    return (this[Symbol.toPrimitive] ? this[Symbol.toPrimitive]('string') : this.constructor.name);
  }

};





/**
 * Конструктор `Event` - представляет собой объект для работы с событием.
 * @class               Event
 * @memberof            EventEmitter
 * @version             2.1.3
 * @borrows             Event#getEmitter as Event#getParent
 * @borrows             Event#addListener as Event#subscribe
 * @borrows             Event#addListener as Event#on
 * @borrows             Event#addListener as Event#append
 * @borrows             Event#removeListener as Event#off
 * @borrows             Event#removeListener as Event#unsubscribe
 * @borrows             Event#removeAllListeners as Event#offAll
 * @borrows             Event#removeAllListeners as Event#unsubscribeAll
 * @borrows             Event#emit as Event#trigger
 * @borrows             Event#emit as Event#publish
 * @borrows             Event#addOnceListener as Event#once
 * @borrows             Event#prependListener as Event#prepend
 * @borrows             Event#prependOnceListener as Event#prependOnce
 */
EventEmitter.Event = class Event {

  /**
   * @param {string} eventName Имя события.
   */
  constructor(eventName) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.constructor.name}.`);
    }

    if (!(typeof eventName === 'string' && eventName.trim().length)) {
      throw new TypeError(`Параметры (${typeof eventName}) не соответствуют сигнатуре конструктора ${this.constructor.name}.`);
    }


    /**
     * @private
     * @type {EventEmitter.Emitter}
     */
    Object.defineProperty(this, 'emitter', {
      value: null,
      writable: true
    });


    /**
     * @type {string}
     */
    this.eventName = eventName.trim();


    /**
     * @type {Object[]}
     */
    this.listeners = [];

  }



  /**
   * Возвращает эмиттер, содержащий это событие.
   * @return {EventEmitter.Emitter}
   */
  getEmitter() {
    return (this.emitter ?? null);
  }

  getParent() {
    return this.getEmitter();
  }



  /**
   * Возвращает имя текущего события.
   * @return {string} Имя события.
   */
  getName() {
    return (this.eventName ?? null);
  }



  /**
   * Добавляет слушателя к текущему событию.
   * @param {function} callback Функция обратного вызова.
   * @param {boolean} [once = false] Одноразовый запуск?
   */
  addListener(callback, once = false) {
    const listener = EventEmitter.newListener(callback, once);

    listener.event = this;

    const emitter = this.getEmitter();

    // todo if

    emitter.emit('newListener', this.getName(), callback);

    this.listeners.push(listener);

    return this;
  }

  on(...args) {
    return this.addListener(...args);
  }

  subscribe(...args) {
    return this.addListener(...args);
  }

  append(...args) {
    return this.addListener(...args);
  }



  /**
   * Удаляет указанный слушатель из массива слушателей текущего события.
   * @param {(Object|function)} listener Слушатель или функция обратного вызова
   */
  removeListener(listener) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.constructor.name}.removeListener.`);
    }

    let index = null;

    if (EventEmitter.isListener(listener)) {
      index = this.listeners
        .findIndex(item => item === listener);
    }

    else if (typeof listener === 'function') {
      index = this.listeners
        .findIndex(item => item.callback === listener);
    }

    else throw new TypeError(`Параметры (${typeof listener}) не соответствуют сигнатуре метода ${this.constructor.name}.removeListener.`);

    if (index > -1) {
      const callback = this.listeners[index].callback;

      this.listeners.splice(index, 1);

      const emitter = this.getEmitter();

      // todo if

      emitter.emit('removeListener', this.getName(), callback);
    }

    return this;
  }

  off(...args) {
    return this.removeListener(...args);
  }

  unsubscribe(...args) {
    return this.removeListener(...args);
  }



  /**
   * Удаляет все слушатели текущего события.
   */
  removeAllListeners() {
    for (const listener of this.listeners) {
      const emitter = this.getEmitter();

      // todo if

      emitter.emit('removeListener', this.getName(), listener.callback);
    }

    this.listeners.length = 0;

    return this;
  }

  offAll(...args) {
    return this.removeAllListeners(...args);
  }

  unsubscribeAll(...args) {
    return this.removeAllListeners(...args);
  }



  /**
   * Вызывает все функции обратного вызова, передавая им предоставленные аргументы.
   * @param {...*} args
   * @return {boolean} Возвращает true, если у события есть слушатели, иначе false.
   */
  emit(...args) {
    const listeners = this.getListeners();

    if (!listeners.length) {
      return false;
    }

    const results = [];

    for (const [index, listener] of listeners.entries()) {
      try {
        if (listener.once === true) this.removeListener(listener);

        results[index] = listener.emit.apply(listener, args);
      } catch (error) {
        results[index] = false;

        // todo event name `error`, вынести на уровень выше ?
        if (this.getName() === 'error') {
          throw error;
        }

        else {
          const emitter = this.getEmitter();

          // todo if

          emitter.emit('error', error);
        }
      }
    }

    return (results.includes(false) ? false : true);
  }

  trigger(...args) {
    return this.emit(...args);
  }

  publish(...args) {
    return this.emit(...args);
  }



  /**
   * Возвращает копию массива слушателей текущего события.
   * @return {EventEmitter.Listener[]}
   */
  getListeners() {
    return [...this.listeners]
      .filter(item => typeof item.callback === 'function');
  }



  /**
   * Добавляет одноразовый слушатель к текущему событию. При следующем запуске этот слушатель удаляется, а затем вызывается.
   * @param {function} callback Функция обратного вызова.
   */
  addOnceListener(callback) {
    return this.addListener(callback, true);
  }

  once(...args) {
    return this.addOnceListener(...args);
  }



  /**
   * Добавляет слушателя, в начало массива слушателей, к текущему событию.
   * @param {function} callback Функция обратного вызова.
   * @param {boolean} [once = false] Не обязательно. Одноразовый запуск? По умолчанию false.
   */
  prependListener(callback, once = false) {
    const listener = EventEmitter.newListener(callback, once);

    listener.event = this;

    const emitter = this.getEmitter();

    // todo if

    emitter.emit('newListener', this.getName(), callback);

    this.listeners.unshift(listener);

    return this;
  }

  prepend(...args) {
    return this.prependListener(...args);
  }



  /**
   * Добавляет одноразовый слушатель, в начало массива слушателей, к текущему событию. При следующем запуске этот слушатель удаляется, а затем вызывается.
   * @param {function} callback Функция обратного вызова.
   */
  prependOnceListener(callback) {
    return this.prependListener(callback, true);
  }



  /**
   * Вызывается при преобразовании объекта в соответствующее примитивное значение.
   * @param {string} hint Строковый аргумент, который передаёт желаемый тип примитива: `string`, `number` или `default`.
   * @return {string}
   */
  [Symbol.toPrimitive](hint) {
    if (hint !== 'string') {
      return null;
    }

    return this.constructor.name;
  }



  /**
   * Возвращает значение текущего объекта.
   * @return {string}
   */
  valueOf() {
    return (this[Symbol.toPrimitive] ? this[Symbol.toPrimitive]() : this.constructor.name);
  }



  /**
   * Геттер для получения строки, представляющей тег объекта.
   * @return {string} Имя класса текущего объекта, используемое в `Object.prototype.toString`.
   */
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }



  /**
   * Возвращает строку, представляющую объект.
   * @return {string}
   */
  toString() {
    return (this[Symbol.toPrimitive] ? this[Symbol.toPrimitive]('string') : this.constructor.name);
  }

};





/**
 * Конструктор `EventCallback` - представляет собой объект для работы со слушателем.
 * @class               Listener
 * @memberof            EventEmitter
 * @version             2.1.3
 * @borrows             Event#getEvent as Event#getParent
 * @borrows             Event#emit as Event#trigger
 * @borrows             Event#emit as Event#publish
 */
EventEmitter.Listener = class Listener {

  /**
   * @param {function} callback Функция обратного вызова.
   * @param {boolean} [once = false] Одноразовый запуск?
   */
  constructor(callback, once = false) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.constructor.name}.`);
    }

    if (typeof callback !== 'function') {
      throw new TypeError(`Обратный вызов должен быть функцией.`);
    }


    /**
     * @private
     * @type {EventEmitter.Event}
     */
    Object.defineProperty(this, 'event', {
      value: null,
      writable: true
    });


    /**
     * @private
     * @type {function}
     */
    Object.defineProperty(this, 'callback', {
      value: callback,
      writable: true,
    });


    /**
     * @private
     * @type {boolean}
     */
    Object.defineProperty(this, 'once', {
      value: once === true,
      writable: true
    });

  }



  /**
   * Возвращает эмиттер, содержащий событие, содержащее этот слушатель.
   * @return {EventEmitter.Emitter}
   */
  getEmitter() {
    return (this.getEvent()?.getEmitter() ?? null);
  }



  /**
   * Возвращает событие, содержащее этот слушатель.
   * @return {EventEmitter.Event}
   */
  getEvent() {
    return (this.event ?? null);
  }

  getParent() {
    return this.getEvent();
  }



  /**
   * Вызывает функцию обратного вызова, передавая ей предоставленные аргументы.
   * @param {...*} args
   * @return {boolean} `true`, если есть слушатель, иначе `false`.
   */
  emit(...args) {
    if (typeof this.callback !== 'function') {
      return false;
    }

    this.callback(...args);

    return true;
  }

  trigger(...args) {
    return this.emit(...args);
  }

  publish(...args) {
    return this.emit(...args);
  }



  /**
   * Вызывается при преобразовании объекта в соответствующее примитивное значение.
   * @param {string} hint Строковый аргумент, который передаёт желаемый тип примитива: `string`, `number` или `default`.
   * @return {string}
   */
  [Symbol.toPrimitive](hint) {
    if (hint !== 'string') {
      return null;
    }

    return this.constructor.name;
  }



  /**
   * Возвращает значение текущего объекта.
   * @return {string}
   */
  valueOf() {
    return (this[Symbol.toPrimitive] ? this[Symbol.toPrimitive]() : this.constructor.name);
  }



  /**
   * Геттер для получения строки, представляющей тег объекта.
   * @return {string} Имя класса текущего объекта, используемое в `Object.prototype.toString`.
   */
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }



  /**
   * Возвращает строку, представляющую объект.
   * @return {string}
   */
  toString() {
    return (this[Symbol.toPrimitive] ? this[Symbol.toPrimitive]('string') : this.constructor.name);
  }

};
