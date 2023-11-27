
import { Component } from '@angular/core';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faGem } from '@fortawesome/free-regular-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./style/footer.component.scss']
})
export class FooterComponent{
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faGem = faGem;
  faGoogle = faGoogle;
  faShop = faShop;
  faTiktok  = faTiktok;
  faLocationDot = faLocationDot;
}
