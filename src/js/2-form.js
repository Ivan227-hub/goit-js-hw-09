const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

let formData = {
  email: "",
  message: "",
};

// Відновлення даних при завантаженні сторінки
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
formData = { ...formData, ...savedData };
form.elements.email.value = formData.email || "";
form.elements.message.value = formData.message || "";

// Відстеження input і запис у localStorage
form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  if (name in formData) {
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

// Обробка сабміту форми
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: "", message: "" };
  form.reset();
});
