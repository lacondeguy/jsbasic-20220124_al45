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











let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};


let user2 = {
  'guid': '2483e252-b0d2-4a26-98e6-513531b320b7',
  'isActive': true,
  'balance': '$1,664.27',
  'picture': 'https://placehold.it/32x32',
  'age': 37,
  'eyeColor': 'brown',
  'name': 'Glass Ray',
  'gender': 'male',
  'company': 'ANIVET',
  'email': 'glassray@anivet.com'
};

let user3 = {
  'index': 3,
  'guid': '51855992-a0e7-4821-8178-92bcd13a1f0c',
  'isActive': true,
  'balance': '$1,072.95',
  'picture': 'https://placehold.it/32x32',
  'age': 40,
  'eyeColor': 'brown',
  'name': 'Helga Nixon',
  'gender': 'female',
  'company': 'KENEGY',
  'email': 'helganixon@kenegy.com', 
};

let user4 = {
'guid': '83405931-c746-4ed6-a05f-10b79b018af2',
'isActive': false,
'balance': '$3,422.96',
'picture': 'https://placehold.it/32x32',
'age': 45,
'eyeColor': 'blue',
'name': 'Felicia Browning',
'gender': 'female',
'company': 'TRASOLA',
'email': 'feliciabrowning@trasola.com',
'phone': '+1 (947) 523-3902'
};

let users = [user1, user2, user3, user4];

console.log(showSalary(users, 50));