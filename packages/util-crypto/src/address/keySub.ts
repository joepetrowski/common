// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { bnToU8a, u8aConcat } from '@polkadot/util';

import blake2AsU8a from '../blake2/asU8a';
import decodeAddress from './decode';

export default function createKeySub (who: Uint8Array | string, index: BigInt | BN | number): Uint8Array {
  return blake2AsU8a(
    u8aConcat(
      'modlpy/utilisuba',
      decodeAddress(who),
      bnToU8a(index, { bitLength: 16, isLe: true })
    )
  );
}
