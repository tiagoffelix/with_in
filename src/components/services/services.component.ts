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
       description: 'As sessões individuais são um espaço só teu — seguro, acolhedor e sem julgamentos. Aqui podes falar sobre o que sentes, ao teu ritmo, com quem te escuta de forma genuína. Cada sessão tem a duração de 50 minutos e é adaptada às tuas necessidades.',
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
       description: 'A terapia de casal é um espaço seguro para ambos se ouvirem, se expressarem e se compreenderem de forma mais clara e genuína. Trabalhamos juntos os desafios da relação — comunicação, conflitos, distanciamento, ou momentos de mudança — sempre com foco no reencontro e na construção de um vínculo mais saudável. As sessões têm uma duração entre 1h e 1h30, adaptadas às necessidades de cada casal. ',
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
       description: 'Se sentes que precisas de clareza no teu percurso profissional, o career coaching pode ajudar-te a (re)descobrir o teu caminho. Seja para mudar de área, definir objetivos, ganhar confiança ou lidar com dúvidas e bloqueios, este é um espaço para te ouvires e planeares com intenção. As sessões têm a duração de 60 minutos e são totalmente orientadas para ti e para o que queres construir na tua vida profissional.',
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

  // Modal state for services popup
  selectedService: Service | null = null;
  // Independent expansion state per service (no longer used for inline expansion)
  expandedMap: Record<string, boolean> = {};

  ngOnInit(): void {
    // Initialize independent expansion state
    this.services.forEach(s => this.expandedMap[s.id] = false);
  }

  // Open modal popup for selected service
  openModal(service: Service): void {
    this.selectedService = service;
  }

  // Close modal popup
  closeModal(): void {
    this.selectedService = null;
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