#!/usr/bin/env node

import { scoreInput } from '@metalblack/bowling-lib';

const args = process.argv.slice(2);

const result = scoreInput(String(args[0]));
console.log(result)
