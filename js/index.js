let hamberger=document.querySelector('.hamberger');
let mobileNav=document.querySelector('.mobile-nav');
let sitecontentwrapper=document.querySelector('.site-content-wrapper');
    
hamberger.addEventListener('click',function(){
    sitecontentwrapper.classList.toggle('scaled');
    mobileNav.classList.toggle('open');
});


let home=document.querySelector('.li-1');
let about=document.querySelector('.li-2');
let services=document.querySelector('.li-3');
let work=document.querySelector('.li-4');
let project=document.querySelector('.li-5');
let contact=document.querySelector('.li-6');

home.addEventListener('click',function(){
    sitecontentwrapper.classList.toggle('scaled');
    mobileNav.classList.toggle('open');
});
about.addEventListener('click',function(){
    sitecontentwrapper.classList.toggle('scaled');
    mobileNav.classList.toggle('open');
});
services.addEventListener('click',function(){
    sitecontentwrapper.classList.toggle('scaled');
    mobileNav.classList.toggle('open');
});
work.addEventListener('click',function(){
    sitecontentwrapper.classList.toggle('scaled');
    mobileNav.classList.toggle('open');
});
project.addEventListener('click',function(){
    sitecontentwrapper.classList.toggle('scaled');
    mobileNav.classList.toggle('open');
});
contact.addEventListener('click',function(){
    sitecontentwrapper.classList.toggle('scaled');
    mobileNav.classList.toggle('open');
});
