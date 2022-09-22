passwordInput.focus();
passwordForm.onsubmit = async(event) => {
  event.preventDefault();
  const password = passwordInput.value;
  if (password === '') {
    document.body.style.setProperty('--border-color', 'red');
    passwordInput.focus();
  } else {
    await chrome.storage.sync.set({ password });
    document.location.replace('login.html##');
  }
};