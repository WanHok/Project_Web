import { Component } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./style/accounts.component.scss']
})
export class AccountsComponent {
  faFacebook = faFacebookF;
  faGooglePlusG = faGooglePlusG;

  isRightPanelActive: boolean = false;
  
  togglePanel() {
    this.isRightPanelActive = !this.isRightPanelActive;
  }
}
