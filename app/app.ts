import { Component, signal } from '@angular/core';
import { Footer } from "./layout/footer/footer";
import { Header } from "./layout/header/header";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Footer, Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('crilasrozas-web');
}
