const getFileContent = (e) => {
  const file = e.target.files[0];
  console.log(e.target.files);

  const reader = new FileReader();

  reader.onload = setContentFromFile(file);

  reader.readAsText(file);
};

const setContentFromFile = (file) => {
  return (event) => {
    console.log(file.name);
    console.log(event.target.result);
    document.getElementById("content").innerHTML = event.target.result;
  };
};

document.getElementById("file").addEventListener("change", getFileContent);

function handleChangeColor() {
  console.log("handle click");
  if (window.getSelection) {
    const text =window.getSelection().toString();
    const selection = window.getSelection();
    if (selection.rangeCount) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      const span = document.createElement("span");
      span.setAttribute("id","selectedText");
      span.innerHTML=text;
      range.insertNode(span);
    }
    console.log(text);
  }
}
