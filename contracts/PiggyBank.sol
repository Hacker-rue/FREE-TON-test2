pragma ton-solidity >= 0.35.0;
pragma AbiHeader expire;

contract PiggyBank {

    mapping(address => bool) Owners;
    uint128 Limit;
    uint128 Balance;

    constructor(address owner1, address owner2, uint128 limit) public {
        require(tvm.pubkey() != 0, 101);
        require(msg.pubkey() == tvm.pubkey(), 102);
        tvm.accept();
        Owners[owner1] = true;
        Owners[owner2] = true;
        Limit = limit;
        Balance = 0;
    }

    modifier onlyOwner() {
        require(Owners[msg.sender], 101);
        _;
    }

    function deposit() public {
        require(msg.value > 0, 103);
        tvm.accept();
        Balance += msg.value;
    }

    function withdraw(uint128 newLimit) public onlyOwner {
        require(Balance >= Limit, 103);
        tvm.accept();
        msg.sender.transfer(Balance);
        Balance = 0;
        if(newLimit != 0) {
            Limit = newLimit;
        }
    }

    function checkOwner() public responsible returns(bool) {
        tvm.accept();
        return Owners[msg.sender];
    }

    function getBalance() public returns(uint128) {
        tvm.accept();
        return address(this).balance;
    }

}