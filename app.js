const { Account } = require("@tonclient/appkit");
const { TonClient, signerKeys } = require("@tonclient/core");
const { libNode } = require("@tonclient/lib-node");
const imageOwner = require("./ContractsData/ImageContract/OwnerContract")
const imagePiggyBank = require("./ContractsData/ImageContract/PiggyBankContract")
const imageStranger = require("./ContractsData/ImageContract/StrangerContract")
const BuisnesLogik = require("./BuisnesLogic/main")
TonClient.useBinaryLibrary(libNode);


var owner1
var owner2
var PiggyBank
var Stranger

async function init(client) {
    owner1 = await BuisnesLogik.deploy(imageOwner.OwnerContract, client)
    owner2 = await BuisnesLogik.deploy(imageOwner.OwnerContract, client)
    PiggyBank = await BuisnesLogik.deployCon(imagePiggyBank.PiggyBankContract, client, {owner1 :await owner1.getAddress(), 
        owner2: await owner2.getAddress(), limit: 1000_000_000})
    Stranger = await BuisnesLogik.deploy(imageStranger.StrangerContract, client)
}

async function getAddress() {
    console.log("Аккаунт владельца №1 зарегестрирован под: " + await owner1.getAddress() + " адресом\n")
    console.log("Аккаунт владельца №2 зарегестрирован под: " + await owner2.getAddress() + " адресом\n")
    console.log("Аккаунт копилки зарегестрирован под: " + await PiggyBank.getAddress() + " адресом\n")
    console.log("Аккаунт пользователя зарегестрирован под: " + await Stranger.getAddress() + " адресом\n")
}

async function main() {
    var client = new TonClient({
        network: {
            endpoints: ["http://localhost"]
        }
    })
    console.log("Регестрируем аккаунты в сети...")
    await init(client)
    await getAddress();
    var response = await BuisnesLogik.checkOwner(Stranger, await PiggyBank.getAddress())
    console.log("Результат проверки аккаунта на возможность снять деньги: " + response)
    await BuisnesLogik.tranzaction(owner1, await PiggyBank.getAddress(), 1100_000_000)
    BuisnesLogik.withdraw(owner2, await PiggyBank.getAddress(), 100_000_000)
    client.close()
}


main()