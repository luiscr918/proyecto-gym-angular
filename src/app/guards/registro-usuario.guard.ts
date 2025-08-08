import { CanDeactivateFn } from '@angular/router';
import { RegistroUsuarios } from '../components/usuarios-components/registro-usuarios/registro-usuarios';

export const registroUsuarioGuard: CanDeactivateFn<RegistroUsuarios> = (component, curr) => {
  if(component.camposSinLlenar()){
    return confirm('Tienes datos sin llenar. ¿Seguro de abandonar el registro?');
  }
  return true;
};
