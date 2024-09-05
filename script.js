function checkCodeL1() {
  const key = "cyber";
  if (key == document.getElementById("Code").value.toLowerCase()){
    document.getElementById("gate").style.display = "block";
  }
}

function checkCodeL2() {
  const key = "091506";
  if (key == document.getElementById("Code").value.toLowerCase()){
    document.getElementById("gate").style.display = "block";
  }
}