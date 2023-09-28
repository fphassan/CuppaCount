document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.count');
    const plusButtons = document.querySelectorAll('.plus');
    const minusButtons = document.querySelectorAll('.minus');
  
    plusButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        counters[index].textContent = parseInt(counters[index].textContent) + 1;
      });
    });
  
    minusButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        counters[index].textContent = Math.max(0, parseInt(counters[index].textContent) - 1);
      });
    });
  });
  