function sumSalary(salaries) {
 let zarplata = 0;
 
 for (key in salaries) {
     if (isFinite(salaries[key])) {
     zarplata += salaries[key];
     } 
  } 
  return zarplata;
}