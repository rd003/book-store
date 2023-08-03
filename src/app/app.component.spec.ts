import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should create an app', () => {
    expect(component).toBeTruthy();
  });

  it('should render the header, content-holder, and footer', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('book-store-header')).toBeTruthy();
    expect(compiled.querySelector('.content-holder')).toBeTruthy();
    expect(compiled.querySelector('book-store-footer')).toBeTruthy();
  });
});
