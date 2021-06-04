
import { findAllInRenderedTree } from 'react-dom/test-utils';
import { File } from './File';

import { RecursiveFindDirectory } from './utils/fileUtils';

import homeArray from './info';

/* console.log(homeArray);

for(var i=0;i<homeArray.length;i++){
    console.log(homeArray[i]);
} */


export function printDir(arr: File[],type:'file'|'directory') {
    const retarr = [];
    for(var i=0; i<arr.length; i++){
        if( arr[i].getType() === type){
            retarr.push(arr[i].getName())
        }
    }
    return retarr;
    
}

export const retarr: any = [];

function RecursiveFind(location:string,arr:File[]){
    if(arr === null) return;

    for(var i=0; i<arr.length; i++){
        if(arr[i].getLocation() !== location){
            if(arr[i].getType() === 'directory'){
                RecursiveFind(location, arr[i].getFiles()!)
            }

        }else{
            retarr.push(arr[i]);
        }
    }

}



const retArray:File[] = RecursiveFindDirectory("/experience",homeArray)!;
console.log("files : ", retArray);
console.log("files in dir", printDir(retArray,"file"));
console.log("directoies in dir, ", printDir(retArray,"directory"));