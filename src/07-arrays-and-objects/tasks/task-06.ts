/**
 * A school library records book borrowing transactions.
 * Tasks:
 * 1. Find all borrowing transactions for "Andi".
 * 2. Find the book information for every borrowing transaction.
 * 3. Find students who borrowed a programming book.
 * 4. Calculate the total number of borrowing transactions.
 * 5. Calculate the average borrowing duration.
 * 6. Find students who borrowed books for more than 7 days.
 */

const books = [
  { id: 1, title: "Laskar Pelangi", category: "Fiction", stock: 4 },
  { id: 2, title: "Bumi Manusia", category: "History", stock: 2 },
  { id: 3, title: "Filosofi Teras", category: "Self Development", stock: 6 },
  { id: 4, title: "Negeri 5 Menara", category: "Fiction", stock: 3 }
]

const borrowings = [
  { student: "Himada", bookId: 1, days: 5 },
  { student: "Queen", bookId: 2, days: 9 },
  { student: "Ferdi", bookId: 3, days: 4 },
  { student: "Aryan", bookId: 1, days: 11 },
  { student: "Rafa", bookId: 4, days: 6 },
  { student: "Himada", bookId: 3, days: 8 }
]

function showLibraryReport(bookList: any[], borrowingList: any[]): void {
  let targetStudent: string = "Himada"
  let himadaBorrowings: any[] = []
  let borrowingDetails: any[] = []
  let fictionBorrowers: string[] = []
  let totalDays: number = 0
  let borrowedMoreThan7Days: string[] = []

  for (let i: number = 0; i < borrowingList.length; i = i + 1) {
    let currentBorrow = borrowingList[i]
    totalDays = totalDays + currentBorrow.days

    if (currentBorrow.student === targetStudent) {
      himadaBorrowings.push(currentBorrow)
    }

    let foundTitle: string = ""
    let foundCategory: string = ""

    for (let j: number = 0; j < bookList.length; j = j + 1) {
      if (bookList[j].id === currentBorrow.bookId) {
        foundTitle = bookList[j].title
        foundCategory = bookList[j].category
      }
    }

    let detailItem = {
      student: currentBorrow.student,
      title: foundTitle,
      category: foundCategory,
      days: currentBorrow.days
    }
    borrowingDetails.push(detailItem)

    if (foundCategory === "Fiction") {
      fictionBorrowers.push(currentBorrow.student)
    }

    if (currentBorrow.days > 7) {
      borrowedMoreThan7Days.push(currentBorrow.student)
    }
  }

  let totalTransactions: number = borrowingList.length
  let averageDuration: number = totalDays / totalTransactions

  console.log("1. Himada's Borrowings:", himadaBorrowings)
  console.log("2. Borrowing Details:", borrowingDetails)
  console.log("3. Borrowed Fiction Book:", fictionBorrowers)
  console.log("4. Total Transactions:", totalTransactions)
  console.log("5. Average Duration:", averageDuration)
  console.log("6. Borrowed > 7 Days:", borrowedMoreThan7Days)
}

showLibraryReport(books, borrowings)