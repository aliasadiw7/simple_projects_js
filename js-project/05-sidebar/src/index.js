const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.button-close');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar')
})
closeBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar')
})