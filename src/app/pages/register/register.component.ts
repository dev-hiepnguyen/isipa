import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegisterInfo } from 'src/app/models/register-info.model';
import { RegisterInfoService } from 'src/app/services/register-info.service';
import { countries } from 'src/db';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  countries: string[] = [];
  maxDate = new Date();
  minYear = 1960;
  maxYear = this.maxDate.getFullYear();
  form = this.fb.group({
    lastName: ['', Validators.required],
    firstName: ['', Validators.required],
    placeOfBirth: ['', Validators.required],
    dateOfBirth: [null, Validators.required],
    gender: [null, Validators.required],
    maritalStatus: [null, Validators.required],
    nationality: [null, Validators.required],
    nameOfFather: ['', Validators.required],
    nameOfMother: ['', Validators.required],
    provinceOfParents: ['', Validators.required],
    districtOfParents: ['', Validators.required],
    territory: ['', Validators.required],
    address: ['', Validators.required],
    telephone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    nameOfSecondarySchool: ['', Validators.required],
    provinceOfSecondarySchool: ['', Validators.required],
    territoryOfSecondarySchool: ['', Validators.required],
    section: ['', Validators.required],
    centerName: ['', Validators.required],
    yearOfDiploma: [null, Validators.required],
    percentOfDiploma: [null, Validators.required],
    scoreOfDiploma: [null, Validators.required],
    activity: ['', Validators.required],
    progress: this.fb.array([]),
    choice: ['', Validators.required],
    promotion: ['', Validators.required],
    vacation: ['', Validators.required],
    location: ['', Validators.required],
  });

  registerInfo!: IRegisterInfo;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerInfoService: RegisterInfoService,
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.countries = countries;
  }

  get progress() {
    return this.form.controls['progress'] as FormArray;
  }

  addProgress() {
    const p = this.fb.group({
      academicYear: [null, Validators.required],
      title: ['', Validators.required],
      establishment: ['', Validators.required],
      year: [null, Validators.required],
      mention: ['', Validators.required],
    });
    this.progress.push(p);
  }

  deleteProgress(index: number) {
    this.progress.removeAt(index);
  }

  async onSubmit() {
    try {
      await this.db.collection('registerInfo').add({
        ...this.form.value,
      });
      this.registerInfoService.setRegisterInfo(this.form.value);
      this.router.navigateByUrl('/review');
    } catch (error) {
      console.error(error);
      return;
    }
  }
}
