import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-button',
  imports: [],
  templateUrl: './big-button.html',
  styleUrl: './big-button.css',
})
export class BigButton {
  @Input() text = '';
}
