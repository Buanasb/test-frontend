document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('button-active');
    });
  });
});

// document.addEventListener('DOMContentLoaded', function (event) {
//   const accor = document.getElementsByClassName('button');
//   for (let i = 0; i < accor.length; i++) {
//     let item = accor[i];
//     item.addEventListener('click', () => {
//       item.classList.toggle('button-active');
//     });
//   }
// });


window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('nav-active', window.scrollY > 0);
});
