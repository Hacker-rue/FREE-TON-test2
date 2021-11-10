const { Account } = require("@tonclient/appkit");
const { TonClient, signerKeys } = require("@tonclient/core");
const { libNode } = require("@tonclient/lib-node");

module.exports = {

    async deploy(imageContract, client) {
        keys = await TonClient.default.crypto.generate_random_sign_keys();
        imageAccount = new Account(imageContract, {
            signer: signerKeys(keys),
            client
        })
        await imageAccount.deploy({ useGiver: true})
        return imageAccount
    }, 


    async deployCon(imageContract, client, data) {
        try {
            keys = await TonClient.default.crypto.generate_random_sign_keys();
            imageAccount = new Account(imageContract, {
                signer: signerKeys(keys),
                client
            })
            await imageAccount.deploy({initFunctionName:"constructor",  initInput: data, useGiver: true})
            return imageAccount
        } catch(er) {
            console.error(er)
        }
    },

    async checkOwner(strangerContract, bankAddress){
        await strangerContract.run("CheckOwner", {bankAddress: bankAddress})
        var response = await strangerContract.run("Check", {})
        return response.decoded.output.value0;
    }, 

    async tranzaction(owner, bankAddress, amount) {
        try {
            await owner.run("newDeposit",{bankAddress: bankAddress, amount: amount})
            console.log("Поздравляю, депозит закинут в копилку: " + amount + " nanoton")
        } catch(er) {
            console.log(er)
        }
        
    },
    async withdraw(owner, bankAddress, newLimit) {
        try {
            await owner.run("withdrawPiggyBank", {bankAddress: bankAddress, newLimit: newLimit})
            console.log("Поздравляю, вот ваши денюжки")
        } catch(er) {
            console.log(er)
        }
    }

    

}