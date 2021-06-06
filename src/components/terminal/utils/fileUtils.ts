import { File } from '../File';

export function printDir(arr: File[],type:'file'|'directory') {
    const retarr = [];
    for(var i=0; i<arr.length; i++){
        if( arr[i].getType() === type){
            retarr.push(arr[i].getName())
        }
    }
    return retarr;
    
}

const retArray: File[] = [];
//to recursively search for a given directory 
//Depriciated: use getRequiredArray from ./fileInsert.ts

export function RecursiveFindDirectory(location:string,arr:File[]): File[] | null{
    if(arr === null) return null;
/*     console.log("!! !! !! searching for directory loc", location);
 */
    for(var i=0; i<arr.length; i++){
        if(arr[i].getLocation() !== location){
            if(arr[i].getType() === 'directory'){
                RecursiveFindDirectory(location, arr[i].getFiles()!);
            }

        }else{

            if(arr[i].getLocation()===location) retArray.push(arr[i]);
        }
    }

    return retArray;

}