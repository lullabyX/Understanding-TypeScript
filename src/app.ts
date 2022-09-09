class Department {
  name: string
  private employees: string[] = []

  constructor (n: string) {
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

const accounting = new Department('Accounting');

accounting.showDetail()

accounting.addEmployee('Jerry', 'Tom')

accounting.showDetail()


const something = {addEmployee: accounting.addEmployee}

// something.addEmployee('Jerry') // throws error because of 'this' in param, something doesn't have employee proterty
// console.log(accounting.employees); // throws error because 'employees' is private
