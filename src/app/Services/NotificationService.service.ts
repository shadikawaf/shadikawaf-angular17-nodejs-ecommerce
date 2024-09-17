import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class NotificationService {

    // Create a subject to broadcast notifications
    private notificationSubject = new Subject<string>();


    // This method allows components to emit notifications
    sendNotification(message: string) {
        console.log(`Sending notification: ${message}`);
        this.notificationSubject.next(message)
    }

    // This returns an Observable that other components can subscribe to
    getNotifications(): Observable<string> {
        return this.notificationSubject.asObservable();// Observable for components to subscribe
    }


}