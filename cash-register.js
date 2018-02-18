function checkCashRegister(price, cash, cid) {
    let unitValues = [.01, .05, .1, .25, 1, 5, 10, 20, 100],

        changeAmount = parseFloat((cash - price).toFixed(2)),

        drawerValue = parseFloat(cid.map(money => money[1])
            .reduce((acc, current) => acc + current)
            .toFixed(2)),

        cidUnitAmounts = cid.map((money, i) => parseFloat((money[1] / unitValues[i]).toFixed(0))),

        change = [];
    if (drawerValue < changeAmount) {
        return "Insufficient Funds";
    }
    else if (drawerValue === changeAmount) {
        return "Closed";
    }
    else {
        let indexer = 0;
        let i = cid.length - 1
        for (let j = 0; j < 3; j++) {
            for (i; i >= 0; i--) {
                if (changeAmount >= unitValues[i] && cidUnitAmounts[i] !== 0) {
                    let currentUnit = 0;
                    var placeHolder = i;
                    change.push([cid[i][0], 0]);
                    while (changeAmount >= unitValues[i] &&
                        cidUnitAmounts[i] !== 0) {

                        currentUnit = parseFloat((currentUnit + unitValues[i]).toFixed(2));
                        changeAmount = parseFloat((changeAmount - unitValues[i]).toFixed(2));
                        cidUnitAmounts[i]--;

                    }
                    change[indexer][1] = currentUnit;
                    indexer++;

                }

            }
            if (changeAmount <= 0) {
                break;
            }
            else {
                i = placeHolder - 1
                changeAmount += unitValues[placeHolder]
                change.pop();
                indexer--;
            }

        }
        if (changeAmount !== 0) {
            return "Insufficient Funds";
        }
        else {
            return change;
        }
    }
}


let register4 = checkCashRegister(19.7, 20, [
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 10],
    ["QUARTER", 10],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
])

// let register3 = checkCashRegister(19.5, 20, [
//     ["PENNY", 0.5],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0]
// ])

// let register2 = checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0]
// ])

// let register = checkCashRegister(3.26, 100, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.10],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
//])
console.log(register4);
