let MS = 95;
let HM = 1.88;
let mJohn = 85;
let hJohn = 1.76;


let BMark = MS / HM ** 2;
let BJohn = mJohn / (hJohn * hJohn);
let HigherBMI = BMark > BJohn;

console.log(BMark, BJohn, HigherBMI);

 MS = 78;
 HM = 1.69;
 mJohn = 92;
 hJohn = 1.95;

 BMark = MS / HM ** 2;
 BJohn = mJohn / (hJohn * hJohn);
 HigherBMI = BMark > BJohn;
 console.log(BMark, BJohn, HigherBMI);