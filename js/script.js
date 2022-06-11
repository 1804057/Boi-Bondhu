
let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

let signupForm = document.querySelector('.signup-form-container');

document.querySelector('#signup-btn').onclick = () =>{
  signupForm.classList.toggle('active');
}

document.querySelector('#close-signup-btn').onclick = () =>{
  signupForm.classList.remove('active');
}

window.onscroll = () =>{

  
    if(window.scrollY > 80){
      document.querySelector('.header .header-2').classList.add('active');
    }else{
      document.querySelector('.header .header-2').classList.remove('active');
    }
  
  }

  window.onload = () =>{

    if(window.scrollY > 80){
      document.querySelector('.header .header-2').classList.add('active');
    }else{
      document.querySelector('.header .header-2').classList.remove('active');
    }
  
  }