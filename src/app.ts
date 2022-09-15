function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `${String(key)} are ${obj[key]}`;
}

const torkari = {
  masala: ["holud, morich, peyaj"],
  sabji: ["alu", "potol"],
  "non-veg": ["murgi", "dim"],
  $_$: 'prochur taka'
};

let extractedValue = extractAndConvert(torkari, 'masala')

console.log(extractedValue);


