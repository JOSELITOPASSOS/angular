import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {

  @Input()
  brightness = '70%';

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2
  ){}

  @HostListener('mouseover')
  darkenOn() {
    // console.log('darkenOn');
    this.render.setStyle(this.elementRef.nativeElement, 'filter', `brightness(${this.brightness})`);
  }

  @HostListener('mouseleave')
  darkenOff(){
    // console.log('darkenOff');
    this.render.setStyle(this.elementRef.nativeElement, 'filter', 'brightness(100%)');
  }
}
