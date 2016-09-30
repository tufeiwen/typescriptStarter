import getFilePromise from "./filePromise";

export default function runPromise(){
    //file path need starting from project root directory
    let filePromise=getFilePromise("src/promise/data.json");
    filePromise.then(data=>console.log(data)).catch(error=>console.log(error));
}