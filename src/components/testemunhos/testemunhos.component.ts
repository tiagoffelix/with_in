import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

@Component({
  selector: 'app-testemunhos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testemunhos" class="testemunhos section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">TESTEMUNHOS</h2>
          <p class="section-subtitle">O que dizem os nossos pacientes</p>
        </div>
        <div class="testemunhos-grid">
          <div class="testimonial-card" *ngFor="let t of testimonials">
            <p class="testimonial-quote">"{{ t.quote }}"</p>
            <p class="testimonial-author">— {{ t.author }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testemunhos {
      background: var(--color-primary-bg);
    }
    .section-header {
      text-align: center;
      margin-bottom: var(--spacing-xxl);
    }
    .section-title {
      font-family: 'Tenor Sans', cursive;
      font-size: var(--font-size-4xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-md);
    }
    .section-subtitle {
      font-size: var(--font-size-lg);
      color: var(--color-text-secondary);
      margin-bottom: var(--spacing-xl);
    }
    .testemunhos-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-lg);
    }
    .testimonial-card {
      background: var(--color-white);
      padding: var(--spacing-lg);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-md);
      transition: transform var(--transition-normal), box-shadow var(--transition-normal);
    }
    .testimonial-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }
    .testimonial-quote {
      font-size: var(--font-size-base);
      color: var(--color-text-secondary);
      font-style: italic;
      margin-bottom: var(--spacing-sm);
      line-height: var(--line-height-relaxed);
    }
    .testimonial-author {
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      text-align: right;
    }
    @media (max-width: 768px) {
      .testemunhos-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class TestemunhosComponent implements OnInit {
  testimonials: Testimonial[] = [
    {
      id: '1',
      quote: 'A Joana é atenta e extremamente profissional, providenciando um ambiente seguro que me ajuda a enfrentar os meus desafios da melhor forma. Sem preconceitos e numa perspetiva de trabalho conjunto, a Joana procura adaptar-se às minhas necessidades, aos meus tempos - apontando caminhos e criando, sobretudo, espaço para as minhas escolhas.',
      author: 'M.'
    },
    {
      id: '2',
      quote: 'O acompanhamento está a correr muito bem e tive muita sorte por ter encontrado a pessoa certa a primeira!',
      author: 'L.'
    },
    {
      id: '3',
      quote: 'O acompanhamento está a correr muito bem. Pessoalmente gosto bastante das sessões com a minha psicóloga e mais do que isso sinto que estou a evoluir nas áreas pretendidas. Em resumo não poderia ter sido uma melhor escolha de terapeuta.',
      author: 'G.'
    },
    {
      id: '4',
      quote: 'Tenho 24 anos e pedi ajuda porque tinha fobia de animais, mas principalmente de cães. A Joana, que é minha psicóloga, tem me ajudado nesse aspecto. Ao longo de 5 meses de consultas, já deixei de ter medo e até já tenho uma cadela! Foi uma grande evolução para mim e agradeço imenso à minha psicóloga. Obrigada!',
      author: 'M.'
    },
    {
      id: '5',
      quote: 'Ao fim de demasiados anos a adiar a necessidade de fazer terapia, foi um momento mais difícil a nível pessoal e sobretudo profissional que procurei ajuda. Encontrei e continuo a encontrar semalmente o apoio e a ajuda que procurava para aprender a lidar com muitos dos meus medos e inseguranças. Obrigada Dra. Joana!',
      author: 'I.'
    },
    {
      id: '6',
      quote: 'O acompanhamento com a Dra. Joana tem sido bastante positivo. A doutora auxilia-me na organização dos pensamentos, na reflexão sobre crenças enraizadas há muito tempo, permitindo-me compreender a sua origem e, no final do dia, melhorar a minha relação que mantenho comigo mesmo. Embora ainda esteja em processo, já reconheço, as melhorias desde o início do acompanhamento.',
      author: 'L.'
    }
  ];
  constructor() {}
  ngOnInit(): void {}
}
