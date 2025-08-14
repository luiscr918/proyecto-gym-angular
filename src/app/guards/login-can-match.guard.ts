import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AutenticaService } from '../services/autentica.service';


export const loginCanMatchGuard: CanMatchFn = (route, segments) => {
  const authServcio = inject(AutenticaService);
  return !authServcio.sesionIniciada();
};
