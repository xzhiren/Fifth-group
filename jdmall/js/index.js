window.onload = function () {
    search();
};

var search = function () {
  
    var searchBox = document.querySelector('.jd_search_box');
    var banner = document.querySelector('.jd_banner');
    var height = banner.offsetHeight;
    var opacity = 0;
    /*监听页面滚动事件*/
    window.onscroll = function () {
 
       
        searchBox.style.background = 'rgba(201,21,35,' + opacity + ')';
    }
};
var banner = function () {

};
var downTime = function () {
    
}