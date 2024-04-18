import { Directive, ElementRef, Host, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective {
  @Input('clickColor') color!:string
  @HostBinding('style.color') colorText='green' 
  @HostBinding('attr.data-shouldColor') shouldColor=true
  @HostListener('mouseenter') textHovered(){
    this.element.nativeElement.style.backgroundColor='Aqua'
  }
  @HostListener('mouseleave') textUndo(){
    this.element.nativeElement.style.backgroundColor='transparent'
  }
  @HostListener('click') textClicked(){
    this.element.nativeElement.style.backgroundColor=this.color
  }
  constructor(private element:ElementRef) { 

  }

}
