import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Aniversariante {
  nome: string;
  genero: string;
  dataNascimento: string;
}

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {
  nome: string = '';
  genero: string = 'masculino';
  dataNascimento: string = '';

  aniversariantes: Aniversariante[] = [];

  adicionar() {
    if (!this.nome || !this.dataNascimento) {
      alert('Por favor, preencha nome e data de nascimento');
      return;
    }

    this.aniversariantes.push({
      nome: this.nome,
      genero: this.genero,
      dataNascimento: this.dataNascimento
    });

    // Limpar campos
    this.nome = '';
    this.genero = 'masculino';
    this.dataNascimento = '';
  }
}
