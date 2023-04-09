import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  training = [
    {
      icon: 'pi-chart-bar',
      title: 'Formations pour entreprise',
      description:
        'La mise à niveau des agents est un facteur de production capital pour une entreprise.',
    },
    {
      icon: 'pi-star-fill',
      title: 'Formations académiques',
      description:
        'Nos étudiants bénéficie d’une bonne formation, enfin avoir un niveau master après 5 ans.',
    },
    {
      icon: 'pi-users',
      title: 'Orientations Technologique',
      description:
        'Une équipe des professionnels et nos ateliers sont équipés disponibles pour vos projets',
    },
  ];

  courses = [
    {
      title: 'Informatique de gestion',
      image: 'sec5-1.jpg',
      price: 550,
      level: 'Licence (3ans)',
    },
    {
      title: 'Gestion financière',
      image: 'sec5-2.jpg',
      price: 500,
      level: 'Licence (3ans)',
    },
    {
      title: 'Douane et accises',
      image: 'sec5-3.jpg',
      price: 500,
      level: 'Licence (3ans)',
    },
    {
      title: 'Technique de maintenance',
      image: 'sec5-4.jpg',
      price: 580,
      level: 'Licence (3ans)',
    },
    {
      title: 'Communication numérique',
      image: 'sec5-5.jpg',
      price: 580,
      level: 'Licence (3ans)',
    },
    {
      title: 'Commerce extérieur',
      image: 'sec5-6.jpg',
      price: 700,
      level: 'Master (2ans)',
    },
    {
      title: 'Fiscalité',
      image: 'sec5-7.jpg',
      price: 700,
      level: 'Master (2ans)',
    },
    {
      title: 'Intelligence artificielle',
      image: 'sec5-8.jpg',
      price: 700,
      level: 'Master (2ans)',
    },
    {
      title: 'Génie logiciel',
      image: 'sec5-9.jpg',
      price: 700,
      level: 'Master (2ans)',
    },
    {
      title: 'Télécommunication et administration réseau',
      image: 'sec5-10.jpg',
      price: 700,
      level: 'Master (2ans)',
    },
    {
      title: `Système d'information et administration des bases des données`,
      image: 'sec5-11.jpg',
      price: 700,
      level: 'Master (2ans)',
    },
  ];

  addresses = [
    {
      location: 'ISIPA SHAUMBA',
      address1: 'N° 7518',
      address2: 'Avenue Shaumba',
      address3: 'Kinshasa / Gombe',
    },
    {
      location: 'ISIPA KITEGA',
      address1: 'N° 216',
      address2: 'Avenue Kitega',
      address3: 'Kinshasa / Lingwala',
    },
    {
      location: 'ISIPA KIKWIT',
      address1: 'N° 238',
      address2: 'Avenue Kikwit',
      address3: 'Kinshasa / Lingwala',
    },
    {
      location: 'ISIPA MATETE',
      address1: 'N° 04',
      address2: 'Quartier Kunda',
      address3: 'Kinshasa / Matete',
    },
    {
      location: 'ISIPA MATADI',
      address1: 'N° 04',
      address2: 'Avenue MArtin Ekada',
      address3: 'Kongo central / Matadi',
    },
  ];

  images = [
    {
      location: 'ISIPA Kitega',
      imageUrl: 'kitega.jpg',
    },
    {
      location: 'ISIPA Matete',
      imageUrl: 'matete.jpg',
    },
    {
      location: 'ISIPA Mushi',
      imageUrl: 'mushi.jpg',
    },
    {
      location: 'ISIPA Shaumba',
      imageUrl: 'shaumba.jpg',
    },
  ];
}
