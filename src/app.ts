class Department {
  name: string
  private employees: string[] = []

  constructor (public readonly id: string, n: string) {
    this.name = n
  }

  addEmployee(this: Department, ...employee: string[]) { // this in the parameter is not required, but if inserted
                                                    // the thing calling the method must have the properties
                                                    // this has
    this.employees.push(...employee)
    
  }

  showDetail(this: Department) {
    console.log('Department: ' + this.name);
    console.log('Number of employees: ' + this.employees.length);
    console.log('Employees: '+ this.employees)
  }
}

class ITDepartment extends Department {
  // I don't need to declare attributes if I use shortcut
  constructor (id: string, public admins: string[]) { // if you declare access modifier(public/private), you
                                                      // can have shortcut where you don't need to declare
                                                      // and assign this.that = that
    super(id, 'IT');
    // here I don't need to assign this.admins = admins because of above reason
  }
}

const it = new ITDepartment('d1', ['Max', 'Hassan']);

it.showDetail()

it.addEmployee('Jerry', 'Tom')

it.showDetail()

class AccountingDepartment extends Department {
  private reports: string[] = []
  constructor (id: string) {
    super(id, 'Accounting');
  }

  addReport(report: string) {
    this.reports.push(report)
  }

  printReport() {
    console.log(this.reports);
    
  }
}

const accounting = new AccountingDepartment('d2')
accounting.addEmployee('Carl', 'Segan')
accounting.addReport('Good')

const something = {addEmployee: it.addEmployee}

console.log(it);
console.log(accounting);



// something.addEmployee('Jerry') // throws error because of 'this' in param, something doesn't have employee proterty
// console.log(accounting.employees); // throws error because 'employees' is private
