/**
 * Created by larryg on 5/4/17.
 */
"use strict";
$(document).ready(function () {

    var section;

    //function to check if variable object in viewport
    $.fn.inView = function () {
        //Window Object
        var win = $(window);
        //Object to Check
        var obj;
        obj = $(section);
        //the top Scroll Position in the page
        var scrollPosition = win.scrollTop();
        //the end of the visible area in the page, starting from the scroll position
        var visibleArea = win.scrollTop() + win.height() - 100;
        //the end of the object to check
        var objEndPos = (obj.offset().top + obj.outerHeight());
        return (visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false)
    };

    //only runs scroll animations on screens above tis size
    if ($(window).width() > 767) {
        $(window).scroll(function () {
            section = "#aboutMeSec";
            if ($("#aboutMeSec").inView()) {
                $("#abMeL").slideDown();
                $("#abMeL").css("display", "inline-block");
            }
        });
    }
});