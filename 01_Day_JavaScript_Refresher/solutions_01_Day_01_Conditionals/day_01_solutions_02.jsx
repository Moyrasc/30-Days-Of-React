// 1º Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let grade = window.prompt("Enter grade: ");
  if (grade >= 0 && grade <= 100) {
    if (grade >= 80 && grade <= 100) {
      alert("A");
    } else if (grade >= 70) {
      alert("B");
    } else if (grade >= 60) {
      alert("C");
    } else if (grade >= 50) {
      alert("D");
    } else alert("F")
  }
