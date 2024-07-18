function skillsMember() {
  let member = {
    name: 'John Doe',
    age: 30,
    skills: ['JS', 'React', 'Node'],
    salary: 1000,
    getSalary() {
      return this.salary;
    },
  };
  return member;
}