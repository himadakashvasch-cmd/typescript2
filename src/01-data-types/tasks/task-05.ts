/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */type Product = {
  productCode: string;
  productName: string;
  sellingPrice: number;
  stockQuantity: number;
  productWeight: number;
  averageCustomerRating: number;
  isDiscounted: boolean;
};  

const product1: Product = {
  productCode: "PRD001",
  productName: "Lenovo LOQ",
  sellingPrice: 29.99,
  stockQuantity: 100,
  productWeight: 0.5,
  averageCustomerRating: 4.5,
  isDiscounted: false
};

const product2: Product = {
  productCode: "PRD002",
  productName: "Earphone",
  sellingPrice: 79.99,
  stockQuantity: 50,
  productWeight: 1.2,
  averageCustomerRating: 4.8,
  isDiscounted: true
};

const product3: Product = {
  productCode: "PRD003",
  productName: "Smart Watch",
  sellingPrice: 49.99,
  stockQuantity: 75,
  productWeight: 0.3,
  averageCustomerRating: 4.2,
  isDiscounted: false
};

console.log("Product 1:", product1);
console.log("Product 2:", product2);
console.log("Product 3:", product3);