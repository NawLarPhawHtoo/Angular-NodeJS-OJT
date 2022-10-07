import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerRoutingModule } from './owner-routing/owner-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table' ;
import { MatPaginatorModule } from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { OwnerDataComponent } from './owner-details/owner-data/owner-data.component';
import { AccountDataComponent } from './owner-details/account-data/account-data.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { OwnerCreateComponent } from './owner-create/owner-create.component';
import{ MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    OwnerListComponent,
    OwnerDetailsComponent,
    OwnerDataComponent,
    AccountDataComponent,
    OwnerCreateComponent,
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatInputModule,
    MatSortModule,
    MatSelectModule,
    MatCardModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule

  ]
})
export class OwnerModule { }
