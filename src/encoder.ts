const utf8e: TextEncoder = new TextEncoder();
const encode: (data: string | number) => Uint8Array = (data: string | number) => utf8e.encode(data + "\0");
export {
    encode
}