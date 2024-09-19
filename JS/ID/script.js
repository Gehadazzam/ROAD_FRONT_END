document.getElementById("idValue").addEventListener("input", function () {
  let val = this.value;

  let year = parseInt(val.slice(1, 3));
  let month = val.slice(3, 5);
  let day = val.slice(5, 7);
  let fullYear;
  if (year > 24) {
    fullYear = "19" + year;
  } else {
    fullYear = "20" + year;
  }
  document.getElementById("birthYear").innerText = fullYear;
  document.getElementById("birthMonth").innerText = month;
  document.getElementById("birthDay").innerText = day;
});
