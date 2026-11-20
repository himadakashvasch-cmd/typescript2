/**
 * An online store stores product prices in an array in below.
 * The finance department needs to calculate the total purchase amount.
 * Instead of calculating the total directly in the main program, create reusable function.
 * The function should return the total price.
 * Student Tasks
 * 1. Create a function named calculateTotalPrice.
 * 2. The function receives an array of prices.
 * 3. Use a loop to calculate the total.
 * 4. Return the total price.
 * 5. Display the returned value.
 */

const prices: number[] = [250000, 180000, 95000, 420000, 125000]

function calculateTotalPrice(items: number[]): number {
  let runningTotal: number = 0
  for (let i: number = 0; i < items.length; i = i + 1) {
    let urutan: number = i + 1
    let currentPrice: number = items[i]
    console.log(urutan + "-" + currentPrice)
    runningTotal = runningTotal + currentPrice
  }
  return runningTotal
}

function printTotalPurchase(items: number[]): void {
  let grandTotal: number = calculateTotalPrice(items)
  console.log("The Total of the purchase is " + grandTotal)
}

printTotalPurchase(prices)