import {File} from "./File"
import homeArray from "./info";
import { getRequiredArray  } from "./utils/fileInsert";


export function isValidDirectory(workingDir:string,dirName:string):boolean{
    const dir:string = getDirectoryName(workingDir,dirName);
    const arr: File[] = getRequiredArray(dir,homeArray,0);
    console.log("checking", dir, "from termial utils , isValidDir function: " ,arr)
    if(arr){
        return true;
    }
    return false;
}

//returns a proper dict name 
export function getDirectoryName(workingDir:string, dirName:string):string{
    
    let re = /[^a-zA-Z0-9]*/ //replaces until first char [ex. ./home becomes home]
    
    const replaced = dirName.replace(re,"");

    console.log("replaced is " ,replaced , "working dir " , workingDir);
    
    if(workingDir==='/'){
        console.log("Working dir is /" , replaced);
        return workingDir + replaced;
        
    }else{
        return workingDir+ '/' + replaced;
    }
    
}

export function getChangedDirectoryName(dir:string):string{

    return ""
}


export function getNearestMatch(file:string, workingArr:File[]):File[] | null{

    const retArr: File[]  = workingArr.filter(workingFile=>{
        var str = "^" + file
        var regex = new RegExp(str,"i");

        console.log("checking mactch, ", regex, workingFile.getName() ,workingFile.getName().match(regex));
        if(workingFile.getName().match(regex)) return true;
    })
    return retArr.sort();
    
}


console.log('test')

const str = "./home";

console.log(getDirectoryName("", str));