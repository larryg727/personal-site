
/**
 * Created by larryg on 4/17/17.
 */

$(document).ready(function(){

    $("#education").click(function(){
        $("#edu_content").slideToggle("slow");
        $(".arrowDown", this).fadeToggle("slow");
    });

    $("#skills").click(function(){
        $("#skills_content").slideToggle("slow");
        $(".arrowDown", this).fadeToggle("slow");
    });
});