const orders = [
    { id: "ORD001", amount: 500, status: "completed", customer: "An" },
    { id: "ORD002", amount: 1200, status: "pending", customer: "Bình" },
    { id: "ORD003", amount: 7000, status: "completed", customer: "Ngân" },
    { id: "ORD004", amount: 50, status: "canceled", customer: "Chi" },
    { id: "ORD005", amount: 3000, status: "completed", customer: "Dũng" },
    { id: "ORD006", amount: 150, status: "pending", customer: "Đạt" },
    { id: "ORD007", amount: 800, status: "completed", customer: "Hương" }
];

//Cấp độ 1 (Duyệt mảng)
for (const buyname of orders) {
    console.log(buyname.customer);
}

console.log("-----------------------------");

// Cấp độ 2 (Lọc dữ liệu)
for (const orderid of orders) {
    // Điều kiện lọc: status === "completed"
    if (orderid.status === "completed") {
        console.log(orderid.id);
    }
}

console.log("-----------------------------");

// Cấp độ 3 (Tính toán & Logic: Tính tổng)
let totalAmount = 0;
for (const orderid of orders) {
    if (orderid.status === "completed") {
        totalAmount += orderid.amount;

        if (orderid.amount > 1000) {
            console.log("Đơn hàng VIP: ", orderid.id);
        }
    }
}
console.log("Tổng số tiền của các đơn hàng có status completed:", totalAmount);

console.log("-----------------------------");

// Cấp độ 4 (Tìm kiếm & Dừng vòng lặp)
for (const customer of orders) {
    if (customer.customer === "Chi") {
        // Tìm thấy! In toàn bộ thông tin
        console.log("=== Tìm thấy đơn hàng ===");
        console.log("ID:", customer.id);
        console.log("Amount:", customer.amount);
        console.log("Status:", customer.status);
        console.log("Customer:", customer.customer);
        break;
    }
}