import * as fs from "fs";
export default function readFilePromisified(fileName) {
    //create a Promise and return it
    return new Promise(
        function (resolve, reject) {
            fs.readFile(fileName, { encoding: 'utf8' },
                //asynch call back
                (error, data) => {
                    if (error) reject(error);
                    resolve(data);
                }//end callback of async function
            )//end async function which is wrapped by promise
        }//end executor
    );
}