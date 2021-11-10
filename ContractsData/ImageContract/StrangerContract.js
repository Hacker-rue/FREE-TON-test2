const StrangerContract = {
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
                "name": "CheckOwner",
                "inputs": [
                    {
                        "name": "bankAddress",
                        "type": "address"
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
                "name": "Check",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "CallbackBool",
                "inputs": [
                    {
                        "name": "res",
                        "type": "bool"
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
            },
            {
                "name": "True",
                "type": "bool"
            }
        ]
    },
    tvc: "te6ccgECGAEAAvMAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsVBQQXApztRNDXScMB+GYh2zzTAAGOEoECANcYIPkBWPhCIPhl+RDyqN7TPwH4QyG58rQg+COBA+iogggbd0CgufK0+GPTHwH4I7zyudMfAds88jwIBgNK7UTQ10nDAfhmItDXCwOpOADcIccA4wIh1w0f8rwh4wMB2zzyPBQUBgIoIIIQXINjBrvjAiCCEGi1Xz+64wIJBwJIMPhCbuMA+Ebyc9H4QvLgZfhFIG6SMHDe+EK68uBm+ADbPPIACBEBRO1E0NdJwgGKjhdw7UTQ9AVw+GqAQPQO8r3XC//4YnD4Y+ITBE4gggpgoKC64wIgghAp5vGpuuMCIIIQNLGxWLrjAiCCEFyDYwa64wIQDgwKA4Aw+Eby4Ez4Qm7jANHbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAA3INjBozxbKAMlw+wCRMOLbPPIAEwsRAAj4APhKA0ow+Eby4Ez4Qm7jAPpBldTR0PpA39cNf5XU0dDTf9/R2zzbPPIAEw0RAHj4RSBukjBw3vhCuvLgZmim/mDCAPLgZPgAAcjPhYjOAfoCjQRAAAAAAAAAAAAAAAAAAwy8QuzPFslw+wADKDD4RvLgTPhCbuMA0gDR2zzbPPIAEw8RAAT4agOSMPhG8uBM+EJu4wD6QZXU0dD6QN/R2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAIJgoKCM8WygDJcPsAkTDi2zzyABMSEQAk+Er4Q/hCyMv/yz/Pg8oAye1UAHL4RSBukjBw3vhCuvLgZnD4AAHIz4WIzo0GTmJaAAAAAAAAAAAAAAAAAAABKWsAlPN41MDPFslw+wAAJu1E0NP/0z/TADHSANH4avhj+GIACvhG8uBMAgr0pCD0oRcWABRzb2wgMC41MS4wAAA=",
    code: "te6ccgECFQEAAsYABCSK7VMg4wMgwP/jAiDA/uMC8gsSAgEUApztRNDXScMB+GYh2zzTAAGOEoECANcYIPkBWPhCIPhl+RDyqN7TPwH4QyG58rQg+COBA+iogggbd0CgufK0+GPTHwH4I7zyudMfAds88jwFAwNK7UTQ10nDAfhmItDXCwOpOADcIccA4wIh1w0f8rwh4wMB2zzyPBERAwIoIIIQXINjBrvjAiCCEGi1Xz+64wIGBAJIMPhCbuMA+Ebyc9H4QvLgZfhFIG6SMHDe+EK68uBm+ADbPPIABQ4BRO1E0NdJwgGKjhdw7UTQ9AVw+GqAQPQO8r3XC//4YnD4Y+IQBE4gggpgoKC64wIgghAp5vGpuuMCIIIQNLGxWLrjAiCCEFyDYwa64wINCwkHA4Aw+Eby4Ez4Qm7jANHbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAA3INjBozxbKAMlw+wCRMOLbPPIAEAgOAAj4APhKA0ow+Eby4Ez4Qm7jAPpBldTR0PpA39cNf5XU0dDTf9/R2zzbPPIAEAoOAHj4RSBukjBw3vhCuvLgZmim/mDCAPLgZPgAAcjPhYjOAfoCjQRAAAAAAAAAAAAAAAAAAwy8QuzPFslw+wADKDD4RvLgTPhCbuMA0gDR2zzbPPIAEAwOAAT4agOSMPhG8uBM+EJu4wD6QZXU0dD6QN/R2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAIJgoKCM8WygDJcPsAkTDi2zzyABAPDgAk+Er4Q/hCyMv/yz/Pg8oAye1UAHL4RSBukjBw3vhCuvLgZnD4AAHIz4WIzo0GTmJaAAAAAAAAAAAAAAAAAAABKWsAlPN41MDPFslw+wAAJu1E0NP/0z/TADHSANH4avhj+GIACvhG8uBMAgr0pCD0oRQTABRzb2wgMC41MS4wAAA=",
    codeHash: "216818eb0922aa1394aade2dfed3bb4cf5e4579c651412fef0679bd41f6f3633",
};
module.exports = { StrangerContract };