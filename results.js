// results.js

// Result class constructor
// export class Result {
//   constructor(id, memberId, score, date) {
//     this.id = id;
//     this.memberId = memberId;
//     this.score = score;
//     this.date = date;
//   }

//   // Method to display result details
//   display() {
//     console.log(`Result ID: ${this.id}`);
//     console.log(`Member ID: ${this.memberId}`);
//     console.log(`Score: ${this.score}`);
//     console.log(`Date: ${this.date}`);
//   }
// }

// // Function to fetch results and convert them to Result objects
// export async function fetchResults() {
//   const response = await fetch("data/results.json");
//   const data = await response.json();
//   return data.map((resultData) => new Result(resultData.id, resultData.memberId, resultData.score, resultData.date));
// }
