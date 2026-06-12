import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Chatbot } from './components/chatbot/chatbot';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Chatbot],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'portfolio-jagdish';
}
