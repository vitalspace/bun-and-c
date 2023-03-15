import { dlopen, suffix, FFIType } from "bun:ffi";

const path: string = `./lib.${suffix}`;
const location: URL = new URL(path, import.meta.url);

const { symbols } = dlopen(location.pathname, {
  lg: {
    args: [FFIType.ptr],
  },
  exists: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },

  writeFile: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.int,
  },
});

export { symbols };
