import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
  categories = ['shoes', 'sports']



  onShowCategory(category: string){
    this.showCategory.emit(category);
  }
}
