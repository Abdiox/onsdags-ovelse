import { initTabs } from "./tabs.js";
import { fetchMembers, Member } from "./members.js";
import { fetchResults, Result } from "./results.js";
// import { fetchResults, Result } from "./results.js";
window.addEventListener("load", initApp);

async function initApp() {
  initTabs();
  displayMembers();
  displayResults();
  // TODO: Make the rest of the program ...
}

//------------------- Get members  ----------------------//

// Fetch members and display them
async function displayMembers() {
  const members = await fetchMembers();
  members.forEach((member) => {
    showMembers(member);
  });
}

function showMembers(memberObject) {
  const html = /*html*/ `
    <tbody>
    <tr>
      <td>${memberObject.fullName}</td>
      <td>${memberObject.isActiveMember}</td>
      <td>${memberObject.dateOfBirth}</td>
      <td>${memberObject.age}</td>
<td>${memberObject.isJunior ? "Junior" : "Senior"}</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
  `;
  document.querySelector("#members").insertAdjacentHTML("beforeend", html);
}

// Find a member by ID
// function findMemberById(id, members) {
//   return members.find((member) => member.id === id);
// }

//------------------- Get Results  ----------------------//

async function displayResults() {
  const results = await fetchResults();
  results.forEach((result) => {
    showResults(result);
    // console.log(`Result ID: ${result.id}`);
    // console.log(`Member ID: ${result.memberId}`);
    // You can display other result properties here
  });
}

function showResults(resultObject) {
  const html = /*html*/ `


    <tbody>
          <tr>
            <td>${resultObject.date}</td>
            <th>${resultObject.memberId}</th>
            <th>${resultObject.discipline}</th>
            <th>${resultObject.resultType}</th>
            <th>${resultObject.time}</th>
          </tr>
        </tbody>
  `;
  document.querySelector("#results").insertAdjacentHTML("beforeend", html);
}

// Find a result by ID
// function findResultById(id, results) {
//   return results.find((result) => result.id === id);
// }

//------------------- Get Ids  ----------------------//

// Example usage
// async function GetIds() {
//   await displayMembers();
//   await displayResults();

//   const memberIdToFind = 1; // Replace with the ID you want to search for
//   const members = await fetchMembers();
//   const member = findMemberById(memberIdToFind, members);
//   if (member) {
//     console.log(`Found member with ID ${memberIdToFind}: ${member.fullName}`);
//   } else {
//     console.log(`Member with ID ${memberIdToFind} not found.`);
//   }
// }

// GetIds();
