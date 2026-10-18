// 1. Khai báo biến String và thực hiện nối chuỗi, cắt chuỗi, tìm độ dài
let str1 = "Học lập trình";[cite: 11]
let str2 = " JavaScript";[cite: 11]
let concatenatedStr = str1 + str2; // Nối chuỗi[cite: 11]
let subStr = concatenatedStr.substring(0, 13); // Cắt chuỗi[cite: 11]
let lengthStr = concatenatedStr.length; // Tìm độ dài của chuỗi[cite: 11]

console.log("Chuỗi sau khi nối:", concatenatedStr);[cite: 11]
console.log("Chuỗi sau khi cắt:", subStr);[cite: 11]
console.log("Độ dài chuỗi:", lengthStr);[cite: 11]


// 2. Nhập vào một chuỗi từ người dùng và in ra chuỗi đó dưới dạng in hoa
let userInput = prompt("Nhập vào một chuỗi:");[cite: 11, 12]
if (userInput !== null) {
    console.log("Chuỗi in hoa:", userInput.toUpperCase());[cite: 11]
}


// 3. Khai báo biến chứa tên (String) và tuổi (Number), sau đó in ra thông báo
let nameUser = "Nam";[cite: 11]
let ageUser = 14;[cite: 11]
console.log(`Tên bạn là ${nameUser} và bạn ${ageUser} tuổi.`);[cite: 11]


// 4. Chương trình nhận vào một câu từ người dùng, đếm số ký tự và in ra độ dài
let sentence = prompt("Nhập vào một câu:");[cite: 11, 12]
if (sentence !== null) {
    console.log("Số ký tự (độ dài) của câu là:", sentence.length);[cite: 11]
}