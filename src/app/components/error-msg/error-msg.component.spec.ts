import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ErrorMsgComponent } from './error-msg.component';

describe('ErrorMsgComponent', () => {
  let component: ErrorMsgComponent;
  let fixture: ComponentFixture<ErrorMsgComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMsgComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMsgComponent);
    component = fixture.componentInstance;
  }));

  it('should show error message on field touched and error present' , () => {

    component.field=new FormGroup({anyField:new FormControl});

    component.field.markAsTouched();
    component.field.setErrors({anyError : true});
    component.error="anyError"

    expect(component.shouldShowComponent()).toBeTruthy();
  })

  it('should hide error message on field not touched ' , () => {

    component.field=new FormGroup({anyField:new FormControl});

    component.field.setErrors({anyError : true});
    component.error="anyError"

    expect(component.shouldShowComponent()).toBeFalsy();
  })

  it('should hide error message on field touched, but no errors' , () => {

    component.field=new FormGroup({anyField:new FormControl});

    component.field.markAsTouched();
    component.error="anyError"

    expect(component.shouldShowComponent()).toBeFalsy();
  })

  it('should hide error message on field touched and has error, but it is different error' , () => {

    component.field=new FormGroup({anyField:new FormControl});

    component.field.markAsTouched();
    component.field.setErrors({anyError : true});
    component.error="anotherError"

    expect(component.shouldShowComponent()).toBeFalsy();
  })



 
  
});
