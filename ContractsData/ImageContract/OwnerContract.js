const OwnerContract = {
    abi: {
        "ABI version": 2,
        "version": "2.2",
        "header": [
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "newDeposit",
                "inputs": [
                    {
                        "name": "bankAddress",
                        "type": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "withdrawPiggyBank",
                "inputs": [
                    {
                        "name": "bankAddress",
                        "type": "address"
                    },
                    {
                        "name": "newLimit",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            }
        ],
        "data": [],
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            }
        ]
    },
    tvc: "te6ccgECEwEAAjQAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsQBQQSApztRNDXScMB+GYh2zzTAAGOEoECANcYIPkBWPhCIPhl+RDyqN7TPwH4QyG58rQg+COBA+iogggbd0CgufK0+GPTHwH4I7zyudMfAds88jwIBgNK7UTQ10nDAfhmItDXCwOpOADcIccA4wIh1w0f8rwh4wMB2zzyPA8PBgM8IIIQH8CuZ7rjAiCCEDSxsVi64wIgghBotV8/uuMCCwkHAkgw+EJu4wD4RvJz0fhC8uBl+EUgbpIwcN74Qrry4Gb4ANs88gAIDAE+7UTQ10nCAYqOFHDtRND0BYBA9A7yvdcL//hicPhj4g4DSjD4RvLgTPhCbuMA+kGV1NHQ+kDf1w1/ldTR0NN/39HbPNs88gAOCgwAcvhFIG6SMHDe+EK68uBmIMIA8uBk+AAByM+FiM4B+gKNBEAAAAAAAAAAAAAAAAADDLxC7M8WyXD7AANKMPhG8uBM+EJu4wD6QZXU0dD6QN/XDX+V1NHQ03/f0ds82zzyAA4NDAAc+EP4QsjL/8s/z4PJ7VQAbPhFIG6SMHDe+EK68uBm+AAByM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAACVb9g0DPFst/yXD7AAAe7UTQ0//TP9MAMdH4Y/hiAAr4RvLgTAIK9KQg9KESEQAUc29sIDAuNTEuMAAA",
    code: "te6ccgECEAEAAgcABCSK7VMg4wMgwP/jAiDA/uMC8gsNAgEPApztRNDXScMB+GYh2zzTAAGOEoECANcYIPkBWPhCIPhl+RDyqN7TPwH4QyG58rQg+COBA+iogggbd0CgufK0+GPTHwH4I7zyudMfAds88jwFAwNK7UTQ10nDAfhmItDXCwOpOADcIccA4wIh1w0f8rwh4wMB2zzyPAwMAwM8IIIQH8CuZ7rjAiCCEDSxsVi64wIgghBotV8/uuMCCAYEAkgw+EJu4wD4RvJz0fhC8uBl+EUgbpIwcN74Qrry4Gb4ANs88gAFCQE+7UTQ10nCAYqOFHDtRND0BYBA9A7yvdcL//hicPhj4gsDSjD4RvLgTPhCbuMA+kGV1NHQ+kDf1w1/ldTR0NN/39HbPNs88gALBwkAcvhFIG6SMHDe+EK68uBmIMIA8uBk+AAByM+FiM4B+gKNBEAAAAAAAAAAAAAAAAADDLxC7M8WyXD7AANKMPhG8uBM+EJu4wD6QZXU0dD6QN/XDX+V1NHQ03/f0ds82zzyAAsKCQAc+EP4QsjL/8s/z4PJ7VQAbPhFIG6SMHDe+EK68uBm+AAByM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAACVb9g0DPFst/yXD7AAAe7UTQ0//TP9MAMdH4Y/hiAAr4RvLgTAIK9KQg9KEPDgAUc29sIDAuNTEuMAAA",
    codeHash: "971b1bf17f4669a38c67f28373ebd83cc7ec6ffdb2e9c370fbd2f4a83dd2db09",
};
module.exports = { OwnerContract };