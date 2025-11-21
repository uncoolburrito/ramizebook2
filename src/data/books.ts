export interface Chapter {
    id: string;
    title: string;
    content: string; // HTML or Markdown string
}

export interface Book {
    id: string;
    slug: string;
    title: string;
    author: string;
    description: string;
    tags: string[];
    publishedYear: number;
    chapters: Chapter[];
}

export const books: Book[] = [
    {
        id: "1",
        slug: "the-republic",
        title: "The Republic",
        author: "Plato",
        description: "Plato's best-known work and one of the world's most influential works of philosophy and political theory, both intellectually and historically.",
        tags: ["Philosophy", "Politics", "Classic"],
        publishedYear: -375,
        chapters: [
            {
                id: "chapter-1",
                title: "Chapter 1",
                content: `
          <p>I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess; and also because I wanted to see in what manner they would celebrate the festival, which was a new thing. I was delighted with the procession of the inhabitants; but that of the Thracians was equally, if not more, beautiful.</p>
          <p>When we had finished our prayers and viewed the spectacle, we turned in the direction of the city; and at that instant Polemarchus the son of Cephalus chanced to catch sight of us from a distance as we were starting on our way home, and told his servant to run and bid us wait for him. The servant took hold of me by the cloak behind, and said: Polemarchus desires you to wait.</p>
          <p>I turned round, and asked him where his master was.</p>
          <p>There he is, said the youth, coming after you, if you will only wait.</p>
          <p>Certainly we will, said Glaucon; and in a few minutes Polemarchus appeared, and with him Adeimantus, Glaucon's brother, Niceratus the son of Nicias, and several others who had been at the procession.</p>
        `
            },
            {
                id: "chapter-2",
                title: "Chapter 2",
                content: `
          <p>With these words I was thinking that I had made an end of the discussion; but the end, in truth, proved to be only a beginning. For Glaucon, who is always the most pugnacious of men, was dissatisfied at Thrasymachus' retirement; he wanted to have the battle out. So he said to me: Socrates, do you wish really to persuade us, or only to seem to have persuaded us, that to be just is always better than to be unjust?</p>
          <p>I should wish really to persuade you, I replied, if I could.</p>
          <p>Then you certainly have not succeeded. Let me ask you now:—How would you arrange goods—are there not some which we welcome for their own sakes, and independently of their consequences, as, for example, harmless pleasures and enjoyments, which delight us at the time, although nothing follows from them?</p>
        `
            },
            {
                id: "chapter-3",
                title: "Chapter 3",
                content: `
          <p>Come then, and let us pass a leisure hour in story-telling, and our story shall be the education of our heroes.</p>
          <p>By all means.</p>
          <p>And what shall be their education? Can we find a better than the traditional sort?—and this has two divisions, gymnastic for the body, and music for the soul.</p>
          <p>True.</p>
          <p>Shall we begin education with music, and go on to gymnastic afterwards?</p>
          <p>By all means.</p>
          <p>And when you speak of music, do you include literature or not?</p>
          <p>I do.</p>
        `
            }
        ]
    },
    {
        id: "2",
        slug: "meditations",
        title: "Meditations",
        author: "Marcus Aurelius",
        description: "A series of personal writings by Marcus Aurelius, Roman Emperor from 161 to 180 AD, recording his private notes to himself and ideas on Stoic philosophy.",
        tags: ["Stoicism", "Philosophy", "Self-Help"],
        publishedYear: 180,
        chapters: [
            {
                id: "chapter-1",
                title: "Chapter 1",
                content: `
          <p>From my grandfather Verus I learned good morals and the government of my temper.</p>
          <p>From the reputation and remembrance of my father, modesty and a manly character.</p>
          <p>From my mother, piety and beneficence, and abstinence, not only from evil deeds, but even from evil thoughts; and further, simplicity in my way of living, far removed from the habits of the rich.</p>
          <p>From my great-grandfather, not to have frequented public schools, and to have had good teachers at home, and to know that on such things a man should spend liberally.</p>
        `
            },
            {
                id: "chapter-2",
                title: "Chapter 2",
                content: `
          <p>Begin the morning by saying to thyself, I shall meet with the busy-body, the ungrateful, arrogant, deceitful, envious, unsocial. All these things happen to them by reason of their ignorance of what is good and evil. But I who have seen the nature of the good that it is beautiful, and of the bad that it is ugly, and the nature of him who does wrong, that it is akin to me, not only of the same blood or seed, but that it participates in the same intelligence and the same portion of the divinity, I can neither be injured by any of them, for no one can fix on me what is ugly, nor can I be angry with my kinsman, nor hate him.</p>
        `
            },
            {
                id: "chapter-3",
                title: "Chapter 3",
                content: `
          <p>We ought to consider not only that our life is daily wasting away and a smaller part of it is left, but another thing also must be taken into the account, that if a man should live longer, it is quite uncertain whether the understanding will still continue sufficient for the comprehension of things, and retain the power of contemplation which strives to acquire the knowledge of the divine and the human.</p>
          <p>For if he shall begin to fall into dotage, perspiration and nutrition and imagination and appetite, and whatever else there is of the kind, will not fail; but the power of making use of ourselves, and filling up the measure of our duty, and clearly separating all appearances, and considering whether a man should now depart from life, and whatever else of the kind absolutely requires a disciplined reason, all this is already extinguished.</p>
        `
            }
        ]
    },
    {
        id: "3",
        slug: "beyond-good-and-evil",
        title: "Beyond Good and Evil",
        author: "Friedrich Nietzsche",
        description: "Nietzsche accuses past philosophers of lacking critical sense and blindly accepting dogmatic premises in their consideration of morality.",
        tags: ["Philosophy", "Existentialism"],
        publishedYear: 1886,
        chapters: [
            {
                id: "chapter-1",
                title: "Chapter 1: Prejudices of Philosophers",
                content: `
          <p>The Will to Truth, which is to tempt us to many a hazardous enterprise, the famous Truthfulness of which all philosophers have hitherto spoken with respect, what questions has this Will to Truth not laid before us! What strange, perplexing, questionable questions! It is already a long story; yet it seems as if it were hardly commenced. Is it any wonder if we at last grow distrustful, lose patience, and turn impatiently away?</p>
        `
            },
            {
                id: "chapter-2",
                title: "Chapter 2: The Free Spirit",
                content: `
          <p>O sancta simplicitas! In what strange simplification and falsification man lives! One can never cease wondering when once one has got eyes for beholding this marvel! How we have made everything around us clear and free and easy and simple! how we have been able to give our senses a passport to everything superficial, our thoughts a godlike desire for wanton pranks and wrong inferences!—how from the beginning, we have contrived to retain our ignorance in order to enjoy an almost inconceivable freedom, thoughtlessness, imprudence, heartiness, and gaiety—in order to enjoy life!</p>
        `
            }
        ]
    },
    {
        id: "4",
        slug: "the-prince",
        title: "The Prince",
        author: "Niccolò Machiavelli",
        description: "A 16th-century political treatise by the Italian diplomat and political theorist Niccolò Machiavelli.",
        tags: ["Politics", "History", "Classic"],
        publishedYear: 1532,
        chapters: [
            {
                id: "chapter-1",
                title: "Chapter 1",
                content: `
          <p>All states, all powers, that have held and hold rule over men have been and are either republics or principalities.</p>
          <p>Principalities are either hereditary, in which the family has been long established; or they are new.</p>
          <p>The new are either entirely new, as was Milan to Francesco Sforza, or they are, as it were, members annexed to the hereditary state of the prince who has acquired them, as was the kingdom of Naples to the King of Spain.</p>
        `
            },
            {
                id: "chapter-2",
                title: "Chapter 2",
                content: `
          <p>I will leave out all discussion on republics, inasmuch as in another place I have written of them at length, and will address myself only to principalities. In doing so I will keep to the order indicated above, and discuss how such principalities are to be ruled and preserved.</p>
          <p>I say at once there are fewer difficulties in holding hereditary states, and those long accustomed to the family of their prince, than new ones; for it is sufficient only not to transgress the customs of his ancestors, and to deal prudently with circumstances as they arise, for a prince of average powers to maintain himself in his state, unless he be deprived of it by some extraordinary and excessive force; and if he should be so deprived of it, whenever anything sinister happens to the usurper, he will regain it.</p>
        `
            }
        ]
    },
    {
        id: "5",
        slug: "the-art-of-war",
        title: "The Art of War",
        author: "Sun Tzu",
        description: "An ancient Chinese military treatise dating from the Late Spring and Autumn Period. The work, which is attributed to the ancient Chinese military strategist Sun Tzu, is composed of 13 chapters.",
        tags: ["Strategy", "Philosophy", "Classic"],
        publishedYear: -500,
        chapters: [
            {
                id: "chapter-1",
                title: "Chapter 1: Laying Plans",
                content: `
          <p>Sun Tzu said: The art of war is of vital importance to the State.</p>
          <p>It is a matter of life and death, a road either to safety or to ruin. Hence it is a subject of inquiry which can on no account be neglected.</p>
          <p>The art of war, then, is governed by five constant factors, to be taken into account in one's deliberations, when seeking to determine the conditions obtaining in the field.</p>
        `
            },
            {
                id: "chapter-2",
                title: "Chapter 2: Waging War",
                content: `
          <p>Sun Tzu said: In the operations of war, where there are in the field a thousand swift chariots, as many heavy chariots, and a hundred thousand mail-clad soldiers, with provisions enough to carry them a thousand li, the expenditure at home and at the front, including entertainment of guests, small items such as glue and paint, and sums spent on chariots and armor, will reach the total of a thousand ounces of silver per day. Such is the cost of raising an army of 100,000 men.</p>
        `
            }
        ]
    },
    {
        id: "6",
        slug: "tao-te-ching",
        title: "Tao Te Ching",
        author: "Laozi",
        description: "A fundamental text for both philosophical and religious Taoism. It also strongly influenced other schools of Chinese philosophy and religion, including Legalism, Confucianism, and Chinese Buddhism.",
        tags: ["Philosophy", "Religion", "Classic"],
        publishedYear: -400,
        chapters: [
            {
                id: "chapter-1",
                title: "Chapter 1",
                content: `
          <p>The Tao that can be trodden is not the enduring and unchanging Tao. The name that can be named is not the enduring and unchanging name.</p>
          <p>(Conceived of as) having no name, it is the Originator of heaven and earth; (conceived of as) having a name, it is the Mother of all things.</p>
        `
            },
            {
                id: "chapter-2",
                title: "Chapter 2",
                content: `
          <p>All in the world know the beauty of the beautiful, and in doing this they have (the idea of) what ugliness is; they all know the skill of the skillful, and in doing this they have (the idea of) what the want of skill is.</p>
          <p>So it is that existence and non-existence give birth the one to (the idea of) the other; that difficulty and ease produce the one (the idea of) the other; that length and shortness fashion out the one the figure of the other; that (the ideas of) height and lowness arise from the contrast of the one with the other; that the musical notes and tones become harmonious through the relation of one with another; and that being before and behind give the idea of one following another.</p>
        `
            }
        ]
    },
    {
        id: "7",
        slug: "critique-of-pure-reason",
        title: "Critique of Pure Reason",
        author: "Immanuel Kant",
        description: "The Critique of Pure Reason is a book by the German philosopher Immanuel Kant, in which the author seeks to determine the limits and scope of metaphysics.",
        tags: ["Philosophy", "Epistemology", "Classic"],
        publishedYear: 1781,
        chapters: [
            {
                id: "chapter-1",
                title: "Introduction",
                content: `
          <p>That all our knowledge begins with experience there can be no doubt. For how is it possible that the faculty of cognition should be awakened into exercise otherwise than by means of objects which affect our senses?</p>
          <p>But though all our knowledge begins with experience, it by no means follows that all arises out of experience.</p>
        `
            },
            {
                id: "chapter-2",
                title: "Transcendental Aesthetic",
                content: `
          <p>In whatever manner and by whatever means a mode of knowledge may relate to objects, intuition is that through which it is in immediate relation to them, and to which all thought as a means is directed. But intuition takes place only in so far as the object is given to us. This again is only possible, to man at least, in so far as the mind is affected in a certain way.</p>
        `
            }
        ]
    },
    {
        id: "8",
        slug: "leviathan",
        title: "Leviathan",
        author: "Thomas Hobbes",
        description: "Leviathan or The Matter, Forme and Power of a Common-Wealth Ecclesiasticall and Civil, commonly referred to as Leviathan, is a book written by Thomas Hobbes and published in 1651.",
        tags: ["Politics", "Philosophy", "Classic"],
        publishedYear: 1651,
        chapters: [
            {
                id: "chapter-13",
                title: "Chapter 13: Of the Natural Condition of Mankind",
                content: `
          <p>Nature hath made men so equal in the faculties of body and mind as that, though there be found one man sometimes manifestly stronger in body or of quicker mind than another, yet when all is reckoned together the difference between man and man is not so considerable as that one man can thereupon claim to himself any benefit to which another may not pretend as well as he.</p>
          <p>For as to the strength of body, the weakest has strength enough to kill the strongest, either by secret machination or by confederacy with others that are in the same danger with himself.</p>
        `
            },
            {
                id: "chapter-14",
                title: "Chapter 14: Of the First and Second Natural Laws",
                content: `
          <p>The right of nature, which writers commonly call jus naturale, is the liberty each man hath to use his own power as he will himself for the preservation of his own nature; that is to say, of his own life; and consequently, of doing anything which, in his own judgement and reason, he shall conceive to be the aptest means thereunto.</p>
        `
            }
        ]
    },
    {
        id: "9",
        slug: "communist-manifesto",
        title: "The Communist Manifesto",
        author: "Karl Marx & Friedrich Engels",
        description: "The Communist Manifesto, originally the Manifesto of the Communist Party, is an 1848 political pamphlet by the German philosophers Karl Marx and Friedrich Engels.",
        tags: ["Politics", "History", "Classic"],
        publishedYear: 1848,
        chapters: [
            {
                id: "chapter-1",
                title: "Chapter 1: Bourgeois and Proletarians",
                content: `
          <p>A spectre is haunting Europe — the spectre of communism. All the powers of old Europe have entered into a holy alliance to exorcise this spectre: Pope and Tsar, Metternich and Guizot, French Radicals and German police-spies.</p>
          <p>Where is the party in opposition that has not been decried as communistic by its opponents in power? Where is the opposition that has not hurled back the branding reproach of communism, against the more advanced opposition parties, as well as against its reactionary adversaries?</p>
        `
            },
            {
                id: "chapter-2",
                title: "Chapter 2: Proletarians and Communists",
                content: `
          <p>In what relation do the Communists stand to the proletarians as a whole? The Communists do not form a separate party opposed to the other working-class parties. They have no interests separate and apart from those of the proletariat as a whole.</p>
          <p>They do not set up any sectarian principles of their own, by which to shape and mould the proletarian movement.</p>
        `
            }
        ]
    }
];
