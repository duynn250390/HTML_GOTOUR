$(document).ready(function() {
    $("#collapse_navbar");
    tabs_CONTROL();
    tabs_CONTROL_TICKED();
    tabs_CONTROL_NOW("item_contact_tabs");
    tabs_CONTROL_NOW("item_head_tabs");
    ShowAnser();
    Slide_article();
    timePick_day();
    var numItems = $("#list_item_box_news .item_slide").length;
    if (numItems > 2) {
        $("#list_item_box_news").slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: '<div class="slick_prev"></div>',
            nextArrow: '<div class="slick_next"></div>',
            // responsive: [
            //     {
            //         breakpoint: 768,
            //         settings: {
            //             slidesToShow: 1,
            //             slidesToScroll: 1,
            //             infinite: true,
            //         }
            //     }
            // ]
        });
    }

    $("#main_box_slide_Item5").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },

            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    // $('#main_box_slide_m').slick({
    //     infinite: true,
    //     slidesToShow: 5,
    //     slidesToScroll: 5,
    //     autoplay: true,
    //     autoplaySpeed: 20000,
    //     dots: false,
    //     arrows: false,
    //     centerMode: true,
    //     // prevArrow: '<div class="slick_prev"></div>',
    //     // nextArrow: '<div class="slick_next"></div>',
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //             }
    //         },

    //         {
    //             breakpoint: 980,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 2,
    //                 infinite: true,
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 375,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });

    $("#list_slide").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<div class="slick_prev_nu"></div>',
        nextArrow: '<div class="slick_next_nu"></div>',
    });
    $("#main_box_slide").slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 2,
        dots: true,
        arrows: true,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1127,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    });
    $("#main_box_slide_tour").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>',
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 4,
        //             slidesToScroll: 4,
        //             infinite: true,
        //             dots: true
        //         }
        //     },

        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2
        //         }
        //     },
        //     {
        //         breakpoint: 375,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
    });
    $("#main_box_slide_1").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>',
    });
    $("#main_box_slide_2").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>',
    });
    $("#main_box_slide_3").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>',
    });
    $("#main_box_slide_34").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>',
    });
    $("#main_box_slide_35").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>',
    });
    $("#box_reviews").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: true,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },

            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    });
    $(document).on("click", ".show_box_search", function() {
        $(this).addClass("active_search");
        $(this).removeClass("show_box_search");
        $("#box_search").removeClass("fadeOutDown");
        $("#box_search").addClass("fadeInUp");
        $("#box_search").show(300);
    });

    $(document).on("click", ".active_search", function() {
        $(this).addClass("show_box_search");
        $(this).removeClass("active_search");
        $("#box_search").removeClass("fadeInUp");
        $("#box_search").addClass("fadeOutDown");
        $("#box_search").hide(300);
    });
    $(document).on("keyup", ".control_input", function() {
        var lengthCount = this.value.length;
        if (lengthCount) {
            $("#clear_text").addClass("active_text");
        } else {
            $("#clear_text").removeClass("active_text");
        }
    });
    $(document).on("click", ".active_text", function() {
        $("#clear_text").removeClass("active_text");
        document.getElementById("control_input").value = "";
    });
    respon_menu();
});
$(window).resize(function() {
    respon_menu();
    timePick_day();
});

