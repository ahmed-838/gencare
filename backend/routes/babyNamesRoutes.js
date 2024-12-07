const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const babyNames = [
        {letter: 'a', image: "/baby-names-components/gif/baby- (1)"},
        {letter: 'b', image: "/baby-names-components/gif/baby- (2)"},
        {letter: 'c', image: "/baby-names-components/gif/baby- (3)"},
        {letter: 'd', image: "/baby-names-components/gif/baby- (4)"},
        {letter: 'e', image: "/baby-names-components/gif/baby- (5)"},
        {letter: 'f', image: "/baby-names-components/gif/baby- (6)"},
        {letter: 'g', image: "/baby-names-components/gif/baby- (7)"},
        {letter: 'h', image: "/baby-names-components/gif/baby- (8)"},
        {letter: 'i', image: "/baby-names-components/gif/baby- (9)"},
        {letter: 'j', image: "/baby-names-components/gif/baby- (10)"},
        {letter: 'k', image: "/baby-names-components/gif/baby- (11)"},
        {letter: 'l', image: "/baby-names-components/gif/baby- (12)"},
        {letter: 'm', image: "/baby-names-components/gif/baby- (13)"},
        {letter: 'n', image: "/baby-names-components/gif/baby- (14)"},
        {letter: 'o', image: "/baby-names-components/gif/baby- (15)"},
        {letter: 'p', image: "/baby-names-components/gif/baby- (16)"},
        {letter: 'q', image: "/baby-names-components/gif/baby- (17)"},
        {letter: 'r', image: "/baby-names-components/gif/baby- (18)"},
        {letter: 's', image: "/baby-names-components/gif/baby- (19)"},
        {letter: 't', image: "/baby-names-components/gif/baby- (20)"},
        {letter: 'u', image: "/baby-names-components/gif/baby- (21)"},
        {letter: 'v', image: "/baby-names-components/gif/baby- (22)"},
        {letter: 'w', image: "/baby-names-components/gif/baby- (23)"},
        {letter: 'x', image: "/baby-names-components/gif/baby- (24)"},
        {letter: 'y', image: "/baby-names-components/gif/baby- (25)"},
        {letter: 'z', image: "/baby-names-components/gif/baby- (26)"}
    ];

    res.render('pages/baby-names/baby-names', { babyNames });
});

