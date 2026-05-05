function calc(){
let tokens=parseFloat(document.getElementById('tokens').value)||0;
let req=parseFloat(document.getElementById('req').value)||0;
let cost=parseFloat(document.getElementById('cost').value)||0;

let total=(tokens*req/1000)*cost;

document.getElementById('result').innerText="Cost: $"+total.toFixed(4);
}