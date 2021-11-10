pragma ton-solidity >= 0.35.0;
pragma AbiHeader expire;

import "./PiggyBank.sol";

contract Stranger {

    constructor() public {
        require(tvm.pubkey() != 0, 101);
        require(msg.pubkey() == tvm.pubkey(), 102);
        tvm.accept();
    }

    bool True;

    modifier onlyOwner() {
        require(msg.pubkey() == tvm.pubkey(), 102);
        _;
    }

    function newDeposit(PiggyBank bankAddress, uint128 amount) public onlyOwner {
        require(msg.value > 0);
        tvm.accept();
        bankAddress.deposit{value: amount}();
    }

    function CheckOwner(PiggyBank bankAddress) public onlyOwner returns(bool) {
        tvm.accept();
        bankAddress.checkOwner{callback: Stranger.CallbackBool}();
    }

    function Check() public returns(bool) {
        tvm.accept();
        return True;
    }

    function CallbackBool(bool res) public {
        True = res;
    }


}