/*!
 * jQuery JavaScript Library v1.11.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:42Z
 */
function handleTabShown() {
  $(window).trigger("scroll");
  var $video = $($(this).attr("href")).find("video[data-delayed-loop-timeout]");
  $video.size() && ($video.data("dvl") || $video.delayedVideoLoop(), $video.data("dvl").attach())
}

function handleTabHidden() {
  $(window).trigger("scroll");
  var $video = $($(this).attr("href")).find("video[data-delayed-loop-timeout]");
  $video.size() && $video.data("dvl") && $video.data("dvl").detach()
}

function setRandomClass() {
  var container = $(".customers-map"),
    items = container.find(".animated-pin"),
    number = items.length,
    random = Math.floor(Math.random() * number);
  items.removeClass("pulse animated"), items.eq(random).addClass("pulse animated")
}
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if (function(global, factory) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = global.document ? factory(global, !0) : function(w) {
      if (!w.document) throw new Error("jQuery requires a window with a document");
      return factory(w)
    } : factory(global)
  }("undefined" != typeof window ? window : this, function(window, noGlobal) {
    function isArraylike(obj) {
      var length = obj.length,
        type = jQuery.type(obj);
      return "function" === type || jQuery.isWindow(obj) ? !1 : 1 === obj.nodeType && length ? !0 : "array" === type || 0 === length || "number" == typeof length && length > 0 && length - 1 in obj
    }

    function winnow(elements, qualifier, not) {
      if (jQuery.isFunction(qualifier)) return jQuery.grep(elements, function(elem, i) {
        return !!qualifier.call(elem, i, elem) !== not
      });
      if (qualifier.nodeType) return jQuery.grep(elements, function(elem) {
        return elem === qualifier !== not
      });
      if ("string" == typeof qualifier) {
        if (risSimple.test(qualifier)) return jQuery.filter(qualifier, elements, not);
        qualifier = jQuery.filter(qualifier, elements)
      }
      return jQuery.grep(elements, function(elem) {
        return jQuery.inArray(elem, qualifier) >= 0 !== not
      })
    }

    function sibling(cur, dir) {
      do cur = cur[dir]; while (cur && 1 !== cur.nodeType);
      return cur
    }

    function createOptions(options) {
      var object = optionsCache[options] = {};
      return jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
        object[flag] = !0
      }), object
    }

    function detach() {
      document.addEventListener ? (document.removeEventListener("DOMContentLoaded", completed, !1), window.removeEventListener("load", completed, !1)) : (document.detachEvent("onreadystatechange", completed), window.detachEvent("onload", completed))
    }

    function completed() {
      (document.addEventListener || "load" === event.type || "complete" === document.readyState) && (detach(), jQuery.ready())
    }

    function dataAttr(elem, key, data) {
      if (void 0 === data && 1 === elem.nodeType) {
        var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
        if (data = elem.getAttribute(name), "string" == typeof data) {
          try {
            data = "true" === data ? !0 : "false" === data ? !1 : "null" === data ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data
          } catch (e) {}
          jQuery.data(elem, key, data)
        } else data = void 0
      }
      return data
    }

    function isEmptyDataObject(obj) {
      var name;
      for (name in obj)
        if (("data" !== name || !jQuery.isEmptyObject(obj[name])) && "toJSON" !== name) return !1;
      return !0
    }

    function internalData(elem, name, data, pvt) {
      if (jQuery.acceptData(elem)) {
        var ret, thisCache, internalKey = jQuery.expando,
          isNode = elem.nodeType,
          cache = isNode ? jQuery.cache : elem,
          id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
        if (id && cache[id] && (pvt || cache[id].data) || void 0 !== data || "string" != typeof name) return id || (id = isNode ? elem[internalKey] = deletedIds.pop() || jQuery.guid++ : internalKey), cache[id] || (cache[id] = isNode ? {} : {
          toJSON: jQuery.noop
        }), ("object" == typeof name || "function" == typeof name) && (pvt ? cache[id] = jQuery.extend(cache[id], name) : cache[id].data = jQuery.extend(cache[id].data, name)), thisCache = cache[id], pvt || (thisCache.data || (thisCache.data = {}), thisCache = thisCache.data), void 0 !== data && (thisCache[jQuery.camelCase(name)] = data), "string" == typeof name ? (ret = thisCache[name], null == ret && (ret = thisCache[jQuery.camelCase(name)])) : ret = thisCache, ret
      }
    }

    function internalRemoveData(elem, name, pvt) {
      if (jQuery.acceptData(elem)) {
        var thisCache, i, isNode = elem.nodeType,
          cache = isNode ? jQuery.cache : elem,
          id = isNode ? elem[jQuery.expando] : jQuery.expando;
        if (cache[id]) {
          if (name && (thisCache = pvt ? cache[id] : cache[id].data)) {
            jQuery.isArray(name) ? name = name.concat(jQuery.map(name, jQuery.camelCase)) : name in thisCache ? name = [name] : (name = jQuery.camelCase(name), name = name in thisCache ? [name] : name.split(" ")), i = name.length;
            for (; i--;) delete thisCache[name[i]];
            if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) return
          }(pvt || (delete cache[id].data, isEmptyDataObject(cache[id]))) && (isNode ? jQuery.cleanData([elem], !0) : support.deleteExpando || cache != cache.window ? delete cache[id] : cache[id] = null)
        }
      }
    }

    function returnTrue() {
      return !0
    }

    function returnFalse() {
      return !1
    }

    function safeActiveElement() {
      try {
        return document.activeElement
      } catch (err) {}
    }

    function createSafeFragment(document) {
      var list = nodeNames.split("|"),
        safeFrag = document.createDocumentFragment();
      if (safeFrag.createElement)
        for (; list.length;) safeFrag.createElement(list.pop());
      return safeFrag
    }

    function getAll(context, tag) {
      var elems, elem, i = 0,
        found = typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== strundefined ? context.querySelectorAll(tag || "*") : void 0;
      if (!found)
        for (found = [], elems = context.childNodes || context; null != (elem = elems[i]); i++) !tag || jQuery.nodeName(elem, tag) ? found.push(elem) : jQuery.merge(found, getAll(elem, tag));
      return void 0 === tag || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found
    }

    function fixDefaultChecked(elem) {
      rcheckableType.test(elem.type) && (elem.defaultChecked = elem.checked)
    }

    function manipulationTarget(elem, content) {
      return jQuery.nodeName(elem, "table") && jQuery.nodeName(11 !== content.nodeType ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem
    }

    function disableScript(elem) {
      return elem.type = (null !== jQuery.find.attr(elem, "type")) + "/" + elem.type, elem
    }

    function restoreScript(elem) {
      var match = rscriptTypeMasked.exec(elem.type);
      return match ? elem.type = match[1] : elem.removeAttribute("type"), elem
    }

    function setGlobalEval(elems, refElements) {
      for (var elem, i = 0; null != (elem = elems[i]); i++) jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"))
    }

    function cloneCopyEvent(src, dest) {
      if (1 === dest.nodeType && jQuery.hasData(src)) {
        var type, i, l, oldData = jQuery._data(src),
          curData = jQuery._data(dest, oldData),
          events = oldData.events;
        if (events) {
          delete curData.handle, curData.events = {};
          for (type in events)
            for (i = 0, l = events[type].length; l > i; i++) jQuery.event.add(dest, type, events[type][i])
        }
        curData.data && (curData.data = jQuery.extend({}, curData.data))
      }
    }

    function fixCloneNodeIssues(src, dest) {
      var nodeName, e, data;
      if (1 === dest.nodeType) {
        if (nodeName = dest.nodeName.toLowerCase(), !support.noCloneEvent && dest[jQuery.expando]) {
          data = jQuery._data(dest);
          for (e in data.events) jQuery.removeEvent(dest, e, data.handle);
          dest.removeAttribute(jQuery.expando)
        }
        "script" === nodeName && dest.text !== src.text ? (disableScript(dest).text = src.text, restoreScript(dest)) : "object" === nodeName ? (dest.parentNode && (dest.outerHTML = src.outerHTML), support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML) && (dest.innerHTML = src.innerHTML)) : "input" === nodeName && rcheckableType.test(src.type) ? (dest.defaultChecked = dest.checked = src.checked, dest.value !== src.value && (dest.value = src.value)) : "option" === nodeName ? dest.defaultSelected = dest.selected = src.defaultSelected : ("input" === nodeName || "textarea" === nodeName) && (dest.defaultValue = src.defaultValue)
      }
    }

    function actualDisplay(name, doc) {
      var style, elem = jQuery(doc.createElement(name)).appendTo(doc.body),
        display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ? style.display : jQuery.css(elem[0], "display");
      return elem.detach(), display
    }

    function defaultDisplay(nodeName) {
      var doc = document,
        display = elemdisplay[nodeName];
      return display || (display = actualDisplay(nodeName, doc), "none" !== display && display || (iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement), doc = (iframe[0].contentWindow || iframe[0].contentDocument).document, doc.write(), doc.close(), display = actualDisplay(nodeName, doc), iframe.detach()), elemdisplay[nodeName] = display), display
    }

    function addGetHookIf(conditionFn, hookFn) {
      return {
        get: function() {
          var condition = conditionFn();
          if (null != condition) return condition ? void delete this.get : (this.get = hookFn).apply(this, arguments)
        }
      }
    }

    function vendorPropName(style, name) {
      if (name in style) return name;
      for (var capName = name.charAt(0).toUpperCase() + name.slice(1), origName = name, i = cssPrefixes.length; i--;)
        if (name = cssPrefixes[i] + capName, name in style) return name;
      return origName
    }

    function showHide(elements, show) {
      for (var display, elem, hidden, values = [], index = 0, length = elements.length; length > index; index++) elem = elements[index], elem.style && (values[index] = jQuery._data(elem, "olddisplay"), display = elem.style.display, show ? (values[index] || "none" !== display || (elem.style.display = ""), "" === elem.style.display && isHidden(elem) && (values[index] = jQuery._data(elem, "olddisplay", defaultDisplay(elem.nodeName)))) : (hidden = isHidden(elem), (display && "none" !== display || !hidden) && jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"))));
      for (index = 0; length > index; index++) elem = elements[index], elem.style && (show && "none" !== elem.style.display && "" !== elem.style.display || (elem.style.display = show ? values[index] || "" : "none"));
      return elements
    }

    function setPositiveNumber(elem, value, subtract) {
      var matches = rnumsplit.exec(value);
      return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value
    }

    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
      for (var i = extra === (isBorderBox ? "border" : "content") ? 4 : "width" === name ? 1 : 0, val = 0; 4 > i; i += 2) "margin" === extra && (val += jQuery.css(elem, extra + cssExpand[i], !0, styles)), isBorderBox ? ("content" === extra && (val -= jQuery.css(elem, "padding" + cssExpand[i], !0, styles)), "margin" !== extra && (val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles))) : (val += jQuery.css(elem, "padding" + cssExpand[i], !0, styles), "padding" !== extra && (val += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles)));
      return val
    }

    function getWidthOrHeight(elem, name, extra) {
      var valueIsBorderBox = !0,
        val = "width" === name ? elem.offsetWidth : elem.offsetHeight,
        styles = getStyles(elem),
        isBorderBox = support.boxSizing && "border-box" === jQuery.css(elem, "boxSizing", !1, styles);
      if (0 >= val || null == val) {
        if (val = curCSS(elem, name, styles), (0 > val || null == val) && (val = elem.style[name]), rnumnonpx.test(val)) return val;
        valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]), val = parseFloat(val) || 0
      }
      return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px"
    }

    function Tween(elem, options, prop, end, easing) {
      return new Tween.prototype.init(elem, options, prop, end, easing)
    }

    function createFxNow() {
      return setTimeout(function() {
        fxNow = void 0
      }), fxNow = jQuery.now()
    }

    function genFx(type, includeWidth) {
      var which, attrs = {
          height: type
        },
        i = 0;
      for (includeWidth = includeWidth ? 1 : 0; 4 > i; i += 2 - includeWidth) which = cssExpand[i], attrs["margin" + which] = attrs["padding" + which] = type;
      return includeWidth && (attrs.opacity = attrs.width = type), attrs
    }

    function createTween(value, prop, animation) {
      for (var tween, collection = (tweeners[prop] || []).concat(tweeners["*"]), index = 0, length = collection.length; length > index; index++)
        if (tween = collection[index].call(animation, prop, value)) return tween
    }

    function defaultPrefilter(elem, props, opts) {
      var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHidden(elem),
        dataShow = jQuery._data(elem, "fxshow");
      opts.queue || (hooks = jQuery._queueHooks(elem, "fx"), null == hooks.unqueued && (hooks.unqueued = 0, oldfire = hooks.empty.fire, hooks.empty.fire = function() {
        hooks.unqueued || oldfire()
      }), hooks.unqueued++, anim.always(function() {
        anim.always(function() {
          hooks.unqueued--, jQuery.queue(elem, "fx").length || hooks.empty.fire()
        })
      })), 1 === elem.nodeType && ("height" in props || "width" in props) && (opts.overflow = [style.overflow, style.overflowX, style.overflowY], display = jQuery.css(elem, "display"), checkDisplay = "none" === display ? jQuery._data(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display, "inline" === checkDisplay && "none" === jQuery.css(elem, "float") && (support.inlineBlockNeedsLayout && "inline" !== defaultDisplay(elem.nodeName) ? style.zoom = 1 : style.display = "inline-block")), opts.overflow && (style.overflow = "hidden", support.shrinkWrapBlocks() || anim.always(function() {
        style.overflow = opts.overflow[0], style.overflowX = opts.overflow[1], style.overflowY = opts.overflow[2]
      }));
      for (prop in props)
        if (value = props[prop], rfxtypes.exec(value)) {
          if (delete props[prop], toggle = toggle || "toggle" === value, value === (hidden ? "hide" : "show")) {
            if ("show" !== value || !dataShow || void 0 === dataShow[prop]) continue;
            hidden = !0
          }
          orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop)
        } else display = void 0;
      if (jQuery.isEmptyObject(orig)) "inline" === ("none" === display ? defaultDisplay(elem.nodeName) : display) && (style.display = display);
      else {
        dataShow ? "hidden" in dataShow && (hidden = dataShow.hidden) : dataShow = jQuery._data(elem, "fxshow", {}), toggle && (dataShow.hidden = !hidden), hidden ? jQuery(elem).show() : anim.done(function() {
          jQuery(elem).hide()
        }), anim.done(function() {
          var prop;
          jQuery._removeData(elem, "fxshow");
          for (prop in orig) jQuery.style(elem, prop, orig[prop])
        });
        for (prop in orig) tween = createTween(hidden ? dataShow[prop] : 0, prop, anim), prop in dataShow || (dataShow[prop] = tween.start, hidden && (tween.end = tween.start, tween.start = "width" === prop || "height" === prop ? 1 : 0))
      }
    }

    function propFilter(props, specialEasing) {
      var index, name, easing, value, hooks;
      for (index in props)
        if (name = jQuery.camelCase(index), easing = specialEasing[name], value = props[index], jQuery.isArray(value) && (easing = value[1], value = props[index] = value[0]), index !== name && (props[name] = value, delete props[index]), hooks = jQuery.cssHooks[name], hooks && "expand" in hooks) {
          value = hooks.expand(value), delete props[name];
          for (index in value) index in props || (props[index] = value[index], specialEasing[index] = easing)
        } else specialEasing[name] = easing
    }

    function Animation(elem, properties, options) {
      var result, stopped, index = 0,
        length = animationPrefilters.length,
        deferred = jQuery.Deferred().always(function() {
          delete tick.elem
        }),
        tick = function() {
          if (stopped) return !1;
          for (var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length; length > index; index++) animation.tweens[index].run(percent);
          return deferred.notifyWith(elem, [animation, percent, remaining]), 1 > percent && length ? remaining : (deferred.resolveWith(elem, [animation]), !1)
        },
        animation = deferred.promise({
          elem: elem,
          props: jQuery.extend({}, properties),
          opts: jQuery.extend(!0, {
            specialEasing: {}
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end) {
            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
            return animation.tweens.push(tween), tween
          },
          stop: function(gotoEnd) {
            var index = 0,
              length = gotoEnd ? animation.tweens.length : 0;
            if (stopped) return this;
            for (stopped = !0; length > index; index++) animation.tweens[index].run(1);
            return gotoEnd ? deferred.resolveWith(elem, [animation, gotoEnd]) : deferred.rejectWith(elem, [animation, gotoEnd]), this
          }
        }),
        props = animation.props;
      for (propFilter(props, animation.opts.specialEasing); length > index; index++)
        if (result = animationPrefilters[index].call(animation, elem, props, animation.opts)) return result;
      return jQuery.map(props, createTween, animation), jQuery.isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), jQuery.fx.timer(jQuery.extend(tick, {
        elem: elem,
        anim: animation,
        queue: animation.opts.queue
      })), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)
    }

    function addToPrefiltersOrTransports(structure) {
      return function(dataTypeExpression, func) {
        "string" != typeof dataTypeExpression && (func = dataTypeExpression, dataTypeExpression = "*");
        var dataType, i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
        if (jQuery.isFunction(func))
          for (; dataType = dataTypes[i++];) "+" === dataType.charAt(0) ? (dataType = dataType.slice(1) || "*", (structure[dataType] = structure[dataType] || []).unshift(func)) : (structure[dataType] = structure[dataType] || []).push(func)
      }
    }

    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
      function inspect(dataType) {
        var selected;
        return inspected[dataType] = !0, jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
          var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
          return "string" != typeof dataTypeOrTransport || seekingTransport || inspected[dataTypeOrTransport] ? seekingTransport ? !(selected = dataTypeOrTransport) : void 0 : (options.dataTypes.unshift(dataTypeOrTransport), inspect(dataTypeOrTransport), !1)
        }), selected
      }
      var inspected = {},
        seekingTransport = structure === transports;
      return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*")
    }

    function ajaxExtend(target, src) {
      var deep, key, flatOptions = jQuery.ajaxSettings.flatOptions || {};
      for (key in src) void 0 !== src[key] && ((flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]);
      return deep && jQuery.extend(!0, target, deep), target
    }

    function ajaxHandleResponses(s, jqXHR, responses) {
      for (var firstDataType, ct, finalDataType, type, contents = s.contents, dataTypes = s.dataTypes;
        "*" === dataTypes[0];) dataTypes.shift(), void 0 === ct && (ct = s.mimeType || jqXHR.getResponseHeader("Content-Type"));
      if (ct)
        for (type in contents)
          if (contents[type] && contents[type].test(ct)) {
            dataTypes.unshift(type);
            break
          }
      if (dataTypes[0] in responses) finalDataType = dataTypes[0];
      else {
        for (type in responses) {
          if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
            finalDataType = type;
            break
          }
          firstDataType || (firstDataType = type)
        }
        finalDataType = finalDataType || firstDataType
      }
      return finalDataType ? (finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType]) : void 0
    }

    function ajaxConvert(s, response, jqXHR, isSuccess) {
      var conv2, current, conv, tmp, prev, converters = {},
        dataTypes = s.dataTypes.slice();
      if (dataTypes[1])
        for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
      for (current = dataTypes.shift(); current;)
        if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), prev = current, current = dataTypes.shift())
          if ("*" === current) current = prev;
          else if ("*" !== prev && prev !== current) {
        if (conv = converters[prev + " " + current] || converters["* " + current], !conv)
          for (conv2 in converters)
            if (tmp = conv2.split(" "), tmp[1] === current && (conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]])) {
              conv === !0 ? conv = converters[conv2] : converters[conv2] !== !0 && (current = tmp[0], dataTypes.unshift(tmp[1]));
              break
            }
        if (conv !== !0)
          if (conv && s["throws"]) response = conv(response);
          else try {
            response = conv(response)
          } catch (e) {
            return {
              state: "parsererror",
              error: conv ? e : "No conversion from " + prev + " to " + current
            }
          }
      }
      return {
        state: "success",
        data: response
      }
    }

    function buildParams(prefix, obj, traditional, add) {
      var name;
      if (jQuery.isArray(obj)) jQuery.each(obj, function(i, v) {
        traditional || rbracket.test(prefix) ? add(prefix, v) : buildParams(prefix + "[" + ("object" == typeof v ? i : "") + "]", v, traditional, add)
      });
      else if (traditional || "object" !== jQuery.type(obj)) add(prefix, obj);
      else
        for (name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add)
    }

    function createStandardXHR() {
      try {
        return new window.XMLHttpRequest
      } catch (e) {}
    }

    function createActiveXHR() {
      try {
        return new window.ActiveXObject("Microsoft.XMLHTTP")
      } catch (e) {}
    }

    function getWindow(elem) {
      return jQuery.isWindow(elem) ? elem : 9 === elem.nodeType ? elem.defaultView || elem.parentWindow : !1
    }
    var deletedIds = [],
      slice = deletedIds.slice,
      concat = deletedIds.concat,
      push = deletedIds.push,
      indexOf = deletedIds.indexOf,
      class2type = {},
      toString = class2type.toString,
      hasOwn = class2type.hasOwnProperty,
      support = {},
      version = "1.11.1",
      jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context)
      },
      rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      rmsPrefix = /^-ms-/,
      rdashAlpha = /-([\da-z])/gi,
      fcamelCase = function(all, letter) {
        return letter.toUpperCase()
      };
    jQuery.fn = jQuery.prototype = {
      jquery: version,
      constructor: jQuery,
      selector: "",
      length: 0,
      toArray: function() {
        return slice.call(this)
      },
      get: function(num) {
        return null != num ? 0 > num ? this[num + this.length] : this[num] : slice.call(this)
      },
      pushStack: function(elems) {
        var ret = jQuery.merge(this.constructor(), elems);
        return ret.prevObject = this, ret.context = this.context, ret
      },
      each: function(callback, args) {
        return jQuery.each(this, callback, args)
      },
      map: function(callback) {
        return this.pushStack(jQuery.map(this, function(elem, i) {
          return callback.call(elem, i, elem)
        }))
      },
      slice: function() {
        return this.pushStack(slice.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(i) {
        var len = this.length,
          j = +i + (0 > i ? len : 0);
        return this.pushStack(j >= 0 && len > j ? [this[j]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor(null)
      },
      push: push,
      sort: deletedIds.sort,
      splice: deletedIds.splice
    }, jQuery.extend = jQuery.fn.extend = function() {
      var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = !1;
      for ("boolean" == typeof target && (deep = target, target = arguments[i] || {}, i++), "object" == typeof target || jQuery.isFunction(target) || (target = {}), i === length && (target = this, i--); length > i; i++)
        if (null != (options = arguments[i]))
          for (name in options) src = target[name], copy = options[name], target !== copy && (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy))) ? (copyIsArray ? (copyIsArray = !1, clone = src && jQuery.isArray(src) ? src : []) : clone = src && jQuery.isPlainObject(src) ? src : {}, target[name] = jQuery.extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy));
      return target
    }, jQuery.extend({
      expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(msg) {
        throw new Error(msg)
      },
      noop: function() {},
      isFunction: function(obj) {
        return "function" === jQuery.type(obj)
      },
      isArray: Array.isArray || function(obj) {
        return "array" === jQuery.type(obj)
      },
      isWindow: function(obj) {
        return null != obj && obj == obj.window
      },
      isNumeric: function(obj) {
        return !jQuery.isArray(obj) && obj - parseFloat(obj) >= 0
      },
      isEmptyObject: function(obj) {
        var name;
        for (name in obj) return !1;
        return !0
      },
      isPlainObject: function(obj) {
        var key;
        if (!obj || "object" !== jQuery.type(obj) || obj.nodeType || jQuery.isWindow(obj)) return !1;
        try {
          if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) return !1
        } catch (e) {
          return !1
        }
        if (support.ownLast)
          for (key in obj) return hasOwn.call(obj, key);
        for (key in obj);
        return void 0 === key || hasOwn.call(obj, key)
      },
      type: function(obj) {
        return null == obj ? obj + "" : "object" == typeof obj || "function" == typeof obj ? class2type[toString.call(obj)] || "object" : typeof obj
      },
      globalEval: function(data) {
        data && jQuery.trim(data) && (window.execScript || function(data) {
          window.eval.call(window, data)
        })(data)
      },
      camelCase: function(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
      },
      nodeName: function(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase()
      },
      each: function(obj, callback, args) {
        var value, i = 0,
          length = obj.length,
          isArray = isArraylike(obj);
        if (args) {
          if (isArray)
            for (; length > i && (value = callback.apply(obj[i], args), value !== !1); i++);
          else
            for (i in obj)
              if (value = callback.apply(obj[i], args), value === !1) break
        } else if (isArray)
          for (; length > i && (value = callback.call(obj[i], i, obj[i]), value !== !1); i++);
        else
          for (i in obj)
            if (value = callback.call(obj[i], i, obj[i]), value === !1) break;
        return obj
      },
      trim: function(text) {
        return null == text ? "" : (text + "").replace(rtrim, "")
      },
      makeArray: function(arr, results) {
        var ret = results || [];
        return null != arr && (isArraylike(Object(arr)) ? jQuery.merge(ret, "string" == typeof arr ? [arr] : arr) : push.call(ret, arr)), ret
      },
      inArray: function(elem, arr, i) {
        var len;
        if (arr) {
          if (indexOf) return indexOf.call(arr, elem, i);
          for (len = arr.length, i = i ? 0 > i ? Math.max(0, len + i) : i : 0; len > i; i++)
            if (i in arr && arr[i] === elem) return i
        }
        return -1
      },
      merge: function(first, second) {
        for (var len = +second.length, j = 0, i = first.length; len > j;) first[i++] = second[j++];
        if (len !== len)
          for (; void 0 !== second[j];) first[i++] = second[j++];
        return first.length = i, first
      },
      grep: function(elems, callback, invert) {
        for (var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert; length > i; i++) callbackInverse = !callback(elems[i], i), callbackInverse !== callbackExpect && matches.push(elems[i]);
        return matches
      },
      map: function(elems, callback, arg) {
        var value, i = 0,
          length = elems.length,
          isArray = isArraylike(elems),
          ret = [];
        if (isArray)
          for (; length > i; i++) value = callback(elems[i], i, arg), null != value && ret.push(value);
        else
          for (i in elems) value = callback(elems[i], i, arg), null != value && ret.push(value);
        return concat.apply([], ret)
      },
      guid: 1,
      proxy: function(fn, context) {
        var args, proxy, tmp;
        return "string" == typeof context && (tmp = fn[context], context = fn, fn = tmp), jQuery.isFunction(fn) ? (args = slice.call(arguments, 2), proxy = function() {
          return fn.apply(context || this, args.concat(slice.call(arguments)))
        }, proxy.guid = fn.guid = fn.guid || jQuery.guid++, proxy) : void 0
      },
      now: function() {
        return +new Date
      },
      support: support
    }), jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
      class2type["[object " + name + "]"] = name.toLowerCase()
    });
    var Sizzle =
      /*!
       * Sizzle CSS Selector Engine v1.10.19
       * http://sizzlejs.com/
       *
       * Copyright 2013 jQuery Foundation, Inc. and other contributors
       * Released under the MIT license
       * http://jquery.org/license
       *
       * Date: 2014-04-18
       */
      function(window) {
        function Sizzle(selector, context, results, seed) {
          var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
          if ((context ? context.ownerDocument || context : preferredDoc) !== document && setDocument(context), context = context || document, results = results || [], !selector || "string" != typeof selector) return results;
          if (1 !== (nodeType = context.nodeType) && 9 !== nodeType) return [];
          if (documentIsHTML && !seed) {
            if (match = rquickExpr.exec(selector))
              if (m = match[1]) {
                if (9 === nodeType) {
                  if (elem = context.getElementById(m), !elem || !elem.parentNode) return results;
                  if (elem.id === m) return results.push(elem), results
                } else if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) return results.push(elem), results
              } else {
                if (match[2]) return push.apply(results, context.getElementsByTagName(selector)), results;
                if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) return push.apply(results, context.getElementsByClassName(m)), results
              }
            if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
              if (nid = old = expando, newContext = context, newSelector = 9 === nodeType && selector, 1 === nodeType && "object" !== context.nodeName.toLowerCase()) {
                for (groups = tokenize(selector), (old = context.getAttribute("id")) ? nid = old.replace(rescape, "\\$&") : context.setAttribute("id", nid), nid = "[id='" + nid + "'] ", i = groups.length; i--;) groups[i] = nid + toSelector(groups[i]);
                newContext = rsibling.test(selector) && testContext(context.parentNode) || context, newSelector = groups.join(",")
              }
              if (newSelector) try {
                return push.apply(results, newContext.querySelectorAll(newSelector)), results
              } catch (qsaError) {} finally {
                old || context.removeAttribute("id")
              }
            }
          }
          return select(selector.replace(rtrim, "$1"), context, results, seed)
        }

        function createCache() {
          function cache(key, value) {
            return keys.push(key + " ") > Expr.cacheLength && delete cache[keys.shift()], cache[key + " "] = value
          }
          var keys = [];
          return cache
        }

        function markFunction(fn) {
          return fn[expando] = !0, fn
        }

        function assert(fn) {
          var div = document.createElement("div");
          try {
            return !!fn(div)
          } catch (e) {
            return !1
          } finally {
            div.parentNode && div.parentNode.removeChild(div), div = null
          }
        }

        function addHandle(attrs, handler) {
          for (var arr = attrs.split("|"), i = attrs.length; i--;) Expr.attrHandle[arr[i]] = handler
        }

        function siblingCheck(a, b) {
          var cur = b && a,
            diff = cur && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
          if (diff) return diff;
          if (cur)
            for (; cur = cur.nextSibling;)
              if (cur === b) return -1;
          return a ? 1 : -1
        }

        function createInputPseudo(type) {
          return function(elem) {
            var name = elem.nodeName.toLowerCase();
            return "input" === name && elem.type === type
          }
        }

        function createButtonPseudo(type) {
          return function(elem) {
            var name = elem.nodeName.toLowerCase();
            return ("input" === name || "button" === name) && elem.type === type
          }
        }

        function createPositionalPseudo(fn) {
          return markFunction(function(argument) {
            return argument = +argument, markFunction(function(seed, matches) {
              for (var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length; i--;) seed[j = matchIndexes[i]] && (seed[j] = !(matches[j] = seed[j]))
            })
          })
        }

        function testContext(context) {
          return context && typeof context.getElementsByTagName !== strundefined && context
        }

        function setFilters() {}

        function toSelector(tokens) {
          for (var i = 0, len = tokens.length, selector = ""; len > i; i++) selector += tokens[i].value;
          return selector
        }

        function addCombinator(matcher, combinator, base) {
          var dir = combinator.dir,
            checkNonElements = base && "parentNode" === dir,
            doneName = done++;
          return combinator.first ? function(elem, context, xml) {
            for (; elem = elem[dir];)
              if (1 === elem.nodeType || checkNonElements) return matcher(elem, context, xml)
          } : function(elem, context, xml) {
            var oldCache, outerCache, newCache = [dirruns, doneName];
            if (xml) {
              for (; elem = elem[dir];)
                if ((1 === elem.nodeType || checkNonElements) && matcher(elem, context, xml)) return !0
            } else
              for (; elem = elem[dir];)
                if (1 === elem.nodeType || checkNonElements) {
                  if (outerCache = elem[expando] || (elem[expando] = {}), (oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) return newCache[2] = oldCache[2];
                  if (outerCache[dir] = newCache, newCache[2] = matcher(elem, context, xml)) return !0
                }
          }
        }

        function elementMatcher(matchers) {
          return matchers.length > 1 ? function(elem, context, xml) {
            for (var i = matchers.length; i--;)
              if (!matchers[i](elem, context, xml)) return !1;
            return !0
          } : matchers[0]
        }

        function multipleContexts(selector, contexts, results) {
          for (var i = 0, len = contexts.length; len > i; i++) Sizzle(selector, contexts[i], results);
          return results
        }

        function condense(unmatched, map, filter, context, xml) {
          for (var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = null != map; len > i; i++)(elem = unmatched[i]) && (!filter || filter(elem, context, xml)) && (newUnmatched.push(elem), mapped && map.push(i));
          return newUnmatched
        }

        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
          return postFilter && !postFilter[expando] && (postFilter = setMatcher(postFilter)), postFinder && !postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector)), markFunction(function(seed, results, context, xml) {
            var temp, i, elem, preMap = [],
              postMap = [],
              preexisting = results.length,
              elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
              matcherIn = !preFilter || !seed && selector ? elems : condense(elems, preMap, preFilter, context, xml),
              matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
            if (matcher && matcher(matcherIn, matcherOut, context, xml), postFilter)
              for (temp = condense(matcherOut, postMap), postFilter(temp, [], context, xml), i = temp.length; i--;)(elem = temp[i]) && (matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem));
            if (seed) {
              if (postFinder || preFilter) {
                if (postFinder) {
                  for (temp = [], i = matcherOut.length; i--;)(elem = matcherOut[i]) && temp.push(matcherIn[i] = elem);
                  postFinder(null, matcherOut = [], temp, xml)
                }
                for (i = matcherOut.length; i--;)(elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1 && (seed[temp] = !(results[temp] = elem))
              }
            } else matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut), postFinder ? postFinder(null, results, matcherOut, xml) : push.apply(results, matcherOut)
          })
        }

        function matcherFromTokens(tokens) {
          for (var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
              return elem === checkContext
            }, implicitRelative, !0), matchAnyContext = addCombinator(function(elem) {
              return indexOf.call(checkContext, elem) > -1
            }, implicitRelative, !0), matchers = [function(elem, context, xml) {
              return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml))
            }]; len > i; i++)
            if (matcher = Expr.relative[tokens[i].type]) matchers = [addCombinator(elementMatcher(matchers), matcher)];
            else {
              if (matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches), matcher[expando]) {
                for (j = ++i; len > j && !Expr.relative[tokens[j].type]; j++);
                return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                  value: " " === tokens[i - 2].type ? "*" : ""
                })).replace(rtrim, "$1"), matcher, j > i && matcherFromTokens(tokens.slice(i, j)), len > j && matcherFromTokens(tokens = tokens.slice(j)), len > j && toSelector(tokens))
              }
              matchers.push(matcher)
            }
          return elementMatcher(matchers)
        }

        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
          var bySet = setMatchers.length > 0,
            byElement = elementMatchers.length > 0,
            superMatcher = function(seed, context, xml, results, outermost) {
              var elem, j, matcher, matchedCount = 0,
                i = "0",
                unmatched = seed && [],
                setMatched = [],
                contextBackup = outermostContext,
                elems = seed || byElement && Expr.find.TAG("*", outermost),
                dirrunsUnique = dirruns += null == contextBackup ? 1 : Math.random() || .1,
                len = elems.length;
              for (outermost && (outermostContext = context !== document && context); i !== len && null != (elem = elems[i]); i++) {
                if (byElement && elem) {
                  for (j = 0; matcher = elementMatchers[j++];)
                    if (matcher(elem, context, xml)) {
                      results.push(elem);
                      break
                    }
                  outermost && (dirruns = dirrunsUnique)
                }
                bySet && ((elem = !matcher && elem) && matchedCount--, seed && unmatched.push(elem))
              }
              if (matchedCount += i, bySet && i !== matchedCount) {
                for (j = 0; matcher = setMatchers[j++];) matcher(unmatched, setMatched, context, xml);
                if (seed) {
                  if (matchedCount > 0)
                    for (; i--;) unmatched[i] || setMatched[i] || (setMatched[i] = pop.call(results));
                  setMatched = condense(setMatched)
                }
                push.apply(results, setMatched), outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1 && Sizzle.uniqueSort(results)
              }
              return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), unmatched
            };
          return bySet ? markFunction(superMatcher) : superMatcher
        }
        var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + -new Date,
          preferredDoc = window.document,
          dirruns = 0,
          done = 0,
          classCache = createCache(),
          tokenCache = createCache(),
          compilerCache = createCache(),
          sortOrder = function(a, b) {
            return a === b && (hasDuplicate = !0), 0
          },
          strundefined = "undefined",
          MAX_NEGATIVE = 1 << 31,
          hasOwn = {}.hasOwnProperty,
          arr = [],
          pop = arr.pop,
          push_native = arr.push,
          push = arr.push,
          slice = arr.slice,
          indexOf = arr.indexOf || function(elem) {
            for (var i = 0, len = this.length; len > i; i++)
              if (this[i] === elem) return i;
            return -1
          },
          booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          whitespace = "[\\x20\\t\\r\\n\\f]",
          characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          identifier = characterEncoding.replace("w", "w#"),
          attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
          pseudos = ":(" + characterEncoding + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|.*)\\)|)",
          rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
          rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
          rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
          rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
          rpseudo = new RegExp(pseudos),
          ridentifier = new RegExp("^" + identifier + "$"),
          matchExpr = {
            ID: new RegExp("^#(" + characterEncoding + ")"),
            CLASS: new RegExp("^\\.(" + characterEncoding + ")"),
            TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
          },
          rinputs = /^(?:input|select|textarea|button)$/i,
          rheader = /^h\d$/i,
          rnative = /^[^{]+\{\s*\[native \w/,
          rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          rsibling = /[+~]/,
          rescape = /'|\\/g,
          runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
          funescape = function(_, escaped, escapedWhitespace) {
            var high = "0x" + escaped - 65536;
            return high !== high || escapedWhitespace ? escaped : 0 > high ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320)
          };
        try {
          push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes), arr[preferredDoc.childNodes.length].nodeType
        } catch (e) {
          push = {
            apply: arr.length ? function(target, els) {
              push_native.apply(target, slice.call(els))
            } : function(target, els) {
              for (var j = target.length, i = 0; target[j++] = els[i++];);
              target.length = j - 1
            }
          }
        }
        support = Sizzle.support = {}, isXML = Sizzle.isXML = function(elem) {
          var documentElement = elem && (elem.ownerDocument || elem).documentElement;
          return documentElement ? "HTML" !== documentElement.nodeName : !1
        }, setDocument = Sizzle.setDocument = function(node) {
          var hasCompare, doc = node ? node.ownerDocument || node : preferredDoc,
            parent = doc.defaultView;
          return doc !== document && 9 === doc.nodeType && doc.documentElement ? (document = doc, docElem = doc.documentElement, documentIsHTML = !isXML(doc), parent && parent !== parent.top && (parent.addEventListener ? parent.addEventListener("unload", function() {
            setDocument()
          }, !1) : parent.attachEvent && parent.attachEvent("onunload", function() {
            setDocument()
          })), support.attributes = assert(function(div) {
            return div.className = "i", !div.getAttribute("className")
          }), support.getElementsByTagName = assert(function(div) {
            return div.appendChild(doc.createComment("")), !div.getElementsByTagName("*").length
          }), support.getElementsByClassName = rnative.test(doc.getElementsByClassName) && assert(function(div) {
            return div.innerHTML = "<div class='a'></div><div class='a i'></div>", div.firstChild.className = "i", 2 === div.getElementsByClassName("i").length
          }), support.getById = assert(function(div) {
            return docElem.appendChild(div).id = expando, !doc.getElementsByName || !doc.getElementsByName(expando).length
          }), support.getById ? (Expr.find.ID = function(id, context) {
            if (typeof context.getElementById !== strundefined && documentIsHTML) {
              var m = context.getElementById(id);
              return m && m.parentNode ? [m] : []
            }
          }, Expr.filter.ID = function(id) {
            var attrId = id.replace(runescape, funescape);
            return function(elem) {
              return elem.getAttribute("id") === attrId
            }
          }) : (delete Expr.find.ID, Expr.filter.ID = function(id) {
            var attrId = id.replace(runescape, funescape);
            return function(elem) {
              var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
              return node && node.value === attrId
            }
          }), Expr.find.TAG = support.getElementsByTagName ? function(tag, context) {
            return typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName(tag) : void 0
          } : function(tag, context) {
            var elem, tmp = [],
              i = 0,
              results = context.getElementsByTagName(tag);
            if ("*" === tag) {
              for (; elem = results[i++];) 1 === elem.nodeType && tmp.push(elem);
              return tmp
            }
            return results
          }, Expr.find.CLASS = support.getElementsByClassName && function(className, context) {
            return typeof context.getElementsByClassName !== strundefined && documentIsHTML ? context.getElementsByClassName(className) : void 0
          }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(doc.querySelectorAll)) && (assert(function(div) {
            div.innerHTML = "<select msallowclip=''><option selected=''></option></select>", div.querySelectorAll("[msallowclip^='']").length && rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")"), div.querySelectorAll("[selected]").length || rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")"), div.querySelectorAll(":checked").length || rbuggyQSA.push(":checked")
          }), assert(function(div) {
            var input = doc.createElement("input");
            input.setAttribute("type", "hidden"), div.appendChild(input).setAttribute("name", "D"), div.querySelectorAll("[name=d]").length && rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?="), div.querySelectorAll(":enabled").length || rbuggyQSA.push(":enabled", ":disabled"), div.querySelectorAll("*,:x"), rbuggyQSA.push(",.*:")
          })), (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function(div) {
            support.disconnectedMatch = matches.call(div, "div"), matches.call(div, "[s!='']:x"), rbuggyMatches.push("!=", pseudos)
          }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), hasCompare = rnative.test(docElem.compareDocumentPosition), contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
            var adown = 9 === a.nodeType ? a.documentElement : a,
              bup = b && b.parentNode;
            return a === bup || !(!bup || 1 !== bup.nodeType || !(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup)))
          } : function(a, b) {
            if (b)
              for (; b = b.parentNode;)
                if (b === a) return !0;
            return !1
          }, sortOrder = hasCompare ? function(a, b) {
            if (a === b) return hasDuplicate = !0, 0;
            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
            return compare ? compare : (compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & compare || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0 : 4 & compare ? -1 : 1)
          } : function(a, b) {
            if (a === b) return hasDuplicate = !0, 0;
            var cur, i = 0,
              aup = a.parentNode,
              bup = b.parentNode,
              ap = [a],
              bp = [b];
            if (!aup || !bup) return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
            if (aup === bup) return siblingCheck(a, b);
            for (cur = a; cur = cur.parentNode;) ap.unshift(cur);
            for (cur = b; cur = cur.parentNode;) bp.unshift(cur);
            for (; ap[i] === bp[i];) i++;
            return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0
          }, doc) : document
        }, Sizzle.matches = function(expr, elements) {
          return Sizzle(expr, null, null, elements)
        }, Sizzle.matchesSelector = function(elem, expr) {
          if ((elem.ownerDocument || elem) !== document && setDocument(elem), expr = expr.replace(rattributeQuotes, "='$1']"), !(!support.matchesSelector || !documentIsHTML || rbuggyMatches && rbuggyMatches.test(expr) || rbuggyQSA && rbuggyQSA.test(expr))) try {
            var ret = matches.call(elem, expr);
            if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) return ret
          } catch (e) {}
          return Sizzle(expr, document, null, [elem]).length > 0
        }, Sizzle.contains = function(context, elem) {
          return (context.ownerDocument || context) !== document && setDocument(context), contains(context, elem)
        }, Sizzle.attr = function(elem, name) {
          (elem.ownerDocument || elem) !== document && setDocument(elem);
          var fn = Expr.attrHandle[name.toLowerCase()],
            val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
          return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
        }, Sizzle.error = function(msg) {
          throw new Error("Syntax error, unrecognized expression: " + msg)
        }, Sizzle.uniqueSort = function(results) {
          var elem, duplicates = [],
            j = 0,
            i = 0;
          if (hasDuplicate = !support.detectDuplicates, sortInput = !support.sortStable && results.slice(0), results.sort(sortOrder), hasDuplicate) {
            for (; elem = results[i++];) elem === results[i] && (j = duplicates.push(i));
            for (; j--;) results.splice(duplicates[j], 1)
          }
          return sortInput = null, results
        }, getText = Sizzle.getText = function(elem) {
          var node, ret = "",
            i = 0,
            nodeType = elem.nodeType;
          if (nodeType) {
            if (1 === nodeType || 9 === nodeType || 11 === nodeType) {
              if ("string" == typeof elem.textContent) return elem.textContent;
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) ret += getText(elem)
            } else if (3 === nodeType || 4 === nodeType) return elem.nodeValue
          } else
            for (; node = elem[i++];) ret += getText(node);
          return ret
        }, Expr = Sizzle.selectors = {
          cacheLength: 50,
          createPseudo: markFunction,
          match: matchExpr,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function(match) {
              return match[1] = match[1].replace(runescape, funescape), match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape), "~=" === match[2] && (match[3] = " " + match[3] + " "), match.slice(0, 4)
            },
            CHILD: function(match) {
              return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), match
            },
            PSEUDO: function(match) {
              var excess, unquoted = !match[6] && match[2];
              return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, !0)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess)), match.slice(0, 3))
            }
          },
          filter: {
            TAG: function(nodeNameSelector) {
              var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
              return "*" === nodeNameSelector ? function() {
                return !0
              } : function(elem) {
                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName
              }
            },
            CLASS: function(className) {
              var pattern = classCache[className + " "];
              return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                return pattern.test("string" == typeof elem.className && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "")
              })
            },
            ATTR: function(name, operator, check) {
              return function(elem) {
                var result = Sizzle.attr(elem, name);
                return null == result ? "!=" === operator : operator ? (result += "", "=" === operator ? result === check : "!=" === operator ? result !== check : "^=" === operator ? check && 0 === result.indexOf(check) : "*=" === operator ? check && result.indexOf(check) > -1 : "$=" === operator ? check && result.slice(-check.length) === check : "~=" === operator ? (" " + result + " ").indexOf(check) > -1 : "|=" === operator ? result === check || result.slice(0, check.length + 1) === check + "-" : !1) : !0
              }
            },
            CHILD: function(type, what, argument, first, last) {
              var simple = "nth" !== type.slice(0, 3),
                forward = "last" !== type.slice(-4),
                ofType = "of-type" === what;
              return 1 === first && 0 === last ? function(elem) {
                return !!elem.parentNode
              } : function(elem, context, xml) {
                var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling",
                  parent = elem.parentNode,
                  name = ofType && elem.nodeName.toLowerCase(),
                  useCache = !xml && !ofType;
                if (parent) {
                  if (simple) {
                    for (; dir;) {
                      for (node = elem; node = node[dir];)
                        if (ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) return !1;
                      start = dir = "only" === type && !start && "nextSibling"
                    }
                    return !0
                  }
                  if (start = [forward ? parent.firstChild : parent.lastChild], forward && useCache) {
                    for (outerCache = parent[expando] || (parent[expando] = {}), cache = outerCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = cache[0] === dirruns && cache[2], node = nodeIndex && parent.childNodes[nodeIndex]; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop();)
                      if (1 === node.nodeType && ++diff && node === elem) {
                        outerCache[type] = [dirruns, nodeIndex, diff];
                        break
                      }
                  } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) diff = cache[1];
                  else
                    for (;
                      (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) && ((ofType ? node.nodeName.toLowerCase() !== name : 1 !== node.nodeType) || !++diff || (useCache && ((node[expando] || (node[expando] = {}))[type] = [dirruns, diff]), node !== elem)););
                  return diff -= last, diff === first || diff % first === 0 && diff / first >= 0
                }
              }
            },
            PSEUDO: function(pseudo, argument) {
              var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
              return fn[expando] ? fn(argument) : fn.length > 1 ? (args = [pseudo, pseudo, "", argument], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                for (var idx, matched = fn(seed, argument), i = matched.length; i--;) idx = indexOf.call(seed, matched[i]), seed[idx] = !(matches[idx] = matched[i])
              }) : function(elem) {
                return fn(elem, 0, args)
              }) : fn
            }
          },
          pseudos: {
            not: markFunction(function(selector) {
              var input = [],
                results = [],
                matcher = compile(selector.replace(rtrim, "$1"));
              return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                for (var elem, unmatched = matcher(seed, null, xml, []), i = seed.length; i--;)(elem = unmatched[i]) && (seed[i] = !(matches[i] = elem))
              }) : function(elem, context, xml) {
                return input[0] = elem, matcher(input, null, xml, results), !results.pop()
              }
            }),
            has: markFunction(function(selector) {
              return function(elem) {
                return Sizzle(selector, elem).length > 0
              }
            }),
            contains: markFunction(function(text) {
              return function(elem) {
                return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1
              }
            }),
            lang: markFunction(function(lang) {
              return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), lang = lang.replace(runescape, funescape).toLowerCase(),
                function(elem) {
                  var elemLang;
                  do
                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) return elemLang = elemLang.toLowerCase(), elemLang === lang || 0 === elemLang.indexOf(lang + "-"); while ((elem = elem.parentNode) && 1 === elem.nodeType);
                  return !1
                }
            }),
            target: function(elem) {
              var hash = window.location && window.location.hash;
              return hash && hash.slice(1) === elem.id
            },
            root: function(elem) {
              return elem === docElem
            },
            focus: function(elem) {
              return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex)
            },
            enabled: function(elem) {
              return elem.disabled === !1
            },
            disabled: function(elem) {
              return elem.disabled === !0
            },
            checked: function(elem) {
              var nodeName = elem.nodeName.toLowerCase();
              return "input" === nodeName && !!elem.checked || "option" === nodeName && !!elem.selected
            },
            selected: function(elem) {
              return elem.parentNode && elem.parentNode.selectedIndex, elem.selected === !0
            },
            empty: function(elem) {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling)
                if (elem.nodeType < 6) return !1;
              return !0
            },
            parent: function(elem) {
              return !Expr.pseudos.empty(elem)
            },
            header: function(elem) {
              return rheader.test(elem.nodeName)
            },
            input: function(elem) {
              return rinputs.test(elem.nodeName)
            },
            button: function(elem) {
              var name = elem.nodeName.toLowerCase();
              return "input" === name && "button" === elem.type || "button" === name
            },
            text: function(elem) {
              var attr;
              return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (attr = elem.getAttribute("type")) || "text" === attr.toLowerCase())
            },
            first: createPositionalPseudo(function() {
              return [0]
            }),
            last: createPositionalPseudo(function(matchIndexes, length) {
              return [length - 1]
            }),
            eq: createPositionalPseudo(function(matchIndexes, length, argument) {
              return [0 > argument ? argument + length : argument]
            }),
            even: createPositionalPseudo(function(matchIndexes, length) {
              for (var i = 0; length > i; i += 2) matchIndexes.push(i);
              return matchIndexes
            }),
            odd: createPositionalPseudo(function(matchIndexes, length) {
              for (var i = 1; length > i; i += 2) matchIndexes.push(i);
              return matchIndexes
            }),
            lt: createPositionalPseudo(function(matchIndexes, length, argument) {
              for (var i = 0 > argument ? argument + length : argument; --i >= 0;) matchIndexes.push(i);
              return matchIndexes
            }),
            gt: createPositionalPseudo(function(matchIndexes, length, argument) {
              for (var i = 0 > argument ? argument + length : argument; ++i < length;) matchIndexes.push(i);
              return matchIndexes
            })
          }
        }, Expr.pseudos.nth = Expr.pseudos.eq;
        for (i in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
          }) Expr.pseudos[i] = createInputPseudo(i);
        for (i in {
            submit: !0,
            reset: !0
          }) Expr.pseudos[i] = createButtonPseudo(i);
        return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters, tokenize = Sizzle.tokenize = function(selector, parseOnly) {
          var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
          if (cached) return parseOnly ? 0 : cached.slice(0);
          for (soFar = selector, groups = [], preFilters = Expr.preFilter; soFar;) {
            (!matched || (match = rcomma.exec(soFar))) && (match && (soFar = soFar.slice(match[0].length) || soFar), groups.push(tokens = [])), matched = !1, (match = rcombinators.exec(soFar)) && (matched = match.shift(), tokens.push({
              value: matched,
              type: match[0].replace(rtrim, " ")
            }), soFar = soFar.slice(matched.length));
            for (type in Expr.filter) !(match = matchExpr[type].exec(soFar)) || preFilters[type] && !(match = preFilters[type](match)) || (matched = match.shift(), tokens.push({
              value: matched,
              type: type,
              matches: match
            }), soFar = soFar.slice(matched.length));
            if (!matched) break
          }
          return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0)
        }, compile = Sizzle.compile = function(selector, match) {
          var i, setMatchers = [],
            elementMatchers = [],
            cached = compilerCache[selector + " "];
          if (!cached) {
            for (match || (match = tokenize(selector)), i = match.length; i--;) cached = matcherFromTokens(match[i]), cached[expando] ? setMatchers.push(cached) : elementMatchers.push(cached);
            cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)), cached.selector = selector
          }
          return cached
        }, select = Sizzle.select = function(selector, context, results, seed) {
          var i, tokens, token, type, find, compiled = "function" == typeof selector && selector,
            match = !seed && tokenize(selector = compiled.selector || selector);
          if (results = results || [], 1 === match.length) {
            if (tokens = match[0] = match[0].slice(0), tokens.length > 2 && "ID" === (token = tokens[0]).type && support.getById && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
              if (context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0], !context) return results;
              compiled && (context = context.parentNode), selector = selector.slice(tokens.shift().value.length)
            }
            for (i = matchExpr.needsContext.test(selector) ? 0 : tokens.length; i-- && (token = tokens[i], !Expr.relative[type = token.type]);)
              if ((find = Expr.find[type]) && (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
                if (tokens.splice(i, 1), selector = seed.length && toSelector(tokens), !selector) return push.apply(results, seed), results;
                break
              }
          }
          return (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context), results
        }, support.sortStable = expando.split("").sort(sortOrder).join("") === expando, support.detectDuplicates = !!hasDuplicate, setDocument(), support.sortDetached = assert(function(div1) {
          return 1 & div1.compareDocumentPosition(document.createElement("div"))
        }), assert(function(div) {
          return div.innerHTML = "<a href='#'></a>", "#" === div.firstChild.getAttribute("href")
        }) || addHandle("type|href|height|width", function(elem, name, isXML) {
          return isXML ? void 0 : elem.getAttribute(name, "type" === name.toLowerCase() ? 1 : 2)
        }), support.attributes && assert(function(div) {
          return div.innerHTML = "<input/>", div.firstChild.setAttribute("value", ""), "" === div.firstChild.getAttribute("value")
        }) || addHandle("value", function(elem, name, isXML) {
          return isXML || "input" !== elem.nodeName.toLowerCase() ? void 0 : elem.defaultValue
        }), assert(function(div) {
          return null == div.getAttribute("disabled")
        }) || addHandle(booleans, function(elem, name, isXML) {
          var val;
          return isXML ? void 0 : elem[name] === !0 ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
        }), Sizzle
      }(window);
    jQuery.find = Sizzle, jQuery.expr = Sizzle.selectors, jQuery.expr[":"] = jQuery.expr.pseudos, jQuery.unique = Sizzle.uniqueSort, jQuery.text = Sizzle.getText, jQuery.isXMLDoc = Sizzle.isXML, jQuery.contains = Sizzle.contains;
    var rneedsContext = jQuery.expr.match.needsContext,
      rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      risSimple = /^.[^:#\[\.,]*$/;
    jQuery.filter = function(expr, elems, not) {
      var elem = elems[0];
      return not && (expr = ":not(" + expr + ")"), 1 === elems.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
        return 1 === elem.nodeType
      }))
    }, jQuery.fn.extend({
      find: function(selector) {
        var i, ret = [],
          self = this,
          len = self.length;
        if ("string" != typeof selector) return this.pushStack(jQuery(selector).filter(function() {
          for (i = 0; len > i; i++)
            if (jQuery.contains(self[i], this)) return !0
        }));
        for (i = 0; len > i; i++) jQuery.find(selector, self[i], ret);
        return ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret), ret.selector = this.selector ? this.selector + " " + selector : selector, ret
      },
      filter: function(selector) {
        return this.pushStack(winnow(this, selector || [], !1))
      },
      not: function(selector) {
        return this.pushStack(winnow(this, selector || [], !0))
      },
      is: function(selector) {
        return !!winnow(this, "string" == typeof selector && rneedsContext.test(selector) ? jQuery(selector) : selector || [], !1).length
      }
    });
    var rootjQuery, document = window.document,
      rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      init = jQuery.fn.init = function(selector, context) {
        var match, elem;
        if (!selector) return this;
        if ("string" == typeof selector) {
          if (match = "<" === selector.charAt(0) && ">" === selector.charAt(selector.length - 1) && selector.length >= 3 ? [null, selector, null] : rquickExpr.exec(selector), !match || !match[1] && context) return !context || context.jquery ? (context || rootjQuery).find(selector) : this.constructor(context).find(selector);
          if (match[1]) {
            if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, !0)), rsingleTag.test(match[1]) && jQuery.isPlainObject(context))
              for (match in context) jQuery.isFunction(this[match]) ? this[match](context[match]) : this.attr(match, context[match]);
            return this
          }
          if (elem = document.getElementById(match[2]), elem && elem.parentNode) {
            if (elem.id !== match[2]) return rootjQuery.find(selector);
            this.length = 1, this[0] = elem
          }
          return this.context = document, this.selector = selector, this
        }
        return selector.nodeType ? (this.context = this[0] = selector, this.length = 1, this) : jQuery.isFunction(selector) ? "undefined" != typeof rootjQuery.ready ? rootjQuery.ready(selector) : selector(jQuery) : (void 0 !== selector.selector && (this.selector = selector.selector, this.context = selector.context), jQuery.makeArray(selector, this))
      };
    init.prototype = jQuery.fn, rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      guaranteedUnique = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
    jQuery.extend({
      dir: function(elem, dir, until) {
        for (var matched = [], cur = elem[dir]; cur && 9 !== cur.nodeType && (void 0 === until || 1 !== cur.nodeType || !jQuery(cur).is(until));) 1 === cur.nodeType && matched.push(cur), cur = cur[dir];
        return matched
      },
      sibling: function(n, elem) {
        for (var r = []; n; n = n.nextSibling) 1 === n.nodeType && n !== elem && r.push(n);
        return r
      }
    }), jQuery.fn.extend({
      has: function(target) {
        var i, targets = jQuery(target, this),
          len = targets.length;
        return this.filter(function() {
          for (i = 0; len > i; i++)
            if (jQuery.contains(this, targets[i])) return !0
        })
      },
      closest: function(selectors, context) {
        for (var cur, i = 0, l = this.length, matched = [], pos = rneedsContext.test(selectors) || "string" != typeof selectors ? jQuery(selectors, context || this.context) : 0; l > i; i++)
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode)
            if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : 1 === cur.nodeType && jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break
            }
        return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched)
      },
      index: function(elem) {
        return elem ? "string" == typeof elem ? jQuery.inArray(this[0], jQuery(elem)) : jQuery.inArray(elem.jquery ? elem[0] : elem, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(selector, context) {
        return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))))
      },
      addBack: function(selector) {
        return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector))
      }
    }), jQuery.each({
      parent: function(elem) {
        var parent = elem.parentNode;
        return parent && 11 !== parent.nodeType ? parent : null
      },
      parents: function(elem) {
        return jQuery.dir(elem, "parentNode")
      },
      parentsUntil: function(elem, i, until) {
        return jQuery.dir(elem, "parentNode", until)
      },
      next: function(elem) {
        return sibling(elem, "nextSibling")
      },
      prev: function(elem) {
        return sibling(elem, "previousSibling")
      },
      nextAll: function(elem) {
        return jQuery.dir(elem, "nextSibling")
      },
      prevAll: function(elem) {
        return jQuery.dir(elem, "previousSibling")
      },
      nextUntil: function(elem, i, until) {
        return jQuery.dir(elem, "nextSibling", until)
      },
      prevUntil: function(elem, i, until) {
        return jQuery.dir(elem, "previousSibling", until)
      },
      siblings: function(elem) {
        return jQuery.sibling((elem.parentNode || {}).firstChild, elem)
      },
      children: function(elem) {
        return jQuery.sibling(elem.firstChild)
      },
      contents: function(elem) {
        return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes)
      }
    }, function(name, fn) {
      jQuery.fn[name] = function(until, selector) {
        var ret = jQuery.map(this, fn, until);
        return "Until" !== name.slice(-5) && (selector = until), selector && "string" == typeof selector && (ret = jQuery.filter(selector, ret)), this.length > 1 && (guaranteedUnique[name] || (ret = jQuery.unique(ret)), rparentsprev.test(name) && (ret = ret.reverse())), this.pushStack(ret)
      }
    });
    var rnotwhite = /\S+/g,
      optionsCache = {};
    jQuery.Callbacks = function(options) {
      options = "string" == typeof options ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
      var firing, memory, fired, firingLength, firingIndex, firingStart, list = [],
        stack = !options.once && [],
        fire = function(data) {
          for (memory = options.memory && data, fired = !0, firingIndex = firingStart || 0, firingStart = 0, firingLength = list.length, firing = !0; list && firingLength > firingIndex; firingIndex++)
            if (list[firingIndex].apply(data[0], data[1]) === !1 && options.stopOnFalse) {
              memory = !1;
              break
            }
          firing = !1, list && (stack ? stack.length && fire(stack.shift()) : memory ? list = [] : self.disable())
        },
        self = {
          add: function() {
            if (list) {
              var start = list.length;
              ! function add(args) {
                jQuery.each(args, function(_, arg) {
                  var type = jQuery.type(arg);
                  "function" === type ? options.unique && self.has(arg) || list.push(arg) : arg && arg.length && "string" !== type && add(arg)
                })
              }(arguments), firing ? firingLength = list.length : memory && (firingStart = start, fire(memory))
            }
            return this
          },
          remove: function() {
            return list && jQuery.each(arguments, function(_, arg) {
              for (var index;
                (index = jQuery.inArray(arg, list, index)) > -1;) list.splice(index, 1), firing && (firingLength >= index && firingLength--, firingIndex >= index && firingIndex--)
            }), this
          },
          has: function(fn) {
            return fn ? jQuery.inArray(fn, list) > -1 : !(!list || !list.length)
          },
          empty: function() {
            return list = [], firingLength = 0, this
          },
          disable: function() {
            return list = stack = memory = void 0, this
          },
          disabled: function() {
            return !list
          },
          lock: function() {
            return stack = void 0, memory || self.disable(), this
          },
          locked: function() {
            return !stack
          },
          fireWith: function(context, args) {
            return !list || fired && !stack || (args = args || [], args = [context, args.slice ? args.slice() : args], firing ? stack.push(args) : fire(args)), this
          },
          fire: function() {
            return self.fireWith(this, arguments), this
          },
          fired: function() {
            return !!fired
          }
        };
      return self
    }, jQuery.extend({
      Deferred: function(func) {
        var tuples = [
            ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
            ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
            ["notify", "progress", jQuery.Callbacks("memory")]
          ],
          state = "pending",
          promise = {
            state: function() {
              return state
            },
            always: function() {
              return deferred.done(arguments).fail(arguments), this
            },
            then: function() {
              var fns = arguments;
              return jQuery.Deferred(function(newDefer) {
                jQuery.each(tuples, function(i, tuple) {
                  var fn = jQuery.isFunction(fns[i]) && fns[i];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    returned && jQuery.isFunction(returned.promise) ? returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify) : newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments)
                  })
                }), fns = null
              }).promise()
            },
            promise: function(obj) {
              return null != obj ? jQuery.extend(obj, promise) : promise
            }
          },
          deferred = {};
        return promise.pipe = promise.then, jQuery.each(tuples, function(i, tuple) {
          var list = tuple[2],
            stateString = tuple[3];
          promise[tuple[1]] = list.add, stateString && list.add(function() {
            state = stateString
          }, tuples[1 ^ i][2].disable, tuples[2][2].lock), deferred[tuple[0]] = function() {
            return deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments), this
          }, deferred[tuple[0] + "With"] = list.fireWith
        }), promise.promise(deferred), func && func.call(deferred, deferred), deferred
      },
      when: function(subordinate) {
        var progressValues, progressContexts, resolveContexts, i = 0,
          resolveValues = slice.call(arguments),
          length = resolveValues.length,
          remaining = 1 !== length || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,
          deferred = 1 === remaining ? subordinate : jQuery.Deferred(),
          updateFunc = function(i, contexts, values) {
            return function(value) {
              contexts[i] = this, values[i] = arguments.length > 1 ? slice.call(arguments) : value, values === progressValues ? deferred.notifyWith(contexts, values) : --remaining || deferred.resolveWith(contexts, values)
            }
          };
        if (length > 1)
          for (progressValues = new Array(length), progressContexts = new Array(length), resolveContexts = new Array(length); length > i; i++) resolveValues[i] && jQuery.isFunction(resolveValues[i].promise) ? resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues)) : --remaining;
        return remaining || deferred.resolveWith(resolveContexts, resolveValues), deferred.promise()
      }
    });
    var readyList;
    jQuery.fn.ready = function(fn) {
      return jQuery.ready.promise().done(fn), this
    }, jQuery.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(hold) {
        hold ? jQuery.readyWait++ : jQuery.ready(!0)
      },
      ready: function(wait) {
        if (wait === !0 ? !--jQuery.readyWait : !jQuery.isReady) {
          if (!document.body) return setTimeout(jQuery.ready);
          jQuery.isReady = !0, wait !== !0 && --jQuery.readyWait > 0 || (readyList.resolveWith(document, [jQuery]), jQuery.fn.triggerHandler && (jQuery(document).triggerHandler("ready"), jQuery(document).off("ready")))
        }
      }
    }), jQuery.ready.promise = function(obj) {
      if (!readyList)
        if (readyList = jQuery.Deferred(), "complete" === document.readyState) setTimeout(jQuery.ready);
        else if (document.addEventListener) document.addEventListener("DOMContentLoaded", completed, !1), window.addEventListener("load", completed, !1);
      else {
        document.attachEvent("onreadystatechange", completed), window.attachEvent("onload", completed);
        var top = !1;
        try {
          top = null == window.frameElement && document.documentElement
        } catch (e) {}
        top && top.doScroll && ! function doScrollCheck() {
          if (!jQuery.isReady) {
            try {
              top.doScroll("left")
            } catch (e) {
              return setTimeout(doScrollCheck, 50)
            }
            detach(), jQuery.ready()
          }
        }()
      }
      return readyList.promise(obj)
    };
    var i, strundefined = "undefined";
    for (i in jQuery(support)) break;
    support.ownLast = "0" !== i, support.inlineBlockNeedsLayout = !1, jQuery(function() {
        var val, div, body, container;
        body = document.getElementsByTagName("body")[0], body && body.style && (div = document.createElement("div"), container = document.createElement("div"), container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", body.appendChild(container).appendChild(div), typeof div.style.zoom !== strundefined && (div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", support.inlineBlockNeedsLayout = val = 3 === div.offsetWidth, val && (body.style.zoom = 1)), body.removeChild(container))
      }),
      function() {
        var div = document.createElement("div");
        if (null == support.deleteExpando) {
          support.deleteExpando = !0;
          try {
            delete div.test
          } catch (e) {
            support.deleteExpando = !1
          }
        }
        div = null
      }(), jQuery.acceptData = function(elem) {
        var noData = jQuery.noData[(elem.nodeName + " ").toLowerCase()],
          nodeType = +elem.nodeType || 1;
        return 1 !== nodeType && 9 !== nodeType ? !1 : !noData || noData !== !0 && elem.getAttribute("classid") === noData
      };
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /([A-Z])/g;
    jQuery.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
      },
      hasData: function(elem) {
        return elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando], !!elem && !isEmptyDataObject(elem)
      },
      data: function(elem, name, data) {
        return internalData(elem, name, data)
      },
      removeData: function(elem, name) {
        return internalRemoveData(elem, name)
      },
      _data: function(elem, name, data) {
        return internalData(elem, name, data, !0)
      },
      _removeData: function(elem, name) {
        return internalRemoveData(elem, name, !0)
      }
    }), jQuery.fn.extend({
      data: function(key, value) {
        var i, name, data, elem = this[0],
          attrs = elem && elem.attributes;
        if (void 0 === key) {
          if (this.length && (data = jQuery.data(elem), 1 === elem.nodeType && !jQuery._data(elem, "parsedAttrs"))) {
            for (i = attrs.length; i--;) attrs[i] && (name = attrs[i].name, 0 === name.indexOf("data-") && (name = jQuery.camelCase(name.slice(5)), dataAttr(elem, name, data[name])));
            jQuery._data(elem, "parsedAttrs", !0)
          }
          return data
        }
        return "object" == typeof key ? this.each(function() {
          jQuery.data(this, key)
        }) : arguments.length > 1 ? this.each(function() {
          jQuery.data(this, key, value)
        }) : elem ? dataAttr(elem, key, jQuery.data(elem, key)) : void 0
      },
      removeData: function(key) {
        return this.each(function() {
          jQuery.removeData(this, key)
        })
      }
    }), jQuery.extend({
      queue: function(elem, type, data) {
        var queue;
        return elem ? (type = (type || "fx") + "queue", queue = jQuery._data(elem, type), data && (!queue || jQuery.isArray(data) ? queue = jQuery._data(elem, type, jQuery.makeArray(data)) : queue.push(data)), queue || []) : void 0
      },
      dequeue: function(elem, type) {
        type = type || "fx";
        var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function() {
            jQuery.dequeue(elem, type)
          };
        "inprogress" === fn && (fn = queue.shift(), startLength--), fn && ("fx" === type && queue.unshift("inprogress"), delete hooks.stop, fn.call(elem, next, hooks)), !startLength && hooks && hooks.empty.fire()
      },
      _queueHooks: function(elem, type) {
        var key = type + "queueHooks";
        return jQuery._data(elem, key) || jQuery._data(elem, key, {
          empty: jQuery.Callbacks("once memory").add(function() {
            jQuery._removeData(elem, type + "queue"), jQuery._removeData(elem, key)
          })
        })
      }
    }), jQuery.fn.extend({
      queue: function(type, data) {
        var setter = 2;
        return "string" != typeof type && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function() {
          var queue = jQuery.queue(this, type, data);
          jQuery._queueHooks(this, type), "fx" === type && "inprogress" !== queue[0] && jQuery.dequeue(this, type)
        })
      },
      dequeue: function(type) {
        return this.each(function() {
          jQuery.dequeue(this, type)
        })
      },
      clearQueue: function(type) {
        return this.queue(type || "fx", [])
      },
      promise: function(type, obj) {
        var tmp, count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function() {
            --count || defer.resolveWith(elements, [elements])
          };
        for ("string" != typeof type && (obj = type, type = void 0), type = type || "fx"; i--;) tmp = jQuery._data(elements[i], type + "queueHooks"), tmp && tmp.empty && (count++, tmp.empty.add(resolve));
        return resolve(), defer.promise(obj)
      }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      cssExpand = ["Top", "Right", "Bottom", "Left"],
      isHidden = function(elem, el) {
        return elem = el || elem, "none" === jQuery.css(elem, "display") || !jQuery.contains(elem.ownerDocument, elem)
      },
      access = jQuery.access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0,
          length = elems.length,
          bulk = null == key;
        if ("object" === jQuery.type(key)) {
          chainable = !0;
          for (i in key) jQuery.access(elems, fn, i, key[i], !0, emptyGet, raw)
        } else if (void 0 !== value && (chainable = !0, jQuery.isFunction(value) || (raw = !0), bulk && (raw ? (fn.call(elems, value), fn = null) : (bulk = fn, fn = function(elem, key, value) {
            return bulk.call(jQuery(elem), value)
          })), fn))
          for (; length > i; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet
      },
      rcheckableType = /^(?:checkbox|radio)$/i;
    ! function() {
      var input = document.createElement("input"),
        div = document.createElement("div"),
        fragment = document.createDocumentFragment();
      if (div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", support.leadingWhitespace = 3 === div.firstChild.nodeType, support.tbody = !div.getElementsByTagName("tbody").length, support.htmlSerialize = !!div.getElementsByTagName("link").length, support.html5Clone = "<:nav></:nav>" !== document.createElement("nav").cloneNode(!0).outerHTML, input.type = "checkbox", input.checked = !0, fragment.appendChild(input), support.appendChecked = input.checked, div.innerHTML = "<textarea>x</textarea>", support.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue, fragment.appendChild(div), div.innerHTML = "<input type='radio' checked='checked' name='t'/>", support.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked, support.noCloneEvent = !0, div.attachEvent && (div.attachEvent("onclick", function() {
          support.noCloneEvent = !1
        }), div.cloneNode(!0).click()), null == support.deleteExpando) {
        support.deleteExpando = !0;
        try {
          delete div.test
        } catch (e) {
          support.deleteExpando = !1
        }
      }
    }(),
    function() {
      var i, eventName, div = document.createElement("div");
      for (i in {
          submit: !0,
          change: !0,
          focusin: !0
        }) eventName = "on" + i, (support[i + "Bubbles"] = eventName in window) || (div.setAttribute(eventName, "t"), support[i + "Bubbles"] = div.attributes[eventName].expando === !1);
      div = null
    }();
    var rformElems = /^(?:input|select|textarea)$/i,
      rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
      rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
    jQuery.event = {
      global: {},
      add: function(elem, types, handler, data, selector) {
        var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery._data(elem);
        if (elemData) {
          for (handler.handler && (handleObjIn = handler, handler = handleObjIn.handler, selector = handleObjIn.selector), handler.guid || (handler.guid = jQuery.guid++), (events = elemData.events) || (events = elemData.events = {}), (eventHandle = elemData.handle) || (eventHandle = elemData.handle = function(e) {
              return typeof jQuery === strundefined || e && jQuery.event.triggered === e.type ? void 0 : jQuery.event.dispatch.apply(eventHandle.elem, arguments)
            }, eventHandle.elem = elem), types = (types || "").match(rnotwhite) || [""], t = types.length; t--;) tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type && (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, special = jQuery.event.special[type] || {}, handleObj = jQuery.extend({
            type: type,
            origType: origType,
            data: data,
            handler: handler,
            guid: handler.guid,
            selector: selector,
            needsContext: selector && jQuery.expr.match.needsContext.test(selector),
            namespace: namespaces.join(".")
          }, handleObjIn), (handlers = events[type]) || (handlers = events[type] = [], handlers.delegateCount = 0, special.setup && special.setup.call(elem, data, namespaces, eventHandle) !== !1 || (elem.addEventListener ? elem.addEventListener(type, eventHandle, !1) : elem.attachEvent && elem.attachEvent("on" + type, eventHandle))), special.add && (special.add.call(elem, handleObj), handleObj.handler.guid || (handleObj.handler.guid = handler.guid)), selector ? handlers.splice(handlers.delegateCount++, 0, handleObj) : handlers.push(handleObj), jQuery.event.global[type] = !0);
          elem = null
        }
      },
      remove: function(elem, types, handler, selector, mappedTypes) {
        var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType, elemData = jQuery.hasData(elem) && jQuery._data(elem);
        if (elemData && (events = elemData.events)) {
          for (types = (types || "").match(rnotwhite) || [""], t = types.length; t--;)
            if (tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type) {
              for (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, handlers = events[type] || [], tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"), origCount = j = handlers.length; j--;) handleObj = handlers[j], !mappedTypes && origType !== handleObj.origType || handler && handler.guid !== handleObj.guid || tmp && !tmp.test(handleObj.namespace) || selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector) || (handlers.splice(j, 1), handleObj.selector && handlers.delegateCount--, special.remove && special.remove.call(elem, handleObj));
              origCount && !handlers.length && (special.teardown && special.teardown.call(elem, namespaces, elemData.handle) !== !1 || jQuery.removeEvent(elem, type, elemData.handle), delete events[type])
            } else
              for (type in events) jQuery.event.remove(elem, type + types[t], handler, selector, !0);
          jQuery.isEmptyObject(events) && (delete elemData.handle, jQuery._removeData(elem, "events"))
        }
      },
      trigger: function(event, data, elem, onlyHandlers) {
        var handle, ontype, cur, bubbleType, special, tmp, i, eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
        if (cur = tmp = elem = elem || document, 3 !== elem.nodeType && 8 !== elem.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (type.indexOf(".") >= 0 && (namespaces = type.split("."), type = namespaces.shift(), namespaces.sort()), ontype = type.indexOf(":") < 0 && "on" + type, event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" == typeof event && event), event.isTrigger = onlyHandlers ? 2 : 3, event.namespace = namespaces.join("."), event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, event.result = void 0, event.target || (event.target = elem), data = null == data ? [event] : jQuery.makeArray(data, [event]), special = jQuery.event.special[type] || {}, onlyHandlers || !special.trigger || special.trigger.apply(elem, data) !== !1)) {
          if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
            for (bubbleType = special.delegateType || type, rfocusMorph.test(bubbleType + type) || (cur = cur.parentNode); cur; cur = cur.parentNode) eventPath.push(cur), tmp = cur;
            tmp === (elem.ownerDocument || document) && eventPath.push(tmp.defaultView || tmp.parentWindow || window)
          }
          for (i = 0;
            (cur = eventPath[i++]) && !event.isPropagationStopped();) event.type = i > 1 ? bubbleType : special.bindType || type, handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle"), handle && handle.apply(cur, data), handle = ontype && cur[ontype], handle && handle.apply && jQuery.acceptData(cur) && (event.result = handle.apply(cur, data), event.result === !1 && event.preventDefault());
          if (event.type = type, !onlyHandlers && !event.isDefaultPrevented() && (!special._default || special._default.apply(eventPath.pop(), data) === !1) && jQuery.acceptData(elem) && ontype && elem[type] && !jQuery.isWindow(elem)) {
            tmp = elem[ontype], tmp && (elem[ontype] = null), jQuery.event.triggered = type;
            try {
              elem[type]()
            } catch (e) {}
            jQuery.event.triggered = void 0, tmp && (elem[ontype] = tmp)
          }
          return event.result
        }
      },
      dispatch: function(event) {
        event = jQuery.event.fix(event);
        var i, ret, handleObj, matched, j, handlerQueue = [],
          args = slice.call(arguments),
          handlers = (jQuery._data(this, "events") || {})[event.type] || [],
          special = jQuery.event.special[event.type] || {};
        if (args[0] = event, event.delegateTarget = this, !special.preDispatch || special.preDispatch.call(this, event) !== !1) {
          for (handlerQueue = jQuery.event.handlers.call(this, event, handlers), i = 0;
            (matched = handlerQueue[i++]) && !event.isPropagationStopped();)
            for (event.currentTarget = matched.elem, j = 0;
              (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();)(!event.namespace_re || event.namespace_re.test(handleObj.namespace)) && (event.handleObj = handleObj, event.data = handleObj.data, ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args), void 0 !== ret && (event.result = ret) === !1 && (event.preventDefault(), event.stopPropagation()));
          return special.postDispatch && special.postDispatch.call(this, event), event.result
        }
      },
      handlers: function(event, handlers) {
        var sel, handleObj, matches, i, handlerQueue = [],
          delegateCount = handlers.delegateCount,
          cur = event.target;
        if (delegateCount && cur.nodeType && (!event.button || "click" !== event.type))
          for (; cur != this; cur = cur.parentNode || this)
            if (1 === cur.nodeType && (cur.disabled !== !0 || "click" !== event.type)) {
              for (matches = [], i = 0; delegateCount > i; i++) handleObj = handlers[i], sel = handleObj.selector + " ", void 0 === matches[sel] && (matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length), matches[sel] && matches.push(handleObj);
              matches.length && handlerQueue.push({
                elem: cur,
                handlers: matches
              })
            }
        return delegateCount < handlers.length && handlerQueue.push({
          elem: this,
          handlers: handlers.slice(delegateCount)
        }), handlerQueue
      },
      fix: function(event) {
        if (event[jQuery.expando]) return event;
        var i, prop, copy, type = event.type,
          originalEvent = event,
          fixHook = this.fixHooks[type];
        for (fixHook || (this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {}), copy = fixHook.props ? this.props.concat(fixHook.props) : this.props, event = new jQuery.Event(originalEvent), i = copy.length; i--;) prop = copy[i], event[prop] = originalEvent[prop];
        return event.target || (event.target = originalEvent.srcElement || document), 3 === event.target.nodeType && (event.target = event.target.parentNode), event.metaKey = !!event.metaKey, fixHook.filter ? fixHook.filter(event, originalEvent) : event
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(event, original) {
          return null == event.which && (event.which = null != original.charCode ? original.charCode : original.keyCode), event
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(event, original) {
          var body, eventDoc, doc, button = original.button,
            fromElement = original.fromElement;
          return null == event.pageX && null != original.clientX && (eventDoc = event.target.ownerDocument || document, doc = eventDoc.documentElement, body = eventDoc.body, event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0), event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)), !event.relatedTarget && fromElement && (event.relatedTarget = fromElement === event.target ? original.toElement : fromElement), event.which || void 0 === button || (event.which = 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0), event
        }
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {
            if (this !== safeActiveElement() && this.focus) try {
              return this.focus(), !1
            } catch (e) {}
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            return this === safeActiveElement() && this.blur ? (this.blur(), !1) : void 0
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            return jQuery.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
          },
          _default: function(event) {
            return jQuery.nodeName(event.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function(event) {
            void 0 !== event.result && event.originalEvent && (event.originalEvent.returnValue = event.result)
          }
        }
      },
      simulate: function(type, elem, event, bubble) {
        var e = jQuery.extend(new jQuery.Event, event, {
          type: type,
          isSimulated: !0,
          originalEvent: {}
        });
        bubble ? jQuery.event.trigger(e, null, elem) : jQuery.event.dispatch.call(elem, e), e.isDefaultPrevented() && event.preventDefault()
      }
    }, jQuery.removeEvent = document.removeEventListener ? function(elem, type, handle) {
      elem.removeEventListener && elem.removeEventListener(type, handle, !1)
    } : function(elem, type, handle) {
      var name = "on" + type;
      elem.detachEvent && (typeof elem[name] === strundefined && (elem[name] = null), elem.detachEvent(name, handle))
    }, jQuery.Event = function(src, props) {
      return this instanceof jQuery.Event ? (src && src.type ? (this.originalEvent = src, this.type = src.type, this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && src.returnValue === !1 ? returnTrue : returnFalse) : this.type = src, props && jQuery.extend(this, props), this.timeStamp = src && src.timeStamp || jQuery.now(), void(this[jQuery.expando] = !0)) : new jQuery.Event(src, props)
    }, jQuery.Event.prototype = {
      isDefaultPrevented: returnFalse,
      isPropagationStopped: returnFalse,
      isImmediatePropagationStopped: returnFalse,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = returnTrue, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = returnTrue, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = returnTrue, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, jQuery.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(orig, fix) {
      jQuery.event.special[orig] = {
        delegateType: fix,
        bindType: fix,
        handle: function(event) {
          var ret, target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj;
          return (!related || related !== target && !jQuery.contains(target, related)) && (event.type = handleObj.origType, ret = handleObj.handler.apply(this, arguments), event.type = fix), ret
        }
      }
    }), support.submitBubbles || (jQuery.event.special.submit = {
      setup: function() {
        return jQuery.nodeName(this, "form") ? !1 : void jQuery.event.add(this, "click._submit keypress._submit", function(e) {
          var elem = e.target,
            form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : void 0;
          form && !jQuery._data(form, "submitBubbles") && (jQuery.event.add(form, "submit._submit", function(event) {
            event._submit_bubble = !0
          }), jQuery._data(form, "submitBubbles", !0))
        })
      },
      postDispatch: function(event) {
        event._submit_bubble && (delete event._submit_bubble, this.parentNode && !event.isTrigger && jQuery.event.simulate("submit", this.parentNode, event, !0))
      },
      teardown: function() {
        return jQuery.nodeName(this, "form") ? !1 : void jQuery.event.remove(this, "._submit")
      }
    }), support.changeBubbles || (jQuery.event.special.change = {
      setup: function() {
        return rformElems.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (jQuery.event.add(this, "propertychange._change", function(event) {
          "checked" === event.originalEvent.propertyName && (this._just_changed = !0)
        }), jQuery.event.add(this, "click._change", function(event) {
          this._just_changed && !event.isTrigger && (this._just_changed = !1), jQuery.event.simulate("change", this, event, !0)
        })), !1) : void jQuery.event.add(this, "beforeactivate._change", function(e) {
          var elem = e.target;
          rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles") && (jQuery.event.add(elem, "change._change", function(event) {
            !this.parentNode || event.isSimulated || event.isTrigger || jQuery.event.simulate("change", this.parentNode, event, !0)
          }), jQuery._data(elem, "changeBubbles", !0))
        })
      },
      handle: function(event) {
        var elem = event.target;
        return this !== elem || event.isSimulated || event.isTrigger || "radio" !== elem.type && "checkbox" !== elem.type ? event.handleObj.handler.apply(this, arguments) : void 0
      },
      teardown: function() {
        return jQuery.event.remove(this, "._change"), !rformElems.test(this.nodeName)
      }
    }), support.focusinBubbles || jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function(orig, fix) {
      var handler = function(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), !0)
      };
      jQuery.event.special[fix] = {
        setup: function() {
          var doc = this.ownerDocument || this,
            attaches = jQuery._data(doc, fix);
          attaches || doc.addEventListener(orig, handler, !0), jQuery._data(doc, fix, (attaches || 0) + 1)
        },
        teardown: function() {
          var doc = this.ownerDocument || this,
            attaches = jQuery._data(doc, fix) - 1;
          attaches ? jQuery._data(doc, fix, attaches) : (doc.removeEventListener(orig, handler, !0), jQuery._removeData(doc, fix))
        }
      }
    }), jQuery.fn.extend({
      on: function(types, selector, data, fn, one) {
        var type, origFn;
        if ("object" == typeof types) {
          "string" != typeof selector && (data = data || selector, selector = void 0);
          for (type in types) this.on(type, selector, data, types[type], one);
          return this
        }
        if (null == data && null == fn ? (fn = selector, data = selector = void 0) : null == fn && ("string" == typeof selector ? (fn = data, data = void 0) : (fn = data, data = selector, selector = void 0)), fn === !1) fn = returnFalse;
        else if (!fn) return this;
        return 1 === one && (origFn = fn, fn = function(event) {
          return jQuery().off(event), origFn.apply(this, arguments)
        }, fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)), this.each(function() {
          jQuery.event.add(this, types, fn, data, selector)
        })
      },
      one: function(types, selector, data, fn) {
        return this.on(types, selector, data, fn, 1)
      },
      off: function(types, selector, fn) {
        var handleObj, type;
        if (types && types.preventDefault && types.handleObj) return handleObj = types.handleObj, jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this;
        if ("object" == typeof types) {
          for (type in types) this.off(type, selector, types[type]);
          return this
        }
        return (selector === !1 || "function" == typeof selector) && (fn = selector, selector = void 0), fn === !1 && (fn = returnFalse), this.each(function() {
          jQuery.event.remove(this, types, fn, selector)
        })
      },
      trigger: function(type, data) {
        return this.each(function() {
          jQuery.event.trigger(type, data, this)
        })
      },
      triggerHandler: function(type, data) {
        var elem = this[0];
        return elem ? jQuery.event.trigger(type, data, elem, !0) : void 0
      }
    });
    var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
      rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
      rleadingWhitespace = /^\s+/,
      rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      rtagName = /<([\w:]+)/,
      rtbody = /<tbody/i,
      rhtml = /<|&#?\w+;/,
      rnoInnerhtml = /<(?:script|style|link)/i,
      rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rscriptType = /^$|\/(?:java|ecma)script/i,
      rscriptTypeMasked = /^true\/(.*)/,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      wrapMap = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
      },
      safeFragment = createSafeFragment(document),
      fragmentDiv = safeFragment.appendChild(document.createElement("div"));
    wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, wrapMap.th = wrapMap.td, jQuery.extend({
      clone: function(elem, dataAndEvents, deepDataAndEvents) {
        var destElements, node, clone, i, srcElements, inPage = jQuery.contains(elem.ownerDocument, elem);
        if (support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">") ? clone = elem.cloneNode(!0) : (fragmentDiv.innerHTML = elem.outerHTML, fragmentDiv.removeChild(clone = fragmentDiv.firstChild)), !(support.noCloneEvent && support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem)))
          for (destElements = getAll(clone), srcElements = getAll(elem), i = 0; null != (node = srcElements[i]); ++i) destElements[i] && fixCloneNodeIssues(node, destElements[i]);
        if (dataAndEvents)
          if (deepDataAndEvents)
            for (srcElements = srcElements || getAll(elem), destElements = destElements || getAll(clone), i = 0; null != (node = srcElements[i]); i++) cloneCopyEvent(node, destElements[i]);
          else cloneCopyEvent(elem, clone);
        return destElements = getAll(clone, "script"), destElements.length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")), destElements = srcElements = node = null, clone
      },
      buildFragment: function(elems, context, scripts, selection) {
        for (var j, elem, contains, tmp, tag, tbody, wrap, l = elems.length, safe = createSafeFragment(context), nodes = [], i = 0; l > i; i++)
          if (elem = elems[i], elem || 0 === elem)
            if ("object" === jQuery.type(elem)) jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
            else if (rhtml.test(elem)) {
          for (tmp = tmp || safe.appendChild(context.createElement("div")), tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase(), wrap = wrapMap[tag] || wrapMap._default, tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2], j = wrap[0]; j--;) tmp = tmp.lastChild;
          if (!support.leadingWhitespace && rleadingWhitespace.test(elem) && nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0])), !support.tbody)
            for (elem = "table" !== tag || rtbody.test(elem) ? "<table>" !== wrap[1] || rtbody.test(elem) ? 0 : tmp : tmp.firstChild, j = elem && elem.childNodes.length; j--;) jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length && elem.removeChild(tbody);
          for (jQuery.merge(nodes, tmp.childNodes), tmp.textContent = ""; tmp.firstChild;) tmp.removeChild(tmp.firstChild);
          tmp = safe.lastChild
        } else nodes.push(context.createTextNode(elem));
        for (tmp && safe.removeChild(tmp), support.appendChecked || jQuery.grep(getAll(nodes, "input"), fixDefaultChecked), i = 0; elem = nodes[i++];)
          if ((!selection || -1 === jQuery.inArray(elem, selection)) && (contains = jQuery.contains(elem.ownerDocument, elem), tmp = getAll(safe.appendChild(elem), "script"), contains && setGlobalEval(tmp), scripts))
            for (j = 0; elem = tmp[j++];) rscriptType.test(elem.type || "") && scripts.push(elem);
        return tmp = null, safe
      },
      cleanData: function(elems, acceptData) {
        for (var elem, type, id, data, i = 0, internalKey = jQuery.expando, cache = jQuery.cache, deleteExpando = support.deleteExpando, special = jQuery.event.special; null != (elem = elems[i]); i++)
          if ((acceptData || jQuery.acceptData(elem)) && (id = elem[internalKey], data = id && cache[id])) {
            if (data.events)
              for (type in data.events) special[type] ? jQuery.event.remove(elem, type) : jQuery.removeEvent(elem, type, data.handle);
            cache[id] && (delete cache[id], deleteExpando ? delete elem[internalKey] : typeof elem.removeAttribute !== strundefined ? elem.removeAttribute(internalKey) : elem[internalKey] = null, deletedIds.push(id))
          }
      }
    }), jQuery.fn.extend({
      text: function(value) {
        return access(this, function(value) {
          return void 0 === value ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value))
        }, null, value, arguments.length)
      },
      append: function() {
        return this.domManip(arguments, function(elem) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var target = manipulationTarget(this, elem);
            target.appendChild(elem)
          }
        })
      },
      prepend: function() {
        return this.domManip(arguments, function(elem) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var target = manipulationTarget(this, elem);
            target.insertBefore(elem, target.firstChild)
          }
        })
      },
      before: function() {
        return this.domManip(arguments, function(elem) {
          this.parentNode && this.parentNode.insertBefore(elem, this)
        })
      },
      after: function() {
        return this.domManip(arguments, function(elem) {
          this.parentNode && this.parentNode.insertBefore(elem, this.nextSibling)
        })
      },
      remove: function(selector, keepData) {
        for (var elem, elems = selector ? jQuery.filter(selector, this) : this, i = 0; null != (elem = elems[i]); i++) keepData || 1 !== elem.nodeType || jQuery.cleanData(getAll(elem)), elem.parentNode && (keepData && jQuery.contains(elem.ownerDocument, elem) && setGlobalEval(getAll(elem, "script")), elem.parentNode.removeChild(elem));
        return this
      },
      empty: function() {
        for (var elem, i = 0; null != (elem = this[i]); i++) {
          for (1 === elem.nodeType && jQuery.cleanData(getAll(elem, !1)); elem.firstChild;) elem.removeChild(elem.firstChild);
          elem.options && jQuery.nodeName(elem, "select") && (elem.options.length = 0)
        }
        return this
      },
      clone: function(dataAndEvents, deepDataAndEvents) {
        return dataAndEvents = null == dataAndEvents ? !1 : dataAndEvents, deepDataAndEvents = null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents, this.map(function() {
          return jQuery.clone(this, dataAndEvents, deepDataAndEvents)
        })
      },
      html: function(value) {
        return access(this, function(value) {
          var elem = this[0] || {},
            i = 0,
            l = this.length;
          if (void 0 === value) return 1 === elem.nodeType ? elem.innerHTML.replace(rinlinejQuery, "") : void 0;
          if (!("string" != typeof value || rnoInnerhtml.test(value) || !support.htmlSerialize && rnoshimcache.test(value) || !support.leadingWhitespace && rleadingWhitespace.test(value) || wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()])) {
            value = value.replace(rxhtmlTag, "<$1></$2>");
            try {
              for (; l > i; i++) elem = this[i] || {}, 1 === elem.nodeType && (jQuery.cleanData(getAll(elem, !1)), elem.innerHTML = value);
              elem = 0
            } catch (e) {}
          }
          elem && this.empty().append(value)
        }, null, value, arguments.length)
      },
      replaceWith: function() {
        var arg = arguments[0];
        return this.domManip(arguments, function(elem) {
          arg = this.parentNode, jQuery.cleanData(getAll(this)), arg && arg.replaceChild(elem, this)
        }), arg && (arg.length || arg.nodeType) ? this : this.remove()
      },
      detach: function(selector) {
        return this.remove(selector, !0)
      },
      domManip: function(args, callback) {
        args = concat.apply([], args);
        var first, node, hasScripts, scripts, doc, fragment, i = 0,
          l = this.length,
          set = this,
          iNoClone = l - 1,
          value = args[0],
          isFunction = jQuery.isFunction(value);
        if (isFunction || l > 1 && "string" == typeof value && !support.checkClone && rchecked.test(value)) return this.each(function(index) {
          var self = set.eq(index);
          isFunction && (args[0] = value.call(this, index, self.html())), self.domManip(args, callback)
        });
        if (l && (fragment = jQuery.buildFragment(args, this[0].ownerDocument, !1, this), first = fragment.firstChild, 1 === fragment.childNodes.length && (fragment = first), first)) {
          for (scripts = jQuery.map(getAll(fragment, "script"), disableScript), hasScripts = scripts.length; l > i; i++) node = fragment, i !== iNoClone && (node = jQuery.clone(node, !0, !0), hasScripts && jQuery.merge(scripts, getAll(node, "script"))), callback.call(this[i], node, i);
          if (hasScripts)
            for (doc = scripts[scripts.length - 1].ownerDocument, jQuery.map(scripts, restoreScript), i = 0; hasScripts > i; i++) node = scripts[i], rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node) && (node.src ? jQuery._evalUrl && jQuery._evalUrl(node.src) : jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, "")));
          fragment = first = null
        }
        return this
      }
    }), jQuery.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(name, original) {
      jQuery.fn[name] = function(selector) {
        for (var elems, i = 0, ret = [], insert = jQuery(selector), last = insert.length - 1; last >= i; i++) elems = i === last ? this : this.clone(!0), jQuery(insert[i])[original](elems), push.apply(ret, elems.get());
        return this.pushStack(ret)
      }
    });
    var iframe, elemdisplay = {};
    ! function() {
      var shrinkWrapBlocksVal;
      support.shrinkWrapBlocks = function() {
        if (null != shrinkWrapBlocksVal) return shrinkWrapBlocksVal;
        shrinkWrapBlocksVal = !1;
        var div, body, container;
        return body = document.getElementsByTagName("body")[0], body && body.style ? (div = document.createElement("div"), container = document.createElement("div"), container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", body.appendChild(container).appendChild(div), typeof div.style.zoom !== strundefined && (div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", div.appendChild(document.createElement("div")).style.width = "5px", shrinkWrapBlocksVal = 3 !== div.offsetWidth), body.removeChild(container), shrinkWrapBlocksVal) : void 0
      }
    }();
    var getStyles, curCSS, rmargin = /^margin/,
      rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i"),
      rposition = /^(top|right|bottom|left)$/;
    window.getComputedStyle ? (getStyles = function(elem) {
        return elem.ownerDocument.defaultView.getComputedStyle(elem, null)
      }, curCSS = function(elem, name, computed) {
        var width, minWidth, maxWidth, ret, style = elem.style;
        return computed = computed || getStyles(elem), ret = computed ? computed.getPropertyValue(name) || computed[name] : void 0, computed && ("" !== ret || jQuery.contains(elem.ownerDocument, elem) || (ret = jQuery.style(elem, name)), rnumnonpx.test(ret) && rmargin.test(name) && (width = style.width, minWidth = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, ret = computed.width, style.width = width, style.minWidth = minWidth, style.maxWidth = maxWidth)), void 0 === ret ? ret : ret + ""
      }) : document.documentElement.currentStyle && (getStyles = function(elem) {
        return elem.currentStyle
      }, curCSS = function(elem, name, computed) {
        var left, rs, rsLeft, ret, style = elem.style;
        return computed = computed || getStyles(elem), ret = computed ? computed[name] : void 0, null == ret && style && style[name] && (ret = style[name]), rnumnonpx.test(ret) && !rposition.test(name) && (left = style.left, rs = elem.runtimeStyle, rsLeft = rs && rs.left, rsLeft && (rs.left = elem.currentStyle.left), style.left = "fontSize" === name ? "1em" : ret, ret = style.pixelLeft + "px", style.left = left, rsLeft && (rs.left = rsLeft)), void 0 === ret ? ret : ret + "" || "auto"
      }),
      function() {
        function computeStyleTests() {
          var div, body, container, contents;
          body = document.getElementsByTagName("body")[0], body && body.style && (div = document.createElement("div"), container = document.createElement("div"), container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", body.appendChild(container).appendChild(div), div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", pixelPositionVal = boxSizingReliableVal = !1, reliableMarginRightVal = !0, window.getComputedStyle && (pixelPositionVal = "1%" !== (window.getComputedStyle(div, null) || {}).top, boxSizingReliableVal = "4px" === (window.getComputedStyle(div, null) || {
            width: "4px"
          }).width, contents = div.appendChild(document.createElement("div")), contents.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", contents.style.marginRight = contents.style.width = "0", div.style.width = "1px", reliableMarginRightVal = !parseFloat((window.getComputedStyle(contents, null) || {}).marginRight)), div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", contents = div.getElementsByTagName("td"), contents[0].style.cssText = "margin:0;border:0;padding:0;display:none", reliableHiddenOffsetsVal = 0 === contents[0].offsetHeight, reliableHiddenOffsetsVal && (contents[0].style.display = "", contents[1].style.display = "none", reliableHiddenOffsetsVal = 0 === contents[0].offsetHeight), body.removeChild(container))
        }
        var div, style, a, pixelPositionVal, boxSizingReliableVal, reliableHiddenOffsetsVal, reliableMarginRightVal;
        div = document.createElement("div"), div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = div.getElementsByTagName("a")[0], style = a && a.style, style && (style.cssText = "float:left;opacity:.5", support.opacity = "0.5" === style.opacity, support.cssFloat = !!style.cssFloat, div.style.backgroundClip = "content-box", div.cloneNode(!0).style.backgroundClip = "", support.clearCloneStyle = "content-box" === div.style.backgroundClip, support.boxSizing = "" === style.boxSizing || "" === style.MozBoxSizing || "" === style.WebkitBoxSizing, jQuery.extend(support, {
          reliableHiddenOffsets: function() {
            return null == reliableHiddenOffsetsVal && computeStyleTests(), reliableHiddenOffsetsVal
          },
          boxSizingReliable: function() {
            return null == boxSizingReliableVal && computeStyleTests(), boxSizingReliableVal
          },
          pixelPosition: function() {
            return null == pixelPositionVal && computeStyleTests(), pixelPositionVal
          },
          reliableMarginRight: function() {
            return null == reliableMarginRightVal && computeStyleTests(), reliableMarginRightVal
          }
        }))
      }(), jQuery.swap = function(elem, options, callback, args) {
        var ret, name, old = {};
        for (name in options) old[name] = elem.style[name], elem.style[name] = options[name];
        ret = callback.apply(elem, args || []);
        for (name in options) elem.style[name] = old[name];
        return ret
      };
    var ralpha = /alpha\([^)]*\)/i,
      ropacity = /opacity\s*=\s*([^)]*)/,
      rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
      rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
      cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      cssPrefixes = ["Webkit", "O", "Moz", "ms"];
    jQuery.extend({
      cssHooks: {
        opacity: {
          get: function(elem, computed) {
            if (computed) {
              var ret = curCSS(elem, "opacity");
              return "" === ret ? "1" : ret
            }
          }
        }
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {
        "float": support.cssFloat ? "cssFloat" : "styleFloat"
      },
      style: function(elem, name, value, extra) {
        if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
          var ret, type, hooks, origName = jQuery.camelCase(name),
            style = elem.style;
          if (name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], void 0 === value) return hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, !1, extra)) ? ret : style[name];
          if (type = typeof value, "string" === type && (ret = rrelNum.exec(value)) && (value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name)), type = "number"), null != value && value === value && ("number" !== type || jQuery.cssNumber[origName] || (value += "px"), support.clearCloneStyle || "" !== value || 0 !== name.indexOf("background") || (style[name] = "inherit"), !(hooks && "set" in hooks && void 0 === (value = hooks.set(elem, value, extra))))) try {
            style[name] = value
          } catch (e) {}
        }
      },
      css: function(elem, name, extra, styles) {
        var num, val, hooks, origName = jQuery.camelCase(name);
        return name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], hooks && "get" in hooks && (val = hooks.get(elem, !0, extra)), void 0 === val && (val = curCSS(elem, name, styles)), "normal" === val && name in cssNormalTransform && (val = cssNormalTransform[name]), "" === extra || extra ? (num = parseFloat(val), extra === !0 || jQuery.isNumeric(num) ? num || 0 : val) : val
      }
    }), jQuery.each(["height", "width"], function(i, name) {
      jQuery.cssHooks[name] = {
        get: function(elem, computed, extra) {
          return computed ? rdisplayswap.test(jQuery.css(elem, "display")) && 0 === elem.offsetWidth ? jQuery.swap(elem, cssShow, function() {
            return getWidthOrHeight(elem, name, extra)
          }) : getWidthOrHeight(elem, name, extra) : void 0
        },
        set: function(elem, value, extra) {
          var styles = extra && getStyles(elem);
          return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, support.boxSizing && "border-box" === jQuery.css(elem, "boxSizing", !1, styles), styles) : 0)
        }
      }
    }), support.opacity || (jQuery.cssHooks.opacity = {
      get: function(elem, computed) {
        return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : computed ? "1" : ""
      },
      set: function(elem, value) {
        var style = elem.style,
          currentStyle = elem.currentStyle,
          opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + 100 * value + ")" : "",
          filter = currentStyle && currentStyle.filter || style.filter || "";
        style.zoom = 1, (value >= 1 || "" === value) && "" === jQuery.trim(filter.replace(ralpha, "")) && style.removeAttribute && (style.removeAttribute("filter"), "" === value || currentStyle && !currentStyle.filter) || (style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity)
      }
    }), jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) {
      return computed ? jQuery.swap(elem, {
        display: "inline-block"
      }, curCSS, [elem, "marginRight"]) : void 0
    }), jQuery.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(prefix, suffix) {
      jQuery.cssHooks[prefix + suffix] = {
        expand: function(value) {
          for (var i = 0, expanded = {}, parts = "string" == typeof value ? value.split(" ") : [value]; 4 > i; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
          return expanded
        }
      }, rmargin.test(prefix) || (jQuery.cssHooks[prefix + suffix].set = setPositiveNumber)
    }), jQuery.fn.extend({
      css: function(name, value) {
        return access(this, function(elem, name, value) {
          var styles, len, map = {},
            i = 0;
          if (jQuery.isArray(name)) {
            for (styles = getStyles(elem), len = name.length; len > i; i++) map[name[i]] = jQuery.css(elem, name[i], !1, styles);
            return map
          }
          return void 0 !== value ? jQuery.style(elem, name, value) : jQuery.css(elem, name)
        }, name, value, arguments.length > 1)
      },
      show: function() {
        return showHide(this, !0)
      },
      hide: function() {
        return showHide(this)
      },
      toggle: function(state) {
        return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each(function() {
          isHidden(this) ? jQuery(this).show() : jQuery(this).hide()
        })
      }
    }), jQuery.Tween = Tween, Tween.prototype = {
      constructor: Tween,
      init: function(elem, options, prop, end, easing, unit) {
        this.elem = elem, this.prop = prop, this.easing = easing || "swing", this.options = options, this.start = this.now = this.cur(), this.end = end, this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px")
      },
      cur: function() {
        var hooks = Tween.propHooks[this.prop];
        return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this)
      },
      run: function(percent) {
        var eased, hooks = Tween.propHooks[this.prop];
        return this.pos = eased = this.options.duration ? jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this
      }
    }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = {
      _default: {
        get: function(tween) {
          var result;
          return null == tween.elem[tween.prop] || tween.elem.style && null != tween.elem.style[tween.prop] ? (result = jQuery.css(tween.elem, tween.prop, ""), result && "auto" !== result ? result : 0) : tween.elem[tween.prop]
        },
        set: function(tween) {
          jQuery.fx.step[tween.prop] ? jQuery.fx.step[tween.prop](tween) : tween.elem.style && (null != tween.elem.style[jQuery.cssProps[tween.prop]] || jQuery.cssHooks[tween.prop]) ? jQuery.style(tween.elem, tween.prop, tween.now + tween.unit) : tween.elem[tween.prop] = tween.now
        }
      }
    }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
      set: function(tween) {
        tween.elem.nodeType && tween.elem.parentNode && (tween.elem[tween.prop] = tween.now)
      }
    }, jQuery.easing = {
      linear: function(p) {
        return p
      },
      swing: function(p) {
        return .5 - Math.cos(p * Math.PI) / 2
      }
    }, jQuery.fx = Tween.prototype.init, jQuery.fx.step = {};
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/,
      rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
      rrun = /queueHooks$/,
      animationPrefilters = [defaultPrefilter],
      tweeners = {
        "*": [function(prop, value) {
          var tween = this.createTween(prop, value),
            target = tween.cur(),
            parts = rfxnum.exec(value),
            unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
            start = (jQuery.cssNumber[prop] || "px" !== unit && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
            scale = 1,
            maxIterations = 20;
          if (start && start[3] !== unit) {
            unit = unit || start[3], parts = parts || [], start = +target || 1;
            do scale = scale || ".5", start /= scale, jQuery.style(tween.elem, prop, start + unit); while (scale !== (scale = tween.cur() / target) && 1 !== scale && --maxIterations)
          }
          return parts && (start = tween.start = +start || +target || 0, tween.unit = unit, tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2]), tween
        }]
      };
    jQuery.Animation = jQuery.extend(Animation, {
        tweener: function(props, callback) {
          jQuery.isFunction(props) ? (callback = props, props = ["*"]) : props = props.split(" ");
          for (var prop, index = 0, length = props.length; length > index; index++) prop = props[index], tweeners[prop] = tweeners[prop] || [], tweeners[prop].unshift(callback)
        },
        prefilter: function(callback, prepend) {
          prepend ? animationPrefilters.unshift(callback) : animationPrefilters.push(callback)
        }
      }), jQuery.speed = function(speed, easing, fn) {
        var opt = speed && "object" == typeof speed ? jQuery.extend({}, speed) : {
          complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
          duration: speed,
          easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };
        return opt.duration = jQuery.fx.off ? 0 : "number" == typeof opt.duration ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default, (null == opt.queue || opt.queue === !0) && (opt.queue = "fx"), opt.old = opt.complete, opt.complete = function() {
          jQuery.isFunction(opt.old) && opt.old.call(this), opt.queue && jQuery.dequeue(this, opt.queue)
        }, opt
      }, jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
          return this.filter(isHidden).css("opacity", 0).show().end().animate({
            opacity: to
          }, speed, easing, callback)
        },
        animate: function(prop, speed, easing, callback) {
          var empty = jQuery.isEmptyObject(prop),
            optall = jQuery.speed(speed, easing, callback),
            doAnimation = function() {
              var anim = Animation(this, jQuery.extend({}, prop), optall);
              (empty || jQuery._data(this, "finish")) && anim.stop(!0)
            };
          return doAnimation.finish = doAnimation, empty || optall.queue === !1 ? this.each(doAnimation) : this.queue(optall.queue, doAnimation)
        },
        stop: function(type, clearQueue, gotoEnd) {
          var stopQueue = function(hooks) {
            var stop = hooks.stop;
            delete hooks.stop, stop(gotoEnd)
          };
          return "string" != typeof type && (gotoEnd = clearQueue, clearQueue = type, type = void 0), clearQueue && type !== !1 && this.queue(type || "fx", []), this.each(function() {
            var dequeue = !0,
              index = null != type && type + "queueHooks",
              timers = jQuery.timers,
              data = jQuery._data(this);
            if (index) data[index] && data[index].stop && stopQueue(data[index]);
            else
              for (index in data) data[index] && data[index].stop && rrun.test(index) && stopQueue(data[index]);
            for (index = timers.length; index--;) timers[index].elem !== this || null != type && timers[index].queue !== type || (timers[index].anim.stop(gotoEnd), dequeue = !1, timers.splice(index, 1));
            (dequeue || !gotoEnd) && jQuery.dequeue(this, type)
          })
        },
        finish: function(type) {
          return type !== !1 && (type = type || "fx"), this.each(function() {
            var index, data = jQuery._data(this),
              queue = data[type + "queue"],
              hooks = data[type + "queueHooks"],
              timers = jQuery.timers,
              length = queue ? queue.length : 0;
            for (data.finish = !0, jQuery.queue(this, type, []), hooks && hooks.stop && hooks.stop.call(this, !0), index = timers.length; index--;) timers[index].elem === this && timers[index].queue === type && (timers[index].anim.stop(!0), timers.splice(index, 1));
            for (index = 0; length > index; index++) queue[index] && queue[index].finish && queue[index].finish.call(this);
            delete data.finish
          })
        }
      }), jQuery.each(["toggle", "show", "hide"], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
          return null == speed || "boolean" == typeof speed ? cssFn.apply(this, arguments) : this.animate(genFx(name, !0), speed, easing, callback)
        }
      }), jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
          return this.animate(props, speed, easing, callback)
        }
      }), jQuery.timers = [], jQuery.fx.tick = function() {
        var timer, timers = jQuery.timers,
          i = 0;
        for (fxNow = jQuery.now(); i < timers.length; i++) timer = timers[i], timer() || timers[i] !== timer || timers.splice(i--, 1);
        timers.length || jQuery.fx.stop(), fxNow = void 0
      }, jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer), timer() ? jQuery.fx.start() : jQuery.timers.pop()
      }, jQuery.fx.interval = 13, jQuery.fx.start = function() {
        timerId || (timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval))
      }, jQuery.fx.stop = function() {
        clearInterval(timerId), timerId = null
      }, jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, jQuery.fn.delay = function(time, type) {
        return time = jQuery.fx ? jQuery.fx.speeds[time] || time : time, type = type || "fx", this.queue(type, function(next, hooks) {
          var timeout = setTimeout(next, time);
          hooks.stop = function() {
            clearTimeout(timeout)
          }
        })
      },
      function() {
        var input, div, select, a, opt;
        div = document.createElement("div"), div.setAttribute("className", "t"), div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = div.getElementsByTagName("a")[0], select = document.createElement("select"), opt = select.appendChild(document.createElement("option")), input = div.getElementsByTagName("input")[0], a.style.cssText = "top:1px", support.getSetAttribute = "t" !== div.className, support.style = /top/.test(a.getAttribute("style")), support.hrefNormalized = "/a" === a.getAttribute("href"), support.checkOn = !!input.value, support.optSelected = opt.selected, support.enctype = !!document.createElement("form").enctype, select.disabled = !0, support.optDisabled = !opt.disabled, input = document.createElement("input"), input.setAttribute("value", ""), support.input = "" === input.getAttribute("value"), input.value = "t", input.setAttribute("type", "radio"), support.radioValue = "t" === input.value
      }();
    var rreturn = /\r/g;
    jQuery.fn.extend({
      val: function(value) {
        var hooks, ret, isFunction, elem = this[0]; {
          if (arguments.length) return isFunction = jQuery.isFunction(value), this.each(function(i) {
            var val;
            1 === this.nodeType && (val = isFunction ? value.call(this, i, jQuery(this).val()) : value, null == val ? val = "" : "number" == typeof val ? val += "" : jQuery.isArray(val) && (val = jQuery.map(val, function(value) {
              return null == value ? "" : value + ""
            })), hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()], hooks && "set" in hooks && void 0 !== hooks.set(this, val, "value") || (this.value = val))
          });
          if (elem) return hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()], hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, "value")) ? ret : (ret = elem.value, "string" == typeof ret ? ret.replace(rreturn, "") : null == ret ? "" : ret)
        }
      }
    }), jQuery.extend({
      valHooks: {
        option: {
          get: function(elem) {
            var val = jQuery.find.attr(elem, "value");
            return null != val ? val : jQuery.trim(jQuery.text(elem))
          }
        },
        select: {
          get: function(elem) {
            for (var value, option, options = elem.options, index = elem.selectedIndex, one = "select-one" === elem.type || 0 > index, values = one ? null : [], max = one ? index + 1 : options.length, i = 0 > index ? max : one ? index : 0; max > i; i++)
              if (option = options[i], !(!option.selected && i !== index || (support.optDisabled ? option.disabled : null !== option.getAttribute("disabled")) || option.parentNode.disabled && jQuery.nodeName(option.parentNode, "optgroup"))) {
                if (value = jQuery(option).val(), one) return value;
                values.push(value)
              }
            return values
          },
          set: function(elem, value) {
            for (var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length; i--;)
              if (option = options[i], jQuery.inArray(jQuery.valHooks.option.get(option), values) >= 0) try {
                option.selected = optionSet = !0
              } catch (_) {
                option.scrollHeight
              } else option.selected = !1;
            return optionSet || (elem.selectedIndex = -1), options
          }
        }
      }
    }), jQuery.each(["radio", "checkbox"], function() {
      jQuery.valHooks[this] = {
        set: function(elem, value) {
          return jQuery.isArray(value) ? elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0 : void 0
        }
      }, support.checkOn || (jQuery.valHooks[this].get = function(elem) {
        return null === elem.getAttribute("value") ? "on" : elem.value
      })
    });
    var nodeHook, boolHook, attrHandle = jQuery.expr.attrHandle,
      ruseDefault = /^(?:checked|selected)$/i,
      getSetAttribute = support.getSetAttribute,
      getSetInput = support.input;
    jQuery.fn.extend({
      attr: function(name, value) {
        return access(this, jQuery.attr, name, value, arguments.length > 1)
      },
      removeAttr: function(name) {
        return this.each(function() {
          jQuery.removeAttr(this, name)
        })
      }
    }), jQuery.extend({
      attr: function(elem, name, value) {
        var hooks, ret, nType = elem.nodeType;
        if (elem && 3 !== nType && 8 !== nType && 2 !== nType) return typeof elem.getAttribute === strundefined ? jQuery.prop(elem, name, value) : (1 === nType && jQuery.isXMLDoc(elem) || (name = name.toLowerCase(), hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook)), void 0 === value ? hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : (ret = jQuery.find.attr(elem, name), null == ret ? void 0 : ret) : null !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : (elem.setAttribute(name, value + ""), value) : void jQuery.removeAttr(elem, name))
      },
      removeAttr: function(elem, value) {
        var name, propName, i = 0,
          attrNames = value && value.match(rnotwhite);
        if (attrNames && 1 === elem.nodeType)
          for (; name = attrNames[i++];) propName = jQuery.propFix[name] || name, jQuery.expr.match.bool.test(name) ? getSetInput && getSetAttribute || !ruseDefault.test(name) ? elem[propName] = !1 : elem[jQuery.camelCase("default-" + name)] = elem[propName] = !1 : jQuery.attr(elem, name, ""), elem.removeAttribute(getSetAttribute ? name : propName)
      },
      attrHooks: {
        type: {
          set: function(elem, value) {
            if (!support.radioValue && "radio" === value && jQuery.nodeName(elem, "input")) {
              var val = elem.value;
              return elem.setAttribute("type", value), val && (elem.value = val), value
            }
          }
        }
      }
    }), boolHook = {
      set: function(elem, value, name) {
        return value === !1 ? jQuery.removeAttr(elem, name) : getSetInput && getSetAttribute || !ruseDefault.test(name) ? elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name) : elem[jQuery.camelCase("default-" + name)] = elem[name] = !0, name
      }
    }, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
      var getter = attrHandle[name] || jQuery.find.attr;
      attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ? function(elem, name, isXML) {
        var ret, handle;
        return isXML || (handle = attrHandle[name], attrHandle[name] = ret, ret = null != getter(elem, name, isXML) ? name.toLowerCase() : null, attrHandle[name] = handle), ret
      } : function(elem, name, isXML) {
        return isXML ? void 0 : elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null
      }
    }), getSetInput && getSetAttribute || (jQuery.attrHooks.value = {
      set: function(elem, value, name) {
        return jQuery.nodeName(elem, "input") ? void(elem.defaultValue = value) : nodeHook && nodeHook.set(elem, value, name)
      }
    }), getSetAttribute || (nodeHook = {
      set: function(elem, value, name) {
        var ret = elem.getAttributeNode(name);
        return ret || elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name)), ret.value = value += "", "value" === name || value === elem.getAttribute(name) ? value : void 0
      }
    }, attrHandle.id = attrHandle.name = attrHandle.coords = function(elem, name, isXML) {
      var ret;
      return isXML ? void 0 : (ret = elem.getAttributeNode(name)) && "" !== ret.value ? ret.value : null
    }, jQuery.valHooks.button = {
      get: function(elem, name) {
        var ret = elem.getAttributeNode(name);
        return ret && ret.specified ? ret.value : void 0
      },
      set: nodeHook.set
    }, jQuery.attrHooks.contenteditable = {
      set: function(elem, value, name) {
        nodeHook.set(elem, "" === value ? !1 : value, name)
      }
    }, jQuery.each(["width", "height"], function(i, name) {
      jQuery.attrHooks[name] = {
        set: function(elem, value) {
          return "" === value ? (elem.setAttribute(name, "auto"), value) : void 0
        }
      }
    })), support.style || (jQuery.attrHooks.style = {
      get: function(elem) {
        return elem.style.cssText || void 0
      },
      set: function(elem, value) {
        return elem.style.cssText = value + ""
      }
    });
    var rfocusable = /^(?:input|select|textarea|button|object)$/i,
      rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({
      prop: function(name, value) {
        return access(this, jQuery.prop, name, value, arguments.length > 1)
      },
      removeProp: function(name) {
        return name = jQuery.propFix[name] || name, this.each(function() {
          try {
            this[name] = void 0, delete this[name]
          } catch (e) {}
        })
      }
    }), jQuery.extend({
      propFix: {
        "for": "htmlFor",
        "class": "className"
      },
      prop: function(elem, name, value) {
        var ret, hooks, notxml, nType = elem.nodeType;
        if (elem && 3 !== nType && 8 !== nType && 2 !== nType) return notxml = 1 !== nType || !jQuery.isXMLDoc(elem), notxml && (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), void 0 !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name]
      },
      propHooks: {
        tabIndex: {
          get: function(elem) {
            var tabindex = jQuery.find.attr(elem, "tabindex");
            return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1
          }
        }
      }
    }), support.hrefNormalized || jQuery.each(["href", "src"], function(i, name) {
      jQuery.propHooks[name] = {
        get: function(elem) {
          return elem.getAttribute(name, 4)
        }
      }
    }), support.optSelected || (jQuery.propHooks.selected = {
      get: function(elem) {
        var parent = elem.parentNode;
        return parent && (parent.selectedIndex, parent.parentNode && parent.parentNode.selectedIndex), null
      }
    }), jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      jQuery.propFix[this.toLowerCase()] = this
    }), support.enctype || (jQuery.propFix.enctype = "encoding");
    var rclass = /[\t\r\n\f]/g;
    jQuery.fn.extend({
      addClass: function(value) {
        var classes, elem, cur, clazz, j, finalValue, i = 0,
          len = this.length,
          proceed = "string" == typeof value && value;
        if (jQuery.isFunction(value)) return this.each(function(j) {
          jQuery(this).addClass(value.call(this, j, this.className))
        });
        if (proceed)
          for (classes = (value || "").match(rnotwhite) || []; len > i; i++)
            if (elem = this[i], cur = 1 === elem.nodeType && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ")) {
              for (j = 0; clazz = classes[j++];) cur.indexOf(" " + clazz + " ") < 0 && (cur += clazz + " ");
              finalValue = jQuery.trim(cur), elem.className !== finalValue && (elem.className = finalValue)
            }
        return this
      },
      removeClass: function(value) {
        var classes, elem, cur, clazz, j, finalValue, i = 0,
          len = this.length,
          proceed = 0 === arguments.length || "string" == typeof value && value;
        if (jQuery.isFunction(value)) return this.each(function(j) {
          jQuery(this).removeClass(value.call(this, j, this.className))
        });
        if (proceed)
          for (classes = (value || "").match(rnotwhite) || []; len > i; i++)
            if (elem = this[i], cur = 1 === elem.nodeType && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "")) {
              for (j = 0; clazz = classes[j++];)
                for (; cur.indexOf(" " + clazz + " ") >= 0;) cur = cur.replace(" " + clazz + " ", " ");
              finalValue = value ? jQuery.trim(cur) : "", elem.className !== finalValue && (elem.className = finalValue)
            }
        return this
      },
      toggleClass: function(value, stateVal) {
        var type = typeof value;
        return "boolean" == typeof stateVal && "string" === type ? stateVal ? this.addClass(value) : this.removeClass(value) : this.each(jQuery.isFunction(value) ? function(i) {
          jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal)
        } : function() {
          if ("string" === type)
            for (var className, i = 0, self = jQuery(this), classNames = value.match(rnotwhite) || []; className = classNames[i++];) self.hasClass(className) ? self.removeClass(className) : self.addClass(className);
          else(type === strundefined || "boolean" === type) && (this.className && jQuery._data(this, "__className__", this.className), this.className = this.className || value === !1 ? "" : jQuery._data(this, "__className__") || "")
        })
      },
      hasClass: function(selector) {
        for (var className = " " + selector + " ", i = 0, l = this.length; l > i; i++)
          if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) return !0;
        return !1
      }
    }), jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(i, name) {
      jQuery.fn[name] = function(data, fn) {
        return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name)
      }
    }), jQuery.fn.extend({
      hover: function(fnOver, fnOut) {
        return this.mouseenter(fnOver).mouseleave(fnOut || fnOver)
      },
      bind: function(types, data, fn) {
        return this.on(types, null, data, fn)
      },
      unbind: function(types, fn) {
        return this.off(types, null, fn)
      },
      delegate: function(selector, types, data, fn) {
        return this.on(types, selector, data, fn)
      },
      undelegate: function(selector, types, fn) {
        return 1 === arguments.length ? this.off(selector, "**") : this.off(types, selector || "**", fn)
      }
    });
    var nonce = jQuery.now(),
      rquery = /\?/,
      rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    jQuery.parseJSON = function(data) {
      if (window.JSON && window.JSON.parse) return window.JSON.parse(data + "");
      var requireNonComma, depth = null,
        str = jQuery.trim(data + "");
      return str && !jQuery.trim(str.replace(rvalidtokens, function(token, comma, open, close) {
        return requireNonComma && comma && (depth = 0), 0 === depth ? token : (requireNonComma = open || comma, depth += !close - !open, "")
      })) ? Function("return " + str)() : jQuery.error("Invalid JSON: " + data)
    }, jQuery.parseXML = function(data) {
      var xml, tmp;
      if (!data || "string" != typeof data) return null;
      try {
        window.DOMParser ? (tmp = new DOMParser, xml = tmp.parseFromString(data, "text/xml")) : (xml = new ActiveXObject("Microsoft.XMLDOM"), xml.async = "false", xml.loadXML(data))
      } catch (e) {
        xml = void 0
      }
      return xml && xml.documentElement && !xml.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + data), xml
    };
    var ajaxLocParts, ajaxLocation, rhash = /#.*$/,
      rts = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,
      rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      prefilters = {},
      transports = {},
      allTypes = "*/".concat("*");
    try {
      ajaxLocation = location.href
    } catch (e) {
      ajaxLocation = document.createElement("a"), ajaxLocation.href = "", ajaxLocation = ajaxLocation.href
    }
    ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [], jQuery.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ajaxLocation,
        type: "GET",
        isLocal: rlocalProtocol.test(ajaxLocParts[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": allTypes,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /xml/,
          html: /html/,
          json: /json/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": jQuery.parseJSON,
          "text xml": jQuery.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(target, settings) {
        return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target)
      },
      ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
      ajaxTransport: addToPrefiltersOrTransports(transports),
      ajax: function(url, options) {
        function done(status, nativeStatusText, responses, headers) {
          var isSuccess, success, error, response, modified, statusText = nativeStatusText;
          2 !== state && (state = 2, timeoutTimer && clearTimeout(timeoutTimer), transport = void 0, responseHeadersString = headers || "", jqXHR.readyState = status > 0 ? 4 : 0, isSuccess = status >= 200 && 300 > status || 304 === status, responses && (response = ajaxHandleResponses(s, jqXHR, responses)), response = ajaxConvert(s, response, jqXHR, isSuccess), isSuccess ? (s.ifModified && (modified = jqXHR.getResponseHeader("Last-Modified"), modified && (jQuery.lastModified[cacheURL] = modified), modified = jqXHR.getResponseHeader("etag"), modified && (jQuery.etag[cacheURL] = modified)), 204 === status || "HEAD" === s.type ? statusText = "nocontent" : 304 === status ? statusText = "notmodified" : (statusText = response.state, success = response.data, error = response.error, isSuccess = !error)) : (error = statusText, (status || !statusText) && (statusText = "error", 0 > status && (status = 0))), jqXHR.status = status, jqXHR.statusText = (nativeStatusText || statusText) + "", isSuccess ? deferred.resolveWith(callbackContext, [success, statusText, jqXHR]) : deferred.rejectWith(callbackContext, [jqXHR, statusText, error]), jqXHR.statusCode(statusCode), statusCode = void 0, fireGlobals && globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]), completeDeferred.fireWith(callbackContext, [jqXHR, statusText]), fireGlobals && (globalEventContext.trigger("ajaxComplete", [jqXHR, s]), --jQuery.active || jQuery.event.trigger("ajaxStop")))
        }
        "object" == typeof url && (options = url, url = void 0), options = options || {};
        var parts, i, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders, s = jQuery.ajaxSetup({}, options),
          callbackContext = s.context || s,
          globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          statusCode = s.statusCode || {},
          requestHeaders = {},
          requestHeadersNames = {},
          state = 0,
          strAbort = "canceled",
          jqXHR = {
            readyState: 0,
            getResponseHeader: function(key) {
              var match;
              if (2 === state) {
                if (!responseHeaders)
                  for (responseHeaders = {}; match = rheaders.exec(responseHeadersString);) responseHeaders[match[1].toLowerCase()] = match[2];
                match = responseHeaders[key.toLowerCase()]
              }
              return null == match ? null : match
            },
            getAllResponseHeaders: function() {
              return 2 === state ? responseHeadersString : null
            },
            setRequestHeader: function(name, value) {
              var lname = name.toLowerCase();
              return state || (name = requestHeadersNames[lname] = requestHeadersNames[lname] || name, requestHeaders[name] = value), this
            },
            overrideMimeType: function(type) {
              return state || (s.mimeType = type), this
            },
            statusCode: function(map) {
              var code;
              if (map)
                if (2 > state)
                  for (code in map) statusCode[code] = [statusCode[code], map[code]];
                else jqXHR.always(map[jqXHR.status]);
              return this
            },
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              return transport && transport.abort(finalText), done(0, finalText), this
            }
          };
        if (deferred.promise(jqXHR).complete = completeDeferred.add, jqXHR.success = jqXHR.done, jqXHR.error = jqXHR.fail, s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//"), s.type = options.method || options.type || s.method || s.type, s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""], null == s.crossDomain && (parts = rurl.exec(s.url.toLowerCase()), s.crossDomain = !(!parts || parts[1] === ajaxLocParts[1] && parts[2] === ajaxLocParts[2] && (parts[3] || ("http:" === parts[1] ? "80" : "443")) === (ajaxLocParts[3] || ("http:" === ajaxLocParts[1] ? "80" : "443")))), s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), 2 === state) return jqXHR;
        fireGlobals = s.global, fireGlobals && 0 === jQuery.active++ && jQuery.event.trigger("ajaxStart"), s.type = s.type.toUpperCase(), s.hasContent = !rnoContent.test(s.type), cacheURL = s.url, s.hasContent || (s.data && (cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data, delete s.data), s.cache === !1 && (s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++)), s.ifModified && (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]), jQuery.etag[cacheURL] && jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])), (s.data && s.hasContent && s.contentType !== !1 || options.contentType) && jqXHR.setRequestHeader("Content-Type", s.contentType), jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
        for (i in s.headers) jqXHR.setRequestHeader(i, s.headers[i]);
        if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === !1 || 2 === state)) return jqXHR.abort();
        strAbort = "abort";
        for (i in {
            success: 1,
            error: 1,
            complete: 1
          }) jqXHR[i](s[i]);
        if (transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
          jqXHR.readyState = 1, fireGlobals && globalEventContext.trigger("ajaxSend", [jqXHR, s]), s.async && s.timeout > 0 && (timeoutTimer = setTimeout(function() {
            jqXHR.abort("timeout")
          }, s.timeout));
          try {
            state = 1, transport.send(requestHeaders, done)
          } catch (e) {
            if (!(2 > state)) throw e;
            done(-1, e)
          }
        } else done(-1, "No Transport");
        return jqXHR
      },
      getJSON: function(url, data, callback) {
        return jQuery.get(url, data, callback, "json")
      },
      getScript: function(url, callback) {
        return jQuery.get(url, void 0, callback, "script")
      }
    }), jQuery.each(["get", "post"], function(i, method) {
      jQuery[method] = function(url, data, callback, type) {
        return jQuery.isFunction(data) && (type = type || callback, callback = data, data = void 0), jQuery.ajax({
          url: url,
          type: method,
          dataType: type,
          data: data,
          success: callback
        })
      }
    }), jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
      jQuery.fn[type] = function(fn) {
        return this.on(type, fn)
      }
    }), jQuery._evalUrl = function(url) {
      return jQuery.ajax({
        url: url,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        "throws": !0
      })
    }, jQuery.fn.extend({
      wrapAll: function(html) {
        if (jQuery.isFunction(html)) return this.each(function(i) {
          jQuery(this).wrapAll(html.call(this, i))
        });
        if (this[0]) {
          var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && wrap.insertBefore(this[0]), wrap.map(function() {
            for (var elem = this; elem.firstChild && 1 === elem.firstChild.nodeType;) elem = elem.firstChild;
            return elem
          }).append(this)
        }
        return this
      },
      wrapInner: function(html) {
        return this.each(jQuery.isFunction(html) ? function(i) {
          jQuery(this).wrapInner(html.call(this, i))
        } : function() {
          var self = jQuery(this),
            contents = self.contents();
          contents.length ? contents.wrapAll(html) : self.append(html)
        })
      },
      wrap: function(html) {
        var isFunction = jQuery.isFunction(html);
        return this.each(function(i) {
          jQuery(this).wrapAll(isFunction ? html.call(this, i) : html)
        })
      },
      unwrap: function() {
        return this.parent().each(function() {
          jQuery.nodeName(this, "body") || jQuery(this).replaceWith(this.childNodes)
        }).end()
      }
    }), jQuery.expr.filters.hidden = function(elem) {
      return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !support.reliableHiddenOffsets() && "none" === (elem.style && elem.style.display || jQuery.css(elem, "display"))
    }, jQuery.expr.filters.visible = function(elem) {
      return !jQuery.expr.filters.hidden(elem)
    };
    var r20 = /%20/g,
      rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;
    jQuery.param = function(a, traditional) {
      var prefix, s = [],
        add = function(key, value) {
          value = jQuery.isFunction(value) ? value() : null == value ? "" : value, s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value)
        };
      if (void 0 === traditional && (traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional), jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) jQuery.each(a, function() {
        add(this.name, this.value)
      });
      else
        for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
      return s.join("&").replace(r20, "+")
    }, jQuery.fn.extend({
      serialize: function() {
        return jQuery.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var elements = jQuery.prop(this, "elements");
          return elements ? jQuery.makeArray(elements) : this
        }).filter(function() {
          var type = this.type;
          return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type))
        }).map(function(i, elem) {
          var val = jQuery(this).val();
          return null == val ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            }
          }) : {
            name: elem.name,
            value: val.replace(rCRLF, "\r\n")
          }
        }).get()
      }
    }), jQuery.ajaxSettings.xhr = void 0 !== window.ActiveXObject ? function() {
      return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && createStandardXHR() || createActiveXHR()
    } : createStandardXHR;
    var xhrId = 0,
      xhrCallbacks = {},
      xhrSupported = jQuery.ajaxSettings.xhr();
    window.ActiveXObject && jQuery(window).on("unload", function() {
      for (var key in xhrCallbacks) xhrCallbacks[key](void 0, !0)
    }), support.cors = !!xhrSupported && "withCredentials" in xhrSupported, xhrSupported = support.ajax = !!xhrSupported, xhrSupported && jQuery.ajaxTransport(function(options) {
      if (!options.crossDomain || support.cors) {
        var callback;
        return {
          send: function(headers, complete) {
            var i, xhr = options.xhr(),
              id = ++xhrId;
            if (xhr.open(options.type, options.url, options.async, options.username, options.password), options.xhrFields)
              for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
            options.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(options.mimeType), options.crossDomain || headers["X-Requested-With"] || (headers["X-Requested-With"] = "XMLHttpRequest");
            for (i in headers) void 0 !== headers[i] && xhr.setRequestHeader(i, headers[i] + "");
            xhr.send(options.hasContent && options.data || null), callback = function(_, isAbort) {
              var status, statusText, responses;
              if (callback && (isAbort || 4 === xhr.readyState))
                if (delete xhrCallbacks[id], callback = void 0, xhr.onreadystatechange = jQuery.noop, isAbort) 4 !== xhr.readyState && xhr.abort();
                else {
                  responses = {}, status = xhr.status, "string" == typeof xhr.responseText && (responses.text = xhr.responseText);
                  try {
                    statusText = xhr.statusText
                  } catch (e) {
                    statusText = ""
                  }
                  status || !options.isLocal || options.crossDomain ? 1223 === status && (status = 204) : status = responses.text ? 200 : 404
                }
              responses && complete(status, statusText, responses, xhr.getAllResponseHeaders())
            }, options.async ? 4 === xhr.readyState ? setTimeout(callback) : xhr.onreadystatechange = xhrCallbacks[id] = callback : callback()
          },
          abort: function() {
            callback && callback(void 0, !0)
          }
        }
      }
    }), jQuery.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /(?:java|ecma)script/
      },
      converters: {
        "text script": function(text) {
          return jQuery.globalEval(text), text
        }
      }
    }), jQuery.ajaxPrefilter("script", function(s) {
      void 0 === s.cache && (s.cache = !1), s.crossDomain && (s.type = "GET", s.global = !1)
    }), jQuery.ajaxTransport("script", function(s) {
      if (s.crossDomain) {
        var script, head = document.head || jQuery("head")[0] || document.documentElement;
        return {
          send: function(_, callback) {
            script = document.createElement("script"), script.async = !0, s.scriptCharset && (script.charset = s.scriptCharset), script.src = s.url, script.onload = script.onreadystatechange = function(_, isAbort) {
              (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) && (script.onload = script.onreadystatechange = null, script.parentNode && script.parentNode.removeChild(script), script = null, isAbort || callback(200, "success"))
            }, head.insertBefore(script, head.firstChild)
          },
          abort: function() {
            script && script.onload(void 0, !0)
          }
        }
      }
    });
    var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
        return this[callback] = !0, callback
      }
    }), jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
      var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== !1 && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
      return jsonProp || "jsonp" === s.dataTypes[0] ? (callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : s.jsonp !== !1 && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), s.converters["script json"] = function() {
        return responseContainer || jQuery.error(callbackName + " was not called"), responseContainer[0]
      }, s.dataTypes[0] = "json", overwritten = window[callbackName], window[callbackName] = function() {
        responseContainer = arguments
      }, jqXHR.always(function() {
        window[callbackName] = overwritten, s[callbackName] && (s.jsonpCallback = originalSettings.jsonpCallback, oldCallbacks.push(callbackName)), responseContainer && jQuery.isFunction(overwritten) && overwritten(responseContainer[0]), responseContainer = overwritten = void 0
      }), "script") : void 0
    }), jQuery.parseHTML = function(data, context, keepScripts) {
      if (!data || "string" != typeof data) return null;
      "boolean" == typeof context && (keepScripts = context, context = !1), context = context || document;
      var parsed = rsingleTag.exec(data),
        scripts = !keepScripts && [];
      return parsed ? [context.createElement(parsed[1])] : (parsed = jQuery.buildFragment([data], context, scripts), scripts && scripts.length && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes))
    };
    var _load = jQuery.fn.load;
    jQuery.fn.load = function(url, params, callback) {
      if ("string" != typeof url && _load) return _load.apply(this, arguments);
      var selector, response, type, self = this,
        off = url.indexOf(" ");
      return off >= 0 && (selector = jQuery.trim(url.slice(off, url.length)), url = url.slice(0, off)), jQuery.isFunction(params) ? (callback = params, params = void 0) : params && "object" == typeof params && (type = "POST"), self.length > 0 && jQuery.ajax({
        url: url,
        type: type,
        dataType: "html",
        data: params
      }).done(function(responseText) {
        response = arguments, self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText)
      }).complete(callback && function(jqXHR, status) {
        self.each(callback, response || [jqXHR.responseText, status, jqXHR])
      }), this
    }, jQuery.expr.filters.animated = function(elem) {
      return jQuery.grep(jQuery.timers, function(fn) {
        return elem === fn.elem
      }).length
    };
    var docElem = window.document.documentElement;
    jQuery.offset = {
      setOffset: function(elem, options, i) {
        var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {};
        "static" === position && (elem.style.position = "relative"), curOffset = curElem.offset(), curCSSTop = jQuery.css(elem, "top"), curCSSLeft = jQuery.css(elem, "left"), calculatePosition = ("absolute" === position || "fixed" === position) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1, calculatePosition ? (curPosition = curElem.position(), curTop = curPosition.top, curLeft = curPosition.left) : (curTop = parseFloat(curCSSTop) || 0, curLeft = parseFloat(curCSSLeft) || 0), jQuery.isFunction(options) && (options = options.call(elem, i, curOffset)), null != options.top && (props.top = options.top - curOffset.top + curTop), null != options.left && (props.left = options.left - curOffset.left + curLeft), "using" in options ? options.using.call(elem, props) : curElem.css(props)
      }
    }, jQuery.fn.extend({
      offset: function(options) {
        if (arguments.length) return void 0 === options ? this : this.each(function(i) {
          jQuery.offset.setOffset(this, options, i)
        });
        var docElem, win, box = {
            top: 0,
            left: 0
          },
          elem = this[0],
          doc = elem && elem.ownerDocument;
        if (doc) return docElem = doc.documentElement, jQuery.contains(docElem, elem) ? (typeof elem.getBoundingClientRect !== strundefined && (box = elem.getBoundingClientRect()), win = getWindow(doc), {
          top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
          left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
        }) : box
      },
      position: function() {
        if (this[0]) {
          var offsetParent, offset, parentOffset = {
              top: 0,
              left: 0
            },
            elem = this[0];
          return "fixed" === jQuery.css(elem, "position") ? offset = elem.getBoundingClientRect() : (offsetParent = this.offsetParent(), offset = this.offset(), jQuery.nodeName(offsetParent[0], "html") || (parentOffset = offsetParent.offset()), parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", !0), parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", !0)), {
            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", !0),
            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var offsetParent = this.offsetParent || docElem; offsetParent && !jQuery.nodeName(offsetParent, "html") && "static" === jQuery.css(offsetParent, "position");) offsetParent = offsetParent.offsetParent;
          return offsetParent || docElem
        })
      }
    }), jQuery.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(method, prop) {
      var top = /Y/.test(prop);
      jQuery.fn[method] = function(val) {
        return access(this, function(elem, method, val) {
          var win = getWindow(elem);
          return void 0 === val ? win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method] : void(win ? win.scrollTo(top ? jQuery(win).scrollLeft() : val, top ? val : jQuery(win).scrollTop()) : elem[method] = val)
        }, method, val, arguments.length, null)
      }
    }), jQuery.each(["top", "left"], function(i, prop) {
      jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
        return computed ? (computed = curCSS(elem, prop), rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed) : void 0
      })
    }), jQuery.each({
      Height: "height",
      Width: "width"
    }, function(name, type) {
      jQuery.each({
        padding: "inner" + name,
        content: type,
        "": "outer" + name
      }, function(defaultExtra, funcName) {
        jQuery.fn[funcName] = function(margin, value) {
          var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin),
            extra = defaultExtra || (margin === !0 || value === !0 ? "margin" : "border");
          return access(this, function(elem, type, value) {
            var doc;
            return jQuery.isWindow(elem) ? elem.document.documentElement["client" + name] : 9 === elem.nodeType ? (doc = elem.documentElement, Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === value ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra)
          }, type, chainable ? margin : void 0, chainable, null)
        }
      })
    }), jQuery.fn.size = function() {
      return this.length
    }, jQuery.fn.andSelf = jQuery.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
      return jQuery
    });
    var _jQuery = window.jQuery,
      _$ = window.$;
    return jQuery.noConflict = function(deep) {
      return window.$ === jQuery && (window.$ = _$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery
    }, typeof noGlobal === strundefined && (window.jQuery = window.$ = jQuery), jQuery
  }), function($, undefined) {
    $.rails !== undefined && $.error("jquery-ujs has already been loaded!");
    var rails, $document = $(document);
    $.rails = rails = {
      linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
      buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
      inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
      formSubmitSelector: "form",
      formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
      disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
      enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
      requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
      fileInputSelector: "input[type=file]",
      linkDisableSelector: "a[data-disable-with], a[data-disable]",
      buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
      CSRFProtection: function(xhr) {
        var token = $('meta[name="csrf-token"]').attr("content");
        token && xhr.setRequestHeader("X-CSRF-Token", token)
      },
      refreshCSRFTokens: function() {
        var csrfToken = $("meta[name=csrf-token]").attr("content"),
          csrfParam = $("meta[name=csrf-param]").attr("content");
        $('form input[name="' + csrfParam + '"]').val(csrfToken)
      },
      fire: function(obj, name, data) {
        var event = $.Event(name);
        return obj.trigger(event, data), event.result !== !1
      },
      confirm: function(message) {
        return confirm(message)
      },
      ajax: function(options) {
        return $.ajax(options)
      },
      href: function(element) {
        return element[0].href
      },
      handleRemote: function(element) {
        var method, url, data, withCredentials, dataType, options;
        if (rails.fire(element, "ajax:before")) {
          if (withCredentials = element.data("with-credentials") || null, dataType = element.data("type") || $.ajaxSettings && $.ajaxSettings.dataType, element.is("form")) {
            method = element.attr("method"), url = element.attr("action"), data = element.serializeArray();
            var button = element.data("ujs:submit-button");
            button && (data.push(button), element.data("ujs:submit-button", null))
          } else element.is(rails.inputChangeSelector) ? (method = element.data("method"), url = element.data("url"), data = element.serialize(), element.data("params") && (data = data + "&" + element.data("params"))) : element.is(rails.buttonClickSelector) ? (method = element.data("method") || "get", url = element.data("url"), data = element.serialize(), element.data("params") && (data = data + "&" + element.data("params"))) : (method = element.data("method"), url = rails.href(element), data = element.data("params") || null);
          return options = {
            type: method || "GET",
            data: data,
            dataType: dataType,
            beforeSend: function(xhr, settings) {
              return settings.dataType === undefined && xhr.setRequestHeader("accept", "*/*;q=0.5, " + settings.accepts.script), rails.fire(element, "ajax:beforeSend", [xhr, settings]) ? void element.trigger("ajax:send", xhr) : !1
            },
            success: function(data, status, xhr) {
              element.trigger("ajax:success", [data, status, xhr])
            },
            complete: function(xhr, status) {
              element.trigger("ajax:complete", [xhr, status])
            },
            error: function(xhr, status, error) {
              element.trigger("ajax:error", [xhr, status, error])
            },
            crossDomain: rails.isCrossDomain(url)
          }, withCredentials && (options.xhrFields = {
            withCredentials: withCredentials
          }), url && (options.url = url), rails.ajax(options)
        }
        return !1
      },
      isCrossDomain: function(url) {
        var originAnchor = document.createElement("a");
        originAnchor.href = location.href;
        var urlAnchor = document.createElement("a");
        try {
          return urlAnchor.href = url, urlAnchor.href = urlAnchor.href, !urlAnchor.protocol || !urlAnchor.host || originAnchor.protocol + "//" + originAnchor.host != urlAnchor.protocol + "//" + urlAnchor.host
        } catch (e) {
          return !0
        }
      },
      handleMethod: function(link) {
        var href = rails.href(link),
          method = link.data("method"),
          target = link.attr("target"),
          csrfToken = $("meta[name=csrf-token]").attr("content"),
          csrfParam = $("meta[name=csrf-param]").attr("content"),
          form = $('<form method="post" action="' + href + '"></form>'),
          metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';
        csrfParam === undefined || csrfToken === undefined || rails.isCrossDomain(href) || (metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />'), target && form.attr("target", target), form.hide().append(metadataInput).appendTo("body"), form.submit()
      },
      formElements: function(form, selector) {
        return form.is("form") ? $(form[0].elements).filter(selector) : form.find(selector)
      },
      disableFormElements: function(form) {
        rails.formElements(form, rails.disableSelector).each(function() {
          rails.disableFormElement($(this))
        })
      },
      disableFormElement: function(element) {
        var method, replacement;
        method = element.is("button") ? "html" : "val", replacement = element.data("disable-with"), element.data("ujs:enable-with", element[method]()), replacement !== undefined && element[method](replacement), element.prop("disabled", !0)
      },
      enableFormElements: function(form) {
        rails.formElements(form, rails.enableSelector).each(function() {
          rails.enableFormElement($(this))
        })
      },
      enableFormElement: function(element) {
        var method = element.is("button") ? "html" : "val";
        element.data("ujs:enable-with") && element[method](element.data("ujs:enable-with")), element.prop("disabled", !1)
      },
      allowAction: function(element) {
        var callback, message = element.data("confirm"),
          answer = !1;
        return message ? (rails.fire(element, "confirm") && (answer = rails.confirm(message), callback = rails.fire(element, "confirm:complete", [answer])), answer && callback) : !0
      },
      blankInputs: function(form, specifiedSelector, nonBlank) {
        var input, valueToCheck, inputs = $(),
          selector = specifiedSelector || "input,textarea",
          allInputs = form.find(selector);
        return allInputs.each(function() {
          if (input = $(this), valueToCheck = input.is("input[type=checkbox],input[type=radio]") ? input.is(":checked") : input.val(), !valueToCheck == !nonBlank) {
            if (input.is("input[type=radio]") && allInputs.filter('input[type=radio]:checked[name="' + input.attr("name") + '"]').length) return !0;
            inputs = inputs.add(input)
          }
        }), inputs.length ? inputs : !1
      },
      nonBlankInputs: function(form, specifiedSelector) {
        return rails.blankInputs(form, specifiedSelector, !0)
      },
      stopEverything: function(e) {
        return $(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
      },
      disableElement: function(element) {
        var replacement = element.data("disable-with");
        element.data("ujs:enable-with", element.html()), replacement !== undefined && element.html(replacement), element.bind("click.railsDisable", function(e) {
          return rails.stopEverything(e)
        })
      },
      enableElement: function(element) {
        element.data("ujs:enable-with") !== undefined && (element.html(element.data("ujs:enable-with")), element.removeData("ujs:enable-with")), element.unbind("click.railsDisable")
      }
    }, rails.fire($document, "rails:attachBindings") && ($.ajaxPrefilter(function(options, originalOptions, xhr) {
      options.crossDomain || rails.CSRFProtection(xhr)
    }), $document.delegate(rails.linkDisableSelector, "ajax:complete", function() {
      rails.enableElement($(this))
    }), $document.delegate(rails.buttonDisableSelector, "ajax:complete", function() {
      rails.enableFormElement($(this))
    }), $document.delegate(rails.linkClickSelector, "click.rails", function(e) {
      var link = $(this),
        method = link.data("method"),
        data = link.data("params"),
        metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);
      if (!metaClick && link.is(rails.linkDisableSelector) && rails.disableElement(link), link.data("remote") !== undefined) {
        if (metaClick && (!method || "GET" === method) && !data) return !0;
        var handleRemote = rails.handleRemote(link);
        return handleRemote === !1 ? rails.enableElement(link) : handleRemote.error(function() {
          rails.enableElement(link)
        }), !1
      }
      return link.data("method") ? (rails.handleMethod(link), !1) : void 0
    }), $document.delegate(rails.buttonClickSelector, "click.rails", function(e) {
      var button = $(this);
      if (!rails.allowAction(button)) return rails.stopEverything(e);
      button.is(rails.buttonDisableSelector) && rails.disableFormElement(button);
      var handleRemote = rails.handleRemote(button);
      return handleRemote === !1 ? rails.enableFormElement(button) : handleRemote.error(function() {
        rails.enableFormElement(button)
      }), !1
    }), $document.delegate(rails.inputChangeSelector, "change.rails", function(e) {
      var link = $(this);
      return rails.allowAction(link) ? (rails.handleRemote(link), !1) : rails.stopEverything(e)
    }), $document.delegate(rails.formSubmitSelector, "submit.rails", function(e) {
      var blankRequiredInputs, nonBlankFileInputs, form = $(this),
        remote = form.data("remote") !== undefined;
      if (!rails.allowAction(form)) return rails.stopEverything(e);
      if (form.attr("novalidate") == undefined && (blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector), blankRequiredInputs && rails.fire(form, "ajax:aborted:required", [blankRequiredInputs]))) return rails.stopEverything(e);
      if (remote) {
        if (nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector)) {
          setTimeout(function() {
            rails.disableFormElements(form)
          }, 13);
          var aborted = rails.fire(form, "ajax:aborted:file", [nonBlankFileInputs]);
          return aborted || setTimeout(function() {
            rails.enableFormElements(form)
          }, 13), aborted
        }
        return rails.handleRemote(form), !1
      }
      setTimeout(function() {
        rails.disableFormElements(form)
      }, 13)
    }), $document.delegate(rails.formInputClickSelector, "click.rails", function(event) {
      var button = $(this);
      if (!rails.allowAction(button)) return rails.stopEverything(event);
      var name = button.attr("name"),
        data = name ? {
          name: name,
          value: button.val()
        } : null;
      button.closest("form").data("ujs:submit-button", data)
    }), $document.delegate(rails.formSubmitSelector, "ajax:send.rails", function(event) {
      this == event.target && rails.disableFormElements($(this))
    }), $document.delegate(rails.formSubmitSelector, "ajax:complete.rails", function(event) {
      this == event.target && rails.enableFormElements($(this))
    }), $(function() {
      rails.refreshCSRFTokens()
    }))
  }(jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), + function(a) {
  "use strict";

  function b() {
    var a = document.createElement("bootstrap"),
      b = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      };
    for (var c in b)
      if (void 0 !== a.style[c]) return {
        end: b[c]
      };
    return !1
  }
  a.fn.emulateTransitionEnd = function(b) {
    var c = !1,
      d = this;
    a(this).one("bsTransitionEnd", function() {
      c = !0
    });
    var e = function() {
      c || a(d).trigger(a.support.transition.end)
    };
    return setTimeout(e, b), this
  }, a(function() {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
      bindType: a.support.transition.end,
      delegateType: a.support.transition.end,
      handle: function(b) {
        return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
      }
    })
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var c = a(this),
        e = c.data("bs.alert");
      e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
    })
  }
  var c = '[data-dismiss="alert"]',
    d = function(b) {
      a(b).on("click", c, this.close)
    };
  d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
    function c() {
      g.detach().trigger("closed.bs.alert").remove()
    }
    var e = a(this),
      f = e.attr("data-target");
    f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
    var g = a(f);
    b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
  };
  var e = a.fn.alert;
  a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
    return a.fn.alert = e, this
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.button"),
        f = "object" == typeof b && b;
      e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
    })
  }
  var c = function(b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
  };
  c.VERSION = "3.3.6", c.DEFAULTS = {
    loadingText: "loading..."
  }, c.prototype.setState = function(b) {
    var c = "disabled",
      d = this.$element,
      e = d.is("input") ? "val" : "html",
      f = d.data();
    b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
      d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
    }, this), 0)
  }, c.prototype.toggle = function() {
    var a = !0,
      b = this.$element.closest('[data-toggle="buttons"]');
    if (b.length) {
      var c = this.$element.find("input");
      "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
  };
  var d = a.fn.button;
  a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
    return a.fn.button = d, this
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
    var d = a(c.target);
    d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
    a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.carousel"),
        f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
        g = "string" == typeof b ? b : f.slide;
      e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
    })
  }
  var c = function(b, c) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
  };
  c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, c.prototype.keydown = function(a) {
    if (!/input|textarea/i.test(a.target.tagName)) {
      switch (a.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return
      }
      a.preventDefault()
    }
  }, c.prototype.cycle = function(b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
  }, c.prototype.getItemIndex = function(a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
  }, c.prototype.getItemForDirection = function(a, b) {
    var c = this.getItemIndex(b),
      d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
    if (d && !this.options.wrap) return b;
    var e = "prev" == a ? -1 : 1,
      f = (c + e) % this.$items.length;
    return this.$items.eq(f)
  }, c.prototype.to = function(a) {
    var b = this,
      c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
      b.to(a)
    }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
  }, c.prototype.pause = function(b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, c.prototype.next = function() {
    return this.sliding ? void 0 : this.slide("next")
  }, c.prototype.prev = function() {
    return this.sliding ? void 0 : this.slide("prev")
  }, c.prototype.slide = function(b, d) {
    var e = this.$element.find(".item.active"),
      f = d || this.getItemForDirection(b, e),
      g = this.interval,
      h = "next" == b ? "left" : "right",
      i = this;
    if (f.hasClass("active")) return this.sliding = !1;
    var j = f[0],
      k = a.Event("slide.bs.carousel", {
        relatedTarget: j,
        direction: h
      });
    if (this.$element.trigger(k), !k.isDefaultPrevented()) {
      if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var l = a(this.$indicators.children()[this.getItemIndex(f)]);
        l && l.addClass("active")
      }
      var m = a.Event("slid.bs.carousel", {
        relatedTarget: j,
        direction: h
      });
      return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
          i.$element.trigger(m)
        }, 0)
      }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
    }
  };
  var d = a.fn.carousel;
  a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
    return a.fn.carousel = d, this
  };
  var e = function(c) {
    var d, e = a(this),
      f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
    if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()),
        h = e.attr("data-slide-to");
      h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
    }
  };
  a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
    a('[data-ride="carousel"]').each(function() {
      var c = a(this);
      b.call(c, c.data())
    })
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
    return a(d)
  }

  function c(b) {
    return this.each(function() {
      var c = a(this),
        e = c.data("bs.collapse"),
        f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
      !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
    })
  }
  var d = function(b, c) {
    this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
  };
  d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
    toggle: !0
  }, d.prototype.dimension = function() {
    var a = this.$element.hasClass("width");
    return a ? "width" : "height"
  }, d.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
        var f = a.Event("show.bs.collapse");
        if (this.$element.trigger(f), !f.isDefaultPrevented()) {
          e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
          var g = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
          var h = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
          };
          if (!a.support.transition) return h.call(this);
          var i = a.camelCase(["scroll", g].join("-"));
          this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
        }
      }
    }
  }, d.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");
      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();
        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
        var e = function() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        };
        return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
      }
    }
  }, d.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  }, d.prototype.getParent = function() {
    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
      var e = a(d);
      this.addAriaAndCollapsedClass(b(e), e)
    }, this)).end()
  }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
    var c = a.hasClass("in");
    a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
  };
  var e = a.fn.collapse;
  a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
    return a.fn.collapse = e, this
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
    var e = a(this);
    e.attr("data-target") || d.preventDefault();
    var f = b(e),
      g = f.data("bs.collapse"),
      h = g ? "toggle" : e.data();
    c.call(f, h)
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    var c = b.attr("data-target");
    c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
    var d = c && a(c);
    return d && d.length ? d : b.parent()
  }

  function c(c) {
    c && 3 === c.which || (a(e).remove(), a(f).each(function() {
      var d = a(this),
        e = b(d),
        f = {
          relatedTarget: this
        };
      e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
    }))
  }

  function d(b) {
    return this.each(function() {
      var c = a(this),
        d = c.data("bs.dropdown");
      d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
    })
  }
  var e = ".dropdown-backdrop",
    f = '[data-toggle="dropdown"]',
    g = function(b) {
      a(b).on("click.bs.dropdown", this.toggle)
    };
  g.VERSION = "3.3.6", g.prototype.toggle = function(d) {
    var e = a(this);
    if (!e.is(".disabled, :disabled")) {
      var f = b(e),
        g = f.hasClass("open");
      if (c(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
        var h = {
          relatedTarget: this
        };
        if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
        e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
      }
      return !1
    }
  }, g.prototype.keydown = function(c) {
    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
      var d = a(this);
      if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
        var e = b(d),
          g = e.hasClass("open");
        if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
        var h = " li:not(.disabled):visible a",
          i = e.find(".dropdown-menu" + h);
        if (i.length) {
          var j = i.index(c.target);
          38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
        }
      }
    }
  };
  var h = a.fn.dropdown;
  a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
    return a.fn.dropdown = h, this
  }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
    a.stopPropagation()
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function(a) {
  "use strict";

  function b(b, d) {
    return this.each(function() {
      var e = a(this),
        f = e.data("bs.modal"),
        g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
      f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
    })
  }
  var c = function(b, c) {
    this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
      this.$element.trigger("loaded.bs.modal")
    }, this))
  };
  c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, c.prototype.toggle = function(a) {
    return this.isShown ? this.hide() : this.show(a)
  }, c.prototype.show = function(b) {
    var d = this,
      e = a.Event("show.bs.modal", {
        relatedTarget: b
      });
    this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
      d.$element.one("mouseup.dismiss.bs.modal", function(b) {
        a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
      })
    }), this.backdrop(function() {
      var e = a.support.transition && d.$element.hasClass("fade");
      d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
      var f = a.Event("shown.bs.modal", {
        relatedTarget: b
      });
      e ? d.$dialog.one("bsTransitionEnd", function() {
        d.$element.trigger("focus").trigger(f)
      }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
    }))
  }, c.prototype.hide = function(b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
  }, c.prototype.enforceFocus = function() {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
      this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
    }, this))
  }, c.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
      27 == a.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
  }, c.prototype.resize = function() {
    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
  }, c.prototype.hideModal = function() {
    var a = this;
    this.$element.hide(), this.backdrop(function() {
      a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
    })
  }, c.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, c.prototype.backdrop = function(b) {
    var d = this,
      e = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var f = a.support.transition && e;
      if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
          return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
        }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
      f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var g = function() {
        d.removeBackdrop(), b && b()
      };
      a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
    } else b && b()
  }, c.prototype.handleUpdate = function() {
    this.adjustDialog()
  }, c.prototype.adjustDialog = function() {
    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
    })
  }, c.prototype.resetAdjustments = function() {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    })
  }, c.prototype.checkScrollbar = function() {
    var a = window.innerWidth;
    if (!a) {
      var b = document.documentElement.getBoundingClientRect();
      a = b.right - Math.abs(b.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
  }, c.prototype.setScrollbar = function() {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
  }, c.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad)
  }, c.prototype.measureScrollbar = function() {
    var a = document.createElement("div");
    a.className = "modal-scrollbar-measure", this.$body.append(a);
    var b = a.offsetWidth - a.clientWidth;
    return this.$body[0].removeChild(a), b
  };
  var d = a.fn.modal;
  a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
    return a.fn.modal = d, this
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
    var d = a(this),
      e = d.attr("href"),
      f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
      g = f.data("bs.modal") ? "toggle" : a.extend({
        remote: !/#/.test(e) && e
      }, f.data(), d.data());
    d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
        d.is(":visible") && d.trigger("focus")
      })
    }), b.call(f, g, this)
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.tooltip"),
        f = "object" == typeof b && b;
      (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
    })
  }
  var c = function(a, b) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
  };
  c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, c.prototype.init = function(b, c, d) {
    if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
        click: !1,
        hover: !1,
        focus: !1
      }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];
      if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
      else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
          i = "hover" == g ? "mouseleave" : "focusout";
        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = a.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }, c.prototype.getDefaults = function() {
    return c.DEFAULTS
  }, c.prototype.getOptions = function(b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
      show: b.delay,
      hide: b.delay
    }), b
  }, c.prototype.getDelegateOptions = function() {
    var b = {},
      c = this.getDefaults();
    return this._options && a.each(this._options, function(a, d) {
      c[a] != d && (b[a] = d)
    }), b
  }, c.prototype.enter = function(b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
      "in" == c.hoverState && c.show()
    }, c.options.delay.show)) : c.show())
  }, c.prototype.isInStateTrue = function() {
    for (var a in this.inState)
      if (this.inState[a]) return !0;
    return !1
  }, c.prototype.leave = function(b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
      "out" == c.hoverState && c.hide()
    }, c.options.delay.hide)) : c.hide())
  }, c.prototype.show = function() {
    var b = a.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);
      var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (b.isDefaultPrevented() || !d) return;
      var e = this,
        f = this.tip(),
        g = this.getUID(this.type);
      this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
      var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
        i = /\s?auto?\s?/i,
        j = i.test(h);
      j && (h = h.replace(i, "") || "top"), f.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var k = this.getPosition(),
        l = f[0].offsetWidth,
        m = f[0].offsetHeight;
      if (j) {
        var n = h,
          o = this.getPosition(this.$viewport);
        h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
      }
      var p = this.getCalculatedOffset(h, k, l, m);
      this.applyPlacement(p, h);
      var q = function() {
        var a = e.hoverState;
        e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
      };
      a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
    }
  }, c.prototype.applyPlacement = function(b, c) {
    var d = this.tip(),
      e = d[0].offsetWidth,
      f = d[0].offsetHeight,
      g = parseInt(d.css("margin-top"), 10),
      h = parseInt(d.css("margin-left"), 10);
    isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
      using: function(a) {
        d.css({
          top: Math.round(a.top),
          left: Math.round(a.left)
        })
      }
    }, b), 0), d.addClass("in");
    var i = d[0].offsetWidth,
      j = d[0].offsetHeight;
    "top" == c && j != f && (b.top = b.top + f - j);
    var k = this.getViewportAdjustedDelta(c, b, i, j);
    k.left ? b.left += k.left : b.top += k.top;
    var l = /top|bottom/.test(c),
      m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
      n = l ? "offsetWidth" : "offsetHeight";
    d.offset(b), this.replaceArrow(m, d[0][n], l)
  }, c.prototype.replaceArrow = function(a, b, c) {
    this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
  }, c.prototype.setContent = function() {
    var a = this.tip(),
      b = this.getTitle();
    a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
  }, c.prototype.hide = function(b) {
    function d() {
      "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
    }
    var e = this,
      f = a(this.$tip),
      g = a.Event("hide.bs." + this.type);
    return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
  }, c.prototype.fixTitle = function() {
    var a = this.$element;
    (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
  }, c.prototype.hasContent = function() {
    return this.getTitle()
  }, c.prototype.getPosition = function(b) {
    b = b || this.$element;
    var c = b[0],
      d = "BODY" == c.tagName,
      e = c.getBoundingClientRect();
    null == e.width && (e = a.extend({}, e, {
      width: e.right - e.left,
      height: e.bottom - e.top
    }));
    var f = d ? {
        top: 0,
        left: 0
      } : b.offset(),
      g = {
        scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
      },
      h = d ? {
        width: a(window).width(),
        height: a(window).height()
      } : null;
    return a.extend({}, e, g, h, f)
  }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
    return "bottom" == a ? {
      top: b.top + b.height,
      left: b.left + b.width / 2 - c / 2
    } : "top" == a ? {
      top: b.top - d,
      left: b.left + b.width / 2 - c / 2
    } : "left" == a ? {
      top: b.top + b.height / 2 - d / 2,
      left: b.left - c
    } : {
      top: b.top + b.height / 2 - d / 2,
      left: b.left + b.width
    }
  }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
    var e = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return e;
    var f = this.options.viewport && this.options.viewport.padding || 0,
      g = this.getPosition(this.$viewport);
    if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll,
        i = b.top + f - g.scroll + d;
      h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
    } else {
      var j = b.left - f,
        k = b.left + f + c;
      j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
    }
    return e
  }, c.prototype.getTitle = function() {
    var a, b = this.$element,
      c = this.options;
    return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
  }, c.prototype.getUID = function(a) {
    do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
    return a
  }, c.prototype.tip = function() {
    if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
  }, c.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, c.prototype.enable = function() {
    this.enabled = !0
  }, c.prototype.disable = function() {
    this.enabled = !1
  }, c.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
  }, c.prototype.toggle = function(b) {
    var c = this;
    b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
  }, c.prototype.destroy = function() {
    var a = this;
    clearTimeout(this.timeout), this.hide(function() {
      a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
    })
  };
  var d = a.fn.tooltip;
  a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
    return a.fn.tooltip = d, this
  }
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.popover"),
        f = "object" == typeof b && b;
      (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
    })
  }
  var c = function(a, b) {
    this.init("popover", a, b)
  };
  if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
  c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
    return c.DEFAULTS
  }, c.prototype.setContent = function() {
    var a = this.tip(),
      b = this.getTitle(),
      c = this.getContent();
    a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
  }, c.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
  }, c.prototype.getContent = function() {
    var a = this.$element,
      b = this.options;
    return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
  }, c.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  };
  var d = a.fn.popover;
  a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
    return a.fn.popover = d, this
  }
}(jQuery), + function(a) {
  "use strict";

  function b(c, d) {
    this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
  }

  function c(c) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.scrollspy"),
        f = "object" == typeof c && c;
      e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
    })
  }
  b.VERSION = "3.3.6", b.DEFAULTS = {
    offset: 10
  }, b.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }, b.prototype.refresh = function() {
    var b = this,
      c = "offset",
      d = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
      var b = a(this),
        e = b.data("target") || b.attr("href"),
        f = /^#./.test(e) && a(e);
      return f && f.length && f.is(":visible") && [
        [f[c]().top + d, e]
      ] || null
    }).sort(function(a, b) {
      return a[0] - b[0]
    }).each(function() {
      b.offsets.push(this[0]), b.targets.push(this[1])
    })
  }, b.prototype.process = function() {
    var a, b = this.$scrollElement.scrollTop() + this.options.offset,
      c = this.getScrollHeight(),
      d = this.options.offset + c - this.$scrollElement.height(),
      e = this.offsets,
      f = this.targets,
      g = this.activeTarget;
    if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
    if (g && b < e[0]) return this.activeTarget = null, this.clear();
    for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
  }, b.prototype.activate = function(b) {
    this.activeTarget = b, this.clear();
    var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
      d = a(c).parents("li").addClass("active");
    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
  }, b.prototype.clear = function() {
    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
  };
  var d = a.fn.scrollspy;
  a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
    return a.fn.scrollspy = d, this
  }, a(window).on("load.bs.scrollspy.data-api", function() {
    a('[data-spy="scroll"]').each(function() {
      var b = a(this);
      c.call(b, b.data())
    })
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.tab");
      e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
    })
  }
  var c = function(b) {
    this.element = a(b)
  };
  c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
    var b = this.element,
      c = b.closest("ul:not(.dropdown-menu)"),
      d = b.data("target");
    if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a"),
        f = a.Event("hide.bs.tab", {
          relatedTarget: b[0]
        }),
        g = a.Event("show.bs.tab", {
          relatedTarget: e[0]
        });
      if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
        var h = a(d);
        this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
          e.trigger({
            type: "hidden.bs.tab",
            relatedTarget: b[0]
          }), b.trigger({
            type: "shown.bs.tab",
            relatedTarget: e[0]
          })
        })
      }
    }
  }, c.prototype.activate = function(b, d, e) {
    function f() {
      g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
    }
    var g = d.find("> .active"),
      h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
    g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
  };
  var d = a.fn.tab;
  a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
    return a.fn.tab = d, this
  };
  var e = function(c) {
    c.preventDefault(), b.call(a(this), "show")
  };
  a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.affix"),
        f = "object" == typeof b && b;
      e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
    })
  }
  var c = function(b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
  };
  c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
    offset: 0,
    target: window
  }, c.prototype.getState = function(a, b, c, d) {
    var e = this.$target.scrollTop(),
      f = this.$element.offset(),
      g = this.$target.height();
    if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
    if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
    var h = null == this.affixed,
      i = h ? e : f.top,
      j = h ? g : b;
    return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
  }, c.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(c.RESET).addClass("affix");
    var a = this.$target.scrollTop(),
      b = this.$element.offset();
    return this.pinnedOffset = b.top - a
  }, c.prototype.checkPositionWithEventLoop = function() {
    setTimeout(a.proxy(this.checkPosition, this), 1)
  }, c.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
      var b = this.$element.height(),
        d = this.options.offset,
        e = d.top,
        f = d.bottom,
        g = Math.max(a(document).height(), a(document.body).height());
      "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
      var h = this.getState(g, b, e, f);
      if (this.affixed != h) {
        null != this.unpin && this.$element.css("top", "");
        var i = "affix" + (h ? "-" + h : ""),
          j = a.Event(i + ".bs.affix");
        if (this.$element.trigger(j), j.isDefaultPrevented()) return;
        this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
      }
      "bottom" == h && this.$element.offset({
        top: g - b - f
      })
    }
  };
  var d = a.fn.affix;
  a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
    return a.fn.affix = d, this
  }, a(window).on("load", function() {
    a('[data-spy="affix"]').each(function() {
      var c = a(this),
        d = c.data();
      d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
    })
  })
}(jQuery), ! function(t, e, i, o) {
  function s(t, e) {
    var i = Math.max(0, t[0] - e[0], e[0] - t[1]),
      o = Math.max(0, t[2] - e[1], e[1] - t[3]);
    return i + o
  }

  function n(e, i, o, s) {
    var n = e.length,
      r = s ? "offset" : "position";
    for (o = o || 0; n--;) {
      var a = e[n].el ? e[n].el : t(e[n]),
        h = a[r]();
      h.left += parseInt(a.css("margin-left"), 10), h.top += parseInt(a.css("margin-top"), 10), i[n] = [h.left - o, h.left + a.outerWidth() + o, h.top - o, h.top + a.outerHeight() + o]
    }
  }

  function r(t, e) {
    var i = e.offset();
    return {
      left: t.left - i.left,
      top: t.top - i.top
    }
  }

  function a(t, e, i) {
    e = [e.left, e.top], i = i && [i.left, i.top];
    for (var o, n = t.length, r = []; n--;) o = t[n], r[n] = [n, s(o, e), i && s(o, i)];
    return r = r.sort(function(t, e) {
      return e[1] - t[1] || e[2] - t[2] || e[0] - t[0]
    })
  }

  function h(e) {
    this.options = t.extend({}, u, e), this.containers = [], this.options.rootGroup || (this.scrollProxy = t.proxy(this.scroll, this), this.dragProxy = t.proxy(this.drag, this), this.dropProxy = t.proxy(this.drop, this), this.placeholder = t(this.options.placeholder), e.isValidTarget || (this.options.isValidTarget = o))
  }

  function l(e, i) {
    this.el = e, this.options = t.extend({}, c, i), this.group = h.get(this.options), this.rootGroup = this.options.rootGroup || this.group, this.handle = this.rootGroup.options.handle || this.rootGroup.options.itemSelector;
    var o = this.rootGroup.options.itemPath;
    this.target = o ? this.el.find(o) : this.el, this.target.on(g.start, this.handle, t.proxy(this.dragInit, this)), this.options.drop && this.group.containers.push(this)
  }
  var c = {
      drag: !0,
      drop: !0,
      exclude: "",
      nested: !0,
      vertical: !0
    },
    u = {
      afterMove: function() {},
      containerPath: "",
      containerSelector: "ol, ul",
      distance: 0,
      delay: 0,
      handle: "",
      itemPath: "",
      itemSelector: "li",
      bodyClass: "dragging",
      draggedClass: "dragged",
      isValidTarget: function() {
        return !0
      },
      onCancel: function() {},
      onDrag: function(t, e) {
        t.css(e)
      },
      onDragStart: function(e, i) {
        e.css({
          height: e.outerHeight(),
          width: e.outerWidth()
        }), e.addClass(i.group.options.draggedClass), t("body").addClass(i.group.options.bodyClass)
      },
      onDrop: function(e, i) {
        e.removeClass(i.group.options.draggedClass).removeAttr("style"), t("body").removeClass(i.group.options.bodyClass)
      },
      onMousedown: function(t, e, i) {
        return i.target.nodeName.match(/^(input|select|textarea)$/i) ? void 0 : (i.preventDefault(), !0)
      },
      placeholderClass: "placeholder",
      placeholder: '<li class="placeholder"></li>',
      pullPlaceholder: !0,
      serialize: function(e, i, o) {
        var s = t.extend({}, e.data());
        return o ? [i] : (i[0] && (s.children = i), delete s.subContainers, delete s.sortable, s)
      },
      tolerance: 0
    },
    p = {},
    f = 0,
    d = {
      left: 0,
      top: 0,
      bottom: 0,
      right: 0
    },
    g = {
      start: "touchstart.sortable mousedown.sortable",
      drop: "touchend.sortable touchcancel.sortable mouseup.sortable",
      drag: "touchmove.sortable mousemove.sortable",
      scroll: "scroll.sortable"
    },
    m = "subContainers";
  h.get = function(t) {
    return p[t.group] || (t.group === o && (t.group = f++), p[t.group] = new h(t)), p[t.group]
  }, h.prototype = {
    dragInit: function(e, i) {
      this.$document = t(i.el[0].ownerDocument);
      var o = t(e.target).closest(this.options.itemSelector);
      if (o.length) {
        if (this.item = o, this.itemContainer = i, this.item.is(this.options.exclude) || !this.options.onMousedown(this.item, u.onMousedown, e)) return;
        this.setPointer(e), this.toggleListeners("on"), this.setupDelayTimer(), this.dragInitDone = !0
      }
    },
    drag: function(t) {
      if (!this.dragging) {
        if (!this.distanceMet(t) || !this.delayMet) return;
        this.options.onDragStart(this.item, this.itemContainer, u.onDragStart, t), this.item.before(this.placeholder), this.dragging = !0
      }
      this.setPointer(t), this.options.onDrag(this.item, r(this.pointer, this.item.offsetParent()), u.onDrag, t);
      var e = this.getPointer(t),
        i = this.sameResultBox,
        s = this.options.tolerance;
      (!i || i.top - s > e.top || i.bottom + s < e.top || i.left - s > e.left || i.right + s < e.left) && (this.searchValidTarget() || (this.placeholder.detach(), this.lastAppendedItem = o))
    },
    drop: function(t) {
      this.toggleListeners("off"), this.dragInitDone = !1, this.dragging && (this.placeholder.closest("html")[0] ? this.placeholder.before(this.item).detach() : this.options.onCancel(this.item, this.itemContainer, u.onCancel, t), this.options.onDrop(this.item, this.getContainer(this.item), u.onDrop, t), this.clearDimensions(), this.clearOffsetParent(), this.lastAppendedItem = this.sameResultBox = o, this.dragging = !1)
    },
    searchValidTarget: function(t, e) {
      t || (t = this.relativePointer || this.pointer, e = this.lastRelativePointer || this.lastPointer);
      for (var i = a(this.getContainerDimensions(), t, e), s = i.length; s--;) {
        var n = i[s][0],
          h = i[s][1];
        if (!h || this.options.pullPlaceholder) {
          var l = this.containers[n];
          if (!l.disabled) {
            if (!this.$getOffsetParent()) {
              var c = l.getItemOffsetParent();
              t = r(t, c), e = r(e, c)
            }
            if (l.searchValidTarget(t, e)) return !0
          }
        }
      }
      this.sameResultBox && (this.sameResultBox = o)
    },
    movePlaceholder: function(t, e, i, o) {
      var s = this.lastAppendedItem;
      (o || !s || s[0] !== e[0]) && (e[i](this.placeholder), this.lastAppendedItem = e, this.sameResultBox = o, this.options.afterMove(this.placeholder, t, e))
    },
    getContainerDimensions: function() {
      return this.containerDimensions || n(this.containers, this.containerDimensions = [], this.options.tolerance, !this.$getOffsetParent()), this.containerDimensions
    },
    getContainer: function(t) {
      return t.closest(this.options.containerSelector).data(i)
    },
    $getOffsetParent: function() {
      if (this.offsetParent === o) {
        var t = this.containers.length - 1,
          e = this.containers[t].getItemOffsetParent();
        if (!this.options.rootGroup)
          for (; t--;)
            if (e[0] != this.containers[t].getItemOffsetParent()[0]) {
              e = !1;
              break
            }
        this.offsetParent = e
      }
      return this.offsetParent
    },
    setPointer: function(t) {
      var e = this.getPointer(t);
      if (this.$getOffsetParent()) {
        var i = r(e, this.$getOffsetParent());
        this.lastRelativePointer = this.relativePointer, this.relativePointer = i
      }
      this.lastPointer = this.pointer, this.pointer = e
    },
    distanceMet: function(t) {
      var e = this.getPointer(t);
      return Math.max(Math.abs(this.pointer.left - e.left), Math.abs(this.pointer.top - e.top)) >= this.options.distance
    },
    getPointer: function(t) {
      var e = t.originalEvent || t.originalEvent.touches && t.originalEvent.touches[0];
      return {
        left: t.pageX || e.pageX,
        top: t.pageY || e.pageY
      }
    },
    setupDelayTimer: function() {
      var t = this;
      this.delayMet = !this.options.delay, this.delayMet || (clearTimeout(this._mouseDelayTimer), this._mouseDelayTimer = setTimeout(function() {
        t.delayMet = !0
      }, this.options.delay))
    },
    scroll: function() {
      this.clearDimensions(), this.clearOffsetParent()
    },
    toggleListeners: function(e) {
      var i = this,
        o = ["drag", "drop", "scroll"];
      t.each(o, function(t, o) {
        i.$document[e](g[o], i[o + "Proxy"])
      })
    },
    clearOffsetParent: function() {
      this.offsetParent = o
    },
    clearDimensions: function() {
      this.traverse(function(t) {
        t._clearDimensions()
      })
    },
    traverse: function(t) {
      t(this);
      for (var e = this.containers.length; e--;) this.containers[e].traverse(t)
    },
    _clearDimensions: function() {
      this.containerDimensions = o
    },
    _destroy: function() {
      p[this.options.group] = o
    }
  }, l.prototype = {
    dragInit: function(t) {
      var e = this.rootGroup;
      !this.disabled && !e.dragInitDone && this.options.drag && this.isValidDrag(t) && e.dragInit(t, this)
    },
    isValidDrag: function(t) {
      return 1 == t.which || "touchstart" == t.type && 1 == t.originalEvent.touches.length
    },
    searchValidTarget: function(t, e) {
      var i = a(this.getItemDimensions(), t, e),
        o = i.length,
        s = this.rootGroup,
        n = !s.options.isValidTarget || s.options.isValidTarget(s.item, this);
      if (!o && n) return s.movePlaceholder(this, this.target, "append"), !0;
      for (; o--;) {
        var r = i[o][0],
          h = i[o][1];
        if (!h && this.hasChildGroup(r)) {
          var l = this.getContainerGroup(r).searchValidTarget(t, e);
          if (l) return !0
        } else if (n) return this.movePlaceholder(r, t), !0
      }
    },
    movePlaceholder: function(e, i) {
      var o = t(this.items[e]),
        s = this.itemDimensions[e],
        n = "after",
        r = o.outerWidth(),
        a = o.outerHeight(),
        h = o.offset(),
        l = {
          left: h.left,
          right: h.left + r,
          top: h.top,
          bottom: h.top + a
        };
      if (this.options.vertical) {
        var c = (s[2] + s[3]) / 2,
          u = i.top <= c;
        u ? (n = "before", l.bottom -= a / 2) : l.top += a / 2
      } else {
        var p = (s[0] + s[1]) / 2,
          f = i.left <= p;
        f ? (n = "before", l.right -= r / 2) : l.left += r / 2
      }
      this.hasChildGroup(e) && (l = d), this.rootGroup.movePlaceholder(this, o, n, l)
    },
    getItemDimensions: function() {
      return this.itemDimensions || (this.items = this.$getChildren(this.el, "item").filter(":not(." + this.group.options.placeholderClass + ", ." + this.group.options.draggedClass + ")").get(), n(this.items, this.itemDimensions = [], this.options.tolerance)), this.itemDimensions
    },
    getItemOffsetParent: function() {
      var t, e = this.el;
      return t = "relative" === e.css("position") || "absolute" === e.css("position") || "fixed" === e.css("position") ? e : e.offsetParent()
    },
    hasChildGroup: function(t) {
      return this.options.nested && this.getContainerGroup(t)
    },
    getContainerGroup: function(e) {
      var s = t.data(this.items[e], m);
      if (s === o) {
        var n = this.$getChildren(this.items[e], "container");
        if (s = !1, n[0]) {
          var r = t.extend({}, this.options, {
            rootGroup: this.rootGroup,
            group: f++
          });
          s = n[i](r).data(i).group
        }
        t.data(this.items[e], m, s)
      }
      return s
    },
    $getChildren: function(e, i) {
      var o = this.rootGroup.options,
        s = o[i + "Path"],
        n = o[i + "Selector"];
      return e = t(e), s && (e = e.find(s)), e.children(n)
    },
    _serialize: function(e, i) {
      var o = this,
        s = i ? "item" : "container",
        n = this.$getChildren(e, s).not(this.options.exclude).map(function() {
          return o._serialize(t(this), !i)
        }).get();
      return this.rootGroup.options.serialize(e, n, i)
    },
    traverse: function(e) {
      t.each(this.items || [], function() {
        var o = t.data(this, m);
        o && o.traverse(e)
      }), e(this)
    },
    _clearDimensions: function() {
      this.itemDimensions = o
    },
    _destroy: function() {
      var e = this;
      this.target.off(g.start, this.handle), this.el.removeData(i), this.options.drop && (this.group.containers = t.grep(this.group.containers, function(t) {
        return t != e
      })), t.each(this.items || [], function() {
        t.removeData(this, m)
      })
    }
  };
  var v = {
    enable: function() {
      this.traverse(function(t) {
        t.disabled = !1
      })
    },
    disable: function() {
      this.traverse(function(t) {
        t.disabled = !0
      })
    },
    serialize: function() {
      return this._serialize(this.el, !0)
    },
    refresh: function() {
      this.traverse(function(t) {
        t._clearDimensions()
      })
    },
    destroy: function() {
      this.traverse(function(t) {
        t._destroy()
      })
    }
  };
  t.extend(l.prototype, v), t.fn[i] = function(e) {
    var s = Array.prototype.slice.call(arguments, 1);
    return this.map(function() {
      var n = t(this),
        r = n.data(i);
      return r && v[e] ? v[e].apply(r, s) || this : (r || e !== o && "object" != typeof e || n.data(i, new l(n, e)), this)
    })
  }
}(jQuery, window, "sortable"), window.Modernizr = function(a, b, c) {
    function w(a) {
      j.cssText = a
    }

    function y(a, b) {
      return typeof a === b
    }
    var k, s, v, d = "2.8.3",
      e = {},
      f = !0,
      g = b.documentElement,
      h = "modernizr",
      i = b.createElement(h),
      j = i.style,
      m = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
      n = {},
      q = [],
      r = q.slice,
      t = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"),
          m = b.body,
          n = m || b.createElement("body");
        if (parseInt(d, 10))
          for (; d--;) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
      },
      u = {}.hasOwnProperty;
    v = y(u, "undefined") || y(u.call, "undefined") ? function(a, b) {
      return b in a && y(a.constructor.prototype[b], "undefined")
    } : function(a, b) {
      return u.call(a, b)
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
      var c = this;
      if ("function" != typeof c) throw new TypeError;
      var d = r.call(arguments, 1),
        e = function() {
          if (this instanceof e) {
            var a = function() {};
            a.prototype = c.prototype;
            var f = new a,
              g = c.apply(f, d.concat(r.call(arguments)));
            return Object(g) === g ? g : f
          }
          return c.apply(b, d.concat(r.call(arguments)))
        };
      return e
    }), n.touch = function() {
      var c;
      return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : t(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
        c = 9 === a.offsetTop
      }), c
    };
    for (var B in n) v(n, B) && (s = B.toLowerCase(), e[s] = n[B](), q.push((e[s] ? "" : "no-") + s));
    return e.addTest = function(a, b) {
      if ("object" == typeof a)
        for (var d in a) v(a, d) && e.addTest(d, a[d]);
      else {
        if (a = a.toLowerCase(), e[a] !== c) return e;
        b = "function" == typeof b ? b() : b, "undefined" != typeof f && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
      }
      return e
    }, w(""), i = k = null, e._version = d, e._prefixes = m, e.testStyles = t, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + q.join(" ") : ""), e
  }(this, this.document),
  /*
   * VenoBox - jQuery Plugin
   * version: 1.6.0
   * @requires jQuery
   *
   * Examples at http://lab.veno.it/venobox/
   * License: MIT License
   * License URI: https://github.com/nicolafranchini/VenoBox/blob/master/LICENSE
   * Copyright 2013-2015 Nicola Franchini - @nicolafranchini
   *
   */
  ! function(t) {
    function a() {
      t.ajax({
        url: g,
        cache: !1
      }).done(function(t) {
        u.html('<div class="vbox-inline">' + t + "</div>"), l(!0)
      }).fail(function() {
        u.html('<div class="vbox-inline"><p>Error retrieving contents, please retry</div>'), l(!0)
      })
    }

    function e() {
      u.html('<iframe class="venoframe" src="' + g + '"></iframe>'), l()
    }

    function o(t) {
      var a = g.split("/"),
        e = a[a.length - 1],
        o = t ? "?autoplay=1" : "";
      u.html('<iframe class="venoframe" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder="0" src="//player.vimeo.com/video/' + e + o + '"></iframe>'), l()
    }

    function i(t) {
      var a = g.split("/"),
        e = a[a.length - 1],
        o = t ? "?autoplay=1" : "";
      u.html('<iframe class="venoframe" webkitallowfullscreen mozallowfullscreen allowfullscreen src="//www.youtube.com/embed/' + e + o + '"></iframe>'), l()
    }

    function n() {
      u.html('<div class="vbox-inline">' + t(g).html() + "</div>"), l()
    }

    function r() {
      Q = t(".vbox-content").find("img"), Q.one("load", function() {
        l()
      }).each(function() {
        this.complete && t(this).load()
      })
    }

    function l() {
      f.html(X), u.find(">:first-child").addClass("figlio"), t(".figlio").css("width", C).css("height", j).css("padding", m).css("background", s), I = u.outerHeight(), G = t(window).height(), G > I + 80 ? (D = (G - I) / 2, u.css("margin-top", D), u.css("margin-bottom", D)) : (u.css("margin-top", "40px"), u.css("margin-bottom", "40px")), u.animate({
        opacity: "1"
      }, "slow")
    }

    function d() {
      t(".vbox-content").length && (I = u.height(), G = t(window).height(), G > I + 80 ? (D = (G - I) / 2, u.css("margin-top", D), u.css("margin-bottom", D)) : (u.css("margin-top", "40px"), u.css("margin-bottom", "40px")))
    }
    var c, s, v, f, m, b, h, u, g, p, x, y, w, k, C, j, q, z, H, D, E, L, P, Q, X, A, B, F, G, I, J, K;
    t.fn.extend({
      venobox: function(l) {
        var d = {
            framewidth: "",
            frameheight: "",
            border: "0",
            bgcolor: "#fff",
            titleattr: "title",
            numeratio: !1,
            infinigall: !1,
            overlayclose: !0
          },
          D = t.extend(d, l);
        return this.each(function() {
          var l = t(this);
          return l.data("venobox") ? !0 : (l.addClass("vbox-item"), l.data("framewidth", D.framewidth), l.data("frameheight", D.frameheight), l.data("border", D.border), l.data("bgcolor", D.bgcolor), l.data("numeratio", D.numeratio), l.data("infinigall", D.infinigall), l.data("overlayclose", D.overlayclose), l.data("venobox", !0), void l.click(function(d) {
            function Q() {
              A = l.data("gall"), E = l.data("numeratio"), q = l.data("infinigall"), z = t('.vbox-item[data-gall="' + A + '"]'), z.length > 1 && E === !0 ? (v.html(z.index(l) + 1 + " / " + z.length), v.show()) : v.hide(), B = z.eq(z.index(l) + 1), F = z.eq(z.index(l) - 1), l.attr(D.titleattr) ? (X = l.attr(D.titleattr), f.show()) : (X = "", f.hide()), z.length > 1 && q === !0 ? (J = !0, K = !0, B.length < 1 && (B = z.eq(0)), z.index(l) < 1 && (F = z.eq(z.index(z.length)))) : (B.length > 0 ? (t(".vbox-next").css("display", "block"), J = !0) : (t(".vbox-next").css("display", "none"), J = !1), z.index(l) > 0 ? (t(".vbox-prev").css("display", "block"), K = !0) : (t(".vbox-prev").css("display", "none"), K = !1))
            }

            function G(t) {
              27 === t.keyCode && I()
            }

            function I() {
              t("body").removeClass("vbox-open"), t("body").unbind("keydown", G), P.animate({
                opacity: 0
              }, 500, function() {
                P.remove(), H = !1, l.focus()
              })
            }
            d.stopPropagation(), d.preventDefault(), l = t(this), L = l.data("overlay"), C = l.data("framewidth"), j = l.data("frameheight"), c = l.data("autoplay") || !1, m = l.data("border"), s = l.data("bgcolor"), J = !1, K = !1, H = !1, g = l.data("href") || l.attr("href"), w = l.data("css") || "", t("body").addClass("vbox-open"), b = '<div class="vbox-overlay ' + w + '" style="background:' + L + '"><div class="vbox-preloader">Loading...</div><div class="vbox-container"><div class="vbox-content"></div></div><div class="vbox-title"></div><div class="vbox-num">0/0</div><div class="vbox-close">X</div><div class="vbox-next">next</div><div class="vbox-prev">prev</div></div>', t("body").append(b), P = t(".vbox-overlay"), h = t(".vbox-container"), u = t(".vbox-content"), v = t(".vbox-num"), f = t(".vbox-title"), u.html(""), u.css("opacity", "0"), Q(), P.css("min-height", t(window).outerHeight()), P.animate({
              opacity: 1
            }, 250, function() {
              "iframe" == l.data("type") ? e() : "inline" == l.data("type") ? n() : "ajax" == l.data("type") ? a() : "vimeo" == l.data("type") ? o(c) : "youtube" == l.data("type") ? i(c) : (u.html('<img src="' + g + '">'), r())
            });
            var M = {
              prev: function() {
                H || (H = !0, L = F.data("overlay"), C = F.data("framewidth"), j = F.data("frameheight"), m = F.data("border"), s = F.data("bgcolor"), g = F.data("href") || F.attr("href"), c = F.data("autoplay"), X = F.attr(D.titleattr) ? F.attr(D.titleattr) : "", void 0 === L && (L = ""), u.animate({
                  opacity: 0
                }, 500, function() {
                  P.css("background", L), "iframe" == F.data("type") ? e() : "inline" == F.data("type") ? n() : "ajax" == F.data("type") ? a() : "youtube" == F.data("type") ? i(c) : "vimeo" == F.data("type") ? o(c) : (u.html('<img src="' + g + '">'), r()), l = F, Q(), H = !1
                }))
              },
              next: function() {
                H || (H = !0, L = B.data("overlay"), C = B.data("framewidth"), j = B.data("frameheight"), m = B.data("border"), s = B.data("bgcolor"), g = B.data("href") || B.attr("href"), c = B.data("autoplay"), X = B.attr(D.titleattr) ? B.attr(D.titleattr) : "", void 0 === L && (L = ""), u.animate({
                  opacity: 0
                }, 500, function() {
                  P.css("background", L), "iframe" == B.data("type") ? e() : "inline" == B.data("type") ? n() : "ajax" == B.data("type") ? a() : "youtube" == B.data("type") ? i(c) : "vimeo" == B.data("type") ? o(c) : (u.html('<img src="' + g + '">'), r()), l = B, Q(), H = !1
                }))
              }
            };
            t("body").keydown(function(t) {
              37 == t.keyCode && 1 == K && M.prev(), 39 == t.keyCode && 1 == J && M.next()
            }), t(".vbox-prev").click(function() {
              M.prev()
            }), t(".vbox-next").click(function() {
              M.next()
            });
            var N = ".vbox-close, .vbox-overlay";
            return l.data("overlayclose") || (N = ".vbox-close"), t(N).click(function(a) {
              p = ".figlio", y = ".vbox-prev", x = ".vbox-next", k = ".figlio *", t(a.target).is(p) || t(a.target).is(x) || t(a.target).is(y) || t(a.target).is(k) || I()
            }), t("body").keydown(G), !1
          }))
        })
      }
    }), t(window).resize(function() {
      d()
    })
  }(jQuery),
  /*! WOW - v0.1.9 - 2014-05-10
   * Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */
  function() {
    var a, b, c = function(a, b) {
      return function() {
        return a.apply(b, arguments)
      }
    };
    a = function() {
      function a() {}
      return a.prototype.extend = function(a, b) {
        var c, d;
        for (c in a) d = a[c], null != d && (b[c] = d);
        return b
      }, a.prototype.isMobile = function(a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
      }, a
    }(), b = this.WeakMap || (b = function() {
      function a() {
        this.keys = [], this.values = []
      }
      return a.prototype.get = function(a) {
        var b, c, d, e, f;
        for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
          if (c = f[b], c === a) return this.values[b]
      }, a.prototype.set = function(a, b) {
        var c, d, e, f, g;
        for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
          if (d = g[c], d === a) return void(this.values[c] = b);
        return this.keys.push(a), this.values.push(b)
      }, a
    }()), this.WOW = function() {
      function d(a) {
        null == a && (a = {}), this.scrollCallback = c(this.scrollCallback, this), this.scrollHandler = c(this.scrollHandler, this), this.start = c(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new b
      }
      return d.prototype.defaults = {
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0
      }, d.prototype.init = function() {
        var a;
        return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : document.addEventListener("DOMContentLoaded", this.start)
      }, d.prototype.start = function() {
        var a, b, c, d;
        if (this.boxes = this.element.getElementsByClassName(this.config.boxClass), this.boxes.length) {
          if (this.disabled()) return this.resetStyle();
          for (d = this.boxes, b = 0, c = d.length; c > b; b++) a = d[b], this.applyStyle(a, !0);
          return window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50)
        }
      }, d.prototype.stop = function() {
        return window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0
      }, d.prototype.show = function(a) {
        return this.applyStyle(a), a.className = "" + a.className + " " + this.config.animateClass
      }, d.prototype.applyStyle = function(a, b) {
        var c, d, e;
        return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) {
          return function() {
            return f.customStyle(a, b, d, c, e)
          }
        }(this))
      }, d.prototype.animate = function() {
        return "requestAnimationFrame" in window ? function(a) {
          return window.requestAnimationFrame(a)
        } : function(a) {
          return a()
        }
      }(), d.prototype.resetStyle = function() {
        var a, b, c, d, e;
        for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.setAttribute("style", "visibility: visible;"));
        return e
      }, d.prototype.customStyle = function(a, b, c, d, e) {
        return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
          animationDuration: c
        }), d && this.vendorSet(a.style, {
          animationDelay: d
        }), e && this.vendorSet(a.style, {
          animationIterationCount: e
        }), this.vendorSet(a.style, {
          animationName: b ? "none" : this.cachedAnimationName(a)
        }), a
      }, d.prototype.vendors = ["moz", "webkit"], d.prototype.vendorSet = function(a, b) {
        var c, d, e, f;
        f = [];
        for (c in b) d = b[c], a["" + c] = d, f.push(function() {
          var b, f, g, h;
          for (g = this.vendors, h = [], b = 0, f = g.length; f > b; b++) e = g[b], h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d);
          return h
        }.call(this));
        return f
      }, d.prototype.vendorCSS = function(a, b) {
        var c, d, e, f, g, h;
        for (d = window.getComputedStyle(a), c = d.getPropertyCSSValue(b), h = this.vendors, f = 0, g = h.length; g > f; f++) e = h[f], c = c || d.getPropertyCSSValue("-" + e + "-" + b);
        return c
      }, d.prototype.animationName = function(a) {
        var b;
        try {
          b = this.vendorCSS(a, "animation-name").cssText
        } catch (c) {
          b = window.getComputedStyle(a).getPropertyValue("animation-name")
        }
        return "none" === b ? "" : b
      }, d.prototype.cacheAnimationName = function(a) {
        return this.animationNameCache.set(a, this.animationName(a))
      }, d.prototype.cachedAnimationName = function(a) {
        return this.animationNameCache.get(a)
      }, d.prototype.scrollHandler = function() {
        return this.scrolled = !0
      }, d.prototype.scrollCallback = function() {
        var a;
        return this.scrolled && (this.scrolled = !1, this.boxes = function() {
          var b, c, d, e;
          for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
          return e
        }.call(this), !this.boxes.length) ? this.stop() : void 0
      }, d.prototype.offsetTop = function(a) {
        for (var b; void 0 === a.offsetTop;) a = a.parentNode;
        for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
        return b
      }, d.prototype.isVisible = function(a) {
        var b, c, d, e, f;
        return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + this.element.clientHeight - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
      }, d.prototype.util = function() {
        return this._util || (this._util = new a)
      }, d.prototype.disabled = function() {
        return !this.config.mobile && this.util().isMobile(navigator.userAgent)
      }, d
    }()
  }.call(this), /*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */
  function(e, t, n) {
    "function" == typeof define && define.amd ? define(["jquery"], function(r) {
      return n(r, e, t), r.mobile
    }) : n(e.jQuery, e, t)
  }(this, document, function(e, t, n) {
    ! function(e, t, n, r) {
      function T(e) {
        for (; e && "undefined" != typeof e.originalEvent;) e = e.originalEvent;
        return e
      }

      function N(t, n) {
        var s, o, a, l, c, h, p, d, v, i = t.type;
        if (t = e.Event(t), t.type = n, s = t.originalEvent, o = e.event.props, i.search(/^(mouse|click)/) > -1 && (o = f), s)
          for (p = o.length, l; p;) l = o[--p], t[l] = s[l];
        if (i.search(/mouse(down|up)|click/) > -1 && !t.which && (t.which = 1), -1 !== i.search(/^touch/) && (a = T(s), i = a.touches, c = a.changedTouches, h = i && i.length ? i[0] : c && c.length ? c[0] : r, h))
          for (d = 0, v = u.length; v > d; d++) l = u[d], t[l] = h[l];
        return t
      }

      function C(t) {
        for (var r, s, n = {}; t;) {
          r = e.data(t, i);
          for (s in r) r[s] && (n[s] = n.hasVirtualBinding = !0);
          t = t.parentNode
        }
        return n
      }

      function k(t, n) {
        for (var r; t;) {
          if (r = e.data(t, i), r && (!n || r[n])) return t;
          t = t.parentNode
        }
        return null
      }

      function L() {
        g = !1
      }

      function A() {
        g = !0
      }

      function O() {
        E = 0, v.length = 0, m = !1, A()
      }

      function M() {
        L()
      }

      function _() {
        D(), c = setTimeout(function() {
          c = 0, O()
        }, e.vmouse.resetTimerDuration)
      }

      function D() {
        c && (clearTimeout(c), c = 0)
      }

      function P(t, n, r) {
        var i;
        return (r && r[t] || !r && k(n.target, t)) && (i = N(n, t), e(n.target).trigger(i)), i
      }

      function H(t) {
        var r, n = e.data(t.target, s);
        !m && (!E || E !== n) && (r = P("v" + t.type, t), r && (r.isDefaultPrevented() && t.preventDefault(), r.isPropagationStopped() && t.stopPropagation(), r.isImmediatePropagationStopped() && t.stopImmediatePropagation()))
      }

      function B(t) {
        var r, i, o, n = T(t).touches;
        n && 1 === n.length && (r = t.target, i = C(r), i.hasVirtualBinding && (E = w++, e.data(r, s, E), D(), M(), d = !1, o = T(t).touches[0], h = o.pageX, p = o.pageY, P("vmouseover", t, i), P("vmousedown", t, i)))
      }

      function j(e) {
        g || (d || P("vmousecancel", e, C(e.target)), d = !0, _())
      }

      function F(t) {
        if (!g) {
          var n = T(t).touches[0],
            r = d,
            i = e.vmouse.moveDistanceThreshold,
            s = C(t.target);
          d = d || Math.abs(n.pageX - h) > i || Math.abs(n.pageY - p) > i, d && !r && P("vmousecancel", t, s), P("vmousemove", t, s), _()
        }
      }

      function I(e) {
        if (!g) {
          A();
          var n, r, t = C(e.target);
          P("vmouseup", e, t), d || (n = P("vclick", e, t), n && n.isDefaultPrevented() && (r = T(e).changedTouches[0], v.push({
            touchID: E,
            x: r.clientX,
            y: r.clientY
          }), m = !0)), P("vmouseout", e, t), d = !1, _()
        }
      }

      function q(t) {
        var r, n = e.data(t, i);
        if (n)
          for (r in n)
            if (n[r]) return !0;
        return !1
      }

      function R() {}

      function U(t) {
        var n = t.substr(1);
        return {
          setup: function() {
            q(this) || e.data(this, i, {});
            var r = e.data(this, i);
            r[t] = !0, l[t] = (l[t] || 0) + 1, 1 === l[t] && b.bind(n, H), e(this).bind(n, R), y && (l.touchstart = (l.touchstart || 0) + 1, 1 === l.touchstart && b.bind("touchstart", B).bind("touchend", I).bind("touchmove", F).bind("scroll", j))
          },
          teardown: function() {
            --l[t], l[t] || b.unbind(n, H), y && (--l.touchstart, l.touchstart || b.unbind("touchstart", B).unbind("touchmove", F).unbind("touchend", I).unbind("scroll", j));
            var r = e(this),
              s = e.data(this, i);
            s && (s[t] = !1), r.unbind(n, R), q(this) || r.removeData(i)
          }
        }
      }
      var S, x, i = "virtualMouseBindings",
        s = "virtualTouchID",
        o = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
        u = "clientX clientY pageX pageY screenX screenY".split(" "),
        a = e.event.mouseHooks ? e.event.mouseHooks.props : [],
        f = e.event.props.concat(a),
        l = {},
        c = 0,
        h = 0,
        p = 0,
        d = !1,
        v = [],
        m = !1,
        g = !1,
        y = "addEventListener" in n,
        b = e(n),
        w = 1,
        E = 0;
      for (e.vmouse = {
          moveDistanceThreshold: 10,
          clickDistanceThreshold: 10,
          resetTimerDuration: 1500
        }, x = 0; x < o.length; x++) e.event.special[o[x]] = U(o[x]);
      y && n.addEventListener("click", function(t) {
        var i, o, u, a, f, l, n = v.length,
          r = t.target;
        if (n)
          for (i = t.clientX, o = t.clientY, S = e.vmouse.clickDistanceThreshold, u = r; u;) {
            for (a = 0; n > a; a++)
              if (f = v[a], l = 0, u === r && Math.abs(f.x - i) < S && Math.abs(f.y - o) < S || e.data(u, s) === f.touchID) return t.preventDefault(), void t.stopPropagation();
            u = u.parentNode
          }
      }, !0)
    }(e, t, n),
    function(e) {
      e.mobile = {}
    }(e),
    function(e) {
      var r = {
        touch: "ontouchend" in n
      };
      e.mobile.support = e.mobile.support || {}, e.extend(e.support, r), e.extend(e.mobile.support, r)
    }(e),
    function(e, t, r) {
      function l(t, n, i, s) {
        var o = i.type;
        i.type = n, s ? e.event.trigger(i, r, t) : e.event.dispatch.call(t, i), i.type = o
      }
      var i = e(n),
        s = e.mobile.support.touch,
        o = "touchmove scroll",
        u = s ? "touchstart" : "mousedown",
        a = s ? "touchend" : "mouseup",
        f = s ? "touchmove" : "mousemove";
      e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(t, n) {
        e.fn[n] = function(e) {
          return e ? this.bind(n, e) : this.trigger(n)
        }, e.attrFn && (e.attrFn[n] = !0)
      }), e.event.special.scrollstart = {
        enabled: !0,
        setup: function() {
          function s(e, n) {
            r = n, l(t, r ? "scrollstart" : "scrollstop", e)
          }
          var r, i, t = this,
            n = e(t);
          n.bind(o, function(t) {
            e.event.special.scrollstart.enabled && (r || s(t, !0), clearTimeout(i), i = setTimeout(function() {
              s(t, !1)
            }, 50))
          })
        },
        teardown: function() {
          e(this).unbind(o)
        }
      }, e.event.special.tap = {
        tapholdThreshold: 750,
        emitTapOnTaphold: !0,
        setup: function() {
          var t = this,
            n = e(t),
            r = !1;
          n.bind("vmousedown", function(s) {
            function a() {
              clearTimeout(u)
            }

            function f() {
              a(), n.unbind("vclick", c).unbind("vmouseup", a), i.unbind("vmousecancel", f)
            }

            function c(e) {
              f(), r || o !== e.target ? r && e.preventDefault() : l(t, "tap", e)
            }
            if (r = !1, s.which && 1 !== s.which) return !1;
            var u, o = s.target;
            n.bind("vmouseup", a).bind("vclick", c), i.bind("vmousecancel", f), u = setTimeout(function() {
              e.event.special.tap.emitTapOnTaphold || (r = !0), l(t, "taphold", e.Event("taphold", {
                target: o
              }))
            }, e.event.special.tap.tapholdThreshold)
          })
        },
        teardown: function() {
          e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"), i.unbind("vmousecancel")
        }
      }, e.event.special.swipe = {
        scrollSupressionThreshold: 30,
        durationThreshold: 1e3,
        horizontalDistanceThreshold: 30,
        verticalDistanceThreshold: 30,
        getLocation: function(e) {
          var n = t.pageXOffset,
            r = t.pageYOffset,
            i = e.clientX,
            s = e.clientY;
          return 0 === e.pageY && Math.floor(s) > Math.floor(e.pageY) || 0 === e.pageX && Math.floor(i) > Math.floor(e.pageX) ? (i -= n, s -= r) : (s < e.pageY - r || i < e.pageX - n) && (i = e.pageX - n, s = e.pageY - r), {
            x: i,
            y: s
          }
        },
        start: function(t) {
          var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
            r = e.event.special.swipe.getLocation(n);
          return {
            time: (new Date).getTime(),
            coords: [r.x, r.y],
            origin: e(t.target)
          }
        },
        stop: function(t) {
          var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
            r = e.event.special.swipe.getLocation(n);
          return {
            time: (new Date).getTime(),
            coords: [r.x, r.y]
          }
        },
        handleSwipe: function(t, n, r, i) {
          if (n.time - t.time < e.event.special.swipe.durationThreshold && Math.abs(t.coords[0] - n.coords[0]) > e.event.special.swipe.horizontalDistanceThreshold && Math.abs(t.coords[1] - n.coords[1]) < e.event.special.swipe.verticalDistanceThreshold) {
            var s = t.coords[0] > n.coords[0] ? "swipeleft" : "swiperight";
            return l(r, "swipe", e.Event("swipe", {
              target: i,
              swipestart: t,
              swipestop: n
            }), !0), l(r, s, e.Event(s, {
              target: i,
              swipestart: t,
              swipestop: n
            }), !0), !0
          }
          return !1
        },
        eventInProgress: !1,
        setup: function() {
          var t, n = this,
            r = e(n),
            s = {};
          t = e.data(this, "mobile-events"), t || (t = {
            length: 0
          }, e.data(this, "mobile-events", t)), t.length++, t.swipe = s, s.start = function(t) {
            if (!e.event.special.swipe.eventInProgress) {
              e.event.special.swipe.eventInProgress = !0;
              var r, o = e.event.special.swipe.start(t),
                u = t.target,
                l = !1;
              s.move = function(t) {
                o && !t.isDefaultPrevented() && (r = e.event.special.swipe.stop(t), l || (l = e.event.special.swipe.handleSwipe(o, r, n, u), l && (e.event.special.swipe.eventInProgress = !1)), Math.abs(o.coords[0] - r.coords[0]) > e.event.special.swipe.scrollSupressionThreshold && t.preventDefault())
              }, s.stop = function() {
                l = !0, e.event.special.swipe.eventInProgress = !1, i.off(f, s.move), s.move = null
              }, i.on(f, s.move).one(a, s.stop)
            }
          }, r.on(u, s.start)
        },
        teardown: function() {
          var t, n;
          t = e.data(this, "mobile-events"), t && (n = t.swipe, delete t.swipe, t.length--, 0 === t.length && e.removeData(this, "mobile-events")), n && (n.start && e(this).off(u, n.start), n.move && i.off(f, n.move), n.stop && i.off(a, n.stop))
        }
      }, e.each({
        scrollstop: "scrollstart",
        taphold: "tap",
        swipeleft: "swipe.left",
        swiperight: "swipe.right"
      }, function(t, n) {
        e.event.special[t] = {
          setup: function() {
            e(this).bind(n, e.noop)
          },
          teardown: function() {
            e(this).unbind(n)
          }
        }
      })
    }(e, this)
  }),
  /*! perfect-scrollbar - v0.5.1
   * http://noraesae.github.com/perfect-scrollbar/
   * Copyright (c) 2014 Hyeonje Alex Jun; Licensed MIT */
  function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
  }(function(e) {
    "use strict";
    var t = {
        wheelSpeed: 1,
        wheelPropagation: !1,
        minScrollbarLength: null,
        maxScrollbarLength: null,
        useBothWheelAxes: !1,
        useKeyboard: !0,
        suppressScrollX: !1,
        suppressScrollY: !1,
        scrollXMarginOffset: 0,
        scrollYMarginOffset: 0,
        includePadding: !1
      },
      n = function() {
        var e = 0;
        return function() {
          var t = e;
          return e += 1, ".perfect-scrollbar-" + t
        }
      }();
    e.fn.perfectScrollbar = function(o, r) {
      return this.each(function() {
        var l = e.extend(!0, {}, t),
          a = e(this);
        if ("object" == typeof o ? e.extend(!0, l, o) : r = o, "update" === r) return a.data("perfect-scrollbar-update") && a.data("perfect-scrollbar-update")(), a;
        if ("destroy" === r) return a.data("perfect-scrollbar-destroy") && a.data("perfect-scrollbar-destroy")(), a;
        if (a.data("perfect-scrollbar")) return a.data("perfect-scrollbar");
        a.addClass("ps-container");
        var s, i, c, d, u, p, f, v, h, b, g = e("<div class='ps-scrollbar-x-rail'></div>").appendTo(a),
          m = e("<div class='ps-scrollbar-y-rail'></div>").appendTo(a),
          w = e("<div class='ps-scrollbar-x'></div>").appendTo(g),
          T = e("<div class='ps-scrollbar-y'></div>").appendTo(m),
          L = parseInt(g.css("bottom"), 10),
          y = L === L,
          I = y ? null : parseInt(g.css("top"), 10),
          C = parseInt(m.css("right"), 10),
          S = C === C,
          x = S ? null : parseInt(m.css("left"), 10),
          D = "rtl" === a.css("direction"),
          P = n(),
          X = parseInt(g.css("borderLeftWidth"), 10) + parseInt(g.css("borderRightWidth"), 10),
          Y = parseInt(g.css("borderTopWidth"), 10) + parseInt(g.css("borderBottomWidth"), 10),
          k = function(e, t) {
            var n = e + t,
              o = d - h;
            b = 0 > n ? 0 : n > o ? o : n;
            var r = parseInt(b * (p - d) / (d - h), 10);
            a.scrollTop(r)
          },
          E = function(e, t) {
            var n = e + t,
              o = c - f;
            v = 0 > n ? 0 : n > o ? o : n;
            var r = parseInt(v * (u - c) / (c - f), 10);
            a.scrollLeft(r)
          },
          M = function(e) {
            return l.minScrollbarLength && (e = Math.max(e, l.minScrollbarLength)), l.maxScrollbarLength && (e = Math.min(e, l.maxScrollbarLength)), e
          },
          W = function() {
            var e = {
              width: c,
              display: s ? "inherit" : "none"
            };
            e.left = D ? a.scrollLeft() + c - u : a.scrollLeft(), y ? e.bottom = L - a.scrollTop() : e.top = I + a.scrollTop(), g.css(e);
            var t = {
              top: a.scrollTop(),
              height: d,
              display: i ? "inherit" : "none"
            };
            S ? t.right = D ? u - a.scrollLeft() - C - T.outerWidth() : C - a.scrollLeft() : t.left = D ? a.scrollLeft() + 2 * c - u - x - T.outerWidth() : x + a.scrollLeft(), m.css(t), w.css({
              left: v,
              width: f - X
            }), T.css({
              top: b,
              height: h - Y
            }), s ? a.addClass("ps-active-x") : a.removeClass("ps-active-x"), i ? a.addClass("ps-active-y") : a.removeClass("ps-active-y")
          },
          j = function() {
            g.hide(), m.hide(), c = l.includePadding ? a.innerWidth() : a.width(), d = l.includePadding ? a.innerHeight() : a.height(), u = a.prop("scrollWidth"), p = a.prop("scrollHeight"), !l.suppressScrollX && u > c + l.scrollXMarginOffset ? (s = !0, f = M(parseInt(c * c / u, 10)), v = parseInt(a.scrollLeft() * (c - f) / (u - c), 10)) : (s = !1, f = 0, v = 0, a.scrollLeft(0)), !l.suppressScrollY && p > d + l.scrollYMarginOffset ? (i = !0, h = M(parseInt(d * d / p, 10)), b = parseInt(a.scrollTop() * (d - h) / (p - d), 10)) : (i = !1, h = 0, b = 0, a.scrollTop(0)), b >= d - h && (b = d - h), v >= c - f && (v = c - f), W(), g.show(), m.show()
          },
          O = function() {
            var t, n;
            w.bind("mousedown" + P, function(e) {
              n = e.pageX, t = w.position().left, g.addClass("in-scrolling"), e.stopPropagation(), e.preventDefault()
            }), e(document).bind("mousemove" + P, function(e) {
              g.hasClass("in-scrolling") && (E(t, e.pageX - n), j(), e.stopPropagation(), e.preventDefault())
            }), e(document).bind("mouseup" + P, function() {
              g.hasClass("in-scrolling") && g.removeClass("in-scrolling")
            }), t = n = null
          },
          q = function() {
            var t, n;
            T.bind("mousedown" + P, function(e) {
              n = e.pageY, t = T.position().top, m.addClass("in-scrolling"), e.stopPropagation(), e.preventDefault()
            }), e(document).bind("mousemove" + P, function(e) {
              m.hasClass("in-scrolling") && (k(t, e.pageY - n), j(), e.stopPropagation(), e.preventDefault())
            }), e(document).bind("mouseup" + P, function() {
              m.hasClass("in-scrolling") && m.removeClass("in-scrolling")
            }), t = n = null
          },
          A = function(e, t) {
            var n = a.scrollTop();
            if (0 === e) {
              if (!i) return !1;
              if (0 === n && t > 0 || n >= p - d && 0 > t) return !l.wheelPropagation
            }
            var o = a.scrollLeft();
            if (0 === t) {
              if (!s) return !1;
              if (0 === o && 0 > e || o >= u - c && e > 0) return !l.wheelPropagation
            }
            return !0
          },
          B = function() {
            var e = !1,
              t = function(e) {
                var t = e.originalEvent.deltaX,
                  n = -1 * e.originalEvent.deltaY;
                return (void 0 === t || void 0 === n) && (t = -1 * e.originalEvent.wheelDeltaX / 6, n = e.originalEvent.wheelDeltaY / 6), e.originalEvent.deltaMode && 1 === e.originalEvent.deltaMode && (t *= 10, n *= 10), t !== t && n !== n && (t = 0, n = e.originalEvent.wheelDelta), [t, n]
              },
              n = function(n) {
                var o = t(n),
                  r = o[0],
                  c = o[1];
                e = !1, l.useBothWheelAxes ? i && !s ? (a.scrollTop(c ? a.scrollTop() - c * l.wheelSpeed : a.scrollTop() + r * l.wheelSpeed), e = !0) : s && !i && (a.scrollLeft(r ? a.scrollLeft() + r * l.wheelSpeed : a.scrollLeft() - c * l.wheelSpeed), e = !0) : (a.scrollTop(a.scrollTop() - c * l.wheelSpeed), a.scrollLeft(a.scrollLeft() + r * l.wheelSpeed)), j(), e = e || A(r, c), e && (n.stopPropagation(), n.preventDefault())
              };
            void 0 !== window.onwheel ? a.bind("wheel" + P, n) : void 0 !== window.onmousewheel && a.bind("mousewheel" + P, n)
          },
          H = function() {
            var t = !1;
            a.bind("mouseenter" + P, function() {
              t = !0
            }), a.bind("mouseleave" + P, function() {
              t = !1
            });
            var n = !1;
            e(document).bind("keydown" + P, function(o) {
              if (!(o.isDefaultPrevented && o.isDefaultPrevented() || !t || e(document.activeElement).is(":input,[contenteditable]"))) {
                var r = 0,
                  l = 0;
                switch (o.which) {
                  case 37:
                    r = -30;
                    break;
                  case 38:
                    l = 30;
                    break;
                  case 39:
                    r = 30;
                    break;
                  case 40:
                    l = -30;
                    break;
                  case 33:
                    l = 90;
                    break;
                  case 32:
                  case 34:
                    l = -90;
                    break;
                  case 35:
                    l = -d;
                    break;
                  case 36:
                    l = d;
                    break;
                  default:
                    return
                }
                a.scrollTop(a.scrollTop() - l), a.scrollLeft(a.scrollLeft() + r), n = A(r, l), n && o.preventDefault()
              }
            })
          },
          K = function() {
            var e = function(e) {
              e.stopPropagation()
            };
            T.bind("click" + P, e), m.bind("click" + P, function(e) {
              var t = parseInt(h / 2, 10),
                n = e.pageY - m.offset().top - t,
                o = d - h,
                r = n / o;
              0 > r ? r = 0 : r > 1 && (r = 1), a.scrollTop((p - d) * r)
            }), w.bind("click" + P, e), g.bind("click" + P, function(e) {
              var t = parseInt(f / 2, 10),
                n = e.pageX - g.offset().left - t,
                o = c - f,
                r = n / o;
              0 > r ? r = 0 : r > 1 && (r = 1), a.scrollLeft((u - c) * r)
            })
          },
          Q = function() {
            var t = function(e, t) {
                a.scrollTop(a.scrollTop() - t), a.scrollLeft(a.scrollLeft() - e), j()
              },
              n = {},
              o = 0,
              r = {},
              l = null,
              s = !1;
            e(window).bind("touchstart" + P, function() {
              s = !0
            }), e(window).bind("touchend" + P, function() {
              s = !1
            }), a.bind("touchstart" + P, function(e) {
              var t = e.originalEvent.targetTouches[0];
              n.pageX = t.pageX, n.pageY = t.pageY, o = (new Date).getTime(), null !== l && clearInterval(l), e.stopPropagation()
            }), a.bind("touchmove" + P, function(e) {
              if (!s && 1 === e.originalEvent.targetTouches.length) {
                var l = e.originalEvent.targetTouches[0],
                  a = {};
                a.pageX = l.pageX, a.pageY = l.pageY;
                var i = a.pageX - n.pageX,
                  c = a.pageY - n.pageY;
                t(i, c), n = a;
                var d = (new Date).getTime(),
                  u = d - o;
                u > 0 && (r.x = i / u, r.y = c / u, o = d), e.preventDefault()
              }
            }), a.bind("touchend" + P, function() {
              clearInterval(l), l = setInterval(function() {
                return .01 > Math.abs(r.x) && .01 > Math.abs(r.y) ? void clearInterval(l) : (t(30 * r.x, 30 * r.y), r.x *= .8, void(r.y *= .8))
              }, 10)
            })
          },
          R = function() {
            a.bind("scroll" + P, function() {
              j()
            })
          },
          z = function() {
            a.unbind(P), e(window).unbind(P), e(document).unbind(P), a.data("perfect-scrollbar", null), a.data("perfect-scrollbar-update", null), a.data("perfect-scrollbar-destroy", null), w.remove(), T.remove(), g.remove(), m.remove(), g = m = w = T = s = i = c = d = u = p = f = v = L = y = I = h = b = C = S = x = D = P = null
          },
          F = function(t) {
            a.addClass("ie").addClass("ie" + t);
            var n = function() {
                var t = function() {
                    e(this).addClass("hover")
                  },
                  n = function() {
                    e(this).removeClass("hover")
                  };
                a.bind("mouseenter" + P, t).bind("mouseleave" + P, n), g.bind("mouseenter" + P, t).bind("mouseleave" + P, n), m.bind("mouseenter" + P, t).bind("mouseleave" + P, n), w.bind("mouseenter" + P, t).bind("mouseleave" + P, n), T.bind("mouseenter" + P, t).bind("mouseleave" + P, n)
              },
              o = function() {
                W = function() {
                  var e = {
                    left: v + a.scrollLeft(),
                    width: f
                  };
                  y ? e.bottom = L : e.top = I, w.css(e);
                  var t = {
                    top: b + a.scrollTop(),
                    height: h
                  };
                  S ? t.right = C : t.left = x, T.css(t), w.hide().show(), T.hide().show()
                }
              };
            6 === t && (n(), o())
          },
          G = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
          J = function() {
            var e = navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/);
            e && "msie" === e[1] && F(parseInt(e[2], 10)), j(), R(), O(), q(), K(), B(), G && Q(), l.useKeyboard && H(), a.data("perfect-scrollbar", a), a.data("perfect-scrollbar-update", j), a.data("perfect-scrollbar-destroy", z)
          };
        return J(), a
      })
    }
  }),
  function($, window, document, undefined) {
    function getOrDef(obj, prop) {
      return obj[prop] === undefined ? options[prop] : obj[prop]
    }

    function scrollTop() {
      var scroll = window.pageYOffset;
      return scroll === undefined ? docElement.scrollTop : scroll
    }

    function triggerEvent(event, $el) {
      var handler = options["on" + event];
      handler && ($isFunction(handler) ? handler.call($el[0]) : (handler.addClass && $el.addClass(handler.addClass), handler.removeClass && $el.removeClass(handler.removeClass))), $el.trigger("lazy" + event, [$el]), queueCheckLazyElements()
    }

    function triggerLoadOrError(e) {
      triggerEvent(e.type, $(this).off(load_error, triggerLoadOrError))
    }

    function checkLazyElements(force) {
      if (elements.length) {
        force = force || options.forceLoad, topLazy = 1 / 0;
        var i, length, viewportTop = scrollTop(),
          viewportHeight = window.innerHeight || docElement.clientHeight,
          viewportWidth = window.innerWidth || docElement.clientWidth;
        for (i = 0, length = elements.length; length > i; i++) {
          var topEdge, $el = elements[i],
            el = $el[0],
            objData = $el[lazyLoadXT],
            removeNode = !1,
            visible = force || $data(el, dataLazied) < 0;
          if ($.contains(docElement, el)) {
            if (force || !objData.visibleOnly || el.offsetWidth || el.offsetHeight) {
              if (!visible) {
                var elPos = el.getBoundingClientRect(),
                  edgeX = objData.edgeX,
                  edgeY = objData.edgeY;
                topEdge = elPos.top + viewportTop - edgeY - viewportHeight, visible = viewportTop >= topEdge && elPos.bottom > -edgeY && elPos.left <= viewportWidth + edgeX && elPos.right > -edgeX
              }
              if (visible) {
                $el.on(load_error, triggerLoadOrError), triggerEvent("show", $el);
                var srcAttr = objData.srcAttr,
                  src = $isFunction(srcAttr) ? srcAttr($el) : el.getAttribute(srcAttr);
                src && (el.src = src), removeNode = !0
              } else topLazy > topEdge && (topLazy = topEdge)
            }
          } else removeNode = !0;
          removeNode && ($data(el, dataLazied, 0), elements.splice(i--, 1), length--)
        }
        length || triggerEvent("complete", $(docElement))
      }
    }

    function timeoutLazyElements() {
      if (waitingMode > 1) {
        waitingMode = 1;
        try {
          checkLazyElements()
        } finally {
          setTimeout(timeoutLazyElements, options.throttle)
        }
      } else waitingMode = 0
    }

    function queueCheckLazyElements(e) {
      elements.length && (e && "scroll" === e.type && e.currentTarget === window && topLazy >= scrollTop() || (waitingMode || setTimeout(timeoutLazyElements, 0), waitingMode = 2))
    }

    function initLazyElements() {
      $window.lazyLoadXT()
    }

    function forceLoadAll() {
      checkLazyElements(!0)
    }
    var lazyLoadXT = "lazyLoadXT",
      dataLazied = "lazied",
      load_error = "load error",
      classLazyHidden = "lazy-hidden",
      docElement = document.documentElement || document.body,
      forceLoad = window.onscroll === undefined || !!window.operamini || !docElement.getBoundingClientRect,
      options = {
        autoInit: !0,
        selector: "img[data-src]",
        blankImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        throttle: 99,
        forceLoad: forceLoad,
        loadEvent: "pageshow",
        updateEvent: "load orientationchange resize scroll touchmove focus",
        forceEvent: "lazyloadall",
        oninit: {
          removeClass: "lazy"
        },
        onshow: {
          addClass: classLazyHidden
        },
        onload: {
          removeClass: classLazyHidden,
          addClass: "lazy-loaded"
        },
        onerror: {
          removeClass: classLazyHidden
        },
        checkDuplicates: !0
      },
      elementOptions = {
        srcAttr: "data-src",
        edgeX: 0,
        edgeY: 0,
        visibleOnly: !0
      },
      $window = $(window),
      $isFunction = $.isFunction,
      $extend = $.extend,
      $data = $.data || function(el, name) {
        return $(el).data(name)
      },
      elements = [],
      topLazy = 0,
      waitingMode = 0;
    $[lazyLoadXT] = $extend(options, elementOptions, $[lazyLoadXT]), $.fn[lazyLoadXT] = function(overrides) {
      overrides = overrides || {};
      var prop, blankImage = getOrDef(overrides, "blankImage"),
        checkDuplicates = getOrDef(overrides, "checkDuplicates"),
        scrollContainer = getOrDef(overrides, "scrollContainer"),
        forceShow = getOrDef(overrides, "show"),
        elementOptionsOverrides = {};
      $(scrollContainer).on("scroll", queueCheckLazyElements);
      for (prop in elementOptions) elementOptionsOverrides[prop] = getOrDef(overrides, prop);
      return this.each(function(index, el) {
        if (el === window) $(options.selector).lazyLoadXT(overrides);
        else {
          var duplicate = checkDuplicates && $data(el, dataLazied),
            $el = $(el).data(dataLazied, forceShow ? -1 : 1);
          if (duplicate) return void queueCheckLazyElements();
          blankImage && "IMG" === el.tagName && !el.src && (el.src = blankImage), $el[lazyLoadXT] = $extend({}, elementOptionsOverrides), triggerEvent("init", $el), elements.push($el), queueCheckLazyElements()
        }
      })
    }, $(document).ready(function() {
      triggerEvent("start", $window), $window.on(options.updateEvent, queueCheckLazyElements).on(options.forceEvent, forceLoadAll), $(document).on(options.updateEvent, queueCheckLazyElements), options.autoInit && ($window.on(options.loadEvent, initLazyElements), initLazyElements())
    })
  }(window.jQuery || window.Zepto || window.$, window, document),
  function($) {
    var options = $.lazyLoadXT;
    options.selector += ",video,iframe[data-src]", options.videoPoster = "data-poster", $(document).on("lazyshow", "video", function(e, $el) {
      var srcAttr = $el.lazyLoadXT.srcAttr,
        isFuncSrcAttr = $.isFunction(srcAttr),
        changed = !1;
      $el.attr("poster", $el.attr(options.videoPoster)), $el.children("source,track").each(function(index, el) {
        var $child = $(el),
          src = isFuncSrcAttr ? srcAttr($child) : $child.attr(srcAttr);
        src && ($child.attr("src", src), changed = !0)
      }), changed && this.load()
    })
  }(window.jQuery || window.Zepto || window.$),
  function(e) {
    var t = function() {
      "use strict";
      var e = "s",
        n = function(e) {
          var t = -e.getTimezoneOffset();
          return null !== t ? t : 0
        },
        r = function(e, t, n) {
          var r = new Date;
          return void 0 !== e && r.setFullYear(e), r.setDate(n), r.setMonth(t), r
        },
        i = function(e) {
          return n(r(e, 0, 2))
        },
        s = function(e) {
          return n(r(e, 5, 2))
        },
        o = function(e) {
          var t = e.getMonth() > 7 ? s(e.getFullYear()) : i(e.getFullYear()),
            r = n(e);
          return t - r !== 0
        },
        u = function() {
          var t = i(),
            n = s(),
            r = i() - s();
          return 0 > r ? t + ",1" : r > 0 ? n + ",1," + e : t + ",0"
        },
        a = function() {
          var e = u();
          return new t.TimeZone(t.olson.timezones[e])
        };
      return {
        determine: a,
        date_is_dst: o
      }
    }();
    t.TimeZone = function(e) {
      "use strict";
      var n = null,
        r = function() {
          return n
        },
        i = function() {
          for (var e = t.olson.ambiguity_list[n], r = e.length, i = 0, s = e[0]; r > i; i += 1)
            if (s = e[i], t.date_is_dst(t.olson.dst_start_dates[s])) return void(n = s)
        },
        s = function() {
          return "undefined" != typeof t.olson.ambiguity_list[n]
        };
      return n = e, s() && i(), {
        name: r
      }
    }, t.olson = {}, t.olson.timezones = {
      "-720,0": "Etc/GMT+12",
      "-660,0": "Pacific/Pago_Pago",
      "-600,1": "America/Adak",
      "-600,0": "Pacific/Honolulu",
      "-570,0": "Pacific/Marquesas",
      "-540,0": "Pacific/Gambier",
      "-540,1": "America/Anchorage",
      "-480,1": "America/Los_Angeles",
      "-480,0": "Pacific/Pitcairn",
      "-420,0": "America/Phoenix",
      "-420,1": "America/Denver",
      "-360,0": "America/Guatemala",
      "-360,1": "America/Chicago",
      "-360,1,s": "Pacific/Easter",
      "-300,0": "America/Bogota",
      "-300,1": "America/New_York",
      "-270,0": "America/Caracas",
      "-240,1": "America/Halifax",
      "-240,0": "America/Santo_Domingo",
      "-240,1,s": "America/Santiago",
      "-210,1": "America/St_Johns",
      "-180,1": "America/Godthab",
      "-180,0": "America/Argentina/Buenos_Aires",
      "-180,1,s": "America/Montevideo",
      "-120,0": "Etc/GMT+2",
      "-120,1": "Etc/GMT+2",
      "-60,1": "Atlantic/Azores",
      "-60,0": "Atlantic/Cape_Verde",
      "0,0": "Etc/UTC",
      "0,1": "Europe/London",
      "60,1": "Europe/Berlin",
      "60,0": "Africa/Lagos",
      "60,1,s": "Africa/Windhoek",
      "120,1": "Asia/Beirut",
      "120,0": "Africa/Johannesburg",
      "180,0": "Asia/Baghdad",
      "180,1": "Europe/Moscow",
      "210,1": "Asia/Tehran",
      "240,0": "Asia/Dubai",
      "240,1": "Asia/Baku",
      "270,0": "Asia/Kabul",
      "300,1": "Asia/Yekaterinburg",
      "300,0": "Asia/Karachi",
      "330,0": "Asia/Kolkata",
      "345,0": "Asia/Kathmandu",
      "360,0": "Asia/Dhaka",
      "360,1": "Asia/Omsk",
      "390,0": "Asia/Rangoon",
      "420,1": "Asia/Krasnoyarsk",
      "420,0": "Asia/Jakarta",
      "480,0": "Asia/Shanghai",
      "480,1": "Asia/Irkutsk",
      "525,0": "Australia/Eucla",
      "525,1,s": "Australia/Eucla",
      "540,1": "Asia/Yakutsk",
      "540,0": "Asia/Tokyo",
      "570,0": "Australia/Darwin",
      "570,1,s": "Australia/Adelaide",
      "600,0": "Australia/Brisbane",
      "600,1": "Asia/Vladivostok",
      "600,1,s": "Australia/Sydney",
      "630,1,s": "Australia/Lord_Howe",
      "660,1": "Asia/Kamchatka",
      "660,0": "Pacific/Noumea",
      "690,0": "Pacific/Norfolk",
      "720,1,s": "Pacific/Auckland",
      "720,0": "Pacific/Tarawa",
      "765,1,s": "Pacific/Chatham",
      "780,0": "Pacific/Tongatapu",
      "780,1,s": "Pacific/Apia",
      "840,0": "Pacific/Kiritimati"
    }, t.olson.dst_start_dates = function() {
      "use strict";
      var e = new Date(2010, 6, 15, 1, 0, 0, 0);
      return {
        "America/Denver": new Date(2011, 2, 13, 3, 0, 0, 0),
        "America/Mazatlan": new Date(2011, 3, 3, 3, 0, 0, 0),
        "America/Chicago": new Date(2011, 2, 13, 3, 0, 0, 0),
        "America/Mexico_City": new Date(2011, 3, 3, 3, 0, 0, 0),
        "America/Asuncion": new Date(2012, 9, 7, 3, 0, 0, 0),
        "America/Santiago": new Date(2012, 9, 3, 3, 0, 0, 0),
        "America/Campo_Grande": new Date(2012, 9, 21, 5, 0, 0, 0),
        "America/Montevideo": new Date(2011, 9, 2, 3, 0, 0, 0),
        "America/Sao_Paulo": new Date(2011, 9, 16, 5, 0, 0, 0),
        "America/Los_Angeles": new Date(2011, 2, 13, 8, 0, 0, 0),
        "America/Santa_Isabel": new Date(2011, 3, 5, 8, 0, 0, 0),
        "America/Havana": new Date(2012, 2, 10, 2, 0, 0, 0),
        "America/New_York": new Date(2012, 2, 10, 7, 0, 0, 0),
        "Asia/Beirut": new Date(2011, 2, 27, 1, 0, 0, 0),
        "Europe/Helsinki": new Date(2011, 2, 27, 4, 0, 0, 0),
        "Europe/Istanbul": new Date(2011, 2, 28, 5, 0, 0, 0),
        "Asia/Damascus": new Date(2011, 3, 1, 2, 0, 0, 0),
        "Asia/Jerusalem": new Date(2011, 3, 1, 6, 0, 0, 0),
        "Asia/Gaza": new Date(2009, 2, 28, 0, 30, 0, 0),
        "Africa/Cairo": new Date(2009, 3, 25, 0, 30, 0, 0),
        "Pacific/Auckland": new Date(2011, 8, 26, 7, 0, 0, 0),
        "Pacific/Fiji": new Date(2010, 11, 29, 23, 0, 0, 0),
        "America/Halifax": new Date(2011, 2, 13, 6, 0, 0, 0),
        "America/Goose_Bay": new Date(2011, 2, 13, 2, 1, 0, 0),
        "America/Miquelon": new Date(2011, 2, 13, 5, 0, 0, 0),
        "America/Godthab": new Date(2011, 2, 27, 1, 0, 0, 0),
        "Europe/Moscow": e,
        "Asia/Yekaterinburg": e,
        "Asia/Omsk": e,
        "Asia/Krasnoyarsk": e,
        "Asia/Irkutsk": e,
        "Asia/Yakutsk": e,
        "Asia/Vladivostok": e,
        "Asia/Kamchatka": e,
        "Europe/Minsk": e,
        "Australia/Perth": new Date(2008, 10, 1, 1, 0, 0, 0)
      }
    }(), t.olson.ambiguity_list = {
      "America/Denver": ["America/Denver", "America/Mazatlan"],
      "America/Chicago": ["America/Chicago", "America/Mexico_City"],
      "America/Santiago": ["America/Santiago", "America/Asuncion", "America/Campo_Grande"],
      "America/Montevideo": ["America/Montevideo", "America/Sao_Paulo"],
      "Asia/Beirut": ["Asia/Beirut", "Europe/Helsinki", "Europe/Istanbul", "Asia/Damascus", "Asia/Jerusalem", "Asia/Gaza"],
      "Pacific/Auckland": ["Pacific/Auckland", "Pacific/Fiji"],
      "America/Los_Angeles": ["America/Los_Angeles", "America/Santa_Isabel"],
      "America/New_York": ["America/Havana", "America/New_York"],
      "America/Halifax": ["America/Goose_Bay", "America/Halifax"],
      "America/Godthab": ["America/Miquelon", "America/Godthab"],
      "Asia/Dubai": ["Europe/Moscow"],
      "Asia/Dhaka": ["Asia/Yekaterinburg"],
      "Asia/Jakarta": ["Asia/Omsk"],
      "Asia/Shanghai": ["Asia/Krasnoyarsk", "Australia/Perth"],
      "Asia/Tokyo": ["Asia/Irkutsk"],
      "Australia/Brisbane": ["Asia/Yakutsk"],
      "Pacific/Noumea": ["Asia/Vladivostok"],
      "Pacific/Tarawa": ["Asia/Kamchatka"],
      "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"],
      "Asia/Baghdad": ["Europe/Minsk"]
    }, "undefined" != typeof exports ? exports.jstz = t : e.jstz = t
  }(this),
  function(factory) {
    var registeredInModuleLoader = !1;
    if ("function" == typeof define && define.amd && (define(factory), registeredInModuleLoader = !0), "object" == typeof exports && (module.exports = factory(), registeredInModuleLoader = !0), !registeredInModuleLoader) {
      var OldCookies = window.Cookies,
        api = window.Cookies = factory();
      api.noConflict = function() {
        return window.Cookies = OldCookies, api
      }
    }
  }(function() {
    function extend() {
      for (var i = 0, result = {}; i < arguments.length; i++) {
        var attributes = arguments[i];
        for (var key in attributes) result[key] = attributes[key]
      }
      return result
    }

    function init(converter) {
      function api(key, value, attributes) {
        var result;
        if ("undefined" != typeof document) {
          if (arguments.length > 1) {
            if (attributes = extend({
                path: "/"
              }, api.defaults, attributes), "number" == typeof attributes.expires) {
              var expires = new Date;
              expires.setMilliseconds(expires.getMilliseconds() + 864e5 * attributes.expires), attributes.expires = expires
            }
            try {
              result = JSON.stringify(value), /^[\{\[]/.test(result) && (value = result)
            } catch (e) {}
            return value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), key = encodeURIComponent(String(key)), key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), key = key.replace(/[\(\)]/g, escape), document.cookie = [key, "=", value, attributes.expires ? "; expires=" + attributes.expires.toUTCString() : "", attributes.path ? "; path=" + attributes.path : "", attributes.domain ? "; domain=" + attributes.domain : "", attributes.secure ? "; secure" : ""].join("")
          }
          key || (result = {});
          for (var cookies = document.cookie ? document.cookie.split("; ") : [], rdecode = /(%[0-9A-Z]{2})+/g, i = 0; i < cookies.length; i++) {
            var parts = cookies[i].split("="),
              cookie = parts.slice(1).join("=");
            '"' === cookie.charAt(0) && (cookie = cookie.slice(1, -1));
            try {
              var name = parts[0].replace(rdecode, decodeURIComponent);
              if (cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent), this.json) try {
                cookie = JSON.parse(cookie)
              } catch (e) {}
              if (key === name) {
                result = cookie;
                break
              }
              key || (result[name] = cookie)
            } catch (e) {}
          }
          return result
        }
      }
      return api.set = api, api.get = function(key) {
        return api.call(api, key)
      }, api.getJSON = function() {
        return api.apply({
          json: !0
        }, [].slice.call(arguments))
      }, api.defaults = {}, api.remove = function(key, attributes) {
        api(key, "", extend(attributes, {
          expires: -1
        }))
      }, api.withConverter = init, api
    }
    return init(function() {})
  }),
  function(factory) {
    "function" == typeof define && define.amd ? define(["jquery"], function($) {
      factory($, window, document)
    }) : "object" == typeof module && module.exports ? module.exports = factory(require("jquery"), window, document) : factory(jQuery, window, document)
  }(function($, window, document, undefined) {
    "use strict";

    function Plugin(element, options) {
      this.telInput = $(element), this.options = $.extend({}, defaults, options), this.ns = "." + pluginName + id++, this.isGoodBrowser = Boolean(element.setSelectionRange), this.hadInitialPlaceholder = Boolean($(element).attr("placeholder"))
    }
    var pluginName = "intlTelInput",
      id = 1,
      defaults = {
        allowDropdown: !0,
        autoHideDialCode: !0,
        autoPlaceholder: "polite",
        customPlaceholder: null,
        dropdownContainer: "",
        excludeCountries: [],
        formatOnDisplay: !0,
        geoIpLookup: null,
        initialCountry: "",
        nationalMode: !0,
        onlyCountries: [],
        placeholderNumberType: "MOBILE",
        preferredCountries: ["us", "gb"],
        separateDialCode: !1,
        utilsScript: ""
      },
      keys = {
        UP: 38,
        DOWN: 40,
        ENTER: 13,
        ESC: 27,
        PLUS: 43,
        A: 65,
        Z: 90,
        SPACE: 32,
        TAB: 9
      },
      regionlessNanpNumbers = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"];
    $(window).on("load", function() {
      $.fn[pluginName].windowLoaded = !0
    }), Plugin.prototype = {
      _init: function() {
        return this.options.nationalMode && (this.options.autoHideDialCode = !1), this.options.separateDialCode && (this.options.autoHideDialCode = this.options.nationalMode = !1), this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.isMobile && ($("body").addClass("iti-mobile"), this.options.dropdownContainer || (this.options.dropdownContainer = "body")), this.autoCountryDeferred = new $.Deferred, this.utilsScriptDeferred = new $.Deferred, this.selectedCountryData = {}, this._processCountryData(), this._generateMarkup(), this._setInitialState(), this._initListeners(), this._initRequests(), [this.autoCountryDeferred, this.utilsScriptDeferred]
      },
      _processCountryData: function() {
        this._processAllCountries(), this._processCountryCodes(), this._processPreferredCountries()
      },
      _addCountryCode: function(iso2, dialCode, priority) {
        dialCode in this.countryCodes || (this.countryCodes[dialCode] = []);
        var index = priority || 0;
        this.countryCodes[dialCode][index] = iso2
      },
      _processAllCountries: function() {
        if (this.options.onlyCountries.length) {
          var lowerCaseOnlyCountries = this.options.onlyCountries.map(function(country) {
            return country.toLowerCase()
          });
          this.countries = allCountries.filter(function(country) {
            return lowerCaseOnlyCountries.indexOf(country.iso2) > -1
          })
        } else if (this.options.excludeCountries.length) {
          var lowerCaseExcludeCountries = this.options.excludeCountries.map(function(country) {
            return country.toLowerCase()
          });
          this.countries = allCountries.filter(function(country) {
            return -1 === lowerCaseExcludeCountries.indexOf(country.iso2)
          })
        } else this.countries = allCountries
      },
      _processCountryCodes: function() {
        this.countryCodes = {};
        for (var i = 0; i < this.countries.length; i++) {
          var c = this.countries[i];
          if (this._addCountryCode(c.iso2, c.dialCode, c.priority), c.areaCodes)
            for (var j = 0; j < c.areaCodes.length; j++) this._addCountryCode(c.iso2, c.dialCode + c.areaCodes[j])
        }
      },
      _processPreferredCountries: function() {
        this.preferredCountries = [];
        for (var i = 0; i < this.options.preferredCountries.length; i++) {
          var countryCode = this.options.preferredCountries[i].toLowerCase(),
            countryData = this._getCountryData(countryCode, !1, !0);
          countryData && this.preferredCountries.push(countryData)
        }
      },
      _generateMarkup: function() {
        this.telInput.attr("autocomplete", "off");
        var parentClass = "intl-tel-input";
        this.options.allowDropdown && (parentClass += " allow-dropdown"), this.options.separateDialCode && (parentClass += " separate-dial-code"), this.telInput.wrap($("<div>", {
          "class": parentClass
        })), this.flagsContainer = $("<div>", {
          "class": "flag-container"
        }).insertBefore(this.telInput);
        var selectedFlag = $("<div>", {
          "class": "selected-flag"
        });
        selectedFlag.appendTo(this.flagsContainer), this.selectedFlagInner = $("<div>", {
          "class": "iti-flag"
        }).appendTo(selectedFlag), this.options.separateDialCode && (this.selectedDialCode = $("<div>", {
          "class": "selected-dial-code"
        }).appendTo(selectedFlag)), this.options.allowDropdown ? (selectedFlag.attr("tabindex", "0"), $("<div>", {
          "class": "iti-arrow"
        }).appendTo(selectedFlag), this.countryList = $("<ul>", {
          "class": "country-list hide"
        }), this.preferredCountries.length && (this._appendListItems(this.preferredCountries, "preferred"), $("<li>", {
          "class": "divider"
        }).appendTo(this.countryList)), this._appendListItems(this.countries, ""), this.countryListItems = this.countryList.children(".country"), this.options.dropdownContainer ? this.dropdown = $("<div>", {
          "class": "intl-tel-input iti-container"
        }).append(this.countryList) : this.countryList.appendTo(this.flagsContainer)) : this.countryListItems = $()
      },
      _appendListItems: function(countries, className) {
        for (var tmp = "", i = 0; i < countries.length; i++) {
          var c = countries[i];
          tmp += "<li class='country " + className + "' data-dial-code='" + c.dialCode + "' data-country-code='" + c.iso2 + "'>", tmp += "<div class='flag-box'><div class='iti-flag " + c.iso2 + "'></div></div>", tmp += "<span class='country-name'>" + c.name + "</span>", tmp += "<span class='dial-code'>+" + c.dialCode + "</span>", tmp += "</li>"
        }
        this.countryList.append(tmp)
      },
      _setInitialState: function() {
        var val = this.telInput.val();
        this._getDialCode(val) && !this._isRegionlessNanp(val) ? this._updateFlagFromNumber(val) : "auto" !== this.options.initialCountry && (this.options.initialCountry ? this._setFlag(this.options.initialCountry.toLowerCase()) : (this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2, val || this._setFlag(this.defaultCountry)), val || this.options.nationalMode || this.options.autoHideDialCode || this.options.separateDialCode || this.telInput.val("+" + this.selectedCountryData.dialCode)), val && this._updateValFromNumber(val)
      },
      _initListeners: function() {
        this._initKeyListeners(), this.options.autoHideDialCode && this._initFocusListeners(), this.options.allowDropdown && this._initDropdownListeners()
      },
      _initDropdownListeners: function() {
        var that = this,
          label = this.telInput.closest("label");
        label.length && label.on("click" + this.ns, function(e) {
          that.countryList.hasClass("hide") ? that.telInput.focus() : e.preventDefault()
        });
        var selectedFlag = this.selectedFlagInner.parent();
        selectedFlag.on("click" + this.ns, function() {
          !that.countryList.hasClass("hide") || that.telInput.prop("disabled") || that.telInput.prop("readonly") || that._showDropdown()
        }), this.flagsContainer.on("keydown" + that.ns, function(e) {
          var isDropdownHidden = that.countryList.hasClass("hide");
          !isDropdownHidden || e.which != keys.UP && e.which != keys.DOWN && e.which != keys.SPACE && e.which != keys.ENTER || (e.preventDefault(), e.stopPropagation(), that._showDropdown()), e.which == keys.TAB && that._closeDropdown()
        })
      },
      _initRequests: function() {
        var that = this;
        this.options.utilsScript ? $.fn[pluginName].windowLoaded ? $.fn[pluginName].loadUtils(this.options.utilsScript, this.utilsScriptDeferred) : $(window).on("load", function() {
          $.fn[pluginName].loadUtils(that.options.utilsScript, that.utilsScriptDeferred)
        }) : this.utilsScriptDeferred.resolve(), "auto" === this.options.initialCountry ? this._loadAutoCountry() : this.autoCountryDeferred.resolve()
      },
      _loadAutoCountry: function() {
        $.fn[pluginName].autoCountry ? this.handleAutoCountry() : $.fn[pluginName].startedLoadingAutoCountry || ($.fn[pluginName].startedLoadingAutoCountry = !0, "function" == typeof this.options.geoIpLookup && this.options.geoIpLookup(function(countryCode) {
          $.fn[pluginName].autoCountry = countryCode.toLowerCase(), setTimeout(function() {
            $(".intl-tel-input input").intlTelInput("handleAutoCountry")
          })
        }))
      },
      _initKeyListeners: function() {
        var that = this;
        this.telInput.on("keyup" + this.ns, function() {
          that._updateFlagFromNumber(that.telInput.val()) && that._triggerCountryChange()
        }), this.telInput.on("cut" + this.ns + " paste" + this.ns, function() {
          setTimeout(function() {
            that._updateFlagFromNumber(that.telInput.val()) && that._triggerCountryChange()
          })
        })
      },
      _cap: function(number) {
        var max = this.telInput.attr("maxlength");
        return max && number.length > max ? number.substr(0, max) : number
      },
      _initFocusListeners: function() {
        var that = this;
        this.telInput.on("mousedown" + this.ns, function(e) {
          that.telInput.is(":focus") || that.telInput.val() || (e.preventDefault(), that.telInput.focus())
        }), this.telInput.on("focus" + this.ns, function() {
          that.telInput.val() || that.telInput.prop("readonly") || !that.selectedCountryData.dialCode || (that.telInput.val("+" + that.selectedCountryData.dialCode), that.telInput.one("keypress.plus" + that.ns, function(e) {
            e.which == keys.PLUS && that.telInput.val("")
          }), setTimeout(function() {
            var input = that.telInput[0];
            if (that.isGoodBrowser) {
              var len = that.telInput.val().length;
              input.setSelectionRange(len, len)
            }
          }))
        });
        var form = this.telInput.prop("form");
        form && $(form).on("submit" + this.ns, function() {
          that._removeEmptyDialCode()
        }), this.telInput.on("blur" + this.ns, function() {
          that._removeEmptyDialCode()
        })
      },
      _removeEmptyDialCode: function() {
        var value = this.telInput.val(),
          startsPlus = "+" == value.charAt(0);
        if (startsPlus) {
          var numeric = this._getNumeric(value);
          numeric && this.selectedCountryData.dialCode != numeric || this.telInput.val("")
        }
        this.telInput.off("keypress.plus" + this.ns)
      },
      _getNumeric: function(s) {
        return s.replace(/\D/g, "")
      },
      _showDropdown: function() {
        this._setDropdownPosition();
        var activeListItem = this.countryList.children(".active");
        activeListItem.length && (this._highlightListItem(activeListItem), this._scrollTo(activeListItem)), this._bindDropdownListeners(), this.selectedFlagInner.children(".iti-arrow").addClass("up")
      },
      _setDropdownPosition: function() {
        var that = this;
        if (this.options.dropdownContainer && this.dropdown.appendTo(this.options.dropdownContainer), this.dropdownHeight = this.countryList.removeClass("hide").outerHeight(), !this.isMobile) {
          var pos = this.telInput.offset(),
            inputTop = pos.top,
            windowTop = $(window).scrollTop(),
            dropdownFitsBelow = inputTop + this.telInput.outerHeight() + this.dropdownHeight < windowTop + $(window).height(),
            dropdownFitsAbove = inputTop - this.dropdownHeight > windowTop;
          if (this.countryList.toggleClass("dropup", !dropdownFitsBelow && dropdownFitsAbove), this.options.dropdownContainer) {
            var extraTop = !dropdownFitsBelow && dropdownFitsAbove ? 0 : this.telInput.innerHeight();
            this.dropdown.css({
              top: inputTop + extraTop,
              left: pos.left
            }), $(window).on("scroll" + this.ns, function() {
              that._closeDropdown()
            })
          }
        }
      },
      _bindDropdownListeners: function() {
        var that = this;
        this.countryList.on("mouseover" + this.ns, ".country", function() {
          that._highlightListItem($(this))
        }), this.countryList.on("click" + this.ns, ".country", function() {
          that._selectListItem($(this))
        });
        var isOpening = !0;
        $("html").on("click" + this.ns, function() {
          isOpening || that._closeDropdown(), isOpening = !1
        });
        var query = "",
          queryTimer = null;
        $(document).on("keydown" + this.ns, function(e) {
          e.preventDefault(), e.which == keys.UP || e.which == keys.DOWN ? that._handleUpDownKey(e.which) : e.which == keys.ENTER ? that._handleEnterKey() : e.which == keys.ESC ? that._closeDropdown() : (e.which >= keys.A && e.which <= keys.Z || e.which == keys.SPACE) && (queryTimer && clearTimeout(queryTimer), query += String.fromCharCode(e.which), that._searchForCountry(query), queryTimer = setTimeout(function() {
            query = ""
          }, 1e3))
        })
      },
      _handleUpDownKey: function(key) {
        var current = this.countryList.children(".highlight").first(),
          next = key == keys.UP ? current.prev() : current.next();
        next.length && (next.hasClass("divider") && (next = key == keys.UP ? next.prev() : next.next()), this._highlightListItem(next), this._scrollTo(next))
      },
      _handleEnterKey: function() {
        var currentCountry = this.countryList.children(".highlight").first();
        currentCountry.length && this._selectListItem(currentCountry)
      },
      _searchForCountry: function(query) {
        for (var i = 0; i < this.countries.length; i++)
          if (this._startsWith(this.countries[i].name, query)) {
            var listItem = this.countryList.children("[data-country-code=" + this.countries[i].iso2 + "]").not(".preferred");
            this._highlightListItem(listItem), this._scrollTo(listItem, !0);
            break
          }
      },
      _startsWith: function(a, b) {
        return a.substr(0, b.length).toUpperCase() == b
      },
      _updateValFromNumber: function(number) {
        if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
          var format = this.options.separateDialCode || !this.options.nationalMode && "+" == number.charAt(0) ? intlTelInputUtils.numberFormat.INTERNATIONAL : intlTelInputUtils.numberFormat.NATIONAL;
          number = intlTelInputUtils.formatNumber(number, this.selectedCountryData.iso2, format)
        }
        number = this._beforeSetNumber(number), this.telInput.val(number)
      },
      _updateFlagFromNumber: function(number) {
        number && this.options.nationalMode && "1" == this.selectedCountryData.dialCode && "+" != number.charAt(0) && ("1" != number.charAt(0) && (number = "1" + number), number = "+" + number);
        var dialCode = this._getDialCode(number),
          countryCode = null,
          numeric = this._getNumeric(number);
        if (dialCode) {
          var countryCodes = this.countryCodes[this._getNumeric(dialCode)],
            alreadySelected = $.inArray(this.selectedCountryData.iso2, countryCodes) > -1,
            isNanpAreaCode = "+1" == dialCode && numeric.length >= 4,
            nanpSelected = "1" == this.selectedCountryData.dialCode;
          if (!(nanpSelected && this._isRegionlessNanp(numeric) || alreadySelected && !isNanpAreaCode))
            for (var j = 0; j < countryCodes.length; j++)
              if (countryCodes[j]) {
                countryCode = countryCodes[j];
                break
              }
        } else "+" == number.charAt(0) && numeric.length ? countryCode = "" : number && "+" != number || (countryCode = this.defaultCountry);
        return null !== countryCode ? this._setFlag(countryCode) : !1
      },
      _isRegionlessNanp: function(number) {
        var numeric = this._getNumeric(number);
        if ("1" == numeric.charAt(0)) {
          var areaCode = numeric.substr(1, 3);
          return $.inArray(areaCode, regionlessNanpNumbers) > -1
        }
        return !1
      },
      _highlightListItem: function(listItem) {
        this.countryListItems.removeClass("highlight"), listItem.addClass("highlight")
      },
      _getCountryData: function(countryCode, ignoreOnlyCountriesOption, allowFail) {
        for (var countryList = ignoreOnlyCountriesOption ? allCountries : this.countries, i = 0; i < countryList.length; i++)
          if (countryList[i].iso2 == countryCode) return countryList[i];
        if (allowFail) return null;
        throw new Error("No country data for '" + countryCode + "'")
      },
      _setFlag: function(countryCode) {
        var prevCountry = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
        this.selectedCountryData = countryCode ? this._getCountryData(countryCode, !1, !1) : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), this.selectedFlagInner.attr("class", "iti-flag " + countryCode);
        var title = countryCode ? this.selectedCountryData.name + ": +" + this.selectedCountryData.dialCode : "Unknown";
        if (this.selectedFlagInner.parent().attr("title", title), this.options.separateDialCode) {
          var dialCode = this.selectedCountryData.dialCode ? "+" + this.selectedCountryData.dialCode : "",
            parent = this.telInput.parent();
          prevCountry.dialCode && parent.removeClass("iti-sdc-" + (prevCountry.dialCode.length + 1)), dialCode && parent.addClass("iti-sdc-" + dialCode.length), this.selectedDialCode.text(dialCode)
        }
        return this._updatePlaceholder(), this.countryListItems.removeClass("active"), countryCode && this.countryListItems.find(".iti-flag." + countryCode).first().closest(".country").addClass("active"), prevCountry.iso2 !== countryCode
      },
      _updatePlaceholder: function() {
        var shouldSetPlaceholder = "aggressive" === this.options.autoPlaceholder || !this.hadInitialPlaceholder && (this.options.autoPlaceholder === !0 || "polite" === this.options.autoPlaceholder);
        if (window.intlTelInputUtils && shouldSetPlaceholder) {
          var numberType = intlTelInputUtils.numberType[this.options.placeholderNumberType],
            placeholder = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, numberType) : "";
          placeholder = this._beforeSetNumber(placeholder), "function" == typeof this.options.customPlaceholder && (placeholder = this.options.customPlaceholder(placeholder, this.selectedCountryData)), this.telInput.attr("placeholder", placeholder)
        }
      },
      _selectListItem: function(listItem) {
        var flagChanged = this._setFlag(listItem.attr("data-country-code"));
        if (this._closeDropdown(), this._updateDialCode(listItem.attr("data-dial-code"), !0), this.telInput.focus(), this.isGoodBrowser) {
          var len = this.telInput.val().length;
          this.telInput[0].setSelectionRange(len, len)
        }
        flagChanged && this._triggerCountryChange()
      },
      _closeDropdown: function() {
        this.countryList.addClass("hide"), this.selectedFlagInner.children(".iti-arrow").removeClass("up"), $(document).off(this.ns), $("html").off(this.ns), this.countryList.off(this.ns), this.options.dropdownContainer && (this.isMobile || $(window).off("scroll" + this.ns), this.dropdown.detach())
      },
      _scrollTo: function(element, middle) {
        var container = this.countryList,
          containerHeight = container.height(),
          containerTop = container.offset().top,
          containerBottom = containerTop + containerHeight,
          elementHeight = element.outerHeight(),
          elementTop = element.offset().top,
          elementBottom = elementTop + elementHeight,
          newScrollTop = elementTop - containerTop + container.scrollTop(),
          middleOffset = containerHeight / 2 - elementHeight / 2;
        if (containerTop > elementTop) middle && (newScrollTop -= middleOffset), container.scrollTop(newScrollTop);
        else if (elementBottom > containerBottom) {
          middle && (newScrollTop += middleOffset);
          var heightDifference = containerHeight - elementHeight;
          container.scrollTop(newScrollTop - heightDifference)
        }
      },
      _updateDialCode: function(newDialCode, hasSelectedListItem) {
        var newNumber, inputVal = this.telInput.val();
        if (newDialCode = "+" + newDialCode, "+" == inputVal.charAt(0)) {
          var prevDialCode = this._getDialCode(inputVal);
          newNumber = prevDialCode ? inputVal.replace(prevDialCode, newDialCode) : newDialCode
        } else {
          if (this.options.nationalMode || this.options.separateDialCode) return;
          if (inputVal) newNumber = newDialCode + inputVal;
          else {
            if (!hasSelectedListItem && this.options.autoHideDialCode) return;
            newNumber = newDialCode
          }
        }
        this.telInput.val(newNumber)
      },
      _getDialCode: function(number) {
        var dialCode = "";
        if ("+" == number.charAt(0))
          for (var numericChars = "", i = 0; i < number.length; i++) {
            var c = number.charAt(i);
            if ($.isNumeric(c) && (numericChars += c, this.countryCodes[numericChars] && (dialCode = number.substr(0, i + 1)), 4 == numericChars.length)) break
          }
        return dialCode
      },
      _getFullNumber: function() {
        var prefix, val = $.trim(this.telInput.val()),
          dialCode = this.selectedCountryData.dialCode,
          numericVal = this._getNumeric(val),
          normalizedVal = "1" == numericVal.charAt(0) ? numericVal : "1" + numericVal;
        return prefix = this.options.separateDialCode ? "+" + dialCode : "+" != val.charAt(0) && "1" != val.charAt(0) && dialCode && "1" == dialCode.charAt(0) && 4 == dialCode.length && dialCode != normalizedVal.substr(0, 4) ? dialCode.substr(1) : "", prefix + val
      },
      _beforeSetNumber: function(number) {
        if (this.options.separateDialCode) {
          var dialCode = this._getDialCode(number);
          if (dialCode) {
            null !== this.selectedCountryData.areaCodes && (dialCode = "+" + this.selectedCountryData.dialCode);
            var start = " " === number[dialCode.length] || "-" === number[dialCode.length] ? dialCode.length + 1 : dialCode.length;
            number = number.substr(start)
          }
        }
        return this._cap(number)
      },
      _triggerCountryChange: function() {
        this.telInput.trigger("countrychange", this.selectedCountryData)
      },
      handleAutoCountry: function() {
        "auto" === this.options.initialCountry && (this.defaultCountry = $.fn[pluginName].autoCountry, this.telInput.val() || this.setCountry(this.defaultCountry), this.autoCountryDeferred.resolve())
      },
      handleUtils: function() {
        window.intlTelInputUtils && (this.telInput.val() && this._updateValFromNumber(this.telInput.val()), this._updatePlaceholder()), this.utilsScriptDeferred.resolve()
      },
      destroy: function() {
        if (this.allowDropdown && (this._closeDropdown(), this.selectedFlagInner.parent().off(this.ns), this.telInput.closest("label").off(this.ns)), this.options.autoHideDialCode) {
          var form = this.telInput.prop("form");
          form && $(form).off(this.ns)
        }
        this.telInput.off(this.ns);
        var container = this.telInput.parent();
        container.before(this.telInput).remove()
      },
      getExtension: function() {
        return window.intlTelInputUtils ? intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : ""
      },
      getNumber: function(format) {
        return window.intlTelInputUtils ? intlTelInputUtils.formatNumber(this._getFullNumber(), this.selectedCountryData.iso2, format) : ""
      },
      getNumberType: function() {
        return window.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : -99
      },
      getSelectedCountryData: function() {
        return this.selectedCountryData
      },
      getValidationError: function() {
        return window.intlTelInputUtils ? intlTelInputUtils.getValidationError(this._getFullNumber(), this.selectedCountryData.iso2) : -99
      },
      isValidNumber: function() {
        var val = $.trim(this._getFullNumber()),
          countryCode = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
        return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(val, countryCode) : null
      },
      setCountry: function(countryCode) {
        countryCode = countryCode.toLowerCase(), this.selectedFlagInner.hasClass(countryCode) || (this._setFlag(countryCode), this._updateDialCode(this.selectedCountryData.dialCode, !1), this._triggerCountryChange())
      },
      setNumber: function(number) {
        var flagChanged = this._updateFlagFromNumber(number);
        this._updateValFromNumber(number), flagChanged && this._triggerCountryChange()
      }
    }, $.fn[pluginName] = function(options) {
      var args = arguments;
      if (options === undefined || "object" == typeof options) {
        var deferreds = [];
        return this.each(function() {
          if (!$.data(this, "plugin_" + pluginName)) {
            var instance = new Plugin(this, options),
              instanceDeferreds = instance._init();
            deferreds.push(instanceDeferreds[0]), deferreds.push(instanceDeferreds[1]), $.data(this, "plugin_" + pluginName, instance)
          }
        }), $.when.apply(null, deferreds)
      }
      if ("string" == typeof options && "_" !== options[0]) {
        var returns;
        return this.each(function() {
          var instance = $.data(this, "plugin_" + pluginName);
          instance instanceof Plugin && "function" == typeof instance[options] && (returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1))), "destroy" === options && $.data(this, "plugin_" + pluginName, null)
        }), returns !== undefined ? returns : this
      }
    }, $.fn[pluginName].getCountryData = function() {
      return allCountries
    }, $.fn[pluginName].loadUtils = function(path, utilsScriptDeferred) {
      $.fn[pluginName].loadedUtilsScript ? utilsScriptDeferred && utilsScriptDeferred.resolve() : ($.fn[pluginName].loadedUtilsScript = !0, $.ajax({
        type: "GET",
        url: path,
        complete: function() {
          $(".intl-tel-input input").intlTelInput("handleUtils")
        },
        dataType: "script",
        cache: !0
      }))
    }, $.fn[pluginName].defaults = defaults, $.fn[pluginName].version = "11.0.11";
    for (var allCountries = [
        ["Afghanistan (\u202b\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646\u202c\u200e)", "af", "93"],
        ["Albania (Shqip\xebri)", "al", "355"],
        ["Algeria (\u202b\u0627\u0644\u062c\u0632\u0627\u0626\u0631\u202c\u200e)", "dz", "213"],
        ["American Samoa", "as", "1684"],
        ["Andorra", "ad", "376"],
        ["Angola", "ao", "244"],
        ["Anguilla", "ai", "1264"],
        ["Antigua and Barbuda", "ag", "1268"],
        ["Argentina", "ar", "54"],
        ["Armenia (\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576)", "am", "374"],
        ["Aruba", "aw", "297"],
        ["Australia", "au", "61", 0],
        ["Austria (\xd6sterreich)", "at", "43"],
        ["Azerbaijan (Az\u0259rbaycan)", "az", "994"],
        ["Bahamas", "bs", "1242"],
        ["Bahrain (\u202b\u0627\u0644\u0628\u062d\u0631\u064a\u0646\u202c\u200e)", "bh", "973"],
        ["Bangladesh (\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6)", "bd", "880"],
        ["Barbados", "bb", "1246"],
        ["Belarus (\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c)", "by", "375"],
        ["Belgium (Belgi\xeb)", "be", "32"],
        ["Belize", "bz", "501"],
        ["Benin (B\xe9nin)", "bj", "229"],
        ["Bermuda", "bm", "1441"],
        ["Bhutan (\u0f60\u0f56\u0fb2\u0f74\u0f42)", "bt", "975"],
        ["Bolivia", "bo", "591"],
        ["Bosnia and Herzegovina (\u0411\u043e\u0441\u043d\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043e\u0432\u0438\u043d\u0430)", "ba", "387"],
        ["Botswana", "bw", "267"],
        ["Brazil (Brasil)", "br", "55"],
        ["British Indian Ocean Territory", "io", "246"],
        ["British Virgin Islands", "vg", "1284"],
        ["Brunei", "bn", "673"],
        ["Bulgaria (\u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f)", "bg", "359"],
        ["Burkina Faso", "bf", "226"],
        ["Burundi (Uburundi)", "bi", "257"],
        ["Cambodia (\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6)", "kh", "855"],
        ["Cameroon (Cameroun)", "cm", "237"],
        ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
        ["Cape Verde (Kabu Verdi)", "cv", "238"],
        ["Caribbean Netherlands", "bq", "599", 1],
        ["Cayman Islands", "ky", "1345"],
        ["Central African Republic (R\xe9publique centrafricaine)", "cf", "236"],
        ["Chad (Tchad)", "td", "235"],
        ["Chile", "cl", "56"],
        ["China (\u4e2d\u56fd)", "cn", "86"],
        ["Christmas Island", "cx", "61", 2],
        ["Cocos (Keeling) Islands", "cc", "61", 1],
        ["Colombia", "co", "57"],
        ["Comoros (\u202b\u062c\u0632\u0631 \u0627\u0644\u0642\u0645\u0631\u202c\u200e)", "km", "269"],
        ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
        ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
        ["Cook Islands", "ck", "682"],
        ["Costa Rica", "cr", "506"],
        ["C\xf4te d\u2019Ivoire", "ci", "225"],
        ["Croatia (Hrvatska)", "hr", "385"],
        ["Cuba", "cu", "53"],
        ["Cura\xe7ao", "cw", "599", 0],
        ["Cyprus (\u039a\u03cd\u03c0\u03c1\u03bf\u03c2)", "cy", "357"],
        ["Czech Republic (\u010cesk\xe1 republika)", "cz", "420"],
        ["Denmark (Danmark)", "dk", "45"],
        ["Djibouti", "dj", "253"],
        ["Dominica", "dm", "1767"],
        ["Dominican Republic (Rep\xfablica Dominicana)", "do", "1", 2, ["809", "829", "849"]],
        ["Ecuador", "ec", "593"],
        ["Egypt (\u202b\u0645\u0635\u0631\u202c\u200e)", "eg", "20"],
        ["El Salvador", "sv", "503"],
        ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
        ["Eritrea", "er", "291"],
        ["Estonia (Eesti)", "ee", "372"],
        ["Ethiopia", "et", "251"],
        ["Falkland Islands (Islas Malvinas)", "fk", "500"],
        ["Faroe Islands (F\xf8royar)", "fo", "298"],
        ["Fiji", "fj", "679"],
        ["Finland (Suomi)", "fi", "358", 0],
        ["France", "fr", "33"],
        ["French Guiana (Guyane fran\xe7aise)", "gf", "594"],
        ["French Polynesia (Polyn\xe9sie fran\xe7aise)", "pf", "689"],
        ["Gabon", "ga", "241"],
        ["Gambia", "gm", "220"],
        ["Georgia (\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd)", "ge", "995"],
        ["Germany (Deutschland)", "de", "49"],
        ["Ghana (Gaana)", "gh", "233"],
        ["Gibraltar", "gi", "350"],
        ["Greece (\u0395\u03bb\u03bb\u03ac\u03b4\u03b1)", "gr", "30"],
        ["Greenland (Kalaallit Nunaat)", "gl", "299"],
        ["Grenada", "gd", "1473"],
        ["Guadeloupe", "gp", "590", 0],
        ["Guam", "gu", "1671"],
        ["Guatemala", "gt", "502"],
        ["Guernsey", "gg", "44", 1],
        ["Guinea (Guin\xe9e)", "gn", "224"],
        ["Guinea-Bissau (Guin\xe9 Bissau)", "gw", "245"],
        ["Guyana", "gy", "592"],
        ["Haiti", "ht", "509"],
        ["Honduras", "hn", "504"],
        ["Hong Kong (\u9999\u6e2f)", "hk", "852"],
        ["Hungary (Magyarorsz\xe1g)", "hu", "36"],
        ["Iceland (\xcdsland)", "is", "354"],
        ["India (\u092d\u093e\u0930\u0924)", "in", "91"],
        ["Indonesia", "id", "62"],
        ["Iran (\u202b\u0627\u06cc\u0631\u0627\u0646\u202c\u200e)", "ir", "98"],
        ["Iraq (\u202b\u0627\u0644\u0639\u0631\u0627\u0642\u202c\u200e)", "iq", "964"],
        ["Ireland", "ie", "353"],
        ["Isle of Man", "im", "44", 2],
        ["Israel (\u202b\u05d9\u05e9\u05e8\u05d0\u05dc\u202c\u200e)", "il", "972"],
        ["Italy (Italia)", "it", "39", 0],
        ["Jamaica", "jm", "1876"],
        ["Japan (\u65e5\u672c)", "jp", "81"],
        ["Jersey", "je", "44", 3],
        ["Jordan (\u202b\u0627\u0644\u0623\u0631\u062f\u0646\u202c\u200e)", "jo", "962"],
        ["Kazakhstan (\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d)", "kz", "7", 1],
        ["Kenya", "ke", "254"],
        ["Kiribati", "ki", "686"],
        ["Kosovo", "xk", "383"],
        ["Kuwait (\u202b\u0627\u0644\u0643\u0648\u064a\u062a\u202c\u200e)", "kw", "965"],
        ["Kyrgyzstan (\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d)", "kg", "996"],
        ["Laos (\u0ea5\u0eb2\u0ea7)", "la", "856"],
        ["Latvia (Latvija)", "lv", "371"],
        ["Lebanon (\u202b\u0644\u0628\u0646\u0627\u0646\u202c\u200e)", "lb", "961"],
        ["Lesotho", "ls", "266"],
        ["Liberia", "lr", "231"],
        ["Libya (\u202b\u0644\u064a\u0628\u064a\u0627\u202c\u200e)", "ly", "218"],
        ["Liechtenstein", "li", "423"],
        ["Lithuania (Lietuva)", "lt", "370"],
        ["Luxembourg", "lu", "352"],
        ["Macau (\u6fb3\u9580)", "mo", "853"],
        ["Macedonia (FYROM) (\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u0458\u0430)", "mk", "389"],
        ["Madagascar (Madagasikara)", "mg", "261"],
        ["Malawi", "mw", "265"],
        ["Malaysia", "my", "60"],
        ["Maldives", "mv", "960"],
        ["Mali", "ml", "223"],
        ["Malta", "mt", "356"],
        ["Marshall Islands", "mh", "692"],
        ["Martinique", "mq", "596"],
        ["Mauritania (\u202b\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627\u202c\u200e)", "mr", "222"],
        ["Mauritius (Moris)", "mu", "230"],
        ["Mayotte", "yt", "262", 1],
        ["Mexico (M\xe9xico)", "mx", "52"],
        ["Micronesia", "fm", "691"],
        ["Moldova (Republica Moldova)", "md", "373"],
        ["Monaco", "mc", "377"],
        ["Mongolia (\u041c\u043e\u043d\u0433\u043e\u043b)", "mn", "976"],
        ["Montenegro (Crna Gora)", "me", "382"],
        ["Montserrat", "ms", "1664"],
        ["Morocco (\u202b\u0627\u0644\u0645\u063a\u0631\u0628\u202c\u200e)", "ma", "212", 0],
        ["Mozambique (Mo\xe7ambique)", "mz", "258"],
        ["Myanmar (Burma) (\u1019\u103c\u1014\u103a\u1019\u102c)", "mm", "95"],
        ["Namibia (Namibi\xeb)", "na", "264"],
        ["Nauru", "nr", "674"],
        ["Nepal (\u0928\u0947\u092a\u093e\u0932)", "np", "977"],
        ["Netherlands (Nederland)", "nl", "31"],
        ["New Caledonia (Nouvelle-Cal\xe9donie)", "nc", "687"],
        ["New Zealand", "nz", "64"],
        ["Nicaragua", "ni", "505"],
        ["Niger (Nijar)", "ne", "227"],
        ["Nigeria", "ng", "234"],
        ["Niue", "nu", "683"],
        ["Norfolk Island", "nf", "672"],
        ["North Korea (\uc870\uc120 \ubbfc\uc8fc\uc8fc\uc758 \uc778\ubbfc \uacf5\ud654\uad6d)", "kp", "850"],
        ["Northern Mariana Islands", "mp", "1670"],
        ["Norway (Norge)", "no", "47", 0],
        ["Oman (\u202b\u0639\u064f\u0645\u0627\u0646\u202c\u200e)", "om", "968"],
        ["Pakistan (\u202b\u067e\u0627\u06a9\u0633\u062a\u0627\u0646\u202c\u200e)", "pk", "92"],
        ["Palau", "pw", "680"],
        ["Palestine (\u202b\u0641\u0644\u0633\u0637\u064a\u0646\u202c\u200e)", "ps", "970"],
        ["Panama (Panam\xe1)", "pa", "507"],
        ["Papua New Guinea", "pg", "675"],
        ["Paraguay", "py", "595"],
        ["Peru (Per\xfa)", "pe", "51"],
        ["Philippines", "ph", "63"],
        ["Poland (Polska)", "pl", "48"],
        ["Portugal", "pt", "351"],
        ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
        ["Qatar (\u202b\u0642\u0637\u0631\u202c\u200e)", "qa", "974"],
        ["R\xe9union (La R\xe9union)", "re", "262", 0],
        ["Romania (Rom\xe2nia)", "ro", "40"],
        ["Russia (\u0420\u043e\u0441\u0441\u0438\u044f)", "ru", "7", 0],
        ["Rwanda", "rw", "250"],
        ["Saint Barth\xe9lemy (Saint-Barth\xe9lemy)", "bl", "590", 1],
        ["Saint Helena", "sh", "290"],
        ["Saint Kitts and Nevis", "kn", "1869"],
        ["Saint Lucia", "lc", "1758"],
        ["Saint Martin (Saint-Martin (partie fran\xe7aise))", "mf", "590", 2],
        ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
        ["Saint Vincent and the Grenadines", "vc", "1784"],
        ["Samoa", "ws", "685"],
        ["San Marino", "sm", "378"],
        ["S\xe3o Tom\xe9 and Pr\xedncipe (S\xe3o Tom\xe9 e Pr\xedncipe)", "st", "239"],
        ["Saudi Arabia (\u202b\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629\u202c\u200e)", "sa", "966"],
        ["Senegal (S\xe9n\xe9gal)", "sn", "221"],
        ["Serbia (\u0421\u0440\u0431\u0438\u0458\u0430)", "rs", "381"],
        ["Seychelles", "sc", "248"],
        ["Sierra Leone", "sl", "232"],
        ["Singapore", "sg", "65"],
        ["Sint Maarten", "sx", "1721"],
        ["Slovakia (Slovensko)", "sk", "421"],
        ["Slovenia (Slovenija)", "si", "386"],
        ["Solomon Islands", "sb", "677"],
        ["Somalia (Soomaaliya)", "so", "252"],
        ["South Africa", "za", "27"],
        ["South Korea (\ub300\ud55c\ubbfc\uad6d)", "kr", "82"],
        ["South Sudan (\u202b\u062c\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062f\u0627\u0646\u202c\u200e)", "ss", "211"],
        ["Spain (Espa\xf1a)", "es", "34"],
        ["Sri Lanka (\u0dc1\u0dca\u200d\u0dbb\u0dd3 \u0dbd\u0d82\u0d9a\u0dcf\u0dc0)", "lk", "94"],
        ["Sudan (\u202b\u0627\u0644\u0633\u0648\u062f\u0627\u0646\u202c\u200e)", "sd", "249"],
        ["Suriname", "sr", "597"],
        ["Svalbard and Jan Mayen", "sj", "47", 1],
        ["Swaziland", "sz", "268"],
        ["Sweden (Sverige)", "se", "46"],
        ["Switzerland (Schweiz)", "ch", "41"],
        ["Syria (\u202b\u0633\u0648\u0631\u064a\u0627\u202c\u200e)", "sy", "963"],
        ["Taiwan (\u53f0\u7063)", "tw", "886"],
        ["Tajikistan", "tj", "992"],
        ["Tanzania", "tz", "255"],
        ["Thailand (\u0e44\u0e17\u0e22)", "th", "66"],
        ["Timor-Leste", "tl", "670"],
        ["Togo", "tg", "228"],
        ["Tokelau", "tk", "690"],
        ["Tonga", "to", "676"],
        ["Trinidad and Tobago", "tt", "1868"],
        ["Tunisia (\u202b\u062a\u0648\u0646\u0633\u202c\u200e)", "tn", "216"],
        ["Turkey (T\xfcrkiye)", "tr", "90"],
        ["Turkmenistan", "tm", "993"],
        ["Turks and Caicos Islands", "tc", "1649"],
        ["Tuvalu", "tv", "688"],
        ["U.S. Virgin Islands", "vi", "1340"],
        ["Uganda", "ug", "256"],
        ["Ukraine (\u0423\u043a\u0440\u0430\u0457\u043d\u0430)", "ua", "380"],
        ["United Arab Emirates (\u202b\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629\u202c\u200e)", "ae", "971"],
        ["United Kingdom", "gb", "44", 0],
        ["United States", "us", "1", 0],
        ["Uruguay", "uy", "598"],
        ["Uzbekistan (O\u02bbzbekiston)", "uz", "998"],
        ["Vanuatu", "vu", "678"],
        ["Vatican City (Citt\xe0 del Vaticano)", "va", "39", 1],
        ["Venezuela", "ve", "58"],
        ["Vietnam (Vi\u1ec7t Nam)", "vn", "84"],
        ["Wallis and Futuna", "wf", "681"],
        ["Western Sahara (\u202b\u0627\u0644\u0635\u062d\u0631\u0627\u0621 \u0627\u0644\u063a\u0631\u0628\u064a\u0629\u202c\u200e)", "eh", "212", 1],
        ["Yemen (\u202b\u0627\u0644\u064a\u0645\u0646\u202c\u200e)", "ye", "967"],
        ["Zambia", "zm", "260"],
        ["Zimbabwe", "zw", "263"],
        ["\xc5land Islands", "ax", "358", 1]
      ], i = 0; i < allCountries.length; i++) {
      var c = allCountries[i];
      allCountries[i] = {
        name: c[0],
        iso2: c[1],
        dialCode: c[2],
        priority: c[3] || 0,
        areaCodes: c[4] || null
      }
    }
  }), ! function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.wdtLoading = t()
  }(this, function() {
    function e(e, t) {
      var r = "string" == typeof e ? e : n(e);
      return r.indexOf(" " + t + " ") >= 0
    }

    function t(t, r) {
      var a = n(t),
        s = a + r;
      e(a, r) || (t.className = s.substring(1))
    }

    function r(t, r) {
      var a, s = n(t);
      e(t, r) && (a = s.replace(" " + r + " ", " "), t.className = a.substring(1, a.length - 1))
    }

    function n(e) {
      return (" " + (e && e.className || "") + " ").replace(/\s+/gi, " ")
    }

    function a(e) {
      e && e.parentNode && e.parentNode.removeChild(e)
    }
    var s = {};
    s.defaults = {
      category: "default",
      speed: 2e3
    }, s.start = function(e) {
      this.options = o(s.defaults, e), this.wdtLoadingScreen = document.querySelector(".wdt-loading-screen");
      for (var t = document.querySelectorAll(".wdt-loading-phrase-category"), r = 0; r < t.length; r++) i(t[r], {
        display: "none"
      });
      this.wdtPhraseActiveCat = document.querySelector('.wdt-loading-phrase-category[data-category="' + this.options.category + '"]'), i(this.wdtPhraseActiveCat, {
        display: "block"
      }), this.activePhrases = this.wdtPhraseActiveCat.querySelectorAll(".wdt-loading-phrase"), this.activePhrasesCount = this.activePhrases.length, this.activePhrasesCount < 5 && console.warn("wdtLoading -->", "Add more phrase for better spin animation!");
      for (var n = [], r = 0; r < this.activePhrases.length; r++) n.push(this.activePhrases[r]), a(this.activePhrases[r]);
      n = s.shuffle(n);
      for (var r = 0; r < n.length; r++) this.wdtPhraseActiveCat.appendChild(n[r]);
      return i(this.wdtLoadingScreen, {
        display: "block"
      }), s.spin(), this
    }, s.spin = function() {
      var e = this;
      this.phraseHeight = e.wdtPhraseActiveCat.querySelector(".wdt-loading-phrase").scrollHeight, e.currentIndex = 0, e.currentTransform = 0, e.spinInternal = setInterval(function() {
        if (e.activePhrases = e.wdtPhraseActiveCat.querySelectorAll(".wdt-loading-phrase"), t(e.activePhrases[e.currentIndex], "wdt-checked"), e.currentIndex++, e.currentTransform = e.currentTransform - e.phraseHeight, i(e.wdtPhraseActiveCat, {
            transform: "translateY(" + e.currentTransform + "px)"
          }), e.currentIndex > 1) {
          var n = e.activePhrases[e.currentIndex - 2],
            a = n.cloneNode(!0);
          r(a, "wdt-checked"), t(a, "wdt-cloned-phrase"), a.style.transform = "", e.wdtPhraseActiveCat.appendChild(a)
        }
      }, this.options.speed)
    }, s.done = function() {
      this.spinInternal && clearInterval(this.spinInternal), i(this.wdtLoadingScreen, {
        display: "none"
      });
      for (var e = document.querySelectorAll(".wdt-cloned-phrase"), t = document.querySelectorAll(".wdt-loading-phrase"), n = 0; n < t.length; n++) r(t[n], "wdt-checked");
      this.wdtPhraseActiveCat.style.transform = "";
      for (var n = 0; n < e.length; n++) a(e[n]);
      clearInterval(this.spinInternal)
    }, s.shuffle = function(e) {
      for (var t, r, n = e.length; n;) r = Math.floor(Math.random() * n--), t = e[n], e[n] = e[r], e[r] = t;
      return e
    };
    var o = function() {
        var e = {},
          t = !1,
          r = 0,
          n = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], r++);
        for (var a = function(r) {
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = t && "[object Object]" === Object.prototype.toString.call(r[n]) ? o(!0, e[n], r[n]) : r[n])
          }; n > r; r++) {
          var s = arguments[r];
          a(s)
        }
        return e
      },
      i = function() {
        function e(e) {
          return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(e, t) {
            return t.toUpperCase()
          })
        }

        function t(e) {
          var t = document.body.style;
          if (e in t) return e;
          for (var r, n = a.length, s = e.charAt(0).toUpperCase() + e.slice(1); n--;)
            if (r = a[n] + s, r in t) return r;
          return e
        }

        function r(r) {
          return r = e(r), s[r] || (s[r] = t(r))
        }

        function n(e, t, n) {
          t = r(t), e.style[t] = n
        }
        var a = ["Webkit", "O", "Moz", "ms"],
          s = {};
        return function(e, t) {
          var r, a, s = arguments;
          if (2 == s.length)
            for (r in t) a = t[r], void 0 !== a && t.hasOwnProperty(r) && n(e, r, a);
          else n(e, s[1], s[2])
        }
      }();
    return s
  }),
  function(window, $) {
    $.fn.delayedVideoLoop = function() {
      function onVideoReady() {
        this[0].play()
      }

      function onVideoEnded() {
        var $video = this,
          tId = setTimeout(function() {
            $video.off("canplay"), $video[0].currentTime = 0, $video[0].paused && $video[0].play()
          }, Number($video.data("data-delayed-loop-timeout")) || 500);
        this.data("timeout-id", tId)
      }
      if ($(this).size()) return $(this).each(function() {
        var $video = $(this);
        return $(this).data("dvl", {
          attach: function() {
            $video[0].currentTime = 0, 4 !== $video[0].readyState ? ($video.on("canplay", $.proxy(onVideoReady, $video)), $video[0].load()) : onVideoReady.apply($video), $video.on("ended", $.proxy(onVideoEnded, $video))
          },
          detach: function() {
            $video.data("timeout-id") && clearInterval($video.data("timeout-id")), $video.off("ended"), $video.off("canplay")
          }
        }), $(this).data("dvl")
      }), this
    }
  }(window, jQuery), $(document).ready(function() {
    $("header .preview-type").html(document.body.offsetWidth <= 1e3 ? '<img class="pipeline-mobile" src="/assets/product/offer_previewer/pipeline_mobile.jpg"/>' : $("#desktop_offer_previewer_template").text()), document.body.offsetWidth <= 768 && $(".perfect-workflow .tab-content").remove()
  });
