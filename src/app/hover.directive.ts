import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
 selector: '[myHoverDirective]' 

})
export class HoverDirective {
   
     constructor(private el: ElementRef) { }
    @HostListener('mouseenter') onMouseEnter() {
    this.highlight('75px','0px');
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('20px','-55px');
  }
 
  private highlight(width: string,right:string) {
    this.el.nativeElement.style.width=width;
    this.el.nativeElement.style.right=right;
  }
}