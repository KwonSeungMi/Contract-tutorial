// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

//1. Initializable : constructor 는 로직 컨트랙트에서 사용할 수 없다. 따라서 Initializable를 상속받아서 그 안에 initializer modifier를 사용한다.
//2. UUPSUpgradeable : UUPS 프록시는 프록시 컨트랙트가 아닌 로직 컨트랙트에 구현되어야 한다. 따라서 UUPSUpgradeable를 상속받는다
//3. OwnableUpgradeable : 계약을 업그레이드 할 수 있는 사람을 정의하는 권한 부여 기능도 있어야 한다. 따라서 OwnableUpgradeable를 상속받는다.
contract MyTokenV2 is Initializable, ERC20Upgradeable, UUPSUpgradeable, OwnableUpgradeable {
    constructor() {
        //empty
    }

    /**
    // Initializable 에 포함되어있는 initializer modifier를 사용
     modifier initializer() {
        bool isTopLevelCall = !_initializing;
        require(
            (isTopLevelCall && _initialized < 1) || (!AddressUpgradeable.isContract(address(this)) && _initialized == 1),
            "Initializable: contract is already initialized"
        );
        _initialized = 1;
        if (isTopLevelCall) {
            _initializing = true;
        }
        _;
        if (isTopLevelCall) {
            _initializing = false;
            emit Initialized(1);
        }
    }
     */
    function initialize(string memory name, string memory symbol) initializer public {
        __ERC20_init('CBDC token', 'CBDC');
        __Ownable_init();
        __UUPSUpgradeable_init();
            
    }

    /**
    modifier onlyOwner() {
        _checkOwner();
        _;
    }
    function _checkOwner() internal view virtual {
        require(owner() == _msgSender(), "Ownable: caller is not the owner");
    }
    
     */

    // onlyOwner modifier 를 사용하여 owner만 upgrade 할 수 있도록 구현
    function _authorizeUpgrade(address) internal override onlyOwner {}


    //upgrade test를 위한 로직
    uint256 public a;

    function getA() public view returns(uint256) {
        return a + 5;
    }

    function getA_increse() public view returns(uint256) {
        return a + 10;
    }

}