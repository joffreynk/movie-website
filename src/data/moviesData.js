const moviesData = [
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BMjQyYWQ4MTMtODVmYi00ODYzLWE1NTktM2U2OTgwMDFhMjA5XkEyXkFqcGdeQXVyOTE1MTM4MzI@._V1_UY268_CR87,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Comedy",
            "Drama",
            "Fantasy"
        ],
        "imdbid": "tt9904252",
        "title": "Nice & Naughty, A Christmas Story",
        "imdbrating": null,
        "released": 2022,
        "type": "movie",
        "synopsis": "A father's tradition of inviting less fortunate guest for Christmas takes a tragic turn when he is murdered. One year later, his daughter decides to honor his memory by carrying on the ..."
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BYmE1MjEyM2UtMWU5NS00NjRjLWFlY2ItMTU5Mjk4ODk0MzdjXkEyXkFqcGdeQXVyOTE3NzY4OTQ@._V1_UY268_CR33,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Action"
        ],
        "imdbid": "tt9893652",
        "title": "Divine Mercenary",
        "imdbrating": null,
        "released": 2022,
        "type": "movie",
        "synopsis": "Say not, I will do so to him as he hath done to me: I will render to the man according to his work."
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BZTBlOTczMzctY2QzYi00OGI0LTk3MTYtM2NjMzA1N2MwYjAyXkEyXkFqcGdeQXVyNjk1MTU4ODI@._V1_UX182_CR0,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Biography",
            "Comedy",
            "Drama"
        ],
        "imdbid": "tt9883664",
        "title": "Equally Friends",
        "imdbrating": null,
        "released": 2022,
        "type": "movie",
        "synopsis": "A outsider comes to town and meets Three people in town as she meets them she gets each of them to become her friend and accept her for who she is, A LGBT movie about People Accepting people for who they are."
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BMTBmNzU0NWMtN2EwMi00OTU0LTg5NWMtNjQzZTM4M2NmOWM5XkEyXkFqcGdeQXVyNDAzNjgzNw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Action"
        ],
        "imdbid": "tt9854058",
        "title": "Shadows",
        "imdbrating": 7.6,
        "released": 2022,
        "type": "movie",
        "synopsis": "A young low-level drug dealer is reunited with his estranged mom and uncle to protect him when a ruthless drug kingpin puts a hit on him."
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BYTQzMWEzNTItNGVkNS00MDJhLWFmNzAtMTE1NjYzOGMyMjJhXkEyXkFqcGdeQXVyMTY0MDQxMTM@._V1_UY268_CR14,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Drama",
            "Thriller"
        ],
        "imdbid": "tt9783698",
        "title": "The Uncanny",
        "imdbrating": null,
        "released": 2022,
        "type": "movie",
        "synopsis": "After a life altering trauma, Zouzou, a therapist, seeks a fresh start in a new home. As she attempts to focus on her own fledgling art career, she soon realizes you can't outrun memories. ..."
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BZTYxNTUyOGMtNjNmZS00ODI3LTk2MjAtMTg0MzBiMTVjOTQ2XkEyXkFqcGdeQXVyOTEzMDAyMTI@._V1_UY268_CR10,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Action"
        ],
        "imdbid": "tt9757156",
        "title": "Deshveeran",
        "imdbrating": null,
        "released": 2022,
        "type": "movie",
        "synopsis": ""
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BMTdjZjI2ZGItMTAyZC00N2Y1LThjNTEtN2EwZTRmMTYwYTRiXkEyXkFqcGdeQXVyMTI0NjE5NTg@._V1_UY268_CR132,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Drama",
            "History",
            "War"
        ],
        "imdbid": "tt9737876",
        "title": "Kampen om Narvik - Hitlers første nederlag",
        "imdbrating": null,
        "released": 2022,
        "type": "movie",
        "synopsis": "April 1940. The eyes of the world are on Narvik, a small town in northern Norway, source of the iron ore needed for Hiter's war machinery. Through two months of fierce winter warfare, Hitler is dealt his first defeat."
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BNjIwYmU5Y2ItNzJkMy00M2JiLWE5MTgtZDIwMjAyODkyM2Y0XkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_UY268_CR9,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Action",
            "Drama",
            "History"
        ],
        "imdbid": "tt9637132",
        "title": "Prithviraj",
        "imdbrating": null,
        "released": 2022,
        "type": "movie",
        "synopsis": "Akshay Kumar in and as the fearless king Prithviraj Chauhan."
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BY2Q5NDM1M2MtYWZmMC00YjdhLTllY2MtMmU4NzE3NjRkZDBlXkEyXkFqcGdeQXVyMjA5MzI5OTk@._V1_UY268_CR4,0,182,268_AL_.jpg"
        ],
        "genre": [],
        "imdbid": "tt9629114",
        "title": "Music Hole",
        "imdbrating": 7.4,
        "released": 2022,
        "type": "movie",
        "synopsis": ""
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BYjFhZDM1OTItMWYxZC00MmE4LTgwOTktMGI0NDQ0NmE2ZDBiXkEyXkFqcGdeQXVyNDg1NjAzMzE@._V1_UY268_CR6,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Thriller"
        ],
        "imdbid": "tt9580502",
        "title": "20 Minutes",
        "imdbrating": 8.2,
        "released": 2022,
        "type": "movie",
        "synopsis": "An incoming ballistic missile to Hawaii changes twelve people's lives when they discover they have 20 minutes to live."
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BZWVjMmFkZDAtMTI3OC00OWMwLWE3NDYtMjVlMTIyYmI4OWI2XkEyXkFqcGdeQXVyNTgwNDM3Ng@@._V1_UY268_CR4,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Horror"
        ],
        "imdbid": "tt9570072",
        "title": "Scare B&B",
        "imdbrating": null,
        "released": 2022,
        "type": "movie",
        "synopsis": "'The Visit' is a feature length anthology horror film from Talkinglens Productions. Each story revolves around different characters and situations, yet they all have one thing in common; they're set in the same house."
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BNGUwODkyNWItNDE4YS00MjAwLTgyNTYtNTFmYTNiOTQ4NGZlXkEyXkFqcGdeQXVyNjA1NjU0OTk@._V1_UX182_CR0,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Horror"
        ],
        "imdbid": "tt9557068",
        "title": "Grotesque",
        "imdbrating": null,
        "released": 2022,
        "type": "movie",
        "synopsis": "A woman disfigured during a plastic surgery operation takes out her anger on all those who have wronged her, by slaughtering them."
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BNDdjMzAxYjMtOTQ4My00MGI3LWI0ZmQtZWI5OTA2YjI4MDM3XkEyXkFqcGdeQXVyODcyMDM3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Drama"
        ],
        "imdbid": "tt9533434",
        "title": "Tango Bar",
        "imdbrating": null,
        "released": 2022,
        "type": "movie",
        "synopsis": "A young woman travels abroad trying to realize her dream of being a model, but there she is deceived and subjected to prostitution at the Cabaret Tango Bar, where she experiences the horrors as a victim of a sex trafficking network."
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BOGE1ZDY2YmUtN2Q3MC00MTc5LTg5YmItNDI5OTE0MGRlOTVhXkEyXkFqcGdeQXVyOTY4MzU0MjE@._V1_UY268_CR3,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Drama",
            "Thriller"
        ],
        "imdbid": "tt9493034",
        "title": "Till The Final Caprice",
        "imdbrating": null,
        "released": 2022,
        "type": "movie",
        "synopsis": "\"Striving for perfection gives one's meaning. Once you reach perfection you loose interest in life.\" A virtuous violin player withdraws from the big stage with the only aim to play the \"..."
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BMWZkMzM1YTctMDlkMS00NDIzLWE3N2QtODdhNTFiNThlY2JiXkEyXkFqcGdeQXVyODk5NDMxOTI@._V1_UY268_CR9,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Sci-Fi"
        ],
        "imdbid": "tt9490498",
        "title": "Adam the First",
        "imdbrating": null,
        "released": 2022,
        "type": "movie",
        "synopsis": "Adam arrives on Tiamat, a world supposedly with no life forms, with a mission to activate an ancient outpost in a bid to start a process that will one day save his people. All is not as it seems."
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BNjEzZjM5NWMtZmU5Zi00ZDk5LWI5ZDMtYzFlMGIxYjM3NDlmXkEyXkFqcGdeQXVyMTEzNDUwNzg@._V1_UX182_CR0,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Action",
            "Comedy",
            "Crime"
        ],
        "imdbid": "tt9481630",
        "title": "Lolipop Gang",
        "imdbrating": null,
        "released": 2022,
        "type": "movie",
        "synopsis": "A romantic comedy about a no name wanna be gangster by the name of Nick Sargenti and his goofy group of untalented misfits. The story focuses around Nick and Kim and their constant on again off again relationship."
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BODg4ZGI5ZmItMGZmZi00ZDA1LTkwNjYtNjAxYzQ1ZDdlNTM3XkEyXkFqcGdeQXVyNDY2NTAzMzI@._V1_UY268_CR0,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Thriller"
        ],
        "imdbid": "tt9458220",
        "title": "Fyröarna",
        "imdbrating": null,
        "released": 2022,
        "type": "movie",
        "synopsis": "David, an aspiring meteorologist, follows his late father's footsteps in the Swedish military. One day he stumbles on what's left of his father's work, which leads him to a desert island in..."
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BOTQxNmIyMDItYTU2NC00NGQ1LTlmZjItODdjMTdmYmQ5MWUwXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_UY268_CR9,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Crime",
            "Drama"
        ],
        "imdbid": "tt9451352",
        "title": "Dijital Esaret",
        "imdbrating": null,
        "released": 2022,
        "type": "movie",
        "synopsis": ""
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BOWNjYzgwYjYtZWIwOS00Nzc4LThiNjAtZDg3NDdiMzA5YzBhXkEyXkFqcGdeQXVyNTgzMTk5OA@@._V1_UY268_CR14,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Adventure",
            "Sci-Fi"
        ],
        "imdbid": "tt9352178",
        "title": "The Primevals",
        "imdbrating": null,
        "released": 2022,
        "type": "movie",
        "synopsis": ""
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BNTVjZGQwMTEtNDg5Zi00ZWRhLWJhY2EtZjhjMTEyODM4YjIxXkEyXkFqcGdeQXVyOTU5MDg2OQ@@._V1_UY268_CR3,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Comedy"
        ],
        "imdbid": "tt9348460",
        "title": "Uomini e altri inconvenienti",
        "imdbrating": null,
        "released": 2022,
        "type": "movie",
        "synopsis": ""
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BMTcwYWFlNjItMmFiYi00NTIyLWJhNjQtNjIwNGI4YzllMDg4XkEyXkFqcGdeQXVyNjE5Mzc3NTE@._V1_UX182_CR0,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Comedy",
            "Romance"
        ],
        "imdbid": "tt9342356",
        "title": "Back to Lyla",
        "imdbrating": 7,
        "released": 2022,
        "type": "movie",
        "synopsis": "After discovering he might die soon, a timid young man along with his estranged and outrageous childhood friends, embark on a quest for closure on why the love of his life left."
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BOWZkMDRkNDItODI2NC00NmMyLWE1NTctMmUxOWU1M2U2MGRjXkEyXkFqcGdeQXVyMjQ3Mzc3ODQ@._V1_UX182_CR0,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Adventure",
            "Drama",
            "History"
        ],
        "imdbid": "tt9314340",
        "title": "Heroes",
        "imdbrating": 7,
        "released": 2022,
        "type": "movie",
        "synopsis": "A story set in the Middle Ages about a warrior knight who survived the historic Battle of Kosovo in 1389. Along the way, he meets a wild boy, all alone. And they continue this journey ..."
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BMGUxODE1MTUtNjBlNC00NTRmLThhZmYtOGM4MzM0NTY2NmQyXkEyXkFqcGdeQXVyMjIwNTk0OTU@._V1_UY268_CR43,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Thriller"
        ],
        "imdbid": "tt9309812",
        "title": "Home by Sunday",
        "imdbrating": null,
        "released": 2022,
        "type": "movie",
        "synopsis": "Home Before Sunday is a feature length thriller that takes several college students into the woods for a fun camping and hiking trip near a beautiful waterfall way up in the north Georgia ..."
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BN2NiYmEyNTQtOTE2Yi00Yjg3LThmMmMtZDE4ZjllZGFjYjg5XkEyXkFqcGdeQXVyOTQxNjY4OTc@._V1_UY268_CR3,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Horror",
            "Mystery",
            "Thriller"
        ],
        "imdbid": "tt9299826",
        "title": "Iblis",
        "imdbrating": null,
        "released": 2022,
        "type": "movie",
        "synopsis": "This Movie Inspired By The Conjuring Universe. And It's A Bangali Horror Movie. And It's Story Of 19s From 20th Century Story. And It's A Bangladeshi Digital Cinema By Red Green Studio Inc."
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BMWI4M2M4YTctOTgwOC00NTY4LWFjMDMtY2IxMDhjYTFmN2NmXkEyXkFqcGdeQXVyMjcxNDIzMzU@._V1_UY268_CR43,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Crime",
            "Drama",
            "Romance"
        ],
        "imdbid": "tt9294426",
        "title": "Blind Confession",
        "imdbrating": null,
        "released": 2022,
        "type": "movie",
        "synopsis": "C-Moe is Dallas's biggest drug dealer who is on top of the world. A tragic accident happens and he has no choice but to learn how to live with the help of a home town nurse."
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BNDNlYTczNWYtZTBjNS00ODIzLWI5OGQtMWFmZGIwZWM4MGM0XkEyXkFqcGdeQXVyNzA5NjY5MzA@._V1_UY268_CR1,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Biography",
            "Drama"
        ],
        "imdbid": "tt9263550",
        "title": "Rocketry: The Nambi Effect",
        "imdbrating": 9.8,
        "released": 2022,
        "type": "movie",
        "synopsis": "Based by the life of ISRO Scientist Nambi Narayanan who was falsely accused of being a spy and arrested in 1994. Though free, he is still fighting for justice, with those police officials alleged to have falsely implicated him, still free."
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BYTk4NDAyNTgtNTRlZi00YTc0LWJjMDctOTczY2I1YWVjYmQ2XkEyXkFqcGdeQXVyMjEyMzA2Mzk@._V1_UX182_CR0,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Documentary"
        ],
        "imdbid": "tt9253492",
        "title": "Beyond the Unlimited: Documentary of Stunt Unlimited from Hong Kong",
        "imdbrating": null,
        "released": 2022,
        "type": "movie",
        "synopsis": ""
    },
    {
        "imageurl": [
            "https://m.media-amazon.com/images/M/MV5BMGNkYjU4MzQtOTFlMS00YWE3LTllMWMtZjllZmYxY2NkODQ4XkEyXkFqcGdeQXVyMjMxNjQ4MDI@._V1_UY268_CR1,0,182,268_AL_.jpg"
        ],
        "genre": [
            "Drama"
        ],
        "imdbid": "tt9178432",
        "title": "One More Day",
        "imdbrating": null,
        "released": 2022,
        "type": "movie",
        "synopsis": "A journey on a ferry forces a mother to open up to her daughter about a traumatic early life experience at sea, but it becomes clear it is the daughter who needs to confront the past."
    }
];

export default moviesData; 