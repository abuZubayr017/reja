class Shop {
    constructor(burger, non, kola) {
        this.burger = burger;
        this.non = non;
        this.kola = kola;
    }

    add(item, num) {
        if(item === 'burger'){
            this.burger += num;
        }
        if(item === 'non'){
            this.non += num;
        }
        if(item === 'kola'){
            this.kola += num;
        }
    }

    sell(item, num) {
        if(item === 'burger' && num <= this.burger){
            this.burger -= num;
        }
        if(item === 'non' && num <= this.non){
            this.non -= num;
        }
        if(item === 'kola' && num <= this.kola){
            this.kola -= num;
        }
    }

    balance() {
        let hour = new Date().getHours();
        let min = new Date().getMinutes();
        console.log(
            `Hozir ${hour}:${min}da burger ${this.burger} ta, non ${this.non} ta va kola ${this.kola} ta bor`
        );
    }
}

const market = new Shop(10, 8, 5);

market.sell('kola', 3);
market.balance()

market.add('non', 7)
market.sell('burger', 5)
market.balance();


// console.log("Jack's advices")

// let arr = [
//     "be a good student", // 0-20
//     "choose good boss and make mistakes", //20-30
//     "start your own business", //30-40
//     "do what you are good at", //40-50
//     "invest on youth people", //50-60
//     "enjoy life", //50-60
// ]


// function adviceMe(a, callback) {
//     if(typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, arr[0]);
//     else if (a > 20 && a <= 30) callback(null, arr[1]);
//     else if (a > 30 && a <= 40) callback(null, arr[2]);
//     else if (a > 40 && a <= 50) callback(null, arr[3]);
//     else if (a > 50 && a <= 60) callback(null, arr[4]);
//     else{
//         setInterval(() => {
//             callback(null, arr[5])  
//         }, 3000);
//     }

// }
// console.log('passed 1 ');

// adviceMe(63, (err, data) => {
//     if(err) console.log('Error:', err);
//     else{
//         console.log('result: ', data);
//     }
// })

// console.log('end 1')




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

// run()ru