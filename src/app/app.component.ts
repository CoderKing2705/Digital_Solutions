import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        query('.card', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(200, [
            animate(
              '600ms ease-out',
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          ])
        ])
      ])
    ])
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  services = [
    {
      icon: '🌐',
      title: 'Web Development',
      desc: 'Building modern, responsive, and scalable web apps.'
    },
    {
      icon: '🛠️',
      title: 'API Development',
      desc: 'Secure and optimized backend APIs with .NET Core & PostgreSQL.'
    },
    {
      icon: '☁️',
      title: 'Cloud Deployment',
      desc: 'Deploying and scaling apps on AWS with best practices.'
    }
  ];
}
