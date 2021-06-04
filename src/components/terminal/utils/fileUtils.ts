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
export function RecursiveFindDirectory(location:string,arr:File[]): File[] | null{
    if(arr === null) return null;

    for(var i=0; i<arr.length; i++){
        if(arr[i].getLocation() !== location){
            if(arr[i].getType() === 'directory'){
                RecursiveFindDirectory(location, arr[i].getFiles()!);
            }

        }else{
            retArray.push(arr[i]);
        }
    }

    return retArray;

}