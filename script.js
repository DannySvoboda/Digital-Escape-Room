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

function checkCodeL3() {
  let string = document.getElementById("Code").value;
  console.log(string.length);
  console.log(/[A-Z]/.test(string));
  console.log(/\d/.test(string));
  if (string.length >= 8 && /[A-Z]/.test(string) && /\d/.test(string)){
    document.getElementById("gate").style.display = "block";
  } else if (string.length < 8){
    alert("Password must be at least 8 characters long");
  } else if (/\d/.test(string) == false){
    alert("Password must contain at least one number");
  } else if (/[A-Z]/.test(string) == false){
    alert("Password must contain at least one capital letter");
  }
}