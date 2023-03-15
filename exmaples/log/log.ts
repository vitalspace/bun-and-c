// Bun dependencies
import { dlopen, suffix, FFIType, ptr } from "bun:ffi";

// locate binary
const path: string = `./log.${suffix}`;
const location: URL = new URL(path, import.meta.url);

// Map of symbol
const { symbols } = dlopen(location.pathname, {
  lg: {
    args: [FFIType.ptr],
  },
});

// Encode
const utf8e: TextEncoder = new TextEncoder();
const encode: (data: string | number) => Uint8Array = (data: string | number) =>
  utf8e.encode(data + "\0");

// Lib Class
class Lib {
  constructor() {}
  log(message: string | number) {
    symbols.lg(ptr(encode(message)));
  }
}

// instantiate the lib
const lib = new Lib();

// Use
lib.log("Hello World from my own log");

// to run use the console and type: bun run log.ts
