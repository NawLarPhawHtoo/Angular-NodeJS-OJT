import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgeComponent } from './badge/badge.component';
import{ BottomSheetComponent} from './bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsAutocompleteComponent } from './chips-autocomplete/chips-autocomplete.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
const routes: Routes = [
  {
    path:'autocomplete', component: AutocompleteComponent,
  },
  {
    path:'badge', component: BadgeComponent,
  },
  {
    path:'bottom-sheet', component: BottomSheetComponent,
  },
  {
    path:'button', component: ButtonComponent,
  },
  {
    path:'checkbox', component: CheckboxComponent,

  },
  {
    path:'chips-autocomplete', component: ChipsAutocompleteComponent,
  },
  {
    path:'datepicker', component: DatepickerComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
