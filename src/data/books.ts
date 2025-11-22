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
    coverImage?: string;
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
        coverImage: "/images/covers/the-republic.png",
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
        coverImage: "/images/covers/meditations.png",
        chapters: [
            {
                id: "chapter-1",
                title: "Chapter 1 — Gratitude & the Foundations of Character",
                content: `
          <p>Meditations begins with something surprisingly humble: Marcus Aurelius, the emperor of Rome, writing a long list of people he is grateful to. At first glance, it feels like a simple collection of thank-yous, but it is actually a profound philosophical exercise. Marcus is reminding himself that nothing about his character is entirely self-made. Every part of who he is — his restraint, compassion, rationality, discipline — was shaped by others long before he ever sat on a throne. Gratitude, for him, is a way to shrink the ego and return to the truth that wisdom is inherited, not invented.</p>
          <p>He starts with his family, noting the virtues he internalized: from his grandfather, a sense of calm and dignity; from his father, simplicity and a focus on integrity; from his mother, humility and generosity. These are not dramatic traits — they’re quiet ones. Yet Marcus praises them as the foundation for everything he later became. This reveals a central Stoic idea: character is built from ordinary virtues practiced consistently, not from heroic actions or big moments.</p>
          <p>Marcus also reflects on the teachers and philosophers he learned from. They taught him how to live rationally, how to question his impulses, and how to value honesty above flattery. One mentor taught him not to be carried away by passion; another taught him the importance of stepping back, looking at things from a broader perspective, and remembering how small human concerns really are. These influences are the early seeds of his later meditations on calmness, clarity, and self-control.</p>
          <p>What makes this chapter powerful is the way Marcus treats gratitude as discipline. He doesn’t thank people in a sentimental way — he does it to remind himself that he owes a debt to others. This is a very Stoic technique: if you recognize how many people contributed to your life, arrogance becomes impossible. Gratitude pulls the mind back to humility, which in Stoicism is seen not as weakness, but as the foundation for clear judgment.</p>
          <p>This mindset also frames Marcus's broader worldview: the idea that humans are interconnected. He sees himself not as a solitary figure in history, but as one link in a chain. The virtues he practices are passed down, preserved, and refined across generations. By acknowledging this lineage, Marcus places himself in a long philosophical tradition — one in which wisdom is a communal project, not an individual achievement.</p>
          <p>Even as emperor, he refuses to imagine that his power elevates him above basic human responsibilities. In fact, the gratitude chapter subtly rebukes the idea of divine entitlement. His authority, he implies, comes with weight and responsibility, not superiority. The people who shaped him were guides, not servants; he is a student of life, not its master.</p>
          <p>The chapter also reveals Marcus as someone constantly correcting himself. He writes these reflections not to teach others but to discipline his own mind. The gratitude list functions like a moral blueprint: “Remember what they taught you; return to these virtues; do not drift.” In this sense, the chapter is not merely about appreciation — it's about alignment. Marcus is aligning himself with the values he admires so he can practice them deliberately.</p>
          <p>Finally, this opening chapter sets the tone for the entire book. Meditations is not a polished philosophical treatise; it's a personal manual for becoming a better human being. And the first step, Marcus insists, is remembering the good in others. Gratitude becomes the soil in which all other Stoic virtues grow — humility, acceptance, clarity, self-control, justice. By starting with gratitude, Marcus humbles himself before he begins the harder work of examining his mind and confronting his flaws.</p>
        `
            },
            {
                id: "chapter-2",
                title: "Chapter 2 — The Inner Citadel: Mastery of the Mind",
                content: `
          <p>One of the strongest and most recurring themes in Meditations is Marcus Aurelius’ belief that the mind is a fortress — an “inner citadel” that cannot be breached unless we allow it. For Marcus, mastery of the mind is the foundation of freedom. External events — war, politics, betrayal, sickness, loss — are largely outside our control. But how we interpret and respond to them is entirely ours. This distinction is crucial. Stoicism does not ask us to suppress emotion or pretend that life is easy; it teaches us to examine our impressions, challenge our automatic reactions, and maintain inner stability even when the world becomes turbulent.</p>
          <p>Marcus frequently writes reminders to himself to pause and observe his thoughts before acting. He recognizes that emotions arrive quickly, often disguised as truth. Anger feels justified in the moment, fear feels reasonable, desire feels natural. But Marcus warns himself that these impulses can mislead. The mind must become a filter, not a sponge — absorbing only what aligns with reason and virtue, letting everything else pass through. This habit of questioning impressions is the core of Stoic mental discipline. It allows a person to remain calm not because life is gentle, but because clarity protects them from being swept away.</p>
          <p>He also emphasizes the difference between what happens to us and what we tell ourselves about what happens. Stoics believe suffering is often amplified — or even created — by our judgments. A rude comment, for instance, is only harmful if we interpret it as an insult. Failure only becomes devastating if we frame it as proof that we are inadequate. Marcus continually reminds himself that events have no inherent emotional charge; we supply the meaning, and with awareness, we can choose different interpretations. This doesn’t eliminate difficulty, but it removes unnecessary torment.</p>
          <p>A key part of mastering the mind, according to Marcus, is accepting that the world is full of unpredictability. No matter how rational or virtuous you are, people will behave irrationally, fate will intervene, and outcomes will defy your expectations. Instead of resisting this unpredictability, Marcus advises adapting to it. Flexibility becomes a form of strength. The mind should be structured enough to stay disciplined, yet flexible enough to adjust without breaking. This balance is what protects the inner citadel from being shaken by external storms.</p>
          <p>Another essential element is self-awareness. Marcus constantly urges himself to observe his own thoughts without judgment — not to punish himself, but to understand his tendencies. He notes when he becomes irritated, when he seeks praise, or when he drifts into laziness. This self-monitoring is not harsh but honest. He treats it like physical training for the mind. Just as the body becomes strong through repetition, the mind becomes resilient through repeated correction. Marcus doesn’t expect perfection; he expects effort and sincerity.</p>
          <p>He also recognizes that inner mastery is not about detaching from life or isolating oneself emotionally. Stoicism often gets misinterpreted as emotional numbness, but Marcus rejects that idea. He believes that true mental strength makes a person more compassionate, not less. A calm and rational mind can listen deeply, forgive easily, and understand others’ motives without taking everything personally. When the mind is steady, empathy becomes easier because the ego is quieter. You are no longer reacting from insecurity or fear.</p>
          <p>Yet Marcus knows that developing this mental fortress is lifelong work. He writes in Meditations as if he is constantly failing and constantly correcting himself. He scolds himself for being irritated, for losing focus, for getting swept up by desire or vanity. But these moments reveal something important: even an emperor is a student of his own mind. Mastery is not a destination but a practice. The goal is not to eliminate flaws but to confront them with honesty and patience, strengthening the mind with every attempt.</p>
          <p>The inner citadel also connects to Marcus’s belief in autonomy. External power, wealth, reputation, and status can be taken away in an instant. But the ability to choose your thoughts cannot be taken — unless you surrender it. This makes the mind the only true domain where freedom is absolute. By cultivating inner sovereignty, Marcus protects the only part of himself that fate cannot touch. This is why he values mental discipline above all other achievements.</p>
          <p>Finally, the chapter’s deeper message is subtle but profound: the world may be chaotic, but peace is possible internally. Mastery of the mind is not about controlling life — it’s about controlling the lens through which you experience it. By strengthening the inner citadel, Marcus finds stability in a position that would otherwise be overwhelming. His reflections remind us that while we cannot stop the storms outside, we can create a place inside ourselves that remains steady, clear, and unshaken.</p>
        `
            },
            {
                id: "chapter-3",
                title: "Chapter 3 — Impermanence, Mortality & the Nature of Time",
                content: `
          <p>If there is one theme Marcus Aurelius returns to more than any other, it is the constant and unavoidable flow of time. He writes repeatedly about impermanence — not with fear, but with a calm acceptance that everything changes, everything fades, and everything eventually dissolves into the vast continuity of the universe. For Marcus, reflecting on mortality is not morbid; it is clarifying. It strips away illusions, exposes what really matters, and prevents the mind from getting lost in trivial concerns. By remembering death, he learns to live fully.</p>
          <p>Marcus uses vivid examples to remind himself of transience. He notes how past emperors, once feared and admired, are now little more than names in dusty histories. Great philosophers, military heroes, artists, and kings have been forgotten. Their triumphs, their reputations, their pride — all have vanished. Even the people who remembered them have vanished. This perspective humbles him deeply. If the world forgets even those who shaped empires, how meaningless it is to chase praise or recognition. Fame is a fragile, temporary illusion; virtue, on the other hand, is timeless.</p>
          <p>He also uses impermanence as a tool to manage anxiety. When he feels overwhelmed, Marcus reminds himself that every distress will eventually fade. Pain weakens over time, conflict resolves or becomes irrelevant, and emotional wounds heal. He reduces problems to smaller pieces — a technique that anticipates modern cognitive therapy. A difficult moment, when broken down, becomes just a sequence of sensations or thoughts happening in the present, not an eternal burden. By shrinking problems down to their immediate components, Marcus takes away their power to terrify him.</p>
          <p>Mortality also teaches him urgency. “Do not act as if you had ten thousand years to live,” he warns himself. Time is slipping away every second, whether you pay attention to it or not. This does not make him rush, but it does make him selective. He becomes protective about where he puts his mental and emotional energy. Petty arguments, vanity, distractions — these are things a person wastes life on without noticing. Marcus encourages himself to live deliberately: to speak only what is necessary, to help others whenever possible, and to act according to his principles rather than habit.</p>
          <p>Another key aspect of Marcus’s reflections on impermanence is his view that everything in the universe is part of a natural cycle. Life emerges, grows, decays, and transforms — and this is not tragedy but nature. Just as leaves fall to feed the soil for future growth, human lives end so new lives can begin. Thinking this way dissolves the fear of death. Marcus sees himself not as an isolated individual struggling against fate but as a participant in a cosmic process that has been unfolding for eternity. Death is not an interruption but a continuation of nature’s rhythm.</p>
          <p>He also examines the concept of the present moment. Past and future, he notes, exist only in thought — they cannot be touched or changed. The only real moment is now. Yet humans spend so much time lost in regret or fear that they miss life itself. Marcus urges himself to inhabit the present fully, performing each action with clarity and purpose, without being distracted by imagined futures or replayed memories. This is one of the most modern-feeling insights in the entire book: anxiety thrives in the future, guilt thrives in the past, but peace lives in the present.</p>
          <p>Marcus further reflects on the insignificance of human worries when viewed through the lens of time. He often zooms out mentally — imagining the vastness of the universe, the endless cycles of history, the countless generations before him. His personal troubles shrink instantly under this cosmic scale. Conflicts at court, political pressure, daily frustrations — all become irrelevant in the face of eternity. This perspective does not make him indifferent; it makes him wise. It helps him decide what is worthy of emotional investment and what can be let go.</p>
          <p>Most importantly, Marcus uses the awareness of mortality to reinforce virtue. Since life is short, he concludes, the only sensible way to live is with integrity, compassion, and clarity. Death makes virtue urgent. You cannot control how long you live, but you can control how you live while you’re here. He reminds himself not to delay moral improvement: “You could leave life right now. Let that determine what you do and say and think.” This is not meant to frighten him but to steady him — to push him toward a life that would be worth ending at any moment.</p>
          <p>In the end, Marcus’s reflections on impermanence create a paradoxical kind of peace. By accepting that everything changes, he eliminates the fear of change. By accepting that life ends, he learns to value each day. By accepting that time is limited, he becomes more present, more authentic, and more intentional. Impermanence, for Marcus, is not a problem to be solved but a truth to be embraced — a guide that leads him to humility, clarity, and a deeper appreciation for the fleeting beauty of existence.</p>
        `
            },
            {
                id: "chapter-4",
                title: "Chapter 4 — Duty, Work, and the Discipline of Action",
                content: `
          <p>Marcus frequently scolds himself to get up, work, and fulfill his responsibilities. Even though he is emperor, he tells himself: “You were born to do your duty, not to indulge in comfort.”</p>
          <p>Work is sacred because it aligns humans with their purpose — to contribute to the community and to the natural order. He rejects laziness, resentment, or longing for ease. Even distasteful tasks should be completed without complaint, because duty is not about pleasure but integrity.</p>
          <p>He reminds himself to act justly, fairly, and calmly, especially in leadership. The value of action is not the outcome but the intention behind it.</p>
        `
            },
            {
                id: "chapter-5",
                title: "Chapter 5 — Living in Accordance with Nature & Universal Reason",
                content: `
          <p>Stoicism teaches that the universe is rational and interconnected. Marcus sees himself as one small part of a larger whole.</p>
          <p>Thus, he must accept events as natural — even painful ones — because they fit into a cosmic order he cannot fully understand. When something unwanted happens, Marcus reframes it: “If it is part of nature, then it is good in its own way.”</p>
          <p>He emphasizes simplicity, cooperation, and acceptance. Humans must not fight reality; instead, we should work with it gracefully. Living according to nature also means avoiding excess, vanity, and selfishness.</p>
        `
            },
            {
                id: "chapter-6",
                title: "Chapter 6 — Emotion: Pain, Anger, and the Practice of Compassion",
                content: `
          <p>Here Marcus shows his humanity. He struggles with anger toward corrupt people, incompetent officials, and difficult generals. But every time, he pulls himself back to compassion:</p>
          <p>People act wrongly out of ignorance, not evil.</p>
          <p>Anger only harms the person feeling it.</p>
          <p>Pain becomes tolerable when reduced to its physical components.</p>
          <p>He tells himself to observe emotions, not obey them. He also repeats the Stoic belief that you cannot be harmed internally unless you allow it. Insults, betrayal, or disrespect only wound you if you interpret them as wounds.</p>
        `
            },
            {
                id: "chapter-7",
                title: "Chapter 7 — Virtue: The Only True Good",
                content: `
          <p>Marcus repeats this idea like a mantra: External things — wealth, reputation, status, beauty, comfort — are neutral. Only virtue determines a good or bad life.</p>
          <p>He points to four core virtues:</p>
          <p>Wisdom (clear judgment)</p>
          <p>Justice (fairness and integrity)</p>
          <p>Courage (strength in adversity)</p>
          <p>Temperance (self-control and balance)</p>
          <p>Possessing these makes you unshakeable, regardless of your circumstances. Virtue is the only part of life fully under your control and therefore the only thing worth prioritizing.</p>
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
        coverImage: "/images/covers/beyond-good-and-evil.png",
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
        description: "Machiavelli's 16th-century political treatise on how to acquire and maintain political power, often associated with the term 'Machiavellian'.",
        tags: ["Politics", "Philosophy", "Classic"],
        publishedYear: 1532,
        coverImage: "/images/covers/the-prince.png",
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
        description: "An ancient Chinese military treatise dating from the Late Spring and Autumn Period, attributed to the ancient Chinese military strategist Sun Tzu.",
        tags: ["Strategy", "Philosophy", "Classic"],
        publishedYear: -500,
        coverImage: "/images/covers/art-of-war.png",
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
        description: "A fundamental text for both philosophical and religious Taoism, strongly influencing other schools of Chinese philosophy and religion.",
        tags: ["Philosophy", "Spirituality", "Classic"],
        publishedYear: -400,
        coverImage: "/images/covers/tao-te-ching.png",
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
        description: "Kant's primary work, aimed at determining the limits and scope of metaphysics, often considered the culmination of early modern philosophy.",
        tags: ["Philosophy", "Epistemology", "Classic"],
        publishedYear: 1781,
        coverImage: "/images/covers/critique-of-pure-reason.png",
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
        description: "Hobbes's most famous work, which concerns the structure of society and legitimate government, and is regarded as one of the earliest and most influential examples of social contract theory.",
        tags: ["Politics", "Philosophy", "Classic"],
        publishedYear: 1651,
        coverImage: "/images/covers/leviathan.png",
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
        description: "A political pamphlet by German philosophers Karl Marx and Friedrich Engels, commissioning the Communist League and presenting an analytical approach to the class struggle.",
        tags: ["Politics", "Philosophy", "Classic"],
        publishedYear: 1848,
        coverImage: "/images/covers/communist-manifesto.png",
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
