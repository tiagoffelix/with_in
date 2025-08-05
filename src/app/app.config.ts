import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    // Configuração de rotas (se você estiver usando roteamento na sua aplicação)
    provideRouter(routes),
    // Importa os módulos necessários
    importProvidersFrom(
      HttpClientModule, 
    )
  ],
};