import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './pages/form/form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cep_app';
}
