const multiplyValue = (value: number, multiplier?: number) => {
  if (multiplier === undefined) return value * 2;
  return value * multiplier;
};

const processInput = (value: string | number | boolean) => {
  if (typeof value === "string") return value.trim().toLowerCase();
  if (typeof value === "number") return value * 10;
  return value ? "Active" : "Inactive";
};

const formatCoordinate = ([latitude, longitube, locationName]: readonly [
  number,
  number,
  string,
]) => {
  return `Location: ${locationName} (${latitude}, ${longitube})`;
};

function concatenateArrays<T>(...arrays: T[][]) {
  return [...arrays].flat();
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
const getPopularCourses = (courses: Course[], minStudents: number) => {
  const newCourses = courses.filter(
    (course) => course.isPublished === true && course.students >= minStudents,
  );
  return newCourses;
};

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const newItems = items.map((item) => item[key]);
  return newItems;
}

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails() {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}
class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo() {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => resolve("Access Granted"), 1000);
      return;
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }
  });
};
