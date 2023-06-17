let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developerEmployees = employees.filter(
    (employee) => employee.profession === "developer"
  );
  developerEmployees.map((employee) => console.log(employee));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  employees.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "Susan", age: "20", profession: "intern" };
  employees.push(newEmployee);
  console.log(newEmployee);
}

function removeAdmin() {
  //Write your code here, just console.log
  employees = employees.filter((employee) => employee.profession !== "admin");
  console.log(employees);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArray = [
    { id: 5, name: "Emma", age: 28, profession: "developer" },
    { id: 6, name: "Mike", age: 32, profession: "designer" },
    { id: 7, name: "Sarah", age: 24, profession: "developer" },
  ];

  const concatenatedArray = employees.concat(newArray);
  console.log(concatenatedArray);
}
