let entrance = document.querySelector('.user-menu__ref');
let popup = document.querySelector('.modal');
let close = document.querySelector('.modal-close');
let login = document.querySelector('.login-form__user');
let form = document.querySelector('.login-form');
let psw = document.querySelector('.login-form__password');
let storage = localStorage.getItem('login');



entrance.addEventListener('click',function(e){
   e.preventDefault();
    popup.classList.add('modal--appear');
    login.focus();
    if(storage){
        login.value = storage;
    }
});


close.addEventListener('click',function(e){
   e.preventDefault();
   popup.classList.remove('modal--appear');
   popup.classList.remove('modal-error');
});


form.addEventListener('submit',function(e){
    if(!login.value || !psw.value){
        e.preventDefault();
        popup.classList.remove('modal-error');
        popup.offsetHeight = popup.offsetHeight;
        popup.classList.add('modal-error');
   }else{
       localStorage.setItem('login',login.value);
    }
});



