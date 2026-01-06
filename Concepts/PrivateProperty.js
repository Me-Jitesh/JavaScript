// Closures let you create truly private variables

function createBankAccount(initialBalance) {
    let balance = initialBalance;  // PRIVATE - can't be accessed directly

    return {
        deposit: function (amount) {
            balance += amount;
            return balance;
        },

        withdraw: function (amount) {
            if (amount > balance) {
                return "Insufficient funds";
            }
            balance -= amount;
            return balance;
        },

        getBalance: function () {
            return balance;
        }
    };
}

const myAccount = createBankAccount(100);

console.log(myAccount.getBalance());  // 100
myAccount.deposit(50);  // 150
myAccount.withdraw(30);  // 120

// Can't directly access or modify balance!
console.log(myAccount.balance);  // undefined
myAccount.balance = 9999999;  // Doesn't work!
console.log(myAccount.getBalance());  // 120 - still protected
