//KHAI BÁO MẢNG
// let fruits=[] // Mảng rỗng
let students=["Nguyễn Văn A, Trần Thị B"]
let score=[6,2,6,2,2]
let tths=["Nguyễn Văn C",10, true, "HCM"]
//index - element:chỉ số - giá trị
// index bắt đầu tù 0 và tăng dần
console.log(tths[1])

//================DUYỆT PHẦN TỬ====================
let danhSachHocSinh = ['An','Bình','Châu']

for (let i = 0; i < danhSachHocSinh.length; i++) {
    console.log(danhSachHocSinh[i]);
}

//================THÊM PHẦN TỬ====================
let a1=[6,10,3]
a1.push(5,10)// thêm phần tư vào cuối danh sách
console.log(a1)

//================CẬP NHẬT PHẦN TỬ====================
let a2=[6,9,10,99]
a2[2]="Giá trị mới"
console.log(a2)
//================TÌM KIẾM PHẦN TỬ====================
const fruits = ['apple', 'banana', 'orange', 'apple'];
console.log(fruits.indexOf('banana'));
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('grape'));

//================LỆNH SPLICE CÓ THỂ- THÊM - SỬA  - XÓA 
// thêm
let arr1=[1,2,3,4]
arr1.splice(1,0,"Phần tử mới") //tại vị trí 1, xoá 0  phần tử, thêm "Phân tử mới" tại vị trí này
console.log(arr1)

//Xoá
let arr2[1,2,3,4]
arr2.splice(1,1) //tại vị trí 1 xoá 1 phần tử
console.log(arr2)

//thay đổi phần tử
let arr3=[1,2,3,4]
arr3.splice(1,1,"Giá trị mới") // tại vị trí 1, xoá 1 phần tử, thêm phần tử, thêm phần tử "giá trị mới" tại vị trí này
console.log(arr3)

// xóa nhiều phần tử
let arr4=[1,2,3,4]
arr4.splice(1,3) //tại vị trí 1, xóa 3 phần tử
console.log(arr4)

//===============================ĐỐI TƯỢNG TRONG JS
let person= {
    firstName: "Hương",
    lastName: "Phan",
    dob: 18
}
console.log(person.firstName)
console.log(person["firstName"])
console.log(person)
//===duyệt đối tượng
for (let key in person){
    console.log(key)
}

//=============================DANH SÁCH ĐỐI TƯỢNG
let hocSinh = [

]