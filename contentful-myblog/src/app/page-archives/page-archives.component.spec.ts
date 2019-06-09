import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArchivesComponent } from './page-archives.component';

describe('PageArchivesComponent', () => {
  let component: PageArchivesComponent;
  let fixture: ComponentFixture<PageArchivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageArchivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
