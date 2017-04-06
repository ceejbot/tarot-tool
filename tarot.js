#!/usr/bin/env node

const
    chalk    = require('chalk'),
	shuffle  = require('knuth-shuffle').knuthShuffle,
    util     = require('util'),
	wordwrap = require('wordwrap')
	;

const wrap = wordwrap(4, 80);
const cardname = chalk.blue.bold;

function Suit(name)
{
    this.name = name;
    this.cards = [];
}

Suit.prototype.name = null;

function Card(name, suit, ismajor, pips, desc, zodiac)
{
    this.name = name;
	this.suit = suit;
	this.ismajor = ismajor;
	this.pips = parseInt(pips, 10);
	this.desc = desc;
	this.zodiac = zodiac;
	this.element = null;
}

Card.prototype.longdesc = function longdesc()
{
	console.log();
	var result = `${cardname(this.toString())}:\n`;
	if (this.zodiac) result += `    Sign: ${chalk.green(this.zodiac)}\n`;
	if (this.element) result += `    Element: ${chalk.green(this.element)}\n`;
	result += wrap(`${this.desc}`);

    return result;
};

Card.prototype.toString = function toString()
{
	if (this.ismajor)
		return this.name;
	if (this.pips === 1)
		return util.format('Ace of %s', this.suit.name);
	if (this.pips === 11)
		return util.format('Page of %s', this.suit.name);
	if (this.pips === 12)
		return util.format('Knight of %s', this.suit.name);
	if (this.pips === 13)
		return util.format('Queen of %s', this.suit.name);
	if (this.pips === 14)
		return util.format('King of %s', this.suit.name);
	return util.format('%d of %s', this.pips, this.suit.name);
};

var Cups = new Suit('Cups');
var Wands = new Suit('Wands');
var Swords = new Suit('Swords');
var Pentacles = new Suit('Pentacles');

