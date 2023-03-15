import { Lib } from "./src/lib";

const lib = new Lib();

type People = {
  name: string;
  age: number;
  address: string;
};

const player: People = {
    name: "lucas",
    age: 32,
    address: "USA"
}

lib.log(await lib.exists("./aasdasd/example.txt"));
lib.log(await lib.writeFile("./example.json", JSON.stringify(player)));

