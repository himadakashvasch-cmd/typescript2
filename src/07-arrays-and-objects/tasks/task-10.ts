/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
  {
    id: 1,
    question: "Ibu kota Provinsi Jawa Timur adalah?",
    correctAnswer: "B",
    category: "Geografi"
  },
  {
    id: 2,
    question: "Hasil dari 12 dikali 4 adalah?",
    correctAnswer: "D",
    category: "Matematika"
  },
  {
    id: 3,
    question: "Hasil dari 45 dibagi 9 adalah?",
    correctAnswer: "A",
    category: "Matematika"
  },
  {
    id: 4,
    question: "Sungai terpanjang di Pulau Jawa adalah?",
    correctAnswer: "C",
    category: "Geografi"
  }
]

const submissions = [
  {
    student: "Almeera",
    answers: [
      { questionId: 1, answer: "B" },
      { questionId: 2, answer: "D" },
      { questionId: 3, answer: "A" },
      { questionId: 4, answer: "C" }
    ]
  },
  {
    student: "Rafa",
    answers: [
      { questionId: 1, answer: "A" },
      { questionId: 2, answer: "D" },
      { questionId: 3, answer: "C" },
      { questionId: 4, answer: "C" }
    ]
  },
  {
    student: "Queen",
    answers: [
      { questionId: 1, answer: "B" },
      { questionId: 2, answer: "B" },
      { questionId: 3, answer: "A" },
      { questionId: 4, answer: "A" }
    ]
  }
]

function showExamReport(questionList: any[], submissionList: any[]): void {
  let studentResults: any[] = []
  let scores: any[] = []
  let answerSummary: any[] = []
  let categories: string[] = []
  let totalScore: number = 0
  let passed: number = 0

  for (let i: number = 0; i < questionList.length; i = i + 1) {
    let currentCategory: string = questionList[i].category
    let categoryExists: boolean = false

    for (let j: number = 0; j < categories.length; j = j + 1) {
      if (categories[j] === currentCategory) {
        categoryExists = true
      }
    }

    if (categoryExists === false) {
      categories.push(currentCategory)
    }
  }

  for (let i: number = 0; i < submissionList.length; i = i + 1) {
    let currentSub = submissionList[i]
    let correct: number = 0

    for (let j: number = 0; j < currentSub.answers.length; j = j + 1) {
      let currentAns = currentSub.answers[j]

      for (let k: number = 0; k < questionList.length; k = k + 1) {
        let currentQ = questionList[k]
        if (currentQ.id === currentAns.questionId && currentQ.correctAnswer === currentAns.answer) {
          correct = correct + 1
        }
      }
    }

    let wrong: number = questionList.length - correct
    let score: number = correct * 25

    let resultItem = {
      student: currentSub.student,
      score: score,
      correct: correct,
      wrong: wrong
    }
    studentResults.push(resultItem)

    scores.push({
      student: currentSub.student,
      score: score
    })

    answerSummary.push({
      student: currentSub.student,
      correct: correct,
      wrong: wrong
    })

    totalScore = totalScore + score

    if (score >= 75) {
      passed = passed + 1
    }
  }

  let categoryAverages: any[] = []
  for (let i: number = 0; i < categories.length; i = i + 1) {
    let catName: string = categories[i]
    let catQuestionIds: number[] = []

    for (let j: number = 0; j < questionList.length; j = j + 1) {
      if (questionList[j].category === catName) {
        catQuestionIds.push(questionList[j].id)
      }
    }

    let correctCount: number = 0
    for (let j: number = 0; j < submissionList.length; j = j + 1) {
      let subAnswers = submissionList[j].answers

      for (let k: number = 0; k < subAnswers.length; k = k + 1) {
        let ansItem = subAnswers[k]

        for (let m: number = 0; m < catQuestionIds.length; m = m + 1) {
          if (ansItem.questionId === catQuestionIds[m]) {
            for (let n: number = 0; n < questionList.length; n = n + 1) {
              if (questionList[n].id === ansItem.questionId && questionList[n].correctAnswer === ansItem.answer) {
                correctCount = correctCount + 1
              }
            }
          }
        }
      }
    }

    let totalAttempts: number = catQuestionIds.length * submissionList.length
    let rawCatAvg: number = (correctCount / totalAttempts) * 100
    let roundedCatAvg: number = Number(rawCatAvg.toFixed(2))

    categoryAverages.push({
      category: catName,
      averageScore: roundedCatAvg
    })
  }

  let highestScore: number = studentResults[0].score
  let lowestScore: number = studentResults[0].score

  for (let i: number = 1; i < studentResults.length; i = i + 1) {
    if (studentResults[i].score > highestScore) {
      highestScore = studentResults[i].score
    }
    if (studentResults[i].score < lowestScore) {
      lowestScore = studentResults[i].score
    }
  }

  let totalStudents: number = studentResults.length
  let rawAvgScore: number = totalScore / totalStudents
  let avgScore: number = Number(rawAvgScore.toFixed(2))
  let failed: number = totalStudents - passed
  let rawPassRate: number = (passed / totalStudents) * 100
  let passRate: number = Number(rawPassRate.toFixed(2))

  let finalAnalytics = {
    totalStudents: totalStudents,
    averageScore: avgScore,
    highestScore: highestScore,
    lowestScore: lowestScore,
    passedStudents: passed,
    failedStudents: failed,
    passRate: passRate
  }

  console.log("1. Student Scores:", scores)
  console.log("2. Correct & Wrong Summary:", answerSummary)
  console.log("3. Category Averages:", categoryAverages)
  console.log("4. Final Exam Analytics:", finalAnalytics)

  let fruitWord: string = "semangka"
  let upperFruit: string = fruitWord.toUpperCase()
  console.log("Uppercase word:", upperFruit)
}
showExamReport(questions, submissions)
export{}