router.get('/:letter', (req, res) => {
    const letter = req.params.letter.toLowerCase();
    
    const babyNames = [
        {letter: 'a', image: "/baby-names-components/gif/baby- (1)"},
        {letter: 'b', image: "/baby-names-components/gif/baby- (2)"},
        {letter: 'c', image: "/baby-names-components/gif/baby- (3)"},
        {letter: 'd', image: "/baby-names-components/gif/baby- (4)"},
        {letter: 'e', image: "/baby-names-components/gif/baby- (5)"},
        {letter: 'f', image: "/baby-names-components/gif/baby- (6)"},
        {letter: 'g', image: "/baby-names-components/gif/baby- (7)"},
        {letter: 'h', image: "/baby-names-components/gif/baby- (8)"},
        {letter: 'i', image: "/baby-names-components/gif/baby- (9)"},
        {letter: 'j', image: "/baby-names-components/gif/baby- (10)"},
        {letter: 'k', image: "/baby-names-components/gif/baby- (11)"},
        {letter: 'l', image: "/baby-names-components/gif/baby- (12)"},
        {letter: 'm', image: "/baby-names-components/gif/baby- (13)"},
        {letter: 'n', image: "/baby-names-components/gif/baby- (14)"},
        {letter: 'o', image: "/baby-names-components/gif/baby- (15)"},
        {letter: 'p', image: "/baby-names-components/gif/baby- (16)"},
        {letter: 'q', image: "/baby-names-components/gif/baby- (17)"},
        {letter: 'r', image: "/baby-names-components/gif/baby- (18)"},
        {letter: 's', image: "/baby-names-components/gif/baby- (19)"},
        {letter: 't', image: "/baby-names-components/gif/baby- (20)"},
        {letter: 'u', image: "/baby-names-components/gif/baby- (21)"},
        {letter: 'v', image: "/baby-names-components/gif/baby- (22)"},
        {letter: 'w', image: "/baby-names-components/gif/baby- (23)"},
        {letter: 'x', image: "/baby-names-components/gif/baby- (24)"},
        {letter: 'y', image: "/baby-names-components/gif/baby- (25)"},
        {letter: 'z', image: "/baby-names-components/gif/baby- (26)"}
    ];
    
    const allNames = {
        a: [
            { name: 'Adam', meaning: 'From the earth', origin: 'Hebrew', gender: 'boy' },
            { name: 'Alexander', meaning: 'Defender of people', origin: 'Greek', gender: 'boy' },
            { name: 'Adrian', meaning: 'From Hadria', origin: 'Latin', gender: 'boy' },
            { name: 'Aaron', meaning: 'High mountain', origin: 'Hebrew', gender: 'boy' },
            { name: 'Austin', meaning: 'Great, magnificent', origin: 'Latin', gender: 'boy' },
            { name: 'Amelia', meaning: 'Work', origin: 'German', gender: 'girl' },
            { name: 'Aria', meaning: 'Air; melody', origin: 'Italian', gender: 'girl' },
            { name: 'Aurora', meaning: 'Dawn', origin: 'Latin', gender: 'girl' },
            { name: 'Alice', meaning: 'Noble', origin: 'German', gender: 'girl' },
            { name: 'Abigail', meaning: 'Father\'s joy', origin: 'Hebrew', gender: 'girl' }
        ],
        b: [
            { name: 'Benjamin', meaning: 'Son of the right hand', origin: 'Hebrew', gender: 'boy' },
            { name: 'Blake', meaning: 'Fair-haired', origin: 'Old English', gender: 'boy' },
            { name: 'Brandon', meaning: 'Beacon hill', origin: 'English', gender: 'boy' },
            { name: 'Bentley', meaning: 'Meadow with coarse grass', origin: 'English', gender: 'boy' },
            { name: 'Brody', meaning: 'Ditch', origin: 'Scottish', gender: 'boy' },
            { name: 'Bella', meaning: 'Beautiful', origin: 'Italian', gender: 'girl' },
            { name: 'Brooklyn', meaning: 'Broken land', origin: 'Dutch', gender: 'girl' },
            { name: 'Brianna', meaning: 'High, noble', origin: 'Irish', gender: 'girl' },
            { name: 'Bailey', meaning: 'Bailiff', origin: 'English', gender: 'girl' },
            { name: 'Bethany', meaning: 'House of figs', origin: 'Hebrew', gender: 'girl' }
        ],
        c: [
            { name: 'Charlie', meaning: 'Free man', origin: 'German', gender: 'boy' },
            { name: 'Christopher', meaning: 'Christ-bearer', origin: 'Greek', gender: 'boy' },
            { name: 'Caleb', meaning: 'Faithful, devoted', origin: 'Hebrew', gender: 'boy' },
            { name: 'Cameron', meaning: 'Crooked nose', origin: 'Scottish', gender: 'boy' },
            { name: 'Cole', meaning: 'Victory of the people', origin: 'English', gender: 'boy' },
            { name: 'Charlotte', meaning: 'Free woman', origin: 'French', gender: 'girl' },
            { name: 'Chloe', meaning: 'Blooming', origin: 'Greek', gender: 'girl' },
            { name: 'Clara', meaning: 'Bright, clear', origin: 'Latin', gender: 'girl' },
            { name: 'Caroline', meaning: 'Free man', origin: 'French', gender: 'girl' },
            { name: 'Catherine', meaning: 'Pure', origin: 'Greek', gender: 'girl' }
        ],
        d: [
            { name: 'Daniel', meaning: 'God is my judge', origin: 'Hebrew', gender: 'boy' },
            { name: 'David', meaning: 'Beloved', origin: 'Hebrew', gender: 'boy' },
            { name: 'Dylan', meaning: 'Son of the sea', origin: 'Welsh', gender: 'boy' },
            { name: 'Dominic', meaning: 'Belonging to the Lord', origin: 'Latin', gender: 'boy' },
            { name: 'Dean', meaning: 'Valley', origin: 'English', gender: 'boy' },
            { name: 'Daisy', meaning: 'Day\'s eye', origin: 'English', gender: 'girl' },
            { name: 'Diana', meaning: 'Divine', origin: 'Latin', gender: 'girl' },
            { name: 'Delilah', meaning: 'Delicate', origin: 'Hebrew', gender: 'girl' },
            { name: 'Danielle', meaning: 'God is my judge', origin: 'Hebrew', gender: 'girl' },
            { name: 'Dorothy', meaning: 'Gift of God', origin: 'Greek', gender: 'girl' }
        ],
        e: [
            { name: 'Ethan', meaning: 'Strong, enduring', origin: 'Hebrew', gender: 'boy' },
            { name: 'Elijah', meaning: 'Yahweh is God', origin: 'Hebrew', gender: 'boy' },
            { name: 'Edward', meaning: 'Wealthy guardian', origin: 'English', gender: 'boy' },
            { name: 'Evan', meaning: 'Young warrior', origin: 'Welsh', gender: 'boy' },
            { name: 'Eric', meaning: 'Ever ruler', origin: 'Norse', gender: 'boy' },
            { name: 'Emma', meaning: 'Universal', origin: 'German', gender: 'girl' },
            { name: 'Emily', meaning: 'Industrious', origin: 'Latin', gender: 'girl' },
            { name: 'Elizabeth', meaning: 'God is my oath', origin: 'Hebrew', gender: 'girl' },
            { name: 'Eva', meaning: 'Life', origin: 'Hebrew', gender: 'girl' },
            { name: 'Eleanor', meaning: 'Bright, shining one', origin: 'Greek', gender: 'girl' }
        ],
        f: [
            { name: 'Felix', meaning: 'Happy, fortunate', origin: 'Latin', gender: 'boy' },
            { name: 'Finn', meaning: 'Fair-haired', origin: 'Irish', gender: 'boy' },
            { name: 'Frank', meaning: 'Free man', origin: 'German', gender: 'boy' },
            { name: 'Frederick', meaning: 'Peaceful ruler', origin: 'German', gender: 'boy' },
            { name: 'Flynn', meaning: 'Son of the red-haired one', origin: 'Irish', gender: 'boy' },
            { name: 'Faith', meaning: 'Confidence, trust', origin: 'English', gender: 'girl' },
            { name: 'Fiona', meaning: 'Fair', origin: 'Scottish', gender: 'girl' },
            { name: 'Florence', meaning: 'Flourishing', origin: 'Latin', gender: 'girl' },
            { name: 'Felicity', meaning: 'Happiness', origin: 'Latin', gender: 'girl' },
            { name: 'Freya', meaning: 'Lady', origin: 'Norse', gender: 'girl' }
        ],
        g: [
            { name: 'Gabriel', meaning: 'God is my strength', origin: 'Hebrew', gender: 'boy' },
            { name: 'George', meaning: 'Farmer', origin: 'Greek', gender: 'boy' },
            { name: 'Gavin', meaning: 'White hawk', origin: 'Welsh', gender: 'boy' },
            { name: 'Grant', meaning: 'Great', origin: 'Scottish', gender: 'boy' },
            { name: 'Graham', meaning: 'Gravelly homestead', origin: 'Scottish', gender: 'boy' },
            { name: 'Grace', meaning: 'Charm', origin: 'Latin', gender: 'girl' },
            { name: 'Georgia', meaning: 'Farmer', origin: 'Greek', gender: 'girl' },
            { name: 'Gabriella', meaning: 'God is my strength', origin: 'Hebrew', gender: 'girl' },
            { name: 'Gemma', meaning: 'Precious stone', origin: 'Italian', gender: 'girl' },
            { name: 'Gianna', meaning: 'God is gracious', origin: 'Italian', gender: 'girl' }
        ],
        h: [
            // Boys
            { name: 'Henry', meaning: 'Ruler of the home', origin: 'German', gender: 'boy' },
            { name: 'Hudson', meaning: 'Son of Hugh', origin: 'English', gender: 'boy' },
            { name: 'Hunter', meaning: 'One who hunts', origin: 'English', gender: 'boy' },
            { name: 'Harrison', meaning: 'Son of Harry', origin: 'English', gender: 'boy' },
            { name: 'Hugo', meaning: 'Mind, intellect', origin: 'German', gender: 'boy' },
            // Girls
            { name: 'Hannah', meaning: 'Grace', origin: 'Hebrew', gender: 'girl' },
            { name: 'Harper', meaning: 'Harp player', origin: 'English', gender: 'girl' },
            { name: 'Hazel', meaning: 'The hazel tree', origin: 'English', gender: 'girl' },
            { name: 'Holly', meaning: 'Holly tree', origin: 'English', gender: 'girl' },
            { name: 'Hope', meaning: 'Expectation', origin: 'English', gender: 'girl' }
        ],
        i: [
            // Boys
            { name: 'Isaac', meaning: 'Laughter', origin: 'Hebrew', gender: 'boy' },
            { name: 'Ian', meaning: 'God is gracious', origin: 'Scottish', gender: 'boy' },
            { name: 'Ivan', meaning: 'God is gracious', origin: 'Russian', gender: 'boy' },
            { name: 'Isaiah', meaning: 'Salvation of the Lord', origin: 'Hebrew', gender: 'boy' },
            { name: 'Israel', meaning: 'Wrestled with God', origin: 'Hebrew', gender: 'boy' },
            // Girls
            { name: 'Isabella', meaning: 'Pledged to God', origin: 'Hebrew', gender: 'girl' },
            { name: 'Iris', meaning: 'Rainbow', origin: 'Greek', gender: 'girl' },
            { name: 'Ivy', meaning: 'Climbing vine', origin: 'English', gender: 'girl' },
            { name: 'Ingrid', meaning: 'Beautiful', origin: 'Scandinavian', gender: 'girl' },
            { name: 'India', meaning: 'From the Indus River', origin: 'English', gender: 'girl' }
        ],
        j: [
            // Boys
            { name: 'James', meaning: 'Supplanter', origin: 'Hebrew', gender: 'boy' },
            { name: 'Jack', meaning: 'God is gracious', origin: 'English', gender: 'boy' },
            { name: 'Joseph', meaning: 'God will increase', origin: 'Hebrew', gender: 'boy' },
            { name: 'Julian', meaning: 'Youthful', origin: 'Latin', gender: 'boy' },
            { name: 'Joel', meaning: 'Yahweh is God', origin: 'Hebrew', gender: 'boy' },
            // Girls
            { name: 'Julia', meaning: 'Youthful', origin: 'Latin', gender: 'girl' },
            { name: 'Jasmine', meaning: 'Gift from God', origin: 'Persian', gender: 'girl' },
            { name: 'Jane', meaning: 'God is gracious', origin: 'Hebrew', gender: 'girl' },
            { name: 'Jade', meaning: 'Green stone', origin: 'Spanish', gender: 'girl' },
            { name: 'June', meaning: 'Young', origin: 'Latin', gender: 'girl' }
        ],
        k: [
            // Boys
            { name: 'Kevin', meaning: 'Handsome', origin: 'Irish', gender: 'boy' },
            { name: 'Kyle', meaning: 'Narrow strait', origin: 'Scottish', gender: 'boy' },
            { name: 'Kingston', meaning: 'King\'s town', origin: 'English', gender: 'boy' },
            { name: 'Knox', meaning: 'Round hill', origin: 'Scottish', gender: 'boy' },
            { name: 'Kai', meaning: 'Sea', origin: 'Hawaiian', gender: 'boy' },
            // Girls
            { name: 'Katherine', meaning: 'Pure', origin: 'Greek', gender: 'girl' },
            { name: 'Keira', meaning: 'Dark-haired', origin: 'Irish', gender: 'girl' },
            { name: 'Kennedy', meaning: 'Helmeted chief', origin: 'Irish', gender: 'girl' },
            { name: 'Kendall', meaning: 'Valley of the River Kent', origin: 'English', gender: 'girl' },
            { name: 'Kylie', meaning: 'Boomerang', origin: 'Australian', gender: 'girl' }
        ],
        l: [
            // Boys
            { name: 'Lucas', meaning: 'Light', origin: 'Latin', gender: 'boy' },
            { name: 'Leo', meaning: 'Lion', origin: 'Latin', gender: 'boy' },
            { name: 'Liam', meaning: 'Strong-willed warrior', origin: 'Irish', gender: 'boy' },
            { name: 'Logan', meaning: 'Small hollow', origin: 'Scottish', gender: 'boy' },
            { name: 'Lincoln', meaning: 'Lake colony', origin: 'English', gender: 'boy' },
            // Girls
            { name: 'Lily', meaning: 'Pure', origin: 'English', gender: 'girl' },
            { name: 'Luna', meaning: 'Moon', origin: 'Latin', gender: 'girl' },
            { name: 'Lucy', meaning: 'Light', origin: 'Latin', gender: 'girl' },
            { name: 'Leah', meaning: 'Weary', origin: 'Hebrew', gender: 'girl' },
            { name: 'Layla', meaning: 'Night', origin: 'Arabic', gender: 'girl' }
        ],
        m: [
            // Boys
            { name: 'Michael', meaning: 'Who is like God?', origin: 'Hebrew', gender: 'boy' },
            { name: 'Matthew', meaning: 'Gift of God', origin: 'Hebrew', gender: 'boy' },
            { name: 'Mason', meaning: 'Stone worker', origin: 'English', gender: 'boy' },
            { name: 'Max', meaning: 'Greatest', origin: 'Latin', gender: 'boy' },
            { name: 'Miles', meaning: 'Soldier', origin: 'Latin', gender: 'boy' },
            // Girls
            { name: 'Mia', meaning: 'Mine', origin: 'Italian', gender: 'girl' },
            { name: 'Maya', meaning: 'Water', origin: 'Hebrew', gender: 'girl' },
            { name: 'Madison', meaning: 'Son of Matthew', origin: 'English', gender: 'girl' },
            { name: 'Mila', meaning: 'Gracious', origin: 'Slavic', gender: 'girl' },
            { name: 'Molly', meaning: 'Bitter', origin: 'Hebrew', gender: 'girl' }
        ],
        n: [
            // Boys
            { name: 'Noah', meaning: 'Rest, comfort', origin: 'Hebrew', gender: 'boy' },
            { name: 'Nathan', meaning: 'Gift of God', origin: 'Hebrew', gender: 'boy' },
            { name: 'Nicholas', meaning: 'Victory of the people', origin: 'Greek', gender: 'boy' },
            { name: 'Nolan', meaning: 'Champion', origin: 'Irish', gender: 'boy' },
            { name: 'Nash', meaning: 'By the ash tree', origin: 'English', gender: 'boy' },
            // Girls
            { name: 'Natalie', meaning: 'Birthday of the Lord', origin: 'Latin', gender: 'girl' },
            { name: 'Nina', meaning: 'Grace', origin: 'Russian', gender: 'girl' },
            { name: 'Nora', meaning: 'Honor', origin: 'Latin', gender: 'girl' },
            { name: 'Nova', meaning: 'New', origin: 'Latin', gender: 'girl' },
            { name: 'Naomi', meaning: 'Pleasantness', origin: 'Hebrew', gender: 'girl' }
        ],
        o: [
            // Boys
            { name: 'Oliver', meaning: 'Olive tree', origin: 'Latin', gender: 'boy' },
            { name: 'Owen', meaning: 'Young warrior', origin: 'Welsh', gender: 'boy' },
            { name: 'Oscar', meaning: 'Divine spear', origin: 'English', gender: 'boy' },
            { name: 'Omar', meaning: 'Flourishing', origin: 'Arabic', gender: 'boy' },
            { name: 'Otto', meaning: 'Wealth', origin: 'German', gender: 'boy' },
            // Girls
            { name: 'Olivia', meaning: 'Olive tree', origin: 'Latin', gender: 'girl' },
            { name: 'Octavia', meaning: 'Eighth', origin: 'Latin', gender: 'girl' },
            { name: 'Odette', meaning: 'Wealthy', origin: 'French', gender: 'girl' },
            { name: 'Ophelia', meaning: 'Help', origin: 'Greek', gender: 'girl' },
            { name: 'Opal', meaning: 'Gem', origin: 'Sanskrit', gender: 'girl' }
        ],
        p: [
            // Boys
            { name: 'Peter', meaning: 'Rock', origin: 'Greek', gender: 'boy' },
            { name: 'Patrick', meaning: 'Nobleman', origin: 'Latin', gender: 'boy' },
            { name: 'Phoenix', meaning: 'Dark red', origin: 'Greek', gender: 'boy' },
            { name: 'Parker', meaning: 'Park keeper', origin: 'English', gender: 'boy' },
            { name: 'Preston', meaning: 'Priest\'s town', origin: 'English', gender: 'boy' },
            // Girls
            { name: 'Penelope', meaning: 'Weaver', origin: 'Greek', gender: 'girl' },
            { name: 'Piper', meaning: 'Pipe player', origin: 'English', gender: 'girl' },
            { name: 'Paige', meaning: 'Young servant', origin: 'English', gender: 'girl' },
            { name: 'Pearl', meaning: 'Pearl', origin: 'Latin', gender: 'girl' },
            { name: 'Paisley', meaning: 'Church', origin: 'Scottish', gender: 'girl' }
        ],
        q: [
            // Boys
            { name: 'Quinn', meaning: 'Counsel', origin: 'Irish', gender: 'boy' },
            { name: 'Quincy', meaning: 'Estate of the fifth son', origin: 'French', gender: 'boy' },
            { name: 'Quentin', meaning: 'Fifth', origin: 'Latin', gender: 'boy' },
            { name: 'Quest', meaning: 'Pursuit', origin: 'English', gender: 'boy' },
            { name: 'Quinlan', meaning: 'Graceful', origin: 'Irish', gender: 'boy' },
            // Girls
            { name: 'Queen', meaning: 'Queen', origin: 'English', gender: 'girl' },
            { name: 'Quinta', meaning: 'Fifth', origin: 'Latin', gender: 'girl' },
            { name: 'Quinley', meaning: 'Fair-haired', origin: 'English', gender: 'girl' },
            { name: 'Quiana', meaning: 'Divine', origin: 'American', gender: 'girl' },
            { name: 'Querida', meaning: 'Beloved', origin: 'Spanish', gender: 'girl' }
        ],
        r: [
            // Boys
            { name: 'Ryan', meaning: 'Little king', origin: 'Irish', gender: 'boy' },
            { name: 'Robert', meaning: 'Bright fame', origin: 'German', gender: 'boy' },
            { name: 'Roman', meaning: 'Citizen of Rome', origin: 'Latin', gender: 'boy' },
            { name: 'Riley', meaning: 'Valiant', origin: 'Irish', gender: 'boy' },
            { name: 'Ryder', meaning: 'Horseman', origin: 'English', gender: 'boy' },
            // Girls
            { name: 'Ruby', meaning: 'Red gem', origin: 'Latin', gender: 'girl' },
            { name: 'Rachel', meaning: 'Ewe', origin: 'Hebrew', gender: 'girl' },
            { name: 'Rose', meaning: 'Rose flower', origin: 'Latin', gender: 'girl' },
            { name: 'Rebecca', meaning: 'To tie', origin: 'Hebrew', gender: 'girl' },
            { name: 'Rosalie', meaning: 'Rose', origin: 'Latin', gender: 'girl' }
        ],
        s: [
            // Boys
            { name: 'Samuel', meaning: 'Name of God', origin: 'Hebrew', gender: 'boy' },
            { name: 'Sebastian', meaning: 'Revered', origin: 'Greek', gender: 'boy' },
            { name: 'Simon', meaning: 'Listen', origin: 'Hebrew', gender: 'boy' },
            { name: 'Sawyer', meaning: 'Woodcutter', origin: 'English', gender: 'boy' },
            { name: 'Seth', meaning: 'Appointed', origin: 'Hebrew', gender: 'boy' },
            // Girls
            { name: 'Sophia', meaning: 'Wisdom', origin: 'Greek', gender: 'girl' },
            { name: 'Sarah', meaning: 'Princess', origin: 'Hebrew', gender: 'girl' },
            { name: 'Scarlett', meaning: 'Red', origin: 'English', gender: 'girl' },
            { name: 'Stella', meaning: 'Star', origin: 'Latin', gender: 'girl' },
            { name: 'Summer', meaning: 'Summer season', origin: 'English', gender: 'girl' }
        ],
        t: [
            // Boys
            { name: 'Thomas', meaning: 'Twin', origin: 'Aramaic', gender: 'boy' },
            { name: 'Theodore', meaning: 'Gift of God', origin: 'Greek', gender: 'boy' },
            { name: 'Tyler', meaning: 'Tile maker', origin: 'English', gender: 'boy' },
            { name: 'Tristan', meaning: 'Noise', origin: 'Celtic', gender: 'boy' },
            { name: 'Tate', meaning: 'Cheerful', origin: 'Norse', gender: 'boy' },
            // Girls
            { name: 'Taylor', meaning: 'Tailor', origin: 'English', gender: 'girl' },
            { name: 'Thea', meaning: 'Goddess', origin: 'Greek', gender: 'girl' },
            { name: 'Tessa', meaning: 'To reap', origin: 'Greek', gender: 'girl' },
            { name: 'Trinity', meaning: 'Trinity', origin: 'Latin', gender: 'girl' },
            { name: 'Talia', meaning: 'Dew from heaven', origin: 'Hebrew', gender: 'girl' }
        ],
        u: [
            // Boys
            { name: 'Ulysses', meaning: 'Wrathful', origin: 'Latin', gender: 'boy' },
            { name: 'Uriah', meaning: 'God is my light', origin: 'Hebrew', gender: 'boy' },
            { name: 'Urban', meaning: 'City dweller', origin: 'Latin', gender: 'boy' },
            { name: 'Upton', meaning: 'Upper town', origin: 'English', gender: 'boy' },
            { name: 'Umberto', meaning: 'Bright warrior', origin: 'German', gender: 'boy' },
            // Girls
            { name: 'Uma', meaning: 'Nation', origin: 'Sanskrit', gender: 'girl' },
            { name: 'Unity', meaning: 'Oneness', origin: 'English', gender: 'girl' },
            { name: 'Ursula', meaning: 'Little bear', origin: 'Latin', gender: 'girl' },
            { name: 'Unique', meaning: 'One of a kind', origin: 'French', gender: 'girl' },
            { name: 'Uliana', meaning: 'Youthful', origin: 'Russian', gender: 'girl' }
        ],
        v: [
            // Boys
            { name: 'Victor', meaning: 'Conqueror', origin: 'Latin', gender: 'boy' },
            { name: 'Vincent', meaning: 'Conquering', origin: 'Latin', gender: 'boy' },
            { name: 'Vaughn', meaning: 'Small', origin: 'Welsh', gender: 'boy' },
            { name: 'Vance', meaning: 'Marshland', origin: 'English', gender: 'boy' },
            { name: 'Vale', meaning: 'Valley', origin: 'Latin', gender: 'boy' },
            // Girls
            { name: 'Victoria', meaning: 'Victory', origin: 'Latin', gender: 'girl' },
            { name: 'Violet', meaning: 'Purple', origin: 'Latin', gender: 'girl' },
            { name: 'Valentina', meaning: 'Strong', origin: 'Latin', gender: 'girl' },
            { name: 'Vera', meaning: 'Faith', origin: 'Russian', gender: 'girl' },
            { name: 'Vivian', meaning: 'Alive', origin: 'Latin', gender: 'girl' }
        ],
        w: [
            // Boys
            { name: 'William', meaning: 'Resolute protection', origin: 'German', gender: 'boy' },
            { name: 'Wesley', meaning: 'Western meadow', origin: 'English', gender: 'boy' },
            { name: 'Wade', meaning: 'To go', origin: 'English', gender: 'boy' },
            { name: 'Walter', meaning: 'Army ruler', origin: 'German', gender: 'boy' },
            { name: 'Wyatt', meaning: 'Brave, strong', origin: 'English', gender: 'boy' },
            // Girls
            { name: 'Willow', meaning: 'Willow tree', origin: 'English', gender: 'girl' },
            { name: 'Winter', meaning: 'Winter season', origin: 'English', gender: 'girl' },
            { name: 'Wren', meaning: 'Small bird', origin: 'English', gender: 'girl' },
            { name: 'Wendy', meaning: 'Friend', origin: 'English', gender: 'girl' },
            { name: 'Whitney', meaning: 'White island', origin: 'English', gender: 'girl' }
        ],
        x: [
            // Boys
            { name: 'Xavier', meaning: 'New house', origin: 'Arabic', gender: 'boy' },
            { name: 'Xander', meaning: 'Defender of the people', origin: 'Greek', gender: 'boy' },
            { name: 'Xiomar', meaning: 'Famous in battle', origin: 'German', gender: 'boy' },
            { name: 'Xerxes', meaning: 'Ruler over heroes', origin: 'Persian', gender: 'boy' },
            { name: 'Xico', meaning: 'Peaceful', origin: 'Spanish', gender: 'boy' },
            // Girls
            { name: 'Xena', meaning: 'Hospitable', origin: 'Greek', gender: 'girl' },
            { name: 'Ximena', meaning: 'Listener', origin: 'Spanish', gender: 'girl' },
            { name: 'Xiomara', meaning: 'Ready for battle', origin: 'Spanish', gender: 'girl' },
            { name: 'Xandra', meaning: 'Defender of mankind', origin: 'Greek', gender: 'girl' },
            { name: 'Xia', meaning: 'Summer', origin: 'Chinese', gender: 'girl' }
        ],
        y: [
            // Boys
            { name: 'Yuri', meaning: 'Farmer', origin: 'Russian', gender: 'boy' },
            { name: 'Yale', meaning: 'Fertile upland', origin: 'Welsh', gender: 'boy' },
            { name: 'Yves', meaning: 'Yew wood', origin: 'French', gender: 'boy' },
            { name: 'York', meaning: 'From the yew estate', origin: 'English', gender: 'boy' },
            { name: 'Yosef', meaning: 'God will add', origin: 'Hebrew', gender: 'boy' },
            // Girls
            { name: 'Yara', meaning: 'Small butterfly', origin: 'Arabic', gender: 'girl' },
            { name: 'Yasmine', meaning: 'Jasmine flower', origin: 'Persian', gender: 'girl' },
            { name: 'Yael', meaning: 'To ascend', origin: 'Hebrew', gender: 'girl' },
            { name: 'Yvette', meaning: 'Yew tree', origin: 'French', gender: 'girl' },
            { name: 'Yuna', meaning: 'Kindness', origin: 'Korean', gender: 'girl' }
        ],
        z: [
            // Boys
            { name: 'Zachary', meaning: 'Remembered by God', origin: 'Hebrew', gender: 'boy' },
            { name: 'Zander', meaning: 'Defender of the people', origin: 'Greek', gender: 'boy' },
            { name: 'Zion', meaning: 'Highest point', origin: 'Hebrew', gender: 'boy' },
            { name: 'Zeus', meaning: 'Sky', origin: 'Greek', gender: 'boy' },
            { name: 'Zeke', meaning: 'God strengthens', origin: 'Hebrew', gender: 'boy' },
            // Girls
            { name: 'Zoe', meaning: 'Life', origin: 'Greek', gender: 'girl' },
            { name: 'Zelda', meaning: 'Gray fighting maid', origin: 'German', gender: 'girl' },
            { name: 'Zara', meaning: 'Princess', origin: 'Arabic', gender: 'girl' },
            { name: 'Zinnia', meaning: 'Flower', origin: 'German', gender: 'girl' },
            { name: 'Zena', meaning: 'Born of Zeus', origin: 'Greek', gender: 'girl' }
        ]
    };

    // فلترة الأسماء حسب الحرف المختار
    const letterNames = allNames[letter] || [];

    res.render('pages/baby-names/letter-names', {
        letter,
        letterNames,
        babyNames
    });
});

module.exports = router;
