import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  @Input() post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onAddLoveIt(){
    this.postService.addLoveIt( this.post.id );
  }

  onRemoveLoveIt(){
    this.postService.removeLoveIt( this.post.id );
  }

  onRemove(){
    this.postService.removePost( this.post.id );
  }

}
