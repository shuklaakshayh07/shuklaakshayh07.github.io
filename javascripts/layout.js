document.onreadystatechange = function () {
   if (document.readyState == "complete") {
function openNav() {
  console.log("over here");
  document.getElementById("mySidenav").style.width = "250px";
document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
   document.body.style.backgroundColor = "white";
}
}
}
