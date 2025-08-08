import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { Autentica } from '../services/autentica';

export const loginCanMatchGuard: CanMatchFn = (route, segments) => {
  const authServcio = inject(Autentica);
  return !authServcio.sesionIniciada();
};
