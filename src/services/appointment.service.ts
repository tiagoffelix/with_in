import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { AppointmentForm } from '../models/psychologist.model';

/**
 * Serviço responsável por gerenciar agendamentos
 * Simula integração com backend para envio de formulários
 */
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() {}

  /**
   * Submete um formulário de agendamento
   * Simula chamada para API backend com delay
   * @param formData - Dados do formulário de agendamento
   * @returns Observable com resultado da submissão
   */
  submitAppointment(formData: AppointmentForm): Observable<{ success: boolean; message: string }> {
    // Simula validação básica
    if (!formData.name || !formData.email || !formData.sessionType) {
      return throwError(() => new Error('Campos obrigatórios não preenchidos'));
    }

    // Simula validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return throwError(() => new Error('Email inválido'));
    }

    // Simula chamada para API com delay de 2 segundos
    return of({
      success: true,
      message: 'Agendamento enviado com sucesso! Entraremos em contacto em breve.'
    }).pipe(
      delay(2000), // Simula tempo de resposta da API
      map(response => {
        // Simula possível erro do servidor (5% de chance)
        if (Math.random() < 0.05) {
          throw new Error('Erro interno do servidor. Tente novamente mais tarde.');
        }
        return response;
      })
    );
  }

  /**
   * Valida os dados do formulário antes da submissão
   * @param formData - Dados do formulário
   * @returns Objeto com resultado da validação
   */
  validateForm(formData: Partial<AppointmentForm>): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!formData.name?.trim()) {
      errors.push('Nome é obrigatório');
    }

    if (!formData.email?.trim()) {
      errors.push('Email é obrigatório');
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.push('Email deve ter um formato válido');
      }
    }

    if (!formData.sessionType) {
      errors.push('Tipo de sessão é obrigatório');
    }

    if (!formData.timePreference) {
      errors.push('Preferência de horário é obrigatória');
    }

    if (!formData.acceptsTerms) {
      errors.push('Deve aceitar os termos e condições');
    }

    if (formData.phone && formData.phone.trim()) {
      const phoneRegex = /^[+]?[\d\s\-\(\)]{9,}$/;
      if (!phoneRegex.test(formData.phone)) {
        errors.push('Número de telefone deve ter um formato válido');
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Retorna as opções disponíveis para tipos de sessão
   * @returns Observable com array de opções
   */
  getSessionTypes(): Observable<Array<{ value: string; label: string }>> {
    return of([
      { value: 'individual', label: 'Terapia Individual' },
      { value: 'couple', label: 'Terapia de Casal' },
      { value: 'family', label: 'Terapia Familiar' },
      { value: 'group', label: 'Terapia de Grupo' }
    ]);
  }

  /**
   * Retorna as opções disponíveis para preferências de horário
   * @returns Observable com array de opções
   */
  getTimePreferences(): Observable<Array<{ value: string; label: string }>> {
    return of([
      { value: 'morning', label: 'Manhã (9h-12h)' },
      { value: 'afternoon', label: 'Tarde (14h-17h)' },
      { value: 'evening', label: 'Final do dia (17h-20h)' },
      { value: 'flexible', label: 'Flexível' }
    ]);
  }
}