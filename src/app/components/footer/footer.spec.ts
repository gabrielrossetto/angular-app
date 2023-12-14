import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
    });

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the copyright text', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.centered').textContent).toContain(' © Random Copyright Text ');
  });

  it('should have a black background color', () => {
    const compiled = fixture.nativeElement;
    const footerElement = compiled.querySelector('.footer');
    expect(getComputedStyle(footerElement).getPropertyValue('background-color')).toBe('rgb(0, 0, 0)');
  });

  it('should have white text color', () => {
    const compiled = fixture.nativeElement;
    const footerElement = compiled.querySelector('.footer');
    expect(getComputedStyle(footerElement).getPropertyValue('color')).toBe('rgb(255, 255, 255)');
  });

  it('should have text aligned to the center', () => {
    const compiled = fixture.nativeElement;
    const centeredElement = compiled.querySelector('.centered');
    expect(getComputedStyle(centeredElement).getPropertyValue('text-align')).toBe('center');
  });

  it('should have padding of 10px', () => {
    const compiled = fixture.nativeElement;
    const footerElement = compiled.querySelector('.footer');
    expect(getComputedStyle(footerElement).getPropertyValue('padding')).toBe('10px');
  });

  it('should have display flex and justify-content center for the .centered class', () => {
    const compiled = fixture.nativeElement;
    const centeredElement = compiled.querySelector('.centered');
    expect(getComputedStyle(centeredElement).getPropertyValue('display')).toBe('flex');
    expect(getComputedStyle(centeredElement).getPropertyValue('justify-content')).toBe('center');
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
