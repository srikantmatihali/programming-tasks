/**
 * Author: Srikanth V Mattihalli
 * License: MIT
 * Problem Statment: 
 *   Find average salary from employees in state. 
 *   Build a JSON structure and find number of employees in particular state
 * jsfiddle: https://jsfiddle.net/srikantmatihali/j7f3Lczp/26/
 * 
 */

 console.log('Average Salary of employees in State');
 console.log('=========================================');

 const employeeData = [{"employee":1,"state":"Karnataka","Salary":1000},{"employee":2,"state":"Maharastra","Salary":1000},{"employee":3,"state":"Karnataka","Salary":3000},{"employee":4,"state":"Goa","Salary":6000},{"employee":11,"state":"Karnataka","Salary":1000},{"employee":12,"state":"Maharastra","Salary":1000},{"employee":15,"state":"Karnataka","Salary":3000},{"employee":16,"state":"Maharastra","Salary":6000}];


 getSalary = (state) => {
   var overallSalary = 0;
   var employeeCount = 0;
   for(let salaryData of employeeData){
      if(salaryData.state == state){
            overallSalary+= salaryData.Salary;
         employeeCount++;
      }
   }
   console.log(overallSalary/employeeCount);
 }
 
 getSalary('Karnataka');