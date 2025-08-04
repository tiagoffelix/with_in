/**
 * Interface para definir a estrutura de dados de uma psicóloga
 * Utilizada para tipagem forte em TypeScript
 */
export interface Psychologist {
  /** Identificador único da psicóloga */
  id: string;
  
  /** Nome completo da psicóloga */
  name: string;
  
  /** Título ou especialização principal */
  title: string;
  
  /** URL da foto de perfil */
  photo: string;
  
  /** Breve descrição ou resumo profissional */
  summary: string;
  
  /** Biografia detalhada */
  biography: string;
  
  /** Lista de especializações */
  specializations: string[];
  
  /** Formação acadêmica */
  education: string[];
  
  /** Experiência profissional */
  experience: string[];
  
  /** Abordagens terapêuticas utilizadas */
  approaches: string[];
  
  /** Indica se é a fundadora da clínica */
  isFounder?: boolean;
  
  /** Ordem de exibição no site */
  order: number;
}

/**
 * Interface para os dados do formulário de agendamento
 */
export interface AppointmentForm {
  /** Nome completo do cliente */
  name: string;
  
  /** Email de contato */
  email: string;
  
  /** Número de telefone (opcional) */
  phone?: string;
  
  /** Tipo de sessão desejada */
  sessionType: 'individual' | 'couple' | 'family' | 'group';
  
  /** Preferência de horário */
  timePreference: 'morning' | 'afternoon' | 'evening' | 'flexible';
  
  /** Psicóloga preferida (opcional) */
  preferredPsychologist?: string;
  
  /** Mensagem adicional ou observações */
  message?: string;
  
  /** Aceita os termos e condições */
  acceptsTerms: boolean;
}

/**
 * Interface para os serviços oferecidos pela clínica
 */
export interface Service {
  /** Identificador único do serviço */
  id: string;
  
  /** Nome do serviço */
  name: string;
  
  /** Descrição detalhada */
  description: string;
  
  /** Ícone SVG ou classe de ícone */
  icon: string;
  
  /** Duração típica da sessão */
  duration: string;
  
  /** Público-alvo */
  targetAudience: string[];
  
  /** Ordem de exibição */
  order: number;
}

/**
 * Interface para informações de contato
 */
export interface ContactInfo {
  /** Email principal */
  email: string;
  
  /** Número de telefone */
  phone: string;
  
  /** Endereço físico (opcional) */
  address?: string;
  
  /** Horários de funcionamento */
  workingHours?: string;
  
  /** Links para redes sociais */
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}