var DPR = window.devicePixelRatio || 1;
$.extend($.lazyLoadXT, {
    edgeY: $(window).height() / 2,
    visibleOnly: !1
  }), $.lazyLoadXT.srcAttr = "data-src" + (DPR > 1.5 ? "2x" : ""), $.lazyLoadXT.oninit.addClass = "lazy-load", $(".homepage .header-content .get_started_button input").focus(), $(document).ready(function() {
    function findSelectedTab($tabs) {
      var $availableTabs = $tabs,
        $selectedTab = $availableTabs.filter(function(i, el) {
          return $(el).hasClass("active")
        }).toArray().pop();
      return $.inArray($selectedTab, $availableTabs)
    }
    var activeElement, setTimeoutConst, isClicked = !1,
      delay = 200,
      setActiveContent = function($anchor) {
        $anchor.tab("show"); {
          var selector = $anchor.data("selector"),
            fullSelector = ".bg-item-" + selector;
          $("#quotes-rotator")
        }
        activeElement = selector;
        var $banner = $(fullSelector);
        $(".bg-item").removeClass("active"), $banner.addClass("active")
      };
    $(".section-tabs > li").click(function() {
      isClicked = !0;
      var $anchor = $(this).find("a");
      activeElement !== $anchor.data("selector") && setActiveContent($(this).find("a"))
    }), $(".section-tabs > li").on("mouseover", function() {
      var $anchor = $(this).find("a");
      isClicked || activeElement === $anchor.data("selector") || (setTimeoutConst = setTimeout(function() {
        setActiveContent($anchor)
      }.bind(this), delay))
    }), $(".section-tabs > li").on("mouseout", function() {
      clearTimeout(setTimeoutConst)
    });
    var tabChange = function() {
        var tabs = $(".quotes-rotator .nav-tabs > li"),
          active = tabs.filter(".active"),
          next = active.next("li").length ? active.next("li").find("a") : tabs.filter(":first-child").find("a");
        setActiveContent(next)
      },
      tabCycle = setInterval(tabChange, 5e3);
    if ($(this).find("#quotes-rotator .quote-btn").mouseenter(function(e) {
        e.preventDefault(), clearInterval(tabCycle), tabCycle = null, setTimeout(function() {
          tabCycle || (tabCycle = setInterval(tabChange, 5e3))
        }, 15e3)
      }), $(window).load(function() {
        $(".header-visual").addClass("visual-loaded")
      }), $(".dropdown-toggle").dropdown(), $("body").tooltip({
        selector: "[data-toggle=tooltip]"
      }), $(document).on("click", ".side-menu-toggle .dropdown-menu", function(e) {
        e.stopPropagation()
      }), $(".side-menu-toggle").size() && ($(".side-menu-toggle").on("shown.bs.dropdown", function() {
        $('.side-menu-container input[name="email"]').focus()
      }), $(".side-menu-toggle").on("show.bs.dropdown", function() {
        $("body").addClass("scroll-disabled"), $(".side-menu-toggle-backdrop").addClass("active")
      }), $(".side-menu-toggle").on("hide.bs.dropdown", function() {
        $("body").removeClass("scroll-disabled"), $(".side-menu-toggle-backdrop").removeClass("active")
      })), $(".side-menu-vertical").perfectScrollbar(), $(".companies-list-scroll").perfectScrollbar(), $(".wow").size()) {
      var wow = new WOW({
        mobile: !1
      });
      wow.init()
    }
    $(".carousel").size() && ($(".carousel.carousel-1").carousel({
      interval: 3e3
    }), $(".carousel.carousel-2").carousel({
      interval: 3300
    }), $(".carousel.carousel-3").carousel({
      interval: 3600
    })), $(".tab-content").swiperight(function() {
      var $tab = $(".section-tabs .active").prev();
      $tab.length > 0 && $tab.find("a").tab("show")
    }), $(".tab-content").swipeleft(function() {
      var $tab = $(".section-tabs .active").next();
      $tab.length > 0 && $tab.find("a").tab("show")
    }), $(".venobox").size() && $(".venobox").venobox({
      numeratio: !0,
      infinigall: !0
    }), $(".perfect-workflow .btn-next").click(function() {
      var $tabs = $(".perfect-workflow .nav-tabs li.clickable"),
        currentTabIndex = findSelectedTab($tabs);
      currentTabIndex < $tabs.size() && $($tabs[currentTabIndex + 1]).find("a").trigger("click")
    }), $(".perfect-workflow .btn-previous").click(function() {
      var $tabs = $(".perfect-workflow .nav-tabs li.clickable"),
        currentTabIndex = findSelectedTab($tabs);
      currentTabIndex >= 0 && $($tabs[currentTabIndex - 1]).find("a").trigger("click")
    }), $(".quotes-rotator .btn-next").click(function() {
      $(".quotes-rotator .nav-tabs > .active").next("li").find("a").trigger("click")
    }), $(".quotes-rotator .btn-previous").click(function() {
      $(".quotes-rotator .nav-tabs > .active").prev("li").find("a").trigger("click")
    }), $(".header-visual .btn-next").click(function() {
      $(".careers-carousel-nav > .active").next("li").find("a").trigger("click")
    }), $(".header-visual .btn-previous").click(function() {
      $(".careers-carousel-nav > .active").prev("li").find("a").trigger("click")
    });
    var $firstTabsVideos = $(".tab-content .tab-pane.active video");
    $firstTabsVideos.on("lazyshow", function() {
      var $video = $(this).delayedVideoLoop();
      $video.data("dvl") && $video.data("dvl").attach()
    }), $("body").delegate('[data-toggle="tab"]', "shown.bs.tab", handleTabShown), $("body").delegate('[data-toggle="tab"]', "hidden.bs.tab", handleTabHidden)
  }), $(document).ready(function() {
    function hasScrolled() {
      var st = $(this).scrollTop();
      Math.abs(lastScrollTop - st) <= delta || (st > lastScrollTop && st > navbarHeight ? ($("#navbar-main").removeClass("nav-visible").addClass("nav-hidden"), $(".workflow-steps-container").removeClass("workflow-visible").addClass("workflow-hidden"), $(".navbar-workflow-menu").removeClass("open")) : st + $(window).height() < $(document).height() && ($("#navbar-main").removeClass("nav-hidden").addClass("nav-visible"), $(".workflow-steps-container").removeClass("workflow-hidden").addClass("workflow-visible")), lastScrollTop = st)
    }
    var didScroll, lastScrollTop = 0,
      delta = 5,
      navbarHeight = $("header").outerHeight();
    $(window).scroll(function() {
      didScroll = !0
    }), setInterval(function() {
      didScroll && (hasScrolled(), didScroll = !1)
    }, 250);
    var NAV_INPUT_VISIBLE = !1,
      NAV_INPUT_VISIBLE_EDGE = 990;
    $(window).scroll(function() {
      $(window).scrollTop() > NAV_INPUT_VISIBLE_EDGE && !NAV_INPUT_VISIBLE ? ($("#navbar-main").removeClass("inside-header").addClass("outside-header"), NAV_INPUT_VISIBLE = !0, setTimeout(function() {
        $("#navbar-main .special-input input").focus()
      }, 500)) : $(window).scrollTop() < NAV_INPUT_VISIBLE_EDGE && NAV_INPUT_VISIBLE && ($("#navbar-main").removeClass("outside-header").addClass("inside-header"), NAV_INPUT_VISIBLE = !1)
    });
    var WORKFLOW_STICKED = !1,
      WORKFLOW_STICKED_EDGE = 210;
    $(".workflow_subpages").size() && $(window).scroll(function() {
      $(window).scrollTop() > WORKFLOW_STICKED_EDGE && !WORKFLOW_STICKED ? ($(".workflow_subpages .workflow-steps-container").removeClass("workflow-static").addClass("workflow-sticked"), $(".workflow_subpages #navbar-main").addClass("workflow-in-navbar"), WORKFLOW_STICKED = !0) : $(window).scrollTop() < WORKFLOW_STICKED_EDGE && WORKFLOW_STICKED && ($(".workflow_subpages .workflow-steps-container").removeClass("workflow-sticked").addClass("workflow-static"), $(".workflow_subpages #navbar-main").removeClass("workflow-in-navbar"), WORKFLOW_STICKED = !1)
    }), $(function() {
      var header = $("header .navbar-default");
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        scroll >= 5 ? header.removeClass("at-top").addClass("not-at-top") : header.removeClass("not-at-top").addClass("at-top")
      })
    })
  }), $(".customers-page").length > 0 && (setRandomClass(), setInterval(function() {
    setRandomClass()
  }, 1500)),
  function(window, $) {
    function hookStickybar() {
      var stickySidebar = $menu.offset().top + (isAllFeaturesPage ? 0 : 100);
      $(window).scroll(function() {
        $(window).scrollTop() > stickySidebar ? ($(".menu-stickable").addClass("affix"), $(".menu-stickable").removeClass("outside")) : $(".menu-stickable").removeClass("affix")
      });
      var stickyEndPoint = $(".stickable-end-point").offset().top;
      $(window).scroll(function() {
        $(window).scrollTop() > stickyEndPoint ? $(".menu-stickable").addClass("outside") : $(".menu-stickable").removeClass("outside")
      })
    }
    var $menu = $(".menu-stickable"),
      isAllFeaturesPage = $("body").hasClass("all-features");
    $menu.size() && ($("body.all-features").scrollspy({
      target: ".menu-stickable"
    }), $("body.pricing").scrollspy({
      target: ".menu-stickable"
    }), $(window).on("activate.bs.scrollspy", function(e) {
      history.replaceState({}, "", $("a[href^='#']", e.target).attr("href"))
    }), $(document).ready(hookStickybar), $(".nav a[href^='#']").on("click", function(e) {
      e.preventDefault();
      var hash = this.hash;
      $("html, body").animate({
        scrollTop: $(this.hash).offset().top
      }, 300, function() {
        window.location.hash = hash
      })
    }))
  }(window, jQuery), $(document).ready(function() {
    if ($(window).width() < 1e3 || $(window).height() < 1e3) {
      var adjustment;
      $("ul.sortable-list").sortable({
        group: "sortable-list",
        pullPlaceholder: !1,
        onDrop: function($item, container, _super) {
          var $clonedItem = $("<li/>").css({
            height: 0
          });
          $item.before($clonedItem), $clonedItem.animate({
            height: $item.height()
          }), $(".offer-previewer .nav-tabs .pulse-dot").removeClass("hidden"), $item.animate($clonedItem.position(), function() {
            $clonedItem.detach(), _super($item, container)
          })
        },
        onDragStart: function($item, container, _super) {
          var offset = $item.offset(),
            pointer = container.rootGroup.pointer;
          adjustment = {
            left: pointer.left - offset.left,
            top: pointer.top - offset.top
          }, _super($item, container)
        },
        onDrag: function($item, position) {
          $(".sortable-item .pulse-dot").addClass("hidden"), $(".sortable-list .tooltip").addClass("hidden"), $item.css({
            left: position.left - adjustment.left,
            top: position.top - adjustment.top
          })
        }
      }), $(".offer-previewer .nav-tabs li").click(function() {
        $(".offer-previewer .nav-tabs .pulse-dot").addClass("hidden"), $(".offer-previewer .try-me").addClass("hidden")
      })
    }
  }),
  function(window, $) {
    function setCurrency(currency) {
      "USD" == currency ? ($(".currency.usd, .monthly.usd").show("fast"), $(".currency.eur, .monthly.eur").hide("fast")) : ($(".currency.usd, .monthly.usd").hide("fast"), $(".currency.eur, .monthly.eur").show("fast"))
    }
    if ($(".pages-controller").size()) {
      var countryCodeURL = "https://api.ipdata.co/country_code?api-key=94c7fbfbf4ef81024167b475c71b479f80b6a6d02c84ff94c738e00a";
      $(".pages-controller .pricing, .pages-controller .lp-enterprise-plan").size() && $.get(countryCodeURL).success(function(countryCode) {
        var currency = -1 !== ["US", "CA", "MX"].indexOf(countryCode) ? "USD" : "EUR";
        setCurrency(currency)
      }).error(function() {
        var currency = -1 !== jstz.determine().name().indexOf("Europe") ? "EUR" : "USD";
        setCurrency(currency)
      })
    }
  }(window, jQuery), $(document).ready(function() {
    $(".companies-list li").each(function() {
      $(this).attr("data-search", $(this).text().toLowerCase())
    }), $("input#search").on("keyup", function() {
      var search = $(this).val().toLowerCase();
      $(".companies-list li").each(function() {
        $(this).filter("[data-search *= " + search + "]").length > 0 || search.length < 1 ? $(this).show() : $(this).hide()
      })
    })
  }),
  function() {
    $(function() {
      var countryCodeURL, phoneInput, setPhoneinput;
      return countryCodeURL = "https://api.ipdata.co/country_code?api-key=94c7fbfbf4ef81024167b475c71b479f80b6a6d02c84ff94c738e00a", $("a[rel~=popover], .has-popover").popover(), $("a[rel~=tooltip], .has-tooltip").tooltip(), $("nav.navbar li.careers-site a.btn").click(function() {
        return "undefined" != typeof recruitee && null !== recruitee && null != recruitee.analytics ? recruitee.analytics.track("Career site clicked") : void 0
      }), $("form#new_company").submit(function() {
        return $(this).find(":submit").addClass("loading").prop("disabled", !0)
      }), setTimeout(function() {
        return $(".alert").fadeTo(500, 0).slideUp(500, function() {
          return $(this).remove()
        })
      }, 15e3), $("#login .company_subdomain .form-control").focus(function() {
        return $(this).closest(".input-container").addClass("focus")
      }).blur(function() {
        return $(this).closest(".input-container").removeClass("focus")
      }), $("#login").length && Cookies.set("anchor", window.location.hash), $("#login form").length > 0 && ("reportValidity" in document.createElement("form") || $("form").attr("novalidate", "novalidate")), ($("#new_demo_form").length || $("#new_contact_form").length || $("#new_company").length) && $(".radio_buttons label.radio").on("click", function() {
        return $(this).parents(".radio_buttons").find("label.radio").removeClass("selected"), $(this).addClass("selected")
      }), $("#new_company").length && $.get(countryCodeURL).success(function(countryCode) {
        return $("input#company_country_code").val(countryCode)
      }), $("input[type=tel]").length ? (setPhoneinput = function(countryCode) {
        return $("input[type=tel]").intlTelInput({
          nationalMode: !1,
          initialCountry: countryCode,
          preferredCountries: ["nl", "gb", "de", "us"]
        })
      }, $.get(countryCodeURL).success(function(countryCode) {
        return setPhoneinput(countryCode)
      }).error(function() {
        return setPhoneinput("nl")
      }), phoneInput = $("input[type=tel]"), phoneInput[0].validity.valid || phoneInput[0].setCustomValidity(phoneInput[0].validationMessage), phoneInput.on("keyup", function(event) {
        return event.target.setCustomValidity(phoneInput.val().length > 3 ? "" : event.target.validationMessage)
      })) : void 0
    })
  }.call(this),
  function() {}.call(this);
