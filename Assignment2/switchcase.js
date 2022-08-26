const prompt = require("prompt-sync")();

const marks = parseInt(prompt('Enter marks of the student: '));

switch(true) {
    case ((marks > 90) && (marks <= 100)):
      console.log(`Student got S Grade`);
      break;
    case (marks > 80) && (marks <= 90):
      console.log(`Student got A Grade`);
      break;
    case (marks > 70) && (marks <= 80):
      console.log(`Student got B Grade`);
      break;
    case (marks > 60) && (marks <= 70):
      console.log(`Student got C Grade`);
      break;
    case (marks > 50) && (marks <= 60):
      console.log(`Student got D Grade`);
      break;
    case (marks > 40) && (marks <= 50):
      console.log(`Student got E Grade`);
      break;
    case (marks > 0) && (marks <= 40):
      console.log(`Student has failed`);
      break;
    default:
        console.log(`Invalid marks`);
      // code block
  }