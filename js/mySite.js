
/**
 * Created by larryg on 4/17/17.
 */

$(document).ready(function() {

    // $("#education").click(function(){
    //     $("#edu_content").slideToggle("slow");
    //     $(".arrowDown", this).fadeToggle("slow");
    //     $(this).children().first().toggleClass("unactive");
    //
    // });
    //
    // $("#skills").click(function(){
    //     $("#skills_content").slideToggle("slow");
    //     $(".arrowDown", this).fadeToggle("slow");
    //     $(this).children().first().toggleClass("unactive");
    // });
    var section;

    $.fn.inView = function () {
        //Window Object
        var win = $(window);
        //Object to Check
        obj = $(section);
        //the top Scroll Position in the page
        var scrollPosition = win.scrollTop();
        //the end of the visible area in the page, starting from the scroll position
        var visibleArea = win.scrollTop() + win.height() - 300;
        //the end of the object to check
        var objEndPos = (obj.offset().top + obj.outerHeight());
        return (visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false)
    };


    $(window).scroll(function () {
        section = "#education";
        if ($("#education").inView()) {
            $("#education").animate({
                width: "45%",
                left: "50%"
            });
            $("#educationImage").animate({
                width: "45%",
                right: "50%",
                top: "20px"
            });
            $("#edu_content").slideDown(800);
        }
    });


    $(window).scroll(function(){
        section = "#skills";
        if( $("#skills").inView()){
            $("#skills").animate({
                width: "45%"
            });
            $("#skillsImage").animate({
                width: "45%",
                left: "50%",
                top: "0px"
            });

            $("#skills_content").slideDown(800);
        }
    });

});