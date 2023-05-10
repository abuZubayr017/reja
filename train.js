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
        setTimeout(() => {
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