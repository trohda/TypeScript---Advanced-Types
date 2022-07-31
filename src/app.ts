// interface Admin
type Admin = {
  name: string;
  privileges: string[];
};

// interface Employee
type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Tomek",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
