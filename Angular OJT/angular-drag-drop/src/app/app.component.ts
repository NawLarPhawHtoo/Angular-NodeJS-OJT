import { Component } from '@angular/core';
import { CdkDragDrop,moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Drag-Drop';

  MoviesList = [
    'The Far Side of the World',
    'Morituri',
    'Napoleon Dynamite',
    'Pulp Fiction',
    'Blade Runner',
    'Cool Hand Luke',
    'Heat',
    'Juice'
  ];
  MoviesWatched = [
  ];
  onDrop(event: CdkDragDrop<string[]>| any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }  
}
