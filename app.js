const getFileContent = (e) => {
  const file = e.target.files[0];

  const reader = new FileReader();

  reader.onload = setContentFromFile(file);

  reader.readAsText(file);
};

const setContentFromFile = (file) => {
  return (event) => {
    document.getElementById("content").innerHTML = event.target.result;
  };
};

document.getElementById("file").addEventListener("change", getFileContent);

function handleChangeColor() {
  if (window.getSelection) {
    const text = window.getSelection().toString();
    const selection = window.getSelection();
    if (
      selection.rangeCount &&
      selection.containsNode(document.getElementById("content"), true)
    ) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      const span = document.createElement("span");
      span.setAttribute("id", "selectedText");
      span.innerHTML = text;
      range.insertNode(span);
    }
  }
}
