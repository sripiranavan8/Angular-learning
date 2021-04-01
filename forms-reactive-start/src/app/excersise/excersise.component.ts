import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-excersise',
  templateUrl: './excersise.component.html',
  styleUrls: ['./excersise.component.css']
})
export class ExcersiseComponent implements OnInit {

  projectFrom: FormGroup;
  constructor() { }

  ngOnInit() {
    this.projectFrom = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, CustomValidators.invalidProjectName], CustomValidators.asyncInvalidProjectName),
      'projectEmail': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Stable')
    });
  }

  onSubmit() {
    console.log(this.projectFrom.value);
  }

}
