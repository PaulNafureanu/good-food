function toggleExtension(extensionId) {
  let extension = document.getElementById(extensionId);
  if (extension.classList.contains("collapsible__extension--extended")) {
    extension.classList.remove("collapsible__extension--extended");
  } else {
    extension.classList.add("collapsible__extension--extended");
  }
}

/* CSS Function Rules */

function styleInputGroupOnFocus(groupId, inputId, btnId) {
  let groupEl = document.getElementById(groupId);
  let inputEl = document.getElementById(inputId);
  let btnEl = document.getElementById(btnId);

  inputEl.addEventListener("focusin", () => {
    groupEl.style.border = "1px solid rgba(0, 0, 0, 0.1)";
    groupEl.style.boxShadow = "0 0 50px 50px rgba(0, 0, 0, 0.15)";
  });
  inputEl.addEventListener("focusout", () => {
    groupEl.style.border = "1px solid transparent";
    groupEl.style.boxShadow = "none";
  });

  btnEl.addEventListener("click", () => {
    groupEl.style.border = "1px solid transparent";
    groupEl.style.boxShadow = "none";
  });
}
