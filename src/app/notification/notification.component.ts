import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NotificationService } from '../Services/NotificationService.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {
  notifications$: Observable<string>;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private notificationService: NotificationService) {
    this.notifications$ = this.notificationService.getNotifications().pipe(
      takeUntil(this.destroy$) // Automatically unsubscribe when the component is destroyed
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete(); // Clean up the Subject
  }
}
