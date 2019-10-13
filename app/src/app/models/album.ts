export class Album {
    userId : number;
    id: number;
    title: string;
}

export class ListAlbum {
    result: Album[];

    constructor(){
        this.result = [] 
    }
}