var majors = [
	new Card('The Fool', null, true, 0, 'Journey\'s beginning. Initial possibilities. Childlike questioning. Unawareness. The Querent.'),
	new Card('The Magician', null, true, 1, 'First steps: Command over the elements, arcane power and its expression. A catalyst. A charming and charismatic man.'),
	new Card('The High Priestess', null, true, 2, 'Knowledge: Instinctive, supernatural knowledge, secrets of the arcane. Secrets revealed. A woman of mysterious knowledge.'),
	new Card('The Empress', null, true, 3, 'The matriarch, the essence of motherhood. Fertility and life. Nuturing. Fertility.', 'Venus'),
	new Card('The Emperor', null, true, 4, 'The patriarch, the essence of fatherhood. Command and domination. Responsibility. Determination.', 'Aries'),
	new Card('The Hierophant', null, true, 5, 'The maker and follower of rules. Structured teaching. The established order. Wisdom.', 'Taurus'),
	new Card('The Lovers', null, true, 6, 'Spiritual love: Finding one\'s soul mate. Choice. Blessed union.', 'Gemini'),
	new Card('The Chariot', null, true, 7, 'Direction: Hard-won victory, surrounded by its spoils and reminders of how it was achieved.', 'Cancer'),
	new Card('Strength', null, true, 8, 'Courage, inner strength, self-command. Loyalty and generosity.', 'Leo'),
	new Card('The Hermit', null, true, 9, 'Search. Introspection, solitude, withdrawal & taking stock.', 'Virgo'),
	new Card('The Wheel', null, true, 10, 'Luck, whether good or bad. Karmic payback. Time.'),
	new Card('Justice', null, true, 11, 'Equity: Legal matters, laws (of physics or of men). Balance & imbalance.', 'Libra'),
	new Card('The Hanged Man', null, true, 12, 'Trial: Odin nailed to the tree. Meditation, reflection, prophecy, self-sacrifice. Risk, change in perception, certainties that shatter, a desire to change.', 'Neptune'),
	new Card('Death', null, true, 13, 'Transformation: Ends and beginnings, loss and renewal. Change. Sex & death.', 'Scorpio'),
	new Card('Temperance', null, true, 14, 'Alchemy: Moderation, the blending of elements. The balancing of energies.', 'Sagittarius'),
	new Card('The Devil', null, true, 15, 'Passion: Enslavement, materialism, addiction, wild behavior. The extremes. Desires of the senses, sexuality. Pan.'),
	new Card('The Tower', null, true, 16, 'War: the destruction of the establishment with a single flash of insight. Tearing down. A rude awakening. Secrets.'),
	new Card('The Star', null, true, 17, 'Hope: Spiritual insight, healing, water to quench thirst.', 'Aquarius'),
	new Card('The Moon', null, true, 18, 'Fantasy: Visions & dreams & unconscious knowledge. Water, night, inaction.', 'Pisces'),
	new Card('The Sun', null, true, 19, 'Truth: Glory, triumph, radiance, confidence in power. Fire, day, action.', 'Leo'),
	new Card('Judgement', null, true, 20, 'Conclusions: Decisions made, new directions embraced. Leave the dead past behind, and embrace rebirth.'),
	new Card('The World', null, true, 21, 'Completion: I\'m going to show you the World! Successful completion, especially of the long-term; travel in a grand sense. Journey\'s end.'),
];
var cups = [
	new Card('', Cups, false, 1, 'Emotion. The birth of new emotion and magic. A wellspring. The essence of water. West. Autumn. Gabriel.'),
	new Card('', Cups, false, 2, 'Partnership. The recognition of friendship or love. Emotion in balance.'),
	new Card('', Cups, false, 3, 'Celebration. Love and joy.'),
	new Card('', Cups, false, 4, 'Depression, boredom, stagnation.'),
	new Card('', Cups, false, 5, 'Obsession with past losses. Target fixation.'),
	new Card('', Cups, false, 6, 'A moment of perfect balance; nostalgia.'),
	new Card('', Cups, false, 7, 'Fantasy. Inability to decide. Illusions, deceptions.'),
	new Card('', Cups, false, 8, 'Application. Shedding the familiar in favor of the new.'),
	new Card('', Cups, false, 9, 'Satisfaction. Wishes fulfilled, appetites fed.'),
	new Card('', Cups, false, 10, 'Harmony. Love, joy, and friendship, all stable and family-style.'),
	new Card('', Cups, false, 11, 'Apprentice. A message of love or family.'),
	new Card('', Cups, false, 12, 'Journeyman. Travel by water. The emo!knight, dreamy and moody, prone to writing poetry. (Songfic?)'),
	new Card('', Cups, false, 13, 'An intuitive, emotionally-savvy woman, a family nurturer. A healer or counselor. The development of relationships.'),
	new Card('', Cups, false, 14, 'The master of water, emotion, & magic. This man can be somewhat old-fashioned, but a gentle patriarch. '),
];
var wands = [
	new Card('', Wands, false, 1, 'Energy. The birth of raw energy; creation. The essence of fire. South. Summer. Michael.'),
	new Card('', Wands, false, 2, 'Ambition. Choice. Power in balance.'),
	new Card('', Wands, false, 3, 'Waiting. Progress and potential. Action has been taken.'),
	new Card('', Wands, false, 4, 'Ceremony. Foundations laid, perhaps marriage or contracted partnership.'),
	new Card('', Wands, false, 5, 'Struggle. Conflict & power struggles, perhaps as preparation. Training.'),
	new Card('', Wands, false, 6, 'Victory, and its celebration among allies.'),
	new Card('', Wands, false, 7, 'Besieged. On the defensive.'),
	new Card('', Wands, false, 8, 'Energy. Swift movement, haste. Motion & change.'),
	new Card('', Wands, false, 9, 'Roots. Success as a step away; the strength to continue the battle; a strong position.'),
	new Card('', Wands, false, 10, 'Oppression. A heavy burden. Exaggeration.'),
	new Card('', Wands, false, 11, 'Apprentice. A message about motion. A charismatic, active kid, a natural leader.'),
	new Card('', Wands, false, 12, 'Journeyman. Exciting travel. Someone who tilts at windmills, makes grand gestures, and is somewhat unreliable.'),
	new Card('', Wands, false, 13, 'A creative, energetic, charismatic, in-charge woman. The development of leadership.'),
	new Card('', Wands, false, 14, 'The master of fire, creation, sexual energy. A dynamic and charismatic man, who can lead armies or mobs.'),
];
var swords = [
	new Card('', Swords, false, 1, 'Mind. The mind awakening, pure intellect. The essence of air. East. Spring. Raphael.'),
	new Card('', Swords, false, 2, 'Compromise. Temporary balance and compromise, perhaps even because of blockage.'),
	new Card('', Swords, false, 3, 'Heartbreak, betrayal, deceit.'),
	new Card('', Swords, false, 4, 'Stillness. Meditation and rest. A retreat to recover and heal. Standing back for thought.'),
	new Card('', Swords, false, 5, 'Losing the argument, perhaps to a cheater.'),
	new Card('', Swords, false, 6, 'Retreat & recovery. Release of tension; calm after upset; solutions for mental problems. Melancholy.'),
	new Card('', Swords, false, 7, 'Thief. Set a thief to catch a thief; cleverness is required. Not showing one\'s true face. Deceit.'),
	new Card('', Swords, false, 8, 'Immobility. Trapped, afraid to move, though motion is required.'),
	new Card('', Swords, false, 9, 'Nightmares. Oppression, fear, stress. But is it all in your head?'),
	new Card('', Swords, false, 10, 'Defeat. It\'s as bad as you think. The worst.'),
	new Card('', Swords, false, 11, 'Apprentice. A message about problems, solved or posed. Rumors? A young and brash warrior, perhaps overconfident.'),
	new Card('', Swords, false, 12, 'Journeyman. Travel by air. The argumentative knight, interested in information & discussion.'),
	new Card('', Swords, false, 13, 'Encyclopedic knowledge. Problem-solving at the expense of the personal. A stylish but possibly cold woman. The development of story or information.'),
	new Card('', Swords, false, 14, 'The master of air, mind, and knowledge. A fair man, an idealistic man, a man with high standards.'),
];
var pentacles = [
	new Card('', Pentacles, false, 1, 'Matter. A new task; new projects; new goals. The essence of earth. North. Winter. Uriel.'),
	new Card('', Pentacles, false, 2, 'Balance of material tasks and jobs. The juggler.'),
	new Card('', Pentacles, false, 3, 'Craftsmanship. Construction. Hard work, with its results.'),
	new Card('', Pentacles, false, 4, 'The miser. A refusal to share. Fear.'),
	new Card('', Pentacles, false, 5, 'Exposure, vulnerability. Material loss. Poverty. Perhaps someone to share the hardships with.'),
	new Card('', Pentacles, false, 6, 'Generosity. Impulsiveness, altruism.'),
	new Card('', Pentacles, false, 7, 'Rest. Patiently waiting for work to come to fruition. Nothing to do but wait.'),
	new Card('', Pentacles, false, 8, 'Apprenticeship. Dedication. The training montage.'),
	new Card('', Pentacles, false, 9, 'Wealth. Physical luxury. Rewards for hard work. A lush vacation.'),
	new Card('', Pentacles, false, 10, 'Prosperity rooted in tradition. The fulfilment of physical needs.'),
	new Card('', Pentacles, false, 11, 'Apprentice. A message about money or health. A creative and hardworking kid. Trust in one\'s resources, playing one\'s cards well, beginning a career.'),
	new Card('', Pentacles, false, 12, 'Journeyman. Travel on foot, or self-propelled. The materialistic knight, perhaps obsessive and isolationist.'),
	new Card('', Pentacles, false, 13, 'A practical, active, organized woman. Perhaps over-focused on the material or unimaginative. The development of business plans.'),
	new Card('', Pentacles, false, 14, 'The master of earth, body, and possessions. A loyal man, an organizer of large projects, the lead engineer. Self-reliance.'),
];

