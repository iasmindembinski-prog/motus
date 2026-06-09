"use client";

import { motion } from "framer-motion";
import { Headphones, Book, BookOpen, Radio, Video, LucideIcon } from "lucide-react";
import React from "react";

type ButtonKind = "live" | "book" | "audio" | "video";

interface ButtonDef {
  kind: ButtonKind;
  label: string;
  Icon: LucideIcon;

  variant: "primary" | "secondary";
}

const BUTTON_CATALOG: Record<ButtonKind, ButtonDef> = {
  live: {
    kind: "live",
    label: "Live de Lançamento",
    Icon: Radio,
    variant: "secondary",
  },
  book: {
    kind: "book",
    label: "Livro Acessível",
    Icon: Book,
    variant: "primary",
  },
  audio: {
    kind: "audio",
    label: "Áudio no Spotify",
    Icon: Headphones,
    variant: "secondary",
  },
  video: {
    kind: "video",
    label: "Vídeo Demonstrativo",
    Icon: Video,
    variant: "secondary",
  },
};

// ─────────────────────────────────────────────────────────────
// EDITION DATA TABLE
// To add/edit an edition: create a new entry in EDITIONS.
// To add/edit buttons: fill the `buttons` array with entries
// from BUTTON_CATALOG (kind + href).  Max 4 buttons per edition.
// ─────────────────────────────────────────────────────────────

interface EditionButton {
  kind: ButtonKind;
  /** Full URL the button links to. */
  href: string;
}

interface Edition {
  id: string;
  badge: string;
  title: React.ReactNode;
  paragraphs: React.ReactNode[];
  cover: string;
  coverAlt: string;
  /** true  → cover on the RIGHT, text on the LEFT  (default layout)
   *  false → cover on the LEFT,  text on the RIGHT (alternating) */
  coverRight: boolean;
  /**
   * Button table — up to 4 entries, one per allowed kind.
   *
   * | kind    | label                 | icon       | href                          |
   * |---------|-----------------------|------------|-------------------------------|
   * | live    | Assistir ao Vivo      | Radio      | <url or "">                   |
   * | book    | Livro Acessível       | Book       | <Google Drive / direct link>  |
   * | audio   | Áudio no Spotify      | Headphones | <Spotify link>                |
   * | video   | Vídeo Demonstrativo   | Video      | <YouTube / Vimeo link>        |
   */
  buttons: EditionButton[];
}

