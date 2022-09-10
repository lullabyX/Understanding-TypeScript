class Department {
  name: string;
  protected employees: string[] = [];

  constructor(public readonly id: string, n: string) {
    this.name = n;
  }

  addEmployee(this: Department, ...employee: string[]) {
    // this in the parameter is not required, but if inserted
    // the thing calling the method must have the properties
    // this has
    this.employees.push(...employee);
  }

  showDetail(this: Department) {
    console.log("Department: " + this.name);
    console.log("Number of employees: " + this.employees.length);
    console.log("Employees: " + this.employees);
  }
}

class ITDepartment extends Department {
  // I don't need to declare attributes if I use shortcut
  constructor(id: string, public admins: string[]) {
    // if you declare access modifier(public/private), you
    // can have shortcut where you don't need to declare
    // and assign this.that = that
    super(id, "IT");
    // here I don't need to assign this.admins = admins because of above reason
  }
}

const it = new ITDepartment("d1", ["Max", "Hassan"]);

it.showDetail();

it.addEmployee("Jerry", "Tom");

it.showDetail();

class AccountingDepartment extends Department {
  static motto = 'Count that we do!'
  private latestReport = ''
  private reports: string[] = [];
  constructor(id: string) {
    super(id, "Accounting");
  }

  addEmployee(this: AccountingDepartment, ...employee: string[]): void {
    this.employees.push(
      ...employee.filter((em) => {
        return em !== "Max";
      })
    );
  }

  addReport(report: string) {
    this.reports.push(report);
    this.latestReport = report
  }

  printReport() {
    console.log(this.reports);
  }

  get mostRecent() {
    return this.latestReport
  }

  set mostRecent(report: string) {
    this.addReport(report)
  }
}

const accounting = new AccountingDepartment("d2");
accounting.addEmployee("Max", "Segan");
accounting.addReport("Good");

console.log(accounting.mostRecent); // getter setter
accounting.mostRecent = "Bad";
console.log(accounting.mostRecent);

console.log(AccountingDepartment.motto); // static


const something = { addEmployee: it.addEmployee };

console.log(it);
console.log(accounting);

// something.addEmployee('Jerry') // throws error because of 'this' in param, something doesn't have employee proterty
// console.log(accounting.employees); // throws error because 'employees' is private
