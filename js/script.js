// JS GOES HERE 

var menu = document.getElementsByClassName("menu-button");
var i;
for (i = 0; i < menu.length; i++) {

    menu[i].onclick = function() {
        this.classList.toggle('expanded');
    }

}
