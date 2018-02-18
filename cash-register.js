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
        for (let i = cid.length - 1; i >= 0; i--) {
            if (changeAmount >= unitValues[i] && cidUnitAmounts[i] !== 0) {
                let currentUnit = 0;
                change.push([cid[i][0], 0]);
                while (changeAmount >= unitValues[i] &&
                    cidUnitAmounts[i] !== 0) {

                    currentUnit = parseFloat((currentUnit + unitValues[i]).toFixed(2));
                    changeAmount = parseFloat((changeAmount - unitValues[i]).toFixed(2));
                    cidUnitAmounts[i]--;
                    // console.log(i)
                    // console.log(currentUnit)
                    // console.log(indexer)
                }
                change[indexer][1] = currentUnit;
                indexer++;
            }

        }

    }
    if (changeAmount !== 0) {
        return "Insufficient Funds"
    }
    else {
        return change;
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
