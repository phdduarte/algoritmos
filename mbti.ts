const tiposMBTI = ["ISTJ", "ISFJ", "INFJ", "INTJ", "ISTP", "ISFP", "INFP", "INTP", "ESTP", "ESFP", "ENFP", "ENTP", "ESTJ", "ESFJ", "ENFJ", "ENTJ"];

const compatibilidadeMBTI: number[][] = [
				//  0     1     2     3     4     5     6     7     8     9     10    11    12    13    14    15
  			// ISTJ  ISFJ  INFJ  INTJ  ISTP  ISFP  INFP  INTP  ESTP  ESFP  ENFP  ENTP  ESTJ  ESFJ  ENFJ  ENTJ
  /* 0 */	[ 0.8,  0.6,  0.3,  0.4,  0.6,  0.4,  0.2,  0.3,  0.5,  0.3,  0.1,  0.2,  0.7,  0.5,  0.2,  0.4 ], // ISTJ
  /* 1 */	[ 0.6,  0.8,  0.5,  0.3,  0.4,  0.6,  0.4,  0.2,  0.3,  0.5,  0.3,  0.1,  0.5,  0.7,  0.4,  0.2 ], // ISFJ
  /* 2 */	[ 0.3,  0.5,  0.8,  0.6,  0.2,  0.4,  0.6,  0.4,  0.1,  0.3,  0.7,  0.5,  0.2,  0.4,  0.7,  0.5 ], // INFJ
  /* 3 */	[ 0.4,  0.3,  0.6,  0.8,  0.4,  0.2,  0.4,  0.6,  0.2,  0.1,  0.5,  0.7,  0.4,  0.2,  0.5,  0.7 ], // INTJ
  /* 4 */	[ 0.6,  0.4,  0.2,  0.4,  0.8,  0.6,  0.3,  0.5,  0.7,  0.5,  0.2,  0.4,  0.5,  0.3,  0.1,  0.3 ], // ISTP
  /* 5 */	[ 0.4,  0.6,  0.4,  0.2,  0.6,  0.8,  0.5,  0.3,  0.5,  0.7,  0.4,  0.2,  0.3,  0.5,  0.3,  0.1 ], // ISFP
  /* 6 */	[ 0.2,  0.4,  0.6,  0.4,  0.3,  0.5,  0.8,  0.5,  0.2,  0.4,  0.6,  0.4,  0.1,  0.3,  0.5,  0.3 ], // INFP
  /* 7 */	[ 0.3,  0.2,  0.4,  0.6,  0.5,  0.3,  0.5,  0.8,  0.4,  0.2,  0.6,  0.7,  0.2,  0.1,  0.4,  0.6 ], // INTP
  /* 8 */	[ 0.5,  0.3,  0.1,  0.2,  0.7,  0.5,  0.2,  0.4,  0.8,  0.6,  0.3,  0.5,  0.6,  0.4,  0.2,  0.4 ], // ESTP
  /* 9 */	[ 0.3,  0.5,  0.3,  0.1,  0.5,  0.7,  0.4,  0.2,  0.6,  0.8,  0.5,  0.3,  0.4,  0.6,  0.4,  0.2 ], // ESFP
  /* 10 */[ 0.1,  0.3,  0.7,  0.5,  0.2,  0.4,  0.6,  0.6,  0.3,  0.5,  0.8,  0.6,  0.1,  0.3,  0.7,  0.5 ], // ENFP
  /* 11 */[ 0.2,  0.1,  0.5,  0.7,  0.4,  0.2,  0.4,  0.7,  0.5,  0.3,  0.6,  0.8,  0.2,  0.1,  0.5,  0.7 ], // ENTP
	/* 12 */[ 0.7,  0.5,  0.2,  0.4,  0.5,  0.3,  0.1,  0.2,  0.6,  0.4,  0.1,  0.2,  0.8,  0.6,  0.3,  0.5 ], // ESTJ
  /* 13 */[ 0.5,  0.7,  0.4,  0.2,  0.3,  0.5,  0.3,  0.1,  0.4,  0.6,  0.3,  0.1,  0.6,  0.8,  0.5,  0.3 ], // ESFJ
  /* 14 */[ 0.2,  0.4,  0.7,  0.5,  0.1,  0.3,  0.5,  0.4,  0.2,  0.4,  0.7,  0.5,  0.3,  0.5,  0.8,  0.6 ], // ENFJ
  /* 15 */[ 0.4,  0.2,  0.5,  0.7,  0.3,  0.1,  0.3,  0.6,  0.4,  0.2,  0.5,  0.7,  0.5,  0.3,  0.6,  0.8 ], // ENTJ
];


