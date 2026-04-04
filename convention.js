const URL_DANG_NHAP = "https://test-site.com/login";

let isButtonValid = true;
let user = "admin_01";

function kiemTraLogin(username, password) {
    if (username === "admin") {
        console.log("Welcome");
    } else {
        let errorMsg = "Sai pass rùi";
        console.log(errorMsg);
    }
}

console.log(kiemTraLogin("admin", "123"));


console.log("---------------------------------------");

const DEFAULT_TIMEOUT = 5000;
const productList = [{
    id: 1,
    productName: "iPhone 17 Pro",
    price: 35990000,
    inStock: true
},
{
    id: 2,
    productName: "Samsung Galaxy S25",
    price: 24990000,
    inStock: true
},
{
    id: 3,
    productName: "Xiaomi 14",
    price: 6990000,
    inStock: false
}];

console.log(DEFAULT_TIMEOUT)
console.log(productList)