import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthShowcase } from '../components/auth-showcase/auth-showcase';

@Component({
  imports: [RouterLink, AuthShowcase],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {}
