
function dark() {

    var ellpurple = document.getElementById("ellipsepurple");
    var ellorange = document.getElementById("ellipseorange");
    var svgp = document.getElementById("svghrzs");

    ellorange.style.display = "none";
    ellpurple.style.display = "block";
    document.getElementById("mobile").style.backgroundColor = "#383838";
    document.getElementById("main").style.backgroundColor = "#383838";
    document.getElementById("smlellipse2").style.display = "block";
    document.getElementById("smlellipse1").style.display = "none";
    svgp.classList.toggle("svg-hrz");
    document.getElementById("gs").style.color = "#fff";
    document.getElementById("time").classList.toggle("svgtime");
    document.getElementById("wifi").classList.toggle("wifisvg");
    document.getElementById("energy").classList.toggle("baterrysvg");
    document.getElementById("choose").style.color = "#fff";
    document.getElementById("customize").style.color = "#EEEEEE";

}


function light() {

    var ellpurple = document.getElementById("ellipsepurple");
    var ellorange = document.getElementById("ellipseorange");
    var svgp = document.getElementById("svghrzs");

    ellorange.style.display = "block";
    ellpurple.style.display = "none";
    document.getElementById("mobile").style.backgroundColor = "#fff";
    document.getElementById("main").style.backgroundColor = "#fff";
    document.getElementById("smlellipse2").style.display = "none";
    document.getElementById("smlellipse1").style.display = "block";
    svgp.classList.toggle("svg-hrz-b");
    document.getElementById("gs").style.color = "#000";
    document.getElementById("time").classList.toggle("svgtime-b");
    document.getElementById("wifi").classList.toggle("wifisvg-b");
    document.getElementById("energy").classList.toggle("baterrysvg-b");
    document.getElementById("choose").style.color = "#000";
    document.getElementById("customize").style.color = "#414141";

}