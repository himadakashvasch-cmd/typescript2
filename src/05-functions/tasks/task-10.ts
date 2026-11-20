/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

type Enrollment = {
  student: string
  course: string
  completed: boolean
  score: number
  duration: number
}

const enrollments: Enrollment[] = [
  {
    student: "Himada",
    course: "Matematika",
    completed: true,
    score: 91,
    duration: 38
  },
  {
    student: "Queen",
    course: "Matematika",
    completed: false,
    score: 45,
    duration: 12
  },
  {
    student: "Ferdi",
    course: "Bahasa Inggris",
    completed: true,
    score: 87,
    duration: 42
  },
  {
    student: "Aryan",
    course: "Informatika",
    completed: true,
    score: 96,
    duration: 40
  },
  {
    student: "Rafa",
    course: "Bahasa Inggris",
    completed: false,
    score: 60,
    duration: 18
  },
  {
    student: "Almeera",
    course: "Informatika",
    completed: true,
    score: 82,
    duration: 35
  },
  {
    student: "Himada",
    course: "Matematika",
    completed: true,
    score: 88,
    duration: 36
  },
  {
    student: "Queen",
    course: "Informatika",
    completed: false,
    score: 70,
    duration: 20
  }
]

function displayDashboard(records: Enrollment[]): void {
  let totalEnrollments: number = records.length
  let completedCount: number = 0
  let totalScore: number = 0
  let totalDuration: number = 0
  let highestScore: number = records[0].score
  let lowestScore: number = records[0].score
  let passingCount: number = 0
  let passingStudents: string[] = []
  let uniqueCourses: string[] = []

  for (let i: number = 0; i < records.length; i = i + 1) {
    let currentItem: Enrollment = records[i]
    totalScore = totalScore + currentItem.score
    totalDuration = totalDuration + currentItem.duration

    if (currentItem.completed === true) {
      completedCount = completedCount + 1
    }

    if (currentItem.score > highestScore) {
      highestScore = currentItem.score
    }
    if (currentItem.score < lowestScore) {
      lowestScore = currentItem.score
    }

    if (currentItem.score >= 75) {
      passingCount = passingCount + 1
      passingStudents.push(currentItem.student)
    }

    if (!uniqueCourses.includes(currentItem.course)) {
      uniqueCourses.push(currentItem.course)
    }
  }

  let incompleteCount: number = totalEnrollments - completedCount
  let completionRate: number = (completedCount / totalEnrollments) * 100
  let avgScore: number = totalScore / totalEnrollments
  let avgDuration: number = totalDuration / totalEnrollments

  console.log("=== Online Learning Dashboard ===")
  console.log("")
  console.log("Completion Statistics:")
  console.log("- Total enrollments: " + totalEnrollments)
  console.log("- Completed enrollments: " + completedCount)
  console.log("- Incomplete enrollments: " + incompleteCount)
  console.log("- Completion percentage: " + completionRate.toFixed(1) + "%")
  console.log("")
  console.log("Academic Statistics:")
  console.log("- Highest score: " + highestScore)
  console.log("- Lowest score: " + lowestScore)
  console.log("- Average score: " + avgScore.toFixed(2))
  console.log(
    "- Students with passing scores (75 or above): " +
      passingCount +
      " (" +
      passingStudents.join(", ") +
      ")"
  )
  console.log("")
  console.log("Course Statistics:")

  for (let i: number = 0; i < uniqueCourses.length; i = i + 1) {
    let courseName: string = uniqueCourses[i]
    let courseStudentCount: number = 0
    let courseScoreSum: number = 0

    for (let j: number = 0; j < records.length; j = j + 1) {
      if (records[j].course === courseName) {
        courseStudentCount = courseStudentCount + 1
        courseScoreSum = courseScoreSum + records[j].score
      }
    }

    let courseAvgScore: number = courseScoreSum / courseStudentCount
    console.log("- Course: " + courseName)
    console.log("  Number of students: " + courseStudentCount)
    console.log("  Average score: " + courseAvgScore.toFixed(2))
  }

  console.log("")
  console.log("Learning Statistics:")
  console.log("- Total learning hours: " + totalDuration)
  console.log("- Average learning duration: " + avgDuration.toFixed(2) + " hours")
}

displayDashboard(enrollments)

export { }