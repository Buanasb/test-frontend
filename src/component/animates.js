document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('button-active');
  });
});

// const accor = document.getElementsByClassName('button');
// let i;

// for (i = 0; i < accor.length; i++) {
//   accor[i].addEventListener('click', () => {
//     this.classList.toggle('button-active');
//   });
// }

// window.addEventListener('click', () => {
//   const accor = document.querySelectorAll('.button');
//   accor.forEach(x => x.classList.toggle('button-active'));
// });

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('nav-active', window.scrollY > 0);
});
