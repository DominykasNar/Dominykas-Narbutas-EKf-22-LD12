function saveStudent() {
  
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var studentID = document.getElementById('studentID').value;
  var gradesInput = document.getElementById('grades').value;

  
  var grades = gradesInput.split(',').map(function (grade) {
    
    var parsedGrade = parseFloat(grade.trim());

    if (isNaN(parsedGrade) || parsedGrade < 0 || parsedGrade > 10) {
      
      alert('Neteisingas pažymys. Įveskite teigiamą skaitinę vertę nuo 1 iki 10.');
      return; 
    }

    return parsedGrade;
  });

  
  if (grades.includes(undefined)) {
    return; 
  }

  
  var student = {
    firstName: firstName,
    lastName: lastName,
    studentID: studentID,
    grades: grades
  };

  
  displayResults(student);
  displayBestAndWorstGrades(student);
}

function displayResults(student) {
  var resultContainer = document.getElementById('resultContainer');

  
  resultContainer.innerHTML = '';

  
  displayFieldResult('Studento vardas:', student.firstName + ' ' + student.lastName);
  displayFieldResult('Studento ID:', student.studentID);
  displayFieldResult('Pažymiai:', student.grades.join(', '));
}

function displayBestAndWorstGrades(student) {
  var resultContainer = document.getElementById('resultContainer');

  
  var bestGrade = Math.max(...student.grades);
  var worstGrade = Math.min(...student.grades);

  
  var bestColor = bestGrade <= 4 ? 'red' : (bestGrade <= 8 ? 'orange' : 'green');
  var worstColor = worstGrade <= 4 ? 'red' : (worstGrade <= 8 ? 'orange' : 'green');

  
  displayFieldResult('Geriausias pažymys:', `<span style="color:${bestColor};"> ${bestGrade}</span>`);
  displayFieldResult('Prasčiausias pažymys:', `<span style="color:${worstColor};"> ${worstGrade}</span>`);
}

function displayFieldResult(fieldName, value) {
  var resultContainer = document.getElementById('resultContainer');
  var resultRow = document.createElement('div');
  resultRow.innerHTML = '<strong>' + fieldName + '</strong> ' + value;
  resultContainer.appendChild(resultRow);
}