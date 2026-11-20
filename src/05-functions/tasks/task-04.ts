/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: false },
  { name: "Citra", present: true },
  { name: "Dimas", present: true },
  { name: "Eka", present: false }
]

function printAttendanceReport(
  records: { name: string; present: boolean }[]
): void {
  let presentSum: number = 0
  let absentSum: number = 0
  let missingStudents: string[] = []

  for (let i: number = 0; i < records.length; i = i + 1) {
    let studentRecord = records[i]
    if (studentRecord.present === true) {
      presentSum = presentSum + 1
    } else {
      absentSum = absentSum + 1
      missingStudents.push(studentRecord.name)
    }
  }

  console.log("Attendance Report:")
  console.log("Total Present: " + presentSum)
  console.log("Total Absent: " + absentSum)
  console.log("Names of Absent Students:")

  for (let i: number = 0; i < missingStudents.length; i = i + 1) {
    let urutan: number = i + 1
    let studentName: string = missingStudents[i]
    console.log(urutan + "-" + studentName)
  }
}

printAttendanceReport(attendances)