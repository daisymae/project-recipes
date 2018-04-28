import { Directive, HostBinding, OnInit, HostListener, ElementRef } from '@angular/core';

@Directive({
  // attribute selector
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  // want to attach to the 'open' CSS class
  @HostBinding('class.open') isOpen = false;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('click') toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;
    // this.elRef.nativeElement.style.open = this.isOpen;
  }
}
