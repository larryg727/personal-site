
/**
 * Created by larryg on 4/17/17.
 */

$(document).ready(function(){
    $("#education").click(function(){
        $("#edu_content").slideDown("slow");
        $(".eduArrow").fadeOut("slow");
    });
    $("#skills").click(function(){
        $("#skills_content").slideDown("slow");
        $(".skillArrow").fadeOut("slow");
    });
});