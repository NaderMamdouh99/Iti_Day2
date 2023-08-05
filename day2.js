// ======================================array and random=================================
/*
    // var Tipstudy =["1- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, accusamus!",
    //             "2- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, accusamus!",
    //             "3- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, accusamus!",
    //             "4- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, accusamus!",
    //             "5- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, accusamus!",
    //             "6- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, accusamus!",
    //             "7- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, accusamus!",
    //             "8- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, accusamus!",
    //             "9- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, accusamus!",
    //             "10- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, accusamus!"
    //             ]
    // var RandomTip = Tipstudy[Math.floor(Math.random() * Tipstudy.length)];
    // document.write(RandomTip);

    // function date() {
    //     var date = new Date().toLocaleDateString();
    //     console.log(date);
    // }

*/
// var ask = prompt("Enter your Email");
// // console.log(!(ask.includes("@") && !ask.startsWith("@") && !ask.endsWith("@")));
// while (!(ask.includes("@") && !ask.startsWith("@") && !ask.endsWith("@"))) {
//     alert("Please enter a valid email");
//     ask = prompt("Enter your Email");
// }

// ======================================Full name=====================================
// function GetFullName(){
//         while(true){
//             var FullName = prompt("Enter your Full Name : ");
//             var FullNameReg= /^\s*[a-zA-Z]{4,}(?:(?:\s+[a-zA-Z]{3,})+)\s*$/;

//             if(FullNameReg.test(FullName))
//                 {
//                     break;
//                 }
//                 else{
//                     alert("Your Full Name should be characters only \n Characters (alphabetic only) more than 3 \n use one space in your characters \n finally some other characters (alphabetic only) more than 3")
//                     GetFullName();
//                     break;
//                 }
//     }
// }
// ========================================Email====================================
// function GetEmail(){
//         while(true){
//             var Email = prompt("Enter your Email : ");
//             var EmailReg= /\w+@\w+.(com|net|edu|org)?.eg/;
//             if(EmailReg.test(Email))
//                 {
//                     break;
//                 }
//                 else{
//                     alert(" Your Email must be from Egypt (.eg domain),\nfor example name@domain.com.eg (.com.eg, .net.eg, .edu.eg or .org.eg [.eg is a must], don’t allow any other domains)");
//                     GetEmail();
//                     break;
//                 }
//     }
// }
// GetFullName();
// GetEmail();

//============================================Sort========================================
// var arr = [60, 100,10,15,85];
// arr.sort(function(a, b){return b-a});
// console.log("Sort Array");
// console.log(arr);
// // use find
// var find =arr.find(function (item) {
//     return item <= 100
// });
// console.log("Find in array");
// console.log(find);

//==========================================fillter==============================================
// let even_num = arr.filter(function(item){

//         return item < 60 });
//     console.log("Fillter in array");
//     console.log(even_num)

//     var students = [{Sname : "Nader", fdegree : 100},
//     {Sname : "Mohamed", fdegree : 80},
//     {Sname : "ali", fdegree : 40},
//     {Sname : "Mahmoud", fdegree : 90}]
//     // console.log(Arr2);

//     console.log("a.	Find student Name, who got degree between 90 and 100 ");
//     var studentWithDegreeBetween90And100 = students.find(
//         student =>
//         student.fdegree >= 90 && student.fdegree <= 100)
//         console.log(studentWithDegreeBetween90And100);
//         console.log("##################");
//         console.log("b.	Print students names, who got a degree less than 60 ");
//     var StudentGetDegreeLassThan60 = students.filter(st => st.fdegree<60);
//         console.log(StudentGetDegreeLassThan60);
//         console.log("##################");
//         console.log("c.	Add a new student to the array [Use push()],()], and then use for…in to print all elements of the array.");

//     var addToStudent = students.push({Sname:"Mariam",fdegree:80});
//         for (i in students){
//             console.log(students[i]);
//         };
//         console.log("##################");
//         console.log("d.	Remove the last student of the array [Use pop()], and then use for…of to print all elements of the array.");

//     var removeToStudent = students.pop(students.length-1);
//         for (i of students){
//             console.log(i);
//         };
//         console.log("##################");
//         console.log("e.	Sort the array alphabetically based on the student name. ");
//         students.sort(function (a,b) {
//             if (a.Sname< b.Sname) {return 1;}
//             if (a.Sname> b.Sname) {return -1;}
//             return 0;
//         })
//         console.log(students);
//         console.log("##################");

//==============================================Prompt date and validatiion==========================
// var date;
// var date2;
// var answer;
// function CheckBirthDate() {
//   alert("Please Enter Your Birthday True :(DD – MM – YYYY)");
//   date2 = prompt("Enter your date", "(DD – MM – YYYY)");
//   if (date2.charAt(4) == "-" && date2.charAt(7) == "-" && date2.length == 10) {
//     alert(date2);
//   }
// }

// function EnterDate() {
//   date = prompt("Enter your date", "(DD – MM – YYYY)");
//   if (date.charAt(4) == "-" && date.charAt(7) == "-" && date.length == 10) {
//     answer = prompt("If you want to amend yor date enter 'true'");
//     while (answer.includes("true")) {
//       date2 = prompt("Enter your date", "(DD – MM – YYYY)");
//       if (
//         date2.charAt(4) == "-" &&
//         date2.charAt(7) == "-" &&
//         date2.length == 10
//       ) {
//         alert(date2);
//         break;
//       } else {
//         CheckBirthDate();
//         break;
//       }
//     }
//   } else {
//     alert("Please Enter Your Birthday True :(DD – MM – YYYY)");
//     EnterDate();
//   }
// }
// EnterDate();
// function showDate() {
//   console.log(date);
// }
// function showDateNew() {
//   console.log(date2);
// }
