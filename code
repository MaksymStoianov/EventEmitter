/**
 * `EventEmitter` - представляет собой объект реализующий работу с событиями.
 * @class EventEmitter
 * @namespace EventEmitter
 * @version 2.0.0
 * @author Maksym Stoianov <stoianov.maksym@gmail.com>
 * @see [Snippet Source](https://script.google.com/home/projects/1YN3YNaA5JaiY7d_0R4Afxg1YwrU2EVi4y86QuqvkWs0o78eKvMWHL7FI/edit)
 * @see [Snippet Documentation](https://apps-script.blog/)
 */
globalThis.EventEmitter = class EventEmitter {
  /**
   * Создает и возвращает эмиттер событий.
   * @param {...*}
   * @return {EventEmitter.Emitter}
   */
  static create(...args) {
    return Reflect.construct(this.Emitter, args);
  }



  /**
   * Создает и возвращает эмиттер событий.
   * @param {...*}
   * @return {EventEmitter.Emitter}
   */
  static createEmitter(...args) {
    return Reflect.construct(this.Emitter, args);
  }



  /**
   * Возвращает `true`, если объект является [`Emitter`](#); иначе, `false`.
   * @param {*} input Объект для проверки.
   * @return {boolean}
   */
  static isEmitter(input) {
    return input instanceof this.Emitter;
  }



  /**
   * Возвращает `true`, если объект является [`Event`](#); иначе, `false`.
   * @param {*} input Объект для проверки.
   * @return {boolean}
   */
  static isEvent(input) {
    return input instanceof this.Event;
  }



  /**
   * Возвращает `true`, если объект является [`Listener`](#); иначе, `false`.
   * @param {*} input Объект для проверки.
   * @return {boolean}
   */
  static isListener(input) {
    return input instanceof this.Listener;
  }



  constructor() {
    throw new Error(`${this.constructor.name} is not a constructor.`);
  }
};





/**
 * Конструктор `Emitter` - представляет собой объект для работы с эмиттером.
 * @class Emitter
 * @memberof EventEmitter
 */