var tarot = [].concat(majors).concat(cups).concat(wands).concat(swords).concat(pentacles);
const suits = { c: cups, s: swords, w: wands, p: pentacles,
	cups: cups, swords: swords, wands: wands, pentacles: pentacles };

function printAllCards()
{
	// console.log(util.format('%d cards found in the deck.', tarot.length));

	tarot.forEach(card =>
	{
		console.log(card.longdesc());
	});
}

function showCard(argv)
{
	// This is pretty hacky, but natural language is what it is.
	const namePattern = new RegExp(argv.suit, 'i');
	const oneWordPattern = /([cwsp])(\d+)/i;

	if (argv.suit && argv.number && suits[argv.suit])
	{
		var num = Math.min(Math.max(0, argv.number - 1), suits[argv.suit].length - 1);
		console.log(suits[argv.suit][num].longdesc());
		process.exit(0);
	}

	majors.forEach(card =>
	{
		if (namePattern.test(card.name))
		{
			console.log(card.longdesc());
			process.exit(0);
		}
	});

	var matches;
	if (matches = argv.suit.match(oneWordPattern))
	{
		const suit = suits[matches[1]];
		var num = Math.min(Math.max(0, Number(matches[2] - 1)), suit.length - 1);
		console.log(suit[num].longdesc());
		process.exit(0);
	}

	console.log(`Can't find a card named ${argv.suit} ${argv.number || ''}`);
	process.exit(1);
}

