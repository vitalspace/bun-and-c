import { ptr } from "bun:ffi";
import { symbols } from "./ffi";
import { encode } from "./encoder";

class Lib {
  constructor() { }

  log(msg: string | number) {
    symbols.lg(ptr(encode(msg)));
  }

  async exists(path: string) {
    return await symbols.exists(ptr(encode(path)));
  }

  async writeFile(path: string, content?: string) {
    let result: number;
    if (content) {
      result = await symbols.writeFile(ptr(encode(path)), ptr(encode(content)));
    } else {
      result = await symbols.writeFile(ptr(encode(path)));
    }

    if (result === 1) {
      throw new Error(`Error writing the file: "${path}".`)
    } else {
      return "File created successfully.";
    }
  }
}

export { Lib };
