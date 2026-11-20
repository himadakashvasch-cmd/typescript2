/**
 * A customer has a shopping cart below.
 * Tasks:
 * 1. Count subtotal of all products (expected result: 3.350.000)
 * 2. Calculate discount with this rules.
 *  - subtotal >= 3,000,000 → 10% discount
 *  - subtotal >= 2,000,000 → 5% discount
 *  - otherwise             → 0%
 * 
 * 3. Calculate final subtotal after given discount
 * 4. Find expensive product ( > 1.000.000)
 */

const cart = [
  {
    product: "Headphone",
    price: 450000,
    quantity: 3
  },
  {
    product: "Mousepad",
    price: 120000,
    quantity: 2
  },
  {
    product: "Printer",
    price: 1850000,
    quantity: 1
  }
]

function showCartReport(cartList: any[]): void {
  let subtotal: number = 0
  let expensiveProducts: any[] = []

  for (let i: number = 0; i < cartList.length; i = i + 1) {
    let currentItem = cartList[i]
    let itemTotal: number = currentItem.price * currentItem.quantity
    subtotal = subtotal + itemTotal

    if (currentItem.price > 1000000) {
      expensiveProducts.push(currentItem)
    }
  }

  let discountRate: number = 0
  if (subtotal >= 3000000) {
    discountRate = 0.1
  } else if (subtotal >= 2000000) {
    discountRate = 0.05
  }

  let discount: number = subtotal * discountRate
  let finalSubtotal: number = subtotal - discount

  console.log("1. Subtotal:", subtotal)
  console.log("2. Discount:", discount)
  console.log("3. Final Subtotal:", finalSubtotal)
  console.log("4. Expensive Products:", expensiveProducts)
}

showCartReport(cart)