/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
  {
    id: 401,
    customer: "Himada",
    status: "completed",
    items: [
      { product: "Flashdisk", price: 110000, quantity: 2 },
      { product: "Card Reader", price: 85000, quantity: 1 }
    ]
  },
  {
    id: 402,
    customer: "Queen",
    status: "cancelled",
    items: [
      { product: "Powerbank", price: 290000, quantity: 1 }
    ]
  },
  {
    id: 403,
    customer: "Ferdi",
    status: "completed",
    items: [
      { product: "Powerbank", price: 290000, quantity: 2 },
      { product: "Flashdisk", price: 110000, quantity: 1 }
    ]
  }
]

function showOrderReport(orderList: any[]): void {
  let completedOrders: any[] = []
  let orderTotals: any[] = []
  let totalCompletedRevenue: number = 0
  let purchasedProducts: string[] = []

  for (let i: number = 0; i < orderList.length; i = i + 1) {
    let currentOrder = orderList[i]
    let orderTotal: number = 0

    for (let j: number = 0; j < currentOrder.items.length; j = j + 1) {
      let currentItem = currentOrder.items[j]
      let itemSubtotal: number = currentItem.price * currentItem.quantity
      orderTotal = orderTotal + itemSubtotal
    }

    let orderSummary = {
      id: currentOrder.id,
      customer: currentOrder.customer,
      status: currentOrder.status,
      total: orderTotal
    }
    orderTotals.push(orderSummary)

    if (currentOrder.status === "completed") {
      completedOrders.push(currentOrder)
      totalCompletedRevenue = totalCompletedRevenue + orderTotal

      for (let j: number = 0; j < currentOrder.items.length; j = j + 1) {
        let prodName: string = currentOrder.items[j].product
        let alreadyExists: boolean = false

        for (let k: number = 0; k < purchasedProducts.length; k = k + 1) {
          if (purchasedProducts[k] === prodName) {
            alreadyExists = true
          }
        }

        if (alreadyExists === false) {
          purchasedProducts.push(prodName)
        }
      }
    }
  }

  let topCustomer: any = null
  for (let i: number = 0; i < orderTotals.length; i = i + 1) {
    if (orderTotals[i].status === "completed") {
      if (topCustomer === null || orderTotals[i].total > topCustomer.total) {
        topCustomer = orderTotals[i]
      }
    }
  }

  console.log("1. Completed Orders:", completedOrders)
  console.log("2. Order Totals:", orderTotals)
  console.log("3. Top Customer:", topCustomer)
  console.log("4. Total Revenue (Completed):", totalCompletedRevenue)
  console.log("5. Purchased Products:", purchasedProducts)
}

showOrderReport(orders)

export { }