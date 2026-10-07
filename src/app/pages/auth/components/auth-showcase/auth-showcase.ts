import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-auth-showcase',
  standalone: true,
  styleUrl: './auth-showcase.css',
  templateUrl: './auth-showcase.html',
})
export class AuthShowcase {
  readonly heading = input.required<string>();
  readonly text = input.required<string>();
}
