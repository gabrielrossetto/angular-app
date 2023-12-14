import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private createButtonStatusSubject = new BehaviorSubject<boolean>(true);
  private saveButtonStatusSubject = new BehaviorSubject<boolean>(false);
  private saveButtonClickSubject = new Subject<void>();

  createButtonStatus$: Observable<boolean> = this.createButtonStatusSubject.asObservable();
  saveButtonStatus$: Observable<boolean> = this.saveButtonStatusSubject.asObservable();
  saveButtonClick$ = this.saveButtonClickSubject.asObservable();

  setCreateButtonStatus(status: boolean): void {
    this.createButtonStatusSubject.next(status);
  }

  setSaveButtonStatus(status: boolean): void {
    this.saveButtonStatusSubject.next(status);
  }

  emitSaveButtonClick(): void {
    this.saveButtonClickSubject.next();
  }
}
