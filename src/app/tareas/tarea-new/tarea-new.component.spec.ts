import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaNewComponent } from './tarea-new.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('TareaNewComponent', () => {
  let component: TareaNewComponent;
  let fixture: ComponentFixture<TareaNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaNewComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