const EDITIONS: Edition[] = [
  // ── Motus #9 ──────────────────────────────────────────────
  {
    id: "motus9",
    badge: "Edição Atual",
    title: (
      <>
        Motus #9 <br />
        <span className="text-[var(--accent)] italic">Verdades e Mentiras</span>
      </>
    ),
    paragraphs: [
      <>
        Composto por contos e poemas selecionados através do concurso literário
        que teve como tema &ldquo;Verdades e Mentiras&rdquo;. O concurso recebeu{" "}
        <strong>168 obras válidas</strong> de diversas regiões do Brasil e do
        mundo.
      </>,
      <>
        Cada texto vem acompanhado por uma ilustração inédita da artista{" "}
        <strong>Amanda Gobus Lopes</strong>, e todas as obras estão disponíveis
        em áudio, garantindo acessibilidade plena.
      </>,
    ],
    cover: "/images/capaMotus9.png",
    coverAlt: "Capa Motus #9 — Verdades e Mentiras",
    coverRight: false,
    /*
     * Button table — Motus #9
     * ┌─────────┬─────────────────────────────────────────────────────────────────────┐
     * │  kind   │ href                                                                │
     * ├─────────┼─────────────────────────────────────────────────────────────────────┤
     * │ book    │ https://drive.google.com/file/d/1fdwn0K5DHAuCM3bW8gPVk-Z6LBsNb2x7 │
     * │ audio   │ https://open.spotify.com/show/7rlE6zRz3P0N8J7BPYMZJu               │
     * └─────────┴─────────────────────────────────────────────────────────────────────┘
     * live  → not available for this edition
     * video → not available for this edition
     */
    buttons: [
      {
        kind: "book",
        href: "https://drive.google.com/file/d/1fdwn0K5DHAuCM3bW8gPVk-Z6LBsNb2x7/view?usp=drive_link",
      },
      {
        kind: "audio",
        href: "https://open.spotify.com/show/7rlE6zRz3P0N8J7BPYMZJu?si=62981ca0093f45ad",
      },
      {
        kind: "live",
        href: "https://www.youtube.com/watch?v=SrP8RWJsQYE",
      },
      {
        kind: "video",
        href: "https://drive.google.com/file/d/1Lhsk81UWv-ExOdL_dSaF6qRJBCtIIYOI/view",
      }
    ],
  },

  // ── Narrativas Guarani ────────────────────────────────────
  {
    id: "guarani",
    badge: "Edição Especial",
    title: (
      <>
        Motus <br />
        <span className="text-[var(--accent)] italic">Narrativas Guarani</span>
      </>
    ),
    paragraphs: [
      <>
        A edição especial, com narrativas na língua <span className="font-bold italic text-[var(--accent)]">Guarani</span>, traz palavras dadas pelo professor guarani Gerônimo Franco - Verá Tupã e pela professora Laura Nelly Mansur Serres. Tem como base o diálogo intercultural colaborativo com uma comunidade Guarani Mbya, em encontros vivenciais na sua aldeia. Parte da intuição de que no espaço geocultural onde habitam persiste e (re)existe a América profunda, anunciando um passado ancestral revelado nas suas narrativas orais, seminais, descolonizadas e descolonizadoras. Para isso, os autores estiveram em diálogo na Tekoa Yvy Poty (Barra do Ribeiro, RS, Brasil) falando sobre o seu Nhandereko (modo de ser) por meio de gravações de voz e imagem, registrando os seus relatos, com a orientação da própria comunidade.
      </>,
      <>
        Eles convidam a conhecer a <span className="font-bold italic text-[var(--accent)]">Trilha Etnoecológica Yvy Poty</span> que construíram na aldeia como escola viva, em que os Guarani Mbya, ao mesmo tempo que se autoeducam, fortalecem a sua cultura, revelando uma parte dela para os não indígenas. A interculturalidade gerada, que anuncia as possibilidades da continuação e fortalecimento da colaboração iniciada com essa comunidade originária, conduzem a pesquisa da professora Laura Mansur na tese TEKOA YVY POTY EM DIÁLOGO COM A ESCOLA NÃO INDÍGENA NARRATIVAS SEMINAIS EM BUSCA DE UMA AMÉRICA PROFUNDA, disponível no repositório LUME/UFRGS. A edição especial <span className="font-bold italic text-[var(--accent)]">MOTUS Narrativas Guarani</span>, que parte da referida pesquisa, convida ao mergulho em narrativas ancestrais do povo Guarani, oportunizando momentos especiais de aprendizagens interculturais na academia e para além dela, com o apoio do grupo de pesquisa Peabiru: educação ameríndia e interculturalidade (UFRGS/UNISC), do projeto de extensão Motus - Movimento Literário Digital (UNIPAMPA), do programa de extensão Jykre Kar: diálogos interculturais (UNIPAMPA) e da ação de extensão Aprendizagens interculturais: produção de sentidos na educação (UNIPAMPA). As ilustrações, produzidas pela artista plástica Carine Josiéle Wendland e pela comunidade Guarani ampliam as possibilidades de entrega ao universo ancestral que emerge do solo que habitamos. A transcrição do diálogo com Verá Tupã contou com o especial apoio das bolsistas Keila Maria Barbosa da Silva e Michele de Carvalho dos Santos Borba.
      </>,
      <>
        <span className="font-bold">Lançamento no dia 08 de novembro de 2025.</span>
      </>
    ],
    cover: "/images/CapaMotusGuarani.png",
    coverAlt: "Capa Edição Especial Narrativas Guarani",
    coverRight: true,
    /*
     * Button table — Narrativas Guarani
     * ┌─────────┬─────────────────────────────────────────────────────────────────────┐
     * │  kind   │ href                                                                │
     * ├─────────┼─────────────────────────────────────────────────────────────────────┤
     * │ book    │ https://drive.google.com/file/d/1sP-CgqwCtDfEiJ1VtLR5f1KF9JCOGU4X │
     * │ audio   │ https://open.spotify.com/show/7rlE6zRz3P0N8J7BPYMZJu               │
     * └─────────┴─────────────────────────────────────────────────────────────────────┘
     * live  → not available for this edition
     * video → not available for this edition
     */
    buttons: [
      {
        kind: "book",
        href: "https://drive.google.com/file/d/1sP-CgqwCtDfEiJ1VtLR5f1KF9JCOGU4X/view?usp=sharing",
      },
      {
        kind: "audio",
        href: "https://open.spotify.com/show/7rlE6zRz3P0N8J7BPYMZJu?si=62981ca0093f45ad",
      },
      {
        kind: "live",
        href: "https://www.youtube.com/watch?v=hHZA1JvU5Wg&list=PLxoWhnFiDRPOQdb9x_U3Hv2ongZV3xSpj&index=2",
      }
    ],
  },

  {
    id: "motus8",
    badge: "Memórias",
    title: (
      <>
        Motus #8 <br />
        <span className="text-[var(--accent)] italic"></span>
      </>
    ),
    paragraphs: [
      <>
        O livro digital Motus #8 é composto por contos e poemas selecionados através do concurso literário Motus #8 que teve como tema “Memórias”. O concurso recebeu 153 obras válidas, sendo 142 obras de autores residentes em diferentes estados brasileiros e Distrito Federal e 11 obras de autores residentes na Alemanha (1), Angola (1), França (1), Itália (1), Japão (1), Moçambique (1) e Portugal (5).
      </>,
      <>
        Neste ano, além dos dez contos e dez poemas tradicionalmente selecionados, o concurso teve uma categoria especial para selecionar obras escritas por estudantes da educação básica. Dentre os autores, há escritores iniciantes e escritores experientes, inclusive quatro autores tiveram suas obras selecionadas em concursos Motus anteriores.
      </>,
      <>
        Nas obras, os autores registraram, recordaram e renovaram memórias. A partir de fotos, lugares, músicas, cheiros e sabores, eles nos fazem lembrar de acontecimentos que marcaram suas e nossas vidas. Memórias que ficarão gravadas para sempre, memórias que se esvaem no tempo, memórias que não conseguimos mais acessar e aquelas que mesmo que exista o desejo de esquecer, suas cicatrizes são tão profundas que nem o tempo consegue apagar.
      </>,
      <>
        Todas as obras são acompanhadas por uma ilustração criada especialmente pela artista Amanda Gobus Lopes. Todas as obras também foram lidas e seus áudios estão disponíveis gratuitamente no Spotify. Além disso, todo o livro pode ser lido por leitores de tela, incluindo as ilustrações, devido ao uso do recurso de texto alternativo. Dessa forma, pessoas com deficiência visual, pessoas em processo de alfabetização e pessoas analfabetas podem ter acesso ao conteúdo do livro na sua íntegra.
      </>,
      <>
        Convidamos você a ler as vinte e cinco obras, recordando e criando novas memórias!
      </>,

      <>
        <span className="font-bold">Lançamento no dia 09 de novembro de 2024.</span>
      </>
    ],
    cover: "/images/CapaMotus8.png",
    coverAlt: "Capa Motus #8",
    coverRight: false,
    /*
     * Button table — Motus #9
     * ┌─────────┬─────────────────────────────────────────────────────────────────────┐
     * │  kind   │ href                                                                │
     * ├─────────┼─────────────────────────────────────────────────────────────────────┤
     * │ book    │ https://drive.google.com/file/d/1fdwn0K5DHAuCM3bW8gPVk-Z6LBsNb2x7 │
     * │ audio   │ https://open.spotify.com/show/7rlE6zRz3P0N8J7BPYMZJu               │
     * └─────────┴─────────────────────────────────────────────────────────────────────┘
     * live  → not available for this edition
     * video → not available for this edition
     */
    buttons: [
      {
        kind: "book",
        href: "https://drive.google.com/file/d/1qkAn0-DuigA4h0JMQgNIFJWjlCX32USJ/view",
      },
      {
        kind: "audio",
        href: "https://open.spotify.com/show/7rlE6zRz3P0N8J7BPYMZJu?si=62981ca0093f45ad&nd=1&dlsi=69f39ba001a9472d",
      },
      {
        kind: "live",
        href: "https://www.youtube.com/live/BusRnGTePI8",
      },
      {
        kind: "video",
        href: "https://drive.google.com/file/d/1FNbkJyQ1jlVA7aFwogILWzz-GRZ7ejtR/view",
      }
    ],
  },

  {
    id: "motus7",
    badge: "A dança da Vida",
    title: (
      <>
        Motus #7 <br />
        <span className="text-[var(--accent)] italic"></span>
      </>
    ),
    paragraphs: [
      <>
        O livro digital Motus #7 é composto por contos e poemas selecionados através do concurso literário Motus #7. O concurso teve como tema “A dança da vida” e recebeu 185 obras válidas, sendo 174 obras de autores residentes no Brasil e 9 obras de autores residentes em outros países.
      </>,
      <>
        Nas obras, os autores dançaram balé, samba, bolero e valsa. Dançaram ao som de flautas, violinos e piano, mas também no silêncio. Dançaram sozinhos e dançaram acompanhados. Percorreram caminhos, às vezes com passos rápidos e outros lentos. Na dança da vida, foram coreógrafos de acertos e erros, uma dança em movimento, de transformação constante, que não se encerra quando termina.
      </>,
      <>
        Nas obras, os autores registraram, recordaram e renovaram memórias. A partir de fotos, lugares, músicas, cheiros e sabores, eles nos fazem lembrar de acontecimentos que marcaram suas e nossas vidas. Memórias que ficarão gravadas para sempre, memórias que se esvaem no tempo, memórias que não conseguimos mais acessar e aquelas que mesmo que exista o desejo de esquecer, suas cicatrizes são tão profundas que nem o tempo consegue apagar.
      </>,
      <>
       Todas as obras são acompanhadas por uma ilustração criada especialmente pela artista Amanda Gobus Lopes. Todas as obras também foram lidas e seus áudios estão disponíveis gratuitamente no Spotify. Além disso, todo o livro pode ser lido por leitores de tela, incluindo as ilustrações, devido ao uso do recurso de texto alternativo. Dessa forma, pessoas com deficiência visual, pessoas em processo de alfabetização e pessoas analfabetas podem ter acesso ao conteúdo do livro na sua íntegra.
      </>,
      <>
        Convidamos você a ler as vinte e quatro obras, dançar e coreografar sua vida. Boa leitura!
      </>,

      <>
        <span className="font-bold">Lançamento no dia 18 de novembro de 2023.</span>
      </>
    ],
    cover: "/images/capaMotus7.png",
    coverAlt: "Capa Motus #7 — A dança da vida",
    coverRight: false,
    /*
     * Button table — Motus #9
     * ┌─────────┬─────────────────────────────────────────────────────────────────────┐
     * │  kind   │ href                                                                │
     * ├─────────┼─────────────────────────────────────────────────────────────────────┤
     * │ book    │ https://drive.google.com/file/d/1fdwn0K5DHAuCM3bW8gPVk-Z6LBsNb2x7 │
     * │ audio   │ https://open.spotify.com/show/7rlE6zRz3P0N8J7BPYMZJu               │
     * └─────────┴─────────────────────────────────────────────────────────────────────┘
     * live  → not available for this edition
     * video → not available for this edition
     */
    buttons: [
      {
        kind: "book",
        href: "https://drive.google.com/file/d/18tqT_xy9EqmBfZB-4eT9dPlgRYQww17q/view",
      },
      {
        kind: "audio",
        href: "https://open.spotify.com/show/6dZHpRa2frWlsdRqHwYkGd?si=b0ecc441a2824a10&nd=1",
      },
      {
        kind: "live",
        href: "https://www.youtube.com/live/LJ5OVdToSMM",
      }
    ],
  },

  {
    id: "motusKaingang",
    badge: "Edição Narrativas Kaingang",
    title: (
      <>
        Motus Edição Especial Narrativas Kaingang <br />
        <span className="text-[var(--accent)] italic"></span>
      </>
    ),
    paragraphs: [
      <>
        A edição especial, com narrativas na língua kaingang, pretende contribuir para reverter o processo histórico de apagamento da cultura e da língua dos povos originários. O livro é resultado da elaboração coletiva dos intelectuais Kaingang Sueli Krengre Candido, Onorio Isaias de Moura, Sebastião Luis Camargo Ribeiro, Ivete Darfais e Rosangela Fátima Gonçalves. As ilustrações, produzidas pela artista plástica Carine Josiéle Wendland, levam ao encontro das narrativas ancestrais. As traduções - não literais - colocam os fóg (pessoas não indígenas) em contato com aspectos culturais e espirituais do povo Kaingang. Trata-se de compartilhar narrativas ancestrais, oportunizando momentos especiais de aprendizagens interculturais na academia e para além dela, com o apoio do grupo de pesquisa Peabiru: educação ameríndia e interculturalidade (UFRGS/UNISC), do projeto de extensão Motus - Movimento Literário Digital (UNIPAMPA), do programa de extensão Jykre Kar: diálogos interculturais (UNIPAMPA) e da ação de extensão Aprendizagens interculturais: produção de sentidos na educação (UNIPAMPA).
      </>,

      <>
        <span className="font-bold">Lançamento dia 03 de agosto de 2023.</span>
      </>
    ],
    cover: "/images/capaNarrativas.png",
    coverAlt: "Motus Edição Especial Narrativas Kaingang",
    coverRight: false,

    buttons: [
      {
        kind: "book",
        href: "https://drive.google.com/file/d/13zAROEwWf4pn8AcilfzjYfU1TEPPJYBC/view",
      },
      {
        kind: "audio",
        href: "https://open.spotify.com/show/6dZHpRa2frWlsdRqHwYkGd?si=b0ecc441a2824a10&nd=1",
      },
      {
        kind: "live",
        href: "https://www.youtube.com/watch?v=sun9bF2ya9Y",
      },
      {
        kind: "video",
        href: "https://drive.google.com/file/d/1_BkOz5uV5pAw8agcLzANwXvcFRskus9-/view",
      }
    ],
  },

  {
    id: "motus6",
    badge: "Natureza",
    title: (
      <>
        Motus #6 <br />
        <span className="text-[var(--accent)] italic"></span>
      </>
    ),
    paragraphs: [
      <>
        O livro digital Motus #6 é composto por 10 contos e 10 poemas selecionados através do concurso literário Motus #6. O concurso teve como tema “Natureza” e recebeu 174 obras válidas, sendo 166 obras de autores residentes no Brasil e 8 obras de autores residentes em outros países.

Os autores descreveram a beleza da natureza em diferentes elementos, como árvores, água, animais, mas também convidaram você para refletir sobre como estamos colaborando para sua preservação ou destruição.

Todas as obras são acompanhadas por uma ilustração criada especialmente pela artista Amanda Gobus Lopes. Todas as obras foram lidas e seus áudios estão disponíveis gratuitamente no Spotify. Além disso, todo o livro pode ser lido por leitores de tela, incluindo as ilustrações, devido ao uso do recurso de texto alternativo. Dessa forma, pessoas com deficiência visual, pessoas em processo de alfabetização e pessoas analfabetas podem ter acesso ao conteúdo do livro na sua íntegra.
      </>,
      
      <>
        Convidamos você a ler as vinte obras e a descobrir o quão bela é a natureza e o quanto precisamos fazer mais para preservá-la. Acesse e compartilhe!
      </>,

      <>
        <span className="font-bold">Lançamento dia 03 de agosto de 2023.</span>
      </>
    ],
    cover: "/images/Motus6capa.png",
    coverAlt: "Motus6",
    coverRight: false,

    buttons: [
      {
        kind: "book",
        href: "https://bit.ly/motus6",
      },
      {
        kind: "audio",
        href: "https://open.spotify.com/show/6dZHpRa2frWlsdRqHwYkGd?si=b0ecc441a2824a10&nd=1",
      },
      {
        kind: "live",
        href: "https://www.youtube.com/watch?v=LxSkWjpF618&list=PLMDXvhlQlpJbNd66sT8nuKEYvR-jI0n4T&index=9",
      }
    ],
  },

  {
    id: "motus5",
    badge: "Resiliência: uma forma de enxergar a vida",
    title: (
      <>
        Motus #5 <br />
        <span className="text-[var(--accent)] italic"></span>
      </>
    ),
    paragraphs: [
      <>
      O livro digital Motus #5 é um produto do projeto de extensão Motus - Movimento Literário Digital da Universidade Federal do Pampa (UNIPAMPA), que visa incentivar a produção de obras literárias e intensificar o interesse pela literatura dos cidadãos e estudantes. Este livro é composto por dez contos e dez poemas selecionados através do concurso literário Motus #5. O concurso teve como tema “Resiliência: uma forma de enxergar a vida” e recebeu 182 obras, sendo 175 obras de autores residentes no Brasil e 7 de autores residentes em outros países: Itália, Japão, Moçambique e Portugal. Todas as obras são acompanhadas por uma ilustração criada especialmente pela artista Amanda Gobus Lopes. Destaca-se que as obras foram lidas e seus áudios estão disponíveis na <a className="font-bold text-[var(--redirect)]" href="https://soundcloud.com/aline-vieira-de-mello/sets/motus-5">plataforma SoundCloud</a>. Além disso, todo o livro pode ser lido por leitores de tela, incluindo as ilustrações. Dessa forma, pessoas com deficiência visual, em processo de alfabetização ou analfabetas podem ter acesso ao livro.
      </>,
    ],
    cover: "/images/motus5.png",
    coverAlt: "Motus5",
    coverRight: false,

    buttons: [
      {
        kind: "book",
        href: "https://bit.ly/motus5",
      },
      {
        kind: "audio",
        href: "https://soundcloud.com/aline-vieira-de-mello/sets/motus-5",
      },
      {
        kind: "live",
        href: "https://www.youtube.com/watch?v=lK-Iw9Vbtjc&list=PLMDXvhlQlpJbNd66sT8nuKEYvR-jI0n4T&index=6",
      }
    ],
  },

  {
    id: "principe",
    badge: "O Encontro dos Príncipes",
    title: (
      <>
        O Encontro dos Príncipes <br />
        <span className="text-[var(--accent)] italic"></span>
      </>
    ),
    paragraphs: [
      <>
        O livro digital "O Encontro dos Príncipes" é fruto do projeto desenvolvido pela professora Marileia da Silva Marchezan com estudantes do 6° ano da Escola Estadual de Ensino Fundamental Freitas Valle. O projeto foi realizado no período de março a setembro de 2021 e tem como objetivos promover o consumo, a produção e a disseminação de textos multimodais literários do gênero conto e desenvolver e/ou retomar importantes habilidades relacionadas ao componente curricular Língua Portuguesa. A equipe do projeto de extensão Motus - Movimento Literário Digital da Universidade Federal do Pampa (UNIPAMPA), que visa incentivar a produção de obras literárias e intensificar o interesse pela literatura dos cidadãos e estudantes, atuou em sua diagramação. Destaca-se que todo o livro pode ser lido por leitores de tela, incluindo as ilustrações. Dessa forma, pessoas com deficiência visual, em processo de alfabetização ou analfabetas podem ter acesso ao livro.
      </>,
    ],
    cover: "/images/encontro.png",
    coverAlt: "O Encontro dos Príncipes",
    coverRight: false,

    buttons: [
      {
        kind: "book",
        href: "https://bit.ly/OEncontroDosPrincipes",
      },
      {
        kind: "live",
        href: "https://www.youtube.com/watch?v=-udvm2NK0rg&list=PLMDXvhlQlpJbNd66sT8nuKEYvR-jI0n4T&index=7",
      }
    ],
  },

  {
    id: "motus4",
    badge: "Olhar com os olhos do outro",
    title: (
      <>
        Motus #4 <br />
        <span className="text-[var(--accent)] italic"></span>
      </>
    ),
    paragraphs: [
      <>
        O livro digital Motus #4 é um produto do projeto de extensão Motus - Movimento Literário Digital da Universidade Federal do Pampa (UNIPAMPA), Campus Alegrete, que visa intensificar o interesse pela literatura dos cidadãos e estudantes; incentivar a produção de obras literárias; selecionar e publicar obras literárias inéditas em Língua Portuguesa. . Este livro é composto por dez poemas e dez contos selecionados através do concurso literário Motus #4, realizado na integra em formato digital. O concurso teve como tema “Olhar com os olhos do outro” e recebeu 195 obras, sendo 178 obras de autores residentes em 24 estados brasileiros e Distrito Federal e 17 obras de autores residentes em outros 10 países: Alemanha, Angola, Canadá, Israel, Itália, Japão, Moçambique, Portugal, Suíça e Uruguai. Todas as obras são acompanhadas por uma ilustração criada especialmente pela artista Amanda Gobus Lopes. Adicionalmente, todas as obras foram lidas e seus áudios estão disponíveis gratuitamente na <a href="https://soundcloud.com/aline-vieira-de-mello/sets/motus4" className="font-bold text-[var(--redirect)]">plataforma SoundCloud.</a>
      </>,
    ],
    cover: "/images/motus4.jpg",
    coverAlt: "motus4",
    coverRight: false,

    buttons: [
      {
        kind: "book",
        href: "https://bit.ly/motus4",
      },
      {
        kind: "audio",
        href: "https://soundcloud.com/aline-vieira-de-mello/sets/motus4",
      }
    ],
  },
  
  {
    id: "motus3",
    badge: "O Tempo",
    title: (
      <>
        Motus #3 <br />
        <span className="text-[var(--accent)] italic"></span>
      </>
    ),
    paragraphs: [
      <>
        A terceira edição da Motus (Motus #3) tem como tema “O Tempo” e recebeu obras de autores residentes em diferentes estados brasileiros e no exterior (Canadá, Estados Unidos, Itália, Japão, Moçambique e Portugal). Esta edição é composta por dez poemas e dez contos, selecionados através de concurso literário, e um poema escrito de forma colaborativa por estudantes do nono ano com apoio de duas professoras, resultado da ação Motus na Escola Estadual Dr. Romário Araújo de Oliveira – CIEP (Alegrete). Cada obra é acompanhada por uma linda ilustração da artista Amanda Gobus Lopes. Todas as ilustrações da Motus #3 possuem texto alternativo.
      </>,
    ],
    cover: "/images/motus3.png",
    coverAlt: "motus3",
    coverRight: false,

    buttons: [
      {
        kind: "book",
        href: "https://drive.google.com/file/d/18d0Go_s7sId2grdaGY9yHMkaENzheWse/view",
      }
    ],
  },

  {
    id: "motus2",
    badge: "Uma celebração do amor através da literatura",
    title: (
      <>
        Motus #2 <br />
        <span className="text-[var(--accent)] italic"></span>
      </>
    ),
    paragraphs: [
      <>
        A Motus #2 foi arquitetada no sentimento mais transformador que há, refletindo muitos anseios e atitudes. A segunda edição da Motus é entoada por 20 vozes. Vozes que erguem o amor, em todas as formas e em diversos lugares. Em tempos onde as armas são o ódio e a raiva, estamos trabalhando no lado oposto. Não nos incomodamos em propagar o bem - pelo contrário, estamos incentivando-o. Nossa maior ferramenta é a literatura e com ela estamos construindo diálogos e oportunidades. Nesta edição foram selecionados 10 poemas e 10 contos. Entretanto, mais de 190 obras foram submetidas, as quais merecem um grande e carinhoso muito obrigado. Obrigado por escreverem, por acreditarem na literatura e em suas vozes. Obrigado por acreditar em nosso trabalho. Desejamos que as formas de amor presentes nas páginas a seguir sirvam de inspiração e que o amor presente em cada forma se multiplique a cada novo leitor. Deixemos a árvore do amor florescer em nossos corações. A Motus #2 foi feita com muito amor para espalhar amor.
      </>,
    ],
    cover: "/images/motus2.png",
    coverAlt: "motus2",
    coverRight: false,

    buttons: [
      {
        kind: "book",
        href: "https://drive.google.com/file/d/1YRUSnqBQfoE15UVODeRg96aJ7HZ5VE7m/view",
      }
    ],
  },

  {
    id: "motus1",
    badge: "Liberdade de Expressão",
    title: (
      <>
        Motus #1 <br />
        <span className="text-[var(--accent)] italic"></span>
      </>
    ),
    paragraphs: [
      <>
        Movimentar a Cultura de um país não é uma tarefa simples. Contudo, as dificuldades enfrentadas durante a criação do projeto Motus não esmoreceram os integrantes. A caminhada não foi curta. Em 2016, surgiu a primeira ideia do que hoje chamamos de Motus - Movimento Literário Digital. Desde então houve dezenas de reuniões, centenas de e-mails e muito (muito mesmo!) esforço coletivo. Debatemos, refletimos, nos apoiamos e nos erguemos. Em 30/06/2017, ocorreu o lançamento da primeira edição do livro digital Motus (Motus #1), que reúne 11 poemas e 9 contos sobre o tema Liberdade de Expressão. São 20 escritores brasileiros de diferentes estados que nos prestigiaram com a escrita de suas obras e a confiança de seus trabalhos a nossa ação de extensão universitária. O projeto Motus deseja uma leitura energética e crítica. nenhuma verdade absoluta está escrita nas páginas do livro Motus #1. Nossa proposta é simples e lídima: que a literatura mova seus pensamentos. Siga sempre em movimento!
      </>,
    ],
    cover: "/images/motus1.png",
    coverAlt: "motus1",
    coverRight: false,

    buttons: [
      {
        kind: "book",
        href: "https://drive.google.com/file/d/1nc6Rc1JxKOpIQI-JhumMIcGfl3UJREmb/view",
      }
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────

/** Renders the 1–4 action buttons for a given edition. */
function EditionButtons({ buttons }: { buttons: EditionButton[] }) {
  return (
    <div className="flex flex-wrap gap-4 pt-4">
      {buttons.map(({ kind, href }) => {
        const { label, Icon, variant } = BUTTON_CATALOG[kind];
        const base =
          "flex items-center justify-center gap-3 px-7 contrast-shadow py-3.5 rounded-full font-medium transition-all duration-300 text-sm";
        const styles =
          variant === "primary"
            ? `${base} bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--accent)]`
            : `${base} border border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]`;
        return (
          <a key={kind} href={href} target="_blank" rel="noopener noreferrer" className={styles}>
            <Icon size={18} />
            {label}
          </a>
        );
      })}
    </div>
  );
}

/** Cover image with 3-D hover tilt (used when cover is on the LEFT). */
function CoverLeft({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      className="w-full lg:w-1/2 flex justify-center"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative group">
        <motion.div
          className="relative rounded-lg overflow-hidden shadow-2xl"
          whileHover={{ rotateY: 5, rotateX: 2, scale: 1.02 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img src={src} alt={alt} className="w-full h-auto max-w-[450px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </div>
    </motion.div>
  );
}

/** Cover image with glow halo (used when cover is on the RIGHT). */
function CoverRight({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      className="w-full lg:w-1/2 flex justify-center"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[var(--accent)]/10 blur-2xl rounded-full transform -rotate-6 scale-110" />
        <img
          src={src}
          alt={alt}
          className="relative w-full h-auto max-w-[450px] object-cover rounded-md shadow-2xl"
        />
      </div>
    </motion.div>
  );
}

/** Text content column for an edition card. */
function EditionInfo({
  edition,
  animX,
  delay = 0,
}: {
  edition: Edition;
  animX: number;
  delay?: number;
}) {
  return (
    <motion.div
      className="w-full lg:w-1/2 space-y-8"
      initial={{ opacity: 0, x: animX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      <div className="inline-block px-4 py-1 rounded-full border border-[var(--accent)] text-[var(--accent)] font-semibold text-sm tracking-widest uppercase">
        {edition.badge}
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[var(--foreground)] font-bold leading-tight">
        {edition.title}
      </h2>
      <div className="space-y-5 text-lg text-[var(--foreground)]/80 font-serif leading-relaxed">
        {edition.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <EditionButtons buttons={edition.buttons} />
    </motion.div>
  );
}

function EditionBlock({ edition, index }: { edition: Edition; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <>
      {index > 0 && (
        <div className="bg-[var(--foreground)]/10 h-px mx-12 md:mx-24" />
      )}
      <section
        id={edition.id}
        className="py-24 md:py-32 px-6 lg:px-8 bg-[var(--background)] relative overflow-hidden"
      >
        <div
          className={`absolute top-0 w-[700px] h-[700px] bg-[var(--accent)]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none ${
            isEven ? "left-0 -translate-x-1/3" : "right-0 translate-x-1/3"
          }`}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {edition.coverRight ? (
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <EditionInfo edition={edition} animX={-50} />
              <CoverRight src={edition.cover} alt={edition.coverAlt} />
            </div>
          ) : (
            <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
              <CoverLeft src={edition.cover} alt={edition.coverAlt} />
              <EditionInfo edition={edition} animX={50} delay={0.2} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export function Edicoes() {
  return (
    <div className="flex flex-col">
      {/* ── Page Header ── */}
      <header className="relative py-32 md:py-40 px-6 lg:px-8 bg-[var(--foreground)] overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[var(--accent)]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--accent)]/15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1 rounded-full border border-[var(--accent-foreground)] text-[var(--accent-foreground)] font-semibold text-sm tracking-widest uppercase mb-6">
              Acervo Literário
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-[var(--background)] leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            Todas as{" "}
            <span className="italic text-[var(--accent-foreground)]">Edições</span>
          </motion.h1>

          <motion.div
            className="w-20 h-1 bg-[var(--accent-foreground)] mx-auto mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          />

          <motion.p
            className="text-lg md:text-xl text-[var(--background)]/70 font-serif leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            Desde{" "}
            <span className="font-bold text-[var(--background)]">2017</span>,
            reunimos histórias autênticas e poemas marcantes em edições anuais
            gratuitas e{" "}
            <span className="font-bold text-[var(--background)]">100%</span>{" "}
            acessíveis.
          </motion.p>
        </div>
      </header>

      {EDITIONS.map((edition, index) => (
        <EditionBlock key={edition.id} edition={edition} index={index} />
      ))}
    </div>
  );
}