function respon_menu() {
    var CONTROL = {
        get_HTML_menu: $("#collapse_navbar").html(),
        bullet_menu: $("#bullet_menu"),
        box_menu_respontive_ovelay: $("#box_menu_respontive_ovelay"),
        box_menu_HTML: $("#box_menu_HTML"),
        box_menu_respontive: $("#box_menu_respontive"),
        control_close: $("#control_close"),
        win_screen: $(window).width(),
        wid: "460px",
    };
    if (CONTROL.win_screen < 768) {
        CONTROL.wid = "460px";
    }
    if (CONTROL.win_screen < 480) {
        CONTROL.wid = "270px";
    }
    if (CONTROL.win_screen < 980) {
        $("#bullet_menu").click(function() {
            CONTROL.box_menu_HTML.html(CONTROL.get_HTML_menu);
            CONTROL.box_menu_respontive.css({
                left: 0,
                width: CONTROL.wid,
            });
            CONTROL.box_menu_respontive_ovelay.css({
                left: CONTROL.wid,
                opacity: 1,
                visibility: "visible",
            });
        });
        $(".control_close").click(function() {
            $(".box_menu_respontive").css({
                left: "-" + CONTROL.wid,
                width: CONTROL.wid,
            });
            $(".box_menu_respontive_ovelay").css({
                left: "0",
                opacity: "0",
                visibility: "hidden",
            });
        });
        $(".box_menu_respontive_ovelay").click(function() {
            $(".box_menu_respontive").css({
                left: "-" + CONTROL.wid,
                width: CONTROL.wid,
            });
            $(".box_menu_respontive_ovelay").css({
                left: "0",
                opacity: "0",
                visibility: "hidden",
            });
        });
    } else {
        $(".box_menu_respontive").css({
            left: "-" + CONTROL.wid,
            width: CONTROL.wid,
        });
        $(".box_menu_respontive_ovelay").css({
            left: "0",
            opacity: "0",
            visibility: "hidden",
        });
    }
    $(document).on("click", ".item_tabs", function() {
        var get_data_tabs = $(this).attr("data-tabs");
        $(".item_tabs").removeClass("on");
        $(".tabs_item").removeClass("on");
        $(this).addClass("on");
        $("#tabs_item_0" + get_data_tabs).addClass("on");
        console.log(get_data_tabs);
    });
    $(document).on("click", "#showModal1", function() {
        var action = $(this).attr("data-toggle");
        ModalTongle(action);
    });
    $(document).on("click", "#showModal2", function() {
        var action = $(this).attr("data-toggle");
        ModalTongle(action);
    });
    $(document).on("click", "#showModal3", function() {
        var action = $(this).attr("data-toggle");
        ModalTongle(action);
    });
    $(document).on("click", "#showModal4", function() {
        var action = $(this).attr("data-toggle");
        ModalTongle(action);
    });
    $(document).on("click", "#showModal5", function() {
        var action = $(this).attr("data-toggle");
        ModalTongle(action);
    });
    $(document).on("click", "#showModal6", function() {
        var action = $(this).attr("data-toggle");
        ModalTongle(action);
    });
    $(document).on("click", ".closeModel", function() {
        closeModal();
    });
    $(document).on("click", ".modal_backdrop", function() {
        closeModal();
    });
}

function tabs_CONTROL() {
    $(document).on("click", ".item_tabs", function() {
        $(".item_tabs").removeClass("active");
        $(this).addClass("active");
        get_ID = $(this).attr("data-tabs");
        $(".itemList").removeClass("activetabs");
        $("#tabs" + get_ID).addClass("activetabs");
    });
}

function ModalTongle(action) {
    CONTROL_MODAL = {
        Modal: $("#" + action),
        Body: $("body"),
    };
    if (action === " ") {} else {
        $("#" + action).show(300);
        CONTROL_MODAL.Body.addClass("in");
        CONTROL_MODAL.Body.append('<div class="modal_backdrop fade"></div>');
        $(".modal_backdrop").addClass("in");
        CONTROL_MODAL.Modal.addClass("in");
    }
}

function closeModal() {
    $(".zuzuModal").removeClass("in");
    $(".zuzuModal").fadeOut(150, function() {
        $(".modal_backdrop").remove();
    });
}

function tabs_CONTROL_TICKED() {
    $(document).on("click", ".item_tabs_ticked", function() {
        $(".item_tabs_ticked").removeClass("active");
        $(this).addClass("active");
        get_ID = $(this).attr("data-tabs");
        $(".item_list_a").removeClass("activetabs");
        $("#tabsa" + get_ID).addClass("activetabs");
    });
}

function tabs_CONTROL_NOW($value) {
    $(document).on("click", "." + $value, function() {
        $("." + $value).removeClass("active");
        $(this).addClass("active");
        get_ID = $(this).attr("data-tabs");
        var DATAID = $("#tabs_" + get_ID).attr("data-id");
        var NAMECLASS = $("#" + DATAID + get_ID).attr("class");
        var FINTCLASS = $("#" + DATAID + get_ID).hasClass(NAMECLASS);

        $("." + NAMECLASS).hide(300);
        $("#" + DATAID + get_ID).show(300);
    });
}

{
    /* <div class="control_heading_tabs">
    <div class="item_head_tabs active" data-tabs="01">상세정보</div>
    <div class="item_head_tabs" data-tabs="02">취소안내</div>
</div>
    <div class="control_body_tabs">
        <div class="body_tabs_item active" data-id="tabs_" id="tabs_01">
           CONTENT
        </div>
        <div class="body_tabs_item" data-id="tabs_" id="tabs_02">
            CONTENT
        </div>
    </div> */
}

