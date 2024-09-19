document.getElementById("calculateGradeBtn").addEventListener("click", () => {
  let grade = parseInt(document.getElementById("gradeValue").value);
  console.log(grade);
  let gradeOutput = document.getElementById("gradeOutput");
  gradeOutput.innerText = calculateGrade(grade);
});
function calculateGrade(grade) {
  if (grade < 25) {
    return "NO Grade";
  } else if (grade >= 25 && grade < 65) {
    return "Pass";
  } else if (grade >= 65 && grade < 80) {
    return "Good";
  } else if (grade >= 80 && grade < 90) {
    return "Very Good";
  } else {
    return "Excellent";
  }
}
