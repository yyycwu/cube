passwordForm.onsubmit = async(event) => {
  event.preventDefault();
  if (location.hash === '##') {
    invalidDiv.style.opacity = '0';
  }
  passwordInput.blur();
  const { password } = await chrome.storage.sync.get('password');
  const { value } = passwordInput;
  if (password === void 0 && value === '') {
    document.location.replace('reset.html');
  } else if (value !== password) {
    if (getActiveElementValue() === 'New Password' && location.hash === '##') {
      document.location.replace('reset.html');
    }
    document.body.style.setProperty('--border-color', 'red');
    if (location.hash === '##') {
      invalidDiv.hidden = false;
      invalidDiv.style.opacity = '1';
    }
    passwordInput.focus();
  } else {
    if (getActiveElementValue() === 'New Password') {
      document.location.replace('reset.html');
    } else {
      document.location.replace('options.html');
    }
  }
};
function getActiveElementValue() {
  const { activeElement } = document;
  if (activeElement instanceof HTMLInputElement) {
    return activeElement.value;
  }
  return null;
}
if (location.hash === '##') {
  passwordInput.focus();
  placeholderDiv.textContent='Retype New Password';
}