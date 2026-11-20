/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
type Patient = {
  id: string
  name: string
  age: number
  department: string
  admitted: boolean
  bill: number
}

const patients: Patient[] = [
  {
    id: "PT001",
    name: "Himada",
    age: 17,
    department: "Pediatrics",
    admitted: true,
    bill: 850000
  },
  {
    id: "PT002",
    name: "Ferdi",
    age: 45,
    department: "Cardiology",
    admitted: false,
    bill: 1200000
  },
  {
    id: "PT003",
    name: "Queen",
    age: 68,
    department: "Cardiology",
    admitted: true,
    bill: 2500000
  },
  {
    id: "PT004",
    name: "Aryan",
    age: 33,
    department: "Orthopedics",
    admitted: true,
    bill: 640000
  },
  {
    id: "PT005",
    name: "Rafa",
    age: 14,
    department: "Pediatrics",
    admitted: false,
    bill: 350000
  }
]

function printHospitalReport(patientList: Patient[]): void {
  let admittedCount: number = 0
  let dischargedCount: number = 0
  let totalRevenue: number = 0
  let highestBill: number = patientList[0].bill
  let lowestBill: number = patientList[0].bill
  let admittedNames: string[] = []
  let departments: string[] = []

  for (let i: number = 0; i < patientList.length; i = i + 1) {
    let currentPatient: Patient = patientList[i]
    totalRevenue = totalRevenue + currentPatient.bill

    if (currentPatient.admitted === true) {
      admittedCount = admittedCount + 1
      admittedNames.push(currentPatient.name)
    } else {
      dischargedCount = dischargedCount + 1
    }

    if (currentPatient.bill > highestBill) {
      highestBill = currentPatient.bill
    }
    if (currentPatient.bill < lowestBill) {
      lowestBill = currentPatient.bill
    }

    if (!departments.includes(currentPatient.department)) {
      departments.push(currentPatient.department)
    }
  }

  let totalPatients: number = patientList.length
  let averageBill: number = totalRevenue / totalPatients

  console.log("Hospital Daily Report:")
  console.log("Total Patients: " + totalPatients)
  console.log("Total Admitted Patients: " + admittedCount)
  console.log("Total Discharged Patients: " + dischargedCount)
  console.log("Number of Patients in Each Department:")

  for (let i: number = 0; i < departments.length; i = i + 1) {
    let deptName: string = departments[i]
    let deptCount: number = 0

    for (let j: number = 0; j < patientList.length; j = j + 1) {
      if (patientList[j].department === deptName) {
        deptCount = deptCount + 1
      }
    }

    console.log("- " + deptName + ": " + deptCount)
  }

  console.log("Highest Hospital Bill: " + highestBill)
  console.log("Lowest Hospital Bill: " + lowestBill)
  console.log("Average Hospital Bill: " + averageBill.toFixed(2))
  console.log("Total Hospital Revenue: " + totalRevenue)
  console.log("Names of Admitted Patients: " + admittedNames.join(", "))
}

printHospitalReport(patients)