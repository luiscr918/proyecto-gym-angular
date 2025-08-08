import { inject } from '@angular/core';
import { Autentica } from '../services/autentica';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
    const authServcio = inject(Autentica);
    const router = inject(Router);
    if (authServcio.sesionIniciada()) {
        return true;
    } else {
        localStorage.setItem('redirectUrl', state.url);
        return router.parseUrl('/login');
    }
};

export const adminGuard: CanActivateFn = (route, state) => {
    const authServcio = inject(Autentica);
    const router = inject(Router);
    const usuario = authServcio.getUsuarioActual();
    if (authServcio.sesionIniciada() && usuario.rol === 'admin') {
        return true;
    } else {
        return router.parseUrl('/');
    }
};

export const clienteGuard: CanActivateFn = (route, state) => {
    const authServcio = inject(Autentica);
    const router = inject(Router);
    const usuario = authServcio.getUsuarioActual();
    if (authServcio.sesionIniciada() && usuario.rol === 'cliente') {
        return true;
    } else if (authServcio.sesionIniciada() && usuario.rol === 'admin') {
        return router.parseUrl('/productos');
    } else {
        return router.parseUrl('/');
    }
};
