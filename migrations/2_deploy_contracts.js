var Ownable = artifacts.require("./Ownable.sol");
var ZombieFactory = artifacts.require("./ZombieFactory.sol");
var ZombieFeeding = artifacts.require("./zombiefeeding.sol");
var ZombieHelper = artifacts.require("./zombiehelper.sol");

module.exports = function(deployer) {
  deployer.deploy(Ownable);
  deployer.deploy(ZombieFactory);
  deployer.deploy(ZombieFeeding);
  deployer.deploy(ZombieHelper);
};
