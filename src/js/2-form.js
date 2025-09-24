const STORAGE_KEY = "feedback-form-state";

let formData = {
  email: "",
  message: "",
};

const form = document.querySelector(".feedback-form");
const { email, message } = form.elements;

// Відновлення даних з localStorage при завантаженні
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  email.value = formData.email || "";
  message.value = formData.message || "";
}

// Відстеження вводу
form.addEventListener("input", (event) => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Сабміт форми
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  // очищення
  formData = { email: "", message: "" };
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