EventEmitter.Emitter = class Emitter {
  /**
   * Приватный метод `_getEventNames()` возвращает коллекцию названия событий.
   * @param {(string|Number|Array|RegExp)} input Имя, или коллекция имен, или строка имен разделенных `пробелом`, или регулярное выражение.
   * @param {string[]} [eventNames=[]] [необязательный] Массив названий событий (для слияния).
   * @return {string[]}
   */
  static _getEventNames(input, eventNames = []) {
    input = (Array.isArray(input) ? input : [input]).flat(Infinity);

    let result = [];

    for (let item of input) {
      if (typeof item == 'string')
        item = item
          .split(/\s+/)
          .filter(item => item.trim() !== ``);

      else if (typeof item == 'number')
        item = [String(item)];

      else if (item instanceof RegExp)
        item = eventNames.filter(name => item.test(name));

      else continue;

      if (item.length)
        result = result.concat(item);
    }

    return result;
  }



  constructor() {
    Object.defineProperty(this, 'events', {
      value: new Map()
    });
  }



  /**
   * Добавляет функцию в конец массива слушателей для указанного события.
   * @param {(string|Array|RegExp)} eventName Имя события, или массив имен, или строка имен разделенных `пробелом`.
   * @param {function} callback Функция обратного вызова.
   * @param {boolean} [once=false] [необязательный] Одноразовый запуск?
   *    По умолчанию `false`.
   * @return {EventEmitter.Emitter}
   */
  addListener(eventName, callback, once = false) {
    if (!arguments.length)
      throw new TypeError(`Параметры () не соответствуют сигнатуре метода ${this}.addListener.`);

    if (![`String`, `Array`, `RegExp`].includes(Object.prototype.toString.call(eventName).slice(8, -1)))
      throw new TypeError(`Параметры (${typeof eventName}) не соответствуют сигнатуре метода ${this}.addListener.`);

    if (typeof callback != 'function')
      throw new TypeError(`Параметры (${typeof eventName}, ${typeof callback}) не соответствуют сигнатуре метода ${this}.addListener.`);

    const eventNames = this.constructor._getEventNames(eventName, this.getEventNames());

    for (const name of eventNames) {
      let event = this.events.get(name);

      if (!EventEmitter.isEvent(event)) {
        event = new EventEmitter.Event(name);

        Object.defineProperty(event, 'emitter', {
          value: this
        });

        this.events.set(name, event);
      }

      event.addListener(callback, once);
    }

    return this;
  }

  on(...args) {
    return this.addListener.apply(this, args);
  }

  subscribe(...args) {
    return this.addListener.apply(this, args);
  }

  append(...args) {
    return this.addListener.apply(this, args);
  }



  /**
   * Удаляет указанный слушатель или функцию обратного вызова из массива слушателей для указанного события.
   * @param {(string|Array|RegExp)} eventName Имя события, или массив имен, или строка имен разделенных `пробелом`.
   * @param {(Listener|function)} listener Слушатель или функция обратного вызова.
   * @return {EventEmitter.Emitter}
   */
  removeListener(eventName, listener) {
    if (!arguments.length)
      throw new TypeError(`Параметры () не соответствуют сигнатуре метода ${this}.removeListener.`);

    if (![`String`, `Array`, `RegExp`].includes(Object.prototype.toString.call(eventName).slice(8, -1)))
      throw new TypeError(`Параметры (${typeof eventName}) не соответствуют сигнатуре метода ${this}.removeListener.`);

    if (!(typeof listener == 'function' || EventEmitter.isListener(listener)))
      throw new TypeError(`Параметры (${typeof eventName}, ${typeof listener}) не соответствуют сигнатуре метода ${this}.removeListener.`);

    const eventNames = this.constructor._getEventNames(eventName, this.getEventNames());

    for (const name of eventNames) {
      const event = this.events.get(name);

      if (EventEmitter.isEvent(event))
        event.removeListener(listener);
    }

    return this;
  }

  off(...args) {
    return this.removeListener.apply(this, args);
  }

  unsubscribe(...args) {
    return this.removeListener.apply(this, args);
  }



  /**
   * Удаляет всех слушателей для указанного события или для всех событий если eventName не указано.
   * @param {(string|Array|RegExp)} [eventName=null] [необязательный] Имя события, или массив имен, или строка имен разделенных `пробелом`.
   * @return {EventEmitter.Emitter}
   */
  removeAllListeners(eventName = null) {
    if (![`String`, `Array`, `RegExp`].includes(Object.prototype.toString.call(eventName).slice(8, -1)))
      eventName = [];

    let eventNames = this.constructor._getEventNames(eventName, this.getEventNames());

    if (!eventNames.length)
      eventNames = this.getEventNames();

    // Переносим собственное событие "removeListener" в конец
    eventNames = [].concat(eventNames.filter(item => item != `removeListener`), `removeListener`);

    for (const name of eventNames) {
      const event = this.events.get(name);

      if (EventEmitter.isEvent(event))
        event.removeAllListeners();
    }

    return this;
  }

  offAll(...args) {
    return this.removeAllListeners.apply(this, args);
  }

  unsubscribeAll(...args) {
    return this.removeAllListeners.apply(this, args);
  }



  /**
   * Синхронно вызывает каждого из слушателей, зарегистрированных для события с именем eventName, в том порядке, в котором они были зарегистрированы, передавая каждому предоставленные аргументы.
   * @param {(string|Array|RegExp)} eventName Имя события, или массив имен, или строка имен разделенных `пробелом`.
   * @param {...*} args
   * @return {boolean} Возвращает `true`, если хотя бы у одного из событий есть слушатели; иначе, `false`.
   */
  emit(eventName, ...args) {
    if (!arguments.length)
      throw new TypeError(`Параметры () не соответствуют сигнатуре метода ${this}.emit.`);

    if (![`String`, `Array`, `RegExp`].includes(Object.prototype.toString.call(eventName).slice(8, -1)))
      throw new TypeError(`Параметры (${typeof eventName}) не соответствуют сигнатуре ${this}.emit.`);

    const eventNames = this.constructor._getEventNames(eventName, this.getEventNames());

    let results = [];

    for (const [index, name] of eventNames.entries()) {
      const event = this.events.get(name);

      if (name === `error`) {
        const error = (Object.prototype.toString.call(args[0]).slice(8, -1) === `Error` ? args[0] : new Error(`Неопределенная ошибка.`));

        // Если нет слушателей для события error выбрасываем исключение
        if (!(EventEmitter.isEvent(event) && event.getListeners().length)) {
          results[index] = false;
          throw error;
        }

        if (event.emit.apply(event, [error]))
          results[index] = true;

        continue;
      }

      if (!EventEmitter.isEvent(event))
        continue;

      if (event.emit.apply(event, args))
        results[index] = true;
    }

    return !!results.includes(false);
  }

  trigger(...args) {
    return this.emit.apply(this, args);
  }

  publish(...args) {
    return this.emit.apply(this, args);
  }



  /**
   * Возвращает массив событий.
   * @return {EventEmitter.Event[]}
   */
  getEvents() {
    return [...this.events].map(item => item[1]);
  }



  /**
   * Удаляет событие.
   * @param {(string|Array|RegExp)} eventName Имя события, или массив имен, или строка имен разделенных `пробелом`.
   * @return {EventEmitter.Emitter}
   */
  removeEvent(eventName) {
    if (!arguments.length)
      throw new TypeError(`Параметры () не соответствуют сигнатуре метода ${this}.removeEvent.`);

    if (![`String`, `Array`, `RegExp`].includes(Object.prototype.toString.call(eventName).slice(8, -1)))
      throw new TypeError(`Параметры (${typeof eventName}) не соответствуют сигнатуре метода ${this}.removeEvent.`);

    const eventNames = this.constructor._getEventNames(eventName, this.getEventNames());

    for (const name of eventNames) {
      const event = this.events.get(name);

      if (EventEmitter.isEvent(event))
        this.events.delete(name);
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

  eventNames(...args) {
    return this.getEventNames.apply(this, args);
  }



  /**
   * Возвращает массив слушателей для события с именем `eventName`.
   * @param {(string|Array|RegExp)} [eventName] Имя события, или массив имен, или строка имен разделенных `пробелом`.
   * @return {EventEmitter.Listener[]}
   */
  getListeners(eventName) {
    if (![`String`, `Array`, `RegExp`].includes(Object.prototype.toString.call(eventName).slice(8, -1)))
      eventName = [];

    let eventNames = this.constructor._getEventNames(eventName, this.getEventNames());

    if (!eventNames.length)
      eventNames = this.getEventNames();

    let result = [];

    for (const name of eventNames) {
      const event = this.events.get(name);

      if (EventEmitter.isEvent(event))
        result = result.concat(event.getListeners());
    }

    return result;
  }

  listeners(...args) {
    return this.getListeners.apply(this, args);
  }



  /**
   * Добавляет одноразовый слушатель для указанного события. При следующем запуске этот слушатель удаляется, а затем вызывается.
   * @param {(string|Array|RegExp)} eventName Имя события, или массив имен, или строка имен разделенных `пробелом`. По умолчанию 'default'.
   * @param {function} callback Функция обратного вызова.
   * @return {EventEmitter.Emitter}
   */
  addOnceListener(eventName, callback) {
    return this.addListener.apply(this, [eventName, callback, true]);
  }

  once(eventName, callback) {
    return this.addListener.apply(this, [eventName, callback, true]);
  }



  /**
   * Добавляет функцию в начало массива слушателей для указанного события.
   * @param {(string|Array|RegExp)} eventName Имя события, или массив имен, или строка имен разделенных `пробелом`.
   * @param {function} callback Функция обратного вызова.
   * @param {boolean} [once=false] [необязательный] Одноразовый запуск?
   *    По умолчанию `false`.
   * @return {EventEmitter.Emitter}
   */
  prependListener(eventName, callback, once = false) {
    if (!arguments.length)
      throw new TypeError(`Параметры () не соответствуют сигнатуре метода ${this}.prependListener.`);

    if (![`String`, `Array`, `RegExp`].includes(Object.prototype.toString.call(eventName).slice(8, -1)))
      throw new TypeError(`Параметры (${typeof eventName}) не соответствуют сигнатуре метода ${this}.prependListener.`);

    if (typeof callback != 'function')
      throw new TypeError(`Параметры (${typeof eventName}, ${typeof callback}) не соответствуют сигнатуре метода ${this}.prependListener.`);

    const eventNames = this.constructor._getEventNames(eventName, this.getEventNames());

    for (const name of eventNames) {
      let event = this.events.get(name);

      if (!EventEmitter.isEvent(event)) {
        event = new EventEmitter.Event(name);

        Object.defineProperty(event, 'emitter', {
          value: this
        });

        this.events.set(name, event);
      }

      event.prependListener(callback, once);
    }

    return this;
  }

  prepend(...args) {
    return this.prependListener.apply(this, args);
  }



  /**
   * Добавляет одноразовый слушатель, в начало массива слушателей, для указанного события. При следующем запуске этот слушатель удаляется, а затем вызывается.
   * @param {(string|Array|RegExp)} eventName Имя события, или массив имен, или строка имен разделенных `пробелом`.
   *    По умолчанию 'default'.
   * @param {function} callback Функция обратного вызова.
   * @return {EventEmitter.Emitter}
   */
  prependOnceListener(eventName, callback) {
    return this.prependListener.apply(this, [eventName, callback, true]);
  }



  /**
   * Возвращает строку, представляющую объект.
   * @return {string}
   */
  toString() {
    return this.constructor.name;
  }
};





/**
 * Конструктор 'event' - представляет собой объект для работы с событием.
 * @class Event
 * @memberof EventEmitter
 */
EventEmitter.Event = class Event {
  /**
   * @param {string} name Имя события.
   */
  constructor(name) {
    if (!arguments.length)
      throw new TypeError(`Параметры () не соответствуют сигнатуре конструктора ${this}.`);

    if (!(typeof name == 'string' && name.trim().length))
      throw new TypeError(`Параметры (${typeof name}) не соответствуют сигнатуре конструктора ${this}.`);

    // Определить свойство
    Object.defineProperty(this, 'name', {
      value: name.trim(),
      writable: true
    });

    Object.defineProperty(this, 'listeners', {
      value: []
    });
  }



  /**
   * Возвращает имя текущего события.
   * @return {string} Имя события.
   */
  getName() {
    return this.name;
  }



  /**
   * Добавляет слушателя к текущему событию.
   * @param {function} callback Функция обратного вызова.
   * @param {boolean} [once] Одноразовый запуск?
   * @return {EventEmitter.Event}
   */
  addListener(callback, once) {
    const listener = new EventEmitter.Listener(callback, once);

    Object.defineProperty(listener, 'event', {
      value: this
    });

    this.emitter.emit('newListener', this.name, callback);

    this.listeners.push(listener);

    return this;
  }

  on(...args) {
    return this.addListener.apply(this, args);
  }

  subscribe(...args) {
    return this.addListener.apply(this, args);
  }

  append(...args) {
    return this.addListener.apply(this, args);
  }



  /**
   * Удаляет указанный слушатель из массива слушателей текущего события.
   * @param {(object|function)} listener Слушатель или функция обратного вызова
   * @return {EventEmitter.Event}
   */
  removeListener(listener) {
    if (!arguments.length)
      throw new TypeError(`Параметры () не соответствуют сигнатуре метода ${this}.removeListener.`);

    let index = null;

    if (EventEmitter.isListener(listener))
      index = this.listeners.findIndex(item => item === listener);

    else if (typeof listener == 'function')
      index = this.listeners.findIndex(item => item.callback === listener);

    else
      throw new TypeError(`Параметры (${typeof listener}) не соответствуют сигнатуре метода ${this}.removeListener.`);

    if (index > -1) {
      const callback = this.listeners[index].callback;

      this.listeners.splice(index, 1);

      this.emitter.emit('removeListener', this.name, callback);
    }

    return this;
  }

  off(...args) {
    return this.removeListener.apply(this, args);
  }

  unsubscribe(...args) {
    return this.removeListener.apply(this, args);
  }



  /**
   * Удаляет все слушатели текущего события.
   * @return {EventEmitter.Event}
   */
  removeAllListeners() {
    for (const listener of this.listeners)
      this.emitter.emit(`removeListener`, this.name, listener.callback);

    this.listeners.length = 0;

    return this;
  }

  offAll(...args) {
    return this.removeAllListeners.apply(this, args);
  }

  unsubscribeAll(...args) {
    return this.removeAllListeners.apply(this, args);
  }



  /**
   * Вызывает все функции обратного вызова, передавая им предоставленные аргументы.
   * @param {...*} args
   * @return {boolean} Возвращает `true`, если у события есть слушатели; иначе, `false`.
   */
  emit(...args) {
    const listeners = this.getListeners();
    
    if (!listeners.length)
      return false;

    let results = [];

    for (const [index, listener] of listeners.entries()) {
      try {
        if (listener.once === true)
          this.removeListener(listener);

        results[index] = listener.emit
          .apply(listener, args);
      }
      catch (error) {
        results[index] = false;

        if (this.name === `error`)
          throw error;

        else this.emitter.emit(`error`, error);
      }
    }

    return results
      .includes(false) ? false : true;
  }

  trigger(...args) {
    return this.emit.apply(this, args);
  }

  publish(...args) {
    return this.emit.apply(this, args);
  }



  /**
   * Возвращает копию массива слушателей текущего события.
   * @return {EventEmitter.Listener[]}
   */
  getListeners() {
    return [...this.listeners].filter(item => typeof item.callback == 'function');
  }



  /**
   * Добавляет одноразовый слушатель к текущему событию. При следующем запуске этот слушатель удаляется, а затем вызывается.
   * @param {function} callback Функция обратного вызова.
   * @return {EventEmitter.Event}
   */
  addOnceListener(callback) {
    return this.addListener.apply(this, [callback, true]);
  }

  once(...args) {
    return this.addOnceListener.apply(this, args);
  }



  /**
   * Добавляет слушателя, в начало массива слушателей, к текущему событию.
   * @param {function} callback Функция обратного вызова.
   * @param {boolean} [once] [необязательный] Одноразовый запуск?
   *    По умолчанию false.
   * @return {EventEmitter.Event}
   */
  prependListener(callback, once) {
    const listener = new EventEmitter.Listener(callback, once);

    Object.defineProperty(listener, 'event', {
      value: this
    });

    this.emitter.emit('newListener', this.name, callback);

    this.listeners.unshift(listener);

    return this;
  }

  prepend(...args) {
    return this.prependListener.apply(this, args);
  }



  /**
   * Добавляет одноразовый слушатель, в начало массива слушателей, к текущему событию. При следующем запуске этот слушатель удаляется, а затем вызывается.
   * @param {function} callback Функция обратного вызова.
   * @return {EventEmitter.Emitter}
   */
  prependOnceListener(callback) {
    return this.prependListener.apply(this, [callback, true]);
  }



  /**
   * Возвращает эмиттер, содержащий это событие.
   * @return {EventEmitter.Emitter}
   */
  getParent() {
    return this.emitter;
  }



  /**
   * Возвращает строку, представляющую объект.
   * @return {string}
   */
  toString() {
    return this.constructor.name;
  }
};





/**
 * Конструктор `Listener` - представляет собой объект для работы со слушателем.
 * @class Listener
 * @memberof EventEmitter
 */
EventEmitter.Listener = class Listener {
  /**
   * @param {function} callback Функция обратного вызова.
   * @param {boolean} [once] Одноразовый запуск?
   */
  constructor(callback, once) {
    if (!arguments.length)
      throw new TypeError(`Параметры () не соответствуют сигнатуре конструктора ${this}.`);

    if (typeof callback != 'function')
      throw new TypeError(`Параметры (${typeof callback}) не соответствуют сигнатуре конструктора ${this}.`);

    // Определить свойство
    Object.defineProperty(this, 'callback', {
      value: callback,
      writable: true
    });

    Object.defineProperty(this, 'once', {
      value: once === true
    });
  }



  /**
   * Вызывает функцию обратного вызова, передавая ей предоставленные аргументы.
   * @param {...*} args
   * @return {boolean} Возвращает `true`, если есть слушатель; иначе, `false`.
   */
  emit(...args) {
    if (typeof this.callback != 'function')
      return false

    this.callback.apply(this, args);

    return true;
  }

  trigger(...args) {
    return this.emit.apply(this, args);
  }

  publish(...args) {
    return this.emit.apply(this, args);
  }



  /**
   * Возвращает событие, содержащее этот слушатель.
   * @return {EventEmitter.Event}
   */
  getParent() {
    return this.event;
  }



  /**
   * Возвращает строку, представляющую объект.
   * @return {string}
   */
  toString() {
    return this.constructor.name;
  }
};
