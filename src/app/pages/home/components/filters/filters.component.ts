import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
  categories = ['Health & Wellness', 'Food & Dining', 'Sports Media', 'Events & Entertainment']




  onShowCategory(category: string){
    this.showCategory.emit(category);
  }
}
