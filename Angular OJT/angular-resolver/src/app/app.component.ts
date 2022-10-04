import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
	<h1>Angular Resolver Example</h1>
		<nav ngClass = "parent-menu">
			<ul>
			<li><a routerLink="/country/countryList" routerLinkActive="active">Country</a></li>
			<li><a routerLink="/person/personList" routerLinkActive="active">Person</a></li>
			</ul> 
		</nav>  
		
		<router-outlet></router-outlet>	
  `
})
export class AppComponent { 
}
    