import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Cadastro],  // <- importa o componente
  template: `<app-cadastro></app-cadastro>`
})
export class App {
  protected readonly title = signal('boot');
  author: string = 'Lucas Alves';
}
