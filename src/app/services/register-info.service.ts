import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IRegisterInfo } from '../models/register-info.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterInfoService {
  private subject = new BehaviorSubject<IRegisterInfo | null>(null);
  registerInfo$ = this.subject.asObservable();

  constructor() {}

  setRegisterInfo(registerInfo: any) {
    this.subject.next(registerInfo);
  }
}
