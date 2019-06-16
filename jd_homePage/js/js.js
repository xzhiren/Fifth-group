/**
 * Created by qq on 2019/6/16.
 */
var Nav = document.getElementById("Nav");
console.log(Nav);
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop;
    if(scrollTop > 0){
        Nav.className = "header_search nav_fix";
    }else{
        Nav.className = "header_search";
    }
}

