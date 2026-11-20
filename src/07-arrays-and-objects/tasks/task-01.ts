/**
 * A teacher has a list of students and their exam scores below.
 * The teacher wants to analyze the exam results.
 * Tasks:
 * 1. Get an array containing only the student names.
 * expected array: ["Andi", "Budi", "Citra", "Deni", "Eka"]
 * 2. Get students who passed. Passing score is >= 70. 
 * expected array: [
 * { name: "Andi", score: 85 },
 * { name: "Citra", score: 91 },
 * { name: "Deni", score: 74 }
 * ]
 * 
 * 3. Find the student named "Citra".
 * 4. Calculate the average score.
 */

type StudentItem = {
  name: string
  score: number
}

const students: StudentItem[] = [
  { name: "Himada", score: 88 },
  { name: "Queen", score: 94 },
  { name: "Ferdi", score: 68 },
  { name: "Aryan", score: 79 }
]

function processStudents(dataList: StudentItem[]): void {
  let nameOnly: string[] = []
  let passedStudents: StudentItem[] = []
  let findStudents: StudentItem[] = []
  let totalScore: number = 0

  for (let i: number = 0; i < dataList.length; i = i + 1) {
    let currentStudent: StudentItem = dataList[i]
    nameOnly.push(currentStudent.name)

    if (currentStudent.score >= 70) {
      passedStudents.push(currentStudent)
    }

    if (currentStudent.name === "Queen") {
      findStudents.push(currentStudent)
    }

    totalScore = totalScore + currentStudent.score
  }

  let callAvg: number = totalScore / dataList.length

  console.log("1. Student Names:", nameOnly)
  console.log("2. Passed Students:", passedStudents)
  console.log("3. Find Queen:", findStudents)
  console.log("4. Average Score:", callAvg)
}

processStudents(students)

export { }
