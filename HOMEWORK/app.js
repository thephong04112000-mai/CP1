let n;

// 1. Kiểm tra số nguyên dương, nếu chưa đúng yêu cầu người dùng nhập lại
do {
    n = parseInt(prompt("Nhập một số nguyên dương n:"));
} while (isNaN(n) || n <= 0);

// Khai báo hai biến để lưu trữ tổng số chẵn và tổng số lẻ
let sumEven = 0;
let sumOdd = 0;

// 2. Sử dụng vòng lặp for để lặp qua các số từ 1 đến n
for (let i = 1; i <= n; i++) {
    // 3. Kiểm tra số chẵn/lẻ bằng toán tử %
    if (i % 2 === 0) {
        sumEven += i; // Cộng vào tổng số chẵn
    } else {
        sumOdd += i;  // Cộng vào tổng số lẻ
    }
}

// 4. In kết quả ra console
console.log(`Số nguyên dương n = ${n}`);
console.log(`Tổng các số chẵn từ 1 đến ${n} là: ${sumEven}`);
console.log(`Tổng các số lẻ từ 1 đến ${n} là: ${sumOdd}`);