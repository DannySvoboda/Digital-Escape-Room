function layer1KEYDROP() {
  const key = "CyBerSec"
  if (key == document.getElementById("Code").value.toLowerCase()){
    document.getElementById("gate").style.display = "block";
  }
}
