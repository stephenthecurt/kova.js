import { smallifyFromInt } from './smallifyFromInt';
import { bigifyToInt } from './bigifyToInt';
import { pipe } from './pipe';

/**
 * Returns given value to specified decimal accuracy.
 * @param {number} value
 * @param {number} [decimals]
 * @return {number}
 */
export const precise = pipe(bigifyToInt, smallifyFromInt);