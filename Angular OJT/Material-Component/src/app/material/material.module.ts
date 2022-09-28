import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({

imports: [

MatButtonModule,
MatToolbarModule,
MatIconModule,
MatCardModule

],

exports: [

MatButtonModule,
MatToolbarModule,
MatIconModule,
MatCardModule

]

})

export class MaterialModule {}