
var myNav = document.getElementsByClassName('navbar-right')[0];


window.onscroll = function () {
	var list1 = myNav.getElementsByTagName("li")[0];
	var list2 = myNav.getElementsByTagName("li")[1];
	var list3 = myNav.getElementsByTagName("li")[2];
	var list4 = myNav.getElementsByTagName("li")[3];
    "use strict";
    if (document.body.scrollTop >= 100 ) {
    	list1.classList.add("hide-on-scroll");
    	list2.classList.add("hide-on-scroll");
    	list3.classList.add("hide-on-scroll");
        list4.classList.add("show-on-scroll");
    } else {
    	list1.classList.remove("hide-on-scroll");
    	list2.classList.remove("hide-on-scroll");
    	list3.classList.remove("hide-on-scroll");
        list4.classList.remove("show-on-scroll");
    }
};