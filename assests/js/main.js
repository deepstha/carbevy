console.log('code running');
$('.carousel').carousel();
function t(t, e) {
    t.each(function () {
        var t = $(this),
            i = "animated " + t.data("animation-" + e);
        t.addClass(i).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
            t.removeClass(i);
        });
    });
}
function e(t) {
    var e = $(document).scrollTop();
    $(".navbar-nav a").each(function () {
        var t = $(this),
            i = $(t.attr("href"));
        i.position().top <= e && i.position().top + i.height() > e ? ($(".navbar-nav a").removeClass("current-item"), t.addClass("current-item")) : t.removeClass("current-item");
    });
}
var i = $("#img-layout");
    i.owlCarousel({
        loop: !0,
        margin: 50,
        navSpeed: 500,
        autoplayHoverPause: !1,
        nav: !0,
        animateIn: "fadeIn", 
        autoplay: !0,
        autoplayTimeout: 4e3,
        items: 1,
        responsiveClass: !0,
        responsive: { 0: { items: 1, nav: !1 }, 600: { items: 2, nav: !1 }, 768: { items: 3, nav: !0 }, 1e3: { items: 4, nav: !0, loop: !0 }, 1200: { items: 4, nav: !0, loop: !0 } },
    }),
    i.on("change.owl.carousel", function (e) {
        t($(".owl-item", i).eq(e.item.index).find("[data-animation-out]"), "out");
    }),
    i.on("changed.owl.carousel", function (e) {
        t($(".owl-item", i).eq(e.item.index).find("[data-animation-in]"), "in");
    })