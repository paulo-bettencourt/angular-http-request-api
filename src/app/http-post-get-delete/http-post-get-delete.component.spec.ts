import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPostGetDeleteComponent } from './http-post-get-delete.component';

describe('HttpPostGetDeleteComponent', () => {
  let component: HttpPostGetDeleteComponent;
  let fixture: ComponentFixture<HttpPostGetDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpPostGetDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPostGetDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
