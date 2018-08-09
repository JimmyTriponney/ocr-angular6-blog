import { Post } from "../models/Post.model";
import { Subject } from "rxjs";

export class PostService {

    post: Post[] = [
        new Post( 0, 'Alexandre', 'Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare nunc et porta aliquam. Nam vitae condimentum lorem. Phasellus commodo purus nec dolor venenatis, eu placerat sapien viverra. Integer eget porta lectus. Curabitur tempus nunc ut neque malesuada, molestie ultrices tellus aliquam. Mauris feugiat eros sit amet odio vestibulum tempor. ', 0),
        new Post( 1, 'Maria', 'Pas déçu', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare nunc et porta aliquam. Nam vitae condimentum lorem. Phasellus commodo purus nec dolor venenatis, eu placerat sapien viverra. Integer eget porta lectus. Curabitur tempus nunc ut neque malesuada, molestie ultrices tellus aliquam. Mauris feugiat eros sit amet odio vestibulum tempor. ', 0),
        new Post( 2, 'John', 'Pénitence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare nunc et porta aliquam. Nam vitae condimentum lorem. Phasellus commodo purus nec dolor venenatis, eu placerat sapien viverra. Integer eget porta lectus. Curabitur tempus nunc ut neque malesuada, molestie ultrices tellus aliquam. Mauris feugiat eros sit amet odio vestibulum tempor. ', 0),
        new Post( 3, 'Anna', 'Enfin', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare nunc et porta aliquam. Nam vitae condimentum lorem. Phasellus commodo purus nec dolor venenatis, eu placerat sapien viverra. Integer eget porta lectus. Curabitur tempus nunc ut neque malesuada, molestie ultrices tellus aliquam. Mauris feugiat eros sit amet odio vestibulum tempor. ', 0)
    ];

    postSubject = new Subject<Post[]>();

    emitPost(){
        this.postSubject.next( this.post );
    }

    /* Ajout d'un post */
    addPost(post: Post){
        this.post.push( post );
        this.emitPost();
    }

    /* Suppression d'un post */
    removePost(id: number){
        this.post = this.post.filter( post => post.id !== id );
        this.emitPost();
    }

    /* Ajout d'un j'aime */
    addLoveIt(id: number){
        let index = this.post.findIndex( post => post.id === id );
        this.post[index].loveIt++;
        this.emitPost();
    }

    /* Suppression d'un j'aime */
    removeLoveIt(id: number){
        let index = this.post.findIndex( post => post.id === id );
        this.post[index].loveIt--;
        this.emitPost();
    }

    /* Générer un nouvel id */
    generateId(id?: number): number{
        return this.post[this.post.length-1].id++;
    }

}