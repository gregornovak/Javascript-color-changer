var div = document.createElement("div");
div.style.height = "100vh";
document.body.style.margin = "0px";
document.body.appendChild(div);

div.addEventListener("mousemove", function(dogodek){
    var x = dogodek.clientX;
    var y = dogodek.clientY;
    div.innerHTML = x + ", " + y;
    var color = "rgb(" + x + "," + y + ", 100)";
    div.style.backgroundColor = color;
});
