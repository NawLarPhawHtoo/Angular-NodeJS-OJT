import { Component } from '@angular/core';
import { OwnersService } from './services/owners.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 Owners:any;
 allOwners:number=0;
 pagination:number=1;

 constructor(private ownersService: OwnersService) {}

 ngOnInit() {
  this.fetchOwners();
  console.log(this.fetchOwners());
 }

 fetchOwners() {
  this.ownersService.getOwners(this.pagination).subscribe((res:any)=>{
    this.Owners = res.data;
    this.allOwners=res.total;
    console.log(res.total);
  });
}
renderPage(event:number){
  this.pagination=event;
  this.fetchOwners();
}


}
