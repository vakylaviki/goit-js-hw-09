
const STORAGE_KEY = 'feedback-form-state';


let formData = {
  email: '',
  message: '',
};


const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;


function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function loadFromLocalStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    try {
      formData = JSON.parse(savedData);
      emailInput.value = formData.email || '';
      messageInput.value = formData.message || '';
    } catch (error) {
      console.error('Error parsing saved data:', error);
    }
  }
}


loadFromLocalStorage();


form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  saveToLocalStorage();
});


form.addEventListener('submit', event => {
  event.preventDefault();


  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Form Data:', formData);

  
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});