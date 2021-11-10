pragma ton-solidity >= 0.35.0;
pragma AbiHeader expire;

import "./PiggyBank.sol";

contract Owner {

    constructor() public {
        require(tvm.pubkey() != 0, 101);
        require(msg.pubkey() == tvm.pubkey(), 102);
        tvm.accept();
    }

    modifier onlyOwner() {
        require(msg.pubkey() == tvm.pubkey(), 102);
        _;
    }

    function newDeposit(PiggyBank bankAddress, uint128 amount) public onlyOwner {
        require(amount > 0);
        tvm.accept();
        bankAddress.deposit{value: amount}();
    }

    function withdrawPiggyBank(PiggyBank bankAddress, uint128 newLimit) public onlyOwner {
        tvm.accept();
        bankAddress.withdraw(newLimit);
    }

}