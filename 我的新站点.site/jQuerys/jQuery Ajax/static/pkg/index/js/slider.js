(function(e) {
    function t(e, t) {
        this.$ele = t,
        this.set = e,
        this.WH = this.set.vertical ? t.height() : t.width(),
        this.lis = t.find("ul li"),
        this.idx = 0,
        this.timer = null
    }
    e.fn.myPic = function(n) {
        return e.fn.myPic.defaults = {
            vertical: !1,
            button: !0,
            auto: !0,
            effect: "scroll",
             onMouse: "mouseover"
        },
        this.each(function() {
            var r = n ? e.extend(e.fn.myPic.defaults, n) : e.fn.myPic.defaults,
            i = new t(r, e(this));
            r.button && i.generate(e(this)),
            r.auto && i.auto()
        }),
        this
    },
    t.prototype = {
        generate: function(t) {
            var n = e("<ol></ol>").appendTo(t),
            r = this;
            e.each(this.lis,
            function(t, r) {
                e("<li>" + (t + 1) + "</li>").appendTo(n)
            }),
            this.olis = t.find("ol li"),
            this.olis.eq(0).attr("class", "on");
            switch (this.set.effect) {
            case "scroll":
                t.find("ul").css({
                    position:
                    "absolute",
                    left: 0,
                    top: 0
                }),
                this.set.vertical && this.lis.css({
                    "float": "none"
                });
                break;
            case "flip":
            case "fade":
                this.lis.css({
                    position:
                    "absolute",
                    left: 0,
                    top: 0,
                    "float": "none"
                }).eq(0).css("zIndex", "2");
                break;
            case "in":
                this.lis.css({
                    display:
                    "none"
                }).eq(0).css("display", "block");
                break;
            default:
            }
            t.delegate("ol li", this.set.onMouse,
            function() {
                var $this = e(this);
                setTimeout(function() {
                    r.start($this.index())
                },
                0),
                r.stop()
            }).delegate("ol li", "mouseout",
            function() {
                r.auto()
            })
        },
        start: function(e) {
            this.idx = e,
            this.idx != this.from && (this.effect(this), this.reset())
        },
        effect: function(t) {
            var n = t.idx,
            r = {};
            switch (t.set.effect) {
            case "scroll":
                r[t.set.vertical ? "top": "left"] = -(n * this.WH),
                this.$ele.find("ul").stop(!0, !0).animate(r),
                r = null;
                break;
            case "flip":
                this.lis.eq(n).css("zIndex", 1),
                this.lis.eq(this.from || 0).stop(!0, !0).css("opacity", .8).animate({
                    left: -100,
                    opacity: 0
                },
                600,
                function() {
                    e(this).css({
                        zIndex: 0,
                        opacity: 1,
                        left: 0
                    }),
                    t.lis.eq(n).css("zIndex", "2")
                });
                break;
            case "fade":
                this.lis.eq(n).css("zIndex", "1"),
                this.lis.eq(this.from || 0).stop(!0, !0).fadeOut(500,
                function() {
                    e(this).css({
                        zIndex: 0,
                        display: "block"
                    }),
                    t.lis.eq(n).css("zIndex", "2")
                });
                break;
            case "in":
                this.lis.eq(this.from || 0).stop(false,true).fadeOut(0,
                function() {
                    t.lis.eq(n).stop(false,true).fadeIn(0)
                });
            default:
            }
        },
        reset: function() {
            this.olis.eq(this.from || 0).attr("class", ""),
            this.olis.eq(this.idx).attr("class", "on"),
            this.from = this.idx || 0
        },
        stop: function() {
            var e = this;
            clearInterval(e.timer)
        },
        auto: function() {
            var e = this,
            t = this.lis.length;
            this.timer = setInterval(function() {
                e.idx = e.idx >= t - 1 ? 0 : ++e.idx,
                e.start(e.idx)
            },
            3e3)
        }
    }
})(jQuery);
