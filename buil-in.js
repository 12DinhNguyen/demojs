// // Exercise 1: Bài 1: Lọc và Biến đổi dữ liệu (Filter & Map) Đề bài: 
// // Bạn có một mảng danh sách các sản phẩm lấy về từ trang tìm kiếm. 
// // const products = [ { name: "iPhone 15", price: 1000, stock: 5 }, 
// // { name: "Macbook M3", price: 2000, stock: 0 }, 
// // { name: "AirPods Pro", price: 250, stock: 10 }, 
// // { name: "iPad Air", price: 600, stock: 0 } ]; 
// // Yêu cầu: 
// // 1. Sử dụng .filter() để lấy ra các sản phẩm còn hàng (stock > 0). 
// // 2. Sử dụng .map() từ kết quả trên để tạo ra mảng mới chỉ chứa tên của các sản phẩm còn hàng. 
// // 3. In mảng tên sản phẩm ra màn hình.
// const products =
//     [{ name: "iPhone 15", price: 1000, stock: 5 },
//     { name: "Macbook M3", price: 2000, stock: 0 },
//     { name: "AirPods Pro", price: 250, stock: 10 },
//     { name: "iPad Air", price: 600, stock: 0 }
//     ];

// //1 dùng filter
// const inStockProducts = products.filter(product => product.stock > 0).map(product => {
//     console.log(product.name);
//     return product.name;
// });
// console.log(inStockProducts);

//2 dùng map() lấy kết quả sau khi lọc
// const productNames = inStockProducts.map(product => product.name);

//3 in ra màn hình
// console.log(productNames);

console.log("-----------------------------");

// // Exercise 2: Tính toán báo cáo (Reduce)
// // Đề bài: Sau khi chạy một bộ test (Test Suite), bạn nhận được mảng kết quả như sau:
// // Yêu cầu:
// // Sử dụng .reduce() để tính tổng thời gian (duration) thực thi của toàn bộ các Test Case.
// // (Nâng cao) Tiếp tục dùng.reduce() để đếm xem có bao nhiêu test "passed" và bao nhiêu test "failed"(Kết quả trả về là 1 object: { passed: 3, failed: 1 }).

// const testResults = [
//     { id: 1, duration: 120, status: "passed" },
//     { id: 2, duration: 450, status: "failed" },
//     { id: 3, duration: 200, status: "passed" },
//     { id: 4, duration: 310, status: "passed" }
// ];
// //câu 1: 
// const totalDuration = testResults.reduce((total, test) => total + test.duration, 0);
// console.log(`Tổng thời gian thực thi: ${totalDuration} ms`);

// //câu 2:
// const sumStatus = testResults.reduce((result, test) => {
//     if (test.status === "passed") {
//         result.passed++;
//     } else {
//         result.failed++;
//     }
//     return result;
// }, { passed: 0, failed: 0 });
// console.log(sumStatus);

console.log("-----------------------------");

// // Exercise 3: Kiểm tra điều kiện (Every & Some) 
// // Đề bài: Bạn cần kiểm tra tính hợp lệ của một danh sách các Input trên Form đăng ký. 
// // Yêu cầu: 
// // 1. Sử dụng .every() để kiểm tra xem tất cả các trường đã hợp lệ (isValid === true) để nhấn nút Submit chưa? 
// // 2. Sử dụng .some() để kiểm tra xem có ít nhất một trường bị lỗi (isValid === false) để hiển thị thông báo cảnh báo chung không?
// const formFields =
//     [
//         { label: "Username", value: "quang_test", isValid: true },
//         { label: "Email", value: "test@gmail.com", isValid: true },
//         { label: "Password", value: "123", isValid: false },
//         // { label: "Password", value: "123", isValid: true },
//         { label: "Phone", value: "0909", isValid: true }
//     ];

// //câu 1
// const isFormValid = formFields.every(field => field.isValid);
// console.log(`Form có hợp lệ không? ${isFormValid}`);

// //câu 2
// const hasError = formFields.some(field => !field.isValid);
// console.log(`Có trường nào bị lỗi không? ${hasError}`);



// if (formFields.every(field => field.isValid)) {
//     console.log("Submit form");
// } else if (formFields.some(field => !field.isValid)) {
//     console.log("Form có lỗi, vui lòng kiểm tra lại!");
// }

console.log("-----------------------------");



// //Excercise 4: Xử lý Cấu hình (Object methods & Spread Operator)
// // Đề bài: Bạn có một file cấu hình chung (defaultConfig) và một cấu hình riêng cho môi trường Staging (stagingConfig).
// //Yêu cầu:
// // 1. Sử dụng Spread Operator (...) để gộp 2 object này thành finalConfig. Lưu ý: Giá trị của stagingConfig phải ghi đè lên defaultConfig.
// // 2. Sử dụng Object.keys() để in ra danh sách các thông số cấu hình có trong finalConfig.
// const defaultConfig = {
//     browser: "chrome",
//     timeout: 5000,
//     headless: true
// };

// const stagingConfig = {
//     timeout: 10000,
//     url: "https://staging.example.com"
// };
// //câu 1
// const finalConfig = { ...defaultConfig, ...stagingConfig };
// // console.log(finalConfig)

// //câu 2
// const keys = Object.keys(finalConfig);
// console.log("Các thông số cấu hình trong finalConfig:", keys);

console.log("-----------------------------");

// Exercise 5: Tìm kiếm và Đối soát (Find & Includes)
// Đề bài: Bạn lấy được danh sách các mã lỗi từ Log hệ thống và một mã lỗi cụ thể từ UI.
// Yêu cầu:
// Sử dụng .find() để tìm object lỗi trong systemErrors có mã trùng với errorFromUI.
// Sau khi tìm được, in ra câu thông báo lỗi (msg) tương ứng để so sánh với UI.
// Tạo một mảng phụ chứa các mã lỗi "nghiêm trọng": const criticalErrors = ["E01", "E03"]. Sử dụng .includes() để kiểm tra xem mã errorFromUI có nằm trong danh sách nghiêm trọng hay không.
const systemErrors = [
    { code: "E01", msg: "Invalid Password" },
    { code: "E02", msg: "User Not Found" },
    { code: "E03", msg: "Network Timeout" }
];
const errorFromUI = "E02";

//câu 1
const foundError = systemErrors.find(e => e.code === errorFromUI);
console.log(foundError);