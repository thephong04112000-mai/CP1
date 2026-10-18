// 1. Khai báo biến cơ bản với var, let, const
var city = "Hà Nội";[cite: 10]
let age = 25;[cite: 10]
const PI = 3.14;[cite: 10]

// 2. Khai báo các biến với các kiểu dữ liệu khác nhau
let temperature = 30.5; // Kiểu Number (Số thực)[cite: 10]
let greeting = "Hello, JavaScript!"; // Kiểu String (Chuỗi)[cite: 10]
let isJavaScriptFun = true; // Kiểu Boolean[cite: 10]
let nothing = null; // Kiểu Null[cite: 10]
let notDefined; // Kiểu Undefined[cite: 10]
let uniqueID = Symbol("id"); // Kiểu Symbol[cite: 10]
let numbers = [1, 2, 3, 4, 5]; // Kiểu Array (Object)[cite: 10]
let person = { name: "An", job: "Developer" }; // Kiểu Object[cite: 10]

// 3. Khai báo biến xử lý chuỗi (greetingUppercase và greetingReplaced)
let greetingUppercase = greeting.toUpperCase();[cite: 10]
let greetingReplaced = greeting.replace("Hello", "Good afternoon");[cite: 10]

// 4. Minh họa về phạm vi (Scope) và Hàm (Function)
function displayInfo() {
    // Biến có phạm vi cục bộ (Local Scope)
    let message = "Thông tin chi tiết:";
    console.log(message);
    console.log("Thành phố:", city);
    console.log("Tuổi:", age);
    console.log("Số PI:", PI);
    console.log("Lời chào gốc:", greeting);
    console.log("Lời chào viết hoa:", greetingUppercase);
    console.log("Lời chào sau khi thay thế:", greetingReplaced);
}

// Gọi hàm để thực thi chương trình
displayInfo();