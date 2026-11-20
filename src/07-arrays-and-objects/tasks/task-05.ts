/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

const students = [
  {
    id: 1,
    name: "Himada",
    answers: ["B", "A", "C", "D", "A"]
  },
  {
    id: 2,
    name: "Queen",
    answers: ["B", "A", "C", "D", "A"]
  },
  {
    id: 3,
    name: "Ferdi",
    answers: ["C", "B", "C", "A", "D"]
  }
]

const correctAnswers = ["B", "A", "C", "D", "A"]

function showQuizReport(studentList: any[], keyAnswers: string[]): void {
  let studentScores: any[] = []
  let passed: any[] = []
  let totalScore: number = 0

  for (let i: number = 0; i < studentList.length; i = i + 1) {
    let currentStudent = studentList[i]
    let score: number = 0

    for (let j: number = 0; j < currentStudent.answers.length; j = j + 1) {
      if (currentStudent.answers[j] === keyAnswers[j]) {
        score = score + 20
      }
    }

    let scoreData = {
      name: currentStudent.name,
      score: score
    }
    studentScores.push(scoreData)
    totalScore = totalScore + score

    if (score > 70) {
      passed.push(scoreData)
    }
  }

  let highestStudent = studentScores[0]
  for (let i: number = 1; i < studentScores.length; i = i + 1) {
    if (studentScores[i].score > highestStudent.score) {
      highestStudent = studentScores[i]
    }
  }

  let classAverage: number = totalScore / studentScores.length

  console.log("1. Student Scores:", studentScores)
  console.log("2. Passed Students:", passed)
  console.log("3. Highest Score Student:", highestStudent)
  console.log("4. Class Average:", classAverage)
}

showQuizReport(students, correctAnswers)

export { }