function ShowAnser() {
    var sum_question = $(".sum_question");
    $(document).on("click", ".sum_question", function() {
        var IDANSER = $(this).attr("data-anser");
        // $('.sum_anser').hide(300);
        // $('#anser_' + IDANSER).show(300);
        $("#anser_" + IDANSER).toggle(300);
    });
}

function Slide_article() {
    $(".main_slide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        fade: true,
        asNavFor: ".slider_nav",
    });
    $(".slider_nav").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".main_slide",
        dots: false,
        arrows: false,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>',
        centerMode: true,
        focusOnSelect: true,
    });
}

function timePick_day() {
    var box_grid_day = $(".box_grid_day");
    var item_day = $(".item_day");
    var width_box_grid_day = box_grid_day.width();
    item_day.css({
        width: width_box_grid_day / 7 + "px",
        height: width_box_grid_day / 7 + "px",
    });
    $(".box_name_day").css({
        width: width_box_grid_day / 7 + "px",
    });
}
$(document).on("click", ".close_icon", function() {
    closeModal();
});

$(document).click(function() {
    $(".drop_down_menu").hide();
});

$(document).on("click", ".heaer_menu_drop .li_meu .aput_dorop", function(e) {
    e.stopPropagation();
    $(".drop_down_menu").hide();
    $(this).find(".drop_down_menu").toggle();
});
$(document).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var top_bar = $(".top_bar").height();
    if (scrollTop > top_bar) {
        $(".top_bar").css({
            height: "0",
            overflow: "hidden",
        });
    } else {
        $(".top_bar").css({
            height: "40px",
            overflow: "visible",
        });
    }
});

$(document).on("click", ".btn_prev", function() {
    var sum_pic = $(".control_img").length;
    var cu_at = parseInt($(this).attr("data-step"));

    if (cu_at == 1) {
        $(".control_img").removeClass("on");

        $(".btn_prev").attr("data-step", sum_pic);
        $(this).attr("data-step", sum_pic);

        $("#pic_0" + sum_pic).addClass("on");
    } else if (cu_at == sum_pic) {
        $(".control_img").removeClass("on");

        $(".btn_prev").attr("data-step", 2);
        $(this).attr("data-step", 2);

        $("#pic_0" + 2).addClass("on");
    } else {
        $(".control_img").removeClass("on");

        $(".btn_prev").attr("data-step", 1);
        $(this).attr("data-step", 1);
        $("#pic_0" + 1).addClass("on");
    }
});

$(document).on("click", ".btn_next", function() {
    var sum_pic = $(".control_img").length;
    var cu_at = parseInt($(this).attr("data-step"));
    if (cu_at == sum_pic) {
        $(".control_img").removeClass("on");
        $(this).attr("data-step", 1);
        $(".btn_prev").attr("data-step", 1);
        $("#pic_0" + 1).addClass("on");
    } else if (cu_at == 1) {
        $(".control_img").removeClass("on");
        $(this).attr("data-step", cu_at + 1);
        $(".btn_prev").attr("data-step", cu_at + 1);
        $("#pic_0" + 2).addClass("on");
    } else {
        $(".control_img").removeClass("on");
        $(this).attr("data-step", sum_pic);
        $(".btn_prev").attr("data-step", sum_pic);
        $("#pic_0" + sum_pic).addClass("on");
    }
});

$(document).on("click", ".goTop", function() {
    $("html, body").animate({
        scrollTop: 0
    }, 800);
});

$(document).on("click", ".item", function() {
    var data_tabs = $(this).attr("data-tabs");
    $(".tabs .item").removeClass("on");
    $(this).addClass("on");
    $(".item_content_tabs").removeClass("on");
    $("#item_tabs_" + data_tabs).addClass("on");
});
$(document).on("click", ".list_item", function() {
    var data_tabs = $(this).attr("data-tabs");
    $(".head_service .list_item").removeClass("on");
    $(this).addClass("on");
    $(".body_service .serice_box").removeClass("on");
    $("#tabs_" + data_tabs).addClass("on");
});

