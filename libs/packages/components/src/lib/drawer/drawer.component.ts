import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { sdsDrawerAnimation } from '../drawer/drawer-animation';

@Component({
  selector: 'sds-drawer',
  templateUrl: 'drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [sdsDrawerAnimation.transformDrawer],
})
export class SdsDrawerComponent {
  /**
  * Allow to insert a customized template for suggestions to use
  */
 @Input() contentTemplate: TemplateRef<any>;

 
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  constructor() {}
}
