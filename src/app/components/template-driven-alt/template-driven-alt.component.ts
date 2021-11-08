import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-alt',
  templateUrl: './template-driven-alt.component.html',
  styleUrls: ['./template-driven-alt.component.css']
})
export class TemplateDrivenAltComponent implements OnInit {

  @ViewChild('form')
  form!: NgForm;

  user: {
    email: string,
    password: String,
    role: string
  }

  constructor() {
    this.user = {
      email: '',
      password: '',
      role: ''
    }
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Creating user...');
    console.log(this.user)
    console.log(this.form.value)

  }

  doSomething(): void {
    console.log('Doing something...')
  }

}
