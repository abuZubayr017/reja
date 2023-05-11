console.log("Jack's advices")

let arr = [
    "be a good student", // 0-20
    "choose good boss and make mistakes", //20-30
    "start your own business", //30-40
    "do what you are good at", //40-50
    "invest on youth people", //50-60
    "enjoy life", //50-60
]


function adviceMe(a, callback) {
    if(typeof a !== "number") callback("insert a number", null);
    else if (a <= 20) callback(null, arr[0]);
    else if (a > 20 && a <= 30) callback(null, arr[1]);
    else if (a > 30 && a <= 40) callback(null, arr[2]);
    else if (a > 40 && a <= 50) callback(null, arr[3]);
    else if (a > 50 && a <= 60) callback(null, arr[4]);
    else{
        setInterval(() => {
            callback(null, arr[5])  
        }, 3000);
    }

}
console.log('passed 1 ');

adviceMe(63, (err, data) => {
    if(err) console.log('Error:', err);
    else{
        console.log('result: ', data);
    }
})

console.log('end 1')




// async function adviceMe(a, callback) {
//     if(typeof a !== "number") throw new Error("insert a number", null);
//     else if (a <= 20) return arr[0];
//     else if (a > 20 && a <= 30) return arr[1];
//     else if (a > 30 && a <= 40) return arr[2];
//     else if (a > 40 && a <= 50) return arr[3];
//     else if (a > 50 && a <= 60) return arr[4];
//     else{
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(arr[5])
//             }, 5000);
//         })
//     }

// }

// console.log('passed 1 ');
// adviceMe(63)
//     .then((data) => {
//         console.log('result:', data);
//     }).catch((err) => {
//         console.log('Error:', err);
//     })

// console.log('end 1')



// async function run() {
//     let javob = await adviceMe(25);
//     console.log('result:', javob);
//     javob = await adviceMe(65);
//     console.log('result:', javob);
//     javob = await adviceMe(45);
//     console.log('result:', javob);
// }

// run()