const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for (let i=0; i<data.length; i++) {
    if (data[i].profession == "developer") {
      console.log(data[i]);
    }
  }
}

// 2. Add Data
function addData() {
  let newPerson = {};
  newPerson.name = prompt("Please enter your name");
  newPerson.age = prompt("Please enter your age");
  newPerson.profession = prompt("Please enter your profession");
  data.push(newPerson);
}

// 3. Remove Admins
function removeAdmin() {
  for (let i=0; i<data.length; i++) {
    if (data[i].profession == "admin"){
      data.splice(i,1);
    }
  }
  console.log(data);
 }

// 4. Concatenate Array
function concatenateArray() { 
  const array1 = ["anil", "sunil", "vamshi", "ayaansh"];
  const array2 = ["kumar", "krishna", "karne"];
  const combinedArray = array1.concat(array2);
  console.log(combinedArray);
}

// 5. Average Age
function averageAge() {
  let sum =0;
  for (let i=0; i<data.length; i++) {
    sum += data[i].age;
  }
  let avgAge = sum/data.length;
  console.log(avgAge);
 }

// 6. Age Check
function checkAgeAbove25() {

  let i=0; 
  while (i<data.length) {
    if (data[i]>25) {
      console.log("true");
    }
    else {
      console.log("false");
    }
    i++;
  }
}
// 7. Unique Professions
function uniqueProfessions() { 
  for (let i = 0; i<data.length; i++) {
    for (let j=i+1; j<data.length; j++) {
      if (data[i].profession == data[j].profession) {
        break;
      }
    }
    console.log(data[i].profession);

  }
}

// 8. Sort by Age
function sortByAge() { }

// 9. Update Profession
function updateJohnsProfession() {
  for (let i=0; i<data.length; i++) {
    if (data[i].name == "john") {
      data[i].profession = "manager";
      console.log(data[i]);
    }
  }
  
}

// 10. Profession Count
function getTotalProfessions() {
  let count1 =0;
  let count2 =0;
  for (let i = 0; i<data.length; i++)
  {
    if (data[i].profession == "developer") {
      count1++;
    }
    else if (data[i].profession == "admin") {
      count2++;
    }
  }
  console.log("Total Developers:" + count1);
  console.log("Total Admins:" + count2);
 }
