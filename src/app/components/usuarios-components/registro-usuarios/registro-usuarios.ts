import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios.service';

import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { FooterComponentComponent } from '../../footer-component/footer-component.component';
import { NombreUsuarioRegistroPipe } from '../../../pipes/nombre-usuario-registro.pipe';
import { EmailRegistroPipe } from '../../../pipes/email-registro.pipe';
import { FechaActualPipe } from '../../../pipes/fecha-actual.pipe';

@Component({
  selector: 'app-registro-usuarios',
  standalone: true,
  templateUrl: './registro-usuarios.html',
  imports: [ReactiveFormsModule, NavBarComponent, FooterComponentComponent],
  styleUrl: './registro-usuarios.css',
})
export class RegistroUsuarios {
  enviado: boolean = false;
  registroForm: FormGroup;
  imc: number = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuariosService: UsuariosService
  ) {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      fechaNacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      cedula: [
        '',
        [Validators.required, Validators.pattern(/^[A-Za-z0-9]{6,20}$/)],
      ],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      direccion: ['', [Validators.required, Validators.minLength(5)]],
      password: [
        '',
        [
          Validators.required,
          /*           Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          ), */
        ],
      ],
      peso: ['', [Validators.required]],
      altura: ['', [Validators.required]],
      imc: [{ value: '', disabled: true }],
    });
  }
  //escuchar cambios y calcular imc automaticamente
  ngOnInit(peso: number, altura: number) {
    this.registroForm
      .get('peso')
      ?.valueChanges.subscribe(() => this.calcularIMC());
    this.registroForm
      .get('altura')
      ?.valueChanges.subscribe(() => this.calcularIMC());
  }
  calcularIMC() {
    const peso = this.registroForm.get('peso')?.value;
    const altura = this.registroForm.get('altura')?.value;

    if (peso && altura && altura > 0) {
      this.imc = peso / (altura * altura);
      this.registroForm.patchValue(
        { imc: this.imc.toFixed(2) },
        { emitEvent: false }
      );
    } else {
      this.imc = 0;
      this.registroForm.patchValue({ imc: '' }, { emitEvent: false });
    }
  }
  registrar() {
    if (this.registroForm.valid) {
      this.enviado = true;
      const usuario = {
        ...this.registroForm.getRawValue(),
        imc: this.imc, // enviar imc calculado
        peso: Number(this.registroForm.get('peso')?.value),
        altura: Number(this.registroForm.get('altura')?.value),
        rol: 'CLIENTE', // agregar rol aquí
      };
      this.usuariosService.registrarUsuario(usuario).subscribe({
        next: () => {
          alert('Usuario registrado exitosamente');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Error al registrar usuario', err);
        },
      });
    } else {
      this.registroForm.markAllAsTouched();
    }
  }

  camposSinLlenar = () => {
    return (
      !this.enviado &&
      Object.values(this.registroForm.controls).some(
        (control) => control.value?.trim?.() !== ''
      )
    );
  };
}
