function showSalary(users, age) {

  let str = "";
   for (let i = 0; i < users.length; i++){
      if (users[i].age <= age) {
          if (i < (users.length - 1)) {
          str += users[i].name + ", " + users[i].balance + "\n";
          } else {
          str += users[i].name + ", " + users[i].balance;
          };

      };  
   };
return str;
}