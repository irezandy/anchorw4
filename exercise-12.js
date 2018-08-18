function shoppingTime(memberId, money) {
    // you can only write your code here!
    var memMon = (memberId, money)
    var memberID = memberId
    // var sisaUang = money
    var belanjaan = []
    var totalPrice = 0;
    var arrItem = ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone']
    var arrHarga = [1500000, 500000, 250000, 175000, 50000]

    if (memberID === '' || memMon === undefined) {
        return ("Mohon maaf, toko X hanya berlaku untuk member saja")
    } else if (money < 50000) {
        return ("Mohon maaf, uang tidak cukup")
    } else {
        for (var i = 0; i < 5; i++) {
            //
            if (money >= arrHarga[i]) {
                totalPrice = totalPrice + arrHarga[i]
                //console.log(totalPrice)
                changeMoney = money - totalPrice
                //console.log(changeMoney)
                belanjaan.push(arrItem[i])
                //console.log(belanjaan)
            }
        }
        var shopObj = {}
        shopObj.memberId = memberId
        shopObj.money = money
        shopObj.listPurchased = belanjaan
        shopObj.changeMoney = changeMoney
    }
    return shopObj
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
