import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoodlesListItemComponent } from './noodles-list-item.component';

describe('NoodlesListItemComponent', () => {
  let component: NoodlesListItemComponent;
  let fixture: ComponentFixture<NoodlesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoodlesListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoodlesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
