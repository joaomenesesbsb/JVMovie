export let db: IDBDatabase;
    const request: IDBOpenDBRequest = indexedDB.open("jvmovie", 1);

    // Evento onupgradeneeded para criar objetos de loja de dados e índices
    request.onupgradeneeded = function (event: IDBVersionChangeEvent) {
        db = (event.target as IDBOpenDBRequest).result;

        // Crie a tabela de usuário
        const userStore = db.createObjectStore("tb_user", { keyPath: "id", autoIncrement: true });
        userStore.createIndex("email", "email", { unique: true });

        // Crie a tabela de filmes
        const movieStore = db.createObjectStore("tb_movie", { keyPath: "id", autoIncrement: true });
        movieStore.createIndex("title", "title", { unique: true });
    };

    // Evento onsuccess para inserir dados nas lojas de dados
    request.onsuccess = function (event: Event) {
        db = (event.target as IDBOpenDBRequest).result;
        const transaction = db.transaction(["tb_user", "tb_movie"], "readwrite");

        // Inserir dados na tabela de usuário
        const userStore = transaction.objectStore("tb_user");
        console.log("começou inserir usuarios")
        userStore.add({ email: "maria@gmail.com" });
        userStore.add({ email: "joao@gmail.com" });
        userStore.add({ email: "ana@gmail.com" });
        userStore.add({ email: "lucia@gmail.com" });
        userStore.add({ email: "joaquim@gmail.com" });
        console.log("Terminou de inserir usuarios")
        // Inserir dados na tabela de filmes
        const movieStore = transaction.objectStore("tb_movie");
        movieStore.add({
            title: "The Witcher",
            score: 4.5,
            count: 2,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
            scores: [
                {
                    "userId": 1,
                    "score": 5.0
                },
                {
                    "userId": 2,
                    "score": 4.0
                },
            ]
        });
        movieStore.add({
            title: "Venom: Tempo de Carnificina",
            score: 3.3,
            count: 3,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg",
            scores: [
                {
                    userId: 1,
                    score: 3.0
                },
                {
                    userId: 2,
                    score: 3.0
                },
                {
                    userId: 3,
                    score: 4.0
                },
            ]
        });
        movieStore.add({
            title: "O Espetacular Homem-Aranha 2: A Ameaça de Electro",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/u7SeO6Y42P7VCTWLhpnL96cyOqd.jpg",
            scores: []
        });
        movieStore.add({
            title: "Matrix Resurrections",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg"  ,
            scores: []
        });
        movieStore.add({
            title: "Shang-Chi e a Lenda dos Dez Anéis",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cinER0ESG0eJ49kXlExM0MEWGxW.jpg",
            scores: []
        });
        movieStore.add({
            title: "Django Livre",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/2oZklIzUbvZXXzIFzv7Hi68d6xf.jpg",
            scores: []
        });
        movieStore.add({
            title: "Titanic",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/yDI6D5ZQh67YU4r2ms8qcSbAviZ.jpg",
            scores: []
        });
        movieStore.add({
            title: "O Lobo de Wall Street",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cWUOv3H7YFwvKeaQhoAQTLLpo9Z.jpg",
            scores: []
        });
        movieStore.add({
            title: "Aves de Rapina: Arlequina e sua Emancipação Fantabulosa",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jiqD14fg7UTZOT6qgvzTmfRYpWI.jpg",
            scores: []
        });
        movieStore.add({
            title: "Rogue One: Uma História Star Wars",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/6t8ES1d12OzWyCGxBeDYLHoaDrT.jpg",
            scores: []
        });
        movieStore.add({
            title: "Star Wars: A Guerra dos Clones",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/uK15I3sGd8AudO9z6J6vi0HH1UU.jpg",
            scores: []
        });
        movieStore.add({
            title: "Star Wars: Episódio I - A Ameaça Fantasma",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/36LnijfQCOC89rCMOhn2OINXROI.jpg",
            scores: []
        });
        movieStore.add({
            title: "Vingadores: Ultimato",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg"
        });
        movieStore.add({
            title: "Thor",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cDJ61O1STtbWNBwefuqVrRe3d7l.jpg",
            scores: []
        });
        movieStore.add({
            title: "Cisne Negro",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hqh5O4KssfJWI62HGAgrjHXbxhD.jpg",
            scores: []
        });
        movieStore.add({
            title: "O Silêncio dos Inocentes",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/mfwq2nMBzArzQ7Y9RKE8SKeeTkg.jpg",
            scores: []
        });
        movieStore.add({
            title: "Clube da Luta",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
            scores: []
        });
        movieStore.add({
            title: "Guerra Mundial Z",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/31VpBgUX5O4Z3dn5ZbX8HLqoXH3.jpg",
            scores: []
        });
        movieStore.add({
            title: "Harry Potter e as Relíquias da Morte - Parte 1",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vcrgU0KaNj5mKUCIQSUdiQwTE9y.jpg",
            scores: []
        });
        movieStore.add({
            title: "Harry Potter e a Pedra Filosofal",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/lvOLivVeX3DVVcwfVkxKf0R22D8.jpg",
            scores: []
        });
        movieStore.add({
            title: "Alice no País das Maravilhas",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/qNdlZgz9yoSJ8f0YxQWfKGPoVV.jpg",
            scores: []
        });
        movieStore.add({
            title: "Animais Fantásticos e Onde Habitam",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/8Qsr8pvDL3s1jNZQ4HK1d1Xlvnh.jpg",
            scores: []
        });
        movieStore.add({
            title: "A Teoria de Tudo",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/kq2MHrRfH6RTfkvyDEmYLmGHE6U.jpg",
            scores: []
        });
        movieStore.add({
            title: "O Livro de Boba Fett",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/sjx6zjQI2dLGtEL0HGWsnq6UyLU.jpg",
            scores: []
        });
        movieStore.add({
            title: "O Último Duelo",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/4LrL40XecjGLRpX5I2gzMTUt04l.jpg",
            scores: []
        });
        movieStore.add({
            title: "Interestelar",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
            scores: []
        });
        movieStore.add({
            title: "Contato",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/yFkUPqBuUnbhYbQL8VFpTrAT9za.jpg",
            scores: []
        });
        movieStore.add({
            title: "Duna",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg",
            scores: []
        });
        movieStore.add({
            title: "Aquaman",
            score: 0.0,
            count: 0,
            image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/2cUsDz4TzFYHrKktT1bKHHQ7Cgm.jpg",
            scores: []
        });

    };