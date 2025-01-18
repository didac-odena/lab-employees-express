const express = require("express");
const app = express();

app.use(express.json());

const employees = require("./employees.json");

employees.forEach((e, i) => (e.id = i));

// Iteration 6
app.post("/api/employees", (req, res) => {
  const newEmployee = req.body;

  if (!newEmployee.age) {
    return res.status(400).json({ code: "bad_request" });
  }

  employees.push(newEmployee);

  res.json(newEmployee);
});

app.get("/api/employees", (req, res) => {
  const page = req.query.page;

  if (req.query.badges === "black") {
    // Iteration 7
    res.json(employees.filter((e) => e.badges.includes("black")));
  } else if (req.query.user) {
    // Iteration 5
    res.json(employees.filter((e) => e.privileges === "user"));
  } else if (page === undefined) {
    // Iteration 1
    res.json(employees);
  } else {
    // Iteration 2, 3
    const num = +page;
    const from = 2 * (num - 1);

    res.json(employees.slice(from, from + 2));
  }
});

// Iteration 4
app.get("/api/employees/oldest", (req, res) => {
  const maxAge = employees.reduce(
    (acc, el) => (el.age > acc ? el.age : acc),
    0
  );

  const oldestEmployee = employees.find((el) => el.age === maxAge, 0);

  res.json(oldestEmployee);
});

// Iteration 8
app.get("/api/employees/:name", (req, res) => {
  const employee = employees.find((e) => e.name === req.params.name);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ code: "not_found" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
