import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { FooterComponentComponent } from '../../footer-component/footer-component.component';
import { AutenticaService } from '../../../services/autentica.service';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    imports: [ReactiveFormsModule, NavBarComponent, FooterComponentComponent, RouterLink],
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginForm: FormGroup;
    errorMsg: string = '';

    constructor(private fb: FormBuilder, private router: Router, private autentica: AutenticaService) {
        this.loginForm = this.fb.group({
            correo: ['', [Validators.required, Validators.email]],
            contrasenia: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
        });
    }

    login() {
        if (this.loginForm.valid) {
            const { correo, contrasenia } = this.loginForm.value;
            this.autentica.login(correo, contrasenia).subscribe(res => {
                if (res.success) {
                    const rol = res.user.rol;
                    if (rol === 'admin') {
                        this.router.navigate(['/productos']);
                    } else if (rol === 'cliente') {
                        this.router.navigate(['/productos-usuarios']);
                    } else {
                        this.router.navigate(['/']);
                    }
                } else {
                    this.errorMsg = res.message;
                }
            });
        } else {
            this.loginForm.markAllAsTouched();
        }
    }
}
