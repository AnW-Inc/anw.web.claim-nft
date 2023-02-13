import { REACT_APP_BUILD_MODE } from 'configs/index'

/**
 * It is only possible to require this way.
 * If you edit the path to a template string or split the path into a variable
 * or a function, an error will occur when building.
 */
export const airdropAbi = require('configs/abis/' + REACT_APP_BUILD_MODE + '/airdrop.json')
export const claimNFTAbi = require('configs/abis/' + REACT_APP_BUILD_MODE + '/claimNFT.json')
export const bep20Abi = require('configs/abis/erc20.json')
