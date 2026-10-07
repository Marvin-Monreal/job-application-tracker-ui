import { Component } from '@angular/core';
import { AuthShowcase } from '../components/auth-showcase/auth-showcase';

@Component({
  imports: [AuthShowcase],
  selector: 'app-reset-password',
  standalone: true,
  styleUrl: './reset-password.css',
  templateUrl: './reset-password.html',
})
export class ResetPassword {}
