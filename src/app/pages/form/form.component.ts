import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ViacepService } from '../../_services/viacep.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private viacepService: ViacepService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.observePreenchimentoCep();
  }

  initializeForm() {
    this.form = this.fb.group({
      nome: [''],
      email: [''],
      telefone: [''],
      cep: ['', [Validators.required]],
      logradouro: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
    });
  }

  observePreenchimentoCep() {
    this.form.get('cep')?.valueChanges.subscribe((value) => {
      if (value?.length == 8) {
        this.buscarCep();
      }
    });
  }

  buscarCep() {
    var cep = this.form.get('cep')?.value;
    this.viacepService.getEnderecoByCep(cep).subscribe({
      next: (response) => {
        this.form.patchValue({
          logradouro: response.logradouro,
          bairro: response.bairro,
          cidade: response.localidade,
          estado: response.uf,
        });
      },
      error: () => {
        console.log('erro ao buscar o cep');
      },
    });
  }
}
