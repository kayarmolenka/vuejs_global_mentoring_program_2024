export interface MockData {
  id: number
  title: string
  posterurl: string
  genres: string[]
  actors: string[]
  releaseDate: string
  storyline: string
  ratings?: number[]
  movieUrl?: string
  year: string
  poster: string
  contentRating: string
  duration: string
  averageRating: number
  imdbRating: number
}

export const date: MockData[] = [
  {
    year: '1994',
    genres: ['Crime', 'Drama'],
    ratings: [
      8, 8, 6, 10, 2, 3, 4, 5, 4, 9, 3, 9, 6, 10, 4, 8, 10, 1, 2, 8, 1, 9, 5, 4, 4, 2, 4, 6, 9, 10
    ],
    poster:
      'MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR0,0,182,268_AL_.jpg',
    contentRating: '15',
    duration: 'PT142M',
    releaseDate: '1995-03-03',
    averageRating: 0,
    storyline:
      "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.                Written by\nJ-S-Golden",
    actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    imdbRating: 9.3,
    posterurl:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR0,0,182,268_AL_.jpg',
    id: 1,
    title: 'The Shawshank Redemption'
  },
  {
    year: '1972',
    genres: ['Crime', 'Drama'],
    ratings: [
      6, 10, 4, 10, 1, 3, 7, 2, 3, 3, 3, 4, 2, 5, 6, 9, 10, 8, 7, 4, 8, 9, 9, 10, 4, 6, 2, 9, 7, 7
    ],
    poster:
      'MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg',
    contentRating: '15',
    duration: 'PT175M',
    releaseDate: '1972-09-27',
    averageRating: 0,
    storyline:
      'When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.                Written by\nJ. S. Golden',
    actors: ['Marlon Brando', 'Al Pacino', 'James Caan'],
    imdbRating: 9.2,
    posterurl:
      'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg',
    id: 2,
    title: 'The Godfather'
  },
  {
    year: '2008',
    genres: ['Action', 'Crime', 'Drama'],
    ratings: [
      3, 6, 4, 1, 6, 10, 6, 3, 5, 9, 1, 3, 1, 7, 8, 10, 6, 2, 8, 6, 7, 1, 4, 3, 8, 3, 10, 8, 10, 4
    ],
    poster: 'MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT152M',
    releaseDate: '2008-07-25',
    averageRating: 0,
    storyline:
      'Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman\'s struggle against the Joker becomes deeply personal, forcing him to "confront everything he believes" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.                Written by\nLeon Lombardi',
    actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    imdbRating: 9,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY500_CR0,0,337,500_AL_.jpg',
    id: 4,
    title: 'The Dark Knight'
  },
  {
    year: '1957',
    genres: ['Crime', 'Drama'],
    ratings: [
      3, 5, 3, 3, 10, 3, 4, 1, 6, 10, 2, 8, 4, 6, 8, 6, 1, 10, 4, 5, 9, 3, 2, 4, 8, 10, 10, 7, 9, 6
    ],
    poster: 'MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SY500_CR0,0,333,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT96M',
    releaseDate: '1957-07-29',
    averageRating: 0,
    storyline:
      "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other. Based on the play, all of the action takes place on the stage of the jury room.                Written by\npjk <PETESID@VNET.IBM.COM>",
    actors: ['Henry Fonda', 'Lee J. Cobb', 'Martin Balsam'],
    imdbRating: 8.9,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SY500_CR0,0,333,500_AL_.jpg',
    id: 5,
    title: '12 Angry Men'
  },
  {
    year: '1993',
    genres: ['Biography', 'Drama', 'History'],
    ratings: [
      2, 6, 7, 8, 8, 6, 2, 4, 6, 2, 3, 3, 5, 9, 5, 10, 9, 5, 5, 2, 10, 4, 8, 7, 4, 10, 2, 10, 4, 10
    ],
    poster:
      'MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,333,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT195M',
    releaseDate: '1994-03-04',
    averageRating: 0,
    storyline:
      'Oskar Schindler is a vainglorious and greedy German businessman who becomes an unlikely humanitarian amid the barbaric German Nazi reign when he feels compelled to turn his factory into a refuge for Jews. Based on the true story of Oskar Schindler who managed to save about 1100 Jews from being gassed at the Auschwitz concentration camp, it is a testament to the good in all of us.                Written by\nHarald Mayr <marvin@bike.augusta.de>',
    actors: ['Liam Neeson', 'Ralph Fiennes', 'Ben Kingsley'],
    imdbRating: 8.9,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,333,500_AL_.jpg',
    id: 6,
    title: "Schindler's List"
  },
  {
    year: '1994',
    genres: ['Crime', 'Drama'],
    ratings: [
      2, 9, 7, 7, 7, 2, 2, 4, 1, 9, 6, 3, 4, 10, 8, 6, 7, 5, 9, 4, 3, 5, 9, 3, 8, 2, 6, 7, 4, 4
    ],
    poster: 'MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY500_CR0,0,336,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT154M',
    releaseDate: '1994-11-25',
    averageRating: 0,
    storyline:
      'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his weight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.                Written by\nSoumitra',
    actors: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
    imdbRating: 8.9,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY500_CR0,0,336,500_AL_.jpg',
    id: 7,
    title: 'Pulp Fiction'
  },
  {
    year: '2003',
    genres: ['Adventure', 'Drama', 'Fantasy'],
    ratings: [
      6, 3, 2, 7, 5, 2, 10, 10, 4, 5, 7, 1, 8, 4, 8, 7, 2, 8, 5, 5, 6, 3, 3, 10, 10, 2, 1, 8, 3, 5
    ],
    poster:
      'MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR0,0,182,268_AL_.jpg',
    contentRating: '11',
    duration: 'PT201M',
    releaseDate: '2003-12-17',
    averageRating: 0,
    storyline:
      'The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. Hobbits Frodo and Sam reach Mordor in their quest to destroy the "one ring", while Aragorn leads the forces of good against Sauron\'s evil army at the stone city of Minas Tirith.                Written by\nJwelch5742',
    actors: ['Elijah Wood', 'Viggo Mortensen', 'Ian McKellen'],
    imdbRating: 8.9,
    posterurl:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR0,0,182,268_AL_.jpg',
    id: 8,
    title: 'The Lord of the Rings: The Return of the King'
  },
  {
    year: '1966',
    genres: ['Western'],
    ratings: [
      2, 7, 2, 2, 3, 2, 4, 7, 10, 7, 7, 7, 2, 3, 8, 8, 6, 3, 6, 4, 8, 7, 9, 1, 10, 2, 4, 10, 3, 8
    ],
    poster:
      'MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
    contentRating: '',
    duration: 'PT161M',
    releaseDate: '1968-04-10',
    averageRating: 0,
    storyline:
      "Blondie (The Good) is a professional gunslinger who is out trying to earn a few dollars. Angel Eyes (The Bad) is a hit man who always commits to a task and sees it through, as long as he is paid to do so. And Tuco (The Ugly) is a wanted outlaw trying to take care of his own hide. Tuco and Blondie share a partnership together making money off Tuco's bounty, but when Blondie unties the partnership, Tuco tries to hunt down Blondie. When Blondie and Tuco come across a horse carriage loaded with dead bodies, they soon learn from the only survivor (Bill Carson) that he and a few other men have buried a stash of gold in a cemetery. Unfortunately Carson dies and Tuco only finds out the name of the cemetery, while Blondie finds out the name on the grave. Now the two must keep each other alive in order to find the gold. Angel Eyes (who had been looking for Bill Carson) discovers that Tuco and Blondie met with Carson and knows they know the location of the gold. All he needs is for the two to ...                Written by\nJeremy Thomson",
    actors: ['Clint Eastwood', 'Eli Wallach', 'Lee Van Cleef'],
    imdbRating: 8.9,
    posterurl:
      'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
    id: 9,
    title: 'Il buono, il brutto, il cattivo'
  },
  {
    year: '2010',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    ratings: [
      4, 8, 10, 7, 3, 3, 1, 6, 4, 4, 6, 1, 5, 7, 4, 5, 2, 1, 2, 2, 2, 6, 10, 8, 5, 6, 1, 4, 1, 5
    ],
    poster: 'MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT148M',
    releaseDate: '2010-07-23',
    averageRating: 0,
    storyline:
      "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible - inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.                Written by\nWarner Bros. Pictures",
    actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
    imdbRating: 8.8,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY500_CR0,0,337,500_AL_.jpg',
    id: 14,
    title: 'Inception'
  },
  {
    year: '2002',
    genres: ['Adventure', 'Drama', 'Fantasy'],
    ratings: [
      8, 2, 2, 3, 10, 9, 1, 8, 4, 7, 1, 7, 5, 7, 9, 3, 9, 9, 10, 3, 4, 1, 10, 8, 10, 1, 8, 10, 9, 8
    ],
    poster: 'MV5BMTAyNDU0NjY4NTheQTJeQWpwZ15BbWU2MDk4MTY2Nw@@._V1_SY256_SX175_AL_.jpg',
    contentRating: '11',
    duration: 'PT179M',
    releaseDate: '2002-12-18',
    averageRating: 0,
    storyline:
      'While Frodo and Sam, now accompanied by a new guide, continue their hopeless journey towards the land of shadow to destroy the One Ring, each member of the broken fellowship plays their part in the battle against the evil wizard Saruman and his armies of Isengard.',
    actors: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
    imdbRating: 8.7,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNDU0NjY4NTheQTJeQWpwZ15BbWU2MDk4MTY2Nw@@._V1_SY256_SX175_AL_.jpg',
    id: 15,
    title: 'The Lord of the Rings: The Two Towers'
  },
  {
    year: '1975',
    genres: ['Drama'],
    ratings: [
      2, 8, 4, 8, 7, 9, 2, 8, 5, 9, 3, 5, 6, 8, 7, 9, 2, 7, 9, 9, 7, 3, 7, 8, 7, 1, 10, 10, 3, 3
    ],
    poster:
      'MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,336,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT133M',
    releaseDate: '1976-02-26',
    averageRating: 0,
    storyline:
      'McMurphy has a criminal past and has once again gotten himself into trouble and is sentenced by the court. To escape labor duties in prison, McMurphy pleads insanity and is sent to a ward for the mentally unstable. Once here, McMurphy both endures and stands witness to the abuse and degradation of the oppressive Nurse Ratched, who gains superiority and power through the flaws of the other inmates. McMurphy and the other inmates band together to make a rebellious stance against the atrocious Nurse.                Written by\nJacob Oberfrank',
    actors: ['Jack Nicholson', 'Louise Fletcher', 'Michael Berryman'],
    imdbRating: 8.7,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,336,500_AL_.jpg',
    id: 16,
    title: "One Flew Over the Cuckoo's Nest"
  },
  {
    year: '1999',
    genres: ['Action', 'Sci-Fi'],
    ratings: [
      10, 10, 5, 1, 8, 8, 10, 9, 6, 2, 1, 9, 3, 1, 5, 1, 8, 5, 8, 8, 5, 7, 6, 5, 8, 6, 3, 6, 6, 10
    ],
    poster:
      'MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,332,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT136M',
    releaseDate: '1999-07-14',
    averageRating: 0,
    storyline:
      "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity have been captured by a race of machines that live off of the humans' body heat and electrochemical energy and who imprison their minds within an artificial reality known as the Matrix. As a rebel against the machines, Neo must return to the Matrix and confront the agents: super-powerful computer programs devoted to snuffing out Neo and the entire human rebellion.                Written by\nredcommander27",
    actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    imdbRating: 8.7,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,332,500_AL_.jpg',
    id: 18,
    title: 'The Matrix'
  },
  {
    year: '2002',
    genres: ['Crime', 'Drama'],
    ratings: [
      1, 2, 5, 10, 1, 2, 6, 10, 2, 9, 7, 9, 7, 9, 4, 8, 7, 7, 7, 7, 10, 9, 9, 2, 6, 6, 6, 2, 1, 8
    ],
    poster: 'MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX200_CR0,0,200,296_AL_.jpg',
    contentRating: '15',
    duration: 'PT130M',
    releaseDate: '2003-10-17',
    averageRating: 0,
    storyline:
      "Brazil, 1960s, City of God. The Tender Trio robs motels and gas trucks. Younger kids watch and learn well...too well. 1970s: Li'l Zé has prospered very well and owns the city. He causes violence and fear as he wipes out rival gangs without mercy. His best friend Bené is the only one to keep him on the good side of sanity. Rocket has watched these two gain power for years, and he wants no part of it. Yet he keeps getting swept up in the madness. All he wants to do is take pictures. 1980s: Things are out of control between the last two remaining gangs...will it ever end? Welcome to the City of God.                Written by\nJeff Mellinger <jeffmellinger@astound.net>",
    actors: ['Alexandre Rodrigues', 'Matheus Nachtergaele', 'Leandro Firmino'],
    imdbRating: 8.7,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX200_CR0,0,200,296_AL_.jpg',
    id: 21,
    title: 'Cidade de Deus'
  },
  {
    year: '1995',
    genres: ['Crime', 'Drama', 'Mystery'],
    ratings: [
      2, 5, 2, 3, 9, 1, 8, 2, 3, 4, 10, 7, 9, 7, 8, 2, 5, 6, 1, 5, 1, 2, 10, 5, 1, 7, 4, 8, 9, 4
    ],
    poster:
      'MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,319,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT127M',
    releaseDate: '1995-12-25',
    averageRating: 0,
    storyline:
      "A film about two homicide detectives' (Morgan Freeman and (Brad Pitt desperate hunt for a serial killer who justifies his crimes as absolution for the world's ignorance of the Seven Deadly Sins. The movie takes us from the tortured remains of one victim to the next as the sociopathic \"John Doe\" (Kevin Spacey) sermonizes to Detectives Somerset and Mills -- one sin at a time. The sin of Gluttony comes first and the murderer's terrible capacity is graphically demonstrated in the dark and subdued tones characteristic of film noir. The seasoned and cultured but jaded Somerset researches the Seven Deadly Sins in an effort to understand the killer's modus operandi while the bright but green and impulsive Detective Mills (Pitt) scoffs at his efforts to get inside the mind of a killer...                Written by\nMark Fleetwood <mfleetwo@mail.coin.missouri.edu>",
    actors: ['Morgan Freeman', 'Brad Pitt', 'Kevin Spacey'],
    imdbRating: 8.6,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,319,500_AL_.jpg',
    id: 22,
    title: 'Se7en'
  },
  {
    year: '1991',
    genres: ['Crime', 'Drama', 'Thriller'],
    ratings: [
      6, 10, 7, 5, 10, 10, 2, 3, 7, 7, 9, 10, 1, 4, 1, 9, 3, 1, 9, 4, 2, 6, 6, 1, 9, 8, 7, 9, 2, 10
    ],
    poster: 'MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SY500_CR0,0,333,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT118M',
    releaseDate: '1991-03-22',
    averageRating: 0,
    storyline:
      "FBI trainee Clarice Starling works hard to advance her career, including trying to hide or put behind her West Virginia roots, of which if some knew would automatically classify her as being backward or white trash. After graduation, she aspires to work in the agency's Behavioral Science Unit under the leadership of Jack Crawford. While she is still a trainee, Crawford does ask her to question Dr. Hannibal Lecter, a psychiatrist imprisoned thus far for eight years in maximum security isolation for being a serial killer, he who cannibalized his victims. Clarice is able to figure out the assignment is to pick Lecter's brains to help them solve another serial murder case, that of someone coined by the media as Buffalo Bill who has so far killed five victims, all located in the eastern US, all young women who are slightly overweight especially around the hips, all who were drowned in natural bodies of water, and all who were stripped of large swaths of skin. She also figures that Crawford...                Written by\nHuggo",
    actors: ['Jodie Foster', 'Anthony Hopkins', 'Lawrence A. Bonney'],
    imdbRating: 8.6,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SY500_CR0,0,333,500_AL_.jpg',
    id: 23,
    title: 'The Silence of the Lambs'
  },
  {
    year: '1946',
    genres: ['Drama', 'Family', 'Fantasy'],
    ratings: [
      1, 4, 2, 1, 7, 1, 9, 8, 4, 9, 5, 7, 7, 7, 10, 9, 9, 1, 4, 10, 3, 6, 10, 7, 3, 2, 2, 10, 2, 2
    ],
    poster: 'MV5BMTMzMzY5NDc4M15BMl5BanBnXkFtZTcwMzc4NjIxNw@@._V1_SY500_CR0,0,334,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT130M',
    releaseDate: '1947-08-04',
    averageRating: 0,
    storyline:
      "George Bailey has spent his entire life giving of himself to the people of Bedford Falls. He has always longed to travel but never had the opportunity in order to prevent rich skinflint Mr. Potter from taking over the entire town. All that prevents him from doing so is George's modest building and loan company, which was founded by his generous father. But on Christmas Eve, George's Uncle Billy loses the business's $8,000 while intending to deposit it in the bank. Potter finds the misplaced money and hides it from Billy. When the bank examiner discovers the shortage later that night, George realizes that he will be held responsible and sent to jail and the company will collapse, finally allowing Potter to take over the town. Thinking of his wife, their young children, and others he loves will be better off with him dead, he contemplates suicide. But the prayers of his loved ones result in a gentle angel named Clarence coming to earth to help George, with the promise of earning his ...                Written by\nalfiehitchie",
    actors: ['James Stewart', 'Donna Reed', 'Lionel Barrymore'],
    imdbRating: 8.6,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzMzY5NDc4M15BMl5BanBnXkFtZTcwMzc4NjIxNw@@._V1_SY500_CR0,0,334,500_AL_.jpg',
    id: 24,
    title: "It's a Wonderful Life"
  },
  {
    year: '1997',
    genres: ['Comedy', 'Drama', 'War'],
    ratings: [
      4, 1, 9, 3, 3, 9, 3, 3, 6, 1, 4, 1, 1, 8, 3, 6, 10, 8, 4, 6, 2, 7, 2, 10, 7, 5, 4, 3, 1, 10
    ],
    poster:
      'MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_SX335_AL_.jpg',
    contentRating: '11',
    duration: 'PT116M',
    releaseDate: '1999-01-22',
    averageRating: 0,
    storyline:
      'In 1930s Italy, a carefree Jewish book keeper named Guido starts a fairy tale life by courting and marrying a lovely woman from a nearby city. Guido and his wife have a son and live happily together until the occupation of Italy by German forces. In an attempt to hold his family together and help his son survive the horrors of a Jewish Concentration Camp, Guido imagines that the Holocaust is a game and that the grand prize for winning is a tank.                Written by\nAnthony Hughes <husnock31@hotmail.com>',
    actors: ['Roberto Benigni', 'Nicoletta Braschi', 'Giorgio Cantarini'],
    imdbRating: 8.6,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_SX335_AL_.jpg',
    id: 26,
    title: 'La vita è bella'
  },
  {
    year: '2001',
    genres: ['Animation', 'Adventure', 'Family'],
    ratings: [
      4, 8, 7, 6, 10, 9, 2, 5, 4, 5, 10, 2, 7, 1, 9, 4, 4, 6, 1, 4, 9, 10, 9, 3, 3, 6, 6, 8, 3, 9
    ],
    poster:
      'MV5BNmU5OTQ0OWQtOTY0OS00Yjg4LWE1NDYtNDRhYWMxYWY4OTMwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,352,500_AL_.jpg',
    contentRating: '7',
    duration: 'PT125M',
    releaseDate: '2003-09-19',
    averageRating: 0,
    storyline:
      "Chihiro and her parents are moving to a small Japanese town in the countryside, much to Chihiro's dismay. On the way to their new home, Chihiro's father makes a wrong turn and drives down a lonely one-lane road which dead-ends in front of a tunnel. Her parents decide to stop the car and explore the area. They go through the tunnel and find an abandoned amusement park on the other side, with its own little town. When her parents see a restaurant with great-smelling food but no staff, they decide to eat and pay later. However, Chihiro refuses to eat and decides to explore the theme park a bit more. She meets a boy named Haku who tells her that Chihiro and her parents are in danger, and they must leave immediately. She runs to the restaurant and finds that her parents have turned into pigs. In addition, the theme park turns out to be a town inhabited by demons, spirits, and evil gods. At the center of the town is a bathhouse where these creatures go to relax. The owner of the bathhouse ...                Written by\nZachary Harper",
    actors: ['Daveigh Chase', 'Suzanne Pleshette', 'Miyu Irino'],
    imdbRating: 8.6,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNmU5OTQ0OWQtOTY0OS00Yjg4LWE1NDYtNDRhYWMxYWY4OTMwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,352,500_AL_.jpg',
    id: 28,
    title: 'Sen to Chihiro no kamikakushi'
  },
  {
    year: '1998',
    genres: ['Drama', 'War'],
    ratings: [
      9, 7, 9, 3, 1, 7, 7, 9, 8, 3, 8, 3, 3, 10, 4, 5, 8, 8, 10, 7, 5, 3, 2, 5, 6, 5, 9, 6, 10, 6
    ],
    poster:
      'MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,339,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT169M',
    releaseDate: '1998-10-09',
    averageRating: 0,
    storyline:
      'Opening with the Allied invasion of Normandy on 6 June 1944, members of the 2nd Ranger Battalion under Cpt. Miller fight ashore to secure a beachhead. Amidst the fighting, two brothers are killed in action. Earlier in New Guinea, a third brother is KIA. Their mother, Mrs. Ryan, is to receive all three of the grave telegrams on the same day. The United States Army Chief of Staff, George C. Marshall, is given an opportunity to alleviate some of her grief when he learns of a fourth brother, Private James Ryan, and decides to send out 8 men (Cpt. Miller and select members from 2nd Rangers) to find him and bring him back home to his mother...                Written by\nJ.Zelman',
    actors: ['Tom Hanks', 'Matt Damon', 'Tom Sizemore'],
    imdbRating: 8.6,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,339,500_AL_.jpg',
    id: 29,
    title: 'Saving Private Ryan'
  },
  {
    year: '2014',
    genres: ['Adventure', 'Drama', 'Sci-Fi'],
    ratings: [
      7, 9, 10, 9, 2, 10, 10, 3, 9, 4, 1, 7, 9, 8, 4, 6, 7, 6, 7, 9, 9, 4, 6, 8, 2, 8, 3, 10, 2, 5
    ],
    poster: 'MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY500_CR0,0,320,500_AL_.jpg',
    contentRating: '11',
    duration: 'PT169M',
    releaseDate: '2014-11-07',
    averageRating: 0,
    storyline:
      "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.",
    actors: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    imdbRating: 8.6,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY500_CR0,0,320,500_AL_.jpg',
    id: 32,
    title: 'Interstellar'
  },
  {
    year: '1942',
    genres: ['Drama', 'Romance', 'War'],
    ratings: [
      2, 10, 7, 10, 9, 1, 10, 2, 10, 6, 6, 5, 9, 1, 10, 2, 6, 9, 7, 3, 5, 6, 7, 4, 2, 10, 5, 6, 10,
      10
    ],
    poster:
      'MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY377_SX250_AL_.jpg',
    contentRating: 'PG',
    duration: 'PT102M',
    releaseDate: '1943-10-11',
    averageRating: 0,
    storyline:
      "In World War II Casablanca, Rick Blaine, exiled American and former freedom fighter, runs the most popular nightspot in town. The cynical lone wolf Blaine comes into the possession of two valuable letters of transit. When Nazi Major Strasser arrives in Casablanca, the sycophantic police Captain Renault does what he can to please him, including detaining a Czechoslovak underground leader Victor Laszlo. Much to Rick's surprise, Lazslo arrives with Ilsa, Rick's one time love. Rick is very bitter towards Ilsa, who ran out on him in Paris, but when he learns she had good reason to, they plan to run off together again using the letters of transit. Well, that was their original plan....                Written by\nGary Jackson <garyjack5@cogeco.ca>",
    actors: ['Humphrey Bogart', 'Ingrid Bergman', 'Paul Henreid'],
    imdbRating: 8.6,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY377_SX250_AL_.jpg',
    id: 33,
    title: 'Casablanca'
  },
  {
    year: '1999',
    genres: ['Crime', 'Drama', 'Fantasy'],
    ratings: [
      3, 3, 5, 2, 3, 4, 7, 6, 7, 1, 10, 10, 9, 8, 9, 4, 5, 8, 1, 9, 3, 2, 8, 8, 6, 9, 7, 10, 4, 2
    ],
    poster: 'MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SY370_SX250_AL_.jpg',
    contentRating: '15',
    duration: 'PT189M',
    releaseDate: '2000-02-11',
    averageRating: 0,
    storyline:
      "Death Row guards at a penitentiary, in the 1930's, have a moral dilemma with their job when they discover one of their prisoners, a convicted murderer, has a special gift.                Written by\nGuy Johns",
    actors: ['Tom Hanks', 'Michael Clarke Duncan', 'David Morse'],
    imdbRating: 8.5,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SY370_SX250_AL_.jpg',
    id: 36,
    title: 'The Green Mile'
  },
  {
    year: '2011',
    genres: ['Biography', 'Comedy', 'Drama'],
    ratings: [
      4, 6, 6, 10, 2, 7, 7, 3, 6, 7, 4, 10, 7, 4, 2, 4, 5, 4, 1, 9, 4, 3, 9, 10, 1, 9, 7, 3, 5, 8
    ],
    poster: 'MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '7',
    duration: 'PT112M',
    releaseDate: '2012-09-21',
    averageRating: 0,
    storyline:
      'In Paris, the aristocratic and intellectual Philippe is a quadriplegic millionaire who is interviewing candidates for the position of his carer, with his red-haired secretary Magalie. Out of the blue, the rude African Driss cuts the line of candidates and brings a document from the Social Security and asks Phillipe to sign it to prove that he is seeking a job position so he can receive his unemployment benefit. Philippe challenges Driss, offering him a trial period of one month to gain experience helping him. Then Driss can decide whether he would like to stay with him or not. Driss accepts the challenge and moves to the mansion, changing the boring life of Phillipe and his employees.                Written by\nClaudio Carvalho, Rio de Janeiro, Brazil',
    actors: ['François Cluzet', 'Omar Sy', 'Anne Le Ny'],
    imdbRating: 8.6,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SY500_CR0,0,337,500_AL_.jpg',
    id: 37,
    title: 'Intouchables'
  },
  {
    year: '1936',
    genres: ['Comedy', 'Drama', 'Family'],
    ratings: [
      8, 2, 6, 5, 9, 8, 4, 2, 3, 8, 4, 9, 7, 1, 1, 4, 1, 4, 6, 4, 9, 5, 3, 1, 1, 2, 8, 7, 1, 2
    ],
    poster:
      'MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY450_SX289_AL_.jpg',
    contentRating: 'Btl',
    duration: 'PT87M',
    releaseDate: '1936-04-16',
    averageRating: 0,
    storyline:
      "Chaplins last 'silent' film, filled with sound effects, was made when everyone else was making talkies. Charlie turns against modern society, the machine age, (The use of sound in films ?) and progress. Firstly we see him frantically trying to keep up with a production line, tightening bolts. He is selected for an experiment with an automatic feeding machine, but various mishaps leads his boss to believe he has gone mad, and Charlie is sent to a mental hospital... When he gets out, he is mistaken for a communist while waving a red flag, sent to jail, foils a jailbreak, and is let out again. We follow Charlie through many more escapades before the film is out.                Written by\nColin Tinto <cst@imdb.com>",
    actors: ['Charles Chaplin', 'Paulette Goddard', 'Henry Bergman'],
    imdbRating: 8.5,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY450_SX289_AL_.jpg',
    id: 38,
    title: 'Modern Times'
  },
  {
    year: '1981',
    genres: ['Action', 'Adventure'],
    ratings: [
      1, 9, 4, 4, 2, 10, 7, 1, 8, 10, 3, 9, 4, 6, 5, 5, 5, 3, 6, 5, 2, 5, 1, 9, 2, 10, 1, 10, 4, 2
    ],
    poster: 'MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_SY500_CR0,0,332,500_AL_.jpg',
    contentRating: 'PG',
    duration: 'PT115M',
    releaseDate: '1981-08-07',
    averageRating: 0,
    storyline:
      'The year is 1936. An archeology professor named Indiana Jones is venturing in the jungles of South America searching for a golden statue. Unfortunately, he sets off a deadly trap but miraculously escapes. Then, Jones hears from a museum curator named Marcus Brody about a biblical artifact called The Ark of the Covenant, which can hold the key to humanly existence. Jones has to venture to vast places such as Nepal and Egypt to find this artifact. However, he will have to fight his enemy Rene Belloq and a band of Nazis in order to reach it.                Written by\nJohn Wiggins',
    actors: ['Harrison Ford', 'Karen Allen', 'Paul Freeman'],
    imdbRating: 8.5,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_SY500_CR0,0,332,500_AL_.jpg',
    id: 39,
    title: 'Raiders of the Lost Ark'
  },
  {
    year: '1954',
    genres: ['Mystery', 'Thriller'],
    ratings: [
      9, 4, 1, 2, 8, 9, 3, 2, 7, 3, 8, 6, 10, 7, 2, 6, 1, 3, 10, 10, 5, 1, 7, 5, 2, 2, 6, 3, 9, 2
    ],
    poster:
      'MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,341,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT112M',
    releaseDate: '1955-06-13',
    averageRating: 0,
    storyline:
      'Professional photographer L.B. "Jeff" Jeffries breaks his leg while getting an action shot at an auto race. Confined to his New York apartment, he spends his time looking out of the rear window observing the neighbors. He begins to suspect that a man across the courtyard may have murdered his wife. Jeff enlists the help of his high society fashion-consultant girlfriend Lisa Freemont and his visiting nurse Stella to investigate.                Written by\nCol Needham <col@imdb.com>',
    actors: ['James Stewart', 'Grace Kelly', 'Wendell Corey'],
    imdbRating: 8.5,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,341,500_AL_.jpg',
    id: 40,
    title: 'Rear Window'
  },
  {
    year: '2002',
    genres: ['Biography', 'Drama', 'War'],
    ratings: [
      10, 8, 3, 5, 10, 4, 2, 9, 10, 1, 6, 4, 7, 4, 10, 6, 8, 3, 3, 10, 7, 10, 8, 5, 5, 5, 2, 9, 3, 4
    ],
    poster:
      'MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,362,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT150M',
    releaseDate: '2003-08-15',
    averageRating: 0,
    storyline:
      'In this adaptation of the autobiography "The Pianist: The Extraordinary True Story of One Man\'s Survival in Warsaw, 1939-1945," Wladyslaw Szpilman, a Polish Jewish radio station pianist, sees Warsaw change gradually as World War II begins. Szpilman is forced into the Warsaw Ghetto, but is later separated from his family during Operation Reinhard. From this time until the concentration camp prisoners are released, Szpilman hides in various locations among the ruins of Warsaw.                Written by\nJwelch5742',
    actors: ['Adrien Brody', 'Thomas Kretschmann', 'Frank Finlay'],
    imdbRating: 8.5,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,362,500_AL_.jpg',
    id: 41,
    title: 'The Pianist'
  },
  {
    year: '2006',
    genres: ['Crime', 'Drama', 'Thriller'],
    ratings: [
      4, 7, 9, 2, 9, 2, 8, 7, 10, 7, 10, 10, 5, 8, 9, 7, 6, 10, 2, 8, 5, 7, 1, 3, 4, 1, 8, 5, 2, 3
    ],
    poster: 'MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX225_CR0,0,225,332_AL_.jpg',
    contentRating: '15',
    duration: 'PT151M',
    releaseDate: '2007-01-12',
    averageRating: 0,
    storyline:
      "In South Boston, the state police force is waging war on Irish-American organized crime. Young undercover cop Billy Costigan is assigned to infiltrate the mob syndicate run by gangland chief Frank Costello. While Billy quickly gains Costello's confidence, Colin Sullivan, a hardened young criminal who has infiltrated the state police as an informer for the syndicate is rising to a position of power in the Special Investigation Unit. Each man becomes deeply consumed by their double lives, gathering information about the plans and counter-plans of the operations they have penetrated. But when it becomes clear to both the mob and the police that there is a mole in their midst, Billy and Colin are suddenly in danger of being caught and exposed to the enemy - and each must race to uncover the identity of the other man in time to save themselves. But is either willing to turn on their friends and comrades they've made during their long stints undercover?                Written by\nAnonymous",
    actors: ['Leonardo DiCaprio', 'Matt Damon', 'Jack Nicholson'],
    imdbRating: 8.5,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX225_CR0,0,225,332_AL_.jpg',
    id: 42,
    title: 'The Departed'
  },
  {
    year: '1991',
    genres: ['Action', 'Sci-Fi', 'Thriller'],
    ratings: [
      4, 3, 9, 7, 8, 8, 6, 7, 4, 4, 5, 1, 9, 7, 1, 8, 10, 5, 6, 7, 4, 1, 5, 9, 3, 7, 7, 8, 7, 7
    ],
    poster:
      'MV5BZDM2YjYwYWMtMWZlNi00ZDQxLWExMDctMDAzNzQ0OTkzZjljXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT137M',
    releaseDate: '1991-09-13',
    averageRating: 0,
    storyline:
      "Over 10 years have passed since the first cyborg called The Terminator tried to kill Sarah Connor and her unborn son, John Connor. John Connor, the future leader of the human resistance, is now a healthy young boy. However another Terminator is sent back through time called the T-1000, which is more advanced and more powerful than its predecessor. The Mission: to kill John Connor when he's still a child. However, Sarah and John do not have to face this threat of a Terminator alone. Another Terminator is also sent back through time. The mission: to protect John and Sarah Connor at all costs. The battle for tomorrow has begun...                Written by\nEric ggg",
    actors: ['Arnold Schwarzenegger', 'Linda Hamilton', 'Edward Furlong'],
    imdbRating: 8.5,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BZDM2YjYwYWMtMWZlNi00ZDQxLWExMDctMDAzNzQ0OTkzZjljXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,337,500_AL_.jpg',
    id: 43,
    title: 'Terminator 2: Judgment Day'
  },
  {
    year: '1985',
    genres: ['Adventure', 'Comedy', 'Sci-Fi'],
    ratings: [
      10, 8, 8, 4, 10, 9, 1, 8, 8, 5, 10, 2, 3, 7, 1, 5, 7, 7, 1, 3, 4, 8, 9, 10, 10, 9, 2, 6, 8, 7
    ],
    poster:
      'MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,321,500_AL_.jpg',
    contentRating: '11',
    duration: 'PT116M',
    releaseDate: '1985-12-18',
    averageRating: 0,
    storyline:
      'Marty McFly, a typical American teenager of the Eighties, is accidentally sent back to 1955 in a plutonium-powered DeLorean "time machine" invented by a slightly mad scientist. During his often hysterical, always amazing trip back in time, Marty must make certain his teenage parents-to-be meet and fall in love - so he can get back to the future.                Written by\nRobert Lynch <docrlynch@yahoo.com>',
    actors: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
    imdbRating: 8.5,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,321,500_AL_.jpg',
    id: 44,
    title: 'Back to the Future'
  },
  {
    year: '2000',
    genres: ['Mystery', 'Thriller'],
    ratings: [
      6, 5, 6, 4, 10, 2, 3, 7, 2, 8, 10, 7, 9, 6, 7, 2, 5, 5, 3, 10, 2, 9, 8, 5, 3, 3, 7, 1, 1, 7
    ],
    poster:
      'MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,340,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT113M',
    releaseDate: '2001-07-13',
    averageRating: 0,
    storyline:
      'Memento chronicles two separate stories of Leonard, an ex-insurance investigator who can no longer build new memories, as he attempts to find the murderer of his wife, which is the last thing he remembers. One story line moves forward in time while the other tells the story backwards revealing more each time.                Written by\nScion013',
    actors: ['Guy Pearce', 'Carrie-Anne Moss', 'Joe Pantoliano'],
    imdbRating: 8.5,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,340,500_AL_.jpg',
    id: 47,
    title: 'Memento'
  },
  {
    year: '2006',
    genres: ['Drama', 'Mystery', 'Sci-Fi'],
    ratings: [
      10, 1, 6, 10, 6, 4, 1, 10, 9, 6, 8, 8, 1, 7, 5, 1, 8, 9, 2, 5, 6, 4, 7, 10, 4, 3, 9, 3, 10, 1
    ],
    poster: 'MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX225_CR0,0,225,333_AL_.jpg',
    contentRating: '11',
    duration: 'PT130M',
    releaseDate: '2006-12-25',
    averageRating: 0,
    storyline:
      'In the end of the Nineteenth Century, in London, Robert Angier, his beloved wife Julia McCullough and Alfred Borden are friends and assistants of a magician. When Julia accidentally dies during a performance, Robert blames Alfred for her death and they become enemies. Both become famous and rival magicians, sabotaging the performance of the other on the stage. When Alfred performs a successful trick, Robert becomes obsessed trying to disclose the secret of his competitor with tragic consequences.                Written by\nClaudio Carvalho, Rio de Janeiro, Brazil',
    actors: ['Christian Bale', 'Hugh Jackman', 'Scarlett Johansson'],
    imdbRating: 8.5,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX225_CR0,0,225,333_AL_.jpg',
    id: 49,
    title: 'The Prestige'
  },
  {
    year: '1994',
    genres: ['Animation', 'Adventure', 'Drama'],
    ratings: [
      6, 7, 8, 3, 2, 6, 4, 9, 8, 7, 7, 6, 10, 2, 6, 8, 1, 4, 4, 5, 3, 7, 8, 4, 2, 5, 4, 8, 7, 1
    ],
    poster:
      'MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SY500_CR0,0,336,500_AL_.jpg',
    contentRating: '7',
    duration: 'PT88M',
    releaseDate: '1994-11-18',
    averageRating: 0,
    storyline:
      'A young lion Prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young Prince must decide his fate: will he remain an outcast, or face his demons and become what he needs to be?                Written by\nfemaledragon1234',
    actors: ['Matthew Broderick', 'Jeremy Irons', 'James Earl Jones'],
    imdbRating: 8.5,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SY500_CR0,0,336,500_AL_.jpg',
    id: 50,
    title: 'The Lion King'
  },
  {
    year: '1964',
    genres: ['Comedy'],
    ratings: [
      8, 2, 3, 10, 5, 8, 5, 7, 4, 1, 8, 9, 10, 1, 9, 1, 2, 1, 1, 7, 10, 1, 5, 5, 8, 8, 1, 2, 2, 5
    ],
    poster:
      'MV5BNTkxYjUxNDYtZGY0My00NTc2LThiZmYtNmNmNmU0NGVkZWYwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SY500_CR0,0,326,500_AL_.jpg',
    contentRating: '11',
    duration: 'PT95M',
    releaseDate: '1964-04-13',
    averageRating: 0,
    storyline:
      "Paranoid Brigadier General Jack D. Ripper of Burpelson Air Force Base, believing that fluoridation of the American water supply is a Soviet plot to poison the U.S. populace, is able to deploy through a back door mechanism a nuclear attack on the Soviet Union without the knowledge of his superiors, including the Chair of the Joint Chiefs of Staff, General Buck Turgidson, and President Merkin Muffley. Only Ripper knows the code to recall the B-52 bombers and he has shut down communication in and out of Burpelson as a measure to protect this attack. Ripper's executive officer, RAF Group Captain Lionel Mandrake (on exchange from Britain), who is being held at Burpelson by Ripper, believes he knows the recall codes if he can only get a message to the outside world. Meanwhile at the Pentagon War Room, key persons including Muffley, Turgidson and nuclear scientist and adviser, a former Nazi named Dr. Strangelove, are discussing measures to stop the attack or mitigate its blow-up into an all ...                Written by\nHuggo",
    actors: ['Peter Sellers', 'George C. Scott', 'Sterling Hayden'],
    imdbRating: 8.5,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNTkxYjUxNDYtZGY0My00NTc2LThiZmYtNmNmNmU0NGVkZWYwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SY500_CR0,0,326,500_AL_.jpg',
    id: 52,
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb'
  },
  {
    year: '1940',
    genres: ['Comedy', 'Drama', 'War'],
    ratings: [
      10, 5, 5, 1, 7, 4, 9, 1, 1, 4, 5, 4, 3, 2, 1, 3, 3, 4, 5, 7, 7, 4, 6, 8, 10, 1, 1, 8, 4, 9
    ],
    poster:
      'MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,338,500_AL_.jpg',
    contentRating: '',
    duration: 'PT125M',
    releaseDate: '1945-11-19',
    averageRating: 0,
    storyline:
      'Twenty years after the end of WWI in which the nation of Tomainia was on the losing side, Adenoid Hynkel has risen to power as the ruthless dictator of the country. He believes in a pure Aryan state, and the decimation of the Jews. This situation is unknown to a simple Jewish-Tomainian barber who has since been hospitalized the result of a WWI battle. Upon his release, the barber, who had been suffering from memory loss about the war, is shown the new persecuted life of the Jews by many living in the Jewish ghetto, including a washerwoman named Hannah, with whom he begins a relationship. The barber is ultimately spared such persecution by Commander Schultz, who he saved in that WWI battle. The lives of all Jews in Tomainia are eventually spared with a policy shift by Hynkel himself, who is doing so for ulterior motives. But those motives include a want for world domination, starting with the invasion of neighboring Osterlich, which may be threatened by Benzino Napaloni, the dictator ...                Written by\nHuggo',
    actors: ['Charles Chaplin', 'Paulette Goddard', 'Jack Oakie'],
    imdbRating: 8.5,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,338,500_AL_.jpg',
    id: 54,
    title: 'The Great Dictator'
  },
  {
    year: '1988',
    genres: ['Animation', 'Drama', 'War'],
    ratings: [
      7, 1, 5, 7, 3, 2, 8, 9, 2, 1, 8, 1, 9, 8, 8, 8, 5, 2, 1, 2, 4, 10, 3, 10, 9, 2, 4, 10, 5, 4
    ],
    poster:
      'MV5BZjEwNDVhZjMtYzA1MS00ZWUxLThjOGUtZTliNGZiNGYyMjA3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,353,500_AL_.jpg',
    contentRating: '11',
    duration: 'PT89M',
    releaseDate: '1988-04-16',
    averageRating: 0,
    storyline:
      'The story of Seita and Satsuko, two young Japanese siblings, living in the declining days of World War II. When an American firebombing separates the two children from their parents, the two siblings must rely completely on one another while they struggle to fight for their survival.                Written by\nKyle Perez',
    actors: ['Tsutomu Tatsumi', 'Ayano Shiraishi', 'Akemi Yamaguchi'],
    imdbRating: 8.5,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BZjEwNDVhZjMtYzA1MS00ZWUxLThjOGUtZTliNGZiNGYyMjA3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,353,500_AL_.jpg',
    id: 57,
    title: 'Hotaru no haka'
  },
  {
    year: '1957',
    genres: ['Drama', 'War'],
    ratings: [
      5, 10, 5, 7, 6, 8, 7, 7, 4, 9, 8, 6, 8, 9, 9, 4, 7, 10, 7, 10, 10, 3, 10, 2, 6, 10, 9, 4, 10,
      8
    ],
    poster:
      'MV5BOTI5Nzc0OTMtYzBkMS00NjkxLThmM2UtNjM2ODgxN2M5NjNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,326,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT88M',
    releaseDate: '1958-05-08',
    averageRating: 0,
    storyline:
      'The futility and irony of the war in the trenches in WWI is shown as a unit commander in the French army must deal with the mutiny of his men and a glory-seeking general after part of his force falls back under fire in an impossible attack.                Written by\nKeith Loh <loh@sfu.ca>',
    actors: ['Kirk Douglas', 'Ralph Meeker', 'Adolphe Menjou'],
    imdbRating: 8.5,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BOTI5Nzc0OTMtYzBkMS00NjkxLThmM2UtNjM2ODgxN2M5NjNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,326,500_AL_.jpg',
    id: 58,
    title: 'Paths of Glory'
  },
  {
    year: '2012',
    genres: ['Drama', 'Western'],
    ratings: [
      8, 4, 8, 6, 9, 10, 10, 6, 2, 8, 2, 10, 9, 7, 6, 5, 9, 5, 2, 9, 3, 9, 6, 1, 1, 7, 4, 2, 10, 10
    ],
    poster: 'MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT165M',
    releaseDate: '2013-01-18',
    averageRating: 0,
    storyline:
      "A German dentist buys the freedom of a slave and trains him with the intent to make him his deputy bounty hunter. Instead, he is led to the site of the slave's wife who belongs to a ruthless plantation owner.                Written by\nBenLobel",
    actors: ['Jamie Foxx', 'Christoph Waltz', 'Leonardo DiCaprio'],
    imdbRating: 8.4,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SY500_CR0,0,337,500_AL_.jpg',
    id: 59,
    title: 'Django Unchained'
  },
  {
    year: '1980',
    genres: ['Drama', 'Horror'],
    ratings: [
      1, 6, 8, 4, 6, 4, 8, 2, 7, 4, 5, 9, 9, 1, 10, 3, 2, 4, 8, 2, 9, 8, 3, 9, 10, 3, 7, 5, 5, 9
    ],
    poster:
      'MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY476_CR0,0,313,476_AL_.jpg',
    contentRating: '15',
    duration: 'PT146M',
    releaseDate: '1980-09-26',
    averageRating: 0,
    storyline:
      'Signing a contract, Jack Torrance, a normal writer and former teacher agrees to take care of a hotel which has a long, violent past that puts everyone in the hotel in a nervous situation. While Jack slowly gets more violent and angry of his life, his son, Danny, tries to use a special talent, the "Shining", to inform the people outside about whatever that is going on in the hotel.                Written by\nJ. S. Golden',
    actors: ['Jack Nicholson', 'Shelley Duvall', 'Danny Lloyd'],
    imdbRating: 8.4,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY476_CR0,0,313,476_AL_.jpg',
    id: 60,
    title: 'The Shining'
  },
  {
    year: '2016',
    genres: ['Comedy', 'Drama', 'Musical'],
    ratings: [
      1, 1, 4, 8, 9, 5, 9, 8, 2, 3, 3, 10, 2, 6, 9, 1, 5, 9, 7, 9, 1, 5, 1, 9, 5, 2, 2, 3, 1, 1
    ],
    poster: 'MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'Btl',
    duration: 'PT128M',
    releaseDate: '2017-01-27',
    averageRating: 0,
    storyline:
      'Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.                Written by\nEirini',
    actors: ['Ryan Gosling', 'Emma Stone', 'Rosemarie DeWitt'],
    imdbRating: 8.5,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SY500_CR0,0,337,500_AL_.jpg',
    id: 61,
    title: 'La La Land'
  },
  {
    year: '2008',
    genres: ['Animation', 'Adventure', 'Family'],
    ratings: [
      10, 5, 2, 9, 3, 6, 2, 10, 9, 9, 10, 1, 10, 5, 6, 7, 9, 5, 1, 6, 9, 9, 9, 4, 8, 6, 4, 7, 7, 7
    ],
    poster: 'MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'Btl',
    duration: 'PT98M',
    releaseDate: '2008-09-05',
    averageRating: 0,
    storyline:
      'In a distant, but not so unrealistic, future where mankind has abandoned earth because it has become covered with trash from products sold by the powerful multi-national Buy N Large corporation, WALL-E, a garbage collecting robot has been left to clean up the mess. Mesmerized with trinkets of Earth\'s history and show tunes, WALL-E is alone on Earth except for a sprightly pet cockroach. One day, EVE, a sleek (and dangerous) reconnaissance robot, is sent to Earth to find proof that life is once again sustainable. WALL-E falls in love with EVE. WALL-E rescues EVE from a dust storm and shows her a living plant he found amongst the rubble. Consistent with her "directive", EVE takes the plant and automatically enters a deactivated state except for a blinking green beacon. WALL-E, doesn\'t understand what has happened to his new friend, but, true to his love, he protects her from wind, rain, and lightning, even as she is unresponsive. One day a massive ship comes to reclaim EVE, but WALL-E, ...',
    actors: ['Ben Burtt', 'Elissa Knight', 'Jeff Garlin'],
    imdbRating: 8.4,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SY500_CR0,0,337,500_AL_.jpg',
    id: 62,
    title: 'WALL·E'
  },
  {
    year: '2012',
    genres: ['Action', 'Thriller'],
    ratings: [
      2, 5, 5, 8, 5, 2, 5, 1, 7, 6, 9, 1, 8, 1, 3, 6, 5, 7, 3, 9, 5, 8, 6, 1, 4, 8, 5, 9, 5, 1
    ],
    poster: 'MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SY360_SX243_AL_.jpg',
    contentRating: '15',
    duration: 'PT164M',
    releaseDate: '2012-07-25',
    averageRating: 0,
    storyline:
      "Despite his tarnished reputation after the events of The Dark Knight, in which he took the rap for Dent's crimes, Batman feels compelled to intervene to assist the city and its police force which is struggling to cope with Bane's plans to destroy the city.                Written by\nWellardRockard",
    actors: ['Christian Bale', 'Tom Hardy', 'Anne Hathaway'],
    imdbRating: 8.5,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SY360_SX243_AL_.jpg',
    id: 64,
    title: 'The Dark Knight Rises'
  },
  {
    year: '1997',
    genres: ['Animation', 'Adventure', 'Fantasy'],
    ratings: [
      2, 2, 10, 3, 8, 9, 10, 10, 3, 6, 3, 5, 1, 3, 1, 3, 8, 6, 8, 10, 10, 4, 1, 5, 5, 5, 8, 10, 9, 6
    ],
    poster:
      'MV5BMTVlNWM4NTAtNDQxYi00YWU5LWIwM2MtZmVjYWFmODZiODE5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,353,500_AL_.jpg',
    contentRating: '11',
    duration: 'PT134M',
    releaseDate: '2011-10-28',
    averageRating: 0,
    storyline:
      "While protecting his village from rampaging boar-god/demon, a confident young warrior, Ashitaka, is stricken by a deadly curse. To save his life, he must journey to the forests of the west. Once there, he's embroiled in a fierce campaign that humans were waging on the forest. The ambitious Lady Eboshi and her loyal clan use their guns against the gods of the forest and a brave young woman, Princess Mononoke, who was raised by a wolf-god. Ashitaka sees the good in both sides and tries to stem the flood of blood. This is met be animosity by both sides as they each see him as supporting the enemy.                Written by\nChristopher Taguchi",
    actors: ['Yôji Matsuda', 'Yuriko Ishida', 'Yûko Tanaka'],
    imdbRating: 8.4,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTVlNWM4NTAtNDQxYi00YWU5LWIwM2MtZmVjYWFmODZiODE5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,353,500_AL_.jpg',
    id: 65,
    title: 'Mononoke-hime'
  },
  {
    year: '2003',
    genres: ['Drama', 'Mystery', 'Thriller'],
    ratings: [
      2, 1, 9, 4, 7, 5, 4, 4, 5, 5, 6, 10, 9, 6, 6, 5, 4, 7, 1, 3, 2, 7, 2, 1, 8, 2, 5, 1, 3, 7
    ],
    poster: 'MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_SY333_SX225_AL_.jpg',
    contentRating: '15',
    duration: 'PT120M',
    releaseDate: '2005-01-21',
    averageRating: 0,
    storyline:
      'An average man is kidnapped and imprisoned in a shabby cell for 15 years without explanation. He then is released, equipped with money, a cellphone and expensive clothes. As he strives to explain his imprisonment and get his revenge, Oh Dae-Su soon finds out that his kidnapper has a greater plan for him and is set onto a path of pain and suffering in an attempt to uncover the motive of his mysterious tormentor.                Written by\nJacksrevenge',
    actors: ['Min-sik Choi', 'Ji-tae Yu', 'Hye-jeong Kang'],
    imdbRating: 8.4,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_SY333_SX225_AL_.jpg',
    id: 67,
    title: 'Oldeuboi'
  },
  {
    year: '1984',
    genres: ['Crime', 'Drama'],
    ratings: [
      5, 7, 1, 9, 7, 3, 3, 1, 3, 10, 5, 6, 10, 8, 3, 3, 1, 6, 4, 7, 6, 9, 3, 9, 8, 4, 6, 1, 10, 4
    ],
    poster:
      'MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,319,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT229M',
    releaseDate: '1984-08-17',
    averageRating: 0,
    storyline:
      'Epic tale of a group of Jewish gangsters in New York, from childhood, through their glory years during prohibition, and their meeting again 35 years later.                Written by\nAndrew Welsh <andreww@bnr.ca>',
    actors: ['Robert De Niro', 'James Woods', 'Elizabeth McGovern'],
    imdbRating: 8.4,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,319,500_AL_.jpg',
    id: 68,
    title: 'Once Upon a Time in America'
  },
  {
    year: '1981',
    genres: ['Adventure', 'Drama', 'Thriller'],
    ratings: [
      5, 10, 2, 5, 7, 9, 3, 9, 7, 5, 6, 2, 8, 10, 9, 1, 2, 1, 4, 7, 3, 4, 10, 2, 1, 3, 2, 6, 2, 5
    ],
    poster:
      'MV5BNGRmOWY0MGUtNTVhMy00NzRlLTljNDAtNTBiNTRlODgxNmY2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY406_SX290_AL_.jpg',
    contentRating: '15',
    duration: 'PT149M',
    releaseDate: '1982-02-26',
    averageRating: 0,
    storyline:
      'It is 1942 and the German submarine fleet is heavily engaged in the so-called "Battle of the Atlantic" to harass and destroy British shipping. With better escorts of the Destroyer Class, however, German U-Boats have begun to take heavy losses. "Das Boot" is the story of one such U-Boat crew, with the film examining how these submariners maintained their professionalism as soldiers and attempted to accomplish impossible missions, all the while attempting to understand and obey the ideology of the government under which they served.                Written by\nAnthony Hughes <husnock31@hotmail.com>',
    actors: ['Jürgen Prochnow', 'Herbert Grönemeyer', 'Klaus Wennemann'],
    imdbRating: 8.4,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNGRmOWY0MGUtNTVhMy00NzRlLTljNDAtNTBiNTRlODgxNmY2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY406_SX290_AL_.jpg',
    id: 70,
    title: 'Das Boot'
  },
  {
    year: '1957',
    genres: ['Crime', 'Drama', 'Mystery'],
    ratings: [
      8, 10, 9, 7, 9, 1, 8, 1, 8, 3, 7, 6, 8, 7, 4, 1, 8, 7, 1, 9, 10, 9, 7, 4, 5, 8, 9, 8, 3, 7
    ],
    poster: 'MV5BMTc0MjgyNTUyNF5BMl5BanBnXkFtZTcwNDQzMDg0Nw@@._V1_SY500_CR0,0,333,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT116M',
    releaseDate: '1958-03-17',
    averageRating: 0,
    storyline:
      "It's Britain, 1953. Upon his return to work following a heart attack, irrepressible barrister Sir Wilfrid Robarts, known as a barrister for the hopeless, takes on a murder case, much to the exasperation of his medical team, led by his overly regulated private nurse, Miss Plimsoll, who tries her hardest to ensure that he not return to his hard living ways - including excessive cigar smoking and drinking - while he takes his medication and gets his much needed rest. That case is defending American war veteran Leonard Vole, a poor, out of work, struggling inventor who is accused of murdering his fifty-six year old lonely and wealthy widowed acquaintance, Emily French. The initial evidence is circumstantial but points to Leonard as the murderer. Despite being happily married to East German former beer hall performer Christine Vole, he fostered that friendship with Mrs. French in the hopes that she would finance one of his many inventions to the tune of a few hundred pounds. It thus does ...                Written by\nHuggo",
    actors: ['Tyrone Power', 'Marlene Dietrich', 'Charles Laughton'],
    imdbRating: 8.4,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjgyNTUyNF5BMl5BanBnXkFtZTcwNDQzMDg0Nw@@._V1_SY500_CR0,0,333,500_AL_.jpg',
    id: 71,
    title: 'Witness for the Prosecution'
  },
  {
    year: '1958',
    genres: ['Mystery', 'Romance', 'Thriller'],
    ratings: [
      3, 8, 2, 9, 8, 8, 1, 6, 10, 5, 1, 7, 6, 6, 2, 8, 3, 3, 4, 1, 6, 8, 1, 6, 9, 5, 7, 4, 9, 2
    ],
    poster:
      'MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY500_CR0,0,322,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT128M',
    releaseDate: '1958-12-26',
    averageRating: 0,
    storyline:
      'John "Scottie" Ferguson is a retired San Francisco police detective who suffers from acrophobia and Madeleine is the lady who leads him to high places. A wealthy shipbuilder who is an acquaintance from college days approaches Scottie and asks him to follow his beautiful wife, Madeleine. He fears she is going insane, maybe even contemplating suicide, he believes she is possessed by a dead ancestor. Scottie is skeptical, but agrees after he sees the beautiful Madeleine.                Written by\nfilmfactsman',
    actors: ['James Stewart', 'Kim Novak', 'Barbara Bel Geddes'],
    imdbRating: 8.4,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY500_CR0,0,322,500_AL_.jpg',
    id: 73,
    title: 'Vertigo'
  },
  {
    year: '1992',
    genres: ['Crime', 'Drama', 'Thriller'],
    ratings: [
      10, 7, 3, 2, 10, 3, 7, 6, 9, 3, 9, 7, 4, 3, 10, 5, 3, 6, 4, 7, 8, 9, 8, 8, 9, 3, 1, 9, 5, 8
    ],
    poster:
      'MV5BNDc0YWFhMmQtOTFhZC00MzViLTlkNjctMWUzYTI2YWFkNzVlXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SY500_CR0,0,333,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT99M',
    releaseDate: '1993-02-26',
    averageRating: 0,
    storyline:
      "Six criminals, who are strangers to each other, are hired by a crime boss, Joe Cabot, to carry out a diamond robbery. Right at the outset, they are given false names with the intention that they won't get too close and will concentrate on the job instead. They are completely sure that the robbery is going to be a success. But, when the police show up right at the time and the site of the robbery, panic spreads amongst the group members, and two of them are killed in the subsequent shootout, along with a few policemen and civilians. When the remaining people assemble at the premeditated rendezvous point (a warehouse), they begin to suspect that one of them is an undercover cop.                Written by\nSoumitra",
    actors: ['Harvey Keitel', 'Tim Roth', 'Michael Madsen'],
    imdbRating: 8.4,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNDc0YWFhMmQtOTFhZC00MzViLTlkNjctMWUzYTI2YWFkNzVlXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SY500_CR0,0,333,500_AL_.jpg',
    id: 75,
    title: 'Reservoir Dogs'
  },
  {
    year: '1931',
    genres: ['Crime', 'Drama', 'Mystery'],
    ratings: [
      8, 7, 5, 3, 1, 5, 2, 5, 3, 6, 6, 10, 8, 9, 5, 5, 6, 5, 9, 5, 1, 7, 10, 7, 2, 1, 3, 4, 6, 9
    ],
    poster: 'MV5BMTQyNjA5NzU5MV5BMl5BanBnXkFtZTgwMDk1MTA5MTE@._V1_SY250_SX175_AL_.jpg',
    contentRating: '15',
    duration: 'PT117M',
    releaseDate: '1931-08-31',
    averageRating: 0,
    storyline:
      "In Germany, Hans Beckert is an unknown killer of girls. He whistles Edvard Grieg's 'In The Hall of the Mountain King', from the 'Peer Gynt' Suite I Op. 46 while attracting the little girls for death. The police force pressed by the Minister give its best effort trying unsuccessfully to arrest the serial killer. The organized crime has great losses due to the intense search and siege of the police and decides to chase the murderer, with the support of the beggars association. They catch Hans and briefly judge him.                Written by\nClaudio Carvalho, Rio de Janeiro, Brazil",
    actors: ['Peter Lorre', 'Ellen Widmann', 'Inge Landgut'],
    imdbRating: 8.4,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyNjA5NzU5MV5BMl5BanBnXkFtZTgwMDk1MTA5MTE@._V1_SY250_SX175_AL_.jpg',
    id: 76,
    title: 'M'
  },
  {
    year: '1995',
    genres: ['Biography', 'Drama', 'History'],
    ratings: [
      5, 8, 1, 3, 7, 10, 6, 8, 9, 10, 4, 8, 2, 8, 2, 9, 1, 8, 2, 5, 1, 9, 4, 3, 8, 5, 9, 2, 1, 9
    ],
    poster:
      'MV5BNTMyNGE1ODQtYTNiNS00ZTUyLThhZjktMTgyOGZkZThlYTc3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,338,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT178M',
    releaseDate: '1995-09-01',
    averageRating: 0,
    storyline:
      "William Wallace is a Scottish rebel who leads an uprising against the cruel English ruler Edward the Longshanks, who wishes to inherit the crown of Scotland for himself. When he was a young boy, William Wallace's father and brother, along with many others, lost their lives trying to free Scotland. Once he loses another of his loved ones, William Wallace begins his long quest to make Scotland free once and for all, along with the assistance of Robert the Bruce.                Written by\nAnonymous",
    actors: ['Mel Gibson', 'Sophie Marceau', 'Patrick McGoohan'],
    imdbRating: 8.4,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNTMyNGE1ODQtYTNiNS00ZTUyLThhZjktMTgyOGZkZThlYTc3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,338,500_AL_.jpg',
    id: 77,
    title: 'Braveheart'
  },
  {
    year: '2000',
    genres: ['Drama'],
    ratings: [
      7, 4, 5, 7, 5, 10, 9, 8, 6, 10, 9, 2, 4, 6, 3, 5, 5, 1, 3, 3, 7, 10, 5, 2, 3, 2, 4, 8, 5, 7
    ],
    poster:
      'MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,333,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT102M',
    releaseDate: '2001-09-14',
    averageRating: 0,
    storyline:
      "Sara Goldfarb (Ellen Burstyn) is a retired widow, living in a small apartment. She spends most of her time watching TV, especially a particular self-help show. She has delusions of rising above her current dull existence by being a guest on that show. Her son, Harry (Jared Leto) is a junkie but along with his friend Tyrone (Marlon Wayans) has visions of making it big by becoming a drug dealer. Harry's girlfriend Marion (Jennifer Connelly) could be fashion designer or artist but is swept along in Harry's drug-centric world. Meanwhile Sara has developed an addiction of her own. She desperately wants to lose weight and so goes on a crash course involving popping pills, pills which turn out to be very addictive and harmful to her mental state.                Written by\ngrantss",
    actors: ['Ellen Burstyn', 'Jared Leto', 'Jennifer Connelly'],
    imdbRating: 8.4,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,333,500_AL_.jpg',
    id: 78,
    title: 'Requiem for a Dream'
  },
  {
    year: '2001',
    genres: ['Comedy', 'Romance'],
    ratings: [
      6, 9, 7, 10, 8, 7, 5, 6, 9, 3, 9, 8, 3, 9, 4, 2, 9, 3, 2, 4, 4, 5, 6, 2, 4, 8, 3, 3, 10, 7
    ],
    poster:
      'MV5BMTA3MjVkMWMtYTQ4ZC00ODczLWFjYmQtMDFkZDQ2Y2M0NDVmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,336,500_AL_.jpg',
    contentRating: '7',
    duration: 'PT122M',
    releaseDate: '2001-10-12',
    averageRating: 0,
    storyline:
      'Amélie is a story about a girl named Amélie whose childhood was suppressed by her Father\'s mistaken concerns of a heart defect. With these concerns Amélie gets hardly any real life contact with other people. This leads Amélie to resort to her own fantastical world and dreams of love and beauty. She later on becomes a young woman and moves to the central part of Paris as a waitress. After finding a lost treasure belonging to the former occupant of her apartment, she decides to return it to him. After seeing his reaction and his new found perspective - she decides to devote her life to the people around her. Such as, her father who is obsessed with his garden-gnome, a failed writer, a hypochondriac, a man who stalks his ex girlfriends, the "ghost", a suppressed young soul, the love of her life and a man whose bones are as brittle as glass. But after consuming herself with these escapades - she finds out that she is disregarding her own life and damaging her quest for love. Amélie then ...                Written by\nspragg_s',
    actors: ['Audrey Tautou', 'Mathieu Kassovitz', 'Rufus'],
    imdbRating: 8.4,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MjVkMWMtYTQ4ZC00ODczLWFjYmQtMDFkZDQ2Y2M0NDVmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,336,500_AL_.jpg',
    id: 79,
    title: "Le fabuleux destin d'Amélie Poulain"
  },
  {
    year: '1971',
    genres: ['Crime', 'Drama', 'Sci-Fi'],
    ratings: [
      4, 7, 2, 6, 4, 3, 8, 3, 8, 5, 2, 10, 10, 6, 6, 10, 6, 2, 7, 1, 5, 7, 4, 10, 9, 8, 8, 4, 5, 10
    ],
    poster: 'MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT136M',
    releaseDate: '1972-04-26',
    averageRating: 0,
    storyline:
      'Protagonist Alex DeLarge is an "ultraviolent" youth in futuristic Britain. As with all luck, his eventually runs out and he\'s arrested and convicted of murder and rape. While in prison, Alex learns of an experimental program in which convicts are programmed to detest violence. If he goes through the program, his sentence will be reduced and he will be back on the streets sooner than expected. But Alex\'s ordeals are far from over once he hits the mean streets of Britain that he had a hand in creating.                Written by\nNikki Carlyle',
    actors: ['Malcolm McDowell', 'Patrick Magee', 'Michael Bates'],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SY500_CR0,0,337,500_AL_.jpg',
    id: 80,
    title: 'A Clockwork Orange'
  },
  {
    year: '2007',
    genres: ['Drama', 'Family', 'Music'],
    ratings: [
      8, 1, 10, 4, 8, 6, 6, 10, 3, 7, 5, 7, 2, 10, 10, 2, 4, 10, 8, 2, 1, 1, 8, 10, 2, 6, 1, 5, 7, 2
    ],
    poster:
      'MV5BNTVmYTk2NjAtYzY3MS00YjFjLTlkYzktYzg3YzMyZDQyOWRiXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,346,500_AL_.jpg',
    contentRating: 'PG',
    duration: 'PT165M',
    releaseDate: '2008-12-26',
    averageRating: 0,
    storyline:
      "Ishaan Awasthi is an eight-year-old whose world is filled with wonders that no one else seems to appreciate; colours, fish, dogs and kites are just not important in the world of adults, who are much more interested in things like homework, marks and neatness. And Ishaan just cannot seem to get anything right in class. When he gets into far more trouble than his parents can handle, he is packed off to a boarding school to 'be disciplined'. Things are no different at his new school, and Ishaan has to contend with the added trauma of separation from his family. One day a new art teacher bursts onto the scene, Ram Shankar Nikumbh, who infects the students with joy and optimism. He breaks all the rules of 'how things are done' by asking them to think, dream and imagine, and all the children respond with enthusiasm, all except Ishaan. Nikumbh soon realizes that Ishaan is very unhappy, and he sets out to discover why. With time, patience and care, he ultimately helps Ishaan find himself.                Written by\nAnonymous",
    actors: ['Darsheel Safary', 'Aamir Khan', 'Tanay Chheda'],
    imdbRating: 8.5,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNTVmYTk2NjAtYzY3MS00YjFjLTlkYzktYzg3YzMyZDQyOWRiXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,346,500_AL_.jpg',
    id: 82,
    title: 'Taare Zameen Par'
  },
  {
    year: '1962',
    genres: ['Adventure', 'Biography', 'Drama'],
    ratings: [
      3, 4, 2, 5, 5, 8, 6, 9, 6, 1, 5, 5, 1, 5, 8, 8, 1, 4, 7, 9, 5, 10, 6, 6, 10, 4, 3, 8, 5, 6
    ],
    poster:
      'MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SY500_CR0,0,346,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT216M',
    releaseDate: '1963-03-22',
    averageRating: 0,
    storyline:
      'Due to his knowledge of the native Bedouin tribes, British Lieutenant T.E. Lawrence is sent to Arabia to find Prince Faisal and serve as a liaison between the Arabs and the British in their fight against the Turks. With the aid of native Sherif Ali, Lawrence rebels against the orders of his superior officer and strikes out on a daring camel journey across the harsh desert to attack a well-guarded Turkish port.                Written by\nJwelch5742',
    actors: ["Peter O'Toole", 'Alec Guinness', 'Anthony Quinn'],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SY500_CR0,0,346,500_AL_.jpg',
    id: 83,
    title: 'Lawrence of Arabia'
  },
  {
    year: '2004',
    genres: ['Drama', 'Romance', 'Sci-Fi'],
    ratings: [
      2, 2, 2, 4, 1, 1, 3, 7, 1, 2, 5, 1, 5, 3, 3, 1, 3, 8, 2, 10, 10, 9, 4, 3, 5, 9, 1, 2, 10, 3
    ],
    poster: 'MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '11',
    duration: 'PT108M',
    releaseDate: '2004-08-20',
    averageRating: 0,
    storyline:
      'A man, Joel Barish, heartbroken that his girlfriend Clementine underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realizes that he still loves her, and may be too late to correct his mistake.                Written by\nanonymous',
    actors: ['Jim Carrey', 'Kate Winslet', 'Tom Wilkinson'],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SY500_CR0,0,337,500_AL_.jpg',
    id: 85,
    title: 'Eternal Sunshine of the Spotless Mind'
  },
  {
    year: '1984',
    genres: ['Biography', 'Drama', 'History'],
    ratings: [
      1, 2, 7, 7, 3, 6, 1, 1, 9, 10, 1, 4, 8, 8, 9, 8, 1, 6, 8, 5, 5, 5, 10, 5, 5, 8, 8, 3, 3, 4
    ],
    poster: 'MV5BMTg5NDkwMTk5N15BMl5BanBnXkFtZTYwODg3MDk2._V1_SY352_CR0,0,237,352_AL_.jpg',
    contentRating: '11',
    duration: 'PT160M',
    releaseDate: '1984-10-12',
    averageRating: 0,
    storyline:
      "Antonio Salieri believes that Wolfgang Amadeus Mozart's music is divine and miraculous. He wishes he was himself as good a musician as Mozart so that he can praise the Lord through composing. He began his career as a devout man who believes his success and talent as a composer are God's rewards for his piety. He's also content as the respected, financially well-off, court composer of Austrian Emperor Joseph II. But he's shocked to learn that Mozart is such a vulgar creature, and can't understand why God favored Mozart to be his instrument. Salieri's envy has made him an enemy of God whose greatness was evident in Mozart. He is ready to take revenge against God and Mozart for his own musical mediocrity.                Written by\nKhaled Salem",
    actors: ['F. Murray Abraham', 'Tom Hulce', 'Elizabeth Berridge'],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5NDkwMTk5N15BMl5BanBnXkFtZTYwODg3MDk2._V1_SY352_CR0,0,237,352_AL_.jpg',
    id: 87,
    title: 'Amadeus'
  },
  {
    year: '2010',
    genres: ['Animation', 'Adventure', 'Comedy'],
    ratings: [
      10, 5, 5, 1, 10, 10, 8, 3, 4, 6, 7, 4, 5, 7, 10, 2, 9, 2, 4, 7, 1, 1, 3, 9, 3, 3, 2, 5, 1, 5
    ],
    poster: 'MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_SY500_CR0,0,353,500_AL_.jpg',
    contentRating: '7',
    duration: 'PT103M',
    releaseDate: '2010-08-27',
    averageRating: 0,
    storyline:
      "Woody, Buzz and the whole gang are back. As their owner Andy prepares to depart for college, his loyal toys find themselves in daycare where untamed tots with their sticky little fingers do not play nice. So, it's all for one and one for all as they join Barbie's counterpart Ken, a thespian hedgehog named Mr. Pricklepants and a pink, strawberry-scented teddy bear called Lots-o'-Huggin' Bear to plan their great escape.                Written by\nWalt Disney Studios",
    actors: ['Tom Hanks', 'Tim Allen', 'Joan Cusack'],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_SY500_CR0,0,353,500_AL_.jpg',
    id: 88,
    title: 'Toy Story 3'
  },
  {
    year: '1987',
    genres: ['Drama', 'War'],
    ratings: [
      9, 9, 7, 1, 4, 9, 3, 6, 3, 3, 7, 8, 5, 10, 7, 3, 2, 5, 6, 2, 8, 7, 7, 5, 10, 7, 10, 3, 3, 2
    ],
    poster:
      'MV5BNzc2ZThkOGItZGY5YS00MDYwLTkyOTAtNDRmZWIwMGRhYTc0L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,328,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT116M',
    releaseDate: '1987-10-02',
    averageRating: 0,
    storyline:
      'A two-segment look at the effect of the military mindset and war itself on Vietnam era Marines. The first half follows a group of recruits in boot camp under the command of the punishing Gunnery Sergeant Hartman. The second half shows one of those recruits, Joker, covering the war as a correspondent for Stars and Stripes, focusing on the Tet offensive.                Written by\nScott Renshaw <as.idc@forsythe.stanford.edu>',
    actors: ['Matthew Modine', 'R. Lee Ermey', "Vincent D'Onofrio"],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNzc2ZThkOGItZGY5YS00MDYwLTkyOTAtNDRmZWIwMGRhYTc0L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,328,500_AL_.jpg',
    id: 89,
    title: 'Full Metal Jacket'
  },
  {
    year: '2016',
    genres: ['Action', 'Biography', 'Drama'],
    ratings: [
      3, 9, 6, 8, 2, 4, 5, 1, 9, 6, 1, 3, 2, 1, 10, 4, 4, 2, 5, 9, 6, 5, 10, 8, 8, 1, 7, 10, 9, 1
    ],
    poster: 'MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SY500_CR0,0,356,500_AL_.jpg',
    contentRating: '',
    duration: 'PT161M',
    releaseDate: '2016-12-23',
    averageRating: 0,
    storyline:
      "Biopic of Mahavir Singh Phogat, who taught wrestling to his daughters Babita Kumari and Geeta Phogat. Geeta Phogat was India's first female wrestler to win at the 2010 Commonwealth Games, where she won the gold medal (55 kg) while her sister Babita Kumari won the silver (52 kg).                Written by\nDibyayan_Chakravorty",
    actors: ['Aamir Khan', 'Sakshi Tanwar', 'Fatima Sana Shaikh'],
    imdbRating: 8.9,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SY500_CR0,0,356,500_AL_.jpg',
    id: 90,
    title: 'Dangal'
  },
  {
    year: '1968',
    genres: ['Adventure', 'Sci-Fi'],
    ratings: [
      8, 5, 10, 2, 8, 1, 1, 1, 2, 3, 5, 2, 5, 2, 5, 7, 7, 1, 6, 4, 9, 4, 9, 1, 3, 4, 4, 5, 9, 9
    ],
    poster:
      'MV5BMTZkZTBhYmUtMTIzNy00YTViLTg1OWItNGUwMmVlN2FjZTVkXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '11',
    duration: 'PT149M',
    releaseDate: '1968-08-27',
    averageRating: 0,
    storyline:
      '"2001" is a story of evolution. Sometime in the distant past, someone or something nudged evolution by placing a monolith on Earth (presumably elsewhere throughout the universe as well). Evolution then enabled humankind to reach the moon\'s surface, where yet another monolith is found, one that signals the monolith placers that humankind has evolved that far. Now a race begins between computers (HAL) and human (Bowman) to reach the monolith placers. The winner will achieve the next step in evolution, whatever that may be.                Written by\nLarry Cousins',
    actors: ['Keir Dullea', 'Gary Lockwood', 'William Sylvester'],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTZkZTBhYmUtMTIzNy00YTViLTg1OWItNGUwMmVlN2FjZTVkXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,337,500_AL_.jpg',
    id: 92,
    title: '2001: A Space Odyssey'
  },
  {
    year: '2005',
    genres: ['Drama'],
    ratings: [
      8, 3, 4, 8, 4, 3, 2, 7, 1, 4, 1, 10, 2, 3, 8, 2, 2, 1, 8, 10, 3, 5, 9, 2, 5, 1, 1, 7, 7, 7
    ],
    poster:
      'MV5BNjAzMzEwYzctNjc1MC00Nzg5LWFmMGItMTgzYmMyNTY2OTQ4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_SX347_AL_.jpg',
    contentRating: '',
    duration: 'PT108M',
    releaseDate: '2005-11-18',
    averageRating: 0,
    storyline:
      "Sadik is one of the rebellious youth who has been politically active as a university student and became a left-wing journalist in the 70's, despite his father's expectations of him becoming an agricultural engineer and taking control of their family farm in an Aegean village. On the dawn of September 12, 1980, when a merciless military coup hits the country, they cannot find access to any hospital or a doctor and his wife dies while giving birth to their only child, Deniz. After a long-lasting period of torture, trials, and jail time, Sadik returns to his village with 7-8 years old Deniz, knowing that it will be hard to correct things with his father, Huseyin.                Written by\nAli Riza Bolukbasi",
    actors: ['Fikret Kuskan', 'Çetin Tekindor', 'Hümeyra'],
    imdbRating: 8.6,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNjAzMzEwYzctNjc1MC00Nzg5LWFmMGItMTgzYmMyNTY2OTQ4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_SX347_AL_.jpg',
    id: 93,
    title: 'Babam ve Oglum'
  },
  {
    year: '1952',
    genres: ['Comedy', 'Musical', 'Romance'],
    ratings: [
      7, 10, 2, 1, 6, 2, 3, 5, 9, 4, 10, 8, 10, 8, 4, 6, 1, 5, 4, 8, 5, 10, 8, 8, 8, 8, 4, 6, 4, 1
    ],
    poster:
      'MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY396_SX271_AL_.jpg',
    contentRating: 'Btl',
    duration: 'PT103M',
    releaseDate: '1952-09-29',
    averageRating: 0,
    storyline:
      "1927 Hollywood. Monumental Pictures' biggest stars, glamorous on-screen couple Lina Lamont and Don Lockwood, are also an off-screen couple if the trade papers and gossip columns are to be believed. Both perpetuate the public perception if only to please their adoring fans and bring people into the movie theaters. In reality, Don barely tolerates her, while Lina, despite thinking Don beneath her, simplemindedly believes what she sees on screen in order to bolster her own stardom and sense of self-importance. R.F. Simpson, Monumental's head, dismisses what he thinks is a flash in the pan: talking pictures. It isn't until Jazzsångaren (1927) becomes a bona fide hit which results in all the movie theaters installing sound equipment that R.F. knows Monumental, most specifically in the form of Don and Lina, have to jump on the talking picture bandwagon, despite no one at the studio knowing anything about the technology. Musician Cosmo Brown, Don's best friend, gets hired as ...                Written by\nHuggo",
    actors: ['Gene Kelly', "Donald O'Connor", 'Debbie Reynolds'],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY396_SX271_AL_.jpg',
    id: 94,
    title: "Singin' in the Rain"
  },
  {
    year: '1995',
    genres: ['Animation', 'Adventure', 'Comedy'],
    ratings: [
      10, 8, 5, 3, 4, 2, 8, 3, 3, 7, 3, 9, 5, 7, 5, 5, 8, 7, 1, 3, 4, 3, 4, 10, 9, 1, 4, 2, 1, 1
    ],
    poster:
      'MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SY500_SX335_AL_.jpg',
    contentRating: '7',
    duration: 'PT81M',
    releaseDate: '1996-03-08',
    averageRating: 0,
    storyline:
      "A little boy named Andy loves to be in his room, playing with his toys, especially his doll named \"Woody\". But, what do the toys do when Andy is not with them, they come to life. Woody believes that he has life (as a toy) good. However, he must worry about Andy's family moving, and what Woody does not know is about Andy's birthday party. Woody does not realize that Andy's mother gave him an action figure known as Buzz Lightyear, who does not believe that he is a toy, and quickly becomes Andy's new favorite toy. Woody, who is now consumed with jealousy, tries to get rid of Buzz. Then, both Woody and Buzz are now lost. They must find a way to get back to Andy before he moves without them, but they will have to pass through a ruthless toy killer, Sid Phillips.                Written by\nJohn Wiggins",
    actors: ['Tom Hanks', 'Tim Allen', 'Don Rickles'],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SY500_SX335_AL_.jpg',
    id: 95,
    title: 'Toy Story'
  },
  {
    year: '1921',
    genres: ['Comedy', 'Drama', 'Family'],
    ratings: [
      8, 4, 5, 2, 3, 8, 8, 3, 6, 9, 7, 4, 4, 1, 9, 7, 3, 10, 7, 10, 3, 2, 6, 3, 1, 8, 8, 6, 5, 2
    ],
    poster:
      'MV5BZjhhMThhNDItNTY2MC00MmU1LTliNDEtNDdhZjdlNTY5ZDQ1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY500_CR0,0,332,500_AL_.jpg',
    contentRating: '',
    duration: 'PT68M',
    releaseDate: '1922-03-20',
    averageRating: 0,
    storyline:
      'The opening title reads: "A comedy with a smile--and perhaps a tear". As she leaves the charity hospital and passes a church wedding, Edna deposits her new baby with a pleading note in a limousine and goes off to commit suicide. The limo is stolen by thieves who dump the baby by a garbage can. Charlie the Tramp finds the baby and makes a home for him. Five years later Edna has become an opera star but does charity work for slum youngsters in hope of finding her boy. A doctor called by Edna discovers the note with the truth about the Kid and reports it to the authorities who come to take him away from Charlie. Before he arrives at the Orphan Asylum Charlie steals him back and takes him to a flophouse. The proprietor reads of a reward for the Kid and takes him to Edna. Charlie is later awakened by a kind policeman who reunites him with the Kid at Edna\'s mansion.                Written by\nEd Stephan <stephan@cc.wwu.edu>',
    actors: ['Charles Chaplin', 'Edna Purviance', 'Jackie Coogan'],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BZjhhMThhNDItNTY2MC00MmU1LTliNDEtNDdhZjdlNTY5ZDQ1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY500_CR0,0,332,500_AL_.jpg',
    id: 97,
    title: 'The Kid'
  },
  {
    year: '2009',
    genres: ['Adventure', 'Drama', 'War'],
    ratings: [
      10, 6, 9, 9, 1, 10, 7, 1, 3, 8, 10, 2, 6, 3, 6, 10, 3, 7, 9, 8, 5, 6, 8, 5, 10, 1, 3, 6, 6, 10
    ],
    poster:
      'MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT153M',
    releaseDate: '2009-08-21',
    averageRating: 0,
    storyline:
      'In German-occupied France, young Jewish refugee Shosanna Dreyfus witnesses the slaughter of her family by Colonel Hans Landa. Narrowly escaping with her life, she plots her revenge several years later when German war hero Fredrick Zoller takes a rapid interest in her and arranges an illustrious movie premiere at the theater she now runs. With the promise of every major Nazi officer in attendance, the event catches the attention of the "Basterds", a group of Jewish-American guerrilla soldiers led by the ruthless Lt. Aldo Raine. As the relentless executioners advance and the conspiring young girl\'s plans are set in motion, their paths will cross for a fateful evening that will shake the very annals of history.                Written by\nThe Massie Twins',
    actors: ['Brad Pitt', 'Diane Kruger', 'Eli Roth'],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    id: 98,
    title: 'Inglourious Basterds'
  },
  {
    year: '2000',
    genres: ['Comedy', 'Crime'],
    ratings: [
      3, 2, 8, 3, 6, 9, 3, 9, 3, 1, 4, 1, 7, 7, 4, 2, 8, 9, 6, 6, 5, 2, 6, 1, 7, 7, 4, 10, 2, 4
    ],
    poster:
      'MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY500_SX342_AL_.jpg',
    contentRating: '15',
    duration: 'PT104M',
    releaseDate: '2000-12-22',
    averageRating: 0,
    storyline:
      "Turkish and his close friend/accomplice Tommy get pulled into the world of match fixing by the notorious Brick Top. Things get complicated when the boxer they had lined up gets badly beaten by Pitt, a 'pikey' ( slang for an Irish Gypsy)- who comes into the equation after Turkish, an unlicensed boxing promoter wants to buy a caravan off the Irish Gypsies. They then try to convince Pitt not only to fight for them, but to lose for them too. Whilst all this is going on, a huge diamond heist takes place, and a fistful of motley characters enter the story, including 'Cousin Avi', 'Boris The Blade', 'Franky Four Fingers' and 'Bullet Tooth Tony'. Things go from bad to worse as it all becomes about the money, the guns, and the damned dog!                Written by\nFilmtwob <webmaster@filmfreak.co.za>",
    actors: ['Jason Statham', 'Brad Pitt', 'Benicio Del Toro'],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY500_SX342_AL_.jpg',
    id: 99,
    title: 'Snatch'
  },
  {
    year: '1965',
    genres: ['Western'],
    ratings: [
      8, 9, 9, 5, 2, 4, 3, 6, 7, 1, 3, 9, 5, 2, 6, 5, 5, 8, 2, 2, 3, 7, 10, 6, 10, 5, 4, 8, 6, 10
    ],
    poster: 'MV5BMTQzMjIzOTEzMF5BMl5BanBnXkFtZTcwMTUzNTk3NA@@._V1_SY500_CR0,0,333,500_AL_.jpg',
    contentRating: '',
    duration: 'PT132M',
    releaseDate: '1966-11-17',
    averageRating: 0,
    storyline:
      'Monco is a bounty killer chasing El Indio and his gang. During his hunting, he meets Col. Douglas Mortimer, another bounty killer, and they decide to make a partnership, chase the bad guys together and split the reward. During their enterprise, there will be lots of bullets and funny situations. In the end, one of the bounty hunters shows the real intention of his hunting.                Written by\nClaudio Carvalho, Rio de Janeiro, Brazil',
    actors: ['Clint Eastwood', 'Lee Van Cleef', 'Gian Maria Volontè'],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQzMjIzOTEzMF5BMl5BanBnXkFtZTcwMTUzNTk3NA@@._V1_SY500_CR0,0,333,500_AL_.jpg',
    id: 103,
    title: 'Per qualche dollaro in più'
  },
  {
    year: '1983',
    genres: ['Crime', 'Drama'],
    ratings: [
      7, 5, 1, 10, 9, 1, 8, 10, 10, 3, 9, 3, 6, 9, 1, 4, 8, 5, 5, 4, 5, 7, 4, 8, 5, 6, 5, 6, 6, 3
    ],
    poster: 'MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT170M',
    releaseDate: '1984-03-23',
    averageRating: 0,
    storyline:
      "Tony Montana manages to leave Cuba during the Mariel exodus of 1980. He finds himself in a Florida refugee camp but his friend Manny has a way out for them: undertake a contract killing and arrangements will be made to get a green card. He's soon working for drug dealer Frank Lopez and shows his mettle when a deal with Colombian drug dealers goes bad. He also brings a new level of violence to Miami. Tony is protective of his younger sister but his mother knows what he does for a living and disowns him. Tony is impatient and wants it all however, including Frank's empire and his mistress Elvira Hancock. Once at the top however, Tony's outrageous actions make him a target and everything comes crumbling down.                Written by\ngarykmcd",
    actors: ['Al Pacino', 'Michelle Pfeiffer', 'Steven Bauer'],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SY500_CR0,0,337,500_AL_.jpg',
    id: 104,
    title: 'Scarface'
  },
  {
    year: '2012',
    genres: ['Drama'],
    ratings: [
      6, 2, 4, 1, 10, 5, 2, 9, 10, 4, 9, 8, 4, 4, 5, 7, 3, 7, 10, 6, 9, 7, 6, 1, 1, 8, 6, 3, 7, 7
    ],
    poster: 'MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_SY500_CR0,0,349,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT115M',
    releaseDate: '2013-04-12',
    averageRating: 0,
    storyline:
      "Lucas is a Kindergarten teacher who takes great care of his students. Unfortunately for him, young Klara has a run-away imagination and concocts a lie about her teacher. Before Lucas is even able to understand the consequences, he has become the outcast of the town. The hunt is on to prove his innocence before it's taken from him for good.                Written by\nnapierslogs",
    actors: ['Mads Mikkelsen', 'Thomas Bo Larsen', 'Annika Wedderkopp'],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_SY500_CR0,0,349,500_AL_.jpg',
    id: 105,
    title: 'Jagten'
  },
  {
    year: '1950',
    genres: ['Crime', 'Drama', 'Mystery'],
    ratings: [
      1, 4, 1, 1, 4, 10, 10, 8, 4, 8, 9, 8, 2, 6, 7, 2, 2, 3, 9, 5, 7, 5, 10, 8, 8, 5, 1, 9, 3, 3
    ],
    poster: 'MV5BMTk1MDU5MjQ5NF5BMl5BanBnXkFtZTgwMDM2OTE4MzE@._V1_SY500_CR0,0,351,500_AL_.jpg',
    contentRating: '',
    duration: 'PT88M',
    releaseDate: '1953-08-31',
    averageRating: 0,
    storyline:
      'A priest, a woodcutter and another man are taking refuge from a rainstorm in the shell of a former gatehouse called Rashômon. The priest and the woodcutter are recounting the story of a murdered samurai whose body the woodcutter discovered three days earlier in a forest grove. Both were summoned to testify at the murder trial, the priest who ran into the samurai and his wife traveling through the forest just before the murder occurred. Three other people who testified at the trial are supposedly the only direct witnesses: a notorious bandit named Tajômaru, who allegedly murdered the samurai and raped his wife; the white veil cloaked wife of the samurai; and the samurai himself who testifies through the use of a medium. The three tell a similarly structured story - that Tajômaru kidnapped and bound the samurai so that he could rape the wife - but which ultimately contradict each other, the motivations and the actual killing being what differ. The woodcutter reveals at Rashômon that he ...                Written by\nHuggo',
    actors: ['Toshirô Mifune', 'Machiko Kyô', 'Masayuki Mori'],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk1MDU5MjQ5NF5BMl5BanBnXkFtZTgwMDM2OTE4MzE@._V1_SY500_CR0,0,351,500_AL_.jpg',
    id: 106,
    title: 'Rashômon'
  },
  {
    year: '1997',
    genres: ['Drama'],
    ratings: [
      3, 5, 8, 9, 9, 9, 10, 4, 4, 3, 9, 3, 9, 8, 1, 9, 6, 4, 9, 10, 9, 7, 7, 6, 2, 10, 10, 1, 4, 4
    ],
    poster:
      'MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,327,500_AL_.jpg',
    contentRating: '11',
    duration: 'PT126M',
    releaseDate: '1998-03-13',
    averageRating: 0,
    storyline:
      'A touching tale of a wayward young man who struggles to find his identity, living in a world where he can solve any problem, except the one brewing deep within himself, until one day he meets his soul mate who opens his mind and his heart.                Written by\nDima & Danielle',
    actors: ['Robin Williams', 'Matt Damon', 'Ben Affleck'],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,327,500_AL_.jpg',
    id: 108,
    title: 'Good Will Hunting'
  },
  {
    year: '2011',
    genres: ['Drama', 'Mystery'],
    ratings: [
      10, 3, 5, 7, 8, 3, 5, 7, 5, 8, 6, 10, 2, 10, 4, 1, 5, 6, 4, 5, 2, 4, 1, 2, 9, 3, 3, 8, 4, 6
    ],
    poster: 'MV5BMTYzMzU4NDUwOF5BMl5BanBnXkFtZTcwMTM5MjA5Ng@@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT123M',
    releaseDate: '2011-09-30',
    averageRating: 0,
    storyline:
      'Nader (Peyman Moaadi) and Simin (Leila Hatami) argue about living abroad. Simin prefers to live abroad to provide better opportunities for their only daughter, Termeh. However, Nader refuses to go because he thinks he must stay in Iran and take care of his father (Ali-Asghar Shahbazi), who suffers from Alzheimers. However, Simin is determined to get a divorce and leave the country with her daughter.                Written by\nAmin Davoodi',
    actors: ['Peyman Moaadi', 'Leila Hatami', 'Sareh Bayat'],
    imdbRating: 8.4,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzMzU4NDUwOF5BMl5BanBnXkFtZTcwMTM5MjA5Ng@@._V1_SY500_CR0,0,337,500_AL_.jpg',
    id: 109,
    title: 'Jodaeiye Nader az Simin'
  },
  {
    year: '1989',
    genres: ['Action', 'Adventure', 'Fantasy'],
    ratings: [
      1, 1, 4, 9, 1, 6, 7, 9, 5, 4, 8, 4, 4, 6, 9, 7, 5, 8, 6, 3, 9, 3, 1, 4, 9, 3, 6, 6, 5, 1
    ],
    poster:
      'MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY500_CR0,0,339,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT127M',
    releaseDate: '1989-09-15',
    averageRating: 0,
    storyline:
      'An art collector appeals to Jones to embark on a search for the Holy Grail. He learns that another archaeologist has disappeared while searching for the precious goblet, and the missing man is his own father, Dr. Henry Jones. The artifact is much harder to find than they expected, and its powers are too much for those impure in heart.                Written by\nJwelch5742',
    actors: ['Harrison Ford', 'Sean Connery', 'Alison Doody'],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY500_CR0,0,339,500_AL_.jpg',
    id: 110,
    title: 'Indiana Jones and the Last Crusade'
  },
  {
    year: '1950',
    genres: ['Drama'],
    ratings: [
      9, 7, 2, 5, 8, 2, 8, 4, 2, 5, 4, 10, 6, 7, 2, 4, 3, 2, 5, 2, 4, 2, 8, 9, 10, 2, 4, 3, 5, 3
    ],
    poster: 'MV5BMTY2MTAzODI5NV5BMl5BanBnXkFtZTgwMjM4NzQ0MjE@._V1_SY500_CR0,0,333,500_AL_.jpg',
    contentRating: '',
    duration: 'PT138M',
    releaseDate: '1951-01-15',
    averageRating: 0,
    storyline:
      'Eve (Anne Baxter) is waiting backstage to meet her "idol" aging Broadway Star, Margo Channing (Bette Davis). It all seems innocent enough as Eve explains that she has seen Margo in EVERY performance of the current play she is in. Only Playright critic DeWitt (George Sanders) sees through Eve\'s evil plan, which is to take her parts and fiancé, Bill Simpson (Gary Merrill) When the fiancé shows no interest, she tries for playwright Hugh Marlowe (Lloyd Richards) but DeWitt stops her. After she accepts her award, she decides to skip the after-party and goes to her room, where we find a young woman named Phoebe, who snuck into her room and fell asleep. This is where the "Circle of Life" now comes to fruition as Eve is going to get played the way she did Margo.',
    actors: ['Bette Davis', 'Anne Baxter', 'George Sanders'],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2MTAzODI5NV5BMl5BanBnXkFtZTgwMjM4NzQ0MjE@._V1_SY500_CR0,0,333,500_AL_.jpg',
    id: 112,
    title: 'All About Eve'
  },
  {
    year: '1961',
    genres: ['Action', 'Drama', 'Thriller'],
    ratings: [
      10, 9, 8, 9, 9, 1, 1, 2, 6, 4, 8, 2, 2, 9, 7, 10, 2, 7, 3, 5, 9, 3, 8, 6, 6, 3, 2, 10, 1, 3
    ],
    poster:
      'MV5BZThiZjAzZjgtNDU3MC00YThhLThjYWUtZGRkYjc2ZWZlOTVjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY500_CR0,0,332,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT110M',
    releaseDate: '1964-10-28',
    averageRating: 0,
    storyline:
      "Sanjuro, a wandering samurai enters a rural town in nineteenth century Japan. After learning from the innkeeper that the town is divided between two gangsters, he plays one side off against the other. His efforts are complicated by the arrival of the wily Unosuke, the son of one of the gangsters, who owns a revolver. Unosuke has Sanjuro beaten after he reunites an abducted woman with her husband and son, then massacres his father's opponents. During the slaughter, the samurai escapes with the help of the innkeeper; but while recuperating at a nearby temple, he learns of innkeeper's abduction by Unosuke, and returns to the town to confront him.                Written by\nBernard Keane <BKeane2@email.dot.gov.au>",
    actors: ['Toshirô Mifune', 'Eijirô Tôno', 'Tatsuya Nakadai'],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BZThiZjAzZjgtNDU3MC00YThhLThjYWUtZGRkYjc2ZWZlOTVjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY500_CR0,0,332,500_AL_.jpg',
    id: 113,
    title: 'Yôjinbô'
  },
  {
    year: '1959',
    genres: ['Comedy', 'Romance'],
    ratings: [
      5, 5, 7, 5, 2, 7, 2, 8, 4, 6, 2, 1, 4, 5, 2, 8, 2, 1, 1, 8, 5, 8, 9, 8, 4, 4, 10, 7, 6, 2
    ],
    poster:
      'MV5BNzAyOGIxYjAtMGY2NC00ZTgyLWIwMWEtYzY0OWQ4NDFjOTc5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,322,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT120M',
    releaseDate: '1959-09-28',
    averageRating: 0,
    storyline:
      "When two Chicago musicians, Joe and Jerry, witness the the St. Valentine's Day massacre, they want to get out of town and get away from the gangster responsible, Spats Colombo. They're desperate to get a gig out of town but the only job they know of is in an all-girl band heading to Florida. They show up at the train station as Josephine and Daphne, the replacement saxophone and bass players. They certainly enjoy being around the girls, especially Sugar Kane Kowalczyk who sings and plays the ukulele. Joe in particular sets out to woo her while Jerry/Daphne is wooed by a millionaire, Osgood Fielding III. Mayhem ensues as the two men try to keep their true identities hidden and Spats Colombo and his crew show up for a meeting with several other crime lords.                Written by\ngarykmcd",
    actors: ['Marilyn Monroe', 'Tony Curtis', 'Jack Lemmon'],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNzAyOGIxYjAtMGY2NC00ZTgyLWIwMWEtYzY0OWQ4NDFjOTc5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,322,500_AL_.jpg',
    id: 116,
    title: 'Some Like It Hot'
  },
  {
    year: '1992',
    genres: ['Drama', 'Western'],
    ratings: [
      6, 7, 2, 9, 10, 4, 4, 10, 5, 9, 9, 2, 3, 3, 1, 8, 3, 10, 2, 5, 1, 7, 8, 7, 3, 10, 4, 10, 9, 3
    ],
    poster:
      'MV5BODM3YWY4NmQtN2Y3Ni00OTg0LWFhZGQtZWE3ZWY4MTJlOWU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,332,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT131M',
    releaseDate: '1992-09-11',
    averageRating: 0,
    storyline:
      "The town of Big Whisky is full of normal people trying to lead quiet lives. Cowboys try to make a living. Sheriff 'Little Bill' tries to build a house and keep a heavy-handed order. The town whores just try to get by.Then a couple of cowboys cut up a whore. Dissatisfied with Bill's justice, the prostitutes put a bounty on the cowboys. The bounty attracts a young gun billing himself as 'The Schofield Kid', and aging killer William Munny. Munny reformed for his young wife, and has been raising crops and two children in peace. But his wife is gone. Farm life is hard. And Munny is no good at it. So he calls his old partner Ned, saddles his ornery nag, and rides off to kill one more time, blurring the lines between heroism and villainy, man and myth.                Written by\nCharlie Ness",
    actors: ['Clint Eastwood', 'Gene Hackman', 'Morgan Freeman'],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BODM3YWY4NmQtN2Y3Ni00OTg0LWFhZGQtZWE3ZWY4MTJlOWU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,332,500_AL_.jpg',
    id: 118,
    title: 'Unforgiven'
  },
  {
    year: '2004',
    genres: ['Biography', 'Drama', 'History'],
    ratings: [
      2, 4, 5, 7, 10, 4, 2, 10, 8, 6, 2, 7, 3, 8, 5, 3, 6, 1, 2, 2, 4, 4, 9, 4, 1, 6, 2, 5, 2, 10
    ],
    poster: 'MV5BMTM1OTI1MjE2Nl5BMl5BanBnXkFtZTcwMTEwMzc4NA@@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT156M',
    releaseDate: '2005-02-25',
    averageRating: 0,
    storyline:
      'In April of 1945, Germany stands at the brink of defeat with the Soviet Armies closing in from the west and south. In Berlin, capital of the Third Reich, Adolf Hitler proclaims that Germany will still achieve victory and orders his Generals and advisers to fight to the last man. "Downfall" explores these final days of the Reich, where senior German leaders (such as Himmler and Goring) began defecting from their beloved Fuhrer, in an effort to save their own lives, while still others (Joseph Goebbels) pledge to die with Hitler. Hitler, himself, degenerates into a paranoid shell of a man, full of optimism one moment and suicidal depression the next. When the end finally does comes, and Hitler lies dead by his own hand, what is left of his military must find a way to end the killing that is the Battle of Berlin, and lay down their arms in surrender.                Written by\nAnthony Hughes {husnock31@hotmail.com}',
    actors: ['Bruno Ganz', 'Alexandra Maria Lara', 'Ulrich Matthes'],
    imdbRating: 8.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM1OTI1MjE2Nl5BMl5BanBnXkFtZTcwMTEwMzc4NA@@._V1_SY500_CR0,0,337,500_AL_.jpg',
    id: 119,
    title: 'Der Untergang'
  },
  {
    year: '1980',
    genres: ['Biography', 'Drama', 'Sport'],
    ratings: [
      3, 10, 8, 1, 5, 4, 9, 5, 9, 2, 8, 3, 2, 6, 3, 5, 10, 2, 1, 9, 3, 9, 4, 10, 3, 3, 10, 6, 9, 3
    ],
    poster: 'MV5BMjIxOTg3OTc5MF5BMl5BanBnXkFtZTcwNzkwNjMwNA@@._V1_SY500_CR0,0,333,500_AL_.jpg',
    contentRating: '15',
    duration: 'PT129M',
    releaseDate: '1981-03-20',
    averageRating: 0,
    storyline:
      "When Jake LaMotta steps into a boxing ring and obliterates his opponent, he's a prizefighter. But when he treats his family and friends the same way, he's a ticking time bomb, ready to go off at any moment. Though LaMotta wants his family's love, something always seems to come between them. Perhaps it's his violent bouts of paranoia and jealousy. This kind of rage helped make him a champ, but in real life, he winds up in the ring alone.                Written by\nalfiehitchie",
    actors: ['Robert De Niro', 'Cathy Moriarty', 'Joe Pesci'],
    imdbRating: 8.2,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxOTg3OTc5MF5BMl5BanBnXkFtZTcwNzkwNjMwNA@@._V1_SY500_CR0,0,333,500_AL_.jpg',
    id: 120,
    title: 'Raging Bull'
  }
]
