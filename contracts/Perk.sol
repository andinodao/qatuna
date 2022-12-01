// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Perk is Initializable, OwnableUpgradeable {
    struct Deal {
        address tokenContractAddress;
        address paymentAddress;
        string description;
        uint256 costInContractToken;
        uint256 id;
    }

    uint256 public dealId = 0;

    mapping(address => mapping(address => uint256)) public exchangeRates;
    mapping(uint256 => Deal) public dealDetails;
    mapping(uint256 => address) public tokenLiquidity;
    mapping(address => uint256[]) public dealsByToken;
    mapping(address => uint256[]) public dealsByOwner;

    event PerkCreated(uint256 id, Deal newDeal);

    constructor() initializer {
        __Ownable_init();
    }

    // verifies can make claim by minting an nft for the user
    function claimPerk(uint256 perkId, address paymentTokenAddress) external {
        Deal memory deal = dealDetails[perkId];

        // if token is not same then u will need to pay dealer by exchanging token
        bool isExchangeRequired = paymentTokenAddress !=
            deal.tokenContractAddress;
        if (isExchangeRequired) {
            _payDealProvider(paymentTokenAddress, deal);
        }

        _sendTokens(paymentTokenAddress, deal);
    }

    function _sendTokens(address paymentTokenAddress, Deal memory deal)
        internal
    {
        ERC20 paymentToken = ERC20(paymentTokenAddress);

        paymentToken.approve(address(this), type(uint256).max);

        paymentToken.transferFrom(
            msg.sender,
            deal.paymentAddress,
            deal.costInContractToken
        );
    }

    function _payDealProvider(address paymentTokenAddress, Deal memory deal)
        internal
    {
        uint256 rate = exchangeRates[paymentTokenAddress][
            deal.tokenContractAddress
        ];
        require(rate > 0, "no exchange rate for payment token provided");

        ERC20 tokenOfPayment = ERC20(deal.tokenContractAddress);

        uint256 ourBalance = tokenOfPayment.balanceOf(address(this));

        uint256 amountToSend = deal.costInContractToken * rate;
        require(ourBalance > amountToSend, "you must have a bigger balance");

        tokenOfPayment.transfer(deal.paymentAddress, amountToSend);
    }

    // set an exchange rate
    function setExchangeRate(
        address from, // nupen
        address to, // usdc
        uint256 rate // 3.8
    ) external onlyOwner {
        exchangeRates[from][to] = 1 / rate;
        exchangeRates[to][from] = rate;
    }

    function getExchangeRage(address to, address from)
        public
        view
        returns (uint256 rate)
    {
        return _getExchangeRage(to, from);
    }

    function _getExchangeRage(address to, address from)
        internal
        view
        returns (uint256 rate)
    {
        require(exchangeRates[from][to] > 0, "No exchange rate set");

        return exchangeRates[from][to];
    }

    /**
     * creates a perk that can be redeemed
     * the cost in units is against the token that the deal is looking for
     * for example
     *  tokenContractAddress of USDC is used
     *  cost of 10 is passed in.
     *  in this case we would need 10 usdc for the claim to be valid
     */
    function createPerk(
        address tokenContractAddress,
        string calldata description,
        uint256 cost
    ) external onlyOwner {
        uint256 newId = getDealId();

        require(
            dealDetails[newId].costInContractToken != 0,
            "a deal already exists with this id"
        );

        _checkValidERC20(tokenContractAddress);

        Deal memory newDeal = Deal(
            tokenContractAddress,
            msg.sender,
            description,
            cost,
            newId
        );

        dealDetails[newId] = newDeal;
        dealsByToken[tokenContractAddress].push(newId);
        dealsByOwner[msg.sender].push(newId);

        emit PerkCreated(newId, newDeal);
    }

    function getDealsByOwner(address ownerAddress)
        external
        view
        returns (Deal[] memory)
    {
        return _getDealsByOwner(ownerAddress);
    }

    function _getDealsByOwner(address ownerAddress)
        internal
        view
        returns (Deal[] memory)
    {
        uint256[] memory dealIds = dealsByOwner[ownerAddress];
        Deal[] memory deals = new Deal[](dealIds.length);

        for (uint256 i; i < dealIds.length; ++i) {
            uint256 currentId = dealIds[i];
            Deal memory currentDeal = dealDetails[currentId];
            deals[i] = currentDeal;
        }

        return deals;
    }

    function getDealsByToken(address tokenAddress)
        external
        view
        returns (Deal[] memory)
    {
        return _getDealsByToken(tokenAddress);
    }

    function _getDealsByToken(address tokenAddress)
        internal
        view
        returns (Deal[] memory)
    {
        uint256[] memory dealIds = dealsByToken[tokenAddress];
        Deal[] memory deals = new Deal[](dealIds.length);

        for (uint256 i; i < dealIds.length; ++i) {
            uint256 currentId = dealIds[i];
            Deal memory currentDeal = dealDetails[currentId];
            deals[i] = currentDeal;
        }

        return deals;
    }

    function _checkValidERC20(address tokenContractAddress) internal {
        (bool success, bytes memory result) = tokenContractAddress.call(
            abi.encodeWithSignature("totalSupply(uint256)")
        );

        uint256 totalSupply = abi.decode(result, (uint256));

        require(success && totalSupply > 0, "No an ERC20 token");
    }

    function getDealId() public returns (uint256) {
        return dealId++;
    }
}
