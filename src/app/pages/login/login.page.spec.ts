import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoginPage } from './login.page';
import { Store, StoreModule } from '@ngrx/store';
import { loadingReducer } from 'src/store/loading/loading.reducers';
import { loginReducer } from 'src/store/login/login.reducers';
import { AppState } from 'src/store/AppState';
import { recoverPassword, recoverPasswordSuccess } from 'src/store/login/login.actions';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;
  let page : any;
  let store:Store<AppState>;
  let toastController :any

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot([]),
  StoreModule.forFeature("loading", loadingReducer),
  StoreModule.forFeature("login", loginReducer),

]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    router = TestBed.get(Router);
    store = TestBed.get(Store);
    toastController = TestBed.get(ToastController);
    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;
  }));

  it('should create a form on init', () => {
    component.ngOnInit();
    expect(component.form).not.toBeUndefined();
})

  it('should go to home page on login', () => {
    spyOn(router, 'navigate');
    component.login()
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  })

  it('should go to register page on register', () => {
    spyOn(router, 'navigate');
    component.register()
    expect(router.navigate).toHaveBeenCalledWith(['register']);
  })

  it('should recover email/password on forget email/password', () => {
    fixture.detectChanges();
    component.form.get('email')?.setValue("valid@gmail.com")
    page.querySelector("#recoveryPasswordButton").click();
    store.select('login').subscribe(loginState => {
      expect(loginState.isRecoveringPassword).toBeTruthy();
    })
  })

  it('should show loading when recovering password', () => {
    fixture.detectChanges();
    store.dispatch(recoverPassword());
    store.dispatch(recoverPasswordSuccess());
    store.select('loading').subscribe(loginState => {
      expect(loginState.isRecoveringPassword).toBeTruthy();
    })

  })

  it('should hide loading and show success when has recovered password', () => {

    spyOn(toastController, 'create');

    fixture.detectChanges();
    store.dispatch(recoverPassword());
    store.dispatch(recoverPasswordSuccess());
    store.select('loading').subscribe(loginState => {
      expect(loginState.show).toBeFalsy();
    })

    expect(toastController.create).toHaveBeenCalledTimes(1);

  })
});
