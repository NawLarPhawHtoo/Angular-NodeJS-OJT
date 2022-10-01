import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgeComponent } from './badge/badge.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsAutocompleteComponent } from './chips-autocomplete/chips-autocomplete.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';


const routes: Routes = [
  {
    path:'autocomplete',component: AutocompleteComponent
  },
  {
    path:'badge',component: BadgeComponent
  },
  {
    path:'bottom-sheet',component: BottomSheetComponent
  },
  {
    path:'button',component: ButtonComponent
  },
  {
    path:'card',component: CardComponent
  },
  {
    path:'checkbox',component: CheckboxComponent
  },
  {
    path:'chips-autocomplete',component: ChipsAutocompleteComponent
  },
  {
    path:'datepicker',component: DatepickerComponent
  },
  {
    path:'dialog',component: DialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
