import { techList } from '../src/challenges';

describe('10 - Crie uma função de Lista de Tecnologias', () => {
  it('Retorne uma lista de objetos ordenados quando é passada uma lista com 5 tecnologias deve', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas',
      },
      {
        tech: 'HTML',
        name: 'Lucas',
      },
      {
        tech: 'JavaScript',
        name: 'Lucas',
      },
      {
        tech: 'Jest',
        name: 'Lucas',
      },
      {
        tech: 'React',
        name: 'Lucas',
      },
    ]);
  });

  it('Retorne um array vazio quando a lista tiver com 0 tecnologias', () => {
    expect(techList([], 'Lucas')).toEqual([]);
  });
});
