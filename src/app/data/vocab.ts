import { v4 as uuidv4 } from 'uuid';
import { Topics, Gender } from '../constants';
import { vocab } from '../types';
import { generateKey } from 'crypto';

const vocabulary: vocab[] = [
  {
    id: uuidv4(),
    word: {
      pt: 'eu',
      en: 'i',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'mim',
      en: 'me',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'meu',
      en: 'my',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'minha',
      en: 'my',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'comigo',
      en: 'with me',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'você, tu',
      en: 'you',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'seu/s',
      en: 'your/s',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sua/s',
      en: 'your/s',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'contigo',
      en: 'with you',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ele',
      en: 'him',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ela',
      en: 'she',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dele',
      en: 'his',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dela',
      en: 'her',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nós, a gente',
      en: 'we',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nos',
      en: 'us',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nosso/s',
      en: 'our/s',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nossa/s',
      en: 'our/s',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'conosco',
      en: 'with us',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vocês',
      en: 'yous',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'eles',
      en: 'they',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'elas',
      en: 'they',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'deles',
      en: 'theirs',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'delas',
      en: 'theirs',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'este/s',
      en: 'this, these (near)',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'esta/s',
      en: 'this, these (near)',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'isto, isso',
      en: 'this that (near)',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'esse/s',
      en: 'that, those (far)',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'essa/s',
      en: 'that, those (far)',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'aquele, aquela, aquelo',
      en: 'that (long)',
    },
    topic: Topics.Pronoun,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'o que',
      en: 'what',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quem',
      en: 'who',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'qual, quais',
      en: 'which',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cujo',
      en: 'whose',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'onde',
      en: 'where',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'como',
      en: 'how',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'por que',
      en: 'why',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quando',
      en: 'when',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quanto',
      en: 'how much',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tudo',
      en: 'everything',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nada',
      en: 'nothing',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'mais',
      en: 'more',
    },
    topic: Topics.Adjectives,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'menos',
      en: 'less',
    },
    topic: Topics.Adjectives,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'lição',
      en: 'lesson',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'aula',
      en: 'class',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'aluno, estudante',
      en: 'student',
    },
    topic: Topics.Noun,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pronomes',
      en: 'pronouns',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'substantivo',
      en: 'noun',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'verbo',
      en: 'verb',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'caneta',
      en: 'pen',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'papel',
      en: 'paper',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cinza',
      en: 'gray',
    },
    topic: Topics.Colors,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'alguém',
      en: 'somebody',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ninguém',
      en: 'nobody',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'algum/as',
      en: 'some',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'qualquer',
      en: 'any',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nenhum',
      en: 'none',
    },
    topic: Topics.Adjectives,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pouco',
      en: 'few',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vários',
      en: 'several',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'todo',
      en: 'all',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ambos, os dois',
      en: 'both',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ação',
      en: 'action',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'atividade',
      en: 'activity',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'caso',
      en: 'case',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'coisa',
      en: 'thing',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'condição',
      en: 'condition',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'Deus',
      en: 'God',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dinheiro',
      en: 'money',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'errado',
      en: 'error',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'estudo',
      en: 'study',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'fim',
      en: 'end',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'força',
      en: 'force',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'forma',
      en: 'form',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'grupo',
      en: 'group',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'guerra',
      en: 'war',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'história',
      en: 'history',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ideia',
      en: 'idea',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'lei',
      en: 'law',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'morte',
      en: 'death',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nível',
      en: 'level',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nome',
      en: 'name',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'palavra',
      en: 'word',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'parte',
      en: 'part',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'preço',
      en: 'price',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'problema',
      en: 'problem',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'santo',
      en: 'holy',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tipo',
      en: 'type',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vez',
      en: 'time (occurance)',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'efeito',
      en: 'effect',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'razaõ',
      en: 'reason',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'fato',
      en: 'fact',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'medo',
      en: 'fear',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'calça',
      en: 'pants',
    },
    topic: Topics.Clothes,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'calor',
      en: 'heat',
    },
    topic: Topics.Weather,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'roupa',
      en: 'clothes',
    },
    topic: Topics.Clothes,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'casaco',
      en: 'coat',
    },
    topic: Topics.Clothes,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'meias',
      en: 'socks',
    },
    topic: Topics.Clothes,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sapatos',
      en: 'shoes',
    },
    topic: Topics.Clothes,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'camisola',
      en: 'nightgown',
    },
    topic: Topics.Clothes,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'roupa íntima',
      en: 'underwear',
    },
    topic: Topics.Clothes,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'luva',
      en: 'glove',
    },
    topic: Topics.Clothes,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'camisa',
      en: 'dress shirt',
    },
    topic: Topics.Clothes,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'relógio',
      en: 'watch',
    },
    topic: Topics.Clothes,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'anel',
      en: 'ring',
    },
    topic: Topics.Clothes,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cinto',
      en: 'belt',
    },
    topic: Topics.Clothes,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'gravata',
      en: 'tie',
    },
    topic: Topics.Clothes,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vestido',
      en: 'dress',
    },
    topic: Topics.Clothes,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'camiseta',
      en: 't-shirt',
    },
    topic: Topics.Clothes,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'saia',
      en: 'skirt',
    },
    topic: Topics.Clothes,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'boné',
      en: 'cap',
    },
    topic: Topics.Clothes,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'os óculos de sol',
      en: 'sunglasses',
    },
    topic: Topics.Clothes,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'gorro',
      en: 'hat',
    },
    topic: Topics.Clothes,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'botas',
      en: 'boots',
    },
    topic: Topics.Clothes,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'saltos',
      en: 'heels',
    },
    topic: Topics.Clothes,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'terno',
      en: 'suit',
    },
    topic: Topics.Clothes,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'calcinha',
      en: 'panties',
    },
    topic: Topics.Clothes,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sutiã',
      en: 'bra',
    },
    topic: Topics.Clothes,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'blusa',
      en: 'blouse',
    },
    topic: Topics.Clothes,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cachecol',
      en: 'scarf',
    },
    topic: Topics.Clothes,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ou',
      en: 'or',
    },
    topic: Topics.Conjunctions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'mas',
      en: 'but',
    },
    topic: Topics.Conjunctions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'e',
      en: 'and',
    },
    topic: Topics.Conjunctions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'que',
      en: 'that',
    },
    topic: Topics.Conjunctions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'então',
      en: 'so, then',
    },
    topic: Topics.Conjunctions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nem',
      en: 'nor',
    },
    topic: Topics.Conjunctions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'porque, pois',
      en: 'because',
    },
    topic: Topics.Conjunctions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'porém, no entanto',
      en: 'however',
    },
    topic: Topics.Conjunctions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'se',
      en: 'if',
    },
    topic: Topics.Conjunctions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'como',
      en: 'like, as',
    },
    topic: Topics.Conjunctions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'açúcar',
      en: 'sugar',
    },
    topic: Topics.Food,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'embora',
      en: 'although',
    },
    topic: Topics.Conjunctions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cada',
      en: 'each',
    },
    topic: Topics.Adjectives,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'mesmo',
      en: 'same',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'maior',
      en: 'major',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'atual',
      en: 'current',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'média',
      en: 'average',
    },
    topic: Topics.Adjectives,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cima',
      en: 'top',
    },
    topic: Topics.Adjectives,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'frente',
      en: 'front',
    },
    topic: Topics.Adjectives,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'baixo',
      en: 'bottom',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'estrada',
      en: 'road',
    },
    topic: Topics.Places,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quebrado',
      en: 'broken',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tranquilo',
      en: 'tranquil',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'já',
      en: 'already',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sempre',
      en: 'always',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quase',
      en: 'almost',
    },
    topic: Topics.Adverbs,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'relativamente',
      en: 'relatively',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'consideravelmente',
      en: 'considerably',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'bastante',
      en: 'quite',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'bem',
      en: 'well',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'assim',
      en: 'like this',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pior',
      en: 'worse',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'melhor',
      en: 'better',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'rapido',
      en: 'fast',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'devangar, lentamente',
      en: 'slowly',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'infelizmente',
      en: 'unfortunately',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'realmente',
      en: 'indeed, really',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'igualmente',
      en: 'likewise',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'igual',
      en: 'equal',
    },
    topic: Topics.Adjectives,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'enquanto',
      en: 'while',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'muito',
      en: 'many',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'demais',
      en: 'too much',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tão',
      en: 'too',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tanto',
      en: 'so much',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'muitas vezes',
      en: 'often',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'às vezes',
      en: 'sometimes',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'criança',
      en: 'child',
    },
    topic: Topics.Family,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'família',
      en: 'family',
    },
    topic: Topics.Family,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'mãe',
      en: 'mother',
    },
    topic: Topics.Family,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'bisavô',
      en: 'great-grandfather',
    },
    topic: Topics.Family,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'bisavôs',
      en: 'great-grandparents',
    },
    topic: Topics.Family,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'prato',
      en: 'dish, plate',
    },
    topic: Topics.House,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pai',
      en: 'father',
    },
    topic: Topics.Family,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'irmão',
      en: 'brother',
    },
    topic: Topics.Family,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'irmã',
      en: 'sister',
    },
    topic: Topics.Family,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'primo',
      en: 'cousin',
    },
    topic: Topics.Family,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'prima',
      en: 'cousin',
    },
    topic: Topics.Family,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sobrinha',
      en: 'niece',
    },
    topic: Topics.Family,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sobrinho',
      en: 'nephew',
    },
    topic: Topics.Family,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tio',
      en: 'uncle',
    },
    topic: Topics.Family,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tia',
      en: 'aunt',
    },
    topic: Topics.Family,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'avós',
      en: 'grandparents',
    },
    topic: Topics.Family,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'avó',
      en: 'grandmother',
    },
    topic: Topics.Family,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pente',
      en: 'comb',
    },
    topic: Topics.House,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'avô',
      en: 'grandfather',
    },
    topic: Topics.Family,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'chuvoso',
      en: 'rainy',
    },
    topic: Topics.Weather,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'chuva',
      en: 'rain',
    },
    topic: Topics.Weather,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'neve',
      en: 'snow',
    },
    topic: Topics.Weather,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nevado',
      en: 'snowy',
    },
    topic: Topics.Weather,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'granizo',
      en: 'hail',
    },
    topic: Topics.Weather,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vento',
      en: 'wind',
    },
    topic: Topics.Weather,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ventoso',
      en: 'windy',
    },
    topic: Topics.Weather,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'brisa',
      en: 'breeze',
    },
    topic: Topics.Weather,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tempestade',
      en: 'storm',
    },
    topic: Topics.Weather,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tempestuoso',
      en: 'stormy',
    },
    topic: Topics.Weather,
    gender: Gender.Female,
  },

  {
    id: uuidv4(),
    word: {
      pt: 'clima',
      en: 'climate',
    },
    topic: Topics.Weather,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'coxa',
      en: 'thigh',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ensolarado',
      en: 'sunny',
    },
    topic: Topics.Weather,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'frio',
      en: 'cold',
    },
    topic: Topics.Weather,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nublado',
      en: 'cloudy',
    },
    topic: Topics.Weather,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'neblina',
      en: 'fog, mist',
    },
    topic: Topics.Weather,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quente',
      en: 'warm',
    },
    topic: Topics.Weather,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'relâmpago',
      en: 'lightening',
    },
    topic: Topics.Weather,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'previsão do tempo',
      en: 'weather forecast',
    },
    topic: Topics.Weather,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'fresco',
      en: 'cool',
    },
    topic: Topics.Weather,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ameno',
      en: 'mild',
    },
    topic: Topics.Weather,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'temperatura',
      en: 'temperature',
    },
    topic: Topics.Weather,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tempo',
      en: 'weather',
    },
    topic: Topics.Weather,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sol',
      en: 'sun',
    },
    topic: Topics.Weather,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'trovão',
      en: 'thunder',
    },
    topic: Topics.Weather,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cama',
      en: 'bed',
    },
    topic: Topics.House,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'casa',
      en: 'house',
    },
    topic: Topics.House,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'chão',
      en: 'floor',
    },
    topic: Topics.House,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'flor',
      en: 'flower',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'planta',
      en: 'plant',
    },
    topic: Topics.Plants,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'árvore',
      en: 'tree',
    },
    topic: Topics.Plants,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'rosa',
      en: 'pink',
    },
    topic: Topics.Colors,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'doce',
      en: 'sweet',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'amargo',
      en: 'bitter',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'mesa',
      en: 'table',
    },
    topic: Topics.House,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'parede',
      en: 'wall',
    },
    topic: Topics.House,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'porta',
      en: 'door',
    },
    topic: Topics.House,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quarto',
      en: 'room',
    },
    topic: Topics.House,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'carro',
      en: 'car',
    },
    topic: Topics.House,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'livro',
      en: 'book',
    },
    topic: Topics.House,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'luz',
      en: 'light',
    },
    topic: Topics.House,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sala',
      en: 'living room',
    },
    topic: Topics.House,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cozinha',
      en: 'kitchen',
    },
    topic: Topics.House,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'peito',
      en: 'chest',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'banheiro',
      en: 'bathroom',
    },
    topic: Topics.House,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'banho',
      en: 'shower',
    },
    topic: Topics.House,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'garfo',
      en: 'fork',
    },
    topic: Topics.House,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'faca',
      en: 'knife',
    },
    topic: Topics.House,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'colher',
      en: 'spoon',
    },
    topic: Topics.House,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'forno',
      en: 'oven',
    },
    topic: Topics.House,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'corredor',
      en: 'hallway',
    },
    topic: Topics.House,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cadeira',
      en: 'chair',
    },
    topic: Topics.House,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sofá',
      en: 'sofa',
    },
    topic: Topics.House,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'televisão',
      en: 'television',
    },
    topic: Topics.House,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'rádio',
      en: 'radio',
    },
    topic: Topics.House,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'braço',
      en: 'arm',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cabeça',
      en: 'head',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'corpo',
      en: 'body',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'homem',
      en: 'man',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'mão',
      en: 'hand',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'mulher',
      en: 'woman',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'olho',
      en: 'eye',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pé',
      en: 'foot',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pessoa',
      en: 'person',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'saúde',
      en: 'health',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'velha',
      en: 'old',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'velho',
      en: 'old',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'jovem',
      en: 'young',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'voz',
      en: 'voice',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'idade',
      en: 'age',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vida',
      en: 'life',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'moradores',
      en: 'residents',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'população',
      en: 'population',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cabelo',
      en: 'hair',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'rosto',
      en: 'face',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'frango',
      en: 'chicken',
    },
    topic: Topics.Food,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'seco',
      en: 'dry',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'abacaxi',
      en: 'pineapple',
    },
    topic: Topics.Food,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'morango',
      en: 'strawberry',
    },
    topic: Topics.Food,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'framboesa',
      en: 'raspberry',
    },
    topic: Topics.Food,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cheirar',
      en: 'to smell',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dente',
      en: 'tooth',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tornozelo',
      en: 'ankle',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cotovelo',
      en: 'elbow',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ombro',
      en: 'shoulder',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sangue',
      en: 'blood',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'lábios',
      en: 'lips',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'orelha, ouvido',
      en: 'ear',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pele',
      en: 'skin',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nariz',
      en: 'nose',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'boca',
      en: 'mouth',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pescoço',
      en: 'neck',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'estômago, barriga',
      en: 'stomach',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pulso',
      en: 'wrist',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dedo',
      en: 'finger',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'unha',
      en: 'fingernail',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'perna',
      en: 'leg',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'joelho',
      en: 'knee',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dedo do pé',
      en: 'toe',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'água',
      en: 'water',
    },
    topic: Topics.Food,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'comida',
      en: 'food',
    },
    topic: Topics.Food,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'leite',
      en: 'milk',
    },
    topic: Topics.Food,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'suco',
      en: 'juice',
    },
    topic: Topics.Food,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ovos',
      en: 'eggs',
    },
    topic: Topics.Food,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'fruta',
      en: 'fruit',
    },
    topic: Topics.Food,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pão',
      en: 'bread',
    },
    topic: Topics.Food,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'galinha',
      en: 'rooster',
    },
    topic: Topics.Food,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'legumes',
      en: 'vegetables',
    },
    topic: Topics.Food,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'queijo',
      en: 'cheese',
    },
    topic: Topics.Food,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'arroz',
      en: 'rice',
    },
    topic: Topics.Food,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'feijãos',
      en: 'beans',
    },
    topic: Topics.Food,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'mirtilo',
      en: 'blueberry',
    },
    topic: Topics.Food,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'banana',
      en: 'banana',
    },
    topic: Topics.Food,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'costas',
      en: 'back',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'doente',
      en: 'sick',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'gripe',
      en: 'flu',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'maçã',
      en: 'apple',
    },
    topic: Topics.Food,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'laranja',
      en: 'orange',
    },
    topic: Topics.Food,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'batata',
      en: 'potato',
    },
    topic: Topics.Food,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'à',
      en: 'to the',
    },
    topic: Topics.Prepositions,
    gender: Gender.Female,
    contraction: 'a + a',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'às',
      en: 'to the',
    },
    topic: Topics.Prepositions,
    gender: Gender.Female,
    contraction: 'a + as',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ao',
      en: 'to the',
    },
    topic: Topics.Prepositions,
    gender: Gender.Male,
    contraction: 'a + o',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'aos',
      en: 'to the',
    },
    topic: Topics.Prepositions,
    gender: Gender.Male,
    contraction: 'a + os',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'da',
      en: 'of the',
    },
    topic: Topics.Prepositions,
    gender: Gender.Female,
    contraction: 'de + a',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'das',
      en: 'of the',
    },
    topic: Topics.Prepositions,
    gender: Gender.Female,
    contraction: 'de + as',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'do',
      en: 'of the',
    },
    topic: Topics.Prepositions,
    gender: Gender.Male,
    contraction: 'de + o',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dos',
      en: 'from the',
    },
    topic: Topics.Prepositions,
    gender: Gender.Male,
    contraction: 'de + os',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dum',
      en: 'from a',
    },
    topic: Topics.Prepositions,
    gender: Gender.Male,
    contraction: 'de + um',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'duma',
      en: 'from a',
    },
    topic: Topics.Prepositions,
    gender: Gender.Female,
    contraction: 'de + uma',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dumas',
      en: 'from some',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
    contraction: 'de + umas',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'duns',
      en: 'from some',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
    contraction: 'de + uns',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'na',
      en: 'in the',
    },
    topic: Topics.Prepositions,
    gender: Gender.Female,
    contraction: 'em + a',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nas',
      en: 'in the/s',
    },
    topic: Topics.Prepositions,
    gender: Gender.Female,
    contraction: 'em + as',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'no',
      en: 'in the',
    },
    topic: Topics.Prepositions,
    gender: Gender.Male,
    contraction: 'em + o',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nos',
      en: 'in the/s',
    },
    topic: Topics.Prepositions,
    gender: Gender.Male,
    contraction: 'em + os',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'num',
      en: 'in the',
    },
    topic: Topics.Prepositions,
    gender: Gender.Male,
    contraction: 'em + um',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'numa',
      en: 'in the',
    },
    topic: Topics.Prepositions,
    gender: Gender.Female,
    contraction: 'em + uma',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nuns',
      en: 'in some',
    },
    topic: Topics.Prepositions,
    gender: Gender.Male,
    contraction: 'em + uns',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'numas',
      en: 'in some',
    },
    topic: Topics.Prepositions,
    gender: Gender.Female,
    contraction: 'em + umas',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pela',
      en: 'for the',
    },
    topic: Topics.Prepositions,
    gender: Gender.Female,
    contraction: 'por + a',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pelas',
      en: 'for the/s',
    },
    topic: Topics.Prepositions,
    gender: Gender.Female,
    contraction: 'por + as',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pelo',
      en: 'for the',
    },
    topic: Topics.Prepositions,
    gender: Gender.Male,
    contraction: 'por + o',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pelos',
      en: 'for the/s',
    },
    topic: Topics.Prepositions,
    gender: Gender.Male,
    contraction: 'por + os',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'a',
      en: 'to',
    },
    topic: Topics.Prepositions,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'antes',
      en: 'before',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'após, depois',
      en: 'after',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'até',
      en: 'until',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'com',
      en: 'with',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'como',
      en: 'as, like',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'de',
      en: 'from',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'desde',
      en: 'since, from',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'em',
      en: 'in, on',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'entre',
      en: 'between',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'para',
      en: 'to, for',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'perto',
      en: 'near',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'por',
      en: 'for, by',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sob',
      en: 'under',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sobre',
      en: 'about',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'daqui',
      en: 'from here',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
    contraction: 'de + aqui',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'diante, contra',
      en: 'against',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'muito obrigado',
      en: 'thank you very much',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'obrigado',
      en: 'thank you',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'de nada',
      en: 'you are welcome',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'muito prazer',
      en: 'great pleasure',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'como vai?',
      en: 'how are you?',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tudo bem',
      en: 'all good?',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'com licença',
      en: 'excuse me',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'por favor',
      en: 'please',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'parabéns',
      en: 'congratulations',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'boa sorte',
      en: 'good luck',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'felicidades',
      en: 'cheers',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'feliz aniversário',
      en: 'happy birthday',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'até amanhã',
      en: 'until tomorrow',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'até logo',
      en: 'see you later',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'até mais',
      en: 'until later',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'oi',
      en: 'hello',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'bom dia',
      en: 'good morning',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'boa tarde',
      en: 'good afternoon',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'boa noite',
      en: 'good evening',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'boa viagem',
      en: 'bon voyage',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'boas férias',
      en: 'good holiday',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dados',
      en: 'data',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'bom fin de semana',
      en: 'have a good weekend',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'feliz natal',
      en: 'merry christmas',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'feliz páscoa',
      en: 'happy easter',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'domingo',
      en: 'sunday',
    },
    topic: Topics.Calendar,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'lento',
      en: 'slow',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pequeno',
      en: 'small',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'só, apenas, somente',
      en: 'only',
    },
    topic: Topics.Adjectives,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'segunda-feira',
      en: 'monday',
    },
    topic: Topics.Calendar,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'terça-feira',
      en: 'tuesday',
    },
    topic: Topics.Calendar,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quarta-feira',
      en: 'wednesday',
    },
    topic: Topics.Calendar,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quinta-feira',
      en: 'thursday',
    },
    topic: Topics.Calendar,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sexta-feira',
      en: 'friday',
    },
    topic: Topics.Calendar,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sábado',
      en: 'saturday',
    },
    topic: Topics.Calendar,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'janeiro',
      en: 'january',
    },
    topic: Topics.Calendar,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'janela',
      en: 'window',
    },
    topic: Topics.House,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'bola',
      en: 'ball',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'jogo',
      en: 'game',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'fevereiro',
      en: 'february',
    },
    topic: Topics.Calendar,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'março',
      en: 'march',
    },
    topic: Topics.Calendar,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'abril',
      en: 'april',
    },
    topic: Topics.Calendar,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'maio',
      en: 'may',
    },
    topic: Topics.Calendar,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'junho',
      en: 'june',
    },
    topic: Topics.Calendar,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'julho',
      en: 'july',
    },
    topic: Topics.Calendar,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'agosto',
      en: 'august',
    },
    topic: Topics.Calendar,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'setembro',
      en: 'september',
    },
    topic: Topics.Calendar,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'outubro',
      en: 'october',
    },
    topic: Topics.Calendar,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'novembro',
      en: 'november',
    },
    topic: Topics.Calendar,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dezembro',
      en: 'december',
    },
    topic: Topics.Calendar,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dia',
      en: 'day',
    },
    topic: Topics.Calendar,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'semana',
      en: 'week',
    },
    topic: Topics.Calendar,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'mês',
      en: 'month',
    },
    topic: Topics.Calendar,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ano',
      en: 'year',
    },
    topic: Topics.Calendar,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'manhã',
      en: 'morning',
    },
    topic: Topics.Calendar,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tarde',
      en: 'afternoon',
    },
    topic: Topics.Calendar,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'noite',
      en: 'night',
    },
    topic: Topics.Calendar,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'hora',
      en: 'hour',
    },
    topic: Topics.Calendar,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'século',
      en: 'century',
    },
    topic: Topics.Calendar,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'amarelo',
      en: 'yellow',
    },
    topic: Topics.Colors,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'azul',
      en: 'blue',
    },
    topic: Topics.Colors,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'branco',
      en: 'white',
    },
    topic: Topics.Colors,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'lago',
      en: 'lake',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'laranja',
      en: 'orange',
    },
    topic: Topics.Colors,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'preto',
      en: 'black',
    },
    topic: Topics.Colors,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'roxo',
      en: 'purple',
    },
    topic: Topics.Colors,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'verde',
      en: 'green',
    },
    topic: Topics.Colors,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vermelho',
      en: 'red',
    },
    topic: Topics.Colors,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cor',
      en: 'color',
    },
    topic: Topics.Colors,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'zero',
      en: 'zero',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'um',
      en: 'one',
    },
    topic: Topics.Numbers,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'uma',
      en: 'one',
    },
    topic: Topics.Numbers,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dois',
      en: 'two',
    },
    topic: Topics.Numbers,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'duas',
      en: 'two',
    },
    topic: Topics.Numbers,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'três',
      en: 'three',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quatro',
      en: 'four',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cinco',
      en: 'five',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'seis',
      en: 'six',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sete',
      en: 'seven',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'oito',
      en: 'eight',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nove',
      en: 'nine',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dez',
      en: 'ten',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'onze',
      en: 'eleven',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'doze',
      en: 'twelve',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'treze',
      en: 'thirteen',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quatorze',
      en: 'fourteen',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quinze',
      en: 'fifteen',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dezesseis',
      en: 'sixteen',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dezessete',
      en: 'seventeen',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dezoito',
      en: 'eighteen',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dezenove',
      en: 'nineteen',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vinte',
      en: 'twenty',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vinte e um',
      en: 'twenty one',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vinte e dois',
      en: 'twenty two',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vinte e três',
      en: 'twenty three',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vinte e quatro',
      en: 'twenty four',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vinte e cinco',
      en: 'twenty five',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vinte e seis',
      en: 'twenty six',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vinte e sete',
      en: 'twenty seven',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vinte e oito',
      en: 'twenty eight',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vinte e nove',
      en: 'twenty nine',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'trinta',
      en: 'thirty',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quarenta',
      en: 'forty',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cinquenta',
      en: 'fifty',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sessenta',
      en: 'sixty',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'setenta',
      en: 'seventy',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'oitenta',
      en: 'eighty',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'noventa',
      en: 'ninty',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cem',
      en: 'one hundred',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'duzentos',
      en: 'two hundred',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'trezentos',
      en: 'three hundred',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quatrocentos',
      en: 'four hundred',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quihentos',
      en: 'five hundred',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'seiscentos',
      en: 'six hundred',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'setecentos',
      en: 'seven hundred',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'oitocentos',
      en: 'eight hundred',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'novecentos',
      en: 'nine hundred',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'mil',
      en: 'one thousand',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dois mil',
      en: 'two thousand',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'três mil',
      en: 'three thousand',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quatro mil',
      en: 'four thousand',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cinco mil',
      en: 'five thousand',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'seis mil',
      en: 'six thousand',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sete mil',
      en: 'seven thousand',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'oito mil',
      en: 'eight thousand',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nove mil',
      en: 'nine thousand',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dez mil',
      en: 'ten thousand',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vinte mil',
      en: 'twenty thousand',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'trinta mil',
      en: 'thirty thousand',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quarento mil',
      en: 'forty thousand',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cinquenta mil',
      en: 'fifty thousand',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sessenta mil',
      en: 'sixty thousand',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'setenta mil',
      en: 'seventy thousand',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'oitenta mil',
      en: 'eighty thousand',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'noventa mil',
      en: 'ninty thousand',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cem mil',
      en: 'one hundred thousand',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'um milhão',
      en: 'one million',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'um bilhão',
      en: 'one billion',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'um trilhão',
      en: 'one trillion',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'os números',
      en: 'numbers',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cidade',
      en: 'city',
    },
    topic: Topics.Places,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'estado',
      en: 'state',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'leste',
      en: 'east',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'direito',
      en: 'right (direction)',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'lugar',
      en: 'place',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'bairro',
      en: 'neighborhood',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'norte',
      en: 'north',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'oeste',
      en: 'west',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'país',
      en: 'country',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'região',
      en: 'region',
    },
    topic: Topics.Places,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'rio',
      en: 'river',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'rua',
      en: 'street',
    },
    topic: Topics.Places,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sul',
      en: 'south',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'terra',
      en: 'earth',
    },
    topic: Topics.Places,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'banco',
      en: 'bank',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'campo',
      en: 'field',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'empresa',
      en: 'company',
    },
    topic: Topics.Places,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'mercado',
      en: 'marketplace',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'mundo',
      en: 'world',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'governo',
      en: 'government',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'aqui',
      en: 'here',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ali, lá, aí',
      en: 'there',
    },
    topic: Topics.Places,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'abaixo',
      en: 'below',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'acima',
      en: 'above',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'perto',
      en: 'close',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'longe',
      en: 'far',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'atrás',
      en: 'behind',
    },
    topic: Topics.Places,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dentro',
      en: 'inside',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'fora',
      en: 'outside',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'além',
      en: 'beyond',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'distancia',
      en: 'distance',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'distante',
      en: 'distant',
    },
    topic: Topics.Places,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'lado',
      en: 'side',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'esquerda',
      en: 'left (direction)',
    },
    topic: Topics.Places,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'abrir',
      en: 'to open',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'achar',
      en: 'to find, to think',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ajudar',
      en: 'to help',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'assistir',
      en: 'to watch',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'aumentar',
      en: 'to increase',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'beber',
      en: 'to drink',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'brincar',
      en: 'to joke',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'chamar',
      en: 'to call',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'chegar',
      en: 'to arrive',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'chover',
      en: 'to rain',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'colocar botar',
      en: 'to put',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'começar',
      en: 'to start',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'comer',
      en: 'to eat',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'comprar',
      en: 'to buy',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cuidar',
      en: 'to care',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dar',
      en: 'to give',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'deixar',
      en: 'to leave',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dirijir',
      en: 'to drive',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dizer',
      en: 'to say',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'escrever',
      en: 'to write',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'estar, ser',
      en: 'to be',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'falar',
      en: 'to speak',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'fazer',
      en: 'to do',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ficar',
      en: 'to become, to stay, to be',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'gostar',
      en: 'to like',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ir',
      en: 'to go',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ler',
      en: 'to read',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'levar',
      en: 'to take',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'mostrar',
      en: 'to show',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'orar',
      en: 'to pray',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ouvir',
      en: 'to hear',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'parecer',
      en: 'to feel, to seem',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'passar',
      en: 'to pass',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pensar',
      en: 'to think',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'poder',
      en: 'to be able to, can',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'precisar',
      en: 'to need',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'querer',
      en: 'to want',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'saber',
      en: 'to know',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sair',
      en: 'to go out',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ter',
      en: 'to have',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tocar',
      en: 'to touch',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tomar',
      en: 'to take, to drink',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'trabalhar',
      en: 'to work',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'trazer',
      en: 'to bring',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'usar',
      en: 'to use',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ver',
      en: 'to see',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vestir',
      en: 'to wear',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'viajar',
      en: 'to travel',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vir',
      en: 'to come',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'viver',
      en: 'to live',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'voltar',
      en: 'to go back, to return',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'convidar',
      en: 'to invite',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'receber',
      en: 'to receive',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ensinar',
      en: 'to teach',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'mudar',
      en: 'to change',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sentir',
      en: 'to feel',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'compartilhar',
      en: 'to share',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pedir',
      en: 'to request, to ask for',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cantar',
      en: 'to sing',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pegar',
      en: 'to catch',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'fechar',
      en: 'to close, to shut',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'apoiar',
      en: 'to support',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'acordar',
      en: 'to wake up',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dormir',
      en: 'to sleep',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'acabar, terminar',
      en: 'to finish, to complete',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'confiar',
      en: 'to trust',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'acreditar',
      en: 'to believe',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'morar',
      en: 'to live, to reside',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'criar',
      en: 'to create',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nascer',
      en: 'to be born',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'morrer',
      en: 'to die',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'correr',
      en: 'to run',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'caminhar, andar',
      en: 'to walk',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'concordar',
      en: 'to agree',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'descrever',
      en: 'to describe',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pagar',
      en: 'to pay',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'escolher',
      en: 'to choose',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sempre que',
      en: 'whenever',
    },
    topic: Topics.Adverbs,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'comum',
      en: 'common',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'Eu tenho que',
      en: 'I have to',
    },
    topic: Topics.Expressions,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cedo',
      en: 'early',
    },
    topic: Topics.Adjectives,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'exercício',
      en: 'exercise',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'castanho',
      en: 'brown',
    },
    topic: Topics.Colors,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pelo menos',
      en: 'at least',
    },
    topic: Topics.Conjunctions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'criadora',
      en: 'creator',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'neste',
      en: 'in this',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
    contraction: 'em este',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'seguir',
      en: 'to follow',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'padrão',
      en: 'pattern',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'entrar',
      en: 'to enter',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'Único',
      en: 'only, single',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'naturalmente',
      en: 'naturally',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'verão',
      en: 'summer',
    },
    topic: Topics.Calendar,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'primavera',
      en: 'spring',
    },
    topic: Topics.Calendar,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'outono',
      en: 'autumn',
    },
    topic: Topics.Calendar,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'inverno',
      en: 'winter',
    },
    topic: Topics.Calendar,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'bochecha',
      en: 'cheek',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'bumbum',
      en: 'butt',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'menino',
      en: 'boy',
    },
    topic: Topics.Family,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'menina',
      en: 'girl',
    },
    topic: Topics.Family,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cachorro, cão',
      en: 'dog',
    },
    topic: Topics.Animals,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'gato',
      en: 'cat',
    },
    topic: Topics.Animals,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tigre',
      en: 'tiger',
    },
    topic: Topics.Animals,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'leão',
      en: 'lion',
    },
    topic: Topics.Animals,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'coala',
      en: 'koala',
    },
    topic: Topics.Animals,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cavalo',
      en: 'horse',
    },
    topic: Topics.Animals,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pássaro',
      en: 'bird',
    },
    topic: Topics.Animals,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'parar',
      en: 'to stop',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'lamber',
      en: 'to lick',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cozinhar',
      en: 'to cook',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'digitar',
      en: 'to type, to key (in)',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'esquecer',
      en: 'to forget',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'espelho',
      en: 'mirror',
    },
    topic: Topics.House,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'alimentar',
      en: 'to feed',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'abraçar',
      en: 'to hug, to hold',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'curto',
      en: 'short',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'alto',
      en: 'tall, high',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'conhecer',
      en: 'to know (person, place)',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'chorar',
      en: 'to cry',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'conseguir',
      en: 'to get, to obtain',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'contar',
      en: 'to tell',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'brigar',
      en: 'to fight',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'chapéu',
      en: 'cowboy hat, gaucho hat',
    },
    topic: Topics.Clothes,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'filho',
      en: 'son',
    },
    topic: Topics.Family,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'filha',
      en: 'daughter',
    },
    topic: Topics.Family,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'filhos',
      en: 'children',
    },
    topic: Topics.Family,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pais',
      en: 'parents',
    },
    topic: Topics.Family,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'explicar',
      en: 'to explain',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'decidir',
      en: 'to decide',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'versículo',
      en: 'verse',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'capítulo',
      en: 'chapter',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'portanto',
      en: 'therefore',
    },
    topic: Topics.Conjunctions,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sem',
      en: 'without',
    },
    topic: Topics.Conjunctions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'rico',
      en: 'rich',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pobre',
      en: 'poor',
    },
    topic: Topics.Adjectives,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ligar',
      en: 'to connect',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'olhar',
      en: 'to look at',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'esconder',
      en: 'to hide',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'melhorar',
      en: 'to improve',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'crescer',
      en: 'to grow',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'inscrever',
      en: 'to enroll, sign up',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'notificação',
      en: 'notification',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'significado',
      en: 'meaning',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'prestar atenção',
      en: 'pay attention',
    },
    topic: Topics.Expressions,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'qualidade',
      en: 'quality',
    },
    topic: Topics.Adjectives,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quantidade',
      en: 'quantity',
    },
    topic: Topics.Adjectives,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pode ser',
      en: 'it can be',
    },
    topic: Topics.Expressions,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'Último',
      en: 'last, latest',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'levantar',
      en: 'to get up',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cair',
      en: 'to fall',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sentar',
      en: 'to sit',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'escutar',
      en: 'to listen',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'interior',
      en: 'inside, inner',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'fala sério',
      en: 'seriously?',
    },
    topic: Topics.Expressions,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'rir',
      en: 'to laugh',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pular',
      en: 'to jump',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'abaixar',
      en: 'to lower',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vender',
      en: 'to sell',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'o tempo todo',
      en: 'all the time',
    },
    topic: Topics.Expressions,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'o dia todo',
      en: 'all day',
    },
    topic: Topics.Expressions,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'regra',
      en: 'rule',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'Ótimo',
      en: 'great',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'engraçado',
      en: 'funny',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'data',
      en: 'date',
    },
    topic: Topics.Calendar,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ansiedade',
      en: 'anxiety',
    },
    topic: Topics.Adverbs,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'inteiro',
      en: 'entire, whole, full',
    },
    topic: Topics.Adjectives,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'culpa',
      en: 'fault, guilt',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'feito',
      en: 'done, made',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'arrumar',
      en: 'to arrange, organize, tidy up',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'temporada',
      en: 'season',
    },
    topic: Topics.Calendar,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'barato',
      en: 'cheap',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'caro',
      en: 'expensive',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vontade',
      en: 'will, desire',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'anterior',
      en: 'previous',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'bancário',
      en: 'banker',
    },
    topic: Topics.Jobs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'repetir',
      en: 'to repeat',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nunca',
      en: 'never',
    },
    topic: Topics.Adjectives,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'caixa',
      en: 'box, cash register',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'gastar',
      en: 'to spend money',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'rede social',
      en: 'social network',
    },
    topic: Topics.Noun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'rede',
      en: 'network',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'morder',
      en: 'to bite',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dica',
      en: 'tip, hint',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'molhado',
      en: 'wet, damp',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nordeste',
      en: 'northeast',
    },
    topic: Topics.Places,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'noroeste',
      en: 'northwest',
    },
    topic: Topics.Places,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sudoeste',
      en: 'southwest',
    },
    topic: Topics.Places,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sudeste',
      en: 'southeast',
    },
    topic: Topics.Places,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'deitar',
      en: 'to lay down',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'máquina',
      en: 'machine',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cérebro',
      en: 'brain',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'manter',
      en: 'to maintain',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'impossível',
      en: 'impossible',
    },
    topic: Topics.Adjectives,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'doenças',
      en: 'illnesses',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'poderosa',
      en: 'powerful',
    },
    topic: Topics.Adjectives,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'disponível',
      en: 'available',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vizinho',
      en: 'neighbor',
    },
    topic: Topics.Family,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tarefa',
      en: 'task',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'provavelmente',
      en: 'probably',
    },
    topic: Topics.Adverbs,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'motivo',
      en: 'reason, motive',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'equipe',
      en: 'team',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'duplo',
      en: 'double',
    },
    topic: Topics.Numbers,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'triplo',
      en: 'triple',
    },
    topic: Topics.Numbers,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'habilidade',
      en: 'skills, ability',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'descobrir',
      en: 'to discover',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pena',
      en: 'pity',
    },
    topic: Topics.Adjectives,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'adorar',
      en: 'to adore',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'mandar, enviar',
      en: 'to send',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'salvar',
      en: 'to save',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'divertido',
      en: 'fun',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nadar',
      en: 'to swim',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dever',
      en: 'should, must do',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'gentil',
      en: 'kind',
    },
    topic: Topics.Adjectives,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'bondade',
      en: 'kindness, goodness',
    },
    topic: Topics.Adverbs,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'loja',
      en: 'store',
    },
    topic: Topics.Places,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'raspar',
      en: 'to shave (head)',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'depilar',
      en: 'to shave (body)',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'adjetivo',
      en: 'adjective',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'advérbio',
      en: 'adverb',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'preposição',
      en: 'preposition',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'completamente',
      en: 'completely',
    },
    topic: Topics.Adverbs,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'animado',
      en: 'excited',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'guardar',
      en: 'put away, store',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'noiva',
      en: 'bride',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'noivo',
      en: 'groom',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'agendar',
      en: 'to schedule',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sinto falto',
      en: 'i miss you',
    },
    topic: Topics.Expressions,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vergonha',
      en: 'shame',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sobrenome',
      en: 'last name',
    },
    topic: Topics.Noun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'soletrar',
      en: 'to spell',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'a hora',
      en: 'time',
    },
    topic: Topics.Calendar,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'senhor',
      en: 'gentleman',
    },
    topic: Topics.Family,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'senhora',
      en: 'madam',
    },
    topic: Topics.Family,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'processo',
      en: 'process',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'serviço',
      en: 'service',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'reunião, encontro',
      en: 'meeting',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'situação',
      en: 'situation',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'acordo',
      en: 'agreement',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'conta',
      en: 'account',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'médico',
      en: 'doctor',
    },
    topic: Topics.Jobs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'início',
      en: 'start',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'maneira',
      en: 'manner',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'espaço',
      en: 'space',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'futuro',
      en: 'future',
    },
    topic: Topics.Calendar,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'passado',
      en: 'past',
    },
    topic: Topics.Calendar,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'maioria',
      en: 'majority',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'falto',
      en: 'lack, absence',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'líder',
      en: 'leader',
    },
    topic: Topics.Jobs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'polícia',
      en: 'police',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'rei',
      en: 'king',
    },
    topic: Topics.Jobs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'mar',
      en: 'sea',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'assunto',
      en: 'theme, topic',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'conhecimento',
      en: 'knowledge',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'seguro',
      en: 'safe, secure',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'conselho',
      en: 'advice',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ilha',
      en: 'island',
    },
    topic: Topics.Places,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'alma',
      en: 'soul',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'venda',
      en: 'sale',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pesquisa',
      en: 'search, research',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'resposta',
      en: 'answer, response',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'natureza',
      en: 'nature',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'companhia',
      en: 'company, companionship',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'comportamento',
      en: 'behavior',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'medicamento',
      en: 'medicine',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dias de semana',
      en: 'weekdays',
    },
    topic: Topics.Calendar,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'descansa',
      en: 'rest, sleep',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'estrangeiro',
      en: 'foreigner',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'respeito',
      en: 'respect',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ambiente',
      en: 'environment',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dúvida',
      en: 'doubt',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'imposto',
      en: 'tax',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'mudança',
      en: 'change, move',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'artigo',
      en: 'article',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'marido',
      en: 'husband',
    },
    topic: Topics.Family,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'esposa',
      en: 'wife',
    },
    topic: Topics.Family,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sinal',
      en: 'signal',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'género',
      en: 'gender',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'graça',
      en: 'grace',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'paz',
      en: 'peace',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'custo',
      en: 'cost',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'céu',
      en: 'sky, heaven',
    },
    topic: Topics.Weather,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'crescimento',
      en: 'growth',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'estilo',
      en: 'style',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'estrela',
      en: 'star',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'conversa',
      en: 'conversation',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'café',
      en: 'coffee',
    },
    topic: Topics.Food,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'certeza',
      en: 'certain, certainly',
    },
    topic: Topics.Adverbs,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'dor',
      en: 'pain',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sonho',
      en: 'dream',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ouro',
      en: 'gold',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'onda',
      en: 'wave',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'peso',
      en: 'weight',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pesa',
      en: 'weigh',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'gordo',
      en: 'fat',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'carne',
      en: 'meat',
    },
    topic: Topics.Food,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pintura',
      en: 'painting',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'museu',
      en: 'museum',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'fogo',
      en: 'fire',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'peixe',
      en: 'fish',
    },
    topic: Topics.Food,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tamanho',
      en: 'size',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sede',
      en: 'thirst',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'jardim',
      en: 'garden',
    },
    topic: Topics.Plants,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'gestão',
      en: 'management',
    },
    topic: Topics.Jobs,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'advogado',
      en: 'attorney',
    },
    topic: Topics.Jobs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'grau',
      en: 'degree',
    },
    topic: Topics.Weather,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'casamento',
      en: 'marriage',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'saída',
      en: 'exit',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'parque',
      en: 'park',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'resfriado',
      en: 'illness, cold',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'praia',
      en: 'beach',
    },
    topic: Topics.Places,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cruz',
      en: 'cross',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'perda',
      en: 'loss, waste',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'bolsa',
      en: 'handbag, purse',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'magrelo',
      en: 'skinny, thin',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'alegria',
      en: 'joy',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'telefone',
      en: 'telephone',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'breve',
      en: 'brief',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sorriso',
      en: 'smile',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sorte',
      en: 'luck',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'perigo',
      en: 'danger',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'perigoso',
      en: 'dangerous',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'aproveitar',
      en: 'to enjoy',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'beleza',
      en: 'beauty',
    },
    topic: Topics.Adjectives,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'leitura',
      en: 'reading',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'navio',
      en: 'ship',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'paixão',
      en: 'passion',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'trocar',
      en: 'to replace',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tirar',
      en: 'to remove, take away',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'fome',
      en: 'hunger',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'faculdade',
      en: 'college',
    },
    topic: Topics.Places,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'garganta',
      en: 'throat',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'mensagem',
      en: 'message',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'prédio, edifício',
      en: 'building',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'coragem',
      en: 'courage',
    },
    topic: Topics.Adjectives,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'montanha',
      en: 'mountain',
    },
    topic: Topics.Places,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'paciente',
      en: 'patient',
    },
    topic: Topics.Adjectives,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pedido',
      en: 'order',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'fé',
      en: 'faith',
    },
    topic: Topics.Adjectives,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'desafio',
      en: 'challenge',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'academia',
      en: 'gym',
    },
    topic: Topics.Places,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nuvem',
      en: 'cloud',
    },
    topic: Topics.Weather,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nascimento',
      en: 'birth',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'almoço',
      en: 'lunch',
    },
    topic: Topics.Food,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'jantar',
      en: 'dinner',
    },
    topic: Topics.Food,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'toalha',
      en: 'towel',
    },
    topic: Topics.House,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'escova de dente',
      en: 'toothbrush',
    },
    topic: Topics.House,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'xampu',
      en: 'shampoo',
    },
    topic: Topics.House,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'desodorante',
      en: 'deodorant',
    },
    topic: Topics.House,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tigela',
      en: 'bowl',
    },
    topic: Topics.House,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'xícara',
      en: 'coffee cup',
    },
    topic: Topics.House,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'copo',
      en: 'glass, cup',
    },
    topic: Topics.House,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'feio',
      en: 'ugly',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'logo',
      en: 'soon',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'chupar',
      en: 'to suck',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'moça',
      en: 'young woman',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'moço',
      en: 'young man',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'duvidar',
      en: 'to doubt',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'escrita',
      en: 'writing',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'anteontem',
      en: 'day before yesterday',
    },
    topic: Topics.Calendar,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'armário',
      en: 'closet',
    },
    topic: Topics.House,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pelo',
      en: 'fur',
    },
    topic: Topics.Animals,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'flor',
      en: 'flower',
    },
    topic: Topics.Plants,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sentido',
      en: 'sense',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'forte',
      en: 'strong',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'lua',
      en: 'moon',
    },
    topic: Topics.Weather,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'seios',
      en: 'breasts',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'escova',
      en: 'brush',
    },
    topic: Topics.House,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ovelha',
      en: 'sheep',
    },
    topic: Topics.Animals,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'carneiro',
      en: 'ram',
    },
    topic: Topics.Animals,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'urso',
      en: 'bear',
    },
    topic: Topics.Animals,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'lobo',
      en: 'wolf',
    },
    topic: Topics.Animals,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'mexer',
      en: 'to mix, stir, move',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'provar',
      en: 'to taste',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'desenvolvedores de software',
      en: 'software engineer',
    },
    topic: Topics.Jobs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'endereço',
      en: 'address',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'comparar',
      en: 'to compare',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sobremesa',
      en: 'dessert',
    },
    topic: Topics.Food,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'leve',
      en: 'light',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pesado',
      en: 'heavy',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'prata',
      en: 'silver',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'barco',
      en: 'boat',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sábio',
      en: 'wise',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'agradável',
      en: 'pleasant',
    },
    topic: Topics.Adjectives,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'principalmente',
      en: 'mainly',
    },
    topic: Topics.Adverbs,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'príncipe',
      en: 'prince',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'preparar',
      en: 'to prepare',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'detalhe',
      en: 'detail',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'convidado',
      en: 'guest',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'revisar',
      en: 'to review',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'praticar',
      en: 'to practice',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'primeiro',
      en: 'first',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'segundo',
      en: 'second',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'terceiro',
      en: 'third',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quarto',
      en: 'fourth',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quinto',
      en: 'fifth',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sexto',
      en: 'sixth',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sétimo',
      en: 'seventh',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'oitava',
      en: 'eigth',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nono',
      en: 'ninth',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'décimo',
      en: 'tenth',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vigésimo',
      en: 'twentieth',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'trigésimo',
      en: 'thirtieth',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quadragésimo',
      en: 'fortieth',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quinquagésimo',
      en: 'fiftieth',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sexagésimo',
      en: 'sixtieth',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'septagésimo',
      en: 'seventieth',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'octogésimo',
      en: 'eightieth',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nonagésimo',
      en: 'nintieth',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'centésimo',
      en: 'one hundreth',
    },
    topic: Topics.Numbers,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'juntar',
      en: 'to join',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'estrutura',
      en: 'structure',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'frase',
      en: 'sentence',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'andar',
      en: 'floor (building)',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'feriado',
      en: 'holiday',
    },
    topic: Topics.Calendar,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'férias',
      en: 'vacation',
    },
    topic: Topics.Noun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'está na hora de (verb)',
      en: 'it is time to (verb)',
    },
    topic: Topics.Expressions,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'assim de diante',
      en: 'so on',
    },
    topic: Topics.Expressions,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'a partir daqui',
      en: 'from here',
    },
    topic: Topics.Expressions,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'a partir de agora',
      en: 'from now on',
    },
    topic: Topics.Expressions,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'a partir de hoje',
      en: 'from today',
    },
    topic: Topics.Expressions,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'térreo',
      en: 'ground floor',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'colo',
      en: 'lap',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'malhar',
      en: 'to work out (exercise)',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'aparecer',
      en: 'to appear',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cansativo',
      en: 'tiring',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'predileto favorito',
      en: 'favorite',
    },
    topic: Topics.Noun,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'linha',
      en: 'line',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'lançar',
      en: 'to launch, throw',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'puxar',
      en: 'to pull',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'puxe',
      en: 'pull',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'empurrar',
      en: 'to push',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'empurre',
      en: 'to push',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'bater',
      en: 'to beat',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'escritório',
      en: 'office (place)',
    },
    topic: Topics.Noun,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'queixo',
      en: 'chin',
    },
    topic: Topics.Body,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'carregador',
      en: 'charger',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cometar',
      en: 'to commit',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'perdoar',
      en: 'to forgive',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'torcer',
      en: 'to cheer',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'apagar',
      en: 'to delete',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'altura',
      en: 'height',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'veículo',
      en: 'vehicle',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'público',
      en: 'public',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'privado',
      en: 'private',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'milho',
      en: 'corn',
    },
    topic: Topics.Food,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'melancia',
      en: 'watermelon',
    },
    topic: Topics.Food,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'melão',
      en: 'melon',
    },
    topic: Topics.Food,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ganhar, vencer',
      en: 'to win',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'perder',
      en: 'to lose (game)',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'medida',
      en: 'measure',
    },
    topic: Topics.Places,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cliente',
      en: 'customer',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'desenvolver',
      en: 'to develop',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'projeto',
      en: 'project',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ações',
      en: 'stocks (trading)',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'desenvolvimento',
      en: 'development',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'obra',
      en: 'work',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'necessidade',
      en: 'need',
    },
    topic: Topics.Adverbs,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'segurança',
      en: 'safety',
    },
    topic: Topics.Adverbs,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'risco',
      en: 'risk',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'recurso',
      en: 'resource',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'técnico',
      en: 'technical',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'responsável',
      en: 'responsible',
    },
    topic: Topics.Adjectives,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'utilizar',
      en: 'to utilize, to use',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'confirmar',
      en: 'to confirm',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'negócio',
      en: 'business',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'notícias, novidade',
      en: 'news',
    },
    topic: Topics.Noun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ocorrer',
      en: 'to occur',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'apesar',
      en: 'despite',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pretender',
      en: 'to intend',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'objectivo',
      en: 'objective',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'utilizador, usuário',
      en: 'user',
    },
    topic: Topics.Noun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'divulgar',
      en: 'to spread',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'financeiro',
      en: 'financial',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'prazo',
      en: 'deadline',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'equipamento',
      en: 'equipment',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'obter',
      en: 'to obtain',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'política',
      en: 'politics',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'marca',
      en: 'brand, mark',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'investimento',
      en: 'investment',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'atingir',
      en: 'to reach, to achieve',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'economia',
      en: 'economy',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'crise',
      en: 'crisis',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'evitar',
      en: 'to avoid',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tratar',
      en: 'to treat',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'clube',
      en: 'club',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'conteúdo',
      en: 'content',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'positivo',
      en: 'positive',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'negativo',
      en: 'negative',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'interesse',
      en: 'interest',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'oferecer',
      en: 'to offer',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'energia',
      en: 'energy',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'reduzir',
      en: 'to reduce',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'página',
      en: 'page',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tratamento',
      en: 'treatment',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'subir',
      en: 'to rise, climb, move up',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'caminho',
      en: 'way, path',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'apontar',
      en: 'to point out, to indicate',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'atendimento',
      en: 'attendance',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sofrer',
      en: 'to suffer',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'policial',
      en: 'police officer',
    },
    topic: Topics.Noun,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cumprir',
      en: 'to fulfill',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'entregar',
      en: 'to deliver',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cuidado',
      en: 'caution',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'oferta',
      en: 'offer',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'contrato',
      en: 'contract',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'movimento',
      en: 'movement',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'militar',
      en: 'military',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'parceria',
      en: 'partnership',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ciência',
      en: 'science',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'controlo',
      en: 'control',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'entrevista',
      en: 'interview',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'construir',
      en: 'to build',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'parceiro',
      en: 'partner',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'livre, gratuito',
      en: 'free',
    },
    topic: Topics.Adjectives,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'funcionário',
      en: 'employee',
    },
    topic: Topics.Jobs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ferramenta',
      en: 'tool',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'mundial',
      en: 'worldwide',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vaga',
      en: 'vacancy',
    },
    topic: Topics.Jobs,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'proteger',
      en: 'to protect',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'fornecer',
      en: 'to provide',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'fornecedo',
      en: 'supplier',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'contato',
      en: 'contact',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'horário',
      en: 'time',
    },
    topic: Topics.Calendar,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'liberdade',
      en: 'freedom',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'matar',
      en: 'to kill',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'desejar',
      en: 'to wish',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'comprador',
      en: 'buyer',
    },
    topic: Topics.Jobs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vendedor',
      en: 'salesman, seller',
    },
    topic: Topics.Jobs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'experimentar',
      en: 'to try on',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'atrasado, tarde',
      en: 'late',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vaca',
      en: 'cow',
    },
    topic: Topics.Animals,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'mel',
      en: 'honey',
    },
    topic: Topics.Food,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'jacaré',
      en: 'alligator',
    },
    topic: Topics.Animals,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'lagoa',
      en: 'lagoon',
    },
    topic: Topics.Places,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'corrigir',
      en: 'to correct',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'plantão',
      en: 'duty',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'adicionar',
      en: 'to add',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'abrigo',
      en: 'shelter',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'rodovia',
      en: 'highway',
    },
    topic: Topics.Places,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cobertor',
      en: 'blanket',
    },
    topic: Topics.House,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'travesseiro',
      en: 'pillow',
    },
    topic: Topics.House,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'fronha',
      en: 'pillow case',
    },
    topic: Topics.House,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'raiva',
      en: 'anger',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'gritar',
      en: 'to shout',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'barulho',
      en: 'noise',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'som',
      en: 'sound',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'calar',
      en: 'to silence',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cala a sua boca',
      en: 'shut your mouth',
    },
    topic: Topics.Expressions,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'calma',
      en: 'calm',
    },
    topic: Topics.Body,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'gemer',
      en: 'to moan, groan',
    },
    topic: Topics.Verbs,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pato',
      en: 'duck',
    },
    topic: Topics.Animals,
  },
];

export default vocabulary;
