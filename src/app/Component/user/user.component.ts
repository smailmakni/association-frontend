import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:User[]=[];
  thePageNumber:number=1;
  thePageSize:number=5;
  theTotalElements:number=0;

  constructor(private userService : UserService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.listUsers();
    });
  }

  listUsers(){
    this.userService.getUserListPaginated(this.thePageNumber-1,
                                          this.thePageSize).subscribe(this.processResult());
  }

  updatePageSize(pageSize : string){
    this.thePageSize=+pageSize;
    this.thePageNumber=1;
    this.listUsers();
  }

  processResult(){
    return(data : any)=>{
      this.users=data._embedded.users;
      this.thePageNumber=data.page.number+1;
      this.thePageSize=data.page.size;
      this.theTotalElements=data.page.totalElements;
    };
  }
}
