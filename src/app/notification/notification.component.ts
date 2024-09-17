import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../Services/NotificationService.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notification: string | null = null;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    // Subscribe to the notification service to receive messages
    this.notificationService.getNotifications().subscribe(message => {
      this.notification = message;

      // Clear the notification after 3 seconds
      setTimeout(() => {
        this.notification = null;
      }, 3000);
    });
  }
}
