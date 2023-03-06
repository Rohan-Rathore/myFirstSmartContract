// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Storage {
    uint256 positivenumber;
    function store(uint256 inputnumber) public {
        positivenumber = inputnumber;
    }
    function readdata() public view returns (uint256){
        return positivenumber;
    }
}
