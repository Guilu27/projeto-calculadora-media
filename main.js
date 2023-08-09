const form = document.getElementById("form-activity");
const imgApproved = `<img src="images/aprovado.png" alt="emoji festejando" />`;
const imgDisapproved = `<img src="images/reprovado.png" alt="imagem de reprovado" />`;
const activities = [];
const grades = [];
const approvedSpam = `<spam class= "resultado aprovado">Aprovado</span>`;
const disapprovedSpam = `<spam class= "resultado reprovado">Reprovado</span>`;
const minGrade = parseFloat(prompt("Digite a Nota Minima"));

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  addLine();
  updateTable();
  updateAverage();
});

function addLine() {
  const inputNameActivity = document.getElementById("name-activity");
  const inputGradeActivity = document.getElementById("grade-activity");

  if (activities.includes(inputNameActivity.value)) {
    alert(`A atividade: ${inputNameActivity.value} já foi inserida`);
  } else {
    activities.push(inputNameActivity.value);
    grades.push(parseFloat(inputGradeActivity.value));

    let linha = "<tr>";
    linha += `<td>${inputNameActivity.value}</td>`;
    linha += `<td>${inputGradeActivity.value}</td>`;
    linha += `<td>${
      inputGradeActivity.value >= minGrade ? imgApproved : imgDisapproved
    }</td>`;
    linha += "</tr>";

    linhas += linha;
  }

  inputNameActivity.value = "";
  inputGradeActivity.value = "";
}

function updateTable() {
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = linhas;
}

function updateAverage() {
  const average = calculateAverage();

  document.getElementById("avarege-value").innerHTML = average;
  document.getElementById("result").innerHTML =
    average >= minGrade ? approvedSpam : disapprovedSpam;
}

function calculateAverage() {
  let gradesSum = 0;

  for (let i = 0; i < grades.length; i++) {
    gradesSum += grades[i];
  }
  return gradesSum / grades.length;
}
