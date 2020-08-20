import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { a } from '@angular/core/src/render3';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
top;
level;
questions;
textShow;
que;
  constructor(private UserserviceService:UserserviceService,
    private router:Router) { }

  ngOnInit() {
    
    this.top=sessionStorage['top'];
    alert(this.top);
    this.level=sessionStorage['lev'];
    alert(this.level);
    this.UserserviceService.getquestionlist(this.top,this.level).subscribe((res)=>{
      this.questions=res,
      console.log(this.questions);
    })
  }
  showText(id){
    
    
    this.UserserviceService.getans(id).subscribe((res)=>{
      this.que=res;
      console.log(res);
    })
        this.textShow = true;
   }

}
