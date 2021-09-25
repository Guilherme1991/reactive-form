import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Send } from './placeholder/send';
import { minusculoValidator } from './minusculo.validators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      fullName: ['',[minusculoValidator]],
      transfer: ['', [Validators.required, Validators.minLength(4)]]
    })
  }
  send() {
    const send = this.form.getRawValue() as Send;
    console.log(send);
  }
}
