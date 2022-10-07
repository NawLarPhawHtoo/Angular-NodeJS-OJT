import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import { MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    SuccessDialogComponent,
    ErrorDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SuccessDialogComponent,
    ErrorDialogComponent,
    MatDialogModule
  ],
  entryComponents: [
    SuccessDialogComponent,
    ErrorDialogComponent
  ]
})
export class SharedModule { }
