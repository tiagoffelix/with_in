import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface para definir a estrutura dos serviços
 */
interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  expanded?: boolean;
}

/**
 * Componente Services - Seção dos serviços oferecidos
 * Exibe cards com informações detalhadas dos tipos de terapia
 */
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
   /** Lista de serviços oferecidos pela clínica */
   services: Service[] = [
     {
       id: 'individual-therapy',
       name: 'Terapia Individual',
       description: 'As sessões individuais oferecem um espaço seguro, confidencial e acolhedor, pensado para ti. Aqui, podes explorar com tranquilidade aquilo que sentes, pensas ou vives, num ambiente de escuta atenta e sem julgamentos. O acompanhamento é adaptado às tuas necessidades e o objetivo é promover o teu bem-estar emocional e apoiar-te no teu caminho de crescimento e equilíbrio.',
       icon: 'individual',
       features: [
         'Sessões personalizadas de 50 minutos',
         'Ambiente seguro e confidencial',
         'Abordagem adaptada às tuas necessidades',
         'Desenvolvimento de competências de autorregulação',
         'Acompanhamento contínuo do progresso'
       ],
       expanded: false
     },
     {
       id: 'couple-therapy',
       name: 'Terapia de Casal',
       description: 'As sessões de casal oferecem um espaço seguro, confidencial e equilibrado, onde ambos os parceiros podem expressar-se com liberdade e respeito. Através de uma escuta imparcial e de um trabalho conjunto, é possível explorar dificuldades na comunicação, conflitos, rotinas, intimidade ou outras dinâmicas da relação. O objetivo é promover maior compreensão mútua, fortalecer a ligação e apoiar o casal na construção de uma relação mais saudável, consciente e satisfatória para ambos.',
       icon: 'couple',
       features: [
         'Sessões de 60 minutos para ambos os parceiros',
         'Melhoria da comunicação do casal',
         'Resolução construtiva de conflitos',
         'Fortalecimento da intimidade e confiança',
         'Estratégias práticas para o dia a dia'
       ],
       expanded: false
     },
     {
       id: 'career-coaching',
       name: 'Career Coaching',
       description: 'As sessões de Career Coaching oferecem um espaço seguro, focado e personalizado para refletires sobre o teu percurso profissional, os teus objetivos e os próximos passos na tua carreira. Seja para mudares de área, descobrires o que te motiva, ganhares clareza sobre decisões importantes ou desenvolveres competências específicas, o acompanhamento é feito contigo e para ti. O objetivo é ajudar-te a construir um caminho profissional com mais sentido, alinhado com os teus valores, talentos e aspirações.',
       icon: 'career',
       features: [
         'Sessões de 60 minutos focadas nos teus objetivos de carreira',
         'Identificação de valores, talentos e motivações profissionais',
         'Clareza na tomada de decisões e transições de carreira',
         'Desenvolvimento de competências específicas para o teu setor',
         'Plano de ação personalizado alinhado com as tuas metas'
       ],
       expanded: false
     }
   ];

  // Independent expansion state per service
  expandedMap: Record<string, boolean> = {};

  ngOnInit(): void {
    // Initialize independent expansion state
    this.services.forEach(s => this.expandedMap[s.id] = false);
  }

  // Toggle expansion on individual service item
  toggleService(service: Service): void {
    this.expandedMap[service.id] = !this.expandedMap[service.id];
  }

  /**
   * Função de tracking para otimizar renderização da lista
   * @param index - Índice do item
   * @param service - Dados do serviço
   * @returns ID único para tracking
   */
  trackByService(index: number, service: Service): string {
    return service.id;
  }

  /**
   * Redireciona para o formulário do Google Forms com o tipo de sessão
   * @param serviceName - Nome do serviço
   */
  scheduleService(serviceName: string): void {
    const sessionTypeMap: { [key: string]: string } = {
      'Terapia Individual': 'individual',
      'Terapia de Casal': 'couple',
      'Career Coaching': 'career'
    };

    const sessionType = sessionTypeMap[serviceName] || 'individual';
    const formUrl = `https://docs.google.com/forms/d/1KxtOKPhGwvNQHsLUDsGPSqLUSkHGePeY5-BPS2kZTXE/viewform?sessionType=${sessionType}`;
    window.open(formUrl, '_blank');
  }
}