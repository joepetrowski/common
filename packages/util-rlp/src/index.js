// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

const decode = require('./decode');
const encode = require('./encode');

/**
  @summary Utility methods to encode and decode [Ethereum RLP](https://github.com/ethereum/wiki/wiki/RLP). Adapted from the [EthereumJS implementation](https://github.com/ethereumjs/rlp/blob/0ce09db81fc303fcee593f7cc094ba44015f9b92/index.js)
*/
module.exports = {
  decode,
  encode
};