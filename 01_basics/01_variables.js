const accountId = 42 
let accountEmail = "bhawukarora042@gmail.com"
var accountPassword = "Bhawuk@42" /* Prefer not to use var because of issue in block and functional scope */
accountCity = "Jaipur"
let accountState

// accountId = 41 // Not Allowed
accountEmail = "bhawuk.arora008@gmail.com"
accountPassword = "Sanjay@17" 
accountCity = "Kota"

// console.log(accountId) 
/* Prefer not to use var because of issue in block and functional scope */
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])