import { Movie } from "../models/movie";
import { Score } from "../models/score";
import { MOVIE_KEY } from "../utils/system";

export function save() {
    const str = JSON.stringify(movies);
    localStorage.setItem(MOVIE_KEY, str);
}

export function get(): Movie[] {
    const str = localStorage.getItem(MOVIE_KEY) || '{"movies":[]}';
    const obj = JSON.parse(str) as Movie[];
    return obj;
}

export function newScore(movie: Movie, newScore: Score) {
    const str = localStorage.getItem(MOVIE_KEY) || '{"movies":[]}';
    const list = JSON.parse(str);
    const idMovie = movie.id;

    // Encontra o objeto específico na lista e atualiza seus valores
    const movieToUpdate = list.find((movie: Movie) => movie.id === idMovie);
  if (movieToUpdate) {
    movieToUpdate.scores.push({ email: newScore.email, score: newScore.score });
    const updateCount = movieToUpdate.scores.length;
    let sum = 0;
    movieToUpdate.scores.forEach((item: Score) => sum = sum + item.score);
    const updateScore = sum / updateCount;
    movieToUpdate.count = updateCount;
    movieToUpdate.score = updateScore;
  } else {
    console.log("Objeto não encontrado!");
  }

    // Converte a lista atualizada de volta para uma string JSON
    const updatedList = JSON.stringify(list);
    // Armazena a lista atualizada de volta no localStorage
    localStorage.setItem(MOVIE_KEY, updatedList);
}



export function exist(key: string): boolean {
    if (localStorage.getItem(MOVIE_KEY) === null) {
        return true;
    }
    else return false;
}

export function filterMovies(searchTerm: string): Movie[] {
    const listMovies = get();
    return listMovies.filter(item => {
        const itemName = item.title.toLowerCase();
        const searchTermLower = searchTerm.toLowerCase();
        return itemName.indexOf(searchTermLower) !== -1;
    });
}

export function findById(id: number): Movie | undefined {
    const listMovies = get();
    return listMovies.find(x => x.id === id);
}


let movies: Movie[] = [
    {
        id: 1,
        title: "The Witcher",
        score: 4.5,
        count: 2,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        scores: [
            {
                email: "maria@gmail.com",
                score: 5.0
            },
            {
                email: "joao@gmail.com",
                score: 4.0
            },
        ]
    },
    {
        id: 1,
        title: "Venom: Tempo de Carnificina",
        score: 3.3,
        count: 3,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg",
        scores: [
            {
                email: "maria@gmail.com",
                score: 3.0
            },
            {
                email: "joao@gmail.com",
                score: 3.0
            },
            {
                email: "ana@gmail.com",
                score: 4.0
            },
        ]
    },
    {
        id: 3,
        title: "O Espetacular Homem-Aranha 2: A Ameaça de Electro",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/u7SeO6Y42P7VCTWLhpnL96cyOqd.jpg",
        scores: []
    },
    {
        id: 4,
        title: "Matrix Resurrections",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg",
        scores: []
    },
    {
        id: 5,
        title: "Shang-Chi e a Lenda dos Dez Anéis",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cinER0ESG0eJ49kXlExM0MEWGxW.jpg",
        scores: []
    },
    {
        id: 6,
        title: "Django Livre",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/2oZklIzUbvZXXzIFzv7Hi68d6xf.jpg",
        scores: []
    },
    {
        id: 7,
        title: "Titanic",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/yDI6D5ZQh67YU4r2ms8qcSbAviZ.jpg",
        scores: []
    },
    {
        id: 8,
        title: "O Lobo de Wall Street",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cWUOv3H7YFwvKeaQhoAQTLLpo9Z.jpg",
        scores: []
    },
    {
        id: 9,
        title: "Aves de Rapina: Arlequina e sua Emancipação Fantabulosa",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jiqD14fg7UTZOT6qgvzTmfRYpWI.jpg",
        scores: []
    },
    {
        id: 10,
        title: "Rogue One: Uma História Star Wars",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/6t8ES1d12OzWyCGxBeDYLHoaDrT.jpg",
        scores: []
    },
    {
        id: 11,
        title: "Star Wars: A Guerra dos Clones",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/uK15I3sGd8AudO9z6J6vi0HH1UU.jpg",
        scores: []
    },
    {
        id: 12,
        title: "Star Wars: Episódio I - A Ameaça Fantasma",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/36LnijfQCOC89rCMOhn2OINXROI.jpg",
        scores: []
    },
    {
        id: 13,
        title: "Vingadores: Ultimato",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
        scores: []
    },
    {
        id: 14,
        title: "Thor",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cDJ61O1STtbWNBwefuqVrRe3d7l.jpg",
        scores: []
    },
    {
        id: 15,
        title: "Cisne Negro",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hqh5O4KssfJWI62HGAgrjHXbxhD.jpg",
        scores: []
    },
    {
        id: 16,
        title: "O Silêncio dos Inocentes",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/mfwq2nMBzArzQ7Y9RKE8SKeeTkg.jpg",
        scores: []
    },
    {
        id: 17,
        title: "Clube da Luta",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
        scores: []
    },
    {
        id: 18,
        title: "Guerra Mundial Z",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/31VpBgUX5O4Z3dn5ZbX8HLqoXH3.jpg",
        scores: []
    },
    {
        id: 19,
        title: "Harry Potter e as Relíquias da Morte - Parte 1",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vcrgU0KaNj5mKUCIQSUdiQwTE9y.jpg",
        scores: []
    },
    {
        id: 20,
        title: "Harry Potter e a Pedra Filosofal",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/lvOLivVeX3DVVcwfVkxKf0R22D8.jpg",
        scores: []
    },
    {
        id: 21,
        title: "Alice no País das Maravilhas",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/qNdlZgz9yoSJ8f0YxQWfKGPoVV.jpg",
        scores: []
    },
    {
        id: 22,
        title: "Animais Fantásticos e Onde Habitam",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/8Qsr8pvDL3s1jNZQ4HK1d1Xlvnh.jpg",
        scores: []
    },
    {
        id: 23,
        title: "A Teoria de Tudo",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/kq2MHrRfH6RTfkvyDEmYLmGHE6U.jpg",
        scores: []
    },
    {
        id: 24,
        title: "O Livro de Boba Fett",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/sjx6zjQI2dLGtEL0HGWsnq6UyLU.jpg",
        scores: []
    },
    {
        id: 25,
        title: "O Último Duelo",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/4LrL40XecjGLRpX5I2gzMTUt04l.jpg",
        scores: []
    },
    {
        id: 26,
        title: "Interestelar",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        scores: []
    },
    {
        id: 27,
        title: "Contato",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/yFkUPqBuUnbhYbQL8VFpTrAT9za.jpg",
        scores: []
    },
    {
        id: 28,
        title: "Duna",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg",
        scores: []
    },
    {
        id: 29,
        title: "Aquaman",
        score: 0.0,
        count: 0,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/2cUsDz4TzFYHrKktT1bKHHQ7Cgm.jpg",
        scores: []
    }
]