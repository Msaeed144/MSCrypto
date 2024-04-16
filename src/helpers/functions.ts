const fixNum = (number:string) => {
    const newNum:number = parseFloat(number)
    return newNum.toFixed(0)
}
const replaceDigits = (str: string): string => {
    const persianDigits: string[] = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return str.replace(/\d/g, (match) => persianDigits[parseInt(match)]);
  };
  
const minusHandler = (number:string) => {
    if(number.includes("-")){
        
        return number.replace("-", " ") + "-" 
    }else {
        return number 
    }
}
export {fixNum , replaceDigits ,minusHandler}