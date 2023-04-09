import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  phone = '(+243) 899 729 179';
  email = 'contact@isipa.com';
  socialMedia = [
    {
      item: 'facebook',
      icon: 'pi-facebook',
      link: 'https://www.facebook.com/isipardc/',
    },
    {
      item: 'twitter',
      icon: 'pi-twitter',
      link: 'https://twitter.com/IsipaOfficiell',
    },
    {
      item: 'instagram',
      icon: 'pi-instagram',
      link: 'https://www.instagram.com/isipa_officiel/',
    },
    {
      item: 'youtube',
      icon: 'pi-youtube',
      link: 'https://www.youtube.com/channel/UCde3dOcBYHh_3wu_QIZ4vZg',
    },
  ];
  copyright = '';

  ngOnInit() {
    this.copyright = 'ISIPA ' + new Date().getFullYear();
  }
}
