import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthShowcase } from '../components/auth-showcase/auth-showcase';

@Component({
  imports: [RouterLink, AuthShowcase],
  selector: 'app-forgot-password',
  standalone: true,
  styleUrl: './forgot-password.css',
  templateUrl: './forgot-password.html',
})
export class ForgotPassword {}
