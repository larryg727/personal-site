/**
 * Created by larryg on 4/17/17.
 */
"use strict";
(function () {

var skills = document.getElementById("skills");

var skills_content = document.getElementById("skills_content");

var skillDropDown = function(){
    skills_content.style.visibility = "visible";
};
skills.addEventListener("click", skillDropDown);

var education = document.getElementById("education");
var edu_content = document.getElementById("edu_content");
var eduDropDown = function(){
    edu_content.style.visibility = "visible";
};

education.addEventListener("click", eduDropDown);

})();