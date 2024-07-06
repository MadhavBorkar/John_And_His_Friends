const arr = [
  { id: 1, name: "John", age: 28, profession: "developer" },
  { id: 2, name: "Jane", age: 32, profession: "admin" },
  { id: 3, name: "Jack", age: 25, profession: "developer" }
];


function PrintDeveloperbyMap() {
  const developers = arr.filter(employee => employee.profession === "developer") .map(developer => developer.name);
  console.log("Developers using map:", developers);
}

function PrintDeveloperbyForEach() {
  const developers = [];
  arr.forEach(employee => {
      if (employee.profession === "developer") {
          developers.push(employee.name);
      }
  });
  console.log("Developers using forEach:", developers);
}

function addData() {
  const id = arr.length + 1;
  const name = prompt("Enter Name:");
  const age = prompt("Enter Age:");
  const profession = prompt("Enter Profession:");
  const newEmployee = { id: id, name: name, age: age, profession: profession };
  arr.push(newEmployee);
  console.log("New data added:", newEmployee);
}

function removeAdmin() {
  remAdm = arr.filter(employee => employee.profession !== "admin");
  console.log("Array with admin removed:", remAdm);
}

function ConcatinateArray() {
  const newArray = [
      { id: 4, name: "jane", age: "22", profession: "developer" },
      { id: 5, name: "alex", age: "23", profession: "designer" },
      { id: 6, name: "emma", age: "24", profession: "manager" }
  ];
  const concatenatedArray = arr.concat(newArray);
  console.log("Concatenated array:", concatenatedArray);
}

document.getElementById("printMapButton").addEventListener("click", PrintDeveloperbyMap);
document.getElementById("printForEachButton").addEventListener("click", PrintDeveloperbyForEach);
document.getElementById("addDataButton").addEventListener("click", addData);
document.getElementById("removeAdminButton").addEventListener("click", removeAdmin);
document.getElementById("concatenateArrayButton").addEventListener("click", ConcatinateArray);