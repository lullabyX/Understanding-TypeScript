interface CourseGoal {
  title: string;
  description: string;
  date: Date;
}
function createCourseGoal(title: string, description: string, date: Date): CourseGoal {

  let courseGoal: Partial<CourseGoal> = {}
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.date = date;
  return courseGoal as CourseGoal;
}

console.log(createCourseGoal('TS', 'Understand the basics', new Date()));

const admins: Readonly<string[]> = ['Hassan', 'Rabbi']

// admins.push()  // throws error
// admins.pop() // throws error

console.log(admins);

