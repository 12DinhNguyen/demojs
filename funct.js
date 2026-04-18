function isPasswordValid(password) { //hàm kiểm tra độ dài mật khẩu
    if (password.length >= 8) {
        console.log("Mật khẩu hợp lệ.");
        return true;
    } else {
        console.log("Mật khẩu không hợp lệ. Nó phải có ít nhất 8 ký tự.");
        return false;
    }
}

isPasswordValid("1234aD@a"); //nhập mật khẩu để kiểm tra

console.log("-----------------------------");
function formatPrice(amount) {
    // return amount + "$"
    return `${amount}$`
}

console.log(formatPrice(50000)); //nhập số tiền để định dạng

console.log("-----------------------------");

const myBugs = [
    { id: 1, severity: "High" },
    { id: 2, severity: "Low" },
    { id: 3, severity: "High" }
];

function getHighSeverityBugs(bugList) {
    return bugList.filter(function (bug) {
        return bug.severity === "High";
        // return 1;
    });
}

console.log(getHighSeverityBugs(myBugs));