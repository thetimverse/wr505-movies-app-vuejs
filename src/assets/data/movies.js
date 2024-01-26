const movies = [
    {
      id: '1',
      title: 'Titanic',
      release_date: '19 Dec 1997',
      box_office: '1990000000',
      description: '84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.',
      duration: '153',
      note: '75',
      budget: '150000000',
      director: 'James Cameron',
      actors: 'Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates',
      website: 'https://www.themoviedb.org/movie/597-titanic',
      media_object: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
      actors: 'Daisy',
      categories: 'Comedy',
    },
    {
      id: '2',
      title: 'Blade Runner',
      release_date: '25 Jun 1982',
      box_office: '765000000',
      description: 'A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.',
      duration: '120',
      note: '89',
      budget: '10000000',
      director: 'Ridley Scott',
      actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
      website: 'https://www.themoviedb.org/movie/597-titanic',
      media_object: 'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
      actors: 'John',
      categories: 'Drama',
    },
    {
      id: '3',
      title: 'The Shining',
      release_date: '13 Jun 1980',
      box_office: '89000000',
      description: 'A family heads to an isolated hotel for the winter where an evil spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.',
      duration: '114',
      note: '63',
      budget: '5000000',
      director: 'Stanley Kubrick',
      actors: 'Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers',
      website: 'https://www.themoviedb.org/movie/597-titanic',
      media_object: 'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      actors: 'Dan',
      categories: 'Horror',
    },
    {
      id: 4,
      title: 'The Silence of the Lambs',
      released: '14 Feb 1991',
      director: 'Jonathan Demme',
      poster: 'https://www.themoviedb.org/t/p/original/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg',
      plot: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
      metascore: '85'
    },
    {
      id: 5,
      title: 'The Godfather',
      released: '24 Mar 1972',
      director: 'Francis Ford Coppola',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      metascore: '100'
    },
    {
      id: 6,
      title: 'The Dark Knight',
      released: '18 Jul 2008',
      director: 'Christopher Nolan',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      metascore: '84'
    },
    {
      id: 7,
      title: 'Pulp Fiction',
      released: '14 Oct 1994',
      director: 'Quentin Tarantino',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      metascore: '94'
    },
    {
      id: 8,
      title: 'Inception',
      released: '16 Jul 2010',
      director: 'Christopher Nolan',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      metascore: '88'
    },
    {
      id: 9,
      title: 'The Matrix',
      released: '31 Mar 1999',
      director: 'Lana Wachowski, Lilly Wachowski',
      poster: 'https://www.themoviedb.org/t/p/original/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg',
      plot: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      metascore: '87'
    },
    {
      id: 10,
      title: 'Forrest Gump',
      released: '6 Jul 1994',
      director: 'Robert Zemeckis',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.',
      metascore: '82'
    },
    {
      id: 11,
      title: 'Jurassic Park',
      released: '11 Jun 1993',
      director: 'Steven Spielberg',
      poster: 'https://www.themoviedb.org/t/p/original/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg',
      plot: 'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.',
      metascore: '68'
    },
    {
      id: 12,
      title: 'Avatar',
      released: '18 Dec 2009',
      director: 'James Cameron',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
      metascore: '83'
    },
    {
      id: 13,
      title: 'Fight Club',
      released: '15 Oct 1999',
      director: 'David Fincher',
      poster: 'https://www.themoviedb.org/t/p/original/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg',
      plot: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      metascore: '66'
    },
    {
      id: 14,
      title: 'The Great Gatsby',
      released: '10 May 2013',
      director: 'Baz Luhrmann',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'A writer and wall street trader, Nick, finds himself drawn to the past and lifestyle of his millionaire neighbor, Jay Gatsby.',
      metascore: '55'
    },
    {
      id: 15,
      title: 'The Lion King',
      released: '24 Jun 1994',
      director: 'Roger Allers, Rob Minkoff',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'Lion cub and future king Simba searches for his identity. His eagerness to please others and penchant for testing his boundaries sometimes gets him into trouble.',
      metascore: '88'
    },
    {
      id: 16,
      title: 'The Social Network',
      released: '1 Oct 2010',
      director: 'David Fincher',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea.',
      metascore: '95'
    },
    {
      id: 17,
      title: 'Eternal Sunshine of the Spotless Mind',
      released: '19 Mar 2004',
      director: 'Michel Gondry',
      poster: 'https://www.themoviedb.org/t/p/original/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg',
      plot: 'When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.',
      metascore: '89'
    },
    {
      id: 18,
      title: 'The Departed',
      released: '6 Oct 2006',
      director: 'Martin Scorsese',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in Boston.',
      metascore: '86'
    },
    {
      id: 19,
      title: 'The Avengers',
      released: '4 May 2012',
      director: 'Joss Whedon',
      poster: 'https://www.themoviedb.org/t/p/original/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg',
      plot: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.',
      metascore: '76'
    },
    {
      id: 20,
      title: 'Forrest Gump',
      released: '6 Jul 1994',
      director: 'Robert Zemeckis',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.',
      metascore: '82'
    },
    {
      id: 21,
      title: 'The Grand Budapest Hotel',
      released: '28 Mar 2014',
      director: 'Wes Anderson',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'A hotel concierge and his protegé become involved in the theft and recovery of a priceless Renaissance painting.',
      metascore: '88'
    },
    {
      id: 22,
      title: 'The Martian',
      released: '2 Oct 2015',
      director: 'Ridley Scott',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'An astronaut becomes stranded on Mars after his team assumes him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.',
      metascore: '80'
    },
    {
      id: 23,
      title: 'The Revenant',
      released: '8 Jan 2016',
      director: 'Alejandro G. Iñárritu',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
      metascore: '76'
    },
    {
      id: 24,
      title: 'La La Land',
      released: '9 Dec 2016',
      director: 'Damien Chazelle',
      poster: 'https://www.themoviedb.org/t/p/original/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg',
      plot: 'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.',
      metascore: '93'
    },
    {
      id: 25,
      title: 'Interstellar',
      released: '7 Nov 2014',
      director: 'Christopher Nolan',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      metascore: '74'
    },
    {
      id: 26,
      title: 'The Shawshank Redemption',
      released: '23 Sep 1994',
      director: 'Frank Darabont',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      metascore: '80'
    },
    {
      id: 27,
      title: 'Gladiator',
      released: '5 May 2000',
      director: 'Ridley Scott',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'A former Roman General seeks justice after he is betrayed and his family murdered by the corrupt prince who murdered his father and seized the throne.',
      metascore: '67'
    },
    {
      id: 28,
      title: 'The Wolf of Wall Street',
      released: '25 Dec 2013',
      director: 'Martin Scorsese',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption, and the federal government.',
      metascore: '75'
    },{
      id: 29,
      title: 'Gravity',
      released: '4 Oct 2013',
      director: 'Alfonso Cuarón',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'Two astronauts work together to survive after an accident leaves them stranded in space.',
      metascore: '96'
    },
    {
      id: 30,
      title: 'The Prestige',
      released: '20 Oct 2006',
      director: 'Christopher Nolan',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'Two stage magicians engage in a competitive rivalry, leading them on a path of obsession and deception.',
      metascore: '66'
    },
    {
      id: 31,
      title: 'Casablanca',
      released: '23 Jan 1943',
      director: 'Michael Curtiz',
      poster: 'https://www.themoviedb.org/t/p/original/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg',
      plot: 'A cynical American expatriate encounters a former lover, with unforeseen complications.',
      metascore: '100'
    },
    {
      id: 32,
      title: 'The Sixth Sense',
      released: '6 Aug 1999',
      director: 'M. Night Shyamalan',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'A boy who communicates with spirits that don\'t know they\'re dead seeks the help of a disheartened child psychologist.',
      metascore: '64'
    },
    {
      id: 33,
      title: 'The Breakfast Club',
      released: '15 Feb 1985',
      director: 'John Hughes',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'Five high school students with nothing in common spend a Saturday in detention and come to realize they are not as different as they think.',
      metascore: '62'
    },
    {
      id: 34,
      title: 'Goodfellas',
      released: '21 Sep 1990',
      director: 'Martin Scorsese',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'A young man grows up in the mob and works very hard to advance himself through the ranks.',
      metascore: '89'
    },
    {
      id: 35,
      title: 'Schindler\'s List',
      released: '4 Feb 1994',
      director: 'Steven Spielberg',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
      metascore: '94'
    },
    {
      id: 36,
      title: 'The Green Mile',
      released: '10 Dec 1999',
      director: 'Frank Darabont',
      poster: 'https://www.themoviedb.org/t/p/original/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg',
      plot: 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.',
      metascore: '61'
    },
    {
      id: 37,
      title: 'Amélie',
      released: '25 Apr 2001',
      director: 'Jean-Pierre Jeunet',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'Amélie is an innocent and naive girl in Paris with her own sense of justice.',
      metascore: '69'
    },
    {
      id: 38,
      title: 'The Dark Knight Rises',
      released: '20 Jul 2012',
      director: 'Christopher Nolan',
      poster: 'https://www.themoviedb.org/t/p/original/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg',
      plot: 'Eight years after the Joker\'s reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.',
      metascore: '78'
    },
    {
      id: 39,
      title: 'Back to the Future',
      released: '3 Jul 1985',
      director: 'Robert Zemeckis',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, eccentric scientist Doc Brown.',
      metascore: '87'
    },
    {
      id: 40,
      title: 'The Usual Suspects',
      released: '15 Sep 1995',
      director: 'Bryan Singer',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.',
      metascore: '77'
    },
    {
      id: 41,
      title: 'The Princess Bride',
      released: '9 Oct 1987',
      director: 'Rob Reiner',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'While home sick in bed, a young boy\'s grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies, and allies in his quest to be reunited with his true love.',
      metascore: '77'
    },
    {
      id: 42,
      title: 'Die Hard',
      released: '15 Jul 1988',
      director: 'John McTiernan',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.',
      metascore: '72'
    },
    {
      id: 43,
      title: 'The Matrix Reloaded',
      released: '15 May 2003',
      director: 'Lana Wachowski, Lilly Wachowski',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'Neo and his allies race against time before the machines discover the city of Zion and destroy it. While seeking the truth about the Matrix, Neo must save Trinity from a dark fate within his dreams.',
      metascore: '62'
    },
    {
      id: 44,
      title: 'Django Unchained',
      released: '25 Dec 2012',
      director: 'Quentin Tarantino',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.',
      metascore: '81'
    },
    {
      id: 45,
      title: 'The Social Network',
      released: '1 Oct 2010',
      director: 'David Fincher',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea.',
      metascore: '95'
    },
    {
      id: 46,
      title: 'The Big Lebowski',
      released: '6 Mar 1998',
      director: 'Joel Coen, Ethan Coen',
      poster: 'https://www.themoviedb.org/t/p/original/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg',
      plot: 'Jeff "The Dude" Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.',
      metascore: '71'
    },
    {
      id: 47,
      title: 'A Clockwork Orange',
      released: '2 Feb 1972',
      director: 'Stanley Kubrick',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn\'t go as planned.',
      metascore: '80'
    },
    {
      id: 48,
      title: 'The Exorcist',
      released: '26 Dec 1973',
      director: 'William Friedkin',
      poster: 'https://www.themoviedb.org/t/p/original/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg',
      plot: 'When a teenage girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her daughter.',
      metascore: '81'
    },
    {
      id: 49,
      title: 'Reservoir Dogs',
      released: '2 Sep 1992',
      director: 'Quentin Tarantino',
      poster: 'https://www.themoviedb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      plot: 'After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.',
      metascore: '79'
    },
    {
      id: 50,
      title: 'Casino Royale',
      released: '17 Nov 2006',
      director: 'Martin Campbell',
      poster: 'https://www.themoviedb.org/t/p/original/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg',
      plot: 'Armed with a license to kill, Secret Agent James Bond sets out on his first mission as 007, and must defeat a private banker to terrorists in a high-stakes game of poker at Casino Royale.',
      metascore: '80'
    }
]
  
export default movies
  