import { Movie } from "../models/movie";

export function findAll(): Movie[] {
    return movies;
}

export function findById(id: number): Movie | undefined {
    return movies.find(x => x.id === id);
}

export function filterList(searchTerm: string): Movie[] {
    return movies.filter(item => {
      const itemName = item.title.toLowerCase();
      const searchTermLower = searchTerm.toLowerCase();
      return itemName.indexOf(searchTermLower) !== -1;
    });
  }

let movies: Movie[] =  [
    {
        "id": 1,
        "title": "The Witcher",
        "score": 4.5,
        "count": 2,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg"
    },
    {
        "id": 2,
        "title": "Venom: Tempo de Carnificina",
        "score": 3.3,
        "count": 3,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg"
    },
    {
        "id": 3,
        "title": "O Espetacular Homem-Aranha 2: A Ameaça de Electro",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/u7SeO6Y42P7VCTWLhpnL96cyOqd.jpg"
    },
    {
        "id": 4,
        "title": "Matrix Resurrections",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg"
    },
    {
        "id": 5,
        "title": "Shang-Chi e a Lenda dos Dez Anéis",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cinER0ESG0eJ49kXlExM0MEWGxW.jpg"
    },
    {
        "id": 6,
        "title": "Django Livre",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/2oZklIzUbvZXXzIFzv7Hi68d6xf.jpg"
    },
    {
        "id": 7,
        "title": "Titanic",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/yDI6D5ZQh67YU4r2ms8qcSbAviZ.jpg"
    },
    {
        "id": 8,
        "title": "O Lobo de Wall Street",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cWUOv3H7YFwvKeaQhoAQTLLpo9Z.jpg"
    },
    {
        "id": 9,
        "title": "Aves de Rapina: Arlequina e sua Emancipação Fantabulosa",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jiqD14fg7UTZOT6qgvzTmfRYpWI.jpg"
    },
    {
        "id": 10,
        "title": "Rogue One: Uma História Star Wars",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/6t8ES1d12OzWyCGxBeDYLHoaDrT.jpg"
    },
    {
        "id": 11,
        "title": "Star Wars: A Guerra dos Clones",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/uK15I3sGd8AudO9z6J6vi0HH1UU.jpg"
    },
    {
        "id": 12,
        "title": "Star Wars: Episódio I - A Ameaça Fantasma",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/36LnijfQCOC89rCMOhn2OINXROI.jpg"
    },
    {
        "id": 13,
        "title": "Vingadores: Ultimato",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg"
    },
    {
        "id": 14,
        "title": "Thor",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cDJ61O1STtbWNBwefuqVrRe3d7l.jpg"
    },
    {
        "id": 15,
        "title": "Cisne Negro",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hqh5O4KssfJWI62HGAgrjHXbxhD.jpg"
    },
    {
        "id": 16,
        "title": "O Silêncio dos Inocentes",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/mfwq2nMBzArzQ7Y9RKE8SKeeTkg.jpg"
    },
    {
        "id": 17,
        "title": "Clube da Luta",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hZkgoQYus5vegHoetLkCJzb17zJ.jpg"
    },
    {
        "id": 18,
        "title": "Guerra Mundial Z",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/31VpBgUX5O4Z3dn5ZbX8HLqoXH3.jpg"
    },
    {
        "id": 19,
        "title": "Harry Potter e as Relíquias da Morte - Parte 1",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vcrgU0KaNj5mKUCIQSUdiQwTE9y.jpg"
    },
    {
        "id": 20,
        "title": "Harry Potter e a Pedra Filosofal",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/lvOLivVeX3DVVcwfVkxKf0R22D8.jpg"
    },
    {
        "id": 21,
        "title": "Alice no País das Maravilhas",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/qNdlZgz9yoSJ8f0YxQWfKGPoVV.jpg"
    },
    {
        "id": 22,
        "title": "Animais Fantásticos e Onde Habitam",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/8Qsr8pvDL3s1jNZQ4HK1d1Xlvnh.jpg"
    },
    {
        "id": 23,
        "title": "A Teoria de Tudo",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/kq2MHrRfH6RTfkvyDEmYLmGHE6U.jpg"
    },
    {
        "id": 24,
        "title": "O Livro de Boba Fett",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/sjx6zjQI2dLGtEL0HGWsnq6UyLU.jpg"
    },
    {
        "id": 25,
        "title": "O Último Duelo",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/4LrL40XecjGLRpX5I2gzMTUt04l.jpg"
    },
    {
        "id": 26,
        "title": "Interestelar",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
    },
    {
        "id": 27,
        "title": "Contato",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/yFkUPqBuUnbhYbQL8VFpTrAT9za.jpg"
    },
    {
        "id": 28,
        "title": "Duna",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg"
    },
    {
        "id": 29,
        "title": "Aquaman",
        "score": 0.0,
        "count": 0,
        "image": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/2cUsDz4TzFYHrKktT1bKHHQ7Cgm.jpg"
    }
]