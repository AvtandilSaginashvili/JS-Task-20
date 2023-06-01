
function dark() {

    var ellpurple = document.getElementById("ellipsepurple");
    var ellorange = document.getElementById("ellipseorange");
    var svgp = document.getElementById("svghrzs");

    ellorange.style.display = "none";
    ellorange.style.transition = "3s";
    ellpurple.style.display = "block";
    ellpurple.style.transition = "3s";
    document.getElementById("mobile").style.backgroundColor = "#383838";
    document.getElementById("mobile").style.transition = "2s";
    document.getElementById("main").style.backgroundColor = "#383838";
    document.getElementById("main").style.transition = "2s";
    document.getElementById("smlellipse2").style.display = "block";
    document.getElementById("smlellipse1").style.display = "none";
    document.getElementById("smlellipse2").style.transition = "2s";
    document.getElementById("smlellipse1").style.transition = "2s";
    svgp.classList.toggle("svg-hrz");
    svgp.style.transition = "2s";
    document.getElementById("gs").style.color = "#fff";
    document.getElementById("gs").style.transition = "2s";
    document.getElementById("time").classList.toggle("svgtime");
    document.getElementById("time").style.transition = "2s";
    document.getElementById("wifi").classList.toggle("wifisvg");
    document.getElementById("wifi").style.transition = "2s";
    document.getElementById("energy").classList.toggle("baterrysvg");
    document.getElementById("energy").style.transition = "2s";
    document.getElementById("choose").style.color = "#fff";
    document.getElementById("choose").style.transition = "2s";
    document.getElementById("customize").style.color = "#EEEEEE";
    document.getElementById("customize").style.transition = "2s";
    document.getElementById("dbtn").style.backgroundColor = "#555252";
    document.getElementById("dbtn").style.color = "#BDBDBD";
    document.getElementById("dbtn").style.transition = "2s";
    document.getElementById("bdiv").style.backgroundColor = "#C2C2C2";
    document.getElementById("bdiv").style.transition = "2s";
    document.getElementById("lbtn").style.backgroundColor = "#C2C2C2";
    document.getElementById("lbtn").style.color = "#363636";
    document.getElementById("lbtn").style.transition = "2s";
    document.getElementById("p-skip").style.color = "##D3D3D3";
    document.getElementById("p-skip").style.transition = "2s";
    document.getElementById("boxsvg").style.backgroundColor = "#4D4D4D";
    document.getElementById("boxsvg").style.transition = "2s";

}


function light() {

    var ellpurple = document.getElementById("ellipsepurple");
    var ellorange = document.getElementById("ellipseorange");
    var svgp = document.getElementById("svghrzs");

    ellorange.style.display = "block";
    ellorange.style.transition = "2s";
    ellpurple.style.display = "none";
    ellpurple.style.transition = "2s";
    document.getElementById("mobile").style.backgroundColor = "#fff";
    document.getElementById("mobile").style.transition = "2s";
    document.getElementById("main").style.backgroundColor = "#fff";
    document.getElementById("main").style.transition = "2s";
    document.getElementById("smlellipse2").style.display = "none";
    document.getElementById("smlellipse2").style.transition = "2s";
    document.getElementById("smlellipse1").style.display = "block";
    document.getElementById("smlellipse1").style.transition = "2s";
    svgp.classList.toggle("svg-hrz-b");
    svgp.style.transition = "2s";
    document.getElementById("gs").style.color = "#000";
    document.getElementById("gs").style.transition = "2s";
    document.getElementById("time").classList.toggle("svgtime-b");
    document.getElementById("time").style.transition = "2s";
    document.getElementById("wifi").classList.toggle("wifisvg-b");
    document.getElementById("wifi").style.transition = "2s";
    document.getElementById("energy").classList.toggle("baterrysvg-b");
    document.getElementById("energy").style.transition = "2s";
    document.getElementById("choose").style.color = "#000";
    document.getElementById("choose").style.transition = "2s";
    document.getElementById("customize").style.color = "#414141";
    document.getElementById("customize").style.transition = "2s";
    document.getElementById("dbtn").style.backgroundColor = "#C4C4C4";
    document.getElementById("dbtn").style.color = "#747474";
    document.getElementById("dbtn").style.transition = "2s";
    document.getElementById("bdiv").style.backgroundColor = "#C4C4C4";
    document.getElementById("bdiv").style.transition = "2s";
    document.getElementById("lbtn").style.backgroundColor = "#fff";
    document.getElementById("lbtn").style.color = "#363636";
    document.getElementById("lbtn").style.transition = "2s";
    document.getElementById("p-skip").style.color = "#000000";
    document.getElementById("p-skip").style.transition = "2s";
    document.getElementById("boxsvg").style.backgroundColor = "#fff";
    document.getElementById("boxsvg").style.transition = "2s";

}