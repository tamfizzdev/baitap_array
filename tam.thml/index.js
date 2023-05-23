// var numArr = [];

// function themSo(){
//     var tongSoDuong = 0;
//     var soLuongSoDuong = 0;
// var number = document.querySelector("#number").value * 1;
// clear input
// document.querySelector("#number").value = "";
// thêm giá trị user nhập vào mảng
// numArr.push(number);
// duyet mang
// for(var index=0;index<numArr.length;index++){
//     var number = numArr[index];
//     if(number > 0){
//         tongSoDuong += number;
//     }
//     if(number > 0){
//         soLuongSoDuong++;
//     }
// }
// var contentHMLT = `
//     <h3> ${numArr}</h3>
//     <h3> Tong so Duong: ${tongSoDuong}</h3>
//     <h3> So luong so Duong: ${soLuongSoDuong}</h3>
// `;

// document.querySelector("#result").innerHTML = contentHMLT;
// }

// var numArr = [];
// var n = 0;
// function Str(){
//     n++;
//      var number = document.querySelector("#number").value*1;
//     document.querySelector("#number").value = "";
//     numArr.push(number);
//     var contentHMLT = `<h3> ${numArr}</h3>`
//     document.querySelector("#result").innerHTML = contentHMLT;
// }
// function themSo(){
//     var tongSoDuong = 0;
//     var soLuongSoDuong = 0;
//     var minNumber = numArr[0];
//     var soDuongNhoNhat = numArr[0];
//     var eVen = -1;
   
//     for(var index = 0; index < numArr.length; index++){
//         var number = numArr[index];
//         if(number > 0) {
//             tongSoDuong += number;
//             soLuongSoDuong++;
//         }
//         if(minNumber > numArr[index]){
//             minNumber = numArr[index];
//         }
//         if(number > 0 && soDuongNhoNhat > numArr[index]){
//             soDuongNhoNhat = numArr[index];
//         }
//     }

//     for(var i = numArr.length - 1 ; i >= 0; i-- ){
//         if (numArr[i]%2==0){
//             eVen = numArr[i]; 
//         }
        
//     }
//     var contentHMLT = ` 

//     <h3> Bài 1 - Tổng số dương: ${tongSoDuong}</h3>
//     <h3> Bài 2 - Số lượng số dương: ${soLuongSoDuong}</h3>
//     <h3> Bài 3 - Số nhỏ nhất : ${minNumber}</h3>
//     <h3> Bài 4 - Số dương nhỏ nhất : ${soDuongNhoNhat}</h3>
//     <h3> Bài 5 - Số chẵn cuối cùng : ${eVen}</h3>

//     `
//     document.querySelector("#result").innerHTML = contentHMLT;
// }



var numArr = [];
var n = 0;

function themSo(){
    n++;
   var number = document.getElementById("number").value*1;
    document.querySelector("#number").value = "";
    numArr.push(number)
   document.getElementById("result").innerHTML=`Array : ${numArr}`;
}

//bai1
function tinhTongSoDuong(){
    var tongSoDuong = 0;
    for(var i = 0 ; i<= numArr.length ; i++ ){
        if (numArr[i]>0){
            tongSoDuong += numArr[i];
        }
    }
    document.getElementById("bai1").innerHTML=`Tổng số dương: ${tongSoDuong} `  
}

//bai 2
function demSoDuong(){
    var soLuongSoDuong = 0;
    for(var i = 0; i <= numArr.length; i++){
        if(numArr[i]>0){
            soLuongSoDuong++;
        }
    }
    document.getElementById("bai2").innerHTML=`Số lượng số dương: ${soLuongSoDuong}`
}

//bai3
function timSoNhoNhat(){
    var min = numArr[0];
    for(var i = 0; i <= numArr.length; i++){
        if(numArr[i] < min){
            min = numArr[i];
        }
    }
    document.getElementById("bai3").innerHTML=`Số nhỏ nhất: ${min}`;
}

//bai4
function timSoDuongNhoNhat(){
    var soDuongNhoNhat = numArr[0];
    for(var i = 0; i <= numArr.length; i++){
        if(numArr[i] < soDuongNhoNhat && numArr[i]>0){
            soDuongNhoNhat = numArr[i];
        }
    }
    document.getElementById("bai4").innerHTML=`Số dương nhỏ nhất: ${soDuongNhoNhat}`;
}

//bai5
function timSoChanCuoiCung(){
    var Even = -1;

    for(var i = 0 ; i<=n ; i++ ){
        if (numArr[i]%2==0){
            Even=numArr[i];
            
        }
    }
    document.getElementById("bai5").innerText=` Số chẵn cuối cùng ${Even}`;
}

//bai6
function hoanVi(){
    var a = document.getElementById("numbera").value*1;
    var b = document.getElementById("numberb").value*1;
    var medial = 0;
    medial = numArr[a];
    numArr[a] = numArr[b];
    numArr[b] = medial;
    document.getElementById("bai6").innerText=` Mảng ${numArr}`;
}

//bai7
function sapXepTangDan(){
    var medial=0;
    for(var i = 0; i <= n ; i++){
        for(var j = i + 1; j <= n+1; j++){
            if(numArr[i] > numArr[j]){
                // Hoan vi 2 so 
                medial = numArr[i];
                numArr[i] = numArr[j];
                numArr[j] = medial;        
            }
        }
    }
    console.log(numArr);
    document.getElementById("bai7").innerHTML=`Mảng : ${numArr}`;
}

//bai8
function timSoNguyenToDauTien(n){
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố
    var prime = -1;
    let flag = 1;
    for(var i = 0 ; i<=n ; i++ ){

        if (numArr[i] <2){
            prime = numArr[i];
            break;
           
        }
    
        /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
        let j = 2;
        while(j <numArr[i]){
            if( numArr[i]%i==0 ) {
                flag = 0;
                break; 
            }
            j++;
        }
         numArr[i]=prime;
    }
    console.log("snt", prime);

}
    
//bai9
//đếm số nguyên
var IStr=[];
function isTr(){
    n++;
   var number = document.getElementById("inb").value*1;
    document.querySelector("#inb").value = "";
   IStr.push(number);
   document.getElementById("ketqua").innerHTML=`Mảng : ${IStr}`;
}
function demSoNguyen(){
    var S = 0;

    for(var i = 0 ; i<=n ; i++ ){
        if (Number.isInteger(IStr[i])){
            S++;
            
        }
    }
    document.getElementById("bai9").innerHTML=`số nguyên : ${S}`
}

//bai10
function soSanh(){
    var S = 0;
    var N = 0 ;
    for(var i = 0 ; i<=n ; i++ ){
        if (numArr[i]>0){
            S++;
            
        }
        if (numArr[i]<0){
            N++;
        }
    }
    if ( S>N){
        document.getElementById("bai10").innerHTML=`Số dương > Số âm`

    }
    else{
        document.getElementById("bai10").innerHTML=`Số âm > Số dương`
    }

    for(var i = 0 ; i<=n ; i++ ){
        if (IStr[i]>0){
            S++;
            
        }
        if (IStr[i]<0){
            N++;
        }
    }
    if ( S>N){
        document.getElementById("bai10").innerHTML=`Số dương > Số âm`

    }
    else{
        document.getElementById("bai10").innerHTML=`Số âm > Số dương`
    }
}

