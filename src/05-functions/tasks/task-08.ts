/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
type Submission = {
  student: string
  submitted: boolean
  score: number
}

const submissions: Submission[] = [
  {
    student: "Himada",
    submitted: true,
    score: 90
  },
  {
    student: "Queen",
    submitted: false,
    score: 0
  },
  {
    student: "Ferdi",
    submitted: true,
    score: 84
  },
  {
    student: "Aryan",
    submitted: true,
    score: 72
  },
  {
    student: "Rafa",
    submitted: false,
    score: 0
  },
  {
    student: "Almeera",
    submitted: true,
    score: 96
  }
]

function summarizeSubmissions(items: Submission[]) {
  let submittedCount: number = 0
  let passedCount: number = 0
  let revisionCount: number = 0
  let totalPoints: number = 0
  let highestVal: number = items[0].score
  let lowestVal: number = items[0].score

  for (let i: number = 0; i < items.length; i = i + 1) {
    let item: Submission = items[i]
    totalPoints = totalPoints + item.score

    if (item.submitted === true) {
      submittedCount = submittedCount + 1
      if (item.score >= 75) {
        passedCount = passedCount + 1
      } else {
        revisionCount = revisionCount + 1
      }
    }

    if (item.score > highestVal) {
      highestVal = item.score
    }
    if (item.score < lowestVal) {
      lowestVal = item.score
    }
  }

  let totalStudents: number = items.length
  let missingCount: number = totalStudents - submittedCount
  let avgScore: number = totalPoints / totalStudents

  return {
    totalStudents: totalStudents,
    submittedCount: submittedCount,
    missingCount: missingCount,
    passedCount: passedCount,
    revisionCount: revisionCount,
    avgScore: avgScore,
    highestVal: highestVal,
    lowestVal: lowestVal
  }
}

function displayReport(items: Submission[]): void {
  let stats = summarizeSubmissions(items)

  console.log("LMS Assignment Submission Report:")
  console.log("Total Students: " + stats.totalStudents)
  console.log("Submitted Assignments: " + stats.submittedCount)
  console.log("Missing Assignments: " + stats.missingCount)
  console.log("Passed Students: " + stats.passedCount)
  console.log("Students Requiring Revision: " + stats.revisionCount)
  console.log("Average Score: " + stats.avgScore.toFixed(2))
  console.log("Highest Score: " + stats.highestVal)
  console.log("Lowest Score: " + stats.lowestVal)
}

displayReport(submissions)

export { }