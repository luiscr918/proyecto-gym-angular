import { authGuard, adminGuard, clienteGuard } from './auth.guard';

describe('authGuard', () => {
  it('should be defined', () => {
    expect(authGuard).toBeDefined();
  });
});

describe('adminGuard', () => {
  it('should be defined', () => {
    expect(adminGuard).toBeDefined();
  });
});

describe('clienteGuard', () => {
  it('should be defined', () => {
    expect(clienteGuard).toBeDefined();
  });
});
