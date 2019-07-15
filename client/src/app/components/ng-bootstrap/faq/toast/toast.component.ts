import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  show: boolean;

  constructor() {}

  ngOnInit() {
    if (!localStorage.getItem('show-toast')) {
      localStorage.setItem('show-toast', 'true');
    }
    this.show = JSON.parse(localStorage.getItem('show-toast'));
  }

  close(): void {
    localStorage.setItem('show-toast', 'false');
    this.show = JSON.parse(localStorage.getItem('show-toast'));
    // setTimeout((): boolean => (this.show = true), 5000);
  }
}
