abstract class Department {
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

  abstract showDetail(): void;
}

class ITDepartment extends Department {
  private static instance: ITDepartment
  // I don't need to declare attributes if I use shortcut
  private constructor(id: string, public admins: string[]) {
    // if you declare access modifier(public/private), you
    // can have shortcut where you don't need to declare
    // and assign this.that = that
    super(id, "IT");
    // here I don't need to assign this.admins = admins because of above reason
  }

  showDetail(): void {
      console.log(this);  
  }

  static getInstance() {
    if (this.instance)
    {
      return this.instance
    }
    this.instance = new ITDepartment('d1', [])
    return this.instance;
  }
}

const it = ITDepartment.getInstance();

it.showDetail();

it.addEmployee("Jerry", "Tom");

it.showDetail();

class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;
  static motto = 'Count that we do!'
  private latestReport = ''
  private reports: string[] = [];

  private constructor(id: string) {
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

  showDetail(): void {
      console.log('====================================');
      console.log(this);
      console.log('====================================');
  }

  static getInstance() {
    if (this.instance)
      return this.instance
    this.instance = new AccountingDepartment('d2')
    return this.instance
  }
}

const accounting = AccountingDepartment.getInstance()
accounting.addEmployee("Max", "Segan");
accounting.addReport("Good");

console.log(accounting.mostRecent); // getter setter
accounting.mostRecent = "Bad";
console.log(accounting.mostRecent);

console.log(AccountingDepartment.motto); // static


const something = { addEmployee: it.addEmployee };

it.showDetail()
accounting.showDetail()

// something.addEmployee('Jerry') // throws error because of 'this' in param, something doesn't have employee proterty
// console.log(accounting.employees); // throws error because 'employees' is private
