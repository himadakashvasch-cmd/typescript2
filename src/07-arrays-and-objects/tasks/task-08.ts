/**
 * A company evaluates employees based on several projects.
 * Tasks:
 * 1. Calculate each employee's average score format {name, averageScore}
 * 2. Find employees whose average score is above 85.
 * 3. Find employees who have at least one project with a score below 80.
 */
const employees = [
  {
    name: "Aryan",
    department: "Backend",
    projects: [
      { name: "Booking App", score: 86 },
      { name: "Billing", score: 92 },
      { name: "Gateway", score: 78 }
    ]
  },
  {
    name: "Rafa",
    department: "Frontend",
    projects: [
      { name: "Catalog", score: 88 },
      { name: "Profile Page", score: 91 }
    ]
  },
  {
    name: "Almeera",
    department: "Backend",
    projects: [
      { name: "Booking App", score: 84 },
      { name: "Gateway", score: 76 }
    ]
  }
]

function showEmployeeReport(employeeList: any[]): void {
  let employeeAverages: any[] = []
  let above85: any[] = []
  let hasProjectBelow80: string[] = []

  for (let i: number = 0; i < employeeList.length; i = i + 1) {
    let currentEmployee = employeeList[i]
    let totalScore: number = 0
    let below80Found: boolean = false

    for (let j: number = 0; j < currentEmployee.projects.length; j = j + 1) {
      let currentProject = currentEmployee.projects[j]
      totalScore = totalScore + currentProject.score

      if (currentProject.score < 80) {
        below80Found = true
      }
    }

    let avgScore: number = totalScore / currentEmployee.projects.length
    let avgItem = {
      name: currentEmployee.name,
      averageScore: avgScore
    }
    employeeAverages.push(avgItem)

    if (avgScore > 85) {
      above85.push(avgItem)
    }

    if (below80Found === true) {
      hasProjectBelow80.push(currentEmployee.name)
    }
  }

  console.log("1. Employee Averages:", employeeAverages)
  console.log("2. Average > 85:", above85)
  console.log("3. Has Project < 80:", hasProjectBelow80)
}

showEmployeeReport(employees)

