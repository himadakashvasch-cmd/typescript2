/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

type Student = {
  id: number
  name: string
}

type AttendanceRecord = {
  studentId: number
  status: string
}

type AttendanceSummaryItem = {
  name: string
  status: string
}

const students: Student[] = [
  { id: 101, name: "Nadia" },
  { id: 102, name: "Rizky" },
  { id: 103, name: "Tari" },
  { id: 104, name: "Galih" }
]

const attendance: AttendanceRecord[] = [
  { studentId: 101, status: "late" },
  { studentId: 102, status: "present" },
  { studentId: 103, status: "absent" },
  { studentId: 104, status: "present" }
]

function showAttendanceReport(studentList: Student[], recordList: AttendanceRecord[]): void {
  let studentAttendance: AttendanceSummaryItem[] = []
  let presentStudents: string[] = []
  let absentStudents: string[] = []
  let lateStudents: string[] = []

  for (let i: number = 0; i < recordList.length; i = i + 1) {
    let currentRecord: AttendanceRecord = recordList[i]
    let foundName: string = ""

    for (let j: number = 0; j < studentList.length; j = j + 1) {
      if (studentList[j].id === currentRecord.studentId) {
        foundName = studentList[j].name
      }
    }

    let summaryItem: AttendanceSummaryItem = {
      name: foundName,
      status: currentRecord.status
    }
    studentAttendance.push(summaryItem)

    if (currentRecord.status === "present") {
      presentStudents.push(foundName)
    } else if (currentRecord.status === "absent") {
      absentStudents.push(foundName)
    } else if (currentRecord.status === "late") {
      lateStudents.push(foundName)
    }
  }

  console.log("1. Present:", presentStudents)
  console.log("2. Absent:", absentStudents)
  console.log("3. Late:", lateStudents)
  console.log("4. Attendance List:", studentAttendance)
}

showAttendanceReport(students, attendance)

export { }