export { Result, fetchResults };

// Result class constructor
class Result {
  constructor(id, memberId, competitionName, competitionPlacement, date, discipline, resultType, time) {
    this.id = id;
    this.memberId = memberId;
    this.competitionName = competitionName;
    this.competitionPlacement = competitionPlacement;
    this.date = date;
    this.discipline = discipline;
    this.resultType = resultType;
    this.time = time;
  }

  // Getter for Date
  get Date() {
    return this.date;
  }

  // Getter for Member ID
  get MemberID() {
    return this.memberId;
  }

  // Getter for Discipline
  get Discipline() {
    return this.discipline;
  }

  // Getter for Result Type
  get ResultType() {
    return this.resultType;
  }

  // Getter for Time
  get Time() {
    return this.time;
  }

  // Method to display result details
  display() {
    console.log(`Result ID: ${this.id}`);
    console.log(`Member ID: ${this.memberId}`);
    console.log(`Competition Name: ${this.competitionName}`);
    console.log(`Competition Placement: ${this.competitionPlacement}`);
    console.log(`Date: ${this.date}`);
    console.log(`Discipline: ${this.discipline}`);
    console.log(`Result Type: ${this.resultType}`);
    console.log(`Time: ${this.time}`);
  }
}

// Function to fetch results and convert them to Result objects
async function fetchResults() {
  const response = await fetch("data/results.json");
  const data = await response.json();
  return data.map(
    (resultData) =>
      new Result(
        resultData.id,
        resultData.memberId,
        resultData.date,
        resultData.time,
        resultData.resultType,
        resultData.discipline,
        resultData.competitionPlacement,
        resultData.competitionName
      )
  );
}
