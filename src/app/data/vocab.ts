import { v4 as uuidv4 } from 'uuid';
import { Topics, Gender } from '../constants';
import { vocab } from '../types';

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
      pt: 'me',
      en: 'me',
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
      pt: 'meus',
      en: 'my',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'minhas',
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
      pt: 'você',
      en: 'you',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'seu',
      en: 'your',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'sua',
      en: 'your',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'se',
      en: 'yourself',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'consigo',
      en: 'with you',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tu',
      en: 'you',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'te',
      en: 'you',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'teu',
      en: 'your',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tua',
      en: 'your',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'teus',
      en: 'your',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tuas',
      en: 'your',
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
      en: 'her',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'o',
      en: 'him',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'lo',
      en: 'him',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'a',
      en: 'her',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'la',
      en: 'her',
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
      pt: 'nós',
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
      pt: 'nosso',
      en: 'our',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nossos',
      en: 'ours',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nossa',
      en: 'our',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nossas',
      en: 'ours',
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
      pt: 'seus',
      en: 'yours',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'suas',
      en: 'yours',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
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
      pt: 'os',
      en: 'them',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'los',
      en: 'them',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'as',
      en: 'them',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'las',
      en: 'them',
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
      pt: 'este',
      en: 'this',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'esta',
      en: 'this',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'isto',
      en: 'this',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'estes',
      en: 'these',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'estas',
      en: 'these',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'esse',
      en: 'that',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'essa',
      en: 'that',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'isso',
      en: 'that',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'aquele',
      en: 'that',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'aquela',
      en: 'that',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'aquelo',
      en: 'that',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'esses',
      en: 'those',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'essas',
      en: 'those',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'aquelas',
      en: 'those',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'aquelos',
      en: 'those',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'que',
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
      pt: 'qual',
      en: 'which',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'quais',
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
      pt: 'cuja',
      en: 'whose',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
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
      pt: 'quanta',
      en: 'how much',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
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
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'menos',
      en: 'less',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
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
      pt: 'algum',
      en: 'some',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'algumas',
      en: 'some',
    },
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
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
    topic: Topics.Pronoun,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tanto',
      en: 'so much',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tantos',
      en: 'so much',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tanta',
      en: 'so much',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tantas',
      en: 'so much',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pouco',
      en: 'few',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pouca',
      en: 'few',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'muito',
      en: 'many',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'muita',
      en: 'many',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vários',
      en: 'several',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'várias',
      en: 'several',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
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
      pt: 'toda',
      en: 'all',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ambos',
      en: 'both',
    },
    topic: Topics.Pronoun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'ambas',
      en: 'both',
    },
    topic: Topics.Pronoun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'acção',
      en: 'action',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'actividade',
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
      en: 'forma',
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
      pt: 'lado',
      en: 'side',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
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
      en: 'times',
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
      en: 'sweater',
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
      en: 'shirt',
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
      pt: 'salto alto',
      en: 'high heels',
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
      pt: 'no entanto',
      en: 'however',
    },
    topic: Topics.Conjunctions,
    gender: Gender.Neutral,
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
      pt: 'porque',
      en: 'because',
    },
    topic: Topics.Conjunctions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pois',
      en: 'because',
    },
    topic: Topics.Conjunctions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'porém',
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
      en: 'like',
    },
    topic: Topics.Conjunctions,
    gender: Gender.Neutral,
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
      pt: 'menos',
      en: 'less',
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
      pt: 'fundo',
      en: 'bottom',
    },
    topic: Topics.Adjectives,
    gender: Gender.Male,
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
      pt: 'cerca de',
      en: 'nearly',
    },
    topic: Topics.Adverbs,
    gender: Gender.Female,
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
      pt: 'devangar',
      en: 'slowly',
    },
    topic: Topics.Adverbs,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'apenas',
      en: 'only',
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
      pt: 'pouco',
      en: 'little',
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
      pt: 'avós',
      en: 'grandmother',
    },
    topic: Topics.Family,
    gender: Gender.Female,
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
      en: 'weather',
    },
    topic: Topics.Weather,
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
      pt: 'soalho',
      en: 'floor',
    },
    topic: Topics.House,
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
      pt: 'olhos',
      en: 'eyes',
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
      pt: 'cara',
      en: 'face',
    },
    topic: Topics.Body,
    gender: Gender.Male,
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
      pt: 'orelha',
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
      pt: 'estômago',
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
      pt: 'carne',
      en: 'meat',
    },
    topic: Topics.Food,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'galinha',
      en: 'chicken',
    },
    topic: Topics.Food,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'vegetais',
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
      pt: 'acima de',
      en: 'above',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'antes de',
      en: 'before',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'após',
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
      pt: 'depois',
      en: 'after',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'desde',
      en: 'from',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'diante de',
      en: 'in front of',
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
      pt: 'perante',
      en: 'before',
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
      en: 'about',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
    contraction: 'de + aqui',
  },
  {
    id: uuidv4(),
    word: {
      pt: 'diante',
      en: 'against',
    },
    topic: Topics.Prepositions,
    gender: Gender.Neutral,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'contra',
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
      pt: 'nao tem de que',
      en: 'you are welcome',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'nao seja por isso',
      en: 'you are welcome',
    },
    topic: Topics.Salutations,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'muito prazer em conhece-lo',
      en: 'nice to meet you',
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
      pt: 'até mais tarde',
      en: 'until later',
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
      pt: 'amarela',
      en: 'yellow',
    },
    topic: Topics.Colors,
    gender: Gender.Female,
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
      pt: 'branca',
      en: 'white',
    },
    topic: Topics.Colors,
    gender: Gender.Female,
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
      pt: 'laranja',
      en: 'orange',
    },
    topic: Topics.Colors,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'preta',
      en: 'black',
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
      pt: 'roxa',
      en: 'purple',
    },
    topic: Topics.Colors,
    gender: Gender.Female,
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
      pt: 'vermelha',
      en: 'red',
    },
    topic: Topics.Colors,
    gender: Gender.Female,
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
      pt: 'ali',
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
      pt: 'lá',
      en: 'there',
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
      pt: 'aí',
      en: 'there',
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
      pt: 'adiante',
      en: 'forward',
    },
    topic: Topics.Places,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'distante',
      en: 'distance',
    },
    topic: Topics.Places,
    gender: Gender.Male,
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
      pt: 'colocar',
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
      pt: 'estar',
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
      pt: 'parecar',
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
      pt: 'ser',
      en: 'to be',
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
      en: 'to take',
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
      pt: 'acabar',
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
      pt: 'caminhar',
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
    topic: Topics.Salutations,
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
      pt: 'tarde',
      en: 'late',
    },
    topic: Topics.Adjectives,
    gender: Gender.Female,
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
      pt: 'dica',
      en: 'tip',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
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
      pt: 'cachorro',
      en: 'dog',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'gato',
      en: 'cat',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'tigre',
      en: 'tiger',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'leão',
      en: 'lion',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'coala',
      en: 'koala',
    },
    topic: Topics.Noun,
    gender: Gender.Female,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'cavalo',
      en: 'horse',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
  {
    id: uuidv4(),
    word: {
      pt: 'pássaro',
      en: 'bird',
    },
    topic: Topics.Noun,
    gender: Gender.Male,
  },
];

export default vocabulary;
