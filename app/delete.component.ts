import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from '../comment.service';
import { Comments } from '../Comments';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  pid=0;
  cid=0;
  commenter="";
  comment="";
  data:any;
  cmts:any;
  constructor(private service: CommentService, private router:Router) { }

  ngOnInit(): void {
  }

  

    deleteComments(){
    
      this.service.deleteCommentByCid(this.cid)
      .subscribe( response =>{
        this.cmts=response;
        console.log(response);
      }
      );
      console.log(this.cmts);
    }
  


}
