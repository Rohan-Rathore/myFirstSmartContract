var Web3 = require('web3');
var Contract = require('web3-eth-contract');

Contract.setProvider(new Web3.providers.HttpProvider('http://localhost:8545'));

var myContract = new Contract(<ABI>,

"0xb3f36458FFc0C686DB4f2FF6002a55bFD85C03C8",
{
from: "0xd84a0607843b28c3f468857f82f784d9ff743bf8",
gasPrice: "20000000000"
}

);

myContract.methods.store("11").send().then(function (output) { console.log(output) });
