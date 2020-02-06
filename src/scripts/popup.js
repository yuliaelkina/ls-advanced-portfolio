let menu = document.querySelector('.pop-up__menu');
let body = document.querySelector('body');
let items = document.querySelectorAll('.pop-up__nav .menu__item');
let burger = document.querySelector('.pop-up__button');
let close = document.querySelector('.pop-up__close');

function openMenu(){
  menu.style.right = '0%',
  body.classList.add('body--active-menu')
}

function closeMenu(){
  menu.style.right = '-150%',
  body.classList.remove('body--active-menu')
}

burger.addEventListener('click' , function(e){
  e.preventDefault();
  openMenu();
});

close.addEventListener('click' , function(e){
  e.preventDefault(); 
  closeMenu();
});


items.forEach(function(element){
  element.addEventListener('click' , closeMenu)}
  );