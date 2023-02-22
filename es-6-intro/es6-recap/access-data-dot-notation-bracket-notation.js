/* 4) How will you display
a) Petersburg
b) Herry */
let students = {
  2222: {
    name: "Jack",
    section: "C",
    class: "IX",
    address: {
      "building no": 12,
      street: "St. Jonson",
      city: "Petersburg",
      country: "UK",
    },
  },
  3333: {
    name: "Herry",
    section: "D",
    class: "X",
    address: {
      "building no": 85,
      street: "DC road",
      city: "Kachukhet",
      country: "Bangladesh",
    },
  },
};
console.log(students[2222].address.city);
console.log(students[3333].name);

/* 5) How will you display
a) programming er coddogosti
b) VW
c) Bangladesh */

let instructor = {
  name: "Jhankar Mahbub",
  entrepreneur: true,
  additionalData: {
    writer: true,
    favoriteHobbies: ["travelling", "Coding"],
    books: ["programming er bolod to bos", "programming er coddogosti"],
    moreDetails: {
      favoriteBasketballTeam: "XYZ",
      isYoungest: true,
      hometown: {
        city: "ABC",
        state: "VW",
      },
      countriesLivedIn: ["Bangladesh", "New York"],
    },
  },
};
console.log(instructor.additionalData.books[1]);
console.log(instructor.additionalData.moreDetails.countriesLivedIn[0]);

/* How will you display
a) B
b) D */
const studentData = [
  {
    class: 10,
    details: [
      {
        studentId: "1",
        gradingDetails: [{ grade: "A" }],
      },
      {
        studentId: "2",
        gradingDetails: [{ grade: "B" }],
      },
    ],
  },
  {
    class: 11,
    details: [
      {
        studentId: 3,
        gradingDetails: [{ grade: "B" }],
      },
      {
        studentId: 4,
        gradingDetails: [{ grade: "D" }],
      },
    ],
  },
];
console.log(studentData[1].details[0].gradingDetails[0].grade);
console.log(studentData[1].details[1].gradingDetails[0].grade);
