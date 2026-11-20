/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales: number[] = [
  125000, 780000, 250000, 99000, 540000, 670000, 180000, 450000, 310000, 820000
]

function calculateTotalSales(salesList: number[]): number {
  let runningSales: number = 0
  for (let i: number = 0; i < salesList.length; i = i + 1) {
    runningSales = runningSales + salesList[i]
  }
  return runningSales
}

function findHighestTransaction(salesList: number[]): number {
  let peakSale: number = salesList[0]
  for (let i: number = 1; i < salesList.length; i = i + 1) {
    if (salesList[i] > peakSale) {
      peakSale = salesList[i]
    }
  }
  return peakSale
}

function findLowestTransaction(salesList: number[]): number {
  let smallestSale: number = salesList[0]
  for (let i: number = 1; i < salesList.length; i = i + 1) {
    if (salesList[i] < smallestSale) {
      smallestSale = salesList[i]
    }
  }
  return smallestSale
}

function calculateAverageSale(salesList: number[]): number {
  let combinedSales: number = 0
  for (let i: number = 0; i < salesList.length; i = i + 1) {
    combinedSales = combinedSales + salesList[i]
  }
  let avgSale: number = combinedSales / salesList.length
  return avgSale
}

function countLargeTransactions(
  salesList: number[],
  thresholdAmount: number
): number {
  let largeCount: number = 0
  for (let i: number = 0; i < salesList.length; i = i + 1) {
    if (salesList[i] > thresholdAmount) {
      largeCount = largeCount + 1
    }
  }
  return largeCount
}

function displaySales(salesList: number[]): void {
  let totalAmount: number = calculateTotalSales(salesList)
  let highestAmount: number = findHighestTransaction(salesList)
  let lowestAmount: number = findLowestTransaction(salesList)
  let averageAmount: number = calculateAverageSale(salesList)
  let bigTxCount: number = countLargeTransactions(salesList, 500000)

  console.log("Daily Sales Report:")
  console.log("Total Sales: " + totalAmount)
  console.log("Highest Transaction: " + highestAmount)
  console.log("Lowest Transaction: " + lowestAmount)
  console.log("Average Transaction: " + averageAmount.toFixed(2))
  console.log("Number of Transactions above Rp500,000: " + bigTxCount)
}

displaySales(sales)