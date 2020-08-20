import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { HttpClient} from '@angular/common/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
 // subject;
subject;
topics;
  
  topicid:any;
  subjectid: any;
  levelid:any;
  levels;
  ///selected = null;	
  constructor(private UserserviceService:UserserviceService,
    private router:Router,
    private http:HttpClient) {

  }
    
 
    
  // ngOnInit() {
   
  //   this.UserserviceService.getsujectlist().subscribe((res:any)=>{
     
  //     this.subject=res;
  //     console.log(this.subject);
  //     //sessionStorage['subjectid']=res['subjectid'];
  //     //console.lo;
  //    // sessionStorage.setItem("sunjectid",res.subjectid);
  //    // this.router.navigate['user'];
  //      })
      
  //     }
  
  ngOnInit () {
    
    this.http.get("http://localhost:8081/quiz/quiz/allsubjectlist").subscribe(
      (res)=> {
        console.log(res);
        this.subject = res;
        console.log(this.subject);
      
      }
      
    )
    this.UserserviceService.getlevellist().subscribe((res)=>{
      this.levels=res})
  }
  onSelect(event:any)
  {
    this.subjectid=event;
   sessionStorage['sub']=event;
  
    this.UserserviceService.gettopiclist(event).subscribe(
      (res)=> {
        console.log(res);
        this.topics= res;
        
  })
  
}
onTopic(event)
{
   //alert(sessionStorage['sub']);
   sessionStorage['top']=event;
   //alert(sessionStorage['top']);
}

onQue(event:any)
{
  sessionStorage["lev"]=event;
  this.router.navigate(['question']);
}
//  topic(subjectid)
//   {
//     sessionStorage["subjectid"]=subjectid;
//     this.router.navigate(['topic']);
//   }

}
