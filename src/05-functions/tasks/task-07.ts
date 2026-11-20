/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
]

function countActiveStudents() {
  let totalStudents: number = 0
  let activeCount: number = 0
  let inactiveCount: number = 0

  for (let i: number = 0; i < students.length; i = i + 1) {
    let currentStudent = students[i]
    totalStudents = totalStudents + 1
    if (currentStudent.active === true) {
      activeCount = activeCount + 1
    } else {
      inactiveCount = inactiveCount + 1
    }
  }

  return {
    total: totalStudents,
    countActive: activeCount,
    countInactive: inactiveCount
  }
}

function countStudentsByMajor() {
  let seCount: number = 0
  let nwCount: number = 0
  let mmCount: number = 0

  for (let i: number = 0; i < students.length; i = i + 1) {
    let currentStudent = students[i]
    if (currentStudent.major === "Software Engineering") {
      seCount = seCount + 1
    } else if (currentStudent.major === "Networking") {
      nwCount = nwCount + 1
    } else if (currentStudent.major === "Multimedia") {
      mmCount = mmCount + 1
    }
  }

  return {
    countSE: seCount,
    countNW: nwCount,
    countMM: mmCount
  }
}

function printEnrollmentReport(): void {
  let activeResult = countActiveStudents()
  let majorResult = countStudentsByMajor()

  console.log("Total Students: " + activeResult.total)
  console.log("Active Students: " + activeResult.countActive)
  console.log("Inactive Students: " + activeResult.countInactive)
  console.log("Software Engineering Students: " + majorResult.countSE)
  console.log("Networking Students: " + majorResult.countNW)
  console.log("Multimedia Students: " + majorResult.countMM)
}

printEnrollmentReport()