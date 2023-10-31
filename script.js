//Q1. For the given JSON iterate over all for loops (for, for in, foreach, forof).

 const arr = [
     {
         "name":"john",
         "age":"20"
     },
     {
         "name":"Doe",
         "age":"30"
     },
     {
         "name":"Wick",
         "age":"40"
     }
   ] 
    
     //For
      for (let i=0;i<arr.length;i++){
          console.log(arr[i].name,arr[i].age);
      }

      //For in
      for (const key in arr)
      {
        console.log(arr[key]);
      }

      //For in
      for (let person of arr)
      {
        console.log(person.name, person.age);
      }

//Q2.Create your own resume data in JSON format.

let myResume = {
    BioData: {
      "name": "Amsa R",
      "email": "amsa.ramanujam@gmail.com",
      "phone": 8056786613,
      "degree": "Bsc",
      "location": {
        "address": "No.14 Selvaraj street, Thiruvanchery",
        "postalCode": 600126,
        "city": "Chennai",
        "state": "Tamilnadu",
        "country": "India"
      },
      Profile: [
        {
          "github":"https://github.com/amsa2002"
        }
      ]
    },
    Education: [
      {
        "institution": "Theni Kammavar Sangam College of Arts and Science",
        "department": "Computer Science",
        "batch start year": 2019,
        "batch end year": 2022,
        "gpa": 7.4,
      }
    ],
    Skills: [
      {
        "name": "javascript",
        "level": "beginer",
        "project": [
          "Online message web application with chatpot"
        ]
      }
    ],
    Languages: [
      {
        "language": "Tamil,Enlish",
      }
    ],
    Interests: [
      {
        "name": "Dancing, Learning about new technologies,",
      }
    ]
  }
  console.log(myResume);
  