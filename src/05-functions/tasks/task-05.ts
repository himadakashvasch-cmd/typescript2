/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

const scores: number[] = [82, 91, 76, 88, 69, 94, 73, 85, 79, 97]

function findHighestScore(scoreList: number[]): number {
  let topScore: number = scoreList[0]
  for (let i: number = 1; i < scoreList.length; i = i + 1) {
    let currentValue: number = scoreList[i]
    if (currentValue > topScore) {
      topScore = currentValue
    }
  }
  return topScore
}

function findLowestScore(scoreList: number[]): number {
  let bottomScore: number = scoreList[0]
  for (let i: number = 1; i < scoreList.length; i = i + 1) {
    let currentValue: number = scoreList[i]
    if (currentValue < bottomScore) {
      bottomScore = currentValue
    }
  }
  return bottomScore
}

function calculateAverage(scoreList: number[]): number {
  let totalPoints: number = 0
  for (let i: number = 0; i < scoreList.length; i = i + 1) {
    totalPoints = totalPoints + scoreList[i]
  }
  let meanScore: number = totalPoints / scoreList.length
  return meanScore
}

function countPassedStudents(scoreList: number[]): number {
  let passedTotal: number = 0
  for (let i: number = 0; i < scoreList.length; i = i + 1) {
    if (scoreList[i] >= 75) {
      passedTotal = passedTotal + 1
    }
  }
  return passedTotal
}

function displayReport(scoreList: number[]): void {
  let maxVal: number = findHighestScore(scoreList)
  let minVal: number = findLowestScore(scoreList)
  let avgVal: number = calculateAverage(scoreList)
  let passVal: number = countPassedStudents(scoreList)

  console.log("Report for Backend Development Scores:")
  console.log("Highest Score: " + maxVal)
  console.log("Lowest Score: " + minVal)
  console.log("Average Score: " + avgVal.toFixed(2))
  console.log("Number of Students who Passed: " + passVal)
}

displayReport(scores)

export { }