import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent {
  contactForm = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(4)]],
    assunto: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', [Validators.required, Validators.minLength(11)]],
    mensagem: ['', [Validators.required, Validators.minLength(20)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  public enviar() {
    this.contactForm.reset();
    alert('Formulario enviado com sucesso!');
  }
}
