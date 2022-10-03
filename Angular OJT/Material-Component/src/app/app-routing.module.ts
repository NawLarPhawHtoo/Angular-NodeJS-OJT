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
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TreeComponent } from './tree/tree.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/autocomplete',
    pathMatch: 'full',
  },
  {
    path: 'autocomplete',
    component: AutocompleteComponent,
  },
  {
    path: 'badge',
    component: BadgeComponent,
  },
  {
    path: 'bottom-sheet',
    component: BottomSheetComponent,
  },
  {
    path: 'button',
    component: ButtonComponent,
  },
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: 'checkbox',
    component: CheckboxComponent,
  },
  {
    path: 'chips-autocomplete',
    component: ChipsAutocompleteComponent,
  },
  {
    path: 'datepicker',
    component: DatepickerComponent,
  },
  {
    path: 'dialog',
    component: DialogComponent,
  },
  {
    path: 'expansion-panel',
    component: ExpansionPanelComponent,
  },
  {
    path: 'form-field',
    component: FormFieldComponent,
  },
  {
    path: 'grid-list',
    component: GridListComponent,
  },
  {
    path: 'paginator',
    component: PaginatorComponent,
  },
  {
    path: 'progress-bar',
    component: ProgressBarComponent,
  },
  {
    path: 'slide-toggle',
    component: SlideToggleComponent,
  },
  {
    path: 'tabs',
    component: TabsComponent,
  },
  {
    path: 'toolbar',
    component: ToolbarComponent,
  },
  {
    path: 'tree',
    component: TreeComponent,
  },
  {
    path: 'stepper',
    component: StepperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
