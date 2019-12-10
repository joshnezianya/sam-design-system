import { Component } from '@angular/core';

@Component({
  selector: 'actions-menu-demo',
  templateUrl: 'actions-menu.component.html'
})
export class ActionsMenuDemoComponent {
  constructor() {}

  menu = {
    trigger: {
      type: 'plain', // plain | primary
      shadow: true
    },
    actions: [
      { id: 'DownloadBtn', text: 'Download' },
      { id: 'FollowBtn', text: 'Follow' },
      { id: 'ShareBtn', text: 'Share' }
    ]
  };

  log(value: any) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}