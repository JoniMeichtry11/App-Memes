import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirMemesComponent } from './subir-memes.component';

describe('SubirMemesComponent', () => {
  let component: SubirMemesComponent;
  let fixture: ComponentFixture<SubirMemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirMemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirMemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
