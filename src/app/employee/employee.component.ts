import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../services/employe.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  users: any
  name:any
  searchText:any
  p:number=1
  constructor(private employee: EmployeService) { }

  ngOnInit(): void {
    this.employee.getEmployee().subscribe((response) => {
      this.users = response
    })
  }
//   search(){
//   if(this.name==""){
//     this.ngOnInit();
//   }else{
//     this.users=this.users.filter((res: { name: string; })=>{
//       return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
//     })
//   }
// }
key:string='id';
reverse:boolean=false;
sort(key:any){
this.key=key;
this.reverse=!this.reverse
}
}
