// export { getMembers };

// async function getMembers() {
//   const response = await fetch(`data/members.json`);
//   const data = await response.json();
//   console.log(data);
//   return data;
// }

// "use strict";

// const fs = require(`fs`);

// function constructMember(memberData) {
//   const member = {
//     firstName: memberData.firstName,
//     lastName: memberData.lastName,
//     email: memberData.email,
//     dateOfBirth: memberData.dateOfBirth,
//     gender: memberData.gender,
//     hasPayed: memberData.hasPayed,
//     image: memberData.image,
//   };
//   return member;
// }

// const filePath = "./data/members.json";

// fs.readFile(filePath, "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading the file:", err);
//     return;
//   }

//   try {
//     const jsonData = JSON.parse(data);

//     for (const key in jsonData) {
//       console.log(constructMember(jsonData[key]));
//     }
//   } catch (parseError) {
//     console.error("Error parsing JSON:", parseError);
//   }
// });

// members.js

// members.js

// members.js

// Member class constructor
export class Member {
  constructor(id, firstName, lastName, email, dateOfBirth, gender, hasPayed, image, isActiveMember, isCompetitive) {
    this._id = id; // Skrivebeskyttet id
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.hasPayed = hasPayed;
    this.image = image;
    this.isActiveMember = isActiveMember; // Ny egenskab isActiveMember
    this.isCompetitive = isCompetitive;
  }

  // Getter for full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Getter for age property
  get age() {
    const today = new Date();
    const birthDate = new Date(this.dateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }

    return age;
  }

  // Getter for isJunior property
  get isJunior() {
    return this.age < 18;
  }

  // Getter for isSenior property
  get isSenior() {
    return this.age >= 18;
  }
}

// Function to fetch members and convert them to Member objects
export async function fetchMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  return data.map(
    (memberData) =>
      new Member(
        memberData.id,
        memberData.firstName,
        memberData.lastName,
        memberData.email,
        memberData.dateOfBirth,
        memberData.gender,
        memberData.hasPayed,
        memberData.image,
        memberData.isActiveMember,
        memberData.isCompetitive
      )
  );
}
