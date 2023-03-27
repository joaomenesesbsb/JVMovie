import { Score } from "./score";

/*export type Movie = {
    id: number;
    title: string;
    score: number;
    count: number;
    image: string;
    scores: Score[];
}*/

export class Movie  {
    private id: number;
    private title: string;
    private image: string;
    private scores: Score[];

    constructor(id:number,title:string,image:string, scores :Score[]){
        this.id = id;
        this.title = title;
        this.image = image;
        this.scores = scores;
    }
    get getId():number{
        return this.id;
    }
    get getTitle():string{
        return this.title;
    }
    get getImage():string{
        return this.image;
    }

    get score():number{
        let sum = 0;
        this.scores.forEach(item => sum += item.score);
        return sum/this.count;
    }

    get count():number {
        return this.scores.length ;
    }
    get getScores():Score[]{
        return this.scores;
    }

}


