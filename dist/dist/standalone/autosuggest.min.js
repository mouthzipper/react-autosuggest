!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('React')))
    : 'function' == typeof define && define.amd
    ? define(['React'], t)
    : 'object' == typeof exports
    ? (exports.Autosuggest = t(require('React')))
    : (e.Autosuggest = t(e.React));
})(window, function (e) {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 5))
    );
  })([
    function (t, n) {
      t.exports = e;
    },
    function (e, t, n) {
      e.exports = n(6)();
    },
    function (e, t, n) {
      'use strict';
      e.exports = function (e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        var n = e.length;
        if (t.length !== n) return !1;
        for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      };
    },
    function (e, t, n) {
      'use strict';
      var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var u, s = e[Symbol.iterator]();
                !(r = (u = s.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                !r && s.return && s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance'
        );
      };
      e.exports = function (e) {
        var t = e.data,
          n = e.multiSection;
        function o(e) {
          var o = r(e, 2),
            i = o[0],
            u = o[1];
          return n
            ? null === u || u === t[i] - 1
              ? null ===
                (i = (function (e) {
                  for (null === e ? (e = 0) : e++; e < t.length && 0 === t[e]; )
                    e++;
                  return e === t.length ? null : e;
                })(i))
                ? [null, null]
                : [i, 0]
              : [i, u + 1]
            : 0 === t || u === t - 1
            ? [null, null]
            : null === u
            ? [null, 0]
            : [null, u + 1];
        }
        return {
          next: o,
          prev: function (e) {
            var o = r(e, 2),
              i = o[0],
              u = o[1];
            return n
              ? null === u || 0 === u
                ? null ===
                  (i = (function (e) {
                    for (
                      null === e ? (e = t.length - 1) : e--;
                      e >= 0 && 0 === t[e];

                    )
                      e--;
                    return -1 === e ? null : e;
                  })(i))
                  ? [null, null]
                  : [i, t[i] - 1]
                : [i, u - 1]
              : 0 === t || 0 === u
              ? [null, null]
              : null === u
              ? [null, t - 1]
              : [null, u - 1];
          },
          isLast: function (e) {
            return null === o(e)[1];
          },
        };
      };
    },
    function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var u, s = e[Symbol.iterator]();
                !(r = (u = s.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                !r && s.return && s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance'
        );
      };
      function o(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
        return Array.from(e);
      }
      var i,
        u = n(8),
        s = (i = u) && i.__esModule ? i : { default: i },
        c = function (e) {
          return e;
        };
      (t.default = function (e) {
        var t = Array.isArray(e) && 2 === e.length ? e : [e, null],
          n = r(t, 2),
          i = n[0],
          u = n[1];
        return function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          var a = n
            .map(function (e) {
              return i[e];
            })
            .filter(c);
          return 'string' == typeof a[0] || 'function' == typeof u
            ? { key: e, className: u ? u.apply(void 0, o(a)) : a.join(' ') }
            : { key: e, style: s.default.apply(void 0, [{}].concat(o(a))) };
        };
      }),
        (e.exports = t.default);
    },
    function (e, t, n) {
      e.exports = n(9).default;
    },
    function (e, t, n) {
      'use strict';
      var r = n(7);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, n, o, i, u) {
            if (u !== r) {
              var s = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((s.name = 'Invariant Violation'), s);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: o,
          };
          return (n.PropTypes = n), n;
        });
    },
    function (e, t, n) {
      'use strict';
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    function (e, t, n) {
      'use strict';
      var r = Object.prototype.propertyIsEnumerable;
      function o(e) {
        if (null == e)
          throw new TypeError(
            'Object.assign cannot be called with null or undefined'
          );
        return Object(e);
      }
      function i(e) {
        var t = Object.getOwnPropertyNames(e);
        return (
          Object.getOwnPropertySymbols &&
            (t = t.concat(Object.getOwnPropertySymbols(e))),
          t.filter(function (t) {
            return r.call(e, t);
          })
        );
      }
      e.exports =
        Object.assign ||
        function (e, t) {
          for (var n, r, u = o(e), s = 1; s < arguments.length; s++) {
            (n = arguments[s]), (r = i(Object(n)));
            for (var c = 0; c < r.length; c++) u[r[c]] = n[r[c]];
          }
          return u;
        };
    },
    function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return be;
        });
      var r = n(0),
        o = n.n(r),
        i = (n(1), n(2)),
        u = n.n(i),
        s = n(3),
        c = n.n(s),
        a = n(4),
        l = n.n(a);
      function g(e) {
        return (g =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function f(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        if (e === t) return !1;
        var r = Object.keys(e),
          o = Object.keys(t);
        if (r.length !== o.length) return !0;
        var i,
          u,
          s = {};
        for (i = 0, u = n.length; i < u; i++) s[n[i]] = !0;
        for (i = 0, u = r.length; i < u; i++) {
          var c = r[i],
            a = e[c],
            l = t[c];
          if (a !== l) {
            if (
              !s[c] ||
              null === a ||
              null === l ||
              'object' !== g(a) ||
              'object' !== g(l)
            )
              return !0;
            var f = Object.keys(a),
              p = Object.keys(l);
            if (f.length !== p.length) return !0;
            for (var h = 0, d = f.length; h < d; h++) {
              var y = f[h];
              if (a[y] !== l[y]) return !0;
            }
          }
        }
        return !1;
      }
      function p(e) {
        return (p =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function h(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function m(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = b(e);
          if (t) {
            var o = b(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return v(this, n);
        };
      }
      function v(e, t) {
        return !t || ('object' !== p(t) && 'function' != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var S = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && y(e, t);
        })(u, e);
        var t,
          n,
          r,
          i = m(u);
        function u() {
          return h(this, u), i.apply(this, arguments);
        }
        return (
          (t = u),
          (n = [
            {
              key: 'shouldComponentUpdate',
              value: function (e) {
                return f(e, this.props);
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.section,
                  n = e.renderSectionTitle,
                  r = e.theme,
                  i = e.sectionKeyPrefix,
                  u = n(t);
                return u
                  ? o.a.createElement(
                      'div',
                      r(''.concat(i, 'title'), 'sectionTitle'),
                      u
                    )
                  : null;
              },
            },
          ]) && d(t.prototype, n),
          r && d(t, r),
          u
        );
      })(r.Component);
      function O(e) {
        return (O =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function I() {
        return (I =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function j(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function P(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function x(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function _(e, t) {
        return (_ =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function C(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = E(e);
          if (t) {
            var o = E(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return k(this, n);
        };
      }
      function k(e, t) {
        return !t || ('object' !== O(t) && 'function' != typeof t) ? D(e) : t;
      }
      function D(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function E(e) {
        return (E = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function R(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      S.propTypes = {};
      var T = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && _(e, t);
        })(u, e);
        var t,
          n,
          r,
          i = C(u);
        function u() {
          var e;
          P(this, u);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            R(
              D((e = i.call.apply(i, [this].concat(n)))),
              'storeItemReference',
              function (t) {
                null !== t && (e.item = t);
              }
            ),
            R(D(e), 'onMouseEnter', function (t) {
              var n = e.props,
                r = n.sectionIndex,
                o = n.itemIndex;
              e.props.onMouseEnter(t, { sectionIndex: r, itemIndex: o });
            }),
            R(D(e), 'onMouseLeave', function (t) {
              var n = e.props,
                r = n.sectionIndex,
                o = n.itemIndex;
              e.props.onMouseLeave(t, { sectionIndex: r, itemIndex: o });
            }),
            R(D(e), 'onMouseDown', function (t) {
              var n = e.props,
                r = n.sectionIndex,
                o = n.itemIndex;
              e.props.onMouseDown(t, { sectionIndex: r, itemIndex: o });
            }),
            R(D(e), 'onClick', function (t) {
              var n = e.props,
                r = n.sectionIndex,
                o = n.itemIndex;
              e.props.onClick(t, { sectionIndex: r, itemIndex: o });
            }),
            e
          );
        }
        return (
          (t = u),
          (n = [
            {
              key: 'shouldComponentUpdate',
              value: function (e) {
                return f(e, this.props, ['renderItemData']);
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.isHighlighted,
                  n = e.item,
                  r = e.renderItem,
                  i = e.renderItemData,
                  u = j(e, [
                    'isHighlighted',
                    'item',
                    'renderItem',
                    'renderItemData',
                  ]);
                return (
                  delete u.sectionIndex,
                  delete u.itemIndex,
                  'function' == typeof u.onMouseEnter &&
                    (u.onMouseEnter = this.onMouseEnter),
                  'function' == typeof u.onMouseLeave &&
                    (u.onMouseLeave = this.onMouseLeave),
                  'function' == typeof u.onMouseDown &&
                    (u.onMouseDown = this.onMouseDown),
                  'function' == typeof u.onClick && (u.onClick = this.onClick),
                  o.a.createElement(
                    'li',
                    I({ role: 'option' }, u, { ref: this.storeItemReference }),
                    r(
                      n,
                      (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? w(Object(n), !0).forEach(function (t) {
                                R(e, t, n[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n)
                              )
                            : w(Object(n)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                                );
                              });
                        }
                        return e;
                      })({ isHighlighted: t }, i)
                    )
                  )
                );
              },
            },
          ]) && x(t.prototype, n),
          r && x(t, r),
          u
        );
      })(r.Component);
      function M(e) {
        return (M =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function H() {
        return (H =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function F(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? F(Object(n), !0).forEach(function (t) {
                W(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : F(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function U(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function L(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function B(e, t) {
        return (B =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function q(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = N(e);
          if (t) {
            var o = N(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return V(this, n);
        };
      }
      function V(e, t) {
        return !t || ('object' !== M(t) && 'function' != typeof t) ? K(e) : t;
      }
      function K(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function N(e) {
        return (N = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function W(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      T.propTypes = {};
      var Q = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && B(e, t);
        })(u, e);
        var t,
          n,
          r,
          i = q(u);
        function u() {
          var e;
          U(this, u);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            W(
              K((e = i.call.apply(i, [this].concat(n)))),
              'storeHighlightedItemReference',
              function (t) {
                e.props.onHighlightedItemChange(null === t ? null : t.item);
              }
            ),
            e
          );
        }
        return (
          (t = u),
          (n = [
            {
              key: 'shouldComponentUpdate',
              value: function (e) {
                return f(e, this.props, ['itemProps']);
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.items,
                  r = t.itemProps,
                  i = t.renderItem,
                  u = t.renderItemData,
                  s = t.sectionIndex,
                  c = t.highlightedItemIndex,
                  a = t.getItemId,
                  l = t.theme,
                  g = t.keyPrefix,
                  f = null === s ? g : ''.concat(g, 'section-').concat(s, '-'),
                  p = 'function' == typeof r;
                return o.a.createElement(
                  'ul',
                  H(
                    { role: 'listbox' },
                    l(''.concat(f, 'items-list'), 'itemsList')
                  ),
                  n.map(function (t, n) {
                    var g = 0 === n,
                      h = n === c,
                      d = ''.concat(f, 'item-').concat(n),
                      y = p ? r({ sectionIndex: s, itemIndex: n }) : r,
                      m = A(
                        A(
                          { id: a(s, n), 'aria-selected': h },
                          l(d, 'item', g && 'itemFirst', h && 'itemHighlighted')
                        ),
                        y
                      );
                    return (
                      h && (m.ref = e.storeHighlightedItemReference),
                      o.a.createElement(
                        T,
                        H({}, m, {
                          sectionIndex: s,
                          isHighlighted: h,
                          itemIndex: n,
                          item: t,
                          renderItem: i,
                          renderItemData: u,
                        })
                      )
                    );
                  })
                );
              },
            },
          ]) && L(t.prototype, n),
          r && L(t, r),
          u
        );
      })(r.Component);
      function Y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Y(Object(n), !0).forEach(function (t) {
                oe(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Y(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function z(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var u, s = e[Symbol.iterator]();
                !(r = (u = s.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return G(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return G(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function G(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function J(e) {
        return (J =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function X(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Z(e, t) {
        return (Z =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function ee(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = re(e);
          if (t) {
            var o = re(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return te(this, n);
        };
      }
      function te(e, t) {
        return !t || ('object' !== J(t) && 'function' != typeof t) ? ne(e) : t;
      }
      function ne(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function re(e) {
        return (re = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function oe(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      W(Q, 'defaultProps', { sectionIndex: null }), (Q.propTypes = {});
      var ie = {},
        ue = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && Z(e, t);
          })(u, e);
          var t,
            n,
            r,
            i = ee(u);
          function u(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, u),
              oe(ne((t = i.call(this, e))), 'storeInputReference', function (
                e
              ) {
                null !== e && (t.input = e);
                var n = t.props.inputProps.ref;
                n &&
                  ('function' == typeof n
                    ? n(e)
                    : 'object' === J(n) &&
                      Object.prototype.hasOwnProperty.call(n, 'current') &&
                      (n.current = e));
              }),
              oe(ne(t), 'storeItemsContainerReference', function (e) {
                null !== e && (t.itemsContainer = e);
              }),
              oe(ne(t), 'onHighlightedItemChange', function (e) {
                t.highlightedItem = e;
              }),
              oe(ne(t), 'getItemId', function (e, n) {
                if (null === n) return null;
                var r = t.props.id,
                  o = null === e ? '' : 'section-'.concat(e);
                return 'react-autowhatever-'
                  .concat(r, '-')
                  .concat(o, '-item-')
                  .concat(n);
              }),
              oe(ne(t), 'onFocus', function (e) {
                var n = t.props.inputProps;
                t.setState({ isInputFocused: !0 }), n.onFocus && n.onFocus(e);
              }),
              oe(ne(t), 'onBlur', function (e) {
                var n = t.props.inputProps;
                t.setState({ isInputFocused: !1 }), n.onBlur && n.onBlur(e);
              }),
              oe(ne(t), 'onKeyDown', function (e) {
                var n = t.props,
                  r = n.inputProps,
                  o = n.highlightedSectionIndex,
                  i = n.highlightedItemIndex;
                switch (e.key) {
                  case 'ArrowDown':
                  case 'ArrowUp':
                    var u = 'ArrowDown' === e.key ? 'next' : 'prev',
                      s = z(t.sectionIterator[u]([o, i]), 2),
                      c = s[0],
                      a = s[1];
                    r.onKeyDown(e, {
                      newHighlightedSectionIndex: c,
                      newHighlightedItemIndex: a,
                    });
                    break;
                  default:
                    r.onKeyDown(e, {
                      highlightedSectionIndex: o,
                      highlightedItemIndex: i,
                    });
                }
              }),
              (t.highlightedItem = null),
              (t.state = { isInputFocused: !1 }),
              t.setSectionsItems(e),
              t.setSectionIterator(e),
              t.setTheme(e),
              t
            );
          }
          return (
            (t = u),
            (n = [
              {
                key: 'componentDidMount',
                value: function () {
                  this.ensureHighlightedItemIsVisible();
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  e.items !== this.props.items && this.setSectionsItems(e),
                    (e.items === this.props.items &&
                      e.multiSection === this.props.multiSection) ||
                      this.setSectionIterator(e),
                    e.theme !== this.props.theme && this.setTheme(e);
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.ensureHighlightedItemIsVisible();
                },
              },
              {
                key: 'setSectionsItems',
                value: function (e) {
                  e.multiSection &&
                    ((this.sectionsItems = e.items.map(function (t) {
                      return e.getSectionItems(t);
                    })),
                    (this.sectionsLengths = this.sectionsItems.map(function (
                      e
                    ) {
                      return e.length;
                    })),
                    (this.allSectionsAreEmpty = this.sectionsLengths.every(
                      function (e) {
                        return 0 === e;
                      }
                    )));
                },
              },
              {
                key: 'setSectionIterator',
                value: function (e) {
                  this.sectionIterator = c()({
                    multiSection: e.multiSection,
                    data: e.multiSection
                      ? this.sectionsLengths
                      : e.items.length,
                  });
                },
              },
              {
                key: 'setTheme',
                value: function (e) {
                  this.theme = l()(e.theme);
                },
              },
              {
                key: 'renderSections',
                value: function () {
                  var e = this;
                  if (this.allSectionsAreEmpty) return null;
                  var t = this.theme,
                    n = this.props,
                    r = n.id,
                    i = n.items,
                    u = n.renderItem,
                    s = n.renderItemData,
                    c = n.renderSectionTitle,
                    a = n.highlightedSectionIndex,
                    l = n.highlightedItemIndex,
                    g = n.itemProps;
                  return i.map(function (n, i) {
                    var f = 'react-autowhatever-'.concat(r, '-'),
                      p = ''.concat(f, 'section-').concat(i, '-'),
                      h = 0 === i;
                    return o.a.createElement(
                      'div',
                      t(
                        ''.concat(p, 'container'),
                        'sectionContainer',
                        h && 'sectionContainerFirst'
                      ),
                      o.a.createElement(S, {
                        section: n,
                        renderSectionTitle: c,
                        theme: t,
                        sectionKeyPrefix: p,
                      }),
                      o.a.createElement(Q, {
                        items: e.sectionsItems[i],
                        itemProps: g,
                        renderItem: u,
                        renderItemData: s,
                        sectionIndex: i,
                        highlightedItemIndex: a === i ? l : null,
                        onHighlightedItemChange: e.onHighlightedItemChange,
                        getItemId: e.getItemId,
                        theme: t,
                        keyPrefix: f,
                        ref: e.storeItemsListReference,
                      })
                    );
                  });
                },
              },
              {
                key: 'renderItems',
                value: function () {
                  var e = this.props.items;
                  if (0 === e.length) return null;
                  var t = this.theme,
                    n = this.props,
                    r = n.id,
                    i = n.renderItem,
                    u = n.renderItemData,
                    s = n.highlightedSectionIndex,
                    c = n.highlightedItemIndex,
                    a = n.itemProps;
                  return o.a.createElement(Q, {
                    items: e,
                    itemProps: a,
                    renderItem: i,
                    renderItemData: u,
                    highlightedItemIndex: null === s ? c : null,
                    onHighlightedItemChange: this.onHighlightedItemChange,
                    getItemId: this.getItemId,
                    theme: t,
                    keyPrefix: 'react-autowhatever-'.concat(r, '-'),
                  });
                },
              },
              {
                key: 'ensureHighlightedItemIsVisible',
                value: function () {
                  var e = this.highlightedItem;
                  if (e) {
                    var t = this.itemsContainer,
                      n =
                        e.offsetParent === t
                          ? e.offsetTop
                          : e.offsetTop - t.offsetTop,
                      r = t.scrollTop;
                    n < r
                      ? (r = n)
                      : n + e.offsetHeight > r + t.offsetHeight &&
                        (r = n + e.offsetHeight - t.offsetHeight),
                      r !== t.scrollTop && (t.scrollTop = r);
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.theme,
                    t = this.props,
                    n = t.id,
                    r = t.multiSection,
                    i = t.renderInputComponent,
                    u = t.renderItemsContainer,
                    s = t.highlightedSectionIndex,
                    c = t.highlightedItemIndex,
                    a = this.state.isInputFocused,
                    l = r ? this.renderSections() : this.renderItems(),
                    g = null !== l,
                    f = this.getItemId(s, c),
                    p = 'react-autowhatever-'.concat(n),
                    h = $(
                      $(
                        {
                          role: 'combobox',
                          'aria-haspopup': 'listbox',
                          'aria-owns': p,
                          'aria-controls': p,
                          'aria-expanded': g || 'false',
                        },
                        e(
                          'react-autowhatever-'.concat(n, '-container'),
                          'container',
                          g && 'containerOpen'
                        )
                      ),
                      this.props.containerProps
                    ),
                    d = i(
                      $(
                        $(
                          $(
                            {
                              type: 'text',
                              value: '',
                              autoComplete: 'off',
                              'aria-autocomplete': 'list',
                              'aria-controls': p,
                              'aria-activedescendant': f,
                            },
                            e(
                              'react-autowhatever-'.concat(n, '-input'),
                              'input',
                              g && 'inputOpen',
                              a && 'inputFocused'
                            )
                          ),
                          this.props.inputProps
                        ),
                        {},
                        {
                          onFocus: this.onFocus,
                          onBlur: this.onBlur,
                          onKeyDown:
                            this.props.inputProps.onKeyDown && this.onKeyDown,
                          ref: this.storeInputReference,
                        }
                      )
                    ),
                    y = u({
                      containerProps: $(
                        $(
                          { id: p, role: 'listbox' },
                          e(
                            'react-autowhatever-'.concat(n, '-items-container'),
                            'itemsContainer',
                            g && 'itemsContainerOpen'
                          )
                        ),
                        {},
                        { ref: this.storeItemsContainerReference }
                      ),
                      children: l,
                    });
                  return o.a.createElement('div', h, d, y);
                },
              },
            ]) && X(t.prototype, n),
            r && X(t, r),
            u
          );
        })(r.Component);
      oe(ue, 'defaultProps', {
        id: '1',
        multiSection: !1,
        renderInputComponent: function (e) {
          return o.a.createElement('input', e);
        },
        renderItemsContainer: function (e) {
          var t = e.containerProps,
            n = e.children;
          return o.a.createElement('div', t, n);
        },
        renderItem: function () {
          throw new Error('`renderItem` must be provided');
        },
        renderItemData: ie,
        renderSectionTitle: function () {
          throw new Error('`renderSectionTitle` must be provided');
        },
        getSectionItems: function () {
          throw new Error('`getSectionItems` must be provided');
        },
        containerProps: ie,
        inputProps: ie,
        itemProps: ie,
        highlightedSectionIndex: null,
        highlightedItemIndex: null,
        theme: {
          container: 'react-autowhatever__container',
          containerOpen: 'react-autowhatever__container--open',
          input: 'react-autowhatever__input',
          inputOpen: 'react-autowhatever__input--open',
          inputFocused: 'react-autowhatever__input--focused',
          itemsContainer: 'react-autowhatever__items-container',
          itemsContainerOpen: 'react-autowhatever__items-container--open',
          itemsList: 'react-autowhatever__items-list',
          item: 'react-autowhatever__item',
          itemFirst: 'react-autowhatever__item--first',
          itemHighlighted: 'react-autowhatever__item--highlighted',
          sectionContainer: 'react-autowhatever__section-container',
          sectionContainerFirst: 'react-autowhatever__section-container--first',
          sectionTitle: 'react-autowhatever__section-title',
        },
      }),
        (ue.propTypes = {});
      var se = function (e) {
        var t = {};
        for (var n in e)
          switch (n) {
            case 'suggestionsContainer':
              t.itemsContainer = e[n];
              break;
            case 'suggestionsContainerOpen':
              t.itemsContainerOpen = e[n];
              break;
            case 'suggestion':
              t.item = e[n];
              break;
            case 'suggestionFirst':
              t.itemFirst = e[n];
              break;
            case 'suggestionHighlighted':
              t.itemHighlighted = e[n];
              break;
            case 'suggestionsList':
              t.itemsList = e[n];
              break;
            default:
              t[n] = e[n];
          }
        return t;
      };
      function ce(e) {
        return (ce =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function ae(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ae(Object(n), !0).forEach(function (t) {
                me(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ae(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function ge(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function fe(e, t) {
        return (fe =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function pe(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = ye(e);
          if (t) {
            var o = ye(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return he(this, n);
        };
      }
      function he(e, t) {
        return !t || ('object' !== ce(t) && 'function' != typeof t) ? de(e) : t;
      }
      function de(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ye(e) {
        return (ye = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function me(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var ve = function () {
          return !0;
        },
        be = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && fe(e, t);
          })(s, e);
          var t,
            n,
            r,
            i = pe(s);
          function s(e) {
            var t,
              n = e.alwaysRenderSuggestions;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, s),
              me(de((t = i.call(this))), 'onDocumentMouseDown', function (e) {
                t.justClickedOnSuggestionsContainer = !1;
                for (
                  var n = (e.detail && e.detail.target) || e.target;
                  null !== n && n !== document;

                ) {
                  if (
                    n.getAttribute &&
                    null !== n.getAttribute('data-suggestion-index')
                  )
                    return;
                  if (n === t.suggestionsContainer)
                    return void (t.justClickedOnSuggestionsContainer = !0);
                  n = n.parentNode;
                }
              }),
              me(de(t), 'storeAutowhateverRef', function (e) {
                null !== e && (t.autowhatever = e);
              }),
              me(de(t), 'onSuggestionMouseEnter', function (e, n) {
                var r = n.sectionIndex,
                  o = n.itemIndex;
                t.updateHighlightedSuggestion(r, o),
                  e.target === t.pressedSuggestion &&
                    (t.justSelectedSuggestion = !0),
                  (t.justMouseEntered = !0),
                  setTimeout(function () {
                    t.justMouseEntered = !1;
                  });
              }),
              me(de(t), 'highlightFirstSuggestion', function () {
                t.updateHighlightedSuggestion(
                  t.props.multiSection ? 0 : null,
                  0
                );
              }),
              me(de(t), 'onDocumentMouseUp', function () {
                t.pressedSuggestion &&
                  !t.justSelectedSuggestion &&
                  t.input.focus(),
                  (t.pressedSuggestion = null);
              }),
              me(de(t), 'onSuggestionMouseDown', function (e) {
                t.justSelectedSuggestion ||
                  ((t.justSelectedSuggestion = !0),
                  (t.pressedSuggestion = e.target));
              }),
              me(de(t), 'onSuggestionsClearRequested', function () {
                var e = t.props.onSuggestionsClearRequested;
                e && e();
              }),
              me(de(t), 'onSuggestionSelected', function (e, n) {
                var r = t.props,
                  o = r.alwaysRenderSuggestions,
                  i = r.onSuggestionSelected,
                  u = r.onSuggestionsFetchRequested;
                i && i(e, n),
                  o
                    ? u({
                        value: n.suggestionValue,
                        reason: 'suggestion-selected',
                      })
                    : t.onSuggestionsClearRequested(),
                  t.resetHighlightedSuggestion();
              }),
              me(de(t), 'onSuggestionClick', function (e) {
                var n = t.props,
                  r = n.alwaysRenderSuggestions,
                  o = n.focusInputOnSuggestionClick,
                  i = t.getSuggestionIndices(t.findSuggestionElement(e.target)),
                  u = i.sectionIndex,
                  s = i.suggestionIndex,
                  c = t.getSuggestion(u, s),
                  a = t.props.getSuggestionValue(c);
                t.maybeCallOnChange(e, a, 'click'),
                  t.onSuggestionSelected(e, {
                    suggestion: c,
                    suggestionValue: a,
                    suggestionIndex: s,
                    sectionIndex: u,
                    method: 'click',
                  }),
                  r || t.closeSuggestions(),
                  !0 === o ? t.input.focus() : t.onBlur(),
                  setTimeout(function () {
                    t.justSelectedSuggestion = !1;
                  });
              }),
              me(de(t), 'onBlur', function () {
                var e = t.props,
                  n = e.inputProps,
                  r = e.shouldRenderSuggestions,
                  o = n.value,
                  i = n.onBlur,
                  u = t.getHighlightedSuggestion(),
                  s = r(o);
                t.setState({
                  isFocused: !1,
                  highlightedSectionIndex: null,
                  highlightedSuggestionIndex: null,
                  highlightedSuggestion: null,
                  valueBeforeUpDown: null,
                  isCollapsed: !s,
                }),
                  i && i(t.blurEvent, { highlightedSuggestion: u });
              }),
              me(de(t), 'onSuggestionMouseLeave', function (e) {
                t.resetHighlightedSuggestion(!1),
                  t.justSelectedSuggestion &&
                    e.target === t.pressedSuggestion &&
                    (t.justSelectedSuggestion = !1);
              }),
              me(de(t), 'onSuggestionTouchStart', function () {
                t.justSelectedSuggestion = !0;
              }),
              me(de(t), 'onSuggestionTouchMove', function () {
                (t.justSelectedSuggestion = !1),
                  (t.pressedSuggestion = null),
                  t.input.focus();
              }),
              me(de(t), 'itemProps', function (e) {
                return {
                  'data-section-index': e.sectionIndex,
                  'data-suggestion-index': e.itemIndex,
                  onMouseEnter: t.onSuggestionMouseEnter,
                  onMouseLeave: t.onSuggestionMouseLeave,
                  onMouseDown: t.onSuggestionMouseDown,
                  onTouchStart: t.onSuggestionTouchStart,
                  onTouchMove: t.onSuggestionTouchMove,
                  onClick: t.onSuggestionClick,
                };
              }),
              me(de(t), 'renderSuggestionsContainer', function (e) {
                var n = e.containerProps,
                  r = e.children;
                return (0,
                t.props
                  .renderSuggestionsContainer)({ containerProps: n, children: r, query: t.getQuery() });
              }),
              (t.state = {
                isFocused: !1,
                isCollapsed: !n,
                highlightedSectionIndex: null,
                highlightedSuggestionIndex: null,
                highlightedSuggestion: null,
                valueBeforeUpDown: null,
              }),
              (t.justPressedUpDown = !1),
              (t.justMouseEntered = !1),
              (t.pressedSuggestion = null),
              t
            );
          }
          return (
            (t = s),
            (n = [
              {
                key: 'componentDidMount',
                value: function () {
                  document.addEventListener(
                    'mousedown',
                    this.onDocumentMouseDown
                  ),
                    document.addEventListener(
                      'mouseup',
                      this.onDocumentMouseUp
                    ),
                    (this.input = this.autowhatever.input),
                    (this.suggestionsContainer = this.autowhatever.itemsContainer);
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  u()(e.suggestions, this.props.suggestions)
                    ? e.highlightFirstSuggestion &&
                      e.suggestions.length > 0 &&
                      !1 === this.justPressedUpDown &&
                      !1 === this.justMouseEntered &&
                      this.highlightFirstSuggestion()
                    : this.willRenderSuggestions(e)
                    ? this.state.isCollapsed &&
                      !this.justSelectedSuggestion &&
                      this.revealSuggestions()
                    : this.resetHighlightedSuggestion();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this.props,
                    r = n.suggestions,
                    o = n.onSuggestionHighlighted,
                    i = n.highlightFirstSuggestion;
                  if (!u()(r, e.suggestions) && r.length > 0 && i)
                    this.highlightFirstSuggestion();
                  else if (o) {
                    var s = this.getHighlightedSuggestion();
                    s != t.highlightedSuggestion && o({ suggestion: s });
                  }
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  document.removeEventListener(
                    'mousedown',
                    this.onDocumentMouseDown
                  ),
                    document.removeEventListener(
                      'mouseup',
                      this.onDocumentMouseUp
                    );
                },
              },
              {
                key: 'updateHighlightedSuggestion',
                value: function (e, t, n) {
                  var r = this;
                  this.setState(function (o) {
                    var i = o.valueBeforeUpDown;
                    return (
                      null === t
                        ? (i = null)
                        : null === i && void 0 !== n && (i = n),
                      {
                        highlightedSectionIndex: e,
                        highlightedSuggestionIndex: t,
                        highlightedSuggestion:
                          null === t ? null : r.getSuggestion(e, t),
                        valueBeforeUpDown: i,
                      }
                    );
                  });
                },
              },
              {
                key: 'resetHighlightedSuggestion',
                value: function () {
                  var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  this.setState(function (t) {
                    var n = t.valueBeforeUpDown;
                    return {
                      highlightedSectionIndex: null,
                      highlightedSuggestionIndex: null,
                      highlightedSuggestion: null,
                      valueBeforeUpDown: e ? null : n,
                    };
                  });
                },
              },
              {
                key: 'revealSuggestions',
                value: function () {
                  this.setState({ isCollapsed: !1 });
                },
              },
              {
                key: 'closeSuggestions',
                value: function () {
                  this.setState({
                    highlightedSectionIndex: null,
                    highlightedSuggestionIndex: null,
                    highlightedSuggestion: null,
                    valueBeforeUpDown: null,
                    isCollapsed: !0,
                  });
                },
              },
              {
                key: 'getSuggestion',
                value: function (e, t) {
                  var n = this.props,
                    r = n.suggestions,
                    o = n.multiSection,
                    i = n.getSectionSuggestions;
                  return o ? i(r[e])[t] : r[t];
                },
              },
              {
                key: 'getHighlightedSuggestion',
                value: function () {
                  var e = this.state,
                    t = e.highlightedSectionIndex,
                    n = e.highlightedSuggestionIndex;
                  return null === n ? null : this.getSuggestion(t, n);
                },
              },
              {
                key: 'getSuggestionValueByIndex',
                value: function (e, t) {
                  return (0, this.props.getSuggestionValue)(
                    this.getSuggestion(e, t)
                  );
                },
              },
              {
                key: 'getSuggestionIndices',
                value: function (e) {
                  var t = e.getAttribute('data-section-index'),
                    n = e.getAttribute('data-suggestion-index');
                  return {
                    sectionIndex: 'string' == typeof t ? parseInt(t, 10) : null,
                    suggestionIndex: parseInt(n, 10),
                  };
                },
              },
              {
                key: 'findSuggestionElement',
                value: function (e) {
                  var t = e;
                  do {
                    if (
                      t.getAttribute &&
                      null !== t.getAttribute('data-suggestion-index')
                    )
                      return t;
                    t = t.parentNode;
                  } while (null !== t);
                  throw (
                    (console.error('Clicked element:', e),
                    new Error("Couldn't find suggestion element"))
                  );
                },
              },
              {
                key: 'maybeCallOnChange',
                value: function (e, t, n) {
                  var r = this.props.inputProps,
                    o = r.value,
                    i = r.onChange;
                  t !== o && i(e, { newValue: t, method: n });
                },
              },
              {
                key: 'willRenderSuggestions',
                value: function (e) {
                  var t = e.suggestions,
                    n = e.inputProps,
                    r = e.shouldRenderSuggestions,
                    o = n.value;
                  return t.length > 0 && r(o);
                },
              },
              {
                key: 'getQuery',
                value: function () {
                  var e = this.props.inputProps.value,
                    t = this.state.valueBeforeUpDown;
                  return (null === t ? e : t).trim();
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.suggestions,
                    r = t.renderInputComponent,
                    i = t.onSuggestionsFetchRequested,
                    u = t.renderSuggestion,
                    s = t.inputProps,
                    c = t.multiSection,
                    a = t.renderSectionTitle,
                    l = t.id,
                    g = t.getSectionSuggestions,
                    f = t.theme,
                    p = t.getSuggestionValue,
                    h = t.alwaysRenderSuggestions,
                    d = t.ariaLabel,
                    y = t.highlightFirstSuggestion,
                    m = this.state,
                    v = m.isFocused,
                    b = m.isCollapsed,
                    S = m.highlightedSectionIndex,
                    O = m.highlightedSuggestionIndex,
                    I = m.valueBeforeUpDown,
                    w = h ? ve : this.props.shouldRenderSuggestions,
                    j = s.value,
                    P = s.onFocus,
                    x = s.onKeyDown,
                    _ = this.willRenderSuggestions(this.props),
                    C = h || (v && !b && _),
                    k = C ? n : [],
                    D = le(
                      le({}, s),
                      {},
                      {
                        onFocus: function (t) {
                          if (
                            !e.justSelectedSuggestion &&
                            !e.justClickedOnSuggestionsContainer
                          ) {
                            var n = w(j);
                            e.setState({ isFocused: !0, isCollapsed: !n }),
                              P && P(t),
                              n && i({ value: j, reason: 'input-focused' });
                          }
                        },
                        onBlur: function (t) {
                          e.justClickedOnSuggestionsContainer
                            ? e.input.focus()
                            : ((e.blurEvent = t),
                              e.justSelectedSuggestion ||
                                (e.onBlur(), e.onSuggestionsClearRequested()));
                        },
                        onChange: function (t) {
                          var n = t.target.value,
                            r = w(n);
                          e.maybeCallOnChange(t, n, 'type'),
                            e.suggestionsContainer &&
                              (e.suggestionsContainer.scrollTop = 0),
                            e.setState(
                              le(
                                le(
                                  {},
                                  y
                                    ? {}
                                    : {
                                        highlightedSectionIndex: null,
                                        highlightedSuggestionIndex: null,
                                        highlightedSuggestion: null,
                                      }
                                ),
                                {},
                                { valueBeforeUpDown: null, isCollapsed: !r }
                              )
                            ),
                            r
                              ? i({ value: n, reason: 'input-changed' })
                              : e.onSuggestionsClearRequested();
                        },
                        onKeyDown: function (t, r) {
                          var o = t.keyCode;
                          switch (o) {
                            case 40:
                            case 38:
                              if (b)
                                w(j) &&
                                  (i({
                                    value: j,
                                    reason: 'suggestions-revealed',
                                  }),
                                  e.revealSuggestions());
                              else if (n.length > 0) {
                                var u,
                                  s = r.newHighlightedSectionIndex,
                                  c = r.newHighlightedItemIndex;
                                (u =
                                  null === c
                                    ? null === I
                                      ? j
                                      : I
                                    : e.getSuggestionValueByIndex(s, c)),
                                  e.updateHighlightedSuggestion(s, c, j),
                                  e.maybeCallOnChange(
                                    t,
                                    u,
                                    40 === o ? 'down' : 'up'
                                  );
                              }
                              t.preventDefault(),
                                (e.justPressedUpDown = !0),
                                setTimeout(function () {
                                  e.justPressedUpDown = !1;
                                });
                              break;
                            case 13:
                              if (229 === t.keyCode) break;
                              var a = e.getHighlightedSuggestion();
                              if (
                                (C && !h && e.closeSuggestions(), null != a)
                              ) {
                                var l = p(a);
                                e.maybeCallOnChange(t, l, 'enter'),
                                  e.onSuggestionSelected(t, {
                                    suggestion: a,
                                    suggestionValue: l,
                                    suggestionIndex: O,
                                    sectionIndex: S,
                                    method: 'enter',
                                  }),
                                  (e.justSelectedSuggestion = !0),
                                  setTimeout(function () {
                                    e.justSelectedSuggestion = !1;
                                  });
                              }
                              break;
                            case 27:
                              C && t.preventDefault();
                              var g = C && !h;
                              null === I
                                ? g ||
                                  (e.maybeCallOnChange(t, '', 'escape'),
                                  w('')
                                    ? i({ value: '', reason: 'escape-pressed' })
                                    : e.onSuggestionsClearRequested())
                                : e.maybeCallOnChange(t, I, 'escape'),
                                g
                                  ? (e.onSuggestionsClearRequested(),
                                    e.closeSuggestions())
                                  : e.resetHighlightedSuggestion();
                          }
                          x && x(t);
                        },
                      }
                    ),
                    E = { query: this.getQuery() };
                  return o.a.createElement(ue, {
                    multiSection: c,
                    items: k,
                    renderInputComponent: r,
                    renderItemsContainer: this.renderSuggestionsContainer,
                    renderItem: u,
                    renderItemData: E,
                    renderSectionTitle: a,
                    getSectionItems: g,
                    highlightedSectionIndex: S,
                    highlightedItemIndex: O,
                    inputProps: D,
                    itemProps: this.itemProps,
                    theme: se(f),
                    id: l,
                    ariaLabel: d,
                    ref: this.storeAutowhateverRef,
                  });
                },
              },
            ]) && ge(t.prototype, n),
            r && ge(t, r),
            s
          );
        })(r.Component);
      me(be, 'defaultProps', {
        renderSuggestionsContainer: function (e) {
          var t = e.containerProps,
            n = e.children;
          return o.a.createElement('div', t, n);
        },
        shouldRenderSuggestions: function (e) {
          return e.trim().length > 0;
        },
        alwaysRenderSuggestions: !1,
        multiSection: !1,
        focusInputOnSuggestionClick: !0,
        highlightFirstSuggestion: !1,
        theme: {
          container: 'react-autosuggest__container',
          containerOpen: 'react-autosuggest__container--open',
          input: 'react-autosuggest__input',
          inputOpen: 'react-autosuggest__input--open',
          inputFocused: 'react-autosuggest__input--focused',
          suggestionsContainer: 'react-autosuggest__suggestions-container',
          suggestionsContainerOpen:
            'react-autosuggest__suggestions-container--open',
          suggestionsList: 'react-autosuggest__suggestions-list',
          suggestion: 'react-autosuggest__suggestion',
          suggestionFirst: 'react-autosuggest__suggestion--first',
          suggestionHighlighted: 'react-autosuggest__suggestion--highlighted',
          sectionContainer: 'react-autosuggest__section-container',
          sectionContainerFirst: 'react-autosuggest__section-container--first',
          sectionTitle: 'react-autosuggest__section-title',
        },
        ariaLabel: 'search',
        id: '1',
      }),
        (be.propTypes = {});
    },
  ]);
});
