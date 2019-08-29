document.onreadystatechange = function () {
   if (document.readyState == "complete") {
   var foo = document.getElementsByClassName("news-image")[0];

   foo.onclick = function () {
     console.log("abc");
     document.getElementsByClassName("news-image").innerHTML("<p>abs</p>.");}
 }
}
