/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/about/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/scrollreveal/dist/scrollreveal.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/////    /////    /////    /////
/////    /////    /////    /////
/////    /////    /////    /////
/////    /////    /////    /////
/////             /////    /////
/////             /////    /////
/////    /////    /////    /////
/////    /////    /////    /////
         /////    /////
         /////    /////
/////    /////    /////    /////
/////    /////    /////    /////
/////    /////    /////    /////
/////    /////    /////    /////

/**
 * ScrollReveal
 * ------------
 * Version : 3.3.6
 * Website : scrollrevealjs.org
 * Repo    : github.com/jlmakes/scrollreveal.js
 * Author  : Julian Lloyd (@jlmakes)
 */

;(function () {
  'use strict'

  var sr
  var _requestAnimationFrame

  function ScrollReveal (config) {
    // Support instantiation without the `new` keyword.
    if (typeof this === 'undefined' || Object.getPrototypeOf(this) !== ScrollReveal.prototype) {
      return new ScrollReveal(config)
    }

    sr = this // Save reference to instance.
    sr.version = '3.3.6'
    sr.tools = new Tools() // *required utilities

    if (sr.isSupported()) {
      sr.tools.extend(sr.defaults, config || {})

      sr.defaults.container = _resolveContainer(sr.defaults)

      sr.store = {
        elements: {},
        containers: []
      }

      sr.sequences = {}
      sr.history = []
      sr.uid = 0
      sr.initialized = false
    } else if (typeof console !== 'undefined' && console !== null) {
      // Note: IE9 only supports console if devtools are open.
      console.log('ScrollReveal is not supported in this browser.')
    }

    return sr
  }

  /**
   * Configuration
   * -------------
   * This object signature can be passed directly to the ScrollReveal constructor,
   * or as the second argument of the `reveal()` method.
   */

  ScrollReveal.prototype.defaults = {
    // 'bottom', 'left', 'top', 'right'
    origin: 'bottom',

    // Can be any valid CSS distance, e.g. '5rem', '10%', '20vw', etc.
    distance: '20px',

    // Time in milliseconds.
    duration: 500,
    delay: 0,

    // Starting angles in degrees, will transition from these values to 0 in all axes.
    rotate: { x: 0, y: 0, z: 0 },

    // Starting opacity value, before transitioning to the computed opacity.
    opacity: 0,

    // Starting scale value, will transition from this value to 1
    scale: 0.9,

    // Accepts any valid CSS easing, e.g. 'ease', 'ease-in-out', 'linear', etc.
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',

    // `<html>` is the default reveal container. You can pass either:
    // DOM Node, e.g. document.querySelector('.fooContainer')
    // Selector, e.g. '.fooContainer'
    container: window.document.documentElement,

    // true/false to control reveal animations on mobile.
    mobile: true,

    // true:  reveals occur every time elements become visible
    // false: reveals occur once as elements become visible
    reset: false,

    // 'always' — delay for all reveal animations
    // 'once'   — delay only the first time reveals occur
    // 'onload' - delay only for animations triggered by first load
    useDelay: 'always',

    // Change when an element is considered in the viewport. The default value
    // of 0.20 means 20% of an element must be visible for its reveal to occur.
    viewFactor: 0.2,

    // Pixel values that alter the container boundaries.
    // e.g. Set `{ top: 48 }`, if you have a 48px tall fixed toolbar.
    // --
    // Visual Aid: https://scrollrevealjs.org/assets/viewoffset.png
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },

    // Callbacks that fire for each triggered element reveal, and reset.
    beforeReveal: function (domEl) {},
    beforeReset: function (domEl) {},

    // Callbacks that fire for each completed element reveal, and reset.
    afterReveal: function (domEl) {},
    afterReset: function (domEl) {}
  }

  /**
   * Check if client supports CSS Transform and CSS Transition.
   * @return {boolean}
   */
  ScrollReveal.prototype.isSupported = function () {
    var style = document.documentElement.style
    return 'WebkitTransition' in style && 'WebkitTransform' in style ||
      'transition' in style && 'transform' in style
  }

  /**
   * Creates a reveal set, a group of elements that will animate when they
   * become visible. If [interval] is provided, a new sequence is created
   * that will ensure elements reveal in the order they appear in the DOM.
   *
   * @param {Node|NodeList|string} [target]   The node, node list or selector to use for animation.
   * @param {Object}               [config]   Override the defaults for this reveal set.
   * @param {number}               [interval] Time between sequenced element animations (milliseconds).
   * @param {boolean}              [sync]     Used internally when updating reveals for async content.
   *
   * @return {Object} The current ScrollReveal instance.
   */
  ScrollReveal.prototype.reveal = function (target, config, interval, sync) {
    var container
    var elements
    var elem
    var elemId
    var sequence
    var sequenceId

    // No custom configuration was passed, but a sequence interval instead.
    // let’s shuffle things around to make sure everything works.
    if (config !== undefined && typeof config === 'number') {
      interval = config
      config = {}
    } else if (config === undefined || config === null) {
      config = {}
    }

    container = _resolveContainer(config)
    elements = _getRevealElements(target, container)

    if (!elements.length) {
      console.log('ScrollReveal: reveal on "' + target + '" failed, no elements found.')
      return sr
    }

    // Prepare a new sequence if an interval is passed.
    if (interval && typeof interval === 'number') {
      sequenceId = _nextUid()

      sequence = sr.sequences[sequenceId] = {
        id: sequenceId,
        interval: interval,
        elemIds: [],
        active: false
      }
    }

    // Begin main loop to configure ScrollReveal elements.
    for (var i = 0; i < elements.length; i++) {
      // Check if the element has already been configured and grab it from the store.
      elemId = elements[i].getAttribute('data-sr-id')
      if (elemId) {
        elem = sr.store.elements[elemId]
      } else {
        // Otherwise, let’s do some basic setup.
        elem = {
          id: _nextUid(),
          domEl: elements[i],
          seen: false,
          revealing: false
        }
        elem.domEl.setAttribute('data-sr-id', elem.id)
      }

      // Sequence only setup
      if (sequence) {
        elem.sequence = {
          id: sequence.id,
          index: sequence.elemIds.length
        }

        sequence.elemIds.push(elem.id)
      }

      // New or existing element, it’s time to update its configuration, styles,
      // and send the updates to our store.
      _configure(elem, config, container)
      _style(elem)
      _updateStore(elem)

      // We need to make sure elements are set to visibility: visible, even when
      // on mobile and `config.mobile === false`, or if unsupported.
      if (sr.tools.isMobile() && !elem.config.mobile || !sr.isSupported()) {
        elem.domEl.setAttribute('style', elem.styles.inline)
        elem.disabled = true
      } else if (!elem.revealing) {
        // Otherwise, proceed normally.
        elem.domEl.setAttribute('style',
          elem.styles.inline +
          elem.styles.transform.initial
        )
      }
    }

    // Each `reveal()` is recorded so that when calling `sync()` while working
    // with asynchronously loaded content, it can re-trace your steps but with
    // all your new elements now in the DOM.

    // Since `reveal()` is called internally by `sync()`, we don’t want to
    // record or intiialize each reveal during syncing.
    if (!sync && sr.isSupported()) {
      _record(target, config, interval)

      // We push initialization to the event queue using setTimeout, so that we can
      // give ScrollReveal room to process all reveal calls before putting things into motion.
      // --
      // Philip Roberts - What the heck is the event loop anyway? (JSConf EU 2014)
      // https://www.youtube.com/watch?v=8aGhZQkoFbQ
      if (sr.initTimeout) {
        window.clearTimeout(sr.initTimeout)
      }
      sr.initTimeout = window.setTimeout(_init, 0)
    }

    return sr
  }

  /**
   * Re-runs `reveal()` for each record stored in history, effectively capturing
   * any content loaded asynchronously that matches existing reveal set targets.
   * @return {Object} The current ScrollReveal instance.
   */
  ScrollReveal.prototype.sync = function () {
    if (sr.history.length && sr.isSupported()) {
      for (var i = 0; i < sr.history.length; i++) {
        var record = sr.history[i]
        sr.reveal(record.target, record.config, record.interval, true)
      }
      _init()
    } else {
      console.log('ScrollReveal: sync failed, no reveals found.')
    }
    return sr
  }

  /**
   * Private Methods
   * ---------------
   */

  function _resolveContainer (config) {
    if (config && config.container) {
      if (typeof config.container === 'string') {
        return window.document.documentElement.querySelector(config.container)
      } else if (sr.tools.isNode(config.container)) {
        return config.container
      } else {
        console.log('ScrollReveal: invalid container "' + config.container + '" provided.')
        console.log('ScrollReveal: falling back to default container.')
      }
    }
    return sr.defaults.container
  }

  /**
   * check to see if a node or node list was passed in as the target,
   * otherwise query the container using target as a selector.
   *
   * @param {Node|NodeList|string} [target]    client input for reveal target.
   * @param {Node}                 [container] parent element for selector queries.
   *
   * @return {array} elements to be revealed.
   */
  function _getRevealElements (target, container) {
    if (typeof target === 'string') {
      return Array.prototype.slice.call(container.querySelectorAll(target))
    } else if (sr.tools.isNode(target)) {
      return [target]
    } else if (sr.tools.isNodeList(target)) {
      return Array.prototype.slice.call(target)
    }
    return []
  }

  /**
   * A consistent way of creating unique IDs.
   * @returns {number}
   */
  function _nextUid () {
    return ++sr.uid
  }

  function _configure (elem, config, container) {
    // If a container was passed as a part of the config object,
    // let’s overwrite it with the resolved container passed in.
    if (config.container) config.container = container
    // If the element hasn’t already been configured, let’s use a clone of the
    // defaults extended by the configuration passed as the second argument.
    if (!elem.config) {
      elem.config = sr.tools.extendClone(sr.defaults, config)
    } else {
      // Otherwise, let’s use a clone of the existing element configuration extended
      // by the configuration passed as the second argument.
      elem.config = sr.tools.extendClone(elem.config, config)
    }

    // Infer CSS Transform axis from origin string.
    if (elem.config.origin === 'top' || elem.config.origin === 'bottom') {
      elem.config.axis = 'Y'
    } else {
      elem.config.axis = 'X'
    }
  }

  function _style (elem) {
    var computed = window.getComputedStyle(elem.domEl)

    if (!elem.styles) {
      elem.styles = {
        transition: {},
        transform: {},
        computed: {}
      }

      // Capture any existing inline styles, and add our visibility override.
      // --
      // See section 4.2. in the Documentation:
      // https://github.com/jlmakes/scrollreveal.js#42-improve-user-experience
      elem.styles.inline = elem.domEl.getAttribute('style') || ''
      elem.styles.inline += '; visibility: visible; '

      // grab the elements existing opacity.
      elem.styles.computed.opacity = computed.opacity

      // grab the elements existing transitions.
      if (!computed.transition || computed.transition === 'all 0s ease 0s') {
        elem.styles.computed.transition = ''
      } else {
        elem.styles.computed.transition = computed.transition + ', '
      }
    }

    // Create transition styles
    elem.styles.transition.instant = _generateTransition(elem, 0)
    elem.styles.transition.delayed = _generateTransition(elem, elem.config.delay)

    // Generate transform styles, first with the webkit prefix.
    elem.styles.transform.initial = ' -webkit-transform:'
    elem.styles.transform.target = ' -webkit-transform:'
    _generateTransform(elem)

    // And again without any prefix.
    elem.styles.transform.initial += 'transform:'
    elem.styles.transform.target += 'transform:'
    _generateTransform(elem)
  }

  function _generateTransition (elem, delay) {
    var config = elem.config

    return '-webkit-transition: ' + elem.styles.computed.transition +
      '-webkit-transform ' + config.duration / 1000 + 's ' +
      config.easing + ' ' +
      delay / 1000 + 's, opacity ' +
      config.duration / 1000 + 's ' +
      config.easing + ' ' +
      delay / 1000 + 's; ' +

      'transition: ' + elem.styles.computed.transition +
      'transform ' + config.duration / 1000 + 's ' +
      config.easing + ' ' +
      delay / 1000 + 's, opacity ' +
      config.duration / 1000 + 's ' +
      config.easing + ' ' +
      delay / 1000 + 's; '
  }

  function _generateTransform (elem) {
    var config = elem.config
    var cssDistance
    var transform = elem.styles.transform

    // Let’s make sure our our pixel distances are negative for top and left.
    // e.g. origin = 'top' and distance = '25px' starts at `top: -25px` in CSS.
    if (config.origin === 'top' || config.origin === 'left') {
      cssDistance = /^-/.test(config.distance)
        ? config.distance.substr(1)
        : '-' + config.distance
    } else {
      cssDistance = config.distance
    }

    if (parseInt(config.distance)) {
      transform.initial += ' translate' + config.axis + '(' + cssDistance + ')'
      transform.target += ' translate' + config.axis + '(0)'
    }
    if (config.scale) {
      transform.initial += ' scale(' + config.scale + ')'
      transform.target += ' scale(1)'
    }
    if (config.rotate.x) {
      transform.initial += ' rotateX(' + config.rotate.x + 'deg)'
      transform.target += ' rotateX(0)'
    }
    if (config.rotate.y) {
      transform.initial += ' rotateY(' + config.rotate.y + 'deg)'
      transform.target += ' rotateY(0)'
    }
    if (config.rotate.z) {
      transform.initial += ' rotateZ(' + config.rotate.z + 'deg)'
      transform.target += ' rotateZ(0)'
    }
    transform.initial += '; opacity: ' + config.opacity + ';'
    transform.target += '; opacity: ' + elem.styles.computed.opacity + ';'
  }

  function _updateStore (elem) {
    var container = elem.config.container

    // If this element’s container isn’t already in the store, let’s add it.
    if (container && sr.store.containers.indexOf(container) === -1) {
      sr.store.containers.push(elem.config.container)
    }

    // Update the element stored with our new element.
    sr.store.elements[elem.id] = elem
  }

  function _record (target, config, interval) {
    // Save the `reveal()` arguments that triggered this `_record()` call, so we
    // can re-trace our steps when calling the `sync()` method.
    var record = {
      target: target,
      config: config,
      interval: interval
    }
    sr.history.push(record)
  }

  function _init () {
    if (sr.isSupported()) {
      // Initial animate call triggers valid reveal animations on first load.
      // Subsequent animate calls are made inside the event handler.
      _animate()

      // Then we loop through all container nodes in the store and bind event
      // listeners to each.
      for (var i = 0; i < sr.store.containers.length; i++) {
        sr.store.containers[i].addEventListener('scroll', _handler)
        sr.store.containers[i].addEventListener('resize', _handler)
      }

      // Let’s also do a one-time binding of window event listeners.
      if (!sr.initialized) {
        window.addEventListener('scroll', _handler)
        window.addEventListener('resize', _handler)
        sr.initialized = true
      }
    }
    return sr
  }

  function _handler () {
    _requestAnimationFrame(_animate)
  }

  function _setActiveSequences () {
    var active
    var elem
    var elemId
    var sequence

    // Loop through all sequences
    sr.tools.forOwn(sr.sequences, function (sequenceId) {
      sequence = sr.sequences[sequenceId]
      active = false

      // For each sequenced elemenet, let’s check visibility and if
      // any are visible, set it’s sequence to active.
      for (var i = 0; i < sequence.elemIds.length; i++) {
        elemId = sequence.elemIds[i]
        elem = sr.store.elements[elemId]
        if (_isElemVisible(elem) && !active) {
          active = true
        }
      }

      sequence.active = active
    })
  }

  function _animate () {
    var delayed
    var elem

    _setActiveSequences()

    // Loop through all elements in the store
    sr.tools.forOwn(sr.store.elements, function (elemId) {
      elem = sr.store.elements[elemId]
      delayed = _shouldUseDelay(elem)

      // Let’s see if we should revealand if so,
      // trigger the `beforeReveal` callback and
      // determine whether or not to use delay.
      if (_shouldReveal(elem)) {
        elem.config.beforeReveal(elem.domEl)
        if (delayed) {
          elem.domEl.setAttribute('style',
            elem.styles.inline +
            elem.styles.transform.target +
            elem.styles.transition.delayed
          )
        } else {
          elem.domEl.setAttribute('style',
            elem.styles.inline +
            elem.styles.transform.target +
            elem.styles.transition.instant
          )
        }

        // Let’s queue the `afterReveal` callback
        // and mark the element as seen and revealing.
        _queueCallback('reveal', elem, delayed)
        elem.revealing = true
        elem.seen = true

        if (elem.sequence) {
          _queueNextInSequence(elem, delayed)
        }
      } else if (_shouldReset(elem)) {
        //Otherwise reset our element and
        // trigger the `beforeReset` callback.
        elem.config.beforeReset(elem.domEl)
        elem.domEl.setAttribute('style',
          elem.styles.inline +
          elem.styles.transform.initial +
          elem.styles.transition.instant
        )
        // And queue the `afterReset` callback.
        _queueCallback('reset', elem)
        elem.revealing = false
      }
    })
  }

  function _queueNextInSequence (elem, delayed) {
    var elapsed = 0
    var delay = 0
    var sequence = sr.sequences[elem.sequence.id]

    // We’re processing a sequenced element, so let's block other elements in this sequence.
    sequence.blocked = true

    // Since we’re triggering animations a part of a sequence after animations on first load,
    // we need to check for that condition and explicitly add the delay to our timer.
    if (delayed && elem.config.useDelay === 'onload') {
      delay = elem.config.delay
    }

    // If a sequence timer is already running, capture the elapsed time and clear it.
    if (elem.sequence.timer) {
      elapsed = Math.abs(elem.sequence.timer.started - new Date())
      window.clearTimeout(elem.sequence.timer)
    }

    // Start a new timer.
    elem.sequence.timer = { started: new Date() }
    elem.sequence.timer.clock = window.setTimeout(function () {
      // Sequence interval has passed, so unblock the sequence and re-run the handler.
      sequence.blocked = false
      elem.sequence.timer = null
      _handler()
    }, Math.abs(sequence.interval) + delay - elapsed)
  }

  function _queueCallback (type, elem, delayed) {
    var elapsed = 0
    var duration = 0
    var callback = 'after'

    // Check which callback we’re working with.
    switch (type) {
      case 'reveal':
        duration = elem.config.duration
        if (delayed) {
          duration += elem.config.delay
        }
        callback += 'Reveal'
        break

      case 'reset':
        duration = elem.config.duration
        callback += 'Reset'
        break
    }

    // If a timer is already running, capture the elapsed time and clear it.
    if (elem.timer) {
      elapsed = Math.abs(elem.timer.started - new Date())
      window.clearTimeout(elem.timer.clock)
    }

    // Start a new timer.
    elem.timer = { started: new Date() }
    elem.timer.clock = window.setTimeout(function () {
      // The timer completed, so let’s fire the callback and null the timer.
      elem.config[callback](elem.domEl)
      elem.timer = null
    }, duration - elapsed)
  }

  function _shouldReveal (elem) {
    if (elem.sequence) {
      var sequence = sr.sequences[elem.sequence.id]
      return sequence.active &&
        !sequence.blocked &&
        !elem.revealing &&
        !elem.disabled
    }
    return _isElemVisible(elem) &&
      !elem.revealing &&
      !elem.disabled
  }

  function _shouldUseDelay (elem) {
    var config = elem.config.useDelay
    return config === 'always' ||
      (config === 'onload' && !sr.initialized) ||
      (config === 'once' && !elem.seen)
  }

  function _shouldReset (elem) {
    if (elem.sequence) {
      var sequence = sr.sequences[elem.sequence.id]
      return !sequence.active &&
        elem.config.reset &&
        elem.revealing &&
        !elem.disabled
    }
    return !_isElemVisible(elem) &&
      elem.config.reset &&
      elem.revealing &&
      !elem.disabled
  }

  function _getContainer (container) {
    return {
      width: container.clientWidth,
      height: container.clientHeight
    }
  }

  function _getScrolled (container) {
    // Return the container scroll values, plus the its offset.
    if (container && container !== window.document.documentElement) {
      var offset = _getOffset(container)
      return {
        x: container.scrollLeft + offset.left,
        y: container.scrollTop + offset.top
      }
    } else {
      // Otherwise, default to the window object’s scroll values.
      return {
        x: window.pageXOffset,
        y: window.pageYOffset
      }
    }
  }

  function _getOffset (domEl) {
    var offsetTop = 0
    var offsetLeft = 0

      // Grab the element’s dimensions.
    var offsetHeight = domEl.offsetHeight
    var offsetWidth = domEl.offsetWidth

    // Now calculate the distance between the element and its parent, then
    // again for the parent to its parent, and again etc... until we have the
    // total distance of the element to the document’s top and left origin.
    do {
      if (!isNaN(domEl.offsetTop)) {
        offsetTop += domEl.offsetTop
      }
      if (!isNaN(domEl.offsetLeft)) {
        offsetLeft += domEl.offsetLeft
      }
      domEl = domEl.offsetParent
    } while (domEl)

    return {
      top: offsetTop,
      left: offsetLeft,
      height: offsetHeight,
      width: offsetWidth
    }
  }

  function _isElemVisible (elem) {
    var offset = _getOffset(elem.domEl)
    var container = _getContainer(elem.config.container)
    var scrolled = _getScrolled(elem.config.container)
    var vF = elem.config.viewFactor

      // Define the element geometry.
    var elemHeight = offset.height
    var elemWidth = offset.width
    var elemTop = offset.top
    var elemLeft = offset.left
    var elemBottom = elemTop + elemHeight
    var elemRight = elemLeft + elemWidth

    return confirmBounds() || isPositionFixed()

    function confirmBounds () {
      // Define the element’s functional boundaries using its view factor.
      var top = elemTop + elemHeight * vF
      var left = elemLeft + elemWidth * vF
      var bottom = elemBottom - elemHeight * vF
      var right = elemRight - elemWidth * vF

      // Define the container functional boundaries using its view offset.
      var viewTop = scrolled.y + elem.config.viewOffset.top
      var viewLeft = scrolled.x + elem.config.viewOffset.left
      var viewBottom = scrolled.y - elem.config.viewOffset.bottom + container.height
      var viewRight = scrolled.x - elem.config.viewOffset.right + container.width

      return top < viewBottom &&
        bottom > viewTop &&
        left < viewRight &&
        right > viewLeft
    }

    function isPositionFixed () {
      return (window.getComputedStyle(elem.domEl).position === 'fixed')
    }
  }

  /**
   * Utilities
   * ---------
   */

  function Tools () {}

  Tools.prototype.isObject = function (object) {
    return object !== null && typeof object === 'object' && object.constructor === Object
  }

  Tools.prototype.isNode = function (object) {
    return typeof window.Node === 'object'
      ? object instanceof window.Node
      : object && typeof object === 'object' &&
        typeof object.nodeType === 'number' &&
        typeof object.nodeName === 'string'
  }

  Tools.prototype.isNodeList = function (object) {
    var prototypeToString = Object.prototype.toString.call(object)
    var regex = /^\[object (HTMLCollection|NodeList|Object)\]$/

    return typeof window.NodeList === 'object'
      ? object instanceof window.NodeList
      : object && typeof object === 'object' &&
        regex.test(prototypeToString) &&
        typeof object.length === 'number' &&
        (object.length === 0 || this.isNode(object[0]))
  }

  Tools.prototype.forOwn = function (object, callback) {
    if (!this.isObject(object)) {
      throw new TypeError('Expected "object", but received "' + typeof object + '".')
    } else {
      for (var property in object) {
        if (object.hasOwnProperty(property)) {
          callback(property)
        }
      }
    }
  }

  Tools.prototype.extend = function (target, source) {
    this.forOwn(source, function (property) {
      if (this.isObject(source[property])) {
        if (!target[property] || !this.isObject(target[property])) {
          target[property] = {}
        }
        this.extend(target[property], source[property])
      } else {
        target[property] = source[property]
      }
    }.bind(this))
    return target
  }

  Tools.prototype.extendClone = function (target, source) {
    return this.extend(this.extend({}, target), source)
  }

  Tools.prototype.isMobile = function () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }

  /**
   * Polyfills
   * --------
   */

  _requestAnimationFrame = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }

  /**
   * Module Wrapper
   * --------------
   */
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return ScrollReveal
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScrollReveal
  } else {
    window.ScrollReveal = ScrollReveal
  }
})();


