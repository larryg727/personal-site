
/**
 * Created by larryg on 4/17/17.
 */

$(document).ready(function(){

    $("#education").click(function(){
        $("#edu_content").slideToggle("slow");
        $(".arrowDown", this).fadeToggle("slow");
        $(this).children().first().toggleClass("unactive");

    });

    $("#skills").click(function(){
        $("#skills_content").slideToggle("slow");
        $(".arrowDown", this).fadeToggle("slow");
        $(this).children().first().toggleClass("unactive");
    });
});