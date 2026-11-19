/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
  { student: "Alya", submitted: true, score: 92 },
  { student: "Budi", submitted: false, score: 0 },
  { student: "Citra", submitted: true, score: 78 },
  { student: "Dimas", submitted: true, score: 65 },
  { student: "Eka", submitted: false, score: 0 },
  { student: "Fajar", submitted: true, score: 84 },
  { student: "Gita", submitted: true, score: 90 },
  { student: "Hana", submitted: true, score: 73 }
]
let alreadySubmit: number = 0
let noSubmit: number = 0
let passCount: number = 0
let reviseCount: number = 0
let noSubmitNames: string[] = []
let reviseNames: string[] = []
let endScore: number = 0

for (let i: number = 0; i < submissions.length; i++) {
  endScore = endScore + submissions[i].score
  if (submissions[i].submitted === true) {
    alreadySubmit = alreadySubmit + 1
    if (submissions[i].score >= 75) {
      passCount = passCount + 1
    } else {
      reviseCount = reviseCount + 1
      reviseNames.push(submissions[i].student)
    }
  } else {
    noSubmit = noSubmit + 1
    noSubmitNames.push(submissions[i].student)
  }
}

const classAverage: number = endScore / submissions.length

console.log("Number of Students Who Submitted: " + alreadySubmit)
console.log("Number of Students Who Did Not Submit: " + noSubmit)
console.log("Number of Students Who Passed: " + passCount)
console.log("Number of Students Who Must Revise: " + reviseCount)
console.log("Class Average Score: " + classAverage.toFixed(2))
console.log("Names of Students Who Did Not Submit: " + noSubmitNames.join(", "))
console.log("Names of Students Who Must Revise: " + reviseNames.join(", "))