/***/ }),

/***/ "./src/about/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_scroll__ = __webpack_require__("./src/scripts/scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_navOnMobile__ = __webpack_require__("./src/scripts/navOnMobile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_userfeeds_scss__ = __webpack_require__("./src/styles/userfeeds.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_userfeeds_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_userfeeds_scss__);





if (document.readyState === 'complete') {
  init();
} else {
  window.addEventListener('load', init);
}

function init() {
  Object(__WEBPACK_IMPORTED_MODULE_0__scripts_scroll__["a" /* default */])();
  Object(__WEBPACK_IMPORTED_MODULE_1__scripts_navOnMobile__["a" /* default */])();
}

/***/ }),

/***/ "./src/scripts/navOnMobile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initNavOnMobile;

function initNavOnMobile() {
  let $button = document.querySelector('.js-mobileMenu');

  $button.addEventListener('click', function (e) {
    e.preventDefault();

    let target = $button.getAttribute('data-target');

    if (target != undefined && target != "") {
      $button.classList.toggle('is-active');
      document.getElementById(target).classList.toggle('is-active');
    }
  });
}

/***/ }),

/***/ "./src/scripts/scroll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initScrollReveal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrollreveal__ = __webpack_require__("./node_modules/scrollreveal/dist/scrollreveal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scrollreveal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_scrollreveal__);


function initScrollReveal() {
  window.sr = __WEBPACK_IMPORTED_MODULE_0_scrollreveal___default()({ duration: 700, viewFactor: 0.4 });

  if (sr.isSupported()) {
    document.documentElement.classList.add('sr');

    sr.reveal('.anim-fade', { distance: '0px', scale: 1, duration: 10000 });
    sr.reveal('.anim-fadeBottom', { origin: "bottom", scale: 1, distance: '10px', easing: 'ease-in', duration: 300 });
    sr.reveal('.anim-fadeRight', { origin: "right" });
    sr.reveal('.anim-fadeLeft', { origin: "left", scale: 1, distance: '20px', easing: 'cubic-bezier(0.6, 0.3, 0.1, 1)' });
    sr.reveal('.anim-fadeTop', { origin: "top" });
    sr.reveal('.anim-backToFront', { scale: 0.5 });
    sr.reveal('.anim-frontToBack', { scale: 1.2 });
  } else {
    document.documentElement.classList.remove('sr');
  }
}

