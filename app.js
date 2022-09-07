//EXERCISE:

// Exercise 01:
// Cho đoạn code sau, nhiệm vụ của bạn là thay đổi function declaration/ function expression of ES5
// thành cú pháp arrow function của ES6 mà ouput của function vẫn phải giữ nguyên là true
// (function IIFE() {
//   var foo = (x) => {
//     var y = x * 2;
//     return function bar(z) {
//       if (z.length > 3) {
//         return z.map(function baz(v) {
//           if (v > 3) return v + y;
//           else return baz(v * 4);
//         });
//       } else {
//         var obj = [];
//         setTimeout(
//           function bam() {
//             obj.length = 1;
//             obj[0] = this.w;
//           }.bind(this),
//           100
//         );
//         return obj;
//       }
//     };
//   };
//   var p = foo(2);
//   var list1 = [1, 3, 4];
//   var list2 = list1.concat(6);
//   list1 = p.call({ w: 42 }, list1);
//   list2 = p(list2);
//   setTimeout(() => {
//     console.log(
//       list1[0] ===
//         list2.reduce((s, v) => {
//           return s + v;
//         }, 0)
//     );
//   }, 200);
// })();

// Exercise 02: Sửa lại đoạn code sau sao cho output vẫn là `true`.
// var x = 2,
//   fns = [];
// (() => {
//   var x = 5;
//   for (var i = 0; i < x; i++) {
//     fns[i] = () => i - 1;
//   }
// })();
// // DO NOT MODIFY BELOW CODE
// console.log(x * 2 === fns[x * 2]());
// console.log(x * 2);
// console.log(fns[x * 2]());
// // true

// Exercise 03: Sử dụng rest/spread operator để đoạn code sau vẫn có output là `true`
// function foo() {
//   var arr = [];
//   var a1 = [2, 4];
//   var a2 = [6, 8, 10, 12];
//   arr.push(a1[0], a2[1], a2[2], a2[3]);
//   return arr;
// }
// function bar() {
//   return foo();
// }
// // DO NOT MODIFY BELOW CODE
// console.log(bar().join("") === "281012");
// // true

// Exercise 04: Cho đoạn code sau, sử dụng tính năng ES6 Destructuring để cấu trúc lại data cho function kiểm tra để đầu ra output vẫn là `true`.
// function ajax(url, cb) {
//     // fake ajax response:
//     cb({
//          foo: 2,
//           baz: [6, 8, 10],
//            bam: {
//              qux: 12
//         }
//          });
//          }
//           function check(data) {
//              console.log(
//                 56 ===
//                 data.foo +
//                  data.bar +
//                   data.baz[0] +
//                   data.baz[1] +
//                   data.baz[2] +
//                    data.bam.qux +
//                    data.bam.qam
//                    );
//                 }
//                 var defaults = {
//                     foo: 0,
//                     bar: 4,
//                     bam: {
//                         qux: 0,
//                         qam: 14
//                     }
//                 };
//                 // YOUR CODE HERE
//                 function response(...) {
//                     check(...); // true
//                 }
//                 // DO NOT MODIFY
//                 ajax('http://fun.tld', response);

// Exercise 05: Cho đoạn code sau, hoàn thành upper function và và sử dụng nó như một tag function
// để template string sau `Hello  (@ ), welcome to the  !!!` vẫn cho đầu ra là `true`
// function upper(strings, ...values) {
//   var a = strings.toUpperCase();
//   return a;
// }
// var name = "Nguyen Van A",
//   account = "ANV",
//   classname = "Fresher FrontEnd";
// console.log(
//   `Hello ${upper(name)} (@${upper(account)}), welcome to the ${upper(
//     classname
//   )}!!!` === "Hello NGUYEN VAN A (@ANV), welcome to the FRESHER FRONTEND!!!"
// );
