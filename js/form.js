const form = document.getElementById("contactForm");
const msg = document.getElementById("formMessage");

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();

  if (!name) {
    msg.textContent = "Пожалуйста, введите имя.";
    msg.style.color = "tomato";
    return;
  }
  if (!validateEmail(email)) {
    msg.textContent = "Пожалуйста, введите корректный email.";
    msg.style.color = "tomato";
    return;
  }

  msg.style.color = "#9be7d1";
  msg.textContent = `Спасибо, ${name}! Ваш запрос принят.`;

  form.reset();

  setTimeout(() => {
    msg.textContent = "";
    msg.style.color = "";
  }, 4000);
});
