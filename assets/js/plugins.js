/*--------------------------------
    JS Plugins Index
    ----------------------
    01. SlickNav
    02. Tippy js
    03. Odometer
    04. Isotope
    05. Slick Slider
    06. jQuery.appear
    07. ajaxchimp
    08. easy-pie-chart
    09. Parallax [Jarallax]
    10. instafeed js
    11. sticky-sidebar
    12. Leaflet // Map
    13. jquery.mb.YTPlayer
    14. Magnific Popup
    15. jQuery Nice Select
    16. jQuery Smooth Scroll
    17. jquery-match-height 0.7.2
    18. jquery.nicescroll v3.7.3
    19. jQuery UI - v1.12.1
---------------------------------*/

/*!
 * SlickNav Responsive Mobile Menu v1.0.10
 * (c) 2016 Josh Cope
 * licensed under MIT
 */
! function (e, t, n) {
	function a(t, n) {
		this.element = t, this.settings = e.extend({}, i, n), this.settings.duplicate || n.hasOwnProperty("removeIds") || (this.settings.removeIds = !1), this._defaults = i, this._name = s, this.init()
	}
	var i = {
			label: "MENU",
			duplicate: !0,
			duration: 200,
			easingOpen: "swing",
			easingClose: "swing",
			closedSymbol: "&#9658;",
			openedSymbol: "&#9660;",
			prependTo: "body",
			appendTo: "",
			parentTag: "a",
			closeOnClick: !1,
			allowParentLinks: !1,
			nestedParentLinks: !0,
			showChildren: !1,
			removeIds: !0,
			removeClasses: !1,
			removeStyles: !1,
			brand: "",
			animations: "jquery",
			init: function () {},
			beforeOpen: function () {},
			beforeClose: function () {},
			afterOpen: function () {},
			afterClose: function () {}
		},
		s = "slicknav",
		o = "slicknav",
		l = {
			DOWN: 40,
			ENTER: 13,
			ESCAPE: 27,
			LEFT: 37,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		};
	a.prototype.init = function () {
		var n, a, i = this,
			s = e(this.element),
			r = this.settings;
		if (r.duplicate ? i.mobileNav = s.clone() : i.mobileNav = s, r.removeIds && (i.mobileNav.removeAttr("id"), i.mobileNav.find("*").each(function (t, n) {
				e(n).removeAttr("id")
			})), r.removeClasses && (i.mobileNav.removeAttr("class"), i.mobileNav.find("*").each(function (t, n) {
				e(n).removeAttr("class")
			})), r.removeStyles && (i.mobileNav.removeAttr("style"), i.mobileNav.find("*").each(function (t, n) {
				e(n).removeAttr("style")
			})), n = o + "_icon", "" === r.label && (n += " " + o + "_no-text"), "a" == r.parentTag && (r.parentTag = 'a href="#"'), i.mobileNav.attr("class", o + "_nav"), a = e('<div class="' + o + '_menu"></div>'), "" !== r.brand) {
			var c = e('<div class="' + o + '_brand">' + r.brand + "</div>");
			e(a).append(c)
		}
		i.btn = e(["<" + r.parentTag + ' aria-haspopup="true" role="button" tabindex="0" class="' + o + "_btn " + o + '_collapsed">', '<span class="' + o + '_menutxt">' + r.label + "</span>", '<span class="' + n + '">', '<span class="' + o + '_icon-bar"></span>', '<span class="' + o + '_icon-bar"></span>', '<span class="' + o + '_icon-bar"></span>', "</span>", "</" + r.parentTag + ">"].join("")), e(a).append(i.btn), "" !== r.appendTo ? e(r.appendTo).append(a) : e(r.prependTo).prepend(a), a.append(i.mobileNav);
		var p = i.mobileNav.find("li");
		e(p).each(function () {
			var t = e(this),
				n = {};
			if (n.children = t.children("ul").attr("role", "menu"), t.data("menu", n), n.children.length > 0) {
				var a = t.contents(),
					s = !1,
					l = [];
				e(a).each(function () {
					return e(this).is("ul") ? !1 : (l.push(this), void(e(this).is("a") && (s = !0)))
				});
				var c = e("<" + r.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + o + '_item"/>');
				if (r.allowParentLinks && !r.nestedParentLinks && s) e(l).wrapAll('<span class="' + o + "_parent-link " + o + '_row"/>').parent();
				else {
					var p = e(l).wrapAll(c).parent();
					p.addClass(o + "_row")
				}
				r.showChildren ? t.addClass(o + "_open") : t.addClass(o + "_collapsed"), t.addClass(o + "_parent");
				var d = e('<span class="' + o + '_arrow">' + (r.showChildren ? r.openedSymbol : r.closedSymbol) + "</span>");
				r.allowParentLinks && !r.nestedParentLinks && s && (d = d.wrap(c).parent()), e(l).last().after(d)
			} else 0 === t.children().length && t.addClass(o + "_txtnode");
			t.children("a").attr("role", "menuitem").click(function (t) {
				r.closeOnClick && !e(t.target).parent().closest("li").hasClass(o + "_parent") && e(i.btn).click()
			}), r.closeOnClick && r.allowParentLinks && (t.children("a").children("a").click(function (t) {
				e(i.btn).click()
			}), t.find("." + o + "_parent-link a:not(." + o + "_item)").click(function (t) {
				e(i.btn).click()
			}))
		}), e(p).each(function () {
			var t = e(this).data("menu");
			r.showChildren || i._visibilityToggle(t.children, null, !1, null, !0)
		}), i._visibilityToggle(i.mobileNav, null, !1, "init", !0), i.mobileNav.attr("role", "menu"), e(t).mousedown(function () {
			i._outlines(!1)
		}), e(t).keyup(function () {
			i._outlines(!0)
		}), e(i.btn).click(function (e) {
			e.preventDefault(), i._menuToggle()
		}), i.mobileNav.on("click", "." + o + "_item", function (t) {
			t.preventDefault(), i._itemClick(e(this))
		}), e(i.btn).keydown(function (t) {
			var n = t || event;
			switch (n.keyCode) {
				case l.ENTER:
				case l.SPACE:
				case l.DOWN:
					t.preventDefault(), n.keyCode === l.DOWN && e(i.btn).hasClass(o + "_open") || i._menuToggle(), e(i.btn).next().find('[role="menuitem"]').first().focus()
			}
		}), i.mobileNav.on("keydown", "." + o + "_item", function (t) {
			var n = t || event;
			switch (n.keyCode) {
				case l.ENTER:
					t.preventDefault(), i._itemClick(e(t.target));
					break;
				case l.RIGHT:
					t.preventDefault(), e(t.target).parent().hasClass(o + "_collapsed") && i._itemClick(e(t.target)), e(t.target).next().find('[role="menuitem"]').first().focus()
			}
		}), i.mobileNav.on("keydown", '[role="menuitem"]', function (t) {
			var n = t || event;
			switch (n.keyCode) {
				case l.DOWN:
					t.preventDefault();
					var a = e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),
						s = a.index(t.target),
						r = s + 1;
					a.length <= r && (r = 0);
					var c = a.eq(r);
					c.focus();
					break;
				case l.UP:
					t.preventDefault();
					var a = e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),
						s = a.index(t.target),
						c = a.eq(s - 1);
					c.focus();
					break;
				case l.LEFT:
					if (t.preventDefault(), e(t.target).parent().parent().parent().hasClass(o + "_open")) {
						var p = e(t.target).parent().parent().prev();
						p.focus(), i._itemClick(p)
					} else e(t.target).parent().parent().hasClass(o + "_nav") && (i._menuToggle(), e(i.btn).focus());
					break;
				case l.ESCAPE:
					t.preventDefault(), i._menuToggle(), e(i.btn).focus()
			}
		}), r.allowParentLinks && r.nestedParentLinks && e("." + o + "_item a").click(function (e) {
			e.stopImmediatePropagation()
		})
	}, a.prototype._menuToggle = function (e) {
		var t = this,
			n = t.btn,
			a = t.mobileNav;
		n.hasClass(o + "_collapsed") ? (n.removeClass(o + "_collapsed"), n.addClass(o + "_open")) : (n.removeClass(o + "_open"), n.addClass(o + "_collapsed")), n.addClass(o + "_animating"), t._visibilityToggle(a, n.parent(), !0, n)
	}, a.prototype._itemClick = function (e) {
		var t = this,
			n = t.settings,
			a = e.data("menu");
		a || (a = {}, a.arrow = e.children("." + o + "_arrow"), a.ul = e.next("ul"), a.parent = e.parent(), a.parent.hasClass(o + "_parent-link") && (a.parent = e.parent().parent(), a.ul = e.parent().next("ul")), e.data("menu", a)), a.parent.hasClass(o + "_collapsed") ? (a.arrow.html(n.openedSymbol), a.parent.removeClass(o + "_collapsed"), a.parent.addClass(o + "_open"), a.parent.addClass(o + "_animating"), t._visibilityToggle(a.ul, a.parent, !0, e)) : (a.arrow.html(n.closedSymbol), a.parent.addClass(o + "_collapsed"), a.parent.removeClass(o + "_open"), a.parent.addClass(o + "_animating"), t._visibilityToggle(a.ul, a.parent, !0, e))
	}, a.prototype._visibilityToggle = function (t, n, a, i, s) {
		function l(t, n) {
			e(t).removeClass(o + "_animating"), e(n).removeClass(o + "_animating"), s || p.afterOpen(t)
		}

		function r(n, a) {
			t.attr("aria-hidden", "true"), d.attr("tabindex", "-1"), c._setVisAttr(t, !0), t.hide(), e(n).removeClass(o + "_animating"), e(a).removeClass(o + "_animating"), s ? "init" == n && p.init() : p.afterClose(n)
		}
		var c = this,
			p = c.settings,
			d = c._getActionItems(t),
			u = 0;
		a && (u = p.duration), t.hasClass(o + "_hidden") ? (t.removeClass(o + "_hidden"), s || p.beforeOpen(i), "jquery" === p.animations ? t.stop(!0, !0).slideDown(u, p.easingOpen, function () {
			l(i, n)
		}) : "velocity" === p.animations && t.velocity("finish").velocity("slideDown", {
			duration: u,
			easing: p.easingOpen,
			complete: function () {
				l(i, n)
			}
		}), t.attr("aria-hidden", "false"), d.attr("tabindex", "0"), c._setVisAttr(t, !1)) : (t.addClass(o + "_hidden"), s || p.beforeClose(i), "jquery" === p.animations ? t.stop(!0, !0).slideUp(u, this.settings.easingClose, function () {
			r(i, n)
		}) : "velocity" === p.animations && t.velocity("finish").velocity("slideUp", {
			duration: u,
			easing: p.easingClose,
			complete: function () {
				r(i, n)
			}
		}))
	}, a.prototype._setVisAttr = function (t, n) {
		var a = this,
			i = t.children("li").children("ul").not("." + o + "_hidden");
		n ? i.each(function () {
			var t = e(this);
			t.attr("aria-hidden", "true");
			var i = a._getActionItems(t);
			i.attr("tabindex", "-1"), a._setVisAttr(t, n)
		}) : i.each(function () {
			var t = e(this);
			t.attr("aria-hidden", "false");
			var i = a._getActionItems(t);
			i.attr("tabindex", "0"), a._setVisAttr(t, n)
		})
	}, a.prototype._getActionItems = function (e) {
		var t = e.data("menu");
		if (!t) {
			t = {};
			var n = e.children("li"),
				a = n.find("a");
			t.links = a.add(n.find("." + o + "_item")), e.data("menu", t)
		}
		return t.links
	}, a.prototype._outlines = function (t) {
		t ? e("." + o + "_item, ." + o + "_btn").css("outline", "") : e("." + o + "_item, ." + o + "_btn").css("outline", "none")
	}, a.prototype.toggle = function () {
		var e = this;
		e._menuToggle()
	}, a.prototype.open = function () {
		var e = this;
		e.btn.hasClass(o + "_collapsed") && e._menuToggle()
	}, a.prototype.close = function () {
		var e = this;
		e.btn.hasClass(o + "_open") && e._menuToggle()
	}, e.fn[s] = function (t) {
		var n = arguments;
		if (void 0 === t || "object" == typeof t) return this.each(function () {
			e.data(this, "plugin_" + s) || e.data(this, "plugin_" + s, new a(this, t))
		});
		if ("string" == typeof t && "_" !== t[0] && "init" !== t) {
			var i;
			return this.each(function () {
				var o = e.data(this, "plugin_" + s);
				o instanceof a && "function" == typeof o[t] && (i = o[t].apply(o, Array.prototype.slice.call(n, 1)))
			}), void 0 !== i ? i : this
		}
	}
}(jQuery, document, window);

/*
 *
 *  Plugin Name: tippy js
 *  Plugin URL: https://github.com/atomiks/tippyjs
 *
 *
 * */

(function (e, t) {
	'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.tippy = t()
})(this, function () {
	'use strict';

	function e(e) {
		return e && '[object Function]' === {}.toString.call(e)
	}

	function t(e, t) {
		if (1 !== e.nodeType) return [];
		var r = e.ownerDocument.defaultView,
			a = r.getComputedStyle(e, null);
		return t ? a[t] : a
	}

	function r(e) {
		return 'HTML' === e.nodeName ? e : e.parentNode || e.host
	}

	function a(e) {
		if (!e) return document.body;
		switch (e.nodeName) {
			case 'HTML':
			case 'BODY':
				return e.ownerDocument.body;
			case '#document':
				return e.body;
		}
		var p = t(e),
			o = p.overflow,
			i = p.overflowX,
			n = p.overflowY;
		return /(auto|scroll|overlay)/.test(o + n + i) ? e : a(r(e))
	}

	function p(e) {
		return 11 === e ? bt : 10 === e ? yt : bt || yt
	}

	function o(e) {
		if (!e) return document.documentElement;
		for (var r = p(10) ? document.body : null, a = e.offsetParent || null; a === r && e.nextElementSibling;) a = (e = e.nextElementSibling).offsetParent;
		var i = a && a.nodeName;
		return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(a.nodeName) && 'static' === t(a, 'position') ? o(a) : a : e ? e.ownerDocument.documentElement : document.documentElement
	}

	function n(e) {
		var t = e.nodeName;
		return 'BODY' !== t && ('HTML' === t || o(e.firstElementChild) === e)
	}

	function s(e) {
		return null === e.parentNode ? e : s(e.parentNode)
	}

	function l(e, t) {
		if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
		var r = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
			a = r ? e : t,
			p = r ? t : e,
			i = document.createRange();
		i.setStart(a, 0), i.setEnd(p, 0);
		var d = i.commonAncestorContainer;
		if (e !== d && t !== d || a.contains(p)) return n(d) ? d : o(d);
		var c = s(e);
		return c.host ? l(c.host, t) : l(e, s(t).host)
	}

	function d(e) {
		var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
			r = 'top' === t ? 'scrollTop' : 'scrollLeft',
			a = e.nodeName;
		if ('BODY' === a || 'HTML' === a) {
			var p = e.ownerDocument.documentElement,
				o = e.ownerDocument.scrollingElement || p;
			return o[r]
		}
		return e[r]
	}

	function c(e, t) {
		var r = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2],
			a = d(t, 'top'),
			p = d(t, 'left'),
			o = r ? -1 : 1;
		return e.top += a * o, e.bottom += a * o, e.left += p * o, e.right += p * o, e
	}

	function m(e, t) {
		var r = 'x' === t ? 'Left' : 'Top',
			a = 'Left' === r ? 'Right' : 'Bottom';
		return parseFloat(e['border' + r + 'Width'], 10) + parseFloat(e['border' + a + 'Width'], 10)
	}

	function f(e, t, r, a) {
		return Ze(t['offset' + e], t['scroll' + e], r['client' + e], r['offset' + e], r['scroll' + e], p(10) ? parseInt(r['offset' + e]) + parseInt(a['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(a['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0)
	}

	function h(e) {
		var t = e.body,
			r = e.documentElement,
			a = p(10) && getComputedStyle(r);
		return {
			height: f('Height', t, r, a),
			width: f('Width', t, r, a)
		}
	}

	function b(e) {
		return wt({}, e, {
			right: e.left + e.width,
			bottom: e.top + e.height
		})
	}

	function u(e) {
		var r = {};
		try {
			if (p(10)) {
				r = e.getBoundingClientRect();
				var a = d(e, 'top'),
					o = d(e, 'left');
				r.top += a, r.left += o, r.bottom += a, r.right += o
			} else r = e.getBoundingClientRect()
		} catch (t) {}
		var i = {
				left: r.left,
				top: r.top,
				width: r.right - r.left,
				height: r.bottom - r.top
			},
			n = 'HTML' === e.nodeName ? h(e.ownerDocument) : {},
			s = n.width || e.clientWidth || i.right - i.left,
			l = n.height || e.clientHeight || i.bottom - i.top,
			c = e.offsetWidth - s,
			f = e.offsetHeight - l;
		if (c || f) {
			var y = t(e);
			c -= m(y, 'x'), f -= m(y, 'y'), i.width -= c, i.height -= f
		}
		return b(i)
	}

	function y(e, r) {
		var o = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2],
			i = p(10),
			n = 'HTML' === r.nodeName,
			s = u(e),
			l = u(r),
			d = a(e),
			m = t(r),
			f = parseFloat(m.borderTopWidth, 10),
			h = parseFloat(m.borderLeftWidth, 10);
		o && n && (l.top = Ze(l.top, 0), l.left = Ze(l.left, 0));
		var y = b({
			top: s.top - l.top - f,
			left: s.left - l.left - h,
			width: s.width,
			height: s.height
		});
		if (y.marginTop = 0, y.marginLeft = 0, !i && n) {
			var g = parseFloat(m.marginTop, 10),
				x = parseFloat(m.marginLeft, 10);
			y.top -= f - g, y.bottom -= f - g, y.left -= h - x, y.right -= h - x, y.marginTop = g, y.marginLeft = x
		}
		return (i && !o ? r.contains(d) : r === d && 'BODY' !== d.nodeName) && (y = c(y, r)), y
	}

	function g(e) {
		var t = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1],
			r = e.ownerDocument.documentElement,
			a = y(e, r),
			p = Ze(r.clientWidth, window.innerWidth || 0),
			o = Ze(r.clientHeight, window.innerHeight || 0),
			i = t ? 0 : d(r),
			n = t ? 0 : d(r, 'left'),
			s = {
				top: i - a.top + a.marginTop,
				left: n - a.left + a.marginLeft,
				width: p,
				height: o
			};
		return b(s)
	}

	function x(e) {
		var a = e.nodeName;
		return 'BODY' !== a && 'HTML' !== a && ('fixed' === t(e, 'position') || x(r(e)))
	}

	function w(e) {
		if (!e || !e.parentElement || p()) return document.documentElement;
		for (var r = e.parentElement; r && 'none' === t(r, 'transform');) r = r.parentElement;
		return r || document.documentElement
	}

	function v(e, t, p, o) {
		var i = !!(4 < arguments.length && void 0 !== arguments[4]) && arguments[4],
			n = {
				top: 0,
				left: 0
			},
			s = i ? w(e) : l(e, t);
		if ('viewport' === o) n = g(s, i);
		else {
			var d;
			'scrollParent' === o ? (d = a(r(t)), 'BODY' === d.nodeName && (d = e.ownerDocument.documentElement)) : 'window' === o ? d = e.ownerDocument.documentElement : d = o;
			var c = y(d, s, i);
			if ('HTML' === d.nodeName && !x(s)) {
				var m = h(e.ownerDocument),
					f = m.height,
					b = m.width;
				n.top += c.top - c.marginTop, n.bottom = f + c.top, n.left += c.left - c.marginLeft, n.right = b + c.left
			} else n = c
		}
		p = p || 0;
		var u = 'number' == typeof p;
		return n.left += u ? p : p.left || 0, n.top += u ? p : p.top || 0, n.right -= u ? p : p.right || 0, n.bottom -= u ? p : p.bottom || 0, n
	}

	function k(e) {
		var t = e.width,
			r = e.height;
		return t * r
	}

	function E(e, t, r, a, p) {
		var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
		if (-1 === e.indexOf('auto')) return e;
		var i = v(r, a, o, p),
			n = {
				top: {
					width: i.width,
					height: t.top - i.top
				},
				right: {
					width: i.right - t.right,
					height: i.height
				},
				bottom: {
					width: i.width,
					height: i.bottom - t.bottom
				},
				left: {
					width: t.left - i.left,
					height: i.height
				}
			},
			s = Object.keys(n).map(function (e) {
				return wt({
					key: e
				}, n[e], {
					area: k(n[e])
				})
			}).sort(function (e, t) {
				return t.area - e.area
			}),
			l = s.filter(function (e) {
				var t = e.width,
					a = e.height;
				return t >= r.clientWidth && a >= r.clientHeight
			}),
			d = 0 < l.length ? l[0].key : s[0].key,
			c = e.split('-')[1];
		return d + (c ? '-' + c : '')
	}

	function C(e, t, r) {
		var a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
			p = a ? w(t) : l(t, r);
		return y(r, p, a)
	}

	function L(e) {
		var t = e.ownerDocument.defaultView,
			r = t.getComputedStyle(e),
			a = parseFloat(r.marginTop || 0) + parseFloat(r.marginBottom || 0),
			p = parseFloat(r.marginLeft || 0) + parseFloat(r.marginRight || 0),
			o = {
				width: e.offsetWidth + p,
				height: e.offsetHeight + a
			};
		return o
	}

	function O(e) {
		var t = {
			left: 'right',
			right: 'left',
			bottom: 'top',
			top: 'bottom'
		};
		return e.replace(/left|right|bottom|top/g, function (e) {
			return t[e]
		})
	}

	function T(e, t, r) {
		r = r.split('-')[0];
		var a = L(e),
			p = {
				width: a.width,
				height: a.height
			},
			o = -1 !== ['right', 'left'].indexOf(r),
			i = o ? 'top' : 'left',
			n = o ? 'left' : 'top',
			s = o ? 'height' : 'width',
			l = o ? 'width' : 'height';
		return p[i] = t[i] + t[s] / 2 - a[s] / 2, p[n] = r === n ? t[n] - a[l] : t[O(n)], p
	}

	function S(e, t) {
		return Array.prototype.find ? e.find(t) : e.filter(t)[0]
	}

	function A(e, t, r) {
		if (Array.prototype.findIndex) return e.findIndex(function (e) {
			return e[t] === r
		});
		var a = S(e, function (e) {
			return e[t] === r
		});
		return e.indexOf(a)
	}

	function Y(t, r, a) {
		var p = void 0 === a ? t : t.slice(0, A(t, 'name', a));
		return p.forEach(function (t) {
			t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
			var a = t['function'] || t.fn;
			t.enabled && e(a) && (r.offsets.popper = b(r.offsets.popper), r.offsets.reference = b(r.offsets.reference), r = a(r, t))
		}), r
	}

	function P() {
		if (!this.state.isDestroyed) {
			var e = {
				instance: this,
				styles: {},
				arrowStyles: {},
				attributes: {},
				flipped: !1,
				offsets: {}
			};
			e.offsets.reference = C(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = E(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = T(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = Y(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
		}
	}

	function D(e, t) {
		return e.some(function (e) {
			var r = e.name,
				a = e.enabled;
			return a && r === t
		})
	}

	function X(e) {
		for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], r = e.charAt(0).toUpperCase() + e.slice(1), a = 0; a < t.length; a++) {
			var p = t[a],
				o = p ? '' + p + r : e;
			if ('undefined' != typeof document.body.style[o]) return o
		}
		return null
	}

	function I() {
		return this.state.isDestroyed = !0, D(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[X('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
	}

	function N(e) {
		var t = e.ownerDocument;
		return t ? t.defaultView : window
	}

	function H(e, t, r, p) {
		var o = 'BODY' === e.nodeName,
			i = o ? e.ownerDocument.defaultView : e;
		i.addEventListener(t, r, {
			passive: !0
		}), o || H(a(i.parentNode), t, r, p), p.push(i)
	}

	function W(e, t, r, p) {
		r.updateBound = p, N(e).addEventListener('resize', r.updateBound, {
			passive: !0
		});
		var o = a(e);
		return H(o, 'scroll', r.updateBound, r.scrollParents), r.scrollElement = o, r.eventsEnabled = !0, r
	}

	function M() {
		this.state.eventsEnabled || (this.state = W(this.reference, this.options, this.state, this.scheduleUpdate))
	}

	function B(e, t) {
		return N(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
			e.removeEventListener('scroll', t.updateBound)
		}), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
	}

	function R() {
		this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = B(this.reference, this.state))
	}

	function z(e) {
		return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
	}

	function F(e, t) {
		Object.keys(t).forEach(function (r) {
			var a = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(r) && z(t[r]) && (a = 'px'), e.style[r] = t[r] + a
		})
	}

	function _(e, t) {
		Object.keys(t).forEach(function (r) {
			var a = t[r];
			!1 === a ? e.removeAttribute(r) : e.setAttribute(r, t[r])
		})
	}

	function U(e, t) {
		var r = e.offsets,
			a = r.popper,
			p = r.reference,
			o = Qe,
			i = function (e) {
				return e
			},
			n = o(a.width),
			s = o(p.width),
			l = -1 !== ['left', 'right'].indexOf(e.placement),
			d = -1 !== e.placement.indexOf('-'),
			c = t ? l || d || s % 2 == n % 2 ? o : Je : i,
			m = t ? o : i;
		return {
			left: c(1 == s % 2 && 1 == n % 2 && !d && t ? a.left - 1 : a.left),
			top: m(a.top),
			bottom: m(a.bottom),
			right: c(a.right)
		}
	}

	function V(e, t, r) {
		var a = S(e, function (e) {
				var r = e.name;
				return r === t
			}),
			p = !!a && e.some(function (e) {
				return e.name === r && e.enabled && e.order < a.order
			});
		if (!p) {
			var o = '`' + t + '`';
			console.warn('`' + r + '`' + ' modifier is required by ' + o + ' modifier in order to work, be sure to include it before ' + o + '!')
		}
		return p
	}

	function q(e) {
		return 'end' === e ? 'start' : 'start' === e ? 'end' : e
	}

	function j(e) {
		var t = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1],
			r = Et.indexOf(e),
			a = Et.slice(r + 1).concat(Et.slice(0, r));
		return t ? a.reverse() : a
	}

	function K(e, t, r, a) {
		var p = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
			o = +p[1],
			i = p[2];
		if (!o) return e;
		if (0 === i.indexOf('%')) {
			var n;
			switch (i) {
				case '%p':
					n = r;
					break;
				case '%':
				case '%r':
				default:
					n = a;
			}
			var s = b(n);
			return s[t] / 100 * o
		}
		if ('vh' === i || 'vw' === i) {
			var l;
			return l = 'vh' === i ? Ze(document.documentElement.clientHeight, window.innerHeight || 0) : Ze(document.documentElement.clientWidth, window.innerWidth || 0), l / 100 * o
		}
		return o
	}

	function G(e, t, r, a) {
		var p = [0, 0],
			o = -1 !== ['right', 'left'].indexOf(a),
			i = e.split(/(\+|\-)/).map(function (e) {
				return e.trim()
			}),
			n = i.indexOf(S(i, function (e) {
				return -1 !== e.search(/,|\s/)
			}));
		i[n] && -1 === i[n].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
		var s = /\s*,\s*|\s+/,
			l = -1 === n ? [i] : [i.slice(0, n).concat([i[n].split(s)[0]]), [i[n].split(s)[1]].concat(i.slice(n + 1))];
		return l = l.map(function (e, a) {
			var p = (1 === a ? !o : o) ? 'height' : 'width',
				i = !1;
			return e.reduce(function (e, t) {
				return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t)
			}, []).map(function (e) {
				return K(e, p, t, r)
			})
		}), l.forEach(function (e, t) {
			e.forEach(function (r, a) {
				z(r) && (p[t] += r * ('-' === e[a - 1] ? -1 : 1))
			})
		}), p
	}

	function J(e, t) {
		var r = t.offset,
			a = e.placement,
			p = e.offsets,
			o = p.popper,
			i = p.reference,
			n = a.split('-')[0],
			s = void 0;
		return s = z(+r) ? [+r, 0] : G(r, o, i, n), 'left' === n ? (o.top += s[0], o.left -= s[1]) : 'right' === n ? (o.top += s[0], o.left += s[1]) : 'top' === n ? (o.left += s[0], o.top -= s[1]) : 'bottom' === n && (o.left += s[0], o.top += s[1]), e.popper = o, e
	}

	function Q(e) {
		return [].slice.call(e)
	}

	function Z(e, t) {
		return (Tt.closest || function (e) {
			for (var t = this; t;) {
				if (St.call(t, e)) return t;
				t = t.parentElement
			}
		}).call(e, t)
	}

	function $(e, t) {
		for (; e;) {
			if (t(e)) return e;
			e = e.parentElement
		}
	}

	function ee() {
		return document.createElement('div')
	}

	function te(e, t) {
		e[Yt.x && 'innerHTML'] = t instanceof Element ? t[Yt.x && 'innerHTML'] : t
	}

	function re(e, t) {
		t.content instanceof Element ? (te(e, ''), e.appendChild(t.content)) : e[t.allowHTML ? 'innerHTML' : 'textContent'] = t.content
	}

	function ae(e) {
		return {
			tooltip: e.querySelector(Ot.TOOLTIP),
			backdrop: e.querySelector(Ot.BACKDROP),
			content: e.querySelector(Ot.CONTENT),
			arrow: e.querySelector(Ot.ARROW) || e.querySelector(Ot.ROUND_ARROW)
		}
	}

	function pe(e) {
		e.setAttribute('data-inertia', '')
	}

	function oe(e) {
		e.removeAttribute('data-inertia')
	}

	function ie(e) {
		var t = ee();
		return 'round' === e ? (t.className = 'tippy-roundarrow', te(t, '<svg viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg"><path d="M3 8s2.021-.015 5.253-4.218C9.584 2.051 10.797 1.007 12 1c1.203-.007 2.416 1.035 3.761 2.782C19.012 8.005 21 8 21 8H3z"/></svg>')) : t.className = 'tippy-arrow', t
	}

	function ne() {
		var e = ee();
		return e.className = 'tippy-backdrop', e.setAttribute('data-state', 'hidden'), e
	}

	function se(e, t) {
		e.setAttribute('tabindex', '-1'), t.setAttribute('data-interactive', '')
	}

	function le(e, t) {
		e.removeAttribute('tabindex'), t.removeAttribute('data-interactive')
	}

	function de(e, t) {
		e.forEach(function (e) {
			e && (e.style.transitionDuration = t + 'ms')
		})
	}

	function ce(e, t, r) {
		e[t + 'EventListener']('transitionend', r)
	}

	function me(e) {
		var t = e.getAttribute('x-placement');
		return t ? t.split('-')[0] : ''
	}

	function fe(e, t) {
		e.forEach(function (e) {
			e && e.setAttribute('data-state', t)
		})
	}

	function he(e) {
		void e.offsetHeight
	}

	function be(e, t) {
		var r = ee();
		r.className = 'tippy-popper', r.setAttribute('role', 'tooltip'), r.id = 'tippy-' + e, r.style.zIndex = t.zIndex;
		var a = ee();
		a.className = 'tippy-tooltip', a.style.maxWidth = t.maxWidth + ('number' == typeof t.maxWidth ? 'px' : ''), a.setAttribute('data-size', t.size), a.setAttribute('data-animation', t.animation), a.setAttribute('data-state', 'hidden'), t.theme.split(' ').forEach(function (e) {
			a.classList.add(e + '-theme')
		});
		var p = ee();
		return p.className = 'tippy-content', p.setAttribute('data-state', 'hidden'), t.interactive && se(r, a), t.arrow && a.appendChild(ie(t.arrowType)), t.animateFill && (a.appendChild(ne()), a.setAttribute('data-animatefill', '')), t.inertia && pe(a), re(p, t), a.appendChild(p), r.appendChild(a), r.addEventListener('focusout', function (t) {
			t.relatedTarget && r._tippy && !$(t.relatedTarget, function (e) {
				return e === r
			}) && t.relatedTarget !== r._tippy.reference && r._tippy.props.shouldPopperHideOnBlur(t) && r._tippy.hide()
		}), r
	}

	function ye(e, t, r) {
		var a = ae(e),
			p = a.tooltip,
			o = a.content,
			i = a.backdrop,
			n = a.arrow;
		e.style.zIndex = r.zIndex, p.setAttribute('data-size', r.size), p.setAttribute('data-animation', r.animation), p.style.maxWidth = r.maxWidth + ('number' == typeof r.maxWidth ? 'px' : ''), t.content !== r.content && re(o, r), !t.animateFill && r.animateFill ? (p.appendChild(ne()), p.setAttribute('data-animatefill', '')) : t.animateFill && !r.animateFill && (p.removeChild(i), p.removeAttribute('data-animatefill')), !t.arrow && r.arrow ? p.appendChild(ie(r.arrowType)) : t.arrow && !r.arrow && p.removeChild(n), t.arrow && r.arrow && t.arrowType !== r.arrowType && p.replaceChild(ie(r.arrowType), n), !t.interactive && r.interactive ? se(e, p) : t.interactive && !r.interactive && le(e, p), !t.inertia && r.inertia ? pe(p) : t.inertia && !r.inertia && oe(p), t.theme !== r.theme && (t.theme.split(' ').forEach(function (e) {
			p.classList.remove(e + '-theme')
		}), r.theme.split(' ').forEach(function (e) {
			p.classList.add(e + '-theme')
		}))
	}

	function ue(e, t) {
		var r = e.popper,
			a = e.options,
			p = a.onCreate,
			o = a.onUpdate;
		a.onCreate = a.onUpdate = function () {
			he(r), t(), o(), a.onCreate = p, a.onUpdate = o
		}
	}

	function ge(e) {
		Q(document.querySelectorAll(Ot.POPPER)).forEach(function (t) {
			var r = t._tippy;
			r && !0 === r.props.hideOnClick && (!e || t !== e.popper) && r.hide()
		})
	}

	function xe(e, t, r, a) {
		if (!e) return !0;
		var p = r.clientX,
			o = r.clientY,
			i = a.interactiveBorder,
			n = a.distance,
			s = t.top - o > ('top' === e ? i + n : i),
			l = o - t.bottom > ('bottom' === e ? i + n : i),
			d = t.left - p > ('left' === e ? i + n : i),
			c = p - t.right > ('right' === e ? i + n : i);
		return s || l || d || c
	}

	function we(e, t) {
		return -(e - t) + 'px'
	}

	function ve(e) {
		return '[object Object]' === {}.toString.call(e)
	}

	function ke(e, t) {
		return {}.hasOwnProperty.call(e, t)
	}

	function Ee(e) {
		return !isNaN(e) && !isNaN(parseFloat(e))
	}

	function Ce(e) {
		if (e instanceof Element || ve(e)) return [e];
		if (e instanceof NodeList) return Q(e);
		if (Array.isArray(e)) return e;
		try {
			return Q(document.querySelectorAll(e))
		} catch (t) {
			return []
		}
	}

	function Le(e, t, r) {
		if (Array.isArray(e)) {
			var a = e[t];
			return null == a ? r : a
		}
		return e
	}

	function Oe(e) {
		var t = window.scrollX || window.pageXOffset,
			r = window.scrollY || window.pageYOffset;
		e.focus(), scroll(t, r)
	}

	function Te(e) {
		setTimeout(e, 1)
	}

	function Se(e, t) {
		var r;
		return function () {
			var a = this,
				p = arguments;
			clearTimeout(r), r = setTimeout(function () {
				return e.apply(a, p)
			}, t)
		}
	}

	function Ae(e, t) {
		return e && e.modifiers && e.modifiers[t]
	}

	function Ye(e, t) {
		return -1 < e.indexOf(t)
	}

	function Pe() {
		Pt || (Pt = !0, it && document.body.classList.add('tippy-iOS'), window.performance && document.addEventListener('mousemove', De))
	}

	function De() {
		var e = performance.now();
		20 > e - Dt && (Pt = !1, document.removeEventListener('mousemove', De), !it && document.body.classList.remove('tippy-iOS')), Dt = e
	}

	function Xe(e) {
		var t = e.target;
		if (!(t instanceof Element)) return ge();
		var r = Z(t, Ot.POPPER);
		if (!(r && r._tippy && r._tippy.props.interactive)) {
			var a = $(t, function (e) {
				return e._tippy && e._tippy.reference === e
			});
			if (a) {
				var p = a._tippy,
					o = Ye(p.props.trigger, 'click');
				if (Pt || o) return ge(p);
				if (!0 !== p.props.hideOnClick || o) return;
				p.clearDelayTimeouts()
			}
			ge()
		}
	}

	function Ie() {
		var e = document,
			t = e.activeElement;
		t && t.blur && t._tippy && t.blur()
	}

	function Ne() {
		Q(document.querySelectorAll(Ot.POPPER)).forEach(function (e) {
			var t = e._tippy;
			t.props.livePlacement || t.popperInstance.scheduleUpdate()
		})
	}

	function He() {
		document.addEventListener('click', Xe, !0), document.addEventListener('touchstart', Pe, At), window.addEventListener('blur', Ie), window.addEventListener('resize', Ne), !nt && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) && document.addEventListener('pointerdown', Pe)
	}

	function We(e) {
		return !(e instanceof Element) || St.call(e, 'a[href],area[href],button,details,input,textarea,select,iframe,[tabindex]') && !e.hasAttribute('disabled')
	}

	function Me(e) {
		return Xt.reduce(function (t, r) {
			var a = (e.getAttribute('data-tippy-' + r) || '').trim();
			return a ? (t[r] = 'content' === r ? a : 'true' === a || 'false' !== a && (Ee(a) ? +a : '[' === a[0] || '{' === a[0] ? JSON.parse(a) : a), t) : t
		}, {})
	}

	function Be(e) {
		var t = {
			isVirtual: !0,
			attributes: e.attributes || {},
			setAttribute: function (t, r) {
				e.attributes[t] = r
			},
			getAttribute: function (t) {
				return e.attributes[t]
			},
			removeAttribute: function (t) {
				delete e.attributes[t]
			},
			hasAttribute: function (t) {
				return t in e.attributes
			},
			addEventListener: function () {},
			removeEventListener: function () {},
			classList: {
				classNames: {},
				add: function (t) {
					e.classList.classNames[t] = !0
				},
				remove: function (t) {
					delete e.classList.classNames[t]
				},
				contains: function (t) {
					return t in e.classList.classNames
				}
			}
		};
		for (var r in t) e[r] = t[r]
	}

	function Re(e, t) {
		var r = It({}, t, t.performance ? {} : Me(e));
		return r.arrow && (r.animateFill = !1), 'function' == typeof r.appendTo && (r.appendTo = t.appendTo(e)), 'function' == typeof r.content && (r.content = t.content(e)), r
	}

	function ze() {
		var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
			t = arguments[1];
		Object.keys(e).forEach(function (e) {
			if (!ke(t, e)) throw new Error('[tippy]: `' + e + '` is not a valid option')
		})
	}

	function Fe(e, t) {
		return (t ? e : {
			X: 'Y',
			Y: 'X'
		} [e]) || ''
	}

	function _e(e, t, r, p) {
		var o = t[0],
			i = t[1];
		if (!o && !i) return '';
		var n = {
			scale: function () {
				return i ? r ? o + ', ' + i : i + ', ' + o : '' + o
			}(),
			translate: function () {
				return i ? r ? p ? o + 'px, ' + -i + 'px' : o + 'px, ' + i + 'px' : p ? -i + 'px, ' + o + 'px' : i + 'px, ' + o + 'px' : p ? -o + 'px' : o + 'px'
			}()
		};
		return n[e]
	}

	function Ue(e, t) {
		var r = e.match(new RegExp(t + '([XY])'));
		return r ? r[1] : ''
	}

	function Ve(e, t) {
		var r = e.match(t);
		return r ? r[1].split(',').map(function (e) {
			return parseFloat(e, 10)
		}) : []
	}

	function qe(e, t) {
		var r = me(Z(e, Ot.POPPER)),
			a = Ye(['top', 'bottom'], r),
			p = Ye(['right', 'bottom'], r),
			o = {
				translate: {
					axis: Ue(t, 'translate'),
					numbers: Ve(t, Nt.translate)
				},
				scale: {
					axis: Ue(t, 'scale'),
					numbers: Ve(t, Nt.scale)
				}
			},
			i = t.replace(Nt.translate, 'translate' + Fe(o.translate.axis, a) + '(' + _e('translate', o.translate.numbers, a, p) + ')').replace(Nt.scale, 'scale' + Fe(o.scale.axis, a) + '(' + _e('scale', o.scale.numbers, a, p) + ')');
		e.style['undefined' == typeof document.body.style.transform ? 'webkitTransform' : 'transform'] = i
	}

	function je(e, t) {
		function r() {
			Te(function () {
				z = !1
			})
		}

		function a() {
			X = new MutationObserver(function () {
				q.popperInstance.update()
			}), X.observe(U, {
				childList: !0,
				subtree: !0,
				characterData: !0
			})
		}

		function p(e) {
			var t = N = e,
				r = t.clientX,
				a = t.clientY;
			if (q.popperInstance) {
				var p = me(q.popper),
					o = q.popperChildren.arrow ? 20 : 5,
					i = Ye(['top', 'bottom'], p),
					n = Ye(['left', 'right'], p),
					l = i ? Ze(o, r) : r,
					d = n ? Ze(o, a) : a;
				i && l > o && (l = Ge(r, window.innerWidth - o)), n && d > o && (d = Ge(a, window.innerHeight - o));
				var c = q.reference.getBoundingClientRect(),
					m = q.props.followCursor,
					f = 'horizontal' === m,
					h = 'vertical' === m;
				q.popperInstance.reference = {
					getBoundingClientRect: function () {
						return {
							width: 0,
							height: 0,
							top: f ? c.top : d,
							bottom: f ? c.bottom : d,
							left: h ? c.left : l,
							right: h ? c.right : l
						}
					},
					clientWidth: 0,
					clientHeight: 0
				}, q.popperInstance.scheduleUpdate(), 'initial' === m && q.state.isVisible && s()
			}
		}

		function o(e) {
			var t = Z(e.target, q.props.target);
			t && !t._tippy && (je(t, It({}, q.props, {
				target: '',
				showOnInit: !0
			})), i(e))
		}

		function i(e) {
			if (T(), !q.state.isVisible) {
				if (q.props.target) return o(e);
				if (M = !0, q.props.wait) return q.props.wait(q, e);
				x() && !q.state.isMounted && document.addEventListener('mousemove', p);
				var t = Le(q.props.delay, 0, st.delay);
				t ? H = setTimeout(function () {
					A()
				}, t) : A()
			}
		}

		function n() {
			if (T(), !q.state.isVisible) return s();
			M = !1;
			var e = Le(q.props.delay, 1, st.delay);
			e ? W = setTimeout(function () {
				q.state.isVisible && Y()
			}, e) : Y()
		}

		function s() {
			document.removeEventListener('mousemove', p), N = null
		}

		function l() {
			document.body.removeEventListener('mouseleave', n), document.removeEventListener('mousemove', F)
		}

		function d(e) {
			!q.state.isEnabled || y(e) || (!q.state.isVisible && (I = e), 'click' === e.type && !1 !== q.props.hideOnClick && q.state.isVisible ? n() : i(e))
		}

		function c(e) {
			var t = $(e.target, function (e) {
					return e._tippy
				}),
				r = Z(e.target, Ot.POPPER) === q.popper,
				a = t === q.reference;
			r || a || xe(me(q.popper), q.popper.getBoundingClientRect(), e, q.props) && (l(), n())
		}

		function m(e) {
			return y(e) ? void 0 : q.props.interactive ? (document.body.addEventListener('mouseleave', n), void document.addEventListener('mousemove', F)) : void n()
		}

		function f(e) {
			if (e.target === q.reference) {
				if (q.props.interactive) {
					if (!e.relatedTarget) return;
					if (Z(e.relatedTarget, Ot.POPPER)) return
				}
				n()
			}
		}

		function h(e) {
			Z(e.target, q.props.target) && i(e)
		}

		function b(e) {
			Z(e.target, q.props.target) && n()
		}

		function y(e) {
			var t = Ye(e.type, 'touch'),
				r = nt && Pt && q.props.touchHold && !t,
				a = Pt && !q.props.touchHold && t;
			return r || a
		}

		function u() {
			var e = q.props.popperOptions,
				t = q.popperChildren,
				r = t.tooltip,
				a = t.arrow;
			return new Lt(q.reference, q.popper, It({
				placement: q.props.placement
			}, e, {
				modifiers: It({}, e ? e.modifiers : {}, {
					preventOverflow: It({
						boundariesElement: q.props.boundary
					}, Ae(e, 'preventOverflow')),
					arrow: It({
						element: a,
						enabled: !!a
					}, Ae(e, 'arrow')),
					flip: It({
						enabled: q.props.flip,
						padding: q.props.distance + 5,
						behavior: q.props.flipBehavior
					}, Ae(e, 'flip')),
					offset: It({
						offset: q.props.offset
					}, Ae(e, 'offset'))
				}),
				onCreate: function () {
					r.style[me(q.popper)] = we(q.props.distance, st.distance), a && q.props.arrowTransform && qe(a, q.props.arrowTransform)
				},
				onUpdate: function () {
					var e = r.style;
					e.top = '', e.bottom = '', e.left = '', e.right = '', e[me(q.popper)] = we(q.props.distance, st.distance), a && q.props.arrowTransform && qe(a, q.props.arrowTransform)
				}
			}))
		}

		function g(e) {
			q.popperInstance ? !x() && (q.popperInstance.scheduleUpdate(), q.props.livePlacement && q.popperInstance.enableEventListeners()) : (q.popperInstance = u(), a(), (!q.props.livePlacement || x()) && q.popperInstance.disableEventListeners()), q.popperInstance.reference = q.reference;
			var t = q.popperChildren.arrow;
			if (x()) {
				t && (t.style.margin = '0');
				var r = Le(q.props.delay, 0, st.delay);
				I.type && p(r && N ? N : I)
			} else t && (t.style.margin = '');
			ue(q.popperInstance, e), q.props.appendTo.contains(q.popper) || (q.props.appendTo.appendChild(q.popper), q.props.onMount(q), q.state.isMounted = !0)
		}

		function x() {
			return q.props.followCursor && !Pt && 'focus' !== I.type
		}

		function w() {
			de([q.popper], ot ? 0 : q.props.updateDuration);
			(function e() {
				q.popperInstance && q.popperInstance.scheduleUpdate(), q.state.isMounted ? requestAnimationFrame(e) : de([q.popper], 0)
			})()
		}

		function v(e, t) {
			E(e, function () {
				!q.state.isVisible && q.props.appendTo.contains(q.popper) && t()
			})
		}

		function k(e, t) {
			E(e, t)
		}

		function E(e, t) {
			if (0 === e) return t();
			var r = q.popperChildren.tooltip,
				a = function a(p) {
					p.target === r && (ce(r, 'remove', a), t())
				};
			ce(r, 'remove', B), ce(r, 'add', a), B = a
		}

		function C(e, t) {
			var r = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2];
			q.reference.addEventListener(e, t, r), R.push({
				eventType: e,
				handler: t,
				options: r
			})
		}

		function L() {
			q.props.touchHold && !q.props.target && (C('touchstart', d, At), C('touchend', m, At)), q.props.trigger.trim().split(' ').forEach(function (e) {
				'manual' === e || (q.props.target ? 'mouseenter' === e ? (C('mouseover', h), C('mouseout', b)) : 'focus' === e ? (C('focusin', h), C('focusout', b)) : 'click' === e ? C(e, h) : void 0 : (C(e, d), 'mouseenter' === e ? C('mouseleave', m) : 'focus' === e ? C(ot ? 'focusout' : 'blur', f) : void 0))
			})
		}

		function O() {
			R.forEach(function (e) {
				var t = e.eventType,
					r = e.handler,
					a = e.options;
				q.reference.removeEventListener(t, r, a)
			}), R = []
		}

		function T() {
			clearTimeout(H), clearTimeout(W)
		}

		function S() {
			var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
			ze(e, st);
			var t = q.props,
				r = Re(q.reference, It({}, q.props, e, {
					performance: !0
				}));
			r.performance = ke(e, 'performance') ? e.performance : t.performance, q.props = r, (ke(e, 'trigger') || ke(e, 'touchHold')) && (O(), L()), ke(e, 'interactiveDebounce') && (l(), F = Se(c, e.interactiveDebounce)), ye(q.popper, t, r), q.popperChildren = ae(q.popper), q.popperInstance && lt.some(function (t) {
				return ke(e, t)
			}) && (q.popperInstance.destroy(), q.popperInstance = u(), !q.state.isVisible && q.popperInstance.disableEventListeners(), q.props.followCursor && N && p(N))
		}

		function A() {
			var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Le(q.props.duration, 0, st.duration[0]);
			return q.state.isDestroyed || !q.state.isEnabled || Pt && !q.props.touch ? void 0 : q.reference.isVirtual || document.documentElement.contains(q.reference) ? q.reference.hasAttribute('disabled') ? void 0 : z ? void(z = !1) : void(!1 === q.props.onShow(q) || (q.popper.style.visibility = 'visible', q.state.isVisible = !0, de([q.popper, q.popperChildren.tooltip, q.popperChildren.backdrop], 0), g(function () {
				q.state.isVisible && (!x() && q.popperInstance.update(), de([q.popperChildren.tooltip, q.popperChildren.backdrop, q.popperChildren.content], e), q.popperChildren.backdrop && (q.popperChildren.content.style.transitionDelay = Qe(e / 6) + 'ms'), q.props.interactive && q.reference.classList.add('tippy-active'), q.props.sticky && w(), fe([q.popperChildren.tooltip, q.popperChildren.backdrop, q.popperChildren.content], 'visible'), k(e, function () {
					0 === q.props.updateDuration && q.popperChildren.tooltip.classList.add('tippy-notransition'), q.props.autoFocus && q.props.interactive && Ye(['focus', 'click'], I.type) && Oe(q.popper), q.props.aria && q.reference.setAttribute('aria-' + q.props.aria, q.popper.id), q.props.onShown(q), q.state.isShown = !0
				}))
			}))) : P()
		}

		function Y() {
			var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Le(q.props.duration, 1, st.duration[1]);
			q.state.isDestroyed || !q.state.isEnabled || !1 === q.props.onHide(q) || (0 === q.props.updateDuration && q.popperChildren.tooltip.classList.remove('tippy-notransition'), q.props.interactive && q.reference.classList.remove('tippy-active'), q.popper.style.visibility = 'hidden', q.state.isVisible = !1, q.state.isShown = !1, de([q.popperChildren.tooltip, q.popperChildren.backdrop, q.popperChildren.content], e), fe([q.popperChildren.tooltip, q.popperChildren.backdrop, q.popperChildren.content], 'hidden'), q.props.autoFocus && q.props.interactive && !z && Ye(['focus', 'click'], I.type) && ('focus' === I.type && (z = !0), Oe(q.reference)), v(e, function () {
				M || s(), q.props.aria && q.reference.removeAttribute('aria-' + q.props.aria), q.popperInstance.disableEventListeners(), q.props.appendTo.removeChild(q.popper), q.state.isMounted = !1, q.props.onHidden(q)
			}))
		}

		function P(e) {
			q.state.isDestroyed || (q.state.isMounted && Y(0), O(), q.reference.removeEventListener('click', r), delete q.reference._tippy, q.props.target && e && Q(q.reference.querySelectorAll(q.props.target)).forEach(function (e) {
				return e._tippy && e._tippy.destroy()
			}), q.popperInstance && q.popperInstance.destroy(), X && X.disconnect(), q.state.isDestroyed = !0)
		}
		var D = Re(e, t);
		if (!D.multiple && e._tippy) return null;
		var X = null,
			I = {},
			N = null,
			H = 0,
			W = 0,
			M = !1,
			B = function () {},
			R = [],
			z = !1,
			F = 0 < D.interactiveDebounce ? Se(c, D.interactiveDebounce) : c,
			_ = Ht++,
			U = be(_, D);
		U.addEventListener('mouseenter', function (e) {
			q.props.interactive && q.state.isVisible && 'mouseenter' === I.type && i(e)
		}), U.addEventListener('mouseleave', function (e) {
			q.props.interactive && 'mouseenter' === I.type && 0 === q.props.interactiveDebounce && xe(me(U), U.getBoundingClientRect(), e, q.props) && n()
		});
		var V = ae(U),
			q = {
				id: _,
				reference: e,
				popper: U,
				popperChildren: V,
				popperInstance: null,
				props: D,
				state: {
					isEnabled: !0,
					isVisible: !1,
					isDestroyed: !1,
					isMounted: !1,
					isShown: !1
				},
				clearDelayTimeouts: T,
				set: S,
				setContent: function (e) {
					S({
						content: e
					})
				},
				show: A,
				hide: Y,
				enable: function () {
					q.state.isEnabled = !0
				},
				disable: function () {
					q.state.isEnabled = !1
				},
				destroy: P
			};
		return L(), e.addEventListener('click', r), D.lazy || (q.popperInstance = u(), q.popperInstance.disableEventListeners()), D.showOnInit && i(), !D.a11y || D.target || We(e) || e.setAttribute('tabindex', '0'), e._tippy = q, U._tippy = q, q
	}

	function Ke(e, t, r) {
		ze(t, st), Wt || (He(), Wt = !0);
		var a = It({}, st, t);
		ve(e) && Be(e);
		var p = Ce(e),
			o = p[0],
			i = (r && o ? [o] : p).reduce(function (e, t) {
				var r = t && je(t, a);
				return r && e.push(r), e
			}, []),
			n = {
				targets: e,
				props: a,
				instances: i,
				destroyAll: function () {
					n.instances.forEach(function (e) {
						e.destroy()
					}), n.instances = []
				}
			};
		return n
	}
	for (var Ge = Math.min, Je = Math.floor, Qe = Math.round, Ze = Math.max, $e = '.tippy-iOS{cursor:pointer!important}.tippy-notransition{transition:none!important}.tippy-popper{-webkit-perspective:700px;perspective:700px;z-index:9999;outline:0;transition-timing-function:cubic-bezier(.165,.84,.44,1);pointer-events:none;line-height:1.4;max-width:calc(100% - 10px)}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-8px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;bottom:-7px;margin:0 6px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 25%;transform-origin:0 25%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-55%);transform:scale(1) translate(-50%,-55%)}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%,-45%);transform:scale(.2) translate(-50%,-45%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{-webkit-transform:translateY(-10px) rotateX(0);transform:translateY(-10px) rotateX(0)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(60deg);transform:translateY(0) rotateX(60deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(-10px) scale(1);transform:translateY(-10px) scale(1)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(.5);transform:translateY(0) scale(.5)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-8px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(0);transform:rotate(0)}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;top:-7px;margin:0 6px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -50%;transform-origin:0 -50%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-45%);transform:scale(1) translate(-50%,-45%)}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%);transform:scale(.2) translate(-50%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{-webkit-transform:translateY(10px) rotateX(0);transform:translateY(10px) rotateX(0)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(-60deg);transform:translateY(0) rotateX(-60deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(10px) scale(1);transform:translateY(10px) scale(1)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(.5);transform:translateY(0) scale(.5)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-16px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-75%,-50%);transform:scale(.2) translate(-75%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{-webkit-transform:translateX(-10px) rotateY(0);transform:translateX(-10px) rotateY(0)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(-60deg);transform:translateX(0) rotateY(-60deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(-10px) scale(1);transform:translateX(-10px) scale(1)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(.5);transform:translateX(0) scale(.5)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-16px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-50% 0;transform-origin:-50% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-25%,-50%);transform:scale(.2) translate(-25%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{-webkit-transform:translateX(10px) rotateY(0);transform:translateX(10px) rotateY(0)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(60deg);transform:translateX(0) rotateY(60deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(10px) scale(1);transform:translateX(10px) scale(1)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(.5);transform:translateX(0) scale(.5)}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:.9rem;padding:.3rem .6rem;max-width:350px;text-align:center;will-change:transform;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#333}.tippy-tooltip[data-size=small]{padding:.2rem .4rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.4rem .8rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:transparent}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:24px;height:8px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;will-change:transform;background-color:#333;border-radius:50%;width:calc(110% + 2rem);left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:"";float:left;padding-top:100%}.tippy-backdrop+.tippy-content{transition-property:opacity;will-change:opacity}.tippy-backdrop+.tippy-content[data-state=visible]{opacity:1}.tippy-backdrop+.tippy-content[data-state=hidden]{opacity:0}', et = '3.4.1', tt = 'undefined' != typeof window, rt = tt ? navigator : {}, at = tt ? window : {}, pt = ('MutationObserver' in at), ot = /MSIE |Trident\//.test(rt.userAgent), it = /iPhone|iPad|iPod/.test(rt.platform) && !at.MSStream, nt = ('ontouchstart' in at), st = {
			a11y: !0,
			allowHTML: !0,
			animateFill: !0,
			animation: 'shift-away',
			appendTo: function () {
				return document.body
			},
			aria: 'describedby',
			arrow: !1,
			arrowTransform: '',
			arrowType: 'sharp',
			autoFocus: !0,
			boundary: 'scrollParent',
			content: '',
			delay: [0, 20],
			distance: 10,
			duration: [325, 275],
			flip: !0,
			flipBehavior: 'flip',
			followCursor: !1,
			hideOnClick: !0,
			inertia: !1,
			interactive: !1,
			interactiveBorder: 2,
			interactiveDebounce: 0,
			lazy: !0,
			livePlacement: !0,
			maxWidth: '',
			multiple: !1,
			offset: 0,
			onHidden: function () {},
			onHide: function () {},
			onMount: function () {},
			onShow: function () {},
			onShown: function () {},
			performance: !1,
			placement: 'top',
			popperOptions: {},
			shouldPopperHideOnBlur: function () {
				return !0
			},
			showOnInit: !1,
			size: 'regular',
			sticky: !1,
			target: '',
			theme: 'dark',
			touch: !0,
			touchHold: !1,
			trigger: 'mouseenter focus',
			updateDuration: 200,
			wait: null,
			zIndex: 9999
		}, lt = ['arrow', 'arrowType', 'distance', 'flip', 'flipBehavior', 'offset', 'placement', 'popperOptions'], dt = 'undefined' != typeof window && 'undefined' != typeof document, ct = ['Edge', 'Trident', 'Firefox'], mt = 0, ft = 0; ft < ct.length; ft += 1)
		if (dt && 0 <= navigator.userAgent.indexOf(ct[ft])) {
			mt = 1;
			break
		} var i = dt && window.Promise,
		ht = i ? function (e) {
			var t = !1;
			return function () {
				t || (t = !0, window.Promise.resolve().then(function () {
					t = !1, e()
				}))
			}
		} : function (e) {
			var t = !1;
			return function () {
				t || (t = !0, setTimeout(function () {
					t = !1, e()
				}, mt))
			}
		},
		bt = dt && !!(window.MSInputMethodContext && document.documentMode),
		yt = dt && /MSIE 10/.test(navigator.userAgent),
		ut = function (e, t) {
			if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
		},
		gt = function () {
			function e(e, t) {
				for (var r, a = 0; a < t.length; a++) r = t[a], r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
			return function (t, r, a) {
				return r && e(t.prototype, r), a && e(t, a), t
			}
		}(),
		xt = function (e, t, r) {
			return t in e ? Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = r, e
		},
		wt = Object.assign || function (e) {
			for (var t, r = 1; r < arguments.length; r++)
				for (var a in t = arguments[r], t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
			return e
		},
		vt = dt && /Firefox/i.test(navigator.userAgent),
		kt = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
		Et = kt.slice(3),
		Ct = {
			FLIP: 'flip',
			CLOCKWISE: 'clockwise',
			COUNTERCLOCKWISE: 'counterclockwise'
		},
		Lt = function () {
			function t(r, a) {
				var p = this,
					o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
				ut(this, t), this.scheduleUpdate = function () {
					return requestAnimationFrame(p.update)
				}, this.update = ht(this.update.bind(this)), this.options = wt({}, t.Defaults, o), this.state = {
					isDestroyed: !1,
					isCreated: !1,
					scrollParents: []
				}, this.reference = r && r.jquery ? r[0] : r, this.popper = a && a.jquery ? a[0] : a, this.options.modifiers = {}, Object.keys(wt({}, t.Defaults.modifiers, o.modifiers)).forEach(function (e) {
					p.options.modifiers[e] = wt({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
				}), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
					return wt({
						name: e
					}, p.options.modifiers[e])
				}).sort(function (e, t) {
					return e.order - t.order
				}), this.modifiers.forEach(function (t) {
					t.enabled && e(t.onLoad) && t.onLoad(p.reference, p.popper, p.options, t, p.state)
				}), this.update();
				var i = this.options.eventsEnabled;
				i && this.enableEventListeners(), this.state.eventsEnabled = i
			}
			return gt(t, [{
				key: 'update',
				value: function () {
					return P.call(this)
				}
			}, {
				key: 'destroy',
				value: function () {
					return I.call(this)
				}
			}, {
				key: 'enableEventListeners',
				value: function () {
					return M.call(this)
				}
			}, {
				key: 'disableEventListeners',
				value: function () {
					return R.call(this)
				}
			}]), t
		}();
	Lt.Utils = ('undefined' == typeof window ? global : window).PopperUtils, Lt.placements = kt, Lt.Defaults = {
		placement: 'bottom',
		positionFixed: !1,
		eventsEnabled: !0,
		removeOnDestroy: !1,
		onCreate: function () {},
		onUpdate: function () {},
		modifiers: {
			shift: {
				order: 100,
				enabled: !0,
				fn: function (e) {
					var t = e.placement,
						r = t.split('-')[0],
						a = t.split('-')[1];
					if (a) {
						var p = e.offsets,
							o = p.reference,
							i = p.popper,
							n = -1 !== ['bottom', 'top'].indexOf(r),
							s = n ? 'left' : 'top',
							l = n ? 'width' : 'height',
							d = {
								start: xt({}, s, o[s]),
								end: xt({}, s, o[s] + o[l] - i[l])
							};
						e.offsets.popper = wt({}, i, d[a])
					}
					return e
				}
			},
			offset: {
				order: 200,
				enabled: !0,
				fn: J,
				offset: 0
			},
			preventOverflow: {
				order: 300,
				enabled: !0,
				fn: function (e, t) {
					var r = t.boundariesElement || o(e.instance.popper);
					e.instance.reference === r && (r = o(r));
					var a = X('transform'),
						p = e.instance.popper.style,
						i = p.top,
						n = p.left,
						s = p[a];
					p.top = '', p.left = '', p[a] = '';
					var l = v(e.instance.popper, e.instance.reference, t.padding, r, e.positionFixed);
					p.top = i, p.left = n, p[a] = s, t.boundaries = l;
					var d = t.priority,
						c = e.offsets.popper,
						m = {
							primary: function (e) {
								var r = c[e];
								return c[e] < l[e] && !t.escapeWithReference && (r = Ze(c[e], l[e])), xt({}, e, r)
							},
							secondary: function (e) {
								var r = 'right' === e ? 'left' : 'top',
									a = c[r];
								return c[e] > l[e] && !t.escapeWithReference && (a = Ge(c[r], l[e] - ('right' === e ? c.width : c.height))), xt({}, r, a)
							}
						};
					return d.forEach(function (e) {
						var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
						c = wt({}, c, m[t](e))
					}), e.offsets.popper = c, e
				},
				priority: ['left', 'right', 'top', 'bottom'],
				padding: 5,
				boundariesElement: 'scrollParent'
			},
			keepTogether: {
				order: 400,
				enabled: !0,
				fn: function (e) {
					var t = e.offsets,
						r = t.popper,
						a = t.reference,
						p = e.placement.split('-')[0],
						o = Je,
						i = -1 !== ['top', 'bottom'].indexOf(p),
						n = i ? 'right' : 'bottom',
						s = i ? 'left' : 'top',
						l = i ? 'width' : 'height';
					return r[n] < o(a[s]) && (e.offsets.popper[s] = o(a[s]) - r[l]), r[s] > o(a[n]) && (e.offsets.popper[s] = o(a[n])), e
				}
			},
			arrow: {
				order: 500,
				enabled: !0,
				fn: function (e, r) {
					var a;
					if (!V(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
					var p = r.element;
					if ('string' == typeof p) {
						if (p = e.instance.popper.querySelector(p), !p) return e;
					} else if (!e.instance.popper.contains(p)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
					var o = e.placement.split('-')[0],
						i = e.offsets,
						n = i.popper,
						s = i.reference,
						l = -1 !== ['left', 'right'].indexOf(o),
						d = l ? 'height' : 'width',
						c = l ? 'Top' : 'Left',
						m = c.toLowerCase(),
						f = l ? 'left' : 'top',
						h = l ? 'bottom' : 'right',
						y = L(p)[d];
					s[h] - y < n[m] && (e.offsets.popper[m] -= n[m] - (s[h] - y)), s[m] + y > n[h] && (e.offsets.popper[m] += s[m] + y - n[h]), e.offsets.popper = b(e.offsets.popper);
					var u = s[m] + s[d] / 2 - y / 2,
						g = t(e.instance.popper),
						x = parseFloat(g['margin' + c], 10),
						w = parseFloat(g['border' + c + 'Width'], 10),
						v = u - e.offsets.popper[m] - x - w;
					return v = Ze(Ge(n[d] - y, v), 0), e.arrowElement = p, e.offsets.arrow = (a = {}, xt(a, m, Qe(v)), xt(a, f, ''), a), e
				},
				element: '[x-arrow]'
			},
			flip: {
				order: 600,
				enabled: !0,
				fn: function (e, t) {
					if (D(e.instance.modifiers, 'inner')) return e;
					if (e.flipped && e.placement === e.originalPlacement) return e;
					var r = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
						a = e.placement.split('-')[0],
						p = O(a),
						o = e.placement.split('-')[1] || '',
						i = [];
					switch (t.behavior) {
						case Ct.FLIP:
							i = [a, p];
							break;
						case Ct.CLOCKWISE:
							i = j(a);
							break;
						case Ct.COUNTERCLOCKWISE:
							i = j(a, !0);
							break;
						default:
							i = t.behavior;
					}
					return i.forEach(function (n, s) {
						if (a !== n || i.length === s + 1) return e;
						a = e.placement.split('-')[0], p = O(a);
						var l = e.offsets.popper,
							d = e.offsets.reference,
							c = Je,
							m = 'left' === a && c(l.right) > c(d.left) || 'right' === a && c(l.left) < c(d.right) || 'top' === a && c(l.bottom) > c(d.top) || 'bottom' === a && c(l.top) < c(d.bottom),
							f = c(l.left) < c(r.left),
							h = c(l.right) > c(r.right),
							b = c(l.top) < c(r.top),
							y = c(l.bottom) > c(r.bottom),
							u = 'left' === a && f || 'right' === a && h || 'top' === a && b || 'bottom' === a && y,
							g = -1 !== ['top', 'bottom'].indexOf(a),
							x = !!t.flipVariations && (g && 'start' === o && f || g && 'end' === o && h || !g && 'start' === o && b || !g && 'end' === o && y);
						(m || u || x) && (e.flipped = !0, (m || u) && (a = i[s + 1]), x && (o = q(o)), e.placement = a + (o ? '-' + o : ''), e.offsets.popper = wt({}, e.offsets.popper, T(e.instance.popper, e.offsets.reference, e.placement)), e = Y(e.instance.modifiers, e, 'flip'))
					}), e
				},
				behavior: 'flip',
				padding: 5,
				boundariesElement: 'viewport'
			},
			inner: {
				order: 700,
				enabled: !1,
				fn: function (e) {
					var t = e.placement,
						r = t.split('-')[0],
						a = e.offsets,
						p = a.popper,
						o = a.reference,
						i = -1 !== ['left', 'right'].indexOf(r),
						n = -1 === ['top', 'left'].indexOf(r);
					return p[i ? 'left' : 'top'] = o[r] - (n ? p[i ? 'width' : 'height'] : 0), e.placement = O(t), e.offsets.popper = b(p), e
				}
			},
			hide: {
				order: 800,
				enabled: !0,
				fn: function (e) {
					if (!V(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
					var t = e.offsets.reference,
						r = S(e.instance.modifiers, function (e) {
							return 'preventOverflow' === e.name
						}).boundaries;
					if (t.bottom < r.top || t.left > r.right || t.top > r.bottom || t.right < r.left) {
						if (!0 === e.hide) return e;
						e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
					} else {
						if (!1 === e.hide) return e;
						e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
					}
					return e
				}
			},
			computeStyle: {
				order: 850,
				enabled: !0,
				fn: function (e, t) {
					var r = t.x,
						a = t.y,
						p = e.offsets.popper,
						i = S(e.instance.modifiers, function (e) {
							return 'applyStyle' === e.name
						}).gpuAcceleration;
					void 0 !== i && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
					var n = void 0 === i ? t.gpuAcceleration : i,
						s = o(e.instance.popper),
						l = u(s),
						d = {
							position: p.position
						},
						c = U(e, 2 > window.devicePixelRatio || !vt),
						m = 'bottom' === r ? 'top' : 'bottom',
						f = 'right' === a ? 'left' : 'right',
						h = X('transform'),
						b = void 0,
						y = void 0;
					if (y = 'bottom' == m ? 'HTML' === s.nodeName ? -s.clientHeight + c.bottom : -l.height + c.bottom : c.top, b = 'right' == f ? 'HTML' === s.nodeName ? -s.clientWidth + c.right : -l.width + c.right : c.left, n && h) d[h] = 'translate3d(' + b + 'px, ' + y + 'px, 0)', d[m] = 0, d[f] = 0, d.willChange = 'transform';
					else {
						var g = 'bottom' == m ? -1 : 1,
							x = 'right' == f ? -1 : 1;
						d[m] = y * g, d[f] = b * x, d.willChange = m + ', ' + f
					}
					var w = {
						"x-placement": e.placement
					};
					return e.attributes = wt({}, w, e.attributes), e.styles = wt({}, d, e.styles), e.arrowStyles = wt({}, e.offsets.arrow, e.arrowStyles), e
				},
				gpuAcceleration: !0,
				x: 'bottom',
				y: 'right'
			},
			applyStyle: {
				order: 900,
				enabled: !0,
				fn: function (e) {
					return F(e.instance.popper, e.styles), _(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && F(e.arrowElement, e.arrowStyles), e
				},
				onLoad: function (e, t, r, a, p) {
					var o = C(p, t, e, r.positionFixed),
						i = E(r.placement, o, t, e, r.modifiers.flip.boundariesElement, r.modifiers.flip.padding);
					return t.setAttribute('x-placement', i), F(t, {
						position: r.positionFixed ? 'fixed' : 'absolute'
					}), r
				},
				gpuAcceleration: void 0
			}
		}
	};
	var Ot = {
			POPPER: '.tippy-popper',
			TOOLTIP: '.tippy-tooltip',
			CONTENT: '.tippy-content',
			BACKDROP: '.tippy-backdrop',
			ARROW: '.tippy-arrow',
			ROUND_ARROW: '.tippy-roundarrow'
		},
		Tt = tt ? Element.prototype : {},
		St = Tt.matches || Tt.matchesSelector || Tt.webkitMatchesSelector || Tt.mozMatchesSelector || Tt.msMatchesSelector,
		At = {
			passive: !0
		},
		Yt = {
			x: !0
		},
		Pt = !1,
		Dt = 0,
		Xt = Object.keys(st),
		It = Object.assign || function (e) {
			for (var t, r = 1; r < arguments.length; r++)
				for (var a in t = arguments[r], t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
			return e
		},
		Nt = {
			translate: /translateX?Y?\(([^)]+)\)/,
			scale: /scaleX?Y?\(([^)]+)\)/
		},
		Ht = 1,
		Wt = !1;
	Ke.version = et, Ke.defaults = st, Ke.one = function (e, t) {
		return Ke(e, t, !0).instances[0]
	}, Ke.setDefaults = function (e) {
		Object.keys(e).forEach(function (t) {
			st[t] = e[t]
		})
	}, Ke.disableAnimations = function () {
		Ke.setDefaults({
			duration: 0,
			updateDuration: 0,
			animateFill: !1
		})
	}, Ke.hideAllPoppers = ge, Ke.useCapture = function () {};
	return tt && setTimeout(function () {
			Q(document.querySelectorAll('[data-tippy]')).forEach(function (e) {
				var t = e.getAttribute('data-tippy');
				t && Ke(e, {
					content: t
				})
			})
		}),
		function (e) {
			if (pt) {
				var t = document.createElement('style');
				t.type = 'text/css', t.textContent = e, document.head.insertBefore(t, document.head.firstChild)
			}
		}($e), Ke
});
//# sourceMappingURL=tippy.all.min.js.map


/*! odometer
 * ver 0.4.8
 *
 *
 * */
(function () {
	var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G = [].slice;
	q = '<span class="odometer-value"></span>', n = '<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' + q + "</span></span>", d = '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' + n + "</span></span>", g = '<span class="odometer-formatting-mark"></span>', c = "(,ddd).dd", h = /^\(?([^)]*)\)?(?:(.)(d+))?$/, i = 30, f = 2e3, a = 20, j = 2, e = .5, k = 1e3 / i, b = 1e3 / a, o = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", y = document.createElement("div").style, p = null != y.transition || null != y.webkitTransition || null != y.mozTransition || null != y.oTransition, w = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, l = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, s = function (a) {
		var b;
		return b = document.createElement("div"), b.innerHTML = a, b.children[0]
	}, v = function (a, b) {
		return a.className = a.className.replace(new RegExp("(^| )" + b.split(" ").join("|") + "( |$)", "gi"), " ")
	}, r = function (a, b) {
		return v(a, b), a.className += " " + b
	}, z = function (a, b) {
		var c;
		return null != document.createEvent ? (c = document.createEvent("HTMLEvents"), c.initEvent(b, !0, !0), a.dispatchEvent(c)) : void 0
	}, u = function () {
		var a, b;
		return null != (a = null != (b = window.performance) && "function" == typeof b.now ? b.now() : void 0) ? a : +new Date
	}, x = function (a, b) {
		return null == b && (b = 0), b ? (a *= Math.pow(10, b), a += .5, a = Math.floor(a), a /= Math.pow(10, b)) : Math.round(a)
	}, A = function (a) {
		return 0 > a ? Math.ceil(a) : Math.floor(a)
	}, t = function (a) {
		return a - x(a)
	}, C = !1, (B = function () {
		var a, b, c, d, e;
		if (!C && null != window.jQuery) {
			for (C = !0, d = ["html", "text"], e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(function (a) {
				var b;
				return b = window.jQuery.fn[a], window.jQuery.fn[a] = function (a) {
					var c;
					return null == a || null == (null != (c = this[0]) ? c.odometer : void 0) ? b.apply(this, arguments) : this[0].odometer.update(a)
				}
			}(a));
			return e
		}
	})(), setTimeout(B, 0), m = function () {
		function a(b) {
			var c, d, e, g, h, i, l, m, n, o, p = this;
			if (this.options = b, this.el = this.options.el, null != this.el.odometer) return this.el.odometer;
			this.el.odometer = this, m = a.options;
			for (d in m) g = m[d], null == this.options[d] && (this.options[d] = g);
			null == (h = this.options).duration && (h.duration = f), this.MAX_VALUES = this.options.duration / k / j | 0, this.resetFormat(), this.value = this.cleanValue(null != (n = this.options.value) ? n : ""), this.renderInside(), this.render();
			try {
				for (o = ["innerHTML", "innerText", "textContent"], i = 0, l = o.length; l > i; i++) e = o[i], null != this.el[e] && ! function (a) {
					return Object.defineProperty(p.el, a, {
						get: function () {
							var b;
							return "innerHTML" === a ? p.inside.outerHTML : null != (b = p.inside.innerText) ? b : p.inside.textContent
						},
						set: function (a) {
							return p.update(a)
						}
					})
				}(e)
			} catch (q) {
				c = q, this.watchForMutations()
			}
		}
		return a.prototype.renderInside = function () {
			return this.inside = document.createElement("div"), this.inside.className = "odometer-inside", this.el.innerHTML = "", this.el.appendChild(this.inside)
		}, a.prototype.watchForMutations = function () {
			var a, b = this;
			if (null != l) try {
				return null == this.observer && (this.observer = new l(function (a) {
					var c;
					return c = b.el.innerText, b.renderInside(), b.render(b.value), b.update(c)
				})), this.watchMutations = !0, this.startWatchingMutations()
			} catch (c) {
				a = c
			}
		}, a.prototype.startWatchingMutations = function () {
			return this.watchMutations ? this.observer.observe(this.el, {
				childList: !0
			}) : void 0
		}, a.prototype.stopWatchingMutations = function () {
			var a;
			return null != (a = this.observer) ? a.disconnect() : void 0
		}, a.prototype.cleanValue = function (a) {
			var b;
			return "string" == typeof a && (a = a.replace(null != (b = this.format.radix) ? b : ".", "<radix>"), a = a.replace(/[.,]/g, ""), a = a.replace("<radix>", "."), a = parseFloat(a, 10) || 0), x(a, this.format.precision)
		}, a.prototype.bindTransitionEnd = function () {
			var a, b, c, d, e, f, g = this;
			if (!this.transitionEndBound) {
				for (this.transitionEndBound = !0, b = !1, e = o.split(" "), f = [], c = 0, d = e.length; d > c; c++) a = e[c], f.push(this.el.addEventListener(a, function () {
					return b ? !0 : (b = !0, setTimeout(function () {
						return g.render(), b = !1, z(g.el, "odometerdone")
					}, 0), !0)
				}, !1));
				return f
			}
		}, a.prototype.resetFormat = function () {
			var a, b, d, e, f, g, i, j;
			if (a = null != (i = this.options.format) ? i : c, a || (a = "d"), d = h.exec(a), !d) throw new Error("Odometer: Unparsable digit format");
			return j = d.slice(1, 4), g = j[0], f = j[1], b = j[2], e = (null != b ? b.length : void 0) || 0, this.format = {
				repeating: g,
				radix: f,
				precision: e
			}
		}, a.prototype.render = function (a) {
			var b, c, d, e, f, g, h;
			for (null == a && (a = this.value), this.stopWatchingMutations(), this.resetFormat(), this.inside.innerHTML = "", f = this.options.theme, b = this.el.className.split(" "), e = [], g = 0, h = b.length; h > g; g++) c = b[g], c.length && ((d = /^odometer-theme-(.+)$/.exec(c)) ? f = d[1] : /^odometer(-|$)/.test(c) || e.push(c));
			return e.push("odometer"), p || e.push("odometer-no-transitions"), f ? e.push("odometer-theme-" + f) : e.push("odometer-auto-theme"), this.el.className = e.join(" "), this.ribbons = {}, this.formatDigits(a), this.startWatchingMutations()
		}, a.prototype.formatDigits = function (a) {
			var b, c, d, e, f, g, h, i, j, k;
			if (this.digits = [], this.options.formatFunction)
				for (d = this.options.formatFunction(a), j = d.split("").reverse(), f = 0, h = j.length; h > f; f++) c = j[f], c.match(/0-9/) ? (b = this.renderDigit(), b.querySelector(".odometer-value").innerHTML = c, this.digits.push(b), this.insertDigit(b)) : this.addSpacer(c);
			else
				for (e = !this.format.precision || !t(a) || !1, k = a.toString().split("").reverse(), g = 0, i = k.length; i > g; g++) b = k[g], "." === b && (e = !0), this.addDigit(b, e)
		}, a.prototype.update = function (a) {
			var b, c = this;
			return a = this.cleanValue(a), (b = a - this.value) ? (v(this.el, "odometer-animating-up odometer-animating-down odometer-animating"), b > 0 ? r(this.el, "odometer-animating-up") : r(this.el, "odometer-animating-down"), this.stopWatchingMutations(), this.animate(a), this.startWatchingMutations(), setTimeout(function () {
				return c.el.offsetHeight, r(c.el, "odometer-animating")
			}, 0), this.value = a) : void 0
		}, a.prototype.renderDigit = function () {
			return s(d)
		}, a.prototype.insertDigit = function (a, b) {
			return null != b ? this.inside.insertBefore(a, b) : this.inside.children.length ? this.inside.insertBefore(a, this.inside.children[0]) : this.inside.appendChild(a)
		}, a.prototype.addSpacer = function (a, b, c) {
			var d;
			return d = s(g), d.innerHTML = a, c && r(d, c), this.insertDigit(d, b)
		}, a.prototype.addDigit = function (a, b) {
			var c, d, e, f;
			if (null == b && (b = !0), "-" === a) return this.addSpacer(a, null, "odometer-negation-mark");
			if ("." === a) return this.addSpacer(null != (f = this.format.radix) ? f : ".", null, "odometer-radix-mark");
			if (b)
				for (e = !1;;) {
					if (!this.format.repeating.length) {
						if (e) throw new Error("Bad odometer format without digits");
						this.resetFormat(), e = !0
					}
					if (c = this.format.repeating[this.format.repeating.length - 1], this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1), "d" === c) break;
					this.addSpacer(c)
				}
			return d = this.renderDigit(), d.querySelector(".odometer-value").innerHTML = a, this.digits.push(d), this.insertDigit(d)
		}, a.prototype.animate = function (a) {
			return p && "count" !== this.options.animation ? this.animateSlide(a) : this.animateCount(a)
		}, a.prototype.animateCount = function (a) {
			var c, d, e, f, g, h = this;
			if (d = +a - this.value) return f = e = u(), c = this.value, (g = function () {
				var i, j, k;
				return u() - f > h.options.duration ? (h.value = a, h.render(), void z(h.el, "odometerdone")) : (i = u() - e, i > b && (e = u(), k = i / h.options.duration, j = d * k, c += j, h.render(Math.round(c))), null != w ? w(g) : setTimeout(g, b))
			})()
		}, a.prototype.getDigitCount = function () {
			var a, b, c, d, e, f;
			for (d = 1 <= arguments.length ? G.call(arguments, 0) : [], a = e = 0, f = d.length; f > e; a = ++e) c = d[a], d[a] = Math.abs(c);
			return b = Math.max.apply(Math, d), Math.ceil(Math.log(b + 1) / Math.log(10))
		}, a.prototype.getFractionalDigitCount = function () {
			var a, b, c, d, e, f, g;
			for (e = 1 <= arguments.length ? G.call(arguments, 0) : [], b = /^\-?\d*\.(\d*?)0*$/, a = f = 0, g = e.length; g > f; a = ++f) d = e[a], e[a] = d.toString(), c = b.exec(e[a]), null == c ? e[a] = 0 : e[a] = c[1].length;
			return Math.max.apply(Math, e)
		}, a.prototype.resetDigits = function () {
			return this.digits = [], this.ribbons = [], this.inside.innerHTML = "", this.resetFormat()
		}, a.prototype.animateSlide = function (a) {
			var b, c, d, f, g, h, i, j, k, l, m, n, o, p, q, s, t, u, v, w, x, y, z, B, C, D, E;
			if (s = this.value, j = this.getFractionalDigitCount(s, a), j && (a *= Math.pow(10, j), s *= Math.pow(10, j)), d = a - s) {
				for (this.bindTransitionEnd(), f = this.getDigitCount(s, a), g = [], b = 0, m = v = 0; f >= 0 ? f > v : v > f; m = f >= 0 ? ++v : --v) {
					if (t = A(s / Math.pow(10, f - m - 1)), i = A(a / Math.pow(10, f - m - 1)), h = i - t, Math.abs(h) > this.MAX_VALUES) {
						for (l = [], n = h / (this.MAX_VALUES + this.MAX_VALUES * b * e), c = t; h > 0 && i > c || 0 > h && c > i;) l.push(Math.round(c)), c += n;
						l[l.length - 1] !== i && l.push(i), b++
					} else l = function () {
						E = [];
						for (var a = t; i >= t ? i >= a : a >= i; i >= t ? a++ : a--) E.push(a);
						return E
					}.apply(this);
					for (m = w = 0, y = l.length; y > w; m = ++w) k = l[m], l[m] = Math.abs(k % 10);
					g.push(l)
				}
				for (this.resetDigits(), D = g.reverse(), m = x = 0, z = D.length; z > x; m = ++x)
					for (l = D[m], this.digits[m] || this.addDigit(" ", m >= j), null == (u = this.ribbons)[m] && (u[m] = this.digits[m].querySelector(".odometer-ribbon-inner")), this.ribbons[m].innerHTML = "", 0 > d && (l = l.reverse()), o = C = 0, B = l.length; B > C; o = ++C) k = l[o], q = document.createElement("div"), q.className = "odometer-value", q.innerHTML = k, this.ribbons[m].appendChild(q), o === l.length - 1 && r(q, "odometer-last-value"), 0 === o && r(q, "odometer-first-value");
				return 0 > t && this.addDigit("-"), p = this.inside.querySelector(".odometer-radix-mark"), null != p && p.parent.removeChild(p), j ? this.addSpacer(this.format.radix, this.digits[j - 1], "odometer-radix-mark") : void 0
			}
		}, a
	}(), m.options = null != (E = window.odometerOptions) ? E : {}, setTimeout(function () {
		var a, b, c, d, e;
		if (window.odometerOptions) {
			d = window.odometerOptions, e = [];
			for (a in d) b = d[a], e.push(null != (c = m.options)[a] ? (c = m.options)[a] : c[a] = b);
			return e
		}
	}, 0), m.init = function () {
		var a, b, c, d, e, f;
		if (null != document.querySelectorAll) {
			for (b = document.querySelectorAll(m.options.selector || ".odometer"), f = [], c = 0, d = b.length; d > c; c++) a = b[c], f.push(a.odometer = new m({
				el: a,
				value: null != (e = a.innerText) ? e : a.textContent
			}));
			return f
		}
	}, null != (null != (F = document.documentElement) ? F.doScroll : void 0) && null != document.createEventObject ? (D = document.onreadystatechange, document.onreadystatechange = function () {
		return "complete" === document.readyState && m.options.auto !== !1 && m.init(), null != D ? D.apply(this, arguments) : void 0
	}) : document.addEventListener("DOMContentLoaded", function () {
		return m.options.auto !== !1 ? m.init() : void 0
	}, !1), "function" == typeof define && define.amd ? define([], function () {
		return m
	}) : "undefined" != typeof exports && null !== exports ? module.exports = m : window.Odometer = m
}).call(this);



/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

! function (t, e) {
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
		return e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
	"use strict";

	function i(i, s, a) {
		function u(t, e, o) {
			var n, s = "$()." + i + '("' + e + '")';
			return t.each(function (t, u) {
				var h = a.data(u, i);
				if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
				var d = h[e];
				if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
				var l = d.apply(h, o);
				n = void 0 === n ? l : n
			}), void 0 !== n ? n : t
		}

		function h(t, e) {
			t.each(function (t, o) {
				var n = a.data(o, i);
				n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
			})
		}
		a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
			a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
		}), a.fn[i] = function (t) {
			if ("string" == typeof t) {
				var e = n.call(arguments, 1);
				return u(this, t, e)
			}
			return h(this, t), this
		}, o(a))
	}

	function o(t) {
		!t || t && t.bridget || (t.bridget = i)
	}
	var n = Array.prototype.slice,
		s = t.console,
		r = "undefined" == typeof s ? function () {} : function (t) {
			s.error(t)
		};
	return o(e || t.jQuery), i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
	function t() {}
	var e = t.prototype;
	return e.on = function (t, e) {
		if (t && e) {
			var i = this._events = this._events || {},
				o = i[t] = i[t] || [];
			return o.indexOf(e) == -1 && o.push(e), this
		}
	}, e.once = function (t, e) {
		if (t && e) {
			this.on(t, e);
			var i = this._onceEvents = this._onceEvents || {},
				o = i[t] = i[t] || {};
			return o[e] = !0, this
		}
	}, e.off = function (t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			var o = i.indexOf(e);
			return o != -1 && i.splice(o, 1), this
		}
	}, e.emitEvent = function (t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			i = i.slice(0), e = e || [];
			for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
				var s = i[n],
					r = o && o[s];
				r && (this.off(t, s), delete o[s]), s.apply(this, e)
			}
			return this
		}
	}, e.allOff = function () {
		delete this._events, delete this._onceEvents
	}, t
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
	"use strict";

	function t(t) {
		var e = parseFloat(t),
			i = t.indexOf("%") == -1 && !isNaN(e);
		return i && e
	}

	function e() {}

	function i() {
		for (var t = {
				width: 0,
				height: 0,
				innerWidth: 0,
				innerHeight: 0,
				outerWidth: 0,
				outerHeight: 0
			}, e = 0; e < h; e++) {
			var i = u[e];
			t[i] = 0
		}
		return t
	}

	function o(t) {
		var e = getComputedStyle(t);
		return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
	}

	function n() {
		if (!d) {
			d = !0;
			var e = document.createElement("div");
			e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
			var i = document.body || document.documentElement;
			i.appendChild(e);
			var n = o(e);
			r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e)
		}
	}

	function s(e) {
		if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
			var s = o(e);
			if ("none" == s.display) return i();
			var a = {};
			a.width = e.offsetWidth, a.height = e.offsetHeight;
			for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
				var f = u[l],
					c = s[f],
					m = parseFloat(c);
				a[f] = isNaN(m) ? 0 : m
			}
			var p = a.paddingLeft + a.paddingRight,
				y = a.paddingTop + a.paddingBottom,
				g = a.marginLeft + a.marginRight,
				v = a.marginTop + a.marginBottom,
				_ = a.borderLeftWidth + a.borderRightWidth,
				z = a.borderTopWidth + a.borderBottomWidth,
				I = d && r,
				x = t(s.width);
			x !== !1 && (a.width = x + (I ? 0 : p + _));
			var S = t(s.height);
			return S !== !1 && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
		}
	}
	var r, a = "undefined" == typeof console ? e : function (t) {
			console.error(t)
		},
		u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
		h = u.length,
		d = !1;
	return s
}),
function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
	"use strict";
	var t = function () {
		var t = window.Element.prototype;
		if (t.matches) return "matches";
		if (t.matchesSelector) return "matchesSelector";
		for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
			var o = e[i],
				n = o + "MatchesSelector";
			if (t[n]) return n
		}
	}();
	return function (e, i) {
		return e[t](i)
	}
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
		return e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function (t, e) {
	var i = {};
	i.extend = function (t, e) {
		for (var i in e) t[i] = e[i];
		return t
	}, i.modulo = function (t, e) {
		return (t % e + e) % e
	};
	var o = Array.prototype.slice;
	i.makeArray = function (t) {
		if (Array.isArray(t)) return t;
		if (null === t || void 0 === t) return [];
		var e = "object" == typeof t && "number" == typeof t.length;
		return e ? o.call(t) : [t]
	}, i.removeFrom = function (t, e) {
		var i = t.indexOf(e);
		i != -1 && t.splice(i, 1)
	}, i.getParent = function (t, i) {
		for (; t.parentNode && t != document.body;)
			if (t = t.parentNode, e(t, i)) return t
	}, i.getQueryElement = function (t) {
		return "string" == typeof t ? document.querySelector(t) : t
	}, i.handleEvent = function (t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, i.filterFindElements = function (t, o) {
		t = i.makeArray(t);
		var n = [];
		return t.forEach(function (t) {
			if (t instanceof HTMLElement) {
				if (!o) return void n.push(t);
				e(t, o) && n.push(t);
				for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
			}
		}), n
	}, i.debounceMethod = function (t, e, i) {
		i = i || 100;
		var o = t.prototype[e],
			n = e + "Timeout";
		t.prototype[e] = function () {
			var t = this[n];
			clearTimeout(t);
			var e = arguments,
				s = this;
			this[n] = setTimeout(function () {
				o.apply(s, e), delete s[n]
			}, i)
		}
	}, i.docReady = function (t) {
		var e = document.readyState;
		"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
	}, i.toDashed = function (t) {
		return t.replace(/(.)([A-Z])/g, function (t, e, i) {
			return e + "-" + i
		}).toLowerCase()
	};
	var n = t.console;
	return i.htmlInit = function (e, o) {
		i.docReady(function () {
			var s = i.toDashed(o),
				r = "data-" + s,
				a = document.querySelectorAll("[" + r + "]"),
				u = document.querySelectorAll(".js-" + s),
				h = i.makeArray(a).concat(i.makeArray(u)),
				d = r + "-options",
				l = t.jQuery;
			h.forEach(function (t) {
				var i, s = t.getAttribute(r) || t.getAttribute(d);
				try {
					i = s && JSON.parse(s)
				} catch (a) {
					return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
				}
				var u = new e(t, i);
				l && l.data(t, o, u)
			})
		})
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function (t, e) {
	"use strict";

	function i(t) {
		for (var e in t) return !1;
		return e = null, !0
	}

	function o(t, e) {
		t && (this.element = t, this.layout = e, this.position = {
			x: 0,
			y: 0
		}, this._create())
	}

	function n(t) {
		return t.replace(/([A-Z])/g, function (t) {
			return "-" + t.toLowerCase()
		})
	}
	var s = document.documentElement.style,
		r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
		a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
		u = {
			WebkitTransition: "webkitTransitionEnd",
			transition: "transitionend"
		} [r],
		h = {
			transform: a,
			transition: r,
			transitionDuration: r + "Duration",
			transitionProperty: r + "Property",
			transitionDelay: r + "Delay"
		},
		d = o.prototype = Object.create(t.prototype);
	d.constructor = o, d._create = function () {
		this._transn = {
			ingProperties: {},
			clean: {},
			onEnd: {}
		}, this.css({
			position: "absolute"
		})
	}, d.handleEvent = function (t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, d.getSize = function () {
		this.size = e(this.element)
	}, d.css = function (t) {
		var e = this.element.style;
		for (var i in t) {
			var o = h[i] || i;
			e[o] = t[i]
		}
	}, d.getPosition = function () {
		var t = getComputedStyle(this.element),
			e = this.layout._getOption("originLeft"),
			i = this.layout._getOption("originTop"),
			o = t[e ? "left" : "right"],
			n = t[i ? "top" : "bottom"],
			s = parseFloat(o),
			r = parseFloat(n),
			a = this.layout.size;
		o.indexOf("%") != -1 && (s = s / 100 * a.width), n.indexOf("%") != -1 && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r
	}, d.layoutPosition = function () {
		var t = this.layout.size,
			e = {},
			i = this.layout._getOption("originLeft"),
			o = this.layout._getOption("originTop"),
			n = i ? "paddingLeft" : "paddingRight",
			s = i ? "left" : "right",
			r = i ? "right" : "left",
			a = this.position.x + t[n];
		e[s] = this.getXValue(a), e[r] = "";
		var u = o ? "paddingTop" : "paddingBottom",
			h = o ? "top" : "bottom",
			d = o ? "bottom" : "top",
			l = this.position.y + t[u];
		e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
	}, d.getXValue = function (t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
	}, d.getYValue = function (t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
	}, d._transitionTo = function (t, e) {
		this.getPosition();
		var i = this.position.x,
			o = this.position.y,
			n = t == this.position.x && e == this.position.y;
		if (this.setPosition(t, e), n && !this.isTransitioning) return void this.layoutPosition();
		var s = t - i,
			r = e - o,
			a = {};
		a.transform = this.getTranslate(s, r), this.transition({
			to: a,
			onTransitionEnd: {
				transform: this.layoutPosition
			},
			isCleaning: !0
		})
	}, d.getTranslate = function (t, e) {
		var i = this.layout._getOption("originLeft"),
			o = this.layout._getOption("originTop");
		return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
	}, d.goTo = function (t, e) {
		this.setPosition(t, e), this.layoutPosition()
	}, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
		this.position.x = parseFloat(t), this.position.y = parseFloat(e)
	}, d._nonTransition = function (t) {
		this.css(t.to), t.isCleaning && this._removeStyles(t.to);
		for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
	}, d.transition = function (t) {
		if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
		var e = this._transn;
		for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
		for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
		if (t.from) {
			this.css(t.from);
			var o = this.element.offsetHeight;
			o = null
		}
		this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
	};
	var l = "opacity," + n(a);
	d.enableTransition = function () {
		if (!this.isTransitioning) {
			var t = this.layout.options.transitionDuration;
			t = "number" == typeof t ? t + "ms" : t, this.css({
				transitionProperty: l,
				transitionDuration: t,
				transitionDelay: this.staggerDelay || 0
			}), this.element.addEventListener(u, this, !1)
		}
	}, d.onwebkitTransitionEnd = function (t) {
		this.ontransitionend(t)
	}, d.onotransitionend = function (t) {
		this.ontransitionend(t)
	};
	var f = {
		"-webkit-transform": "transform"
	};
	d.ontransitionend = function (t) {
		if (t.target === this.element) {
			var e = this._transn,
				o = f[t.propertyName] || t.propertyName;
			if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
				var n = e.onEnd[o];
				n.call(this), delete e.onEnd[o]
			}
			this.emitEvent("transitionEnd", [this])
		}
	}, d.disableTransition = function () {
		this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
	}, d._removeStyles = function (t) {
		var e = {};
		for (var i in t) e[i] = "";
		this.css(e)
	};
	var c = {
		transitionProperty: "",
		transitionDuration: "",
		transitionDelay: ""
	};
	return d.removeTransitionStyles = function () {
		this.css(c)
	}, d.stagger = function (t) {
		t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
	}, d.removeElem = function () {
		this.element.parentNode.removeChild(this.element), this.css({
			display: ""
		}), this.emitEvent("remove", [this])
	}, d.remove = function () {
		return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
			this.removeElem()
		}), void this.hide()) : void this.removeElem()
	}, d.reveal = function () {
		delete this.isHidden, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {},
			i = this.getHideRevealTransitionEndProperty("visibleStyle");
		e[i] = this.onRevealTransitionEnd, this.transition({
			from: t.hiddenStyle,
			to: t.visibleStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, d.onRevealTransitionEnd = function () {
		this.isHidden || this.emitEvent("reveal")
	}, d.getHideRevealTransitionEndProperty = function (t) {
		var e = this.layout.options[t];
		if (e.opacity) return "opacity";
		for (var i in e) return i
	}, d.hide = function () {
		this.isHidden = !0, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {},
			i = this.getHideRevealTransitionEndProperty("hiddenStyle");
		e[i] = this.onHideTransitionEnd, this.transition({
			from: t.visibleStyle,
			to: t.hiddenStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, d.onHideTransitionEnd = function () {
		this.isHidden && (this.css({
			display: "none"
		}), this.emitEvent("hide"))
	}, d.destroy = function () {
		this.css({
			position: "",
			left: "",
			right: "",
			top: "",
			bottom: "",
			transition: "",
			transform: ""
		})
	}, o
}),
function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
		return e(t, i, o, n, s)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, o, n) {
	"use strict";

	function s(t, e) {
		var i = o.getQueryElement(t);
		if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
		this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
		var n = ++l;
		this.element.outlayerGUID = n, f[n] = this, this._create();
		var s = this._getOption("initLayout");
		s && this.layout()
	}

	function r(t) {
		function e() {
			t.apply(this, arguments)
		}
		return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
	}

	function a(t) {
		if ("number" == typeof t) return t;
		var e = t.match(/(^\d*\.?\d*)(\w*)/),
			i = e && e[1],
			o = e && e[2];
		if (!i.length) return 0;
		i = parseFloat(i);
		var n = m[o] || 1;
		return i * n
	}
	var u = t.console,
		h = t.jQuery,
		d = function () {},
		l = 0,
		f = {};
	s.namespace = "outlayer", s.Item = n, s.defaults = {
		containerStyle: {
			position: "relative"
		},
		initLayout: !0,
		originLeft: !0,
		originTop: !0,
		resize: !0,
		resizeContainer: !0,
		transitionDuration: "0.4s",
		hiddenStyle: {
			opacity: 0,
			transform: "scale(0.001)"
		},
		visibleStyle: {
			opacity: 1,
			transform: "scale(1)"
		}
	};
	var c = s.prototype;
	o.extend(c, e.prototype), c.option = function (t) {
		o.extend(this.options, t)
	}, c._getOption = function (t) {
		var e = this.constructor.compatOptions[t];
		return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
	}, s.compatOptions = {
		initLayout: "isInitLayout",
		horizontal: "isHorizontal",
		layoutInstant: "isLayoutInstant",
		originLeft: "isOriginLeft",
		originTop: "isOriginTop",
		resize: "isResizeBound",
		resizeContainer: "isResizingContainer"
	}, c._create = function () {
		this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
		var t = this._getOption("resize");
		t && this.bindResize()
	}, c.reloadItems = function () {
		this.items = this._itemize(this.element.children)
	}, c._itemize = function (t) {
		for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
			var s = e[n],
				r = new i(s, this);
			o.push(r)
		}
		return o
	}, c._filterFindItemElements = function (t) {
		return o.filterFindElements(t, this.options.itemSelector)
	}, c.getItemElements = function () {
		return this.items.map(function (t) {
			return t.element
		})
	}, c.layout = function () {
		this._resetLayout(), this._manageStamps();
		var t = this._getOption("layoutInstant"),
			e = void 0 !== t ? t : !this._isLayoutInited;
		this.layoutItems(this.items, e), this._isLayoutInited = !0
	}, c._init = c.layout, c._resetLayout = function () {
		this.getSize()
	}, c.getSize = function () {
		this.size = i(this.element)
	}, c._getMeasurement = function (t, e) {
		var o, n = this.options[t];
		n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
	}, c.layoutItems = function (t, e) {
		t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
	}, c._getItemsForLayout = function (t) {
		return t.filter(function (t) {
			return !t.isIgnored
		})
	}, c._layoutItems = function (t, e) {
		if (this._emitCompleteOnItems("layout", t), t && t.length) {
			var i = [];
			t.forEach(function (t) {
				var o = this._getItemLayoutPosition(t);
				o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
			}, this), this._processLayoutQueue(i)
		}
	}, c._getItemLayoutPosition = function () {
		return {
			x: 0,
			y: 0
		}
	}, c._processLayoutQueue = function (t) {
		this.updateStagger(), t.forEach(function (t, e) {
			this._positionItem(t.item, t.x, t.y, t.isInstant, e)
		}, this)
	}, c.updateStagger = function () {
		var t = this.options.stagger;
		return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
	}, c._positionItem = function (t, e, i, o, n) {
		o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
	}, c._postLayout = function () {
		this.resizeContainer()
	}, c.resizeContainer = function () {
		var t = this._getOption("resizeContainer");
		if (t) {
			var e = this._getContainerSize();
			e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
		}
	}, c._getContainerSize = d, c._setContainerMeasure = function (t, e) {
		if (void 0 !== t) {
			var i = this.size;
			i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
		}
	}, c._emitCompleteOnItems = function (t, e) {
		function i() {
			n.dispatchEvent(t + "Complete", null, [e])
		}

		function o() {
			r++, r == s && i()
		}
		var n = this,
			s = e.length;
		if (!e || !s) return void i();
		var r = 0;
		e.forEach(function (e) {
			e.once(t, o)
		})
	}, c.dispatchEvent = function (t, e, i) {
		var o = e ? [e].concat(i) : i;
		if (this.emitEvent(t, o), h)
			if (this.$element = this.$element || h(this.element), e) {
				var n = h.Event(e);
				n.type = t, this.$element.trigger(n, i)
			} else this.$element.trigger(t, i)
	}, c.ignore = function (t) {
		var e = this.getItem(t);
		e && (e.isIgnored = !0)
	}, c.unignore = function (t) {
		var e = this.getItem(t);
		e && delete e.isIgnored
	}, c.stamp = function (t) {
		t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
	}, c.unstamp = function (t) {
		t = this._find(t), t && t.forEach(function (t) {
			o.removeFrom(this.stamps, t), this.unignore(t)
		}, this)
	}, c._find = function (t) {
		if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
	}, c._manageStamps = function () {
		this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
	}, c._getBoundingRect = function () {
		var t = this.element.getBoundingClientRect(),
			e = this.size;
		this._boundingRect = {
			left: t.left + e.paddingLeft + e.borderLeftWidth,
			top: t.top + e.paddingTop + e.borderTopWidth,
			right: t.right - (e.paddingRight + e.borderRightWidth),
			bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
		}
	}, c._manageStamp = d, c._getElementOffset = function (t) {
		var e = t.getBoundingClientRect(),
			o = this._boundingRect,
			n = i(t),
			s = {
				left: e.left - o.left - n.marginLeft,
				top: e.top - o.top - n.marginTop,
				right: o.right - e.right - n.marginRight,
				bottom: o.bottom - e.bottom - n.marginBottom
			};
		return s
	}, c.handleEvent = o.handleEvent, c.bindResize = function () {
		t.addEventListener("resize", this), this.isResizeBound = !0
	}, c.unbindResize = function () {
		t.removeEventListener("resize", this), this.isResizeBound = !1
	}, c.onresize = function () {
		this.resize()
	}, o.debounceMethod(s, "onresize", 100), c.resize = function () {
		this.isResizeBound && this.needsResizeLayout() && this.layout()
	}, c.needsResizeLayout = function () {
		var t = i(this.element),
			e = this.size && t;
		return e && t.innerWidth !== this.size.innerWidth
	}, c.addItems = function (t) {
		var e = this._itemize(t);
		return e.length && (this.items = this.items.concat(e)), e
	}, c.appended = function (t) {
		var e = this.addItems(t);
		e.length && (this.layoutItems(e, !0), this.reveal(e))
	}, c.prepended = function (t) {
		var e = this._itemize(t);
		if (e.length) {
			var i = this.items.slice(0);
			this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
		}
	}, c.reveal = function (t) {
		if (this._emitCompleteOnItems("reveal", t), t && t.length) {
			var e = this.updateStagger();
			t.forEach(function (t, i) {
				t.stagger(i * e), t.reveal()
			})
		}
	}, c.hide = function (t) {
		if (this._emitCompleteOnItems("hide", t), t && t.length) {
			var e = this.updateStagger();
			t.forEach(function (t, i) {
				t.stagger(i * e), t.hide()
			})
		}
	}, c.revealItemElements = function (t) {
		var e = this.getItems(t);
		this.reveal(e)
	}, c.hideItemElements = function (t) {
		var e = this.getItems(t);
		this.hide(e)
	}, c.getItem = function (t) {
		for (var e = 0; e < this.items.length; e++) {
			var i = this.items[e];
			if (i.element == t) return i
		}
	}, c.getItems = function (t) {
		t = o.makeArray(t);
		var e = [];
		return t.forEach(function (t) {
			var i = this.getItem(t);
			i && e.push(i)
		}, this), e
	}, c.remove = function (t) {
		var e = this.getItems(t);
		this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
			t.remove(), o.removeFrom(this.items, t)
		}, this)
	}, c.destroy = function () {
		var t = this.element.style;
		t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
			t.destroy()
		}), this.unbindResize();
		var e = this.element.outlayerGUID;
		delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
	}, s.data = function (t) {
		t = o.getQueryElement(t);
		var e = t && t.outlayerGUID;
		return e && f[e]
	}, s.create = function (t, e) {
		var i = r(s);
		return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
	};
	var m = {
		ms: 1,
		s: 1e3
	};
	return s.Item = n, s
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function (t) {
	"use strict";

	function e() {
		t.Item.apply(this, arguments)
	}
	var i = e.prototype = Object.create(t.Item.prototype),
		o = i._create;
	i._create = function () {
		this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
	}, i.updateSortData = function () {
		if (!this.isIgnored) {
			this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
			var t = this.layout.options.getSortData,
				e = this.layout._sorters;
			for (var i in t) {
				var o = e[i];
				this.sortData[i] = o(this.element, this)
			}
		}
	};
	var n = i.destroy;
	return i.destroy = function () {
		n.apply(this, arguments), this.css({
			display: ""
		})
	}, e
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function (t, e) {
	"use strict";

	function i(t) {
		this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
	}
	var o = i.prototype,
		n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
	return n.forEach(function (t) {
		o[t] = function () {
			return e.prototype[t].apply(this.isotope, arguments)
		}
	}), o.needsVerticalResizeLayout = function () {
		var e = t(this.isotope.element),
			i = this.isotope.size && e;
		return i && e.innerHeight != this.isotope.size.innerHeight
	}, o._getMeasurement = function () {
		this.isotope._getMeasurement.apply(this, arguments)
	}, o.getColumnWidth = function () {
		this.getSegmentSize("column", "Width")
	}, o.getRowHeight = function () {
		this.getSegmentSize("row", "Height")
	}, o.getSegmentSize = function (t, e) {
		var i = t + e,
			o = "outer" + e;
		if (this._getMeasurement(i, o), !this[i]) {
			var n = this.getFirstItemSize();
			this[i] = n && n[o] || this.isotope.size["inner" + e]
		}
	}, o.getFirstItemSize = function () {
		var e = this.isotope.filteredItems[0];
		return e && e.element && t(e.element)
	}, o.layout = function () {
		this.isotope.layout.apply(this.isotope, arguments)
	}, o.getSize = function () {
		this.isotope.getSize(), this.size = this.isotope.size
	}, i.modes = {}, i.create = function (t, e) {
		function n() {
			i.apply(this, arguments)
		}
		return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, e) {
	var i = t.create("masonry");
	i.compatOptions.fitWidth = "isFitWidth";
	var o = i.prototype;
	return o._resetLayout = function () {
		this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
		for (var t = 0; t < this.cols; t++) this.colYs.push(0);
		this.maxY = 0, this.horizontalColIndex = 0
	}, o.measureColumns = function () {
		if (this.getContainerWidth(), !this.columnWidth) {
			var t = this.items[0],
				i = t && t.element;
			this.columnWidth = i && e(i).outerWidth || this.containerWidth
		}
		var o = this.columnWidth += this.gutter,
			n = this.containerWidth + this.gutter,
			s = n / o,
			r = o - n % o,
			a = r && r < 1 ? "round" : "floor";
		s = Math[a](s), this.cols = Math.max(s, 1)
	}, o.getContainerWidth = function () {
		var t = this._getOption("fitWidth"),
			i = t ? this.element.parentNode : this.element,
			o = e(i);
		this.containerWidth = o && o.innerWidth
	}, o._getItemLayoutPosition = function (t) {
		t.getSize();
		var e = t.size.outerWidth % this.columnWidth,
			i = e && e < 1 ? "round" : "ceil",
			o = Math[i](t.size.outerWidth / this.columnWidth);
		o = Math.min(o, this.cols);
		for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
				x: this.columnWidth * s.col,
				y: s.y
			}, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
		return r
	}, o._getTopColPosition = function (t) {
		var e = this._getTopColGroup(t),
			i = Math.min.apply(Math, e);
		return {
			col: e.indexOf(i),
			y: i
		}
	}, o._getTopColGroup = function (t) {
		if (t < 2) return this.colYs;
		for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
		return e
	}, o._getColGroupY = function (t, e) {
		if (e < 2) return this.colYs[t];
		var i = this.colYs.slice(t, t + e);
		return Math.max.apply(Math, i)
	}, o._getHorizontalColPosition = function (t, e) {
		var i = this.horizontalColIndex % this.cols,
			o = t > 1 && i + t > this.cols;
		i = o ? 0 : i;
		var n = e.size.outerWidth && e.size.outerHeight;
		return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
			col: i,
			y: this._getColGroupY(i, t)
		}
	}, o._manageStamp = function (t) {
		var i = e(t),
			o = this._getElementOffset(t),
			n = this._getOption("originLeft"),
			s = n ? o.left : o.right,
			r = s + i.outerWidth,
			a = Math.floor(s / this.columnWidth);
		a = Math.max(0, a);
		var u = Math.floor(r / this.columnWidth);
		u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
		for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
	}, o._getContainerSize = function () {
		this.maxY = Math.max.apply(Math, this.colYs);
		var t = {
			height: this.maxY
		};
		return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
	}, o._getContainerFitWidth = function () {
		for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
		return (this.cols - t) * this.columnWidth - this.gutter
	}, o.needsResizeLayout = function () {
		var t = this.containerWidth;
		return this.getContainerWidth(), t != this.containerWidth
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function (t, e) {
	"use strict";
	var i = t.create("masonry"),
		o = i.prototype,
		n = {
			_getElementOffset: !0,
			layout: !0,
			_getMeasurement: !0
		};
	for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
	var r = o.measureColumns;
	o.measureColumns = function () {
		this.items = this.isotope.filteredItems, r.call(this)
	};
	var a = o._getOption;
	return o._getOption = function (t) {
		return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
	"use strict";
	var e = t.create("fitRows"),
		i = e.prototype;
	return i._resetLayout = function () {
		this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
	}, i._getItemLayoutPosition = function (t) {
		t.getSize();
		var e = t.size.outerWidth + this.gutter,
			i = this.isotope.size.innerWidth + this.gutter;
		0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
		var o = {
			x: this.x,
			y: this.y
		};
		return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
	}, i._getContainerSize = function () {
		return {
			height: this.maxY
		}
	}, e
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
	"use strict";
	var e = t.create("vertical", {
			horizontalAlignment: 0
		}),
		i = e.prototype;
	return i._resetLayout = function () {
		this.y = 0
	}, i._getItemLayoutPosition = function (t) {
		t.getSize();
		var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
			i = this.y;
		return this.y += t.size.outerHeight, {
			x: e,
			y: i
		}
	}, i._getContainerSize = function () {
		return {
			height: this.y
		}
	}, e
}),
function (t, e) {
	"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (i, o, n, s, r, a) {
		return e(t, i, o, n, s, r, a)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function (t, e, i, o, n, s, r) {
	function a(t, e) {
		return function (i, o) {
			for (var n = 0; n < t.length; n++) {
				var s = t[n],
					r = i.sortData[s],
					a = o.sortData[s];
				if (r > a || r < a) {
					var u = void 0 !== e[s] ? e[s] : e,
						h = u ? 1 : -1;
					return (r > a ? 1 : -1) * h
				}
			}
			return 0
		}
	}
	var u = t.jQuery,
		h = String.prototype.trim ? function (t) {
			return t.trim()
		} : function (t) {
			return t.replace(/^\s+|\s+$/g, "")
		},
		d = e.create("isotope", {
			layoutMode: "masonry",
			isJQueryFiltering: !0,
			sortAscending: !0
		});
	d.Item = s, d.LayoutMode = r;
	var l = d.prototype;
	l._create = function () {
		this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
		for (var t in r.modes) this._initLayoutMode(t)
	}, l.reloadItems = function () {
		this.itemGUID = 0, e.prototype.reloadItems.call(this)
	}, l._itemize = function () {
		for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
			var o = t[i];
			o.id = this.itemGUID++
		}
		return this._updateItemsSortData(t), t
	}, l._initLayoutMode = function (t) {
		var e = r.modes[t],
			i = this.options[t] || {};
		this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
	}, l.layout = function () {
		return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
	}, l._layout = function () {
		var t = this._getIsInstant();
		this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
	}, l.arrange = function (t) {
		this.option(t), this._getIsInstant();
		var e = this._filter(this.items);
		this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
	}, l._init = l.arrange, l._hideReveal = function (t) {
		this.reveal(t.needReveal), this.hide(t.needHide)
	}, l._getIsInstant = function () {
		var t = this._getOption("layoutInstant"),
			e = void 0 !== t ? t : !this._isLayoutInited;
		return this._isInstant = e, e
	}, l._bindArrangeComplete = function () {
		function t() {
			e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
		}
		var e, i, o, n = this;
		this.once("layoutComplete", function () {
			e = !0, t()
		}), this.once("hideComplete", function () {
			i = !0, t()
		}), this.once("revealComplete", function () {
			o = !0, t()
		})
	}, l._filter = function (t) {
		var e = this.options.filter;
		e = e || "*";
		for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
			var a = t[r];
			if (!a.isIgnored) {
				var u = s(a);
				u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
			}
		}
		return {
			matches: i,
			needReveal: o,
			needHide: n
		}
	}, l._getFilterTest = function (t) {
		return u && this.options.isJQueryFiltering ? function (e) {
			return u(e.element).is(t);
		} : "function" == typeof t ? function (e) {
			return t(e.element)
		} : function (e) {
			return o(e.element, t)
		}
	}, l.updateSortData = function (t) {
		var e;
		t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
	}, l._getSorters = function () {
		var t = this.options.getSortData;
		for (var e in t) {
			var i = t[e];
			this._sorters[e] = f(i)
		}
	}, l._updateItemsSortData = function (t) {
		for (var e = t && t.length, i = 0; e && i < e; i++) {
			var o = t[i];
			o.updateSortData()
		}
	};
	var f = function () {
		function t(t) {
			if ("string" != typeof t) return t;
			var i = h(t).split(" "),
				o = i[0],
				n = o.match(/^\[(.+)\]$/),
				s = n && n[1],
				r = e(s, o),
				a = d.sortDataParsers[i[1]];
			return t = a ? function (t) {
				return t && a(r(t))
			} : function (t) {
				return t && r(t)
			}
		}

		function e(t, e) {
			return t ? function (e) {
				return e.getAttribute(t)
			} : function (t) {
				var i = t.querySelector(e);
				return i && i.textContent
			}
		}
		return t
	}();
	d.sortDataParsers = {
		parseInt: function (t) {
			return parseInt(t, 10)
		},
		parseFloat: function (t) {
			return parseFloat(t)
		}
	}, l._sort = function () {
		if (this.options.sortBy) {
			var t = n.makeArray(this.options.sortBy);
			this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
			var e = a(this.sortHistory, this.options.sortAscending);
			this.filteredItems.sort(e)
		}
	}, l._getIsSameSortBy = function (t) {
		for (var e = 0; e < t.length; e++)
			if (t[e] != this.sortHistory[e]) return !1;
		return !0
	}, l._mode = function () {
		var t = this.options.layoutMode,
			e = this.modes[t];
		if (!e) throw new Error("No layout mode: " + t);
		return e.options = this.options[t], e
	}, l._resetLayout = function () {
		e.prototype._resetLayout.call(this), this._mode()._resetLayout()
	}, l._getItemLayoutPosition = function (t) {
		return this._mode()._getItemLayoutPosition(t)
	}, l._manageStamp = function (t) {
		this._mode()._manageStamp(t)
	}, l._getContainerSize = function () {
		return this._mode()._getContainerSize()
	}, l.needsResizeLayout = function () {
		return this._mode().needsResizeLayout()
	}, l.appended = function (t) {
		var e = this.addItems(t);
		if (e.length) {
			var i = this._filterRevealAdded(e);
			this.filteredItems = this.filteredItems.concat(i)
		}
	}, l.prepended = function (t) {
		var e = this._itemize(t);
		if (e.length) {
			this._resetLayout(), this._manageStamps();
			var i = this._filterRevealAdded(e);
			this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
		}
	}, l._filterRevealAdded = function (t) {
		var e = this._filter(t);
		return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
	}, l.insert = function (t) {
		var e = this.addItems(t);
		if (e.length) {
			var i, o, n = e.length;
			for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
			var s = this._filter(e).matches;
			for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
			for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
			this.reveal(s)
		}
	};
	var c = l.remove;
	return l.remove = function (t) {
		t = n.makeArray(t);
		var e = this.getItems(t);
		c.call(this, t);
		for (var i = e && e.length, o = 0; i && o < i; o++) {
			var s = e[o];
			n.removeFrom(this.filteredItems, s)
		}
	}, l.shuffle = function () {
		for (var t = 0; t < this.items.length; t++) {
			var e = this.items[t];
			e.sortData.random = Math.random()
		}
		this.options.sortBy = "random", this._sort(), this._layout()
	}, l._noTransition = function (t, e) {
		var i = this.options.transitionDuration;
		this.options.transitionDuration = 0;
		var o = t.apply(this, e);
		return this.options.transitionDuration = i, o
	}, l.getFilteredItemElements = function () {
		return this.filteredItems.map(function (t) {
			return t.element
		})
	}, d
});


/*
 * Slick Slider
 * Copyright (c) 2017 Ken Wheeler
 * Licensed under the MIT license.
 */


! function (i) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function (i) {
	"use strict";
	var e = window.Slick || {};
	(e = function () {
		var e = 0;
		return function (t, o) {
			var s, n = this;
			n.defaults = {
				accessibility: !0,
				adaptiveHeight: !1,
				appendArrows: i(t),
				appendDots: i(t),
				arrows: !0,
				asNavFor: null,
				prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
				nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
				autoplay: !1,
				autoplaySpeed: 3e3,
				centerMode: !1,
				centerPadding: "50px",
				cssEase: "ease",
				customPaging: function (e, t) {
					return i('<button type="button" />').text(t + 1)
				},
				dots: !1,
				dotsClass: "slick-dots",
				draggable: !0,
				easing: "linear",
				edgeFriction: .35,
				fade: !1,
				focusOnSelect: !1,
				focusOnChange: !1,
				infinite: !0,
				initialSlide: 0,
				lazyLoad: "ondemand",
				mobileFirst: !1,
				pauseOnHover: !0,
				pauseOnFocus: !0,
				pauseOnDotsHover: !1,
				respondTo: "window",
				responsive: null,
				rows: 1,
				rtl: !1,
				slide: "",
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: !0,
				swipeToSlide: !1,
				touchMove: !0,
				touchThreshold: 5,
				useCSS: !0,
				useTransform: !0,
				variableWidth: !1,
				vertical: !1,
				verticalSwiping: !1,
				waitForAnimate: !0,
				zIndex: 1e3
			}, n.initials = {
				animating: !1,
				dragging: !1,
				autoPlayTimer: null,
				currentDirection: 0,
				currentLeft: null,
				currentSlide: 0,
				direction: 1,
				$dots: null,
				listWidth: null,
				listHeight: null,
				loadIndex: 0,
				$nextArrow: null,
				$prevArrow: null,
				scrolling: !1,
				slideCount: null,
				slideWidth: null,
				$slideTrack: null,
				$slides: null,
				sliding: !1,
				slideOffset: 0,
				swipeLeft: null,
				swiping: !1,
				$list: null,
				touchObject: {},
				transformsEnabled: !1,
				unslicked: !1
			}, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
		}
	}()).prototype.activateADA = function () {
		this.$slideTrack.find(".slick-active").attr({
			"aria-hidden": "false"
		}).find("a, input, button, select").attr({
			tabindex: "0"
		})
	}, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
		var s = this;
		if ("boolean" == typeof t) o = t, t = null;
		else if (t < 0 || t >= s.slideCount) return !1;
		s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
			i(t).attr("data-slick-index", e)
		}), s.$slidesCache = s.$slides, s.reinit()
	}, e.prototype.animateHeight = function () {
		var i = this;
		if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
			var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
			i.$list.animate({
				height: e
			}, i.options.speed)
		}
	}, e.prototype.animateSlide = function (e, t) {
		var o = {},
			s = this;
		s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
			left: e
		}, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
			top: e
		}, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
			animStart: s.currentLeft
		}).animate({
			animStart: e
		}, {
			duration: s.options.speed,
			easing: s.options.easing,
			step: function (i) {
				i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
			},
			complete: function () {
				t && t.call()
			}
		})) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
			s.disableTransition(), t.call()
		}, s.options.speed))
	}, e.prototype.getNavTarget = function () {
		var e = this,
			t = e.options.asNavFor;
		return t && null !== t && (t = i(t).not(e.$slider)), t
	}, e.prototype.asNavFor = function (e) {
		var t = this.getNavTarget();
		null !== t && "object" == typeof t && t.each(function () {
			var t = i(this).slick("getSlick");
			t.unslicked || t.slideHandler(e, !0)
		})
	}, e.prototype.applyTransition = function (i) {
		var e = this,
			t = {};
		!1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
	}, e.prototype.autoPlay = function () {
		var i = this;
		i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
	}, e.prototype.autoPlayClear = function () {
		var i = this;
		i.autoPlayTimer && clearInterval(i.autoPlayTimer)
	}, e.prototype.autoPlayIterator = function () {
		var i = this,
			e = i.currentSlide + i.options.slidesToScroll;
		i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
	}, e.prototype.buildArrows = function () {
		var e = this;
		!0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
			"aria-disabled": "true",
			tabindex: "-1"
		}))
	}, e.prototype.buildDots = function () {
		var e, t, o = this;
		if (!0 === o.options.dots) {
			for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
			o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
		}
	}, e.prototype.buildOut = function () {
		var e = this;
		e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
			i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
		}), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
	}, e.prototype.buildRows = function () {
		var i, e, t, o, s, n, r, l = this;
		if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
			for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
				var d = document.createElement("div");
				for (e = 0; e < l.options.rows; e++) {
					var a = document.createElement("div");
					for (t = 0; t < l.options.slidesPerRow; t++) {
						var c = i * r + (e * l.options.slidesPerRow + t);
						n.get(c) && a.appendChild(n.get(c))
					}
					d.appendChild(a)
				}
				o.appendChild(d)
			}
			l.$slider.empty().append(o), l.$slider.children().children().children().css({
				width: 100 / l.options.slidesPerRow + "%",
				display: "inline-block"
			})
		}
	}, e.prototype.checkResponsive = function (e, t) {
		var o, s, n, r = this,
			l = !1,
			d = r.$slider.width(),
			a = window.innerWidth || i(window).width();
		if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
			s = null;
			for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
			null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
		}
	}, e.prototype.changeSlide = function (e, t) {
		var o, s, n, r = this,
			l = i(e.currentTarget);
		switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
			case "previous":
				s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
				break;
			case "next":
				s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
				break;
			case "index":
				var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
				r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
				break;
			default:
				return
		}
	}, e.prototype.checkNavigable = function (i) {
		var e, t;
		if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
		else
			for (var o in e) {
				if (i < e[o]) {
					i = t;
					break
				}
				t = e[o]
			}
		return i
	}, e.prototype.cleanUpEvents = function () {
		var e = this;
		e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
	}, e.prototype.cleanUpSlideEvents = function () {
		var e = this;
		e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
	}, e.prototype.cleanUpRows = function () {
		var i, e = this;
		e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
	}, e.prototype.clickHandler = function (i) {
		!1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
	}, e.prototype.destroy = function (e) {
		var t = this;
		t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
			i(this).attr("style", i(this).data("originalStyling"))
		}), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
	}, e.prototype.disableTransition = function (i) {
		var e = this,
			t = {};
		t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
	}, e.prototype.fadeSlide = function (i, e) {
		var t = this;
		!1 === t.cssTransitions ? (t.$slides.eq(i).css({
			zIndex: t.options.zIndex
		}), t.$slides.eq(i).animate({
			opacity: 1
		}, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
			opacity: 1,
			zIndex: t.options.zIndex
		}), e && setTimeout(function () {
			t.disableTransition(i), e.call()
		}, t.options.speed))
	}, e.prototype.fadeSlideOut = function (i) {
		var e = this;
		!1 === e.cssTransitions ? e.$slides.eq(i).animate({
			opacity: 0,
			zIndex: e.options.zIndex - 2
		}, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
			opacity: 0,
			zIndex: e.options.zIndex - 2
		}))
	}, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
		var e = this;
		null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
	}, e.prototype.focusHandler = function () {
		var e = this;
		e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
			t.stopImmediatePropagation();
			var o = i(this);
			setTimeout(function () {
				e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
			}, 0)
		})
	}, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
		return this.currentSlide
	}, e.prototype.getDotCount = function () {
		var i = this,
			e = 0,
			t = 0,
			o = 0;
		if (!0 === i.options.infinite)
			if (i.slideCount <= i.options.slidesToShow) ++o;
			else
				for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
		else if (!0 === i.options.centerMode) o = i.slideCount;
		else if (i.options.asNavFor)
			for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
		else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
		return o - 1
	}, e.prototype.getLeft = function (i) {
		var e, t, o, s, n = this,
			r = 0;
		return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
	}, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
		return this.options[i]
	}, e.prototype.getNavigableIndexes = function () {
		var i, e = this,
			t = 0,
			o = 0,
			s = [];
		for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
		return s
	}, e.prototype.getSlick = function () {
		return this
	}, e.prototype.getSlideCount = function () {
		var e, t, o = this;
		return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
			if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1
		}), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
	}, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
		this.changeSlide({
			data: {
				message: "index",
				index: parseInt(i)
			}
		}, e)
	}, e.prototype.init = function (e) {
		var t = this;
		i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
	}, e.prototype.initADA = function () {
		var e = this,
			t = Math.ceil(e.slideCount / e.options.slidesToShow),
			o = e.getNavigableIndexes().filter(function (i) {
				return i >= 0 && i < e.slideCount
			});
		e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
			"aria-hidden": "true",
			tabindex: "-1"
		}).find("a, input, button, select").attr({
			tabindex: "-1"
		}), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
			var s = o.indexOf(t);
			i(this).attr({
				role: "tabpanel",
				id: "slick-slide" + e.instanceUid + t,
				tabindex: -1
			}), -1 !== s && i(this).attr({
				"aria-describedby": "slick-slide-control" + e.instanceUid + s
			})
		}), e.$dots.attr("role", "tablist").find("li").each(function (s) {
			var n = o[s];
			i(this).attr({
				role: "presentation"
			}), i(this).find("button").first().attr({
				role: "tab",
				id: "slick-slide-control" + e.instanceUid + s,
				"aria-controls": "slick-slide" + e.instanceUid + n,
				"aria-label": s + 1 + " of " + t,
				"aria-selected": null,
				tabindex: "-1"
			})
		}).eq(e.currentSlide).find("button").attr({
			"aria-selected": "true",
			tabindex: "0"
		}).end());
		for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
		e.activateADA()
	}, e.prototype.initArrowEvents = function () {
		var i = this;
		!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
			message: "previous"
		}, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
			message: "next"
		}, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
	}, e.prototype.initDotEvents = function () {
		var e = this;
		!0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
			message: "index"
		}, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
	}, e.prototype.initSlideEvents = function () {
		var e = this;
		e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
	}, e.prototype.initializeEvents = function () {
		var e = this;
		e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
			action: "start"
		}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
			action: "move"
		}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
			action: "end"
		}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
			action: "end"
		}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
	}, e.prototype.initUI = function () {
		var i = this;
		!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
	}, e.prototype.keyHandler = function (i) {
		var e = this;
		i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
			data: {
				message: !0 === e.options.rtl ? "next" : "previous"
			}
		}) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
			data: {
				message: !0 === e.options.rtl ? "previous" : "next"
			}
		}))
	}, e.prototype.lazyLoad = function () {
		function e(e) {
			i("img[data-lazy]", e).each(function () {
				var e = i(this),
					t = i(this).attr("data-lazy"),
					o = i(this).attr("data-srcset"),
					s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
					r = document.createElement("img");
				r.onload = function () {
					e.animate({
						opacity: 0
					}, 100, function () {
						o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
							opacity: 1
						}, 200, function () {
							e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
						}), n.$slider.trigger("lazyLoaded", [n, e, t])
					})
				}, r.onerror = function () {
					e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
				}, r.src = t
			})
		}
		var t, o, s, n = this;
		if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad)
			for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
		e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
	}, e.prototype.loadSlider = function () {
		var i = this;
		i.setPosition(), i.$slideTrack.css({
			opacity: 1
		}), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
	}, e.prototype.next = e.prototype.slickNext = function () {
		this.changeSlide({
			data: {
				message: "next"
			}
		})
	}, e.prototype.orientationChange = function () {
		var i = this;
		i.checkResponsive(), i.setPosition()
	}, e.prototype.pause = e.prototype.slickPause = function () {
		var i = this;
		i.autoPlayClear(), i.paused = !0
	}, e.prototype.play = e.prototype.slickPlay = function () {
		var i = this;
		i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
	}, e.prototype.postSlide = function (e) {
		var t = this;
		t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
	}, e.prototype.prev = e.prototype.slickPrev = function () {
		this.changeSlide({
			data: {
				message: "previous"
			}
		})
	}, e.prototype.preventDefault = function (i) {
		i.preventDefault()
	}, e.prototype.progressiveLazyLoad = function (e) {
		e = e || 1;
		var t, o, s, n, r, l = this,
			d = i("img[data-lazy]", l.$slider);
		d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
			s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
		}, r.onerror = function () {
			e < 3 ? setTimeout(function () {
				l.progressiveLazyLoad(e + 1)
			}, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
		}, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
	}, e.prototype.refresh = function (e) {
		var t, o, s = this;
		o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
			currentSlide: t
		}), s.init(), e || s.changeSlide({
			data: {
				message: "index",
				index: t
			}
		}, !1)
	}, e.prototype.registerBreakpoints = function () {
		var e, t, o, s = this,
			n = s.options.responsive || null;
		if ("array" === i.type(n) && n.length) {
			s.respondTo = s.options.respondTo || "window";
			for (e in n)
				if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
					for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
					s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
				} s.breakpoints.sort(function (i, e) {
				return s.options.mobileFirst ? i - e : e - i
			})
		}
	}, e.prototype.reinit = function () {
		var e = this;
		e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
	}, e.prototype.resize = function () {
		var e = this;
		i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
			e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
		}, 50))
	}, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
		var o = this;
		if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
		o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
	}, e.prototype.setCSS = function (i) {
		var e, t, o = this,
			s = {};
		!0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
	}, e.prototype.setDimensions = function () {
		var i = this;
		!1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
			padding: "0px " + i.options.centerPadding
		}) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
			padding: i.options.centerPadding + " 0px"
		})), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
		var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
		!1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
	}, e.prototype.setFade = function () {
		var e, t = this;
		t.$slides.each(function (o, s) {
			e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
				position: "relative",
				right: e,
				top: 0,
				zIndex: t.options.zIndex - 2,
				opacity: 0
			}) : i(s).css({
				position: "relative",
				left: e,
				top: 0,
				zIndex: t.options.zIndex - 2,
				opacity: 0
			})
		}), t.$slides.eq(t.currentSlide).css({
			zIndex: t.options.zIndex - 1,
			opacity: 1
		})
	}, e.prototype.setHeight = function () {
		var i = this;
		if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
			var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
			i.$list.css("height", e)
		}
	}, e.prototype.setOption = e.prototype.slickSetOption = function () {
		var e, t, o, s, n, r = this,
			l = !1;
		if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
		else if ("multiple" === n) i.each(o, function (i, e) {
			r.options[i] = e
		});
		else if ("responsive" === n)
			for (t in s)
				if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
				else {
					for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
					r.options.responsive.push(s[t])
				} l && (r.unload(), r.reinit())
	}, e.prototype.setPosition = function () {
		var i = this;
		i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
	}, e.prototype.setProps = function () {
		var i = this,
			e = document.body.style;
		i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
	}, e.prototype.setSlideClasses = function (i) {
		var e, t, o, s, n = this;
		if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
			var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
			e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
		} else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
		"ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
	}, e.prototype.setupInfinite = function () {
		var e, t, o, s = this;
		if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
			for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
			for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
			s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
				i(this).attr("id", "")
			})
		}
	}, e.prototype.interrupt = function (i) {
		var e = this;
		i || e.autoPlay(), e.interrupted = i
	}, e.prototype.selectHandler = function (e) {
		var t = this,
			o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
			s = parseInt(o.attr("data-slick-index"));
		s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
	}, e.prototype.slideHandler = function (i, e, t) {
		var o, s, n, r, l, d = null,
			a = this;
		if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
			if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
				a.postSlide(o)
			}) : a.postSlide(o));
			else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
			a.postSlide(o)
		}) : a.postSlide(o));
		else {
			if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
				a.postSlide(s)
			})) : a.postSlide(s), void a.animateHeight();
			!0 !== t ? a.animateSlide(d, function () {
				a.postSlide(s)
			}) : a.postSlide(s)
		}
	}, e.prototype.startLoad = function () {
		var i = this;
		!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
	}, e.prototype.swipeDirection = function () {
		var i, e, t, o, s = this;
		return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
	}, e.prototype.swipeEnd = function (i) {
		var e, t, o = this;
		if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
		if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
		if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
			switch (t = o.swipeDirection()) {
				case "left":
				case "down":
					e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
					break;
				case "right":
				case "up":
					e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
			}
			"vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
		} else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
	}, e.prototype.swipeHandler = function (i) {
		var e = this;
		if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
			case "start":
				e.swipeStart(i);
				break;
			case "move":
				e.swipeMove(i);
				break;
			case "end":
				e.swipeEnd(i)
		}
	}, e.prototype.swipeMove = function (i) {
		var e, t, o, s, n, r, l = this;
		return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
	}, e.prototype.swipeStart = function (i) {
		var e, t = this;
		if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
		void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
	}, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
		var i = this;
		null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
	}, e.prototype.unload = function () {
		var e = this;
		i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
	}, e.prototype.unslick = function (i) {
		var e = this;
		e.$slider.trigger("unslick", [e, i]), e.destroy()
	}, e.prototype.updateArrows = function () {
		var i = this;
		Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
	}, e.prototype.updateDots = function () {
		var i = this;
		null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
	}, e.prototype.visibility = function () {
		var i = this;
		i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
	}, i.fn.slick = function () {
		var i, t, o = this,
			s = arguments[0],
			n = Array.prototype.slice.call(arguments, 1),
			r = o.length;
		for (i = 0; i < r; i++)
			if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
		return o
	}
});

/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 * http://bas2k.ru/
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
! function (e) {
	e.fn.appear = function (a, r) {
		var p = e.extend({
			data: void 0,
			one: !0,
			accX: 0,
			accY: 0
		}, r);
		return this.each(function () {
			var r = e(this);
			if (r.appeared = !1, a) {
				var n = e(window),
					t = function () {
						if (r.is(":visible")) {
							var e = n.scrollLeft(),
								a = n.scrollTop(),
								t = r.offset(),
								c = t.left,
								i = t.top,
								o = p.accX,
								f = p.accY,
								s = r.height(),
								l = n.height(),
								h = r.width(),
								d = n.width();
							i + s + f >= a && i <= a + l + f && c + h + o >= e && c <= e + d + o ? r.appeared || r.trigger("appear", p.data) : r.appeared = !1
						} else r.appeared = !1
					},
					c = function () {
						if (r.appeared = !0, p.one) {
							n.unbind("scroll", t);
							var c = e.inArray(t, e.fn.appear.checks);
							c >= 0 && e.fn.appear.checks.splice(c, 1)
						}
						a.apply(this, arguments)
					};
				p.one ? r.one("appear", p.data, c) : r.bind("appear", p.data, c), n.scroll(t), e.fn.appear.checks.push(t), t()
			} else r.trigger("appear", p.data)
		})
	}, e.extend(e.fn.appear, {
		checks: [],
		timeout: null,
		checkAll: function () {
			var a = e.fn.appear.checks.length;
			if (a > 0)
				for (; a--;) e.fn.appear.checks[a]()
		},
		run: function () {
			e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout), e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
		}
	}), e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function (a, r) {
		var p = e.fn[r];
		p && (e.fn[r] = function () {
			var a = p.apply(this, arguments);
			return e.fn.appear.run(), a
		})
	})
}(jQuery);


/*
 * ajaxchimp
 * https://github.com/scdoshi/jquery-ajaxchimp
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function ($) {
	"use strict";
	$.ajaxChimp = {
		responses: {
			"We have sent you a confirmation email": 0,
			"Please enter a value": 1,
			"An email address must contain a single @": 2,
			"The domain portion of the email address is invalid (the portion after the @: )": 3,
			"The username portion of the email address is invalid (the portion before the @: )": 4,
			"This email address looks fake or invalid. Please enter a real email address": 5
		},
		translations: {
			en: null
		},
		init: function (selector, options) {
			$(selector).ajaxChimp(options)
		}
	};
	$.fn.ajaxChimp = function (options) {
		$(this).each(function (i, elem) {
			var form = $(elem);
			var email = form.find("input[type=email]");
			var label = form.find("label[for=" + email.attr("id") + "]");
			var settings = $.extend({
				url: form.attr("action"),
				language: "en"
			}, options);
			var url = settings.url.replace("/post?", "/post-json?").concat("&c=?");
			form.attr("novalidate", "true");
			email.attr("name", "EMAIL");
			form.submit(function () {
				var msg;

				function successCallback(resp) {
					if (resp.result === "success") {
						msg = "We have sent you a confirmation email";
						label.removeClass("error").addClass("valid");
						email.removeClass("error").addClass("valid")
					} else {
						email.removeClass("valid").addClass("error");
						label.removeClass("valid").addClass("error");
						var index = -1;
						try {
							var parts = resp.msg.split(" - ", 2);
							if (parts[1] === undefined) {
								msg = resp.msg
							} else {
								var i = parseInt(parts[0], 10);
								if (i.toString() === parts[0]) {
									index = parts[0];
									msg = parts[1]
								} else {
									index = -1;
									msg = resp.msg
								}
							}
						} catch (e) {
							index = -1;
							msg = resp.msg
						}
					}
					if (settings.language !== "en" && $.ajaxChimp.responses[msg] !== undefined && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]) {
						msg = $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]
					}
					label.html(msg);
					label.show(2e3);
					if (settings.callback) {
						settings.callback(resp)
					}
				}
				var data = {};
				var dataArray = form.serializeArray();
				$.each(dataArray, function (index, item) {
					data[item.name] = item.value
				});
				$.ajax({
					url: url,
					data: data,
					success: successCallback,
					dataType: "jsonp",
					error: function (resp, text) {
						console.log("mailchimp ajax submit error: " + text)
					}
				});
				var submitMsg = "Submitting...";
				if (settings.language !== "en" && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language]["submit"]) {
					submitMsg = $.ajaxChimp.translations[settings.language]["submit"]
				}
				label.html(submitMsg).show(2e3);
				return false
			})
		});
		return this
	}
})(jQuery);

/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/
! function (a, b) {
	"function" == typeof define && define.amd ? define(["jquery"], function (a) {
		return b(a)
	}) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function (a) {
	var b = function (a, b) {
			var c, d = document.createElement("canvas");
			a.appendChild(d), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(d);
			var e = d.getContext("2d");
			d.width = d.height = b.size;
			var f = 1;
			window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [b.size, "px"].join(""), d.width = d.height = b.size * f, e.scale(f, f)), e.translate(b.size / 2, b.size / 2), e.rotate((-0.5 + b.rotate / 180) * Math.PI);
			var g = (b.size - b.lineWidth) / 2;
			b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2), Date.now = Date.now || function () {
				return +new Date
			};
			var h = function (a, b, c) {
					c = Math.min(Math.max(-1, c || 0), 1);
					var d = 0 >= c ? !0 : !1;
					e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), e.strokeStyle = a, e.lineWidth = b, e.stroke()
				},
				i = function () {
					var a, c;
					e.lineWidth = 1, e.fillStyle = b.scaleColor, e.save();
					for (var d = 24; d > 0; --d) d % 6 === 0 ? (c = b.scaleLength, a = 0) : (c = .6 * b.scaleLength, a = b.scaleLength - c), e.fillRect(-b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);
					e.restore()
				},
				j = function () {
					return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
						window.setTimeout(a, 1e3 / 60)
					}
				}(),
				k = function () {
					b.scaleColor && i(), b.trackColor && h(b.trackColor, b.trackWidth || b.lineWidth, 1)
				};
			this.getCanvas = function () {
				return d
			}, this.getCtx = function () {
				return e
			}, this.clear = function () {
				e.clearRect(b.size / -2, b.size / -2, b.size, b.size)
			}, this.draw = function (a) {
				b.scaleColor || b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, b.size * f, b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = b.lineCap;
				var d;
				d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor, h(d, b.lineWidth, a / 100)
			}.bind(this), this.animate = function (a, c) {
				var d = Date.now();
				b.onStart(a, c);
				var e = function () {
					var f = Math.min(Date.now() - d, b.animate.duration),
						g = b.easing(this, f, a, c - a, b.animate.duration);
					this.draw(g), b.onStep(a, c, g), f >= b.animate.duration ? b.onStop(a, c) : j(e)
				}.bind(this);
				j(e)
			}.bind(this)
		},
		c = function (a, c) {
			var d = {
				barColor: "#ef1e25",
				trackColor: "#f9f9f9",
				scaleColor: "#dfe0e0",
				scaleLength: 5,
				lineCap: "round",
				lineWidth: 3,
				trackWidth: void 0,
				size: 110,
				rotate: 0,
				animate: {
					duration: 1e3,
					enabled: !0
				},
				easing: function (a, b, c, d, e) {
					return b /= e / 2, 1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
				},
				onStart: function (a, b) {},
				onStep: function (a, b, c) {},
				onStop: function (a, b) {}
			};
			if ("undefined" != typeof b) d.renderer = b;
			else {
				if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
				d.renderer = SVGRenderer
			}
			var e = {},
				f = 0,
				g = function () {
					this.el = a, this.options = e;
					for (var b in d) d.hasOwnProperty(b) && (e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b], "function" == typeof e[b] && (e[b] = e[b].bind(this)));
					"string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? e.easing = jQuery.easing[e.easing] : e.easing = d.easing, "number" == typeof e.animate && (e.animate = {
						duration: e.animate,
						enabled: !0
					}), "boolean" != typeof e.animate || e.animate || (e.animate = {
						duration: 1e3,
						enabled: e.animate
					}), this.renderer = new e.renderer(a, e), this.renderer.draw(f), a.dataset && a.dataset.percent ? this.update(parseFloat(a.dataset.percent)) : a.getAttribute && a.getAttribute("data-percent") && this.update(parseFloat(a.getAttribute("data-percent")))
				}.bind(this);
			this.update = function (a) {
				return a = parseFloat(a), e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this
			}.bind(this), this.disableAnimation = function () {
				return e.animate.enabled = !1, this
			}, this.enableAnimation = function () {
				return e.animate.enabled = !0, this
			}, g()
		};
	a.fn.easyPieChart = function (b) {
		return this.each(function () {
			var d;
			a.data(this, "easyPieChart") || (d = a.extend({}, b, a(this).data()), a.data(this, "easyPieChart", new c(this, d)))
		})
	}
});

/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.11.0
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
! function (n) {
	var i = {};

	function o(e) {
		if (i[e]) return i[e].exports;
		var t = i[e] = {
			i: e,
			l: !1,
			exports: {}
		};
		return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
	}
	o.m = n, o.c = i, o.d = function (e, t, n) {
		o.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: n
		})
	}, o.r = function (e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, o.t = function (t, e) {
		if (1 & e && (t = o(t)), 8 & e) return t;
		if (4 & e && "object" == typeof t && t && t.__esModule) return t;
		var n = Object.create(null);
		if (o.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var i in t) o.d(n, i, function (e) {
				return t[e]
			}.bind(null, i));
		return n
	}, o.n = function (e) {
		var t = e && e.__esModule ? function () {
			return e.default
		} : function () {
			return e
		};
		return o.d(t, "a", t), t
	}, o.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, o.p = "", o(o.s = 11)
}([, , function (e, t, n) {
	"use strict";
	e.exports = function (e) {
		"complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function () {
			"interactive" === document.readyState && e.call()
		}) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
	}
}, , function (n, e, t) {
	"use strict";
	(function (e) {
		var t;
		t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, n.exports = t
	}).call(this, t(5))
}, function (e, t, n) {
	"use strict";
	var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
		return typeof e
	} : function (e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
	};
	i = function () {
		return this
	}();
	try {
		i = i || new Function("return this")()
	} catch (e) {
		"object" === ("undefined" == typeof window ? "undefined" : o(window)) && (i = window)
	}
	e.exports = i
}, , , , , , function (e, t, n) {
	e.exports = n(12)
}, function (e, t, n) {
	"use strict";
	var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		o = l(n(2)),
		a = n(4),
		r = l(n(13));

	function l(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var s = a.window.jarallax;
	if (a.window.jarallax = r.default, a.window.jarallax.noConflict = function () {
			return a.window.jarallax = s, this
		}, void 0 !== a.jQuery) {
		var c = function () {
			var e = arguments || [];
			Array.prototype.unshift.call(e, this);
			var t = r.default.apply(a.window, e);
			return "object" !== (void 0 === t ? "undefined" : i(t)) ? t : this
		};
		c.constructor = r.default.constructor;
		var u = a.jQuery.fn.jarallax;
		a.jQuery.fn.jarallax = c, a.jQuery.fn.jarallax.noConflict = function () {
			return a.jQuery.fn.jarallax = u, this
		}
	}(0, o.default)(function () {
		(0, r.default)(document.querySelectorAll("[data-jarallax]"))
	})
}, function (e, I, P) {
	"use strict";
	(function (e) {
		Object.defineProperty(I, "__esModule", {
			value: !0
		});
		var s = function (e, t) {
				if (Array.isArray(e)) return e;
				if (Symbol.iterator in Object(e)) return function (e, t) {
					var n = [],
						i = !0,
						o = !1,
						a = void 0;
					try {
						for (var r, l = e[Symbol.iterator](); !(i = (r = l.next()).done) && (n.push(r.value), !t || n.length !== t); i = !0);
					} catch (e) {
						o = !0, a = e
					} finally {
						try {
							!i && l.return && l.return()
						} finally {
							if (o) throw a
						}
					}
					return n
				}(e, t);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			},
			t = function (e, t, n) {
				return t && i(e.prototype, t), n && i(e, n), e
			};

		function i(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
			}
		}
		var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
				return typeof e
			} : function (e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			},
			n = r(P(2)),
			o = r(P(14)),
			a = P(4);

		function r(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var u = -1 < navigator.userAgent.indexOf("MSIE ") || -1 < navigator.userAgent.indexOf("Trident/") || -1 < navigator.userAgent.indexOf("Edge/"),
			l = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
			d = function () {
				for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), n = 0; n < e.length; n++)
					if (t && void 0 !== t.style[e[n]]) return e[n];
				return !1
			}(),
			m = void 0;
		var v = void 0,
			b = void 0,
			p = void 0,
			f = !1,
			g = !1;

		function y(e) {
			v = a.window.innerWidth || document.documentElement.clientWidth, b = l ? (!m && document.body && ((m = document.createElement("div")).style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(m)), (m ? m.clientHeight : 0) || a.window.innerHeight || document.documentElement.clientHeight) : a.window.innerHeight || document.documentElement.clientHeight, "object" !== (void 0 === e ? "undefined" : c(e)) || "load" !== e.type && "dom-loaded" !== e.type || (f = !0)
		}
		y(), a.window.addEventListener("resize", y), a.window.addEventListener("orientationchange", y), a.window.addEventListener("load", y), (0, n.default)(function () {
			y({
				type: "dom-loaded"
			})
		});
		var h = [],
			x = !1;

		function w() {
			if (h.length) {
				p = void 0 !== a.window.pageYOffset ? a.window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
				var t = f || !x || x.width !== v || x.height !== b,
					n = g || t || !x || x.y !== p;
				g = f = !1, (t || n) && (h.forEach(function (e) {
					t && e.onResize(), n && e.onScroll()
				}), x = {
					width: v,
					height: b,
					y: p
				}), (0, o.default)(w)
			}
		}
		var A = !!e.ResizeObserver && new e.ResizeObserver(function (e) {
				e && e.length && (0, o.default)(function () {
					e.forEach(function (e) {
						e.target && e.target.jarallax && (f || e.target.jarallax.onResize(), g = !0)
					})
				})
			}),
			$ = 0,
			S = (t(j, [{
				key: "css",
				value: function (t, n) {
					return "string" == typeof n ? a.window.getComputedStyle(t).getPropertyValue(n) : (n.transform && d && (n[d] = n.transform), Object.keys(n).forEach(function (e) {
						t.style[e] = n[e]
					}), t)
				}
			}, {
				key: "extend",
				value: function (n) {
					var i = arguments;
					return n = n || {}, Object.keys(arguments).forEach(function (t) {
						i[t] && Object.keys(i[t]).forEach(function (e) {
							n[e] = i[t][e]
						})
					}), n
				}
			}, {
				key: "getWindowData",
				value: function () {
					return {
						width: v,
						height: b,
						y: p
					}
				}
			}, {
				key: "initImg",
				value: function () {
					var e = this,
						t = e.options.imgElement;
					return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !(!e.image.$item && (null === e.image.src && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", e.image.bgImage = e.css(e.$item, "background-image")), !e.image.bgImage || "none" === e.image.bgImage))
				}
			}, {
				key: "canInitParallax",
				value: function () {
					return d && !this.options.disableParallax()
				}
			}, {
				key: "init",
				value: function () {
					var e = this,
						t = {
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							overflow: "hidden",
							pointerEvents: "none"
						},
						n = {};
					if (!e.options.keepImg) {
						var i = e.$item.getAttribute("style");
						if (i && e.$item.setAttribute("data-jarallax-original-styles", i), e.image.useImgTag) {
							var o = e.image.$item.getAttribute("style");
							o && e.image.$item.setAttribute("data-jarallax-original-styles", o)
						}
					}
					if ("static" === e.css(e.$item, "position") && e.css(e.$item, {
							position: "relative"
						}), "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {
							zIndex: 0
						}), e.image.$container = document.createElement("div"), e.css(e.image.$container, t), e.css(e.image.$container, {
							"z-index": e.options.zIndex
						}), u && e.css(e.image.$container, {
							opacity: .9999
						}), e.image.$container.setAttribute("id", "jarallax-container-" + e.instanceID), e.$item.appendChild(e.image.$container), e.image.useImgTag ? n = e.extend({
							"object-fit": e.options.imgSize,
							"object-position": e.options.imgPosition,
							"font-family": "object-fit: " + e.options.imgSize + "; object-position: " + e.options.imgPosition + ";",
							"max-width": "none"
						}, t, n) : (e.image.$item = document.createElement("div"), e.image.src && (n = e.extend({
							"background-position": e.options.imgPosition,
							"background-size": e.options.imgSize,
							"background-repeat": e.options.imgRepeat,
							"background-image": e.image.bgImage || 'url("' + e.image.src + '")'
						}, t, n))), "opacity" !== e.options.type && "scale" !== e.options.type && "scale-opacity" !== e.options.type && 1 !== e.options.speed || (e.image.position = "absolute"), "fixed" === e.image.position)
						for (var a = 0, r = e.$item; null !== r && r !== document && 0 === a;) {
							var l = e.css(r, "-webkit-transform") || e.css(r, "-moz-transform") || e.css(r, "transform");
							l && "none" !== l && (a = 1, e.image.position = "absolute"), r = r.parentNode
						}
					n.position = e.image.position, e.css(e.image.$item, n), e.image.$container.appendChild(e.image.$item), e.onResize(), e.onScroll(!0), e.options.automaticResize && A && A.observe(e.$item), e.options.onInit && e.options.onInit.call(e), "none" !== e.css(e.$item, "background-image") && e.css(e.$item, {
						"background-image": "none"
					}), e.addToParallaxList()
				}
			}, {
				key: "addToParallaxList",
				value: function () {
					h.push(this), 1 === h.length && w()
				}
			}, {
				key: "removeFromParallaxList",
				value: function () {
					var n = this;
					h.forEach(function (e, t) {
						e.instanceID === n.instanceID && h.splice(t, 1)
					})
				}
			}, {
				key: "destroy",
				value: function () {
					var e = this;
					e.removeFromParallaxList();
					var t = e.$item.getAttribute("data-jarallax-original-styles");
					if (e.$item.removeAttribute("data-jarallax-original-styles"), t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"), e.image.useImgTag) {
						var n = e.image.$item.getAttribute("data-jarallax-original-styles");
						e.image.$item.removeAttribute("data-jarallax-original-styles"), n ? e.image.$item.setAttribute("style", t) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)
					}
					e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax
				}
			}, {
				key: "clipContainer",
				value: function () {
					if ("fixed" === this.image.position) {
						var e = this,
							t = e.image.$container.getBoundingClientRect(),
							n = t.width,
							i = t.height;
						e.$clipStyles || (e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "jarallax-clip-" + e.instanceID), (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles));
						var o = "#jarallax-container-" + e.instanceID + " {\n           clip: rect(0 " + n + "px " + i + "px 0);\n           clip: rect(0, " + n + "px, " + i + "px, 0);\n        }";
						e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = o : e.$clipStyles.innerHTML = o
					}
				}
			}, {
				key: "coverImage",
				value: function () {
					var e = this,
						t = e.image.$container.getBoundingClientRect(),
						n = t.height,
						i = e.options.speed,
						o = "scroll" === e.options.type || "scroll-opacity" === e.options.type,
						a = 0,
						r = n,
						l = 0;
					return o && (i < 0 ? (a = i * Math.max(n, b), b < n && (a -= i * (n - b))) : a = i * (n + b), 1 < i ? r = Math.abs(a - b) : i < 0 ? r = a / i + Math.abs(a) : r += (b - n) * (1 - i), a /= 2), e.parallaxScrollDistance = a, l = o ? (b - r) / 2 : (n - r) / 2, e.css(e.image.$item, {
						height: r + "px",
						marginTop: l + "px",
						left: "fixed" === e.image.position ? t.left + "px" : "0",
						width: t.width + "px"
					}), e.options.onCoverImage && e.options.onCoverImage.call(e), {
						image: {
							height: r,
							marginTop: l
						},
						container: t
					}
				}
			}, {
				key: "isVisible",
				value: function () {
					return this.isElementInViewport || !1
				}
			}, {
				key: "onScroll",
				value: function (e) {
					var t = this,
						n = t.$item.getBoundingClientRect(),
						i = n.top,
						o = n.height,
						a = {},
						r = n;
					if (t.options.elementInViewport && (r = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = 0 <= r.bottom && 0 <= r.right && r.top <= b && r.left <= v, e || t.isElementInViewport) {
						var l = Math.max(0, i),
							s = Math.max(0, o + i),
							c = Math.max(0, -i),
							u = Math.max(0, i + o - b),
							d = Math.max(0, o - (i + o - b)),
							m = Math.max(0, -i + b - o),
							p = 1 - 2 * (b - i) / (b + o),
							f = 1;
						if (o < b ? f = 1 - (c || u) / o : s <= b ? f = s / b : d <= b && (f = d / b), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (a.transform = "translate3d(0,0,0)", a.opacity = f), "scale" === t.options.type || "scale-opacity" === t.options.type) {
							var g = 1;
							t.options.speed < 0 ? g -= t.options.speed * f : g += t.options.speed * (1 - f), a.transform = "scale(" + g + ") translate3d(0,0,0)"
						}
						if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
							var y = t.parallaxScrollDistance * p;
							"absolute" === t.image.position && (y -= i), a.transform = "translate3d(0," + y + "px,0)"
						}
						t.css(t.image.$item, a), t.options.onScroll && t.options.onScroll.call(t, {
							section: n,
							beforeTop: l,
							beforeTopEnd: s,
							afterTop: c,
							beforeBottom: u,
							beforeBottomEnd: d,
							afterBottom: m,
							visiblePercent: f,
							fromViewportCenter: p
						})
					}
				}
			}, {
				key: "onResize",
				value: function () {
					this.coverImage(), this.clipContainer()
				}
			}]), j);

		function j(e, t) {
			! function (e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, j);
			var n = this;
			n.instanceID = $++, n.$item = e, n.defaults = {
				type: "scroll",
				speed: .5,
				imgSrc: null,
				imgElement: ".jarallax-img",
				imgSize: "cover",
				imgPosition: "50% 50%",
				imgRepeat: "no-repeat",
				keepImg: !1,
				elementInViewport: null,
				zIndex: -100,
				disableParallax: !1,
				disableVideo: !1,
				automaticResize: !0,
				videoSrc: null,
				videoStartTime: 0,
				videoEndTime: 0,
				videoVolume: 0,
				videoLoop: !0,
				videoPlayOnlyVisible: !0,
				videoLazyLoading: !0,
				onScroll: null,
				onInit: null,
				onDestroy: null,
				onCoverImage: null
			};
			var i = n.$item.dataset || {},
				o = {};
			if (Object.keys(i).forEach(function (e) {
					var t = e.substr(0, 1).toLowerCase() + e.substr(1);
					t && void 0 !== n.defaults[t] && (o[t] = i[e])
				}), n.options = n.extend({}, n.defaults, o, t), n.pureOptions = n.extend({}, n.options), Object.keys(n.options).forEach(function (e) {
					"true" === n.options[e] ? n.options[e] = !0 : "false" === n.options[e] && (n.options[e] = !1)
				}), n.options.speed = Math.min(2, Math.max(-1, parseFloat(n.options.speed))), "string" == typeof n.options.disableParallax && (n.options.disableParallax = new RegExp(n.options.disableParallax)), n.options.disableParallax instanceof RegExp) {
				var a = n.options.disableParallax;
				n.options.disableParallax = function () {
					return a.test(navigator.userAgent)
				}
			}
			if ("function" != typeof n.options.disableParallax && (n.options.disableParallax = function () {
					return !1
				}), "string" == typeof n.options.disableVideo && (n.options.disableVideo = new RegExp(n.options.disableVideo)), n.options.disableVideo instanceof RegExp) {
				var r = n.options.disableVideo;
				n.options.disableVideo = function () {
					return r.test(navigator.userAgent)
				}
			}
			"function" != typeof n.options.disableVideo && (n.options.disableVideo = function () {
				return !1
			});
			var l = n.options.elementInViewport;
			l && "object" === (void 0 === l ? "undefined" : c(l)) && void 0 !== l.length && (l = s(l, 1)[0]);
			l instanceof Element || (l = null), n.options.elementInViewport = l, n.image = {
				src: n.options.imgSrc || null,
				$container: null,
				useImgTag: !1,
				position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? "absolute" : "fixed"
			}, n.initImg() && n.canInitParallax() && n.init()
		}

		function E(e, t) {
			("object" === ("undefined" == typeof HTMLElement ? "undefined" : c(HTMLElement)) ? e instanceof HTMLElement : e && "object" === (void 0 === e ? "undefined" : c(e)) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
			for (var n = t, i = Array.prototype.slice.call(arguments, 2), o = e.length, a = 0, r = void 0; a < o; a++)
				if ("object" === (void 0 === n ? "undefined" : c(n)) || void 0 === n ? e[a].jarallax || (e[a].jarallax = new S(e[a], n)) : e[a].jarallax && (r = e[a].jarallax[n].apply(e[a].jarallax, i)), void 0 !== r) return r;
			return e
		}
		E.constructor = S, I.default = E
	}).call(this, P(5))
}, function (e, t, n) {
	"use strict";
	var i = n(15),
		o = i.requestAnimationFrame || i.webkitRequestAnimationFrame || i.mozRequestAnimationFrame || function (e) {
			var t = +new Date,
				n = Math.max(0, 16 - (t - a)),
				i = setTimeout(e, n);
			return a = t, i
		},
		a = +new Date;
	var r = i.cancelAnimationFrame || i.webkitCancelAnimationFrame || i.mozCancelAnimationFrame || clearTimeout;
	Function.prototype.bind && (o = o.bind(i), r = r.bind(i)), (e.exports = o).cancel = r
}, function (n, e, t) {
	"use strict";
	(function (e) {
		var t;
		t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, n.exports = t
	}).call(this, t(5))
}]);
//# sourceMappingURL=jarallax.min.js.map


/**!
 * instafeed js
 *
 **/
(function () {
	var e;
	e = function () {
			function e(e, t) {
				var n, r;
				this.options = {
					target: "instafeed",
					get: "popular",
					resolution: "thumbnail",
					sortBy: "none",
					links: !0,
					mock: !1,
					useHttp: !1
				};
				if (typeof e == "object")
					for (n in e) r = e[n], this.options[n] = r;
				this.context = t != null ? t : this, this.unique = this._genKey()
			}
			return e.prototype.hasNext = function () {
				return typeof this.context.nextUrl == "string" && this.context.nextUrl.length > 0
			}, e.prototype.next = function () {
				return this.hasNext() ? this.run(this.context.nextUrl) : !1
			}, e.prototype.run = function (t) {
				var n, r, i;
				if (typeof this.options.clientId != "string" && typeof this.options.accessToken != "string") throw new Error("Missing clientId or accessToken.");
				if (typeof this.options.accessToken != "string" && typeof this.options.clientId != "string") throw new Error("Missing clientId or accessToken.");
				return this.options.before != null && typeof this.options.before == "function" && this.options.before.call(this), typeof document != "undefined" && document !== null && (i = document.createElement("script"), i.id = "instafeed-fetcher", i.src = t || this._buildUrl(), n = document.getElementsByTagName("head"), n[0].appendChild(i), r = "instafeedCache" + this.unique, window[r] = new e(this.options, this), window[r].unique = this.unique), !0
			}, e.prototype.parse = function (e) {
				var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D;
				if (typeof e != "object") {
					if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, "Invalid JSON data"), !1;
					throw new Error("Invalid JSON response")
				}
				if (e.meta.code !== 200) {
					if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, e.meta.error_message), !1;
					throw new Error("Error from Instagram: " + e.meta.error_message)
				}
				if (e.data.length === 0) {
					if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, "No images were returned from Instagram"), !1;
					throw new Error("No images were returned from Instagram")
				}
				this.options.success != null && typeof this.options.success == "function" && this.options.success.call(this, e), this.context.nextUrl = "", e.pagination != null && (this.context.nextUrl = e.pagination.next_url);
				if (this.options.sortBy !== "none") {
					this.options.sortBy === "random" ? M = ["", "random"] : M = this.options.sortBy.split("-"), O = M[0] === "least" ? !0 : !1;
					switch (M[1]) {
						case "random":
							e.data.sort(function () {
								return .5 - Math.random()
							});
							break;
						case "recent":
							e.data = this._sortBy(e.data, "created_time", O);
							break;
						case "liked":
							e.data = this._sortBy(e.data, "likes.count", O);
							break;
						case "commented":
							e.data = this._sortBy(e.data, "comments.count", O);
							break;
						default:
							throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
					}
				}
				if (typeof document != "undefined" && document !== null && this.options.mock === !1) {
					m = e.data, A = parseInt(this.options.limit, 10), this.options.limit != null && m.length > A && (m = m.slice(0, A)), u = document.createDocumentFragment(), this.options.filter != null && typeof this.options.filter == "function" && (m = this._filter(m, this.options.filter));
					if (this.options.template != null && typeof this.options.template == "string") {
						f = "", d = "", w = "", D = document.createElement("div");
						for (c = 0, N = m.length; c < N; c++) {
							h = m[c], p = h.images[this.options.resolution];
							if (typeof p != "object") throw o = "No image found for resolution: " + this.options.resolution + ".", new Error(o);
							E = p.width, y = p.height, b = "square", E > y && (b = "landscape"), E < y && (b = "portrait"), v = p.url, l = window.location.protocol.indexOf("http") >= 0, l && !this.options.useHttp && (v = v.replace(/https?:\/\//, "//")), d = this._makeTemplate(this.options.template, {
								model: h,
								id: h.id,
								link: h.link,
								type: h.type,
								image: v,
								width: E,
								height: y,
								orientation: b,
								caption: this._getObjectProperty(h, "caption.text"),
								likes: h.likes.count,
								comments: h.comments.count,
								location: this._getObjectProperty(h, "location.name")
							}), f += d
						}
						D.innerHTML = f, i = [], r = 0, n = D.childNodes.length;
						while (r < n) i.push(D.childNodes[r]), r += 1;
						for (x = 0, C = i.length; x < C; x++) L = i[x], u.appendChild(L)
					} else
						for (T = 0, k = m.length; T < k; T++) {
							h = m[T], g = document.createElement("img"), p = h.images[this.options.resolution];
							if (typeof p != "object") throw o = "No image found for resolution: " + this.options.resolution + ".", new Error(o);
							v = p.url, l = window.location.protocol.indexOf("http") >= 0, l && !this.options.useHttp && (v = v.replace(/https?:\/\//, "//")), g.src = v, this.options.links === !0 ? (t = document.createElement("a"), t.href = h.link, t.appendChild(g), u.appendChild(t)) : u.appendChild(g)
						}
					_ = this.options.target, typeof _ == "string" && (_ = document.getElementById(_));
					if (_ == null) throw o = 'No element with id="' + this.options.target + '" on page.', new Error(o);
					_.appendChild(u), a = document.getElementsByTagName("head")[0], a.removeChild(document.getElementById("instafeed-fetcher")), S = "instafeedCache" + this.unique, window[S] = void 0;
					try {
						delete window[S]
					} catch (P) {
						s = P
					}
				}
				return this.options.after != null && typeof this.options.after == "function" && this.options.after.call(this), !0
			}, e.prototype._buildUrl = function () {
				var e, t, n;
				e = "https://api.instagram.com/v1";
				switch (this.options.get) {
					case "popular":
						t = "media/popular";
						break;
					case "tagged":
						if (!this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
						t = "tags/" + this.options.tagName + "/media/recent";
						break;
					case "location":
						if (!this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
						t = "locations/" + this.options.locationId + "/media/recent";
						break;
					case "user":
						if (!this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
						t = "users/" + this.options.userId + "/media/recent";
						break;
					default:
						throw new Error("Invalid option for get: '" + this.options.get + "'.")
				}
				return n = e + "/" + t, this.options.accessToken != null ? n += "?access_token=" + this.options.accessToken : n += "?client_id=" + this.options.clientId, this.options.limit != null && (n += "&count=" + this.options.limit), n += "&callback=instafeedCache" + this.unique + ".parse", n
			}, e.prototype._genKey = function () {
				var e;
				return e = function () {
					return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
				}, "" + e() + e() + e() + e()
			}, e.prototype._makeTemplate = function (e, t) {
				var n, r, i, s, o;
				r = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, n = e;
				while (r.test(n)) s = n.match(r)[1], o = (i = this._getObjectProperty(t, s)) != null ? i : "", n = n.replace(r, function () {
					return "" + o
				});
				return n
			}, e.prototype._getObjectProperty = function (e, t) {
				var n, r;
				t = t.replace(/\[(\w+)\]/g, ".$1"), r = t.split(".");
				while (r.length) {
					n = r.shift();
					if (!(e != null && n in e)) return null;
					e = e[n]
				}
				return e
			}, e.prototype._sortBy = function (e, t, n) {
				var r;
				return r = function (e, r) {
					var i, s;
					return i = this._getObjectProperty(e, t), s = this._getObjectProperty(r, t), n ? i > s ? 1 : -1 : i < s ? 1 : -1
				}, e.sort(r.bind(this)), e
			}, e.prototype._filter = function (e, t) {
				var n, r, i, s, o;
				n = [], r = function (e) {
					if (t(e)) return n.push(e)
				};
				for (i = 0, o = e.length; i < o; i++) s = e[i], r(s);
				return n
			}, e
		}(),
		function (e, t) {
			return typeof define == "function" && define.amd ? define([], t) : typeof module == "object" && module.exports ? module.exports = t() : e.Instafeed = t()
		}(this, function () {
			return e
		})
}).call(this);

/**
 * sticky-sidebar - A JavaScript plugin for making smart and high performance.
 * @version v3.3.1
 * @link https://github.com/abouolia/sticky-sidebar
 * @author Ahmed Bouhuolia
 * @license The MIT License (MIT)
 **/
! function (t, e) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.StickySidebar = e()
}(this, function () {
	"use strict";
	"undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

	function t(t) {
		return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
	}

	function e(t, e) {
		return t(e = {
			exports: {}
		}, e.exports), e.exports
	}
	var i = e(function (t, e) {
		(function (t) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var l, n, e = function () {
					function n(t, e) {
						for (var i = 0; i < e.length; i++) {
							var n = e[i];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
						}
					}
					return function (t, e, i) {
						return e && n(t.prototype, e), i && n(t, i), t
					}
				}(),
				i = (l = ".stickySidebar", n = {
					topSpacing: 0,
					bottomSpacing: 0,
					containerSelector: !1,
					innerWrapperSelector: ".inner-wrapper-sticky",
					stickyClass: "is-affixed",
					resizeSensor: !0,
					minWidth: !1
				}, function () {
					function c(t) {
						var e = this,
							i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
						if (function (t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, c), this.options = c.extend(n, i), this.sidebar = "string" == typeof t ? document.querySelector(t) : t, void 0 === this.sidebar) throw new Error("There is no specific sidebar element.");
						this.sidebarInner = !1, this.container = this.sidebar.parentElement, this.affixedType = "STATIC", this.direction = "down", this.support = {
							transform: !1,
							transform3d: !1
						}, this._initialized = !1, this._reStyle = !1, this._breakpoint = !1, this.dimensions = {
							translateY: 0,
							maxTranslateY: 0,
							topSpacing: 0,
							lastTopSpacing: 0,
							bottomSpacing: 0,
							lastBottomSpacing: 0,
							sidebarHeight: 0,
							sidebarWidth: 0,
							containerTop: 0,
							containerHeight: 0,
							viewportHeight: 0,
							viewportTop: 0,
							lastViewportTop: 0
						}, ["handleEvent"].forEach(function (t) {
							e[t] = e[t].bind(e)
						}), this.initialize()
					}
					return e(c, [{
						key: "initialize",
						value: function () {
							var i = this;
							if (this._setSupportFeatures(), this.options.innerWrapperSelector && (this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector), null === this.sidebarInner && (this.sidebarInner = !1)), !this.sidebarInner) {
								var t = document.createElement("div");
								for (t.setAttribute("class", "inner-wrapper-sticky"), this.sidebar.appendChild(t); this.sidebar.firstChild != t;) t.appendChild(this.sidebar.firstChild);
								this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky")
							}
							if (this.options.containerSelector) {
								var e = document.querySelectorAll(this.options.containerSelector);
								if ((e = Array.prototype.slice.call(e)).forEach(function (t, e) {
										t.contains(i.sidebar) && (i.container = t)
									}), !e.length) throw new Error("The container does not contains on the sidebar.")
							}
							"function" != typeof this.options.topSpacing && (this.options.topSpacing = parseInt(this.options.topSpacing) || 0), "function" != typeof this.options.bottomSpacing && (this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0), this._widthBreakpoint(), this.calcDimensions(), this.stickyPosition(), this.bindEvents(), this._initialized = !0
						}
					}, {
						key: "bindEvents",
						value: function () {
							window.addEventListener("resize", this, {
								passive: !0,
								capture: !1
							}), window.addEventListener("scroll", this, {
								passive: !0,
								capture: !1
							}), this.sidebar.addEventListener("update" + l, this), this.options.resizeSensor && "undefined" != typeof ResizeSensor && (new ResizeSensor(this.sidebarInner, this.handleEvent), new ResizeSensor(this.container, this.handleEvent))
						}
					}, {
						key: "handleEvent",
						value: function (t) {
							this.updateSticky(t)
						}
					}, {
						key: "calcDimensions",
						value: function () {
							if (!this._breakpoint) {
								var t = this.dimensions;
								t.containerTop = c.offsetRelative(this.container).top, t.containerHeight = this.container.clientHeight, t.containerBottom = t.containerTop + t.containerHeight, t.sidebarHeight = this.sidebarInner.offsetHeight, t.sidebarWidth = this.sidebarInner.offsetWidth, t.viewportHeight = window.innerHeight, t.maxTranslateY = t.containerHeight - t.sidebarHeight, this._calcDimensionsWithScroll()
							}
						}
					}, {
						key: "_calcDimensionsWithScroll",
						value: function () {
							var t = this.dimensions;
							t.sidebarLeft = c.offsetRelative(this.sidebar).left, t.viewportTop = document.documentElement.scrollTop || document.body.scrollTop, t.viewportBottom = t.viewportTop + t.viewportHeight, t.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft, t.topSpacing = this.options.topSpacing, t.bottomSpacing = this.options.bottomSpacing, "function" == typeof t.topSpacing && (t.topSpacing = parseInt(t.topSpacing(this.sidebar)) || 0), "function" == typeof t.bottomSpacing && (t.bottomSpacing = parseInt(t.bottomSpacing(this.sidebar)) || 0), "VIEWPORT-TOP" === this.affixedType ? t.topSpacing < t.lastTopSpacing && (t.translateY += t.lastTopSpacing - t.topSpacing, this._reStyle = !0) : "VIEWPORT-BOTTOM" === this.affixedType && t.bottomSpacing < t.lastBottomSpacing && (t.translateY += t.lastBottomSpacing - t.bottomSpacing, this._reStyle = !0), t.lastTopSpacing = t.topSpacing, t.lastBottomSpacing = t.bottomSpacing
						}
					}, {
						key: "isSidebarFitsViewport",
						value: function () {
							var t = this.dimensions,
								e = "down" === this.scrollDirection ? t.lastBottomSpacing : t.lastTopSpacing;
							return this.dimensions.sidebarHeight + e < this.dimensions.viewportHeight
						}
					}, {
						key: "observeScrollDir",
						value: function () {
							var t = this.dimensions;
							if (t.lastViewportTop !== t.viewportTop) {
								var e = "down" === this.direction ? Math.min : Math.max;
								t.viewportTop === e(t.viewportTop, t.lastViewportTop) && (this.direction = "down" === this.direction ? "up" : "down")
							}
						}
					}, {
						key: "getAffixType",
						value: function () {
							this._calcDimensionsWithScroll();
							var t = this.dimensions,
								e = t.viewportTop + t.topSpacing,
								i = this.affixedType;
							return e <= t.containerTop || t.containerHeight <= t.sidebarHeight ? (t.translateY = 0, i = "STATIC") : i = "up" === this.direction ? this._getAffixTypeScrollingUp() : this._getAffixTypeScrollingDown(), t.translateY = Math.max(0, t.translateY), t.translateY = Math.min(t.containerHeight, t.translateY), t.translateY = Math.round(t.translateY), t.lastViewportTop = t.viewportTop, i
						}
					}, {
						key: "_getAffixTypeScrollingDown",
						value: function () {
							var t = this.dimensions,
								e = t.sidebarHeight + t.containerTop,
								i = t.viewportTop + t.topSpacing,
								n = t.viewportBottom - t.bottomSpacing,
								o = this.affixedType;
							return this.isSidebarFitsViewport() ? t.sidebarHeight + i >= t.containerBottom ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : i >= t.containerTop && (t.translateY = i - t.containerTop, o = "VIEWPORT-TOP") : t.containerBottom <= n ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : e + t.translateY <= n ? (t.translateY = n - e, o = "VIEWPORT-BOTTOM") : t.containerTop + t.translateY <= i && 0 !== t.translateY && t.maxTranslateY !== t.translateY && (o = "VIEWPORT-UNBOTTOM"), o
						}
					}, {
						key: "_getAffixTypeScrollingUp",
						value: function () {
							var t = this.dimensions,
								e = t.sidebarHeight + t.containerTop,
								i = t.viewportTop + t.topSpacing,
								n = t.viewportBottom - t.bottomSpacing,
								o = this.affixedType;
							return i <= t.translateY + t.containerTop ? (t.translateY = i - t.containerTop, o = "VIEWPORT-TOP") : t.containerBottom <= n ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : this.isSidebarFitsViewport() || t.containerTop <= i && 0 !== t.translateY && t.maxTranslateY !== t.translateY && (o = "VIEWPORT-UNBOTTOM"), o
						}
					}, {
						key: "_getStyle",
						value: function (t) {
							if (void 0 !== t) {
								var e = {
										inner: {},
										outer: {}
									},
									i = this.dimensions;
								switch (t) {
									case "VIEWPORT-TOP":
										e.inner = {
											position: "fixed",
											top: i.topSpacing,
											left: i.sidebarLeft - i.viewportLeft,
											width: i.sidebarWidth
										};
										break;
									case "VIEWPORT-BOTTOM":
										e.inner = {
											position: "fixed",
											top: "auto",
											left: i.sidebarLeft,
											bottom: i.bottomSpacing,
											width: i.sidebarWidth
										};
										break;
									case "CONTAINER-BOTTOM":
									case "VIEWPORT-UNBOTTOM":
										var n = this._getTranslate(0, i.translateY + "px");
										e.inner = n ? {
											transform: n
										} : {
											position: "absolute",
											top: i.translateY,
											width: i.sidebarWidth
										}
								}
								switch (t) {
									case "VIEWPORT-TOP":
									case "VIEWPORT-BOTTOM":
									case "VIEWPORT-UNBOTTOM":
									case "CONTAINER-BOTTOM":
										e.outer = {
											height: i.sidebarHeight,
											position: "relative"
										}
								}
								return e.outer = c.extend({
									height: "",
									position: ""
								}, e.outer), e.inner = c.extend({
									position: "relative",
									top: "",
									left: "",
									bottom: "",
									width: "",
									transform: ""
								}, e.inner), e
							}
						}
					}, {
						key: "stickyPosition",
						value: function (t) {
							if (!this._breakpoint) {
								t = this._reStyle || t || !1, this.options.topSpacing, this.options.bottomSpacing;
								var e = this.getAffixType(),
									i = this._getStyle(e);
								if ((this.affixedType != e || t) && e) {
									var n = "affix." + e.toLowerCase().replace("viewport-", "") + l;
									for (var o in c.eventTrigger(this.sidebar, n), "STATIC" === e ? c.removeClass(this.sidebar, this.options.stickyClass) : c.addClass(this.sidebar, this.options.stickyClass), i.outer) {
										var s = "number" == typeof i.outer[o] ? "px" : "";
										this.sidebar.style[o] = i.outer[o] + s
									}
									for (var r in i.inner) {
										var a = "number" == typeof i.inner[r] ? "px" : "";
										this.sidebarInner.style[r] = i.inner[r] + a
									}
									var p = "affixed." + e.toLowerCase().replace("viewport-", "") + l;
									c.eventTrigger(this.sidebar, p)
								} else this._initialized && (this.sidebarInner.style.left = i.inner.left);
								this.affixedType = e
							}
						}
					}, {
						key: "_widthBreakpoint",
						value: function () {
							window.innerWidth <= this.options.minWidth ? (this._breakpoint = !0, this.affixedType = "STATIC", this.sidebar.removeAttribute("style"), c.removeClass(this.sidebar, this.options.stickyClass), this.sidebarInner.removeAttribute("style")) : this._breakpoint = !1
						}
					}, {
						key: "updateSticky",
						value: function () {
							var t, e = this,
								i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
							this._running || (this._running = !0, t = i.type, requestAnimationFrame(function () {
								switch (t) {
									case "scroll":
										e._calcDimensionsWithScroll(), e.observeScrollDir(), e.stickyPosition();
										break;
									case "resize":
									default:
										e._widthBreakpoint(), e.calcDimensions(), e.stickyPosition(!0)
								}
								e._running = !1
							}))
						}
					}, {
						key: "_setSupportFeatures",
						value: function () {
							var t = this.support;
							t.transform = c.supportTransform(), t.transform3d = c.supportTransform(!0)
						}
					}, {
						key: "_getTranslate",
						value: function () {
							var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
								e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
								i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
							return this.support.transform3d ? "translate3d(" + t + ", " + e + ", " + i + ")" : !!this.support.translate && "translate(" + t + ", " + e + ")"
						}
					}, {
						key: "destroy",
						value: function () {
							window.removeEventListener("resize", this, {
								capture: !1
							}), window.removeEventListener("scroll", this, {
								capture: !1
							}), this.sidebar.classList.remove(this.options.stickyClass), this.sidebar.style.minHeight = "", this.sidebar.removeEventListener("update" + l, this);
							var t = {
								inner: {},
								outer: {}
							};
							for (var e in t.inner = {
									position: "",
									top: "",
									left: "",
									bottom: "",
									width: "",
									transform: ""
								}, t.outer = {
									height: "",
									position: ""
								}, t.outer) this.sidebar.style[e] = t.outer[e];
							for (var i in t.inner) this.sidebarInner.style[i] = t.inner[i];
							this.options.resizeSensor && "undefined" != typeof ResizeSensor && (ResizeSensor.detach(this.sidebarInner, this.handleEvent), ResizeSensor.detach(this.container, this.handleEvent))
						}
					}], [{
						key: "supportTransform",
						value: function (t) {
							var i = !1,
								e = t ? "perspective" : "transform",
								n = e.charAt(0).toUpperCase() + e.slice(1),
								o = document.createElement("support").style;
							return (e + " " + ["Webkit", "Moz", "O", "ms"].join(n + " ") + n).split(" ").forEach(function (t, e) {
								if (void 0 !== o[t]) return i = t, !1
							}), i
						}
					}, {
						key: "eventTrigger",
						value: function (t, e, i) {
							try {
								var n = new CustomEvent(e, {
									detail: i
								})
							} catch (t) {
								(n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, i)
							}
							t.dispatchEvent(n)
						}
					}, {
						key: "extend",
						value: function (t, e) {
							var i = {};
							for (var n in t) void 0 !== e[n] ? i[n] = e[n] : i[n] = t[n];
							return i
						}
					}, {
						key: "offsetRelative",
						value: function (t) {
							var e = {
								left: 0,
								top: 0
							};
							do {
								var i = t.offsetTop,
									n = t.offsetLeft;
								isNaN(i) || (e.top += i), isNaN(n) || (e.left += n), t = "BODY" === t.tagName ? t.parentElement : t.offsetParent
							} while (t);
							return e
						}
					}, {
						key: "addClass",
						value: function (t, e) {
							c.hasClass(t, e) || (t.classList ? t.classList.add(e) : t.className += " " + e)
						}
					}, {
						key: "removeClass",
						value: function (t, e) {
							c.hasClass(t, e) && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
						}
					}, {
						key: "hasClass",
						value: function (t, e) {
							return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className)
						}
					}, {
						key: "defaults",
						get: function () {
							return n
						}
					}]), c
				}());
			t.default = i, window.StickySidebar = i
		})(e)
	});
	return t(i), t(e(function (t, e) {
		(function (t) {
			var e, s = (e = t) && e.__esModule ? e : {
				default: e
			};
			! function () {
				if ("undefined" != typeof window) {
					var n = window.$ || window.jQuery || window.Zepto,
						o = "stickySidebar";
					if (n) {
						n.fn.stickySidebar = function (i) {
							return this.each(function () {
								var t = n(this),
									e = n(this).data(o);
								if (e || (e = new s.default(this, "object" == typeof i && i), t.data(o, e)), "string" == typeof i) {
									if (void 0 === e[i] && -1 === ["destroy", "updateSticky"].indexOf(i)) throw new Error('No method named "' + i + '"');
									e[i]()
								}
							})
						}, n.fn.stickySidebar.Constructor = s.default;
						var t = n.fn.stickySidebar;
						n.fn.stickySidebar.noConflict = function () {
							return n.fn.stickySidebar = t, this
						}
					}
				}
			}()
		})(i)
	}))
});



/**
 * Leaflet
 * @version v1.3.4
 * @link https://leafletjs.com/
 * @author Vladimir Agafonkin
 * @license The MIT License (MIT)
 **/
! function (t, i) {
	"object" == typeof exports && "undefined" != typeof module ? i(exports) : "function" == typeof define && define.amd ? define(["exports"], i) : i(t.L = {})
}(this, function (t) {
	"use strict";

	function i(t) {
		var i, e, n, o;
		for (e = 1, n = arguments.length; e < n; e++) {
			o = arguments[e];
			for (i in o) t[i] = o[i]
		}
		return t
	}

	function e(t, i) {
		var e = Array.prototype.slice;
		if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
		var n = e.call(arguments, 2);
		return function () {
			return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments)
		}
	}

	function n(t) {
		return t._leaflet_id = t._leaflet_id || ++Ut, t._leaflet_id
	}

	function o(t, i, e) {
		var n, o, s, r;
		return r = function () {
			n = !1, o && (s.apply(e, o), o = !1)
		}, s = function () {
			n ? o = arguments : (t.apply(e, arguments), setTimeout(r, i), n = !0)
		}
	}

	function s(t, i, e) {
		var n = i[1],
			o = i[0],
			s = n - o;
		return t === n && e ? t : ((t - o) % s + s) % s + o
	}

	function r() {
		return !1
	}

	function a(t, i) {
		var e = Math.pow(10, void 0 === i ? 6 : i);
		return Math.round(t * e) / e
	}

	function h(t) {
		return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
	}

	function u(t) {
		return h(t).split(/\s+/)
	}

	function l(t, i) {
		t.hasOwnProperty("options") || (t.options = t.options ? qt(t.options) : {});
		for (var e in i) t.options[e] = i[e];
		return t.options
	}

	function c(t, i, e) {
		var n = [];
		for (var o in t) n.push(encodeURIComponent(e ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
		return (i && -1 !== i.indexOf("?") ? "&" : "?") + n.join("&")
	}

	function _(t, i) {
		return t.replace(Vt, function (t, e) {
			var n = i[e];
			if (void 0 === n) throw new Error("No value provided for variable " + t);
			return "function" == typeof n && (n = n(i)), n
		})
	}

	function d(t, i) {
		for (var e = 0; e < t.length; e++)
			if (t[e] === i) return e;
		return -1
	}

	function p(t) {
		return window["webkit" + t] || window["moz" + t] || window["ms" + t]
	}

	function m(t) {
		var i = +new Date,
			e = Math.max(0, 16 - (i - Yt));
		return Yt = i + e, window.setTimeout(t, e)
	}

	function f(t, i, n) {
		if (!n || Xt !== m) return Xt.call(window, e(t, i));
		t.call(i)
	}

	function g(t) {
		t && Jt.call(window, t)
	}

	function v() {}

	function y(t, i, e) {
		this.x = e ? Math.round(t) : t, this.y = e ? Math.round(i) : i
	}

	function x(t, i, e) {
		return t instanceof y ? t : Gt(t) ? new y(t[0], t[1]) : void 0 === t || null === t ? t : "object" == typeof t && "x" in t && "y" in t ? new y(t.x, t.y) : new y(t, i, e)
	}

	function w(t, i) {
		if (t)
			for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n])
	}

	function P(t, i) {
		return !t || t instanceof w ? t : new w(t, i)
	}

	function b(t, i) {
		if (t)
			for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n])
	}

	function T(t, i) {
		return t instanceof b ? t : new b(t, i)
	}

	function z(t, i, e) {
		if (isNaN(t) || isNaN(i)) throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
		this.lat = +t, this.lng = +i, void 0 !== e && (this.alt = +e)
	}

	function M(t, i, e) {
		return t instanceof z ? t : Gt(t) && "object" != typeof t[0] ? 3 === t.length ? new z(t[0], t[1], t[2]) : 2 === t.length ? new z(t[0], t[1]) : null : void 0 === t || null === t ? t : "object" == typeof t && "lat" in t ? new z(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === i ? null : new z(t, i, e)
	}

	function C(t, i, e, n) {
		if (Gt(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void(this._d = t[3]);
		this._a = t, this._b = i, this._c = e, this._d = n
	}

	function S(t, i, e, n) {
		return new C(t, i, e, n)
	}

	function Z(t) {
		return document.createElementNS("http://www.w3.org/2000/svg", t)
	}

	function E(t, i) {
		var e, n, o, s, r, a, h = "";
		for (e = 0, o = t.length; e < o; e++) {
			for (n = 0, s = (r = t[e]).length; n < s; n++) a = r[n], h += (n ? "L" : "M") + a.x + " " + a.y;
			h += i ? Hi ? "z" : "x" : ""
		}
		return h || "M0 0"
	}

	function k(t) {
		return navigator.userAgent.toLowerCase().indexOf(t) >= 0
	}

	function A(t, i, n, o) {
		return "touchstart" === i ? (c = t, _ = n, d = o, p = e(function (t) {
			if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
				if (!(Yi.indexOf(t.target.tagName) < 0)) return;
				ft(t)
			}
			R(t, _)
		}), c["_leaflet_touchstart" + d] = p, c.addEventListener(Ui, p, !1), Ji || (document.documentElement.addEventListener(Ui, B, !0), document.documentElement.addEventListener(Vi, I, !0), document.documentElement.addEventListener(Gi, O, !0), document.documentElement.addEventListener(Ki, O, !0), Ji = !0)) : "touchmove" === i ? (u = n, l = function (t) {
			(t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && R(t, u)
		}, (h = t)["_leaflet_touchmove" + o] = l, h.addEventListener(Vi, l, !1)) : "touchend" === i && (r = n, a = function (t) {
			R(t, r)
		}, (s = t)["_leaflet_touchend" + o] = a, s.addEventListener(Gi, a, !1), s.addEventListener(Ki, a, !1)), this;
		var s, r, a, h, u, l, c, _, d, p
	}

	function B(t) {
		Xi[t.pointerId] = t, $i++
	}

	function I(t) {
		Xi[t.pointerId] && (Xi[t.pointerId] = t)
	}

	function O(t) {
		delete Xi[t.pointerId], $i--
	}

	function R(t, i) {
		t.touches = [];
		for (var e in Xi) t.touches.push(Xi[e]);
		t.changedTouches = [t], i(t)
	}

	function D(t, i, e) {
		function n(t) {
			var i;
			if (Oi) {
				if (!mi || "mouse" === t.pointerType) return;
				i = $i
			} else i = t.touches.length;
			if (!(i > 1)) {
				var e = Date.now(),
					n = e - (s || e);
				r = t.touches ? t.touches[0] : t, a = n > 0 && n <= h, s = e
			}
		}

		function o(t) {
			if (a && !r.cancelBubble) {
				if (Oi) {
					if (!mi || "mouse" === t.pointerType) return;
					var e, n, o = {};
					for (n in r) e = r[n], o[n] = e && e.bind ? e.bind(r) : e;
					r = o
				}
				r.type = "dblclick", i(r), s = null
			}
		}
		var s, r, a = !1,
			h = 250;
		return t[ie + Qi + e] = n, t[ie + te + e] = o, t[ie + "dblclick" + e] = i, t.addEventListener(Qi, n, !1), t.addEventListener(te, o, !1), t.addEventListener("dblclick", i, !1), this
	}

	function N(t, i) {
		var e = t[ie + Qi + i],
			n = t[ie + te + i],
			o = t[ie + "dblclick" + i];
		return t.removeEventListener(Qi, e, !1), t.removeEventListener(te, n, !1), mi || t.removeEventListener("dblclick", o, !1), this
	}

	function j(t) {
		return "string" == typeof t ? document.getElementById(t) : t
	}

	function W(t, i) {
		var e = t.style[i] || t.currentStyle && t.currentStyle[i];
		if ((!e || "auto" === e) && document.defaultView) {
			var n = document.defaultView.getComputedStyle(t, null);
			e = n ? n[i] : null
		}
		return "auto" === e ? null : e
	}

	function H(t, i, e) {
		var n = document.createElement(t);
		return n.className = i || "", e && e.appendChild(n), n
	}

	function F(t) {
		var i = t.parentNode;
		i && i.removeChild(t)
	}

	function q(t) {
		for (; t.firstChild;) t.removeChild(t.firstChild)
	}

	function U(t) {
		var i = t.parentNode;
		i.lastChild !== t && i.appendChild(t)
	}

	function V(t) {
		var i = t.parentNode;
		i.firstChild !== t && i.insertBefore(t, i.firstChild)
	}

	function G(t, i) {
		if (void 0 !== t.classList) return t.classList.contains(i);
		var e = J(t);
		return e.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e)
	}

	function K(t, i) {
		if (void 0 !== t.classList)
			for (var e = u(i), n = 0, o = e.length; n < o; n++) t.classList.add(e[n]);
		else if (!G(t, i)) {
			var s = J(t);
			X(t, (s ? s + " " : "") + i)
		}
	}

	function Y(t, i) {
		void 0 !== t.classList ? t.classList.remove(i) : X(t, h((" " + J(t) + " ").replace(" " + i + " ", " ")))
	}

	function X(t, i) {
		void 0 === t.className.baseVal ? t.className = i : t.className.baseVal = i
	}

	function J(t) {
		return void 0 === t.className.baseVal ? t.className : t.className.baseVal
	}

	function $(t, i) {
		"opacity" in t.style ? t.style.opacity = i : "filter" in t.style && function (t, i) {
			var e = !1,
				n = "DXImageTransform.Microsoft.Alpha";
			try {
				e = t.filters.item(n)
			} catch (t) {
				if (1 === i) return
			}
			i = Math.round(100 * i), e ? (e.Enabled = 100 !== i, e.Opacity = i) : t.style.filter += " progid:" + n + "(opacity=" + i + ")"
		}(t, i)
	}

	function Q(t) {
		for (var i = document.documentElement.style, e = 0; e < t.length; e++)
			if (t[e] in i) return t[e];
		return !1
	}

	function tt(t, i, e) {
		var n = i || new y(0, 0);
		t.style[ee] = (Ci ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (e ? " scale(" + e + ")" : "")
	}

	function it(t, i) {
		t._leaflet_pos = i, Ei ? tt(t, i) : (t.style.left = i.x + "px", t.style.top = i.y + "px")
	}

	function et(t) {
		return t._leaflet_pos || new y(0, 0)
	}

	function nt() {
		ut(window, "dragstart", ft)
	}

	function ot() {
		lt(window, "dragstart", ft)
	}

	function st(t) {
		for (; - 1 === t.tabIndex;) t = t.parentNode;
		t.style && (rt(), re = t, ae = t.style.outline, t.style.outline = "none", ut(window, "keydown", rt))
	}

	function rt() {
		re && (re.style.outline = ae, re = void 0, ae = void 0, lt(window, "keydown", rt))
	}

	function at(t) {
		do {
			t = t.parentNode
		} while (!(t.offsetWidth && t.offsetHeight || t === document.body));
		return t
	}

	function ht(t) {
		var i = t.getBoundingClientRect();
		return {
			x: i.width / t.offsetWidth || 1,
			y: i.height / t.offsetHeight || 1,
			boundingClientRect: i
		}
	}

	function ut(t, i, e, n) {
		if ("object" == typeof i)
			for (var o in i) ct(t, o, i[o], e);
		else
			for (var s = 0, r = (i = u(i)).length; s < r; s++) ct(t, i[s], e, n);
		return this
	}

	function lt(t, i, e, n) {
		if ("object" == typeof i)
			for (var o in i) _t(t, o, i[o], e);
		else if (i)
			for (var s = 0, r = (i = u(i)).length; s < r; s++) _t(t, i[s], e, n);
		else {
			for (var a in t[le]) _t(t, a, t[le][a]);
			delete t[le]
		}
		return this
	}

	function ct(t, i, e, o) {
		var s = i + n(e) + (o ? "_" + n(o) : "");
		if (t[le] && t[le][s]) return this;
		var r = function (i) {
				return e.call(o || t, i || window.event)
			},
			a = r;
		Oi && 0 === i.indexOf("touch") ? A(t, i, r, s) : !Ri || "dblclick" !== i || !D || Oi && Li ? "addEventListener" in t ? "mousewheel" === i ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : "mouseenter" === i || "mouseleave" === i ? (r = function (i) {
			i = i || window.event, Lt(t, i) && a(i)
		}, t.addEventListener("mouseenter" === i ? "mouseover" : "mouseout", r, !1)) : ("click" === i && gi && (r = function (t) {
			var i, e, n, o;
			e = a, n = (i = t).timeStamp || i.originalEvent && i.originalEvent.timeStamp, (o = he && n - he) && o > 100 && o < 500 || i.target._simulatedClick && !i._simulated ? gt(i) : (he = n, e(i))
		}), t.addEventListener(i, r, !1)) : "attachEvent" in t && t.attachEvent("on" + i, r) : D(t, r, s), t[le] = t[le] || {}, t[le][s] = r
	}

	function _t(t, i, e, o) {
		var s = i + n(e) + (o ? "_" + n(o) : ""),
			r = t[le] && t[le][s];
		if (!r) return this;
		Oi && 0 === i.indexOf("touch") ? (a = t, h = i, u = s, l = a["_leaflet_" + h + u], "touchstart" === h ? a.removeEventListener(Ui, l, !1) : "touchmove" === h ? a.removeEventListener(Vi, l, !1) : "touchend" === h && (a.removeEventListener(Gi, l, !1), a.removeEventListener(Ki, l, !1))) : !Ri || "dblclick" !== i || !N || Oi && Li ? "removeEventListener" in t ? "mousewheel" === i ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : t.removeEventListener("mouseenter" === i ? "mouseover" : "mouseleave" === i ? "mouseout" : i, r, !1) : "detachEvent" in t && t.detachEvent("on" + i, r) : N(t, s), t[le][s] = null;
		var a, h, u, l
	}

	function dt(t) {
		return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, wt(t), this
	}

	function pt(t) {
		return ct(t, "mousewheel", dt), this
	}

	function mt(t) {
		return ut(t, "mousedown touchstart dblclick", dt), ct(t, "click", xt), this
	}

	function ft(t) {
		return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
	}

	function gt(t) {
		return ft(t), dt(t), this
	}

	function vt(t, i) {
		if (!i) return new y(t.clientX, t.clientY);
		var e = ht(i),
			n = e.boundingClientRect;
		return new y((t.clientX - n.left) / e.x - i.clientLeft, (t.clientY - n.top) / e.y - i.clientTop)
	}

	function yt(t) {
		return mi ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / ce : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
	}

	function xt(t) {
		_e[t.type] = !0
	}

	function wt(t) {
		var i = _e[t.type];
		return _e[t.type] = !1, i
	}

	function Lt(t, i) {
		var e = i.relatedTarget;
		if (!e) return !0;
		try {
			for (; e && e !== t;) e = e.parentNode
		} catch (t) {
			return !1
		}
		return e !== t
	}

	function Pt(t, i) {
		if (!i || !t.length) return t.slice();
		var e = i * i;
		return function (t, i) {
			var e = t.length,
				n = new(typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(e);
			n[0] = n[e - 1] = 1,
				function t(i, e, n, o, s) {
					var r, a, h, u = 0;
					for (a = o + 1; a <= s - 1; a++)(h = Ct(i[a], i[o], i[s], !0)) > u && (r = a, u = h);
					u > n && (e[r] = 1, t(i, e, n, o, r), t(i, e, n, r, s))
				}(t, n, i, 0, e - 1);
			var o, s = [];
			for (o = 0; o < e; o++) n[o] && s.push(t[o]);
			return s
		}(t = function (t, i) {
			for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) r = t[n], a = t[o], void 0, void 0, h = a.x - r.x, u = a.y - r.y, h * h + u * u > i && (e.push(t[n]), o = n);
			var r, a, h, u;
			return o < s - 1 && e.push(t[s - 1]), e
		}(t, e), e)
	}

	function bt(t, i, e) {
		return Math.sqrt(Ct(t, i, e, !0))
	}

	function Tt(t, i, e, n, o) {
		var s, r, a, h = n ? Pe : Mt(t, e),
			u = Mt(i, e);
		for (Pe = u;;) {
			if (!(h | u)) return [t, i];
			if (h & u) return !1;
			a = Mt(r = zt(t, i, s = h || u, e, o), e), s === h ? (t = r, h = a) : (i = r, u = a)
		}
	}

	function zt(t, i, e, n, o) {
		var s, r, a = i.x - t.x,
			h = i.y - t.y,
			u = n.min,
			l = n.max;
		return 8 & e ? (s = t.x + a * (l.y - t.y) / h, r = l.y) : 4 & e ? (s = t.x + a * (u.y - t.y) / h, r = u.y) : 2 & e ? (s = l.x, r = t.y + h * (l.x - t.x) / a) : 1 & e && (s = u.x, r = t.y + h * (u.x - t.x) / a), new y(s, r, o)
	}

	function Mt(t, i) {
		var e = 0;
		return t.x < i.min.x ? e |= 1 : t.x > i.max.x && (e |= 2), t.y < i.min.y ? e |= 4 : t.y > i.max.y && (e |= 8), e
	}

	function Ct(t, i, e, n) {
		var o, s = i.x,
			r = i.y,
			a = e.x - s,
			h = e.y - r,
			u = a * a + h * h;
		return u > 0 && ((o = ((t.x - s) * a + (t.y - r) * h) / u) > 1 ? (s = e.x, r = e.y) : o > 0 && (s += a * o, r += h * o)), a = t.x - s, h = t.y - r, n ? a * a + h * h : new y(s, r)
	}

	function St(t) {
		return !Gt(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
	}

	function Zt(t) {
		return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), St(t)
	}

	function Et(t, i, e) {
		var n, o, s, r, a, h, u, l, c, _ = [1, 4, 2, 8];
		for (o = 0, u = t.length; o < u; o++) t[o]._code = Mt(t[o], i);
		for (r = 0; r < 4; r++) {
			for (l = _[r], n = [], o = 0, s = (u = t.length) - 1; o < u; s = o++) a = t[o], h = t[s], a._code & l ? h._code & l || ((c = zt(h, a, l, i, e))._code = Mt(c, i), n.push(c)) : (h._code & l && ((c = zt(h, a, l, i, e))._code = Mt(c, i), n.push(c)), n.push(a));
			t = n
		}
		return t
	}

	function kt(t, i) {
		var e, n, o, s, r = "Feature" === t.type ? t.geometry : t,
			a = r ? r.coordinates : null,
			h = [],
			u = i && i.pointToLayer,
			l = i && i.coordsToLatLng || At;
		if (!a && !r) return null;
		switch (r.type) {
			case "Point":
				return e = l(a), u ? u(t, e) : new qe(e);
			case "MultiPoint":
				for (o = 0, s = a.length; o < s; o++) e = l(a[o]), h.push(u ? u(t, e) : new qe(e));
				return new je(h);
			case "LineString":
			case "MultiLineString":
				return n = Bt(a, "LineString" === r.type ? 0 : 1, l), new Ke(n, i);
			case "Polygon":
			case "MultiPolygon":
				return n = Bt(a, "Polygon" === r.type ? 1 : 2, l), new Ye(n, i);
			case "GeometryCollection":
				for (o = 0, s = r.geometries.length; o < s; o++) {
					var c = kt({
						geometry: r.geometries[o],
						type: "Feature",
						properties: t.properties
					}, i);
					c && h.push(c)
				}
				return new je(h);
			default:
				throw new Error("Invalid GeoJSON object.")
		}
	}

	function At(t) {
		return new z(t[1], t[0], t[2])
	}

	function Bt(t, i, e) {
		for (var n, o = [], s = 0, r = t.length; s < r; s++) n = i ? Bt(t[s], i - 1, e) : (e || At)(t[s]), o.push(n);
		return o
	}

	function It(t, i) {
		return i = "number" == typeof i ? i : 6, void 0 !== t.alt ? [a(t.lng, i), a(t.lat, i), a(t.alt, i)] : [a(t.lng, i), a(t.lat, i)]
	}

	function Ot(t, i, e, n) {
		for (var o = [], s = 0, r = t.length; s < r; s++) o.push(i ? Ot(t[s], i - 1, e, n) : It(t[s], n));
		return !i && e && o.push(o[0]), o
	}

	function Rt(t, e) {
		return t.feature ? i({}, t.feature, {
			geometry: e
		}) : Dt(e)
	}

	function Dt(t) {
		return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
			type: "Feature",
			properties: {},
			geometry: t
		}
	}

	function Nt(t, i) {
		return new Xe(t, i)
	}

	function jt(t, i) {
		return new an(t, i)
	}

	function Wt(t) {
		return Wi ? new ln(t) : null
	}

	function Ht(t) {
		return Hi || Fi ? new pn(t) : null
	}
	var Ft = Object.freeze;
	Object.freeze = function (t) {
		return t
	};
	var qt = Object.create || function () {
			function t() {}
			return function (i) {
				return t.prototype = i, new t
			}
		}(),
		Ut = 0,
		Vt = /\{ *([\w_-]+) *\}/g,
		Gt = Array.isArray || function (t) {
			return "[object Array]" === Object.prototype.toString.call(t)
		},
		Kt = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
		Yt = 0,
		Xt = window.requestAnimationFrame || p("RequestAnimationFrame") || m,
		Jt = window.cancelAnimationFrame || p("CancelAnimationFrame") || p("CancelRequestAnimationFrame") || function (t) {
			window.clearTimeout(t)
		},
		$t = (Object.freeze || Object)({
			freeze: Ft,
			extend: i,
			create: qt,
			bind: e,
			lastId: Ut,
			stamp: n,
			throttle: o,
			wrapNum: s,
			falseFn: r,
			formatNum: a,
			trim: h,
			splitWords: u,
			setOptions: l,
			getParamString: c,
			template: _,
			isArray: Gt,
			indexOf: d,
			emptyImageUrl: Kt,
			requestFn: Xt,
			cancelFn: Jt,
			requestAnimFrame: f,
			cancelAnimFrame: g
		});
	v.extend = function (t) {
		var e = function () {
				this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
			},
			n = e.__super__ = this.prototype,
			o = qt(n);
		o.constructor = e, e.prototype = o;
		for (var s in this) this.hasOwnProperty(s) && "prototype" !== s && "__super__" !== s && (e[s] = this[s]);
		return t.statics && (i(e, t.statics), delete t.statics), t.includes && (function (t) {
			if ("undefined" != typeof L && L && L.Mixin) {
				t = Gt(t) ? t : [t];
				for (var i = 0; i < t.length; i++) t[i] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
			}
		}(t.includes), i.apply(null, [o].concat(t.includes)), delete t.includes), o.options && (t.options = i(qt(o.options), t.options)), i(o, t), o._initHooks = [], o.callInitHooks = function () {
			if (!this._initHooksCalled) {
				n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0;
				for (var t = 0, i = o._initHooks.length; t < i; t++) o._initHooks[t].call(this)
			}
		}, e
	}, v.include = function (t) {
		return i(this.prototype, t), this
	}, v.mergeOptions = function (t) {
		return i(this.prototype.options, t), this
	}, v.addInitHook = function (t) {
		var i = Array.prototype.slice.call(arguments, 1),
			e = "function" == typeof t ? t : function () {
				this[t].apply(this, i)
			};
		return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(e), this
	};
	var Qt = {
		on: function (t, i, e) {
			if ("object" == typeof t)
				for (var n in t) this._on(n, t[n], i);
			else
				for (var o = 0, s = (t = u(t)).length; o < s; o++) this._on(t[o], i, e);
			return this
		},
		off: function (t, i, e) {
			if (t)
				if ("object" == typeof t)
					for (var n in t) this._off(n, t[n], i);
				else
					for (var o = 0, s = (t = u(t)).length; o < s; o++) this._off(t[o], i, e);
			else delete this._events;
			return this
		},
		_on: function (t, i, e) {
			this._events = this._events || {};
			var n = this._events[t];
			n || (n = [], this._events[t] = n), e === this && (e = void 0);
			for (var o = {
					fn: i,
					ctx: e
				}, s = n, r = 0, a = s.length; r < a; r++)
				if (s[r].fn === i && s[r].ctx === e) return;
			s.push(o)
		},
		_off: function (t, i, e) {
			var n, o, s;
			if (this._events && (n = this._events[t]))
				if (i) {
					if (e === this && (e = void 0), n)
						for (o = 0, s = n.length; o < s; o++) {
							var a = n[o];
							if (a.ctx === e && a.fn === i) return a.fn = r, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1)
						}
				} else {
					for (o = 0, s = n.length; o < s; o++) n[o].fn = r;
					delete this._events[t]
				}
		},
		fire: function (t, e, n) {
			if (!this.listens(t, n)) return this;
			var o = i({}, e, {
				type: t,
				target: this,
				sourceTarget: e && e.sourceTarget || this
			});
			if (this._events) {
				var s = this._events[t];
				if (s) {
					this._firingCount = this._firingCount + 1 || 1;
					for (var r = 0, a = s.length; r < a; r++) {
						var h = s[r];
						h.fn.call(h.ctx || this, o)
					}
					this._firingCount--
				}
			}
			return n && this._propagateEvent(o), this
		},
		listens: function (t, i) {
			var e = this._events && this._events[t];
			if (e && e.length) return !0;
			if (i)
				for (var n in this._eventParents)
					if (this._eventParents[n].listens(t, i)) return !0;
			return !1
		},
		once: function (t, i, n) {
			if ("object" == typeof t) {
				for (var o in t) this.once(o, t[o], i);
				return this
			}
			var s = e(function () {
				this.off(t, i, n).off(t, s, n)
			}, this);
			return this.on(t, i, n).on(t, s, n)
		},
		addEventParent: function (t) {
			return this._eventParents = this._eventParents || {}, this._eventParents[n(t)] = t, this
		},
		removeEventParent: function (t) {
			return this._eventParents && delete this._eventParents[n(t)], this
		},
		_propagateEvent: function (t) {
			for (var e in this._eventParents) this._eventParents[e].fire(t.type, i({
				layer: t.target,
				propagatedFrom: t.target
			}, t), !0)
		}
	};
	Qt.addEventListener = Qt.on, Qt.removeEventListener = Qt.clearAllEventListeners = Qt.off, Qt.addOneTimeEventListener = Qt.once, Qt.fireEvent = Qt.fire, Qt.hasEventListeners = Qt.listens;
	var ti = v.extend(Qt),
		ii = Math.trunc || function (t) {
			return t > 0 ? Math.floor(t) : Math.ceil(t)
		};
	y.prototype = {
		clone: function () {
			return new y(this.x, this.y)
		},
		add: function (t) {
			return this.clone()._add(x(t))
		},
		_add: function (t) {
			return this.x += t.x, this.y += t.y, this
		},
		subtract: function (t) {
			return this.clone()._subtract(x(t))
		},
		_subtract: function (t) {
			return this.x -= t.x, this.y -= t.y, this
		},
		divideBy: function (t) {
			return this.clone()._divideBy(t)
		},
		_divideBy: function (t) {
			return this.x /= t, this.y /= t, this
		},
		multiplyBy: function (t) {
			return this.clone()._multiplyBy(t)
		},
		_multiplyBy: function (t) {
			return this.x *= t, this.y *= t, this
		},
		scaleBy: function (t) {
			return new y(this.x * t.x, this.y * t.y)
		},
		unscaleBy: function (t) {
			return new y(this.x / t.x, this.y / t.y)
		},
		round: function () {
			return this.clone()._round()
		},
		_round: function () {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this
		},
		floor: function () {
			return this.clone()._floor()
		},
		_floor: function () {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
		},
		ceil: function () {
			return this.clone()._ceil()
		},
		_ceil: function () {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
		},
		trunc: function () {
			return this.clone()._trunc()
		},
		_trunc: function () {
			return this.x = ii(this.x), this.y = ii(this.y), this
		},
		distanceTo: function (t) {
			var i = (t = x(t)).x - this.x,
				e = t.y - this.y;
			return Math.sqrt(i * i + e * e)
		},
		equals: function (t) {
			return (t = x(t)).x === this.x && t.y === this.y
		},
		contains: function (t) {
			return t = x(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
		},
		toString: function () {
			return "Point(" + a(this.x) + ", " + a(this.y) + ")"
		}
	}, w.prototype = {
		extend: function (t) {
			return t = x(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
		},
		getCenter: function (t) {
			return new y((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
		},
		getBottomLeft: function () {
			return new y(this.min.x, this.max.y)
		},
		getTopRight: function () {
			return new y(this.max.x, this.min.y)
		},
		getTopLeft: function () {
			return this.min
		},
		getBottomRight: function () {
			return this.max
		},
		getSize: function () {
			return this.max.subtract(this.min)
		},
		contains: function (t) {
			var i, e;
			return (t = "number" == typeof t[0] || t instanceof y ? x(t) : P(t)) instanceof w ? (i = t.min, e = t.max) : i = e = t, i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y
		},
		intersects: function (t) {
			t = P(t);
			var i = this.min,
				e = this.max,
				n = t.min,
				o = t.max,
				s = o.x >= i.x && n.x <= e.x,
				r = o.y >= i.y && n.y <= e.y;
			return s && r
		},
		overlaps: function (t) {
			t = P(t);
			var i = this.min,
				e = this.max,
				n = t.min,
				o = t.max,
				s = o.x > i.x && n.x < e.x,
				r = o.y > i.y && n.y < e.y;
			return s && r
		},
		isValid: function () {
			return !(!this.min || !this.max)
		}
	}, b.prototype = {
		extend: function (t) {
			var i, e, n = this._southWest,
				o = this._northEast;
			if (t instanceof z) i = t, e = t;
			else {
				if (!(t instanceof b)) return t ? this.extend(M(t) || T(t)) : this;
				if (i = t._southWest, e = t._northEast, !i || !e) return this
			}
			return n || o ? (n.lat = Math.min(i.lat, n.lat), n.lng = Math.min(i.lng, n.lng), o.lat = Math.max(e.lat, o.lat), o.lng = Math.max(e.lng, o.lng)) : (this._southWest = new z(i.lat, i.lng), this._northEast = new z(e.lat, e.lng)), this
		},
		pad: function (t) {
			var i = this._southWest,
				e = this._northEast,
				n = Math.abs(i.lat - e.lat) * t,
				o = Math.abs(i.lng - e.lng) * t;
			return new b(new z(i.lat - n, i.lng - o), new z(e.lat + n, e.lng + o))
		},
		getCenter: function () {
			return new z((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
		},
		getSouthWest: function () {
			return this._southWest
		},
		getNorthEast: function () {
			return this._northEast
		},
		getNorthWest: function () {
			return new z(this.getNorth(), this.getWest())
		},
		getSouthEast: function () {
			return new z(this.getSouth(), this.getEast())
		},
		getWest: function () {
			return this._southWest.lng
		},
		getSouth: function () {
			return this._southWest.lat
		},
		getEast: function () {
			return this._northEast.lng
		},
		getNorth: function () {
			return this._northEast.lat
		},
		contains: function (t) {
			t = "number" == typeof t[0] || t instanceof z || "lat" in t ? M(t) : T(t);
			var i, e, n = this._southWest,
				o = this._northEast;
			return t instanceof b ? (i = t.getSouthWest(), e = t.getNorthEast()) : i = e = t, i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng
		},
		intersects: function (t) {
			t = T(t);
			var i = this._southWest,
				e = this._northEast,
				n = t.getSouthWest(),
				o = t.getNorthEast(),
				s = o.lat >= i.lat && n.lat <= e.lat,
				r = o.lng >= i.lng && n.lng <= e.lng;
			return s && r
		},
		overlaps: function (t) {
			t = T(t);
			var i = this._southWest,
				e = this._northEast,
				n = t.getSouthWest(),
				o = t.getNorthEast(),
				s = o.lat > i.lat && n.lat < e.lat,
				r = o.lng > i.lng && n.lng < e.lng;
			return s && r
		},
		toBBoxString: function () {
			return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
		},
		equals: function (t, i) {
			return !!t && (t = T(t), this._southWest.equals(t.getSouthWest(), i) && this._northEast.equals(t.getNorthEast(), i))
		},
		isValid: function () {
			return !(!this._southWest || !this._northEast)
		}
	}, z.prototype = {
		equals: function (t, i) {
			return !!t && (t = M(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === i ? 1e-9 : i))
		},
		toString: function (t) {
			return "LatLng(" + a(this.lat, t) + ", " + a(this.lng, t) + ")"
		},
		distanceTo: function (t) {
			return oi.distance(this, M(t))
		},
		wrap: function () {
			return oi.wrapLatLng(this)
		},
		toBounds: function (t) {
			var i = 180 * t / 40075017,
				e = i / Math.cos(Math.PI / 180 * this.lat);
			return T([this.lat - i, this.lng - e], [this.lat + i, this.lng + e])
		},
		clone: function () {
			return new z(this.lat, this.lng, this.alt)
		}
	};
	var ei, ni = {
			latLngToPoint: function (t, i) {
				var e = this.projection.project(t),
					n = this.scale(i);
				return this.transformation._transform(e, n)
			},
			pointToLatLng: function (t, i) {
				var e = this.scale(i),
					n = this.transformation.untransform(t, e);
				return this.projection.unproject(n)
			},
			project: function (t) {
				return this.projection.project(t)
			},
			unproject: function (t) {
				return this.projection.unproject(t)
			},
			scale: function (t) {
				return 256 * Math.pow(2, t)
			},
			zoom: function (t) {
				return Math.log(t / 256) / Math.LN2
			},
			getProjectedBounds: function (t) {
				if (this.infinite) return null;
				var i = this.projection.bounds,
					e = this.scale(t);
				return new w(this.transformation.transform(i.min, e), this.transformation.transform(i.max, e))
			},
			infinite: !1,
			wrapLatLng: function (t) {
				var i = this.wrapLng ? s(t.lng, this.wrapLng, !0) : t.lng;
				return new z(this.wrapLat ? s(t.lat, this.wrapLat, !0) : t.lat, i, t.alt)
			},
			wrapLatLngBounds: function (t) {
				var i = t.getCenter(),
					e = this.wrapLatLng(i),
					n = i.lat - e.lat,
					o = i.lng - e.lng;
				if (0 === n && 0 === o) return t;
				var s = t.getSouthWest(),
					r = t.getNorthEast();
				return new b(new z(s.lat - n, s.lng - o), new z(r.lat - n, r.lng - o))
			}
		},
		oi = i({}, ni, {
			wrapLng: [-180, 180],
			R: 6371e3,
			distance: function (t, i) {
				var e = Math.PI / 180,
					n = t.lat * e,
					o = i.lat * e,
					s = Math.sin((i.lat - t.lat) * e / 2),
					r = Math.sin((i.lng - t.lng) * e / 2),
					a = s * s + Math.cos(n) * Math.cos(o) * r * r,
					h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
				return this.R * h
			}
		}),
		si = {
			R: 6378137,
			MAX_LATITUDE: 85.0511287798,
			project: function (t) {
				var i = Math.PI / 180,
					e = this.MAX_LATITUDE,
					n = Math.max(Math.min(e, t.lat), -e),
					o = Math.sin(n * i);
				return new y(this.R * t.lng * i, this.R * Math.log((1 + o) / (1 - o)) / 2)
			},
			unproject: function (t) {
				var i = 180 / Math.PI;
				return new z((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i, t.x * i / this.R)
			},
			bounds: (ei = 6378137 * Math.PI, new w([-ei, -ei], [ei, ei]))
		};
	C.prototype = {
		transform: function (t, i) {
			return this._transform(t.clone(), i)
		},
		_transform: function (t, i) {
			return i = i || 1, t.x = i * (this._a * t.x + this._b), t.y = i * (this._c * t.y + this._d), t
		},
		untransform: function (t, i) {
			return i = i || 1, new y((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c)
		}
	};
	var ri, ai, hi, ui, li = i({}, oi, {
			code: "EPSG:3857",
			projection: si,
			transformation: (ui = .5 / (Math.PI * si.R), S(ui, .5, -ui, .5))
		}),
		ci = i({}, li, {
			code: "EPSG:900913"
		}),
		_i = document.documentElement.style,
		di = "ActiveXObject" in window,
		pi = di && !document.addEventListener,
		mi = "msLaunchUri" in navigator && !("documentMode" in document),
		fi = k("webkit"),
		gi = k("android"),
		vi = k("android 2") || k("android 3"),
		yi = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
		xi = gi && k("Google") && yi < 537 && !("AudioNode" in window),
		wi = !!window.opera,
		Li = k("chrome"),
		Pi = k("gecko") && !fi && !wi && !di,
		bi = !Li && k("safari"),
		Ti = k("phantom"),
		zi = "OTransition" in _i,
		Mi = 0 === navigator.platform.indexOf("Win"),
		Ci = di && "transition" in _i,
		Si = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !vi,
		Zi = "MozPerspective" in _i,
		Ei = !window.L_DISABLE_3D && (Ci || Si || Zi) && !zi && !Ti,
		ki = "undefined" != typeof orientation || k("mobile"),
		Ai = ki && fi,
		Bi = ki && Si,
		Ii = !window.PointerEvent && window.MSPointerEvent,
		Oi = !(!window.PointerEvent && !Ii),
		Ri = !window.L_NO_TOUCH && (Oi || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
		Di = ki && wi,
		Ni = ki && Pi,
		ji = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
		Wi = !!document.createElement("canvas").getContext,
		Hi = !(!document.createElementNS || !Z("svg").createSVGRect),
		Fi = !Hi && function () {
			try {
				var t = document.createElement("div");
				t.innerHTML = '<v:shape adj="1"/>';
				var i = t.firstChild;
				return i.style.behavior = "url(#default#VML)", i && "object" == typeof i.adj
			} catch (t) {
				return !1
			}
		}(),
		qi = (Object.freeze || Object)({
			ie: di,
			ielt9: pi,
			edge: mi,
			webkit: fi,
			android: gi,
			android23: vi,
			androidStock: xi,
			opera: wi,
			chrome: Li,
			gecko: Pi,
			safari: bi,
			phantom: Ti,
			opera12: zi,
			win: Mi,
			ie3d: Ci,
			webkit3d: Si,
			gecko3d: Zi,
			any3d: Ei,
			mobile: ki,
			mobileWebkit: Ai,
			mobileWebkit3d: Bi,
			msPointer: Ii,
			pointer: Oi,
			touch: Ri,
			mobileOpera: Di,
			mobileGecko: Ni,
			retina: ji,
			canvas: Wi,
			svg: Hi,
			vml: Fi
		}),
		Ui = Ii ? "MSPointerDown" : "pointerdown",
		Vi = Ii ? "MSPointerMove" : "pointermove",
		Gi = Ii ? "MSPointerUp" : "pointerup",
		Ki = Ii ? "MSPointerCancel" : "pointercancel",
		Yi = ["INPUT", "SELECT", "OPTION"],
		Xi = {},
		Ji = !1,
		$i = 0,
		Qi = Ii ? "MSPointerDown" : Oi ? "pointerdown" : "touchstart",
		te = Ii ? "MSPointerUp" : Oi ? "pointerup" : "touchend",
		ie = "_leaflet_",
		ee = Q(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
		ne = Q(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
		oe = "webkitTransition" === ne || "OTransition" === ne ? ne + "End" : "transitionend";
	if ("onselectstart" in document) ri = function () {
		ut(window, "selectstart", ft)
	}, ai = function () {
		lt(window, "selectstart", ft)
	};
	else {
		var se = Q(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
		ri = function () {
			if (se) {
				var t = document.documentElement.style;
				hi = t[se], t[se] = "none"
			}
		}, ai = function () {
			se && (document.documentElement.style[se] = hi, hi = void 0)
		}
	}
	var re, ae, he, ue = (Object.freeze || Object)({
			TRANSFORM: ee,
			TRANSITION: ne,
			TRANSITION_END: oe,
			get: j,
			getStyle: W,
			create: H,
			remove: F,
			empty: q,
			toFront: U,
			toBack: V,
			hasClass: G,
			addClass: K,
			removeClass: Y,
			setClass: X,
			getClass: J,
			setOpacity: $,
			testProp: Q,
			setTransform: tt,
			setPosition: it,
			getPosition: et,
			disableTextSelection: ri,
			enableTextSelection: ai,
			disableImageDrag: nt,
			enableImageDrag: ot,
			preventOutline: st,
			restoreOutline: rt,
			getSizedParentNode: at,
			getScale: ht
		}),
		le = "_leaflet_events",
		ce = Mi && Li ? 2 * window.devicePixelRatio : Pi ? window.devicePixelRatio : 1,
		_e = {},
		de = (Object.freeze || Object)({
			on: ut,
			off: lt,
			stopPropagation: dt,
			disableScrollPropagation: pt,
			disableClickPropagation: mt,
			preventDefault: ft,
			stop: gt,
			getMousePosition: vt,
			getWheelDelta: yt,
			fakeStop: xt,
			skipped: wt,
			isExternalTarget: Lt,
			addListener: ut,
			removeListener: lt
		}),
		pe = ti.extend({
			run: function (t, i, e, n) {
				this.stop(), this._el = t, this._inProgress = !0, this._duration = e || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = et(t), this._offset = i.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
			},
			stop: function () {
				this._inProgress && (this._step(!0), this._complete())
			},
			_animate: function () {
				this._animId = f(this._animate, this), this._step()
			},
			_step: function (t) {
				var i = +new Date - this._startTime,
					e = 1e3 * this._duration;
				i < e ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1), this._complete())
			},
			_runFrame: function (t, i) {
				var e = this._startPos.add(this._offset.multiplyBy(t));
				i && e._round(), it(this._el, e), this.fire("step")
			},
			_complete: function () {
				g(this._animId), this._inProgress = !1, this.fire("end")
			},
			_easeOut: function (t) {
				return 1 - Math.pow(1 - t, this._easeOutPower)
			}
		}),
		me = ti.extend({
			options: {
				crs: li,
				center: void 0,
				zoom: void 0,
				minZoom: void 0,
				maxZoom: void 0,
				layers: [],
				maxBounds: void 0,
				renderer: void 0,
				zoomAnimation: !0,
				zoomAnimationThreshold: 4,
				fadeAnimation: !0,
				markerZoomAnimation: !0,
				transform3DLimit: 8388608,
				zoomSnap: 1,
				zoomDelta: 1,
				trackResize: !0
			},
			initialize: function (t, i) {
				i = l(this, i), this._initContainer(t), this._initLayout(), this._onResize = e(this._onResize, this), this._initEvents(), i.maxBounds && this.setMaxBounds(i.maxBounds), void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)), i.center && void 0 !== i.zoom && this.setView(M(i.center), i.zoom, {
					reset: !0
				}), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this.callInitHooks(), this._zoomAnimated = ne && Ei && !Di && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), ut(this._proxy, oe, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
			},
			setView: function (t, e, n) {
				return e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(M(t), e, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && !0 !== n && (void 0 !== n.animate && (n.zoom = i({
					animate: n.animate
				}, n.zoom), n.pan = i({
					animate: n.animate,
					duration: n.duration
				}, n.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan)) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(t, e), this)
			},
			setZoom: function (t, i) {
				return this._loaded ? this.setView(this.getCenter(), t, {
					zoom: i
				}) : (this._zoom = t, this)
			},
			zoomIn: function (t, i) {
				return t = t || (Ei ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, i)
			},
			zoomOut: function (t, i) {
				return t = t || (Ei ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, i)
			},
			setZoomAround: function (t, i, e) {
				var n = this.getZoomScale(i),
					o = this.getSize().divideBy(2),
					s = (t instanceof y ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
					r = this.containerPointToLatLng(o.add(s));
				return this.setView(r, i, {
					zoom: e
				})
			},
			_getBoundsCenterZoom: function (t, i) {
				i = i || {}, t = t.getBounds ? t.getBounds() : T(t);
				var e = x(i.paddingTopLeft || i.padding || [0, 0]),
					n = x(i.paddingBottomRight || i.padding || [0, 0]),
					o = this.getBoundsZoom(t, !1, e.add(n));
				if ((o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) === 1 / 0) return {
					center: t.getCenter(),
					zoom: o
				};
				var s = n.subtract(e).divideBy(2),
					r = this.project(t.getSouthWest(), o),
					a = this.project(t.getNorthEast(), o);
				return {
					center: this.unproject(r.add(a).divideBy(2).add(s), o),
					zoom: o
				}
			},
			fitBounds: function (t, i) {
				if (!(t = T(t)).isValid()) throw new Error("Bounds are not valid.");
				var e = this._getBoundsCenterZoom(t, i);
				return this.setView(e.center, e.zoom, i)
			},
			fitWorld: function (t) {
				return this.fitBounds([
					[-90, -180],
					[90, 180]
				], t)
			},
			panTo: function (t, i) {
				return this.setView(t, this._zoom, {
					pan: i
				})
			},
			panBy: function (t, i) {
				if (t = x(t).round(), i = i || {}, !t.x && !t.y) return this.fire("moveend");
				if (!0 !== i.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
				if (this._panAnim || (this._panAnim = new pe, this._panAnim.on({
						step: this._onPanTransitionStep,
						end: this._onPanTransitionEnd
					}, this)), i.noMoveStart || this.fire("movestart"), !1 !== i.animate) {
					K(this._mapPane, "leaflet-pan-anim");
					var e = this._getMapPanePos().subtract(t).round();
					this._panAnim.run(this._mapPane, e, i.duration || .25, i.easeLinearity)
				} else this._rawPanBy(t), this.fire("move").fire("moveend");
				return this
			},
			flyTo: function (t, i, e) {
				function n(t) {
					var i = (_ * _ - c * c + (t ? -1 : 1) * m * m * d * d) / (2 * (t ? _ : c) * m * d),
						e = Math.sqrt(i * i + 1) - i;
					return e < 1e-9 ? -18 : Math.log(e)
				}

				function o(t) {
					return (Math.exp(t) - Math.exp(-t)) / 2
				}

				function s(t) {
					return (Math.exp(t) + Math.exp(-t)) / 2
				}

				function r(t) {
					return c * (s(g) * (o(i = g + p * t) / s(i)) - o(g)) / m;
					var i
				}
				if (!1 === (e = e || {}).animate || !Ei) return this.setView(t, i, e);
				this._stop();
				var a = this.project(this.getCenter()),
					h = this.project(t),
					u = this.getSize(),
					l = this._zoom;
				t = M(t), i = void 0 === i ? l : i;
				var c = Math.max(u.x, u.y),
					_ = c * this.getZoomScale(l, i),
					d = h.distanceTo(a) || 1,
					p = 1.42,
					m = p * p,
					g = n(0),
					v = Date.now(),
					y = (n(1) - g) / p,
					x = e.duration ? 1e3 * e.duration : 1e3 * y * .8;
				return this._moveStart(!0, e.noMoveStart),
					function e() {
						var n, o, u = (Date.now() - v) / x,
							_ = (n = u, (1 - Math.pow(1 - n, 1.5)) * y);
						u <= 1 ? (this._flyToFrame = f(e, this), this._move(this.unproject(a.add(h.subtract(a).multiplyBy(r(_) / d)), l), this.getScaleZoom(c / (o = _, c * (s(g) / s(g + p * o))), l), {
							flyTo: !0
						})) : this._move(t, i)._moveEnd(!0)
					}.call(this), this
			},
			flyToBounds: function (t, i) {
				var e = this._getBoundsCenterZoom(t, i);
				return this.flyTo(e.center, e.zoom, i)
			},
			setMaxBounds: function (t) {
				return (t = T(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
			},
			setMinZoom: function (t) {
				var i = this.options.minZoom;
				return this.options.minZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
			},
			setMaxZoom: function (t) {
				var i = this.options.maxZoom;
				return this.options.maxZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
			},
			panInsideBounds: function (t, i) {
				this._enforcingBounds = !0;
				var e = this.getCenter(),
					n = this._limitCenter(e, this._zoom, T(t));
				return e.equals(n) || this.panTo(n, i), this._enforcingBounds = !1, this
			},
			invalidateSize: function (t) {
				if (!this._loaded) return this;
				t = i({
					animate: !1,
					pan: !0
				}, !0 === t ? {
					animate: !0
				} : t);
				var n = this.getSize();
				this._sizeChanged = !0, this._lastCenter = null;
				var o = this.getSize(),
					s = n.divideBy(2).round(),
					r = o.divideBy(2).round(),
					a = s.subtract(r);
				return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(e(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
					oldSize: n,
					newSize: o
				})) : this
			},
			stop: function () {
				return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
			},
			locate: function (t) {
				if (t = this._locateOptions = i({
						timeout: 1e4,
						watch: !1
					}, t), !("geolocation" in navigator)) return this._handleGeolocationError({
					code: 0,
					message: "Geolocation not supported."
				}), this;
				var n = e(this._handleGeolocationResponse, this),
					o = e(this._handleGeolocationError, this);
				return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(n, o, t) : navigator.geolocation.getCurrentPosition(n, o, t), this
			},
			stopLocate: function () {
				return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
			},
			_handleGeolocationError: function (t) {
				var i = t.code,
					e = t.message || (1 === i ? "permission denied" : 2 === i ? "position unavailable" : "timeout");
				this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
					code: i,
					message: "Geolocation error: " + e + "."
				})
			},
			_handleGeolocationResponse: function (t) {
				var i = new z(t.coords.latitude, t.coords.longitude),
					e = i.toBounds(2 * t.coords.accuracy),
					n = this._locateOptions;
				if (n.setView) {
					var o = this.getBoundsZoom(e);
					this.setView(i, n.maxZoom ? Math.min(o, n.maxZoom) : o)
				}
				var s = {
					latlng: i,
					bounds: e,
					timestamp: t.timestamp
				};
				for (var r in t.coords) "number" == typeof t.coords[r] && (s[r] = t.coords[r]);
				this.fire("locationfound", s)
			},
			addHandler: function (t, i) {
				if (!i) return this;
				var e = this[t] = new i(this);
				return this._handlers.push(e), this.options[t] && e.enable(), this
			},
			remove: function () {
				if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
				try {
					delete this._container._leaflet_id, delete this._containerId
				} catch (t) {
					this._container._leaflet_id = void 0, this._containerId = void 0
				}
				var t;
				void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), F(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (g(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
				for (t in this._layers) this._layers[t].remove();
				for (t in this._panes) F(this._panes[t]);
				return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
			},
			createPane: function (t, i) {
				var e = H("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), i || this._mapPane);
				return t && (this._panes[t] = e), e
			},
			getCenter: function () {
				return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
			},
			getZoom: function () {
				return this._zoom
			},
			getBounds: function () {
				var t = this.getPixelBounds();
				return new b(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
			},
			getMinZoom: function () {
				return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
			},
			getMaxZoom: function () {
				return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
			},
			getBoundsZoom: function (t, i, e) {
				t = T(t), e = x(e || [0, 0]);
				var n = this.getZoom() || 0,
					o = this.getMinZoom(),
					s = this.getMaxZoom(),
					r = t.getNorthWest(),
					a = t.getSouthEast(),
					h = this.getSize().subtract(e),
					u = P(this.project(a, n), this.project(r, n)).getSize(),
					l = Ei ? this.options.zoomSnap : 1,
					c = h.x / u.x,
					_ = h.y / u.y,
					d = i ? Math.max(c, _) : Math.min(c, _);
				return n = this.getScaleZoom(d, n), l && (n = Math.round(n / (l / 100)) * (l / 100), n = i ? Math.ceil(n / l) * l : Math.floor(n / l) * l), Math.max(o, Math.min(s, n))
			},
			getSize: function () {
				return this._size && !this._sizeChanged || (this._size = new y(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
			},
			getPixelBounds: function (t, i) {
				var e = this._getTopLeftPoint(t, i);
				return new w(e, e.add(this.getSize()))
			},
			getPixelOrigin: function () {
				return this._checkIfLoaded(), this._pixelOrigin
			},
			getPixelWorldBounds: function (t) {
				return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
			},
			getPane: function (t) {
				return "string" == typeof t ? this._panes[t] : t
			},
			getPanes: function () {
				return this._panes
			},
			getContainer: function () {
				return this._container
			},
			getZoomScale: function (t, i) {
				var e = this.options.crs;
				return i = void 0 === i ? this._zoom : i, e.scale(t) / e.scale(i)
			},
			getScaleZoom: function (t, i) {
				var e = this.options.crs;
				i = void 0 === i ? this._zoom : i;
				var n = e.zoom(t * e.scale(i));
				return isNaN(n) ? 1 / 0 : n
			},
			project: function (t, i) {
				return i = void 0 === i ? this._zoom : i, this.options.crs.latLngToPoint(M(t), i)
			},
			unproject: function (t, i) {
				return i = void 0 === i ? this._zoom : i, this.options.crs.pointToLatLng(x(t), i)
			},
			layerPointToLatLng: function (t) {
				var i = x(t).add(this.getPixelOrigin());
				return this.unproject(i)
			},
			latLngToLayerPoint: function (t) {
				return this.project(M(t))._round()._subtract(this.getPixelOrigin())
			},
			wrapLatLng: function (t) {
				return this.options.crs.wrapLatLng(M(t))
			},
			wrapLatLngBounds: function (t) {
				return this.options.crs.wrapLatLngBounds(T(t))
			},
			distance: function (t, i) {
				return this.options.crs.distance(M(t), M(i))
			},
			containerPointToLayerPoint: function (t) {
				return x(t).subtract(this._getMapPanePos())
			},
			layerPointToContainerPoint: function (t) {
				return x(t).add(this._getMapPanePos())
			},
			containerPointToLatLng: function (t) {
				var i = this.containerPointToLayerPoint(x(t));
				return this.layerPointToLatLng(i)
			},
			latLngToContainerPoint: function (t) {
				return this.layerPointToContainerPoint(this.latLngToLayerPoint(M(t)))
			},
			mouseEventToContainerPoint: function (t) {
				return vt(t, this._container)
			},
			mouseEventToLayerPoint: function (t) {
				return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
			},
			mouseEventToLatLng: function (t) {
				return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
			},
			_initContainer: function (t) {
				var i = this._container = j(t);
				if (!i) throw new Error("Map container not found.");
				if (i._leaflet_id) throw new Error("Map container is already initialized.");
				ut(i, "scroll", this._onScroll, this), this._containerId = n(i)
			},
			_initLayout: function () {
				var t = this._container;
				this._fadeAnimated = this.options.fadeAnimation && Ei, K(t, "leaflet-container" + (Ri ? " leaflet-touch" : "") + (ji ? " leaflet-retina" : "") + (pi ? " leaflet-oldie" : "") + (bi ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
				var i = W(t, "position");
				"absolute" !== i && "relative" !== i && "fixed" !== i && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
			},
			_initPanes: function () {
				var t = this._panes = {};
				this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), it(this._mapPane, new y(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (K(t.markerPane, "leaflet-zoom-hide"), K(t.shadowPane, "leaflet-zoom-hide"))
			},
			_resetView: function (t, i) {
				it(this._mapPane, new y(0, 0));
				var e = !this._loaded;
				this._loaded = !0, i = this._limitZoom(i), this.fire("viewprereset");
				var n = this._zoom !== i;
				this._moveStart(n, !1)._move(t, i)._moveEnd(n), this.fire("viewreset"), e && this.fire("load")
			},
			_moveStart: function (t, i) {
				return t && this.fire("zoomstart"), i || this.fire("movestart"), this
			},
			_move: function (t, i, e) {
				void 0 === i && (i = this._zoom);
				var n = this._zoom !== i;
				return this._zoom = i, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || e && e.pinch) && this.fire("zoom", e), this.fire("move", e)
			},
			_moveEnd: function (t) {
				return t && this.fire("zoomend"), this.fire("moveend")
			},
			_stop: function () {
				return g(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
			},
			_rawPanBy: function (t) {
				it(this._mapPane, this._getMapPanePos().subtract(t))
			},
			_getZoomSpan: function () {
				return this.getMaxZoom() - this.getMinZoom()
			},
			_panInsideMaxBounds: function () {
				this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
			},
			_checkIfLoaded: function () {
				if (!this._loaded) throw new Error("Set map center and zoom first.")
			},
			_initEvents: function (t) {
				this._targets = {}, this._targets[n(this._container)] = this;
				var i = t ? lt : ut;
				i(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && i(window, "resize", this._onResize, this), Ei && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
			},
			_onResize: function () {
				g(this._resizeRequest), this._resizeRequest = f(function () {
					this.invalidateSize({
						debounceMoveend: !0
					})
				}, this)
			},
			_onScroll: function () {
				this._container.scrollTop = 0, this._container.scrollLeft = 0
			},
			_onMoveEnd: function () {
				var t = this._getMapPanePos();
				Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
			},
			_findEventTargets: function (t, i) {
				for (var e, o = [], s = "mouseout" === i || "mouseover" === i, r = t.target || t.srcElement, a = !1; r;) {
					if ((e = this._targets[n(r)]) && ("click" === i || "preclick" === i) && !t._simulated && this._draggableMoved(e)) {
						a = !0;
						break
					}
					if (e && e.listens(i, !0)) {
						if (s && !Lt(r, t)) break;
						if (o.push(e), s) break
					}
					if (r === this._container) break;
					r = r.parentNode
				}
				return o.length || a || s || !Lt(r, t) || (o = [this]), o
			},
			_handleDOMEvent: function (t) {
				if (this._loaded && !wt(t)) {
					var i = t.type;
					"mousedown" !== i && "keypress" !== i || st(t.target || t.srcElement), this._fireDOMEvent(t, i)
				}
			},
			_mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
			_fireDOMEvent: function (t, e, n) {
				if ("click" === t.type) {
					var o = i({}, t);
					o.type = "preclick", this._fireDOMEvent(o, o.type, n)
				}
				if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, e))).length) {
					var s = n[0];
					"contextmenu" === e && s.listens(e, !0) && ft(t);
					var r = {
						originalEvent: t
					};
					if ("keypress" !== t.type) {
						var a = s.getLatLng && (!s._radius || s._radius <= 10);
						r.containerPoint = a ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t), r.layerPoint = this.containerPointToLayerPoint(r.containerPoint), r.latlng = a ? s.getLatLng() : this.layerPointToLatLng(r.layerPoint)
					}
					for (var h = 0; h < n.length; h++)
						if (n[h].fire(e, r, !0), r.originalEvent._stopped || !1 === n[h].options.bubblingMouseEvents && -1 !== d(this._mouseEvents, e)) return
				}
			},
			_draggableMoved: function (t) {
				return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
			},
			_clearHandlers: function () {
				for (var t = 0, i = this._handlers.length; t < i; t++) this._handlers[t].disable()
			},
			whenReady: function (t, i) {
				return this._loaded ? t.call(i || this, {
					target: this
				}) : this.on("load", t, i), this
			},
			_getMapPanePos: function () {
				return et(this._mapPane) || new y(0, 0)
			},
			_moved: function () {
				var t = this._getMapPanePos();
				return t && !t.equals([0, 0])
			},
			_getTopLeftPoint: function (t, i) {
				return (t && void 0 !== i ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin()).subtract(this._getMapPanePos())
			},
			_getNewPixelOrigin: function (t, i) {
				var e = this.getSize()._divideBy(2);
				return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round()
			},
			_latLngToNewLayerPoint: function (t, i, e) {
				var n = this._getNewPixelOrigin(e, i);
				return this.project(t, i)._subtract(n)
			},
			_latLngBoundsToNewLayerBounds: function (t, i, e) {
				var n = this._getNewPixelOrigin(e, i);
				return P([this.project(t.getSouthWest(), i)._subtract(n), this.project(t.getNorthWest(), i)._subtract(n), this.project(t.getSouthEast(), i)._subtract(n), this.project(t.getNorthEast(), i)._subtract(n)])
			},
			_getCenterLayerPoint: function () {
				return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
			},
			_getCenterOffset: function (t) {
				return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
			},
			_limitCenter: function (t, i, e) {
				if (!e) return t;
				var n = this.project(t, i),
					o = this.getSize().divideBy(2),
					s = new w(n.subtract(o), n.add(o)),
					r = this._getBoundsOffset(s, e, i);
				return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), i)
			},
			_limitOffset: function (t, i) {
				if (!i) return t;
				var e = this.getPixelBounds(),
					n = new w(e.min.add(t), e.max.add(t));
				return t.add(this._getBoundsOffset(n, i))
			},
			_getBoundsOffset: function (t, i, e) {
				var n = P(this.project(i.getNorthEast(), e), this.project(i.getSouthWest(), e)),
					o = n.min.subtract(t.min),
					s = n.max.subtract(t.max);
				return new y(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y))
			},
			_rebound: function (t, i) {
				return t + i > 0 ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i))
			},
			_limitZoom: function (t) {
				var i = this.getMinZoom(),
					e = this.getMaxZoom(),
					n = Ei ? this.options.zoomSnap : 1;
				return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t))
			},
			_onPanTransitionStep: function () {
				this.fire("move")
			},
			_onPanTransitionEnd: function () {
				Y(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
			},
			_tryAnimatedPan: function (t, i) {
				var e = this._getCenterOffset(t)._trunc();
				return !(!0 !== (i && i.animate) && !this.getSize().contains(e) || (this.panBy(e, i), 0))
			},
			_createAnimProxy: function () {
				var t = this._proxy = H("div", "leaflet-proxy leaflet-zoom-animated");
				this._panes.mapPane.appendChild(t), this.on("zoomanim", function (t) {
					var i = ee,
						e = this._proxy.style[i];
					tt(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), e === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd()
				}, this), this.on("load moveend", function () {
					var t = this.getCenter(),
						i = this.getZoom();
					tt(this._proxy, this.project(t, i), this.getZoomScale(i, 1))
				}, this), this._on("unload", this._destroyAnimProxy, this)
			},
			_destroyAnimProxy: function () {
				F(this._proxy), delete this._proxy
			},
			_catchTransitionEnd: function (t) {
				this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
			},
			_nothingToAnimate: function () {
				return !this._container.getElementsByClassName("leaflet-zoom-animated").length
			},
			_tryAnimatedZoom: function (t, i, e) {
				if (this._animatingZoom) return !0;
				if (e = e || {}, !this._zoomAnimated || !1 === e.animate || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold) return !1;
				var n = this.getZoomScale(i),
					o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
				return !(!0 !== e.animate && !this.getSize().contains(o) || (f(function () {
					this._moveStart(!0, !1)._animateZoom(t, i, !0)
				}, this), 0))
			},
			_animateZoom: function (t, i, n, o) {
				this._mapPane && (n && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = i, K(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
					center: t,
					zoom: i,
					noUpdate: o
				}), setTimeout(e(this._onZoomTransitionEnd, this), 250))
			},
			_onZoomTransitionEnd: function () {
				this._animatingZoom && (this._mapPane && Y(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), f(function () {
					this._moveEnd(!0)
				}, this))
			}
		}),
		fe = v.extend({
			options: {
				position: "topright"
			},
			initialize: function (t) {
				l(this, t)
			},
			getPosition: function () {
				return this.options.position
			},
			setPosition: function (t) {
				var i = this._map;
				return i && i.removeControl(this), this.options.position = t, i && i.addControl(this), this
			},
			getContainer: function () {
				return this._container
			},
			addTo: function (t) {
				this.remove(), this._map = t;
				var i = this._container = this.onAdd(t),
					e = this.getPosition(),
					n = t._controlCorners[e];
				return K(i, "leaflet-control"), -1 !== e.indexOf("bottom") ? n.insertBefore(i, n.firstChild) : n.appendChild(i), this
			},
			remove: function () {
				return this._map ? (F(this._container), this.onRemove && this.onRemove(this._map), this._map = null, this) : this
			},
			_refocusOnMap: function (t) {
				this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
			}
		}),
		ge = function (t) {
			return new fe(t)
		};
	me.include({
		addControl: function (t) {
			return t.addTo(this), this
		},
		removeControl: function (t) {
			return t.remove(), this
		},
		_initControlPos: function () {
			function t(t, o) {
				var s = e + t + " " + e + o;
				i[t + o] = H("div", s, n)
			}
			var i = this._controlCorners = {},
				e = "leaflet-",
				n = this._controlContainer = H("div", e + "control-container", this._container);
			t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
		},
		_clearControlPos: function () {
			for (var t in this._controlCorners) F(this._controlCorners[t]);
			F(this._controlContainer), delete this._controlCorners, delete this._controlContainer
		}
	});
	var ve = fe.extend({
			options: {
				collapsed: !0,
				position: "topright",
				autoZIndex: !0,
				hideSingleBase: !1,
				sortLayers: !1,
				sortFunction: function (t, i, e, n) {
					return e < n ? -1 : n < e ? 1 : 0
				}
			},
			initialize: function (t, i, e) {
				l(this, e), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1;
				for (var n in t) this._addLayer(t[n], n);
				for (n in i) this._addLayer(i[n], n, !0)
			},
			onAdd: function (t) {
				this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
				for (var i = 0; i < this._layers.length; i++) this._layers[i].layer.on("add remove", this._onLayerChange, this);
				return this._container
			},
			addTo: function (t) {
				return fe.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
			},
			onRemove: function () {
				this._map.off("zoomend", this._checkDisabledLayers, this);
				for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
			},
			addBaseLayer: function (t, i) {
				return this._addLayer(t, i), this._map ? this._update() : this
			},
			addOverlay: function (t, i) {
				return this._addLayer(t, i, !0), this._map ? this._update() : this
			},
			removeLayer: function (t) {
				t.off("add remove", this._onLayerChange, this);
				var i = this._getLayer(n(t));
				return i && this._layers.splice(this._layers.indexOf(i), 1), this._map ? this._update() : this
			},
			expand: function () {
				K(this._container, "leaflet-control-layers-expanded"), this._form.style.height = null;
				var t = this._map.getSize().y - (this._container.offsetTop + 50);
				return t < this._form.clientHeight ? (K(this._form, "leaflet-control-layers-scrollbar"), this._form.style.height = t + "px") : Y(this._form, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
			},
			collapse: function () {
				return Y(this._container, "leaflet-control-layers-expanded"), this
			},
			_initLayout: function () {
				var t = "leaflet-control-layers",
					i = this._container = H("div", t),
					e = this.options.collapsed;
				i.setAttribute("aria-haspopup", !0), mt(i), pt(i);
				var n = this._form = H("form", t + "-list");
				e && (this._map.on("click", this.collapse, this), gi || ut(i, {
					mouseenter: this.expand,
					mouseleave: this.collapse
				}, this));
				var o = this._layersLink = H("a", t + "-toggle", i);
				o.href = "#", o.title = "Layers", Ri ? (ut(o, "click", gt), ut(o, "click", this.expand, this)) : ut(o, "focus", this.expand, this), e || this.expand(), this._baseLayersList = H("div", t + "-base", n), this._separator = H("div", t + "-separator", n), this._overlaysList = H("div", t + "-overlays", n), i.appendChild(n)
			},
			_getLayer: function (t) {
				for (var i = 0; i < this._layers.length; i++)
					if (this._layers[i] && n(this._layers[i].layer) === t) return this._layers[i]
			},
			_addLayer: function (t, i, n) {
				this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
					layer: t,
					name: i,
					overlay: n
				}), this.options.sortLayers && this._layers.sort(e(function (t, i) {
					return this.options.sortFunction(t.layer, i.layer, t.name, i.name)
				}, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
			},
			_update: function () {
				if (!this._container) return this;
				q(this._baseLayersList), q(this._overlaysList), this._layerControlInputs = [];
				var t, i, e, n, o = 0;
				for (e = 0; e < this._layers.length; e++) n = this._layers[e], this._addItem(n), i = i || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
				return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = i && t ? "" : "none", this
			},
			_onLayerChange: function (t) {
				this._handlingClick || this._update();
				var i = this._getLayer(n(t.target)),
					e = i.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
				e && this._map.fire(e, i)
			},
			_createRadioElement: function (t, i) {
				var e = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>",
					n = document.createElement("div");
				return n.innerHTML = e, n.firstChild
			},
			_addItem: function (t) {
				var i, e = document.createElement("label"),
					o = this._map.hasLayer(t.layer);
				t.overlay ? ((i = document.createElement("input")).type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = o) : i = this._createRadioElement("leaflet-base-layers", o), this._layerControlInputs.push(i), i.layerId = n(t.layer), ut(i, "click", this._onInputClick, this);
				var s = document.createElement("span");
				s.innerHTML = " " + t.name;
				var r = document.createElement("div");
				return e.appendChild(r), r.appendChild(i), r.appendChild(s), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(e), this._checkDisabledLayers(), e
			},
			_onInputClick: function () {
				var t, i, e = this._layerControlInputs,
					n = [],
					o = [];
				this._handlingClick = !0;
				for (var s = e.length - 1; s >= 0; s--) t = e[s], i = this._getLayer(t.layerId).layer, t.checked ? n.push(i) : t.checked || o.push(i);
				for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
				for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
				this._handlingClick = !1, this._refocusOnMap()
			},
			_checkDisabledLayers: function () {
				for (var t, i, e = this._layerControlInputs, n = this._map.getZoom(), o = e.length - 1; o >= 0; o--) t = e[o], i = this._getLayer(t.layerId).layer, t.disabled = void 0 !== i.options.minZoom && n < i.options.minZoom || void 0 !== i.options.maxZoom && n > i.options.maxZoom
			},
			_expandIfNotCollapsed: function () {
				return this._map && !this.options.collapsed && this.expand(), this
			},
			_expand: function () {
				return this.expand()
			},
			_collapse: function () {
				return this.collapse()
			}
		}),
		ye = fe.extend({
			options: {
				position: "topleft",
				zoomInText: "+",
				zoomInTitle: "Zoom in",
				zoomOutText: "&#x2212;",
				zoomOutTitle: "Zoom out"
			},
			onAdd: function (t) {
				var i = "leaflet-control-zoom",
					e = H("div", i + " leaflet-bar"),
					n = this.options;
				return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, i + "-in", e, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, i + "-out", e, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), e
			},
			onRemove: function (t) {
				t.off("zoomend zoomlevelschange", this._updateDisabled, this)
			},
			disable: function () {
				return this._disabled = !0, this._updateDisabled(), this
			},
			enable: function () {
				return this._disabled = !1, this._updateDisabled(), this
			},
			_zoomIn: function (t) {
				!this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
			},
			_zoomOut: function (t) {
				!this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
			},
			_createButton: function (t, i, e, n, o) {
				var s = H("a", e, n);
				return s.innerHTML = t, s.href = "#", s.title = i, s.setAttribute("role", "button"), s.setAttribute("aria-label", i), mt(s), ut(s, "click", gt), ut(s, "click", o, this), ut(s, "click", this._refocusOnMap, this), s
			},
			_updateDisabled: function () {
				var t = this._map,
					i = "leaflet-disabled";
				Y(this._zoomInButton, i), Y(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMinZoom()) && K(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMaxZoom()) && K(this._zoomInButton, i)
			}
		});
	me.mergeOptions({
		zoomControl: !0
	}), me.addInitHook(function () {
		this.options.zoomControl && (this.zoomControl = new ye, this.addControl(this.zoomControl))
	});
	var xe = fe.extend({
			options: {
				position: "bottomleft",
				maxWidth: 100,
				metric: !0,
				imperial: !0
			},
			onAdd: function (t) {
				var i = H("div", "leaflet-control-scale"),
					e = this.options;
				return this._addScales(e, "leaflet-control-scale-line", i), t.on(e.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i
			},
			onRemove: function (t) {
				t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
			},
			_addScales: function (t, i, e) {
				t.metric && (this._mScale = H("div", i, e)), t.imperial && (this._iScale = H("div", i, e))
			},
			_update: function () {
				var t = this._map,
					i = t.getSize().y / 2,
					e = t.distance(t.containerPointToLatLng([0, i]), t.containerPointToLatLng([this.options.maxWidth, i]));
				this._updateScales(e)
			},
			_updateScales: function (t) {
				this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
			},
			_updateMetric: function (t) {
				var i = this._getRoundNum(t),
					e = i < 1e3 ? i + " m" : i / 1e3 + " km";
				this._updateScale(this._mScale, e, i / t)
			},
			_updateImperial: function (t) {
				var i, e, n, o = 3.2808399 * t;
				o > 5280 ? (i = o / 5280, e = this._getRoundNum(i), this._updateScale(this._iScale, e + " mi", e / i)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o))
			},
			_updateScale: function (t, i, e) {
				t.style.width = Math.round(this.options.maxWidth * e) + "px", t.innerHTML = i
			},
			_getRoundNum: function (t) {
				var i = Math.pow(10, (Math.floor(t) + "").length - 1),
					e = t / i;
				return i * (e = e >= 10 ? 10 : e >= 5 ? 5 : e >= 3 ? 3 : e >= 2 ? 2 : 1)
			}
		}),
		we = fe.extend({
			options: {
				position: "bottomright",
				prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
			},
			initialize: function (t) {
				l(this, t), this._attributions = {}
			},
			onAdd: function (t) {
				t.attributionControl = this, this._container = H("div", "leaflet-control-attribution"), mt(this._container);
				for (var i in t._layers) t._layers[i].getAttribution && this.addAttribution(t._layers[i].getAttribution());
				return this._update(), this._container
			},
			setPrefix: function (t) {
				return this.options.prefix = t, this._update(), this
			},
			addAttribution: function (t) {
				return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this
			},
			removeAttribution: function (t) {
				return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this
			},
			_update: function () {
				if (this._map) {
					var t = [];
					for (var i in this._attributions) this._attributions[i] && t.push(i);
					var e = [];
					this.options.prefix && e.push(this.options.prefix), t.length && e.push(t.join(", ")), this._container.innerHTML = e.join(" | ")
				}
			}
		});
	me.mergeOptions({
		attributionControl: !0
	}), me.addInitHook(function () {
		this.options.attributionControl && (new we).addTo(this)
	}), fe.Layers = ve, fe.Zoom = ye, fe.Scale = xe, fe.Attribution = we, ge.layers = function (t, i, e) {
		return new ve(t, i, e)
	}, ge.zoom = function (t) {
		return new ye(t)
	}, ge.scale = function (t) {
		return new xe(t)
	}, ge.attribution = function (t) {
		return new we(t)
	};
	var Le = v.extend({
		initialize: function (t) {
			this._map = t
		},
		enable: function () {
			return this._enabled ? this : (this._enabled = !0, this.addHooks(), this)
		},
		disable: function () {
			return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this
		},
		enabled: function () {
			return !!this._enabled
		}
	});
	Le.addTo = function (t, i) {
		return t.addHandler(i, this), this
	};
	var Pe, be, Te = {
			Events: Qt
		},
		ze = Ri ? "touchstart mousedown" : "mousedown",
		Me = {
			mousedown: "mouseup",
			touchstart: "touchend",
			pointerdown: "touchend",
			MSPointerDown: "touchend"
		},
		Ce = {
			mousedown: "mousemove",
			touchstart: "touchmove",
			pointerdown: "touchmove",
			MSPointerDown: "touchmove"
		},
		Se = ti.extend({
			options: {
				clickTolerance: 3
			},
			initialize: function (t, i, e, n) {
				l(this, n), this._element = t, this._dragStartTarget = i || t, this._preventOutline = e
			},
			enable: function () {
				this._enabled || (ut(this._dragStartTarget, ze, this._onDown, this), this._enabled = !0)
			},
			disable: function () {
				this._enabled && (Se._dragging === this && this.finishDrag(), lt(this._dragStartTarget, ze, this._onDown, this), this._enabled = !1, this._moved = !1)
			},
			_onDown: function (t) {
				if (!t._simulated && this._enabled && (this._moved = !1, !G(this._element, "leaflet-zoom-anim") && !(Se._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (Se._dragging = this, this._preventOutline && st(this._element), nt(), ri(), this._moving)))) {
					this.fire("down");
					var i = t.touches ? t.touches[0] : t,
						e = at(this._element);
					this._startPoint = new y(i.clientX, i.clientY), this._parentScale = ht(e), ut(document, Ce[t.type], this._onMove, this), ut(document, Me[t.type], this._onUp, this)
				}
			},
			_onMove: function (t) {
				if (!t._simulated && this._enabled)
					if (t.touches && t.touches.length > 1) this._moved = !0;
					else {
						var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
							e = new y(i.clientX, i.clientY)._subtract(this._startPoint);
						(e.x || e.y) && (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (e.x /= this._parentScale.x, e.y /= this._parentScale.y, ft(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = et(this._element).subtract(e), K(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), K(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e), this._moving = !0, g(this._animRequest), this._lastEvent = t, this._animRequest = f(this._updatePosition, this, !0)))
					}
			},
			_updatePosition: function () {
				var t = {
					originalEvent: this._lastEvent
				};
				this.fire("predrag", t), it(this._element, this._newPos), this.fire("drag", t)
			},
			_onUp: function (t) {
				!t._simulated && this._enabled && this.finishDrag()
			},
			finishDrag: function () {
				Y(document.body, "leaflet-dragging"), this._lastTarget && (Y(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);
				for (var t in Ce) lt(document, Ce[t], this._onMove, this), lt(document, Me[t], this._onUp, this);
				ot(), ai(), this._moved && this._moving && (g(this._animRequest), this.fire("dragend", {
					distance: this._newPos.distanceTo(this._startPos)
				})), this._moving = !1, Se._dragging = !1
			}
		}),
		Ze = (Object.freeze || Object)({
			simplify: Pt,
			pointToSegmentDistance: bt,
			closestPointOnSegment: function (t, i, e) {
				return Ct(t, i, e)
			},
			clipSegment: Tt,
			_getEdgeIntersection: zt,
			_getBitCode: Mt,
			_sqClosestPointOnSegment: Ct,
			isFlat: St,
			_flat: Zt
		}),
		Ee = (Object.freeze || Object)({
			clipPolygon: Et
		}),
		ke = {
			project: function (t) {
				return new y(t.lng, t.lat)
			},
			unproject: function (t) {
				return new z(t.y, t.x)
			},
			bounds: new w([-180, -90], [180, 90])
		},
		Ae = {
			R: 6378137,
			R_MINOR: 6356752.314245179,
			bounds: new w([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
			project: function (t) {
				var i = Math.PI / 180,
					e = this.R,
					n = t.lat * i,
					o = this.R_MINOR / e,
					s = Math.sqrt(1 - o * o),
					r = s * Math.sin(n),
					a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
				return n = -e * Math.log(Math.max(a, 1e-10)), new y(t.lng * i * e, n)
			},
			unproject: function (t) {
				for (var i, e = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, u = .1; h < 15 && Math.abs(u) > 1e-7; h++) i = s * Math.sin(a), i = Math.pow((1 - i) / (1 + i), s / 2), a += u = Math.PI / 2 - 2 * Math.atan(r * i) - a;
				return new z(a * e, t.x * e / n)
			}
		},
		Be = (Object.freeze || Object)({
			LonLat: ke,
			Mercator: Ae,
			SphericalMercator: si
		}),
		Ie = i({}, oi, {
			code: "EPSG:3395",
			projection: Ae,
			transformation: (be = .5 / (Math.PI * Ae.R), S(be, .5, -be, .5))
		}),
		Oe = i({}, oi, {
			code: "EPSG:4326",
			projection: ke,
			transformation: S(1 / 180, 1, -1 / 180, .5)
		}),
		Re = i({}, ni, {
			projection: ke,
			transformation: S(1, 0, -1, 0),
			scale: function (t) {
				return Math.pow(2, t)
			},
			zoom: function (t) {
				return Math.log(t) / Math.LN2
			},
			distance: function (t, i) {
				var e = i.lng - t.lng,
					n = i.lat - t.lat;
				return Math.sqrt(e * e + n * n)
			},
			infinite: !0
		});
	ni.Earth = oi, ni.EPSG3395 = Ie, ni.EPSG3857 = li, ni.EPSG900913 = ci, ni.EPSG4326 = Oe, ni.Simple = Re;
	var De = ti.extend({
		options: {
			pane: "overlayPane",
			attribution: null,
			bubblingMouseEvents: !0
		},
		addTo: function (t) {
			return t.addLayer(this), this
		},
		remove: function () {
			return this.removeFrom(this._map || this._mapToAdd)
		},
		removeFrom: function (t) {
			return t && t.removeLayer(this), this
		},
		getPane: function (t) {
			return this._map.getPane(t ? this.options[t] || t : this.options.pane)
		},
		addInteractiveTarget: function (t) {
			return this._map._targets[n(t)] = this, this
		},
		removeInteractiveTarget: function (t) {
			return delete this._map._targets[n(t)], this
		},
		getAttribution: function () {
			return this.options.attribution
		},
		_layerAdd: function (t) {
			var i = t.target;
			if (i.hasLayer(this)) {
				if (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents) {
					var e = this.getEvents();
					i.on(e, this), this.once("remove", function () {
						i.off(e, this)
					}, this)
				}
				this.onAdd(i), this.getAttribution && i.attributionControl && i.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), i.fire("layeradd", {
					layer: this
				})
			}
		}
	});
	me.include({
		addLayer: function (t) {
			if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
			var i = n(t);
			return this._layers[i] ? this : (this._layers[i] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this)
		},
		removeLayer: function (t) {
			var i = n(t);
			return this._layers[i] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[i], this._loaded && (this.fire("layerremove", {
				layer: t
			}), t.fire("remove")), t._map = t._mapToAdd = null, this) : this
		},
		hasLayer: function (t) {
			return !!t && n(t) in this._layers
		},
		eachLayer: function (t, i) {
			for (var e in this._layers) t.call(i, this._layers[e]);
			return this
		},
		_addLayers: function (t) {
			for (var i = 0, e = (t = t ? Gt(t) ? t : [t] : []).length; i < e; i++) this.addLayer(t[i])
		},
		_addZoomLimit: function (t) {
			!isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[n(t)] = t, this._updateZoomLevels())
		},
		_removeZoomLimit: function (t) {
			var i = n(t);
			this._zoomBoundLayers[i] && (delete this._zoomBoundLayers[i], this._updateZoomLevels())
		},
		_updateZoomLevels: function () {
			var t = 1 / 0,
				i = -1 / 0,
				e = this._getZoomSpan();
			for (var n in this._zoomBoundLayers) {
				var o = this._zoomBoundLayers[n].options;
				t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom)
			}
			this._layersMaxZoom = i === -1 / 0 ? void 0 : i, this._layersMinZoom = t === 1 / 0 ? void 0 : t, e !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
		}
	});
	var Ne = De.extend({
			initialize: function (t, i) {
				var e, n;
				if (l(this, i), this._layers = {}, t)
					for (e = 0, n = t.length; e < n; e++) this.addLayer(t[e])
			},
			addLayer: function (t) {
				var i = this.getLayerId(t);
				return this._layers[i] = t, this._map && this._map.addLayer(t), this
			},
			removeLayer: function (t) {
				var i = t in this._layers ? t : this.getLayerId(t);
				return this._map && this._layers[i] && this._map.removeLayer(this._layers[i]), delete this._layers[i], this
			},
			hasLayer: function (t) {
				return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
			},
			clearLayers: function () {
				return this.eachLayer(this.removeLayer, this)
			},
			invoke: function (t) {
				var i, e, n = Array.prototype.slice.call(arguments, 1);
				for (i in this._layers)(e = this._layers[i])[t] && e[t].apply(e, n);
				return this
			},
			onAdd: function (t) {
				this.eachLayer(t.addLayer, t)
			},
			onRemove: function (t) {
				this.eachLayer(t.removeLayer, t)
			},
			eachLayer: function (t, i) {
				for (var e in this._layers) t.call(i, this._layers[e]);
				return this
			},
			getLayer: function (t) {
				return this._layers[t]
			},
			getLayers: function () {
				var t = [];
				return this.eachLayer(t.push, t), t
			},
			setZIndex: function (t) {
				return this.invoke("setZIndex", t)
			},
			getLayerId: function (t) {
				return n(t)
			}
		}),
		je = Ne.extend({
			addLayer: function (t) {
				return this.hasLayer(t) ? this : (t.addEventParent(this), Ne.prototype.addLayer.call(this, t), this.fire("layeradd", {
					layer: t
				}))
			},
			removeLayer: function (t) {
				return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Ne.prototype.removeLayer.call(this, t), this.fire("layerremove", {
					layer: t
				})) : this
			},
			setStyle: function (t) {
				return this.invoke("setStyle", t)
			},
			bringToFront: function () {
				return this.invoke("bringToFront")
			},
			bringToBack: function () {
				return this.invoke("bringToBack")
			},
			getBounds: function () {
				var t = new b;
				for (var i in this._layers) {
					var e = this._layers[i];
					t.extend(e.getBounds ? e.getBounds() : e.getLatLng())
				}
				return t
			}
		}),
		We = v.extend({
			options: {
				popupAnchor: [0, 0],
				tooltipAnchor: [0, 0]
			},
			initialize: function (t) {
				l(this, t)
			},
			createIcon: function (t) {
				return this._createIcon("icon", t)
			},
			createShadow: function (t) {
				return this._createIcon("shadow", t)
			},
			_createIcon: function (t, i) {
				var e = this._getIconUrl(t);
				if (!e) {
					if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
					return null
				}
				var n = this._createImg(e, i && "IMG" === i.tagName ? i : null);
				return this._setIconStyles(n, t), n
			},
			_setIconStyles: function (t, i) {
				var e = this.options,
					n = e[i + "Size"];
				"number" == typeof n && (n = [n, n]);
				var o = x(n),
					s = x("shadow" === i && e.shadowAnchor || e.iconAnchor || o && o.divideBy(2, !0));
				t.className = "leaflet-marker-" + i + " " + (e.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
			},
			_createImg: function (t, i) {
				return (i = i || document.createElement("img")).src = t, i
			},
			_getIconUrl: function (t) {
				return ji && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
			}
		}),
		He = We.extend({
			options: {
				iconUrl: "marker-icon.png",
				iconRetinaUrl: "marker-icon-2x.png",
				shadowUrl: "marker-shadow.png",
				iconSize: [25, 41],
				iconAnchor: [12, 41],
				popupAnchor: [1, -34],
				tooltipAnchor: [16, -28],
				shadowSize: [41, 41]
			},
			_getIconUrl: function (t) {
				return He.imagePath || (He.imagePath = this._detectIconPath()), (this.options.imagePath || He.imagePath) + We.prototype._getIconUrl.call(this, t)
			},
			_detectIconPath: function () {
				var t = H("div", "leaflet-default-icon-path", document.body),
					i = W(t, "background-image") || W(t, "backgroundImage");
				return document.body.removeChild(t), null === i || 0 !== i.indexOf("url") ? "" : i.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
			}
		}),
		Fe = Le.extend({
			initialize: function (t) {
				this._marker = t
			},
			addHooks: function () {
				var t = this._marker._icon;
				this._draggable || (this._draggable = new Se(t, t, !0)), this._draggable.on({
					dragstart: this._onDragStart,
					predrag: this._onPreDrag,
					drag: this._onDrag,
					dragend: this._onDragEnd
				}, this).enable(), K(t, "leaflet-marker-draggable")
			},
			removeHooks: function () {
				this._draggable.off({
					dragstart: this._onDragStart,
					predrag: this._onPreDrag,
					drag: this._onDrag,
					dragend: this._onDragEnd
				}, this).disable(), this._marker._icon && Y(this._marker._icon, "leaflet-marker-draggable")
			},
			moved: function () {
				return this._draggable && this._draggable._moved
			},
			_adjustPan: function (t) {
				var i = this._marker,
					e = i._map,
					n = this._marker.options.autoPanSpeed,
					o = this._marker.options.autoPanPadding,
					s = et(i._icon),
					r = e.getPixelBounds(),
					a = e.getPixelOrigin(),
					h = P(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
				if (!h.contains(s)) {
					var u = x((Math.max(h.max.x, s.x) - h.max.x) / (r.max.x - h.max.x) - (Math.min(h.min.x, s.x) - h.min.x) / (r.min.x - h.min.x), (Math.max(h.max.y, s.y) - h.max.y) / (r.max.y - h.max.y) - (Math.min(h.min.y, s.y) - h.min.y) / (r.min.y - h.min.y)).multiplyBy(n);
					e.panBy(u, {
						animate: !1
					}), this._draggable._newPos._add(u), this._draggable._startPos._add(u), it(i._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = f(this._adjustPan.bind(this, t))
				}
			},
			_onDragStart: function () {
				this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart")
			},
			_onPreDrag: function (t) {
				this._marker.options.autoPan && (g(this._panRequest), this._panRequest = f(this._adjustPan.bind(this, t)))
			},
			_onDrag: function (t) {
				var i = this._marker,
					e = i._shadow,
					n = et(i._icon),
					o = i._map.layerPointToLatLng(n);
				e && it(e, n), i._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, i.fire("move", t).fire("drag", t)
			},
			_onDragEnd: function (t) {
				g(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
			}
		}),
		qe = De.extend({
			options: {
				icon: new He,
				interactive: !0,
				keyboard: !0,
				title: "",
				alt: "",
				zIndexOffset: 0,
				opacity: 1,
				riseOnHover: !1,
				riseOffset: 250,
				pane: "markerPane",
				bubblingMouseEvents: !1,
				draggable: !1,
				autoPan: !1,
				autoPanPadding: [50, 50],
				autoPanSpeed: 10
			},
			initialize: function (t, i) {
				l(this, i), this._latlng = M(t)
			},
			onAdd: function (t) {
				this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
			},
			onRemove: function (t) {
				this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
			},
			getEvents: function () {
				return {
					zoom: this.update,
					viewreset: this.update
				}
			},
			getLatLng: function () {
				return this._latlng
			},
			setLatLng: function (t) {
				var i = this._latlng;
				return this._latlng = M(t), this.update(), this.fire("move", {
					oldLatLng: i,
					latlng: this._latlng
				})
			},
			setZIndexOffset: function (t) {
				return this.options.zIndexOffset = t, this.update()
			},
			setIcon: function (t) {
				return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
			},
			getElement: function () {
				return this._icon
			},
			update: function () {
				if (this._icon && this._map) {
					var t = this._map.latLngToLayerPoint(this._latlng).round();
					this._setPos(t)
				}
				return this
			},
			_initIcon: function () {
				var t = this.options,
					i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
					e = t.icon.createIcon(this._icon),
					n = !1;
				e !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (e.title = t.title), "IMG" === e.tagName && (e.alt = t.alt || "")), K(e, i), t.keyboard && (e.tabIndex = "0"), this._icon = e, t.riseOnHover && this.on({
					mouseover: this._bringToFront,
					mouseout: this._resetZIndex
				});
				var o = t.icon.createShadow(this._shadow),
					s = !1;
				o !== this._shadow && (this._removeShadow(), s = !0), o && (K(o, i), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane("shadowPane").appendChild(this._shadow)
			},
			_removeIcon: function () {
				this.options.riseOnHover && this.off({
					mouseover: this._bringToFront,
					mouseout: this._resetZIndex
				}), F(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
			},
			_removeShadow: function () {
				this._shadow && F(this._shadow), this._shadow = null
			},
			_setPos: function (t) {
				it(this._icon, t), this._shadow && it(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
			},
			_updateZIndex: function (t) {
				this._icon.style.zIndex = this._zIndex + t
			},
			_animateZoom: function (t) {
				var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
				this._setPos(i)
			},
			_initInteraction: function () {
				if (this.options.interactive && (K(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Fe)) {
					var t = this.options.draggable;
					this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Fe(this), t && this.dragging.enable()
				}
			},
			setOpacity: function (t) {
				return this.options.opacity = t, this._map && this._updateOpacity(), this
			},
			_updateOpacity: function () {
				var t = this.options.opacity;
				$(this._icon, t), this._shadow && $(this._shadow, t)
			},
			_bringToFront: function () {
				this._updateZIndex(this.options.riseOffset)
			},
			_resetZIndex: function () {
				this._updateZIndex(0)
			},
			_getPopupAnchor: function () {
				return this.options.icon.options.popupAnchor
			},
			_getTooltipAnchor: function () {
				return this.options.icon.options.tooltipAnchor
			}
		}),
		Ue = De.extend({
			options: {
				stroke: !0,
				color: "#3388ff",
				weight: 3,
				opacity: 1,
				lineCap: "round",
				lineJoin: "round",
				dashArray: null,
				dashOffset: null,
				fill: !1,
				fillColor: null,
				fillOpacity: .2,
				fillRule: "evenodd",
				interactive: !0,
				bubblingMouseEvents: !0
			},
			beforeAdd: function (t) {
				this._renderer = t.getRenderer(this)
			},
			onAdd: function () {
				this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
			},
			onRemove: function () {
				this._renderer._removePath(this)
			},
			redraw: function () {
				return this._map && this._renderer._updatePath(this), this
			},
			setStyle: function (t) {
				return l(this, t), this._renderer && this._renderer._updateStyle(this), this
			},
			bringToFront: function () {
				return this._renderer && this._renderer._bringToFront(this), this
			},
			bringToBack: function () {
				return this._renderer && this._renderer._bringToBack(this), this
			},
			getElement: function () {
				return this._path
			},
			_reset: function () {
				this._project(), this._update()
			},
			_clickTolerance: function () {
				return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
			}
		}),
		Ve = Ue.extend({
			options: {
				fill: !0,
				radius: 10
			},
			initialize: function (t, i) {
				l(this, i), this._latlng = M(t), this._radius = this.options.radius
			},
			setLatLng: function (t) {
				return this._latlng = M(t), this.redraw(), this.fire("move", {
					latlng: this._latlng
				})
			},
			getLatLng: function () {
				return this._latlng
			},
			setRadius: function (t) {
				return this.options.radius = this._radius = t, this.redraw()
			},
			getRadius: function () {
				return this._radius
			},
			setStyle: function (t) {
				var i = t && t.radius || this._radius;
				return Ue.prototype.setStyle.call(this, t), this.setRadius(i), this
			},
			_project: function () {
				this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
			},
			_updateBounds: function () {
				var t = this._radius,
					i = this._radiusY || t,
					e = this._clickTolerance(),
					n = [t + e, i + e];
				this._pxBounds = new w(this._point.subtract(n), this._point.add(n))
			},
			_update: function () {
				this._map && this._updatePath()
			},
			_updatePath: function () {
				this._renderer._updateCircle(this)
			},
			_empty: function () {
				return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
			},
			_containsPoint: function (t) {
				return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
			}
		}),
		Ge = Ve.extend({
			initialize: function (t, e, n) {
				if ("number" == typeof e && (e = i({}, n, {
						radius: e
					})), l(this, e), this._latlng = M(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
				this._mRadius = this.options.radius
			},
			setRadius: function (t) {
				return this._mRadius = t, this.redraw()
			},
			getRadius: function () {
				return this._mRadius
			},
			getBounds: function () {
				var t = [this._radius, this._radiusY || this._radius];
				return new b(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
			},
			setStyle: Ue.prototype.setStyle,
			_project: function () {
				var t = this._latlng.lng,
					i = this._latlng.lat,
					e = this._map,
					n = e.options.crs;
				if (n.distance === oi.distance) {
					var o = Math.PI / 180,
						s = this._mRadius / oi.R / o,
						r = e.project([i + s, t]),
						a = e.project([i - s, t]),
						h = r.add(a).divideBy(2),
						u = e.unproject(h).lat,
						l = Math.acos((Math.cos(s * o) - Math.sin(i * o) * Math.sin(u * o)) / (Math.cos(i * o) * Math.cos(u * o))) / o;
					(isNaN(l) || 0 === l) && (l = s / Math.cos(Math.PI / 180 * i)), this._point = h.subtract(e.getPixelOrigin()), this._radius = isNaN(l) ? 0 : h.x - e.project([u, t - l]).x, this._radiusY = h.y - r.y
				} else {
					var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
					this._point = e.latLngToLayerPoint(this._latlng), this._radius = this._point.x - e.latLngToLayerPoint(c).x
				}
				this._updateBounds()
			}
		}),
		Ke = Ue.extend({
			options: {
				smoothFactor: 1,
				noClip: !1
			},
			initialize: function (t, i) {
				l(this, i), this._setLatLngs(t)
			},
			getLatLngs: function () {
				return this._latlngs
			},
			setLatLngs: function (t) {
				return this._setLatLngs(t), this.redraw()
			},
			isEmpty: function () {
				return !this._latlngs.length
			},
			closestLayerPoint: function (t) {
				for (var i, e, n = 1 / 0, o = null, s = Ct, r = 0, a = this._parts.length; r < a; r++)
					for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) {
						var c = s(t, i = h[u - 1], e = h[u], !0);
						c < n && (n = c, o = s(t, i, e))
					}
				return o && (o.distance = Math.sqrt(n)), o
			},
			getCenter: function () {
				if (!this._map) throw new Error("Must add layer to map before using getCenter()");
				var t, i, e, n, o, s, r, a = this._rings[0],
					h = a.length;
				if (!h) return null;
				for (t = 0, i = 0; t < h - 1; t++) i += a[t].distanceTo(a[t + 1]) / 2;
				if (0 === i) return this._map.layerPointToLatLng(a[0]);
				for (t = 0, n = 0; t < h - 1; t++)
					if (o = a[t], s = a[t + 1], e = o.distanceTo(s), (n += e) > i) return r = (n - i) / e, this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)])
			},
			getBounds: function () {
				return this._bounds
			},
			addLatLng: function (t, i) {
				return i = i || this._defaultShape(), t = M(t), i.push(t), this._bounds.extend(t), this.redraw()
			},
			_setLatLngs: function (t) {
				this._bounds = new b, this._latlngs = this._convertLatLngs(t)
			},
			_defaultShape: function () {
				return St(this._latlngs) ? this._latlngs : this._latlngs[0]
			},
			_convertLatLngs: function (t) {
				for (var i = [], e = St(t), n = 0, o = t.length; n < o; n++) e ? (i[n] = M(t[n]), this._bounds.extend(i[n])) : i[n] = this._convertLatLngs(t[n]);
				return i
			},
			_project: function () {
				var t = new w;
				this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t);
				var i = this._clickTolerance(),
					e = new y(i, i);
				this._bounds.isValid() && t.isValid() && (t.min._subtract(e), t.max._add(e), this._pxBounds = t)
			},
			_projectLatlngs: function (t, i, e) {
				var n, o, s = t[0] instanceof z,
					r = t.length;
				if (s) {
					for (o = [], n = 0; n < r; n++) o[n] = this._map.latLngToLayerPoint(t[n]), e.extend(o[n]);
					i.push(o)
				} else
					for (n = 0; n < r; n++) this._projectLatlngs(t[n], i, e)
			},
			_clipPoints: function () {
				var t = this._renderer._bounds;
				if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
					if (this.options.noClip) this._parts = this._rings;
					else {
						var i, e, n, o, s, r, a, h = this._parts;
						for (i = 0, n = 0, o = this._rings.length; i < o; i++)
							for (e = 0, s = (a = this._rings[i]).length; e < s - 1; e++)(r = Tt(a[e], a[e + 1], t, e, !0)) && (h[n] = h[n] || [], h[n].push(r[0]), r[1] === a[e + 1] && e !== s - 2 || (h[n].push(r[1]), n++))
					}
			},
			_simplifyPoints: function () {
				for (var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; e < n; e++) t[e] = Pt(t[e], i)
			},
			_update: function () {
				this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
			},
			_updatePath: function () {
				this._renderer._updatePoly(this)
			},
			_containsPoint: function (t, i) {
				var e, n, o, s, r, a, h = this._clickTolerance();
				if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
				for (e = 0, s = this._parts.length; e < s; e++)
					for (n = 0, o = (r = (a = this._parts[e]).length) - 1; n < r; o = n++)
						if ((i || 0 !== n) && bt(t, a[o], a[n]) <= h) return !0;
				return !1
			}
		});
	Ke._flat = Zt;
	var Ye = Ke.extend({
			options: {
				fill: !0
			},
			isEmpty: function () {
				return !this._latlngs.length || !this._latlngs[0].length
			},
			getCenter: function () {
				if (!this._map) throw new Error("Must add layer to map before using getCenter()");
				var t, i, e, n, o, s, r, a, h, u = this._rings[0],
					l = u.length;
				if (!l) return null;
				for (s = r = a = 0, t = 0, i = l - 1; t < l; i = t++) e = u[t], n = u[i], o = e.y * n.x - n.y * e.x, r += (e.x + n.x) * o, a += (e.y + n.y) * o, s += 3 * o;
				return h = 0 === s ? u[0] : [r / s, a / s], this._map.layerPointToLatLng(h)
			},
			_convertLatLngs: function (t) {
				var i = Ke.prototype._convertLatLngs.call(this, t),
					e = i.length;
				return e >= 2 && i[0] instanceof z && i[0].equals(i[e - 1]) && i.pop(), i
			},
			_setLatLngs: function (t) {
				Ke.prototype._setLatLngs.call(this, t), St(this._latlngs) && (this._latlngs = [this._latlngs])
			},
			_defaultShape: function () {
				return St(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
			},
			_clipPoints: function () {
				var t = this._renderer._bounds,
					i = this.options.weight,
					e = new y(i, i);
				if (t = new w(t.min.subtract(e), t.max.add(e)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
					if (this.options.noClip) this._parts = this._rings;
					else
						for (var n, o = 0, s = this._rings.length; o < s; o++)(n = Et(this._rings[o], t, !0)).length && this._parts.push(n)
			},
			_updatePath: function () {
				this._renderer._updatePoly(this, !0)
			},
			_containsPoint: function (t) {
				var i, e, n, o, s, r, a, h, u = !1;
				if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
				for (o = 0, a = this._parts.length; o < a; o++)
					for (s = 0, r = (h = (i = this._parts[o]).length) - 1; s < h; r = s++) e = i[s], n = i[r], e.y > t.y != n.y > t.y && t.x < (n.x - e.x) * (t.y - e.y) / (n.y - e.y) + e.x && (u = !u);
				return u || Ke.prototype._containsPoint.call(this, t, !0)
			}
		}),
		Xe = je.extend({
			initialize: function (t, i) {
				l(this, i), this._layers = {}, t && this.addData(t)
			},
			addData: function (t) {
				var i, e, n, o = Gt(t) ? t : t.features;
				if (o) {
					for (i = 0, e = o.length; i < e; i++)((n = o[i]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
					return this
				}
				var s = this.options;
				if (s.filter && !s.filter(t)) return this;
				var r = kt(t, s);
				return r ? (r.feature = Dt(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this
			},
			resetStyle: function (t) {
				return t.options = i({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this
			},
			setStyle: function (t) {
				return this.eachLayer(function (i) {
					this._setLayerStyle(i, t)
				}, this)
			},
			_setLayerStyle: function (t, i) {
				"function" == typeof i && (i = i(t.feature)), t.setStyle && t.setStyle(i)
			}
		}),
		Je = {
			toGeoJSON: function (t) {
				return Rt(this, {
					type: "Point",
					coordinates: It(this.getLatLng(), t)
				})
			}
		};
	qe.include(Je), Ge.include(Je), Ve.include(Je), Ke.include({
		toGeoJSON: function (t) {
			var i = !St(this._latlngs),
				e = Ot(this._latlngs, i ? 1 : 0, !1, t);
			return Rt(this, {
				type: (i ? "Multi" : "") + "LineString",
				coordinates: e
			})
		}
	}), Ye.include({
		toGeoJSON: function (t) {
			var i = !St(this._latlngs),
				e = i && !St(this._latlngs[0]),
				n = Ot(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
			return i || (n = [n]), Rt(this, {
				type: (e ? "Multi" : "") + "Polygon",
				coordinates: n
			})
		}
	}), Ne.include({
		toMultiPoint: function (t) {
			var i = [];
			return this.eachLayer(function (e) {
				i.push(e.toGeoJSON(t).geometry.coordinates)
			}), Rt(this, {
				type: "MultiPoint",
				coordinates: i
			})
		},
		toGeoJSON: function (t) {
			var i = this.feature && this.feature.geometry && this.feature.geometry.type;
			if ("MultiPoint" === i) return this.toMultiPoint(t);
			var e = "GeometryCollection" === i,
				n = [];
			return this.eachLayer(function (i) {
				if (i.toGeoJSON) {
					var o = i.toGeoJSON(t);
					if (e) n.push(o.geometry);
					else {
						var s = Dt(o);
						"FeatureCollection" === s.type ? n.push.apply(n, s.features) : n.push(s)
					}
				}
			}), e ? Rt(this, {
				geometries: n,
				type: "GeometryCollection"
			}) : {
				type: "FeatureCollection",
				features: n
			}
		}
	});
	var $e = Nt,
		Qe = De.extend({
			options: {
				opacity: 1,
				alt: "",
				interactive: !1,
				crossOrigin: !1,
				errorOverlayUrl: "",
				zIndex: 1,
				className: ""
			},
			initialize: function (t, i, e) {
				this._url = t, this._bounds = T(i), l(this, e)
			},
			onAdd: function () {
				this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (K(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
			},
			onRemove: function () {
				F(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
			},
			setOpacity: function (t) {
				return this.options.opacity = t, this._image && this._updateOpacity(), this
			},
			setStyle: function (t) {
				return t.opacity && this.setOpacity(t.opacity), this
			},
			bringToFront: function () {
				return this._map && U(this._image), this
			},
			bringToBack: function () {
				return this._map && V(this._image), this
			},
			setUrl: function (t) {
				return this._url = t, this._image && (this._image.src = t), this
			},
			setBounds: function (t) {
				return this._bounds = T(t), this._map && this._reset(), this
			},
			getEvents: function () {
				var t = {
					zoom: this._reset,
					viewreset: this._reset
				};
				return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
			},
			setZIndex: function (t) {
				return this.options.zIndex = t, this._updateZIndex(), this
			},
			getBounds: function () {
				return this._bounds
			},
			getElement: function () {
				return this._image
			},
			_initImage: function () {
				var t = "IMG" === this._url.tagName,
					i = this._image = t ? this._url : H("img");
				K(i, "leaflet-image-layer"), this._zoomAnimated && K(i, "leaflet-zoom-animated"), this.options.className && K(i, this.options.className), i.onselectstart = r, i.onmousemove = r, i.onload = e(this.fire, this, "load"), i.onerror = e(this._overlayOnError, this, "error"), (this.options.crossOrigin || "" === this.options.crossOrigin) && (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t ? this._url = i.src : (i.src = this._url, i.alt = this.options.alt)
			},
			_animateZoom: function (t) {
				var i = this._map.getZoomScale(t.zoom),
					e = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
				tt(this._image, e, i)
			},
			_reset: function () {
				var t = this._image,
					i = new w(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
					e = i.getSize();
				it(t, i.min), t.style.width = e.x + "px", t.style.height = e.y + "px"
			},
			_updateOpacity: function () {
				$(this._image, this.options.opacity)
			},
			_updateZIndex: function () {
				this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
			},
			_overlayOnError: function () {
				this.fire("error");
				var t = this.options.errorOverlayUrl;
				t && this._url !== t && (this._url = t, this._image.src = t)
			}
		}),
		tn = Qe.extend({
			options: {
				autoplay: !0,
				loop: !0
			},
			_initImage: function () {
				var t = "VIDEO" === this._url.tagName,
					i = this._image = t ? this._url : H("video");
				if (K(i, "leaflet-image-layer"), this._zoomAnimated && K(i, "leaflet-zoom-animated"), i.onselectstart = r, i.onmousemove = r, i.onloadeddata = e(this.fire, this, "load"), t) {
					for (var n = i.getElementsByTagName("source"), o = [], s = 0; s < n.length; s++) o.push(n[s].src);
					this._url = n.length > 0 ? o : [i.src]
				} else {
					Gt(this._url) || (this._url = [this._url]), i.autoplay = !!this.options.autoplay, i.loop = !!this.options.loop;
					for (var a = 0; a < this._url.length; a++) {
						var h = H("source");
						h.src = this._url[a], i.appendChild(h)
					}
				}
			}
		}),
		en = De.extend({
			options: {
				offset: [0, 7],
				className: "",
				pane: "popupPane"
			},
			initialize: function (t, i) {
				l(this, t), this._source = i
			},
			onAdd: function (t) {
				this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && $(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && $(this._container, 1), this.bringToFront()
			},
			onRemove: function (t) {
				t._fadeAnimated ? ($(this._container, 0), this._removeTimeout = setTimeout(e(F, void 0, this._container), 200)) : F(this._container)
			},
			getLatLng: function () {
				return this._latlng
			},
			setLatLng: function (t) {
				return this._latlng = M(t), this._map && (this._updatePosition(), this._adjustPan()), this
			},
			getContent: function () {
				return this._content
			},
			setContent: function (t) {
				return this._content = t, this.update(), this
			},
			getElement: function () {
				return this._container
			},
			update: function () {
				this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
			},
			getEvents: function () {
				var t = {
					zoom: this._updatePosition,
					viewreset: this._updatePosition
				};
				return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
			},
			isOpen: function () {
				return !!this._map && this._map.hasLayer(this)
			},
			bringToFront: function () {
				return this._map && U(this._container), this
			},
			bringToBack: function () {
				return this._map && V(this._container), this
			},
			_updateContent: function () {
				if (this._content) {
					var t = this._contentNode,
						i = "function" == typeof this._content ? this._content(this._source || this) : this._content;
					if ("string" == typeof i) t.innerHTML = i;
					else {
						for (; t.hasChildNodes();) t.removeChild(t.firstChild);
						t.appendChild(i)
					}
					this.fire("contentupdate")
				}
			},
			_updatePosition: function () {
				if (this._map) {
					var t = this._map.latLngToLayerPoint(this._latlng),
						i = x(this.options.offset),
						e = this._getAnchor();
					this._zoomAnimated ? it(this._container, t.add(e)) : i = i.add(t).add(e);
					var n = this._containerBottom = -i.y,
						o = this._containerLeft = -Math.round(this._containerWidth / 2) + i.x;
					this._container.style.bottom = n + "px", this._container.style.left = o + "px"
				}
			},
			_getAnchor: function () {
				return [0, 0]
			}
		}),
		nn = en.extend({
			options: {
				maxWidth: 300,
				minWidth: 50,
				maxHeight: null,
				autoPan: !0,
				autoPanPaddingTopLeft: null,
				autoPanPaddingBottomRight: null,
				autoPanPadding: [5, 5],
				keepInView: !1,
				closeButton: !0,
				autoClose: !0,
				closeOnEscapeKey: !0,
				className: ""
			},
			openOn: function (t) {
				return t.openPopup(this), this
			},
			onAdd: function (t) {
				en.prototype.onAdd.call(this, t), t.fire("popupopen", {
					popup: this
				}), this._source && (this._source.fire("popupopen", {
					popup: this
				}, !0), this._source instanceof Ue || this._source.on("preclick", dt))
			},
			onRemove: function (t) {
				en.prototype.onRemove.call(this, t), t.fire("popupclose", {
					popup: this
				}), this._source && (this._source.fire("popupclose", {
					popup: this
				}, !0), this._source instanceof Ue || this._source.off("preclick", dt))
			},
			getEvents: function () {
				var t = en.prototype.getEvents.call(this);
				return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
			},
			_close: function () {
				this._map && this._map.closePopup(this)
			},
			_initLayout: function () {
				var t = "leaflet-popup",
					i = this._container = H("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
					e = this._wrapper = H("div", t + "-content-wrapper", i);
				if (this._contentNode = H("div", t + "-content", e), mt(e), pt(this._contentNode), ut(e, "contextmenu", dt), this._tipContainer = H("div", t + "-tip-container", i), this._tip = H("div", t + "-tip", this._tipContainer), this.options.closeButton) {
					var n = this._closeButton = H("a", t + "-close-button", i);
					n.href = "#close", n.innerHTML = "&#215;", ut(n, "click", this._onCloseButtonClick, this)
				}
			},
			_updateLayout: function () {
				var t = this._contentNode,
					i = t.style;
				i.width = "", i.whiteSpace = "nowrap";
				var e = t.offsetWidth;
				e = Math.min(e, this.options.maxWidth), e = Math.max(e, this.options.minWidth), i.width = e + 1 + "px", i.whiteSpace = "", i.height = "";
				var n = t.offsetHeight,
					o = this.options.maxHeight;
				o && n > o ? (i.height = o + "px", K(t, "leaflet-popup-scrolled")) : Y(t, "leaflet-popup-scrolled"), this._containerWidth = this._container.offsetWidth
			},
			_animateZoom: function (t) {
				var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
					e = this._getAnchor();
				it(this._container, i.add(e))
			},
			_adjustPan: function () {
				if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
					var t = this._map,
						i = parseInt(W(this._container, "marginBottom"), 10) || 0,
						e = this._container.offsetHeight + i,
						n = this._containerWidth,
						o = new y(this._containerLeft, -e - this._containerBottom);
					o._add(et(this._container));
					var s = t.layerPointToContainerPoint(o),
						r = x(this.options.autoPanPadding),
						a = x(this.options.autoPanPaddingTopLeft || r),
						h = x(this.options.autoPanPaddingBottomRight || r),
						u = t.getSize(),
						l = 0,
						c = 0;
					s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x), s.x - l - a.x < 0 && (l = s.x - a.x), s.y + e + h.y > u.y && (c = s.y + e - u.y + h.y), s.y - c - a.y < 0 && (c = s.y - a.y), (l || c) && t.fire("autopanstart").panBy([l, c])
				}
			},
			_onCloseButtonClick: function (t) {
				this._close(), gt(t)
			},
			_getAnchor: function () {
				return x(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
			}
		});
	me.mergeOptions({
		closePopupOnClick: !0
	}), me.include({
		openPopup: function (t, i, e) {
			return t instanceof nn || (t = new nn(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
		},
		closePopup: function (t) {
			return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
		}
	}), De.include({
		bindPopup: function (t, i) {
			return t instanceof nn ? (l(t, i), this._popup = t, t._source = this) : (this._popup && !i || (this._popup = new nn(i, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
				click: this._openPopup,
				keypress: this._onKeyPress,
				remove: this.closePopup,
				move: this._movePopup
			}), this._popupHandlersAdded = !0), this
		},
		unbindPopup: function () {
			return this._popup && (this.off({
				click: this._openPopup,
				keypress: this._onKeyPress,
				remove: this.closePopup,
				move: this._movePopup
			}), this._popupHandlersAdded = !1, this._popup = null), this
		},
		openPopup: function (t, i) {
			if (t instanceof De || (i = t, t = this), t instanceof je)
				for (var e in this._layers) {
					t = this._layers[e];
					break
				}
			return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, i)), this
		},
		closePopup: function () {
			return this._popup && this._popup._close(), this
		},
		togglePopup: function (t) {
			return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
		},
		isPopupOpen: function () {
			return !!this._popup && this._popup.isOpen()
		},
		setPopupContent: function (t) {
			return this._popup && this._popup.setContent(t), this
		},
		getPopup: function () {
			return this._popup
		},
		_openPopup: function (t) {
			var i = t.layer || t.target;
			this._popup && this._map && (gt(t), i instanceof Ue ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === i ? this.closePopup() : this.openPopup(i, t.latlng))
		},
		_movePopup: function (t) {
			this._popup.setLatLng(t.latlng)
		},
		_onKeyPress: function (t) {
			13 === t.originalEvent.keyCode && this._openPopup(t)
		}
	});
	var on = en.extend({
		options: {
			pane: "tooltipPane",
			offset: [0, 0],
			direction: "auto",
			permanent: !1,
			sticky: !1,
			interactive: !1,
			opacity: .9
		},
		onAdd: function (t) {
			en.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
				tooltip: this
			}), this._source && this._source.fire("tooltipopen", {
				tooltip: this
			}, !0)
		},
		onRemove: function (t) {
			en.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
				tooltip: this
			}), this._source && this._source.fire("tooltipclose", {
				tooltip: this
			}, !0)
		},
		getEvents: function () {
			var t = en.prototype.getEvents.call(this);
			return Ri && !this.options.permanent && (t.preclick = this._close), t
		},
		_close: function () {
			this._map && this._map.closeTooltip(this)
		},
		_initLayout: function () {
			var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
			this._contentNode = this._container = H("div", t)
		},
		_updateLayout: function () {},
		_adjustPan: function () {},
		_setPosition: function (t) {
			var i = this._map,
				e = this._container,
				n = i.latLngToContainerPoint(i.getCenter()),
				o = i.layerPointToContainerPoint(t),
				s = this.options.direction,
				r = e.offsetWidth,
				a = e.offsetHeight,
				h = x(this.options.offset),
				u = this._getAnchor();
			"top" === s ? t = t.add(x(-r / 2 + h.x, -a + h.y + u.y, !0)) : "bottom" === s ? t = t.subtract(x(r / 2 - h.x, -h.y, !0)) : "center" === s ? t = t.subtract(x(r / 2 + h.x, a / 2 - u.y + h.y, !0)) : "right" === s || "auto" === s && o.x < n.x ? (s = "right", t = t.add(x(h.x + u.x, u.y - a / 2 + h.y, !0))) : (s = "left", t = t.subtract(x(r + u.x - h.x, a / 2 - u.y - h.y, !0))), Y(e, "leaflet-tooltip-right"), Y(e, "leaflet-tooltip-left"), Y(e, "leaflet-tooltip-top"), Y(e, "leaflet-tooltip-bottom"), K(e, "leaflet-tooltip-" + s), it(e, t)
		},
		_updatePosition: function () {
			var t = this._map.latLngToLayerPoint(this._latlng);
			this._setPosition(t)
		},
		setOpacity: function (t) {
			this.options.opacity = t, this._container && $(this._container, t)
		},
		_animateZoom: function (t) {
			var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
			this._setPosition(i)
		},
		_getAnchor: function () {
			return x(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
		}
	});
	me.include({
		openTooltip: function (t, i, e) {
			return t instanceof on || (t = new on(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : this.addLayer(t)
		},
		closeTooltip: function (t) {
			return t && this.removeLayer(t), this
		}
	}), De.include({
		bindTooltip: function (t, i) {
			return t instanceof on ? (l(t, i), this._tooltip = t, t._source = this) : (this._tooltip && !i || (this._tooltip = new on(i, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
		},
		unbindTooltip: function () {
			return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
		},
		_initTooltipInteractions: function (t) {
			if (t || !this._tooltipHandlersAdded) {
				var i = t ? "off" : "on",
					e = {
						remove: this.closeTooltip,
						move: this._moveTooltip
					};
				this._tooltip.options.permanent ? e.add = this._openTooltip : (e.mouseover = this._openTooltip, e.mouseout = this.closeTooltip, this._tooltip.options.sticky && (e.mousemove = this._moveTooltip), Ri && (e.click = this._openTooltip)), this[i](e), this._tooltipHandlersAdded = !t
			}
		},
		openTooltip: function (t, i) {
			if (t instanceof De || (i = t, t = this), t instanceof je)
				for (var e in this._layers) {
					t = this._layers[e];
					break
				}
			return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, i), this._tooltip.options.interactive && this._tooltip._container && (K(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
		},
		closeTooltip: function () {
			return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (Y(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
		},
		toggleTooltip: function (t) {
			return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
		},
		isTooltipOpen: function () {
			return this._tooltip.isOpen()
		},
		setTooltipContent: function (t) {
			return this._tooltip && this._tooltip.setContent(t), this
		},
		getTooltip: function () {
			return this._tooltip
		},
		_openTooltip: function (t) {
			var i = t.layer || t.target;
			this._tooltip && this._map && this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0)
		},
		_moveTooltip: function (t) {
			var i, e, n = t.latlng;
			this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), e = this._map.containerPointToLayerPoint(i), n = this._map.layerPointToLatLng(e)), this._tooltip.setLatLng(n)
		}
	});
	var sn = We.extend({
		options: {
			iconSize: [12, 12],
			html: !1,
			bgPos: null,
			className: "leaflet-div-icon"
		},
		createIcon: function (t) {
			var i = t && "DIV" === t.tagName ? t : document.createElement("div"),
				e = this.options;
			if (i.innerHTML = !1 !== e.html ? e.html : "", e.bgPos) {
				var n = x(e.bgPos);
				i.style.backgroundPosition = -n.x + "px " + -n.y + "px"
			}
			return this._setIconStyles(i, "icon"), i
		},
		createShadow: function () {
			return null
		}
	});
	We.Default = He;
	var rn = De.extend({
			options: {
				tileSize: 256,
				opacity: 1,
				updateWhenIdle: ki,
				updateWhenZooming: !0,
				updateInterval: 200,
				zIndex: 1,
				bounds: null,
				minZoom: 0,
				maxZoom: void 0,
				maxNativeZoom: void 0,
				minNativeZoom: void 0,
				noWrap: !1,
				pane: "tilePane",
				className: "",
				keepBuffer: 2
			},
			initialize: function (t) {
				l(this, t)
			},
			onAdd: function () {
				this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
			},
			beforeAdd: function (t) {
				t._addZoomLimit(this)
			},
			onRemove: function (t) {
				this._removeAllTiles(), F(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0
			},
			bringToFront: function () {
				return this._map && (U(this._container), this._setAutoZIndex(Math.max)), this
			},
			bringToBack: function () {
				return this._map && (V(this._container), this._setAutoZIndex(Math.min)), this
			},
			getContainer: function () {
				return this._container
			},
			setOpacity: function (t) {
				return this.options.opacity = t, this._updateOpacity(), this
			},
			setZIndex: function (t) {
				return this.options.zIndex = t, this._updateZIndex(), this
			},
			isLoading: function () {
				return this._loading
			},
			redraw: function () {
				return this._map && (this._removeAllTiles(), this._update()), this
			},
			getEvents: function () {
				var t = {
					viewprereset: this._invalidateAll,
					viewreset: this._resetView,
					zoom: this._resetView,
					moveend: this._onMoveEnd
				};
				return this.options.updateWhenIdle || (this._onMove || (this._onMove = o(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
			},
			createTile: function () {
				return document.createElement("div")
			},
			getTileSize: function () {
				var t = this.options.tileSize;
				return t instanceof y ? t : new y(t, t)
			},
			_updateZIndex: function () {
				this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
			},
			_setAutoZIndex: function (t) {
				for (var i, e = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = e.length; o < s; o++) i = e[o].style.zIndex, e[o] !== this._container && i && (n = t(n, +i));
				isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex())
			},
			_updateOpacity: function () {
				if (this._map && !pi) {
					$(this._container, this.options.opacity);
					var t = +new Date,
						i = !1,
						e = !1;
					for (var n in this._tiles) {
						var o = this._tiles[n];
						if (o.current && o.loaded) {
							var s = Math.min(1, (t - o.loaded) / 200);
							$(o.el, s), s < 1 ? i = !0 : (o.active ? e = !0 : this._onOpaqueTile(o), o.active = !0)
						}
					}
					e && !this._noPrune && this._pruneTiles(), i && (g(this._fadeFrame), this._fadeFrame = f(this._updateOpacity, this))
				}
			},
			_onOpaqueTile: r,
			_initContainer: function () {
				this._container || (this._container = H("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
			},
			_updateLevels: function () {
				var t = this._tileZoom,
					i = this.options.maxZoom;
				if (void 0 !== t) {
					for (var e in this._levels) this._levels[e].el.children.length || e === t ? (this._levels[e].el.style.zIndex = i - Math.abs(t - e), this._onUpdateLevel(e)) : (F(this._levels[e].el), this._removeTilesAtZoom(e), this._onRemoveLevel(e), delete this._levels[e]);
					var n = this._levels[t],
						o = this._map;
					return n || ((n = this._levels[t] = {}).el = H("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = i, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), n.el.offsetWidth, this._onCreateLevel(n)), this._level = n, n
				}
			},
			_onUpdateLevel: r,
			_onRemoveLevel: r,
			_onCreateLevel: r,
			_pruneTiles: function () {
				if (this._map) {
					var t, i, e = this._map.getZoom();
					if (e > this.options.maxZoom || e < this.options.minZoom) this._removeAllTiles();
					else {
						for (t in this._tiles)(i = this._tiles[t]).retain = i.current;
						for (t in this._tiles)
							if ((i = this._tiles[t]).current && !i.active) {
								var n = i.coords;
								this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
							} for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
					}
				}
			},
			_removeTilesAtZoom: function (t) {
				for (var i in this._tiles) this._tiles[i].coords.z === t && this._removeTile(i)
			},
			_removeAllTiles: function () {
				for (var t in this._tiles) this._removeTile(t)
			},
			_invalidateAll: function () {
				for (var t in this._levels) F(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
				this._removeAllTiles(), this._tileZoom = void 0
			},
			_retainParent: function (t, i, e, n) {
				var o = Math.floor(t / 2),
					s = Math.floor(i / 2),
					r = e - 1,
					a = new y(+o, +s);
				a.z = +r;
				var h = this._tileCoordsToKey(a),
					u = this._tiles[h];
				return u && u.active ? (u.retain = !0, !0) : (u && u.loaded && (u.retain = !0), r > n && this._retainParent(o, s, r, n))
			},
			_retainChildren: function (t, i, e, n) {
				for (var o = 2 * t; o < 2 * t + 2; o++)
					for (var s = 2 * i; s < 2 * i + 2; s++) {
						var r = new y(o, s);
						r.z = e + 1;
						var a = this._tileCoordsToKey(r),
							h = this._tiles[a];
						h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), e + 1 < n && this._retainChildren(o, s, e + 1, n))
					}
			},
			_resetView: function (t) {
				var i = t && (t.pinch || t.flyTo);
				this._setView(this._map.getCenter(), this._map.getZoom(), i, i)
			},
			_animateZoom: function (t) {
				this._setView(t.center, t.zoom, !0, t.noUpdate)
			},
			_clampZoom: function (t) {
				var i = this.options;
				return void 0 !== i.minNativeZoom && t < i.minNativeZoom ? i.minNativeZoom : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t ? i.maxNativeZoom : t
			},
			_setView: function (t, i, e, n) {
				var o = this._clampZoom(Math.round(i));
				(void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0);
				var s = this.options.updateWhenZooming && o !== this._tileZoom;
				n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), e || this._pruneTiles(), this._noPrune = !!e), this._setZoomTransforms(t, i)
			},
			_setZoomTransforms: function (t, i) {
				for (var e in this._levels) this._setZoomTransform(this._levels[e], t, i)
			},
			_setZoomTransform: function (t, i, e) {
				var n = this._map.getZoomScale(e, t.zoom),
					o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();
				Ei ? tt(t.el, o, n) : it(t.el, o)
			},
			_resetGrid: function () {
				var t = this._map,
					i = t.options.crs,
					e = this._tileSize = this.getTileSize(),
					n = this._tileZoom,
					o = this._map.getPixelWorldBounds(this._tileZoom);
				o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = i.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x), Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)], this._wrapY = i.wrapLat && !this.options.noWrap && [Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x), Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)]
			},
			_onMoveEnd: function () {
				this._map && !this._map._animatingZoom && this._update()
			},
			_getTiledPixelBounds: function (t) {
				var i = this._map,
					e = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(),
					n = i.getZoomScale(e, this._tileZoom),
					o = i.project(t, this._tileZoom).floor(),
					s = i.getSize().divideBy(2 * n);
				return new w(o.subtract(s), o.add(s))
			},
			_update: function (t) {
				var i = this._map;
				if (i) {
					var e = this._clampZoom(i.getZoom());
					if (void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom) {
						var n = this._getTiledPixelBounds(t),
							o = this._pxBoundsToTileRange(n),
							s = o.getCenter(),
							r = [],
							a = this.options.keepBuffer,
							h = new w(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));
						if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
						for (var u in this._tiles) {
							var l = this._tiles[u].coords;
							l.z === this._tileZoom && h.contains(new y(l.x, l.y)) || (this._tiles[u].current = !1)
						}
						if (Math.abs(e - this._tileZoom) > 1) this._setView(t, e);
						else {
							for (var c = o.min.y; c <= o.max.y; c++)
								for (var _ = o.min.x; _ <= o.max.x; _++) {
									var d = new y(_, c);
									if (d.z = this._tileZoom, this._isValidTile(d)) {
										var p = this._tiles[this._tileCoordsToKey(d)];
										p ? p.current = !0 : r.push(d)
									}
								}
							if (r.sort(function (t, i) {
									return t.distanceTo(s) - i.distanceTo(s)
								}), 0 !== r.length) {
								this._loading || (this._loading = !0, this.fire("loading"));
								var m = document.createDocumentFragment();
								for (_ = 0; _ < r.length; _++) this._addTile(r[_], m);
								this._level.el.appendChild(m)
							}
						}
					}
				}
			},
			_isValidTile: function (t) {
				var i = this._map.options.crs;
				if (!i.infinite) {
					var e = this._globalTileRange;
					if (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x) || !i.wrapLat && (t.y < e.min.y || t.y > e.max.y)) return !1
				}
				if (!this.options.bounds) return !0;
				var n = this._tileCoordsToBounds(t);
				return T(this.options.bounds).overlaps(n)
			},
			_keyToBounds: function (t) {
				return this._tileCoordsToBounds(this._keyToTileCoords(t))
			},
			_tileCoordsToNwSe: function (t) {
				var i = this._map,
					e = this.getTileSize(),
					n = t.scaleBy(e),
					o = n.add(e);
				return [i.unproject(n, t.z), i.unproject(o, t.z)]
			},
			_tileCoordsToBounds: function (t) {
				var i = this._tileCoordsToNwSe(t),
					e = new b(i[0], i[1]);
				return this.options.noWrap || (e = this._map.wrapLatLngBounds(e)), e
			},
			_tileCoordsToKey: function (t) {
				return t.x + ":" + t.y + ":" + t.z
			},
			_keyToTileCoords: function (t) {
				var i = t.split(":"),
					e = new y(+i[0], +i[1]);
				return e.z = +i[2], e
			},
			_removeTile: function (t) {
				var i = this._tiles[t];
				i && (F(i.el), delete this._tiles[t], this.fire("tileunload", {
					tile: i.el,
					coords: this._keyToTileCoords(t)
				}))
			},
			_initTile: function (t) {
				K(t, "leaflet-tile");
				var i = this.getTileSize();
				t.style.width = i.x + "px", t.style.height = i.y + "px", t.onselectstart = r, t.onmousemove = r, pi && this.options.opacity < 1 && $(t, this.options.opacity), gi && !vi && (t.style.WebkitBackfaceVisibility = "hidden")
			},
			_addTile: function (t, i) {
				var n = this._getTilePos(t),
					o = this._tileCoordsToKey(t),
					s = this.createTile(this._wrapCoords(t), e(this._tileReady, this, t));
				this._initTile(s), this.createTile.length < 2 && f(e(this._tileReady, this, t, null, s)), it(s, n), this._tiles[o] = {
					el: s,
					coords: t,
					current: !0
				}, i.appendChild(s), this.fire("tileloadstart", {
					tile: s,
					coords: t
				})
			},
			_tileReady: function (t, i, n) {
				i && this.fire("tileerror", {
					error: i,
					tile: n,
					coords: t
				});
				var o = this._tileCoordsToKey(t);
				(n = this._tiles[o]) && (n.loaded = +new Date, this._map._fadeAnimated ? ($(n.el, 0), g(this._fadeFrame), this._fadeFrame = f(this._updateOpacity, this)) : (n.active = !0, this._pruneTiles()), i || (K(n.el, "leaflet-tile-loaded"), this.fire("tileload", {
					tile: n.el,
					coords: t
				})), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), pi || !this._map._fadeAnimated ? f(this._pruneTiles, this) : setTimeout(e(this._pruneTiles, this), 250)))
			},
			_getTilePos: function (t) {
				return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
			},
			_wrapCoords: function (t) {
				var i = new y(this._wrapX ? s(t.x, this._wrapX) : t.x, this._wrapY ? s(t.y, this._wrapY) : t.y);
				return i.z = t.z, i
			},
			_pxBoundsToTileRange: function (t) {
				var i = this.getTileSize();
				return new w(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1]))
			},
			_noTilesToLoad: function () {
				for (var t in this._tiles)
					if (!this._tiles[t].loaded) return !1;
				return !0
			}
		}),
		an = rn.extend({
			options: {
				minZoom: 0,
				maxZoom: 18,
				subdomains: "abc",
				errorTileUrl: "",
				zoomOffset: 0,
				tms: !1,
				zoomReverse: !1,
				detectRetina: !1,
				crossOrigin: !1
			},
			initialize: function (t, i) {
				this._url = t, (i = l(this, i)).detectRetina && ji && i.maxZoom > 0 && (i.tileSize = Math.floor(i.tileSize / 2), i.zoomReverse ? (i.zoomOffset--, i.minZoom++) : (i.zoomOffset++, i.maxZoom--), i.minZoom = Math.max(0, i.minZoom)), "string" == typeof i.subdomains && (i.subdomains = i.subdomains.split("")), gi || this.on("tileunload", this._onTileRemove)
			},
			setUrl: function (t, i) {
				return this._url = t, i || this.redraw(), this
			},
			createTile: function (t, i) {
				var n = document.createElement("img");
				return ut(n, "load", e(this._tileOnLoad, this, i, n)), ut(n, "error", e(this._tileOnError, this, i, n)), (this.options.crossOrigin || "" === this.options.crossOrigin) && (n.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), n.alt = "", n.setAttribute("role", "presentation"), n.src = this.getTileUrl(t), n
			},
			getTileUrl: function (t) {
				var e = {
					r: ji ? "@2x" : "",
					s: this._getSubdomain(t),
					x: t.x,
					y: t.y,
					z: this._getZoomForUrl()
				};
				if (this._map && !this._map.options.crs.infinite) {
					var n = this._globalTileRange.max.y - t.y;
					this.options.tms && (e.y = n), e["-y"] = n
				}
				return _(this._url, i(e, this.options))
			},
			_tileOnLoad: function (t, i) {
				pi ? setTimeout(e(t, this, null, i), 0) : t(null, i)
			},
			_tileOnError: function (t, i, e) {
				var n = this.options.errorTileUrl;
				n && i.getAttribute("src") !== n && (i.src = n), t(e, i)
			},
			_onTileRemove: function (t) {
				t.tile.onload = null
			},
			_getZoomForUrl: function () {
				var t = this._tileZoom,
					i = this.options.maxZoom,
					e = this.options.zoomReverse,
					n = this.options.zoomOffset;
				return e && (t = i - t), t + n
			},
			_getSubdomain: function (t) {
				var i = Math.abs(t.x + t.y) % this.options.subdomains.length;
				return this.options.subdomains[i]
			},
			_abortLoading: function () {
				var t, i;
				for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = r, i.onerror = r, i.complete || (i.src = Kt, F(i), delete this._tiles[t]))
			},
			_removeTile: function (t) {
				var i = this._tiles[t];
				if (i) return xi || i.el.setAttribute("src", Kt), rn.prototype._removeTile.call(this, t)
			},
			_tileReady: function (t, i, e) {
				if (this._map && (!e || e.getAttribute("src") !== Kt)) return rn.prototype._tileReady.call(this, t, i, e)
			}
		}),
		hn = an.extend({
			defaultWmsParams: {
				service: "WMS",
				request: "GetMap",
				layers: "",
				styles: "",
				format: "image/jpeg",
				transparent: !1,
				version: "1.1.1"
			},
			options: {
				crs: null,
				uppercase: !1
			},
			initialize: function (t, e) {
				this._url = t;
				var n = i({}, this.defaultWmsParams);
				for (var o in e) o in this.options || (n[o] = e[o]);
				var s = (e = l(this, e)).detectRetina && ji ? 2 : 1,
					r = this.getTileSize();
				n.width = r.x * s, n.height = r.y * s, this.wmsParams = n
			},
			onAdd: function (t) {
				this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
				var i = this._wmsVersion >= 1.3 ? "crs" : "srs";
				this.wmsParams[i] = this._crs.code, an.prototype.onAdd.call(this, t)
			},
			getTileUrl: function (t) {
				var i = this._tileCoordsToNwSe(t),
					e = this._crs,
					n = P(e.project(i[0]), e.project(i[1])),
					o = n.min,
					s = n.max,
					r = (this._wmsVersion >= 1.3 && this._crs === Oe ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","),
					a = an.prototype.getTileUrl.call(this, t);
				return a + c(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r
			},
			setParams: function (t, e) {
				return i(this.wmsParams, t), e || this.redraw(), this
			}
		});
	an.WMS = hn, jt.wms = function (t, i) {
		return new hn(t, i)
	};
	var un = De.extend({
			options: {
				padding: .1,
				tolerance: 0
			},
			initialize: function (t) {
				l(this, t), n(this), this._layers = this._layers || {}
			},
			onAdd: function () {
				this._container || (this._initContainer(), this._zoomAnimated && K(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
			},
			onRemove: function () {
				this.off("update", this._updatePaths, this), this._destroyContainer()
			},
			getEvents: function () {
				var t = {
					viewreset: this._reset,
					zoom: this._onZoom,
					moveend: this._update,
					zoomend: this._onZoomEnd
				};
				return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
			},
			_onAnimZoom: function (t) {
				this._updateTransform(t.center, t.zoom)
			},
			_onZoom: function () {
				this._updateTransform(this._map.getCenter(), this._map.getZoom())
			},
			_updateTransform: function (t, i) {
				var e = this._map.getZoomScale(i, this._zoom),
					n = et(this._container),
					o = this._map.getSize().multiplyBy(.5 + this.options.padding),
					s = this._map.project(this._center, i),
					r = this._map.project(t, i).subtract(s),
					a = o.multiplyBy(-e).add(n).add(o).subtract(r);
				Ei ? tt(this._container, a, e) : it(this._container, a)
			},
			_reset: function () {
				this._update(), this._updateTransform(this._center, this._zoom);
				for (var t in this._layers) this._layers[t]._reset()
			},
			_onZoomEnd: function () {
				for (var t in this._layers) this._layers[t]._project()
			},
			_updatePaths: function () {
				for (var t in this._layers) this._layers[t]._update()
			},
			_update: function () {
				var t = this.options.padding,
					i = this._map.getSize(),
					e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
				this._bounds = new w(e, e.add(i.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
			}
		}),
		ln = un.extend({
			getEvents: function () {
				var t = un.prototype.getEvents.call(this);
				return t.viewprereset = this._onViewPreReset, t
			},
			_onViewPreReset: function () {
				this._postponeUpdatePaths = !0
			},
			onAdd: function () {
				un.prototype.onAdd.call(this), this._draw()
			},
			_initContainer: function () {
				var t = this._container = document.createElement("canvas");
				ut(t, "mousemove", o(this._onMouseMove, 32, this), this), ut(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), ut(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
			},
			_destroyContainer: function () {
				g(this._redrawRequest), delete this._ctx, F(this._container), lt(this._container), delete this._container
			},
			_updatePaths: function () {
				if (!this._postponeUpdatePaths) {
					this._redrawBounds = null;
					for (var t in this._layers) this._layers[t]._update();
					this._redraw()
				}
			},
			_update: function () {
				if (!this._map._animatingZoom || !this._bounds) {
					this._drawnLayers = {}, un.prototype._update.call(this);
					var t = this._bounds,
						i = this._container,
						e = t.getSize(),
						n = ji ? 2 : 1;
					it(i, t.min), i.width = n * e.x, i.height = n * e.y, i.style.width = e.x + "px", i.style.height = e.y + "px", ji && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
				}
			},
			_reset: function () {
				un.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
			},
			_initPath: function (t) {
				this._updateDashArray(t), this._layers[n(t)] = t;
				var i = t._order = {
					layer: t,
					prev: this._drawLast,
					next: null
				};
				this._drawLast && (this._drawLast.next = i), this._drawLast = i, this._drawFirst = this._drawFirst || this._drawLast
			},
			_addPath: function (t) {
				this._requestRedraw(t)
			},
			_removePath: function (t) {
				var i = t._order,
					e = i.next,
					o = i.prev;
				e ? e.prev = o : this._drawLast = o, o ? o.next = e : this._drawFirst = e, delete this._drawnLayers[t._leaflet_id], delete t._order, delete this._layers[n(t)], this._requestRedraw(t)
			},
			_updatePath: function (t) {
				this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
			},
			_updateStyle: function (t) {
				this._updateDashArray(t), this._requestRedraw(t)
			},
			_updateDashArray: function (t) {
				if ("string" == typeof t.options.dashArray) {
					var i, e = t.options.dashArray.split(/[, ]+/),
						n = [];
					for (i = 0; i < e.length; i++) n.push(Number(e[i]));
					t.options._dashArray = n
				} else t.options._dashArray = t.options.dashArray
			},
			_requestRedraw: function (t) {
				this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || f(this._redraw, this))
			},
			_extendRedrawBounds: function (t) {
				if (t._pxBounds) {
					var i = (t.options.weight || 0) + 1;
					this._redrawBounds = this._redrawBounds || new w, this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(t._pxBounds.max.add([i, i]))
				}
			},
			_redraw: function () {
				this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
			},
			_clear: function () {
				var t = this._redrawBounds;
				if (t) {
					var i = t.getSize();
					this._ctx.clearRect(t.min.x, t.min.y, i.x, i.y)
				} else this._ctx.clearRect(0, 0, this._container.width, this._container.height)
			},
			_draw: function () {
				var t, i = this._redrawBounds;
				if (this._ctx.save(), i) {
					var e = i.getSize();
					this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip()
				}
				this._drawing = !0;
				for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
				this._drawing = !1, this._ctx.restore()
			},
			_updatePoly: function (t, i) {
				if (this._drawing) {
					var e, n, o, s, r = t._parts,
						a = r.length,
						h = this._ctx;
					if (a) {
						for (this._drawnLayers[t._leaflet_id] = t, h.beginPath(), e = 0; e < a; e++) {
							for (n = 0, o = r[e].length; n < o; n++) s = r[e][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
							i && h.closePath()
						}
						this._fillStroke(h, t)
					}
				}
			},
			_updateCircle: function (t) {
				if (this._drawing && !t._empty()) {
					var i = t._point,
						e = this._ctx,
						n = Math.max(Math.round(t._radius), 1),
						o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
					this._drawnLayers[t._leaflet_id] = t, 1 !== o && (e.save(), e.scale(1, o)), e.beginPath(), e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && e.restore(), this._fillStroke(e, t)
				}
			},
			_fillStroke: function (t, i) {
				var e = i.options;
				e.fill && (t.globalAlpha = e.fillOpacity, t.fillStyle = e.fillColor || e.color, t.fill(e.fillRule || "evenodd")), e.stroke && 0 !== e.weight && (t.setLineDash && t.setLineDash(i.options && i.options._dashArray || []), t.globalAlpha = e.opacity, t.lineWidth = e.weight, t.strokeStyle = e.color, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.stroke())
			},
			_onClick: function (t) {
				for (var i, e, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)(i = o.layer).options.interactive && i._containsPoint(n) && !this._map._draggableMoved(i) && (e = i);
				e && (xt(t), this._fireEvent([e], t))
			},
			_onMouseMove: function (t) {
				if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
					var i = this._map.mouseEventToLayerPoint(t);
					this._handleMouseHover(t, i)
				}
			},
			_handleMouseOut: function (t) {
				var i = this._hoveredLayer;
				i && (Y(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseout"), this._hoveredLayer = null)
			},
			_handleMouseHover: function (t, i) {
				for (var e, n, o = this._drawFirst; o; o = o.next)(e = o.layer).options.interactive && e._containsPoint(i) && (n = e);
				n !== this._hoveredLayer && (this._handleMouseOut(t), n && (K(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
			},
			_fireEvent: function (t, i, e) {
				this._map._fireDOMEvent(i, e || i.type, t)
			},
			_bringToFront: function (t) {
				var i = t._order,
					e = i.next,
					n = i.prev;
				e && (e.prev = n, n ? n.next = e : e && (this._drawFirst = e), i.prev = this._drawLast, this._drawLast.next = i, i.next = null, this._drawLast = i, this._requestRedraw(t))
			},
			_bringToBack: function (t) {
				var i = t._order,
					e = i.next,
					n = i.prev;
				n && (n.next = e, e ? e.prev = n : n && (this._drawLast = n), i.prev = null, i.next = this._drawFirst, this._drawFirst.prev = i, this._drawFirst = i, this._requestRedraw(t))
			}
		}),
		cn = function () {
			try {
				return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
					function (t) {
						return document.createElement("<lvml:" + t + ' class="lvml">')
					}
			} catch (t) {
				return function (t) {
					return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
				}
			}
		}(),
		_n = {
			_initContainer: function () {
				this._container = H("div", "leaflet-vml-container")
			},
			_update: function () {
				this._map._animatingZoom || (un.prototype._update.call(this), this.fire("update"))
			},
			_initPath: function (t) {
				var i = t._container = cn("shape");
				K(i, "leaflet-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", t._path = cn("path"), i.appendChild(t._path), this._updateStyle(t), this._layers[n(t)] = t
			},
			_addPath: function (t) {
				var i = t._container;
				this._container.appendChild(i), t.options.interactive && t.addInteractiveTarget(i)
			},
			_removePath: function (t) {
				var i = t._container;
				F(i), t.removeInteractiveTarget(i), delete this._layers[n(t)]
			},
			_updateStyle: function (t) {
				var i = t._stroke,
					e = t._fill,
					n = t.options,
					o = t._container;
				o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (i || (i = t._stroke = cn("stroke")), o.appendChild(i), i.weight = n.weight + "px", i.color = n.color, i.opacity = n.opacity, n.dashArray ? i.dashStyle = Gt(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = n.lineCap.replace("butt", "flat"), i.joinstyle = n.lineJoin) : i && (o.removeChild(i), t._stroke = null), n.fill ? (e || (e = t._fill = cn("fill")), o.appendChild(e), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (o.removeChild(e), t._fill = null)
			},
			_updateCircle: function (t) {
				var i = t._point.round(),
					e = Math.round(t._radius),
					n = Math.round(t._radiusY || e);
				this._setPath(t, t._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600")
			},
			_setPath: function (t, i) {
				t._path.v = i
			},
			_bringToFront: function (t) {
				U(t._container)
			},
			_bringToBack: function (t) {
				V(t._container)
			}
		},
		dn = Fi ? cn : Z,
		pn = un.extend({
			getEvents: function () {
				var t = un.prototype.getEvents.call(this);
				return t.zoomstart = this._onZoomStart, t
			},
			_initContainer: function () {
				this._container = dn("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = dn("g"), this._container.appendChild(this._rootGroup)
			},
			_destroyContainer: function () {
				F(this._container), lt(this._container), delete this._container, delete this._rootGroup, delete this._svgSize
			},
			_onZoomStart: function () {
				this._update()
			},
			_update: function () {
				if (!this._map._animatingZoom || !this._bounds) {
					un.prototype._update.call(this);
					var t = this._bounds,
						i = t.getSize(),
						e = this._container;
					this._svgSize && this._svgSize.equals(i) || (this._svgSize = i, e.setAttribute("width", i.x), e.setAttribute("height", i.y)), it(e, t.min), e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")), this.fire("update")
				}
			},
			_initPath: function (t) {
				var i = t._path = dn("path");
				t.options.className && K(i, t.options.className), t.options.interactive && K(i, "leaflet-interactive"), this._updateStyle(t), this._layers[n(t)] = t
			},
			_addPath: function (t) {
				this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
			},
			_removePath: function (t) {
				F(t._path), t.removeInteractiveTarget(t._path), delete this._layers[n(t)]
			},
			_updatePath: function (t) {
				t._project(), t._update()
			},
			_updateStyle: function (t) {
				var i = t._path,
					e = t.options;
				i && (e.stroke ? (i.setAttribute("stroke", e.color), i.setAttribute("stroke-opacity", e.opacity), i.setAttribute("stroke-width", e.weight), i.setAttribute("stroke-linecap", e.lineCap), i.setAttribute("stroke-linejoin", e.lineJoin), e.dashArray ? i.setAttribute("stroke-dasharray", e.dashArray) : i.removeAttribute("stroke-dasharray"), e.dashOffset ? i.setAttribute("stroke-dashoffset", e.dashOffset) : i.removeAttribute("stroke-dashoffset")) : i.setAttribute("stroke", "none"), e.fill ? (i.setAttribute("fill", e.fillColor || e.color), i.setAttribute("fill-opacity", e.fillOpacity), i.setAttribute("fill-rule", e.fillRule || "evenodd")) : i.setAttribute("fill", "none"))
			},
			_updatePoly: function (t, i) {
				this._setPath(t, E(t._parts, i))
			},
			_updateCircle: function (t) {
				var i = t._point,
					e = Math.max(Math.round(t._radius), 1),
					n = "a" + e + "," + (Math.max(Math.round(t._radiusY), 1) || e) + " 0 1,0 ",
					o = t._empty() ? "M0 0" : "M" + (i.x - e) + "," + i.y + n + 2 * e + ",0 " + n + 2 * -e + ",0 ";
				this._setPath(t, o)
			},
			_setPath: function (t, i) {
				t._path.setAttribute("d", i)
			},
			_bringToFront: function (t) {
				U(t._path)
			},
			_bringToBack: function (t) {
				V(t._path)
			}
		});
	Fi && pn.include(_n), me.include({
		getRenderer: function (t) {
			var i = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
			return i || (i = this._renderer = this._createRenderer()), this.hasLayer(i) || this.addLayer(i), i
		},
		_getPaneRenderer: function (t) {
			if ("overlayPane" === t || void 0 === t) return !1;
			var i = this._paneRenderers[t];
			return void 0 === i && (i = this._createRenderer({
				pane: t
			}), this._paneRenderers[t] = i), i
		},
		_createRenderer: function (t) {
			return this.options.preferCanvas && Wt(t) || Ht(t)
		}
	});
	var mn = Ye.extend({
		initialize: function (t, i) {
			Ye.prototype.initialize.call(this, this._boundsToLatLngs(t), i)
		},
		setBounds: function (t) {
			return this.setLatLngs(this._boundsToLatLngs(t))
		},
		_boundsToLatLngs: function (t) {
			return [(t = T(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
		}
	});
	pn.create = dn, pn.pointsToPath = E, Xe.geometryToLayer = kt, Xe.coordsToLatLng = At, Xe.coordsToLatLngs = Bt, Xe.latLngToCoords = It, Xe.latLngsToCoords = Ot, Xe.getFeature = Rt, Xe.asFeature = Dt, me.mergeOptions({
		boxZoom: !0
	});
	var fn = Le.extend({
		initialize: function (t) {
			this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
		},
		addHooks: function () {
			ut(this._container, "mousedown", this._onMouseDown, this)
		},
		removeHooks: function () {
			lt(this._container, "mousedown", this._onMouseDown, this)
		},
		moved: function () {
			return this._moved
		},
		_destroy: function () {
			F(this._pane), delete this._pane
		},
		_resetState: function () {
			this._resetStateTimeout = 0, this._moved = !1
		},
		_clearDeferredResetState: function () {
			0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
		},
		_onMouseDown: function (t) {
			if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
			this._clearDeferredResetState(), this._resetState(), ri(), nt(), this._startPoint = this._map.mouseEventToContainerPoint(t), ut(document, {
				contextmenu: gt,
				mousemove: this._onMouseMove,
				mouseup: this._onMouseUp,
				keydown: this._onKeyDown
			}, this)
		},
		_onMouseMove: function (t) {
			this._moved || (this._moved = !0, this._box = H("div", "leaflet-zoom-box", this._container), K(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
			var i = new w(this._point, this._startPoint),
				e = i.getSize();
			it(this._box, i.min), this._box.style.width = e.x + "px", this._box.style.height = e.y + "px"
		},
		_finish: function () {
			this._moved && (F(this._box), Y(this._container, "leaflet-crosshair")), ai(), ot(), lt(document, {
				contextmenu: gt,
				mousemove: this._onMouseMove,
				mouseup: this._onMouseUp,
				keydown: this._onKeyDown
			}, this)
		},
		_onMouseUp: function (t) {
			if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
				this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(e(this._resetState, this), 0);
				var i = new b(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
				this._map.fitBounds(i).fire("boxzoomend", {
					boxZoomBounds: i
				})
			}
		},
		_onKeyDown: function (t) {
			27 === t.keyCode && this._finish()
		}
	});
	me.addInitHook("addHandler", "boxZoom", fn), me.mergeOptions({
		doubleClickZoom: !0
	});
	var gn = Le.extend({
		addHooks: function () {
			this._map.on("dblclick", this._onDoubleClick, this)
		},
		removeHooks: function () {
			this._map.off("dblclick", this._onDoubleClick, this)
		},
		_onDoubleClick: function (t) {
			var i = this._map,
				e = i.getZoom(),
				n = i.options.zoomDelta,
				o = t.originalEvent.shiftKey ? e - n : e + n;
			"center" === i.options.doubleClickZoom ? i.setZoom(o) : i.setZoomAround(t.containerPoint, o)
		}
	});
	me.addInitHook("addHandler", "doubleClickZoom", gn), me.mergeOptions({
		dragging: !0,
		inertia: !vi,
		inertiaDeceleration: 3400,
		inertiaMaxSpeed: 1 / 0,
		easeLinearity: .2,
		worldCopyJump: !1,
		maxBoundsViscosity: 0
	});
	var vn = Le.extend({
		addHooks: function () {
			if (!this._draggable) {
				var t = this._map;
				this._draggable = new Se(t._mapPane, t._container), this._draggable.on({
					dragstart: this._onDragStart,
					drag: this._onDrag,
					dragend: this._onDragEnd
				}, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
			}
			K(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
		},
		removeHooks: function () {
			Y(this._map._container, "leaflet-grab"), Y(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
		},
		moved: function () {
			return this._draggable && this._draggable._moved
		},
		moving: function () {
			return this._draggable && this._draggable._moving
		},
		_onDragStart: function () {
			var t = this._map;
			if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
				var i = T(this._map.options.maxBounds);
				this._offsetLimit = P(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
			} else this._offsetLimit = null;
			t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
		},
		_onDrag: function (t) {
			if (this._map.options.inertia) {
				var i = this._lastTime = +new Date,
					e = this._lastPos = this._draggable._absPos || this._draggable._newPos;
				this._positions.push(e), this._times.push(i), this._prunePositions(i)
			}
			this._map.fire("move", t).fire("drag", t)
		},
		_prunePositions: function (t) {
			for (; this._positions.length > 1 && t - this._times[0] > 50;) this._positions.shift(), this._times.shift()
		},
		_onZoomEnd: function () {
			var t = this._map.getSize().divideBy(2),
				i = this._map.latLngToLayerPoint([0, 0]);
			this._initialWorldOffset = i.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
		},
		_viscousLimit: function (t, i) {
			return t - (t - i) * this._viscosity
		},
		_onPreDragLimit: function () {
			if (this._viscosity && this._offsetLimit) {
				var t = this._draggable._newPos.subtract(this._draggable._startPos),
					i = this._offsetLimit;
				t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)), t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)), t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)), t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
			}
		},
		_onPreDragWrap: function () {
			var t = this._worldWidth,
				i = Math.round(t / 2),
				e = this._initialWorldOffset,
				n = this._draggable._newPos.x,
				o = (n - i + e) % t + i - e,
				s = (n + i + e) % t - i - e,
				r = Math.abs(o + e) < Math.abs(s + e) ? o : s;
			this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r
		},
		_onDragEnd: function (t) {
			var i = this._map,
				e = i.options,
				n = !e.inertia || this._times.length < 2;
			if (i.fire("dragend", t), n) i.fire("moveend");
			else {
				this._prunePositions(+new Date);
				var o = this._lastPos.subtract(this._positions[0]),
					s = (this._lastTime - this._times[0]) / 1e3,
					r = e.easeLinearity,
					a = o.multiplyBy(r / s),
					h = a.distanceTo([0, 0]),
					u = Math.min(e.inertiaMaxSpeed, h),
					l = a.multiplyBy(u / h),
					c = u / (e.inertiaDeceleration * r),
					_ = l.multiplyBy(-c / 2).round();
				_.x || _.y ? (_ = i._limitOffset(_, i.options.maxBounds), f(function () {
					i.panBy(_, {
						duration: c,
						easeLinearity: r,
						noMoveStart: !0,
						animate: !0
					})
				})) : i.fire("moveend")
			}
		}
	});
	me.addInitHook("addHandler", "dragging", vn), me.mergeOptions({
		keyboard: !0,
		keyboardPanDelta: 80
	});
	var yn = Le.extend({
		keyCodes: {
			left: [37],
			right: [39],
			down: [40],
			up: [38],
			zoomIn: [187, 107, 61, 171],
			zoomOut: [189, 109, 54, 173]
		},
		initialize: function (t) {
			this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
		},
		addHooks: function () {
			var t = this._map._container;
			t.tabIndex <= 0 && (t.tabIndex = "0"), ut(t, {
				focus: this._onFocus,
				blur: this._onBlur,
				mousedown: this._onMouseDown
			}, this), this._map.on({
				focus: this._addHooks,
				blur: this._removeHooks
			}, this)
		},
		removeHooks: function () {
			this._removeHooks(), lt(this._map._container, {
				focus: this._onFocus,
				blur: this._onBlur,
				mousedown: this._onMouseDown
			}, this), this._map.off({
				focus: this._addHooks,
				blur: this._removeHooks
			}, this)
		},
		_onMouseDown: function () {
			if (!this._focused) {
				var t = document.body,
					i = document.documentElement,
					e = t.scrollTop || i.scrollTop,
					n = t.scrollLeft || i.scrollLeft;
				this._map._container.focus(), window.scrollTo(n, e)
			}
		},
		_onFocus: function () {
			this._focused = !0, this._map.fire("focus")
		},
		_onBlur: function () {
			this._focused = !1, this._map.fire("blur")
		},
		_setPanDelta: function (t) {
			var i, e, n = this._panKeys = {},
				o = this.keyCodes;
			for (i = 0, e = o.left.length; i < e; i++) n[o.left[i]] = [-1 * t, 0];
			for (i = 0, e = o.right.length; i < e; i++) n[o.right[i]] = [t, 0];
			for (i = 0, e = o.down.length; i < e; i++) n[o.down[i]] = [0, t];
			for (i = 0, e = o.up.length; i < e; i++) n[o.up[i]] = [0, -1 * t]
		},
		_setZoomDelta: function (t) {
			var i, e, n = this._zoomKeys = {},
				o = this.keyCodes;
			for (i = 0, e = o.zoomIn.length; i < e; i++) n[o.zoomIn[i]] = t;
			for (i = 0, e = o.zoomOut.length; i < e; i++) n[o.zoomOut[i]] = -t
		},
		_addHooks: function () {
			ut(document, "keydown", this._onKeyDown, this)
		},
		_removeHooks: function () {
			lt(document, "keydown", this._onKeyDown, this)
		},
		_onKeyDown: function (t) {
			if (!(t.altKey || t.ctrlKey || t.metaKey)) {
				var i, e = t.keyCode,
					n = this._map;
				if (e in this._panKeys) n._panAnim && n._panAnim._inProgress || (i = this._panKeys[e], t.shiftKey && (i = x(i).multiplyBy(3)), n.panBy(i), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
				else if (e in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
				else {
					if (27 !== e || !n._popup || !n._popup.options.closeOnEscapeKey) return;
					n.closePopup()
				}
				gt(t)
			}
		}
	});
	me.addInitHook("addHandler", "keyboard", yn), me.mergeOptions({
		scrollWheelZoom: !0,
		wheelDebounceTime: 40,
		wheelPxPerZoomLevel: 60
	});
	var xn = Le.extend({
		addHooks: function () {
			ut(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
		},
		removeHooks: function () {
			lt(this._map._container, "mousewheel", this._onWheelScroll, this)
		},
		_onWheelScroll: function (t) {
			var i = yt(t),
				n = this._map.options.wheelDebounceTime;
			this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
			var o = Math.max(n - (+new Date - this._startTime), 0);
			clearTimeout(this._timer), this._timer = setTimeout(e(this._performZoom, this), o), gt(t)
		},
		_performZoom: function () {
			var t = this._map,
				i = t.getZoom(),
				e = this._map.options.zoomSnap || 0;
			t._stop();
			var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
				o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
				s = e ? Math.ceil(o / e) * e : o,
				r = t._limitZoom(i + (this._delta > 0 ? s : -s)) - i;
			this._delta = 0, this._startTime = null, r && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + r) : t.setZoomAround(this._lastMousePos, i + r))
		}
	});
	me.addInitHook("addHandler", "scrollWheelZoom", xn), me.mergeOptions({
		tap: !0,
		tapTolerance: 15
	});
	var wn = Le.extend({
		addHooks: function () {
			ut(this._map._container, "touchstart", this._onDown, this)
		},
		removeHooks: function () {
			lt(this._map._container, "touchstart", this._onDown, this)
		},
		_onDown: function (t) {
			if (t.touches) {
				if (ft(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
				var i = t.touches[0],
					n = i.target;
				this._startPos = this._newPos = new y(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() && K(n, "leaflet-active"), this._holdTimeout = setTimeout(e(function () {
					this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i))
				}, this), 1e3), this._simulateEvent("mousedown", i), ut(document, {
					touchmove: this._onMove,
					touchend: this._onUp
				}, this)
			}
		},
		_onUp: function (t) {
			if (clearTimeout(this._holdTimeout), lt(document, {
					touchmove: this._onMove,
					touchend: this._onUp
				}, this), this._fireClick && t && t.changedTouches) {
				var i = t.changedTouches[0],
					e = i.target;
				e && e.tagName && "a" === e.tagName.toLowerCase() && Y(e, "leaflet-active"), this._simulateEvent("mouseup", i), this._isTapValid() && this._simulateEvent("click", i)
			}
		},
		_isTapValid: function () {
			return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
		},
		_onMove: function (t) {
			var i = t.touches[0];
			this._newPos = new y(i.clientX, i.clientY), this._simulateEvent("mousemove", i)
		},
		_simulateEvent: function (t, i) {
			var e = document.createEvent("MouseEvents");
			e._simulated = !0, i.target._simulatedClick = !0, e.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(e)
		}
	});
	Ri && !Oi && me.addInitHook("addHandler", "tap", wn), me.mergeOptions({
		touchZoom: Ri && !vi,
		bounceAtZoomLimits: !0
	});
	var Ln = Le.extend({
		addHooks: function () {
			K(this._map._container, "leaflet-touch-zoom"), ut(this._map._container, "touchstart", this._onTouchStart, this)
		},
		removeHooks: function () {
			Y(this._map._container, "leaflet-touch-zoom"), lt(this._map._container, "touchstart", this._onTouchStart, this)
		},
		_onTouchStart: function (t) {
			var i = this._map;
			if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
				var e = i.mouseEventToContainerPoint(t.touches[0]),
					n = i.mouseEventToContainerPoint(t.touches[1]);
				this._centerPoint = i.getSize()._divideBy(2), this._startLatLng = i.containerPointToLatLng(this._centerPoint), "center" !== i.options.touchZoom && (this._pinchStartLatLng = i.containerPointToLatLng(e.add(n)._divideBy(2))), this._startDist = e.distanceTo(n), this._startZoom = i.getZoom(), this._moved = !1, this._zooming = !0, i._stop(), ut(document, "touchmove", this._onTouchMove, this), ut(document, "touchend", this._onTouchEnd, this), ft(t)
			}
		},
		_onTouchMove: function (t) {
			if (t.touches && 2 === t.touches.length && this._zooming) {
				var i = this._map,
					n = i.mouseEventToContainerPoint(t.touches[0]),
					o = i.mouseEventToContainerPoint(t.touches[1]),
					s = n.distanceTo(o) / this._startDist;
				if (this._zoom = i.getScaleZoom(s, this._startZoom), !i.options.bounceAtZoomLimits && (this._zoom < i.getMinZoom() && s < 1 || this._zoom > i.getMaxZoom() && s > 1) && (this._zoom = i._limitZoom(this._zoom)), "center" === i.options.touchZoom) {
					if (this._center = this._startLatLng, 1 === s) return
				} else {
					var r = n._add(o)._divideBy(2)._subtract(this._centerPoint);
					if (1 === s && 0 === r.x && 0 === r.y) return;
					this._center = i.unproject(i.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom)
				}
				this._moved || (i._moveStart(!0, !1), this._moved = !0), g(this._animRequest);
				var a = e(i._move, i, this._center, this._zoom, {
					pinch: !0,
					round: !1
				});
				this._animRequest = f(a, this, !0), ft(t)
			}
		},
		_onTouchEnd: function () {
			this._moved && this._zooming ? (this._zooming = !1, g(this._animRequest), lt(document, "touchmove", this._onTouchMove), lt(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
		}
	});
	me.addInitHook("addHandler", "touchZoom", Ln), me.BoxZoom = fn, me.DoubleClickZoom = gn, me.Drag = vn, me.Keyboard = yn, me.ScrollWheelZoom = xn, me.Tap = wn, me.TouchZoom = Ln, Object.freeze = Ft, t.version = "1.3.4+HEAD.0e566b2", t.Control = fe, t.control = ge, t.Browser = qi, t.Evented = ti, t.Mixin = Te, t.Util = $t, t.Class = v, t.Handler = Le, t.extend = i, t.bind = e, t.stamp = n, t.setOptions = l, t.DomEvent = de, t.DomUtil = ue, t.PosAnimation = pe, t.Draggable = Se, t.LineUtil = Ze, t.PolyUtil = Ee, t.Point = y, t.point = x, t.Bounds = w, t.bounds = P, t.Transformation = C, t.transformation = S, t.Projection = Be, t.LatLng = z, t.latLng = M, t.LatLngBounds = b, t.latLngBounds = T, t.CRS = ni, t.GeoJSON = Xe, t.geoJSON = Nt, t.geoJson = $e, t.Layer = De, t.LayerGroup = Ne, t.layerGroup = function (t, i) {
		return new Ne(t, i)
	}, t.FeatureGroup = je, t.featureGroup = function (t) {
		return new je(t)
	}, t.ImageOverlay = Qe, t.imageOverlay = function (t, i, e) {
		return new Qe(t, i, e)
	}, t.VideoOverlay = tn, t.videoOverlay = function (t, i, e) {
		return new tn(t, i, e)
	}, t.DivOverlay = en, t.Popup = nn, t.popup = function (t, i) {
		return new nn(t, i)
	}, t.Tooltip = on, t.tooltip = function (t, i) {
		return new on(t, i)
	}, t.Icon = We, t.icon = function (t) {
		return new We(t)
	}, t.DivIcon = sn, t.divIcon = function (t) {
		return new sn(t)
	}, t.Marker = qe, t.marker = function (t, i) {
		return new qe(t, i)
	}, t.TileLayer = an, t.tileLayer = jt, t.GridLayer = rn, t.gridLayer = function (t) {
		return new rn(t)
	}, t.SVG = pn, t.svg = Ht, t.Renderer = un, t.Canvas = ln, t.canvas = Wt, t.Path = Ue, t.CircleMarker = Ve, t.circleMarker = function (t, i) {
		return new Ve(t, i)
	}, t.Circle = Ge, t.circle = function (t, i, e) {
		return new Ge(t, i, e)
	}, t.Polyline = Ke, t.polyline = function (t, i) {
		return new Ke(t, i)
	}, t.Polygon = Ye, t.polygon = function (t, i) {
		return new Ye(t, i)
	}, t.Rectangle = mn, t.rectangle = function (t, i) {
		return new mn(t, i)
	}, t.Map = me, t.map = function (t, i) {
		return new me(t, i)
	};
	var Pn = window.L;
	t.noConflict = function () {
		return window.L = Pn, this
	}, window.L = t
}), L.TileLayer.Grayscale = L.TileLayer.extend({
	options: {
		quotaRed: 21,
		quotaGreen: 71,
		quotaBlue: 8,
		quotaDividerTune: 0,
		quotaDivider: function () {
			return this.quotaRed + this.quotaGreen + this.quotaBlue + this.quotaDividerTune
		}
	},
	initialize: function (t, i) {
		(i = i || {}).crossOrigin = !0, L.TileLayer.prototype.initialize.call(this, t, i), this.on("tileload", function (t) {
			this._makeGrayscale(t.tile)
		})
	},
	_createTile: function () {
		var t = L.TileLayer.prototype._createTile.call(this);
		return t.crossOrigin = "Anonymous", t
	},
	_makeGrayscale: function (t) {
		if (!t.getAttribute("data-grayscaled")) {
			t.crossOrigin = "";
			var i = document.createElement("canvas");
			i.width = t.width, i.height = t.height;
			var e = i.getContext("2d");
			e.drawImage(t, 0, 0);
			for (var n = e.getImageData(0, 0, i.width, i.height), o = n.data, s = 0, r = o.length; s < r; s += 4) o[s] = o[s + 1] = o[s + 2] = (this.options.quotaRed * o[s] + this.options.quotaGreen * o[s + 1] + this.options.quotaBlue * o[s + 2]) / this.options.quotaDivider();
			e.putImageData(n, 0, 0), t.setAttribute("data-grayscaled", !0), t.src = i.toDataURL()
		}
	}
}), L.tileLayer.grayscale = function (t, i) {
	return new L.TileLayer.Grayscale(t, i)
};

/*jquery.mb.YTPlayer 01-12-2018
 _ jquery.mb.components
 _ email: matbicoc@gmail.com
 _ Copyright (c) 2001-2018. Matteo Bicocchi (Pupunzi);
 _ blog: http://pupunzi.open-lab.com
 _ Open Lab s.r.l., Florence - Italy
 */

var ytp = ytp || {};

function onYouTubeIframeAPIReady() {
	ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}
var getYTPVideoID = function (e) {
	var r, t;
	return 0 < e.indexOf("youtu.be") || 0 < e.indexOf("youtube.com/embed") ? r = (t = 0 < (r = e.substr(e.lastIndexOf("/") + 1, e.length)).indexOf("?list=") ? r.substr(r.lastIndexOf("="), r.length) : null) ? r.substr(0, r.lastIndexOf("?")) : r : t = -1 < e.indexOf("http") ? (r = e.match(/[\\?&]v=([^&#]*)/)[1], 0 < e.indexOf("list=") ? e.match(/[\\?&]list=([^&#]*)/)[1] : null) : (r = 15 < e.length ? null : e) ? null : e, {
		videoID: r,
		playlistID: t
	}
};

function iOSversion() {
	if (/iP(hone|od|ad)/.test(navigator.platform)) {
		var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
		return [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3] || 0, 10)]
	}
}! function (jQuery, ytp) {
	jQuery.mbYTPlayer = {
		name: "jquery.mb.YTPlayer",
		version: "3.2.8",
		build: "7398",
		author: "Matteo Bicocchi (pupunzi)",
		apiKey: "",
		defaults: {
			videoURL: null,
			containment: "body",
			ratio: "auto",
			fadeOnStartTime: 1500,
			startAt: 0,
			stopAt: 0,
			autoPlay: !0,
			coverImage: !1,
			loop: !0,
			addRaster: !1,
			mask: !1,
			opacity: 1,
			quality: "default",
			vol: 50,
			mute: !1,
			showControls: !0,
			anchor: "center,center",
			showAnnotations: !1,
			cc_load_policy: !1,
			showYTLogo: !0,
			useOnMobile: !0,
			mobileFallbackImage: null,
			playOnlyIfVisible: !1,
			onScreenPercentage: 30,
			stopMovieOnBlur: !0,
			realfullscreen: !0,
			optimizeDisplay: !0,
			abundance: .3,
			gaTrack: !0,
			remember_last_time: !1,
			addFilters: !1,
			onReady: function (e) {},
			onError: function (e, r) {}
		},
		controls: {
			play: "P",
			pause: "p",
			mute: "M",
			unmute: "A",
			onlyYT: "O",
			showSite: "R",
			ytLogo: "Y"
		},
		controlBar: null,
		locationProtocol: "https:",
		defaultFilters: {
			grayscale: {
				value: 0,
				unit: "%"
			},
			hue_rotate: {
				value: 0,
				unit: "deg"
			},
			invert: {
				value: 0,
				unit: "%"
			},
			opacity: {
				value: 0,
				unit: "%"
			},
			saturate: {
				value: 0,
				unit: "%"
			},
			sepia: {
				value: 0,
				unit: "%"
			},
			brightness: {
				value: 0,
				unit: "%"
			},
			contrast: {
				value: 0,
				unit: "%"
			},
			blur: {
				value: 0,
				unit: "px"
			}
		},
		buildPlayer: function (options) {
			if (ytp.YTAPIReady || void 0 !== window.YT) setTimeout(function () {
				jQuery(document).trigger("YTAPIReady"), ytp.YTAPIReady = !0
			}, 100);
			else {
				jQuery("#YTAPI").remove();
				var tag = jQuery("<script><\/script>").attr({
					src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
					id: "YTAPI"
				});
				jQuery("head").prepend(tag)
			}

			function isIframe() {
				var r = !1;
				try {
					self.location.href != top.location.href && (r = !0)
				} catch (e) {
					r = !0
				}
				return r
			}
			return this.each(function () {
				var YTPlayer = this,
					$YTPlayer = jQuery(YTPlayer);
				$YTPlayer.hide(), YTPlayer.loop = 0, YTPlayer.state = 0, YTPlayer.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters), YTPlayer.filtersEnabled = !0, YTPlayer.id = YTPlayer.id || "YTP_" + (new Date).getTime(), $YTPlayer.addClass("mb_YTPlayer");
				var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
				"object" != typeof property && (property = {}), YTPlayer.opt = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaults, YTPlayer.opt, options, property), YTPlayer.opt.elementId = YTPlayer.id, 0 === YTPlayer.opt.vol && (YTPlayer.opt.vol = 1, YTPlayer.opt.mute = !0), YTPlayer.opt.autoPlay && 0 == YTPlayer.opt.mute && jQuery.mbBrowser.chrome && (jQuery(document).one("mousedown.YTPstart", function () {
					$YTPlayer.YTPPlay()
				}), console.info("YTPlayer info: On Webkit browsers you can not autoplay the video if the audio is on.")), YTPlayer.opt.loop && "boolean" == typeof YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999);
				var fullScreenAvailable = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
				YTPlayer.opt.realfullscreen = !(isIframe() || !fullScreenAvailable) && YTPlayer.opt.realfullscreen, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "1" : "3", YTPlayer.opt.cc_load_policy = YTPlayer.opt.cc_load_policy ? "1" : "0", YTPlayer.opt.coverImage = YTPlayer.opt.coverImage || YTPlayer.opt.backgroundImage, jQuery.mbBrowser.msie && jQuery.mbBrowser.version < 9 && (YTPlayer.opt.opacity = 1), YTPlayer.opt.containment = "self" === YTPlayer.opt.containment ? $YTPlayer : jQuery(YTPlayer.opt.containment), YTPlayer.isRetina = window.retina || 1 < window.devicePixelRatio, YTPlayer.opt.ratio = "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio, YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio), YTPlayer.orig_containment_background = YTPlayer.opt.containment.css("background-image"), $YTPlayer.attr("id") || $YTPlayer.attr("id", "ytp_" + (new Date).getTime()), YTPlayer.playerID = "iframe_" + YTPlayer.id, YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0, YTPlayer.videoID = YTPlayer.opt.videoURL ? getYTPVideoID(YTPlayer.opt.videoURL).videoID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).videoID, YTPlayer.playlistID = YTPlayer.opt.videoURL ? getYTPVideoID(YTPlayer.opt.videoURL).playlistID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).playlistID;
				var start_from_last = 0;
				if (jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID) && (start_from_last = parseFloat(jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID))), YTPlayer.opt.remember_last_time && start_from_last && (YTPlayer.start_from_last = start_from_last, jQuery.mbCookie.remove("YTPlayer_start_from" + YTPlayer.videoID)), YTPlayer.isPlayer = $YTPlayer.is(YTPlayer.opt.containment), YTPlayer.isBackground = YTPlayer.opt.containment.is("body"), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
					if (YTPlayer.isPlayer && $YTPlayer.show(), YTPlayer.overlay = jQuery("<div/>").css({
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%"
						}).addClass("YTPOverlay"), YTPlayer.opt.coverImage || "none" != YTPlayer.orig_containment_background) {
						var bgndURL = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
						YTPlayer.opt.containment.css({
							background: bgndURL,
							backgroundColor: "#000",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat"
						})
					}
					YTPlayer.wrapper = jQuery("<div/>").attr("id", "wrapper_" + YTPlayer.id).css({
						position: "absolute",
						zIndex: 0,
						minWidth: "100%",
						minHeight: "100%",
						left: 0,
						top: 0,
						overflow: "hidden",
						opacity: 0
					}).addClass("mbYTP_wrapper"), YTPlayer.isPlayer && (YTPlayer.inlinePlayButton = jQuery("<div/>").addClass("inlinePlayButton").html(jQuery.mbYTPlayer.controls.play), $YTPlayer.append(YTPlayer.inlinePlayButton), YTPlayer.inlinePlayButton.on("click", function (e) {
						$YTPlayer.YTPPlay(), e.stopPropagation()
					}), YTPlayer.opt.autoPlay && YTPlayer.inlinePlayButton.hide(), YTPlayer.overlay.on("click", function () {
						$YTPlayer.YTPTogglePlay()
					}).css({
						cursor: "pointer"
					}));
					var playerBox = jQuery("<div/>").attr("id", YTPlayer.playerID).addClass("playerBox");
					if (playerBox.css({
							position: "absolute",
							zIndex: 0,
							width: "100%",
							height: "100%",
							top: 0,
							left: 0,
							overflow: "hidden",
							opacity: 1
						}), YTPlayer.wrapper.append(playerBox), playerBox.after(YTPlayer.overlay), YTPlayer.isPlayer && (YTPlayer.inlineWrapper = jQuery("<div/>").addClass("inline-YTPlayer"), YTPlayer.inlineWrapper.css({
							position: "relative",
							maxWidth: YTPlayer.opt.containment.css("width")
						}), YTPlayer.opt.containment.css({
							position: "relative",
							paddingBottom: "56.25%",
							overflow: "hidden",
							height: 0
						}), YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper)), YTPlayer.opt.containment.children().not("script, style").each(function () {
							"static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
						}), YTPlayer.isBackground ? (jQuery("body").css({
							boxSizing: "border-box"
						}), YTPlayer.wrapper.css({
							position: "fixed",
							top: 0,
							left: 0,
							zIndex: 0
						})) : "static" == YTPlayer.opt.containment.css("position") && (YTPlayer.opt.containment.css({
							position: "relative"
						}), $YTPlayer.show()), YTPlayer.opt.containment.prepend(YTPlayer.wrapper), YTPlayer.isBackground || YTPlayer.overlay.on("mouseenter", function () {
							YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.addClass("visible")
						}).on("mouseleave", function () {
							YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.removeClass("visible")
						}), jQuery.mbBrowser.mobile && !YTPlayer.opt.useOnMobile) return YTPlayer.opt.mobileFallbackImage && (YTPlayer.wrapper.css({
						backgroundImage: "url(" + YTPlayer.opt.mobileFallbackImage + ")",
						backgroundPosition: "center center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						opacity: 1
					}), YTPlayer.wrapper.css({
						opacity: 1
					})), $YTPlayer;
					jQuery.mbBrowser.mobile && YTPlayer.opt.autoPlay && YTPlayer.opt.useOnMobile && jQuery("body").one("touchstart", function () {
						YTPlayer.player.playVideo()
					}), jQuery(document).one("YTAPIReady", function () {
						$YTPlayer.trigger("YTAPIReady_" + YTPlayer.id), ytp.YTAPIReady = !0
					}), YTPlayer.isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage), $YTPlayer.one("YTAPIReady_" + YTPlayer.id, function () {
						var o = this,
							t = jQuery(o);
						o.isBackground && ytp.backgroundIsInited || o.isInit || (o.isBackground && (ytp.backgroundIsInited = !0), o.opt.autoPlay = void 0 === o.opt.autoPlay ? !!o.isBackground : o.opt.autoPlay, o.opt.vol = o.opt.vol ? o.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(o), jQuery(o).on("YTPChanged", function (e) {
							if (!o.isInit) {
								o.isInit = !0;
								var r = {
									modestbranding: 1,
									autoplay: 0,
									controls: 0,
									showinfo: 0,
									rel: 0,
									enablejsapi: 1,
									version: 3,
									playerapiid: o.playerID,
									origin: "*",
									allowfullscreen: !0,
									wmode: "transparent",
									iv_load_policy: o.opt.showAnnotations,
									cc_load_policy: o.opt.cc_load_policy,
									playsinline: jQuery.mbBrowser.mobile ? 1 : 0,
									html5: document.createElement("video").canPlayType ? 1 : 0
								};
								new YT.Player(o.playerID, {
									playerVars: r,
									events: {
										onReady: function (e) {
											o.player = e.target, o.player.loadVideoById({
												videoId: o.videoID.toString(),
												suggestedQuality: o.opt.quality
											}), t.trigger("YTPlayerIsReady_" + o.id)
										},
										onStateChange: function (e) {
											if ("function" == typeof e.target.getPlayerState) {
												var r = e.target.getPlayerState();
												if (o.preventTrigger || o.isStarting) o.preventTrigger = !1;
												else {
													var t;
													switch (o.state = r) {
														case -1:
															t = "YTPUnstarted";
															break;
														case 0:
															t = "YTPRealEnd";
															break;
														case 1:
															t = "YTPPlay", o.controlBar.length && o.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.pause), o.isPlayer && o.inlinePlayButton.hide(), jQuery(document).off("mousedown.YTPstart");
															break;
														case 2:
															t = "YTPPause", o.controlBar.length && o.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play), o.isPlayer && o.inlinePlayButton.show();
															break;
														case 3:
															o.player.setPlaybackQuality(o.opt.quality), t = "YTPBuffering", o.controlBar.length && o.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
															break;
														case 5:
															t = "YTPCued"
													}
													var a = jQuery.Event(t);
													a.time = o.currentTime, jQuery(o).trigger(a)
												}
											}
										},
										onPlaybackQualityChange: function (e) {
											var r = e.target.getPlaybackQuality(),
												t = jQuery.Event("YTPQualityChange");
											t.quality = r, jQuery(o).trigger(t)
										},
										onError: function (e) {
											switch ("function" == typeof o.opt.onError && o.opt.onError(t, e), e.data) {
												case 2:
													console.error("video ID:: " + o.videoID + ": The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.");
													break;
												case 5:
													console.error("video ID:: " + o.videoID + ": The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.");
													break;
												case 100:
													console.error("video ID:: " + o.videoID + ": The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.");
													break;
												case 101:
												case 150:
													console.error("video ID:: " + o.videoID + ": The owner of the requested video does not allow it to be played in embedded players.")
											}
											o.isList && jQuery(o).YTPPlayNext()
										}
									}
								}), t.on("YTPlayerIsReady_" + o.id, function () {
									if (o.isReady) return this;
									o.playerEl = o.player.getIframe(), jQuery(o.playerEl).unselectable(), t.optimizeDisplay(), jQuery(window).off("resize.YTP_" + o.id).on("resize.YTP_" + o.id, function () {
										t.optimizeDisplay()
									}), o.opt.remember_last_time && jQuery(window).on("unload.YTP_" + o.id, function () {
										var e = o.player.getCurrentTime();
										jQuery.mbCookie.set("YTPlayer_start_from" + o.videoID, e, 0)
									}), t.YTPCheckForState()
								})
							}
						}))
					}), $YTPlayer.off("YTPTime.mask"), jQuery.mbYTPlayer.applyMask(YTPlayer)
				}
			})
		},
		isOnScreen: function (e, r) {
			r = r || 10;
			var t = e.wrapper,
				a = jQuery(window).scrollTop(),
				o = a + jQuery(window).height(),
				n = t.height() * r / 100,
				i = t.offset().top + n;
			return t.offset().top + (t.height() - n) <= o && a <= i
		},
		getDataFromAPI: function (n) {
			n.videoData = jQuery.mbStorage.get("YTPlayer_data_" + n.videoID), n.videoData ? (setTimeout(function () {
				n.dataReceived = !0;
				var e = jQuery.Event("YTPChanged");
				e.time = n.currentTime, e.videoId = n.videoID, e.opt = n.opt, jQuery(n).trigger(e);
				var r = jQuery.Event("YTPData");
				for (var t in r.prop = {}, n.videoData) r.prop[t] = n.videoData[t];
				jQuery(n).trigger(r)
			}, n.opt.fadeOnStartTime), n.hasData = !0) : jQuery.mbYTPlayer.apiKey ? jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + n.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function (e) {
				n.dataReceived = !0;
				var r, t = jQuery.Event("YTPChanged");
				t.time = n.currentTime, t.videoId = n.videoID, jQuery(n).trigger(t), e.items[0] ? (r = e.items[0].snippet, n.videoData = {}, n.videoData.id = n.videoID, n.videoData.channelTitle = r.channelTitle, n.videoData.title = r.title, n.videoData.description = r.description.length < 400 ? r.description : r.description.substring(0, 400) + " ...", n.videoData.thumb_max = r.thumbnails.maxres ? r.thumbnails.maxres.url : null, n.videoData.thumb_high = r.thumbnails.high ? r.thumbnails.high.url : null, n.videoData.thumb_medium = r.thumbnails.medium ? r.thumbnails.medium.url : null, jQuery.mbStorage.set("YTPlayer_data_" + n.videoID, n.videoData), n.hasData = !0) : (n.videoData = {}, n.hasData = !1);
				var a = jQuery.Event("YTPData");
				for (var o in a.prop = {}, n.videoData) a.prop[o] = n.videoData[o];
				jQuery(n).trigger(a)
			}) : (setTimeout(function () {
				var e = jQuery.Event("YTPChanged");
				e.time = n.currentTime, e.videoId = n.videoID, jQuery(n).trigger(e)
			}, 10), n.videoData = null), n.opt.ratio = "auto" == n.opt.ratio ? 16 / 9 : n.opt.ratio, n.isPlayer && !n.opt.autoPlay && (n.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(n).append(n.loading), n.loading.fadeIn())
		},
		removeStoredData: function () {
			jQuery.mbStorage.remove()
		},
		getVideoData: function () {
			return this.get(0).videoData
		},
		getVideoID: function () {
			return this.get(0).videoID || !1
		},
		getPlaylistID: function () {
			return this.get(0).playlistID || !1
		},
		setVideoQuality: function (e) {
			return this.get(0).player.setPlaybackQuality(e), this
		},
		playlist: function (e, r, t) {
			var a = this.get(0);
			return a.isList = !0, r && (e = jQuery.shuffle(e)), a.videoID || (a.videos = e, a.videoCounter = 1, a.videoLength = e.length, jQuery(a).data("property", e[0]), jQuery(a).YTPlayer()), "function" == typeof t && jQuery(a).one("YTPChanged", function () {
				t(a)
			}), jQuery(a).on("YTPEnd", function () {
				jQuery(a).YTPPlayNext()
			}), this
		},
		playNext: function () {
			var e = this.get(0);
			return e.videoCounter++, e.videoCounter > e.videoLength && (e.videoCounter = 1), jQuery(e).YTPPlayIndex(e.videoCounter), this
		},
		playPrev: function () {
			var e = this.get(0);
			return e.videoCounter--, e.videoCounter <= 0 && (e.videoCounter = e.videoLength), jQuery(e).YTPPlayIndex(e.videoCounter), this
		},
		playIndex: function (e) {
			var r = this.get(0);
			r.checkForStartAt && (clearInterval(r.checkForStartAt), clearInterval(r.getState)), r.videoCounter = e, r.videoCounter >= r.videoLength && (r.videoCounter = r.videoLength);
			var t = r.videos[r.videoCounter - 1];
			return jQuery(r).YTPChangeVideo(t), this
		},
		changeVideo: function (e) {
			var r = this,
				t = r.get(0);
			t.opt.startAt = 0, t.opt.stopAt = 0, t.opt.mask = !1, t.opt.mute = !0, t.opt.autoPlay = !0, t.opt.addFilters = !1, t.opt.coverImage = !1, t.hasData = !1, t.hasChanged = !0, t.player.loopTime = void 0, e && jQuery.extend(t.opt, e), t.videoID = getYTPVideoID(t.opt.videoURL).videoID, t.opt.loop && "boolean" == typeof t.opt.loop && (t.opt.loop = 9999), t.wrapper.css({
				background: "none"
			}), jQuery(t.playerEl).CSSAnimate({
				opacity: 0
			}, t.opt.fadeOnStartTime, function () {
				jQuery.mbYTPlayer.getDataFromAPI(t), r.YTPGetPlayer().loadVideoById({
					videoId: t.videoID,
					suggestedQuality: t.opt.quality
				}), r.YTPPause(), r.optimizeDisplay(), r.YTPCheckForState()
			});
			var a = jQuery.Event("YTPChangeVideo");
			return a.time = t.currentTime, jQuery(t).trigger(a), jQuery.mbYTPlayer.applyMask(t), this
		},
		getPlayer: function () {
			var e = this.get(0);
			return e.isReady && e.player || null
		},
		playerDestroy: function () {
			var e = this.get(0);
			return e.isReady && (ytp.YTAPIReady = !0, ytp.backgroundIsInited = !1, e.isInit = !1, e.videoID = null, e.isReady = !1, e.wrapper.remove(), jQuery("#controlBar_" + e.id).remove(), clearInterval(e.checkForStartAt), clearInterval(e.getState)), this
		},
		fullscreen: function (real) {
			var YTPlayer = this.get(0);
			void 0 === real && (real = eval(YTPlayer.opt.realfullscreen));
			var controls = jQuery("#controlBar_" + YTPlayer.id),
				fullScreenBtn = controls.find(".mb_OnlyYT"),
				videoWrapper = YTPlayer.isPlayer ? YTPlayer.opt.containment : YTPlayer.wrapper;
			if (real) {
				var fullscreenchange = jQuery.mbBrowser.mozilla ? "mozfullscreenchange" : jQuery.mbBrowser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
				jQuery(document).off(fullscreenchange).on(fullscreenchange, function () {
					RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen") ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("YTPFullscreen"), videoWrapper.CSSAnimate({
						opacity: YTPlayer.opt.opacity
					}, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({
						zIndex: 0
					}), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
				})
			}
			if (YTPlayer.isAlone) jQuery(document).off("mousemove.YTPlayer"), clearTimeout(YTPlayer.hideCursor), YTPlayer.overlay.css({
				cursor: "auto"
			}), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
				opacity: YTPlayer.opt.opacity
			}, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({
				zIndex: 0
			})), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1;
			else {
				function hideMouse() {
					YTPlayer.overlay.css({
						cursor: "none"
					})
				}
				jQuery(document).on("mousemove.YTPlayer", function (e) {
					YTPlayer.overlay.css({
						cursor: "auto"
					}), clearTimeout(YTPlayer.hideCursor), jQuery(e.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
				}), hideMouse(), real ? (videoWrapper.css({
					opacity: 0
				}), videoWrapper.addClass("YTPFullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function () {
					videoWrapper.CSSAnimate({
						opacity: 1
					}, 2 * YTPlayer.opt.fadeOnStartTime), videoWrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
				}, YTPlayer.opt.fadeOnStartTime)) : videoWrapper.css({
					zIndex: 1e4
				}).CSSAnimate({
					opacity: 1
				}, 2 * YTPlayer.opt.fadeOnStartTime), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0
			}

			function RunPrefixMethod(e, r) {
				for (var t, a, o = ["webkit", "moz", "ms", "o", ""], n = 0; n < o.length && !e[t];) {
					if (t = r, "" == o[n] && (t = t.substr(0, 1).toLowerCase() + t.substr(1)), "undefined" != (a = typeof e[t = o[n] + t])) return o = [o[n]], "function" == a ? e[t]() : e[t];
					n++
				}
			}

			function launchFullscreen(e) {
				RunPrefixMethod(e, "RequestFullScreen")
			}

			function cancelFullscreen() {
				(RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
			}
			return this
		},
		toggleLoops: function () {
			var e = this.get(0),
				r = e.opt;
			return 1 == r.loop ? r.loop = 0 : (r.startAt ? e.player.seekTo(r.startAt) : e.player.playVideo(), r.loop = 1), this
		},
		play: function () {
			var e = this.get(0),
				r = jQuery(e);
			return e.isReady && (setTimeout(function () {
				r.YTPSetAbundance(e.opt.abundance)
			}, 300), e.player.playVideo(), jQuery(e.playerEl).css({
				opacity: 1
			}), e.wrapper.css({
				backgroundImage: "none"
			}), e.wrapper.CSSAnimate({
				opacity: e.isAlone ? 1 : e.opt.opacity
			}, e.opt.fadeOnStartTime), jQuery("#controlBar_" + e.id).find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.pause), e.state = 1), this
		},
		togglePlay: function (e) {
			var r = this.get(0);
			return r.isReady && (1 == r.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof e && e(r.state)), this
		},
		stop: function () {
			var e = this.get(0);
			return e.isReady && (jQuery("#controlBar_" + e.id).find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play), e.player.stopVideo()), this
		},
		pause: function () {
			var e = this.get(0);
			return e.isReady && (e.opt.abundance < .2 && this.YTPSetAbundance(.2), e.player.pauseVideo(), e.state = 2), this
		},
		seekTo: function (e) {
			var r = this.get(0);
			return r.isReady && r.player.seekTo(e, !0), this
		},
		setVolume: function (e) {
			var r = this.get(0);
			return r.isReady && (r.opt.vol = e, r.player.setVolume(r.opt.vol), r.volumeBar && r.volumeBar.length && r.volumeBar.updateSliderVal(e)), this
		},
		getVolume: function () {
			var e = this.get(0);
			return e.isReady ? e.player.getVolume() : this
		},
		toggleVolume: function () {
			var e = this.get(0);
			return e.isReady && (e.isMute ? (jQuery.mbBrowser.mobile || this.YTPSetVolume(e.opt.vol), this.YTPUnmute()) : this.YTPMute()), this
		},
		mute: function () {
			var e = this.get(0);
			if (!e.isReady) return this;
			if (e.isMute) return this;
			e.player.mute(), e.isMute = !0, e.player.setVolume(0), e.volumeBar && e.volumeBar.length && 10 < e.volumeBar.width() && e.volumeBar.updateSliderVal(0), jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.unmute), jQuery(e).addClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
			var r = jQuery.Event("YTPMuted");
			return r.time = e.currentTime, e.preventTrigger || jQuery(e).trigger(r), this
		},
		unmute: function () {
			var e = this.get(0);
			if (!e.isReady) return this;
			if (!e.isMute) return this;
			e.player.unMute(), e.isMute = !1, jQuery(e).YTPSetVolume(e.opt.vol), e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(10 < e.opt.vol ? e.opt.vol : 10), jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.mute), jQuery(e).removeClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
			var r = jQuery.Event("YTPUnmuted");
			return r.time = e.currentTime, e.preventTrigger || jQuery(e).trigger(r), this
		},
		applyFilter: function (e, r) {
			var t = this.get(0);
			if (!t.isReady) return this;
			t.filters[e].value = r, t.filtersEnabled && this.YTPEnableFilters()
		},
		applyFilters: function (e) {
			var r = this,
				t = r.get(0);
			if (!t.isReady) return this;
			if (!t.isReady) return jQuery(t).on("YTPReady", function () {
				r.YTPApplyFilters(e)
			}), this;
			for (var a in e) r.YTPApplyFilter(a, e[a]);
			r.trigger("YTPFiltersApplied")
		},
		toggleFilter: function (e, r) {
			var t = this.get(0);
			return t.isReady && (t.filters[e].value ? t.filters[e].value = 0 : t.filters[e].value = r, t.filtersEnabled && jQuery(t).YTPEnableFilters()), this
		},
		toggleFilters: function (e) {
			var r = this.get(0);
			return r.isReady && (r.filtersEnabled ? (jQuery(r).trigger("YTPDisableFilters"), jQuery(r).YTPDisableFilters()) : (jQuery(r).YTPEnableFilters(), jQuery(r).trigger("YTPEnableFilters")), "function" == typeof e && e(r.filtersEnabled)), this
		},
		disableFilters: function () {
			var e = this.get(0);
			if (!e.isReady) return this;
			var r = jQuery(e.playerEl);
			return r.css("-webkit-filter", ""), r.css("filter", ""), e.filtersEnabled = !1, this
		},
		enableFilters: function () {
			var e = this.get(0);
			if (!e.isReady) return this;
			var r = jQuery(e.playerEl),
				t = "";
			for (var a in e.filters) e.filters[a].value && (t += a.replace("_", "-") + "(" + e.filters[a].value + e.filters[a].unit + ") ");
			return r.css("-webkit-filter", t), r.css("filter", t), e.filtersEnabled = !0, this
		},
		removeFilter: function (e, r) {
			var t = this.get(0);
			if (!t.isReady) return this;
			if ("function" == typeof e && (r = e, e = null), e) this.YTPApplyFilter(e, 0), "function" == typeof r && r(e);
			else {
				for (var a in t.filters) this.YTPApplyFilter(a, 0);
				"function" == typeof r && r(a), t.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters)
			}
			var o = jQuery.Event("YTPFiltersApplied");
			return this.trigger(o), this
		},
		getFilters: function () {
			var e = this.get(0);
			return e.isReady ? e.filters : this
		},
		addMask: function (e) {
			var r = this.get(0);
			if (!r.isReady) return this;
			e || (e = r.actualMask);
			var t = jQuery("<img/>").attr("src", e).on("load", function () {
				r.overlay.CSSAnimate({
					opacity: 0
				}, r.opt.fadeOnStartTime, function () {
					r.hasMask = !0, t.remove(), r.overlay.css({
						backgroundImage: "url(" + e + ")",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center center",
						backgroundSize: "cover"
					}), r.overlay.CSSAnimate({
						opacity: 1
					}, r.opt.fadeOnStartTime)
				})
			});
			return this
		},
		removeMask: function () {
			var e = this.get(0);
			return e.isReady && e.overlay.CSSAnimate({
				opacity: 0
			}, e.opt.fadeOnStartTime, function () {
				e.hasMask = !1, e.overlay.css({
					backgroundImage: "",
					backgroundRepeat: "",
					backgroundPosition: "",
					backgroundSize: ""
				}), e.overlay.CSSAnimate({
					opacity: 1
				}, e.opt.fadeOnStartTime)
			}), this
		},
		applyMask: function (t) {
			var a = jQuery(t);
			if (!t.isReady) return this;
			if (a.off("YTPTime.mask"), t.opt.mask)
				if ("string" == typeof t.opt.mask) a.YTPAddMask(t.opt.mask), t.actualMask = t.opt.mask;
				else if ("object" == typeof t.opt.mask) {
				for (var e in t.opt.mask)
					if (t.opt.mask[e]) jQuery("<img/>").attr("src", t.opt.mask[e]);
				t.opt.mask[0] && a.YTPAddMask(t.opt.mask[0]), a.on("YTPTime.mask", function (e) {
					for (var r in t.opt.mask) e.time == r && (t.opt.mask[r] ? (a.YTPAddMask(t.opt.mask[r]), t.actualMask = t.opt.mask[r]) : a.YTPRemoveMask())
				})
			}
		},
		toggleMask: function () {
			var e = this.get(0);
			if (!e.isReady) return this;
			var r = jQuery(e);
			return e.hasMask ? r.YTPRemoveMask() : r.YTPAddMask(), this
		},
		manageProgress: function () {
			var e = this.get(0),
				r = jQuery("#controlBar_" + e.id),
				t = r.find(".mb_YTPProgress"),
				a = r.find(".mb_YTPLoaded"),
				o = r.find(".mb_YTPseekbar"),
				n = t.outerWidth(),
				i = Math.floor(e.player.getCurrentTime()),
				l = Math.floor(e.player.getDuration()),
				s = i * n / l,
				u = 100 * e.player.getVideoLoadedFraction();
			return a.css({
				left: 0,
				width: u + "%"
			}), o.css({
				left: 0,
				width: s
			}), {
				totalTime: l,
				currentTime: i
			}
		},
		buildControls: function (YTPlayer) {
			if (jQuery("#controlBar_" + YTPlayer.id).remove(), YTPlayer.opt.showControls) {
				if (YTPlayer.opt.showYTLogo = YTPlayer.opt.showYTLogo || YTPlayer.opt.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
					YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
						whiteSpace: "noWrap",
						position: YTPlayer.isBackground ? "fixed" : "absolute",
						zIndex: YTPlayer.isBackground ? 1e4 : 1e3
					}).hide().on("click", function (e) {
						e.stopPropagation()
					});
					var buttonBar = jQuery("<div/>").addClass("buttonBar"),
						playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlayPause ytpicon").on("click", function (e) {
							e.stopPropagation(), jQuery(YTPlayer).YTPTogglePlay()
						}),
						MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").on("click", function (e) {
							e.stopPropagation(), jQuery(YTPlayer).YTPToggleVolume()
						}),
						volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
							display: "inline-block"
						});
					YTPlayer.volumeBar = volumeBar;
					var idx = jQuery("<span/>").addClass("mb_YTPTime"),
						vURL = YTPlayer.opt.videoURL ? YTPlayer.opt.videoURL : "";
					vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + YTPlayer.opt.videoURL);
					var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function () {
							window.open(vURL, "viewOnYT")
						}),
						onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function (e) {
							e.stopPropagation(), jQuery(YTPlayer).YTPFullscreen(YTPlayer.opt.realfullscreen)
						}),
						progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").on("click", function (e) {
							e.stopPropagation(), timeBar.css({
								width: e.clientX - timeBar.offset().left
							}), YTPlayer.timeW = e.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({
								width: 0
							});
							var r = Math.floor(YTPlayer.player.getDuration());
							YTPlayer.goto = timeBar.outerWidth() * r / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({
								width: 0
							})
						}),
						loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
						timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
					progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), YTPlayer.opt.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
						initialval: YTPlayer.opt.vol,
						scale: 100,
						orientation: "h",
						callback: function (e) {
							0 == e.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(e.value), YTPlayer.isMute || (YTPlayer.opt.vol = e.value)
						}
					})
				}
			} else YTPlayer.controlBar = !1
		},
		checkForState: function () {
			var YTPlayer = this.get(0),
				$YTPlayer = jQuery(YTPlayer);
			clearInterval(YTPlayer.getState);
			var interval = 100;
			if (!jQuery.contains(document, YTPlayer)) return $YTPlayer.YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt);
			jQuery.mbYTPlayer.checkForStart(YTPlayer), YTPlayer.getState = setInterval(function () {
				var $YTPlayer = jQuery(YTPlayer);
				if (YTPlayer.isReady) {
					var prog = jQuery(YTPlayer).YTPManageProgress(),
						stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
					if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.currentTime != prog.currentTime) {
						var YTPEvent = jQuery.Event("YTPTime");
						YTPEvent.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(YTPEvent)
					}
					if (YTPlayer.currentTime = prog.currentTime, YTPlayer.totalTime = YTPlayer.player.getDuration(), 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, YTPlayer.preventTrigger = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause())), YTPlayer.opt.playOnlyIfVisible) {
						var isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage);
						isOnScreen || 1 != YTPlayer.state ? isOnScreen && !YTPlayer.isOnScreen && (YTPlayer.isOnScreen = !0, YTPlayer.player.playVideo()) : (YTPlayer.isOnScreen = !1, $YTPlayer.YTPPause())
					}
					if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar.length && 400 < YTPlayer.controlBar.outerWidth() && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 0 < YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - .5) < YTPlayer.player.getCurrentTime() || 0 < stopAt && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
						if (YTPlayer.isEnded) return;
						if (YTPlayer.isEnded = !0, setTimeout(function () {
								YTPlayer.isEnded = !1
							}, 1e3), YTPlayer.isList) {
							if (!YTPlayer.opt.loop || 0 < YTPlayer.opt.loop && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1) {
								YTPlayer.player.loopTime = void 0, clearInterval(YTPlayer.getState);
								var YTPEnd = jQuery.Event("YTPEnd");
								return YTPEnd.time = YTPlayer.currentTime, void jQuery(YTPlayer).trigger(YTPEnd)
							}
						} else if (!YTPlayer.opt.loop || 0 < YTPlayer.opt.loop && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1) {
							YTPlayer.player.loopTime = void 0, YTPlayer.state = 2;
							var bgndURL = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
							return YTPlayer.opt.containment.css({
								background: bgndURL,
								backgroundSize: "cover"
							}), jQuery(YTPlayer).YTPPause(), void YTPlayer.wrapper.CSSAnimate({
								opacity: 0
							}, YTPlayer.opt.fadeOnStartTime, function () {
								YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
								var e = jQuery.Event("YTPEnd");
								e.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(e), YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0);
								var r = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
								YTPlayer.opt.containment.css({
									background: r,
									backgroundSize: "cover"
								})
							})
						}
						YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1, YTPlayer.opt.startAt = YTPlayer.opt.startAt || 1, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0)
					}
				}
			}, interval)
		},
		checkForStart: function (YTPlayer) {
			var $YTPlayer = jQuery(YTPlayer);
			if (jQuery.contains(document, YTPlayer)) {
				if (jQuery.mbYTPlayer.buildControls(YTPlayer), YTPlayer.overlay)
					if (YTPlayer.opt.addRaster) {
						var classN = "dot" == YTPlayer.opt.addRaster ? "raster-dot" : "raster";
						YTPlayer.overlay.addClass(YTPlayer.isRetina ? classN + " retina" : classN)
					} else YTPlayer.overlay.removeClass(function (e, r) {
						var t = r.split(" "),
							a = [];
						return jQuery.each(t, function (e, r) {
							/raster.*/.test(r) && a.push(r)
						}), a.push("retina"), a.join(" ")
					});
				YTPlayer.preventTrigger = !0, YTPlayer.state = 2, YTPlayer.preventTrigger = !0, YTPlayer.player.mute(), YTPlayer.player.playVideo(), YTPlayer.isStarting = !0;
				var startAt = YTPlayer.start_from_last ? YTPlayer.start_from_last : YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
				return YTPlayer.preventTrigger = !0, YTPlayer.checkForStartAt = setInterval(function () {
					YTPlayer.player.mute(), YTPlayer.player.seekTo(startAt, !0);
					var canPlayVideo = YTPlayer.player.getVideoLoadedFraction() >= startAt / YTPlayer.player.getDuration();
					if (0 < YTPlayer.player.getDuration() && YTPlayer.player.getCurrentTime() >= startAt && canPlayVideo) {
						YTPlayer.start_from_last = null, YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause(), clearInterval(YTPlayer.checkForStartAt), "function" == typeof YTPlayer.opt.onReady && YTPlayer.opt.onReady(YTPlayer), YTPlayer.isReady = !0, $YTPlayer.YTPRemoveFilter(), YTPlayer.opt.addFilters ? $YTPlayer.YTPApplyFilters(YTPlayer.opt.addFilters) : $YTPlayer.YTPApplyFilters(), $YTPlayer.YTPEnableFilters();
						var YTPready = jQuery.Event("YTPReady");
						if (YTPready.time = YTPlayer.currentTime, $YTPlayer.trigger(YTPready), YTPlayer.state = 2, YTPlayer.opt.mute ? YTPlayer.player.mute() : (YTPlayer.player.unMute(), YTPlayer.opt.autoPlay && console.debug("To make the video 'auto-play' you must mute the audio according with the new vendor policy")), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) ? _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]) : "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()), YTPlayer.opt.autoPlay) {
							var YTPStart = jQuery.Event("YTPStart");
							YTPStart.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(YTPStart), YTPlayer.isStarting = !1, "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && jQuery("body").one("mousedown.YTPstart", function () {
								$YTPlayer.YTPPlay()
							}), $YTPlayer.YTPPlay()
						} else YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause(), YTPlayer.start_from_last && YTPlayer.player.seekTo(startAt, !0), setTimeout(function () {
							YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause(), console.debug("YTPPause"), YTPlayer.isPlayer || (YTPlayer.opt.coverImage ? (YTPlayer.wrapper.css({
								opacity: 0
							}), setTimeout(function () {
								var e = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
								YTPlayer.wrapper.css({
									background: e,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat"
								})
							}, YTPlayer.opt.fadeOnStartTime)) : (jQuery(YTPlayer.playerEl).CSSAnimate({
								opacity: 1
							}, YTPlayer.opt.fadeOnStartTime), YTPlayer.wrapper.CSSAnimate({
								opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
							}, YTPlayer.opt.fadeOnStartTime))), YTPlayer.isStarting = !1
						}, 500), YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
						YTPlayer.isPlayer && !YTPlayer.opt.autoPlay && YTPlayer.loading && YTPlayer.loading.length && (YTPlayer.loading.html("Ready"), setTimeout(function () {
							YTPlayer.loading.fadeOut()
						}, 100)), YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.slideDown(1e3)
					}
					"mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && (YTPlayer.player.playVideo(), 0 <= startAt && YTPlayer.player.seekTo(startAt, !0))
				}, 100), $YTPlayer
			}
			$YTPlayer.YTPPlayerDestroy()
		},
		getTime: function () {
			var e = this.get(0);
			return jQuery.mbYTPlayer.formatTime(e.currentTime)
		},
		getTotalTime: function (e) {
			var r = this.get(0);
			return jQuery.mbYTPlayer.formatTime(r.totalTime)
		},
		formatTime: function (e) {
			var r = Math.floor(e / 60),
				t = Math.floor(e - 60 * r);
			return (r <= 9 ? "0" + r : r) + " : " + (t <= 9 ? "0" + t : t)
		},
		setAnchor: function (e) {
			this.optimizeDisplay(e)
		},
		getAnchor: function () {
			return this.get(0).opt.anchor
		},
		setAbundance: function (e, r) {
			var t = this.get(0);
			return r && (t.opt.abundance = e), this.optimizeDisplay(t.opt.anchor, e), this
		},
		getAbundance: function () {
			return this.get(0).opt.abundance
		},
		setOption: function (e, r) {
			var t = this.get(0);
			return t.opt[e] = r, this
		}
	}, jQuery.fn.optimizeDisplay = function (anchor, abundanceX) {
		var YTPlayer = this.get(0),
			vid = {},
			el = YTPlayer.wrapper,
			iframe = jQuery(YTPlayer.playerEl);
		YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor, YTPlayer.opt.anchor = "undefined " != typeof YTPlayer.opt.anchor ? YTPlayer.opt.anchor : "center,center";
		var YTPAlign = YTPlayer.opt.anchor.split(","),
			ab = abundanceX || YTPlayer.opt.abundance;
		if (YTPlayer.opt.optimizeDisplay) {
			var abundance = el.height() * ab,
				win = {};
			win.width = el.outerWidth(), win.height = el.outerHeight() + abundance, YTPlayer.opt.ratio = "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio, YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio), vid.width = win.width + abundance, vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio), vid.marginTop = Math.ceil(-(vid.height - win.height) / 2), vid.marginLeft = -abundance / 2;
			var lowest = vid.height < win.height;
			for (var a in lowest && (vid.height = win.height + abundance, vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio), vid.marginTop = -abundance / 2, vid.marginLeft = Math.ceil(-(vid.width - win.width) / 2)), YTPAlign)
				if (YTPAlign.hasOwnProperty(a)) {
					var al = YTPAlign[a].replace(/ /g, "");
					switch (al) {
						case "top":
							vid.marginTop = -abundance / 2;
							break;
						case "bottom":
							vid.marginTop = Math.ceil(-(vid.height - win.height) - abundance / 2);
							break;
						case "left":
							vid.marginLeft = -abundance / 2;
							break;
						case "right":
							vid.marginLeft = Math.ceil(-(vid.width - win.width) + abundance / 2);
							break;
						default:
							vid.width > win.width && (vid.marginLeft = -(vid.width - win.width) / 2 + abundance / 2)
					}
				}
		} else vid.width = "100%", vid.height = "100%", vid.marginTop = 0, vid.marginLeft = 0;
		iframe.css({
			width: vid.width,
			height: vid.height,
			marginTop: vid.marginTop,
			marginLeft: vid.marginLeft,
			maxWidth: "initial"
		})
	}, jQuery.shuffle = function (e) {
		for (var r = e.slice(), t = r.length, a = t; a--;) {
			var o = parseInt(Math.random() * t),
				n = r[a];
			r[a] = r[o], r[o] = n
		}
		return r
	}, jQuery.fn.unselectable = function () {
		return this.each(function () {
			jQuery(this).css({
				"-moz-user-select": "none",
				"-webkit-user-select": "none",
				"user-select": "none"
			}).attr("unselectable", "on")
		})
	}, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPCheckForState = jQuery.mbYTPlayer.checkForState, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPGetPlaylistID = jQuery.mbYTPlayer.getPlaylistID, jQuery.fn.YTPChangeVideo = jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeVideo, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPGetVolume = jQuery.mbYTPlayer.getVolume, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters, jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime, jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime, jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask, jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask, jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask, jQuery.fn.YTPGetAbundance = jQuery.mbYTPlayer.getAbundance, jQuery.fn.YTPSetAbundance = jQuery.mbYTPlayer.setAbundance, jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor, jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor, jQuery.fn.YTPSetOption = jQuery.mbYTPlayer.setOption
}(jQuery, ytp);
var nAgt = navigator.userAgent;

function isTouchSupported() {
	var e = nAgt.msMaxTouchPoints,
		r = "ontouchstart" in document.createElement("div");
	return !(!e && !r)
}
jQuery.browser = jQuery.browser || {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.edge = !1, jQuery.browser.ua = nAgt;
var getOS = function () {
		var e = {
			version: "Unknown version",
			name: "Unknown OS"
		};
		return -1 != navigator.appVersion.indexOf("Win") && (e.name = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && navigator.appVersion.indexOf("Mobile") < 0 && (e.name = "Mac"), -1 != navigator.appVersion.indexOf("Linux") && (e.name = "Linux"), /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (e.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1], e.version = e.version.replace(/_/g, ".").substring(0, 5)), /Windows/.test(nAgt) && (e.version = "Unknown.Unknown"), /Windows NT 5.1/.test(nAgt) && (e.version = "5.1"), /Windows NT 6.0/.test(nAgt) && (e.version = "6.0"), /Windows NT 6.1/.test(nAgt) && (e.version = "6.1"), /Windows NT 6.2/.test(nAgt) && (e.version = "6.2"), /Windows NT 10.0/.test(nAgt) && (e.version = "10.0"), /Linux/.test(nAgt) && /Linux/.test(nAgt) && (e.version = "Unknown.Unknown"), e.name = e.name.toLowerCase(), e.major_version = "Unknown", e.minor_version = "Unknown", "Unknown.Unknown" != e.version && (e.major_version = parseFloat(e.version.split(".")[0]), e.minor_version = parseFloat(e.version.split(".")[1])), e
	},
	nameOffset, verOffset, ix;
if (jQuery.browser.os = getOS(), jQuery.browser.hasTouch = isTouchSupported(), jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10), -1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
	jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
	var start = nAgt.indexOf("rv:") + 3,
		end = start + 4;
	jQuery.browser.fullVersion = nAgt.substring(start, end)
} else -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));

function uncamel(e) {
	return e.replace(/([A-Z])/g, function (e) {
		return "-" + e.toLowerCase()
	})
}

function setUnit(e, r) {
	return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + r : e
}

function setFilter(e, r, t) {
	var a = uncamel(r),
		o = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
	e[o + "filter"] = e[o + "filter"] || "", t = setUnit(t > jQuery.CSS.filters[r].max ? jQuery.CSS.filters[r].max : t, jQuery.CSS.filters[r].unit), e[o + "filter"] += a + "(" + t + ") ", delete e[r]
} - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion, jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(), jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), jQuery.mbBrowser = jQuery.browser, jQuery.browser.versionCompare = function (e, r) {
	if ("stringstring" != typeof e + typeof r) return !1;
	for (var t = e.split("."), a = r.split("."), o = 0, n = Math.max(t.length, a.length); o < n; o++) {
		if (t[o] && !a[o] && 0 < parseInt(t[o]) || parseInt(t[o]) > parseInt(a[o])) return 1;
		if (a[o] && !t[o] && 0 < parseInt(a[o]) || parseInt(t[o]) < parseInt(a[o])) return -1
	}
	return 0
}, jQuery.support.CSStransition = function () {
	var e = (document.body || document.documentElement).style;
	return void 0 !== e.transition || void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.MsTransition || void 0 !== e.OTransition
}(), jQuery.CSS = {
	name: "mb.CSSAnimate",
	author: "Matteo Bicocchi",
	version: "2.0.0",
	transitionEnd: "transitionEnd",
	sfx: "",
	filters: {
		blur: {
			min: 0,
			max: 100,
			unit: "px"
		},
		brightness: {
			min: 0,
			max: 400,
			unit: "%"
		},
		contrast: {
			min: 0,
			max: 400,
			unit: "%"
		},
		grayscale: {
			min: 0,
			max: 100,
			unit: "%"
		},
		hueRotate: {
			min: 0,
			max: 360,
			unit: "deg"
		},
		invert: {
			min: 0,
			max: 100,
			unit: "%"
		},
		saturate: {
			min: 0,
			max: 400,
			unit: "%"
		},
		sepia: {
			min: 0,
			max: 100,
			unit: "%"
		}
	},
	normalizeCss: function (e) {
		var r = jQuery.extend(!0, {}, e);
		for (var t in jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-"), jQuery.CSS.sfx = "", r) {
			if ("transform" === t && (r[jQuery.CSS.sfx + "transform"] = r[t], delete r[t]), "transform-origin" === t && (r[jQuery.CSS.sfx + "transform-origin"] = e[t], delete r[t]), "filter" !== t || jQuery.browser.mozilla || (r[jQuery.CSS.sfx + "filter"] = e[t], delete r[t]), "blur" === t && setFilter(r, "blur", e[t]), "brightness" === t && setFilter(r, "brightness", e[t]), "contrast" === t && setFilter(r, "contrast", e[t]), "grayscale" === t && setFilter(r, "grayscale", e[t]), "hueRotate" === t && setFilter(r, "hueRotate", e[t]), "invert" === t && setFilter(r, "invert", e[t]), "saturate" === t && setFilter(r, "saturate", e[t]), "sepia" === t && setFilter(r, "sepia", e[t]), "x" === t) {
				var a = jQuery.CSS.sfx + "transform";
				r[a] = r[a] || "", r[a] += " translateX(" + setUnit(e[t], "px") + ")", delete r[t]
			}
			"y" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " translateY(" + setUnit(e[t], "px") + ")", delete r[t]), "z" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " translateZ(" + setUnit(e[t], "px") + ")", delete r[t]), "rotate" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotate(" + setUnit(e[t], "deg") + ")", delete r[t]), "rotateX" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotateX(" + setUnit(e[t], "deg") + ")", delete r[t]), "rotateY" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotateY(" + setUnit(e[t], "deg") + ")", delete r[t]), "rotateZ" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotateZ(" + setUnit(e[t], "deg") + ")", delete r[t]), "scale" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scale(" + setUnit(e[t], "") + ")", delete r[t]), "scaleX" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scaleX(" + setUnit(e[t], "") + ")", delete r[t]), "scaleY" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scaleY(" + setUnit(e[t], "") + ")", delete r[t]), "scaleZ" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scaleZ(" + setUnit(e[t], "") + ")", delete r[t]), "skew" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " skew(" + setUnit(e[t], "deg") + ")", delete r[t]), "skewX" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " skewX(" + setUnit(e[t], "deg") + ")", delete r[t]), "skewY" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " skewY(" + setUnit(e[t], "deg") + ")", delete r[t]), "perspective" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " perspective(" + setUnit(e[t], "px") + ")", delete r[t])
		}
		return r
	},
	getProp: function (e) {
		var r, t = [];
		for (r in e) t.indexOf(r) < 0 && t.push(uncamel(r));
		return t.join(",")
	},
	animate: function (l, s, u, y, d) {
		return this.each(function () {
			function e() {
				r.called = !0, r.CSSAIsRunning = !1, t.off(jQuery.CSS.transitionEnd + "." + r.id), clearTimeout(r.timeout), t.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof d && d.apply(r), "function" == typeof r.CSSqueue && (r.CSSqueue(), r.CSSqueue = null)
			}
			var r = this,
				t = jQuery(this);
			r.id = r.id || "CSSA_" + (new Date).getTime();
			var a = a || {
				type: "noEvent"
			};
			if (r.CSSAIsRunning && r.eventType == a.type && !jQuery.browser.msie && jQuery.browser.version <= 9) r.CSSqueue = function () {
				t.CSSAnimate(l, s, u, y, d)
			};
			else if (r.CSSqueue = null, r.eventType = a.type, 0 !== t.length && l) {
				if (l = jQuery.normalizeCss(l), r.CSSAIsRunning = !0, "function" == typeof s && (d = s, s = jQuery.fx.speeds._default), "function" == typeof u && (y = u, u = 0), "string" == typeof u && (d = u, u = 0), "function" == typeof y && (d = y, y = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof s)
					for (var o in jQuery.fx.speeds) {
						if (s == o) {
							s = jQuery.fx.speeds[o];
							break
						}
						s = jQuery.fx.speeds._default
					}
				if (s || (s = jQuery.fx.speeds._default), "string" == typeof d && (y = d, d = null), jQuery.support.CSStransition) {
					var n = {
						default: "ease",
						in: "ease-in",
						out: "ease-out",
						"in-out": "ease-in-out",
						snap: "cubic-bezier(0,1,.5,1)",
						easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
						easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
						easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
						easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
						easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
						easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
						easeOutExpo: "cubic-bezier(.19,1,.22,1)",
						easeInOutExpo: "cubic-bezier(1,0,0,1)",
						easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
						easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
						easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
						easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
						easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
						easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
						easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
						easeOutQuint: "cubic-bezier(.23,1,.32,1)",
						easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
						easeInSine: "cubic-bezier(.47,0,.745,.715)",
						easeOutSine: "cubic-bezier(.39,.575,.565,1)",
						easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
						easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
						easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
						easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
					};
					n[y] && (y = n[y]), t.off(jQuery.CSS.transitionEnd + "." + r.id), n = jQuery.CSS.getProp(l);
					var i = {};
					jQuery.extend(i, l), i[jQuery.CSS.sfx + "transition-property"] = n, i[jQuery.CSS.sfx + "transition-duration"] = s + "ms", i[jQuery.CSS.sfx + "transition-delay"] = u + "ms", i[jQuery.CSS.sfx + "transition-timing-function"] = y, setTimeout(function () {
						t.one(jQuery.CSS.transitionEnd + "." + r.id, e), t.css(i)
					}, 1), r.timeout = setTimeout(function () {
						r.called || !d ? (r.called = !1, r.CSSAIsRunning = !1) : (t.css(jQuery.CSS.sfx + "transition", ""), d.apply(r), r.CSSAIsRunning = !1, "function" == typeof r.CSSqueue && (r.CSSqueue(), r.CSSqueue = null))
					}, s + u + 10)
				} else {
					for (n in l) "transform" === n && delete l[n], "filter" === n && delete l[n], "transform-origin" === n && delete l[n], "auto" === l[n] && delete l[n], "x" === n && (a = l[n], l[o = "left"] = a, delete l[n]), "y" === n && (a = l[n], l[o = "top"] = a, delete l[n]), "-ms-transform" !== n && "-ms-filter" !== n || delete l[n];
					t.delay(u).animate(l, s, d)
				}
			}
		})
	}
}, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function (t) {
	return this.each(function () {
		var e = jQuery(this),
			r = jQuery.normalizeCss(t);
		e.css(r)
	})
};
var nAgt = navigator.userAgent;

function isTouchSupported() {
	var e = nAgt.msMaxTouchPoints,
		r = "ontouchstart" in document.createElement("div");
	return !(!e && !r)
}
jQuery.browser = jQuery.browser || {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.edge = !1, jQuery.browser.ua = nAgt;
var getOS = function () {
		var e = {
			version: "Unknown version",
			name: "Unknown OS"
		};
		return -1 != navigator.appVersion.indexOf("Win") && (e.name = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && navigator.appVersion.indexOf("Mobile") < 0 && (e.name = "Mac"), -1 != navigator.appVersion.indexOf("Linux") && (e.name = "Linux"), /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (e.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1], e.version = e.version.replace(/_/g, ".").substring(0, 5)), /Windows/.test(nAgt) && (e.version = "Unknown.Unknown"), /Windows NT 5.1/.test(nAgt) && (e.version = "5.1"), /Windows NT 6.0/.test(nAgt) && (e.version = "6.0"), /Windows NT 6.1/.test(nAgt) && (e.version = "6.1"), /Windows NT 6.2/.test(nAgt) && (e.version = "6.2"), /Windows NT 10.0/.test(nAgt) && (e.version = "10.0"), /Linux/.test(nAgt) && /Linux/.test(nAgt) && (e.version = "Unknown.Unknown"), e.name = e.name.toLowerCase(), e.major_version = "Unknown", e.minor_version = "Unknown", "Unknown.Unknown" != e.version && (e.major_version = parseFloat(e.version.split(".")[0]), e.minor_version = parseFloat(e.version.split(".")[1])), e
	},
	nameOffset, verOffset, ix;
if (jQuery.browser.os = getOS(), jQuery.browser.hasTouch = isTouchSupported(), jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10), -1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
	jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
	var start = nAgt.indexOf("rv:") + 3,
		end = start + 4;
	jQuery.browser.fullVersion = nAgt.substring(start, end)
} else -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion, jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(), jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), jQuery.mbBrowser = jQuery.browser, jQuery.browser.versionCompare = function (e, r) {
		if ("stringstring" != typeof e + typeof r) return !1;
		for (var t = e.split("."), a = r.split("."), o = 0, n = Math.max(t.length, a.length); o < n; o++) {
			if (t[o] && !a[o] && 0 < parseInt(t[o]) || parseInt(t[o]) > parseInt(a[o])) return 1;
			if (a[o] && !t[o] && 0 < parseInt(a[o]) || parseInt(t[o]) < parseInt(a[o])) return -1
		}
		return 0
	},
	function (o) {
		o.simpleSlider = {
			defaults: {
				initialval: 0,
				scale: 100,
				orientation: "h",
				readonly: !1,
				callback: !1
			},
			events: {
				start: o.browser.mobile ? "touchstart" : "mousedown",
				end: o.browser.mobile ? "touchend" : "mouseup",
				move: o.browser.mobile ? "touchmove" : "mousemove"
			},
			init: function (a) {
				return this.each(function () {
					var r = this,
						t = o(r);
					t.addClass("simpleSlider"), r.opt = {}, o.extend(r.opt, o.simpleSlider.defaults, a), o.extend(r.opt, t.data());
					var e = "h" == r.opt.orientation ? "horizontal" : "vertical";
					e = o("<div/>").addClass("level").addClass(e), t.prepend(e), r.level = e, t.css({
						cursor: "default"
					}), "auto" == r.opt.scale && (r.opt.scale = o(r).outerWidth()), t.updateSliderVal(), r.opt.readonly || (t.on(o.simpleSlider.events.start, function (e) {
						o.browser.mobile && (e = e.changedTouches[0]), r.canSlide = !0, t.updateSliderVal(e), "h" == r.opt.orientation ? t.css({
							cursor: "col-resize"
						}) : t.css({
							cursor: "row-resize"
						}), o.browser.mobile || (e.preventDefault(), e.stopPropagation())
					}), o(document).on(o.simpleSlider.events.move, function (e) {
						o.browser.mobile && (e = e.changedTouches[0]), r.canSlide && (o(document).css({
							cursor: "default"
						}), t.updateSliderVal(e), o.browser.mobile || (e.preventDefault(), e.stopPropagation()))
					}).on(o.simpleSlider.events.end, function () {
						o(document).css({
							cursor: "auto"
						}), r.canSlide = !1, t.css({
							cursor: "auto"
						})
					}))
				})
			},
			updateSliderVal: function (e) {
				var r = this.get(0);
				if (r.opt) {
					r.opt.initialval = "number" == typeof r.opt.initialval ? r.opt.initialval : r.opt.initialval(r);
					var t = o(r).outerWidth(),
						a = o(r).outerHeight();
					r.x = "object" == typeof e ? e.clientX + document.body.scrollLeft - this.offset().left : "number" == typeof e ? e * t / r.opt.scale : r.opt.initialval * t / r.opt.scale, r.y = "object" == typeof e ? e.clientY + document.body.scrollTop - this.offset().top : "number" == typeof e ? (r.opt.scale - r.opt.initialval - e) * a / r.opt.scale : r.opt.initialval * a / r.opt.scale, r.y = this.outerHeight() - r.y, r.scaleX = r.x * r.opt.scale / t, r.scaleY = r.y * r.opt.scale / a, r.outOfRangeX = r.scaleX > r.opt.scale ? r.scaleX - r.opt.scale : r.scaleX < 0 ? r.scaleX : 0, r.outOfRangeY = r.scaleY > r.opt.scale ? r.scaleY - r.opt.scale : r.scaleY < 0 ? r.scaleY : 0, r.outOfRange = "h" == r.opt.orientation ? r.outOfRangeX : r.outOfRangeY, r.value = void 0 !== e ? "h" == r.opt.orientation ? r.x >= this.outerWidth() ? r.opt.scale : r.x <= 0 ? 0 : r.scaleX : r.y >= this.outerHeight() ? r.opt.scale : r.y <= 0 ? 0 : r.scaleY : "h" == r.opt.orientation ? r.scaleX : r.scaleY, "h" == r.opt.orientation ? r.level.width(Math.floor(100 * r.x / t) + "%") : r.level.height(Math.floor(100 * r.y / a)), "function" == typeof r.opt.callback && r.opt.callback(r)
				}
			}
		}, o.fn.simpleSlider = o.simpleSlider.init, o.fn.updateSliderVal = o.simpleSlider.updateSliderVal
	}(jQuery),
	function (r) {
		r.mbCookie = {
			set: function (e, r, t, a) {
				"object" == typeof r && (r = JSON.stringify(r)), a = a ? "; domain=" + a : "";
				var o = new Date,
					n = "";
				0 < t && (o.setTime(o.getTime() + 864e5 * t), n = "; expires=" + o.toGMTString()), document.cookie = e + "=" + r + n + "; path=/" + a
			},
			get: function (r) {
				r += "=";
				for (var e = document.cookie.split(";"), t = 0; t < e.length; t++) {
					for (var a = e[t];
						" " == a.charAt(0);) a = a.substring(1, a.length);
					if (0 == a.indexOf(r)) try {
						return JSON.parse(a.substring(r.length, a.length))
					} catch (e) {
						return a.substring(r.length, a.length)
					}
				}
				return null
			},
			remove: function (e) {
				r.mbCookie.set(e, "", -1)
			}
		}, r.mbStorage = {
			set: function (e, r) {
				"object" == typeof r && (r = JSON.stringify(r)), localStorage.setItem(e, r)
			},
			get: function (r) {
				if (!localStorage[r]) return null;
				try {
					return JSON.parse(localStorage[r])
				} catch (e) {
					return localStorage[r]
				}
			},
			remove: function (e) {
				e ? localStorage.removeItem(e) : localStorage.clear()
			}
		}
	}(jQuery);

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
! function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (a) {
	var b, c, d, e, f, g, h = "Close",
		i = "BeforeClose",
		j = "AfterClose",
		k = "BeforeAppend",
		l = "MarkupParse",
		m = "Open",
		n = "Change",
		o = "mfp",
		p = "." + o,
		q = "mfp-ready",
		r = "mfp-removing",
		s = "mfp-prevent-close",
		t = function () {},
		u = !!window.jQuery,
		v = a(window),
		w = function (a, c) {
			b.ev.on(o + a + p, c)
		},
		x = function (b, c, d, e) {
			var f = document.createElement("div");
			return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
		},
		y = function (c, d) {
			b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
		},
		z = function (c) {
			return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
		},
		A = function () {
			a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
		},
		B = function () {
			var a = document.createElement("p").style,
				b = ["ms", "O", "Moz", "Webkit"];
			if (void 0 !== a.transition) return !0;
			for (; b.length;)
				if (b.pop() + "Transition" in a) return !0;
			return !1
		};
	t.prototype = {
		constructor: t,
		init: function () {
			var c = navigator.appVersion;
			b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
		},
		open: function (c) {
			var e;
			if (c.isObj === !1) {
				b.items = c.items.toArray(), b.index = 0;
				var g, h = c.items;
				for (e = 0; e < h.length; e++)
					if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
						b.index = e;
						break
					}
			} else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
			if (b.isOpen) return void b.updateItemHTML();
			b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
				b.close()
			}), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
				b._checkIfClose(a.target) && b.close()
			}), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
			var i = a.magnificPopup.modules;
			for (e = 0; e < i.length; e++) {
				var j = i[e];
				j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
			}
			y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
				c.close_replaceWith = z(d.type)
			}), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
				overflow: b.st.overflowY,
				overflowX: "hidden",
				overflowY: b.st.overflowY
			}) : b.wrap.css({
				top: v.scrollTop(),
				position: "absolute"
			}), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
				height: d.height(),
				position: "absolute"
			}), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
				27 === a.keyCode && b.close()
			}), v.on("resize" + p, function () {
				b.updateSize()
			}), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
			var k = b.wH = v.height(),
				n = {};
			if (b.fixedContentPos && b._hasScrollBar(k)) {
				var o = b._getScrollbarSize();
				o && (n.marginRight = o)
			}
			b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
			var r = b.st.mainClass;
			return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
				b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
			}, 16), b.isOpen = !0, b.updateSize(k), y(m), c
		},
		close: function () {
			b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
				b._close()
			}, b.st.removalDelay)) : b._close())
		},
		_close: function () {
			y(h);
			var c = r + " " + q + " ";
			if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
				var e = {
					marginRight: ""
				};
				b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
			}
			d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
		},
		updateSize: function (a) {
			if (b.isIOS) {
				var c = document.documentElement.clientWidth / window.innerWidth,
					d = window.innerHeight * c;
				b.wrap.css("height", d), b.wH = d
			} else b.wH = a || v.height();
			b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
		},
		updateItemHTML: function () {
			var c = b.items[b.index];
			b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
			var d = c.type;
			if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
				var f = b.st[d] ? b.st[d].markup : !1;
				y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
			}
			e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
			var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
			b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
		},
		appendContent: function (a, c) {
			b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
		},
		parseEl: function (c) {
			var d, e = b.items[c];
			if (e.tagName ? e = {
					el: a(e)
				} : (d = e.type, e = {
					data: e,
					src: e.src
				}), e.el) {
				for (var f = b.types, g = 0; g < f.length; g++)
					if (e.el.hasClass("mfp-" + f[g])) {
						d = f[g];
						break
					} e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
			}
			return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
		},
		addGroup: function (a, c) {
			var d = function (d) {
				d.mfpEl = this, b._openClick(d, a, c)
			};
			c || (c = {});
			var e = "click.magnificPopup";
			c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
		},
		_openClick: function (c, d, e) {
			var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
			if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
				var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
				if (g)
					if (a.isFunction(g)) {
						if (!g.call(b)) return !0
					} else if (v.width() < g) return !0;
				c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
			}
		},
		updateStatus: function (a, d) {
			if (b.preloader) {
				c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
				var e = {
					status: a,
					text: d
				};
				y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
					a.stopImmediatePropagation()
				}), b.container.addClass("mfp-s-" + a), c = a
			}
		},
		_checkIfClose: function (c) {
			if (!a(c).hasClass(s)) {
				var d = b.st.closeOnContentClick,
					e = b.st.closeOnBgClick;
				if (d && e) return !0;
				if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
				if (c === b.content[0] || a.contains(b.content[0], c)) {
					if (d) return !0
				} else if (e && a.contains(document, c)) return !0;
				return !1
			}
		},
		_addClassToMFP: function (a) {
			b.bgOverlay.addClass(a), b.wrap.addClass(a)
		},
		_removeClassFromMFP: function (a) {
			this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
		},
		_hasScrollBar: function (a) {
			return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
		},
		_setFocus: function () {
			(b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
		},
		_onFocusIn: function (c) {
			return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
		},
		_parseMarkup: function (b, c, d) {
			var e;
			d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
				if (void 0 === d || d === !1) return !0;
				if (e = c.split("_"), e.length > 1) {
					var f = b.find(p + "-" + e[0]);
					if (f.length > 0) {
						var g = e[1];
						"replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
					}
				} else b.find(p + "-" + c).html(d)
			})
		},
		_getScrollbarSize: function () {
			if (void 0 === b.scrollbarSize) {
				var a = document.createElement("div");
				a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
			}
			return b.scrollbarSize
		}
	}, a.magnificPopup = {
		instance: null,
		proto: t.prototype,
		modules: [],
		open: function (b, c) {
			return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
		},
		close: function () {
			return a.magnificPopup.instance && a.magnificPopup.instance.close()
		},
		registerModule: function (b, c) {
			c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
		},
		defaults: {
			disableOn: 0,
			key: null,
			midClick: !1,
			mainClass: "",
			preloader: !0,
			focus: "",
			closeOnContentClick: !1,
			closeOnBgClick: !0,
			closeBtnInside: !0,
			showCloseBtn: !0,
			enableEscapeKey: !0,
			modal: !1,
			alignTop: !1,
			removalDelay: 0,
			prependTo: null,
			fixedContentPos: "auto",
			fixedBgPos: "auto",
			overflowY: "auto",
			closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
			tClose: "Close (Esc)",
			tLoading: "Loading...",
			autoFocusLast: !0
		}
	}, a.fn.magnificPopup = function (c) {
		A();
		var d = a(this);
		if ("string" == typeof c)
			if ("open" === c) {
				var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
					g = parseInt(arguments[1], 10) || 0;
				f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
					mfpEl: e
				}, d, f)
			} else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
		else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
		return d
	};
	var C, D, E, F = "inline",
		G = function () {
			E && (D.after(E.addClass(C)).detach(), E = null)
		};
	a.magnificPopup.registerModule(F, {
		options: {
			hiddenClass: "hide",
			markup: "",
			tNotFound: "Content not found"
		},
		proto: {
			initInline: function () {
				b.types.push(F), w(h + "." + F, function () {
					G()
				})
			},
			getInline: function (c, d) {
				if (G(), c.src) {
					var e = b.st.inline,
						f = a(c.src);
					if (f.length) {
						var g = f[0].parentNode;
						g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
					} else b.updateStatus("error", e.tNotFound), f = a("<div>");
					return c.inlineElement = f, f
				}
				return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
			}
		}
	});
	var H, I = "ajax",
		J = function () {
			H && a(document.body).removeClass(H)
		},
		K = function () {
			J(), b.req && b.req.abort()
		};
	a.magnificPopup.registerModule(I, {
		options: {
			settings: null,
			cursor: "mfp-ajax-cur",
			tError: '<a href="%url%">The content</a> could not be loaded.'
		},
		proto: {
			initAjax: function () {
				b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
			},
			getAjax: function (c) {
				H && a(document.body).addClass(H), b.updateStatus("loading");
				var d = a.extend({
					url: c.src,
					success: function (d, e, f) {
						var g = {
							data: d,
							xhr: f
						};
						y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
							b.wrap.addClass(q)
						}, 16), b.updateStatus("ready"), y("AjaxContentAdded")
					},
					error: function () {
						J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
					}
				}, b.st.ajax.settings);
				return b.req = a.ajax(d), ""
			}
		}
	});
	var L, M = function (c) {
		if (c.data && void 0 !== c.data.title) return c.data.title;
		var d = b.st.image.titleSrc;
		if (d) {
			if (a.isFunction(d)) return d.call(b, c);
			if (c.el) return c.el.attr(d) || ""
		}
		return ""
	};
	a.magnificPopup.registerModule("image", {
		options: {
			markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
			cursor: "mfp-zoom-out-cur",
			titleSrc: "title",
			verticalFit: !0,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		},
		proto: {
			initImage: function () {
				var c = b.st.image,
					d = ".image";
				b.types.push("image"), w(m + d, function () {
					"image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
				}), w(h + d, function () {
					c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
				}), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
			},
			resizeImage: function () {
				var a = b.currItem;
				if (a && a.img && b.st.image.verticalFit) {
					var c = 0;
					b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
				}
			},
			_onImageHasSize: function (a) {
				a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
			},
			findImageSize: function (a) {
				var c = 0,
					d = a.img[0],
					e = function (f) {
						L && clearInterval(L), L = setInterval(function () {
							return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
						}, f)
					};
				e(1)
			},
			getImage: function (c, d) {
				var e = 0,
					f = function () {
						c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
					},
					g = function () {
						c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
					},
					h = b.st.image,
					i = d.find(".mfp-img");
				if (i.length) {
					var j = document.createElement("img");
					j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
				}
				return b._parseMarkup(d, {
					title: M(c),
					img_replaceWith: c.img
				}, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
			}
		}
	});
	var N, O = function () {
		return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
	};
	a.magnificPopup.registerModule("zoom", {
		options: {
			enabled: !1,
			easing: "ease-in-out",
			duration: 300,
			opener: function (a) {
				return a.is("img") ? a : a.find("img")
			}
		},
		proto: {
			initZoom: function () {
				var a, c = b.st.zoom,
					d = ".zoom";
				if (c.enabled && b.supportsTransition) {
					var e, f, g = c.duration,
						j = function (a) {
							var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
								d = "all " + c.duration / 1e3 + "s " + c.easing,
								e = {
									position: "fixed",
									zIndex: 9999,
									left: 0,
									top: 0,
									"-webkit-backface-visibility": "hidden"
								},
								f = "transition";
							return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
						},
						k = function () {
							b.content.css("visibility", "visible")
						};
					w("BuildControls" + d, function () {
						if (b._allowZoom()) {
							if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
							f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
								f.css(b._getOffset(!0)), e = setTimeout(function () {
									k(), setTimeout(function () {
										f.remove(), a = f = null, y("ZoomAnimationEnded")
									}, 16)
								}, g)
							}, 16)
						}
					}), w(i + d, function () {
						if (b._allowZoom()) {
							if (clearTimeout(e), b.st.removalDelay = g, !a) {
								if (a = b._getItemToZoom(), !a) return;
								f = j(a)
							}
							f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
								f.css(b._getOffset())
							}, 16)
						}
					}), w(h + d, function () {
						b._allowZoom() && (k(), f && f.remove(), a = null)
					})
				}
			},
			_allowZoom: function () {
				return "image" === b.currItem.type
			},
			_getItemToZoom: function () {
				return b.currItem.hasSize ? b.currItem.img : !1
			},
			_getOffset: function (c) {
				var d;
				d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
				var e = d.offset(),
					f = parseInt(d.css("padding-top"), 10),
					g = parseInt(d.css("padding-bottom"), 10);
				e.top -= a(window).scrollTop() - f;
				var h = {
					width: d.width(),
					height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
				};
				return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
			}
		}
	});
	var P = "iframe",
		Q = "//about:blank",
		R = function (a) {
			if (b.currTemplate[P]) {
				var c = b.currTemplate[P].find("iframe");
				c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
			}
		};
	a.magnificPopup.registerModule(P, {
		options: {
			markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
			srcAction: "iframe_src",
			patterns: {
				youtube: {
					index: "youtube.com",
					id: "v=",
					src: "//www.youtube.com/embed/%id%?autoplay=1"
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1"
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed"
				}
			}
		},
		proto: {
			initIframe: function () {
				b.types.push(P), w("BeforeChange", function (a, b, c) {
					b !== c && (b === P ? R() : c === P && R(!0))
				}), w(h + "." + P, function () {
					R()
				})
			},
			getIframe: function (c, d) {
				var e = c.src,
					f = b.st.iframe;
				a.each(f.patterns, function () {
					return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
				});
				var g = {};
				return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
			}
		}
	});
	var S = function (a) {
			var c = b.items.length;
			return a > c - 1 ? a - c : 0 > a ? c + a : a
		},
		T = function (a, b, c) {
			return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
		};
	a.magnificPopup.registerModule("gallery", {
		options: {
			enabled: !1,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			preload: [0, 2],
			navigateByImgClick: !0,
			arrows: !0,
			tPrev: "Previous (Left arrow key)",
			tNext: "Next (Right arrow key)",
			tCounter: "%curr% of %total%"
		},
		proto: {
			initGallery: function () {
				var c = b.st.gallery,
					e = ".mfp-gallery";
				return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
					c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
						return b.items.length > 1 ? (b.next(), !1) : void 0
					}), d.on("keydown" + e, function (a) {
						37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
					})
				}), w("UpdateStatus" + e, function (a, c) {
					c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
				}), w(l + e, function (a, d, e, f) {
					var g = b.items.length;
					e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
				}), w("BuildControls" + e, function () {
					if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
						var d = c.arrowMarkup,
							e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
							f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
						e.click(function () {
							b.prev()
						}), f.click(function () {
							b.next()
						}), b.container.append(e.add(f))
					}
				}), w(n + e, function () {
					b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
						b.preloadNearbyImages(), b._preloadTimeout = null
					}, 16)
				}), void w(h + e, function () {
					d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
				})) : !1
			},
			next: function () {
				b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
			},
			prev: function () {
				b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
			},
			goTo: function (a) {
				b.direction = a >= b.index, b.index = a, b.updateItemHTML()
			},
			preloadNearbyImages: function () {
				var a, c = b.st.gallery.preload,
					d = Math.min(c[0], b.items.length),
					e = Math.min(c[1], b.items.length);
				for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
				for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
			},
			_preloadItem: function (c) {
				if (c = S(c), !b.items[c].preloaded) {
					var d = b.items[c];
					d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
						d.hasSize = !0
					}).on("error.mfploader", function () {
						d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
					}).attr("src", d.src)), d.preloaded = !0
				}
			}
		}
	});
	var U = "retina";
	a.magnificPopup.registerModule(U, {
		options: {
			replaceSrc: function (a) {
				return a.src.replace(/\.\w+$/, function (a) {
					return "@2x" + a
				})
			},
			ratio: 1
		},
		proto: {
			initRetina: function () {
				if (window.devicePixelRatio > 1) {
					var a = b.st.retina,
						c = a.ratio;
					c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
						b.img.css({
							"max-width": b.img[0].naturalWidth / c,
							width: "100%"
						})
					}), w("ElementParse." + U, function (b, d) {
						d.src = a.replaceSrc(d, c)
					}))
				}
			}
		}
	}), A()
});

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by HernÃ¡n Sartorio  */
! function (e) {
	e.fn.niceSelect = function (t) {
		function s(t) {
			t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
			var s = t.next(),
				n = t.find("option"),
				i = t.find("option:selected");
			s.find(".current").html(i.data("display") || i.text()), n.each(function (t) {
				var n = e(this),
					i = n.data("display");
				s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
			})
		}
		if ("string" == typeof t) return "update" == t ? this.each(function () {
			var t = e(this),
				n = e(this).next(".nice-select"),
				i = n.hasClass("open");
			n.length && (n.remove(), s(t), i && t.next().trigger("click"))
		}) : "destroy" == t ? (this.each(function () {
			var t = e(this),
				s = e(this).next(".nice-select");
			s.length && (s.remove(), t.css("display", ""))
		}), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;
		this.hide(), this.each(function () {
			var t = e(this);
			t.next().hasClass("nice-select") || s(t)
		}), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) {
			var s = e(this);
			e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus()
		}), e(document).on("click.nice_select", function (t) {
			0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option")
		}), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
			var s = e(this),
				n = s.closest(".nice-select");
			n.find(".selected").removeClass("selected"), s.addClass("selected");
			var i = s.data("display") || s.text();
			n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change")
		}), e(document).on("keydown.nice_select", ".nice-select", function (t) {
			var s = e(this),
				n = e(s.find(".focus") || s.find(".list .option.selected"));
			if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;
			if (40 == t.keyCode) {
				if (s.hasClass("open")) {
					var i = n.nextAll(".option:not(.disabled)").first();
					i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"))
				} else s.trigger("click");
				return !1
			}
			if (38 == t.keyCode) {
				if (s.hasClass("open")) {
					var l = n.prevAll(".option:not(.disabled)").first();
					l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"))
				} else s.trigger("click");
				return !1
			}
			if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
			else if (9 == t.keyCode && s.hasClass("open")) return !1
		});
		var n = document.createElement("a").style;
		return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this
	}
}(jQuery);

/*  jQuery Smooth Scroll
    https://github.com/kswedberg/jquery-smooth-scroll
*/

! function (t) {
	var e = {},
		l = function (e) {
			var l = [],
				o = e.dir && "left" === e.dir ? "scrollLeft" : "scrollTop";
			return this.each(function () {
				var e = t(this);
				if (this !== document && this !== window) return !document.scrollingElement || this !== document.documentElement && this !== document.body ? void(e[o]() > 0 ? l.push(this) : (e[o](1), e[o]() > 0 && l.push(this), e[o](0))) : (l.push(document.scrollingElement), !1)
			}), l.length || this.each(function () {
				this === document.documentElement && "smooth" === t(this).css("scrollBehavior") && (l = [this]), l.length || "BODY" !== this.nodeName || (l = [this])
			}), "first" === e.el && l.length > 1 && (l = [l[0]]), l
		},
		o = /^([\-\+]=)(\d+)/;
	t.fn.extend({
		scrollable: function (t) {
			var e = l.call(this, {
				dir: t
			});
			return this.pushStack(e)
		},
		firstScrollable: function (t) {
			var e = l.call(this, {
				el: "first",
				dir: t
			});
			return this.pushStack(e)
		},
		smoothScroll: function (e, l) {
			if ("options" === (e = e || {})) return l ? this.each(function () {
				var e = t(this),
					o = t.extend(e.data("ssOpts") || {}, l);
				t(this).data("ssOpts", o)
			}) : this.first().data("ssOpts");
			var o = t.extend({}, t.fn.smoothScroll.defaults, e),
				s = function (e) {
					var l = function (t) {
							return t.replace(/(:|\.|\/)/g, "\\$1")
						},
						s = this,
						n = t(this),
						r = t.extend({}, o, n.data("ssOpts") || {}),
						c = o.exclude,
						i = r.excludeWithin,
						a = 0,
						h = 0,
						f = !0,
						u = {},
						d = t.smoothScroll.filterPath(location.pathname),
						m = t.smoothScroll.filterPath(s.pathname),
						p = location.hostname === s.hostname || !s.hostname,
						g = r.scrollTarget || m === d,
						v = l(s.hash);
					if (v && !t(v).length && (f = !1), r.scrollTarget || p && g && v) {
						for (; f && a < c.length;) n.is(l(c[a++])) && (f = !1);
						for (; f && h < i.length;) n.closest(i[h++]).length && (f = !1)
					} else f = !1;
					f && (r.preventDefault && e.preventDefault(), t.extend(u, r, {
						scrollTarget: r.scrollTarget || v,
						link: s
					}), t.smoothScroll(u))
				};
			return null !== e.delegateSelector ? this.off("click.smoothscroll", e.delegateSelector).on("click.smoothscroll", e.delegateSelector, s) : this.off("click.smoothscroll").on("click.smoothscroll", s), this
		}
	});
	var s = function (t) {
			var e = {
					relative: ""
				},
				l = "string" == typeof t && o.exec(t);
			return "number" == typeof t ? e.px = t : l && (e.relative = l[1], e.px = parseFloat(l[2]) || 0), e
		},
		n = function (e) {
			var l = t(e.scrollTarget);
			e.autoFocus && l.length && (l[0].focus(), l.is(document.activeElement) || (l.prop({
				tabIndex: -1
			}), l[0].focus())), e.afterScroll.call(e.link, e)
		};
	t.smoothScroll = function (l, o) {
		if ("options" === l && "object" == typeof o) return t.extend(e, o);
		var r, c, i, a, h = s(l),
			f = 0,
			u = "offset",
			d = "scrollTop",
			m = {},
			p = {};
		h.px ? r = t.extend({
			link: null
		}, t.fn.smoothScroll.defaults, e) : ((r = t.extend({
			link: null
		}, t.fn.smoothScroll.defaults, l || {}, e)).scrollElement && (u = "position", "static" === r.scrollElement.css("position") && r.scrollElement.css("position", "relative")), o && (h = s(o))), d = "left" === r.direction ? "scrollLeft" : d, r.scrollElement ? (c = r.scrollElement, h.px || /^(?:HTML|BODY)$/.test(c[0].nodeName) || (f = c[d]())) : c = t("html, body").firstScrollable(r.direction), r.beforeScroll.call(c, r), a = h.px ? h : {
			relative: "",
			px: t(r.scrollTarget)[u]() && t(r.scrollTarget)[u]()[r.direction] || 0
		}, m[d] = a.relative + (a.px + f + r.offset), "auto" === (i = r.speed) && (i = Math.abs(m[d] - c[d]()) / r.autoCoefficient), p = {
			duration: i,
			easing: r.easing,
			complete: function () {
				n(r)
			}
		}, r.step && (p.step = r.step), c.length ? c.stop().animate(m, p) : n(r)
	}, t.smoothScroll.version = "2.2.0", t.smoothScroll.filterPath = function (t) {
		return (t = t || "").replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
	}, t.fn.smoothScroll.defaults = {
		exclude: [],
		excludeWithin: [],
		offset: 0,
		direction: "top",
		delegateSelector: null,
		scrollElement: null,
		scrollTarget: null,
		autoFocus: !1,
		beforeScroll: function () {},
		afterScroll: function () {},
		easing: "swing",
		speed: 400,
		autoCoefficient: 2,
		preventDefault: !0
	}
}(jQuery);

/*
 * jquery-match-height 0.7.2 by @liabru
 * http://brm.io/jquery-match-height/
 * License MIT
 */
! function (t) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
	var e = -1,
		o = -1,
		n = function (t) {
			return parseFloat(t) || 0
		},
		a = function (e) {
			var o = 1,
				a = t(e),
				i = null,
				r = [];
			return a.each(function () {
				var e = t(this),
					a = e.offset().top - n(e.css("margin-top")),
					s = r.length > 0 ? r[r.length - 1] : null;
				null === s ? r.push(e) : Math.floor(Math.abs(i - a)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), i = a
			}), r
		},
		i = function (e) {
			var o = {
				byRow: !0,
				property: "height",
				target: null,
				remove: !1
			};
			return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
		},
		r = t.fn.matchHeight = function (e) {
			var o = i(e);
			if (o.remove) {
				var n = this;
				return this.css(o.property, ""), t.each(r._groups, function (t, e) {
					e.elements = e.elements.not(n)
				}), this
			}
			return this.length <= 1 && !o.target ? this : (r._groups.push({
				elements: this,
				options: o
			}), r._apply(this, o), this)
		};
	r.version = "0.7.2", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null,
		r._afterUpdate = null, r._rows = a, r._parse = n, r._parseOptions = i, r._apply = function (e, o) {
			var s = i(o),
				h = t(e),
				l = [h],
				c = t(window).scrollTop(),
				p = t("html").outerHeight(!0),
				u = h.parents().filter(":hidden");
			return u.each(function () {
					var e = t(this);
					e.data("style-cache", e.attr("style"))
				}), u.css("display", "block"), s.byRow && !s.target && (h.each(function () {
					var e = t(this),
						o = e.css("display");
					"inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
						display: o,
						"padding-top": "0",
						"padding-bottom": "0",
						"margin-top": "0",
						"margin-bottom": "0",
						"border-top-width": "0",
						"border-bottom-width": "0",
						height: "100px",
						overflow: "hidden"
					})
				}), l = a(h), h.each(function () {
					var e = t(this);
					e.attr("style", e.data("style-cache") || "")
				})), t.each(l, function (e, o) {
					var a = t(o),
						i = 0;
					if (s.target) i = s.target.outerHeight(!1);
					else {
						if (s.byRow && a.length <= 1) return void a.css(s.property, "");
						a.each(function () {
							var e = t(this),
								o = e.attr("style"),
								n = e.css("display");
							"inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block");
							var a = {
								display: n
							};
							a[s.property] = "", e.css(a), e.outerHeight(!1) > i && (i = e.outerHeight(!1)), o ? e.attr("style", o) : e.css("display", "")
						})
					}
					a.each(function () {
						var e = t(this),
							o = 0;
						s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += n(e.css("border-top-width")) + n(e.css("border-bottom-width")), o += n(e.css("padding-top")) + n(e.css("padding-bottom"))), e.css(s.property, i - o + "px"))
					})
				}), u.each(function () {
					var e = t(this);
					e.attr("style", e.data("style-cache") || null)
				}), r._maintainScroll && t(window).scrollTop(c / p * t("html").outerHeight(!0)),
				this
		}, r._applyDataApi = function () {
			var e = {};
			t("[data-match-height], [data-mh]").each(function () {
				var o = t(this),
					n = o.attr("data-mh") || o.attr("data-match-height");
				n in e ? e[n] = e[n].add(o) : e[n] = o
			}), t.each(e, function () {
				this.matchHeight(!0)
			})
		};
	var s = function (e) {
		r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function () {
			r._apply(this.elements, this.options)
		}), r._afterUpdate && r._afterUpdate(e, r._groups)
	};
	r._update = function (n, a) {
		if (a && "resize" === a.type) {
			var i = t(window).width();
			if (i === e) return;
			e = i;
		}
		n ? o === -1 && (o = setTimeout(function () {
			s(a), o = -1
		}, r._throttle)) : s(a)
	}, t(r._applyDataApi);
	var h = t.fn.on ? "on" : "bind";
	t(window)[h]("load", function (t) {
		r._update(!1, t)
	}), t(window)[h]("resize orientationchange", function (t) {
		r._update(!0, t)
	})
});


/* jquery.nicescroll v3.7.6 InuYaksa - MIT - https://nicescroll.areaaperta.com */
! function (e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
	"use strict";
	var o = !1,
		t = !1,
		r = 0,
		i = 2e3,
		s = 0,
		n = e,
		l = document,
		a = window,
		c = n(a),
		d = [],
		u = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || !1,
		h = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || !1;
	if (u) a.cancelAnimationFrame || (h = function (e) {});
	else {
		var p = 0;
		u = function (e, o) {
			var t = (new Date).getTime(),
				r = Math.max(0, 16 - (t - p)),
				i = a.setTimeout(function () {
					e(t + r)
				}, r);
			return p = t + r, i
		}, h = function (e) {
			a.clearTimeout(e)
		}
	}
	var m = a.MutationObserver || a.WebKitMutationObserver || !1,
		f = Date.now || function () {
			return (new Date).getTime()
		},
		g = {
			zindex: "auto",
			cursoropacitymin: 0,
			cursoropacitymax: 1,
			cursorcolor: "#424242",
			cursorwidth: "6px",
			cursorborder: "1px solid #fff",
			cursorborderradius: "5px",
			scrollspeed: 40,
			mousescrollstep: 27,
			touchbehavior: !1,
			emulatetouch: !1,
			hwacceleration: !0,
			usetransition: !0,
			boxzoom: !1,
			dblclickzoom: !0,
			gesturezoom: !0,
			grabcursorenabled: !0,
			autohidemode: !0,
			background: "",
			iframeautoresize: !0,
			cursorminheight: 32,
			preservenativescrolling: !0,
			railoffset: !1,
			railhoffset: !1,
			bouncescroll: !0,
			spacebarenabled: !0,
			railpadding: {
				top: 0,
				right: 0,
				left: 0,
				bottom: 0
			},
			disableoutline: !0,
			horizrailenabled: !0,
			railalign: "right",
			railvalign: "bottom",
			enabletranslate3d: !0,
			enablemousewheel: !0,
			enablekeyboard: !0,
			smoothscroll: !0,
			sensitiverail: !0,
			enablemouselockapi: !0,
			cursorfixedheight: !1,
			directionlockdeadzone: 6,
			hidecursordelay: 400,
			nativeparentscrolling: !0,
			enablescrollonselection: !0,
			overflowx: !0,
			overflowy: !0,
			cursordragspeed: .3,
			rtlmode: "auto",
			cursordragontouch: !1,
			oneaxismousemode: "auto",
			scriptpath: function () {
				var e = l.currentScript || function () {
						var e = l.getElementsByTagName("script");
						return !!e.length && e[e.length - 1]
					}(),
					o = e ? e.src.split("?")[0] : "";
				return o.split("/").length > 0 ? o.split("/").slice(0, -1).join("/") + "/" : ""
			}(),
			preventmultitouchscrolling: !0,
			disablemutationobserver: !1,
			enableobserver: !0,
			scrollbarid: !1
		},
		v = !1,
		w = function () {
			if (v) return v;
			var e = l.createElement("DIV"),
				o = e.style,
				t = navigator.userAgent,
				r = navigator.platform,
				i = {};
			return i.haspointerlock = "pointerLockElement" in l || "webkitPointerLockElement" in l || "mozPointerLockElement" in l, i.isopera = "opera" in a, i.isopera12 = i.isopera && "getUserMedia" in navigator, i.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(a.operamini), i.isie = "all" in l && "attachEvent" in e && !i.isopera, i.isieold = i.isie && !("msInterpolationMode" in o), i.isie7 = i.isie && !i.isieold && (!("documentMode" in l) || 7 === l.documentMode), i.isie8 = i.isie && "documentMode" in l && 8 === l.documentMode, i.isie9 = i.isie && "performance" in a && 9 === l.documentMode, i.isie10 = i.isie && "performance" in a && 10 === l.documentMode, i.isie11 = "msRequestFullscreen" in e && l.documentMode >= 11, i.ismsedge = "msCredentials" in a, i.ismozilla = "MozAppearance" in o, i.iswebkit = !i.ismsedge && "WebkitAppearance" in o, i.ischrome = i.iswebkit && "chrome" in a, i.ischrome38 = i.ischrome && "touchAction" in o, i.ischrome22 = !i.ischrome38 && i.ischrome && i.haspointerlock, i.ischrome26 = !i.ischrome38 && i.ischrome && "transition" in o, i.cantouch = "ontouchstart" in l.documentElement || "ontouchstart" in a, i.hasw3ctouch = (a.PointerEvent || !1) && (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0), i.hasmstouch = !i.hasw3ctouch && (a.MSPointerEvent || !1), i.ismac = /^mac$/i.test(r), i.isios = i.cantouch && /iphone|ipad|ipod/i.test(r), i.isios4 = i.isios && !("seal" in Object), i.isios7 = i.isios && "webkitHidden" in l, i.isios8 = i.isios && "hidden" in l, i.isios10 = i.isios && a.Proxy, i.isandroid = /android/i.test(t), i.haseventlistener = "addEventListener" in e, i.trstyle = !1, i.hastransform = !1, i.hastranslate3d = !1, i.transitionstyle = !1, i.hastransition = !1, i.transitionend = !1, i.trstyle = "transform", i.hastransform = "transform" in o || function () {
				for (var e = ["msTransform", "webkitTransform", "MozTransform", "OTransform"], t = 0, r = e.length; t < r; t++)
					if (void 0 !== o[e[t]]) {
						i.trstyle = e[t];
						break
					} i.hastransform = !!i.trstyle
			}(), i.hastransform && (o[i.trstyle] = "translate3d(1px,2px,3px)", i.hastranslate3d = /translate3d/.test(o[i.trstyle])), i.transitionstyle = "transition", i.prefixstyle = "", i.transitionend = "transitionend", i.hastransition = "transition" in o || function () {
				i.transitionend = !1;
				for (var e = ["webkitTransition", "msTransition", "MozTransition", "OTransition", "OTransition", "KhtmlTransition"], t = ["-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"], r = ["webkitTransitionEnd", "msTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "KhtmlTransitionEnd"], s = 0, n = e.length; s < n; s++)
					if (e[s] in o) {
						i.transitionstyle = e[s], i.prefixstyle = t[s], i.transitionend = r[s];
						break
					} i.ischrome26 && (i.prefixstyle = t[1]), i.hastransition = i.transitionstyle
			}(), i.cursorgrabvalue = function () {
				var e = ["grab", "-webkit-grab", "-moz-grab"];
				(i.ischrome && !i.ischrome38 || i.isie) && (e = []);
				for (var t = 0, r = e.length; t < r; t++) {
					var s = e[t];
					if (o.cursor = s, o.cursor == s) return s
				}
				return "url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize"
			}(), i.hasmousecapture = "setCapture" in e, i.hasMutationObserver = !1 !== m, e = null, v = i, i
		},
		b = function (e, p) {
			function v() {
				var e = T.doc.css(P.trstyle);
				return !(!e || "matrix" != e.substr(0, 6)) && e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/)
			}

			function b() {
				var e = T.win;
				if ("zIndex" in e) return e.zIndex();
				for (; e.length > 0;) {
					if (9 == e[0].nodeType) return !1;
					var o = e.css("zIndex");
					if (!isNaN(o) && 0 !== o) return parseInt(o);
					e = e.parent()
				}
				return !1
			}

			function x(e, o, t) {
				var r = e.css(o),
					i = parseFloat(r);
				if (isNaN(i)) {
					var s = 3 == (i = I[r] || 0) ? t ? T.win.outerHeight() - T.win.innerHeight() : T.win.outerWidth() - T.win.innerWidth() : 1;
					return T.isie8 && i && (i += 1), s ? i : 0
				}
				return i
			}

			function S(e, o, t, r) {
				T._bind(e, o, function (r) {
					var i = {
						original: r = r || a.event,
						target: r.target || r.srcElement,
						type: "wheel",
						deltaMode: "MozMousePixelScroll" == r.type ? 0 : 1,
						deltaX: 0,
						deltaZ: 0,
						preventDefault: function () {
							return r.preventDefault ? r.preventDefault() : r.returnValue = !1, !1
						},
						stopImmediatePropagation: function () {
							r.stopImmediatePropagation ? r.stopImmediatePropagation() : r.cancelBubble = !0
						}
					};
					return "mousewheel" == o ? (r.wheelDeltaX && (i.deltaX = -.025 * r.wheelDeltaX), r.wheelDeltaY && (i.deltaY = -.025 * r.wheelDeltaY), !i.deltaY && !i.deltaX && (i.deltaY = -.025 * r.wheelDelta)) : i.deltaY = r.detail, t.call(e, i)
				}, r)
			}

			function z(e, o, t, r) {
				T.scrollrunning || (T.newscrolly = T.getScrollTop(), T.newscrollx = T.getScrollLeft(), D = f());
				var i = f() - D;
				if (D = f(), i > 350 ? A = 1 : A += (2 - A) / 10, e = e * A | 0, o = o * A | 0, e) {
					if (r)
						if (e < 0) {
							if (T.getScrollLeft() >= T.page.maxw) return !0
						} else if (T.getScrollLeft() <= 0) return !0;
					var s = e > 0 ? 1 : -1;
					X !== s && (T.scrollmom && T.scrollmom.stop(), T.newscrollx = T.getScrollLeft(), X = s), T.lastdeltax -= e
				}
				if (o) {
					if (function () {
							var e = T.getScrollTop();
							if (o < 0) {
								if (e >= T.page.maxh) return !0
							} else if (e <= 0) return !0
						}()) {
						if (M.nativeparentscrolling && t && !T.ispage && !T.zoomactive) return !0;
						var n = T.view.h >> 1;
						T.newscrolly < -n ? (T.newscrolly = -n, o = -1) : T.newscrolly > T.page.maxh + n ? (T.newscrolly = T.page.maxh + n, o = 1) : o = 0
					}
					var l = o > 0 ? 1 : -1;
					B !== l && (T.scrollmom && T.scrollmom.stop(), T.newscrolly = T.getScrollTop(), B = l), T.lastdeltay -= o
				}(o || e) && T.synched("relativexy", function () {
					var e = T.lastdeltay + T.newscrolly;
					T.lastdeltay = 0;
					var o = T.lastdeltax + T.newscrollx;
					T.lastdeltax = 0, T.rail.drag || T.doScrollPos(o, e)
				})
			}

			function k(e, o, t) {
				var r, i;
				return !(t || !q) || (0 === e.deltaMode ? (r = -e.deltaX * (M.mousescrollstep / 54) | 0, i = -e.deltaY * (M.mousescrollstep / 54) | 0) : 1 === e.deltaMode && (r = -e.deltaX * M.mousescrollstep * 50 / 80 | 0, i = -e.deltaY * M.mousescrollstep * 50 / 80 | 0), o && M.oneaxismousemode && 0 === r && i && (r = i, i = 0, t && (r < 0 ? T.getScrollLeft() >= T.page.maxw : T.getScrollLeft() <= 0) && (i = r, r = 0)), T.isrtlmode && (r = -r), z(r, i, t, !0) ? void(t && (q = !0)) : (q = !1, e.stopImmediatePropagation(), e.preventDefault()))
			}
			var T = this;
			this.version = "3.7.6", this.name = "nicescroll", this.me = p;
			var E = n("body"),
				M = this.opt = {
					doc: E,
					win: !1
				};
			if (n.extend(M, g), M.snapbackspeed = 80, e)
				for (var L in M) void 0 !== e[L] && (M[L] = e[L]);
			if (M.disablemutationobserver && (m = !1), this.doc = M.doc, this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "", this.ispage = /^BODY|HTML/.test(M.win ? M.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = !1 !== M.win, this.win = M.win || (this.ispage ? c : this.doc), this.docscroll = this.ispage && !this.haswrapper ? c : this.win, this.body = E, this.viewport = !1, this.isfixed = !1, this.iframe = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != M.autohidemode, this.onmousedown = !1, this.onmouseup = !1, this.onmousemove = !1, this.onmousewheel = !1, this.onkeypress = !1, this.ongesturezoom = !1, this.onclick = !1, this.onscrollstart = !1, this.onscrollend = !1, this.onscrollcancel = !1, this.onzoomin = !1, this.onzoomout = !1, this.view = !1, this.page = !1, this.scroll = {
					x: 0,
					y: 0
				}, this.scrollratio = {
					x: 0,
					y: 0
				}, this.cursorheight = 20, this.scrollvaluemax = 0, "auto" == M.rtlmode) {
				var C = this.win[0] == a ? this.body : this.win,
					N = C.css("writing-mode") || C.css("-webkit-writing-mode") || C.css("-ms-writing-mode") || C.css("-moz-writing-mode");
				"horizontal-tb" == N || "lr-tb" == N || "" === N ? (this.isrtlmode = "rtl" == C.css("direction"), this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == N || "tb" == N || "tb-rl" == N || "rl-tb" == N, this.isvertical = "vertical-rl" == N || "tb" == N || "tb-rl" == N)
			} else this.isrtlmode = !0 === M.rtlmode, this.isvertical = !1;
			if (this.scrollrunning = !1, this.scrollmom = !1, this.observer = !1, this.observerremover = !1, this.observerbody = !1, !1 !== M.scrollbarid) this.id = M.scrollbarid;
			else
				do {
					this.id = "ascrail" + i++
				} while (l.getElementById(this.id));
			this.rail = !1, this.cursor = !1, this.cursorfreezed = !1, this.selectiondrag = !1, this.zoom = !1, this.zoomactive = !1, this.hasfocus = !1, this.hasmousefocus = !1, this.railslocked = !1, this.locked = !1, this.hidden = !1, this.cursoractive = !0, this.wheelprevented = !1, this.overflowx = M.overflowx, this.overflowy = M.overflowy, this.nativescrollingarea = !1, this.checkarea = 0, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltax = 0, this.lastdeltay = 0, this.detected = w();
			var P = n.extend({}, this.detected);
			this.canhwscroll = P.hastransform && M.hwacceleration, this.ishwscroll = this.canhwscroll && T.haswrapper, this.isrtlmode ? this.isvertical ? this.hasreversehr = !(P.iswebkit || P.isie || P.isie11) : this.hasreversehr = !(P.iswebkit || P.isie && !P.isie10 && !P.isie11) : this.hasreversehr = !1, this.istouchcapable = !1, P.cantouch || !P.hasw3ctouch && !P.hasmstouch ? !P.cantouch || P.isios || P.isandroid || !P.iswebkit && !P.ismozilla || (this.istouchcapable = !0) : this.istouchcapable = !0, M.enablemouselockapi || (P.hasmousecapture = !1, P.haspointerlock = !1), this.debounced = function (e, o, t) {
				T && (T.delaylist[e] || !1 || (T.delaylist[e] = {
					h: u(function () {
						T.delaylist[e].fn.call(T), T.delaylist[e] = !1
					}, t)
				}, o.call(T)), T.delaylist[e].fn = o)
			}, this.synched = function (e, o) {
				T.synclist[e] ? T.synclist[e] = o : (T.synclist[e] = o, u(function () {
					T && (T.synclist[e] && T.synclist[e].call(T), T.synclist[e] = null)
				}))
			}, this.unsynched = function (e) {
				T.synclist[e] && (T.synclist[e] = !1)
			}, this.css = function (e, o) {
				for (var t in o) T.saved.css.push([e, t, e.css(t)]), e.css(t, o[t])
			}, this.scrollTop = function (e) {
				return void 0 === e ? T.getScrollTop() : T.setScrollTop(e)
			}, this.scrollLeft = function (e) {
				return void 0 === e ? T.getScrollLeft() : T.setScrollLeft(e)
			};
			var R = function (e, o, t, r, i, s, n) {
				this.st = e, this.ed = o, this.spd = t, this.p1 = r || 0, this.p2 = i || 1, this.p3 = s || 0, this.p4 = n || 1, this.ts = f(), this.df = o - e
			};
			if (R.prototype = {
					B2: function (e) {
						return 3 * (1 - e) * (1 - e) * e
					},
					B3: function (e) {
						return 3 * (1 - e) * e * e
					},
					B4: function (e) {
						return e * e * e
					},
					getPos: function () {
						return (f() - this.ts) / this.spd
					},
					getNow: function () {
						var e = (f() - this.ts) / this.spd,
							o = this.B2(e) + this.B3(e) + this.B4(e);
						return e >= 1 ? this.ed : this.st + this.df * o | 0
					},
					update: function (e, o) {
						return this.st = this.getNow(), this.ed = e, this.spd = o, this.ts = f(), this.df = this.ed - this.st, this
					}
				}, this.ishwscroll) {
				this.doc.translate = {
					x: 0,
					y: 0,
					tx: "0px",
					ty: "0px"
				}, P.hastranslate3d && P.isios && this.doc.css("-webkit-backface-visibility", "hidden"), this.getScrollTop = function (e) {
					if (!e) {
						var o = v();
						if (o) return 16 == o.length ? -o[13] : -o[5];
						if (T.timerscroll && T.timerscroll.bz) return T.timerscroll.bz.getNow()
					}
					return T.doc.translate.y
				}, this.getScrollLeft = function (e) {
					if (!e) {
						var o = v();
						if (o) return 16 == o.length ? -o[12] : -o[4];
						if (T.timerscroll && T.timerscroll.bh) return T.timerscroll.bh.getNow()
					}
					return T.doc.translate.x
				}, this.notifyScrollEvent = function (e) {
					var o = l.createEvent("UIEvents");
					o.initUIEvent("scroll", !1, !1, a, 1), o.niceevent = !0, e.dispatchEvent(o)
				};
				var _ = this.isrtlmode ? 1 : -1;
				P.hastranslate3d && M.enabletranslate3d ? (this.setScrollTop = function (e, o) {
					T.doc.translate.y = e, T.doc.translate.ty = -1 * e + "px", T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"), o || T.notifyScrollEvent(T.win[0])
				}, this.setScrollLeft = function (e, o) {
					T.doc.translate.x = e, T.doc.translate.tx = e * _ + "px", T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"), o || T.notifyScrollEvent(T.win[0])
				}) : (this.setScrollTop = function (e, o) {
					T.doc.translate.y = e, T.doc.translate.ty = -1 * e + "px", T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"), o || T.notifyScrollEvent(T.win[0])
				}, this.setScrollLeft = function (e, o) {
					T.doc.translate.x = e, T.doc.translate.tx = e * _ + "px", T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"), o || T.notifyScrollEvent(T.win[0])
				})
			} else this.getScrollTop = function () {
				return T.docscroll.scrollTop()
			}, this.setScrollTop = function (e) {
				T.docscroll.scrollTop(e)
			}, this.getScrollLeft = function () {
				return T.hasreversehr ? T.detected.ismozilla ? T.page.maxw - Math.abs(T.docscroll.scrollLeft()) : T.page.maxw - T.docscroll.scrollLeft() : T.docscroll.scrollLeft()
			}, this.setScrollLeft = function (e) {
				return setTimeout(function () {
					if (T) return T.hasreversehr && (e = T.detected.ismozilla ? -(T.page.maxw - e) : T.page.maxw - e), T.docscroll.scrollLeft(e)
				}, 1)
			};
			this.getTarget = function (e) {
				return !!e && (e.target ? e.target : !!e.srcElement && e.srcElement)
			}, this.hasParent = function (e, o) {
				if (!e) return !1;
				for (var t = e.target || e.srcElement || e || !1; t && t.id != o;) t = t.parentNode || !1;
				return !1 !== t
			};
			var I = {
				thin: 1,
				medium: 3,
				thick: 5
			};
			this.getDocumentScrollOffset = function () {
				return {
					top: a.pageYOffset || l.documentElement.scrollTop,
					left: a.pageXOffset || l.documentElement.scrollLeft
				}
			}, this.getOffset = function () {
				if (T.isfixed) {
					var e = T.win.offset(),
						o = T.getDocumentScrollOffset();
					return e.top -= o.top, e.left -= o.left, e
				}
				var t = T.win.offset();
				if (!T.viewport) return t;
				var r = T.viewport.offset();
				return {
					top: t.top - r.top,
					left: t.left - r.left
				}
			}, this.updateScrollBar = function (e) {
				var o, t;
				if (T.ishwscroll) T.rail.css({
					height: T.win.innerHeight() - (M.railpadding.top + M.railpadding.bottom)
				}), T.railh && T.railh.css({
					width: T.win.innerWidth() - (M.railpadding.left + M.railpadding.right)
				});
				else {
					var r = T.getOffset();
					if (o = {
							top: r.top,
							left: r.left - (M.railpadding.left + M.railpadding.right)
						}, o.top += x(T.win, "border-top-width", !0), o.left += T.rail.align ? T.win.outerWidth() - x(T.win, "border-right-width") - T.rail.width : x(T.win, "border-left-width"), (t = M.railoffset) && (t.top && (o.top += t.top), t.left && (o.left += t.left)), T.railslocked || T.rail.css({
							top: o.top,
							left: o.left,
							height: (e ? e.h : T.win.innerHeight()) - (M.railpadding.top + M.railpadding.bottom)
						}), T.zoom && T.zoom.css({
							top: o.top + 1,
							left: 1 == T.rail.align ? o.left - 20 : o.left + T.rail.width + 4
						}), T.railh && !T.railslocked) {
						o = {
							top: r.top,
							left: r.left
						}, (t = M.railhoffset) && (t.top && (o.top += t.top), t.left && (o.left += t.left));
						var i = T.railh.align ? o.top + x(T.win, "border-top-width", !0) + T.win.innerHeight() - T.railh.height : o.top + x(T.win, "border-top-width", !0),
							s = o.left + x(T.win, "border-left-width");
						T.railh.css({
							top: i - (M.railpadding.top + M.railpadding.bottom),
							left: s,
							width: T.railh.width
						})
					}
				}
			}, this.doRailClick = function (e, o, t) {
				var r, i, s, n;
				T.railslocked || (T.cancelEvent(e), "pageY" in e || (e.pageX = e.clientX + l.documentElement.scrollLeft, e.pageY = e.clientY + l.documentElement.scrollTop), o ? (r = t ? T.doScrollLeft : T.doScrollTop, s = t ? (e.pageX - T.railh.offset().left - T.cursorwidth / 2) * T.scrollratio.x : (e.pageY - T.rail.offset().top - T.cursorheight / 2) * T.scrollratio.y, T.unsynched("relativexy"), r(0 | s)) : (r = t ? T.doScrollLeftBy : T.doScrollBy, s = t ? T.scroll.x : T.scroll.y, n = t ? e.pageX - T.railh.offset().left : e.pageY - T.rail.offset().top, i = t ? T.view.w : T.view.h, r(s >= n ? i : -i)))
			}, T.newscrolly = T.newscrollx = 0, T.hasanimationframe = "requestAnimationFrame" in a, T.hascancelanimationframe = "cancelAnimationFrame" in a, T.hasborderbox = !1, this.init = function () {
				if (T.saved.css = [], P.isoperamini) return !0;
				if (P.isandroid && !("hidden" in l)) return !0;
				M.emulatetouch = M.emulatetouch || M.touchbehavior, T.hasborderbox = a.getComputedStyle && "border-box" === a.getComputedStyle(l.body)["box-sizing"];
				var e = {
					"overflow-y": "hidden"
				};
				if ((P.isie11 || P.isie10) && (e["-ms-overflow-style"] = "none"), T.ishwscroll && (this.doc.css(P.transitionstyle, P.prefixstyle + "transform 0ms ease-out"), P.transitionend && T.bind(T.doc, P.transitionend, T.onScrollTransitionEnd, !1)), T.zindex = "auto", T.ispage || "auto" != M.zindex ? T.zindex = M.zindex : T.zindex = b() || "auto", !T.ispage && "auto" != T.zindex && T.zindex > s && (s = T.zindex), T.isie && 0 === T.zindex && "auto" == M.zindex && (T.zindex = "auto"), !T.ispage || !P.isieold) {
					var i = T.docscroll;
					T.ispage && (i = T.haswrapper ? T.win : T.doc), T.css(i, e), T.ispage && (P.isie11 || P.isie) && T.css(n("html"), e), !P.isios || T.ispage || T.haswrapper || T.css(E, {
						"-webkit-overflow-scrolling": "touch"
					});
					var d = n(l.createElement("div"));
					d.css({
						position: "relative",
						top: 0,
						float: "right",
						width: M.cursorwidth,
						height: 0,
						"background-color": M.cursorcolor,
						border: M.cursorborder,
						"background-clip": "padding-box",
						"-webkit-border-radius": M.cursorborderradius,
						"-moz-border-radius": M.cursorborderradius,
						"border-radius": M.cursorborderradius
					}), d.addClass("nicescroll-cursors"), T.cursor = d;
					var u = n(l.createElement("div"));
					u.attr("id", T.id), u.addClass("nicescroll-rails nicescroll-rails-vr");
					var h, p, f = ["left", "right", "top", "bottom"];
					for (var g in f) p = f[g], (h = M.railpadding[p] || 0) && u.css("padding-" + p, h + "px");
					u.append(d), u.width = Math.max(parseFloat(M.cursorwidth), d.outerWidth()), u.css({
						width: u.width + "px",
						zIndex: T.zindex,
						background: M.background,
						cursor: "default"
					}), u.visibility = !0, u.scrollable = !0, u.align = "left" == M.railalign ? 0 : 1, T.rail = u, T.rail.drag = !1;
					var v = !1;
					!M.boxzoom || T.ispage || P.isieold || (v = l.createElement("div"), T.bind(v, "click", T.doZoom), T.bind(v, "mouseenter", function () {
						T.zoom.css("opacity", M.cursoropacitymax)
					}), T.bind(v, "mouseleave", function () {
						T.zoom.css("opacity", M.cursoropacitymin)
					}), T.zoom = n(v), T.zoom.css({
						cursor: "pointer",
						zIndex: T.zindex,
						backgroundImage: "url(" + M.scriptpath + "zoomico.png)",
						height: 18,
						width: 18,
						backgroundPosition: "0 0"
					}), M.dblclickzoom && T.bind(T.win, "dblclick", T.doZoom), P.cantouch && M.gesturezoom && (T.ongesturezoom = function (e) {
						return e.scale > 1.5 && T.doZoomIn(e), e.scale < .8 && T.doZoomOut(e), T.cancelEvent(e)
					}, T.bind(T.win, "gestureend", T.ongesturezoom))), T.railh = !1;
					var w;
					if (M.horizrailenabled && (T.css(i, {
							overflowX: "hidden"
						}), (d = n(l.createElement("div"))).css({
							position: "absolute",
							top: 0,
							height: M.cursorwidth,
							width: 0,
							backgroundColor: M.cursorcolor,
							border: M.cursorborder,
							backgroundClip: "padding-box",
							"-webkit-border-radius": M.cursorborderradius,
							"-moz-border-radius": M.cursorborderradius,
							"border-radius": M.cursorborderradius
						}), P.isieold && d.css("overflow", "hidden"), d.addClass("nicescroll-cursors"), T.cursorh = d, (w = n(l.createElement("div"))).attr("id", T.id + "-hr"), w.addClass("nicescroll-rails nicescroll-rails-hr"), w.height = Math.max(parseFloat(M.cursorwidth), d.outerHeight()), w.css({
							height: w.height + "px",
							zIndex: T.zindex,
							background: M.background
						}), w.append(d), w.visibility = !0, w.scrollable = !0, w.align = "top" == M.railvalign ? 0 : 1, T.railh = w, T.railh.drag = !1), T.ispage) u.css({
						position: "fixed",
						top: 0,
						height: "100%"
					}), u.css(u.align ? {
						right: 0
					} : {
						left: 0
					}), T.body.append(u), T.railh && (w.css({
						position: "fixed",
						left: 0,
						width: "100%"
					}), w.css(w.align ? {
						bottom: 0
					} : {
						top: 0
					}), T.body.append(w));
					else {
						if (T.ishwscroll) {
							"static" == T.win.css("position") && T.css(T.win, {
								position: "relative"
							});
							var x = "HTML" == T.win[0].nodeName ? T.body : T.win;
							n(x).scrollTop(0).scrollLeft(0), T.zoom && (T.zoom.css({
								position: "absolute",
								top: 1,
								right: 0,
								"margin-right": u.width + 4
							}), x.append(T.zoom)), u.css({
								position: "absolute",
								top: 0
							}), u.css(u.align ? {
								right: 0
							} : {
								left: 0
							}), x.append(u), w && (w.css({
								position: "absolute",
								left: 0,
								bottom: 0
							}), w.css(w.align ? {
								bottom: 0
							} : {
								top: 0
							}), x.append(w))
						} else {
							T.isfixed = "fixed" == T.win.css("position");
							var S = T.isfixed ? "fixed" : "absolute";
							T.isfixed || (T.viewport = T.getViewport(T.win[0])), T.viewport && (T.body = T.viewport, /fixed|absolute/.test(T.viewport.css("position")) || T.css(T.viewport, {
								position: "relative"
							})), u.css({
								position: S
							}), T.zoom && T.zoom.css({
								position: S
							}), T.updateScrollBar(), T.body.append(u), T.zoom && T.body.append(T.zoom), T.railh && (w.css({
								position: S
							}), T.body.append(w))
						}
						P.isios && T.css(T.win, {
							"-webkit-tap-highlight-color": "rgba(0,0,0,0)",
							"-webkit-touch-callout": "none"
						}), M.disableoutline && (P.isie && T.win.attr("hideFocus", "true"), P.iswebkit && T.win.css("outline", "none"))
					}
					if (!1 === M.autohidemode ? (T.autohidedom = !1, T.rail.css({
							opacity: M.cursoropacitymax
						}), T.railh && T.railh.css({
							opacity: M.cursoropacitymax
						})) : !0 === M.autohidemode || "leave" === M.autohidemode ? (T.autohidedom = n().add(T.rail), P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursor)), T.railh && (T.autohidedom = T.autohidedom.add(T.railh)), T.railh && P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "scroll" == M.autohidemode ? (T.autohidedom = n().add(T.rail), T.railh && (T.autohidedom = T.autohidedom.add(T.railh))) : "cursor" == M.autohidemode ? (T.autohidedom = n().add(T.cursor), T.railh && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "hidden" == M.autohidemode && (T.autohidedom = !1, T.hide(), T.railslocked = !1), P.cantouch || T.istouchcapable || M.emulatetouch || P.hasmstouch) {
						T.scrollmom = new y(T);
						T.ontouchstart = function (e) {
							if (T.locked) return !1;
							if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;
							if (T.hasmoving = !1, T.scrollmom.timer && (T.triggerScrollEnd(), T.scrollmom.stop()), !T.railslocked) {
								var o = T.getTarget(e);
								if (o && /INPUT/i.test(o.nodeName) && /range/i.test(o.type)) return T.stopPropagation(e);
								var t = "mousedown" === e.type;
								if (!("clientX" in e) && "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), T.forcescreen) {
									var r = e;
									(e = {
										original: e.original ? e.original : e
									}).clientX = r.screenX, e.clientY = r.screenY
								}
								if (T.rail.drag = {
										x: e.clientX,
										y: e.clientY,
										sx: T.scroll.x,
										sy: T.scroll.y,
										st: T.getScrollTop(),
										sl: T.getScrollLeft(),
										pt: 2,
										dl: !1,
										tg: o
									}, T.ispage || !M.directionlockdeadzone) T.rail.drag.dl = "f";
								else {
									var i = {
											w: c.width(),
											h: c.height()
										},
										s = T.getContentSize(),
										l = s.h - i.h,
										a = s.w - i.w;
									T.rail.scrollable && !T.railh.scrollable ? T.rail.drag.ck = l > 0 && "v" : !T.rail.scrollable && T.railh.scrollable ? T.rail.drag.ck = a > 0 && "h" : T.rail.drag.ck = !1
								}
								if (M.emulatetouch && T.isiframe && P.isie) {
									var d = T.win.position();
									T.rail.drag.x += d.left, T.rail.drag.y += d.top
								}
								if (T.hasmoving = !1, T.lastmouseup = !1, T.scrollmom.reset(e.clientX, e.clientY), o && t) {
									if (!/INPUT|SELECT|BUTTON|TEXTAREA/i.test(o.nodeName)) return P.hasmousecapture && o.setCapture(), M.emulatetouch ? (o.onclick && !o._onclick && (o._onclick = o.onclick, o.onclick = function (e) {
										if (T.hasmoving) return !1;
										o._onclick.call(this, e)
									}), T.cancelEvent(e)) : T.stopPropagation(e);
									/SUBMIT|CANCEL|BUTTON/i.test(n(o).attr("type")) && (T.preventclick = {
										tg: o,
										click: !1
									})
								}
							}
						}, T.ontouchend = function (e) {
							if (!T.rail.drag) return !0;
							if (2 == T.rail.drag.pt) {
								if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;
								T.rail.drag = !1;
								var o = "mouseup" === e.type;
								if (T.hasmoving && (T.scrollmom.doMomentum(), T.lastmouseup = !0, T.hideCursor(), P.hasmousecapture && l.releaseCapture(), o)) return T.cancelEvent(e)
							} else if (1 == T.rail.drag.pt) return T.onmouseup(e)
						};
						var z = M.emulatetouch && T.isiframe && !P.hasmousecapture,
							k = .3 * M.directionlockdeadzone | 0;
						T.ontouchmove = function (e, o) {
							if (!T.rail.drag) return !0;
							if (e.targetTouches && M.preventmultitouchscrolling && e.targetTouches.length > 1) return !0;
							if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !0;
							if (2 == T.rail.drag.pt) {
								"changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY);
								var t, r;
								if (r = t = 0, z && !o) {
									var i = T.win.position();
									r = -i.left, t = -i.top
								}
								var s = e.clientY + t,
									n = s - T.rail.drag.y,
									a = e.clientX + r,
									c = a - T.rail.drag.x,
									d = T.rail.drag.st - n;
								if (T.ishwscroll && M.bouncescroll) d < 0 ? d = Math.round(d / 2) : d > T.page.maxh && (d = T.page.maxh + Math.round((d - T.page.maxh) / 2));
								else if (d < 0 ? (d = 0, s = 0) : d > T.page.maxh && (d = T.page.maxh, s = 0), 0 === s && !T.hasmoving) return T.ispage || (T.rail.drag = !1), !0;
								var u = T.getScrollLeft();
								if (T.railh && T.railh.scrollable && (u = T.isrtlmode ? c - T.rail.drag.sl : T.rail.drag.sl - c, T.ishwscroll && M.bouncescroll ? u < 0 ? u = Math.round(u / 2) : u > T.page.maxw && (u = T.page.maxw + Math.round((u - T.page.maxw) / 2)) : (u < 0 && (u = 0, a = 0), u > T.page.maxw && (u = T.page.maxw, a = 0))), !T.hasmoving) {
									if (T.rail.drag.y === e.clientY && T.rail.drag.x === e.clientX) return T.cancelEvent(e);
									var h = Math.abs(n),
										p = Math.abs(c),
										m = M.directionlockdeadzone;
									if (T.rail.drag.ck ? "v" == T.rail.drag.ck ? p > m && h <= k ? T.rail.drag = !1 : h > m && (T.rail.drag.dl = "v") : "h" == T.rail.drag.ck && (h > m && p <= k ? T.rail.drag = !1 : p > m && (T.rail.drag.dl = "h")) : h > m && p > m ? T.rail.drag.dl = "f" : h > m ? T.rail.drag.dl = p > k ? "f" : "v" : p > m && (T.rail.drag.dl = h > k ? "f" : "h"), !T.rail.drag.dl) return T.cancelEvent(e);
									T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), T.hasmoving = !0
								}
								return T.preventclick && !T.preventclick.click && (T.preventclick.click = T.preventclick.tg.onclick || !1, T.preventclick.tg.onclick = T.onpreventclick), T.rail.drag.dl && ("v" == T.rail.drag.dl ? u = T.rail.drag.sl : "h" == T.rail.drag.dl && (d = T.rail.drag.st)), T.synched("touchmove", function () {
									T.rail.drag && 2 == T.rail.drag.pt && (T.prepareTransition && T.resetTransition(), T.rail.scrollable && T.setScrollTop(d), T.scrollmom.update(a, s), T.railh && T.railh.scrollable ? (T.setScrollLeft(u), T.showCursor(d, u)) : T.showCursor(d), P.isie10 && l.selection.clear())
								}), T.cancelEvent(e)
							}
							return 1 == T.rail.drag.pt ? T.onmousemove(e) : void 0
						}, T.ontouchstartCursor = function (e, o) {
							if (!T.rail.drag || 3 == T.rail.drag.pt) {
								if (T.locked) return T.cancelEvent(e);
								T.cancelScroll(), T.rail.drag = {
									x: e.touches[0].clientX,
									y: e.touches[0].clientY,
									sx: T.scroll.x,
									sy: T.scroll.y,
									pt: 3,
									hr: !!o
								};
								var t = T.getTarget(e);
								return !T.ispage && P.hasmousecapture && t.setCapture(), T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"), T.css(T.doc, {
									"pointer-events": "none"
								})), T.cancelEvent(e)
							}
						}, T.ontouchendCursor = function (e) {
							if (T.rail.drag) {
								if (P.hasmousecapture && l.releaseCapture(), T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents), 3 != T.rail.drag.pt) return;
								return T.rail.drag = !1, T.cancelEvent(e)
							}
						}, T.ontouchmoveCursor = function (e) {
							if (T.rail.drag) {
								if (3 != T.rail.drag.pt) return;
								if (T.cursorfreezed = !0, T.rail.drag.hr) {
									T.scroll.x = T.rail.drag.sx + (e.touches[0].clientX - T.rail.drag.x), T.scroll.x < 0 && (T.scroll.x = 0);
									var o = T.scrollvaluemaxw;
									T.scroll.x > o && (T.scroll.x = o)
								} else {
									T.scroll.y = T.rail.drag.sy + (e.touches[0].clientY - T.rail.drag.y), T.scroll.y < 0 && (T.scroll.y = 0);
									var t = T.scrollvaluemax;
									T.scroll.y > t && (T.scroll.y = t)
								}
								return T.synched("touchmove", function () {
									T.rail.drag && 3 == T.rail.drag.pt && (T.showCursor(), T.rail.drag.hr ? T.doScrollLeft(Math.round(T.scroll.x * T.scrollratio.x), M.cursordragspeed) : T.doScrollTop(Math.round(T.scroll.y * T.scrollratio.y), M.cursordragspeed))
								}), T.cancelEvent(e)
							}
						}
					}
					if (T.onmousedown = function (e, o) {
							if (!T.rail.drag || 1 == T.rail.drag.pt) {
								if (T.railslocked) return T.cancelEvent(e);
								T.cancelScroll(), T.rail.drag = {
									x: e.clientX,
									y: e.clientY,
									sx: T.scroll.x,
									sy: T.scroll.y,
									pt: 1,
									hr: o || !1
								};
								var t = T.getTarget(e);
								return P.hasmousecapture && t.setCapture(), T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"), T.css(T.doc, {
									"pointer-events": "none"
								})), T.hasmoving = !1, T.cancelEvent(e)
							}
						}, T.onmouseup = function (e) {
							if (T.rail.drag) return 1 != T.rail.drag.pt || (P.hasmousecapture && l.releaseCapture(), T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents), T.rail.drag = !1, T.cursorfreezed = !1, T.hasmoving && T.triggerScrollEnd(), T.cancelEvent(e))
						}, T.onmousemove = function (e) {
							if (T.rail.drag) {
								if (1 !== T.rail.drag.pt) return;
								if (P.ischrome && 0 === e.which) return T.onmouseup(e);
								if (T.cursorfreezed = !0, T.hasmoving || T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), T.hasmoving = !0, T.rail.drag.hr) {
									T.scroll.x = T.rail.drag.sx + (e.clientX - T.rail.drag.x), T.scroll.x < 0 && (T.scroll.x = 0);
									var o = T.scrollvaluemaxw;
									T.scroll.x > o && (T.scroll.x = o)
								} else {
									T.scroll.y = T.rail.drag.sy + (e.clientY - T.rail.drag.y), T.scroll.y < 0 && (T.scroll.y = 0);
									var t = T.scrollvaluemax;
									T.scroll.y > t && (T.scroll.y = t)
								}
								return T.synched("mousemove", function () {
									T.cursorfreezed && (T.showCursor(), T.rail.drag.hr ? T.scrollLeft(Math.round(T.scroll.x * T.scrollratio.x)) : T.scrollTop(Math.round(T.scroll.y * T.scrollratio.y)))
								}), T.cancelEvent(e)
							}
							T.checkarea = 0
						}, P.cantouch || M.emulatetouch) T.onpreventclick = function (e) {
						if (T.preventclick) return T.preventclick.tg.onclick = T.preventclick.click, T.preventclick = !1, T.cancelEvent(e)
					}, T.onclick = !P.isios && function (e) {
						return !T.lastmouseup || (T.lastmouseup = !1, T.cancelEvent(e))
					}, M.grabcursorenabled && P.cursorgrabvalue && (T.css(T.ispage ? T.doc : T.win, {
						cursor: P.cursorgrabvalue
					}), T.css(T.rail, {
						cursor: P.cursorgrabvalue
					}));
					else {
						var L = function (e) {
							if (T.selectiondrag) {
								if (e) {
									var o = T.win.outerHeight(),
										t = e.pageY - T.selectiondrag.top;
									t > 0 && t < o && (t = 0), t >= o && (t -= o), T.selectiondrag.df = t
								}
								if (0 !== T.selectiondrag.df) {
									var r = -2 * T.selectiondrag.df / 6 | 0;
									T.doScrollBy(r), T.debounced("doselectionscroll", function () {
										L()
									}, 50)
								}
							}
						};
						T.hasTextSelected = "getSelection" in l ? function () {
							return l.getSelection().rangeCount > 0
						} : "selection" in l ? function () {
							return "None" != l.selection.type
						} : function () {
							return !1
						}, T.onselectionstart = function (e) {
							T.ispage || (T.selectiondrag = T.win.offset())
						}, T.onselectionend = function (e) {
							T.selectiondrag = !1
						}, T.onselectiondrag = function (e) {
							T.selectiondrag && T.hasTextSelected() && T.debounced("selectionscroll", function () {
								L(e)
							}, 250)
						}
					}
					if (P.hasw3ctouch ? (T.css(T.ispage ? n("html") : T.win, {
							"touch-action": "none"
						}), T.css(T.rail, {
							"touch-action": "none"
						}), T.css(T.cursor, {
							"touch-action": "none"
						}), T.bind(T.win, "pointerdown", T.ontouchstart), T.bind(l, "pointerup", T.ontouchend), T.delegate(l, "pointermove", T.ontouchmove)) : P.hasmstouch ? (T.css(T.ispage ? n("html") : T.win, {
							"-ms-touch-action": "none"
						}), T.css(T.rail, {
							"-ms-touch-action": "none"
						}), T.css(T.cursor, {
							"-ms-touch-action": "none"
						}), T.bind(T.win, "MSPointerDown", T.ontouchstart), T.bind(l, "MSPointerUp", T.ontouchend), T.delegate(l, "MSPointerMove", T.ontouchmove), T.bind(T.cursor, "MSGestureHold", function (e) {
							e.preventDefault()
						}), T.bind(T.cursor, "contextmenu", function (e) {
							e.preventDefault()
						})) : P.cantouch && (T.bind(T.win, "touchstart", T.ontouchstart, !1, !0), T.bind(l, "touchend", T.ontouchend, !1, !0), T.bind(l, "touchcancel", T.ontouchend, !1, !0), T.delegate(l, "touchmove", T.ontouchmove, !1, !0)), M.emulatetouch && (T.bind(T.win, "mousedown", T.ontouchstart, !1, !0), T.bind(l, "mouseup", T.ontouchend, !1, !0), T.bind(l, "mousemove", T.ontouchmove, !1, !0)), (M.cursordragontouch || !P.cantouch && !M.emulatetouch) && (T.rail.css({
							cursor: "default"
						}), T.railh && T.railh.css({
							cursor: "default"
						}), T.jqbind(T.rail, "mouseenter", function () {
							if (!T.ispage && !T.win.is(":visible")) return !1;
							T.canshowonmouseevent && T.showCursor(), T.rail.active = !0
						}), T.jqbind(T.rail, "mouseleave", function () {
							T.rail.active = !1, T.rail.drag || T.hideCursor()
						}), M.sensitiverail && (T.bind(T.rail, "click", function (e) {
							T.doRailClick(e, !1, !1)
						}), T.bind(T.rail, "dblclick", function (e) {
							T.doRailClick(e, !0, !1)
						}), T.bind(T.cursor, "click", function (e) {
							T.cancelEvent(e)
						}), T.bind(T.cursor, "dblclick", function (e) {
							T.cancelEvent(e)
						})), T.railh && (T.jqbind(T.railh, "mouseenter", function () {
							if (!T.ispage && !T.win.is(":visible")) return !1;
							T.canshowonmouseevent && T.showCursor(), T.rail.active = !0
						}), T.jqbind(T.railh, "mouseleave", function () {
							T.rail.active = !1, T.rail.drag || T.hideCursor()
						}), M.sensitiverail && (T.bind(T.railh, "click", function (e) {
							T.doRailClick(e, !1, !0)
						}), T.bind(T.railh, "dblclick", function (e) {
							T.doRailClick(e, !0, !0)
						}), T.bind(T.cursorh, "click", function (e) {
							T.cancelEvent(e)
						}), T.bind(T.cursorh, "dblclick", function (e) {
							T.cancelEvent(e)
						})))), M.cursordragontouch && (this.istouchcapable || P.cantouch) && (T.bind(T.cursor, "touchstart", T.ontouchstartCursor), T.bind(T.cursor, "touchmove", T.ontouchmoveCursor), T.bind(T.cursor, "touchend", T.ontouchendCursor), T.cursorh && T.bind(T.cursorh, "touchstart", function (e) {
							T.ontouchstartCursor(e, !0)
						}), T.cursorh && T.bind(T.cursorh, "touchmove", T.ontouchmoveCursor), T.cursorh && T.bind(T.cursorh, "touchend", T.ontouchendCursor)), M.emulatetouch || P.isandroid || P.isios ? (T.bind(P.hasmousecapture ? T.win : l, "mouseup", T.ontouchend), T.onclick && T.bind(l, "click", T.onclick), M.cursordragontouch ? (T.bind(T.cursor, "mousedown", T.onmousedown), T.bind(T.cursor, "mouseup", T.onmouseup), T.cursorh && T.bind(T.cursorh, "mousedown", function (e) {
							T.onmousedown(e, !0)
						}), T.cursorh && T.bind(T.cursorh, "mouseup", T.onmouseup)) : (T.bind(T.rail, "mousedown", function (e) {
							e.preventDefault()
						}), T.railh && T.bind(T.railh, "mousedown", function (e) {
							e.preventDefault()
						}))) : (T.bind(P.hasmousecapture ? T.win : l, "mouseup", T.onmouseup), T.bind(l, "mousemove", T.onmousemove), T.onclick && T.bind(l, "click", T.onclick), T.bind(T.cursor, "mousedown", T.onmousedown), T.bind(T.cursor, "mouseup", T.onmouseup), T.railh && (T.bind(T.cursorh, "mousedown", function (e) {
							T.onmousedown(e, !0)
						}), T.bind(T.cursorh, "mouseup", T.onmouseup)), !T.ispage && M.enablescrollonselection && (T.bind(T.win[0], "mousedown", T.onselectionstart), T.bind(l, "mouseup", T.onselectionend), T.bind(T.cursor, "mouseup", T.onselectionend), T.cursorh && T.bind(T.cursorh, "mouseup", T.onselectionend), T.bind(l, "mousemove", T.onselectiondrag)), T.zoom && (T.jqbind(T.zoom, "mouseenter", function () {
							T.canshowonmouseevent && T.showCursor(), T.rail.active = !0
						}), T.jqbind(T.zoom, "mouseleave", function () {
							T.rail.active = !1, T.rail.drag || T.hideCursor()
						}))), M.enablemousewheel && (T.isiframe || T.mousewheel(P.isie && T.ispage ? l : T.win, T.onmousewheel), T.mousewheel(T.rail, T.onmousewheel), T.railh && T.mousewheel(T.railh, T.onmousewheelhr)), T.ispage || P.cantouch || /HTML|^BODY/.test(T.win[0].nodeName) || (T.win.attr("tabindex") || T.win.attr({
							tabindex: ++r
						}), T.bind(T.win, "focus", function (e) {
							o = T.getTarget(e).id || T.getTarget(e) || !1, T.hasfocus = !0, T.canshowonmouseevent && T.noticeCursor()
						}), T.bind(T.win, "blur", function (e) {
							o = !1, T.hasfocus = !1
						}), T.bind(T.win, "mouseenter", function (e) {
							t = T.getTarget(e).id || T.getTarget(e) || !1, T.hasmousefocus = !0, T.canshowonmouseevent && T.noticeCursor()
						}), T.bind(T.win, "mouseleave", function (e) {
							t = !1, T.hasmousefocus = !1, T.rail.drag || T.hideCursor()
						})), T.onkeypress = function (e) {
							if (T.railslocked && 0 === T.page.maxh) return !0;
							e = e || a.event;
							var r = T.getTarget(e);
							if (r && /INPUT|TEXTAREA|SELECT|OPTION/.test(r.nodeName) && (!(r.getAttribute("type") || r.type || !1) || !/submit|button|cancel/i.tp)) return !0;
							if (n(r).attr("contenteditable")) return !0;
							if (T.hasfocus || T.hasmousefocus && !o || T.ispage && !o && !t) {
								var i = e.keyCode;
								if (T.railslocked && 27 != i) return T.cancelEvent(e);
								var s = e.ctrlKey || !1,
									l = e.shiftKey || !1,
									c = !1;
								switch (i) {
									case 38:
									case 63233:
										T.doScrollBy(72), c = !0;
										break;
									case 40:
									case 63235:
										T.doScrollBy(-72), c = !0;
										break;
									case 37:
									case 63232:
										T.railh && (s ? T.doScrollLeft(0) : T.doScrollLeftBy(72), c = !0);
										break;
									case 39:
									case 63234:
										T.railh && (s ? T.doScrollLeft(T.page.maxw) : T.doScrollLeftBy(-72), c = !0);
										break;
									case 33:
									case 63276:
										T.doScrollBy(T.view.h), c = !0;
										break;
									case 34:
									case 63277:
										T.doScrollBy(-T.view.h), c = !0;
										break;
									case 36:
									case 63273:
										T.railh && s ? T.doScrollPos(0, 0) : T.doScrollTo(0), c = !0;
										break;
									case 35:
									case 63275:
										T.railh && s ? T.doScrollPos(T.page.maxw, T.page.maxh) : T.doScrollTo(T.page.maxh), c = !0;
										break;
									case 32:
										M.spacebarenabled && (l ? T.doScrollBy(T.view.h) : T.doScrollBy(-T.view.h), c = !0);
										break;
									case 27:
										T.zoomactive && (T.doZoom(), c = !0)
								}
								if (c) return T.cancelEvent(e)
							}
						}, M.enablekeyboard && T.bind(l, P.isopera && !P.isopera12 ? "keypress" : "keydown", T.onkeypress), T.bind(l, "keydown", function (e) {
							(e.ctrlKey || !1) && (T.wheelprevented = !0)
						}), T.bind(l, "keyup", function (e) {
							e.ctrlKey || !1 || (T.wheelprevented = !1)
						}), T.bind(a, "blur", function (e) {
							T.wheelprevented = !1
						}), T.bind(a, "resize", T.onscreenresize), T.bind(a, "orientationchange", T.onscreenresize), T.bind(a, "load", T.lazyResize), P.ischrome && !T.ispage && !T.haswrapper) {
						var C = T.win.attr("style"),
							N = parseFloat(T.win.css("width")) + 1;
						T.win.css("width", N), T.synched("chromefix", function () {
							T.win.attr("style", C)
						})
					}
					if (T.onAttributeChange = function (e) {
							T.lazyResize(T.isieold ? 250 : 30)
						}, M.enableobserver && (T.isie11 || !1 === m || (T.observerbody = new m(function (e) {
							if (e.forEach(function (e) {
									if ("attributes" == e.type) return E.hasClass("modal-open") && E.hasClass("modal-dialog") && !n.contains(n(".modal-dialog")[0], T.doc[0]) ? T.hide() : T.show()
								}), T.me.clientWidth != T.page.width || T.me.clientHeight != T.page.height) return T.lazyResize(30)
						}), T.observerbody.observe(l.body, {
							childList: !0,
							subtree: !0,
							characterData: !1,
							attributes: !0,
							attributeFilter: ["class"]
						})), !T.ispage && !T.haswrapper)) {
						var R = T.win[0];
						!1 !== m ? (T.observer = new m(function (e) {
							e.forEach(T.onAttributeChange)
						}), T.observer.observe(R, {
							childList: !0,
							characterData: !1,
							attributes: !0,
							subtree: !1
						}), T.observerremover = new m(function (e) {
							e.forEach(function (e) {
								if (e.removedNodes.length > 0)
									for (var o in e.removedNodes)
										if (T && e.removedNodes[o] === R) return T.remove()
							})
						}), T.observerremover.observe(R.parentNode, {
							childList: !0,
							characterData: !1,
							attributes: !1,
							subtree: !1
						})) : (T.bind(R, P.isie && !P.isie9 ? "propertychange" : "DOMAttrModified", T.onAttributeChange), P.isie9 && R.attachEvent("onpropertychange", T.onAttributeChange), T.bind(R, "DOMNodeRemoved", function (e) {
							e.target === R && T.remove()
						}))
					}!T.ispage && M.boxzoom && T.bind(a, "resize", T.resizeZoom), T.istextarea && (T.bind(T.win, "keydown", T.lazyResize), T.bind(T.win, "mouseup", T.lazyResize)), T.lazyResize(30)
				}
				if ("IFRAME" == this.doc[0].nodeName) {
					var _ = function () {
						T.iframexd = !1;
						var o;
						try {
							(o = "contentDocument" in this ? this.contentDocument : this.contentWindow._doc).domain
						} catch (e) {
							T.iframexd = !0, o = !1
						}
						if (T.iframexd) return "console" in a && console.log("NiceScroll error: policy restriced iframe"), !0;
						if (T.forcescreen = !0, T.isiframe && (T.iframe = {
								doc: n(o),
								html: T.doc.contents().find("html")[0],
								body: T.doc.contents().find("body")[0]
							}, T.getContentSize = function () {
								return {
									w: Math.max(T.iframe.html.scrollWidth, T.iframe.body.scrollWidth),
									h: Math.max(T.iframe.html.scrollHeight, T.iframe.body.scrollHeight)
								}
							}, T.docscroll = n(T.iframe.body)), !P.isios && M.iframeautoresize && !T.isiframe) {
							T.win.scrollTop(0), T.doc.height("");
							var t = Math.max(o.getElementsByTagName("html")[0].scrollHeight, o.body.scrollHeight);
							T.doc.height(t)
						}
						T.lazyResize(30), T.css(n(T.iframe.body), e), P.isios && T.haswrapper && T.css(n(o.body), {
							"-webkit-transform": "translate3d(0,0,0)"
						}), "contentWindow" in this ? T.bind(this.contentWindow, "scroll", T.onscroll) : T.bind(o, "scroll", T.onscroll), M.enablemousewheel && T.mousewheel(o, T.onmousewheel), M.enablekeyboard && T.bind(o, P.isopera ? "keypress" : "keydown", T.onkeypress), P.cantouch ? (T.bind(o, "touchstart", T.ontouchstart), T.bind(o, "touchmove", T.ontouchmove)) : M.emulatetouch && (T.bind(o, "mousedown", T.ontouchstart), T.bind(o, "mousemove", function (e) {
							return T.ontouchmove(e, !0)
						}), M.grabcursorenabled && P.cursorgrabvalue && T.css(n(o.body), {
							cursor: P.cursorgrabvalue
						})), T.bind(o, "mouseup", T.ontouchend), T.zoom && (M.dblclickzoom && T.bind(o, "dblclick", T.doZoom), T.ongesturezoom && T.bind(o, "gestureend", T.ongesturezoom))
					};
					this.doc[0].readyState && "complete" === this.doc[0].readyState && setTimeout(function () {
						_.call(T.doc[0], !1)
					}, 500), T.bind(this.doc, "load", _)
				}
			}, this.showCursor = function (e, o) {
				if (T.cursortimeout && (clearTimeout(T.cursortimeout), T.cursortimeout = 0), T.rail) {
					if (T.autohidedom && (T.autohidedom.stop().css({
							opacity: M.cursoropacitymax
						}), T.cursoractive = !0), T.rail.drag && 1 == T.rail.drag.pt || (void 0 !== e && !1 !== e && (T.scroll.y = e / T.scrollratio.y | 0), void 0 !== o && (T.scroll.x = o / T.scrollratio.x | 0)), T.cursor.css({
							height: T.cursorheight,
							top: T.scroll.y
						}), T.cursorh) {
						var t = T.hasreversehr ? T.scrollvaluemaxw - T.scroll.x : T.scroll.x;
						T.cursorh.css({
							width: T.cursorwidth,
							left: !T.rail.align && T.rail.visibility ? t + T.rail.width : t
						}), T.cursoractive = !0
					}
					T.zoom && T.zoom.stop().css({
						opacity: M.cursoropacitymax
					})
				}
			}, this.hideCursor = function (e) {
				T.cursortimeout || T.rail && T.autohidedom && (T.hasmousefocus && "leave" === M.autohidemode || (T.cursortimeout = setTimeout(function () {
					T.rail.active && T.showonmouseevent || (T.autohidedom.stop().animate({
						opacity: M.cursoropacitymin
					}), T.zoom && T.zoom.stop().animate({
						opacity: M.cursoropacitymin
					}), T.cursoractive = !1), T.cursortimeout = 0
				}, e || M.hidecursordelay)))
			}, this.noticeCursor = function (e, o, t) {
				T.showCursor(o, t), T.rail.active || T.hideCursor(e)
			}, this.getContentSize = T.ispage ? function () {
				return {
					w: Math.max(l.body.scrollWidth, l.documentElement.scrollWidth),
					h: Math.max(l.body.scrollHeight, l.documentElement.scrollHeight)
				}
			} : T.haswrapper ? function () {
				return {
					w: T.doc[0].offsetWidth,
					h: T.doc[0].offsetHeight
				}
			} : function () {
				return {
					w: T.docscroll[0].scrollWidth,
					h: T.docscroll[0].scrollHeight
				}
			}, this.onResize = function (e, o) {
				if (!T || !T.win) return !1;
				var t = T.page.maxh,
					r = T.page.maxw,
					i = T.view.h,
					s = T.view.w;
				if (T.view = {
						w: T.ispage ? T.win.width() : T.win[0].clientWidth,
						h: T.ispage ? T.win.height() : T.win[0].clientHeight
					}, T.page = o || T.getContentSize(), T.page.maxh = Math.max(0, T.page.h - T.view.h), T.page.maxw = Math.max(0, T.page.w - T.view.w), T.page.maxh == t && T.page.maxw == r && T.view.w == s && T.view.h == i) {
					if (T.ispage) return T;
					var n = T.win.offset();
					if (T.lastposition) {
						var l = T.lastposition;
						if (l.top == n.top && l.left == n.left) return T
					}
					T.lastposition = n
				}
				return 0 === T.page.maxh ? (T.hideRail(), T.scrollvaluemax = 0, T.scroll.y = 0, T.scrollratio.y = 0, T.cursorheight = 0, T.setScrollTop(0), T.rail && (T.rail.scrollable = !1)) : (T.page.maxh -= M.railpadding.top + M.railpadding.bottom, T.rail.scrollable = !0), 0 === T.page.maxw ? (T.hideRailHr(), T.scrollvaluemaxw = 0, T.scroll.x = 0, T.scrollratio.x = 0, T.cursorwidth = 0, T.setScrollLeft(0), T.railh && (T.railh.scrollable = !1)) : (T.page.maxw -= M.railpadding.left + M.railpadding.right, T.railh && (T.railh.scrollable = M.horizrailenabled)), T.railslocked = T.locked || 0 === T.page.maxh && 0 === T.page.maxw, T.railslocked ? (T.ispage || T.updateScrollBar(T.view), !1) : (T.hidden || (T.rail.visibility || T.showRail(), T.railh && !T.railh.visibility && T.showRailHr()), T.istextarea && T.win.css("resize") && "none" != T.win.css("resize") && (T.view.h -= 20), T.cursorheight = Math.min(T.view.h, Math.round(T.view.h * (T.view.h / T.page.h))), T.cursorheight = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorheight), T.cursorwidth = Math.min(T.view.w, Math.round(T.view.w * (T.view.w / T.page.w))), T.cursorwidth = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorwidth), T.scrollvaluemax = T.view.h - T.cursorheight - (M.railpadding.top + M.railpadding.bottom), T.hasborderbox || (T.scrollvaluemax -= T.cursor[0].offsetHeight - T.cursor[0].clientHeight), T.railh && (T.railh.width = T.page.maxh > 0 ? T.view.w - T.rail.width : T.view.w, T.scrollvaluemaxw = T.railh.width - T.cursorwidth - (M.railpadding.left + M.railpadding.right)), T.ispage || T.updateScrollBar(T.view), T.scrollratio = {
					x: T.page.maxw / T.scrollvaluemaxw,
					y: T.page.maxh / T.scrollvaluemax
				}, T.getScrollTop() > T.page.maxh ? T.doScrollTop(T.page.maxh) : (T.scroll.y = T.getScrollTop() / T.scrollratio.y | 0, T.scroll.x = T.getScrollLeft() / T.scrollratio.x | 0, T.cursoractive && T.noticeCursor()), T.scroll.y && 0 === T.getScrollTop() && T.doScrollTo(T.scroll.y * T.scrollratio.y | 0), T)
			}, this.resize = T.onResize;
			var O = 0;
			this.onscreenresize = function (e) {
				clearTimeout(O);
				var o = !T.ispage && !T.haswrapper;
				o && T.hideRails(), O = setTimeout(function () {
					T && (o && T.showRails(), T.resize()), O = 0
				}, 120)
			}, this.lazyResize = function (e) {
				return clearTimeout(O), e = isNaN(e) ? 240 : e, O = setTimeout(function () {
					T && T.resize(), O = 0
				}, e), T
			}, this.jqbind = function (e, o, t) {
				T.events.push({
					e: e,
					n: o,
					f: t,
					q: !0
				}), n(e).on(o, t)
			}, this.mousewheel = function (e, o, t) {
				var r = "jquery" in e ? e[0] : e;
				if ("onwheel" in l.createElement("div")) T._bind(r, "wheel", o, t || !1);
				else {
					var i = void 0 !== l.onmousewheel ? "mousewheel" : "DOMMouseScroll";
					S(r, i, o, t || !1), "DOMMouseScroll" == i && S(r, "MozMousePixelScroll", o, t || !1)
				}
			};
			var Y = !1;
			if (P.haseventlistener) {
				try {
					var H = Object.defineProperty({}, "passive", {
						get: function () {
							Y = !0
						}
					});
					a.addEventListener("test", null, H)
				} catch (e) {}
				this.stopPropagation = function (e) {
					return !!e && ((e = e.original ? e.original : e).stopPropagation(), !1)
				}, this.cancelEvent = function (e) {
					return e.cancelable && e.preventDefault(), e.stopImmediatePropagation(), e.preventManipulation && e.preventManipulation(), !1
				}
			} else Event.prototype.preventDefault = function () {
				this.returnValue = !1
			}, Event.prototype.stopPropagation = function () {
				this.cancelBubble = !0
			}, a.constructor.prototype.addEventListener = l.constructor.prototype.addEventListener = Element.prototype.addEventListener = function (e, o, t) {
				this.attachEvent("on" + e, o)
			}, a.constructor.prototype.removeEventListener = l.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function (e, o, t) {
				this.detachEvent("on" + e, o)
			}, this.cancelEvent = function (e) {
				return (e = e || a.event) && (e.cancelBubble = !0, e.cancel = !0, e.returnValue = !1), !1
			}, this.stopPropagation = function (e) {
				return (e = e || a.event) && (e.cancelBubble = !0), !1
			};
			this.delegate = function (e, o, t, r, i) {
				var s = d[o] || !1;
				s || (s = {
					a: [],
					l: [],
					f: function (e) {
						for (var o = s.l, t = !1, r = o.length - 1; r >= 0; r--)
							if (!1 === (t = o[r].call(e.target, e))) return !1;
						return t
					}
				}, T.bind(e, o, s.f, r, i), d[o] = s), T.ispage ? (s.a = [T.id].concat(s.a), s.l = [t].concat(s.l)) : (s.a.push(T.id), s.l.push(t))
			}, this.undelegate = function (e, o, t, r, i) {
				var s = d[o] || !1;
				if (s && s.l)
					for (var n = 0, l = s.l.length; n < l; n++) s.a[n] === T.id && (s.a.splice(n), s.l.splice(n), 0 === s.a.length && (T._unbind(e, o, s.l.f), d[o] = null))
			}, this.bind = function (e, o, t, r, i) {
				var s = "jquery" in e ? e[0] : e;
				T._bind(s, o, t, r || !1, i || !1)
			}, this._bind = function (e, o, t, r, i) {
				T.events.push({
					e: e,
					n: o,
					f: t,
					b: r,
					q: !1
				}), Y && i ? e.addEventListener(o, t, {
					passive: !1,
					capture: r
				}) : e.addEventListener(o, t, r || !1)
			}, this._unbind = function (e, o, t, r) {
				d[o] ? T.undelegate(e, o, t, r) : e.removeEventListener(o, t, r)
			}, this.unbindAll = function () {
				for (var e = 0; e < T.events.length; e++) {
					var o = T.events[e];
					o.q ? o.e.unbind(o.n, o.f) : T._unbind(o.e, o.n, o.f, o.b)
				}
			}, this.showRails = function () {
				return T.showRail().showRailHr()
			}, this.showRail = function () {
				return 0 === T.page.maxh || !T.ispage && "none" == T.win.css("display") || (T.rail.visibility = !0, T.rail.css("display", "block")), T
			}, this.showRailHr = function () {
				return T.railh && (0 === T.page.maxw || !T.ispage && "none" == T.win.css("display") || (T.railh.visibility = !0, T.railh.css("display", "block"))), T
			}, this.hideRails = function () {
				return T.hideRail().hideRailHr()
			}, this.hideRail = function () {
				return T.rail.visibility = !1, T.rail.css("display", "none"), T
			}, this.hideRailHr = function () {
				return T.railh && (T.railh.visibility = !1, T.railh.css("display", "none")), T
			}, this.show = function () {
				return T.hidden = !1, T.railslocked = !1, T.showRails()
			}, this.hide = function () {
				return T.hidden = !0, T.railslocked = !0, T.hideRails()
			}, this.toggle = function () {
				return T.hidden ? T.show() : T.hide()
			}, this.remove = function () {
				T.stop(), T.cursortimeout && clearTimeout(T.cursortimeout);
				for (var e in T.delaylist) T.delaylist[e] && h(T.delaylist[e].h);
				T.doZoomOut(), T.unbindAll(), P.isie9 && T.win[0].detachEvent("onpropertychange", T.onAttributeChange), !1 !== T.observer && T.observer.disconnect(), !1 !== T.observerremover && T.observerremover.disconnect(), !1 !== T.observerbody && T.observerbody.disconnect(), T.events = null, T.cursor && T.cursor.remove(), T.cursorh && T.cursorh.remove(), T.rail && T.rail.remove(), T.railh && T.railh.remove(), T.zoom && T.zoom.remove();
				for (var o = 0; o < T.saved.css.length; o++) {
					var t = T.saved.css[o];
					t[0].css(t[1], void 0 === t[2] ? "" : t[2])
				}
				T.saved = !1, T.me.data("__nicescroll", "");
				var r = n.nicescroll;
				r.each(function (e) {
					if (this && this.id === T.id) {
						delete r[e];
						for (var o = ++e; o < r.length; o++, e++) r[e] = r[o];
						--r.length && delete r[r.length]
					}
				});
				for (var i in T) T[i] = null, delete T[i];
				T = null
			}, this.scrollstart = function (e) {
				return this.onscrollstart = e, T
			}, this.scrollend = function (e) {
				return this.onscrollend = e, T
			}, this.scrollcancel = function (e) {
				return this.onscrollcancel = e, T
			}, this.zoomin = function (e) {
				return this.onzoomin = e, T
			}, this.zoomout = function (e) {
				return this.onzoomout = e, T
			}, this.isScrollable = function (e) {
				var o = e.target ? e.target : e;
				if ("OPTION" == o.nodeName) return !0;
				for (; o && 1 == o.nodeType && o !== this.me[0] && !/^BODY|HTML/.test(o.nodeName);) {
					var t = n(o),
						r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
					if (/scroll|auto/.test(r)) return o.clientHeight != o.scrollHeight;
					o = !!o.parentNode && o.parentNode
				}
				return !1
			}, this.getViewport = function (e) {
				for (var o = !(!e || !e.parentNode) && e.parentNode; o && 1 == o.nodeType && !/^BODY|HTML/.test(o.nodeName);) {
					var t = n(o);
					if (/fixed|absolute/.test(t.css("position"))) return t;
					var r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
					if (/scroll|auto/.test(r) && o.clientHeight != o.scrollHeight) return t;
					if (t.getNiceScroll().length > 0) return t;
					o = !!o.parentNode && o.parentNode
				}
				return !1
			}, this.triggerScrollStart = function (e, o, t, r, i) {
				if (T.onscrollstart) {
					var s = {
						type: "scrollstart",
						current: {
							x: e,
							y: o
						},
						request: {
							x: t,
							y: r
						},
						end: {
							x: T.newscrollx,
							y: T.newscrolly
						},
						speed: i
					};
					T.onscrollstart.call(T, s)
				}
			}, this.triggerScrollEnd = function () {
				if (T.onscrollend) {
					var e = T.getScrollLeft(),
						o = T.getScrollTop(),
						t = {
							type: "scrollend",
							current: {
								x: e,
								y: o
							},
							end: {
								x: e,
								y: o
							}
						};
					T.onscrollend.call(T, t)
				}
			};
			var B = 0,
				X = 0,
				D = 0,
				A = 1,
				q = !1;
			if (this.onmousewheel = function (e) {
					if (T.wheelprevented || T.locked) return !1;
					if (T.railslocked) return T.debounced("checkunlock", T.resize, 250), !1;
					if (T.rail.drag) return T.cancelEvent(e);
					if ("auto" === M.oneaxismousemode && 0 !== e.deltaX && (M.oneaxismousemode = !1), M.oneaxismousemode && 0 === e.deltaX && !T.rail.scrollable) return !T.railh || !T.railh.scrollable || T.onmousewheelhr(e);
					var o = f(),
						t = !1;
					if (M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e), t = !0), T.checkarea = o, T.nativescrollingarea) return !0;
					var r = k(e, !1, t);
					return r && (T.checkarea = 0), r
				}, this.onmousewheelhr = function (e) {
					if (!T.wheelprevented) {
						if (T.railslocked || !T.railh.scrollable) return !0;
						if (T.rail.drag) return T.cancelEvent(e);
						var o = f(),
							t = !1;
						return M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e), t = !0), T.checkarea = o, !!T.nativescrollingarea || (T.railslocked ? T.cancelEvent(e) : k(e, !0, t))
					}
				}, this.stop = function () {
					return T.cancelScroll(), T.scrollmon && T.scrollmon.stop(), T.cursorfreezed = !1, T.scroll.y = Math.round(T.getScrollTop() * (1 / T.scrollratio.y)), T.noticeCursor(), T
				}, this.getTransitionSpeed = function (e) {
					return 80 + e / 72 * M.scrollspeed | 0
				}, M.smoothscroll)
				if (T.ishwscroll && P.hastransition && M.usetransition && M.smoothscroll) {
					var j = "";
					this.resetTransition = function () {
						j = "", T.doc.css(P.prefixstyle + "transition-duration", "0ms")
					}, this.prepareTransition = function (e, o) {
						var t = o ? e : T.getTransitionSpeed(e),
							r = t + "ms";
						return j !== r && (j = r, T.doc.css(P.prefixstyle + "transition-duration", r)), t
					}, this.doScrollLeft = function (e, o) {
						var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
						T.doScrollPos(e, t, o)
					}, this.doScrollTop = function (e, o) {
						var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
						T.doScrollPos(t, e, o)
					}, this.cursorupdate = {
						running: !1,
						start: function () {
							var e = this;
							if (!e.running) {
								e.running = !0;
								var o = function () {
									e.running && u(o), T.showCursor(T.getScrollTop(), T.getScrollLeft()), T.notifyScrollEvent(T.win[0])
								};
								u(o)
							}
						},
						stop: function () {
							this.running = !1
						}
					}, this.doScrollPos = function (e, o, t) {
						var r = T.getScrollTop(),
							i = T.getScrollLeft();
						if (((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll(), M.bouncescroll ? (o < 0 ? o = o / 2 | 0 : o > T.page.maxh && (o = T.page.maxh + (o - T.page.maxh) / 2 | 0), e < 0 ? e = e / 2 | 0 : e > T.page.maxw && (e = T.page.maxw + (e - T.page.maxw) / 2 | 0)) : (o < 0 ? o = 0 : o > T.page.maxh && (o = T.page.maxh), e < 0 ? e = 0 : e > T.page.maxw && (e = T.page.maxw)), T.scrollrunning && e == T.newscrollx && o == T.newscrolly) return !1;
						T.newscrolly = o, T.newscrollx = e;
						var s = T.getScrollTop(),
							n = T.getScrollLeft(),
							l = {};
						l.x = e - n, l.y = o - s;
						var a = 0 | Math.sqrt(l.x * l.x + l.y * l.y),
							c = T.prepareTransition(a);
						T.scrollrunning || (T.scrollrunning = !0, T.triggerScrollStart(n, s, e, o, c), T.cursorupdate.start()), T.scrollendtrapped = !0, P.transitionend || (T.scrollendtrapped && clearTimeout(T.scrollendtrapped), T.scrollendtrapped = setTimeout(T.onScrollTransitionEnd, c)), T.setScrollTop(T.newscrolly), T.setScrollLeft(T.newscrollx)
					}, this.cancelScroll = function () {
						if (!T.scrollendtrapped) return !0;
						var e = T.getScrollTop(),
							o = T.getScrollLeft();
						return T.scrollrunning = !1, P.transitionend || clearTimeout(P.transitionend), T.scrollendtrapped = !1, T.resetTransition(), T.setScrollTop(e), T.railh && T.setScrollLeft(o), T.timerscroll && T.timerscroll.tm && clearInterval(T.timerscroll.tm), T.timerscroll = !1, T.cursorfreezed = !1, T.cursorupdate.stop(), T.showCursor(e, o), T
					}, this.onScrollTransitionEnd = function () {
						if (T.scrollendtrapped) {
							var e = T.getScrollTop(),
								o = T.getScrollLeft();
							if (e < 0 ? e = 0 : e > T.page.maxh && (e = T.page.maxh), o < 0 ? o = 0 : o > T.page.maxw && (o = T.page.maxw), e != T.newscrolly || o != T.newscrollx) return T.doScrollPos(o, e, M.snapbackspeed);
							T.scrollrunning && T.triggerScrollEnd(), T.scrollrunning = !1, T.scrollendtrapped = !1, T.resetTransition(), T.timerscroll = !1, T.setScrollTop(e), T.railh && T.setScrollLeft(o), T.cursorupdate.stop(), T.noticeCursor(!1, e, o), T.cursorfreezed = !1
						}
					}
				} else this.doScrollLeft = function (e, o) {
					var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
					T.doScrollPos(e, t, o)
				}, this.doScrollTop = function (e, o) {
					var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
					T.doScrollPos(t, e, o)
				}, this.doScrollPos = function (e, o, t) {
					var r = T.getScrollTop(),
						i = T.getScrollLeft();
					((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll();
					var s = !1;
					if (T.bouncescroll && T.rail.visibility || (o < 0 ? (o = 0, s = !0) : o > T.page.maxh && (o = T.page.maxh, s = !0)), T.bouncescroll && T.railh.visibility || (e < 0 ? (e = 0, s = !0) : e > T.page.maxw && (e = T.page.maxw, s = !0)), T.scrollrunning && T.newscrolly === o && T.newscrollx === e) return !0;
					T.newscrolly = o, T.newscrollx = e, T.dst = {}, T.dst.x = e - i, T.dst.y = o - r, T.dst.px = i, T.dst.py = r;
					var n = 0 | Math.sqrt(T.dst.x * T.dst.x + T.dst.y * T.dst.y),
						l = T.getTransitionSpeed(n);
					T.bzscroll = {};
					var a = s ? 1 : .58;
					T.bzscroll.x = new R(i, T.newscrollx, l, 0, 0, a, 1), T.bzscroll.y = new R(r, T.newscrolly, l, 0, 0, a, 1);
					f();
					var c = function () {
						if (T.scrollrunning) {
							var e = T.bzscroll.y.getPos();
							T.setScrollLeft(T.bzscroll.x.getNow()), T.setScrollTop(T.bzscroll.y.getNow()), e <= 1 ? T.timer = u(c) : (T.scrollrunning = !1, T.timer = 0, T.triggerScrollEnd())
						}
					};
					T.scrollrunning || (T.triggerScrollStart(i, r, e, o, l), T.scrollrunning = !0, T.timer = u(c))
				}, this.cancelScroll = function () {
					return T.timer && h(T.timer), T.timer = 0, T.bzscroll = !1, T.scrollrunning = !1, T
				};
			else this.doScrollLeft = function (e, o) {
				var t = T.getScrollTop();
				T.doScrollPos(e, t, o)
			}, this.doScrollTop = function (e, o) {
				var t = T.getScrollLeft();
				T.doScrollPos(t, e, o)
			}, this.doScrollPos = function (e, o, t) {
				var r = e > T.page.maxw ? T.page.maxw : e;
				r < 0 && (r = 0);
				var i = o > T.page.maxh ? T.page.maxh : o;
				i < 0 && (i = 0), T.synched("scroll", function () {
					T.setScrollTop(i), T.setScrollLeft(r)
				})
			}, this.cancelScroll = function () {};
			this.doScrollBy = function (e, o) {
				z(0, e)
			}, this.doScrollLeftBy = function (e, o) {
				z(e, 0)
			}, this.doScrollTo = function (e, o) {
				var t = o ? Math.round(e * T.scrollratio.y) : e;
				t < 0 ? t = 0 : t > T.page.maxh && (t = T.page.maxh), T.cursorfreezed = !1, T.doScrollTop(e)
			}, this.checkContentSize = function () {
				var e = T.getContentSize();
				e.h == T.page.h && e.w == T.page.w || T.resize(!1, e)
			}, T.onscroll = function (e) {
				T.rail.drag || T.cursorfreezed || T.synched("scroll", function () {
					T.scroll.y = Math.round(T.getScrollTop() / T.scrollratio.y), T.railh && (T.scroll.x = Math.round(T.getScrollLeft() / T.scrollratio.x)), T.noticeCursor()
				})
			}, T.bind(T.docscroll, "scroll", T.onscroll), this.doZoomIn = function (e) {
				if (!T.zoomactive) {
					T.zoomactive = !0, T.zoomrestore = {
						style: {}
					};
					var o = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"],
						t = T.win[0].style;
					for (var r in o) {
						var i = o[r];
						T.zoomrestore.style[i] = void 0 !== t[i] ? t[i] : ""
					}
					T.zoomrestore.style.width = T.win.css("width"), T.zoomrestore.style.height = T.win.css("height"), T.zoomrestore.padding = {
						w: T.win.outerWidth() - T.win.width(),
						h: T.win.outerHeight() - T.win.height()
					}, P.isios4 && (T.zoomrestore.scrollTop = c.scrollTop(), c.scrollTop(0)), T.win.css({
						position: P.isios4 ? "absolute" : "fixed",
						top: 0,
						left: 0,
						zIndex: s + 100,
						margin: 0
					});
					var n = T.win.css("backgroundColor");
					return ("" === n || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(n)) && T.win.css("backgroundColor", "#fff"), T.rail.css({
						zIndex: s + 101
					}), T.zoom.css({
						zIndex: s + 102
					}), T.zoom.css("backgroundPosition", "0 -18px"), T.resizeZoom(), T.onzoomin && T.onzoomin.call(T), T.cancelEvent(e)
				}
			}, this.doZoomOut = function (e) {
				if (T.zoomactive) return T.zoomactive = !1, T.win.css("margin", ""), T.win.css(T.zoomrestore.style), P.isios4 && c.scrollTop(T.zoomrestore.scrollTop), T.rail.css({
					"z-index": T.zindex
				}), T.zoom.css({
					"z-index": T.zindex
				}), T.zoomrestore = !1, T.zoom.css("backgroundPosition", "0 0"), T.onResize(), T.onzoomout && T.onzoomout.call(T), T.cancelEvent(e)
			}, this.doZoom = function (e) {
				return T.zoomactive ? T.doZoomOut(e) : T.doZoomIn(e)
			}, this.resizeZoom = function () {
				if (T.zoomactive) {
					var e = T.getScrollTop();
					T.win.css({
						width: c.width() - T.zoomrestore.padding.w + "px",
						height: c.height() - T.zoomrestore.padding.h + "px"
					}), T.onResize(), T.setScrollTop(Math.min(T.page.maxh, e))
				}
			}, this.init(), n.nicescroll.push(this)
		},
		y = function (e) {
			var o = this;
			this.nc = e, this.lastx = 0, this.lasty = 0, this.speedx = 0, this.speedy = 0, this.lasttime = 0, this.steptime = 0, this.snapx = !1, this.snapy = !1, this.demulx = 0, this.demuly = 0, this.lastscrollx = -1, this.lastscrolly = -1, this.chkx = 0, this.chky = 0, this.timer = 0, this.reset = function (e, t) {
				o.stop(), o.steptime = 0, o.lasttime = f(), o.speedx = 0, o.speedy = 0, o.lastx = e, o.lasty = t, o.lastscrollx = -1, o.lastscrolly = -1
			}, this.update = function (e, t) {
				var r = f();
				o.steptime = r - o.lasttime, o.lasttime = r;
				var i = t - o.lasty,
					s = e - o.lastx,
					n = o.nc.getScrollTop() + i,
					l = o.nc.getScrollLeft() + s;
				o.snapx = l < 0 || l > o.nc.page.maxw, o.snapy = n < 0 || n > o.nc.page.maxh, o.speedx = s, o.speedy = i, o.lastx = e, o.lasty = t
			}, this.stop = function () {
				o.nc.unsynched("domomentum2d"), o.timer && clearTimeout(o.timer), o.timer = 0, o.lastscrollx = -1, o.lastscrolly = -1
			}, this.doSnapy = function (e, t) {
				var r = !1;
				t < 0 ? (t = 0, r = !0) : t > o.nc.page.maxh && (t = o.nc.page.maxh, r = !0), e < 0 ? (e = 0, r = !0) : e > o.nc.page.maxw && (e = o.nc.page.maxw, r = !0), r ? o.nc.doScrollPos(e, t, o.nc.opt.snapbackspeed) : o.nc.triggerScrollEnd()
			}, this.doMomentum = function (e) {
				var t = f(),
					r = e ? t + e : o.lasttime,
					i = o.nc.getScrollLeft(),
					s = o.nc.getScrollTop(),
					n = o.nc.page.maxh,
					l = o.nc.page.maxw;
				o.speedx = l > 0 ? Math.min(60, o.speedx) : 0, o.speedy = n > 0 ? Math.min(60, o.speedy) : 0;
				var a = r && t - r <= 60;
				(s < 0 || s > n || i < 0 || i > l) && (a = !1);
				var c = !(!o.speedy || !a) && o.speedy,
					d = !(!o.speedx || !a) && o.speedx;
				if (c || d) {
					var u = Math.max(16, o.steptime);
					if (u > 50) {
						var h = u / 50;
						o.speedx *= h, o.speedy *= h, u = 50
					}
					o.demulxy = 0, o.lastscrollx = o.nc.getScrollLeft(), o.chkx = o.lastscrollx, o.lastscrolly = o.nc.getScrollTop(), o.chky = o.lastscrolly;
					var p = o.lastscrollx,
						m = o.lastscrolly,
						g = function () {
							var e = f() - t > 600 ? .04 : .02;
							o.speedx && (p = Math.floor(o.lastscrollx - o.speedx * (1 - o.demulxy)), o.lastscrollx = p, (p < 0 || p > l) && (e = .1)), o.speedy && (m = Math.floor(o.lastscrolly - o.speedy * (1 - o.demulxy)), o.lastscrolly = m, (m < 0 || m > n) && (e = .1)), o.demulxy = Math.min(1, o.demulxy + e), o.nc.synched("domomentum2d", function () {
								if (o.speedx) {
									o.nc.getScrollLeft();
									o.chkx = p, o.nc.setScrollLeft(p)
								}
								if (o.speedy) {
									o.nc.getScrollTop();
									o.chky = m, o.nc.setScrollTop(m)
								}
								o.timer || (o.nc.hideCursor(), o.doSnapy(p, m))
							}), o.demulxy < 1 ? o.timer = setTimeout(g, u) : (o.stop(), o.nc.hideCursor(), o.doSnapy(p, m))
						};
					g()
				} else o.doSnapy(o.nc.getScrollLeft(), o.nc.getScrollTop())
			}
		},
		x = e.fn.scrollTop;
	e.cssHooks.pageYOffset = {
		get: function (e, o, t) {
			var r = n.data(e, "__nicescroll") || !1;
			return r && r.ishwscroll ? r.getScrollTop() : x.call(e)
		},
		set: function (e, o) {
			var t = n.data(e, "__nicescroll") || !1;
			return t && t.ishwscroll ? t.setScrollTop(parseInt(o)) : x.call(e, o), this
		}
	}, e.fn.scrollTop = function (e) {
		if (void 0 === e) {
			var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
			return o && o.ishwscroll ? o.getScrollTop() : x.call(this)
		}
		return this.each(function () {
			var o = n.data(this, "__nicescroll") || !1;
			o && o.ishwscroll ? o.setScrollTop(parseInt(e)) : x.call(n(this), e)
		})
	};
	var S = e.fn.scrollLeft;
	n.cssHooks.pageXOffset = {
		get: function (e, o, t) {
			var r = n.data(e, "__nicescroll") || !1;
			return r && r.ishwscroll ? r.getScrollLeft() : S.call(e)
		},
		set: function (e, o) {
			var t = n.data(e, "__nicescroll") || !1;
			return t && t.ishwscroll ? t.setScrollLeft(parseInt(o)) : S.call(e, o), this
		}
	}, e.fn.scrollLeft = function (e) {
		if (void 0 === e) {
			var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
			return o && o.ishwscroll ? o.getScrollLeft() : S.call(this)
		}
		return this.each(function () {
			var o = n.data(this, "__nicescroll") || !1;
			o && o.ishwscroll ? o.setScrollLeft(parseInt(e)) : S.call(n(this), e)
		})
	};
	var z = function (e) {
		var o = this;
		if (this.length = 0, this.name = "nicescrollarray", this.each = function (e) {
				return n.each(o, e), o
			}, this.push = function (e) {
				o[o.length] = e, o.length++
			}, this.eq = function (e) {
				return o[e]
			}, e)
			for (var t = 0; t < e.length; t++) {
				var r = n.data(e[t], "__nicescroll") || !1;
				r && (this[this.length] = r, this.length++)
			}
		return this
	};
	! function (e, o, t) {
		for (var r = 0, i = o.length; r < i; r++) t(e, o[r])
	}(z.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function (e, o) {
		e[o] = function () {
			var e = arguments;
			return this.each(function () {
				this[o].apply(this, e)
			})
		}
	}), e.fn.getNiceScroll = function (e) {
		return void 0 === e ? new z(this) : this[e] && n.data(this[e], "__nicescroll") || !1
	}, (e.expr.pseudos || e.expr[":"]).nicescroll = function (e) {
		return void 0 !== n.data(e, "__nicescroll")
	}, n.fn.niceScroll = function (e, o) {
		void 0 !== o || "object" != typeof e || "jquery" in e || (o = e, e = !1);
		var t = new z;
		return this.each(function () {
			var r = n(this),
				i = n.extend({}, o);
			if (e) {
				var s = n(e);
				i.doc = s.length > 1 ? n(e, r) : s, i.win = r
			}!("doc" in i) || "win" in i || (i.win = r);
			var l = r.data("__nicescroll") || !1;
			l || (i.doc = i.doc || r, l = new b(i, r), r.data("__nicescroll", l)), t.push(l)
		}), 1 === t.length ? t[0] : t
	}, a.NiceScroll = {
		getjQuery: function () {
			return e
		}
	}, n.nicescroll || (n.nicescroll = new z, n.nicescroll.options = g)
});


/*! jQuery UI - v1.12.1 - 2019-01-09
 * http://jqueryui.com
 * Includes: keycode.js, widget.js, widgets/mouse.js, widgets/slider.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

! function (t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
	t.ui = t.ui || {}, t.ui.version = "1.12.1";
	var e, i, s, n, o = 0,
		a = Array.prototype.slice;
	t.cleanData = (n = t.cleanData, function (e) {
			var i, s, o;
			for (o = 0; null != (s = e[o]); o++) try {
				(i = t._data(s, "events")) && i.remove && t(s).triggerHandler("remove")
			} catch (t) {}
			n(e)
		}), t.widget = function (e, i, s) {
			var n, o, a, l = {},
				r = e.split(".")[0],
				h = r + "-" + (e = e.split(".")[1]);
			return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][h.toLowerCase()] = function (e) {
				return !!t.data(e, h)
			}, t[r] = t[r] || {}, n = t[r][e], o = t[r][e] = function (t, e) {
				return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e)
			}, t.extend(o, n, {
				version: s.version,
				_proto: t.extend({}, s),
				_childConstructors: []
			}), (a = new i).options = t.widget.extend({}, a.options), t.each(s, function (e, s) {
				return t.isFunction(s) ? void(l[e] = function () {
					function t() {
						return i.prototype[e].apply(this, arguments)
					}

					function n(t) {
						return i.prototype[e].apply(this, t)
					}
					return function () {
						var e, i = this._super,
							o = this._superApply;
						return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
					}
				}()) : void(l[e] = s)
			}), o.prototype = t.widget.extend(a, {
				widgetEventPrefix: n && a.widgetEventPrefix || e
			}, l, {
				constructor: o,
				namespace: r,
				widgetName: e,
				widgetFullName: h
			}), n ? (t.each(n._childConstructors, function (e, i) {
				var s = i.prototype;
				t.widget(s.namespace + "." + s.widgetName, o, i._proto)
			}), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
		}, t.widget.extend = function (e) {
			for (var i, s, n = a.call(arguments, 1), o = 0, l = n.length; l > o; o++)
				for (i in n[o]) s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
			return e
		}, t.widget.bridge = function (e, i) {
			var s = i.prototype.widgetFullName || e;
			t.fn[e] = function (n) {
				var o = "string" == typeof n,
					l = a.call(arguments, 1),
					r = this;
				return o ? this.length || "instance" !== n ? this.each(function () {
					var i, o = t.data(this, s);
					return "instance" === n ? (r = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, l)) !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + n + "'")
				}) : r = void 0 : (l.length && (n = t.widget.extend.apply(null, [n].concat(l))), this.each(function () {
					var e = t.data(this, s);
					e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this))
				})), r
			}
		}, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
			widgetName: "widget",
			widgetEventPrefix: "",
			defaultElement: "<div>",
			options: {
				classes: {},
				disabled: !1,
				create: null
			},
			_createWidget: function (e, i) {
				i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = o++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
					remove: function (t) {
						t.target === i && this.destroy()
					}
				}), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
			},
			_getCreateOptions: function () {
				return {}
			},
			_getCreateEventData: t.noop,
			_create: t.noop,
			_init: t.noop,
			destroy: function () {
				var e = this;
				this._destroy(), t.each(this.classesElementLookup, function (t, i) {
					e._removeClass(i, t)
				}), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
			},
			_destroy: t.noop,
			widget: function () {
				return this.element
			},
			option: function (e, i) {
				var s, n, o, a = e;
				if (0 === arguments.length) return t.widget.extend({}, this.options);
				if ("string" == typeof e)
					if (a = {}, s = e.split("."), e = s.shift(), s.length) {
						for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
						if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
						n[e] = i
					} else {
						if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
						a[e] = i
					} return this._setOptions(a), this
			},
			_setOptions: function (t) {
				var e;
				for (e in t) this._setOption(e, t[e]);
				return this
			},
			_setOption: function (t, e) {
				return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
			},
			_setOptionClasses: function (e) {
				var i, s, n;
				for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
					element: s,
					keys: i,
					classes: e,
					add: !0
				})))
			},
			_setOptionDisabled: function (t) {
				this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
			},
			enable: function () {
				return this._setOptions({
					disabled: !1
				})
			},
			disable: function () {
				return this._setOptions({
					disabled: !0
				})
			},
			_classes: function (e) {
				function i(i, o) {
					var a, l;
					for (l = 0; i.length > l; l++) a = n.classesElementLookup[i[l]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[l]] = a, s.push(i[l]), o && e.classes[i[l]] && s.push(e.classes[i[l]])
				}
				var s = [],
					n = this;
				return e = t.extend({
					element: this.element,
					classes: this.options.classes || {}
				}, e), this._on(e.element, {
					remove: "_untrackClassesElement"
				}), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ")
			},
			_untrackClassesElement: function (e) {
				var i = this;
				t.each(i.classesElementLookup, function (s, n) {
					-1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()))
				})
			},
			_removeClass: function (t, e, i) {
				return this._toggleClass(t, e, i, !1)
			},
			_addClass: function (t, e, i) {
				return this._toggleClass(t, e, i, !0)
			},
			_toggleClass: function (t, e, i, s) {
				s = "boolean" == typeof s ? s : i;
				var n = "string" == typeof t || null === t,
					o = {
						extra: n ? e : i,
						keys: n ? t : e,
						element: n ? this.element : t,
						add: s
					};
				return o.element.toggleClass(this._classes(o), s), this
			},
			_on: function (e, i, s) {
				var n, o = this;
				"boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function (s, a) {
					function l() {
						return e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
					}
					"string" != typeof a && (l.guid = a.guid = a.guid || l.guid || t.guid++);
					var r = s.match(/^([\w:-]*)\s*(.*)$/),
						h = r[1] + o.eventNamespace,
						u = r[2];
					u ? n.on(h, u, l) : i.on(h, l)
				})
			},
			_off: function (e, i) {
				i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
			},
			_delay: function (t, e) {
				var i = this;
				return setTimeout(function () {
					return ("string" == typeof t ? i[t] : t).apply(i, arguments)
				}, e || 0)
			},
			_hoverable: function (e) {
				this.hoverable = this.hoverable.add(e), this._on(e, {
					mouseenter: function (e) {
						this._addClass(t(e.currentTarget), null, "ui-state-hover")
					},
					mouseleave: function (e) {
						this._removeClass(t(e.currentTarget), null, "ui-state-hover")
					}
				})
			},
			_focusable: function (e) {
				this.focusable = this.focusable.add(e), this._on(e, {
					focusin: function (e) {
						this._addClass(t(e.currentTarget), null, "ui-state-focus")
					},
					focusout: function (e) {
						this._removeClass(t(e.currentTarget), null, "ui-state-focus")
					}
				})
			},
			_trigger: function (e, i, s) {
				var n, o, a = this.options[e];
				if (s = s || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
					for (n in o) n in i || (i[n] = o[n]);
				return this.element.trigger(i, s), !(t.isFunction(a) && !1 === a.apply(this.element[0], [i].concat(s)) || i.isDefaultPrevented())
			}
		}, t.each({
			show: "fadeIn",
			hide: "fadeOut"
		}, function (e, i) {
			t.Widget.prototype["_" + e] = function (s, n, o) {
				"string" == typeof n && (n = {
					effect: n
				});
				var a, l = n ? !0 === n || "number" == typeof n ? i : n.effect || i : e;
				"number" == typeof (n = n || {}) && (n = {
					duration: n
				}), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[l] ? s[e](n) : l !== e && s[l] ? s[l](n.duration, n.easing, o) : s.queue(function (i) {
					t(this)[e](), o && o.call(s[0]), i()
				})
			}
		}), t.widget,
		function () {
			function e(t, e, i) {
				return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)]
			}

			function i(e, i) {
				return parseInt(t.css(e, i), 10) || 0
			}
			var s, n = Math.max,
				o = Math.abs,
				a = /left|center|right/,
				l = /top|center|bottom/,
				r = /[\+\-]\d+(\.[\d]+)?%?/,
				h = /^\w+/,
				u = /%$/,
				c = t.fn.position;
			t.position = {
				scrollbarWidth: function () {
					if (void 0 !== s) return s;
					var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
						o = n.children()[0];
					return t("body").append(n), e = o.offsetWidth, n.css("overflow", "scroll"), e === (i = o.offsetWidth) && (i = n[0].clientWidth), n.remove(), s = e - i
				},
				getScrollInfo: function (e) {
					var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
						s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
						n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
					return {
						width: "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
						height: n ? t.position.scrollbarWidth() : 0
					}
				},
				getWithinInfo: function (e) {
					var i = t(e || window),
						s = t.isWindow(i[0]),
						n = !!i[0] && 9 === i[0].nodeType;
					return {
						element: i,
						isWindow: s,
						isDocument: n,
						offset: !s && !n ? t(e).offset() : {
							left: 0,
							top: 0
						},
						scrollLeft: i.scrollLeft(),
						scrollTop: i.scrollTop(),
						width: i.outerWidth(),
						height: i.outerHeight()
					}
				}
			}, t.fn.position = function (s) {
				if (!s || !s.of) return c.apply(this, arguments);
				s = t.extend({}, s);
				var u, d, f, m, p, g, _, v, w = t(s.of),
					y = t.position.getWithinInfo(s.within),
					b = t.position.getScrollInfo(y),
					x = (s.collision || "flip").split(" "),
					M = {};
				return g = 9 === (v = (_ = w)[0]).nodeType ? {
					width: _.width(),
					height: _.height(),
					offset: {
						top: 0,
						left: 0
					}
				} : t.isWindow(v) ? {
					width: _.width(),
					height: _.height(),
					offset: {
						top: _.scrollTop(),
						left: _.scrollLeft()
					}
				} : v.preventDefault ? {
					width: 0,
					height: 0,
					offset: {
						top: v.pageY,
						left: v.pageX
					}
				} : {
					width: _.outerWidth(),
					height: _.outerHeight(),
					offset: _.offset()
				}, w[0].preventDefault && (s.at = "left top"), d = g.width, f = g.height, m = g.offset, p = t.extend({}, m), t.each(["my", "at"], function () {
					var t, e, i = (s[this] || "").split(" ");
					1 === i.length && (i = a.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = a.test(i[0]) ? i[0] : "center", i[1] = l.test(i[1]) ? i[1] : "center", t = r.exec(i[0]), e = r.exec(i[1]), M[this] = [t ? t[0] : 0, e ? e[0] : 0], s[this] = [h.exec(i[0])[0], h.exec(i[1])[0]]
				}), 1 === x.length && (x[1] = x[0]), "right" === s.at[0] ? p.left += d : "center" === s.at[0] && (p.left += d / 2), "bottom" === s.at[1] ? p.top += f : "center" === s.at[1] && (p.top += f / 2), u = e(M.at, d, f), p.left += u[0], p.top += u[1], this.each(function () {
					var a, l, r = t(this),
						h = r.outerWidth(),
						c = r.outerHeight(),
						g = i(this, "marginLeft"),
						_ = i(this, "marginTop"),
						v = h + g + i(this, "marginRight") + b.width,
						C = c + _ + i(this, "marginBottom") + b.height,
						D = t.extend({}, p),
						k = e(M.my, r.outerWidth(), r.outerHeight());
					"right" === s.my[0] ? D.left -= h : "center" === s.my[0] && (D.left -= h / 2), "bottom" === s.my[1] ? D.top -= c : "center" === s.my[1] && (D.top -= c / 2), D.left += k[0], D.top += k[1], a = {
						marginLeft: g,
						marginTop: _
					}, t.each(["left", "top"], function (e, i) {
						t.ui.position[x[e]] && t.ui.position[x[e]][i](D, {
							targetWidth: d,
							targetHeight: f,
							elemWidth: h,
							elemHeight: c,
							collisionPosition: a,
							collisionWidth: v,
							collisionHeight: C,
							offset: [u[0] + k[0], u[1] + k[1]],
							my: s.my,
							at: s.at,
							within: y,
							elem: r
						})
					}), s.using && (l = function (t) {
						var e = m.left - D.left,
							i = e + d - h,
							a = m.top - D.top,
							l = a + f - c,
							u = {
								target: {
									element: w,
									left: m.left,
									top: m.top,
									width: d,
									height: f
								},
								element: {
									element: r,
									left: D.left,
									top: D.top,
									width: h,
									height: c
								},
								horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
								vertical: 0 > l ? "top" : a > 0 ? "bottom" : "middle"
							};
						h > d && d > o(e + i) && (u.horizontal = "center"), c > f && f > o(a + l) && (u.vertical = "middle"), u.important = n(o(e), o(i)) > n(o(a), o(l)) ? "horizontal" : "vertical", s.using.call(this, t, u)
					}), r.offset(t.extend(D, {
						using: l
					}))
				})
			}, t.ui.position = {
				fit: {
					left: function (t, e) {
						var i, s = e.within,
							o = s.isWindow ? s.scrollLeft : s.offset.left,
							a = s.width,
							l = t.left - e.collisionPosition.marginLeft,
							r = o - l,
							h = l + e.collisionWidth - a - o;
						e.collisionWidth > a ? r > 0 && 0 >= h ? (i = t.left + r + e.collisionWidth - a - o, t.left += r - i) : t.left = h > 0 && 0 >= r ? o : r > h ? o + a - e.collisionWidth : o : r > 0 ? t.left += r : h > 0 ? t.left -= h : t.left = n(t.left - l, t.left)
					},
					top: function (t, e) {
						var i, s = e.within,
							o = s.isWindow ? s.scrollTop : s.offset.top,
							a = e.within.height,
							l = t.top - e.collisionPosition.marginTop,
							r = o - l,
							h = l + e.collisionHeight - a - o;
						e.collisionHeight > a ? r > 0 && 0 >= h ? (i = t.top + r + e.collisionHeight - a - o, t.top += r - i) : t.top = h > 0 && 0 >= r ? o : r > h ? o + a - e.collisionHeight : o : r > 0 ? t.top += r : h > 0 ? t.top -= h : t.top = n(t.top - l, t.top)
					}
				},
				flip: {
					left: function (t, e) {
						var i, s, n = e.within,
							a = n.offset.left + n.scrollLeft,
							l = n.width,
							r = n.isWindow ? n.scrollLeft : n.offset.left,
							h = t.left - e.collisionPosition.marginLeft,
							u = h - r,
							c = h + e.collisionWidth - l - r,
							d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
							f = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
							m = -2 * e.offset[0];
						0 > u ? (0 > (i = t.left + d + f + m + e.collisionWidth - l - a) || o(u) > i) && (t.left += d + f + m) : c > 0 && (((s = t.left - e.collisionPosition.marginLeft + d + f + m - r) > 0 || c > o(s)) && (t.left += d + f + m))
					},
					top: function (t, e) {
						var i, s, n = e.within,
							a = n.offset.top + n.scrollTop,
							l = n.height,
							r = n.isWindow ? n.scrollTop : n.offset.top,
							h = t.top - e.collisionPosition.marginTop,
							u = h - r,
							c = h + e.collisionHeight - l - r,
							d = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
							f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
							m = -2 * e.offset[1];
						0 > u ? (0 > (s = t.top + d + f + m + e.collisionHeight - l - a) || o(u) > s) && (t.top += d + f + m) : c > 0 && (((i = t.top - e.collisionPosition.marginTop + d + f + m - r) > 0 || c > o(i)) && (t.top += d + f + m))
					}
				},
				flipfit: {
					left: function () {
						t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
					},
					top: function () {
						t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
					}
				}
			}
		}(), t.ui.position, t.extend(t.expr[":"], {
			data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
				return function (i) {
					return !!t.data(i, e)
				}
			}) : function (e, i, s) {
				return !!t.data(e, s[3])
			}
		}), t.fn.extend({
			disableSelection: (s = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function () {
				return this.on(s + ".ui-disableSelection", function (t) {
					t.preventDefault()
				})
			}),
			enableSelection: function () {
				return this.off(".ui-disableSelection")
			}
		}), t.ui.focusable = function (e, i) {
			var s, n, o, a, l, r = e.nodeName.toLowerCase();
			return "area" === r ? (n = (s = e.parentNode).name, !(!e.href || !n || "map" !== s.nodeName.toLowerCase()) && ((o = t("img[usemap='#" + n + "']")).length > 0 && o.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(r) ? (a = !e.disabled) && ((l = t(e).closest("fieldset")[0]) && (a = !l.disabled)) : a = "a" === r && e.href || i, a && t(e).is(":visible") && function (t) {
				for (var e = t.css("visibility");
					"inherit" === e;) t = t.parent(), e = t.css("visibility");
				return "hidden" !== e
			}(t(e)))
		}, t.extend(t.expr[":"], {
			focusable: function (e) {
				return t.ui.focusable(e, null != t.attr(e, "tabindex"))
			}
		}), t.ui.focusable, t.fn.form = function () {
			return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
		}, t.ui.formResetMixin = {
			_formResetHandler: function () {
				var e = t(this);
				setTimeout(function () {
					var i = e.data("ui-form-reset-instances");
					t.each(i, function () {
						this.refresh()
					})
				})
			},
			_bindFormResetHandler: function () {
				if (this.form = this.element.form(), this.form.length) {
					var t = this.form.data("ui-form-reset-instances") || [];
					t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
				}
			},
			_unbindFormResetHandler: function () {
				if (this.form.length) {
					var e = this.form.data("ui-form-reset-instances");
					e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
				}
			}
		}, t.ui.keyCode = {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}, t.ui.escapeSelector = (i = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, function (t) {
			return t.replace(i, "\\$1")
		}), t.fn.labels = function () {
			var e, i, s, n, o;
			return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), (s = this.attr("id")) && (o = (e = this.eq(0).parents().last()).add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), this.pushStack(n))
		}, t.fn.scrollParent = function (e) {
			var i = this.css("position"),
				s = "absolute" === i,
				n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
				o = this.parents().filter(function () {
					var e = t(this);
					return (!s || "static" !== e.css("position")) && n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
				}).eq(0);
			return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
		}, t.extend(t.expr[":"], {
			tabbable: function (e) {
				var i = t.attr(e, "tabindex"),
					s = null != i;
				return (!s || i >= 0) && t.ui.focusable(e, s)
			}
		}), t.fn.extend({
			uniqueId: (e = 0, function () {
				return this.each(function () {
					this.id || (this.id = "ui-id-" + ++e)
				})
			}),
			removeUniqueId: function () {
				return this.each(function () {
					/^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
				})
			}
		}), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
	var l = !1;
	t(document).on("mouseup", function () {
		l = !1
	}), t.widget("ui.mouse", {
		version: "1.12.1",
		options: {
			cancel: "input, textarea, button, select, option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function () {
			var e = this;
			this.element.on("mousedown." + this.widgetName, function (t) {
				return e._mouseDown(t)
			}).on("click." + this.widgetName, function (i) {
				return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
			}), this.started = !1
		},
		_mouseDestroy: function () {
			this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
		},
		_mouseDown: function (e) {
			if (!l) {
				this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
				var i = this,
					s = 1 === e.which,
					n = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
				return !(s && !n && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
					i.mouseDelayMet = !0
				}, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
					return i._mouseMove(t)
				}, this._mouseUpDelegate = function (t) {
					return i._mouseUp(t)
				}, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), l = !0, !0))
			}
		},
		_mouseMove: function (e) {
			if (this._mouseMoved) {
				if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
				if (!e.which)
					if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
					else if (!this.ignoreMissingWhich) return this._mouseUp(e)
			}
			return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
		},
		_mouseUp: function (e) {
			this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, l = !1, e.preventDefault()
		},
		_mouseDistanceMet: function (t) {
			return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
		},
		_mouseDelayMet: function () {
			return this.mouseDelayMet
		},
		_mouseStart: function () {},
		_mouseDrag: function () {},
		_mouseStop: function () {},
		_mouseCapture: function () {
			return !0
		}
	}), t.widget("ui.slider", t.ui.mouse, {
		version: "1.12.1",
		widgetEventPrefix: "slide",
		options: {
			animate: !1,
			classes: {
				"ui-slider": "ui-corner-all",
				"ui-slider-handle": "ui-corner-all",
				"ui-slider-range": "ui-corner-all ui-widget-header"
			},
			distance: 0,
			max: 100,
			min: 0,
			orientation: "horizontal",
			range: !1,
			step: 1,
			value: 0,
			values: null,
			change: null,
			slide: null,
			start: null,
			stop: null
		},
		numPages: 5,
		_create: function () {
			this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
		},
		_refresh: function () {
			this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
		},
		_createHandles: function () {
			var e, i, s = this.options,
				n = this.element.find(".ui-slider-handle"),
				o = [];
			for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) o.push("<span tabindex='0'></span>");
			this.handles = n.add(t(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (e) {
				t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
			})
		},
		_createRange: function () {
			var e = this.options;
			e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
				left: "",
				bottom: ""
			})) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
		},
		_setupEvents: function () {
			this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
		},
		_destroy: function () {
			this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
		},
		_mouseCapture: function (e) {
			var i, s, n, o, a, l, r, h = this,
				u = this.options;
			return !u.disabled && (this.elementSize = {
				width: this.element.outerWidth(),
				height: this.element.outerHeight()
			}, this.elementOffset = this.element.offset(), i = {
				x: e.pageX,
				y: e.pageY
			}, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
				var i = Math.abs(s - h.values(e));
				(n > i || n === i && (e === h._lastChangedValue || h.values(e) === u.min)) && (n = i, o = t(this), a = e)
			}), !1 !== this._start(e, a) && (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), l = o.offset(), r = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = r ? {
				left: 0,
				top: 0
			} : {
				left: e.pageX - l.left - o.width() / 2,
				top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
			}, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
		},
		_mouseStart: function () {
			return !0
		},
		_mouseDrag: function (t) {
			var e = {
					x: t.pageX,
					y: t.pageY
				},
				i = this._normValueFromMouse(e);
			return this._slide(t, this._handleIndex, i), !1
		},
		_mouseStop: function (t) {
			return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
		},
		_detectOrientation: function () {
			this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
		},
		_normValueFromMouse: function (t) {
			var e, i, s, n, o;
			return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (s = i / e) > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
		},
		_uiHash: function (t, e, i) {
			var s = {
				handle: this.handles[t],
				handleIndex: t,
				value: void 0 !== e ? e : this.value()
			};
			return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s
		},
		_hasMultipleValues: function () {
			return this.options.values && this.options.values.length
		},
		_start: function (t, e) {
			return this._trigger("start", t, this._uiHash(e))
		},
		_slide: function (t, e, i) {
			var s, n = this.value(),
				o = this.values();
			this._hasMultipleValues() && (s = this.values(e ? 0 : 1), n = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)), o[e] = i), i !== n && (!1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
		},
		_stop: function (t, e) {
			this._trigger("stop", t, this._uiHash(e))
		},
		_change: function (t, e) {
			this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
		},
		value: function (t) {
			return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
		},
		values: function (e, i) {
			var s, n, o;
			if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
			if (!arguments.length) return this._values();
			if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
			for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
			this._refreshValue()
		},
		_setOption: function (e, i) {
			var s, n = 0;
			switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
				case "orientation":
					this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
					break;
				case "value":
					this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
					break;
				case "values":
					for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
					this._animateOff = !1;
					break;
				case "step":
				case "min":
				case "max":
					this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
					break;
				case "range":
					this._animateOff = !0, this._refresh(), this._animateOff = !1
			}
		},
		_setOptionDisabled: function (t) {
			this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
		},
		_value: function () {
			var t = this.options.value;
			return this._trimAlignValue(t)
		},
		_values: function (t) {
			var e, i, s;
			if (arguments.length) return e = this.options.values[t], this._trimAlignValue(e);
			if (this._hasMultipleValues()) {
				for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
				return i
			}
			return []
		},
		_trimAlignValue: function (t) {
			if (this._valueMin() >= t) return this._valueMin();
			if (t >= this._valueMax()) return this._valueMax();
			var e = this.options.step > 0 ? this.options.step : 1,
				i = (t - this._valueMin()) % e,
				s = t - i;
			return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
		},
		_calculateNewMax: function () {
			var t = this.options.max,
				e = this._valueMin(),
				i = this.options.step;
			(t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
		},
		_precision: function () {
			var t = this._precisionOf(this.options.step);
			return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
		},
		_precisionOf: function (t) {
			var e = "" + t,
				i = e.indexOf(".");
			return -1 === i ? 0 : e.length - i - 1
		},
		_valueMin: function () {
			return this.options.min
		},
		_valueMax: function () {
			return this.max
		},
		_refreshRange: function (t) {
			"vertical" === t && this.range.css({
				width: "",
				left: ""
			}), "horizontal" === t && this.range.css({
				height: "",
				bottom: ""
			})
		},
		_refreshValue: function () {
			var e, i, s, n, o, a = this.options.range,
				l = this.options,
				r = this,
				h = !this._animateOff && l.animate,
				u = {};
			this._hasMultipleValues() ? this.handles.each(function (s) {
				i = (r.values(s) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100, u["horizontal" === r.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](u, l.animate), !0 === r.options.range && ("horizontal" === r.orientation ? (0 === s && r.range.stop(1, 1)[h ? "animate" : "css"]({
					left: i + "%"
				}, l.animate), 1 === s && r.range[h ? "animate" : "css"]({
					width: i - e + "%"
				}, {
					queue: !1,
					duration: l.animate
				})) : (0 === s && r.range.stop(1, 1)[h ? "animate" : "css"]({
					bottom: i + "%"
				}, l.animate), 1 === s && r.range[h ? "animate" : "css"]({
					height: i - e + "%"
				}, {
					queue: !1,
					duration: l.animate
				}))), e = i
			}) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? (s - n) / (o - n) * 100 : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](u, l.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
				width: i + "%"
			}, l.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
				width: 100 - i + "%"
			}, l.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
				height: i + "%"
			}, l.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
				height: 100 - i + "%"
			}, l.animate))
		},
		_handleEvents: {
			keydown: function (e) {
				var i, s, n, o = t(e.target).data("ui-slider-handle-index");
				switch (e.keyCode) {
					case t.ui.keyCode.HOME:
					case t.ui.keyCode.END:
					case t.ui.keyCode.PAGE_UP:
					case t.ui.keyCode.PAGE_DOWN:
					case t.ui.keyCode.UP:
					case t.ui.keyCode.RIGHT:
					case t.ui.keyCode.DOWN:
					case t.ui.keyCode.LEFT:
						if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, o))) return
				}
				switch (n = this.options.step, i = s = this._hasMultipleValues() ? this.values(o) : this.value(), e.keyCode) {
					case t.ui.keyCode.HOME:
						s = this._valueMin();
						break;
					case t.ui.keyCode.END:
						s = this._valueMax();
						break;
					case t.ui.keyCode.PAGE_UP:
						s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
						break;
					case t.ui.keyCode.PAGE_DOWN:
						s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
						break;
					case t.ui.keyCode.UP:
					case t.ui.keyCode.RIGHT:
						if (i === this._valueMax()) return;
						s = this._trimAlignValue(i + n);
						break;
					case t.ui.keyCode.DOWN:
					case t.ui.keyCode.LEFT:
						if (i === this._valueMin()) return;
						s = this._trimAlignValue(i - n)
				}
				this._slide(e, o, s)
			},
			keyup: function (e) {
				var i = t(e.target).data("ui-slider-handle-index");
				this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
			}
		}
	})
});
