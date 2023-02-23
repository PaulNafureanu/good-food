function toggleExtension(extensionId) {
  let extension = document.getElementById(extensionId);
  if (extension.classList.contains("collapsible__extension--extended")) {
    extension.classList.remove("collapsible__extension--extended");
  } else {
    extension.classList.add("collapsible__extension--extended");
  }
}
