var menuReview = document.querySelector(".menu-review");
var menuTip = document.querySelector(".menu-tip");
var menuAlert = document.querySelector(".menu-alert");
var menuBlog = document.querySelector(".menu-blog");
var btnBlog = document.getElementById("btn-blog");

btnBlog.addEventListener('click', function(e) {
    console.log(btnBlog.innerText);
});

menuReview.addEventListener('click', function(e) {
    console.log(menuReview.innerText);
})
menuAlert.addEventListener('click', function(e) {
    console.log(menuAlert.innerText);
})
menuTip.addEventListener('click', function(e) {
    console.log(menuTip.innerText);
})
menuBlog.addEventListener('click', function(e) {
    console.log(menuBlog.innerText);
})
