console.log('Loaded main.js');

// Get our external modules
import { Course } from './course-marks';

// Demo using the constructor function
let myCourse = new Course('CPSC-1520', 'JavaScript Fundamentals');
console.log(myCourse);
myCourse.getTotalWeight();
