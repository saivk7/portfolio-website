import { File } from '../File';
import { RecursiveFindDirectory } from './fileUtils';

// Returns the array that needs modification 
// called by insert of delete file functions
export function getRequiredArray (location:string,arr:File[],innerLevel:number):any {
    if(location === '/'){
        return arr;
    }
    
    if(arr===null){
        console.log("\n\n ******* RETURNING  NULL  ******* \n\n")
        return null;
    }

    for(var i=0;i<arr.length;i++){ 

        if(arr[i].getType()==='directory'){

            
            console.log("current:",(arr[i].getLocation()+ `${ (innerLevel)>=1 ? '/' : "" }` + `${arr[i].getName()}`) , " || required: " ,location)
            console.log("match?:", (arr[i].getLocation() + `${ (innerLevel)>=1 ? '/' : "" }`+ arr[i].getName()) === (location));
            
            /*
            const x = arr[i].getLocation() + `${ (innerLevel)>=1 ? '/' : "" }` +arr[i].getName();

            const y = location;
            console.log("x:",x,"||  y :",y, " compare " , (x===y));
            */

            if( (arr[i].getLocation() + `${ (innerLevel)>=1 ? '/' : "" }` + `${arr[i].getName()}`) === location){

                console.log("FOUND ARRAY",arr[i]);
                console.log("FOUND ARRAY GET FILES", arr[i].getFiles() );
                const retFile: File[] = arr[i].getFiles()!;
                return retFile;

            }
            else{

                const getArr: File[] =  getRequiredArray(location,arr[i].getFiles()!,innerLevel+1);
                console.log("INTERMEDIATE ARRAY :", getArr);
                if(getArr){
                    return getArr;
                }
                
            }
        }
    }

}
export function deleteFile(fileName:string,location:string,fileArr:File[]): File[] {
    
    var toDelete : File[] = getRequiredArray(location,fileArr,0);
    console.log(" ***** toDeleted Array: \n\n", toDelete);
    try{

        for(var i =0 ; i< toDelete.length ; i++){
            if(toDelete[i].getName()===fileName){
                toDelete.splice(i,1);
            }
        }

    }
    catch(e){
        console.log(e);
    }
    console.log(" ***** deleted Array: \n\n", toDelete);
    return toDelete;

}

export function addFile( file:File,fileArr:File[] ) : File[] {
    /* console.log("main array before", fileArr);*/
    console.log('getLocation', file.getLocation());
    
    var toInsert : File[] = getRequiredArray(file.getLocation(),fileArr,0);

    try{

        console.log("\n \n ***!!! RETURNED ARRAY  : " ,toInsert);
        toInsert.push(file);

    }
    catch(e){
        console.log(e);
    }
    
    //console.log("AFTER PUSH \n", toInsert);
    console.log("Main array" , fileArr);
    return fileArr;
}


export function printDir(arr: File[],type:'file'|'directory') {
    const retarr = [];
    for(var i=0; i<arr.length; i++){
        if( arr[i].getType() === type){
            retarr.push(arr[i].getName())
        }
    }
    return retarr;
    
}


//console.log("ADD FILE",addFile(animalFile,homeArray));
/* 

if( fileArr[i].getType()==='directory' ){

            console.log("CHECKING THE LOC MATCH:",fileArr[i].getLocation() +`${fileArr[i].getName()}`, 'and ', file.getLocation() , fileArr[i].getLocation() +`${fileArr[i].getName()}` === file.getLocation());

            if( fileArr[i].getLocation() +`${fileArr[i].getName()}` === file.getLocation()){

                if(fileArr[i].getFiles()){
                    console.log("PUSHING TO DIR ", fileArr[i].getName());
                    console.log(" \n I'M HERE : " , fileArr[i].getFiles()); 
                    fileArr[i].getFiles()!.push(file);
                    console.log(" \n \n  AFTER PUSH",fileArr[i].getFiles());
                    console.log("\n\n the  new  return home",homeArray)
                    return homeArray;
                }
            }else{
                console.log(" SEARCHING THE DIR ", fileArr[i].getName());
                var newFileArr: File[] = fileArr[i].getFiles()!;
                addFile(file,newFileArr);
            }

        }
        console.log("for loop i= ", i)
    }
    console.log("DONE")
    
    */