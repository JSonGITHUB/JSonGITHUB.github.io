/* 
function showHTML5() {
    document.getElementById("resume").style.opacity = 0;
    document.getElementById("resume").innerHTML = "";
    document.getElementById("resume").innerHTML = '<iframe class="HTML5" height="'+(window.innerHeight-200)+'" src="FrontEndDevApp/irn.html" frameborder="0" scrolling="no" allowfullscreen></iframe>';
    document.getElementById("resume").innerHTML = document.getElementById("resume").innerHTML + 
    '<iframe class="HTML5" height="'+(window.innerHeight-200)+'" src="IRN/irn.html" frameborder="0" scrolling="no" allowfullscreen></iframe>';
    document.getElementById("resume").innerHTML = document.getElementById("resume").innerHTML +
    '<iframe class="HTML5" height="'+(window.innerHeight-200)+'" src="DecisionSupport/imagingAppDark.html" frameborder="0" scrolling="auto" allowfullscreen></iframe>';
    document.getElementById("resume").innerHTML = document.getElementById("resume").innerHTML +
    '<iframe class="HTML5" height="'+(window.innerHeight-200)+'" src="ES_App_Mobile/ES_Training.html" frameborder="0" scrolling="auto" allowfullscreen></iframe>';
    document.getElementById("resume").innerHTML = document.getElementById("resume").innerHTML +
    '<iframe class="HTML5" height="'+(window.innerHeight-200)+'" src="VideoDirectory/html5/courseLocal.html" frameborder="0" scrolling="auto" allowfullscreen></iframe>';
    document.getElementById("resume").innerHTML = document.getElementById("resume").innerHTML +
    '<iframe class="HTML5" height="'+(window.innerHeight-200)+'" src="XBT/html5/courseLocal.html" frameborder="0" scrolling="auto" allowfullscreen></iframe>';
    document.getElementById("resume").style.opacity = 1;
    document.getElementById("resume").className = "html5";
    document.getElementById("resume").scrollTop = 0;
    document.getElementById("resume").scrollLeft = 0;		
}
*/
function showHTML5() {
    document.getElementById("resume").style.opacity = 0;
    document.getElementById("resume").innerHTML = "<image class='html5Image' src='portfolio/CarefusionVideoStrategy.png'>" +
        "<image class='html5Image' src='portfolio/DecisionSupport.png'>" +
        "<image class='html5Image' src='portfolio/ES.png'>" +
        "<image class='html5Image' src='portfolio/IRN.png'>" +
        "<image class='html5Image' src='portfolio/IRN_Details.png'>" +
        "<image class='html5Image' src='portfolio/OR_Implementation.png'>" +
        "<image class='html5Image' src='portfolio/OR_Specialized.png'>" +
        "<image class='html5Image' src='portfolio/OR_Workflow.png'>";

    document.getElementById("resume").className = "mobile";
    document.getElementById("resume").style.opacity = 1;
    document.getElementById("resume").scrollTop = 0;
    document.getElementById("resume").scrollLeft = 0;
}