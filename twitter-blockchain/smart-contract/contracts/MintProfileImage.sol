// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

/*
ERC721 is a standard for representing ownership of non-fungible tokens, that is, where each token is unique.
ERC721 is a more complex standard than ERC20, with multiple optional extensions, and is split across a number of contracts.

Counters: a simple way to get a counter that can only be incremented or decremented. Very useful for ID generation, counting contract activity, among others.

Ownable
Contract module which provides a basic access control mechanism, where there is an account (an owner) that can be granted exclusive access to specific functions.
This module is used through inheritance. It will make available the modifier onlyOwner, which can be applied to your functions to restrict their use to the owner.

*/

contract ProfileImageNfts is ERC721, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter _tokenIds;
    mapping(uint256 => string) _tokenURIs;
    // Object {1: '')

    struct RenderToken {
        uint256 id;
        string uri;
        string space;
    } // defining our render token with these 3 keys

    constructor() ERC721('ProfileImageNfts', 'PIN') {} //happens as soon as the app runs

    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal {
        _tokenURIs[tokenId] = _tokenURI;
    } // when this function is called it will add to the previous object we created above _tokenURIs

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(_exists(tokenId), 'URI not exist on that ID');
        string memory _RUri = _tokenURIs[tokenId];
        return _RUri;
    } //this function looks through our object and just returns the one we are looking for

    function getAlltoken() public view returns (RenderToken[] memory) {
        uint256 latestId = _tokenIds.current(); //gets the current number of nfts minted with your smart contract
        RenderToken[] memory res = new RenderToken[](latestId); //res is going to be of type RenderToken. array of objects
        for (uint256 i = 0; i <= latestId; i++) {
            if (_exists(i)) {
                string memory uri = tokenURI(i);
                res[i] = RenderToken(i, uri, ' '); // appending to the res array. similar to res.push in javascipt
            }
        }
        return res;
    } //this function returns all the tokens that exist

    function mint(address recipents, string memory _uri)
        public
        returns (uint256)
    {
        uint256 newId = _tokenIds.current();
        _mint(recipents, newId); //built in mint function with solidity
        _setTokenURI(newId, _uri);
        _tokenIds.increment();
        return newId;
    }
}
