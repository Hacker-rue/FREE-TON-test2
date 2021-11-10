const PiggyBankContract = {
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
                "inputs": [
                    {
                        "name": "owner1",
                        "type": "address"
                    },
                    {
                        "name": "owner2",
                        "type": "address"
                    },
                    {
                        "name": "limit",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deposit",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "withdraw",
                "inputs": [
                    {
                        "name": "newLimit",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "checkOwner",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "getBalance",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint128"
                    }
                ]
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
            },
            {
                "name": "Owners",
                "type": "map(address,bool)"
            },
            {
                "name": "Limit",
                "type": "uint128"
            },
            {
                "name": "Balance",
                "type": "uint128"
            }
        ]
    },
    tvc: "te6ccgECGAEAA5QAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsVBQQXAujtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPAsGA3rtRNDXScMB+GYi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZNwhxwDjAiHXDR/yvCHjAwHbPPI8FBQGAiggghBFTxPsu+MCIIIQYZeIXbrjAgkHAyQw+Eby4Ez4Qm7jANHbPNs88gATCBEALGim/mDCAPLgZ/gA+Exopv5goLV/+GwETiCCClLWAbrjAiCCEBKt+wa64wIgghAmJ2hxuuMCIIIQRU8T7LrjAhAODAoCyjD4Qm7jAPhG8nP6QZXU0dD6QN/6QZXU0dD6QN/XDX+V1NHQ03/f0fhC8uBl+EUgbpIwcN74Qrry4Gb4AH/4SlUDAsjKAFmBAQv0QSD4an8QI8jKAFmBAQv0Qfhq+Gtw+GzbPPIACxEBUO1E0NdJwgGKjh1w7UTQ9AVt+Gpw+Gtw+GyAQPQO8r3XC//4YnD4Y+ITA4Aw+Eby4Ez4Qm7jANHbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAApidocYzxbLf8lw+wCRMOLbPPIAEw0RAAz4APgnbxADKDD4RvLgTPhCbuMA03/R2zzbPPIAEw8RAHb4SfhKgQEL9AqT1woAkXDi8uBl+Ez4S77y4Gf4APhM+EnIz4WIzgH6AoBrz0DJcPsAcPhsIJMg+GveMAP0MPhG8uBM+EJu4wDTH/hEWG91+GTR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAIJS1gGM8WygDJcPsAjjH4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AIBqz0D4RG8VzwsfygDJ+ERvFPsA4ts88gATEhEANPhM+Ev4SvhD+ELIy//LP8+D9ADLf8t/ye1UACT4APhJ+EqBAQv0CpPXCgCRcOIANu1E0NP/0z/TADH0BNN/03/R+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShFxYAFHNvbCAwLjUxLjAAAA==",
    code: "te6ccgECFQEAA2cABCSK7VMg4wMgwP/jAiDA/uMC8gsSAgEUAujtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPAgDA3rtRNDXScMB+GYi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZNwhxwDjAiHXDR/yvCHjAwHbPPI8EREDAiggghBFTxPsu+MCIIIQYZeIXbrjAgYEAyQw+Eby4Ez4Qm7jANHbPNs88gAQBQ4ALGim/mDCAPLgZ/gA+Exopv5goLV/+GwETiCCClLWAbrjAiCCEBKt+wa64wIgghAmJ2hxuuMCIIIQRU8T7LrjAg0LCQcCyjD4Qm7jAPhG8nP6QZXU0dD6QN/6QZXU0dD6QN/XDX+V1NHQ03/f0fhC8uBl+EUgbpIwcN74Qrry4Gb4AH/4SlUDAsjKAFmBAQv0QSD4an8QI8jKAFmBAQv0Qfhq+Gtw+GzbPPIACA4BUO1E0NdJwgGKjh1w7UTQ9AVt+Gpw+Gtw+GyAQPQO8r3XC//4YnD4Y+IQA4Aw+Eby4Ez4Qm7jANHbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAApidocYzxbLf8lw+wCRMOLbPPIAEAoOAAz4APgnbxADKDD4RvLgTPhCbuMA03/R2zzbPPIAEAwOAHb4SfhKgQEL9AqT1woAkXDi8uBl+Ez4S77y4Gf4APhM+EnIz4WIzgH6AoBrz0DJcPsAcPhsIJMg+GveMAP0MPhG8uBM+EJu4wDTH/hEWG91+GTR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAIJS1gGM8WygDJcPsAjjH4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AIBqz0D4RG8VzwsfygDJ+ERvFPsA4ts88gAQDw4ANPhM+Ev4SvhD+ELIy//LP8+D9ADLf8t/ye1UACT4APhJ+EqBAQv0CpPXCgCRcOIANu1E0NP/0z/TADH0BNN/03/R+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShFBMAFHNvbCAwLjUxLjAAAA==",
    codeHash: "ad656588d5539ced121e0259e2ab52500fc9ec6e3d1bc5f61c049931dc8fc85b",
};
module.exports = { PiggyBankContract };