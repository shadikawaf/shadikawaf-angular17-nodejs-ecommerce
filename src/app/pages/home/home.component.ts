import { Component } from '@angular/core';
import { NotificationService } from '../../Services/NotificationService.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  cols = 3;
  rowHeight = 335;
  category: string | undefined;

  constructor(private notificationService: NotificationService) {}

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = colsNum === 1 ? 400 : 335;
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;

    // Emit a notification when the category changes
    this.notificationService.sendNotification(`Category changed to: ${newCategory}`);
  }
}
