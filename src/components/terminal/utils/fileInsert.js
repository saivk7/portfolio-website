"use strict";
exports.__esModule = true;
var fileUtils_1 = require("./fileUtils");
function getRequiredArray(location, arr, innerLevel) {
    if (location === '/') {
        return arr;
    }
    if (arr === null) {
        console.log("\n\n ******* RETURNING  NULL  ******* \n\n");
        return null;
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].getType() === 'directory') {
            console.log("current:", (arr[i].getLocation() + ("" + ((innerLevel) >= 1 ? '/' : "")) + ("" + arr[i].getName())), " || required: ", location);
            console.log("match?:", (arr[i].getLocation() + ("" + ((innerLevel) >= 1 ? '/' : "")) + arr[i].getName()) === (location));
            /*
            const x = arr[i].getLocation() + `${ (innerLevel)>=1 ? '/' : "" }` +arr[i].getName();

            const y = location;
            console.log("x:",x,"||  y :",y, " compare " , (x===y));
            */
            if ((arr[i].getLocation() + ("" + ((innerLevel) >= 1 ? '/' : "")) + ("" + arr[i].getName())) === location) {
                console.log("FOUND ARRAY", arr[i]);
                console.log("FOUND ARRAY GET FILES", arr[i].getFiles());
                var retFile = arr[i].getFiles();
                return retFile;
            }
            else {
                var getArr = getRequiredArray(location, arr[i].getFiles(), innerLevel + 1);
                console.log("INTERMEDIATE ARRAY :", getArr);
                if (getArr) {
                    return getArr;
                }
            }
        }
    }
}
function addFile(file, fileArr) {
    //console.log("main array before", fileArr);
    console.log('getLocation', file.getLocation());
    console.log(" \n \n \n File to be inserted", fileUtils_1.RecursiveFindDirectory(file.getLocation(), fileArr));
    var toInsert = getRequiredArray(file.getLocation(), fileArr, 0);
    try {
        console.log("\n \n ***!!! RETURNED ARRAY : ", getRequiredArray(file.getLocation(), fileArr, 0));
        console.log();
        toInsert.push(file);
    }
    catch (e) {
        console.log(e);
    }
    //console.log("AFTER PUSH \n", toInsert);
    //console.log("Main array" , fileArr);
    return fileArr;
}
exports["default"] = addFile;
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
