export interface IProgress {
  academicYear: number;
  establishment: string;
  mention: string;
  title: string;
  year: string;
}
export interface IRegisterInfo {
  activity: string;
  address: string;
  centerName: string;
  choice: string;
  dateOfBirth: Date;
  districtOfParents: string;
  firstName: string;
  gender: number;
  lastName: string;
  location: string;
  maritalStatus: string;
  nameOfFather: string;
  nameOfMother: string;
  nameOfSecondarySchool: string;
  nationality: string;
  percentOfDiploma: number;
  placeOfBirth: string;
  progress: IProgress[];
  promotion: string;
  provinceOfParents: string;
  provinceOfSecondarySchool: string;
  scoreOfDiploma: string;
  section: string;
  telephone: string;
  territory: string;
  territoryOfSecondarySchool: string;
  vacation: string;
  yearOfDiploma: number;
}