// TODO: Vai ser necessario revisar cada um desses pontos, principalmente os que estao com numero 1

// TODO: Vai ser preciso criar um matriz com as mensagens dizendo sobre ambos como nos exemplos a seguir:

// TODO: Na verdade eu vou ter que criar paginas assim para cada uma das personalidades https://personalityatwork.co/personality-type/istj/vs/istj

/*
ISTJ e ISTJ (0.8): Ambos são práticos, orientados a detalhes e valorizam a tradição. Eles podem trabalhar bem juntos, mas pode haver falta de inovação e criatividade devido à similaridade de pensamento.

ISFJ e ISFJ (0.8): Ambos são cuidadosos, solidários e focados no bem-estar dos outros. No entanto, a similaridade pode levar a dificuldades na tomada de decisões e falta de objetividade.

INFJ e INFJ (0.8): Ambos são empáticos, intuitivos e focados no bem maior. Eles podem se conectar profundamente, mas a intensidade emocional pode ser desgastante e a falta de perspectivas divergentes pode ser limitante.

INTJ e INTJ (0.8): Ambos são analíticos, orientados a objetivos e valorizam a lógica. Eles podem trabalhar bem juntos, mas a falta de expressão emocional pode limitar a profundidade do relacionamento.

ISTP e ISTP (0.8): Ambos são práticos, adaptáveis e amam resolver problemas. Eles podem se dar bem, mas a falta de conexão emocional e a tendência à introvertido podem criar uma distância entre eles.

ISFP e ISFP (0.8): Ambos são sensíveis, criativos e focados no momento presente. Eles podem se conectar emocionalmente, mas a falta de planejamento e organização pode levar a desafios no relacionamento.

INFP e INFP (0.8): Ambos são idealistas, sensíveis e introspectivos. Eles podem se conectar profundamente, mas podem enfrentar desafios na tomada de decisões práticas e na comunicação eficaz.

INTP e INTP (0.8): Ambos são analíticos, criativos e amam explorar ideias complexas. Eles podem se dar bem intelectualmente, mas a falta de expressão emocional pode criar distância no relacionamento.

ESTP e ESTP (0.8): Ambos são energéticos, práticos e amam ação. Eles podem se divertir juntos, mas podem enfrentar desafios na comunicação emocional e na estabilidade do relacionamento.

ESFP e ESFP (0.8): Ambos são sociáveis, entusiastas e focados no momento presente. Eles podem se divertir juntos, mas podem ter dificuldades em lidar com questões mais profundas e em encontrar estabilidade.

ENFP e ENFP (0.8): Ambos são idealistas, entusiastas e criativos. Eles podem se conectar emocionalmente, mas podem enfrentar desafios na tomada de decisões práticas e na manutenção da estabilidade.

ENTP e ENTP (0.8): Ambos são inovadores, criativos e amam explorar novas ideias. Eles podem se dar bem intelectualmente, mas podem enfrentar dificuldades na comunicação emocional e na tomada de decisões práticas.

ESTJ e ESTJ (0.8): Ambos são organizados, orientados a objetivos e valorizam a eficiência. Eles podem trabalhar bem juntos, mas podem enfrentar dificuldades na expressão emocional e na aceitação de diferentes perspectivas.

ESFJ e ESFJ (0.8): Ambos são solidários, organizados e focados no bem-estar dos outros. Eles podem se conectar emocionalmente, mas podem enfrentar desafios na objetividade e na aceitação de diferentes pontos de vista.

ENFJ e ENFJ (0.8): Ambos são empáticos, inspiradores e orientados para o bem maior. Eles podem se conectar profundamente, mas a intensidade emocional e a falta de perspectivas divergentes podem ser limitantes.

ENTJ e ENTJ (0.8): Ambos são ambiciosos, orientados a objetivos e valorizam a eficiência. Eles podem trabalhar bem juntos, mas a falta de expressão emocional e a tendência a dominar podem limitar a profundidade do relacionamento.
*/
