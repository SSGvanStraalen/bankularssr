import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from '../auth/auth.service';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  closeResult: string;
  public username: string;
  public password: string;
  public message: string;


  constructor(private modalService: NgbModal
    , private authService: AuthService
  ) {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.username = '';
      this.password = '';
      this.message = '';

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  checkPass() {
    if (this.username === this.password) {
      console.log('You shall pass');
      this.modalService.dismissAll('close')
      this.authService.login(this.username, this.password)
        .pipe(first())
        .subscribe(
          data => {
            console.log('data',data);
          },
          error => {
            console.log('error',error);
          });
    } else {
      this.message = 'Nope you shall not pass'
      console.log('you shall not pass')
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit() {
  }

}
