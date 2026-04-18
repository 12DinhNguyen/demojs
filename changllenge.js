const deliveryData = [
    {
        packageId: "PKG_001",
        region: "Asia",
        items: [
            { name: "iPhone 15", price: 1000, quantity: 2 },
            { name: "Mouse", price: 50, quantity: 5 }
        ]
    },
    {
        packageId: "PKG_002",
        region: "Europe",
        items: [
            { name: "Macbook", price: 2000, quantity: 1 },
            { name: "Keyboard", price: 150, quantity: 0 } // Lỗi: Số lượng bằng 0
        ]
    },
    {
        packageId: "PKG_003",
        region: "America",
        items: [
            { name: "Screen", price: 500, quantity: 3 }
        ]
    }
];

// // Duyệt qua toàn bộ dữ liệu và in ra tên của tất cả sản phẩm có trong mọi kiện hàng theo định dạng: [Mã Kiện Hàng] - [Tên Sản Phẩm].

// for (const pkg of deliveryData) {        // Vòng ngoài: duyệt kiện hàng
//     for (const item of pkg.items) {      // Vòng trong: duyệt sản phẩm
//         console.log(`${pkg.packageId} - ${item.name}`);
//     }
// }

console.log("-----------------------------");
// Kiểm tra lỗi: Nếu có sản phẩm nào có số lượng bằng 0, in ra cảnh báo với định dạng: [⚠️ WARNING] Sản phẩm [Tên Sản Phẩm] trong kiện [Mã Kiện Hàng] bị lỗi số lượng!
for (const pkg of deliveryData) {
    for (const item of pkg.items) {
        // Kiểm tra lỗi: quantity bằng 0
        if (item.quantity === 0) {
            console.warn(`[⚠️ WARNING] Sản phẩm [${item.name}] trong kiện [${pkg.packageId}] bị lỗi số lượng!`);
        }
    }
}

// console.log("-----------------------------");
// //Tính tổng giá trị của từng kiện hàng
// for (const pkg of deliveryData) {
//     let total = 0; // Reset mỗi kiện hàng mới ← QUAN TRỌNG!

//     for (const item of pkg.items) {
//         total += item.price * item.quantity; // Cộng dồn
//     }

//     console.log(`Kiện hàng ${pkg.packageId} ở vùng ${pkg.region} có tổng giá trị là: ${total}$`);
// }