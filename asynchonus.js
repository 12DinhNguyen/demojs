// function waiting(ms) //Hàm chờ
// {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function mainTime() {
//     console.log("Waiting for 1 seconds...");
//     await waiting(1000);
//     console.log("Start Test", new Date().toLocaleTimeString());

//     await waiting(1000);
//     console.log("Doing Test", new Date().toLocaleTimeString());

//     await waiting(1000);
//     console.log("End Test", new Date().toLocaleTimeString());
// }

// mainTime();

// console.log("-----------Bài tập 1------------");

// const openBrowser = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("1. Đã mở trình duyệt");
//             resolve();
//         }, 1000);
//     });
// }

// const enterUrl = (url) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("2. Đã nhập URL: " + url);
//             resolve();
//         }, 1000);
//     });
// }

// const clickButton = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("3. Đã click nút Login");
//             resolve();
//         }, 1000);
//     });
// }

// async function testPerform() {
//     await openBrowser();
//     await enterUrl("https://test.com");
//     await clickButton();
//     console.log("✅ Test hoàn thành!" + new Date().toLocaleTimeString());
// }
// testPerform();


console.log("-----------Bài tập 2------------");
// Bài tập 2: "Bẫy lỗi" hệ thống(Error Handling)
// Đề bài: Trong Automation, đôi khi Server sẽ trả về lỗi (ví dụ: Timeout 404). 
// Bạn cần viết một script "nồi đồng cối đá" không bị crash khi gặp lỗi.
// Yêu cầu: 
// 1. Viết một hàm fetchDataFromServer() trả về một Promise. 
// 2. Sử dụng Math.random() bên trong hàm: * Nếu số ngẫu nhiên > 0.5: Resolve với nội dung "Dữ liệu đã sẵn sàng".
//  * Nếu số ngẫu nhiên <= 0.5: Reject với nội dung "Lỗi kết nối Server!". 
// 3. Viết một hàm runTest() sử dụng Async/Await để gọi hàm trên. 
// 4. Quan trọng: Phải dùng try...catch để: * Nếu thành công: In ra dữ liệu. * Nếu thất bại: In ra thông báo lỗi 
// màu đỏ và dòng chữ "Đang đóng trình duyệt để dọn dẹp...".

// function fetchDataFromServer() {
//     return new Promise((resolve, reject) => {
//         // const randomValue = 0.1;

//         if (Math.random() > 0.5) {
//             // if (randomValue > 0.5) {
//             resolve("Dữ liệu đã sẵn sàng");
//         } else {
//             reject("Lỗi kết nối Server!");
//         }
//     });
// }
// async function runTest() {
//     try {
//         const data = await fetchDataFromServer();
//         console.log(data);
//     } catch (error) {
//         console.error(("\x1b[31m" + error + "\x1b[0m"));
//         console.log("Đang đóng trình duyệt để dọn dẹp...");
//     }
// }

// runTest();

console.log("-----------Question 6------------");
// console.log('A');

console.log("----Bài tập 3-----");
// Bài tập 3: Kịch bản Test song song (Parallel vs Sequential)
// Đề bài: Giả sử bạn cần kiểm tra 3 Page khác nhau: HomePage, ProductPage, và ContactPage. Mỗi trang mất 2 giây để load.
// Yêu cầu:
// 1. Viết một hàm checkPage(pageName) trả về Promise và hoàn thành sau 2 giây.
// 2. Kịch bản A (Tuần tự): Dùng await để kiểm tra từng trang một (Trang 1 xong mới đến trang 2).
//  Sau đó in ra tổng thời gian chạy (dự kiến là 6 giây).
// 3. Kịch bản B (Song song - Nâng cao): Tìm hiểu về Promise.all() để kích hoạt kiểm tra cả 3 trang
//  cùng một lúc. Sau đó in ra tổng thời gian chạy (dự kiến chỉ mất 2 giây).

// Câu 1
const checkPage = (pageName) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Đang kiểm tra trang: " + pageName);
            resolve();
        }, 2000);
    });
}

// //Câu 2
// async function testSequential() {
//     const start = Date.now();
//     await checkPage("HomePage");
//     await checkPage("ProductPage");
//     await checkPage("ContactPage");
//     const end = Date.now();
//     console.log("Tổng thời gian chạy (Tuần tự): " + (end - start) / 1000 + " giây");
// }
// testSequential();

//Câu 3
async function testParallel() {
    const start = Date.now();
    const result = await Promise.all([
        checkPage("HomePage"),
        checkPage("ProductPage"),
        checkPage("ContactPage")
    ]);
    const end = Date.now();
    console.log("Tổng thời gian chạy (Song song): " + (end - start) / 1000 + " giây");
}
testParallel();