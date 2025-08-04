import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Psychologist } from '../models/psychologist.model';
import psychologistsData from '../data/psychologists.json';

/**
 * Serviço responsável por gerenciar os dados das psicólogas
 * Implementa padrão de injeção de dependência do Angular
 */
@Injectable({
  providedIn: 'root'
})
export class PsychologistService {
  private psychologists: Psychologist[] = psychologistsData as Psychologist[];

  constructor() {}

  /**
   * Retorna todas as psicólogas ordenadas por ordem de exibição
   * @returns Observable com array de psicólogas
   */
  getAllPsychologists(): Observable<Psychologist[]> {
    return of(this.psychologists.sort((a, b) => a.order - b.order));
  }

  /**
   * Retorna uma psicóloga específica pelo ID
   * @param id - Identificador único da psicóloga
   * @returns Observable com a psicóloga encontrada ou undefined
   */
  getPsychologistById(id: string): Observable<Psychologist | undefined> {
    const psychologist = this.psychologists.find(p => p.id === id);
    return of(psychologist);
  }

  /**
   * Retorna a psicóloga fundadora da clínica
   * @returns Observable com a psicóloga fundadora
   */
  getFounder(): Observable<Psychologist | undefined> {
    const founder = this.psychologists.find(p => p.isFounder === true);
    return of(founder);
  }

  /**
   * Retorna psicólogas filtradas por especialização
   * @param specialization - Especialização a filtrar
   * @returns Observable com array de psicólogas filtradas
   */
  getPsychologistsBySpecialization(specialization: string): Observable<Psychologist[]> {
    const filtered = this.psychologists.filter(p => 
      p.specializations.some(s => 
        s.toLowerCase().includes(specialization.toLowerCase())
      )
    );
    return of(filtered.sort((a, b) => a.order - b.order));
  }

  /**
   * Retorna lista de todas as especializações disponíveis
   * @returns Observable com array de especializações únicas
   */
  getAllSpecializations(): Observable<string[]> {
    const allSpecializations = this.psychologists
      .flatMap(p => p.specializations)
      .filter((spec, index, array) => array.indexOf(spec) === index)
      .sort();
    
    return of(allSpecializations);
  }
}