/***/ }),

/***/ "./src/styles/userfeeds.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDlhYzJhNzZiZDc4ODU5YjI5NWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Njcm9sbHJldmVhbC9kaXN0L3Njcm9sbHJldmVhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWJvdXQvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbmF2T25Nb2JpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvdXNlcmZlZWRzLnNjc3M/MjgxOCJdLCJuYW1lcyI6WyJkb2N1bWVudCIsInJlYWR5U3RhdGUiLCJpbml0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbCIsIm5hdk9uTW9iaWxlIiwiaW5pdE5hdk9uTW9iaWxlIiwiJGJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ1bmRlZmluZWQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJnZXRFbGVtZW50QnlJZCIsImluaXRTY3JvbGxSZXZlYWwiLCJzciIsIlNjcm9sbFJldmVhbCIsImR1cmF0aW9uIiwidmlld0ZhY3RvciIsImlzU3VwcG9ydGVkIiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkIiwicmV2ZWFsIiwiZGlzdGFuY2UiLCJzY2FsZSIsIm9yaWdpbiIsImVhc2luZyIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUM7QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFBQTtBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUMzMUJEO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSUEsU0FBU0MsVUFBVCxLQUF3QixVQUE1QixFQUF3QztBQUN0Q0M7QUFDRCxDQUZELE1BRU87QUFDTEMsU0FBT0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0NGLElBQWhDO0FBQ0Q7O0FBRUQsU0FBU0EsSUFBVCxHQUFnQjtBQUNkRyxFQUFBLHdFQUFBQTtBQUNBQyxFQUFBLDZFQUFBQTtBQUNELEM7Ozs7Ozs7Ozs7QUNiYyxTQUFTQyxlQUFULEdBQTJCO0FBQ3hDLE1BQUlDLFVBQVVSLFNBQVNTLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQWQ7O0FBRUFELFVBQVFKLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQVNNLENBQVQsRUFBWTtBQUMxQ0EsTUFBRUMsY0FBRjs7QUFFQSxRQUFJQyxTQUFTSixRQUFRSyxZQUFSLENBQXFCLGFBQXJCLENBQWI7O0FBRUEsUUFBSUQsVUFBVUUsU0FBVixJQUF1QkYsVUFBVSxFQUFyQyxFQUF5QztBQUN2Q0osY0FBUU8sU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsV0FBekI7QUFDQWhCLGVBQVNpQixjQUFULENBQXdCTCxNQUF4QixFQUFnQ0csU0FBaEMsQ0FBMENDLE1BQTFDLENBQWlELFdBQWpEO0FBQ0Q7QUFDSixHQVREO0FBVUQsQzs7Ozs7Ozs7Ozs7QUNkRDs7QUFFZSxTQUFTRSxnQkFBVCxHQUE0QjtBQUN6Q2YsU0FBT2dCLEVBQVAsR0FBWSxvREFBQUMsQ0FBYSxFQUFFQyxVQUFVLEdBQVosRUFBaUJDLFlBQVksR0FBN0IsRUFBYixDQUFaOztBQUVBLE1BQUlILEdBQUdJLFdBQUgsRUFBSixFQUFxQjtBQUNuQnZCLGFBQVN3QixlQUFULENBQXlCVCxTQUF6QixDQUFtQ1UsR0FBbkMsQ0FBdUMsSUFBdkM7O0FBRUFOLE9BQUdPLE1BQUgsQ0FBVSxZQUFWLEVBQXdCLEVBQUVDLFVBQVUsS0FBWixFQUFtQkMsT0FBTyxDQUExQixFQUE2QlAsVUFBVSxLQUF2QyxFQUF4QjtBQUNBRixPQUFHTyxNQUFILENBQVUsa0JBQVYsRUFBOEIsRUFBQ0csUUFBUSxRQUFULEVBQW1CRCxPQUFNLENBQXpCLEVBQTRCRCxVQUFTLE1BQXJDLEVBQTZDRyxRQUFRLFNBQXJELEVBQWdFVCxVQUFTLEdBQXpFLEVBQTlCO0FBQ0FGLE9BQUdPLE1BQUgsQ0FBVSxpQkFBVixFQUE2QixFQUFFRyxRQUFRLE9BQVYsRUFBN0I7QUFDQVYsT0FBR08sTUFBSCxDQUFVLGdCQUFWLEVBQTRCLEVBQUVHLFFBQVEsTUFBVixFQUFtQkQsT0FBTyxDQUExQixFQUE2QkQsVUFBUyxNQUF0QyxFQUE4Q0csUUFBUSxnQ0FBdEQsRUFBNUI7QUFDQVgsT0FBR08sTUFBSCxDQUFVLGVBQVYsRUFBMkIsRUFBRUcsUUFBUSxLQUFWLEVBQTNCO0FBQ0FWLE9BQUdPLE1BQUgsQ0FBVSxtQkFBVixFQUErQixFQUFFRSxPQUFPLEdBQVQsRUFBL0I7QUFDQVQsT0FBR08sTUFBSCxDQUFVLG1CQUFWLEVBQStCLEVBQUVFLE9BQU8sR0FBVCxFQUEvQjtBQUNELEdBVkQsTUFVTztBQUNMNUIsYUFBU3dCLGVBQVQsQ0FBeUJULFNBQXpCLENBQW1DZ0IsTUFBbkMsQ0FBMEMsSUFBMUM7QUFDRDtBQUNGLEM7Ozs7Ozs7QUNsQkQseUMiLCJmaWxlIjoiYWJvdXRfZDlhYzJhNzZiZDc4ODU5YjI5NWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2Fib3V0L2Fib3V0LmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ5YWMyYTc2YmQ3ODg1OWIyOTVjIiwiLy8vLy8gICAgLy8vLy8gICAgLy8vLy8gICAgLy8vLy9cbi8vLy8vICAgIC8vLy8vICAgIC8vLy8vICAgIC8vLy8vXG4vLy8vLyAgICAvLy8vLyAgICAvLy8vLyAgICAvLy8vL1xuLy8vLy8gICAgLy8vLy8gICAgLy8vLy8gICAgLy8vLy9cbi8vLy8vICAgICAgICAgICAgIC8vLy8vICAgIC8vLy8vXG4vLy8vLyAgICAgICAgICAgICAvLy8vLyAgICAvLy8vL1xuLy8vLy8gICAgLy8vLy8gICAgLy8vLy8gICAgLy8vLy9cbi8vLy8vICAgIC8vLy8vICAgIC8vLy8vICAgIC8vLy8vXG4gICAgICAgICAvLy8vLyAgICAvLy8vL1xuICAgICAgICAgLy8vLy8gICAgLy8vLy9cbi8vLy8vICAgIC8vLy8vICAgIC8vLy8vICAgIC8vLy8vXG4vLy8vLyAgICAvLy8vLyAgICAvLy8vLyAgICAvLy8vL1xuLy8vLy8gICAgLy8vLy8gICAgLy8vLy8gICAgLy8vLy9cbi8vLy8vICAgIC8vLy8vICAgIC8vLy8vICAgIC8vLy8vXG5cbi8qKlxuICogU2Nyb2xsUmV2ZWFsXG4gKiAtLS0tLS0tLS0tLS1cbiAqIFZlcnNpb24gOiAzLjMuNlxuICogV2Vic2l0ZSA6IHNjcm9sbHJldmVhbGpzLm9yZ1xuICogUmVwbyAgICA6IGdpdGh1Yi5jb20vamxtYWtlcy9zY3JvbGxyZXZlYWwuanNcbiAqIEF1dGhvciAgOiBKdWxpYW4gTGxveWQgKEBqbG1ha2VzKVxuICovXG5cbjsoZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCdcblxuICB2YXIgc3JcbiAgdmFyIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcblxuICBmdW5jdGlvbiBTY3JvbGxSZXZlYWwgKGNvbmZpZykge1xuICAgIC8vIFN1cHBvcnQgaW5zdGFudGlhdGlvbiB3aXRob3V0IHRoZSBgbmV3YCBrZXl3b3JkLlxuICAgIGlmICh0eXBlb2YgdGhpcyA9PT0gJ3VuZGVmaW5lZCcgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpICE9PSBTY3JvbGxSZXZlYWwucHJvdG90eXBlKSB7XG4gICAgICByZXR1cm4gbmV3IFNjcm9sbFJldmVhbChjb25maWcpXG4gICAgfVxuXG4gICAgc3IgPSB0aGlzIC8vIFNhdmUgcmVmZXJlbmNlIHRvIGluc3RhbmNlLlxuICAgIHNyLnZlcnNpb24gPSAnMy4zLjYnXG4gICAgc3IudG9vbHMgPSBuZXcgVG9vbHMoKSAvLyAqcmVxdWlyZWQgdXRpbGl0aWVzXG5cbiAgICBpZiAoc3IuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgc3IudG9vbHMuZXh0ZW5kKHNyLmRlZmF1bHRzLCBjb25maWcgfHwge30pXG5cbiAgICAgIHNyLmRlZmF1bHRzLmNvbnRhaW5lciA9IF9yZXNvbHZlQ29udGFpbmVyKHNyLmRlZmF1bHRzKVxuXG4gICAgICBzci5zdG9yZSA9IHtcbiAgICAgICAgZWxlbWVudHM6IHt9LFxuICAgICAgICBjb250YWluZXJzOiBbXVxuICAgICAgfVxuXG4gICAgICBzci5zZXF1ZW5jZXMgPSB7fVxuICAgICAgc3IuaGlzdG9yeSA9IFtdXG4gICAgICBzci51aWQgPSAwXG4gICAgICBzci5pbml0aWFsaXplZCA9IGZhbHNlXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZSAhPT0gbnVsbCkge1xuICAgICAgLy8gTm90ZTogSUU5IG9ubHkgc3VwcG9ydHMgY29uc29sZSBpZiBkZXZ0b29scyBhcmUgb3Blbi5cbiAgICAgIGNvbnNvbGUubG9nKCdTY3JvbGxSZXZlYWwgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXIuJylcbiAgICB9XG5cbiAgICByZXR1cm4gc3JcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS1cbiAgICogVGhpcyBvYmplY3Qgc2lnbmF0dXJlIGNhbiBiZSBwYXNzZWQgZGlyZWN0bHkgdG8gdGhlIFNjcm9sbFJldmVhbCBjb25zdHJ1Y3RvcixcbiAgICogb3IgYXMgdGhlIHNlY29uZCBhcmd1bWVudCBvZiB0aGUgYHJldmVhbCgpYCBtZXRob2QuXG4gICAqL1xuXG4gIFNjcm9sbFJldmVhbC5wcm90b3R5cGUuZGVmYXVsdHMgPSB7XG4gICAgLy8gJ2JvdHRvbScsICdsZWZ0JywgJ3RvcCcsICdyaWdodCdcbiAgICBvcmlnaW46ICdib3R0b20nLFxuXG4gICAgLy8gQ2FuIGJlIGFueSB2YWxpZCBDU1MgZGlzdGFuY2UsIGUuZy4gJzVyZW0nLCAnMTAlJywgJzIwdncnLCBldGMuXG4gICAgZGlzdGFuY2U6ICcyMHB4JyxcblxuICAgIC8vIFRpbWUgaW4gbWlsbGlzZWNvbmRzLlxuICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgZGVsYXk6IDAsXG5cbiAgICAvLyBTdGFydGluZyBhbmdsZXMgaW4gZGVncmVlcywgd2lsbCB0cmFuc2l0aW9uIGZyb20gdGhlc2UgdmFsdWVzIHRvIDAgaW4gYWxsIGF4ZXMuXG4gICAgcm90YXRlOiB7IHg6IDAsIHk6IDAsIHo6IDAgfSxcblxuICAgIC8vIFN0YXJ0aW5nIG9wYWNpdHkgdmFsdWUsIGJlZm9yZSB0cmFuc2l0aW9uaW5nIHRvIHRoZSBjb21wdXRlZCBvcGFjaXR5LlxuICAgIG9wYWNpdHk6IDAsXG5cbiAgICAvLyBTdGFydGluZyBzY2FsZSB2YWx1ZSwgd2lsbCB0cmFuc2l0aW9uIGZyb20gdGhpcyB2YWx1ZSB0byAxXG4gICAgc2NhbGU6IDAuOSxcblxuICAgIC8vIEFjY2VwdHMgYW55IHZhbGlkIENTUyBlYXNpbmcsIGUuZy4gJ2Vhc2UnLCAnZWFzZS1pbi1vdXQnLCAnbGluZWFyJywgZXRjLlxuICAgIGVhc2luZzogJ2N1YmljLWJlemllcigwLjYsIDAuMiwgMC4xLCAxKScsXG5cbiAgICAvLyBgPGh0bWw+YCBpcyB0aGUgZGVmYXVsdCByZXZlYWwgY29udGFpbmVyLiBZb3UgY2FuIHBhc3MgZWl0aGVyOlxuICAgIC8vIERPTSBOb2RlLCBlLmcuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb29Db250YWluZXInKVxuICAgIC8vIFNlbGVjdG9yLCBlLmcuICcuZm9vQ29udGFpbmVyJ1xuICAgIGNvbnRhaW5lcjogd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcblxuICAgIC8vIHRydWUvZmFsc2UgdG8gY29udHJvbCByZXZlYWwgYW5pbWF0aW9ucyBvbiBtb2JpbGUuXG4gICAgbW9iaWxlOiB0cnVlLFxuXG4gICAgLy8gdHJ1ZTogIHJldmVhbHMgb2NjdXIgZXZlcnkgdGltZSBlbGVtZW50cyBiZWNvbWUgdmlzaWJsZVxuICAgIC8vIGZhbHNlOiByZXZlYWxzIG9jY3VyIG9uY2UgYXMgZWxlbWVudHMgYmVjb21lIHZpc2libGVcbiAgICByZXNldDogZmFsc2UsXG5cbiAgICAvLyAnYWx3YXlzJyDigJQgZGVsYXkgZm9yIGFsbCByZXZlYWwgYW5pbWF0aW9uc1xuICAgIC8vICdvbmNlJyAgIOKAlCBkZWxheSBvbmx5IHRoZSBmaXJzdCB0aW1lIHJldmVhbHMgb2NjdXJcbiAgICAvLyAnb25sb2FkJyAtIGRlbGF5IG9ubHkgZm9yIGFuaW1hdGlvbnMgdHJpZ2dlcmVkIGJ5IGZpcnN0IGxvYWRcbiAgICB1c2VEZWxheTogJ2Fsd2F5cycsXG5cbiAgICAvLyBDaGFuZ2Ugd2hlbiBhbiBlbGVtZW50IGlzIGNvbnNpZGVyZWQgaW4gdGhlIHZpZXdwb3J0LiBUaGUgZGVmYXVsdCB2YWx1ZVxuICAgIC8vIG9mIDAuMjAgbWVhbnMgMjAlIG9mIGFuIGVsZW1lbnQgbXVzdCBiZSB2aXNpYmxlIGZvciBpdHMgcmV2ZWFsIHRvIG9jY3VyLlxuICAgIHZpZXdGYWN0b3I6IDAuMixcblxuICAgIC8vIFBpeGVsIHZhbHVlcyB0aGF0IGFsdGVyIHRoZSBjb250YWluZXIgYm91bmRhcmllcy5cbiAgICAvLyBlLmcuIFNldCBgeyB0b3A6IDQ4IH1gLCBpZiB5b3UgaGF2ZSBhIDQ4cHggdGFsbCBmaXhlZCB0b29sYmFyLlxuICAgIC8vIC0tXG4gICAgLy8gVmlzdWFsIEFpZDogaHR0cHM6Ly9zY3JvbGxyZXZlYWxqcy5vcmcvYXNzZXRzL3ZpZXdvZmZzZXQucG5nXG4gICAgdmlld09mZnNldDogeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAgfSxcblxuICAgIC8vIENhbGxiYWNrcyB0aGF0IGZpcmUgZm9yIGVhY2ggdHJpZ2dlcmVkIGVsZW1lbnQgcmV2ZWFsLCBhbmQgcmVzZXQuXG4gICAgYmVmb3JlUmV2ZWFsOiBmdW5jdGlvbiAoZG9tRWwpIHt9LFxuICAgIGJlZm9yZVJlc2V0OiBmdW5jdGlvbiAoZG9tRWwpIHt9LFxuXG4gICAgLy8gQ2FsbGJhY2tzIHRoYXQgZmlyZSBmb3IgZWFjaCBjb21wbGV0ZWQgZWxlbWVudCByZXZlYWwsIGFuZCByZXNldC5cbiAgICBhZnRlclJldmVhbDogZnVuY3Rpb24gKGRvbUVsKSB7fSxcbiAgICBhZnRlclJlc2V0OiBmdW5jdGlvbiAoZG9tRWwpIHt9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgY2xpZW50IHN1cHBvcnRzIENTUyBUcmFuc2Zvcm0gYW5kIENTUyBUcmFuc2l0aW9uLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgU2Nyb2xsUmV2ZWFsLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGVcbiAgICByZXR1cm4gJ1dlYmtpdFRyYW5zaXRpb24nIGluIHN0eWxlICYmICdXZWJraXRUcmFuc2Zvcm0nIGluIHN0eWxlIHx8XG4gICAgICAndHJhbnNpdGlvbicgaW4gc3R5bGUgJiYgJ3RyYW5zZm9ybScgaW4gc3R5bGVcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcmV2ZWFsIHNldCwgYSBncm91cCBvZiBlbGVtZW50cyB0aGF0IHdpbGwgYW5pbWF0ZSB3aGVuIHRoZXlcbiAgICogYmVjb21lIHZpc2libGUuIElmIFtpbnRlcnZhbF0gaXMgcHJvdmlkZWQsIGEgbmV3IHNlcXVlbmNlIGlzIGNyZWF0ZWRcbiAgICogdGhhdCB3aWxsIGVuc3VyZSBlbGVtZW50cyByZXZlYWwgaW4gdGhlIG9yZGVyIHRoZXkgYXBwZWFyIGluIHRoZSBET00uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZXxOb2RlTGlzdHxzdHJpbmd9IFt0YXJnZXRdICAgVGhlIG5vZGUsIG5vZGUgbGlzdCBvciBzZWxlY3RvciB0byB1c2UgZm9yIGFuaW1hdGlvbi5cbiAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICAgICAgICAgW2NvbmZpZ10gICBPdmVycmlkZSB0aGUgZGVmYXVsdHMgZm9yIHRoaXMgcmV2ZWFsIHNldC5cbiAgICogQHBhcmFtIHtudW1iZXJ9ICAgICAgICAgICAgICAgW2ludGVydmFsXSBUaW1lIGJldHdlZW4gc2VxdWVuY2VkIGVsZW1lbnQgYW5pbWF0aW9ucyAobWlsbGlzZWNvbmRzKS5cbiAgICogQHBhcmFtIHtib29sZWFufSAgICAgICAgICAgICAgW3N5bmNdICAgICBVc2VkIGludGVybmFsbHkgd2hlbiB1cGRhdGluZyByZXZlYWxzIGZvciBhc3luYyBjb250ZW50LlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjdXJyZW50IFNjcm9sbFJldmVhbCBpbnN0YW5jZS5cbiAgICovXG4gIFNjcm9sbFJldmVhbC5wcm90b3R5cGUucmV2ZWFsID0gZnVuY3Rpb24gKHRhcmdldCwgY29uZmlnLCBpbnRlcnZhbCwgc3luYykge1xuICAgIHZhciBjb250YWluZXJcbiAgICB2YXIgZWxlbWVudHNcbiAgICB2YXIgZWxlbVxuICAgIHZhciBlbGVtSWRcbiAgICB2YXIgc2VxdWVuY2VcbiAgICB2YXIgc2VxdWVuY2VJZFxuXG4gICAgLy8gTm8gY3VzdG9tIGNvbmZpZ3VyYXRpb24gd2FzIHBhc3NlZCwgYnV0IGEgc2VxdWVuY2UgaW50ZXJ2YWwgaW5zdGVhZC5cbiAgICAvLyBsZXTigJlzIHNodWZmbGUgdGhpbmdzIGFyb3VuZCB0byBtYWtlIHN1cmUgZXZlcnl0aGluZyB3b3Jrcy5cbiAgICBpZiAoY29uZmlnICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGNvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGludGVydmFsID0gY29uZmlnXG4gICAgICBjb25maWcgPSB7fVxuICAgIH0gZWxzZSBpZiAoY29uZmlnID09PSB1bmRlZmluZWQgfHwgY29uZmlnID09PSBudWxsKSB7XG4gICAgICBjb25maWcgPSB7fVxuICAgIH1cblxuICAgIGNvbnRhaW5lciA9IF9yZXNvbHZlQ29udGFpbmVyKGNvbmZpZylcbiAgICBlbGVtZW50cyA9IF9nZXRSZXZlYWxFbGVtZW50cyh0YXJnZXQsIGNvbnRhaW5lcilcblxuICAgIGlmICghZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZygnU2Nyb2xsUmV2ZWFsOiByZXZlYWwgb24gXCInICsgdGFyZ2V0ICsgJ1wiIGZhaWxlZCwgbm8gZWxlbWVudHMgZm91bmQuJylcbiAgICAgIHJldHVybiBzclxuICAgIH1cblxuICAgIC8vIFByZXBhcmUgYSBuZXcgc2VxdWVuY2UgaWYgYW4gaW50ZXJ2YWwgaXMgcGFzc2VkLlxuICAgIGlmIChpbnRlcnZhbCAmJiB0eXBlb2YgaW50ZXJ2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICBzZXF1ZW5jZUlkID0gX25leHRVaWQoKVxuXG4gICAgICBzZXF1ZW5jZSA9IHNyLnNlcXVlbmNlc1tzZXF1ZW5jZUlkXSA9IHtcbiAgICAgICAgaWQ6IHNlcXVlbmNlSWQsXG4gICAgICAgIGludGVydmFsOiBpbnRlcnZhbCxcbiAgICAgICAgZWxlbUlkczogW10sXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBCZWdpbiBtYWluIGxvb3AgdG8gY29uZmlndXJlIFNjcm9sbFJldmVhbCBlbGVtZW50cy5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBDaGVjayBpZiB0aGUgZWxlbWVudCBoYXMgYWxyZWFkeSBiZWVuIGNvbmZpZ3VyZWQgYW5kIGdyYWIgaXQgZnJvbSB0aGUgc3RvcmUuXG4gICAgICBlbGVtSWQgPSBlbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3ItaWQnKVxuICAgICAgaWYgKGVsZW1JZCkge1xuICAgICAgICBlbGVtID0gc3Iuc3RvcmUuZWxlbWVudHNbZWxlbUlkXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBsZXTigJlzIGRvIHNvbWUgYmFzaWMgc2V0dXAuXG4gICAgICAgIGVsZW0gPSB7XG4gICAgICAgICAgaWQ6IF9uZXh0VWlkKCksXG4gICAgICAgICAgZG9tRWw6IGVsZW1lbnRzW2ldLFxuICAgICAgICAgIHNlZW46IGZhbHNlLFxuICAgICAgICAgIHJldmVhbGluZzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBlbGVtLmRvbUVsLnNldEF0dHJpYnV0ZSgnZGF0YS1zci1pZCcsIGVsZW0uaWQpXG4gICAgICB9XG5cbiAgICAgIC8vIFNlcXVlbmNlIG9ubHkgc2V0dXBcbiAgICAgIGlmIChzZXF1ZW5jZSkge1xuICAgICAgICBlbGVtLnNlcXVlbmNlID0ge1xuICAgICAgICAgIGlkOiBzZXF1ZW5jZS5pZCxcbiAgICAgICAgICBpbmRleDogc2VxdWVuY2UuZWxlbUlkcy5sZW5ndGhcbiAgICAgICAgfVxuXG4gICAgICAgIHNlcXVlbmNlLmVsZW1JZHMucHVzaChlbGVtLmlkKVxuICAgICAgfVxuXG4gICAgICAvLyBOZXcgb3IgZXhpc3RpbmcgZWxlbWVudCwgaXTigJlzIHRpbWUgdG8gdXBkYXRlIGl0cyBjb25maWd1cmF0aW9uLCBzdHlsZXMsXG4gICAgICAvLyBhbmQgc2VuZCB0aGUgdXBkYXRlcyB0byBvdXIgc3RvcmUuXG4gICAgICBfY29uZmlndXJlKGVsZW0sIGNvbmZpZywgY29udGFpbmVyKVxuICAgICAgX3N0eWxlKGVsZW0pXG4gICAgICBfdXBkYXRlU3RvcmUoZWxlbSlcblxuICAgICAgLy8gV2UgbmVlZCB0byBtYWtlIHN1cmUgZWxlbWVudHMgYXJlIHNldCB0byB2aXNpYmlsaXR5OiB2aXNpYmxlLCBldmVuIHdoZW5cbiAgICAgIC8vIG9uIG1vYmlsZSBhbmQgYGNvbmZpZy5tb2JpbGUgPT09IGZhbHNlYCwgb3IgaWYgdW5zdXBwb3J0ZWQuXG4gICAgICBpZiAoc3IudG9vbHMuaXNNb2JpbGUoKSAmJiAhZWxlbS5jb25maWcubW9iaWxlIHx8ICFzci5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgIGVsZW0uZG9tRWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGVsZW0uc3R5bGVzLmlubGluZSlcbiAgICAgICAgZWxlbS5kaXNhYmxlZCA9IHRydWVcbiAgICAgIH0gZWxzZSBpZiAoIWVsZW0ucmV2ZWFsaW5nKSB7XG4gICAgICAgIC8vIE90aGVyd2lzZSwgcHJvY2VlZCBub3JtYWxseS5cbiAgICAgICAgZWxlbS5kb21FbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJyxcbiAgICAgICAgICBlbGVtLnN0eWxlcy5pbmxpbmUgK1xuICAgICAgICAgIGVsZW0uc3R5bGVzLnRyYW5zZm9ybS5pbml0aWFsXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFYWNoIGByZXZlYWwoKWAgaXMgcmVjb3JkZWQgc28gdGhhdCB3aGVuIGNhbGxpbmcgYHN5bmMoKWAgd2hpbGUgd29ya2luZ1xuICAgIC8vIHdpdGggYXN5bmNocm9ub3VzbHkgbG9hZGVkIGNvbnRlbnQsIGl0IGNhbiByZS10cmFjZSB5b3VyIHN0ZXBzIGJ1dCB3aXRoXG4gICAgLy8gYWxsIHlvdXIgbmV3IGVsZW1lbnRzIG5vdyBpbiB0aGUgRE9NLlxuXG4gICAgLy8gU2luY2UgYHJldmVhbCgpYCBpcyBjYWxsZWQgaW50ZXJuYWxseSBieSBgc3luYygpYCwgd2UgZG9u4oCZdCB3YW50IHRvXG4gICAgLy8gcmVjb3JkIG9yIGludGlpYWxpemUgZWFjaCByZXZlYWwgZHVyaW5nIHN5bmNpbmcuXG4gICAgaWYgKCFzeW5jICYmIHNyLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgIF9yZWNvcmQodGFyZ2V0LCBjb25maWcsIGludGVydmFsKVxuXG4gICAgICAvLyBXZSBwdXNoIGluaXRpYWxpemF0aW9uIHRvIHRoZSBldmVudCBxdWV1ZSB1c2luZyBzZXRUaW1lb3V0LCBzbyB0aGF0IHdlIGNhblxuICAgICAgLy8gZ2l2ZSBTY3JvbGxSZXZlYWwgcm9vbSB0byBwcm9jZXNzIGFsbCByZXZlYWwgY2FsbHMgYmVmb3JlIHB1dHRpbmcgdGhpbmdzIGludG8gbW90aW9uLlxuICAgICAgLy8gLS1cbiAgICAgIC8vIFBoaWxpcCBSb2JlcnRzIC0gV2hhdCB0aGUgaGVjayBpcyB0aGUgZXZlbnQgbG9vcCBhbnl3YXk/IChKU0NvbmYgRVUgMjAxNClcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9OGFHaFpRa29GYlFcbiAgICAgIGlmIChzci5pbml0VGltZW91dCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHNyLmluaXRUaW1lb3V0KVxuICAgICAgfVxuICAgICAgc3IuaW5pdFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChfaW5pdCwgMClcbiAgICB9XG5cbiAgICByZXR1cm4gc3JcbiAgfVxuXG4gIC8qKlxuICAgKiBSZS1ydW5zIGByZXZlYWwoKWAgZm9yIGVhY2ggcmVjb3JkIHN0b3JlZCBpbiBoaXN0b3J5LCBlZmZlY3RpdmVseSBjYXB0dXJpbmdcbiAgICogYW55IGNvbnRlbnQgbG9hZGVkIGFzeW5jaHJvbm91c2x5IHRoYXQgbWF0Y2hlcyBleGlzdGluZyByZXZlYWwgc2V0IHRhcmdldHMuXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGN1cnJlbnQgU2Nyb2xsUmV2ZWFsIGluc3RhbmNlLlxuICAgKi9cbiAgU2Nyb2xsUmV2ZWFsLnByb3RvdHlwZS5zeW5jID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzci5oaXN0b3J5Lmxlbmd0aCAmJiBzci5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNyLmhpc3RvcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHJlY29yZCA9IHNyLmhpc3RvcnlbaV1cbiAgICAgICAgc3IucmV2ZWFsKHJlY29yZC50YXJnZXQsIHJlY29yZC5jb25maWcsIHJlY29yZC5pbnRlcnZhbCwgdHJ1ZSlcbiAgICAgIH1cbiAgICAgIF9pbml0KClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ1Njcm9sbFJldmVhbDogc3luYyBmYWlsZWQsIG5vIHJldmVhbHMgZm91bmQuJylcbiAgICB9XG4gICAgcmV0dXJuIHNyXG4gIH1cblxuICAvKipcbiAgICogUHJpdmF0ZSBNZXRob2RzXG4gICAqIC0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBmdW5jdGlvbiBfcmVzb2x2ZUNvbnRhaW5lciAoY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyAmJiBjb25maWcuY29udGFpbmVyKSB7XG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5jb250YWluZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmNvbnRhaW5lcilcbiAgICAgIH0gZWxzZSBpZiAoc3IudG9vbHMuaXNOb2RlKGNvbmZpZy5jb250YWluZXIpKSB7XG4gICAgICAgIHJldHVybiBjb25maWcuY29udGFpbmVyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnU2Nyb2xsUmV2ZWFsOiBpbnZhbGlkIGNvbnRhaW5lciBcIicgKyBjb25maWcuY29udGFpbmVyICsgJ1wiIHByb3ZpZGVkLicpXG4gICAgICAgIGNvbnNvbGUubG9nKCdTY3JvbGxSZXZlYWw6IGZhbGxpbmcgYmFjayB0byBkZWZhdWx0IGNvbnRhaW5lci4nKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3IuZGVmYXVsdHMuY29udGFpbmVyXG4gIH1cblxuICAvKipcbiAgICogY2hlY2sgdG8gc2VlIGlmIGEgbm9kZSBvciBub2RlIGxpc3Qgd2FzIHBhc3NlZCBpbiBhcyB0aGUgdGFyZ2V0LFxuICAgKiBvdGhlcndpc2UgcXVlcnkgdGhlIGNvbnRhaW5lciB1c2luZyB0YXJnZXQgYXMgYSBzZWxlY3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfE5vZGVMaXN0fHN0cmluZ30gW3RhcmdldF0gICAgY2xpZW50IGlucHV0IGZvciByZXZlYWwgdGFyZ2V0LlxuICAgKiBAcGFyYW0ge05vZGV9ICAgICAgICAgICAgICAgICBbY29udGFpbmVyXSBwYXJlbnQgZWxlbWVudCBmb3Igc2VsZWN0b3IgcXVlcmllcy5cbiAgICpcbiAgICogQHJldHVybiB7YXJyYXl9IGVsZW1lbnRzIHRvIGJlIHJldmVhbGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gX2dldFJldmVhbEVsZW1lbnRzICh0YXJnZXQsIGNvbnRhaW5lcikge1xuICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldCkpXG4gICAgfSBlbHNlIGlmIChzci50b29scy5pc05vZGUodGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIFt0YXJnZXRdXG4gICAgfSBlbHNlIGlmIChzci50b29scy5pc05vZGVMaXN0KHRhcmdldCkpIHtcbiAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXQpXG4gICAgfVxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgLyoqXG4gICAqIEEgY29uc2lzdGVudCB3YXkgb2YgY3JlYXRpbmcgdW5pcXVlIElEcy5cbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGZ1bmN0aW9uIF9uZXh0VWlkICgpIHtcbiAgICByZXR1cm4gKytzci51aWRcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jb25maWd1cmUgKGVsZW0sIGNvbmZpZywgY29udGFpbmVyKSB7XG4gICAgLy8gSWYgYSBjb250YWluZXIgd2FzIHBhc3NlZCBhcyBhIHBhcnQgb2YgdGhlIGNvbmZpZyBvYmplY3QsXG4gICAgLy8gbGV04oCZcyBvdmVyd3JpdGUgaXQgd2l0aCB0aGUgcmVzb2x2ZWQgY29udGFpbmVyIHBhc3NlZCBpbi5cbiAgICBpZiAoY29uZmlnLmNvbnRhaW5lcikgY29uZmlnLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICAgIC8vIElmIHRoZSBlbGVtZW50IGhhc27igJl0IGFscmVhZHkgYmVlbiBjb25maWd1cmVkLCBsZXTigJlzIHVzZSBhIGNsb25lIG9mIHRoZVxuICAgIC8vIGRlZmF1bHRzIGV4dGVuZGVkIGJ5IHRoZSBjb25maWd1cmF0aW9uIHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuICAgIGlmICghZWxlbS5jb25maWcpIHtcbiAgICAgIGVsZW0uY29uZmlnID0gc3IudG9vbHMuZXh0ZW5kQ2xvbmUoc3IuZGVmYXVsdHMsIGNvbmZpZylcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3RoZXJ3aXNlLCBsZXTigJlzIHVzZSBhIGNsb25lIG9mIHRoZSBleGlzdGluZyBlbGVtZW50IGNvbmZpZ3VyYXRpb24gZXh0ZW5kZWRcbiAgICAgIC8vIGJ5IHRoZSBjb25maWd1cmF0aW9uIHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuICAgICAgZWxlbS5jb25maWcgPSBzci50b29scy5leHRlbmRDbG9uZShlbGVtLmNvbmZpZywgY29uZmlnKVxuICAgIH1cblxuICAgIC8vIEluZmVyIENTUyBUcmFuc2Zvcm0gYXhpcyBmcm9tIG9yaWdpbiBzdHJpbmcuXG4gICAgaWYgKGVsZW0uY29uZmlnLm9yaWdpbiA9PT0gJ3RvcCcgfHwgZWxlbS5jb25maWcub3JpZ2luID09PSAnYm90dG9tJykge1xuICAgICAgZWxlbS5jb25maWcuYXhpcyA9ICdZJ1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLmNvbmZpZy5heGlzID0gJ1gnXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX3N0eWxlIChlbGVtKSB7XG4gICAgdmFyIGNvbXB1dGVkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbS5kb21FbClcblxuICAgIGlmICghZWxlbS5zdHlsZXMpIHtcbiAgICAgIGVsZW0uc3R5bGVzID0ge1xuICAgICAgICB0cmFuc2l0aW9uOiB7fSxcbiAgICAgICAgdHJhbnNmb3JtOiB7fSxcbiAgICAgICAgY29tcHV0ZWQ6IHt9XG4gICAgICB9XG5cbiAgICAgIC8vIENhcHR1cmUgYW55IGV4aXN0aW5nIGlubGluZSBzdHlsZXMsIGFuZCBhZGQgb3VyIHZpc2liaWxpdHkgb3ZlcnJpZGUuXG4gICAgICAvLyAtLVxuICAgICAgLy8gU2VlIHNlY3Rpb24gNC4yLiBpbiB0aGUgRG9jdW1lbnRhdGlvbjpcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qbG1ha2VzL3Njcm9sbHJldmVhbC5qcyM0Mi1pbXByb3ZlLXVzZXItZXhwZXJpZW5jZVxuICAgICAgZWxlbS5zdHlsZXMuaW5saW5lID0gZWxlbS5kb21FbC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykgfHwgJydcbiAgICAgIGVsZW0uc3R5bGVzLmlubGluZSArPSAnOyB2aXNpYmlsaXR5OiB2aXNpYmxlOyAnXG5cbiAgICAgIC8vIGdyYWIgdGhlIGVsZW1lbnRzIGV4aXN0aW5nIG9wYWNpdHkuXG4gICAgICBlbGVtLnN0eWxlcy5jb21wdXRlZC5vcGFjaXR5ID0gY29tcHV0ZWQub3BhY2l0eVxuXG4gICAgICAvLyBncmFiIHRoZSBlbGVtZW50cyBleGlzdGluZyB0cmFuc2l0aW9ucy5cbiAgICAgIGlmICghY29tcHV0ZWQudHJhbnNpdGlvbiB8fCBjb21wdXRlZC50cmFuc2l0aW9uID09PSAnYWxsIDBzIGVhc2UgMHMnKSB7XG4gICAgICAgIGVsZW0uc3R5bGVzLmNvbXB1dGVkLnRyYW5zaXRpb24gPSAnJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbS5zdHlsZXMuY29tcHV0ZWQudHJhbnNpdGlvbiA9IGNvbXB1dGVkLnRyYW5zaXRpb24gKyAnLCAnXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRyYW5zaXRpb24gc3R5bGVzXG4gICAgZWxlbS5zdHlsZXMudHJhbnNpdGlvbi5pbnN0YW50ID0gX2dlbmVyYXRlVHJhbnNpdGlvbihlbGVtLCAwKVxuICAgIGVsZW0uc3R5bGVzLnRyYW5zaXRpb24uZGVsYXllZCA9IF9nZW5lcmF0ZVRyYW5zaXRpb24oZWxlbSwgZWxlbS5jb25maWcuZGVsYXkpXG5cbiAgICAvLyBHZW5lcmF0ZSB0cmFuc2Zvcm0gc3R5bGVzLCBmaXJzdCB3aXRoIHRoZSB3ZWJraXQgcHJlZml4LlxuICAgIGVsZW0uc3R5bGVzLnRyYW5zZm9ybS5pbml0aWFsID0gJyAtd2Via2l0LXRyYW5zZm9ybTonXG4gICAgZWxlbS5zdHlsZXMudHJhbnNmb3JtLnRhcmdldCA9ICcgLXdlYmtpdC10cmFuc2Zvcm06J1xuICAgIF9nZW5lcmF0ZVRyYW5zZm9ybShlbGVtKVxuXG4gICAgLy8gQW5kIGFnYWluIHdpdGhvdXQgYW55IHByZWZpeC5cbiAgICBlbGVtLnN0eWxlcy50cmFuc2Zvcm0uaW5pdGlhbCArPSAndHJhbnNmb3JtOidcbiAgICBlbGVtLnN0eWxlcy50cmFuc2Zvcm0udGFyZ2V0ICs9ICd0cmFuc2Zvcm06J1xuICAgIF9nZW5lcmF0ZVRyYW5zZm9ybShlbGVtKVxuICB9XG5cbiAgZnVuY3Rpb24gX2dlbmVyYXRlVHJhbnNpdGlvbiAoZWxlbSwgZGVsYXkpIHtcbiAgICB2YXIgY29uZmlnID0gZWxlbS5jb25maWdcblxuICAgIHJldHVybiAnLXdlYmtpdC10cmFuc2l0aW9uOiAnICsgZWxlbS5zdHlsZXMuY29tcHV0ZWQudHJhbnNpdGlvbiArXG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0gJyArIGNvbmZpZy5kdXJhdGlvbiAvIDEwMDAgKyAncyAnICtcbiAgICAgIGNvbmZpZy5lYXNpbmcgKyAnICcgK1xuICAgICAgZGVsYXkgLyAxMDAwICsgJ3MsIG9wYWNpdHkgJyArXG4gICAgICBjb25maWcuZHVyYXRpb24gLyAxMDAwICsgJ3MgJyArXG4gICAgICBjb25maWcuZWFzaW5nICsgJyAnICtcbiAgICAgIGRlbGF5IC8gMTAwMCArICdzOyAnICtcblxuICAgICAgJ3RyYW5zaXRpb246ICcgKyBlbGVtLnN0eWxlcy5jb21wdXRlZC50cmFuc2l0aW9uICtcbiAgICAgICd0cmFuc2Zvcm0gJyArIGNvbmZpZy5kdXJhdGlvbiAvIDEwMDAgKyAncyAnICtcbiAgICAgIGNvbmZpZy5lYXNpbmcgKyAnICcgK1xuICAgICAgZGVsYXkgLyAxMDAwICsgJ3MsIG9wYWNpdHkgJyArXG4gICAgICBjb25maWcuZHVyYXRpb24gLyAxMDAwICsgJ3MgJyArXG4gICAgICBjb25maWcuZWFzaW5nICsgJyAnICtcbiAgICAgIGRlbGF5IC8gMTAwMCArICdzOyAnXG4gIH1cblxuICBmdW5jdGlvbiBfZ2VuZXJhdGVUcmFuc2Zvcm0gKGVsZW0pIHtcbiAgICB2YXIgY29uZmlnID0gZWxlbS5jb25maWdcbiAgICB2YXIgY3NzRGlzdGFuY2VcbiAgICB2YXIgdHJhbnNmb3JtID0gZWxlbS5zdHlsZXMudHJhbnNmb3JtXG5cbiAgICAvLyBMZXTigJlzIG1ha2Ugc3VyZSBvdXIgb3VyIHBpeGVsIGRpc3RhbmNlcyBhcmUgbmVnYXRpdmUgZm9yIHRvcCBhbmQgbGVmdC5cbiAgICAvLyBlLmcuIG9yaWdpbiA9ICd0b3AnIGFuZCBkaXN0YW5jZSA9ICcyNXB4JyBzdGFydHMgYXQgYHRvcDogLTI1cHhgIGluIENTUy5cbiAgICBpZiAoY29uZmlnLm9yaWdpbiA9PT0gJ3RvcCcgfHwgY29uZmlnLm9yaWdpbiA9PT0gJ2xlZnQnKSB7XG4gICAgICBjc3NEaXN0YW5jZSA9IC9eLS8udGVzdChjb25maWcuZGlzdGFuY2UpXG4gICAgICAgID8gY29uZmlnLmRpc3RhbmNlLnN1YnN0cigxKVxuICAgICAgICA6ICctJyArIGNvbmZpZy5kaXN0YW5jZVxuICAgIH0gZWxzZSB7XG4gICAgICBjc3NEaXN0YW5jZSA9IGNvbmZpZy5kaXN0YW5jZVxuICAgIH1cblxuICAgIGlmIChwYXJzZUludChjb25maWcuZGlzdGFuY2UpKSB7XG4gICAgICB0cmFuc2Zvcm0uaW5pdGlhbCArPSAnIHRyYW5zbGF0ZScgKyBjb25maWcuYXhpcyArICcoJyArIGNzc0Rpc3RhbmNlICsgJyknXG4gICAgICB0cmFuc2Zvcm0udGFyZ2V0ICs9ICcgdHJhbnNsYXRlJyArIGNvbmZpZy5heGlzICsgJygwKSdcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5zY2FsZSkge1xuICAgICAgdHJhbnNmb3JtLmluaXRpYWwgKz0gJyBzY2FsZSgnICsgY29uZmlnLnNjYWxlICsgJyknXG4gICAgICB0cmFuc2Zvcm0udGFyZ2V0ICs9ICcgc2NhbGUoMSknXG4gICAgfVxuICAgIGlmIChjb25maWcucm90YXRlLngpIHtcbiAgICAgIHRyYW5zZm9ybS5pbml0aWFsICs9ICcgcm90YXRlWCgnICsgY29uZmlnLnJvdGF0ZS54ICsgJ2RlZyknXG4gICAgICB0cmFuc2Zvcm0udGFyZ2V0ICs9ICcgcm90YXRlWCgwKSdcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5yb3RhdGUueSkge1xuICAgICAgdHJhbnNmb3JtLmluaXRpYWwgKz0gJyByb3RhdGVZKCcgKyBjb25maWcucm90YXRlLnkgKyAnZGVnKSdcbiAgICAgIHRyYW5zZm9ybS50YXJnZXQgKz0gJyByb3RhdGVZKDApJ1xuICAgIH1cbiAgICBpZiAoY29uZmlnLnJvdGF0ZS56KSB7XG4gICAgICB0cmFuc2Zvcm0uaW5pdGlhbCArPSAnIHJvdGF0ZVooJyArIGNvbmZpZy5yb3RhdGUueiArICdkZWcpJ1xuICAgICAgdHJhbnNmb3JtLnRhcmdldCArPSAnIHJvdGF0ZVooMCknXG4gICAgfVxuICAgIHRyYW5zZm9ybS5pbml0aWFsICs9ICc7IG9wYWNpdHk6ICcgKyBjb25maWcub3BhY2l0eSArICc7J1xuICAgIHRyYW5zZm9ybS50YXJnZXQgKz0gJzsgb3BhY2l0eTogJyArIGVsZW0uc3R5bGVzLmNvbXB1dGVkLm9wYWNpdHkgKyAnOydcbiAgfVxuXG4gIGZ1bmN0aW9uIF91cGRhdGVTdG9yZSAoZWxlbSkge1xuICAgIHZhciBjb250YWluZXIgPSBlbGVtLmNvbmZpZy5jb250YWluZXJcblxuICAgIC8vIElmIHRoaXMgZWxlbWVudOKAmXMgY29udGFpbmVyIGlzbuKAmXQgYWxyZWFkeSBpbiB0aGUgc3RvcmUsIGxldOKAmXMgYWRkIGl0LlxuICAgIGlmIChjb250YWluZXIgJiYgc3Iuc3RvcmUuY29udGFpbmVycy5pbmRleE9mKGNvbnRhaW5lcikgPT09IC0xKSB7XG4gICAgICBzci5zdG9yZS5jb250YWluZXJzLnB1c2goZWxlbS5jb25maWcuY29udGFpbmVyKVxuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgZWxlbWVudCBzdG9yZWQgd2l0aCBvdXIgbmV3IGVsZW1lbnQuXG4gICAgc3Iuc3RvcmUuZWxlbWVudHNbZWxlbS5pZF0gPSBlbGVtXG4gIH1cblxuICBmdW5jdGlvbiBfcmVjb3JkICh0YXJnZXQsIGNvbmZpZywgaW50ZXJ2YWwpIHtcbiAgICAvLyBTYXZlIHRoZSBgcmV2ZWFsKClgIGFyZ3VtZW50cyB0aGF0IHRyaWdnZXJlZCB0aGlzIGBfcmVjb3JkKClgIGNhbGwsIHNvIHdlXG4gICAgLy8gY2FuIHJlLXRyYWNlIG91ciBzdGVwcyB3aGVuIGNhbGxpbmcgdGhlIGBzeW5jKClgIG1ldGhvZC5cbiAgICB2YXIgcmVjb3JkID0ge1xuICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgIGludGVydmFsOiBpbnRlcnZhbFxuICAgIH1cbiAgICBzci5oaXN0b3J5LnB1c2gocmVjb3JkKVxuICB9XG5cbiAgZnVuY3Rpb24gX2luaXQgKCkge1xuICAgIGlmIChzci5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAvLyBJbml0aWFsIGFuaW1hdGUgY2FsbCB0cmlnZ2VycyB2YWxpZCByZXZlYWwgYW5pbWF0aW9ucyBvbiBmaXJzdCBsb2FkLlxuICAgICAgLy8gU3Vic2VxdWVudCBhbmltYXRlIGNhbGxzIGFyZSBtYWRlIGluc2lkZSB0aGUgZXZlbnQgaGFuZGxlci5cbiAgICAgIF9hbmltYXRlKClcblxuICAgICAgLy8gVGhlbiB3ZSBsb29wIHRocm91Z2ggYWxsIGNvbnRhaW5lciBub2RlcyBpbiB0aGUgc3RvcmUgYW5kIGJpbmQgZXZlbnRcbiAgICAgIC8vIGxpc3RlbmVycyB0byBlYWNoLlxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzci5zdG9yZS5jb250YWluZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNyLnN0b3JlLmNvbnRhaW5lcnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgX2hhbmRsZXIpXG4gICAgICAgIHNyLnN0b3JlLmNvbnRhaW5lcnNbaV0uYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgX2hhbmRsZXIpXG4gICAgICB9XG5cbiAgICAgIC8vIExldOKAmXMgYWxzbyBkbyBhIG9uZS10aW1lIGJpbmRpbmcgb2Ygd2luZG93IGV2ZW50IGxpc3RlbmVycy5cbiAgICAgIGlmICghc3IuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIF9oYW5kbGVyKVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgX2hhbmRsZXIpXG4gICAgICAgIHNyLmluaXRpYWxpemVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3JcbiAgfVxuXG4gIGZ1bmN0aW9uIF9oYW5kbGVyICgpIHtcbiAgICBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF9hbmltYXRlKVxuICB9XG5cbiAgZnVuY3Rpb24gX3NldEFjdGl2ZVNlcXVlbmNlcyAoKSB7XG4gICAgdmFyIGFjdGl2ZVxuICAgIHZhciBlbGVtXG4gICAgdmFyIGVsZW1JZFxuICAgIHZhciBzZXF1ZW5jZVxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBzZXF1ZW5jZXNcbiAgICBzci50b29scy5mb3JPd24oc3Iuc2VxdWVuY2VzLCBmdW5jdGlvbiAoc2VxdWVuY2VJZCkge1xuICAgICAgc2VxdWVuY2UgPSBzci5zZXF1ZW5jZXNbc2VxdWVuY2VJZF1cbiAgICAgIGFjdGl2ZSA9IGZhbHNlXG5cbiAgICAgIC8vIEZvciBlYWNoIHNlcXVlbmNlZCBlbGVtZW5ldCwgbGV04oCZcyBjaGVjayB2aXNpYmlsaXR5IGFuZCBpZlxuICAgICAgLy8gYW55IGFyZSB2aXNpYmxlLCBzZXQgaXTigJlzIHNlcXVlbmNlIHRvIGFjdGl2ZS5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VxdWVuY2UuZWxlbUlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBlbGVtSWQgPSBzZXF1ZW5jZS5lbGVtSWRzW2ldXG4gICAgICAgIGVsZW0gPSBzci5zdG9yZS5lbGVtZW50c1tlbGVtSWRdXG4gICAgICAgIGlmIChfaXNFbGVtVmlzaWJsZShlbGVtKSAmJiAhYWN0aXZlKSB7XG4gICAgICAgICAgYWN0aXZlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNlcXVlbmNlLmFjdGl2ZSA9IGFjdGl2ZVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBfYW5pbWF0ZSAoKSB7XG4gICAgdmFyIGRlbGF5ZWRcbiAgICB2YXIgZWxlbVxuXG4gICAgX3NldEFjdGl2ZVNlcXVlbmNlcygpXG5cbiAgICAvLyBMb29wIHRocm91Z2ggYWxsIGVsZW1lbnRzIGluIHRoZSBzdG9yZVxuICAgIHNyLnRvb2xzLmZvck93bihzci5zdG9yZS5lbGVtZW50cywgZnVuY3Rpb24gKGVsZW1JZCkge1xuICAgICAgZWxlbSA9IHNyLnN0b3JlLmVsZW1lbnRzW2VsZW1JZF1cbiAgICAgIGRlbGF5ZWQgPSBfc2hvdWxkVXNlRGVsYXkoZWxlbSlcblxuICAgICAgLy8gTGV04oCZcyBzZWUgaWYgd2Ugc2hvdWxkIHJldmVhbGFuZCBpZiBzbyxcbiAgICAgIC8vIHRyaWdnZXIgdGhlIGBiZWZvcmVSZXZlYWxgIGNhbGxiYWNrIGFuZFxuICAgICAgLy8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHRvIHVzZSBkZWxheS5cbiAgICAgIGlmIChfc2hvdWxkUmV2ZWFsKGVsZW0pKSB7XG4gICAgICAgIGVsZW0uY29uZmlnLmJlZm9yZVJldmVhbChlbGVtLmRvbUVsKVxuICAgICAgICBpZiAoZGVsYXllZCkge1xuICAgICAgICAgIGVsZW0uZG9tRWwuc2V0QXR0cmlidXRlKCdzdHlsZScsXG4gICAgICAgICAgICBlbGVtLnN0eWxlcy5pbmxpbmUgK1xuICAgICAgICAgICAgZWxlbS5zdHlsZXMudHJhbnNmb3JtLnRhcmdldCArXG4gICAgICAgICAgICBlbGVtLnN0eWxlcy50cmFuc2l0aW9uLmRlbGF5ZWRcbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbS5kb21FbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJyxcbiAgICAgICAgICAgIGVsZW0uc3R5bGVzLmlubGluZSArXG4gICAgICAgICAgICBlbGVtLnN0eWxlcy50cmFuc2Zvcm0udGFyZ2V0ICtcbiAgICAgICAgICAgIGVsZW0uc3R5bGVzLnRyYW5zaXRpb24uaW5zdGFudFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExldOKAmXMgcXVldWUgdGhlIGBhZnRlclJldmVhbGAgY2FsbGJhY2tcbiAgICAgICAgLy8gYW5kIG1hcmsgdGhlIGVsZW1lbnQgYXMgc2VlbiBhbmQgcmV2ZWFsaW5nLlxuICAgICAgICBfcXVldWVDYWxsYmFjaygncmV2ZWFsJywgZWxlbSwgZGVsYXllZClcbiAgICAgICAgZWxlbS5yZXZlYWxpbmcgPSB0cnVlXG4gICAgICAgIGVsZW0uc2VlbiA9IHRydWVcblxuICAgICAgICBpZiAoZWxlbS5zZXF1ZW5jZSkge1xuICAgICAgICAgIF9xdWV1ZU5leHRJblNlcXVlbmNlKGVsZW0sIGRlbGF5ZWQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoX3Nob3VsZFJlc2V0KGVsZW0pKSB7XG4gICAgICAgIC8vT3RoZXJ3aXNlIHJlc2V0IG91ciBlbGVtZW50IGFuZFxuICAgICAgICAvLyB0cmlnZ2VyIHRoZSBgYmVmb3JlUmVzZXRgIGNhbGxiYWNrLlxuICAgICAgICBlbGVtLmNvbmZpZy5iZWZvcmVSZXNldChlbGVtLmRvbUVsKVxuICAgICAgICBlbGVtLmRvbUVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLFxuICAgICAgICAgIGVsZW0uc3R5bGVzLmlubGluZSArXG4gICAgICAgICAgZWxlbS5zdHlsZXMudHJhbnNmb3JtLmluaXRpYWwgK1xuICAgICAgICAgIGVsZW0uc3R5bGVzLnRyYW5zaXRpb24uaW5zdGFudFxuICAgICAgICApXG4gICAgICAgIC8vIEFuZCBxdWV1ZSB0aGUgYGFmdGVyUmVzZXRgIGNhbGxiYWNrLlxuICAgICAgICBfcXVldWVDYWxsYmFjaygncmVzZXQnLCBlbGVtKVxuICAgICAgICBlbGVtLnJldmVhbGluZyA9IGZhbHNlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIF9xdWV1ZU5leHRJblNlcXVlbmNlIChlbGVtLCBkZWxheWVkKSB7XG4gICAgdmFyIGVsYXBzZWQgPSAwXG4gICAgdmFyIGRlbGF5ID0gMFxuICAgIHZhciBzZXF1ZW5jZSA9IHNyLnNlcXVlbmNlc1tlbGVtLnNlcXVlbmNlLmlkXVxuXG4gICAgLy8gV2XigJlyZSBwcm9jZXNzaW5nIGEgc2VxdWVuY2VkIGVsZW1lbnQsIHNvIGxldCdzIGJsb2NrIG90aGVyIGVsZW1lbnRzIGluIHRoaXMgc2VxdWVuY2UuXG4gICAgc2VxdWVuY2UuYmxvY2tlZCA9IHRydWVcblxuICAgIC8vIFNpbmNlIHdl4oCZcmUgdHJpZ2dlcmluZyBhbmltYXRpb25zIGEgcGFydCBvZiBhIHNlcXVlbmNlIGFmdGVyIGFuaW1hdGlvbnMgb24gZmlyc3QgbG9hZCxcbiAgICAvLyB3ZSBuZWVkIHRvIGNoZWNrIGZvciB0aGF0IGNvbmRpdGlvbiBhbmQgZXhwbGljaXRseSBhZGQgdGhlIGRlbGF5IHRvIG91ciB0aW1lci5cbiAgICBpZiAoZGVsYXllZCAmJiBlbGVtLmNvbmZpZy51c2VEZWxheSA9PT0gJ29ubG9hZCcpIHtcbiAgICAgIGRlbGF5ID0gZWxlbS5jb25maWcuZGVsYXlcbiAgICB9XG5cbiAgICAvLyBJZiBhIHNlcXVlbmNlIHRpbWVyIGlzIGFscmVhZHkgcnVubmluZywgY2FwdHVyZSB0aGUgZWxhcHNlZCB0aW1lIGFuZCBjbGVhciBpdC5cbiAgICBpZiAoZWxlbS5zZXF1ZW5jZS50aW1lcikge1xuICAgICAgZWxhcHNlZCA9IE1hdGguYWJzKGVsZW0uc2VxdWVuY2UudGltZXIuc3RhcnRlZCAtIG5ldyBEYXRlKCkpXG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGVsZW0uc2VxdWVuY2UudGltZXIpXG4gICAgfVxuXG4gICAgLy8gU3RhcnQgYSBuZXcgdGltZXIuXG4gICAgZWxlbS5zZXF1ZW5jZS50aW1lciA9IHsgc3RhcnRlZDogbmV3IERhdGUoKSB9XG4gICAgZWxlbS5zZXF1ZW5jZS50aW1lci5jbG9jayA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFNlcXVlbmNlIGludGVydmFsIGhhcyBwYXNzZWQsIHNvIHVuYmxvY2sgdGhlIHNlcXVlbmNlIGFuZCByZS1ydW4gdGhlIGhhbmRsZXIuXG4gICAgICBzZXF1ZW5jZS5ibG9ja2VkID0gZmFsc2VcbiAgICAgIGVsZW0uc2VxdWVuY2UudGltZXIgPSBudWxsXG4gICAgICBfaGFuZGxlcigpXG4gICAgfSwgTWF0aC5hYnMoc2VxdWVuY2UuaW50ZXJ2YWwpICsgZGVsYXkgLSBlbGFwc2VkKVxuICB9XG5cbiAgZnVuY3Rpb24gX3F1ZXVlQ2FsbGJhY2sgKHR5cGUsIGVsZW0sIGRlbGF5ZWQpIHtcbiAgICB2YXIgZWxhcHNlZCA9IDBcbiAgICB2YXIgZHVyYXRpb24gPSAwXG4gICAgdmFyIGNhbGxiYWNrID0gJ2FmdGVyJ1xuXG4gICAgLy8gQ2hlY2sgd2hpY2ggY2FsbGJhY2sgd2XigJlyZSB3b3JraW5nIHdpdGguXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdyZXZlYWwnOlxuICAgICAgICBkdXJhdGlvbiA9IGVsZW0uY29uZmlnLmR1cmF0aW9uXG4gICAgICAgIGlmIChkZWxheWVkKSB7XG4gICAgICAgICAgZHVyYXRpb24gKz0gZWxlbS5jb25maWcuZGVsYXlcbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjayArPSAnUmV2ZWFsJ1xuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdyZXNldCc6XG4gICAgICAgIGR1cmF0aW9uID0gZWxlbS5jb25maWcuZHVyYXRpb25cbiAgICAgICAgY2FsbGJhY2sgKz0gJ1Jlc2V0J1xuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIC8vIElmIGEgdGltZXIgaXMgYWxyZWFkeSBydW5uaW5nLCBjYXB0dXJlIHRoZSBlbGFwc2VkIHRpbWUgYW5kIGNsZWFyIGl0LlxuICAgIGlmIChlbGVtLnRpbWVyKSB7XG4gICAgICBlbGFwc2VkID0gTWF0aC5hYnMoZWxlbS50aW1lci5zdGFydGVkIC0gbmV3IERhdGUoKSlcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoZWxlbS50aW1lci5jbG9jaylcbiAgICB9XG5cbiAgICAvLyBTdGFydCBhIG5ldyB0aW1lci5cbiAgICBlbGVtLnRpbWVyID0geyBzdGFydGVkOiBuZXcgRGF0ZSgpIH1cbiAgICBlbGVtLnRpbWVyLmNsb2NrID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gVGhlIHRpbWVyIGNvbXBsZXRlZCwgc28gbGV04oCZcyBmaXJlIHRoZSBjYWxsYmFjayBhbmQgbnVsbCB0aGUgdGltZXIuXG4gICAgICBlbGVtLmNvbmZpZ1tjYWxsYmFja10oZWxlbS5kb21FbClcbiAgICAgIGVsZW0udGltZXIgPSBudWxsXG4gICAgfSwgZHVyYXRpb24gLSBlbGFwc2VkKVxuICB9XG5cbiAgZnVuY3Rpb24gX3Nob3VsZFJldmVhbCAoZWxlbSkge1xuICAgIGlmIChlbGVtLnNlcXVlbmNlKSB7XG4gICAgICB2YXIgc2VxdWVuY2UgPSBzci5zZXF1ZW5jZXNbZWxlbS5zZXF1ZW5jZS5pZF1cbiAgICAgIHJldHVybiBzZXF1ZW5jZS5hY3RpdmUgJiZcbiAgICAgICAgIXNlcXVlbmNlLmJsb2NrZWQgJiZcbiAgICAgICAgIWVsZW0ucmV2ZWFsaW5nICYmXG4gICAgICAgICFlbGVtLmRpc2FibGVkXG4gICAgfVxuICAgIHJldHVybiBfaXNFbGVtVmlzaWJsZShlbGVtKSAmJlxuICAgICAgIWVsZW0ucmV2ZWFsaW5nICYmXG4gICAgICAhZWxlbS5kaXNhYmxlZFxuICB9XG5cbiAgZnVuY3Rpb24gX3Nob3VsZFVzZURlbGF5IChlbGVtKSB7XG4gICAgdmFyIGNvbmZpZyA9IGVsZW0uY29uZmlnLnVzZURlbGF5XG4gICAgcmV0dXJuIGNvbmZpZyA9PT0gJ2Fsd2F5cycgfHxcbiAgICAgIChjb25maWcgPT09ICdvbmxvYWQnICYmICFzci5pbml0aWFsaXplZCkgfHxcbiAgICAgIChjb25maWcgPT09ICdvbmNlJyAmJiAhZWxlbS5zZWVuKVxuICB9XG5cbiAgZnVuY3Rpb24gX3Nob3VsZFJlc2V0IChlbGVtKSB7XG4gICAgaWYgKGVsZW0uc2VxdWVuY2UpIHtcbiAgICAgIHZhciBzZXF1ZW5jZSA9IHNyLnNlcXVlbmNlc1tlbGVtLnNlcXVlbmNlLmlkXVxuICAgICAgcmV0dXJuICFzZXF1ZW5jZS5hY3RpdmUgJiZcbiAgICAgICAgZWxlbS5jb25maWcucmVzZXQgJiZcbiAgICAgICAgZWxlbS5yZXZlYWxpbmcgJiZcbiAgICAgICAgIWVsZW0uZGlzYWJsZWRcbiAgICB9XG4gICAgcmV0dXJuICFfaXNFbGVtVmlzaWJsZShlbGVtKSAmJlxuICAgICAgZWxlbS5jb25maWcucmVzZXQgJiZcbiAgICAgIGVsZW0ucmV2ZWFsaW5nICYmXG4gICAgICAhZWxlbS5kaXNhYmxlZFxuICB9XG5cbiAgZnVuY3Rpb24gX2dldENvbnRhaW5lciAoY29udGFpbmVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBjb250YWluZXIuY2xpZW50V2lkdGgsXG4gICAgICBoZWlnaHQ6IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfZ2V0U2Nyb2xsZWQgKGNvbnRhaW5lcikge1xuICAgIC8vIFJldHVybiB0aGUgY29udGFpbmVyIHNjcm9sbCB2YWx1ZXMsIHBsdXMgdGhlIGl0cyBvZmZzZXQuXG4gICAgaWYgKGNvbnRhaW5lciAmJiBjb250YWluZXIgIT09IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIHZhciBvZmZzZXQgPSBfZ2V0T2Zmc2V0KGNvbnRhaW5lcilcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IGNvbnRhaW5lci5zY3JvbGxMZWZ0ICsgb2Zmc2V0LmxlZnQsXG4gICAgICAgIHk6IGNvbnRhaW5lci5zY3JvbGxUb3AgKyBvZmZzZXQudG9wXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE90aGVyd2lzZSwgZGVmYXVsdCB0byB0aGUgd2luZG93IG9iamVjdOKAmXMgc2Nyb2xsIHZhbHVlcy5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgICAgeTogd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2dldE9mZnNldCAoZG9tRWwpIHtcbiAgICB2YXIgb2Zmc2V0VG9wID0gMFxuICAgIHZhciBvZmZzZXRMZWZ0ID0gMFxuXG4gICAgICAvLyBHcmFiIHRoZSBlbGVtZW504oCZcyBkaW1lbnNpb25zLlxuICAgIHZhciBvZmZzZXRIZWlnaHQgPSBkb21FbC5vZmZzZXRIZWlnaHRcbiAgICB2YXIgb2Zmc2V0V2lkdGggPSBkb21FbC5vZmZzZXRXaWR0aFxuXG4gICAgLy8gTm93IGNhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZWxlbWVudCBhbmQgaXRzIHBhcmVudCwgdGhlblxuICAgIC8vIGFnYWluIGZvciB0aGUgcGFyZW50IHRvIGl0cyBwYXJlbnQsIGFuZCBhZ2FpbiBldGMuLi4gdW50aWwgd2UgaGF2ZSB0aGVcbiAgICAvLyB0b3RhbCBkaXN0YW5jZSBvZiB0aGUgZWxlbWVudCB0byB0aGUgZG9jdW1lbnTigJlzIHRvcCBhbmQgbGVmdCBvcmlnaW4uXG4gICAgZG8ge1xuICAgICAgaWYgKCFpc05hTihkb21FbC5vZmZzZXRUb3ApKSB7XG4gICAgICAgIG9mZnNldFRvcCArPSBkb21FbC5vZmZzZXRUb3BcbiAgICAgIH1cbiAgICAgIGlmICghaXNOYU4oZG9tRWwub2Zmc2V0TGVmdCkpIHtcbiAgICAgICAgb2Zmc2V0TGVmdCArPSBkb21FbC5vZmZzZXRMZWZ0XG4gICAgICB9XG4gICAgICBkb21FbCA9IGRvbUVsLm9mZnNldFBhcmVudFxuICAgIH0gd2hpbGUgKGRvbUVsKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogb2Zmc2V0VG9wLFxuICAgICAgbGVmdDogb2Zmc2V0TGVmdCxcbiAgICAgIGhlaWdodDogb2Zmc2V0SGVpZ2h0LFxuICAgICAgd2lkdGg6IG9mZnNldFdpZHRoXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2lzRWxlbVZpc2libGUgKGVsZW0pIHtcbiAgICB2YXIgb2Zmc2V0ID0gX2dldE9mZnNldChlbGVtLmRvbUVsKVxuICAgIHZhciBjb250YWluZXIgPSBfZ2V0Q29udGFpbmVyKGVsZW0uY29uZmlnLmNvbnRhaW5lcilcbiAgICB2YXIgc2Nyb2xsZWQgPSBfZ2V0U2Nyb2xsZWQoZWxlbS5jb25maWcuY29udGFpbmVyKVxuICAgIHZhciB2RiA9IGVsZW0uY29uZmlnLnZpZXdGYWN0b3JcblxuICAgICAgLy8gRGVmaW5lIHRoZSBlbGVtZW50IGdlb21ldHJ5LlxuICAgIHZhciBlbGVtSGVpZ2h0ID0gb2Zmc2V0LmhlaWdodFxuICAgIHZhciBlbGVtV2lkdGggPSBvZmZzZXQud2lkdGhcbiAgICB2YXIgZWxlbVRvcCA9IG9mZnNldC50b3BcbiAgICB2YXIgZWxlbUxlZnQgPSBvZmZzZXQubGVmdFxuICAgIHZhciBlbGVtQm90dG9tID0gZWxlbVRvcCArIGVsZW1IZWlnaHRcbiAgICB2YXIgZWxlbVJpZ2h0ID0gZWxlbUxlZnQgKyBlbGVtV2lkdGhcblxuICAgIHJldHVybiBjb25maXJtQm91bmRzKCkgfHwgaXNQb3NpdGlvbkZpeGVkKClcblxuICAgIGZ1bmN0aW9uIGNvbmZpcm1Cb3VuZHMgKCkge1xuICAgICAgLy8gRGVmaW5lIHRoZSBlbGVtZW504oCZcyBmdW5jdGlvbmFsIGJvdW5kYXJpZXMgdXNpbmcgaXRzIHZpZXcgZmFjdG9yLlxuICAgICAgdmFyIHRvcCA9IGVsZW1Ub3AgKyBlbGVtSGVpZ2h0ICogdkZcbiAgICAgIHZhciBsZWZ0ID0gZWxlbUxlZnQgKyBlbGVtV2lkdGggKiB2RlxuICAgICAgdmFyIGJvdHRvbSA9IGVsZW1Cb3R0b20gLSBlbGVtSGVpZ2h0ICogdkZcbiAgICAgIHZhciByaWdodCA9IGVsZW1SaWdodCAtIGVsZW1XaWR0aCAqIHZGXG5cbiAgICAgIC8vIERlZmluZSB0aGUgY29udGFpbmVyIGZ1bmN0aW9uYWwgYm91bmRhcmllcyB1c2luZyBpdHMgdmlldyBvZmZzZXQuXG4gICAgICB2YXIgdmlld1RvcCA9IHNjcm9sbGVkLnkgKyBlbGVtLmNvbmZpZy52aWV3T2Zmc2V0LnRvcFxuICAgICAgdmFyIHZpZXdMZWZ0ID0gc2Nyb2xsZWQueCArIGVsZW0uY29uZmlnLnZpZXdPZmZzZXQubGVmdFxuICAgICAgdmFyIHZpZXdCb3R0b20gPSBzY3JvbGxlZC55IC0gZWxlbS5jb25maWcudmlld09mZnNldC5ib3R0b20gKyBjb250YWluZXIuaGVpZ2h0XG4gICAgICB2YXIgdmlld1JpZ2h0ID0gc2Nyb2xsZWQueCAtIGVsZW0uY29uZmlnLnZpZXdPZmZzZXQucmlnaHQgKyBjb250YWluZXIud2lkdGhcblxuICAgICAgcmV0dXJuIHRvcCA8IHZpZXdCb3R0b20gJiZcbiAgICAgICAgYm90dG9tID4gdmlld1RvcCAmJlxuICAgICAgICBsZWZ0IDwgdmlld1JpZ2h0ICYmXG4gICAgICAgIHJpZ2h0ID4gdmlld0xlZnRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1Bvc2l0aW9uRml4ZWQgKCkge1xuICAgICAgcmV0dXJuICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtLmRvbUVsKS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXRpbGl0aWVzXG4gICAqIC0tLS0tLS0tLVxuICAgKi9cblxuICBmdW5jdGlvbiBUb29scyAoKSB7fVxuXG4gIFRvb2xzLnByb3RvdHlwZS5pc09iamVjdCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0XG4gIH1cblxuICBUb29scy5wcm90b3R5cGUuaXNOb2RlID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93Lk5vZGUgPT09ICdvYmplY3QnXG4gICAgICA/IG9iamVjdCBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlXG4gICAgICA6IG9iamVjdCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgICB0eXBlb2Ygb2JqZWN0Lm5vZGVUeXBlID09PSAnbnVtYmVyJyAmJlxuICAgICAgICB0eXBlb2Ygb2JqZWN0Lm5vZGVOYW1lID09PSAnc3RyaW5nJ1xuICB9XG5cbiAgVG9vbHMucHJvdG90eXBlLmlzTm9kZUxpc3QgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgdmFyIHByb3RvdHlwZVRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdClcbiAgICB2YXIgcmVnZXggPSAvXlxcW29iamVjdCAoSFRNTENvbGxlY3Rpb258Tm9kZUxpc3R8T2JqZWN0KVxcXSQvXG5cbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdy5Ob2RlTGlzdCA9PT0gJ29iamVjdCdcbiAgICAgID8gb2JqZWN0IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0XG4gICAgICA6IG9iamVjdCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgICByZWdleC50ZXN0KHByb3RvdHlwZVRvU3RyaW5nKSAmJlxuICAgICAgICB0eXBlb2Ygb2JqZWN0Lmxlbmd0aCA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgKG9iamVjdC5sZW5ndGggPT09IDAgfHwgdGhpcy5pc05vZGUob2JqZWN0WzBdKSlcbiAgfVxuXG4gIFRvb2xzLnByb3RvdHlwZS5mb3JPd24gPSBmdW5jdGlvbiAob2JqZWN0LCBjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5pc09iamVjdChvYmplY3QpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIm9iamVjdFwiLCBidXQgcmVjZWl2ZWQgXCInICsgdHlwZW9mIG9iamVjdCArICdcIi4nKVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBjYWxsYmFjayhwcm9wZXJ0eSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFRvb2xzLnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICB0aGlzLmZvck93bihzb3VyY2UsIGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgaWYgKHRoaXMuaXNPYmplY3Qoc291cmNlW3Byb3BlcnR5XSkpIHtcbiAgICAgICAgaWYgKCF0YXJnZXRbcHJvcGVydHldIHx8ICF0aGlzLmlzT2JqZWN0KHRhcmdldFtwcm9wZXJ0eV0pKSB7XG4gICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IHt9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5leHRlbmQodGFyZ2V0W3Byb3BlcnR5XSwgc291cmNlW3Byb3BlcnR5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldXG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKVxuICAgIHJldHVybiB0YXJnZXRcbiAgfVxuXG4gIFRvb2xzLnByb3RvdHlwZS5leHRlbmRDbG9uZSA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICAgIHJldHVybiB0aGlzLmV4dGVuZCh0aGlzLmV4dGVuZCh7fSwgdGFyZ2V0KSwgc291cmNlKVxuICB9XG5cbiAgVG9vbHMucHJvdG90eXBlLmlzTW9iaWxlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudClcbiAgfVxuXG4gIC8qKlxuICAgKiBQb2x5ZmlsbHNcbiAgICogLS0tLS0tLS1cbiAgICovXG5cbiAgX3JlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MClcbiAgICB9XG5cbiAgLyoqXG4gICAqIE1vZHVsZSBXcmFwcGVyXG4gICAqIC0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gU2Nyb2xsUmV2ZWFsXG4gICAgfSlcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gU2Nyb2xsUmV2ZWFsXG4gIH0gZWxzZSB7XG4gICAgd2luZG93LlNjcm9sbFJldmVhbCA9IFNjcm9sbFJldmVhbFxuICB9XG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2Nyb2xscmV2ZWFsL2Rpc3Qvc2Nyb2xscmV2ZWFsLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9zY3JvbGxyZXZlYWwvZGlzdC9zY3JvbGxyZXZlYWwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgc2Nyb2xsIGZyb20gJy4uL3NjcmlwdHMvc2Nyb2xsJztcbmltcG9ydCBuYXZPbk1vYmlsZSBmcm9tICcuLi9zY3JpcHRzL25hdk9uTW9iaWxlJztcblxuaW1wb3J0ICcuLi9zdHlsZXMvdXNlcmZlZWRzLnNjc3MnO1xuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICBpbml0KCk7XG59IGVsc2Uge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGluaXQpO1xufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBzY3JvbGwoKTtcbiAgbmF2T25Nb2JpbGUoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hYm91dC9hYm91dC5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdE5hdk9uTW9iaWxlKCkge1xuICBsZXQgJGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1tb2JpbGVNZW51Jyk7XG5cbiAgJGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IHRhcmdldCA9ICRidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xuXG4gICAgICBpZiAodGFyZ2V0ICE9IHVuZGVmaW5lZCAmJiB0YXJnZXQgIT0gXCJcIikge1xuICAgICAgICAkYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXQpLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgICAgfVxuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9uYXZPbk1vYmlsZS5qcyIsImltcG9ydCBTY3JvbGxSZXZlYWwgZnJvbSAnc2Nyb2xscmV2ZWFsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFNjcm9sbFJldmVhbCgpIHtcbiAgd2luZG93LnNyID0gU2Nyb2xsUmV2ZWFsKHsgZHVyYXRpb246IDcwMCwgdmlld0ZhY3RvcjogMC40IH0pO1xuXG4gIGlmIChzci5pc1N1cHBvcnRlZCgpKXtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3InKTtcblxuICAgIHNyLnJldmVhbCgnLmFuaW0tZmFkZScsIHsgZGlzdGFuY2U6ICcwcHgnLCBzY2FsZTogMSwgZHVyYXRpb246IDEwMDAwIH0pO1xuICAgIHNyLnJldmVhbCgnLmFuaW0tZmFkZUJvdHRvbScsIHtvcmlnaW46IFwiYm90dG9tXCIsIHNjYWxlOjEsIGRpc3RhbmNlOicxMHB4JywgZWFzaW5nOiAnZWFzZS1pbicsIGR1cmF0aW9uOjMwMH0pO1xuICAgIHNyLnJldmVhbCgnLmFuaW0tZmFkZVJpZ2h0JywgeyBvcmlnaW46IFwicmlnaHRcIiB9KTtcbiAgICBzci5yZXZlYWwoJy5hbmltLWZhZGVMZWZ0JywgeyBvcmlnaW46IFwibGVmdFwiICwgc2NhbGU6IDEsIGRpc3RhbmNlOicyMHB4JywgZWFzaW5nOiAnY3ViaWMtYmV6aWVyKDAuNiwgMC4zLCAwLjEsIDEpJyB9KTtcbiAgICBzci5yZXZlYWwoJy5hbmltLWZhZGVUb3AnLCB7IG9yaWdpbjogXCJ0b3BcIiB9KTtcbiAgICBzci5yZXZlYWwoJy5hbmltLWJhY2tUb0Zyb250JywgeyBzY2FsZTogMC41IH0pO1xuICAgIHNyLnJldmVhbCgnLmFuaW0tZnJvbnRUb0JhY2snLCB7IHNjYWxlOiAxLjIgfSk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NyJyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL3Njcm9sbC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3VzZXJmZWVkcy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9zdHlsZXMvdXNlcmZlZWRzLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiXSwic291cmNlUm9vdCI6IiJ9