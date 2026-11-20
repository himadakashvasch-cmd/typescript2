/**
 * An online store has the following products below.
 * Tasks:
 * 1. Display only products that are currently available.
 * 2. Display only products that are currently available.
 * 3. Generate an array containing only the product names.
 * 4. Calculate the total value of all products currently in stock.
 * 5. Sort available products from most expensive → cheapest.
 */

type ProductItem = {
  id: number
  name: string
  category: string
  price: number
  stock: number
}

const products: ProductItem[] = [
  {
    id: 1,
    name: "Powerbank",
    category: "Accessories",
    price: 275000,
    stock: 9
  },
  {
    id: 2,
    name: "Card Reader",
    category: "Accessories",
    price: 85000,
    stock: 0
  },
  {
    id: 3,
    name: "Tablet",
    category: "Gadget",
    price: 3400000,
    stock: 4
  },
  {
    id: 4,
    name: "Soundbar",
    category: "Sound",
    price: 920000,
    stock: 6
  },
  {
    id: 5,
    name: "Earbuds",
    category: "Sound",
    price: 310000,
    stock: 0
  }
]

function showProductReport(items: ProductItem[]): void {
  let availableProducts: ProductItem[] = []
  let outOfStockProducts: ProductItem[] = []
  let productNames: string[] = []
  let totalStockValue: number = 0

  for (let i: number = 0; i < items.length; i = i + 1) {
    let currentItem: ProductItem = items[i]
    productNames.push(currentItem.name)

    let itemValue: number = currentItem.price * currentItem.stock
    totalStockValue = totalStockValue + itemValue

    if (currentItem.stock > 0) {
      availableProducts.push(currentItem)
    } else {
      outOfStockProducts.push(currentItem)
    }
  }

  let sortedAvailable: ProductItem[] = []
  for (let i: number = 0; i < availableProducts.length; i = i + 1) {
    sortedAvailable.push(availableProducts[i])
  }

  for (let i: number = 0; i < sortedAvailable.length; i = i + 1) {
    for (let j: number = i + 1; j < sortedAvailable.length; j = j + 1) {
      if (sortedAvailable[j].price > sortedAvailable[i].price) {
        let tempItem: ProductItem = sortedAvailable[i]
        sortedAvailable[i] = sortedAvailable[j]
        sortedAvailable[j] = tempItem
      }
    }
  }

  console.log("1. Available Products:", availableProducts)
  console.log("2. Out of Stock Products:", outOfStockProducts)
  console.log("3. Product Names:", productNames)
  console.log("4. Total Stock Value:", totalStockValue)
  console.log("5. Sorted Available (Expensive -> Cheapest):", sortedAvailable)
}

showProductReport(products)

export { }