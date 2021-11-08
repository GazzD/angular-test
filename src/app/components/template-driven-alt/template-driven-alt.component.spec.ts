import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenAltComponent } from './template-driven-alt.component';

describe('TemplateDrivenAltComponent', () => {
  let component: TemplateDrivenAltComponent;
  let fixture: ComponentFixture<TemplateDrivenAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