function randomMajor()
{
	shuffle(majors);
	console.log(majors[0].longdesc());
}

function randomCard()
{
	shuffle(tarot);
	console.log(tarot[0].longdesc());
}

function twoCardDraw()
{
	shuffle(tarot);
	console.log(tarot[0].longdesc());
	console.log(tarot[1].longdesc());
}

function threeCardReading(argv)
{
	console.log(chalk.green('Drawing 3 cards:\n'));
	reading(['Past', 'Present', 'Future']);
}

function fourCardReading(argv)
{
	console.log(chalk.green('Drawing 4 for the quick spread:\n'));
	reading(['Have', 'Want', 'Need', 'Get']);
}

function fiveCardReading(argv)
{
	console.log(chalk.green('Drawing 5 for the fictional character problem-solving spread:\n'));
	reading(['Current situation', 'Belief', 'True desire', 'True need', 'Solution']);
}

function celticCross()
{
	console.log(chalk.green('Drawing 11 for the traditional Celtic Cross spread:\n'));
	const headings = ['Significator', 'Atmosphere', 'Crossing', 'Highest hopes', 'Foundation',
		'Past', 'Future', 'Personal position', 'Environment', 'Psychology', 'Resolution'];
	reading(headings);
}

function reading(headings)
{
	shuffle(tarot);
	const reading = tarot.slice(0, headings.length);

	for (var i = 0; i < headings.length; i++)
	{
		console.log(`${chalk.red(headings[i])}: ${cardname(reading[i].toString())}`);
		console.log(wrap(reading[i].desc));
	}
	console.log();
}

var argv = require('yargs')
	.command({
		command: 'random',
		aliases: ['one', '1' ],
		desc: 'pick a random card from the deck',
		builder: () => {},
		handler: randomCard,
	})
	.command({
		command: 'two',
		aliases: ['2', ],
		desc: 'two card draw',
		builder: () => {},
		handler: twoCardDraw
	})
	.command({
		command: 'three',
		aliases: ['3', ],
		desc: 'three-card past/present/future spread',
		builder: () => {},
		handler: threeCardReading
	})
	.command({
	    command: 'four',
	    aliases: ['4', ],
	    desc: 'four-card have/want/need/get spread',
	    builder: () => {},
	    handler: fourCardReading
	})
	.command({
	    command: 'five',
	    aliases: ['5', ],
	    desc: 'five-card problem-solving spread',
	    builder: () => {},
	    handler: fiveCardReading
	})
	.command({
	    command: 'celtic-cross',
	    aliases: ['celtic', 'cross', ],
	    desc: 'the traditional Celtic Cross spread',
	    builder: () => {},
	    handler: celticCross
	})
	.command({
	    command: 'major',
	    desc: 'pick a random major arcana card',
	    builder: () => {},
	    handler: randomMajor
	})
	.command({
		command: 'card <suit> [number]',
		aliases: ['c'],
		desc: 'show the meaning of a specific card, by name or suit/number',
		builder: (yargs) => {
			yargs
				.usage('$0 card [suit][number] or <name>')
				.example('$0 card fool', 'show the meaning of the Fool')
				.example('$0 card "The Magician"', 'show the meaning of the Magician')
				.example('$0 card s1', 'show the meaning of the Ace of Swords')
				.example('$0 card c4', 'show the meaning of the 4 of Cups')
				.example('$0 card cups 4', 'show the meaning of the 4 of Cups');
			return yargs;
		},
	    handler: showCard,
	})
	.command('all', 'print all cards', () => {}, printAllCards)
	.help()
	.version()
	.argv;
