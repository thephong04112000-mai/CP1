// let result1= 0/0 //NaN
// let result2=-1/0 //-Ifi
// let result3=1/0 //Ifi
// console.log(result1)
// console.log(result2)
// console.log(result3)

// //============== Toán tủ =============//
// let x=19 //Phép gán: gán giá trị 19 cho x, phép gán 1 dấu =
// let y=10 
// console.log(x*y)
// console.log(x/y)

// let a =10;
// a += 5;
// console.log = (a)

//==========SO SÁCH ========
let x=10
let y=5
console.log(x>y) //True
console.log(x==y) // x bằng y ko? => false
console.log(x!=y) // x khác y ko? => True

let a = 1 //number
let b = "1" //string
let c = true //boolean - true là 1, false là 0
console.log(a==c) // so sách ==: True
console.log(a===c) // so sách nghiêm ngặt: False

let a = true;
let b = false;
console.log(a && b)
console.log(True || False)

//==========VÒNG LẶP FOR 
for (let i=3; i<10; i++){
    console.log(i)
}
//==========VÒNG LẶP WHILE 

let j=1
while (6<0){
    console.log(j);
    j++;
}

//==========VÒNG LẶP do WHILE 

let t=1
do {
    console.log(t)
    t++
} while(6<0)