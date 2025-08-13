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
  imports: [
    ReactiveFormsModule,
    NavBarComponent,
    FooterComponentComponent,
    NombreUsuarioRegistroPipe,
    EmailRegistroPipe,
    FechaActualPipe
  ],
  styleUrl: './registro-usuarios.css',
})
export class RegistroUsuarios {
  enviado: boolean = false;
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuariosService: UsuariosService
  ) {
    this.registroForm = this.fb.group({
      id: [{ value: this.generarId(), disabled: true }],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      fechaNacimiento: ['', Validators.required],
      sexo: ['', Validators.required],
      documento: [
        '',
        [Validators.required, Validators.pattern(/^[A-Za-z0-9]{6,20}$/)],
      ],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      correo: ['', [Validators.required, Validators.email]],
      direccion: ['', [Validators.required, Validators.minLength(5)]],
      contrasenia: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
      rol: ['cliente', Validators.required],
    });
  }

  generarId(): string {
    return 'USR-' + Math.floor(Math.random() * 1000000);
  }

  registrar() {
    if (this.registroForm.valid) {
      this.enviado = true;
      const usuario = {
        ...this.registroForm.getRawValue(),
        id: this.registroForm.get('id')?.value,
        rol: this.registroForm.get('rol')?.value,
      };
      this.usuariosService.registrarUsuario(usuario).subscribe({
        next: (res) => {
          alert('Usuario registrado exitosamente');
          this.router.navigate(['/login']);
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
