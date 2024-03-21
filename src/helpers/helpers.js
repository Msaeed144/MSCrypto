import NumberToPersianWord from "number_to_persian_word";


const fixNumber = (number) => {
    const numToNum = +number
    const threeNum = numToNum.toLocaleString()
    const faNum = NumberToPersianWord.convertEnToPe(threeNum)
    return faNum
}
const faNum = (number) => {
    return NumberToPersianWord.convertEnToPe(number)
}

const fixMinusNum2 = (number) => {
    const num = +number;
    if (num < 0) {
        return String(number).replace("-", "");
    } else {
        return String(number);
    }
}
export {fixNumber ,faNum  , fixMinusNum2}