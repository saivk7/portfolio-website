export class File{
    private name :string;
    private type : string;
    private location:string;
    private data ?: string;
    private files ?: File[]| null ;

    constructor(name:string,type:string,location:string, data ?:string, files?:File[] | null ){
        this.name = name;
        this.type = type;
        this.location = location;
        this.data = data;
        if(type==='directory'){
            this.files = files;
        }
    }

    getName(): string{
        return this.name;
    }
    setName(newName:string) {
        this.name = newName;
    }

    getType(): string{
        return this.type;
    }
    
    getLocation():string{
        return this.location;
    }

    getData(): string {

        return this.data || '';
    }

    getFiles(): File[] | null {
        if(this.type==='directory'){
            return this.files || null;
        }        
        return null;
    }

}
