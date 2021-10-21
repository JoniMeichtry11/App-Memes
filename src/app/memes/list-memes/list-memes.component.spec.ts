import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMemesComponent } from './list-memes.component';

describe('ListMemesComponent', () => {
  let component: ListMemesComponent;
  let fixture: ComponentFixture<ListMemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
