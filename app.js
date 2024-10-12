// // 3 задача на сумму

// // const input = prompt("Введите число");
// // const num = Number(input);

// // if (!isNaN(num) && num >= 1) {
// //   let sum = 0;
// //   for (let i = 1; i <= num; i++) {
// //     sum += i;
// //   }
// //   console.log(`Сумма чисел от 1 до ${num} равна ${sum}`);
// // }


// // 4 задача на реверс
// // const inp = prompt("Enter string");
// // if (inp) {
// //   let str = "";
// //   for (let i = inp.length; i > 0; i--) {
// //     str += inp[i - 1];
// //   }
// //   console.log(`Строка в обратном порядке: ${str}`);
// // }


// const number2 = parseInt(prompt('Введите число:'));
// if (number2) {
//   console.log(`Простые числа меньше или равные ${number2}:`);
//   for (let i = 2; i <= number2; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(i);
//     }
//   }
// }