/* global global */
const { TextEncoder, TextDecoder } = require('util') // eslint-disable-line no-undef

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder