import express from "express";
import employees from "./employees.json" with { type: "json" };

const app = express();
app.use(express.json());


//Endpoint 7
app.get("/api/employees/:name", (req, res) => {
  const filterName = req.params.name;
  const employeeFound = employees.find(
    (employee) => employee.name === filterName,
  );

  if (!employeeFound) {
    return res.status(404).json({ code: "not_found" });
  }

  return res.json(employeeFound);
});


//Endpoint 6
app.get("/api/employees", (req, res) => {
  const badge = req.query.badges;

  if (badge) {
    const filteredEmployees = employees.filter((employee) =>
      employee.badges.includes(badge),
    );
    return res.json(filteredEmployees);
  }

  return res.json(employees);
});

//Endpoint 5
app.post("/api/employees", (req, res) => {
  const newEmployee = req.body;

  const hasValidBody =
    newEmployee &&
    typeof newEmployee.name === "string" &&
    typeof newEmployee.age === "number" &&
    newEmployee.phone &&
    typeof newEmployee.phone.personal === "string" &&
    typeof newEmployee.phone.work === "string" &&
    typeof newEmployee.phone.ext === "string" &&
    (newEmployee.privileges === "user" || newEmployee.privileges === "admin") &&
    newEmployee.favorites &&
    typeof newEmployee.favorites.artist === "string" &&
    typeof newEmployee.favorites.food === "string" &&
    Array.isArray(newEmployee.finished) &&
    Array.isArray(newEmployee.badges) &&
    Array.isArray(newEmployee.points);

  if (!hasValidBody) {
    return res.status(400).json({ code: "bad_request" });
  }

  employees.push(newEmployee);
  return res.status(201).json(newEmployee);
});

//Endpoint 4
app.get("/api/employees", (req, res) => {
  const user = req.query.user;
  if (user === "true") {
    const users = employees.filter(
      (employee) => employee.privileges === "user",
    );
    return res.json(users);
  }

  return res.json(employees);
});

//Endpoint 3
app.get("/api/employees/oldest", (req, res) => {
  const oldest = employees.reduce((max, employee) =>
    employee.age > max.age ? employee : max,
  );

  return res.json(oldest);
});

//Endpoint 2
app.get("/api/employees", (req, res) => {
  const page = req.query.page;

  const startElem = 2 * (page - 1);
  const endElem = startElem + 2;

  return res.json(employees.slice(startElem, endElem));
});

app.listen(3000, () => {});

//Endpoint 1
app.get("/api/employees", (req, res) => {
  res.json(employees);
});
