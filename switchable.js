/* jdf-1.0.0/ switchable.js Date:2015-09-15 18:39:14 */
!function(a, b) {
    a.ui.define("switchable", {
        options: {
            hasCssLink: !1,
            baseVersion: "1.0.0",
            cssLinkVersion: "1.0.0",
            type: "tab",
            direction: "left",
            hasSetup: !1,
            navClass: "ui-switchable-trigger",
            navItem: "ui-switchable-item",
            navSelectedClass: "ui-switchable-selected",
            navDisabledClass: "disabled",
            navIframe: "data-iframe",
            contentClass: "ui-switchable-panel-main",
            mainClass: "ui-switchable-panel",
            mainSelectedClass: "ui-switchable-panel-selected",
            bodyClass: "ui-switchable-panel-body",
            hasPage: !1,
            autoLock: !1,
            prevClass: "ui-switchable-prev",
            nextClass: "ui-switchable-next",
            pagCancelClass: "ui-switchable-page-cancel",
            hasArrow: !1,
            arrowClass: "ui-switchable-arrow",
            event: "mouseover",
            speed: 400,
            callback: null ,
            onNext: null ,
            onPrev: null ,
            delay: 150,
            defaultPanel: 0,
            autoPlay: !1,
            playDirection: "next",
            stayTime: 5e3,
            mouseenterStopPlay: !0,
            includeMargin: !1,
            width: 0,
            height: 0,
            seamlessLoop: !1,
            hasHash: !1,
            imgscrollClass: "ui-switchable-imgscroll-img",
            imgscrollItemClass: "ui-switchable-imgscroll-item",
            imgscrollLazyload: !1,
            step: 1,
            visible: 1,
            easing: "swing",
            hasLoop: !1
        },
        init: function() {
            var b = this;
            var c = b.options;
            var d = !0;
            if (b.addClass(),
                c.visible < c.step && (c.visible = c.step),
                    b.nav = b.el.find("." + c.navItem),
                    b.main = b.el.find("." + c.mainClass),
                    c.step = Math.max(c.step || 1, 1),
                    b.size = b.main.size(),
                    b.pageCount = Math.ceil(b.main.size() / c.step),
                    b.content = b.el.find("." + c.contentClass),
                    b.mainWidth = b.main.outerWidth(c.includeMargin),
                    d = c.step < b.size,
                "tab" == c.type && c.navSelectedClass && b.nav.length > 0) {
                var e = -1;
                b.nav.each(function(b) {
                        var d = a(this);
                        d.hasClass(c.navSelectedClass) && (-1 == e ? e = b : d.removeClass(c.navSelectedClass))
                    }),
                e > -1 && (c.defaultPanel = e)
            }
            if (c.width && (b.mainWidth = c.width),
                    b.mainHeight = b.main.outerHeight(c.includeMargin),
                c.height && (b.mainHeight = c.height),
                    b.cloneCount = Math.max(c.step, c.visible),
                c.seamlessLoop && d) {
                var f = [];
                var g = [];
                var h = b.cloneCount;
                for (var i = 0; h > i; i++)
                    f.push(b.main.eq(i).clone().attr("data-switchable-clone", 1).data("switchable-clone-from", h + i)),
                        g.push(b.main.eq(b.size - (i + 1)).clone().attr("data-switchable-clone", 1).data("switchable-clone-from", b.size + i));
                for (var j = 0; h > j; j++)
                    b.content.prepend(g[j]).append(f[j]);
                b.main = b.el.find("." + c.mainClass)
            }
            b.main.each(function(b) {
                    a(this).data("switchable-idx", b)
                }
            );
            var k = c.defaultPanel;
            c.hasHash && (k = b.getHash(k)),
                b.last = k,
                b.current = k,
                b.isInit = !0,
                c.seamlessLoop && d ? b.switchTo(k, k + b.cloneCount) : b.switchTo(k, k),
                b.autoInterval = null ,
                b.eventTimer = null ,
            c.hasPage && (d && b.page(),
            c.autoLock && b.updatePageButState()),
            d && (b.autoPlay(),
                b.bind())
        },
        addClass: function() {},
        bind: function() {
            var b = this;
            var c = b.options;
            b.nav.each(function(d) {
                    var e = a(this);
                    e.bind(c.event, function() {
                            clearInterval(b.autoInterval),
                            c.navDisabledClass && e.hasClass(c.navDisabledClass) || (0 === c.delay ? (b.current = d,
                                b.switchTo(d, c.seamlessLoop ? d + b.cloneCount : d)) : (clearTimeout(b.eventTimer),
                                b.eventTimer = setTimeout(function() {
                                        b.current = d,
                                            b.switchTo(d, c.seamlessLoop ? d + b.cloneCount : d)
                                    }
                                    , c.delay)))
                        }).bind("mouseleave", function() {
                            clearTimeout(b.eventTimer),
                            c.mouseenterStopPlay || b.autoPlay()
                        }),
                    "click" == c.event && e.bind("mouseover", function() {
                            clearTimeout(b.eventTimer),
                                clearInterval(b.autoInterval)
                        }
                    )
                }),
            c.mouseenterStopPlay && b.el.each(function() {
                    a(this).bind("mouseenter", function() {
                            clearInterval(b.autoInterval)
                        }).bind("mouseleave", function() {
                            b.autoPlay()
                        })
                }
            ),
            !a.browser.isMobile() || "focus" != c.type && "slider" != c.type || (b.main.swipeLeft(function() {
                    b.next()
                }),
                b.main.swipeRight(function() {
                        b.prev()
                    }
                ))
        },
        getHash: function(b) {
            var c = this;
            var d = window.location.hash;
            if ("" != d) {
                var e = c.nav;
                var f = null ;
                if (a.each(e, function(b) {
                            a(this).attr("data-hash") == d && (f = b)
                        }
                    ),
                    null  != f) {
                    b = f;
                    var g = c.nav.eq(f).offset().top;
                    var h = a.browser.webkit ? 50 : 0;
                    setTimeout(function() {
                            a(window).scrollTop(g)
                        }
                        , h)
                }
            }
            return b
        },
        setHash: function(a) {
            var b = this;
            if (b.options.hasHash) {
                if (b.isInit && !window.location.hash)
                    return;
                var c = b.nav.eq(a).attr("data-hash");
                c = c.replace(/#/, ""),
                    window.location.hash = c
            }
        },
        switchTo: function(a, b) {
            var c = this;
            if ("undefined" == typeof b)
                var b = a;
            c.switchNavTo(a),
                c.switchMainTo(b)
        },
        switchNavTo: function(a) {
            var b = this;
            var c = b.options;
            b.nav.removeClass(c.navSelectedClass),
                b.nav.eq(a).addClass(c.navSelectedClass),
                b.setHash(a)
        },
        switchMainTo: function(b) {
            var c = this;
            var d = c.options;
            if (c.iframe(b),
                "imgscroll" != d.type && (c.main.removeClass(d.mainSelectedClass),
                    c.main.eq(b).addClass(d.mainSelectedClass)),
                c.isInit || c.last != b) {
                if (c.switchType(b),
                    null  != d.callback) {
                    var e = b;
                    var f = !1;
                    var g = this.main.eq(e);
                    e + 1 == c.pageCount && (f = !0),
                    d.seamlessLoop && this.main.each(function() {
                            return e == a(this).data("switchable-clone-from") ? (g = g.add(a(this)),
                                !1) : void 0
                        }),
                        d.callback.call(c, e, f, g)
                }
                c.last = b
            }
        },
        switchType: function(a) {
            var b = this;
            var c = b.options;
            switch (c.type) {
                case "tab":
                    b.tab(a);
                    break;
                case "focus":
                    b.focus(a);
                    break;
                case "slider":
                    b.slider(a);
                    break;
                case "carousel":
                    b.carousel(a);
                    break;
                case "imgscroll":
                    b.imgscroll(a)
            }
        },
        switchDefault: function(a) {
            var b = this;
            b.main.hide(),
                b.main.eq(a).show()
        },
        tab: function(a) {
            var b = this;
            var c = b.options;
            if (c.hasSetup || b.switchDefault(a),
                    c.hasArrow) {
                var d = c.arrowClass;
                var e = b.nav.eq(a).outerWidth(!0) * a;
                if (b.isInit) {
                    var f = b.nav.parent();
                    f.prepend('<div class="' + d + '"><b></b></div>').css({
                        position: "relative"
                    }),
                        b.el.find("." + d).css({
                            left: e
                        }),
                        b.isPlayLock = !1
                } else
                    setTimeout(function() {
                            b.isPlayLock = !1
                        }
                        , c.speed),
                        b.el.find("." + d).stop(!0).animate({
                            left: e
                        }, c.speed, c.easing)

            }
            b.isInit = !1
        },
        focus: function(b) {
            var c = this;
            var d = c.options;
            c.isInit ? (c.main.parent().css({
                position: "relative"
            }),
                c.main.css({
                    position: "absolute",
                    zIndex: 0,
                    opacity: 0
                }).show(),
                c.main.eq(b).css({
                    zIndex: 1,
                    opacity: 1
                }),
                c.isPlayLock = !1) : (setTimeout(function() {
                    c.isPlayLock = !1
                }
                , d.speed),
                c.main.eq(c.last).css({
                    zIndex: 0
                }).stop(!0).animate({
                        opacity: 1
                    }, d.speed, d.easing, function() {
                        a(this).css("opacity", 0)
                    }
                )),
                c.main.eq(b).css({
                    zIndex: 1
                }).stop(!0).animate({
                    opacity: 1
                }, d.speed, d.easing),
                c.isInit = !1
        },
        slider: function(a) {
            var b = this;
            var c = b.options;
            var d = b.content;
            var e = b.mainHeight;
            var f = e * a;
            var g = b.mainWidth;
            var h = g * a;
            b.isInit ? ("left" == c.direction ? (b.main.css({
                "float": "left"
            }),
                d.css(c.seamlessLoop ? {
                    width: g * (b.size + 2 * b.cloneCount)
                } : {
                    width: g * b.size
                }),
                d.css({
                    left: -h
                })) : "top" == c.direction && d.css({
                top: -f
            }),
                d.parent().css({
                    position: "relative"
                }),
                d.css({
                    position: "absolute"
                }),
                b.switchDefault(a),
                b.isInit = !1,
                b.isPlayLock = !1) : (setTimeout(function() {
                    b.isPlayLock = !1
                }
                , c.speed),
                "left" == c.direction ? d.stop(!0).animate({
                    left: -h
                }, c.speed, c.easing) : "top" == c.direction && d.stop(!0).animate({
                    top: -f
                }, c.speed, c.easing)),
                b.main.show()
        },
        carousel: function(a) {
            var b = this;
            b.slider(a)
        },
        imgscroll: function(b) {
            var c = this;
            var d = c.options;
            var e = c.mainWidth;
            var f = c.el.find("." + d.imgscrollClass);
            if (c.isInit) {
                c.el.find("." + d.bodyClass).css({
                    position: "relative",
                    overflow: "hidden",
                    width: e * d.visible
                }),
                    c.content.css({
                        position: "absolute",
                        width: e * c.size
                    }),
                    c.main.css({
                        "float": "left"
                    });
                var g = d.mainSelectedClass;
                if (c.main.eq(0).addClass(g),
                        !f.attr("src")) {
                    var h = c.el.find("." + d.imgscrollItemClass).eq(0).attr("data-url");
                    f.attr("src", h)
                }
                if (d.imgscrollLazyload)
                    for (var b = c.current; b < d.visible + 1; b++) {
                        var i = c.main.eq(b).find("." + d.imgscrollItemClass);
                        var h = i.attr("data-src");
                        i.attr("src", h)
                    }
                c.main.bind(d.event, function(){
                        var b = a(this);
                        var e = b.find("." + d.imgscrollItemClass).attr("data-url");
                        c.main.removeClass(g),
                            b.addClass(g),
                            f.attr("src", e)
                    }),
                    c.isInit = !1,
                    c.isPlayLock = !1
            } else {
                setTimeout(function() {
                        c.isPlayLock = !1
                    }
                    , d.speed);
                var j = c.current * e;
                if (d.imgscrollLazyload) {
                    var i = c.main.eq(d.visible + c.current).find("." + d.imgscrollItemClass);
                    var h = i.attr("data-src");
                    i.attr("src", h)
                }
                c.content.stop(!0).animate({
                    left: -j
                }, d.speed)
            }
        },
        page: function() {
            var a = this;
            var b = a.options;
            var c = a.el.find("." + b.nextClass);
            var d = a.el.find("." + b.prevClass);
            d.bind("click", function(c) {
                    a.isPlayLock && a.content && a.content.length > 0 || b.autoLock && 0 == a.current || (a.isPlayLock = !0,
                        a.prev(),
                        c.stopPropagation())
                }
            ),
                c.bind("click", function(c) {
                        a.isPlayLock && a.content && a.content.length > 0 || b.autoLock && a.current >= a.size - b.visible || (a.isPlayLock = !0,
                            a.next(),
                            c.stopPropagation())
                    }
                )
        },
        next: function() {
            var b = this;
            var c = b.options;
            b.current = b.current + c.step,
                b.offsetIndex();
            var d = 0;
            !c.seamlessLoop && c.hasLoop && (d = -c.visible + c.step),
            b.current >= b.size + d && (b.current = 0);
            var e = c.visible > c.step ? c.visible : c.step;
            !c.seamlessLoop && b.current + e > b.size && (b.current = b.size > e ? b.size - e : 0);
            var f = c.seamlessLoop ? b.current + b.cloneCount : b.current;
            b.switchTo(b.current, f),
                b.updatePageButState(),
            a.isFunction(c.onNext) && c.onNext.call(b)
        },
        prev: function() {
            var b = this;
            var c = b.options;
            c.seamlessLoop ? b.offsetIndex(!0) : (b.current -= c.step,
            b.current < 0 && (b.current = b.current > -c.step ? 0 : b.size - c.step));
            var d = c.seamlessLoop ? b.current + b.cloneCount : b.current;
            b.switchTo(b.current, d),
                b.updatePageButState(),
            a.isFunction(c.onPrev) && c.onPrev.call(b)
        },
        updatePageButState: function() {
            var a = this;
            var b = a.options;
            if (b.hasPage && b.autoLock) {
                var c = a.el.find("." + b.nextClass);
                var d = a.el.find("." + b.prevClass);
                var e = b.pagCancelClass;
                a.current >= a.size - Math.max(b.visible, b.step) ? c.addClass(e) : c.removeClass(e),
                    a.current <= 0 ? d.addClass(e) : d.removeClass(e)
            }
        },
        offsetIndex: function(a) {
            var b = this;
            var c = b.content;
            var d = b.options;
            var e = b.mainWidth;
            var f = b.mainHeight;
            var g = null ;
            var h = null ;
            var i = null ;
            a && d.seamlessLoop ? (i = b.current,
                b.current <= 0 ? (i = b.size - d.step + b.current,
                    g = -((b.size + (b.cloneCount + b.current)) * e),
                    h = -((b.size + (b.cloneCount + b.current)) * f)) : i -= d.step,
                b.current = i) : b.current >= b.size && d.seamlessLoop && (i = b.current - b.size,
                g = -((i + b.cloneCount - d.step) * e),
                h = -((i + b.cloneCount - d.step) * f),
                b.current = i),
                null  != g && "left" == d.direction ? c.css({
                    left: g
                }) : null  != h && "top" == d.direction && c.css({
                    top: h
                })
        },
        autoPlay: function() {
            var a = this;
            a.options.autoPlay && a.startPlay()
        },
        startPlay: function() {
            var a = this;
            var b = a.options;
            a.stopPlay(),
                a.autoInterval = setInterval(function() {
                        a.main.length <= b.step ? a.stopPlay() : "prev" == b.playDirection ? a.prev() : a.next()
                    }
                    , b.stayTime)
        },
        stopPlay: function() {
            var a = this;
            clearInterval(a.autoInterval)
        },
        iframe: function(a) {
            var b = this;
            var c = b.main.eq(a);
            var d = b.nav.eq(a);
            var e = d.attr(b.options.navIframe);
            if (e) {
                var f = document.createElement("iframe");
                f.src = e,
                    f.border = 0,
                    f.frameborder = "no",
                    f.marginwidth = 0,
                    f.marginheight = 0,
                    c.html(f),
                    d.removeAttr(b.options.navIframe)
            }
        },
        update: function(c, d) {
            var e = this;
            var f = e.options;
            var g = e.main.length;
            var h = -1;
            var i = -1;
            var j = !1;
            if (a.isFunction(c) && (d = c,
                    c = 0),
                    isNaN(parseInt(c)) ? (c.hasClass(f.mainClass) || (c = c.closest("." + f.mainClass)),
                    c.hasClass(f.mainClass) && (i = c.data("switchable-idx"))) : i = c,
                    h = i,
                f.autoPlay && (e.stopPlay(),
                    f.autoPlay = !1,
                    j = !0),
                f.seamlessLoop && g > f.step) {
                var k = e.main.length - 2 * f.step;
                var l = !1;
                e.main.each(function() {
                        var c = a(this);
                        "1" == c.data("switchable-clone") && (l = !0,
                            a(this).remove())
                    }
                ),
                l && (h = i < f.step || i >= k + f.step ? i >= k + f.step ? i - k - f.step : k - f.step + i : i - f.step)
            }
            if (f.hasPage) {
                var m = e.el.find("." + f.nextClass);
                var n = e.el.find("." + f.prevClass);
                m.unbind("click"),
                    n.unbind("click")
            }
            e.main = e.el.find("." + f.mainClass),
                g = e.main.length;
            var o = function(a) {
                    if (a == b || null  == a) {
                        var c = e.el.find("." + f.mainClass).length;
                        g > c ? h -= g - c : h = c > g ? c > f.visible ? c - f.visible : 0 : e.current,
                        0 > h && (h = 0),
                        j && (f.autoPlay = !0),
                        f.autoLock && !f.seamlessLoop && h + f.visible >= c && (h = c - f.visible,
                        0 > h && (h = 0))
                    } else
                        h = a;
                    f.defaultPanel = h,
                        e.init()
                };
            d.call(e.main.eq(h), e.content, h, o) ? e.el.find("." + f.mainClass).each(function(b) {
                    a(this).data("switchable-idx", b)
                }
            ) : o()
        }
    })
}(jQuery);
