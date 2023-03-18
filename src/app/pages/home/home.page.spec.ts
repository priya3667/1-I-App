import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router:Router

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router=TestBed.get(Router);
  }));

  it('should go to series on see all', () => {
    spyOn(router, 'navigate');
    component.gotoseries();
    expect(router.navigate).toHaveBeenCalledWith(['series']);
  });

  it('should go to seriesss on add button', () => {
    spyOn(router, 'navigate');
    component.gotoseries();
    expect(router.navigate).toHaveBeenCalledWith(['series']);
  });
});
