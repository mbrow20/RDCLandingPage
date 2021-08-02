const element = document.getElementById("fruits");
const checkValue = element.options[element.selectedIndex].value;
const checkText = element.options[element.selectedIndex].text;

element.addEventListener("change", (e) => {
  const value = e.target.value;
  const text = element.options[element.selectedIndex].text;
 
  if (value) {
    document.getElementById("pick").textContent = `Value Selected: ${value}`;
  } else {
    document.getElementById("pick").textContent = "";
  }
});