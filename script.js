
  const questions = document.querySelectorAll('.faq');

  questions.forEach(faq => {
    faq.addEventListener('click', () => {
      const img = faq.querySelector('img');
      const answer = faq.querySelector('p');

      if (img.getAttribute("src") === "assets/images/icon-plus.svg") {
        img.setAttribute("src", "assets/images/icon-minus.svg");
        answer.style.display = "block";
      }
      else {
        img.setAttribute("src", "assets/images/icon-plus.svg");
        answer.style.display = "none";
      }
    });
  });