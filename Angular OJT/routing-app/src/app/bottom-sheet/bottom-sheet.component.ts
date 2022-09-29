import { Component, OnInit } from '@angular/core';
import { MatBottomSheet,MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BottomSheetOverviewExampleSheetComponent } from '../bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';


@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {

  constructor(private _bottomSheet:MatBottomSheet) { }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }

  ngOnInit(): void {
  }

}
