import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegisterInfo } from 'src/app/models/register-info.model';
import { RegisterInfoService } from 'src/app/services/register-info.service';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  courseCode = 'KIN\\1281';
  courseYear = '2022 2023';
  registerInfo$!: Observable<IRegisterInfo | null>;

  constructor(private registerInfoService: RegisterInfoService) {}
  firstName!: string[];
  lastName!: string[];
  yearOfDiploma!: string[];
  percentOfDiploma!: string[];
  scoreOfDiploma!: string[];
  registerInfo!: IRegisterInfo;
  today = new Date();

  ngOnInit(): void {
    this.registerInfoService.registerInfo$.subscribe((res) => {
      // MOCK
      // this.registerInfo = {
      //   activity: 'jlkdskjfasdf',
      //   address: 'fasdfldjjk',
      //   centerName: 'sdjhfsdkj',
      //   choice: 'dsjklfjalkjdfkj',
      //   dateOfBirth: new Date(),
      //   districtOfParents: 'sdjkfhjsdf',
      //   firstName: 'sdmhfjkj',
      //   gender: 1,
      //   lastName: 'sdfkjskjf',
      //   location: 'jkshdkfhjjskfdjk',
      //   maritalStatus: 'jbvdfjnk',
      //   nameOfFather: 'jskdnvjkdfn',
      //   nameOfMother: 'joiwe',
      //   nameOfSecondarySchool: 'nvjnkfmads',
      //   nationality: 'knbvbndfkj',
      //   percentOfDiploma: 1,
      //   placeOfBirth: 'klasdjflkjj',
      //   progress: [
      //     {
      //       academicYear: 2022,
      //       establishment: 'sdjfjnsdkj',
      //       mention: 'sdknfkfsd',
      //       title: 'fsdnkfk',
      //       year: '2020-2023',
      //     },
      //     {
      //       academicYear: 2022,
      //       establishment: 'sdjfjnsdkj',
      //       mention: 'sdknfkfsd',
      //       title: 'fsdnkfk',
      //       year: '2020-2023',
      //     },
      //     {
      //       academicYear: 2022,
      //       establishment: 'sdjfjnsdkj',
      //       mention: 'sdknfkfsd',
      //       title: 'fsdnkfk',
      //       year: '2020-2023',
      //     },
      //     {
      //       academicYear: 2022,
      //       establishment: 'sdjfjnsdkj',
      //       mention: 'sdknfkfsd',
      //       title: 'fsdnkfk',
      //       year: '2020-2023',
      //     },
      //     {
      //       academicYear: 2022,
      //       establishment: 'sdjfjnsdkj',
      //       mention: 'sdknfkfsd',
      //       title: 'fsdnkfk',
      //       year: '2020-2023',
      //     },
      //     {
      //       academicYear: 2022,
      //       establishment: 'sdjfjnsdkj',
      //       mention: 'sdknfkfsd',
      //       title: 'fsdnkfk',
      //       year: '2020-2023',
      //     },
      //     {
      //       academicYear: 2022,
      //       establishment: 'sdjfjnsdkj',
      //       mention: 'sdknfkfsd',
      //       title: 'fsdnkfk',
      //       year: '2020-2023',
      //     },
      //     {
      //       academicYear: 2022,
      //       establishment: 'sdjfjnsdkj',
      //       mention: 'sdknfkfsd',
      //       title: 'fsdnkfk',
      //       year: '2020-2023',
      //     },
      //   ],
      //   promotion: 'sdknfkkdmf',
      //   provinceOfParents: 'nvdkvnkdfm',
      //   provinceOfSecondarySchool: 'sdnkfns',
      //   scoreOfDiploma: 'sdjfnknvf',
      //   section: 'akkewjwkwe',
      //   telephone: 'cxvknksdamf',
      //   territory: 'sdnfnvnc',
      //   territoryOfSecondarySchool: 'ewjkfnksdf',
      //   vacation: 'nvknjkadfdf',
      //   yearOfDiploma: 2023,
      // };
      this.registerInfo = res as IRegisterInfo;
      if (this.registerInfo) {
        this.firstName = this.registerInfo.firstName.split('');
        this.lastName = this.registerInfo.lastName.split('');
        const delta = this.firstName.length - this.lastName.length;
        if (delta > 0) {
          for (let i = 0; i < delta; i++) {
            this.lastName.push(' ');
          }
        } else if (delta < 0) {
          for (let i = 0; i < -delta; i++) {
            this.firstName.push(' ');
          }
        }
        this.yearOfDiploma = this.registerInfo.yearOfDiploma
          .toString()
          .split('');
        this.percentOfDiploma = this.registerInfo.percentOfDiploma
          .toString()
          .padStart(2, '0')
          .split('');
        this.scoreOfDiploma = this.registerInfo.scoreOfDiploma.split('');
      }
    });
  }

  exportPDF() {
    const el = document.getElementById('register-form-review') as HTMLElement;
    const ratio = el.offsetWidth / 170;
    if (el.offsetHeight / ratio < 257) {
      html2canvas(el).then((canvas) => {
        const pdf = new jsPDF();
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        pdf.addImage(imgData, 'JPEG', 20, 20, 170, canvas.height / ratio);
        pdf.save('register-form.pdf');
      });
    } else {
      const el1 = document.getElementById('page-1') as HTMLElement;
      const el2 = document.getElementById('page-2') as HTMLElement;
      Promise.all([html2canvas(el1), html2canvas(el2)]).then((values) => {
        const pdf = new jsPDF();
        const imgData1 = values[0].toDataURL('image/jpeg', 1.0);
        const imgData2 = values[1].toDataURL('image/jpeg', 1.0);
        pdf.addImage(imgData1, 'JPEG', 20, 20, 170, values[0].height / ratio);
        pdf.addPage();
        pdf.addImage(imgData2, 'JPEG', 20, 20, 170, values[1].height / ratio);
        pdf.save('register-form.pdf');
      });
    }
  }
}