$(document).on("click", ".item_filter_top", function() {
    var data_tabs = $(this).attr("data-tabs");
    $(".control_tabs .item_filter_top").removeClass("on");
    $(this).addClass("on");
    $(".item_tabs_cate").removeClass("on");
    $("#item_tabs_" + data_tabs).addClass("on");
});
$(document).on("click", ".item_filter", function() {
    $(".list_fillter .item_filter").removeClass("on");
    $(this).addClass("on");
});

// =============================================
// ACTION PAGE DETAIL
// =============================================
$(document).on("click", ".show_comment", function() {
    $(".list_comment_qa").css({
        "max-height": "1000px",
        "overflow-y": "visible",
    });
    $(".show_comment").css({
        display: "none",
    });
    $(".hide_comment").css({
        display: "flex",
    });
});
$(document).on("click", ".hide_comment", function() {
    $(".list_cmqa").css({
        "max-height": "0",
        "overflow-y": "hidden",
    });
    $(".show_comment").css({
        display: "flex",
    });
    $(".hide_comment").css({
        display: "none",
    });
});
$(document).on("click", "#nut_box li", function() {
    $("#nut_box li").removeClass("on");
    $(this).addClass("on");
});
$(document).on("click", "#go_chatone", function() {
    $(".box_list_noticle").removeClass("on");
    $(".itemm_noticle_tabs").removeClass("on");
    $("#chatOneOne").addClass("on");
    $("#noticle_chatOneOne").addClass("on");
});

$(document).on("click", ".itemm_contact_tabs", function() {
    var datatabs = $(this).attr("data-tabs");
    $(".itemm_contact_tabs").removeClass("on");
    $(this).addClass("on");
    $(".step_col").removeClass("on");
    $("#tabs_" + datatabs).addClass("on");
});
$(document).on("click", ".itemm_noticle_tabs", function() {
    var datatabs = $(this).attr("data-tabs");
    $(".itemm_noticle_tabs").removeClass("on");
    $(this).addClass("on");
    $(".box_noticles .box_list_noticle").removeClass("on");
    $("#noticle_" + datatabs).addClass("on");
});

//=================================================================================
//===================================OPEN MODAL===================================
$(document).on("click", ".open_modal", function(e) {
    var data_target = $(this).attr("data-target");
    // $('#' + data_target).css({'display':'block'});
    $(data_target).show(100);
    $(data_target).addClass("open");
    $("body").addClass("active_menu");
    $("body").append(
        "<div class='ovelay_modal fade open' id='ovelay_modal'></div>"
    );
});

function do_modal_close() {
    $(".modal").css({
        display: "none"
    });
    // we don't want to call do_totals2 directly, because it is what hides the element.
    window.setTimeout(do_modal_close, 40000); // setTimeout accepts a function reference
}
$(document).on("click", ".ovelay_modal", function(e) {
    $(".modal").removeClass("open");
    $("body").removeClass("active_menu");
    $(this).remove();
    setTimeout(function() {
        $(".modal").css({
            display: "none"
        });
    }, 200);
});

//=================================================================================
//===================================AUTOCOMPALTE SEARCH===================================
$(document).on("focusin", ".input_key_search", function(e) {
    $(".auto_tag_complate ").addClass("on");
});
$(document).on("focusout", ".input_key_search", function(e) {
    $(".auto_tag_complate ").removeClass("on");
});

$(document).on("click", ".quesAns_header", function(e) {
    var id = $(this).attr("data-show");
    $("#quesAns_" + id).toggle("100");
    $(this).addClass("on");
});
$(document).on("click", ".quesAns_header.on", function(e) {
    $(this).removeClass("on");
});
$(document).on("click", ".more_reply", function(e) {
    $(this)
        .parent(".opt")
        .parent(".box_cmt")
        .parent(".comment_item")
        .children(".box_reply")
        .toggle("300");
});
$(document).on("click", ".more_reply.down", function(e) {
    $(this).removeClass("down");
    $(this).addClass("up");
});
$(document).on("click", ".more_reply.up", function(e) {
    $(this).removeClass("up");
    $(this).addClass("down");
});

// ===============================SHOW/HIDE SERVICE CENTER========================
$(document).on("click", ".item_ques_ans .ques_box", function(e) {
    $(this).parent().toggleClass('on', 1000);
});
// ===============================SHOW/HIDE TOGGLE SOCIAL ========================
$(document).on("click", ".item_control.share", function(e) {
    $(this).children().toggleClass('on', 1000);
});