import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CvService } from './../../services/cv.service';
import { User } from './../../utilities/models/user.model';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.scss'],
})
export class AddCvComponent {
  constructor(private _cvService: CvService, private _router: Router) {}
  onSubmit(arg: NgForm) {
    if (arg.value) {
      const id = this._cvService.userList.length++;
      const formValues: User = {
        id,
        firstName: arg.value.firstName,
        lastName: arg.value.lastName,
        age: arg.value.age,
        email: arg.value.email,
        image: arg.value.picture,
        company: {
          address: {
            address: arg.value.address,
            city: arg.value.address,
          },
          department: arg.value.department,
          name: arg.value.job,
          title: arg.value.companyName,
        },
      };
      console.log(formValues);
      this._cvService.addCv(formValues);
      this._router.navigate(['/']);
    }
  }
}
