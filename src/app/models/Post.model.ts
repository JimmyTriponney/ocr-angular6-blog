export class Post {

    constructor(
        public id: number,
        public author: string,
        public title: string,
        public content: string,
        public loveIt?: number
    ){}

}