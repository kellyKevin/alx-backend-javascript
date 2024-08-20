interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'San Francisco',
};

// Array containing the students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable() {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  studentsList.forEach((student) => {
    const row = tbody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

// Call renderTable when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderTable);

