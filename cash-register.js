function checkCashRegister(price, cash, cid) {
    let change = [];
    if (cid.map(money => money[1])
        .reduce((acc, current) => acc + current)
        .toFixed(2) < (cash - price)) {
        return "Insufficient Funds";
    }
    else if (cid.map(money => money[1])
        .reduce((acc, current) => acc + current)
        .toFixed(2) === (cash - price).toFixed(2)) {
        return "Closed";
    }


}





let register = checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.10],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
])
console.log(register);
