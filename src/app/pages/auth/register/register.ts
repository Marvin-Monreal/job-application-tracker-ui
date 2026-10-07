import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthShowcase } from '../components/auth-showcase/auth-showcase';

@Component({
  imports: [RouterLink, AuthShowcase],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register {}
