"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heros = void 0;
// console.log(process.env)
const { SHELL, HOMEBREW_PREFIX, npm_lifecycle_script } = process.env;
// console.table({SHELL, HOMEBREW_PREFIX, npm_lifecycle_script})
exports.heros = ['ironman', 'thor', 'hulk', 'spiderman'];
const [, , , spiderman] = exports.heros;
