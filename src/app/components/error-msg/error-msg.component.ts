import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss'],
})
export class ErrorMsgComponent  implements OnInit {

  @Input() message!: string;
  @Input() field!: any;
  @Input() error! : string;

  constructor() { }

  ngOnInit() {}

  shouldShowComponent(){

    if(this.field.touched && this.field.errors?.[this.error]){
      return true;
    }
    return false;
  }
}
