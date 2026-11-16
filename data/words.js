// Your word database. Edit this file (or send me new words and I will add them).
// Each word needs: word, pos, definition, example.
// Optional: person (who does it), verb / noun (related forms, used in form questions), pron (pronunciation), synonyms (confusable words, kept out of each other's wrong answers), collocations, cloze (a sentence with ____ where the word goes).
// tone: positive, negative or mixed (for describing people).
// level: easy, neutral or academic. replaces: plain words this one can replace.
// topics: one or more of the names in TOPICS_DATA below (no topic = general).
// Tip: write the example using the exact headword form (e.g. "mitigate", not "mitigated"),
// or add a "cloze" field, so the fill-in-the-blank questions work.
// Topic names you can pick from in the quiz. "general" is for powerful words that fit anywhere.
window.TOPICS_DATA = ["ecology", "globalization", "international marketing", "free speech", "crime", "common law/civil law", "law systems", "crime and punishment", "charts", "general", "conversational", "leadership", "types of people", "renewable energy", "art history", "elections", "nature vs nurture", "process description"];

window.WORDS_DATA = [
  {
    "word": "abduction",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "taking someone away by force, demanding money for their safe return",
    "example": "Police are investigating the abduction of a child from a playground.",
    "synonyms": [
      "kidnapping"
    ]
  },
  {
    "word": "arson",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "setting fire to a building, cars or property on purpose",
    "example": "The fire at the warehouse was ruled arson.",
    "person": "arsonist"
  },
  {
    "word": "assassination",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "killing a famous person or public figure",
    "example": "The assassination of the president shocked the whole country.",
    "person": "assassin",
    "synonyms": [
      "murder",
      "homicide"
    ]
  },
  {
    "word": "assault",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "a threat or attempt to strike someone, or attacking someone physically",
    "example": "He was charged with assault after the fight outside the bar.",
    "person": "assailant",
    "synonyms": [
      "battery"
    ]
  },
  {
    "word": "bigamy",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "marrying someone when you are already married to another person",
    "example": "She was jailed for bigamy after marrying a second husband.",
    "person": "bigamist"
  },
  {
    "word": "blackmail",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "threatening to reveal someone's secrets if a lot of money is not paid",
    "example": "The politician was a victim of blackmail over an old scandal.",
    "person": "blackmailer",
    "synonyms": [
      "extortion"
    ]
  },
  {
    "word": "bombing",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "detonating an explosive device with the plan of harming people or property",
    "example": "The bombing destroyed part of the railway station.",
    "person": "bomber"
  },
  {
    "word": "bribery",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "giving money or granting favors to influence another person's decisions or behavior",
    "example": "The inspector was fired for bribery.",
    "person": "briber",
    "synonyms": [
      "corruption"
    ]
  },
  {
    "word": "burglary",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "breaking into a house in order to steal something",
    "example": "The burglary happened while the family was on holiday.",
    "person": "burglar",
    "synonyms": [
      "theft",
      "robbery"
    ]
  },
  {
    "word": "child abuse",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "treating a child badly in a physical, emotional, or sexual way",
    "example": "Teachers must report any suspected child abuse.",
    "person": "child abuser"
  },
  {
    "word": "corruption",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "behaving illegally and dishonestly, especially those in power",
    "example": "The mayor resigned amid accusations of corruption.",
    "synonyms": [
      "bribery"
    ]
  },
  {
    "word": "crime",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "doing something illegal that can be punished by law",
    "example": "Crime in the city has fallen over the last decade.",
    "person": "criminal"
  },
  {
    "word": "cybercrime",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "doing something illegal over the Internet or a computer system",
    "example": "Cybercrime costs businesses billions every year.",
    "person": "hacker",
    "synonyms": [
      "identity theft"
    ]
  },
  {
    "word": "domestic violence",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "behaving violently inside the home",
    "example": "The charity offers shelter to victims of domestic violence."
  },
  {
    "word": "drunk driving",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "driving with too much alcohol in your blood",
    "example": "He lost his licence after a conviction for drunk driving.",
    "person": "drunk driver"
  },
  {
    "word": "embezzlement",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "stealing money that belongs to an organisation that you work for, often over a period of time",
    "example": "The accountant was convicted of embezzlement after taking funds from the charity.",
    "person": "embezzler",
    "synonyms": [
      "theft",
      "fraud"
    ],
    "verb": "embezzle",
    "collocations": [
      "commit embezzlement",
      "embezzle funds"
    ]
  },
  {
    "word": "espionage",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "spying, to obtain political or military information",
    "example": "He was arrested on charges of espionage.",
    "person": "spy",
    "synonyms": [
      "treason"
    ]
  },
  {
    "word": "forgery",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "illegally copying documents, money, etc. to cheat people",
    "example": "The painting turned out to be a forgery.",
    "person": "forger",
    "synonyms": [
      "fraud"
    ]
  },
  {
    "word": "fraud",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "getting money from people by cheating them",
    "example": "The company director was jailed for fraud.",
    "person": "con artist",
    "synonyms": [
      "forgery",
      "racketeering"
    ]
  },
  {
    "word": "genocide",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "killing on purpose a large number of people, especially from a particular group or area",
    "example": "The court tried the leaders for genocide.",
    "synonyms": [
      "homicide",
      "murder"
    ]
  },
  {
    "word": "hijacking",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "taking control of a plane, train etc. by force, often to meet political demands",
    "example": "The hijacking ended when the passengers were released.",
    "person": "hijacker"
  },
  {
    "word": "hit and run",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "not stopping to help a person hurt in an accident caused by you",
    "example": "The driver was arrested for a hit and run that injured a cyclist."
  },
  {
    "word": "homicide",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "killing another person on purpose",
    "example": "The detective was assigned to the homicide case.",
    "synonyms": [
      "murder",
      "manslaughter",
      "assassination"
    ]
  },
  {
    "word": "hooliganism",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "being violent or aggressive on purpose, often used to describe youth",
    "example": "Football hooliganism led to several arrests last weekend.",
    "person": "hooligan",
    "synonyms": [
      "affray",
      "riot"
    ]
  },
  {
    "word": "identity theft",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "using someone else's personal information for one's own gain",
    "example": "Shred your bills to protect yourself from identity theft.",
    "synonyms": [
      "fraud",
      "cybercrime"
    ]
  },
  {
    "word": "kidnapping",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "taking someone away by force, often demanding money for their safe return",
    "example": "The kidnapping of the businessman made headlines worldwide.",
    "person": "kidnapper",
    "synonyms": [
      "abduction"
    ]
  },
  {
    "word": "libel",
    "pos": "noun",
    "topics": [
      "crime",
      "free speech"
    ],
    "definition": "damaging someone's reputation by writing lies about them",
    "example": "The newspaper was sued for libel.",
    "synonyms": [
      "slander"
    ]
  },
  {
    "word": "looting",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "taking things illegally and by force, during a riot, war, etc.",
    "example": "Shops were damaged and there was widespread looting after the storm.",
    "person": "looter",
    "synonyms": [
      "riot"
    ]
  },
  {
    "word": "lynching",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "killing someone without legal process, often by hanging, often by an angry mob",
    "example": "The historian wrote about lynching in the early twentieth century.",
    "synonyms": [
      "murder"
    ]
  },
  {
    "word": "manslaughter",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "killing someone by accident, or unlawfully without forethought or malice",
    "example": "He was convicted of manslaughter, not murder.",
    "synonyms": [
      "murder",
      "homicide"
    ]
  },
  {
    "word": "mugging",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "attacking someone with a plan to rob them, in a public place",
    "example": "Muggings are more common in poorly lit streets.",
    "person": "mugger",
    "synonyms": [
      "robbery"
    ]
  },
  {
    "word": "murder",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "killing someone on purpose",
    "example": "The suspect was charged with murder.",
    "person": "murderer",
    "synonyms": [
      "homicide",
      "manslaughter",
      "assassination"
    ]
  },
  {
    "word": "perjury",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "lying in court, while under oath",
    "example": "The witness was prosecuted for perjury.",
    "verb": "commit perjury",
    "person": "perjurer",
    "collocations": [
      "commit perjury",
      "charged with perjury"
    ]
  },
  {
    "word": "pickpocketing",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "stealing wallets, money, etc. from people's pockets in crowded places",
    "example": "Pickpocketing is common on crowded trams.",
    "person": "pickpocketer",
    "synonyms": [
      "theft"
    ]
  },
  {
    "word": "pilfering",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "stealing small quantities of goods over time",
    "example": "The manager noticed pilfering from the stockroom.",
    "synonyms": [
      "theft",
      "shoplifting"
    ]
  },
  {
    "word": "poaching",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "hunting illegally",
    "example": "Poaching has pushed the rhino to the edge of extinction.",
    "person": "poacher"
  },
  {
    "word": "rape",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "forcing someone to have sex",
    "example": "Rape is a serious crime punished with long prison sentences.",
    "person": "rapist"
  },
  {
    "word": "riot",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "causing a noisy, violent public disturbance",
    "example": "The decision sparked a riot in the city centre.",
    "person": "rioter",
    "synonyms": [
      "hooliganism",
      "affray",
      "looting"
    ]
  },
  {
    "word": "robbery",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "stealing large amounts of money with force or violence from a bank, store, etc., or from a person under threat",
    "example": "The bank robbery was over in less than three minutes.",
    "person": "robber",
    "synonyms": [
      "mugging",
      "theft",
      "burglary"
    ]
  },
  {
    "word": "shoplifting",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "stealing something from a store",
    "example": "Shoplifting costs retailers a lot of money.",
    "person": "shoplifter",
    "synonyms": [
      "theft",
      "pilfering"
    ]
  },
  {
    "word": "slander",
    "pos": "noun",
    "topics": [
      "crime",
      "free speech"
    ],
    "definition": "damaging someone's reputation by speaking lies about them",
    "example": "He sued his neighbour for slander.",
    "synonyms": [
      "libel"
    ]
  },
  {
    "word": "smuggling",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "taking things secretly in or out of a place, country, jail, etc.",
    "example": "Customs officers caught him smuggling cigarettes.",
    "person": "smuggler",
    "synonyms": [
      "trafficking"
    ]
  },
  {
    "word": "speeding",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "driving above the speed limit",
    "example": "She was fined for speeding on the motorway."
  },
  {
    "word": "terrorism",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "using violence, threats, or fear, usually for political purposes",
    "example": "The government introduced new laws to fight terrorism.",
    "person": "terrorist"
  },
  {
    "word": "theft",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "stealing, in general",
    "example": "The theft of the laptop was reported to the police.",
    "person": "thief",
    "synonyms": [
      "burglary",
      "robbery",
      "pilfering",
      "shoplifting",
      "pickpocketing",
      "embezzlement"
    ]
  },
  {
    "word": "trafficking",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "trading something illegal like drugs, people, etc.",
    "example": "Trafficking in drugs carries a heavy sentence.",
    "synonyms": [
      "smuggling"
    ]
  },
  {
    "word": "treason",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "betraying one's country by helping its enemies",
    "example": "He was executed for treason.",
    "person": "traitor",
    "synonyms": [
      "espionage"
    ]
  },
  {
    "word": "trespassing",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "going onto someone else's land without permission",
    "example": "A sign warned that trespassing was forbidden.",
    "person": "trespasser",
    "verb": "trespass"
  },
  {
    "word": "vandalism",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "destroying private or public property purposely",
    "example": "The bus shelter was ruined by vandalism.",
    "person": "vandal"
  },
  {
    "word": "voyeurism",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "secretly watching naked people or sexual acts and getting sexually excited",
    "example": "He was prosecuted for voyeurism after filming neighbours.",
    "person": "voyeur"
  },
  {
    "word": "affray",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "fighting in a public place",
    "example": "Three men were arrested for affray outside the club.",
    "synonyms": [
      "hooliganism",
      "riot"
    ]
  },
  {
    "word": "battery",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "the striking of a person with intent to do them harm",
    "example": "He faces charges of assault and battery.",
    "synonyms": [
      "assault"
    ]
  },
  {
    "word": "extortion",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "obtaining money or something else by abusing your power",
    "example": "The officer was accused of extortion for demanding payment from shopkeepers.",
    "synonyms": [
      "blackmail",
      "bribery"
    ]
  },
  {
    "word": "gerrymandering",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "dividing a voting area so as to give one party an unfair advantage",
    "example": "Critics say gerrymandering lets politicians choose their voters."
  },
  {
    "word": "harassment",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "putting undue pressure on someone, e.g. for sexual reasons or to get a debt repaid; repeatedly troubling or tormenting another person",
    "example": "She filed a complaint about sexual harassment at work.",
    "synonyms": [
      "stalking"
    ],
    "verb": "harass",
    "collocations": [
      "sexual harassment",
      "harass someone"
    ]
  },
  {
    "word": "money laundering",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "moving money obtained illegally so that its origin cannot be traced",
    "example": "The bank was fined for failing to stop money laundering.",
    "synonyms": [
      "fraud"
    ],
    "verb": "launder money",
    "person": "money launderer",
    "collocations": [
      "launder money",
      "money laundering scheme"
    ]
  },
  {
    "word": "petty crime",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "not very serious crime",
    "example": "Petty crime such as littering is often punished with a fine."
  },
  {
    "word": "racketeering",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "involvement in a dishonest scheme to trick people",
    "example": "The gang boss was convicted of racketeering.",
    "synonyms": [
      "fraud",
      "extortion"
    ]
  },
  {
    "word": "stalking",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "following someone around persistently or giving them unwanted or obsessive attention",
    "example": "He was arrested for stalking his former girlfriend.",
    "synonyms": [
      "harassment"
    ],
    "verb": "stalk",
    "person": "stalker"
  },
  {
    "word": "bend the law",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "definition": "to break the law or rules in a way that is considered not to be very harmful",
    "example": "Some firms bend the law to avoid paying extra tax.",
    "synonyms": [
      "contravene",
      "infringe"
    ]
  },
  {
    "word": "contravene",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "definition": "to break a law",
    "example": "Selling customer data this way would contravene privacy law.",
    "noun": "contravention",
    "synonyms": [
      "infringe",
      "bend the law"
    ]
  },
  {
    "word": "infringe",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "definition": "to break a law or rule",
    "example": "The company was accused of trying to infringe our copyright.",
    "noun": "infringement",
    "synonyms": [
      "contravene",
      "bend the law"
    ]
  },
  {
    "word": "impeach",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "definition": "to make a formal statement saying that a person in public office has committed a serious offence",
    "example": "Congress voted to impeach the governor.",
    "noun": "impeachment"
  },
  {
    "word": "lodge an appeal",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "definition": "to make an official request that a previous judgement should be changed",
    "example": "The defence plans to lodge an appeal next week.",
    "synonyms": [
      "uphold",
      "overturn",
      "quash"
    ]
  },
  {
    "word": "uphold",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "definition": "to say that a previous decision in court was correct",
    "example": "The appeal court voted to uphold the verdict.",
    "synonyms": [
      "overturn",
      "quash"
    ]
  },
  {
    "word": "overturn",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "definition": "to say that a previous decision in court was incorrect",
    "example": "A higher court may overturn the verdict.",
    "synonyms": [
      "uphold",
      "quash"
    ]
  },
  {
    "word": "pervert the course of justice",
    "pos": "verb",
    "topics": [
      "crime",
      "law systems"
    ],
    "definition": "to make it difficult for justice to be done",
    "example": "He was charged with attempting to pervert the course of justice.",
    "noun": "perversion"
  },
  {
    "word": "quash",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "definition": "to change a previous official decision that someone was guilty",
    "example": "The court agreed to quash the conviction.",
    "synonyms": [
      "overturn",
      "uphold",
      "override",
      "overrule",
      "repeal",
      "revoke"
    ]
  },
  {
    "word": "set a precedent",
    "pos": "verb",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "to establish a decision which must usually, in English law, be taken into account in future decisions",
    "example": "The ruling could set a precedent for similar cases."
  },
  {
    "word": "award custody",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "definition": "to give one parent or adult the main responsibility for a child, especially after separation or divorce (also: grant custody)",
    "example": "The court decided to award custody to the child's mother.",
    "synonyms": [
      "grant custody"
    ]
  },
  {
    "word": "annul",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "definition": "to declare that an agreement, marriage or law no longer exists and never existed",
    "example": "A judge can annul a marriage that was never valid.",
    "noun": "annulment",
    "synonyms": [
      "override",
      "overrule",
      "repeal",
      "revoke"
    ]
  },
  {
    "word": "sue",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "definition": "to take legal action against someone",
    "example": "She plans to sue the airline for the lost luggage.",
    "synonyms": [
      "lawsuit",
      "litigation"
    ]
  },
  {
    "word": "allege",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "definition": "to say that someone has done something illegal without giving proof",
    "example": "Witnesses allege that the manager took bribes.",
    "noun": "allegation",
    "pron": "/əˈledʒ/"
  },
  {
    "word": "amend",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "definition": "to make changes to a law",
    "example": "Parliament voted to amend the law on data protection.",
    "noun": "amendment"
  },
  {
    "word": "discrimination",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "unfair treatment on grounds of sex, race or nationality",
    "example": "The new law bans discrimination in hiring.",
    "verb": "discriminate against",
    "collocations": [
      "discriminate against"
    ],
    "synonyms": [
      "harassment"
    ]
  },
  {
    "word": "insider trading",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "illegal buying and selling of shares by someone who has specialist knowledge of a company",
    "example": "The banker was jailed for insider trading.",
    "verb": "practise insider trading",
    "person": "insider trader",
    "collocations": [
      "practise insider trading",
      "insider dealing"
    ],
    "synonyms": [
      "fraud",
      "money laundering"
    ]
  },
  {
    "word": "law-abiding",
    "pos": "adjective",
    "topics": [
      "law systems"
    ],
    "definition": "always obeying the law",
    "example": "Most law-abiding citizens never meet a police officer.",
    "synonyms": [
      "law-breaker"
    ]
  },
  {
    "word": "law-breaker",
    "pos": "noun",
    "topics": [
      "law systems",
      "crime"
    ],
    "definition": "someone who often and deliberately does not obey the law",
    "example": "The town treated every law-breaker as a threat.",
    "synonyms": [
      "law-abiding"
    ]
  },
  {
    "word": "take the law into your own hands",
    "pos": "idiom",
    "topics": [
      "law systems"
    ],
    "definition": "to do something illegal to punish someone because you feel the legal system will not punish that person",
    "example": "Police warned residents not to take the law into their own hands after the break-ins.",
    "cloze": "Police warned residents not to ____ after the break-ins.",
    "synonyms": [
      "lay down the law"
    ]
  },
  {
    "word": "lay down the law",
    "pos": "idiom",
    "topics": [
      "law systems"
    ],
    "definition": "to say with great force what you think should happen",
    "example": "My manager likes to lay down the law at every meeting.",
    "synonyms": [
      "take the law into your own hands"
    ]
  },
  {
    "word": "a law unto himself",
    "pos": "idiom",
    "topics": [
      "law systems"
    ],
    "definition": "behaving in a way which is independent and not the way in which most other people behave (also: a law unto herself)",
    "example": "The director is a law unto himself and rarely listens to the board.",
    "cloze": "The director is ____ and rarely listens to the board."
  },
  {
    "word": "rise",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to go up in amount or level",
    "example": "Temperatures are expected to rise over the next decade.",
    "synonyms": [
      "soar",
      "surge",
      "rocket",
      "skyrocket",
      "leap",
      "climb",
      "increase"
    ]
  },
  {
    "word": "increase",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to become greater in number or amount",
    "example": "The company hopes to increase its sales by ten percent.",
    "synonyms": [
      "soar",
      "surge",
      "rocket",
      "skyrocket",
      "leap",
      "climb",
      "rise"
    ]
  },
  {
    "word": "climb",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to go up steadily, step by step",
    "example": "Unemployment began to climb in the spring.",
    "synonyms": [
      "soar",
      "surge",
      "rocket",
      "skyrocket",
      "leap",
      "rise",
      "increase"
    ]
  },
  {
    "word": "leap",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to jump suddenly to a much higher level",
    "example": "Profits could leap from two to nine million.",
    "synonyms": [
      "soar",
      "surge",
      "rocket",
      "skyrocket",
      "climb",
      "rise",
      "increase"
    ]
  },
  {
    "word": "soar",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to rise very quickly to a high level",
    "example": "Housing costs could soar if interest rates stay low.",
    "synonyms": [
      "surge",
      "rocket",
      "skyrocket",
      "leap",
      "climb",
      "rise",
      "increase"
    ]
  },
  {
    "word": "surge",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to rise suddenly and strongly, often after a quiet period",
    "example": "Online sales are likely to surge before the holidays.",
    "synonyms": [
      "soar",
      "rocket",
      "skyrocket",
      "leap",
      "climb",
      "rise",
      "increase"
    ]
  },
  {
    "word": "rocket",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to rise very fast and suddenly",
    "example": "Demand may rocket once the product goes viral.",
    "synonyms": [
      "soar",
      "surge",
      "skyrocket",
      "leap",
      "climb",
      "rise",
      "increase"
    ]
  },
  {
    "word": "skyrocket",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to rise to an extremely high level at great speed",
    "example": "Prices will skyrocket if supply is cut.",
    "synonyms": [
      "soar",
      "surge",
      "rocket",
      "leap",
      "climb",
      "rise",
      "increase"
    ]
  },
  {
    "word": "drop",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to fall to a lower level",
    "example": "Sales tend to drop in the summer.",
    "synonyms": [
      "plummet",
      "plunge",
      "collapse",
      "slump",
      "decline",
      "decrease",
      "dip",
      "depreciate",
      "sink to a trough",
      "bottom out"
    ]
  },
  {
    "word": "decrease",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to become smaller in number or amount",
    "example": "Efforts to decrease waste have been successful.",
    "synonyms": [
      "drop",
      "plummet",
      "plunge",
      "collapse",
      "slump",
      "decline",
      "dip",
      "depreciate",
      "sink to a trough",
      "bottom out"
    ]
  },
  {
    "word": "decline",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to fall gradually and steadily over time",
    "example": "Birth rates continue to decline in many countries.",
    "synonyms": [
      "drop",
      "plummet",
      "plunge",
      "collapse",
      "slump",
      "decrease",
      "dip",
      "depreciate",
      "sink to a trough",
      "bottom out"
    ]
  },
  {
    "word": "dip",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to fall slightly, usually for a short time",
    "example": "Profits may dip slightly in the second quarter.",
    "synonyms": [
      "drop",
      "plummet",
      "plunge",
      "collapse",
      "slump",
      "decline",
      "decrease",
      "depreciate",
      "sink to a trough",
      "bottom out"
    ]
  },
  {
    "word": "plummet",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to fall very fast and very far",
    "example": "Share prices may plummet after the scandal.",
    "synonyms": [
      "drop",
      "plunge",
      "collapse",
      "slump",
      "decline",
      "decrease",
      "dip",
      "depreciate",
      "sink to a trough",
      "bottom out"
    ]
  },
  {
    "word": "plunge",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to fall suddenly and steeply",
    "example": "The currency could plunge if the vote fails.",
    "synonyms": [
      "drop",
      "plummet",
      "collapse",
      "slump",
      "decline",
      "decrease",
      "dip",
      "depreciate",
      "sink to a trough",
      "bottom out"
    ]
  },
  {
    "word": "collapse",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to fall suddenly and completely",
    "example": "The market may collapse without government support.",
    "synonyms": [
      "drop",
      "plummet",
      "plunge",
      "slump",
      "decline",
      "decrease",
      "dip",
      "depreciate",
      "sink to a trough",
      "bottom out"
    ]
  },
  {
    "word": "slump",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to fall sharply and stay low, especially sales or prices",
    "example": "Car sales began to slump last winter.",
    "synonyms": [
      "drop",
      "plummet",
      "plunge",
      "collapse",
      "decline",
      "decrease",
      "dip",
      "depreciate",
      "sink to a trough",
      "bottom out"
    ]
  },
  {
    "word": "depreciate",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to lose value over time",
    "example": "New cars depreciate quickly in the first year.",
    "synonyms": [
      "drop",
      "plummet",
      "plunge",
      "collapse",
      "slump",
      "decline",
      "decrease",
      "dip",
      "sink to a trough",
      "bottom out"
    ]
  },
  {
    "word": "sink to a trough",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to fall to the lowest point of a cycle",
    "example": "Sales usually sink to a trough in January.",
    "synonyms": [
      "drop",
      "plummet",
      "plunge",
      "collapse",
      "slump",
      "decline",
      "decrease",
      "dip",
      "depreciate",
      "bottom out"
    ]
  },
  {
    "word": "bottom out",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to reach the lowest point before starting to recover",
    "example": "Analysts hope prices will bottom out soon.",
    "synonyms": [
      "drop",
      "plummet",
      "plunge",
      "collapse",
      "slump",
      "decline",
      "decrease",
      "dip",
      "depreciate",
      "sink to a trough"
    ]
  },
  {
    "word": "plateau",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to stop changing after a rise or fall and stay level",
    "example": "Growth is expected to plateau after the launch.",
    "synonyms": [
      "remain steady",
      "stabilise",
      "level off"
    ]
  },
  {
    "word": "remain steady",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to stay at about the same level",
    "example": "Unemployment is expected to remain steady next year.",
    "synonyms": [
      "plateau",
      "stabilise",
      "level off"
    ]
  },
  {
    "word": "stabilise",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to stop rising or falling and become steady",
    "example": "The exchange rate should stabilise by June.",
    "synonyms": [
      "plateau",
      "remain steady",
      "level off"
    ]
  },
  {
    "word": "level off",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to stop rising or falling and stay at one level",
    "example": "Growth should level off by next spring.",
    "synonyms": [
      "plateau",
      "remain steady",
      "stabilise"
    ]
  },
  {
    "word": "fluctuate",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to rise and fall repeatedly and unpredictably",
    "example": "Fuel prices fluctuate depending on supply and political tension.",
    "synonyms": [
      "undulate",
      "oscillate"
    ]
  },
  {
    "word": "undulate",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to rise and fall smoothly in a wave-like pattern",
    "example": "Sales tend to undulate across the seasons.",
    "synonyms": [
      "fluctuate",
      "oscillate"
    ]
  },
  {
    "word": "oscillate",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to move regularly back and forth between two levels",
    "example": "The rate seems to oscillate around two percent.",
    "synonyms": [
      "fluctuate",
      "undulate"
    ]
  },
  {
    "word": "halve",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to reduce something to half of its original amount",
    "example": "The new policy aims to halve emissions by 2030.",
    "synonyms": []
  },
  {
    "word": "reach a peak",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to hit the highest point",
    "example": "Sales tend to reach a peak in December.",
    "synonyms": [
      "zenith",
      "pinnacle"
    ]
  },
  {
    "word": "zenith",
    "pos": "noun",
    "topics": [
      "charts"
    ],
    "definition": "the highest point reached by something before it declines",
    "example": "The empire reached its zenith in the sixteenth century.",
    "synonyms": [
      "pinnacle",
      "reach a peak"
    ]
  },
  {
    "word": "pinnacle",
    "pos": "noun",
    "topics": [
      "charts"
    ],
    "definition": "the highest point of success or achievement",
    "example": "Winning the title was the pinnacle of her career.",
    "synonyms": [
      "zenith",
      "reach a peak"
    ]
  },
  {
    "word": "proportion",
    "pos": "noun",
    "topics": [
      "charts"
    ],
    "definition": "a part of a whole, usually shown as a fraction or percentage",
    "example": "A large proportion of the budget goes to rent."
  },
  {
    "word": "correlation",
    "pos": "noun",
    "topics": [
      "charts"
    ],
    "definition": "a link between two things in which a change in one goes with a change in the other",
    "example": "The chart shows a strong correlation between income and education.",
    "collocations": [
      "strong correlation",
      "a correlation between"
    ]
  },
  {
    "word": "outlier",
    "pos": "noun",
    "topics": [
      "charts"
    ],
    "definition": "a value that is very different from the others in a set of data",
    "example": "One outlier distorted the average."
  },
  {
    "word": "axis",
    "pos": "noun",
    "topics": [
      "charts"
    ],
    "definition": "a line on a graph along which values are measured",
    "example": "The horizontal axis shows the years."
  },
  {
    "word": "account for",
    "pos": "verb",
    "topics": [
      "charts"
    ],
    "definition": "to make up a certain part or percentage of a total",
    "example": "Students account for forty percent of the visitors."
  },
  {
    "word": "marginally",
    "pos": "adverb",
    "topics": [
      "charts"
    ],
    "definition": "by a very small amount",
    "example": "Exports rose only marginally last year."
  },
  {
    "word": "dramatically",
    "pos": "adverb",
    "topics": [
      "charts"
    ],
    "definition": "in a sudden and very noticeable way",
    "example": "Prices fell dramatically after the new law."
  },
  {
    "word": "gradually",
    "pos": "adverb",
    "topics": [
      "charts"
    ],
    "definition": "slowly and by small amounts over time",
    "example": "The population gradually increased."
  },
  {
    "word": "steadily",
    "pos": "adverb",
    "topics": [
      "charts"
    ],
    "definition": "at a regular, continuous rate",
    "example": "Sales have grown steadily since 2020."
  },
  {
    "word": "approximately",
    "pos": "adverb",
    "topics": [
      "charts"
    ],
    "definition": "close to a particular number or amount but not exact",
    "example": "Approximately half of the respondents agreed."
  },
  {
    "word": "misinformation",
    "pos": "noun",
    "topics": [
      "free speech",
      "general"
    ],
    "definition": "false or misleading information that is spread without intent to deceive, often through misunderstanding or carelessness",
    "example": "Misinformation spread quickly after the earthquake.",
    "synonyms": [
      "disinformation",
      "malinformation",
      "fabrication",
      "deception",
      "manipulation",
      "distortion",
      "incitement"
    ]
  },
  {
    "word": "disinformation",
    "pos": "noun",
    "topics": [
      "free speech",
      "general"
    ],
    "definition": "deliberately false information created and shared to deceive or manipulate public opinion",
    "example": "The campaign relied on disinformation to confuse voters.",
    "synonyms": [
      "misinformation",
      "malinformation",
      "fabrication",
      "deception",
      "manipulation",
      "distortion",
      "incitement"
    ]
  },
  {
    "word": "information ecosystem",
    "pos": "noun",
    "topics": [
      "free speech"
    ],
    "definition": "the network of media platforms, technologies and audiences through which information circulates and influences society",
    "example": "A healthy information ecosystem needs reliable sources."
  },
  {
    "word": "algorithmic amplification",
    "pos": "noun",
    "topics": [
      "free speech"
    ],
    "definition": "the process by which social-media algorithms automatically boost certain content, often because it attracts attention, regardless of accuracy",
    "example": "Algorithmic amplification can push extreme posts to millions of users."
  },
  {
    "word": "epistemic crisis",
    "pos": "noun",
    "topics": [
      "free speech"
    ],
    "definition": "a serious situation in which people can no longer agree on what is true or credible, undermining society's ability to make informed decisions",
    "example": "Some scholars warn of an epistemic crisis in modern democracies."
  },
  {
    "word": "virality",
    "pos": "noun",
    "topics": [
      "free speech"
    ],
    "definition": "the speed and scale at which content spreads across digital networks",
    "example": "The virality of the video surprised even its creator."
  },
  {
    "word": "distort perception",
    "pos": "verb",
    "topics": [
      "free speech"
    ],
    "definition": "to alter or misrepresent how people see reality, usually by presenting selective or emotional information",
    "example": "Selective headlines can distort perception of a news story."
  },
  {
    "word": "undermine trust",
    "pos": "verb",
    "topics": [
      "free speech"
    ],
    "definition": "to weaken people's confidence in institutions, experts, media or one another",
    "example": "Repeated lies can undermine trust in public institutions."
  },
  {
    "word": "cognitive vulnerability",
    "pos": "noun",
    "topics": [
      "free speech"
    ],
    "definition": "the mental tendency to believe persuasive or emotionally appealing information without checking whether it is true",
    "example": "Cognitive vulnerability makes people share rumours without thinking."
  },
  {
    "word": "critical literacy",
    "pos": "noun",
    "topics": [
      "free speech"
    ],
    "definition": "the ability to analyse, question and evaluate information for accuracy, bias and reliability before accepting it as true",
    "example": "Schools should teach critical literacy alongside reading and writing."
  },
  {
    "word": "digital authoritarianism",
    "pos": "noun",
    "topics": [
      "free speech"
    ],
    "definition": "the use of digital technologies by governments to control, censor or monitor citizens and manipulate online information",
    "example": "Critics call the new surveillance law digital authoritarianism."
  },
  {
    "word": "censorship",
    "pos": "noun",
    "topics": [
      "free speech",
      "general"
    ],
    "definition": "the official removal or blocking of speech, writing or media that is considered unacceptable",
    "example": "The film was banned under government censorship.",
    "synonyms": [
      "repression",
      "surveillance",
      "suppression"
    ],
    "collocations": [
      "draconian censorship",
      "widespread censorship"
    ]
  },
  {
    "word": "dissent",
    "pos": "noun",
    "topics": [
      "free speech",
      "general"
    ],
    "definition": "public disagreement with an official or widely held opinion",
    "example": "The regime does not tolerate dissent.",
    "synonyms": [
      "dissenting",
      "dissident"
    ]
  },
  {
    "word": "suppress",
    "pos": "verb",
    "topics": [
      "free speech",
      "general"
    ],
    "definition": "to prevent something from being seen, heard or known, often by force or authority",
    "example": "The government tried to suppress the report.",
    "synonyms": [
      "stifle",
      "curtail",
      "censor",
      "silence"
    ]
  },
  {
    "word": "incite",
    "pos": "verb",
    "topics": [
      "free speech"
    ],
    "definition": "to encourage people to behave violently or illegally",
    "example": "He was arrested for trying to incite a riot.",
    "noun": "incitement"
  },
  {
    "word": "defamation",
    "pos": "noun",
    "topics": [
      "free speech"
    ],
    "definition": "the act of damaging a person's reputation by false statements",
    "example": "The actor won his defamation case against the magazine.",
    "synonyms": [
      "libel",
      "slander"
    ]
  },
  {
    "word": "hate speech",
    "pos": "noun",
    "topics": [
      "free speech"
    ],
    "definition": "speech that attacks people because of their race, religion, gender or similar characteristics",
    "example": "Many countries make hate speech a criminal offence."
  },
  {
    "word": "hacking",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "gaining unauthorised access to computer systems or data",
    "example": "Hacking cost the retailer millions of pounds.",
    "person": "hacker"
  },
  {
    "word": "spamming",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "sending unwanted messages, often advertising, to large numbers of people",
    "example": "Spamming clogs inboxes and spreads viruses.",
    "person": "spammer"
  },
  {
    "word": "phishing",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "tricking people into giving passwords or bank details by pretending to be a trustworthy source",
    "example": "Phishing emails often copy the look of real banks.",
    "person": "phisher"
  },
  {
    "word": "cyberterrorism",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "using computer attacks to cause fear, disruption or harm for political purposes",
    "example": "Governments fear cyberterrorism against power grids.",
    "person": "cyberterrorist"
  },
  {
    "word": "malware",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "software designed to damage a computer or steal information from it",
    "example": "The attachment contained malware."
  },
  {
    "word": "ransomware",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "malware that locks a victim's files until money is paid",
    "example": "The hospital was crippled by ransomware."
  },
  {
    "word": "spyware",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "software that secretly collects information about a user's activity",
    "example": "Spyware tracked every key she typed."
  },
  {
    "word": "cyberbullying",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "using the internet or social media to harass, threaten or humiliate someone",
    "example": "Cyberbullying can follow a child home from school.",
    "person": "cyberbully"
  },
  {
    "word": "software piracy",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "copying or distributing software without permission or payment",
    "example": "Software piracy costs developers billions of dollars every year.",
    "person": "software pirate"
  },
  {
    "word": "cyberstalking",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "using the internet to follow, monitor or harass someone repeatedly",
    "example": "Cyberstalking can involve fake accounts and threatening messages.",
    "person": "cyberstalker"
  },
  {
    "word": "cyber extortion",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "demanding money from a victim by threatening to attack or expose their digital data",
    "example": "Cyber extortion often starts with a threatening email."
  },
  {
    "word": "cryptojacking",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "secretly using someone else's computer to mine cryptocurrency",
    "example": "Cryptojacking slows computers down and raises electricity bills."
  },
  {
    "word": "data breach",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "an incident in which private information is accessed or released without permission",
    "example": "A data breach exposed the details of millions of customers."
  },
  {
    "word": "unauthorised access",
    "pos": "noun",
    "topics": [
      "crime"
    ],
    "definition": "getting into a computer system or account without permission",
    "example": "The employee was fired for unauthorised access to payroll files."
  },
  {
    "word": "common law",
    "pos": "noun",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "law based on judges' decisions in earlier cases rather than only on written codes",
    "example": "England and the United States follow the common law tradition.",
    "synonyms": [
      "case law"
    ]
  },
  {
    "word": "civil law",
    "pos": "noun",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "a legal system based mainly on written codes and statutes",
    "example": "France and Germany have civil law systems.",
    "synonyms": [
      "statute"
    ]
  },
  {
    "word": "customary law",
    "pos": "noun",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "rules that a community follows because of long tradition rather than written legislation",
    "example": "Customary law still governs land use in some villages."
  },
  {
    "word": "hybrid legal system",
    "pos": "noun",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "a legal system that combines elements of two or more traditions, such as common law and religious law",
    "example": "South Africa is often described as a hybrid legal system."
  },
  {
    "word": "statute",
    "pos": "noun",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "a written law passed by a legislature",
    "example": "The statute came into force on the first of January.",
    "synonyms": [
      "civil law",
      "legislation",
      "statutory"
    ]
  },
  {
    "word": "case law",
    "pos": "noun",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "law formed by the decisions judges make in previous cases",
    "example": "Case law fills the gaps that legislation leaves.",
    "synonyms": [
      "common law"
    ]
  },
  {
    "word": "codified",
    "pos": "adjective",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "arranged into an organised written system of laws",
    "example": "Civil law is codified, while common law is largely uncodified."
  },
  {
    "word": "jurisdiction",
    "pos": "noun",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "the official power to make legal decisions, or the area in which that power applies",
    "example": "The court has no jurisdiction over foreign companies."
  },
  {
    "word": "adversarial",
    "pos": "adjective",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "describing a court system in which two opposing sides present their case to a neutral judge or jury",
    "example": "The adversarial system relies on lawyers to test the evidence.",
    "synonyms": [
      "inquisitorial"
    ]
  },
  {
    "word": "inquisitorial",
    "pos": "adjective",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "describing a court system in which the judge actively investigates the facts of the case",
    "example": "Many civil law countries use an inquisitorial system.",
    "synonyms": [
      "adversarial"
    ]
  },
  {
    "word": "judiciary",
    "pos": "noun",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "the judges of a country considered as a group, or the part of government that applies the law",
    "example": "An independent judiciary protects citizens from abuse of power.",
    "synonyms": [
      "legislation"
    ]
  },
  {
    "word": "legislation",
    "pos": "noun",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "laws considered as a group, or the process of making them",
    "example": "New legislation on data privacy will be introduced next year.",
    "synonyms": [
      "statute",
      "judiciary",
      "enact",
      "legislative",
      "statutory"
    ]
  },
  {
    "word": "precedent",
    "pos": "noun",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "an earlier court decision that is used as a guide in later, similar cases",
    "example": "The judge cited a precedent from 1998.",
    "synonyms": [
      "case law"
    ]
  },
  {
    "word": "verdict",
    "pos": "noun",
    "topics": [
      "crime and punishment",
      "law systems"
    ],
    "definition": "the decision of a court or jury on whether someone is guilty",
    "example": "The jury reached a verdict after two days."
  },
  {
    "word": "acquit",
    "pos": "verb",
    "topics": [
      "crime and punishment",
      "law systems"
    ],
    "definition": "to decide officially in court that someone is not guilty",
    "example": "The jury voted to acquit the defendant.",
    "noun": "acquittal",
    "synonyms": [
      "convict"
    ]
  },
  {
    "word": "convict",
    "pos": "verb",
    "topics": [
      "crime and punishment",
      "law systems"
    ],
    "definition": "to decide officially in court that someone is guilty",
    "example": "Evidence from the camera helped to convict him.",
    "noun": "conviction",
    "synonyms": [
      "acquit"
    ]
  },
  {
    "word": "sentence",
    "pos": "noun",
    "topics": [
      "crime and punishment"
    ],
    "definition": "the punishment a court gives to someone found guilty",
    "example": "She received a five-year prison sentence."
  },
  {
    "word": "punitive",
    "pos": "adjective",
    "topics": [
      "crime and punishment"
    ],
    "definition": "intended to punish",
    "example": "Punitive measures alone rarely reduce crime.",
    "synonyms": [
      "retribution"
    ]
  },
  {
    "word": "rehabilitation",
    "pos": "noun",
    "topics": [
      "crime and punishment"
    ],
    "definition": "helping an offender return to normal life through treatment, education or training",
    "example": "Rehabilitation programmes reduce the chance of reoffending."
  },
  {
    "word": "deterrent",
    "pos": "noun",
    "topics": [
      "crime and punishment"
    ],
    "definition": "something that discourages people from acting because they fear the consequences",
    "example": "Heavy fines can act as a deterrent."
  },
  {
    "word": "retribution",
    "pos": "noun",
    "topics": [
      "crime and punishment"
    ],
    "definition": "punishment given as payment for a wrong that was done",
    "example": "Some argue that justice is about retribution, not reform.",
    "synonyms": [
      "punitive"
    ]
  },
  {
    "word": "recidivism",
    "pos": "noun",
    "topics": [
      "crime and punishment"
    ],
    "definition": "the tendency of a convicted person to commit crime again",
    "example": "Education in prison lowers recidivism."
  },
  {
    "word": "parole",
    "pos": "noun",
    "topics": [
      "crime and punishment"
    ],
    "definition": "early release of a prisoner on condition of good behaviour",
    "example": "He was released on parole after serving half his sentence.",
    "synonyms": [
      "probation"
    ]
  },
  {
    "word": "probation",
    "pos": "noun",
    "topics": [
      "crime and punishment"
    ],
    "definition": "a period in which an offender stays out of prison under supervision",
    "example": "The judge gave her two years of probation.",
    "synonyms": [
      "parole"
    ]
  },
  {
    "word": "pardon",
    "pos": "verb",
    "topics": [
      "crime and punishment"
    ],
    "definition": "to officially forgive someone and free them from punishment",
    "example": "The president decided to pardon the activist."
  },
  {
    "word": "juvenile offender",
    "pos": "noun",
    "topics": [
      "crime and punishment"
    ],
    "definition": "a young person, under the legal age of adulthood, who has committed a crime",
    "example": "A juvenile offender is usually tried in a special court."
  },
  {
    "word": "equitable",
    "pos": "adjective",
    "topics": [
      "crime and punishment",
      "general",
      "law systems",
      "leadership"
    ],
    "definition": "fair and reasonable to everyone",
    "example": "An equitable legal system treats rich and poor alike.",
    "synonyms": []
  },
  {
    "word": "leniency",
    "pos": "noun",
    "topics": [
      "crime and punishment"
    ],
    "definition": "a mild or merciful approach to punishment",
    "example": "The defendant begged the judge for leniency."
  },
  {
    "word": "forgiveness",
    "pos": "noun",
    "topics": [
      "crime and punishment"
    ],
    "definition": "the act of no longer blaming or punishing someone for a wrong",
    "example": "Some victims find that forgiveness helps them heal."
  },
  {
    "word": "imprisonment",
    "pos": "noun",
    "topics": [
      "crime and punishment"
    ],
    "definition": "the state of being kept in prison as a punishment",
    "example": "The crime carries a maximum penalty of life imprisonment."
  },
  {
    "word": "ecosystem",
    "pos": "noun",
    "topics": [
      "ecology",
      "general"
    ],
    "definition": "all the living things in an area and the way they interact with their environment",
    "example": "A coral reef is a fragile ecosystem."
  },
  {
    "word": "biodiversity",
    "pos": "noun",
    "topics": [
      "ecology",
      "general"
    ],
    "definition": "the variety of plant and animal life in a particular place or in the world",
    "example": "Rainforests have extraordinary biodiversity."
  },
  {
    "word": "habitat",
    "pos": "noun",
    "topics": [
      "ecology",
      "general"
    ],
    "definition": "the natural home or environment of an animal or plant",
    "example": "Logging is destroying the habitat of many birds."
  },
  {
    "word": "sustainable",
    "pos": "adjective",
    "topics": [
      "ecology",
      "general",
      "renewable energy"
    ],
    "definition": "able to continue over time without harming the environment or using up resources",
    "example": "The city invests in sustainable energy."
  },
  {
    "word": "emissions",
    "pos": "noun",
    "topics": [
      "ecology",
      "general"
    ],
    "definition": "gases or other substances released into the air",
    "example": "Cars produce a large share of carbon emissions."
  },
  {
    "word": "conservation",
    "pos": "noun",
    "topics": [
      "ecology",
      "general"
    ],
    "definition": "the protection of nature, natural resources and wildlife",
    "example": "Conservation groups want to protect the wetlands."
  },
  {
    "word": "deforestation",
    "pos": "noun",
    "topics": [
      "ecology",
      "general"
    ],
    "definition": "the cutting down of large areas of forest",
    "example": "Deforestation threatens the survival of many species."
  },
  {
    "word": "endangered",
    "pos": "adjective",
    "topics": [
      "ecology",
      "general"
    ],
    "definition": "at risk of becoming extinct",
    "example": "The tiger is an endangered species."
  },
  {
    "word": "renewable",
    "pos": "adjective",
    "topics": [
      "ecology",
      "general",
      "renewable energy"
    ],
    "definition": "describing energy or resources that are naturally replaced and do not run out",
    "example": "Wind and solar are renewable sources of power."
  },
  {
    "word": "pollutant",
    "pos": "noun",
    "topics": [
      "ecology",
      "general"
    ],
    "definition": "a substance that makes air, water or soil dirty or harmful",
    "example": "The factory released a toxic pollutant into the river."
  },
  {
    "word": "carbon footprint",
    "pos": "noun",
    "topics": [
      "ecology",
      "general"
    ],
    "definition": "the amount of carbon dioxide released because of a person's or organisation's activities",
    "example": "Flying greatly increases your carbon footprint."
  },
  {
    "word": "extinction",
    "pos": "noun",
    "topics": [
      "ecology",
      "general"
    ],
    "definition": "the complete disappearance of a species",
    "example": "Habitat loss has driven many species to extinction."
  },
  {
    "word": "degradation",
    "pos": "noun",
    "topics": [
      "ecology",
      "general"
    ],
    "definition": "the process by which something becomes worse in quality or condition",
    "example": "Soil degradation reduces crop yields."
  },
  {
    "word": "mitigate",
    "pos": "verb",
    "topics": [
      "ecology",
      "general",
      "renewable energy"
    ],
    "definition": "to make something harmful or unpleasant less severe",
    "example": "Planting trees can help mitigate the effects of urban heat.",
    "noun": "mitigation"
  },
  {
    "word": "biodegradable",
    "pos": "adjective",
    "topics": [
      "ecology",
      "general"
    ],
    "definition": "able to be broken down naturally by bacteria or other living things",
    "example": "Biodegradable bags rot away in a few months."
  },
  {
    "word": "globalization",
    "pos": "noun",
    "topics": [
      "globalization"
    ],
    "definition": "the process by which businesses, cultures and economies become connected around the world",
    "example": "Globalization has made it easy to buy goods from anywhere."
  },
  {
    "word": "outsource",
    "pos": "verb",
    "topics": [
      "globalization"
    ],
    "definition": "to pay another company, often abroad, to do work for your business",
    "example": "Many firms outsource customer service to cheaper countries.",
    "noun": "outsourcing"
  },
  {
    "word": "multinational",
    "pos": "noun",
    "topics": [
      "globalization"
    ],
    "definition": "a large company that operates in many countries",
    "example": "The multinational employs workers in forty countries."
  },
  {
    "word": "tariff",
    "pos": "noun",
    "topics": [
      "globalization"
    ],
    "definition": "a tax on goods that are imported or exported",
    "example": "The government raised the tariff on steel."
  },
  {
    "word": "interdependence",
    "pos": "noun",
    "topics": [
      "globalization",
      "ecology"
    ],
    "definition": "a situation in which countries or people rely on one another",
    "example": "Trade creates interdependence between nations."
  },
  {
    "word": "homogenization",
    "pos": "noun",
    "topics": [
      "globalization"
    ],
    "definition": "the process of making things in different places become similar",
    "example": "Critics fear the homogenization of local cultures."
  },
  {
    "word": "free trade",
    "pos": "noun",
    "topics": [
      "globalization"
    ],
    "definition": "trade between countries without tariffs or other restrictions",
    "example": "Supporters of free trade say it lowers prices.",
    "synonyms": [
      "protectionism"
    ]
  },
  {
    "word": "protectionism",
    "pos": "noun",
    "topics": [
      "globalization"
    ],
    "definition": "the policy of protecting domestic industries from foreign competition, for example with tariffs",
    "example": "Protectionism can raise prices for consumers.",
    "synonyms": [
      "free trade",
      "tariff"
    ]
  },
  {
    "word": "supply chain",
    "pos": "noun",
    "topics": [
      "globalization"
    ],
    "definition": "the network of people and companies involved in making and delivering a product",
    "example": "The pandemic disrupted the global supply chain."
  },
  {
    "word": "expatriate",
    "pos": "noun",
    "topics": [
      "globalization"
    ],
    "definition": "a person who lives outside their own country",
    "example": "The expatriate community in Tbilisi is growing."
  },
  {
    "word": "integrate",
    "pos": "verb",
    "topics": [
      "globalization"
    ],
    "definition": "to combine with something else so that they work together as one",
    "example": "The country wants to integrate into the global economy.",
    "noun": "integration"
  },
  {
    "word": "disparity",
    "pos": "noun",
    "topics": [
      "globalization"
    ],
    "definition": "a noticeable and often unfair difference between things",
    "example": "Globalization has widened the disparity between rich and poor regions.",
    "synonyms": [
      "discrepancy"
    ]
  },
  {
    "word": "target market",
    "pos": "noun",
    "topics": [
      "international marketing"
    ],
    "definition": "the group of customers a company aims to sell its product to",
    "example": "Teenagers are the target market for the new app."
  },
  {
    "word": "brand awareness",
    "pos": "noun",
    "topics": [
      "international marketing"
    ],
    "definition": "how well consumers recognise and remember a brand",
    "example": "The ad campaign increased brand awareness abroad."
  },
  {
    "word": "market share",
    "pos": "noun",
    "topics": [
      "international marketing"
    ],
    "definition": "the percentage of total sales in a market that a company has",
    "example": "The firm lost market share to cheaper rivals."
  },
  {
    "word": "localisation",
    "pos": "noun",
    "topics": [
      "international marketing"
    ],
    "definition": "adapting a product or message to suit the language and culture of a particular place",
    "example": "Localisation includes translating slogans and changing packaging."
  },
  {
    "word": "consumer behaviour",
    "pos": "noun",
    "topics": [
      "international marketing"
    ],
    "definition": "the way people choose, buy and use products",
    "example": "Studies of consumer behaviour guide pricing decisions."
  },
  {
    "word": "competitive advantage",
    "pos": "noun",
    "topics": [
      "international marketing"
    ],
    "definition": "something that puts a company in a stronger position than its rivals",
    "example": "Low costs gave the firm a competitive advantage."
  },
  {
    "word": "niche",
    "pos": "noun",
    "topics": [
      "international marketing"
    ],
    "definition": "a small, specialised part of a market",
    "example": "The brand found a profitable niche in eco-friendly clothing."
  },
  {
    "word": "segmentation",
    "pos": "noun",
    "topics": [
      "international marketing"
    ],
    "definition": "dividing a market into groups of customers with similar needs",
    "example": "Segmentation helps firms tailor their advertising."
  },
  {
    "word": "penetrate",
    "pos": "verb",
    "topics": [
      "international marketing"
    ],
    "definition": "to successfully enter a market and start selling in it",
    "example": "The company hopes to penetrate the Asian market.",
    "noun": "penetration"
  },
  {
    "word": "export",
    "pos": "verb",
    "topics": [
      "international marketing"
    ],
    "definition": "to sell and send goods to another country",
    "example": "Georgia hopes to export more wine to Europe.",
    "synonyms": [
      "import"
    ]
  },
  {
    "word": "import",
    "pos": "verb",
    "topics": [
      "international marketing"
    ],
    "definition": "to bring goods into a country from abroad",
    "example": "The country has to import most of its oil.",
    "synonyms": [
      "export"
    ]
  },
  {
    "word": "entry barrier",
    "pos": "noun",
    "topics": [
      "international marketing"
    ],
    "definition": "something that makes it difficult for a new company to start competing in a market",
    "example": "High start-up costs are a major entry barrier."
  },
  {
    "word": "adapt",
    "pos": "verb",
    "topics": [
      "international marketing"
    ],
    "definition": "to change something so that it suits a new situation",
    "example": "The brand had to adapt its message for each country.",
    "noun": "adaptation"
  },
  {
    "word": "standardise",
    "pos": "verb",
    "topics": [
      "international marketing"
    ],
    "definition": "to make things the same everywhere, for example one product for all markets",
    "example": "Some firms standardise their products to save money.",
    "noun": "standardisation",
    "synonyms": [
      "adapt"
    ]
  },
  {
    "word": "endorse",
    "pos": "verb",
    "topics": [
      "international marketing",
      "general",
      "free speech"
    ],
    "definition": "to publicly say that you support or approve of a product",
    "example": "The athlete agreed to endorse a sportswear brand.",
    "noun": "endorsement",
    "synonyms": [
      "advocate",
      "perpetuate",
      "reinforce",
      "entrench",
      "normalize",
      "legitimize",
      "validate"
    ]
  },
  {
    "word": "ambiguous",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "open to more than one interpretation, and therefore unclear",
    "example": "The contract was ambiguous, so each side read the clause differently.",
    "noun": "ambiguity"
  },
  {
    "word": "substantiate",
    "pos": "verb",
    "topics": [
      "general"
    ],
    "definition": "to provide evidence that proves a claim is true",
    "example": "You need data to substantiate a claim that bold."
  },
  {
    "word": "discrepancy",
    "pos": "noun",
    "topics": [
      "general"
    ],
    "definition": "a difference between two things that ought to match or agree",
    "example": "The auditor found a discrepancy between the invoice and the payment record."
  },
  {
    "word": "prevalent",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "widespread and commonly found in a particular place or time",
    "example": "Remote work became prevalent in many industries after 2020."
  },
  {
    "word": "advocate",
    "pos": "verb",
    "topics": [
      "general"
    ],
    "definition": "to publicly support or recommend a particular idea or course of action",
    "example": "Several economists advocate a gradual change in tax policy."
  },
  {
    "word": "comprehensive",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "complete and covering all or nearly all aspects of a subject",
    "example": "The report offers a comprehensive review of the existing literature."
  },
  {
    "word": "hypothesis",
    "pos": "noun",
    "topics": [
      "general"
    ],
    "definition": "a proposed explanation that has not yet been tested or proven",
    "example": "Her hypothesis was that sleep improves memory consolidation."
  },
  {
    "word": "undermine",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "to weaken something gradually, often by attacking its base or credibility",
    "example": "Constant interruptions can undermine a speaker's confidence.",
    "synonyms": [
      "erode",
      "jeopardize",
      "compromise",
      "subvert"
    ]
  },
  {
    "word": "inevitable",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "certain to happen and impossible to avoid or prevent",
    "example": "Some degree of change is inevitable when a new system is introduced."
  },
  {
    "word": "coherent",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "logically connected and easy to follow as a whole",
    "example": "A coherent argument moves clearly from one point to the next."
  },
  {
    "word": "pivotal",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "extremely important because other things depend on it",
    "example": "The speech played a pivotal role in the debate."
  },
  {
    "word": "ubiquitous",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "seeming to be present everywhere",
    "example": "Smartphones are now ubiquitous."
  },
  {
    "word": "exacerbate",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "to make a bad situation worse",
    "example": "Cutting funding will only exacerbate the problem."
  },
  {
    "word": "plausible",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "seeming reasonable and likely to be true",
    "example": "Her explanation sounded plausible."
  },
  {
    "word": "scrutinise",
    "pos": "verb",
    "topics": [
      "general"
    ],
    "definition": "to examine something very carefully",
    "example": "Auditors will scrutinise every transaction.",
    "noun": "scrutiny"
  },
  {
    "word": "nuanced",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "showing small but important differences in meaning or opinion",
    "example": "A nuanced view recognises both costs and benefits."
  },
  {
    "word": "inherent",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "existing as a natural and permanent part of something",
    "example": "There are inherent risks in any investment."
  },
  {
    "word": "detrimental",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "causing harm or damage",
    "example": "Lack of sleep is detrimental to your health."
  },
  {
    "word": "profound",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "very deep, strong or serious in effect",
    "example": "The invention had a profound impact on society."
  },
  {
    "word": "imperative",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "absolutely necessary and urgent",
    "example": "It is imperative that we act now."
  },
  {
    "word": "agitate",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "stir people up, especially politically",
    "example": "Union leaders began to agitate for a change in the law.",
    "synonyms": [
      "instigate",
      "provoke",
      "trigger",
      "spark",
      "ignite",
      "foment",
      "inflame",
      "stoke",
      "fuel",
      "galvanize",
      "mobilize",
      "rally"
    ]
  },
  {
    "word": "mobilize",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "organize people to take action",
    "example": "The party tried to mobilize young voters before the election.",
    "synonyms": [
      "agitate",
      "instigate",
      "provoke",
      "trigger",
      "spark",
      "ignite",
      "foment",
      "inflame",
      "stoke",
      "fuel",
      "galvanize",
      "rally"
    ]
  },
  {
    "word": "galvanize",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "strongly motivate people to act",
    "example": "The disaster helped galvanize public support for reform.",
    "synonyms": [
      "agitate",
      "instigate",
      "provoke",
      "trigger",
      "spark",
      "ignite",
      "foment",
      "inflame",
      "stoke",
      "fuel",
      "mobilize",
      "rally"
    ]
  },
  {
    "word": "rally",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "bring people together in support of a cause",
    "example": "Activists rally in the square every Friday.",
    "synonyms": [
      "agitate",
      "instigate",
      "provoke",
      "trigger",
      "spark",
      "ignite",
      "foment",
      "inflame",
      "stoke",
      "fuel",
      "galvanize",
      "mobilize"
    ]
  },
  {
    "word": "provoke",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "cause a strong reaction",
    "example": "The cartoon was meant to provoke a debate.",
    "synonyms": [
      "agitate",
      "instigate",
      "trigger",
      "spark",
      "ignite",
      "foment",
      "inflame",
      "stoke",
      "fuel",
      "galvanize",
      "mobilize",
      "rally"
    ]
  },
  {
    "word": "instigate",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "deliberately cause an event or conflict",
    "example": "Police say two men instigate most of the fights.",
    "synonyms": [
      "agitate",
      "provoke",
      "trigger",
      "spark",
      "ignite",
      "foment",
      "inflame",
      "stoke",
      "fuel",
      "galvanize",
      "mobilize",
      "rally"
    ]
  },
  {
    "word": "trigger",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "cause a reaction or event",
    "example": "One remark can trigger an online storm.",
    "synonyms": [
      "agitate",
      "instigate",
      "provoke",
      "spark",
      "ignite",
      "foment",
      "inflame",
      "stoke",
      "fuel",
      "galvanize",
      "mobilize",
      "rally"
    ]
  },
  {
    "word": "spark",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "cause something to begin suddenly",
    "example": "The video could spark protests across the country.",
    "synonyms": [
      "agitate",
      "instigate",
      "provoke",
      "trigger",
      "ignite",
      "foment",
      "inflame",
      "stoke",
      "fuel",
      "galvanize",
      "mobilize",
      "rally"
    ]
  },
  {
    "word": "ignite",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "cause strong emotions or conflict to emerge",
    "example": "The speech threatened to ignite fresh conflict.",
    "synonyms": [
      "agitate",
      "instigate",
      "provoke",
      "trigger",
      "spark",
      "foment",
      "inflame",
      "stoke",
      "fuel",
      "galvanize",
      "mobilize",
      "rally"
    ]
  },
  {
    "word": "fuel",
    "pos": "verb",
    "topics": ["general", "free speech", "ecology"],
    "definition": "make a problem or feeling stronger",
    "example": "Rumours fuel panic during a crisis.",
    "synonyms": [
      "agitate",
      "instigate",
      "provoke",
      "trigger",
      "spark",
      "ignite",
      "foment",
      "inflame",
      "stoke",
      "galvanize",
      "mobilize",
      "rally"
    ]
  },
  {
    "word": "stoke",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "deliberately increase something negative",
    "example": "Some politicians stoke fear to win votes.",
    "synonyms": [
      "agitate",
      "instigate",
      "provoke",
      "trigger",
      "spark",
      "ignite",
      "foment",
      "inflame",
      "fuel",
      "galvanize",
      "mobilize",
      "rally"
    ]
  },
  {
    "word": "foment",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "encourage unrest or conflict",
    "example": "The group was accused of trying to foment unrest.",
    "synonyms": [
      "agitate",
      "instigate",
      "provoke",
      "trigger",
      "spark",
      "ignite",
      "inflame",
      "stoke",
      "fuel",
      "galvanize",
      "mobilize",
      "rally"
    ]
  },
  {
    "word": "inflame",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "make anger or conflict more intense",
    "example": "Careless words can inflame an already tense situation.",
    "synonyms": [
      "agitate",
      "instigate",
      "provoke",
      "trigger",
      "spark",
      "ignite",
      "foment",
      "stoke",
      "fuel",
      "galvanize",
      "mobilize",
      "rally"
    ]
  },
  {
    "word": "perpetuate",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "cause something harmful to continue",
    "example": "Stereotypes in the media perpetuate prejudice.",
    "synonyms": [
      "reinforce",
      "entrench",
      "normalize",
      "legitimize",
      "validate",
      "endorse"
    ]
  },
  {
    "word": "reinforce",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "strengthen an existing belief or attitude",
    "example": "Repeated headlines reinforce existing beliefs.",
    "synonyms": [
      "perpetuate",
      "entrench",
      "normalize",
      "legitimize",
      "validate",
      "endorse"
    ]
  },
  {
    "word": "entrench",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "make a belief/system very difficult to change",
    "example": "Years of propaganda helped entrench the regime.",
    "synonyms": [
      "perpetuate",
      "reinforce",
      "normalize",
      "legitimize",
      "validate",
      "endorse"
    ]
  },
  {
    "word": "normalize",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "make something previously unacceptable seem normal",
    "example": "Constant exposure can normalize violent images.",
    "synonyms": [
      "perpetuate",
      "reinforce",
      "entrench",
      "legitimize",
      "validate",
      "endorse"
    ]
  },
  {
    "word": "legitimize",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "make something seem legitimate or acceptable",
    "example": "Critics say the interview helped legitimize extremist views.",
    "synonyms": [
      "perpetuate",
      "reinforce",
      "entrench",
      "normalize",
      "validate",
      "endorse"
    ]
  },
  {
    "word": "validate",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "make something seem justified or credible",
    "example": "Likes and shares can validate a false claim.",
    "synonyms": [
      "perpetuate",
      "reinforce",
      "entrench",
      "normalize",
      "legitimize",
      "endorse"
    ]
  },
  {
    "word": "condemn",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "strongly criticize something",
    "example": "World leaders condemn the use of force against protesters.",
    "synonyms": [
      "denounce",
      "discredit",
      "delegitimize"
    ]
  },
  {
    "word": "denounce",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "publicly condemn something",
    "example": "The union will denounce the new law at the rally.",
    "synonyms": [
      "condemn",
      "discredit",
      "delegitimize"
    ]
  },
  {
    "word": "discredit",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "damage someone's credibility",
    "example": "The leaked emails were used to discredit the minister.",
    "synonyms": [
      "condemn",
      "denounce",
      "delegitimize"
    ]
  },
  {
    "word": "delegitimize",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "make something appear invalid or illegitimate",
    "example": "Attacks on judges can delegitimize the courts.",
    "synonyms": [
      "condemn",
      "denounce",
      "discredit"
    ]
  },
  {
    "word": "erode",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "gradually weaken",
    "example": "Constant scandals erode public confidence.",
    "synonyms": [
      "undermine",
      "jeopardize",
      "compromise",
      "subvert"
    ]
  },
  {
    "word": "jeopardize",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "put something at risk",
    "example": "Leaking the plan could jeopardize the whole operation.",
    "synonyms": [
      "undermine",
      "erode",
      "compromise",
      "subvert"
    ]
  },
  {
    "word": "compromise",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "weaken or damage something",
    "example": "A data leak could compromise the investigation.",
    "synonyms": [
      "undermine",
      "erode",
      "jeopardize",
      "subvert"
    ]
  },
  {
    "word": "subvert",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "undermine something from within",
    "example": "Hackers tried to subvert the election system.",
    "synonyms": [
      "undermine",
      "erode",
      "jeopardize",
      "compromise"
    ]
  },
  {
    "word": "circumvent",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "find a way around a rule or restriction",
    "example": "Some sites circumvent the ban with mirror pages."
  },
  {
    "word": "stifle",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "prevent something from developing or being expressed",
    "example": "Heavy fines can stifle independent journalism.",
    "synonyms": [
      "suppress",
      "curtail",
      "censor",
      "silence"
    ]
  },
  {
    "word": "curtail",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "restrict or reduce",
    "example": "The new law will curtail the right to protest.",
    "synonyms": [
      "suppress",
      "stifle",
      "censor",
      "silence"
    ]
  },
  {
    "word": "censor",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "suppress information or expression",
    "example": "The regime continues to censor the news.",
    "synonyms": [
      "suppress",
      "stifle",
      "curtail",
      "silence"
    ]
  },
  {
    "word": "silence",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "prevent someone from expressing their views",
    "example": "Authorities tried to silence the journalist.",
    "synonyms": [
      "suppress",
      "stifle",
      "curtail",
      "censor"
    ]
  },
  {
    "word": "distort",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "twist information so it becomes misleading",
    "example": "Selective editing can distort what the speaker said.",
    "synonyms": [
      "misrepresent",
      "fabricate",
      "falsify",
      "conceal",
      "withhold",
      "deceive",
      "mislead",
      "manipulate"
    ]
  },
  {
    "word": "misrepresent",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "present something inaccurately",
    "example": "The report may misrepresent the facts on purpose.",
    "synonyms": [
      "distort",
      "fabricate",
      "falsify",
      "conceal",
      "withhold",
      "deceive",
      "mislead",
      "manipulate"
    ]
  },
  {
    "word": "fabricate",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "invent false information",
    "example": "The reporter was fired for trying to fabricate quotes.",
    "synonyms": [
      "distort",
      "misrepresent",
      "falsify",
      "conceal",
      "withhold",
      "deceive",
      "mislead",
      "manipulate"
    ]
  },
  {
    "word": "falsify",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "deliberately alter information to make it false",
    "example": "He was jailed for trying to falsify the records.",
    "synonyms": [
      "distort",
      "misrepresent",
      "fabricate",
      "conceal",
      "withhold",
      "deceive",
      "mislead",
      "manipulate"
    ]
  },
  {
    "word": "conceal",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "deliberately hide information",
    "example": "The company tried to conceal the data breach.",
    "synonyms": [
      "distort",
      "misrepresent",
      "fabricate",
      "falsify",
      "withhold",
      "deceive",
      "mislead",
      "manipulate"
    ]
  },
  {
    "word": "withhold",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "deliberately not provide information",
    "example": "Officials may withhold information from the public.",
    "synonyms": [
      "distort",
      "misrepresent",
      "fabricate",
      "falsify",
      "conceal",
      "deceive",
      "mislead",
      "manipulate"
    ]
  },
  {
    "word": "disseminate",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "spread information widely",
    "example": "Social media makes it easy to disseminate rumours.",
    "synonyms": [
      "propagate",
      "circulate",
      "amplify"
    ]
  },
  {
    "word": "propagate",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "spread ideas or beliefs",
    "example": "Extremist groups propagate their ideas online.",
    "synonyms": [
      "disseminate",
      "circulate",
      "amplify"
    ]
  },
  {
    "word": "circulate",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "spread information among people",
    "example": "Fake photos began to circulate within minutes.",
    "synonyms": [
      "disseminate",
      "propagate",
      "amplify"
    ]
  },
  {
    "word": "amplify",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "increase the reach or impact of something",
    "example": "Algorithms amplify the most shocking posts.",
    "synonyms": [
      "disseminate",
      "propagate",
      "circulate"
    ]
  },
  {
    "word": "exploit",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "take advantage of a situation",
    "example": "Scammers exploit people's fear during a crisis.",
    "synonyms": [
      "polarize",
      "radicalize",
      "indoctrinate",
      "weaponize"
    ]
  },
  {
    "word": "manipulate",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "influence someone deceptively",
    "example": "Advertisers manipulate emotions to sell products.",
    "synonyms": [
      "distort",
      "misrepresent",
      "fabricate",
      "falsify",
      "conceal",
      "withhold",
      "deceive",
      "mislead"
    ]
  },
  {
    "word": "weaponize",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "deliberately use something as a tool for harm",
    "example": "Some governments weaponize the media against their critics.",
    "synonyms": [
      "polarize",
      "radicalize",
      "indoctrinate",
      "exploit"
    ]
  },
  {
    "word": "polarize",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "divide people into opposing groups",
    "example": "The debate has begun to polarize the whole country.",
    "synonyms": [
      "radicalize",
      "indoctrinate",
      "weaponize",
      "exploit"
    ]
  },
  {
    "word": "radicalize",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "cause someone to adopt extreme views",
    "example": "Online forums can radicalize lonely young people.",
    "synonyms": [
      "polarize",
      "indoctrinate",
      "weaponize",
      "exploit"
    ]
  },
  {
    "word": "indoctrinate",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "make someone accept beliefs uncritically",
    "example": "The regime tried to indoctrinate children in schools.",
    "synonyms": [
      "polarize",
      "radicalize",
      "weaponize",
      "exploit"
    ]
  },
  {
    "word": "deceive",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "deliberately make someone believe something false",
    "example": "Scammers deceive people with fake emails.",
    "synonyms": [
      "distort",
      "misrepresent",
      "fabricate",
      "falsify",
      "conceal",
      "withhold",
      "mislead",
      "manipulate"
    ]
  },
  {
    "word": "mislead",
    "pos": "verb",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "cause someone to have a wrong impression",
    "example": "Charts with missing scales can mislead readers.",
    "synonyms": [
      "distort",
      "misrepresent",
      "fabricate",
      "falsify",
      "conceal",
      "withhold",
      "deceive",
      "manipulate"
    ]
  },
  {
    "word": "discord",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "disagreement and conflict",
    "example": "Political discord split the family dinner.",
    "synonyms": [
      "division",
      "polarization",
      "unrest",
      "turmoil",
      "tension",
      "hostility",
      "animosity",
      "resentment",
      "outrage",
      "backlash",
      "controversy"
    ]
  },
  {
    "word": "division",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "separation between groups",
    "example": "There is a deep division between the two camps.",
    "synonyms": [
      "discord",
      "polarization",
      "unrest",
      "turmoil",
      "tension",
      "hostility",
      "animosity",
      "resentment",
      "outrage",
      "backlash",
      "controversy"
    ]
  },
  {
    "word": "polarization",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "division into strongly opposing groups",
    "example": "Social media has increased political polarization.",
    "synonyms": [
      "discord",
      "division",
      "unrest",
      "turmoil",
      "tension",
      "hostility",
      "animosity",
      "resentment",
      "outrage",
      "backlash",
      "controversy"
    ]
  },
  {
    "word": "unrest",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "public disturbance or dissatisfaction",
    "example": "Rising prices led to widespread unrest.",
    "synonyms": [
      "discord",
      "division",
      "polarization",
      "turmoil",
      "tension",
      "hostility",
      "animosity",
      "resentment",
      "outrage",
      "backlash",
      "controversy"
    ]
  },
  {
    "word": "turmoil",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "a state of confusion, disorder, or conflict",
    "example": "The country fell into turmoil after the vote.",
    "synonyms": [
      "discord",
      "division",
      "polarization",
      "unrest",
      "tension",
      "hostility",
      "animosity",
      "resentment",
      "outrage",
      "backlash",
      "controversy"
    ]
  },
  {
    "word": "outrage",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "extreme anger",
    "example": "The ruling caused outrage among students.",
    "synonyms": [
      "discord",
      "division",
      "polarization",
      "unrest",
      "turmoil",
      "tension",
      "hostility",
      "animosity",
      "resentment",
      "backlash",
      "controversy"
    ]
  },
  {
    "word": "backlash",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "a strong negative reaction",
    "example": "The ban provoked a fierce backlash online.",
    "synonyms": [
      "discord",
      "division",
      "polarization",
      "unrest",
      "turmoil",
      "tension",
      "hostility",
      "animosity",
      "resentment",
      "outrage",
      "controversy"
    ]
  },
  {
    "word": "controversy",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "prolonged public disagreement",
    "example": "The interview caused a controversy that lasted for weeks.",
    "synonyms": [
      "discord",
      "division",
      "polarization",
      "unrest",
      "turmoil",
      "tension",
      "hostility",
      "animosity",
      "resentment",
      "outrage",
      "backlash"
    ]
  },
  {
    "word": "hostility",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "strong dislike or antagonism",
    "example": "The speaker faced open hostility from the crowd.",
    "synonyms": [
      "discord",
      "division",
      "polarization",
      "unrest",
      "turmoil",
      "tension",
      "animosity",
      "resentment",
      "outrage",
      "backlash",
      "controversy"
    ]
  },
  {
    "word": "resentment",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "persistent anger about perceived unfairness",
    "example": "Unequal pay created deep resentment among staff.",
    "synonyms": [
      "discord",
      "division",
      "polarization",
      "unrest",
      "turmoil",
      "tension",
      "hostility",
      "animosity",
      "outrage",
      "backlash",
      "controversy"
    ]
  },
  {
    "word": "animosity",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "strong hostility",
    "example": "Years of animosity separated the neighbours.",
    "synonyms": [
      "discord",
      "division",
      "polarization",
      "unrest",
      "turmoil",
      "tension",
      "hostility",
      "resentment",
      "outrage",
      "backlash",
      "controversy"
    ]
  },
  {
    "word": "tension",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "a strained or hostile atmosphere",
    "example": "Tension rose as the protesters reached the parliament.",
    "synonyms": [
      "discord",
      "division",
      "polarization",
      "unrest",
      "turmoil",
      "hostility",
      "animosity",
      "resentment",
      "outrage",
      "backlash",
      "controversy"
    ]
  },
  {
    "word": "radicalization",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "process of becoming more extreme",
    "example": "Experts study the radicalization of young people online.",
    "synonyms": [
      "indoctrination",
      "propaganda",
      "narrative",
      "rhetoric",
      "discourse"
    ]
  },
  {
    "word": "indoctrination",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "systematic teaching of beliefs without encouraging criticism",
    "example": "Critics describe the school programme as indoctrination.",
    "synonyms": [
      "radicalization",
      "propaganda",
      "narrative",
      "rhetoric",
      "discourse"
    ]
  },
  {
    "word": "propaganda",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "information designed to influence opinions, often deceptively",
    "example": "State television was full of propaganda.",
    "synonyms": [
      "radicalization",
      "indoctrination",
      "narrative",
      "rhetoric",
      "discourse"
    ]
  },
  {
    "word": "narrative",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "a particular way of presenting or interpreting events",
    "example": "Each side told its own narrative of the war.",
    "synonyms": [
      "radicalization",
      "indoctrination",
      "propaganda",
      "rhetoric",
      "discourse"
    ]
  },
  {
    "word": "rhetoric",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "language used to persuade or influence",
    "example": "His fiery rhetoric excited the crowd.",
    "synonyms": [
      "radicalization",
      "indoctrination",
      "propaganda",
      "narrative",
      "discourse"
    ]
  },
  {
    "word": "discourse",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "formal/public discussion of a subject",
    "example": "Public discourse has become angrier in recent years.",
    "synonyms": [
      "radicalization",
      "indoctrination",
      "propaganda",
      "narrative",
      "rhetoric"
    ]
  },
  {
    "word": "repression",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "forceful restriction of people's rights or freedoms",
    "example": "Repression of the press often grows before elections.",
    "synonyms": [
      "censorship",
      "surveillance",
      "suppression"
    ]
  },
  {
    "word": "surveillance",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "close monitoring of people or activities",
    "example": "Mass surveillance raises serious privacy concerns.",
    "collocations": [
      "intrusive surveillance"
    ],
    "synonyms": [
      "censorship",
      "repression",
      "suppression"
    ]
  },
  {
    "word": "accountability",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "responsibility for one's actions",
    "example": "Journalists demand accountability from officials.",
    "synonyms": [
      "transparency",
      "credibility",
      "integrity"
    ]
  },
  {
    "word": "transparency",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "openness and availability of information",
    "example": "Transparency builds trust in public institutions.",
    "synonyms": [
      "accountability",
      "credibility",
      "integrity"
    ]
  },
  {
    "word": "credibility",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "ability to be trusted or believed",
    "example": "One false story can destroy a paper's credibility.",
    "synonyms": [
      "transparency",
      "accountability",
      "integrity"
    ]
  },
  {
    "word": "integrity",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "honesty and adherence to strong principles",
    "example": "The judge was respected for her integrity.",
    "synonyms": [
      "transparency",
      "accountability",
      "credibility"
    ]
  },
  {
    "word": "bias",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "unfair preference for one side",
    "example": "Readers noticed a clear bias in the report.",
    "synonyms": [
      "prejudice"
    ]
  },
  {
    "word": "prejudice",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "preconceived negative judgment",
    "example": "Prejudice against minorities still shapes some headlines.",
    "synonyms": [
      "bias"
    ]
  },
  {
    "word": "malinformation",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "genuine information used maliciously",
    "example": "Leaking private emails to harm someone is malinformation.",
    "synonyms": [
      "misinformation",
      "disinformation",
      "fabrication",
      "deception",
      "manipulation",
      "distortion",
      "incitement"
    ]
  },
  {
    "word": "fabrication",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "something deliberately invented",
    "example": "The story turned out to be a complete fabrication.",
    "synonyms": [
      "misinformation",
      "disinformation",
      "malinformation",
      "deception",
      "manipulation",
      "distortion",
      "incitement"
    ]
  },
  {
    "word": "deception",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "deliberate attempt to make someone believe something false",
    "example": "The whole campaign was built on deception.",
    "synonyms": [
      "misinformation",
      "disinformation",
      "malinformation",
      "fabrication",
      "manipulation",
      "distortion",
      "incitement"
    ]
  },
  {
    "word": "manipulation",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "deceptive influence over people",
    "example": "The documentary exposed the manipulation of public opinion.",
    "synonyms": [
      "misinformation",
      "disinformation",
      "malinformation",
      "fabrication",
      "deception",
      "distortion",
      "incitement"
    ]
  },
  {
    "word": "distortion",
    "pos": "noun",
    "topics": ["general", "free speech", "art history"],
    "definition": "inaccurate or misleading presentation",
    "example": "The headline was a distortion of what she said.",
    "synonyms": [
      "misinformation",
      "disinformation",
      "malinformation",
      "fabrication",
      "deception",
      "manipulation",
      "incitement"
    ]
  },
  {
    "word": "suppression",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "prevention of information or opinions from being expressed",
    "example": "Suppression of dissent often backfires.",
    "collocations": [
      "systematic suppression"
    ],
    "synonyms": [
      "censorship",
      "repression",
      "surveillance"
    ]
  },
  {
    "word": "incitement",
    "pos": "noun",
    "topics": [
      "general",
      "free speech"
    ],
    "definition": "encouragement to commit an action, especially violence",
    "example": "He was charged with incitement to violence.",
    "synonyms": [
      "misinformation",
      "disinformation",
      "malinformation",
      "fabrication",
      "deception",
      "manipulation",
      "distortion"
    ]
  },
  {
    "word": "controversial",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "likely to cause disagreement",
    "example": "The law is highly controversial.",
    "synonyms": [
      "provocative",
      "inflammatory",
      "incendiary",
      "offensive",
      "derogatory",
      "contentious",
      "confrontational",
      "divisive",
      "polarizing"
    ]
  },
  {
    "word": "provocative",
    "pos": "adjective",
    "topics": ["free speech", "art history"],
    "definition": "deliberately intended to cause a strong reaction",
    "example": "The poster was deliberately provocative.",
    "synonyms": [
      "controversial",
      "inflammatory",
      "incendiary",
      "offensive",
      "derogatory",
      "contentious",
      "confrontational",
      "divisive",
      "polarizing"
    ]
  },
  {
    "word": "inflammatory",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "likely to provoke anger or violence",
    "example": "The mayor's inflammatory remarks angered residents.",
    "synonyms": [
      "controversial",
      "provocative",
      "incendiary",
      "offensive",
      "derogatory",
      "contentious",
      "confrontational",
      "divisive",
      "polarizing"
    ]
  },
  {
    "word": "incendiary",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "likely to encourage conflict or violence",
    "example": "The incendiary speech led to clashes in the street.",
    "synonyms": [
      "controversial",
      "provocative",
      "inflammatory",
      "offensive",
      "derogatory",
      "contentious",
      "confrontational",
      "divisive",
      "polarizing"
    ]
  },
  {
    "word": "offensive",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "causing anger or insult",
    "example": "Many viewers found the joke offensive.",
    "synonyms": [
      "controversial",
      "provocative",
      "inflammatory",
      "incendiary",
      "derogatory",
      "contentious",
      "confrontational",
      "divisive",
      "polarizing"
    ]
  },
  {
    "word": "derogatory",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "expressing a negative, disrespectful opinion",
    "example": "Using derogatory language about a group can be punished by law.",
    "synonyms": [
      "controversial",
      "provocative",
      "inflammatory",
      "incendiary",
      "offensive",
      "contentious",
      "confrontational",
      "divisive",
      "polarizing"
    ]
  },
  {
    "word": "defamatory",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "damaging someone's reputation through false statements",
    "example": "The article was ruled defamatory and removed.",
    "synonyms": [
      "slanderous",
      "libellous"
    ]
  },
  {
    "word": "slanderous",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "falsely damaging someone's reputation through spoken statements",
    "example": "He called the remarks slanderous and demanded an apology.",
    "synonyms": [
      "defamatory",
      "libellous"
    ]
  },
  {
    "word": "libellous",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "falsely damaging someone's reputation in written/published form",
    "example": "The editor feared the story might be libellous.",
    "synonyms": [
      "defamatory",
      "slanderous"
    ]
  },
  {
    "word": "divisive",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "causing people to become divided",
    "example": "Immigration remains a divisive issue.",
    "synonyms": [
      "controversial",
      "provocative",
      "inflammatory",
      "incendiary",
      "offensive",
      "derogatory",
      "contentious",
      "confrontational",
      "polarizing"
    ]
  },
  {
    "word": "polarizing",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "creating strong opposing groups",
    "example": "She is a polarizing figure in politics.",
    "synonyms": [
      "controversial",
      "provocative",
      "inflammatory",
      "incendiary",
      "offensive",
      "derogatory",
      "contentious",
      "confrontational",
      "divisive"
    ]
  },
  {
    "word": "subversive",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "attempting to undermine an established system or authority",
    "example": "The play was banned as subversive."
  },
  {
    "word": "dissenting",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "expressing disagreement with an accepted view",
    "example": "A dissenting voice in the committee asked for a recount.",
    "synonyms": [
      "dissent",
      "dissident"
    ]
  },
  {
    "word": "dissident",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "opposing an established political system or authority",
    "example": "The dissident writer was forced into exile.",
    "synonyms": [
      "dissent",
      "dissenting"
    ]
  },
  {
    "word": "outspoken",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "expressing opinions openly and strongly",
    "example": "The outspoken editor criticised the government."
  },
  {
    "word": "contentious",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "likely to cause disagreement",
    "example": "Land reform is a contentious subject.",
    "synonyms": [
      "controversial",
      "provocative",
      "inflammatory",
      "incendiary",
      "offensive",
      "derogatory",
      "confrontational",
      "divisive",
      "polarizing"
    ]
  },
  {
    "word": "confrontational",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "deliberately challenging or aggressive",
    "example": "His confrontational style made the interview tense.",
    "synonyms": [
      "controversial",
      "provocative",
      "inflammatory",
      "incendiary",
      "offensive",
      "derogatory",
      "contentious",
      "divisive",
      "polarizing"
    ]
  },
  {
    "word": "radical",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "advocating fundamental or extreme change",
    "example": "The group demanded radical change."
  },
  {
    "word": "extremist",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "supporting extreme political/social views",
    "example": "The platform removed an extremist video."
  },
  {
    "word": "fabricated",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "completely invented",
    "example": "The photo was completely fabricated.",
    "synonyms": [
      "fictitious",
      "fallacious",
      "fraudulent",
      "deceptive",
      "misleading",
      "distorted",
      "unsubstantiated",
      "unverified",
      "dubious",
      "questionable",
      "unreliable",
      "inaccurate",
      "factually incorrect",
      "spurious",
      "speculative",
      "conspiratorial",
      "sensationalist",
      "clickbait-driven",
      "manipulative"
    ]
  },
  {
    "word": "fictitious",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "imaginary or not real",
    "example": "The company used a fictitious address.",
    "synonyms": [
      "fabricated",
      "fallacious",
      "fraudulent",
      "deceptive",
      "misleading",
      "distorted",
      "unsubstantiated",
      "unverified",
      "dubious",
      "questionable",
      "unreliable",
      "inaccurate",
      "factually incorrect",
      "spurious",
      "speculative",
      "conspiratorial",
      "sensationalist",
      "clickbait-driven",
      "manipulative"
    ]
  },
  {
    "word": "fallacious",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "based on incorrect reasoning",
    "example": "The argument is fallacious because it ignores the data.",
    "synonyms": [
      "fabricated",
      "fictitious",
      "fraudulent",
      "deceptive",
      "misleading",
      "distorted",
      "unsubstantiated",
      "unverified",
      "dubious",
      "questionable",
      "unreliable",
      "inaccurate",
      "factually incorrect",
      "spurious",
      "speculative",
      "conspiratorial",
      "sensationalist",
      "clickbait-driven",
      "manipulative"
    ]
  },
  {
    "word": "fraudulent",
    "pos": "adjective",
    "topics": [
      "free speech",
      "leadership"
    ],
    "definition": "deliberately deceptive or dishonest",
    "example": "Investigators found fraudulent claims in the report.",
    "synonyms": [
      "fabricated",
      "fictitious",
      "fallacious",
      "deceptive",
      "misleading",
      "distorted",
      "unsubstantiated",
      "unverified",
      "dubious",
      "questionable",
      "unreliable",
      "inaccurate",
      "factually incorrect",
      "spurious",
      "speculative",
      "conspiratorial",
      "sensationalist",
      "clickbait-driven",
      "manipulative"
    ]
  },
  {
    "word": "deceptive",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "intended to make people believe something false",
    "example": "The advert was deceptive about the price.",
    "synonyms": [
      "fabricated",
      "fictitious",
      "fallacious",
      "fraudulent",
      "misleading",
      "distorted",
      "unsubstantiated",
      "unverified",
      "dubious",
      "questionable",
      "unreliable",
      "inaccurate",
      "factually incorrect",
      "spurious",
      "speculative",
      "conspiratorial",
      "sensationalist",
      "clickbait-driven",
      "manipulative"
    ]
  },
  {
    "word": "misleading",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "creating a false or inaccurate impression",
    "example": "The headline is misleading.",
    "synonyms": [
      "fabricated",
      "fictitious",
      "fallacious",
      "fraudulent",
      "deceptive",
      "distorted",
      "unsubstantiated",
      "unverified",
      "dubious",
      "questionable",
      "unreliable",
      "inaccurate",
      "factually incorrect",
      "spurious",
      "speculative",
      "conspiratorial",
      "sensationalist",
      "clickbait-driven",
      "manipulative"
    ]
  },
  {
    "word": "distorted",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "presented in an altered or inaccurate way",
    "example": "The map gave readers a distorted view of the region.",
    "synonyms": [
      "fabricated",
      "fictitious",
      "fallacious",
      "fraudulent",
      "deceptive",
      "misleading",
      "unsubstantiated",
      "unverified",
      "dubious",
      "questionable",
      "unreliable",
      "inaccurate",
      "factually incorrect",
      "spurious",
      "speculative",
      "conspiratorial",
      "sensationalist",
      "clickbait-driven",
      "manipulative"
    ]
  },
  {
    "word": "unsubstantiated",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "not supported by evidence",
    "example": "The paper printed unsubstantiated rumours.",
    "synonyms": [
      "fabricated",
      "fictitious",
      "fallacious",
      "fraudulent",
      "deceptive",
      "misleading",
      "distorted",
      "unverified",
      "dubious",
      "questionable",
      "unreliable",
      "inaccurate",
      "factually incorrect",
      "spurious",
      "speculative",
      "conspiratorial",
      "sensationalist",
      "clickbait-driven",
      "manipulative"
    ]
  },
  {
    "word": "unverified",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "not confirmed as true",
    "example": "Unverified reports spread quickly on social media.",
    "synonyms": [
      "fabricated",
      "fictitious",
      "fallacious",
      "fraudulent",
      "deceptive",
      "misleading",
      "distorted",
      "unsubstantiated",
      "dubious",
      "questionable",
      "unreliable",
      "inaccurate",
      "factually incorrect",
      "spurious",
      "speculative",
      "conspiratorial",
      "sensationalist",
      "clickbait-driven",
      "manipulative"
    ]
  },
  {
    "word": "dubious",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "unlikely to be reliable or true",
    "example": "The site has a dubious record for accuracy.",
    "synonyms": [
      "fabricated",
      "fictitious",
      "fallacious",
      "fraudulent",
      "deceptive",
      "misleading",
      "distorted",
      "unsubstantiated",
      "unverified",
      "questionable",
      "unreliable",
      "inaccurate",
      "factually incorrect",
      "spurious",
      "speculative",
      "conspiratorial",
      "sensationalist",
      "clickbait-driven",
      "manipulative"
    ]
  },
  {
    "word": "questionable",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "open to doubt",
    "example": "The source of the claim is questionable.",
    "synonyms": [
      "fabricated",
      "fictitious",
      "fallacious",
      "fraudulent",
      "deceptive",
      "misleading",
      "distorted",
      "unsubstantiated",
      "unverified",
      "dubious",
      "unreliable",
      "inaccurate",
      "factually incorrect",
      "spurious",
      "speculative",
      "conspiratorial",
      "sensationalist",
      "clickbait-driven",
      "manipulative"
    ]
  },
  {
    "word": "unreliable",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "not trustworthy",
    "example": "Anonymous accounts are often unreliable.",
    "synonyms": [
      "fabricated",
      "fictitious",
      "fallacious",
      "fraudulent",
      "deceptive",
      "misleading",
      "distorted",
      "unsubstantiated",
      "unverified",
      "dubious",
      "questionable",
      "inaccurate",
      "factually incorrect",
      "spurious",
      "speculative",
      "conspiratorial",
      "sensationalist",
      "clickbait-driven",
      "manipulative"
    ]
  },
  {
    "word": "inaccurate",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "containing incorrect information",
    "example": "The figures in the article were inaccurate.",
    "synonyms": [
      "fabricated",
      "fictitious",
      "fallacious",
      "fraudulent",
      "deceptive",
      "misleading",
      "distorted",
      "unsubstantiated",
      "unverified",
      "dubious",
      "questionable",
      "unreliable",
      "factually incorrect",
      "spurious",
      "speculative",
      "conspiratorial",
      "sensationalist",
      "clickbait-driven",
      "manipulative"
    ]
  },
  {
    "word": "factually incorrect",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "contrary to established facts",
    "example": "The statement was factually incorrect.",
    "synonyms": [
      "fabricated",
      "fictitious",
      "fallacious",
      "fraudulent",
      "deceptive",
      "misleading",
      "distorted",
      "unsubstantiated",
      "unverified",
      "dubious",
      "questionable",
      "unreliable",
      "inaccurate",
      "spurious",
      "speculative",
      "conspiratorial",
      "sensationalist",
      "clickbait-driven",
      "manipulative"
    ]
  },
  {
    "word": "spurious",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "apparently convincing but actually false or invalid",
    "example": "The report relied on spurious data.",
    "synonyms": [
      "fabricated",
      "fictitious",
      "fallacious",
      "fraudulent",
      "deceptive",
      "misleading",
      "distorted",
      "unsubstantiated",
      "unverified",
      "dubious",
      "questionable",
      "unreliable",
      "inaccurate",
      "factually incorrect",
      "speculative",
      "conspiratorial",
      "sensationalist",
      "clickbait-driven",
      "manipulative"
    ]
  },
  {
    "word": "speculative",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "based on guesses rather than solid evidence",
    "example": "The article was speculative and named no sources.",
    "synonyms": [
      "fabricated",
      "fictitious",
      "fallacious",
      "fraudulent",
      "deceptive",
      "misleading",
      "distorted",
      "unsubstantiated",
      "unverified",
      "dubious",
      "questionable",
      "unreliable",
      "inaccurate",
      "factually incorrect",
      "spurious",
      "conspiratorial",
      "sensationalist",
      "clickbait-driven",
      "manipulative"
    ]
  },
  {
    "word": "conspiratorial",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "involving or promoting conspiracy theories",
    "example": "Conspiratorial videos attract millions of views.",
    "synonyms": [
      "fabricated",
      "fictitious",
      "fallacious",
      "fraudulent",
      "deceptive",
      "misleading",
      "distorted",
      "unsubstantiated",
      "unverified",
      "dubious",
      "questionable",
      "unreliable",
      "inaccurate",
      "factually incorrect",
      "spurious",
      "speculative",
      "sensationalist",
      "clickbait-driven",
      "manipulative"
    ]
  },
  {
    "word": "sensationalist",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "designed to provoke excitement or shock",
    "example": "Sensationalist coverage made the story seem worse.",
    "synonyms": [
      "fabricated",
      "fictitious",
      "fallacious",
      "fraudulent",
      "deceptive",
      "misleading",
      "distorted",
      "unsubstantiated",
      "unverified",
      "dubious",
      "questionable",
      "unreliable",
      "inaccurate",
      "factually incorrect",
      "spurious",
      "speculative",
      "conspiratorial",
      "clickbait-driven",
      "manipulative"
    ]
  },
  {
    "word": "clickbait-driven",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "designed primarily to attract clicks",
    "example": "Clickbait-driven sites reward shocking headlines.",
    "synonyms": [
      "fabricated",
      "fictitious",
      "fallacious",
      "fraudulent",
      "deceptive",
      "misleading",
      "distorted",
      "unsubstantiated",
      "unverified",
      "dubious",
      "questionable",
      "unreliable",
      "inaccurate",
      "factually incorrect",
      "spurious",
      "speculative",
      "conspiratorial",
      "sensationalist",
      "manipulative"
    ]
  },
  {
    "word": "manipulative",
    "pos": "adjective",
    "topics": [
      "free speech",
      "leadership"
    ],
    "definition": "designed to control people's opinions or behavior deceptively",
    "example": "The ad used manipulative music and images.",
    "synonyms": [
      "fabricated",
      "fictitious",
      "fallacious",
      "fraudulent",
      "deceptive",
      "misleading",
      "distorted",
      "unsubstantiated",
      "unverified",
      "dubious",
      "questionable",
      "unreliable",
      "inaccurate",
      "factually incorrect",
      "spurious",
      "speculative",
      "conspiratorial",
      "sensationalist",
      "clickbait-driven"
    ],
    "tone": "negative"
  },
  {
    "word": "propagandistic",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "designed to promote a particular political viewpoint",
    "example": "The film was criticised as propagandistic.",
    "synonyms": [
      "partisan",
      "biased",
      "one-sided",
      "ideological",
      "politically motivated"
    ]
  },
  {
    "word": "partisan",
    "pos": "adjective",
    "topics": [
      "free speech",
      "types of people"
    ],
    "definition": "strongly supporting one political side",
    "example": "The channel is openly partisan.",
    "synonyms": [
      "propagandistic",
      "biased",
      "one-sided",
      "ideological",
      "politically motivated"
    ]
  },
  {
    "word": "biased",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "unfairly favoring one perspective",
    "example": "Viewers called the coverage biased.",
    "synonyms": [
      "propagandistic",
      "partisan",
      "one-sided",
      "ideological",
      "politically motivated"
    ]
  },
  {
    "word": "one-sided",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "presenting only one perspective",
    "example": "The report was one-sided and ignored the opposition.",
    "synonyms": [
      "propagandistic",
      "partisan",
      "biased",
      "ideological",
      "politically motivated"
    ]
  },
  {
    "word": "ideological",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "strongly connected to a particular system of beliefs",
    "example": "His arguments were more ideological than factual.",
    "synonyms": [
      "propagandistic",
      "partisan",
      "biased",
      "one-sided",
      "politically motivated"
    ]
  },
  {
    "word": "politically motivated",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "driven by political objectives",
    "example": "The lawsuit was widely seen as politically motivated.",
    "synonyms": [
      "propagandistic",
      "partisan",
      "biased",
      "one-sided",
      "ideological"
    ]
  },
  {
    "word": "deliberate",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "intentional rather than accidental",
    "example": "The omission was deliberate, not an accident.",
    "synonyms": [
      "calculated"
    ]
  },
  {
    "word": "calculated",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "carefully planned to achieve a particular effect",
    "example": "The leak was a calculated move before the vote.",
    "synonyms": [
      "deliberate"
    ]
  },
  {
    "word": "coercive",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "involving force or pressure",
    "example": "Coercive tactics were used to silence critics.",
    "synonyms": [
      "repressive",
      "authoritarian",
      "oppressive",
      "draconian",
      "restrictive",
      "arbitrary",
      "excessive",
      "unjustifiable",
      "unconstitutional",
      "disproportionate",
      "intrusive",
      "heavy-handed",
      "overreaching",
      "stifling",
      "suppressive",
      "exploitative"
    ]
  },
  {
    "word": "exploitative",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "taking unfair advantage of people or situations",
    "example": "The film was criticised as exploitative.",
    "synonyms": [
      "repressive",
      "authoritarian",
      "oppressive",
      "draconian",
      "restrictive",
      "arbitrary",
      "excessive",
      "unjustifiable",
      "unconstitutional",
      "disproportionate",
      "intrusive",
      "heavy-handed",
      "overreaching",
      "stifling",
      "suppressive",
      "coercive"
    ]
  },
  {
    "word": "repressive",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "restricting people's freedom through force or control",
    "example": "The repressive regime closed every independent paper.",
    "collocations": [
      "repressive regime"
    ],
    "synonyms": [
      "authoritarian",
      "oppressive",
      "draconian",
      "restrictive",
      "arbitrary",
      "excessive",
      "unjustifiable",
      "unconstitutional",
      "disproportionate",
      "intrusive",
      "heavy-handed",
      "overreaching",
      "stifling",
      "suppressive",
      "coercive",
      "exploitative"
    ]
  },
  {
    "word": "authoritarian",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "demanding obedience and limiting individual freedom",
    "example": "The authoritarian government banned public meetings.",
    "collocations": [
      "authoritarian government"
    ],
    "synonyms": [
      "repressive",
      "oppressive",
      "draconian",
      "restrictive",
      "arbitrary",
      "excessive",
      "unjustifiable",
      "unconstitutional",
      "disproportionate",
      "intrusive",
      "heavy-handed",
      "overreaching",
      "stifling",
      "suppressive",
      "coercive",
      "exploitative"
    ]
  },
  {
    "word": "oppressive",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "unjustly controlling or restricting people",
    "example": "Citizens suffered under oppressive measures.",
    "collocations": [
      "oppressive measures"
    ],
    "synonyms": [
      "repressive",
      "authoritarian",
      "draconian",
      "restrictive",
      "arbitrary",
      "excessive",
      "unjustifiable",
      "unconstitutional",
      "disproportionate",
      "intrusive",
      "heavy-handed",
      "overreaching",
      "stifling",
      "suppressive",
      "coercive",
      "exploitative"
    ]
  },
  {
    "word": "draconian",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "extremely severe",
    "example": "Critics called the new media law draconian.",
    "synonyms": [
      "repressive",
      "authoritarian",
      "oppressive",
      "restrictive",
      "arbitrary",
      "excessive",
      "unjustifiable",
      "unconstitutional",
      "disproportionate",
      "intrusive",
      "heavy-handed",
      "overreaching",
      "stifling",
      "suppressive",
      "coercive",
      "exploitative"
    ]
  },
  {
    "word": "restrictive",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "imposing significant limitations",
    "example": "Restrictive rules limit what reporters can film.",
    "synonyms": [
      "repressive",
      "authoritarian",
      "oppressive",
      "draconian",
      "arbitrary",
      "excessive",
      "unjustifiable",
      "unconstitutional",
      "disproportionate",
      "intrusive",
      "heavy-handed",
      "overreaching",
      "stifling",
      "suppressive",
      "coercive",
      "exploitative"
    ]
  },
  {
    "word": "arbitrary",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "based on personal judgment rather than clear principles",
    "example": "Arbitrary restrictions confused many publishers.",
    "collocations": [
      "arbitrary restrictions"
    ],
    "synonyms": [
      "repressive",
      "authoritarian",
      "oppressive",
      "draconian",
      "restrictive",
      "excessive",
      "unjustifiable",
      "unconstitutional",
      "disproportionate",
      "intrusive",
      "heavy-handed",
      "overreaching",
      "stifling",
      "suppressive",
      "coercive",
      "exploitative"
    ]
  },
  {
    "word": "excessive",
    "pos": "adjective",
    "topics": [
      "free speech",
      "renewable energy"
    ],
    "definition": "greater than necessary or reasonable",
    "example": "Police used excessive force against the crowd.",
    "synonyms": [
      "repressive",
      "authoritarian",
      "oppressive",
      "draconian",
      "restrictive",
      "arbitrary",
      "unjustifiable",
      "unconstitutional",
      "disproportionate",
      "intrusive",
      "heavy-handed",
      "overreaching",
      "stifling",
      "suppressive",
      "coercive",
      "exploitative"
    ]
  },
  {
    "word": "unjustifiable",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "impossible to reasonably defend",
    "example": "Banning the newspaper was unjustifiable.",
    "synonyms": [
      "repressive",
      "authoritarian",
      "oppressive",
      "draconian",
      "restrictive",
      "arbitrary",
      "excessive",
      "unconstitutional",
      "disproportionate",
      "intrusive",
      "heavy-handed",
      "overreaching",
      "stifling",
      "suppressive",
      "coercive",
      "exploitative"
    ]
  },
  {
    "word": "unconstitutional",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "contrary to a constitution",
    "example": "The court declared the law unconstitutional.",
    "synonyms": [
      "repressive",
      "authoritarian",
      "oppressive",
      "draconian",
      "restrictive",
      "arbitrary",
      "excessive",
      "unjustifiable",
      "disproportionate",
      "intrusive",
      "heavy-handed",
      "overreaching",
      "stifling",
      "suppressive",
      "coercive",
      "exploitative"
    ]
  },
  {
    "word": "disproportionate",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "excessively severe compared with the situation",
    "example": "The fine was disproportionate to the offence.",
    "collocations": [
      "disproportionate restrictions"
    ],
    "synonyms": [
      "repressive",
      "authoritarian",
      "oppressive",
      "draconian",
      "restrictive",
      "arbitrary",
      "excessive",
      "unjustifiable",
      "unconstitutional",
      "intrusive",
      "heavy-handed",
      "overreaching",
      "stifling",
      "suppressive",
      "coercive",
      "exploitative"
    ]
  },
  {
    "word": "intrusive",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "interfering excessively with people's privacy or freedom",
    "example": "Intrusive monitoring made staff uncomfortable.",
    "synonyms": [
      "repressive",
      "authoritarian",
      "oppressive",
      "draconian",
      "restrictive",
      "arbitrary",
      "excessive",
      "unjustifiable",
      "unconstitutional",
      "disproportionate",
      "heavy-handed",
      "overreaching",
      "stifling",
      "suppressive",
      "coercive",
      "exploitative"
    ]
  },
  {
    "word": "heavy-handed",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "using excessive force or authority",
    "example": "The government's heavy-handed response worsened the crisis.",
    "collocations": [
      "heavy-handed regulation"
    ],
    "synonyms": [
      "repressive",
      "authoritarian",
      "oppressive",
      "draconian",
      "restrictive",
      "arbitrary",
      "excessive",
      "unjustifiable",
      "unconstitutional",
      "disproportionate",
      "intrusive",
      "overreaching",
      "stifling",
      "suppressive",
      "coercive",
      "exploitative"
    ]
  },
  {
    "word": "overreaching",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "going beyond reasonable or legitimate limits",
    "example": "The overreaching law gave officials unlimited powers.",
    "synonyms": [
      "repressive",
      "authoritarian",
      "oppressive",
      "draconian",
      "restrictive",
      "arbitrary",
      "excessive",
      "unjustifiable",
      "unconstitutional",
      "disproportionate",
      "intrusive",
      "heavy-handed",
      "stifling",
      "suppressive",
      "coercive",
      "exploitative"
    ]
  },
  {
    "word": "stifling",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "preventing free expression or development",
    "example": "The stifling atmosphere discouraged open debate.",
    "synonyms": [
      "repressive",
      "authoritarian",
      "oppressive",
      "draconian",
      "restrictive",
      "arbitrary",
      "excessive",
      "unjustifiable",
      "unconstitutional",
      "disproportionate",
      "intrusive",
      "heavy-handed",
      "overreaching",
      "suppressive",
      "coercive",
      "exploitative"
    ]
  },
  {
    "word": "suppressive",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "intended to prevent expression or opposition",
    "example": "Suppressive laws scared journalists into silence.",
    "synonyms": [
      "repressive",
      "authoritarian",
      "oppressive",
      "draconian",
      "restrictive",
      "arbitrary",
      "excessive",
      "unjustifiable",
      "unconstitutional",
      "disproportionate",
      "intrusive",
      "heavy-handed",
      "overreaching",
      "stifling",
      "coercive",
      "exploitative"
    ]
  },
  {
    "word": "fundamental",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "extremely important and basic",
    "example": "Free speech is a fundamental right.",
    "synonyms": [
      "inalienable",
      "sacrosanct",
      "constitutionally protected",
      "democratic",
      "liberal",
      "pluralistic",
      "tolerant",
      "inclusive",
      "open",
      "unrestricted",
      "legitimate",
      "reasonable",
      "proportionate",
      "justifiable"
    ]
  },
  {
    "word": "inalienable",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "unable to be taken away",
    "example": "Citizens have inalienable rights.",
    "synonyms": [
      "fundamental",
      "sacrosanct",
      "constitutionally protected",
      "democratic",
      "liberal",
      "pluralistic",
      "tolerant",
      "inclusive",
      "open",
      "unrestricted",
      "legitimate",
      "reasonable",
      "proportionate",
      "justifiable"
    ]
  },
  {
    "word": "sacrosanct",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "regarded as extremely important and not to be violated",
    "example": "Press freedom is sacrosanct in a democracy.",
    "synonyms": [
      "fundamental",
      "inalienable",
      "constitutionally protected",
      "democratic",
      "liberal",
      "pluralistic",
      "tolerant",
      "inclusive",
      "open",
      "unrestricted",
      "legitimate",
      "reasonable",
      "proportionate",
      "justifiable"
    ]
  },
  {
    "word": "constitutionally protected",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "protected by a constitution",
    "example": "Political speech is constitutionally protected.",
    "synonyms": [
      "fundamental",
      "inalienable",
      "sacrosanct",
      "democratic",
      "liberal",
      "pluralistic",
      "tolerant",
      "inclusive",
      "open",
      "unrestricted",
      "legitimate",
      "reasonable",
      "proportionate",
      "justifiable"
    ]
  },
  {
    "word": "democratic",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "consistent with democratic principles",
    "example": "A democratic society needs a free press.",
    "synonyms": [
      "fundamental",
      "inalienable",
      "sacrosanct",
      "constitutionally protected",
      "liberal",
      "pluralistic",
      "tolerant",
      "inclusive",
      "open",
      "unrestricted",
      "legitimate",
      "reasonable",
      "proportionate",
      "justifiable"
    ]
  },
  {
    "word": "liberal",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "emphasizing individual freedom and rights",
    "example": "The country has a liberal press law.",
    "synonyms": [
      "fundamental",
      "inalienable",
      "sacrosanct",
      "constitutionally protected",
      "democratic",
      "pluralistic",
      "tolerant",
      "inclusive",
      "open",
      "unrestricted",
      "legitimate",
      "reasonable",
      "proportionate",
      "justifiable"
    ]
  },
  {
    "word": "pluralistic",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "accepting and accommodating diverse views",
    "example": "A pluralistic media offers many viewpoints.",
    "synonyms": [
      "fundamental",
      "inalienable",
      "sacrosanct",
      "constitutionally protected",
      "democratic",
      "liberal",
      "tolerant",
      "inclusive",
      "open",
      "unrestricted",
      "legitimate",
      "reasonable",
      "proportionate",
      "justifiable"
    ]
  },
  {
    "word": "tolerant",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "accepting opinions or behavior one may disagree with",
    "example": "A tolerant society allows people to disagree.",
    "synonyms": [
      "fundamental",
      "inalienable",
      "sacrosanct",
      "constitutionally protected",
      "democratic",
      "liberal",
      "pluralistic",
      "inclusive",
      "open",
      "unrestricted",
      "legitimate",
      "reasonable",
      "proportionate",
      "justifiable"
    ]
  },
  {
    "word": "inclusive",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "involving different groups and perspectives",
    "example": "The panel was inclusive and heard every group.",
    "synonyms": [
      "fundamental",
      "inalienable",
      "sacrosanct",
      "constitutionally protected",
      "democratic",
      "liberal",
      "pluralistic",
      "tolerant",
      "open",
      "unrestricted",
      "legitimate",
      "reasonable",
      "proportionate",
      "justifiable"
    ]
  },
  {
    "word": "open",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "allowing ideas and opinions to be expressed",
    "example": "A healthy democracy needs an open press.",
    "synonyms": [
      "fundamental",
      "inalienable",
      "sacrosanct",
      "constitutionally protected",
      "democratic",
      "liberal",
      "pluralistic",
      "tolerant",
      "inclusive",
      "unrestricted",
      "legitimate",
      "reasonable",
      "proportionate",
      "justifiable"
    ]
  },
  {
    "word": "unrestricted",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "without significant limitations",
    "example": "Unrestricted access to the internet helps free speech.",
    "synonyms": [
      "fundamental",
      "inalienable",
      "sacrosanct",
      "constitutionally protected",
      "democratic",
      "liberal",
      "pluralistic",
      "tolerant",
      "inclusive",
      "open",
      "legitimate",
      "reasonable",
      "proportionate",
      "justifiable"
    ]
  },
  {
    "word": "legitimate",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "lawful or justified",
    "example": "Peaceful protest is a legitimate form of expression.",
    "synonyms": [
      "fundamental",
      "inalienable",
      "sacrosanct",
      "constitutionally protected",
      "democratic",
      "liberal",
      "pluralistic",
      "tolerant",
      "inclusive",
      "open",
      "unrestricted",
      "reasonable",
      "proportionate",
      "justifiable"
    ]
  },
  {
    "word": "reasonable",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "fair and sensible",
    "example": "Reasonable limits on hate speech protect minorities.",
    "synonyms": [
      "fundamental",
      "inalienable",
      "sacrosanct",
      "constitutionally protected",
      "democratic",
      "liberal",
      "pluralistic",
      "tolerant",
      "inclusive",
      "open",
      "unrestricted",
      "legitimate",
      "proportionate",
      "justifiable"
    ]
  },
  {
    "word": "proportionate",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "appropriately balanced in severity",
    "example": "The punishment must be proportionate to the offence.",
    "synonyms": [
      "fundamental",
      "inalienable",
      "sacrosanct",
      "constitutionally protected",
      "democratic",
      "liberal",
      "pluralistic",
      "tolerant",
      "inclusive",
      "open",
      "unrestricted",
      "legitimate",
      "reasonable",
      "justifiable"
    ]
  },
  {
    "word": "justifiable",
    "pos": "adjective",
    "topics": [
      "free speech"
    ],
    "definition": "capable of being defended with good reasons",
    "example": "Some limits on speech are justifiable.",
    "synonyms": [
      "fundamental",
      "inalienable",
      "sacrosanct",
      "constitutionally protected",
      "democratic",
      "liberal",
      "pluralistic",
      "tolerant",
      "inclusive",
      "open",
      "unrestricted",
      "legitimate",
      "reasonable",
      "proportionate"
    ]
  },
  {
    "word": "binding",
    "pos": "adjective",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "not to be avoided or broken",
    "example": "The court's decision is binding on all lower courts.",
    "synonyms": [
      "peremptory"
    ]
  },
  {
    "word": "peremptory",
    "pos": "adjective",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "expecting to be obeyed immediately and without any questions",
    "example": "The judge issued a peremptory order to leave the room.",
    "synonyms": [
      "binding"
    ]
  },
  {
    "word": "enact",
    "pos": "verb",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "to put something into action, especially to make something law",
    "example": "Parliament voted to enact the new law.",
    "synonyms": [
      "ratification",
      "legislation"
    ]
  },
  {
    "word": "trial",
    "pos": "noun",
    "topics": [
      "law systems",
      "crime and punishment"
    ],
    "definition": "the hearing of statements and showing of evidence in a law court to judge whether a person is guilty or to decide a legal matter",
    "example": "The trial lasted three weeks.",
    "synonyms": [
      "litigation",
      "lawsuit"
    ]
  },
  {
    "word": "litigation",
    "pos": "noun",
    "topics": [
      "law systems",
      "crime and punishment"
    ],
    "definition": "the process of taking a case to a court of law so that a judgment can be made",
    "example": "The company is facing years of litigation.",
    "synonyms": [
      "lawsuit",
      "trial"
    ]
  },
  {
    "word": "plaintiff",
    "pos": "noun",
    "topics": [
      "law systems",
      "crime and punishment"
    ],
    "definition": "someone who makes a legal complaint against someone else in court",
    "example": "The plaintiff asked the court for compensation.",
    "synonyms": [
      "defendant"
    ]
  },
  {
    "word": "defendant",
    "pos": "noun",
    "topics": [
      "law systems",
      "crime and punishment"
    ],
    "definition": "a person in a law case who is accused of having done something illegal",
    "example": "The defendant pleaded not guilty.",
    "synonyms": [
      "plaintiff"
    ]
  },
  {
    "word": "lawsuit",
    "pos": "noun",
    "topics": [
      "law systems",
      "crime and punishment"
    ],
    "definition": "a case taken to a law court by a person or organisation to obtain a legal decision",
    "example": "She filed a lawsuit against her former employer.",
    "synonyms": [
      "litigation",
      "trial"
    ]
  },
  {
    "word": "judicial",
    "pos": "adjective",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "relating to a judge or judges, to a law court, or to the justice system",
    "example": "The judicial branch interprets the law.",
    "synonyms": [
      "executive",
      "legislative"
    ]
  },
  {
    "word": "executive",
    "pos": "noun",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "the branch of government that puts laws into action and enforces them; also a person in a high position who makes decisions",
    "example": "The executive is responsible for enforcing the law.",
    "synonyms": [
      "judicial",
      "legislative"
    ]
  },
  {
    "word": "legislative",
    "pos": "adjective",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "relating to laws or the making of laws",
    "example": "The legislative branch writes the laws.",
    "synonyms": [
      "judicial",
      "executive"
    ]
  },
  {
    "word": "override",
    "pos": "verb",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "to use authority to cancel or ignore a decision",
    "example": "Parliament can override the president's veto.",
    "synonyms": [
      "overrule",
      "annul",
      "quash",
      "repeal",
      "revoke"
    ]
  },
  {
    "word": "overrule",
    "pos": "verb",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "to reject a decision or ruling using higher authority",
    "example": "The higher court may overrule the earlier decision.",
    "synonyms": [
      "override",
      "annul",
      "quash",
      "repeal",
      "revoke"
    ]
  },
  {
    "word": "repeal",
    "pos": "verb",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "to officially cancel a law",
    "example": "The government plans to repeal the old tax law.",
    "synonyms": [
      "override",
      "overrule",
      "annul",
      "quash",
      "revoke"
    ]
  },
  {
    "word": "revoke",
    "pos": "verb",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "to officially cancel a decision, permit or right",
    "example": "The authority may revoke his licence.",
    "synonyms": [
      "override",
      "overrule",
      "annul",
      "quash",
      "repeal"
    ]
  },
  {
    "word": "comparable",
    "pos": "adjective",
    "topics": [
      "general",
      "law systems"
    ],
    "definition": "similar enough to be compared; analogous",
    "example": "The two cases are comparable."
  },
  {
    "word": "applicable",
    "pos": "adjective",
    "topics": [
      "general",
      "law systems"
    ],
    "definition": "relevant to a particular situation and able to be applied to it",
    "example": "The rule is not applicable in this case."
  },
  {
    "word": "statutory",
    "pos": "adjective",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "relating to a statute, a law passed by a parliament",
    "example": "Statutory law is written and approved by a legislature.",
    "synonyms": [
      "statute"
    ]
  },
  {
    "word": "implementation",
    "pos": "noun",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "the act of putting a plan into action or of starting to use something",
    "example": "The implementation of the new rules begins in May.",
    "synonyms": [
      "ratification"
    ]
  },
  {
    "word": "ratification",
    "pos": "noun",
    "topics": [
      "common law/civil law",
      "law systems"
    ],
    "definition": "the process of making an agreement official",
    "example": "The treaty needs ratification by parliament.",
    "synonyms": [
      "enact",
      "implementation"
    ]
  },
  {
    "word": "basically",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "in the simplest terms; at the most basic level",
    "example": "Basically, the plan is to start next week.",
    "synonyms": [
      "essentially",
      "primarily",
      "fundamentally",
      "chiefly",
      "predominantly",
      "in essence",
      "at its core",
      "above all",
      "largely",
      "mainly",
      "mostly"
    ]
  },
  {
    "word": "essentially",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to say what is most basic or true about something, ignoring small details",
    "example": "Essentially, the new rule is a tax on emissions.",
    "replaces": [
      "basically"
    ],
    "synonyms": [
      "basically",
      "primarily",
      "fundamentally",
      "chiefly",
      "predominantly",
      "in essence",
      "at its core",
      "above all",
      "largely",
      "mainly",
      "mostly"
    ]
  },
  {
    "word": "primarily",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "mainly; for the most part",
    "example": "The study focuses primarily on urban students.",
    "replaces": [
      "mainly",
      "basically"
    ],
    "synonyms": [
      "basically",
      "essentially",
      "fundamentally",
      "chiefly",
      "predominantly",
      "in essence",
      "at its core",
      "above all",
      "largely",
      "mainly",
      "mostly"
    ]
  },
  {
    "word": "fundamentally",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "in a way that affects the base or most important part of something",
    "example": "The two theories are fundamentally different.",
    "replaces": [
      "basically"
    ],
    "synonyms": [
      "basically",
      "essentially",
      "primarily",
      "chiefly",
      "predominantly",
      "in essence",
      "at its core",
      "above all",
      "largely",
      "mainly",
      "mostly"
    ]
  },
  {
    "word": "chiefly",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "above all; most importantly",
    "example": "The delay was caused chiefly by a lack of funding.",
    "replaces": [
      "mainly"
    ],
    "synonyms": [
      "basically",
      "essentially",
      "primarily",
      "fundamentally",
      "predominantly",
      "in essence",
      "at its core",
      "above all",
      "largely",
      "mainly",
      "mostly"
    ]
  },
  {
    "word": "predominantly",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "mostly; in the largest number or amount",
    "example": "The audience was predominantly young people.",
    "replaces": [
      "mostly"
    ],
    "synonyms": [
      "basically",
      "essentially",
      "primarily",
      "fundamentally",
      "chiefly",
      "in essence",
      "at its core",
      "above all",
      "largely",
      "mainly",
      "mostly"
    ]
  },
  {
    "word": "in essence",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "used to give the most basic point of what you are saying",
    "example": "In essence, the article argues for stronger privacy laws.",
    "replaces": [
      "basically"
    ],
    "synonyms": [
      "basically",
      "essentially",
      "primarily",
      "fundamentally",
      "chiefly",
      "predominantly",
      "at its core",
      "above all",
      "largely",
      "mainly",
      "mostly"
    ]
  },
  {
    "word": "at its core",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "used to say what the main idea or purpose of something really is",
    "example": "At its core, the debate is about trust.",
    "replaces": [
      "basically"
    ],
    "synonyms": [
      "basically",
      "essentially",
      "primarily",
      "fundamentally",
      "chiefly",
      "predominantly",
      "in essence",
      "above all",
      "largely",
      "mainly",
      "mostly"
    ]
  },
  {
    "word": "above all",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to say what is the most important thing of all",
    "example": "Above all, the law must be fair.",
    "synonyms": [
      "basically",
      "essentially",
      "primarily",
      "fundamentally",
      "chiefly",
      "predominantly",
      "in essence",
      "at its core",
      "largely",
      "mainly",
      "mostly"
    ]
  },
  {
    "word": "largely",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "to a large degree; mostly",
    "example": "The results were largely positive.",
    "replaces": [
      "mostly"
    ],
    "synonyms": [
      "basically",
      "essentially",
      "primarily",
      "fundamentally",
      "chiefly",
      "predominantly",
      "in essence",
      "at its core",
      "above all",
      "mainly",
      "mostly"
    ]
  },
  {
    "word": "mainly",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "for the most part",
    "example": "The tourists come mainly in summer.",
    "synonyms": [
      "basically",
      "essentially",
      "primarily",
      "fundamentally",
      "chiefly",
      "predominantly",
      "in essence",
      "at its core",
      "above all",
      "largely",
      "mostly"
    ]
  },
  {
    "word": "mostly",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "in most cases or for the most part",
    "example": "The students were mostly from nearby villages.",
    "synonyms": [
      "basically",
      "essentially",
      "primarily",
      "fundamentally",
      "chiefly",
      "predominantly",
      "in essence",
      "at its core",
      "above all",
      "largely",
      "mainly"
    ]
  },
  {
    "word": "crucial",
    "pos": "adjective",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "extremely important because the result depends on it",
    "example": "Clear evidence is crucial in a trial.",
    "replaces": [
      "important"
    ],
    "synonyms": [
      "vital",
      "paramount",
      "indispensable",
      "integral",
      "cornerstone",
      "quintessential",
      "essential",
      "key",
      "significant",
      "central",
      "critical"
    ]
  },
  {
    "word": "vital",
    "pos": "adjective",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "absolutely necessary for something to succeed or survive",
    "example": "Water is vital for life.",
    "replaces": [
      "important"
    ],
    "synonyms": [
      "crucial",
      "paramount",
      "indispensable",
      "integral",
      "cornerstone",
      "quintessential",
      "essential",
      "key",
      "significant",
      "central",
      "critical"
    ]
  },
  {
    "word": "paramount",
    "pos": "adjective",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "more important than anything else",
    "example": "Safety is paramount.",
    "replaces": [
      "important"
    ],
    "synonyms": [
      "crucial",
      "vital",
      "indispensable",
      "integral",
      "cornerstone",
      "quintessential",
      "essential",
      "key",
      "significant",
      "central",
      "critical"
    ]
  },
  {
    "word": "indispensable",
    "pos": "adjective",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "so important that you cannot manage without it",
    "example": "A good dictionary is indispensable for learners.",
    "replaces": [
      "important"
    ],
    "synonyms": [
      "crucial",
      "vital",
      "paramount",
      "integral",
      "cornerstone",
      "quintessential",
      "essential",
      "key",
      "significant",
      "central",
      "critical"
    ]
  },
  {
    "word": "integral",
    "pos": "adjective",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "being an essential part of something",
    "example": "Discussion is integral to the course.",
    "replaces": [
      "important"
    ],
    "synonyms": [
      "crucial",
      "vital",
      "paramount",
      "indispensable",
      "cornerstone",
      "quintessential",
      "essential",
      "key",
      "significant",
      "central",
      "critical"
    ]
  },
  {
    "word": "cornerstone",
    "pos": "noun",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "the most important part that something else is built on",
    "example": "Trust is the cornerstone of any partnership.",
    "replaces": [
      "important"
    ],
    "synonyms": [
      "crucial",
      "vital",
      "paramount",
      "indispensable",
      "integral",
      "quintessential",
      "essential",
      "key",
      "significant",
      "central",
      "critical"
    ]
  },
  {
    "word": "quintessential",
    "pos": "adjective",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "being the perfect or most typical example of something (not simply \"important\")",
    "example": "A flat white is the quintessential cafe drink.",
    "synonyms": [
      "crucial",
      "vital",
      "paramount",
      "indispensable",
      "integral",
      "cornerstone",
      "essential",
      "key",
      "significant",
      "central",
      "critical"
    ]
  },
  {
    "word": "essential",
    "pos": "adjective",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "absolutely necessary",
    "example": "Good sleep is essential for learning.",
    "replaces": [
      "important"
    ],
    "synonyms": [
      "crucial",
      "vital",
      "paramount",
      "indispensable",
      "integral",
      "cornerstone",
      "quintessential",
      "key",
      "significant",
      "central",
      "critical"
    ]
  },
  {
    "word": "key",
    "pos": "adjective",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "most important",
    "example": "A key factor in the decision was cost.",
    "replaces": [
      "important"
    ],
    "synonyms": [
      "crucial",
      "vital",
      "paramount",
      "indispensable",
      "integral",
      "cornerstone",
      "quintessential",
      "essential",
      "significant",
      "central",
      "critical"
    ]
  },
  {
    "word": "significant",
    "pos": "adjective",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "important enough to have a noticeable effect",
    "example": "There was a significant rise in prices.",
    "replaces": [
      "important"
    ],
    "synonyms": [
      "crucial",
      "vital",
      "paramount",
      "indispensable",
      "integral",
      "cornerstone",
      "quintessential",
      "essential",
      "key",
      "central",
      "critical"
    ]
  },
  {
    "word": "central",
    "pos": "adjective",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "most important or main",
    "example": "Fairness is central to the justice system.",
    "replaces": [
      "important"
    ],
    "synonyms": [
      "crucial",
      "vital",
      "paramount",
      "indispensable",
      "integral",
      "cornerstone",
      "quintessential",
      "essential",
      "key",
      "significant",
      "critical"
    ]
  },
  {
    "word": "critical",
    "pos": "adjective",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "extremely important at a decisive moment",
    "example": "The first week is critical for new students.",
    "replaces": [
      "important"
    ],
    "synonyms": [
      "crucial",
      "vital",
      "paramount",
      "indispensable",
      "integral",
      "cornerstone",
      "quintessential",
      "essential",
      "key",
      "significant",
      "central"
    ]
  },
  {
    "word": "however",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to introduce a point that contrasts with what you have just said",
    "example": "The results were promising. However, the sample was small.",
    "replaces": [
      "but"
    ],
    "synonyms": [
      "nevertheless",
      "nonetheless",
      "even so",
      "that said",
      "having said that",
      "whereas",
      "conversely",
      "in contrast",
      "on the other hand",
      "admittedly",
      "granted",
      "on the contrary",
      "notwithstanding",
      "although",
      "though",
      "still",
      "mind you"
    ]
  },
  {
    "word": "nevertheless",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "despite what was just said",
    "example": "The task was difficult. Nevertheless, she finished early.",
    "replaces": [
      "but",
      "however"
    ],
    "synonyms": [
      "however",
      "nonetheless",
      "even so",
      "that said",
      "having said that",
      "whereas",
      "conversely",
      "in contrast",
      "on the other hand",
      "admittedly",
      "granted",
      "on the contrary",
      "notwithstanding",
      "although",
      "though",
      "still",
      "mind you"
    ]
  },
  {
    "word": "nonetheless",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "despite what was just said (very close to nevertheless)",
    "example": "The risks are high; nonetheless, many people invest.",
    "replaces": [
      "but",
      "however"
    ],
    "synonyms": [
      "however",
      "nevertheless",
      "even so",
      "that said",
      "having said that",
      "whereas",
      "conversely",
      "in contrast",
      "on the other hand",
      "admittedly",
      "granted",
      "on the contrary",
      "notwithstanding",
      "although",
      "though",
      "still",
      "mind you"
    ]
  },
  {
    "word": "even so",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to say that something is true in spite of what was just said",
    "example": "It rained all week. Even so, the festival was a success.",
    "replaces": [
      "but"
    ],
    "synonyms": [
      "however",
      "nevertheless",
      "nonetheless",
      "that said",
      "having said that",
      "whereas",
      "conversely",
      "in contrast",
      "on the other hand",
      "admittedly",
      "granted",
      "on the contrary",
      "notwithstanding",
      "although",
      "though",
      "still",
      "mind you"
    ]
  },
  {
    "word": "that said",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to add a point that limits or weakens what you have just said",
    "example": "The plan is good. That said, it is expensive.",
    "replaces": [
      "but"
    ],
    "synonyms": [
      "however",
      "nevertheless",
      "nonetheless",
      "even so",
      "having said that",
      "whereas",
      "conversely",
      "in contrast",
      "on the other hand",
      "admittedly",
      "granted",
      "on the contrary",
      "notwithstanding",
      "although",
      "though",
      "still",
      "mind you"
    ]
  },
  {
    "word": "having said that",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used like \"that said\" to add a limiting point (a little longer)",
    "example": "He is talented. Having said that, he needs more practice.",
    "replaces": [
      "but"
    ],
    "synonyms": [
      "however",
      "nevertheless",
      "nonetheless",
      "even so",
      "that said",
      "whereas",
      "conversely",
      "in contrast",
      "on the other hand",
      "admittedly",
      "granted",
      "on the contrary",
      "notwithstanding",
      "although",
      "though",
      "still",
      "mind you"
    ]
  },
  {
    "word": "whereas",
    "pos": "conjunction",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "used to compare two things that are different",
    "example": "Civil law is codified, whereas common law relies on precedent.",
    "replaces": [
      "but"
    ],
    "synonyms": [
      "however",
      "nevertheless",
      "nonetheless",
      "even so",
      "that said",
      "having said that",
      "conversely",
      "in contrast",
      "on the other hand",
      "admittedly",
      "granted",
      "on the contrary",
      "notwithstanding",
      "although",
      "though",
      "still",
      "mind you"
    ]
  },
  {
    "word": "conversely",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "used to introduce the opposite idea",
    "example": "Prices rise when demand is high. Conversely, they fall when demand drops.",
    "synonyms": [
      "however",
      "nevertheless",
      "nonetheless",
      "even so",
      "that said",
      "having said that",
      "whereas",
      "in contrast",
      "on the other hand",
      "admittedly",
      "granted",
      "on the contrary",
      "notwithstanding",
      "although",
      "though",
      "still",
      "mind you"
    ]
  },
  {
    "word": "in contrast",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to show that two things are very different",
    "example": "Common law uses precedent. In contrast, civil law relies on written codes.",
    "synonyms": [
      "however",
      "nevertheless",
      "nonetheless",
      "even so",
      "that said",
      "having said that",
      "whereas",
      "conversely",
      "on the other hand",
      "admittedly",
      "granted",
      "on the contrary",
      "notwithstanding",
      "although",
      "though",
      "still",
      "mind you"
    ]
  },
  {
    "word": "on the other hand",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to introduce another side of an argument",
    "example": "Cities offer jobs. On the other hand, they are expensive.",
    "synonyms": [
      "however",
      "nevertheless",
      "nonetheless",
      "even so",
      "that said",
      "having said that",
      "whereas",
      "conversely",
      "in contrast",
      "admittedly",
      "granted",
      "on the contrary",
      "notwithstanding",
      "although",
      "though",
      "still",
      "mind you"
    ]
  },
  {
    "word": "admittedly",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "used to admit that something is true although it weakens your argument",
    "example": "Admittedly, the survey was small, but the trend is clear.",
    "synonyms": [
      "however",
      "nevertheless",
      "nonetheless",
      "even so",
      "that said",
      "having said that",
      "whereas",
      "conversely",
      "in contrast",
      "on the other hand",
      "granted",
      "on the contrary",
      "notwithstanding",
      "although",
      "though",
      "still",
      "mind you"
    ]
  },
  {
    "word": "granted",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to accept a point before you disagree",
    "example": "Granted, the plan is costly, but it will save money later.",
    "synonyms": [
      "however",
      "nevertheless",
      "nonetheless",
      "even so",
      "that said",
      "having said that",
      "whereas",
      "conversely",
      "in contrast",
      "on the other hand",
      "admittedly",
      "on the contrary",
      "notwithstanding",
      "although",
      "though",
      "still",
      "mind you"
    ]
  },
  {
    "word": "on the contrary",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to say that the opposite of what was just said is true",
    "example": "The law did not weaken the press. On the contrary, it protected it.",
    "synonyms": [
      "however",
      "nevertheless",
      "nonetheless",
      "even so",
      "that said",
      "having said that",
      "whereas",
      "conversely",
      "in contrast",
      "on the other hand",
      "admittedly",
      "granted",
      "notwithstanding",
      "although",
      "though",
      "still",
      "mind you"
    ]
  },
  {
    "word": "notwithstanding",
    "pos": "preposition",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "in spite of (formal)",
    "example": "Notwithstanding the delays, the project finished on time.",
    "replaces": [
      "despite"
    ],
    "synonyms": [
      "however",
      "nevertheless",
      "nonetheless",
      "even so",
      "that said",
      "having said that",
      "whereas",
      "conversely",
      "in contrast",
      "on the other hand",
      "admittedly",
      "granted",
      "on the contrary",
      "although",
      "though",
      "still",
      "mind you"
    ]
  },
  {
    "word": "although",
    "pos": "conjunction",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used to introduce a contrasting idea in the same sentence",
    "example": "Although it was late, we kept working.",
    "synonyms": [
      "however",
      "nevertheless",
      "nonetheless",
      "even so",
      "that said",
      "having said that",
      "whereas",
      "conversely",
      "in contrast",
      "on the other hand",
      "admittedly",
      "granted",
      "on the contrary",
      "notwithstanding",
      "though",
      "still",
      "mind you"
    ]
  },
  {
    "word": "though",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used at the end of a sentence to add a contrast",
    "example": "The food was good. The service was slow, though.",
    "synonyms": [
      "however",
      "nevertheless",
      "nonetheless",
      "even so",
      "that said",
      "having said that",
      "whereas",
      "conversely",
      "in contrast",
      "on the other hand",
      "admittedly",
      "granted",
      "on the contrary",
      "notwithstanding",
      "although",
      "still",
      "mind you"
    ]
  },
  {
    "word": "still",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "despite that",
    "example": "It was expensive. Still, it was worth it.",
    "replaces": [
      "but"
    ],
    "synonyms": [
      "however",
      "nevertheless",
      "nonetheless",
      "even so",
      "that said",
      "having said that",
      "whereas",
      "conversely",
      "in contrast",
      "on the other hand",
      "admittedly",
      "granted",
      "on the contrary",
      "notwithstanding",
      "although",
      "though",
      "mind you"
    ]
  },
  {
    "word": "mind you",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used in speech to add a point that limits what you just said",
    "example": "It is a nice flat. Mind you, it is far from the centre.",
    "synonyms": [
      "however",
      "nevertheless",
      "nonetheless",
      "even so",
      "that said",
      "having said that",
      "whereas",
      "conversely",
      "in contrast",
      "on the other hand",
      "admittedly",
      "granted",
      "on the contrary",
      "notwithstanding",
      "although",
      "though",
      "still"
    ]
  },
  {
    "word": "moreover",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "used to add a stronger or extra point",
    "example": "The scheme is cheap. Moreover, it is easy to run.",
    "replaces": [
      "also",
      "and"
    ],
    "synonyms": [
      "furthermore",
      "in addition",
      "additionally",
      "besides",
      "what is more",
      "not to mention",
      "on top of that",
      "also",
      "as well as",
      "equally",
      "likewise"
    ]
  },
  {
    "word": "furthermore",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "used to add another important point",
    "example": "Furthermore, the data supports this claim.",
    "replaces": [
      "also",
      "and"
    ],
    "synonyms": [
      "moreover",
      "in addition",
      "additionally",
      "besides",
      "what is more",
      "not to mention",
      "on top of that",
      "also",
      "as well as",
      "equally",
      "likewise"
    ]
  },
  {
    "word": "in addition",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to add another point",
    "example": "In addition, students must submit a short report.",
    "replaces": [
      "also"
    ],
    "synonyms": [
      "moreover",
      "furthermore",
      "additionally",
      "besides",
      "what is more",
      "not to mention",
      "on top of that",
      "also",
      "as well as",
      "equally",
      "likewise"
    ]
  },
  {
    "word": "additionally",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to add one more point (a little formal)",
    "example": "Additionally, the library opens on weekends.",
    "replaces": [
      "also"
    ],
    "synonyms": [
      "moreover",
      "furthermore",
      "in addition",
      "besides",
      "what is more",
      "not to mention",
      "on top of that",
      "also",
      "as well as",
      "equally",
      "likewise"
    ]
  },
  {
    "word": "besides",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to add a point that makes your argument stronger",
    "example": "I do not want to go. Besides, it is late.",
    "synonyms": [
      "moreover",
      "furthermore",
      "in addition",
      "additionally",
      "what is more",
      "not to mention",
      "on top of that",
      "also",
      "as well as",
      "equally",
      "likewise"
    ]
  },
  {
    "word": "what is more",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to add a surprising or stronger extra point",
    "example": "The hotel was cheap and, what is more, it was spotless.",
    "synonyms": [
      "moreover",
      "furthermore",
      "in addition",
      "additionally",
      "besides",
      "not to mention",
      "on top of that",
      "also",
      "as well as",
      "equally",
      "likewise"
    ]
  },
  {
    "word": "not to mention",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to add something that is even more extreme",
    "example": "It is expensive, not to mention hard to find.",
    "synonyms": [
      "moreover",
      "furthermore",
      "in addition",
      "additionally",
      "besides",
      "what is more",
      "on top of that",
      "also",
      "as well as",
      "equally",
      "likewise"
    ]
  },
  {
    "word": "on top of that",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used in speech to add another problem or point",
    "example": "It was cold and, on top of that, it started to rain.",
    "synonyms": [
      "moreover",
      "furthermore",
      "in addition",
      "additionally",
      "besides",
      "what is more",
      "not to mention",
      "also",
      "as well as",
      "equally",
      "likewise"
    ]
  },
  {
    "word": "also",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used to add an extra point",
    "example": "She also speaks German.",
    "synonyms": [
      "moreover",
      "furthermore",
      "in addition",
      "additionally",
      "besides",
      "what is more",
      "not to mention",
      "on top of that",
      "as well as",
      "equally",
      "likewise"
    ]
  },
  {
    "word": "as well as",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used to add one more thing to a list",
    "example": "The course covers writing as well as speaking.",
    "synonyms": [
      "moreover",
      "furthermore",
      "in addition",
      "additionally",
      "besides",
      "what is more",
      "not to mention",
      "on top of that",
      "also",
      "equally",
      "likewise"
    ]
  },
  {
    "word": "equally",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "used to add a point of the same importance",
    "example": "Equally, the costs of doing nothing must be considered.",
    "synonyms": [
      "moreover",
      "furthermore",
      "in addition",
      "additionally",
      "besides",
      "what is more",
      "not to mention",
      "on top of that",
      "also",
      "as well as",
      "likewise"
    ]
  },
  {
    "word": "likewise",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "used to say that the same is true for another thing",
    "example": "Citizens must obey the law. Likewise, officials must obey it.",
    "synonyms": [
      "moreover",
      "furthermore",
      "in addition",
      "additionally",
      "besides",
      "what is more",
      "not to mention",
      "on top of that",
      "also",
      "as well as",
      "equally"
    ]
  },
  {
    "word": "subsequently",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "afterwards; at a later time",
    "example": "She trained in law and subsequently became a judge.",
    "replaces": [
      "after that",
      "then"
    ],
    "synonyms": [
      "thereafter",
      "afterwards",
      "following that",
      "then",
      "later",
      "meanwhile",
      "previously",
      "initially",
      "eventually",
      "ultimately",
      "to begin with",
      "first of all",
      "in the first place",
      "at the same time"
    ]
  },
  {
    "word": "thereafter",
    "pos": "adverb",
    "topics": ["conversational", "process description"],
    "level": "academic",
    "definition": "from that time onwards",
    "example": "He moved abroad and thereafter wrote only in English.",
    "replaces": [
      "after that"
    ],
    "synonyms": [
      "subsequently",
      "afterwards",
      "following that",
      "then",
      "later",
      "meanwhile",
      "previously",
      "initially",
      "eventually",
      "ultimately",
      "to begin with",
      "first of all",
      "in the first place",
      "at the same time"
    ]
  },
  {
    "word": "afterwards",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "at a later time, after something has happened",
    "example": "We took the exam and went home afterwards.",
    "replaces": [
      "after that"
    ],
    "synonyms": [
      "subsequently",
      "thereafter",
      "following that",
      "then",
      "later",
      "meanwhile",
      "previously",
      "initially",
      "eventually",
      "ultimately",
      "to begin with",
      "first of all",
      "in the first place",
      "at the same time"
    ]
  },
  {
    "word": "following that",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "after that; next",
    "example": "Following that, the committee voted.",
    "replaces": [
      "after that"
    ],
    "synonyms": [
      "subsequently",
      "thereafter",
      "afterwards",
      "then",
      "later",
      "meanwhile",
      "previously",
      "initially",
      "eventually",
      "ultimately",
      "to begin with",
      "first of all",
      "in the first place",
      "at the same time"
    ]
  },
  {
    "word": "then",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "next; after that",
    "example": "First we read the case, then we discussed it.",
    "synonyms": [
      "subsequently",
      "thereafter",
      "afterwards",
      "following that",
      "later",
      "meanwhile",
      "previously",
      "initially",
      "eventually",
      "ultimately",
      "to begin with",
      "first of all",
      "in the first place",
      "at the same time"
    ]
  },
  {
    "word": "later",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "at a time after now or after the time you mentioned",
    "example": "We can talk about it later.",
    "synonyms": [
      "subsequently",
      "thereafter",
      "afterwards",
      "following that",
      "then",
      "meanwhile",
      "previously",
      "initially",
      "eventually",
      "ultimately",
      "to begin with",
      "first of all",
      "in the first place",
      "at the same time"
    ]
  },
  {
    "word": "meanwhile",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "during the same time as something else is happening",
    "example": "Meanwhile, the defence prepared its case.",
    "synonyms": [
      "subsequently",
      "thereafter",
      "afterwards",
      "following that",
      "then",
      "later",
      "previously",
      "initially",
      "eventually",
      "ultimately",
      "to begin with",
      "first of all",
      "in the first place",
      "at the same time"
    ]
  },
  {
    "word": "previously",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "before the time you are talking about",
    "example": "Previously, the law allowed no appeals.",
    "replaces": [
      "before"
    ],
    "synonyms": [
      "subsequently",
      "thereafter",
      "afterwards",
      "following that",
      "then",
      "later",
      "meanwhile",
      "initially",
      "eventually",
      "ultimately",
      "to begin with",
      "first of all",
      "in the first place",
      "at the same time"
    ]
  },
  {
    "word": "initially",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "at the beginning",
    "example": "Initially, the idea seemed unrealistic.",
    "replaces": [
      "at first"
    ],
    "synonyms": [
      "subsequently",
      "thereafter",
      "afterwards",
      "following that",
      "then",
      "later",
      "meanwhile",
      "previously",
      "eventually",
      "ultimately",
      "to begin with",
      "first of all",
      "in the first place",
      "at the same time"
    ]
  },
  {
    "word": "eventually",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "after a long time or a long process",
    "example": "Eventually, the court reached a verdict.",
    "synonyms": [
      "subsequently",
      "thereafter",
      "afterwards",
      "following that",
      "then",
      "later",
      "meanwhile",
      "previously",
      "initially",
      "ultimately",
      "to begin with",
      "first of all",
      "in the first place",
      "at the same time"
    ]
  },
  {
    "word": "ultimately",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "finally, after everything else has been considered",
    "example": "Ultimately, the decision rests with the judge.",
    "synonyms": [
      "subsequently",
      "thereafter",
      "afterwards",
      "following that",
      "then",
      "later",
      "meanwhile",
      "previously",
      "initially",
      "eventually",
      "to begin with",
      "first of all",
      "in the first place",
      "at the same time"
    ]
  },
  {
    "word": "to begin with",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to introduce the first point",
    "example": "To begin with, we need a clear definition.",
    "synonyms": [
      "subsequently",
      "thereafter",
      "afterwards",
      "following that",
      "then",
      "later",
      "meanwhile",
      "previously",
      "initially",
      "eventually",
      "ultimately",
      "first of all",
      "in the first place",
      "at the same time"
    ]
  },
  {
    "word": "first of all",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used to introduce the first point or step",
    "example": "First of all, let me explain the term.",
    "synonyms": [
      "subsequently",
      "thereafter",
      "afterwards",
      "following that",
      "then",
      "later",
      "meanwhile",
      "previously",
      "initially",
      "eventually",
      "ultimately",
      "to begin with",
      "in the first place",
      "at the same time"
    ]
  },
  {
    "word": "in the first place",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to refer to the original reason or situation",
    "example": "Why did he lie in the first place?",
    "synonyms": [
      "subsequently",
      "thereafter",
      "afterwards",
      "following that",
      "then",
      "later",
      "meanwhile",
      "previously",
      "initially",
      "eventually",
      "ultimately",
      "to begin with",
      "first of all",
      "at the same time"
    ]
  },
  {
    "word": "at the same time",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to say that two things happen together, or to add a balancing point",
    "example": "At the same time, citizens need privacy.",
    "synonyms": [
      "subsequently",
      "thereafter",
      "afterwards",
      "following that",
      "then",
      "later",
      "meanwhile",
      "previously",
      "initially",
      "eventually",
      "ultimately",
      "to begin with",
      "first of all",
      "in the first place"
    ]
  },
  {
    "word": "therefore",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to introduce a result of what you have just said",
    "example": "The evidence is weak; therefore, the claim is doubtful.",
    "replaces": [
      "so"
    ],
    "synonyms": [
      "consequently",
      "as a result",
      "hence",
      "thus",
      "accordingly",
      "for this reason",
      "that is why",
      "as a consequence",
      "so",
      "due to",
      "owing to"
    ]
  },
  {
    "word": "consequently",
    "pos": "adverb",
    "topics": ["conversational", "ecology"],
    "level": "academic",
    "definition": "as a result",
    "example": "Funding was cut. Consequently, the programme closed.",
    "replaces": [
      "so"
    ],
    "synonyms": [
      "therefore",
      "as a result",
      "hence",
      "thus",
      "accordingly",
      "for this reason",
      "that is why",
      "as a consequence",
      "so",
      "due to",
      "owing to"
    ]
  },
  {
    "word": "as a result",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "because of what has just been mentioned",
    "example": "As a result, prices fell.",
    "replaces": [
      "so"
    ],
    "synonyms": [
      "therefore",
      "consequently",
      "hence",
      "thus",
      "accordingly",
      "for this reason",
      "that is why",
      "as a consequence",
      "so",
      "due to",
      "owing to"
    ]
  },
  {
    "word": "hence",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "for this reason (formal)",
    "example": "The law is unclear, hence the confusion.",
    "replaces": [
      "so"
    ],
    "synonyms": [
      "therefore",
      "consequently",
      "as a result",
      "thus",
      "accordingly",
      "for this reason",
      "that is why",
      "as a consequence",
      "so",
      "due to",
      "owing to"
    ]
  },
  {
    "word": "thus",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "in this way; as a result (formal)",
    "example": "The data are limited, and thus the conclusions are tentative.",
    "replaces": [
      "so"
    ],
    "synonyms": [
      "therefore",
      "consequently",
      "as a result",
      "hence",
      "accordingly",
      "for this reason",
      "that is why",
      "as a consequence",
      "so",
      "due to",
      "owing to"
    ]
  },
  {
    "word": "accordingly",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "in a way that suits the situation",
    "example": "The rules changed, and companies adjusted accordingly.",
    "synonyms": [
      "therefore",
      "consequently",
      "as a result",
      "hence",
      "thus",
      "for this reason",
      "that is why",
      "as a consequence",
      "so",
      "due to",
      "owing to"
    ]
  },
  {
    "word": "for this reason",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to give the reason for what has just been said",
    "example": "For this reason, the law was amended.",
    "synonyms": [
      "therefore",
      "consequently",
      "as a result",
      "hence",
      "thus",
      "accordingly",
      "that is why",
      "as a consequence",
      "so",
      "due to",
      "owing to"
    ]
  },
  {
    "word": "that is why",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used in speech to give the reason for something",
    "example": "That is why I always check my sources.",
    "replaces": [
      "so"
    ],
    "synonyms": [
      "therefore",
      "consequently",
      "as a result",
      "hence",
      "thus",
      "accordingly",
      "for this reason",
      "as a consequence",
      "so",
      "due to",
      "owing to"
    ]
  },
  {
    "word": "as a consequence",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "as a result, especially of something negative",
    "example": "As a consequence, many small shops closed.",
    "replaces": [
      "so"
    ],
    "synonyms": [
      "therefore",
      "consequently",
      "as a result",
      "hence",
      "thus",
      "accordingly",
      "for this reason",
      "that is why",
      "so",
      "due to",
      "owing to"
    ]
  },
  {
    "word": "so",
    "pos": "conjunction",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used to show a result",
    "example": "It was raining, so we stayed in.",
    "synonyms": [
      "therefore",
      "consequently",
      "as a result",
      "hence",
      "thus",
      "accordingly",
      "for this reason",
      "that is why",
      "as a consequence",
      "due to",
      "owing to"
    ]
  },
  {
    "word": "due to",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "caused by",
    "example": "The delay was due to bad weather.",
    "replaces": [
      "because of"
    ],
    "synonyms": [
      "therefore",
      "consequently",
      "as a result",
      "hence",
      "thus",
      "accordingly",
      "for this reason",
      "that is why",
      "as a consequence",
      "so",
      "owing to"
    ]
  },
  {
    "word": "owing to",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "because of (formal)",
    "example": "Owing to the strike, trains were cancelled.",
    "replaces": [
      "because of"
    ],
    "synonyms": [
      "therefore",
      "consequently",
      "as a result",
      "hence",
      "thus",
      "accordingly",
      "for this reason",
      "that is why",
      "as a consequence",
      "so",
      "due to"
    ]
  },
  {
    "word": "for instance",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to give an example",
    "example": "Some crimes, for instance fraud, are hard to prove.",
    "replaces": [
      "for example"
    ],
    "synonyms": [
      "for example",
      "namely",
      "in particular",
      "notably",
      "specifically",
      "to illustrate",
      "such as",
      "a case in point"
    ]
  },
  {
    "word": "for example",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used to give an example",
    "example": "Many cities, for example Tbilisi, have old towns.",
    "synonyms": [
      "for instance",
      "namely",
      "in particular",
      "notably",
      "specifically",
      "to illustrate",
      "such as",
      "a case in point"
    ]
  },
  {
    "word": "namely",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "used to name exactly what you are referring to",
    "example": "Two systems dominate, namely common law and civil law.",
    "synonyms": [
      "for instance",
      "for example",
      "in particular",
      "notably",
      "specifically",
      "to illustrate",
      "such as",
      "a case in point"
    ]
  },
  {
    "word": "in particular",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "especially; used to focus on one important case",
    "example": "I am interested in contract law in particular.",
    "replaces": [
      "especially"
    ],
    "synonyms": [
      "for instance",
      "for example",
      "namely",
      "notably",
      "specifically",
      "to illustrate",
      "such as",
      "a case in point"
    ]
  },
  {
    "word": "notably",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "used to draw attention to an important example",
    "example": "Several countries, notably Germany, use civil law.",
    "synonyms": [
      "for instance",
      "for example",
      "namely",
      "in particular",
      "specifically",
      "to illustrate",
      "such as",
      "a case in point"
    ]
  },
  {
    "word": "specifically",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to be exact about what you mean",
    "example": "The law applies specifically to online platforms.",
    "synonyms": [
      "for instance",
      "for example",
      "namely",
      "in particular",
      "notably",
      "to illustrate",
      "such as",
      "a case in point"
    ]
  },
  {
    "word": "to illustrate",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "used to introduce an example that shows your point",
    "example": "To illustrate, consider the case of the stolen painting.",
    "synonyms": [
      "for instance",
      "for example",
      "namely",
      "in particular",
      "notably",
      "specifically",
      "such as",
      "a case in point"
    ]
  },
  {
    "word": "such as",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used to introduce examples",
    "example": "Crimes such as fraud are common.",
    "synonyms": [
      "for instance",
      "for example",
      "namely",
      "in particular",
      "notably",
      "specifically",
      "to illustrate",
      "a case in point"
    ]
  },
  {
    "word": "a case in point",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "an example that clearly shows what you are saying",
    "example": "The merger is a case in point.",
    "synonyms": [
      "for instance",
      "for example",
      "namely",
      "in particular",
      "notably",
      "specifically",
      "to illustrate",
      "such as"
    ]
  },
  {
    "word": "in other words",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to say the same thing in a different, clearer way",
    "example": "The law is unenforceable. In other words, nobody can apply it.",
    "replaces": [
      "basically"
    ],
    "synonyms": [
      "that is to say",
      "put simply",
      "to put it another way",
      "what I mean is",
      "in simple terms",
      "to be more precise",
      "more precisely"
    ]
  },
  {
    "word": "that is to say",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "used to explain exactly what you mean",
    "example": "It is a civil case, that is to say, a dispute between private parties.",
    "synonyms": [
      "in other words",
      "put simply",
      "to put it another way",
      "what I mean is",
      "in simple terms",
      "to be more precise",
      "more precisely"
    ]
  },
  {
    "word": "put simply",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to give a simple version of a complicated idea",
    "example": "Put simply, a statute is a written law.",
    "replaces": [
      "basically"
    ],
    "synonyms": [
      "in other words",
      "that is to say",
      "to put it another way",
      "what I mean is",
      "in simple terms",
      "to be more precise",
      "more precisely"
    ]
  },
  {
    "word": "to put it another way",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to say something again in a different way",
    "example": "To put it another way, we cannot prove it.",
    "synonyms": [
      "in other words",
      "that is to say",
      "put simply",
      "what I mean is",
      "in simple terms",
      "to be more precise",
      "more precisely"
    ]
  },
  {
    "word": "what I mean is",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used in speech to explain your point more clearly",
    "example": "What I mean is, the rule is too vague.",
    "synonyms": [
      "in other words",
      "that is to say",
      "put simply",
      "to put it another way",
      "in simple terms",
      "to be more precise",
      "more precisely"
    ]
  },
  {
    "word": "in simple terms",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to explain something without technical words",
    "example": "In simple terms, inflation means prices go up.",
    "replaces": [
      "basically"
    ],
    "synonyms": [
      "in other words",
      "that is to say",
      "put simply",
      "to put it another way",
      "what I mean is",
      "to be more precise",
      "more precisely"
    ]
  },
  {
    "word": "to be more precise",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to give a more exact detail",
    "example": "He studied law, or, to be more precise, criminal law.",
    "synonyms": [
      "in other words",
      "that is to say",
      "put simply",
      "to put it another way",
      "what I mean is",
      "in simple terms",
      "more precisely"
    ]
  },
  {
    "word": "more precisely",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to sharpen or correct what you just said",
    "example": "She is a lawyer, or more precisely, a public prosecutor.",
    "synonyms": [
      "in other words",
      "that is to say",
      "put simply",
      "to put it another way",
      "what I mean is",
      "in simple terms",
      "to be more precise"
    ]
  },
  {
    "word": "in my view",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to give your opinion",
    "example": "In my view, the sentence was too harsh.",
    "replaces": [
      "I think"
    ],
    "synonyms": [
      "from my perspective",
      "it seems to me that",
      "personally",
      "I would argue that",
      "arguably",
      "presumably",
      "apparently",
      "seemingly",
      "to a certain extent",
      "to some degree",
      "it could be argued that",
      "as far as I am concerned",
      "to be honest",
      "frankly",
      "to be fair",
      "in my experience",
      "tend to"
    ]
  },
  {
    "word": "from my perspective",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to give your opinion based on your position or experience",
    "example": "From my perspective, the course is useful.",
    "replaces": [
      "I think"
    ],
    "synonyms": [
      "in my view",
      "it seems to me that",
      "personally",
      "I would argue that",
      "arguably",
      "presumably",
      "apparently",
      "seemingly",
      "to a certain extent",
      "to some degree",
      "it could be argued that",
      "as far as I am concerned",
      "to be honest",
      "frankly",
      "to be fair",
      "in my experience",
      "tend to"
    ]
  },
  {
    "word": "it seems to me that",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to give your opinion in a softer, less direct way",
    "example": "It seems to me that the argument is weak.",
    "replaces": [
      "I think"
    ],
    "synonyms": [
      "in my view",
      "from my perspective",
      "personally",
      "I would argue that",
      "arguably",
      "presumably",
      "apparently",
      "seemingly",
      "to a certain extent",
      "to some degree",
      "it could be argued that",
      "as far as I am concerned",
      "to be honest",
      "frankly",
      "to be fair",
      "in my experience",
      "tend to"
    ]
  },
  {
    "word": "personally",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used to say that this is your own opinion",
    "example": "Personally, I prefer short quizzes.",
    "replaces": [
      "I think"
    ],
    "synonyms": [
      "in my view",
      "from my perspective",
      "it seems to me that",
      "I would argue that",
      "arguably",
      "presumably",
      "apparently",
      "seemingly",
      "to a certain extent",
      "to some degree",
      "it could be argued that",
      "as far as I am concerned",
      "to be honest",
      "frankly",
      "to be fair",
      "in my experience",
      "tend to"
    ]
  },
  {
    "word": "I would argue that",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "used to state a view that you can support with reasons",
    "example": "I would argue that the ruling is too broad.",
    "replaces": [
      "I think"
    ],
    "synonyms": [
      "in my view",
      "from my perspective",
      "it seems to me that",
      "personally",
      "arguably",
      "presumably",
      "apparently",
      "seemingly",
      "to a certain extent",
      "to some degree",
      "it could be argued that",
      "as far as I am concerned",
      "to be honest",
      "frankly",
      "to be fair",
      "in my experience",
      "tend to"
    ]
  },
  {
    "word": "arguably",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "used to say that something can be defended as true, though not everyone agrees",
    "example": "Arguably, this is the most important ruling of the decade.",
    "synonyms": [
      "in my view",
      "from my perspective",
      "it seems to me that",
      "personally",
      "I would argue that",
      "presumably",
      "apparently",
      "seemingly",
      "to a certain extent",
      "to some degree",
      "it could be argued that",
      "as far as I am concerned",
      "to be honest",
      "frankly",
      "to be fair",
      "in my experience",
      "tend to"
    ]
  },
  {
    "word": "presumably",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "used to say that you think something is probably true",
    "example": "Presumably, the court will announce its decision soon.",
    "synonyms": [
      "in my view",
      "from my perspective",
      "it seems to me that",
      "personally",
      "I would argue that",
      "arguably",
      "apparently",
      "seemingly",
      "to a certain extent",
      "to some degree",
      "it could be argued that",
      "as far as I am concerned",
      "to be honest",
      "frankly",
      "to be fair",
      "in my experience",
      "tend to"
    ]
  },
  {
    "word": "apparently",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to say what you have heard or what seems true, without being sure",
    "example": "Apparently, the trial was postponed.",
    "synonyms": [
      "in my view",
      "from my perspective",
      "it seems to me that",
      "personally",
      "I would argue that",
      "arguably",
      "presumably",
      "seemingly",
      "to a certain extent",
      "to some degree",
      "it could be argued that",
      "as far as I am concerned",
      "to be honest",
      "frankly",
      "to be fair",
      "in my experience",
      "tend to"
    ]
  },
  {
    "word": "seemingly",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "used to say that something appears to be true, though it may not be",
    "example": "The seemingly simple rule hides many problems.",
    "synonyms": [
      "in my view",
      "from my perspective",
      "it seems to me that",
      "personally",
      "I would argue that",
      "arguably",
      "presumably",
      "apparently",
      "to a certain extent",
      "to some degree",
      "it could be argued that",
      "as far as I am concerned",
      "to be honest",
      "frankly",
      "to be fair",
      "in my experience",
      "tend to"
    ]
  },
  {
    "word": "to a certain extent",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to say that something is partly but not completely true",
    "example": "To a certain extent, the critics are right.",
    "synonyms": [
      "in my view",
      "from my perspective",
      "it seems to me that",
      "personally",
      "I would argue that",
      "arguably",
      "presumably",
      "apparently",
      "seemingly",
      "to some degree",
      "it could be argued that",
      "as far as I am concerned",
      "to be honest",
      "frankly",
      "to be fair",
      "in my experience",
      "tend to"
    ]
  },
  {
    "word": "to some degree",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "partly",
    "example": "To some degree, the delay was unavoidable.",
    "synonyms": [
      "in my view",
      "from my perspective",
      "it seems to me that",
      "personally",
      "I would argue that",
      "arguably",
      "presumably",
      "apparently",
      "seemingly",
      "to a certain extent",
      "it could be argued that",
      "as far as I am concerned",
      "to be honest",
      "frankly",
      "to be fair",
      "in my experience",
      "tend to"
    ]
  },
  {
    "word": "it could be argued that",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "used to introduce an opinion that some people might hold",
    "example": "It could be argued that the law protects the powerful.",
    "synonyms": [
      "in my view",
      "from my perspective",
      "it seems to me that",
      "personally",
      "I would argue that",
      "arguably",
      "presumably",
      "apparently",
      "seemingly",
      "to a certain extent",
      "to some degree",
      "as far as I am concerned",
      "to be honest",
      "frankly",
      "to be fair",
      "in my experience",
      "tend to"
    ]
  },
  {
    "word": "as far as I am concerned",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to say what you personally think",
    "example": "As far as I am concerned, the matter is closed.",
    "replaces": [
      "I think"
    ],
    "synonyms": [
      "in my view",
      "from my perspective",
      "it seems to me that",
      "personally",
      "I would argue that",
      "arguably",
      "presumably",
      "apparently",
      "seemingly",
      "to a certain extent",
      "to some degree",
      "it could be argued that",
      "to be honest",
      "frankly",
      "to be fair",
      "in my experience",
      "tend to"
    ]
  },
  {
    "word": "to be honest",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used in speech to say what you really think",
    "example": "To be honest, I found the reading difficult.",
    "synonyms": [
      "in my view",
      "from my perspective",
      "it seems to me that",
      "personally",
      "I would argue that",
      "arguably",
      "presumably",
      "apparently",
      "seemingly",
      "to a certain extent",
      "to some degree",
      "it could be argued that",
      "as far as I am concerned",
      "frankly",
      "to be fair",
      "in my experience",
      "tend to"
    ]
  },
  {
    "word": "frankly",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to say something openly, even if it is unpleasant",
    "example": "Frankly, the evidence is thin.",
    "synonyms": [
      "in my view",
      "from my perspective",
      "it seems to me that",
      "personally",
      "I would argue that",
      "arguably",
      "presumably",
      "apparently",
      "seemingly",
      "to a certain extent",
      "to some degree",
      "it could be argued that",
      "as far as I am concerned",
      "to be honest",
      "to be fair",
      "in my experience",
      "tend to"
    ]
  },
  {
    "word": "to be fair",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used to add a point that makes your criticism more balanced",
    "example": "To be fair, she had little time to prepare.",
    "synonyms": [
      "in my view",
      "from my perspective",
      "it seems to me that",
      "personally",
      "I would argue that",
      "arguably",
      "presumably",
      "apparently",
      "seemingly",
      "to a certain extent",
      "to some degree",
      "it could be argued that",
      "as far as I am concerned",
      "to be honest",
      "frankly",
      "in my experience",
      "tend to"
    ]
  },
  {
    "word": "in my experience",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to give an opinion based on what has happened to you",
    "example": "In my experience, short daily practice works best.",
    "synonyms": [
      "in my view",
      "from my perspective",
      "it seems to me that",
      "personally",
      "I would argue that",
      "arguably",
      "presumably",
      "apparently",
      "seemingly",
      "to a certain extent",
      "to some degree",
      "it could be argued that",
      "as far as I am concerned",
      "to be honest",
      "frankly",
      "to be fair",
      "tend to"
    ]
  },
  {
    "word": "tend to",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to say that something usually or often happens",
    "example": "Students tend to forget new words quickly.",
    "synonyms": [
      "in my view",
      "from my perspective",
      "it seems to me that",
      "personally",
      "I would argue that",
      "arguably",
      "presumably",
      "apparently",
      "seemingly",
      "to a certain extent",
      "to some degree",
      "it could be argued that",
      "as far as I am concerned",
      "to be honest",
      "frankly",
      "to be fair",
      "in my experience"
    ]
  },
  {
    "word": "by the way",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used to add a separate point or change the subject",
    "example": "By the way, the deadline moved to Friday.",
    "synonyms": [
      "anyway",
      "actually",
      "in fact",
      "as a matter of fact",
      "speaking of which",
      "come to think of it",
      "as for"
    ]
  },
  {
    "word": "anyway",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used to return to the main subject or to end a topic",
    "example": "Anyway, back to the main question.",
    "synonyms": [
      "by the way",
      "actually",
      "in fact",
      "as a matter of fact",
      "speaking of which",
      "come to think of it",
      "as for"
    ]
  },
  {
    "word": "actually",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used to say what is true, often to correct or add surprising information",
    "example": "Actually, the exam is next week, not this week.",
    "synonyms": [
      "by the way",
      "anyway",
      "in fact",
      "as a matter of fact",
      "speaking of which",
      "come to think of it",
      "as for"
    ]
  },
  {
    "word": "in fact",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to give more detail or stronger information",
    "example": "It was not difficult. In fact, it was easy.",
    "synonyms": [
      "by the way",
      "anyway",
      "actually",
      "as a matter of fact",
      "speaking of which",
      "come to think of it",
      "as for"
    ]
  },
  {
    "word": "as a matter of fact",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to give surprising or extra true information",
    "example": "As a matter of fact, I read that article yesterday.",
    "synonyms": [
      "by the way",
      "anyway",
      "actually",
      "in fact",
      "speaking of which",
      "come to think of it",
      "as for"
    ]
  },
  {
    "word": "speaking of which",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used to introduce a related topic",
    "example": "Speaking of which, have you finished the essay?",
    "synonyms": [
      "by the way",
      "anyway",
      "actually",
      "in fact",
      "as a matter of fact",
      "come to think of it",
      "as for"
    ]
  },
  {
    "word": "come to think of it",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used when you suddenly remember or realise something",
    "example": "Come to think of it, I never submitted the form.",
    "synonyms": [
      "by the way",
      "anyway",
      "actually",
      "in fact",
      "as a matter of fact",
      "speaking of which",
      "as for"
    ]
  },
  {
    "word": "as for",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used to move to a different person or topic",
    "example": "As for the homework, it is due on Monday.",
    "synonyms": [
      "by the way",
      "anyway",
      "actually",
      "in fact",
      "as a matter of fact",
      "speaking of which",
      "come to think of it"
    ]
  },
  {
    "word": "in conclusion",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to introduce your final point",
    "example": "In conclusion, the evidence supports the reform.",
    "synonyms": [
      "to sum up",
      "overall",
      "on the whole",
      "all in all",
      "all things considered",
      "in short",
      "in a nutshell",
      "to put it briefly",
      "in summary",
      "to recap"
    ]
  },
  {
    "word": "to sum up",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to give a short summary of what has been said",
    "example": "To sum up, the law has three main aims.",
    "synonyms": [
      "in conclusion",
      "overall",
      "on the whole",
      "all in all",
      "all things considered",
      "in short",
      "in a nutshell",
      "to put it briefly",
      "in summary",
      "to recap"
    ]
  },
  {
    "word": "overall",
    "pos": "adverb",
    "topics": ["conversational", "charts"],
    "level": "neutral",
    "definition": "taking everything into account",
    "example": "Overall, the results were positive.",
    "synonyms": [
      "in conclusion",
      "to sum up",
      "on the whole",
      "all in all",
      "all things considered",
      "in short",
      "in a nutshell",
      "to put it briefly",
      "in summary",
      "to recap"
    ]
  },
  {
    "word": "on the whole",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "in general, ignoring small exceptions",
    "example": "On the whole, the reaction was favourable.",
    "synonyms": [
      "in conclusion",
      "to sum up",
      "overall",
      "all in all",
      "all things considered",
      "in short",
      "in a nutshell",
      "to put it briefly",
      "in summary",
      "to recap"
    ]
  },
  {
    "word": "all in all",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used to summarise after considering everything",
    "example": "All in all, it was a useful lesson.",
    "synonyms": [
      "in conclusion",
      "to sum up",
      "overall",
      "on the whole",
      "all things considered",
      "in short",
      "in a nutshell",
      "to put it briefly",
      "in summary",
      "to recap"
    ]
  },
  {
    "word": "all things considered",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "after thinking about all the facts",
    "example": "All things considered, the plan is sensible.",
    "synonyms": [
      "in conclusion",
      "to sum up",
      "overall",
      "on the whole",
      "all in all",
      "in short",
      "in a nutshell",
      "to put it briefly",
      "in summary",
      "to recap"
    ]
  },
  {
    "word": "in short",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to give a very brief summary",
    "example": "In short, the plan failed.",
    "synonyms": [
      "in conclusion",
      "to sum up",
      "overall",
      "on the whole",
      "all in all",
      "all things considered",
      "in a nutshell",
      "to put it briefly",
      "in summary",
      "to recap"
    ]
  },
  {
    "word": "in a nutshell",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "in the fewest possible words",
    "example": "In a nutshell, the court said no.",
    "synonyms": [
      "in conclusion",
      "to sum up",
      "overall",
      "on the whole",
      "all in all",
      "all things considered",
      "in short",
      "to put it briefly",
      "in summary",
      "to recap"
    ]
  },
  {
    "word": "to put it briefly",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to give a short version",
    "example": "To put it briefly, we need more data.",
    "synonyms": [
      "in conclusion",
      "to sum up",
      "overall",
      "on the whole",
      "all in all",
      "all things considered",
      "in short",
      "in a nutshell",
      "in summary",
      "to recap"
    ]
  },
  {
    "word": "in summary",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to introduce a short summary at the end",
    "example": "In summary, three factors matter.",
    "synonyms": [
      "in conclusion",
      "to sum up",
      "overall",
      "on the whole",
      "all in all",
      "all things considered",
      "in short",
      "in a nutshell",
      "to put it briefly",
      "to recap"
    ]
  },
  {
    "word": "I would like to begin by",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to open a talk or start your first point",
    "example": "I would like to begin by defining the key terms.",
    "synonyms": [
      "let me start by",
      "moving on to",
      "turning to",
      "as you can see",
      "let me draw your attention to",
      "to recap",
      "before I move on",
      "as I mentioned earlier",
      "this brings me to",
      "to return to",
      "in the next section",
      "I will focus on",
      "thank you for your attention"
    ]
  },
  {
    "word": "let me start by",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "a friendly way to open a talk or a first point",
    "example": "Let me start by explaining the problem.",
    "synonyms": [
      "I would like to begin by",
      "moving on to",
      "turning to",
      "as you can see",
      "let me draw your attention to",
      "to recap",
      "before I move on",
      "as I mentioned earlier",
      "this brings me to",
      "to return to",
      "in the next section",
      "I will focus on",
      "thank you for your attention"
    ]
  },
  {
    "word": "moving on to",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to introduce the next point in a talk",
    "example": "Moving on to the second point, we look at the costs.",
    "synonyms": [
      "I would like to begin by",
      "let me start by",
      "turning to",
      "as you can see",
      "let me draw your attention to",
      "to recap",
      "before I move on",
      "as I mentioned earlier",
      "this brings me to",
      "to return to",
      "in the next section",
      "I will focus on",
      "thank you for your attention"
    ]
  },
  {
    "word": "turning to",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to introduce a new topic in a talk",
    "example": "Turning to the legal side, the rules are complex.",
    "synonyms": [
      "I would like to begin by",
      "let me start by",
      "moving on to",
      "as you can see",
      "let me draw your attention to",
      "to recap",
      "before I move on",
      "as I mentioned earlier",
      "this brings me to",
      "to return to",
      "in the next section",
      "I will focus on",
      "thank you for your attention"
    ]
  },
  {
    "word": "as you can see",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used to point to something visible, such as a slide or chart",
    "example": "As you can see, sales rose sharply in March.",
    "synonyms": [
      "I would like to begin by",
      "let me start by",
      "moving on to",
      "turning to",
      "let me draw your attention to",
      "to recap",
      "before I move on",
      "as I mentioned earlier",
      "this brings me to",
      "to return to",
      "in the next section",
      "I will focus on",
      "thank you for your attention"
    ]
  },
  {
    "word": "let me draw your attention to",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "used to ask the audience to look closely at something",
    "example": "Let me draw your attention to the red line on this chart.",
    "synonyms": [
      "I would like to begin by",
      "let me start by",
      "moving on to",
      "turning to",
      "as you can see",
      "to recap",
      "before I move on",
      "as I mentioned earlier",
      "this brings me to",
      "to return to",
      "in the next section",
      "I will focus on",
      "thank you for your attention"
    ]
  },
  {
    "word": "to recap",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to repeat the main points briefly",
    "example": "To recap, we covered three legal systems.",
    "synonyms": [
      "I would like to begin by",
      "let me start by",
      "moving on to",
      "turning to",
      "as you can see",
      "let me draw your attention to",
      "before I move on",
      "as I mentioned earlier",
      "this brings me to",
      "to return to",
      "in the next section",
      "I will focus on",
      "thank you for your attention",
      "in conclusion",
      "to sum up",
      "overall",
      "on the whole",
      "all in all",
      "all things considered",
      "in short",
      "in a nutshell",
      "to put it briefly",
      "in summary"
    ]
  },
  {
    "word": "before I move on",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to pause before the next point, often to check understanding",
    "example": "Before I move on, are there any questions?",
    "synonyms": [
      "I would like to begin by",
      "let me start by",
      "moving on to",
      "turning to",
      "as you can see",
      "let me draw your attention to",
      "to recap",
      "as I mentioned earlier",
      "this brings me to",
      "to return to",
      "in the next section",
      "I will focus on",
      "thank you for your attention"
    ]
  },
  {
    "word": "as I mentioned earlier",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to refer back to something you already said",
    "example": "As I mentioned earlier, the sample was small.",
    "synonyms": [
      "I would like to begin by",
      "let me start by",
      "moving on to",
      "turning to",
      "as you can see",
      "let me draw your attention to",
      "to recap",
      "before I move on",
      "this brings me to",
      "to return to",
      "in the next section",
      "I will focus on",
      "thank you for your attention"
    ]
  },
  {
    "word": "this brings me to",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to connect your last point to the next one",
    "example": "This brings me to my final point.",
    "synonyms": [
      "I would like to begin by",
      "let me start by",
      "moving on to",
      "turning to",
      "as you can see",
      "let me draw your attention to",
      "to recap",
      "before I move on",
      "as I mentioned earlier",
      "to return to",
      "in the next section",
      "I will focus on",
      "thank you for your attention"
    ]
  },
  {
    "word": "to return to",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to go back to a topic you discussed before",
    "example": "To return to my earlier point, trust is essential.",
    "synonyms": [
      "I would like to begin by",
      "let me start by",
      "moving on to",
      "turning to",
      "as you can see",
      "let me draw your attention to",
      "to recap",
      "before I move on",
      "as I mentioned earlier",
      "this brings me to",
      "in the next section",
      "I will focus on",
      "thank you for your attention"
    ]
  },
  {
    "word": "in the next section",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to tell the audience what comes next",
    "example": "In the next section, I will compare the two systems.",
    "synonyms": [
      "I would like to begin by",
      "let me start by",
      "moving on to",
      "turning to",
      "as you can see",
      "let me draw your attention to",
      "to recap",
      "before I move on",
      "as I mentioned earlier",
      "this brings me to",
      "to return to",
      "I will focus on",
      "thank you for your attention"
    ]
  },
  {
    "word": "I will focus on",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to say what the main subject of your talk will be",
    "example": "In this talk, I will focus on online scams.",
    "synonyms": [
      "I would like to begin by",
      "let me start by",
      "moving on to",
      "turning to",
      "as you can see",
      "let me draw your attention to",
      "to recap",
      "before I move on",
      "as I mentioned earlier",
      "this brings me to",
      "to return to",
      "in the next section",
      "thank you for your attention"
    ]
  },
  {
    "word": "thank you for your attention",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "a polite way to end a talk",
    "example": "That is all from me. Thank you for your attention.",
    "synonyms": [
      "I would like to begin by",
      "let me start by",
      "moving on to",
      "turning to",
      "as you can see",
      "let me draw your attention to",
      "to recap",
      "before I move on",
      "as I mentioned earlier",
      "this brings me to",
      "to return to",
      "in the next section",
      "I will focus on"
    ]
  },
  {
    "word": "I take your point",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to accept that someone has made a good point",
    "example": "I take your point, but the cost is still too high.",
    "synonyms": [
      "I see where you are coming from",
      "I would disagree",
      "I could not agree more",
      "that is a valid point",
      "I am not convinced that",
      "with all due respect",
      "could you elaborate on",
      "if I understand correctly",
      "just to clarify",
      "let me rephrase that",
      "building on that",
      "to add to that",
      "to play devil's advocate",
      "I am inclined to think"
    ]
  },
  {
    "word": "I see where you are coming from",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used to show that you understand someone's view before you disagree",
    "example": "I see where you are coming from, but I think the plan is risky.",
    "synonyms": [
      "I take your point",
      "I would disagree",
      "I could not agree more",
      "that is a valid point",
      "I am not convinced that",
      "with all due respect",
      "could you elaborate on",
      "if I understand correctly",
      "just to clarify",
      "let me rephrase that",
      "building on that",
      "to add to that",
      "to play devil's advocate",
      "I am inclined to think"
    ]
  },
  {
    "word": "I would disagree",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "a polite way to say that you do not agree",
    "example": "I would disagree with that last claim.",
    "synonyms": [
      "I take your point",
      "I see where you are coming from",
      "I could not agree more",
      "that is a valid point",
      "I am not convinced that",
      "with all due respect",
      "could you elaborate on",
      "if I understand correctly",
      "just to clarify",
      "let me rephrase that",
      "building on that",
      "to add to that",
      "to play devil's advocate",
      "I am inclined to think"
    ]
  },
  {
    "word": "I could not agree more",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used to say that you agree completely",
    "example": "I could not agree more with your conclusion.",
    "synonyms": [
      "I take your point",
      "I see where you are coming from",
      "I would disagree",
      "that is a valid point",
      "I am not convinced that",
      "with all due respect",
      "could you elaborate on",
      "if I understand correctly",
      "just to clarify",
      "let me rephrase that",
      "building on that",
      "to add to that",
      "to play devil's advocate",
      "I am inclined to think"
    ]
  },
  {
    "word": "that is a valid point",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to say that someone's point is reasonable",
    "example": "That is a valid point, and we should consider it.",
    "synonyms": [
      "I take your point",
      "I see where you are coming from",
      "I would disagree",
      "I could not agree more",
      "I am not convinced that",
      "with all due respect",
      "could you elaborate on",
      "if I understand correctly",
      "just to clarify",
      "let me rephrase that",
      "building on that",
      "to add to that",
      "to play devil's advocate",
      "I am inclined to think"
    ]
  },
  {
    "word": "I am not convinced that",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "a polite way to say that you doubt something",
    "example": "I am not convinced that the data proves it.",
    "synonyms": [
      "I take your point",
      "I see where you are coming from",
      "I would disagree",
      "I could not agree more",
      "that is a valid point",
      "with all due respect",
      "could you elaborate on",
      "if I understand correctly",
      "just to clarify",
      "let me rephrase that",
      "building on that",
      "to add to that",
      "to play devil's advocate",
      "I am inclined to think"
    ]
  },
  {
    "word": "with all due respect",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "used before politely disagreeing with someone",
    "example": "With all due respect, the figures say otherwise.",
    "synonyms": [
      "I take your point",
      "I see where you are coming from",
      "I would disagree",
      "I could not agree more",
      "that is a valid point",
      "I am not convinced that",
      "could you elaborate on",
      "if I understand correctly",
      "just to clarify",
      "let me rephrase that",
      "building on that",
      "to add to that",
      "to play devil's advocate",
      "I am inclined to think"
    ]
  },
  {
    "word": "could you elaborate on",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to ask someone to give more detail",
    "example": "Could you elaborate on that last point?",
    "synonyms": [
      "I take your point",
      "I see where you are coming from",
      "I would disagree",
      "I could not agree more",
      "that is a valid point",
      "I am not convinced that",
      "with all due respect",
      "if I understand correctly",
      "just to clarify",
      "let me rephrase that",
      "building on that",
      "to add to that",
      "to play devil's advocate",
      "I am inclined to think"
    ]
  },
  {
    "word": "if I understand correctly",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to check that you have understood someone",
    "example": "If I understand correctly, you are against the reform.",
    "synonyms": [
      "I take your point",
      "I see where you are coming from",
      "I would disagree",
      "I could not agree more",
      "that is a valid point",
      "I am not convinced that",
      "with all due respect",
      "could you elaborate on",
      "just to clarify",
      "let me rephrase that",
      "building on that",
      "to add to that",
      "to play devil's advocate",
      "I am inclined to think"
    ]
  },
  {
    "word": "just to clarify",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used to check or explain a detail",
    "example": "Just to clarify, do you mean the law from 2019?",
    "synonyms": [
      "I take your point",
      "I see where you are coming from",
      "I would disagree",
      "I could not agree more",
      "that is a valid point",
      "I am not convinced that",
      "with all due respect",
      "could you elaborate on",
      "if I understand correctly",
      "let me rephrase that",
      "building on that",
      "to add to that",
      "to play devil's advocate",
      "I am inclined to think"
    ]
  },
  {
    "word": "let me rephrase that",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "used to say something again in a clearer way",
    "example": "Let me rephrase that: the rule is too vague.",
    "synonyms": [
      "I take your point",
      "I see where you are coming from",
      "I would disagree",
      "I could not agree more",
      "that is a valid point",
      "I am not convinced that",
      "with all due respect",
      "could you elaborate on",
      "if I understand correctly",
      "just to clarify",
      "building on that",
      "to add to that",
      "to play devil's advocate",
      "I am inclined to think"
    ]
  },
  {
    "word": "building on that",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to add to what someone has just said",
    "example": "Building on that, we could also look at costs.",
    "synonyms": [
      "I take your point",
      "I see where you are coming from",
      "I would disagree",
      "I could not agree more",
      "that is a valid point",
      "I am not convinced that",
      "with all due respect",
      "could you elaborate on",
      "if I understand correctly",
      "just to clarify",
      "let me rephrase that",
      "to add to that",
      "to play devil's advocate",
      "I am inclined to think"
    ]
  },
  {
    "word": "to add to that",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to give another point after someone else's",
    "example": "To add to that, the evidence is limited.",
    "synonyms": [
      "I take your point",
      "I see where you are coming from",
      "I would disagree",
      "I could not agree more",
      "that is a valid point",
      "I am not convinced that",
      "with all due respect",
      "could you elaborate on",
      "if I understand correctly",
      "just to clarify",
      "let me rephrase that",
      "building on that",
      "to play devil's advocate",
      "I am inclined to think"
    ]
  },
  {
    "word": "to play devil's advocate",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to introduce an opposing view just to test an idea",
    "example": "To play devil's advocate, what if the law is simply wrong?",
    "synonyms": [
      "I take your point",
      "I see where you are coming from",
      "I would disagree",
      "I could not agree more",
      "that is a valid point",
      "I am not convinced that",
      "with all due respect",
      "could you elaborate on",
      "if I understand correctly",
      "just to clarify",
      "let me rephrase that",
      "building on that",
      "to add to that",
      "I am inclined to think"
    ]
  },
  {
    "word": "I am inclined to think",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "a careful way to say what you tend to believe",
    "example": "I am inclined to think that the reform will work.",
    "synonyms": [
      "I take your point",
      "I see where you are coming from",
      "I would disagree",
      "I could not agree more",
      "that is a valid point",
      "I am not convinced that",
      "with all due respect",
      "could you elaborate on",
      "if I understand correctly",
      "just to clarify",
      "let me rephrase that",
      "building on that",
      "to add to that",
      "to play devil's advocate"
    ]
  },
  {
    "word": "with regard to",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "concerning; about",
    "example": "With regard to the second question, the answer is no.",
    "synonyms": [
      "in terms of",
      "as opposed to",
      "in the light of",
      "on the grounds that",
      "provided that",
      "unless",
      "insofar as",
      "by virtue of",
      "in relation to",
      "regardless of",
      "whereby",
      "given that",
      "in order to",
      "as long as"
    ]
  },
  {
    "word": "in terms of",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to say which aspect of something you are talking about",
    "example": "In terms of cost, the plan is excellent.",
    "synonyms": [
      "with regard to",
      "as opposed to",
      "in the light of",
      "on the grounds that",
      "provided that",
      "unless",
      "insofar as",
      "by virtue of",
      "in relation to",
      "regardless of",
      "whereby",
      "given that",
      "in order to",
      "as long as"
    ]
  },
  {
    "word": "as opposed to",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "used to contrast one thing with a different one",
    "example": "Civil law is written, as opposed to customary law.",
    "synonyms": [
      "with regard to",
      "in terms of",
      "in the light of",
      "on the grounds that",
      "provided that",
      "unless",
      "insofar as",
      "by virtue of",
      "in relation to",
      "regardless of",
      "whereby",
      "given that",
      "in order to",
      "as long as"
    ]
  },
  {
    "word": "in the light of",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "taking new information into account",
    "example": "In the light of new evidence, the court changed its view.",
    "synonyms": [
      "with regard to",
      "in terms of",
      "as opposed to",
      "on the grounds that",
      "provided that",
      "unless",
      "insofar as",
      "by virtue of",
      "in relation to",
      "regardless of",
      "whereby",
      "given that",
      "in order to",
      "as long as"
    ]
  },
  {
    "word": "on the grounds that",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "because; for the reason that",
    "example": "The appeal was rejected on the grounds that it was late.",
    "synonyms": [
      "with regard to",
      "in terms of",
      "as opposed to",
      "in the light of",
      "provided that",
      "unless",
      "insofar as",
      "by virtue of",
      "in relation to",
      "regardless of",
      "whereby",
      "given that",
      "in order to",
      "as long as"
    ]
  },
  {
    "word": "provided that",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "only if; on the condition that",
    "example": "You may borrow the book provided that you return it.",
    "synonyms": [
      "with regard to",
      "in terms of",
      "as opposed to",
      "in the light of",
      "on the grounds that",
      "unless",
      "insofar as",
      "by virtue of",
      "in relation to",
      "regardless of",
      "whereby",
      "given that",
      "in order to",
      "as long as"
    ]
  },
  {
    "word": "unless",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "if not",
    "example": "The law will fail unless people trust it.",
    "synonyms": [
      "with regard to",
      "in terms of",
      "as opposed to",
      "in the light of",
      "on the grounds that",
      "provided that",
      "insofar as",
      "by virtue of",
      "in relation to",
      "regardless of",
      "whereby",
      "given that",
      "in order to",
      "as long as"
    ]
  },
  {
    "word": "insofar as",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "to the degree that",
    "example": "The law is fair insofar as it applies to everyone.",
    "synonyms": [
      "with regard to",
      "in terms of",
      "as opposed to",
      "in the light of",
      "on the grounds that",
      "provided that",
      "unless",
      "by virtue of",
      "in relation to",
      "regardless of",
      "whereby",
      "given that",
      "in order to",
      "as long as"
    ]
  },
  {
    "word": "by virtue of",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "because of a particular quality or position",
    "example": "She has the right to vote by virtue of her citizenship.",
    "synonyms": [
      "with regard to",
      "in terms of",
      "as opposed to",
      "in the light of",
      "on the grounds that",
      "provided that",
      "unless",
      "insofar as",
      "in relation to",
      "regardless of",
      "whereby",
      "given that",
      "in order to",
      "as long as"
    ]
  },
  {
    "word": "in relation to",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "connected with; compared with",
    "example": "In relation to last year, crime has fallen.",
    "synonyms": [
      "with regard to",
      "in terms of",
      "as opposed to",
      "in the light of",
      "on the grounds that",
      "provided that",
      "unless",
      "insofar as",
      "by virtue of",
      "regardless of",
      "whereby",
      "given that",
      "in order to",
      "as long as"
    ]
  },
  {
    "word": "regardless of",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "without being affected by",
    "example": "Everyone is equal before the law regardless of wealth.",
    "synonyms": [
      "with regard to",
      "in terms of",
      "as opposed to",
      "in the light of",
      "on the grounds that",
      "provided that",
      "unless",
      "insofar as",
      "by virtue of",
      "in relation to",
      "whereby",
      "given that",
      "in order to",
      "as long as"
    ]
  },
  {
    "word": "whereby",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "by which; used to explain how a system or arrangement works",
    "example": "It is a system whereby citizens elect judges.",
    "synonyms": [
      "with regard to",
      "in terms of",
      "as opposed to",
      "in the light of",
      "on the grounds that",
      "provided that",
      "unless",
      "insofar as",
      "by virtue of",
      "in relation to",
      "regardless of",
      "given that",
      "in order to",
      "as long as"
    ]
  },
  {
    "word": "given that",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "considering the fact that",
    "example": "Given that the data is limited, we should be cautious.",
    "synonyms": [
      "with regard to",
      "in terms of",
      "as opposed to",
      "in the light of",
      "on the grounds that",
      "provided that",
      "unless",
      "insofar as",
      "by virtue of",
      "in relation to",
      "regardless of",
      "whereby",
      "in order to",
      "as long as"
    ]
  },
  {
    "word": "in order to",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "for the purpose of",
    "example": "We collected data in order to test the idea.",
    "synonyms": [
      "with regard to",
      "in terms of",
      "as opposed to",
      "in the light of",
      "on the grounds that",
      "provided that",
      "unless",
      "insofar as",
      "by virtue of",
      "in relation to",
      "regardless of",
      "whereby",
      "given that",
      "as long as"
    ]
  },
  {
    "word": "as long as",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "easy",
    "definition": "only if",
    "example": "You can come as long as you are quiet.",
    "synonyms": [
      "with regard to",
      "in terms of",
      "as opposed to",
      "in the light of",
      "on the grounds that",
      "provided that",
      "unless",
      "insofar as",
      "by virtue of",
      "in relation to",
      "regardless of",
      "whereby",
      "given that",
      "in order to"
    ]
  },
  {
    "word": "assertive",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "behaving confidently and not afraid to say what you want or believe",
    "example": "An assertive manager states expectations clearly without being aggressive.",
    "synonyms": [
      "decisive",
      "forthright",
      "having high self-esteem",
      "self-assured",
      "self-possessed"
    ]
  },
  {
    "word": "perspicacious",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "quick in noticing, understanding or judging things accurately",
    "example": "A perspicacious leader spots problems before they grow.",
    "synonyms": [
      "astute",
      "cerebral",
      "discerning",
      "incisive",
      "insightful",
      "intuitive",
      "observant",
      "perceptive",
      "sagacious",
      "shrewd",
      "subtle"
    ]
  },
  {
    "word": "sagacious",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "having or showing understanding and the ability to make good judgments",
    "example": "The sagacious old judge was known for balanced rulings.",
    "synonyms": [
      "astute",
      "cerebral",
      "discerning",
      "incisive",
      "insightful",
      "intuitive",
      "observant",
      "perceptive",
      "perspicacious",
      "shrewd",
      "subtle"
    ]
  },
  {
    "word": "prudent",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "careful and avoiding risks",
    "example": "A prudent leader keeps some money in reserve.",
    "synonyms": [
      "cautious",
      "circumspect",
      "judicious",
      "scrupulous",
      "vigilant"
    ]
  },
  {
    "word": "charming",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "pleasant and attractive",
    "example": "The charming ambassador put everyone at ease.",
    "synonyms": [
      "affable",
      "approachable",
      "charismatic",
      "congenial",
      "diplomatic",
      "gregarious",
      "tactful"
    ]
  },
  {
    "word": "insightful",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "showing a clear and usually original understanding of a complicated problem or situation",
    "example": "Her insightful report changed how the team saw the problem.",
    "synonyms": [
      "astute",
      "cerebral",
      "discerning",
      "incisive",
      "intuitive",
      "observant",
      "perceptive",
      "perspicacious",
      "sagacious",
      "shrewd",
      "subtle"
    ]
  },
  {
    "word": "observant",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "good or quick at noticing things",
    "example": "An observant manager notices when a team member is struggling.",
    "synonyms": [
      "astute",
      "cerebral",
      "discerning",
      "incisive",
      "insightful",
      "intuitive",
      "perceptive",
      "perspicacious",
      "sagacious",
      "shrewd",
      "subtle"
    ]
  },
  {
    "word": "shrewd",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "mixed",
    "definition": "having a clear understanding and good judgment of a situation, resulting in an advantage",
    "example": "The shrewd negotiator got a much better price.",
    "synonyms": [
      "astute",
      "cerebral",
      "cunning",
      "discerning",
      "incisive",
      "insightful",
      "intuitive",
      "observant",
      "perceptive",
      "perspicacious",
      "sagacious",
      "subtle"
    ]
  },
  {
    "word": "astute",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "able to understand a situation quickly and see how to take advantage of it",
    "example": "An astute investor sold before the market fell.",
    "synonyms": [
      "cerebral",
      "cunning",
      "discerning",
      "incisive",
      "insightful",
      "intuitive",
      "observant",
      "perceptive",
      "perspicacious",
      "sagacious",
      "shrewd",
      "subtle"
    ]
  },
  {
    "word": "charismatic",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "having a special natural quality that makes people admire you and want to follow you",
    "example": "The charismatic candidate filled every hall.",
    "synonyms": [
      "affable",
      "approachable",
      "charming",
      "congenial",
      "diplomatic",
      "gregarious",
      "tactful"
    ]
  },
  {
    "word": "visionary",
    "pos": "noun",
    "topics": [
      "leadership",
      "types of people"
    ],
    "tone": "positive",
    "definition": "a person who can imagine how a country, society or industry will develop and plans for it",
    "example": "A visionary leader plans for the next decade, not the next month.",
    "synonyms": [
      "farsighted",
      "pioneering",
      "prescient",
      "strategic"
    ]
  },
  {
    "word": "perceptive",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "having a sharp understanding; able to notice and interpret things that others might miss",
    "example": "A perceptive leader reads the mood of a room.",
    "synonyms": [
      "astute",
      "cerebral",
      "discerning",
      "incisive",
      "insightful",
      "intuitive",
      "observant",
      "perspicacious",
      "sagacious",
      "shrewd",
      "subtle"
    ]
  },
  {
    "word": "intuitive",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "able to understand or sense things without needing reasoning",
    "example": "Her intuitive grasp of people made her a great mentor.",
    "synonyms": [
      "astute",
      "cerebral",
      "discerning",
      "incisive",
      "insightful",
      "observant",
      "perceptive",
      "perspicacious",
      "sagacious",
      "shrewd",
      "subtle"
    ]
  },
  {
    "word": "adroit",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "very skilful and quick in the way you think or move",
    "example": "He was adroit at handling difficult questions.",
    "synonyms": [
      "adaptable",
      "dynamic",
      "flexible",
      "ingenious",
      "pragmatic",
      "resourceful",
      "versatile"
    ]
  },
  {
    "word": "intrepid",
    "pos": "adjective",
    "topics": [
      "leadership",
      "types of people"
    ],
    "tone": "positive",
    "definition": "extremely brave and showing no fear of dangerous situations",
    "example": "The intrepid explorer led the team across the glacier.",
    "synonyms": [
      "audacious",
      "dauntless",
      "indomitable",
      "perseverant",
      "resilient",
      "robust",
      "single-minded",
      "steadfast",
      "tenacious",
      "unwavering",
      "unyielding"
    ]
  },
  {
    "word": "audacious",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "bold, willing to take risks and challenge boundaries",
    "example": "Her audacious plan doubled the size of the company.",
    "synonyms": [
      "dauntless",
      "indomitable",
      "intrepid",
      "perseverant",
      "resilient",
      "robust",
      "single-minded",
      "steadfast",
      "tenacious",
      "unwavering",
      "unyielding"
    ]
  },
  {
    "word": "versatile",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "able to perform effectively in different roles or circumstances",
    "example": "A versatile leader can manage both small and large teams.",
    "synonyms": [
      "adaptable",
      "adroit",
      "dynamic",
      "flexible",
      "ingenious",
      "pragmatic",
      "resourceful"
    ]
  },
  {
    "word": "scrupulous",
    "pos": "adjective",
    "topics": [
      "leadership",
      "types of people"
    ],
    "tone": "positive",
    "definition": "very careful to do what is right; meticulously ethical",
    "example": "The scrupulous auditor checked every receipt.",
    "synonyms": [
      "authentic",
      "circumspect",
      "integrity-driven",
      "judicious",
      "meticulous",
      "pedantic",
      "pernickety",
      "prudent",
      "reliable",
      "trustworthy",
      "vigilant"
    ]
  },
  {
    "word": "farsighted",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "able to see and plan for the future, thinking ahead with wisdom",
    "example": "A farsighted mayor invested in public transport.",
    "synonyms": [
      "pioneering",
      "prescient",
      "strategic",
      "visionary"
    ]
  },
  {
    "word": "prescient",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "seeming to know or anticipate future events accurately",
    "example": "Her prescient warning about the crisis was ignored.",
    "synonyms": [
      "farsighted",
      "pioneering",
      "strategic",
      "visionary"
    ]
  },
  {
    "word": "erudite",
    "pos": "adjective",
    "topics": [
      "leadership",
      "types of people"
    ],
    "tone": "positive",
    "definition": "having or showing a lot of knowledge that few people have",
    "example": "The erudite professor quoted ancient sources from memory."
  },
  {
    "word": "single-minded",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "mixed",
    "definition": "very determined to achieve something",
    "example": "His single-minded focus helped him finish the project.",
    "synonyms": [
      "ambitious",
      "audacious",
      "dauntless",
      "indomitable",
      "intransigent",
      "intrepid",
      "obstinate",
      "perseverant",
      "recalcitrant",
      "resilient",
      "robust",
      "steadfast",
      "tenacious",
      "unwavering",
      "unyielding"
    ]
  },
  {
    "word": "collaborative",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "focused on working well with others and promoting teamwork",
    "example": "A collaborative leader shares credit with the team.",
    "synonyms": [
      "equitable",
      "harmonious"
    ]
  },
  {
    "word": "indomitable",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "strong, brave and determined; impossible to defeat or frighten",
    "example": "Her indomitable spirit inspired the whole village.",
    "synonyms": [
      "audacious",
      "dauntless",
      "intrepid",
      "perseverant",
      "resilient",
      "robust",
      "single-minded",
      "steadfast",
      "tenacious",
      "unwavering",
      "unyielding"
    ]
  },
  {
    "word": "perseverant",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "continuing to make an effort even when it is difficult or takes a long time",
    "example": "A perseverant student keeps trying after every failure.",
    "synonyms": [
      "audacious",
      "dauntless",
      "indomitable",
      "intrepid",
      "resilient",
      "robust",
      "single-minded",
      "steadfast",
      "tenacious",
      "unwavering",
      "unyielding"
    ]
  },
  {
    "word": "adaptable",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "able or willing to change to suit different conditions",
    "example": "Adaptable leaders adjust quickly when plans fail.",
    "synonyms": [
      "adroit",
      "dynamic",
      "flexible",
      "ingenious",
      "pragmatic",
      "resilient",
      "resourceful",
      "versatile"
    ]
  },
  {
    "word": "pragmatic",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "mixed",
    "definition": "dealing with things sensibly and realistically, based on practical considerations",
    "example": "The mayor took a pragmatic approach to the budget.",
    "synonyms": [
      "adaptable",
      "adroit",
      "dynamic",
      "flexible",
      "ingenious",
      "resourceful",
      "versatile"
    ]
  },
  {
    "word": "empowering",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "giving people authority or freedom to act and encouraging their ability to do so",
    "example": "An empowering manager trusts staff to make decisions.",
    "synonyms": [
      "influential",
      "inspirational",
      "luminous",
      "uplifting"
    ]
  },
  {
    "word": "disciplined",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "behaving in a very controlled way",
    "example": "The disciplined team never missed a deadline.",
    "synonyms": [
      "ambitious",
      "conscientious",
      "diligent",
      "meticulous"
    ]
  },
  {
    "word": "integrity-driven",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "guided by strong ethical principles and honesty",
    "example": "An integrity-driven leader refuses to hide bad news.",
    "synonyms": [
      "authentic",
      "reliable",
      "scrupulous",
      "trustworthy"
    ]
  },
  {
    "word": "persuasive",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "making you want to do or believe a particular thing",
    "example": "Her persuasive speech convinced the board.",
    "synonyms": [
      "articulate",
      "cogent",
      "compelling",
      "convincing",
      "eloquent",
      "grandiloquent",
      "loquacious",
      "magniloquent",
      "rhetorically adept"
    ]
  },
  {
    "word": "convincing",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "making you believe that something is true or right",
    "example": "The evidence was convincing.",
    "synonyms": [
      "articulate",
      "cogent",
      "compelling",
      "eloquent",
      "grandiloquent",
      "loquacious",
      "magniloquent",
      "persuasive",
      "rhetorically adept"
    ]
  },
  {
    "word": "resilient",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "able to recover quickly after something difficult or bad has happened",
    "example": "A resilient leader bounces back from failure.",
    "synonyms": [
      "adaptable",
      "audacious",
      "dauntless",
      "indomitable",
      "intrepid",
      "perseverant",
      "robust",
      "single-minded",
      "steadfast",
      "tenacious",
      "unwavering",
      "unyielding"
    ]
  },
  {
    "word": "robust",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "strong and unlikely to fail under pressure",
    "example": "A robust plan survives unexpected problems.",
    "synonyms": [
      "audacious",
      "dauntless",
      "indomitable",
      "intrepid",
      "perseverant",
      "resilient",
      "single-minded",
      "steadfast",
      "tenacious",
      "unwavering",
      "unyielding"
    ]
  },
  {
    "word": "reliable",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "able to be trusted or believed because it works or behaves as you expect",
    "example": "A reliable leader does what she promises.",
    "synonyms": [
      "authentic",
      "integrity-driven",
      "scrupulous",
      "trustworthy"
    ]
  },
  {
    "word": "trustworthy",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "deserving trust; honest and dependable",
    "example": "Voters wanted a trustworthy candidate.",
    "synonyms": [
      "authentic",
      "integrity-driven",
      "reliable",
      "scrupulous"
    ]
  },
  {
    "word": "empathetic",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "able to imagine how someone else feels",
    "example": "An empathetic manager listens before judging.",
    "synonyms": [
      "altruistic",
      "benevolent",
      "compassionate",
      "magnanimous",
      "noble",
      "tactful"
    ]
  },
  {
    "word": "ascendant",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "increasingly powerful, influential or successful",
    "example": "The ascendant party won the next election."
  },
  {
    "word": "judicious",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "having, showing or done with good judgment or sense",
    "example": "She made a judicious choice of advisers.",
    "synonyms": [
      "circumspect",
      "prudent",
      "scrupulous",
      "vigilant"
    ]
  },
  {
    "word": "dynamic",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "energetic and full of new ideas; able to inspire change and action",
    "example": "A dynamic leader energises the whole department.",
    "synonyms": [
      "adaptable",
      "adroit",
      "flexible",
      "ingenious",
      "pragmatic",
      "resourceful",
      "versatile"
    ]
  },
  {
    "word": "flexible",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "willing to change or compromise when needed",
    "example": "A flexible schedule helped the team cope.",
    "synonyms": [
      "adaptable",
      "adroit",
      "dynamic",
      "ingenious",
      "pragmatic",
      "resourceful",
      "versatile"
    ]
  },
  {
    "word": "strategic",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "skilled in planning and carrying out plans to achieve long-term goals",
    "example": "Her strategic thinking guided the merger.",
    "synonyms": [
      "farsighted",
      "pioneering",
      "prescient",
      "visionary"
    ]
  },
  {
    "word": "tactful",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "skilled in dealing with delicate matters without offending anyone",
    "example": "A tactful leader delivers bad news kindly.",
    "synonyms": [
      "affable",
      "approachable",
      "charismatic",
      "charming",
      "congenial",
      "diplomatic",
      "empathetic",
      "gregarious"
    ]
  },
  {
    "word": "formidable",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "mixed",
    "definition": "inspiring fear or respect because of power, ability or influence",
    "example": "She was a formidable opponent in debates."
  },
  {
    "word": "circumspect",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "careful and thoughtful about possible consequences",
    "example": "The circumspect minister avoided hasty promises.",
    "synonyms": [
      "judicious",
      "prudent",
      "scrupulous",
      "vigilant"
    ]
  },
  {
    "word": "rhetorically adept",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "skilled at using language to influence an audience",
    "example": "The rhetorically adept senator won over the crowd.",
    "synonyms": [
      "articulate",
      "cogent",
      "compelling",
      "convincing",
      "eloquent",
      "grandiloquent",
      "loquacious",
      "magniloquent",
      "persuasive"
    ]
  },
  {
    "word": "eloquent",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "speaking or writing clearly and persuasively",
    "example": "The eloquent leader moved the audience to tears.",
    "synonyms": [
      "articulate",
      "cogent",
      "compelling",
      "convincing",
      "grandiloquent",
      "loquacious",
      "magniloquent",
      "persuasive",
      "rhetorically adept"
    ]
  },
  {
    "word": "articulate",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "able to express ideas clearly and effectively",
    "example": "An articulate manager explains goals in simple words.",
    "synonyms": [
      "cogent",
      "compelling",
      "convincing",
      "eloquent",
      "grandiloquent",
      "loquacious",
      "magniloquent",
      "persuasive",
      "rhetorically adept"
    ]
  },
  {
    "word": "loquacious",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "mixed",
    "definition": "tending to talk a lot; talkative",
    "example": "The loquacious guest dominated the whole meeting.",
    "synonyms": [
      "articulate",
      "cogent",
      "compelling",
      "convincing",
      "eloquent",
      "grandiloquent",
      "magniloquent",
      "persuasive",
      "rhetorically adept"
    ]
  },
  {
    "word": "magniloquent",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "negative",
    "definition": "using high-flown, impressive-sounding language, often too grand",
    "example": "The magniloquent speech sounded impressive but said very little.",
    "synonyms": [
      "articulate",
      "cogent",
      "compelling",
      "convincing",
      "eloquent",
      "grandiloquent",
      "loquacious",
      "persuasive",
      "rhetorically adept"
    ]
  },
  {
    "word": "grandiloquent",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "negative",
    "definition": "using pompous, extravagant language",
    "example": "His grandiloquent style annoyed practical listeners.",
    "synonyms": [
      "articulate",
      "cogent",
      "compelling",
      "convincing",
      "eloquent",
      "loquacious",
      "magniloquent",
      "persuasive",
      "rhetorically adept"
    ]
  },
  {
    "word": "cogent",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "clearly expressed and likely to persuade people (of an argument or reason)",
    "example": "She presented a cogent argument for reform.",
    "synonyms": [
      "articulate",
      "compelling",
      "convincing",
      "eloquent",
      "grandiloquent",
      "loquacious",
      "magniloquent",
      "persuasive",
      "rhetorically adept"
    ]
  },
  {
    "word": "imperturbable",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "mixed",
    "definition": "remaining composed even in highly stressful circumstances",
    "example": "The imperturbable captain stayed calm in the storm.",
    "synonyms": [
      "equanimous",
      "level-headed",
      "placid",
      "self-possessed",
      "stoic",
      "unflappable"
    ]
  },
  {
    "word": "dauntless",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "mixed",
    "definition": "showing fearless determination",
    "example": "The dauntless reporter kept asking tough questions.",
    "synonyms": [
      "audacious",
      "indomitable",
      "intrepid",
      "perseverant",
      "resilient",
      "robust",
      "single-minded",
      "steadfast",
      "tenacious",
      "unwavering",
      "unyielding"
    ]
  },
  {
    "word": "inspirational",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "making you feel full of hope or encouraged",
    "example": "The coach gave an inspirational speech.",
    "synonyms": [
      "empowering",
      "influential",
      "luminous",
      "uplifting"
    ]
  },
  {
    "word": "equanimous",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "keeping composure and mental balance, especially under pressure",
    "example": "An equanimous leader stays steady in a crisis.",
    "synonyms": [
      "imperturbable",
      "level-headed",
      "placid",
      "self-possessed",
      "stoic",
      "unflappable"
    ]
  },
  {
    "word": "vigilant",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "watchful and alert, always aware of possible challenges or changes",
    "example": "Vigilant managers watch for early warning signs.",
    "synonyms": [
      "circumspect",
      "judicious",
      "prudent",
      "scrupulous"
    ]
  },
  {
    "word": "harmonious",
    "pos": "adjective",
    "topics": ["leadership", "art history"],
    "tone": "positive",
    "definition": "able to create and keep a balanced, peaceful and cooperative atmosphere",
    "example": "She built a harmonious team.",
    "synonyms": [
      "collaborative",
      "equitable"
    ]
  },
  {
    "word": "ruthless",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "negative",
    "definition": "not worrying about any pain caused to others; cruel",
    "example": "The ruthless boss fired people without warning.",
    "synonyms": [
      "Machiavellian",
      "cunning",
      "deceitful",
      "duplicitous",
      "guileful",
      "manipulative",
      "merciless",
      "opportunistic",
      "sly"
    ]
  },
  {
    "word": "merciless",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "negative",
    "definition": "having or showing no mercy",
    "example": "The merciless dictator crushed all protest.",
    "synonyms": [
      "Machiavellian",
      "cunning",
      "deceitful",
      "duplicitous",
      "guileful",
      "manipulative",
      "opportunistic",
      "ruthless",
      "sly"
    ]
  },
  {
    "word": "cunning",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "negative",
    "definition": "clever at planning things to get what you want, especially by tricking others",
    "example": "The cunning minister set a trap for his rival.",
    "synonyms": [
      "Machiavellian",
      "astute",
      "deceitful",
      "duplicitous",
      "guileful",
      "manipulative",
      "merciless",
      "opportunistic",
      "ruthless",
      "shrewd",
      "sly"
    ]
  },
  {
    "word": "sly",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "negative",
    "definition": "deceiving people in a clever way to get what you want",
    "example": "A sly smile showed that he knew the secret.",
    "synonyms": [
      "Machiavellian",
      "cunning",
      "deceitful",
      "duplicitous",
      "guileful",
      "manipulative",
      "merciless",
      "opportunistic",
      "ruthless"
    ]
  },
  {
    "word": "influential",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "having a lot of influence on someone or something",
    "example": "She is one of the most influential leaders in the region.",
    "synonyms": [
      "empowering",
      "inspirational",
      "luminous",
      "uplifting"
    ]
  },
  {
    "word": "self-assured",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "having confidence in your own abilities",
    "example": "The self-assured speaker did not need notes.",
    "synonyms": [
      "assertive",
      "decisive",
      "forthright",
      "having high self-esteem",
      "self-possessed"
    ]
  },
  {
    "word": "self-possessed",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "confident, composed and in control of yourself",
    "example": "The self-possessed witness answered every question calmly.",
    "synonyms": [
      "assertive",
      "decisive",
      "equanimous",
      "forthright",
      "having high self-esteem",
      "imperturbable",
      "level-headed",
      "placid",
      "self-assured",
      "stoic",
      "unflappable"
    ]
  },
  {
    "word": "altruistic",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "selflessly concerned for the well-being of others",
    "example": "The altruistic founder gave away most of her profits.",
    "synonyms": [
      "benevolent",
      "compassionate",
      "empathetic",
      "magnanimous",
      "noble"
    ]
  },
  {
    "word": "decisive",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "able to make decisions quickly and confidently",
    "example": "A decisive leader acts when time is short.",
    "synonyms": [
      "assertive",
      "forthright",
      "having high self-esteem",
      "self-assured",
      "self-possessed"
    ]
  },
  {
    "word": "having high self-esteem",
    "pos": "phrase",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "having belief and confidence in your own ability and value",
    "example": "People having high self-esteem usually handle criticism well.",
    "synonyms": [
      "assertive",
      "decisive",
      "forthright",
      "self-assured",
      "self-possessed"
    ]
  },
  {
    "word": "conceited",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "negative",
    "definition": "too proud of yourself and your actions and abilities",
    "example": "The conceited manager ignored all advice.",
    "synonyms": [
      "haughty",
      "hubristic",
      "patronising",
      "snooty",
      "supercilious"
    ]
  },
  {
    "word": "stoic",
    "pos": "adjective",
    "topics": [
      "leadership",
      "types of people"
    ],
    "tone": "mixed",
    "definition": "able to endure pain or hardship without showing feelings or complaining",
    "example": "The stoic general never complained about the cold.",
    "synonyms": [
      "equanimous",
      "imperturbable",
      "level-headed",
      "placid",
      "self-possessed",
      "unflappable"
    ]
  },
  {
    "word": "pioneering",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "innovative; willing to explore new ideas or areas",
    "example": "Her pioneering research opened a new field.",
    "synonyms": [
      "farsighted",
      "prescient",
      "strategic",
      "visionary"
    ]
  },
  {
    "word": "unyielding",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "mixed",
    "definition": "not giving way to pressure or persuasion; resolute",
    "example": "The unyielding negotiator refused every offer.",
    "synonyms": [
      "audacious",
      "dauntless",
      "indomitable",
      "intransigent",
      "intrepid",
      "obstinate",
      "perseverant",
      "recalcitrant",
      "resilient",
      "robust",
      "single-minded",
      "steadfast",
      "tenacious",
      "unwavering"
    ]
  },
  {
    "word": "luminous",
    "pos": "adjective",
    "topics": ["leadership", "art history"],
    "tone": "positive",
    "definition": "bright and clear; of a person or speech, clear and inspiring",
    "example": "Her luminous speech left the audience hopeful.",
    "synonyms": [
      "empowering",
      "influential",
      "inspirational",
      "uplifting"
    ]
  },
  {
    "word": "cerebral",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "mixed",
    "definition": "intellectual, relying on reason and thought more than emotion",
    "example": "His cerebral style of leadership favoured data over gut feeling.",
    "synonyms": [
      "astute",
      "discerning",
      "incisive",
      "insightful",
      "intuitive",
      "observant",
      "perceptive",
      "perspicacious",
      "sagacious",
      "shrewd",
      "subtle"
    ]
  },
  {
    "word": "discerning",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "having or showing good judgment and insight",
    "example": "A discerning leader picks advisers carefully.",
    "synonyms": [
      "astute",
      "cerebral",
      "incisive",
      "insightful",
      "intuitive",
      "observant",
      "perceptive",
      "perspicacious",
      "sagacious",
      "shrewd",
      "subtle"
    ]
  },
  {
    "word": "tenacious",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "holding firm to a belief, purpose or goal with determination",
    "example": "The tenacious lawyer never gave up the case.",
    "synonyms": [
      "audacious",
      "dauntless",
      "indomitable",
      "intrepid",
      "obstinate",
      "perseverant",
      "resilient",
      "robust",
      "single-minded",
      "steadfast",
      "unwavering",
      "unyielding"
    ]
  },
  {
    "word": "unflappable",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "not easily upset or disturbed; calm under pressure",
    "example": "The unflappable nurse stayed calm during the emergency.",
    "synonyms": [
      "equanimous",
      "imperturbable",
      "level-headed",
      "placid",
      "self-possessed",
      "stoic"
    ]
  },
  {
    "word": "magnanimous",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "generous and forgiving, especially toward rivals or those less powerful",
    "example": "The magnanimous winner praised his opponent.",
    "synonyms": [
      "altruistic",
      "benevolent",
      "compassionate",
      "empathetic",
      "noble"
    ]
  },
  {
    "word": "incisive",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "able to analyse clearly and sharply, getting to the heart of an issue",
    "example": "Her incisive questions exposed the weak point.",
    "synonyms": [
      "astute",
      "cerebral",
      "discerning",
      "insightful",
      "intuitive",
      "observant",
      "perceptive",
      "perspicacious",
      "sagacious",
      "shrewd",
      "subtle"
    ]
  },
  {
    "word": "steadfast",
    "pos": "adjective",
    "topics": [
      "leadership",
      "types of people"
    ],
    "tone": "positive",
    "definition": "firm and not changing in purpose or belief; loyal and dependable",
    "example": "He remained steadfast in his support for the team.",
    "synonyms": [
      "audacious",
      "dauntless",
      "indomitable",
      "intrepid",
      "perseverant",
      "resilient",
      "robust",
      "single-minded",
      "tenacious",
      "unwavering",
      "unyielding"
    ]
  },
  {
    "word": "subtle",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "perceptive and careful in approach; not obvious, especially in complex situations",
    "example": "A subtle leader guides people without giving orders.",
    "synonyms": [
      "astute",
      "cerebral",
      "discerning",
      "incisive",
      "insightful",
      "intuitive",
      "observant",
      "perceptive",
      "perspicacious",
      "sagacious",
      "shrewd"
    ]
  },
  {
    "word": "unassuming",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "modest and not seeking attention or praise",
    "example": "The unassuming CEO still answered her own phone.",
    "synonyms": [
      "down-to-earth",
      "modest",
      "unpretentious"
    ]
  },
  {
    "word": "uplifting",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "giving inspiration, encouragement or a sense of hope",
    "example": "The uplifting speech raised team morale.",
    "synonyms": [
      "empowering",
      "influential",
      "inspirational",
      "luminous"
    ]
  },
  {
    "word": "meticulous",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "showing great attention to detail; very careful and precise",
    "example": "The meticulous editor caught every error.",
    "synonyms": [
      "ambitious",
      "conscientious",
      "diligent",
      "disciplined"
    ]
  },
  {
    "word": "ambitious",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "eager to achieve success or a high level of accomplishment",
    "example": "An ambitious leader sets bold goals.",
    "synonyms": [
      "conscientious",
      "diligent",
      "disciplined",
      "meticulous",
      "single-minded"
    ]
  },
  {
    "word": "diligent",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "showing careful and persistent effort in work or duties",
    "example": "The diligent assistant finished every report on time.",
    "synonyms": [
      "ambitious",
      "conscientious",
      "disciplined",
      "meticulous"
    ]
  },
  {
    "word": "forthright",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "direct, clear and straightforward in communication or action",
    "example": "She was forthright about the risks.",
    "synonyms": [
      "assertive",
      "decisive",
      "having high self-esteem",
      "self-assured",
      "self-possessed"
    ]
  },
  {
    "word": "authentic",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "genuine and true to yourself, without pretence or deceit",
    "example": "People follow authentic leaders.",
    "synonyms": [
      "integrity-driven",
      "reliable",
      "scrupulous",
      "trustworthy"
    ]
  },
  {
    "word": "conscientious",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "taking great care in doing your duties, with a high sense of responsibility",
    "example": "A conscientious worker double-checks the details.",
    "synonyms": [
      "ambitious",
      "diligent",
      "disciplined",
      "meticulous"
    ]
  },
  {
    "word": "unwavering",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "firm and resolute; not easily shaken in beliefs or actions",
    "example": "He showed unwavering loyalty to his team.",
    "synonyms": [
      "audacious",
      "dauntless",
      "indomitable",
      "intrepid",
      "perseverant",
      "resilient",
      "robust",
      "single-minded",
      "steadfast",
      "tenacious",
      "unyielding"
    ]
  },
  {
    "word": "noble",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "having high moral qualities; honourable in character and action",
    "example": "It was a noble act to give up his place.",
    "synonyms": [
      "altruistic",
      "benevolent",
      "compassionate",
      "empathetic",
      "magnanimous"
    ]
  },
  {
    "word": "compassionate",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "showing deep sympathy and concern for the suffering of others",
    "example": "A compassionate leader supports staff in hard times.",
    "synonyms": [
      "altruistic",
      "benevolent",
      "empathetic",
      "magnanimous",
      "noble"
    ]
  },
  {
    "word": "resourceful",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "able to find quick and effective solutions to problems",
    "example": "The resourceful manager solved the shortage with local suppliers.",
    "synonyms": [
      "adaptable",
      "adroit",
      "dynamic",
      "flexible",
      "ingenious",
      "pragmatic",
      "versatile"
    ]
  },
  {
    "word": "level-headed",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "sensible and calm, especially in difficult circumstances",
    "example": "A level-headed leader avoids panic.",
    "synonyms": [
      "equanimous",
      "imperturbable",
      "placid",
      "self-possessed",
      "stoic",
      "unflappable"
    ]
  },
  {
    "word": "ingenious",
    "pos": "adjective",
    "topics": [
      "leadership",
      "general"
    ],
    "tone": "positive",
    "definition": "exceptionally clever at devising solutions or ideas",
    "example": "The ingenious design saved a great deal of energy.",
    "synonyms": [
      "adaptable",
      "adroit",
      "dynamic",
      "flexible",
      "pragmatic",
      "resourceful",
      "versatile"
    ]
  },
  {
    "word": "affable",
    "pos": "adjective",
    "topics": [
      "leadership",
      "types of people"
    ],
    "tone": "positive",
    "definition": "friendly, pleasant and easy to talk to",
    "example": "The affable mayor greeted everyone by name.",
    "synonyms": [
      "aloof",
      "approachable",
      "charismatic",
      "charming",
      "congenial",
      "diplomatic",
      "gregarious",
      "tactful"
    ]
  },
  {
    "word": "congenial",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "pleasant and compatible in manner or character",
    "example": "The congenial atmosphere made meetings enjoyable.",
    "synonyms": [
      "affable",
      "approachable",
      "charismatic",
      "charming",
      "diplomatic",
      "gregarious",
      "tactful"
    ]
  },
  {
    "word": "diplomatic",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "able to handle sensitive situations without causing unnecessary offence",
    "example": "She gave a diplomatic answer to the awkward question.",
    "synonyms": [
      "affable",
      "approachable",
      "charismatic",
      "charming",
      "congenial",
      "gregarious",
      "tactful"
    ]
  },
  {
    "word": "compelling",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "so convincing or interesting that it captures people's attention",
    "example": "He made a compelling case for change.",
    "synonyms": [
      "articulate",
      "cogent",
      "convincing",
      "eloquent",
      "grandiloquent",
      "loquacious",
      "magniloquent",
      "persuasive",
      "rhetorically adept"
    ]
  },
  {
    "word": "benevolent",
    "pos": "adjective",
    "topics": [
      "leadership",
      "types of people"
    ],
    "tone": "positive",
    "definition": "kind, well-meaning and inclined to do good",
    "example": "The benevolent king built hospitals across the land.",
    "synonyms": [
      "altruistic",
      "compassionate",
      "empathetic",
      "magnanimous",
      "noble"
    ]
  },
  {
    "word": "unpretentious",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "genuine and modest, without trying to seem more important than you are",
    "example": "An unpretentious leader eats lunch with the staff.",
    "synonyms": [
      "down-to-earth",
      "modest",
      "unassuming"
    ]
  },
  {
    "word": "Machiavellian",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "negative",
    "definition": "cunning and manipulative, willing to use others to gain power or advantage",
    "example": "The Machiavellian adviser played rivals against each other.",
    "synonyms": [
      "cunning",
      "deceitful",
      "duplicitous",
      "guileful",
      "manipulative",
      "merciless",
      "opportunistic",
      "ruthless",
      "sly"
    ]
  },
  {
    "word": "duplicitous",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "negative",
    "definition": "deliberately dishonest, often by hiding your real intentions",
    "example": "The duplicitous minister promised one thing and did another.",
    "synonyms": [
      "Machiavellian",
      "cunning",
      "deceitful",
      "guileful",
      "manipulative",
      "merciless",
      "opportunistic",
      "ruthless",
      "sly"
    ]
  },
  {
    "word": "deceitful",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "negative",
    "definition": "dishonest; deliberately making others believe something false",
    "example": "A deceitful leader loses trust quickly.",
    "synonyms": [
      "Machiavellian",
      "cunning",
      "duplicitous",
      "guileful",
      "manipulative",
      "merciless",
      "opportunistic",
      "ruthless",
      "sly"
    ]
  },
  {
    "word": "guileful",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "negative",
    "definition": "cleverly deceptive; skilled at tricking others",
    "example": "The guileful trader hid the real price.",
    "synonyms": [
      "Machiavellian",
      "cunning",
      "deceitful",
      "duplicitous",
      "manipulative",
      "merciless",
      "opportunistic",
      "ruthless",
      "sly"
    ]
  },
  {
    "word": "obstinate",
    "pos": "adjective",
    "topics": [
      "leadership",
      "types of people"
    ],
    "tone": "negative",
    "definition": "stubbornly refusing to change your opinion or behaviour",
    "example": "The obstinate director rejected every suggestion.",
    "synonyms": [
      "intransigent",
      "recalcitrant",
      "single-minded",
      "tenacious",
      "unyielding"
    ]
  },
  {
    "word": "intransigent",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "negative",
    "definition": "unwilling to compromise, especially over principles or demands",
    "example": "The intransigent union refused to negotiate.",
    "synonyms": [
      "obstinate",
      "recalcitrant",
      "single-minded",
      "unyielding"
    ]
  },
  {
    "word": "recalcitrant",
    "pos": "adjective",
    "topics": [
      "leadership",
      "types of people"
    ],
    "tone": "negative",
    "definition": "unwilling to obey orders or do what should be done",
    "example": "The recalcitrant student ignored every rule.",
    "synonyms": [
      "dogmatic",
      "intransigent",
      "obstinate",
      "single-minded",
      "unyielding",
      "wilful"
    ]
  },
  {
    "word": "hubristic",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "negative",
    "definition": "showing excessive pride and self-confidence that often leads to failure",
    "example": "The hubristic CEO ignored every warning.",
    "synonyms": [
      "conceited",
      "haughty",
      "patronising",
      "snooty",
      "supercilious"
    ]
  },
  {
    "word": "patronising",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "negative",
    "definition": "treating people as if they are less intelligent or less important than you",
    "example": "His patronising tone annoyed the staff.",
    "synonyms": [
      "conceited",
      "haughty",
      "hubristic",
      "snooty",
      "supercilious"
    ]
  },
  {
    "word": "haughty",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "negative",
    "definition": "unfriendly and proud; seeming to think you are better than other people",
    "example": "The haughty manager rarely spoke to junior staff.",
    "synonyms": [
      "conceited",
      "hubristic",
      "patronising",
      "snooty",
      "supercilious"
    ]
  },
  {
    "word": "supercilious",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "negative",
    "definition": "behaving as if you think you are better than other people",
    "example": "She gave a supercilious smile and walked away.",
    "synonyms": [
      "conceited",
      "haughty",
      "hubristic",
      "patronising",
      "snooty"
    ]
  },
  {
    "word": "snooty",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "negative",
    "definition": "unfriendly and acting as if you are better than other people (informal)",
    "example": "The snooty waiter ignored us.",
    "synonyms": [
      "conceited",
      "haughty",
      "hubristic",
      "patronising",
      "supercilious"
    ]
  },
  {
    "word": "gregarious",
    "pos": "adjective",
    "topics": [
      "leadership",
      "types of people"
    ],
    "tone": "positive",
    "definition": "liking to be with other people",
    "example": "A gregarious leader enjoys meeting the whole team.",
    "synonyms": [
      "affable",
      "aloof",
      "approachable",
      "charismatic",
      "charming",
      "congenial",
      "diplomatic",
      "tactful"
    ]
  },
  {
    "word": "approachable",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "friendly and easy to talk to",
    "example": "An approachable manager keeps her door open.",
    "synonyms": [
      "affable",
      "charismatic",
      "charming",
      "congenial",
      "diplomatic",
      "gregarious",
      "tactful"
    ]
  },
  {
    "word": "opportunistic",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "negative",
    "definition": "using situations for your own benefit, often without principles",
    "example": "The opportunistic politician changed sides to win votes.",
    "synonyms": [
      "Machiavellian",
      "cunning",
      "deceitful",
      "duplicitous",
      "guileful",
      "manipulative",
      "merciless",
      "ruthless",
      "sly"
    ]
  },
  {
    "word": "placid",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "calm; not easily excited or angry",
    "example": "He had a placid temperament and rarely raised his voice.",
    "synonyms": [
      "equanimous",
      "imperturbable",
      "level-headed",
      "self-possessed",
      "stoic",
      "unflappable"
    ]
  },
  {
    "word": "down-to-earth",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "practical and sensible; not pretending to be important",
    "example": "Despite her fame, she is down-to-earth.",
    "synonyms": [
      "modest",
      "unassuming",
      "unpretentious"
    ]
  },
  {
    "word": "modest",
    "pos": "adjective",
    "topics": [
      "leadership"
    ],
    "tone": "positive",
    "definition": "not talking proudly about your own abilities or achievements",
    "example": "She is modest about her success.",
    "synonyms": [
      "down-to-earth",
      "unassuming",
      "unpretentious"
    ]
  },
  {
    "word": "aloof",
    "pos": "adjective",
    "topics": [
      "types of people"
    ],
    "tone": "mixed",
    "definition": "distant and not friendly or interested in other people",
    "example": "He stayed aloof at the party and spoke to no one.",
    "synonyms": [
      "affable",
      "gregarious"
    ]
  },
  {
    "word": "belligerent",
    "pos": "adjective",
    "topics": [
      "types of people"
    ],
    "tone": "negative",
    "definition": "hostile and aggressive, always ready to argue or fight",
    "example": "The belligerent customer shouted at the staff.",
    "synonyms": [
      "insolent",
      "irascible"
    ]
  },
  {
    "word": "capricious",
    "pos": "adjective",
    "topics": [
      "types of people"
    ],
    "tone": "negative",
    "definition": "changing mood or behaviour suddenly and for no clear reason",
    "example": "A capricious manager is hard to work for.",
    "synonyms": [
      "impetuous",
      "mercurial"
    ]
  },
  {
    "word": "cynical",
    "pos": "adjective",
    "topics": [
      "types of people"
    ],
    "tone": "negative",
    "definition": "believing that people are only interested in themselves and rarely trusting their motives",
    "example": "She was cynical about every promise the politicians made.",
    "synonyms": [
      "sanguine"
    ]
  },
  {
    "word": "dogmatic",
    "pos": "adjective",
    "topics": [
      "types of people"
    ],
    "tone": "negative",
    "definition": "insisting that your own beliefs are right and refusing to consider other views",
    "example": "His dogmatic approach left no room for discussion.",
    "synonyms": [
      "intransigent",
      "obstinate",
      "recalcitrant",
      "unyielding",
      "wilful"
    ]
  },
  {
    "word": "eccentric",
    "pos": "adjective",
    "topics": [
      "types of people"
    ],
    "tone": "mixed",
    "definition": "unusual and different from what is normal, often in a harmless or amusing way",
    "example": "The eccentric professor wore a different hat every day.",
    "synonyms": [
      "maverick",
      "quixotic"
    ]
  },
  {
    "word": "impetuous",
    "pos": "adjective",
    "topics": [
      "types of people"
    ],
    "tone": "mixed",
    "definition": "acting quickly without thinking about the results",
    "example": "His impetuous decision to quit surprised everyone.",
    "synonyms": [
      "capricious",
      "mercurial"
    ]
  },
  {
    "word": "indolent",
    "pos": "adjective",
    "topics": [
      "types of people"
    ],
    "tone": "negative",
    "definition": "lazy and unwilling to work",
    "example": "The indolent clerk spent the day doing nothing."
  },
  {
    "word": "insolent",
    "pos": "adjective",
    "topics": [
      "types of people"
    ],
    "tone": "negative",
    "definition": "rude and showing a lack of respect",
    "example": "The insolent student laughed at the teacher.",
    "synonyms": [
      "belligerent",
      "irascible"
    ]
  },
  {
    "word": "irascible",
    "pos": "adjective",
    "topics": [
      "types of people"
    ],
    "tone": "negative",
    "definition": "easily made angry; short-tempered",
    "example": "The irascible old man shouted at the children.",
    "synonyms": [
      "belligerent",
      "insolent"
    ]
  },
  {
    "word": "mendacious",
    "pos": "adjective",
    "topics": [
      "types of people"
    ],
    "tone": "negative",
    "definition": "not telling the truth; lying",
    "example": "The mendacious witness was caught in a lie.",
    "synonyms": [
      "deceitful",
      "duplicitous"
    ]
  },
  {
    "word": "mercurial",
    "pos": "adjective",
    "topics": [
      "types of people"
    ],
    "tone": "mixed",
    "definition": "changing mood quickly and unpredictably, often lively",
    "example": "Her mercurial temper made the meetings tense.",
    "synonyms": [
      "capricious",
      "impetuous"
    ]
  },
  {
    "word": "pedantic",
    "pos": "adjective",
    "topics": [
      "types of people"
    ],
    "tone": "negative",
    "definition": "too concerned with small details or rules, often to show off knowledge",
    "example": "The pedantic editor argued over every comma.",
    "synonyms": [
      "meticulous",
      "pernickety",
      "scrupulous"
    ]
  },
  {
    "word": "pensive",
    "pos": "adjective",
    "topics": [
      "types of people"
    ],
    "tone": "mixed",
    "definition": "thinking deeply, often in a quiet or slightly sad way",
    "example": "She looked pensive as she stared out of the window.",
    "synonyms": [
      "wistful"
    ]
  },
  {
    "word": "pernickety",
    "pos": "adjective",
    "topics": [
      "types of people"
    ],
    "tone": "negative",
    "definition": "too concerned with small details; fussy",
    "example": "The pernickety chef sent the plate back twice.",
    "synonyms": [
      "meticulous",
      "pedantic",
      "scrupulous"
    ]
  },
  {
    "word": "quixotic",
    "pos": "adjective",
    "topics": [
      "types of people"
    ],
    "tone": "mixed",
    "definition": "idealistic and not practical, often pursuing impossible goals",
    "example": "His quixotic plan to end all crime never worked.",
    "synonyms": [
      "eccentric",
      "maverick"
    ]
  },
  {
    "word": "sanguine",
    "pos": "adjective",
    "topics": [
      "types of people"
    ],
    "tone": "positive",
    "definition": "cheerful and optimistic, especially in a difficult situation",
    "example": "She remained sanguine about the outcome of the trial.",
    "synonyms": [
      "cynical"
    ]
  },
  {
    "word": "vociferous",
    "pos": "adjective",
    "topics": [
      "types of people"
    ],
    "tone": "mixed",
    "definition": "expressing opinions loudly and forcefully",
    "example": "There was vociferous opposition to the new law."
  },
  {
    "word": "wilful",
    "pos": "adjective",
    "topics": [
      "types of people"
    ],
    "tone": "negative",
    "definition": "determined to do what you want even when told not to; stubborn",
    "example": "The wilful child ignored every instruction.",
    "synonyms": [
      "dogmatic",
      "intransigent",
      "obstinate",
      "recalcitrant",
      "unyielding"
    ]
  },
  {
    "word": "wistful",
    "pos": "adjective",
    "topics": [
      "types of people"
    ],
    "tone": "mixed",
    "definition": "sadly longing for something in the past or that cannot be had",
    "example": "He gave a wistful smile at the old photographs.",
    "synonyms": [
      "pensive"
    ]
  },
  {
    "word": "connoisseur",
    "pos": "noun",
    "topics": [
      "types of people"
    ],
    "definition": "an expert judge in matters of taste, such as food, wine or art",
    "example": "She is a connoisseur of Georgian wine.",
    "synonyms": [
      "luminary"
    ]
  },
  {
    "word": "charlatan",
    "pos": "noun",
    "topics": [
      "types of people"
    ],
    "tone": "negative",
    "definition": "a person who pretends to have skills or knowledge that they do not have",
    "example": "The so-called doctor was a charlatan who sold fake cures.",
    "synonyms": [
      "sycophant"
    ]
  },
  {
    "word": "degenerate",
    "pos": "noun",
    "topics": [
      "types of people"
    ],
    "tone": "negative",
    "definition": "a person whose behaviour has fallen below accepted moral standards",
    "example": "The play portrays him as a degenerate with no sense of shame."
  },
  {
    "word": "maverick",
    "pos": "noun",
    "topics": [
      "types of people"
    ],
    "definition": "an independent person who does not follow the rules or the group",
    "example": "The maverick senator often voted against his own party.",
    "synonyms": [
      "eccentric",
      "quixotic"
    ]
  },
  {
    "word": "pragmatist",
    "pos": "noun",
    "topics": [
      "types of people"
    ],
    "definition": "a person who deals with things in a practical, realistic way",
    "example": "As a pragmatist, she chose the cheaper option that worked."
  },
  {
    "word": "hermit",
    "pos": "noun",
    "topics": [
      "types of people"
    ],
    "definition": "a person who lives alone, away from other people",
    "example": "He lived like a hermit in a mountain hut.",
    "synonyms": [
      "introvert"
    ]
  },
  {
    "word": "extrovert",
    "pos": "noun",
    "topics": [
      "types of people"
    ],
    "definition": "a lively, outgoing person who enjoys being with others",
    "example": "An extrovert at heart, she loves speaking in public."
  },
  {
    "word": "introvert",
    "pos": "noun",
    "topics": [
      "types of people"
    ],
    "definition": "a quiet, reserved person who prefers being alone",
    "example": "The introvert preferred reading to parties.",
    "synonyms": [
      "hermit"
    ]
  },
  {
    "word": "sycophant",
    "pos": "noun",
    "topics": [
      "types of people"
    ],
    "tone": "negative",
    "definition": "a person who flatters powerful people to gain an advantage",
    "example": "A sycophant never disagrees with the president.",
    "synonyms": [
      "charlatan"
    ]
  },
  {
    "word": "zealot",
    "pos": "noun",
    "topics": [
      "types of people"
    ],
    "tone": "negative",
    "definition": "a person who is extremely enthusiastic or fanatical about a cause",
    "example": "A religious zealot tried to ban all books.",
    "synonyms": [
      "partisan",
      "proponent"
    ]
  },
  {
    "word": "mediator",
    "pos": "noun",
    "topics": [
      "types of people"
    ],
    "definition": "a person who helps two sides in a dispute reach an agreement",
    "example": "A neutral mediator helped the two sides reach an agreement."
  },
  {
    "word": "aristocrat",
    "pos": "noun",
    "topics": [
      "types of people"
    ],
    "definition": "a member of the highest social class; a noble",
    "example": "The aristocrat lived in a vast country house.",
    "synonyms": [
      "mentor",
      "patriarch"
    ]
  },
  {
    "word": "protagonist",
    "pos": "noun",
    "topics": [
      "types of people"
    ],
    "definition": "the main character in a story, or the leading supporter of an idea",
    "example": "The protagonist of the novel is a young lawyer."
  },
  {
    "word": "luminary",
    "pos": "noun",
    "topics": [
      "types of people"
    ],
    "tone": "positive",
    "definition": "a person who is an inspiration or influence in a particular field",
    "example": "The conference honoured a luminary of law and science.",
    "synonyms": [
      "connoisseur"
    ]
  },
  {
    "word": "villain",
    "pos": "noun",
    "topics": [
      "types of people"
    ],
    "tone": "negative",
    "definition": "a bad character in a story, or a person who does evil",
    "example": "The villain in the film plans to steal the crown."
  },
  {
    "word": "subordinate",
    "pos": "noun",
    "topics": [
      "types of people"
    ],
    "definition": "a person with a lower rank who works under someone else",
    "example": "A good manager treats every subordinate with respect."
  },
  {
    "word": "proponent",
    "pos": "noun",
    "topics": [
      "types of people"
    ],
    "definition": "a person who supports and argues for an idea or plan",
    "example": "She is a leading proponent of free speech.",
    "synonyms": [
      "partisan",
      "zealot"
    ]
  },
  {
    "word": "mercenary",
    "pos": "noun",
    "topics": [
      "types of people"
    ],
    "tone": "negative",
    "definition": "a person who does something only for money, or a soldier hired to fight",
    "example": "The mercenary fought for whoever paid the most."
  },
  {
    "word": "denizen",
    "pos": "noun",
    "topics": [
      "types of people"
    ],
    "definition": "a person or animal that lives in a particular place",
    "example": "Every denizen of the village gathers at the market."
  },
  {
    "word": "mentor",
    "pos": "noun",
    "topics": [
      "types of people"
    ],
    "tone": "positive",
    "definition": "an experienced person who advises and trains someone less experienced",
    "example": "My mentor taught me how to write a proper essay.",
    "synonyms": [
      "aristocrat",
      "patriarch"
    ]
  },
  {
    "word": "patriarch",
    "pos": "noun",
    "topics": [
      "types of people"
    ],
    "definition": "the male head of a family or tribe",
    "example": "The patriarch of the family sat at the head of the table.",
    "synonyms": [
      "aristocrat",
      "mentor"
    ]
  },
  {
    "word": "elicit",
    "pos": "verb",
    "topics": [
      "general"
    ],
    "definition": "to draw out a response, reaction or piece of information",
    "example": "The question did not elicit a clear answer.",
    "synonyms": [
      "illicit"
    ]
  },
  {
    "word": "illicit",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "not allowed by law or by the rules; illegal",
    "example": "The police found illicit goods in the van.",
    "synonyms": [
      "elicit"
    ]
  },
  {
    "word": "infatuated",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "having a strong but usually short-lived love or admiration for someone or something",
    "example": "He was infatuated with her from the first day.",
    "synonyms": [
      "mesmerized",
      "petrified"
    ]
  },
  {
    "word": "mesmerized",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "so interested or fascinated that you cannot look away",
    "example": "The audience was mesmerized by the dancer.",
    "synonyms": [
      "infatuated",
      "petrified"
    ]
  },
  {
    "word": "cutting-edge",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "the most modern and advanced",
    "example": "The lab uses cutting-edge technology.",
    "synonyms": [
      "novel"
    ]
  },
  {
    "word": "novel",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "new and original, unlike anything before",
    "example": "The team proposed a novel solution to the problem.",
    "synonyms": [
      "cutting-edge"
    ]
  },
  {
    "word": "farcical",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "so absurd that it is ridiculous, like a farce",
    "example": "The meeting turned into a farcical argument."
  },
  {
    "word": "cliffhanger",
    "pos": "noun",
    "topics": [
      "general"
    ],
    "definition": "an exciting ending that leaves the outcome uncertain",
    "example": "The episode ended on a cliffhanger.",
    "synonyms": [
      "brainteaser",
      "enigma"
    ]
  },
  {
    "word": "enigma",
    "pos": "noun",
    "topics": [
      "general"
    ],
    "definition": "a person or thing that is mysterious and difficult to understand",
    "example": "The new director remains an enigma to the staff.",
    "synonyms": [
      "brainteaser",
      "cliffhanger"
    ]
  },
  {
    "word": "brainteaser",
    "pos": "noun",
    "topics": [
      "general"
    ],
    "definition": "a difficult puzzle or problem that makes you think hard",
    "example": "The last question was a real brainteaser.",
    "synonyms": [
      "cliffhanger",
      "enigma"
    ]
  },
  {
    "word": "penchant",
    "pos": "noun",
    "topics": [
      "general"
    ],
    "definition": "a strong liking for something or a habit of doing something",
    "example": "She has a penchant for dramatic entrances."
  },
  {
    "word": "insatiable",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "impossible to satisfy; always wanting more",
    "example": "He had an insatiable appetite for knowledge."
  },
  {
    "word": "cursory",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "quick and not thorough, without attention to detail",
    "example": "He gave the report only a cursory glance.",
    "synonyms": [
      "painstaking",
      "superficial"
    ]
  },
  {
    "word": "painstaking",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "done with great care and thoroughness",
    "example": "The restoration was a painstaking task.",
    "synonyms": [
      "cursory",
      "superficial"
    ]
  },
  {
    "word": "superficial",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "not deep or thorough; concerned only with what is on the surface",
    "example": "Their knowledge of the law was superficial.",
    "synonyms": [
      "cursory",
      "painstaking"
    ]
  },
  {
    "word": "ingenuous",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "innocent, honest and trusting, sometimes naively so",
    "example": "His ingenuous smile made everyone trust him.",
    "synonyms": [
      "ingenious"
    ]
  },
  {
    "word": "grave",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "very serious or worrying",
    "example": "The court faced a grave decision."
  },
  {
    "word": "fanciful",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "based on imagination rather than reality",
    "example": "The plan sounded fanciful and impractical."
  },
  {
    "word": "fortuitous",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "happening by lucky chance",
    "example": "Their meeting was entirely fortuitous.",
    "synonyms": [
      "inexplicably",
      "plausibly"
    ]
  },
  {
    "word": "tamely",
    "pos": "adverb",
    "topics": [
      "general"
    ],
    "definition": "in a weak and obedient way, without resistance",
    "example": "The crowd tamely accepted the new rules."
  },
  {
    "word": "petrified",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "definition": "extremely frightened, unable to move",
    "example": "She was petrified of speaking in public.",
    "synonyms": [
      "infatuated",
      "mesmerized"
    ]
  },
  {
    "word": "pretentious",
    "pos": "adjective",
    "topics": [
      "general"
    ],
    "tone": "negative",
    "definition": "trying to seem more important, clever or cultured than you really are",
    "example": "The restaurant was pretentious and overpriced."
  },
  {
    "word": "punctiliously",
    "pos": "adverb",
    "topics": [
      "general"
    ],
    "definition": "with great attention to correct behaviour and small details",
    "example": "He punctiliously followed every rule of etiquette."
  },
  {
    "word": "plausibly",
    "pos": "adverb",
    "topics": [
      "general"
    ],
    "definition": "in a way that seems reasonable and likely to be true",
    "example": "She argued plausibly that the delay was unavoidable.",
    "synonyms": [
      "fortuitous",
      "inexplicably"
    ]
  },
  {
    "word": "inexplicably",
    "pos": "adverb",
    "topics": [
      "general"
    ],
    "definition": "in a way that cannot be explained",
    "example": "The train inexplicably stopped in the middle of the field.",
    "synonyms": [
      "fortuitous",
      "plausibly"
    ]
  },
  {
    "word": "bouquet",
    "pos": "noun",
    "topics": [
      "general"
    ],
    "definition": "an attractively arranged bunch of flowers, or the pleasant smell of wine",
    "example": "She carried a bouquet of white roses."
  },
  {
    "word": "rekindled",
    "pos": "verb",
    "topics": [
      "general"
    ],
    "definition": "brought back or made active again (a feeling, interest or relationship)",
    "example": "The reunion rekindled their old friendship.",
    "synonyms": [
      "resuscitate",
      "revamped"
    ]
  },
  {
    "word": "revamped",
    "pos": "verb",
    "topics": [
      "general"
    ],
    "definition": "changed or improved, especially the form or appearance of something",
    "example": "The cafe was revamped last year.",
    "synonyms": [
      "rekindled",
      "resuscitate"
    ]
  },
  {
    "word": "resuscitate",
    "pos": "verb",
    "topics": [
      "general"
    ],
    "definition": "to bring someone back to consciousness or life; to revive something",
    "example": "Doctors tried to resuscitate the patient.",
    "synonyms": [
      "rekindled",
      "revamped"
    ]
  },
  {
    "word": "infinite",
    "pos": "adjective",
    "topics": [
      "renewable energy",
      "general"
    ],
    "definition": "without any limit or end",
    "example": "Many people wrongly believe that natural resources are infinite.",
    "synonyms": [
      "boundless",
      "inexhaustible",
      "limitless"
    ]
  },
  {
    "word": "finite",
    "pos": "adjective",
    "topics": [
      "renewable energy",
      "general"
    ],
    "definition": "having a limit or end; not unlimited",
    "example": "Oil and gas are finite resources that will eventually run out.",
    "synonyms": [
      "limited",
      "infinite",
      "inexhaustible"
    ]
  },
  {
    "word": "boundless",
    "pos": "adjective",
    "topics": [
      "renewable energy",
      "general"
    ],
    "definition": "having no limits; seeming to have no end",
    "example": "The young volunteers showed boundless energy during the clean-up.",
    "synonyms": [
      "infinite",
      "inexhaustible",
      "limitless"
    ]
  },
  {
    "word": "inexhaustible",
    "pos": "adjective",
    "topics": [
      "renewable energy"
    ],
    "definition": "so plentiful that it can never be used up",
    "example": "Wind is an inexhaustible source of power.",
    "synonyms": [
      "infinite",
      "boundless",
      "indefatigable"
    ]
  },
  {
    "word": "indefatigable",
    "pos": "adjective",
    "topics": [
      "renewable energy",
      "general"
    ],
    "definition": "never getting tired; continuing to work hard with great energy (used for people, not resources)",
    "example": "The indefatigable researcher worked on the solar project for ten years.",
    "synonyms": [
      "inexhaustible",
      "tireless",
      "untiring"
    ]
  },
  {
    "word": "plethora",
    "pos": "noun",
    "topics": [
      "renewable energy",
      "general"
    ],
    "definition": "a very large amount of something, often more than is needed",
    "example": "The report offers a plethora of statistics on solar power.",
    "synonyms": [
      "surfeit",
      "abundance",
      "surplus"
    ],
    "cloze": "The report offers a ____ of statistics on solar power."
  },
  {
    "word": "surplus",
    "pos": "noun",
    "topics": [
      "renewable energy",
      "general"
    ],
    "definition": "an amount that is more than what is needed or used",
    "example": "Farms with solar panels can sell their surplus electricity to the grid.",
    "synonyms": [
      "surfeit",
      "plethora",
      "excess"
    ]
  },
  {
    "word": "surfeit",
    "pos": "noun",
    "topics": [
      "renewable energy",
      "general"
    ],
    "definition": "an amount of something that is too large, more than is good",
    "example": "A surfeit of cheap panels flooded the market and pushed prices down.",
    "synonyms": [
      "plethora",
      "surplus",
      "glut"
    ],
    "cloze": "A ____ of cheap panels flooded the market and pushed prices down."
  },
  {
    "word": "superfluous",
    "pos": "adjective",
    "topics": [
      "renewable energy",
      "general"
    ],
    "definition": "more than is needed; unnecessary",
    "example": "Delete any superfluous words from your essay.",
    "synonyms": [
      "redundant",
      "unnecessary",
      "excessive"
    ]
  },
  {
    "word": "profligate",
    "pos": "adjective",
    "topics": [
      "renewable energy",
      "general"
    ],
    "definition": "wasting money, resources or energy in a careless way",
    "example": "The profligate use of water in the desert city worried engineers.",
    "synonyms": [
      "prodigal",
      "wasteful",
      "extravagant"
    ]
  },
  {
    "word": "prodigal",
    "pos": "adjective",
    "topics": [
      "renewable energy",
      "general"
    ],
    "definition": "spending money or resources freely and wastefully",
    "example": "After years of prodigal spending, the company had no money left.",
    "synonyms": [
      "profligate",
      "wasteful",
      "extravagant"
    ]
  },
  {
    "word": "dissipate",
    "pos": "verb",
    "topics": [
      "renewable energy",
      "general"
    ],
    "definition": "to disappear gradually; or to waste energy or money bit by bit",
    "example": "Heat from the plant dissipates into the air if it is not captured.",
    "noun": "dissipation",
    "synonyms": [
      "disperse",
      "vanish",
      "squander"
    ]
  },
  {
    "word": "replenish",
    "pos": "verb",
    "topics": [
      "renewable energy",
      "general"
    ],
    "definition": "to fill something up again; to restore a supply",
    "example": "Rain replenishes the reservoir every spring.",
    "noun": "replenishment",
    "synonyms": [
      "refill",
      "restock",
      "restore"
    ]
  },
  {
    "word": "devoid",
    "pos": "adjective",
    "topics": [
      "renewable energy",
      "general"
    ],
    "definition": "completely lacking something (devoid of)",
    "example": "The desert is almost devoid of vegetation.",
    "synonyms": [
      "lacking",
      "empty",
      "bare"
    ],
    "cloze": "The desert is almost ____ of vegetation."
  },
  {
    "word": "intermittent",
    "pos": "adjective",
    "topics": [
      "renewable energy"
    ],
    "definition": "stopping and starting; not continuous",
    "example": "Solar power is intermittent because the sun does not shine at night.",
    "synonyms": [
      "sporadic",
      "irregular",
      "occasional"
    ]
  },
  {
    "word": "sporadic",
    "pos": "adjective",
    "topics": [
      "renewable energy"
    ],
    "definition": "happening rarely and at irregular times",
    "example": "Sporadic rain did little to end the drought.",
    "synonyms": [
      "intermittent",
      "occasional",
      "irregular"
    ]
  },
  {
    "word": "scarcity",
    "pos": "noun",
    "topics": [
      "renewable energy",
      "general"
    ],
    "definition": "a situation in which there is not enough of something",
    "example": "Water scarcity affects millions of people worldwide.",
    "adjective": "scarce",
    "synonyms": [
      "shortage",
      "deficiency",
      "lack"
    ]
  },
  {
    "word": "harness",
    "pos": "verb",
    "topics": [
      "renewable energy",
      "general"
    ],
    "definition": "to control and use the power of something, especially a natural force",
    "example": "Dams harness the power of rivers to produce electricity.",
    "synonyms": [
      "exploit",
      "utilize",
      "tap into"
    ]
  },
  {
    "word": "optimize",
    "pos": "verb",
    "topics": [
      "renewable energy",
      "general"
    ],
    "definition": "to make something as effective or efficient as possible",
    "example": "Engineers optimize the angle of the panels to capture more sunlight.",
    "noun": "optimization",
    "synonyms": [
      "maximize",
      "improve",
      "refine"
    ]
  },
  {
    "word": "biomass",
    "pos": "noun",
    "topics": ["renewable energy", "ecology"],
    "definition": "organic material, such as wood, crops and waste, that is burned or processed to make energy",
    "example": "Biomass can be burned directly or turned into biogas."
  },
  {
    "word": "geothermal",
    "pos": "adjective",
    "topics": [
      "renewable energy"
    ],
    "definition": "using heat that comes from inside the Earth",
    "example": "Iceland heats most of its homes with geothermal energy."
  },
  {
    "word": "hydroelectric",
    "pos": "adjective",
    "topics": [
      "renewable energy"
    ],
    "definition": "producing electricity from the force of moving water",
    "example": "The hydroelectric plant supplies power to the whole valley."
  },
  {
    "word": "tidal",
    "pos": "adjective",
    "topics": [
      "renewable energy"
    ],
    "definition": "relating to the regular rise and fall of the sea",
    "example": "Tidal power is predictable because tides follow the moon."
  },
  {
    "word": "photovoltaic",
    "pos": "adjective",
    "topics": [
      "renewable energy"
    ],
    "definition": "converting light directly into electricity (often shortened to PV)",
    "example": "Photovoltaic cells are usually made from silicon."
  },
  {
    "word": "turbine",
    "pos": "noun",
    "topics": [
      "renewable energy"
    ],
    "definition": "a machine with blades that spin to produce power",
    "example": "The wind makes the blades of the turbine spin."
  },
  {
    "word": "barrage",
    "pos": "noun",
    "topics": [
      "renewable energy"
    ],
    "definition": "a dam-like structure built across a river mouth or bay to produce tidal power",
    "example": "The tidal barrage generates electricity as the sea flows through its turbines."
  },
  {
    "word": "sluice gate",
    "pos": "noun",
    "topics": [
      "renewable energy"
    ],
    "definition": "a gate that controls how much water flows through a channel",
    "example": "The engineers opened the sluice gate to let the tide flow in."
  },
  {
    "word": "reservoir",
    "pos": "noun",
    "topics": [
      "renewable energy"
    ],
    "definition": "a large natural or artificial lake where water is stored",
    "example": "The dam created a huge reservoir behind it."
  },
  {
    "word": "residue",
    "pos": "noun",
    "topics": [
      "renewable energy"
    ],
    "definition": "what remains after something has been removed or used",
    "example": "Agricultural residue, such as straw, can be burned for energy.",
    "synonyms": [
      "leftovers",
      "remains",
      "waste"
    ]
  },
  {
    "word": "molten",
    "pos": "adjective",
    "topics": [
      "renewable energy"
    ],
    "definition": "melted into a liquid by great heat",
    "example": "Geothermal heat comes from the molten rock deep underground."
  },
  {
    "word": "mantle",
    "pos": "noun",
    "topics": [
      "renewable energy"
    ],
    "definition": "the thick layer of hot rock between the Earth's crust and its core",
    "example": "Heat from the mantle warms the water stored underground."
  },
  {
    "word": "grid",
    "pos": "noun",
    "topics": [
      "renewable energy"
    ],
    "definition": "the network of cables that carries electricity across a country",
    "example": "Surplus power from the wind farm is fed into the grid."
  },
  {
    "word": "generator",
    "pos": "noun",
    "topics": [
      "renewable energy"
    ],
    "definition": "a machine that produces electricity",
    "example": "A generator inside the turbine converts movement into electricity."
  },
  {
    "word": "baseload",
    "pos": "noun",
    "topics": [
      "renewable energy"
    ],
    "definition": "the minimum amount of electricity that a grid must supply at all times",
    "example": "Geothermal plants provide reliable baseload power."
  },
  {
    "word": "dispatchable",
    "pos": "adjective",
    "topics": [
      "renewable energy"
    ],
    "definition": "able to be switched on when needed, unlike solar or wind",
    "example": "Hydropower is dispatchable because dams can release water when demand rises.",
    "synonyms": [
      "intermittent",
      "reliable"
    ]
  },
  {
    "word": "curtailment",
    "pos": "noun",
    "topics": [
      "renewable energy"
    ],
    "definition": "the act of reducing or stopping something, such as the output of a wind farm",
    "example": "Grid operators ordered the curtailment of wind output during the storm.",
    "verb": "curtail"
  },
  {
    "word": "decarbonize",
    "pos": "verb",
    "topics": [
      "renewable energy"
    ],
    "definition": "to reduce the amount of carbon dioxide produced by an economy or industry",
    "example": "The government plans to decarbonize its power sector by 2040.",
    "noun": "decarbonization"
  },
  {
    "word": "fossil fuel",
    "pos": "noun",
    "topics": [
      "renewable energy"
    ],
    "definition": "a fuel such as coal, oil or gas that formed from ancient plants and animals",
    "example": "Burning fossil fuel releases carbon dioxide into the atmosphere."
  },
  {
    "word": "viable",
    "pos": "adjective",
    "topics": [
      "renewable energy",
      "general"
    ],
    "definition": "able to work successfully; practical",
    "example": "Tidal power is viable only in a few coastal regions.",
    "synonyms": [
      "feasible",
      "workable",
      "practical"
    ]
  },
  {
    "word": "scalable",
    "pos": "adjective",
    "topics": [
      "renewable energy",
      "general"
    ],
    "definition": "able to be made bigger or used on a larger scale",
    "example": "Solar is scalable, from a single rooftop to a desert power station.",
    "synonyms": [
      "expandable",
      "adaptable"
    ]
  },
  {
    "word": "vulnerable",
    "pos": "adjective",
    "topics": [
      "renewable energy",
      "general"
    ],
    "definition": "easily harmed or affected (vulnerable to)",
    "example": "Hydropower is vulnerable to drought.",
    "synonyms": [
      "exposed",
      "susceptible",
      "defenseless"
    ],
    "cloze": "Hydropower is ____ to drought."
  },
  {
    "word": "withstand",
    "pos": "verb",
    "topics": [
      "renewable energy",
      "general"
    ],
    "definition": "to survive something difficult without being damaged",
    "example": "Wave energy devices must withstand violent storms.",
    "synonyms": [
      "endure",
      "resist",
      "survive"
    ]
  },
  {
    "word": "displace",
    "pos": "verb",
    "topics": [
      "renewable energy",
      "general"
    ],
    "definition": "to force people to leave their home; or to take the place of something",
    "example": "The dam displaced more than a million people.",
    "synonyms": [
      "uproot",
      "replace",
      "dislodge"
    ]
  },
  {
    "word": "rehabilitate",
    "pos": "verb",
    "topics": [
      "renewable energy",
      "general"
    ],
    "definition": "to restore something to a good condition",
    "example": "The tidal plant helped rehabilitate a polluted lake.",
    "synonyms": [
      "restore",
      "revive",
      "renovate"
    ]
  },
  {
    "word": "vivacious",
    "pos": "adjective",
    "topics": ["art history", "general"],
    "level": "academic",
    "definition": "full of life, energy and color",
    "example": "The Impressionists created a new and vivacious world on canvas.",
    "synonyms": ["lively", "spirited", "vibrant"],
    "replaces": ["lively"]
  },
  {
    "word": "representational",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "showing people and things as they look in real life",
    "example": "Traditional painting was highly representational, so portraits looked just like their subjects.",
    "synonyms": ["figurative", "realistic", "lifelike"]
  },
  {
    "word": "naturalistic",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "showing things in a way that is very close to how they are in nature",
    "example": "Naturalistic representation mattered less to the action painters than their own feelings.",
    "synonyms": ["realistic", "true-to-life", "lifelike"]
  },
  {
    "word": "nonobjective",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "not representing any real person, object or scene",
    "example": "Pollock's nonobjective paintings show no recognizable people or places.",
    "synonyms": ["abstract", "non-representational"]
  },
  {
    "word": "ornamental",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "used for decoration, to make something look more attractive",
    "example": "The ornamental backdrop in the still life is tied closely to the shapes in front of it.",
    "synonyms": ["decorative", "fancy", "embellished"]
  },
  {
    "word": "aesthetic",
    "pos": "adjective",
    "topics": ["art history", "general"],
    "level": "academic",
    "definition": "relating to beauty and the appreciation of beauty",
    "example": "The painting is an exciting aesthetic experience that the viewer can share.",
    "synonyms": ["artistic", "visual", "tasteful"]
  },
  {
    "word": "frenetic",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "fast, wild and full of nervous energy",
    "example": "Accidents inevitably occur in the frenetic execution of an action painting.",
    "synonyms": ["frantic", "hectic", "feverish"],
    "replaces": ["very busy"]
  },
  {
    "word": "spontaneous",
    "pos": "adjective",
    "topics": ["art history", "general"],
    "level": "academic",
    "definition": "done naturally and suddenly, without being planned",
    "example": "The Impressionists applied paint with quick, spontaneous brushstrokes.",
    "synonyms": ["impulsive", "unplanned", "instinctive"]
  },
  {
    "word": "unpremeditated",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "not planned or thought about in advance",
    "example": "The end result of Pollock's method is unpremeditated, and accidents become part of the image.",
    "synonyms": ["unplanned", "spontaneous", "impromptu"]
  },
  {
    "word": "fleeting",
    "pos": "adjective",
    "topics": ["art history", "general"],
    "level": "academic",
    "definition": "lasting for only a very short time",
    "example": "Monet tried to capture the fleeting effects of light on water.",
    "synonyms": ["brief", "short-lived", "momentary"],
    "replaces": ["short"]
  },
  {
    "word": "preconceived",
    "pos": "adjective",
    "topics": ["art history", "general"],
    "level": "academic",
    "definition": "formed in your mind before you have enough knowledge or experience",
    "example": "Abstract Expressionists were not concerned with representing a preconceived idea.",
    "synonyms": ["prejudged", "predetermined"]
  },
  {
    "word": "imbued",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "filled with a strong feeling, quality or idea (usually followed by 'with')",
    "example": "Cezanne went to Paris imbued with enthusiasm for the Romantics.",
    "synonyms": ["filled", "infused", "steeped"]
  },
  {
    "word": "durable",
    "pos": "adjective",
    "topics": ["art history", "general"],
    "level": "academic",
    "definition": "able to last a long time without losing quality",
    "example": "Cezanne wanted to make Impressionism something solid and durable, like the art of the museums.",
    "synonyms": ["long-lasting", "sturdy", "enduring"]
  },
  {
    "word": "composition",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "the way the parts of a picture or work are arranged",
    "example": "The painters were frustrated by the strict rules of composition set by academic institutions.",
    "synonyms": ["arrangement", "layout", "structure"]
  },
  {
    "word": "imagery",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "the pictures, shapes and images used in a work of art or writing",
    "example": "In Abstract Expressionism the imagery is abstract and sometimes nonobjective.",
    "synonyms": ["images", "visuals", "symbolism"]
  },
  {
    "word": "pigment",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "dry colored powder that is mixed with oil or water to make paint",
    "example": "It is enough for a painting to be simple pigment, color and canvas.",
    "synonyms": ["dye", "coloring", "paint"]
  },
  {
    "word": "mythology",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "a body of ancient stories, especially ones that explain natural or historical events",
    "example": "Traditional art often depicted scenes from history or mythology.",
    "synonyms": ["legends", "folklore", "myths"]
  },
  {
    "word": "idealization",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "showing something as better or more perfect than it really is",
    "example": "The Impressionists painted real landscapes as they saw them, without idealization.",
    "synonyms": ["glorification", "romanticizing", "embellishment"]
  },
  {
    "word": "permanence",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "the quality of lasting forever or for a very long time",
    "example": "Cezanne wanted to convey the thrill of nature's permanence along with all its changes.",
    "synonyms": ["durability", "stability", "constancy"]
  },
  {
    "word": "perseverance",
    "pos": "noun",
    "topics": ["art history", "general"],
    "level": "academic",
    "definition": "continuing to try hard to achieve something despite difficulties",
    "example": "Their perseverance paid off, and the Impressionists were finally rewarded with recognition.",
    "synonyms": ["persistence", "determination", "tenacity"]
  },
  {
    "word": "depict",
    "pos": "verb",
    "topics": ["art history"],
    "level": "academic",
    "definition": "to show or describe something in a picture or in words",
    "example": "Traditional paintings usually depict scenes from history or religion.",
    "synonyms": ["portray", "represent", "illustrate"]
  },
  {
    "word": "render",
    "pos": "verb",
    "topics": ["art history"],
    "level": "academic",
    "definition": "to show or represent something in a picture or other work of art",
    "example": "The Impressionists did not render a landscape but the impression it produced.",
    "synonyms": ["depict", "portray", "represent"]
  },
  {
    "word": "convey",
    "pos": "verb",
    "topics": ["art history", "general"],
    "level": "academic",
    "definition": "to communicate a feeling, idea or message",
    "example": "It is the artist's business to convey the thrill of nature's permanence.",
    "synonyms": ["communicate", "express", "get across"]
  },
  {
    "word": "characterize",
    "pos": "verb",
    "topics": ["art history", "general"],
    "level": "academic",
    "definition": "to describe the typical qualities of someone or something",
    "example": "Quick brushstrokes and less detail characterize Impressionist work.",
    "synonyms": ["describe", "define", "distinguish"]
  },
  {
    "word": "designate",
    "pos": "verb",
    "topics": ["art history", "general"],
    "level": "academic",
    "definition": "to officially name or label something as a particular thing",
    "example": "This colorless label designates a group of artists who passed through an Impressionist phase.",
    "synonyms": ["label", "name", "identify"]
  },
  {
    "word": "evolve",
    "pos": "verb",
    "topics": ["art history", "general"],
    "level": "academic",
    "definition": "to develop gradually over time into a different or more advanced form",
    "example": "Painting evolved further in the later part of the nineteenth century.",
    "synonyms": ["develop", "progress", "advance"],
    "replaces": ["change"]
  },
  {
    "word": "impose",
    "pos": "verb",
    "topics": ["art history", "general"],
    "level": "academic",
    "definition": "to force a rule, idea or system on people",
    "example": "Academic institutions impose strict rules about subject matter.",
    "synonyms": ["enforce", "force", "dictate"]
  },
  {
    "word": "retain",
    "pos": "verb",
    "topics": ["art history", "general"],
    "level": "academic",
    "definition": "to keep something rather than lose it or throw it away",
    "example": "Accidents are often retained as evidence of spontaneity.",
    "synonyms": ["keep", "preserve", "hold on to"],
    "replaces": ["keep"]
  },
  {
    "word": "liberate",
    "pos": "verb",
    "topics": ["art history", "general"],
    "level": "academic",
    "definition": "to set someone free from limits or control",
    "example": "Impressionism helped liberate artists from strict rules of technique.",
    "synonyms": ["free", "release", "emancipate"]
  },
  {
    "word": "pursue",
    "pos": "verb",
    "topics": ["art history", "general"],
    "level": "academic",
    "definition": "to work towards a goal, interest or activity over a long time",
    "example": "The Post-Impressionists became dissatisfied and decided to pursue a variety of directions.",
    "synonyms": ["follow", "chase", "strive for"]
  },
  {
    "word": "impel",
    "pos": "verb",
    "topics": ["art history"],
    "level": "academic",
    "definition": "to push or drive someone strongly to do something",
    "example": "A strong need to create can impel an artist to work for days without rest.",
    "synonyms": ["drive", "compel", "urge"]
  },
  {
    "word": "food chain",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a series of living things in which each one feeds on the one below it",
    "example": "Plankton sit at the bottom of the ocean food chain.",
    "synonyms": ["feeding sequence"]
  },
  {
    "word": "food web",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a system of many connected food chains in an ecosystem",
    "example": "Removing one species can disturb the whole food web.",
    "synonyms": ["feeding network"]
  },
  {
    "word": "trophic level",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a position that a living thing occupies in a food chain",
    "example": "Energy is lost at each trophic level, so top predators are rare.",
    "synonyms": ["feeding level"]
  },
  {
    "word": "organism",
    "pos": "noun",
    "topics": ["ecology", "general"],
    "level": "academic",
    "definition": "any living thing, such as a plant, animal or bacterium",
    "example": "Microscopic organisms live in every drop of pond water.",
    "synonyms": ["living thing", "life form"]
  },
  {
    "word": "producer",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a living thing, usually a plant, that makes its own food from sunlight or chemicals",
    "example": "Grass is a producer because it makes energy from sunlight.",
    "synonyms": ["autotroph"]
  },
  {
    "word": "consumer",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a living thing that gets its energy by eating plants or other animals",
    "example": "Rabbits are primary consumers because they eat plants.",
    "synonyms": ["heterotroph"]
  },
  {
    "word": "decomposer",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a living thing, such as a fungus or bacterium, that breaks down dead material",
    "example": "Decomposers return nutrients from dead leaves to the soil.",
    "synonyms": ["breaker-down"]
  },
  {
    "word": "photosynthesis",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the process by which plants use sunlight, water and carbon dioxide to make food",
    "example": "Photosynthesis releases the oxygen that we breathe.",
    "synonyms": []
  },
  {
    "word": "predator",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "an animal that hunts and kills other animals for food",
    "example": "Wolves are the main predator of deer in this region.",
    "synonyms": ["hunter"]
  },
  {
    "word": "prey",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "an animal that is hunted and eaten by another animal",
    "example": "The owl swooped down on its prey.",
    "synonyms": ["quarry", "victim"]
  },
  {
    "word": "apex predator",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "an animal at the top of a food chain that has no natural enemies",
    "example": "As an apex predator, the shark keeps smaller fish populations in check.",
    "synonyms": ["top predator"]
  },
  {
    "word": "predation",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the act of an animal hunting and eating other animals",
    "example": "Heavy predation by foxes reduced the number of ground-nesting birds.",
    "synonyms": ["hunting"]
  },
  {
    "word": "herbivore",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "an animal that eats only plants",
    "example": "The elephant is the largest land herbivore.",
    "synonyms": ["plant-eater"]
  },
  {
    "word": "carnivore",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "an animal that eats mainly meat",
    "example": "Lions are carnivores that hunt in groups.",
    "synonyms": ["meat-eater"]
  },
  {
    "word": "omnivore",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "an animal that eats both plants and meat",
    "example": "Bears are omnivores, feeding on berries, fish and insects.",
    "synonyms": ["all-eater"]
  },
  {
    "word": "scavenger",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "an animal that feeds on dead animals that it did not kill itself",
    "example": "Vultures act as scavengers and clean up dead animals.",
    "synonyms": ["carrion eater"]
  },
  {
    "word": "symbiosis",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a close relationship between two different kinds of living things that live together",
    "example": "Corals and algae live in symbiosis, each providing what the other needs.",
    "synonyms": ["close partnership"],
    "adjective": "symbiotic"
  },
  {
    "word": "symbiotic",
    "pos": "adjective",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "describing a close relationship between two different living things in which they live together",
    "example": "Bees and flowers have a symbiotic relationship.",
    "synonyms": ["interdependent", "mutually dependent"],
    "noun": "symbiosis"
  },
  {
    "word": "mutualism",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a relationship between two species in which both of them benefit",
    "example": "The relationship between ants and aphids is a classic case of mutualism.",
    "synonyms": ["mutual benefit"]
  },
  {
    "word": "commensalism",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a relationship in which one species benefits and the other is neither helped nor harmed",
    "example": "Birds nesting in a tree is an example of commensalism.",
    "synonyms": []
  },
  {
    "word": "parasitism",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a relationship in which one species lives on another and harms it",
    "example": "Parasitism by ticks can weaken a deer over a long summer.",
    "synonyms": []
  },
  {
    "word": "parasite",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a living thing that lives on or in another living thing and takes food from it",
    "example": "A tapeworm is a parasite that lives inside the gut of its host.",
    "synonyms": ["freeloader"]
  },
  {
    "word": "host",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a living thing that a parasite lives on or in",
    "example": "The parasite can survive only while its host is alive.",
    "synonyms": []
  },
  {
    "word": "coexist",
    "pos": "verb",
    "topics": ["ecology", "general"],
    "level": "academic",
    "definition": "to live or exist together at the same time or in the same place",
    "example": "Wolves and farmers can coexist if livestock is protected.",
    "synonyms": ["live side by side"],
    "noun": "coexistence"
  },
  {
    "word": "competition",
    "pos": "noun",
    "topics": ["ecology", "general"],
    "level": "academic",
    "definition": "a struggle between living things for the same limited resources",
    "example": "Competition for water is intense during the dry season.",
    "synonyms": ["rivalry"]
  },
  {
    "word": "ecological niche",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the role and position of a species within its environment, including what it eats and where it lives",
    "example": "Each species fills its own ecological niche, which reduces competition.",
    "synonyms": ["ecological role"]
  },
  {
    "word": "keystone species",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a species that has a very large effect on its ecosystem compared with its numbers",
    "example": "Sea otters are a keystone species because they control sea urchin populations.",
    "synonyms": ["critical species"]
  },
  {
    "word": "native species",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a plant or animal that naturally lives in a particular area",
    "example": "Planting native species helps local wildlife.",
    "synonyms": ["indigenous species"]
  },
  {
    "word": "invasive species",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a plant or animal introduced to a new area where it spreads and harms the local ecosystem",
    "example": "The invasive species outcompeted the native fish and took over the lake.",
    "synonyms": ["alien species", "non-native species"]
  },
  {
    "word": "biome",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a large natural area with a particular climate and its own kinds of plants and animals",
    "example": "The tundra is a cold biome with very few trees.",
    "synonyms": ["major habitat"]
  },
  {
    "word": "biotic",
    "pos": "adjective",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "relating to living things in an environment",
    "example": "Predators and plants are biotic parts of an ecosystem.",
    "synonyms": ["living"]
  },
  {
    "word": "abiotic",
    "pos": "adjective",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "relating to the non-living parts of an environment, such as water, soil and temperature",
    "example": "Temperature is an abiotic factor that affects where plants can grow.",
    "synonyms": ["non-living"]
  },
  {
    "word": "nutrient cycle",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the movement of nutrients between living things, soil, water and air",
    "example": "Fallen leaves feed the soil and keep the nutrient cycle going.",
    "synonyms": ["nutrient flow"]
  },
  {
    "word": "carbon cycle",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the natural movement of carbon between the air, oceans, soil and living things",
    "example": "Burning fossil fuels disturbs the natural carbon cycle.",
    "synonyms": []
  },
  {
    "word": "adaptation",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a change in a living thing that helps it survive in its environment",
    "example": "Thick fur is an adaptation to life in the Arctic.",
    "synonyms": ["adjustment", "modification"],
    "verb": "adapt"
  },
  {
    "word": "natural selection",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the process by which living things best suited to their environment survive and pass on their features",
    "example": "Natural selection favoured birds with stronger beaks.",
    "synonyms": ["survival of the fittest"]
  },
  {
    "word": "camouflage",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the colours or patterns that let an animal blend in with its surroundings",
    "example": "The stick insect uses camouflage to avoid being eaten.",
    "synonyms": ["disguise", "concealment"]
  },
  {
    "word": "hibernation",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a long sleep-like state that some animals enter during winter to save energy",
    "example": "Bears survive the cold months through hibernation.",
    "synonyms": ["winter sleep", "dormancy"]
  },
  {
    "word": "migration",
    "pos": "noun",
    "topics": ["ecology", "general"],
    "level": "academic",
    "definition": "the regular movement of animals from one region to another, usually with the seasons",
    "example": "The migration of wildebeest across the Serengeti follows the rains.",
    "synonyms": ["seasonal movement"],
    "verb": "migrate"
  },
  {
    "word": "nocturnal",
    "pos": "adjective",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "active at night rather than during the day",
    "example": "Owls are nocturnal hunters.",
    "synonyms": ["night-active"]
  },
  {
    "word": "territory",
    "pos": "noun",
    "topics": ["ecology", "general"],
    "level": "academic",
    "definition": "an area that an animal or group of animals defends as its own",
    "example": "A male robin will fiercely defend its territory.",
    "synonyms": ["range", "domain"]
  },
  {
    "word": "ecological succession",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the gradual process by which the types of plants and animals in an area change over time",
    "example": "Ecological succession turns bare rock into forest over centuries.",
    "synonyms": ["natural recovery"]
  },
  {
    "word": "carrying capacity",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the largest number of living things that an environment can support",
    "example": "The island's deer population exceeded its carrying capacity.",
    "synonyms": ["population limit"]
  },
  {
    "word": "pollination",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the transfer of pollen between flowers so that plants can produce seeds",
    "example": "Many crops depend on pollination by bees.",
    "synonyms": [],
    "verb": "pollinate"
  },
  {
    "word": "pollinator",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "an animal, such as a bee or butterfly, that carries pollen from flower to flower",
    "example": "The decline of pollinators threatens food production.",
    "synonyms": []
  },
  {
    "word": "bioaccumulation",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the gradual build-up of harmful substances in the body of a living thing over time",
    "example": "Bioaccumulation of mercury makes large fish unsafe to eat.",
    "synonyms": ["toxic build-up"]
  },
  {
    "word": "biomagnification",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the increase in the amount of a harmful substance at each higher level of a food chain",
    "example": "Biomagnification means top predators carry the highest levels of pesticide.",
    "synonyms": []
  },
  {
    "word": "climate change",
    "pos": "noun",
    "topics": ["ecology", "general"],
    "level": "academic",
    "definition": "long-term changes in the Earth's temperature and weather patterns",
    "example": "Climate change is melting glaciers around the world.",
    "synonyms": ["global climate shift"]
  },
  {
    "word": "global warming",
    "pos": "noun",
    "topics": ["ecology", "general"],
    "level": "academic",
    "definition": "the gradual rise in the Earth's average temperature caused by greenhouse gases",
    "example": "Global warming is raising sea levels.",
    "synonyms": ["rising temperatures"]
  },
  {
    "word": "greenhouse effect",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the warming of the Earth because gases in the atmosphere trap heat from the sun",
    "example": "The greenhouse effect has intensified as carbon dioxide levels have risen.",
    "synonyms": []
  },
  {
    "word": "ozone layer",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a layer of gas high in the atmosphere that protects the Earth from harmful sun rays",
    "example": "Banning certain chemicals helped the ozone layer recover.",
    "synonyms": []
  },
  {
    "word": "acid rain",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "rain made harmful by pollution that damages trees, lakes and buildings",
    "example": "Acid rain has killed fish in many northern lakes.",
    "synonyms": []
  },
  {
    "word": "eutrophication",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the over-enrichment of water with nutrients, causing algae to grow and oxygen to run out",
    "example": "Fertiliser runoff led to eutrophication of the lake.",
    "synonyms": []
  },
  {
    "word": "contamination",
    "pos": "noun",
    "topics": ["ecology", "general"],
    "level": "academic",
    "definition": "the presence of a harmful substance in something that makes it dirty or unsafe",
    "example": "Contamination of the groundwater forced the town to find a new water supply.",
    "synonyms": ["pollution", "poisoning"],
    "verb": "contaminate"
  },
  {
    "word": "toxic",
    "pos": "adjective",
    "topics": ["ecology", "general"],
    "level": "academic",
    "definition": "poisonous and capable of harming or killing living things",
    "example": "Toxic waste was dumped into the river.",
    "synonyms": ["poisonous", "harmful"]
  },
  {
    "word": "depletion",
    "pos": "noun",
    "topics": ["ecology", "general"],
    "level": "academic",
    "definition": "the reduction of a resource until little of it is left",
    "example": "The depletion of fish stocks has hurt coastal communities.",
    "synonyms": ["exhaustion", "drain"],
    "verb": "deplete"
  },
  {
    "word": "overfishing",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "catching so many fish that their populations cannot recover",
    "example": "Overfishing has pushed several species of tuna close to collapse.",
    "synonyms": []
  },
  {
    "word": "overgrazing",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "allowing animals to eat so much grass that the land is damaged",
    "example": "Overgrazing turned the fertile pasture into dry dust.",
    "synonyms": []
  },
  {
    "word": "reforestation",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the planting of trees in an area where forest has been cut down",
    "example": "Reforestation projects aim to restore lost woodland.",
    "synonyms": ["replanting"]
  },
  {
    "word": "wildlife corridor",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a strip of protected land that lets animals move safely between habitats",
    "example": "A wildlife corridor lets elephants cross the highway safely.",
    "synonyms": ["habitat link"]
  },
  {
    "word": "rewilding",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "restoring an area to its natural wild state, often by bringing back lost species",
    "example": "Rewilding the valley with wolves changed how the rivers flow.",
    "synonyms": ["ecological restoration"]
  },
  {
    "word": "carbon sequestration",
    "pos": "noun",
    "topics": ["ecology", "renewable energy"],
    "level": "academic",
    "definition": "the capture and long-term storage of carbon dioxide to reduce its effect on the climate",
    "example": "Forests help with carbon sequestration by storing carbon in wood.",
    "synonyms": ["carbon capture"]
  },
  {
    "word": "equilibrium",
    "pos": "noun",
    "topics": ["ecology", "general"],
    "level": "academic",
    "definition": "a state of balance in which opposing forces or influences are equal",
    "example": "The introduction of a new predator upset the ecological equilibrium.",
    "synonyms": ["balance", "stability"]
  },
  {
    "word": "fragile",
    "pos": "adjective",
    "topics": ["ecology", "general"],
    "level": "academic",
    "definition": "easily damaged or destroyed",
    "example": "Wetlands are fragile environments.",
    "synonyms": ["delicate", "vulnerable"]
  },
  {
    "word": "thrive",
    "pos": "verb",
    "topics": ["ecology", "general"],
    "level": "academic",
    "definition": "to grow or develop well and be healthy and successful",
    "example": "Many species thrive in warm, shallow water.",
    "synonyms": ["flourish", "prosper"]
  },
  {
    "word": "disrupt",
    "pos": "verb",
    "topics": ["ecology", "general"],
    "level": "academic",
    "definition": "to interrupt the normal way something works",
    "example": "Noise from ships can disrupt the way whales communicate.",
    "synonyms": ["disturb", "upset"],
    "noun": "disruption"
  },
  {
    "word": "trade barrier",
    "pos": "noun",
    "topics": ["globalization", "international marketing"],
    "level": "academic",
    "definition": "a government rule or tax that restricts the flow of goods between countries",
    "example": "Removing trade barriers allowed small firms to sell abroad.",
    "synonyms": ["trade restriction", "import restriction"]
  },
  {
    "word": "trade liberalization",
    "pos": "noun",
    "topics": ["globalization"],
    "level": "academic",
    "definition": "the reduction or removal of limits on trade between countries",
    "example": "Trade liberalization lowered prices for imported electronics.",
    "synonyms": ["trade opening"]
  },
  {
    "word": "foreign direct investment",
    "pos": "noun",
    "topics": ["globalization", "international marketing"],
    "level": "academic",
    "definition": "money that a company puts into a business or factory in another country",
    "example": "Foreign direct investment created thousands of jobs in the region.",
    "synonyms": ["overseas investment"]
  },
  {
    "word": "offshoring",
    "pos": "noun",
    "topics": ["globalization"],
    "level": "academic",
    "definition": "moving a company's production or services to another country, usually to cut costs",
    "example": "Offshoring of call centres has cost many local workers their jobs.",
    "synonyms": ["relocation abroad"]
  },
  {
    "word": "developing country",
    "pos": "noun",
    "topics": ["globalization"],
    "level": "academic",
    "definition": "a country with a low level of industry and relatively low incomes",
    "example": "Many developing countries depend on exporting raw materials.",
    "synonyms": ["emerging economy", "poorer nation"]
  },
  {
    "word": "emerging market",
    "pos": "noun",
    "topics": ["globalization", "international marketing"],
    "level": "academic",
    "definition": "a country whose economy is growing quickly and becoming more industrialised",
    "example": "Many firms see emerging markets as the key to future growth.",
    "synonyms": ["growth economy"]
  },
  {
    "word": "sweatshop",
    "pos": "noun",
    "topics": ["globalization"],
    "level": "academic",
    "definition": "a factory where employees work long hours in poor conditions for very low pay",
    "example": "The clothing brand was criticised for using sweatshops overseas.",
    "synonyms": ["exploitative factory"]
  },
  {
    "word": "consumerism",
    "pos": "noun",
    "topics": ["globalization"],
    "level": "academic",
    "definition": "the belief that buying and using more and more goods is good for society",
    "example": "Critics say globalization has fuelled consumerism worldwide.",
    "synonyms": ["materialism"]
  },
  {
    "word": "cultural diffusion",
    "pos": "noun",
    "topics": ["globalization"],
    "level": "academic",
    "definition": "the spread of ideas, customs and products from one culture to another",
    "example": "Cultural diffusion explains why sushi is now popular in many countries.",
    "synonyms": ["cultural spread"]
  },
  {
    "word": "cultural erosion",
    "pos": "noun",
    "topics": ["globalization"],
    "level": "academic",
    "definition": "the gradual loss of a culture's traditions and identity under outside influence",
    "example": "Some elders fear cultural erosion as young people adopt foreign habits.",
    "synonyms": ["loss of identity"]
  },
  {
    "word": "assimilation",
    "pos": "noun",
    "topics": ["globalization"],
    "level": "academic",
    "definition": "the process by which a group takes on the customs and values of another, larger culture",
    "example": "Rapid assimilation made it hard for the community to keep its language.",
    "synonyms": ["absorption"],
    "verb": "assimilate"
  },
  {
    "word": "cosmopolitan",
    "pos": "adjective",
    "topics": ["globalization"],
    "level": "academic",
    "definition": "containing people and influences from many different parts of the world",
    "example": "London is a cosmopolitan city with residents from every continent.",
    "synonyms": ["international", "multicultural"]
  },
  {
    "word": "trade deficit",
    "pos": "noun",
    "topics": ["globalization"],
    "level": "academic",
    "definition": "a situation in which a country buys more from other countries than it sells to them",
    "example": "The country ran a large trade deficit last year.",
    "synonyms": ["trade gap"]
  },
  {
    "word": "trade surplus",
    "pos": "noun",
    "topics": ["globalization"],
    "level": "academic",
    "definition": "a situation in which a country sells more to other countries than it buys from them",
    "example": "Strong exports gave the nation a healthy trade surplus.",
    "synonyms": ["export advantage"]
  },
  {
    "word": "remittances",
    "pos": "noun",
    "topics": ["globalization"],
    "level": "academic",
    "definition": "money that migrant workers send back to their families in their home country",
    "example": "Remittances are a major source of income for many rural families.",
    "synonyms": ["money transfers"]
  },
  {
    "word": "standard of living",
    "pos": "noun",
    "topics": ["globalization"],
    "level": "academic",
    "definition": "the level of wealth, comfort and basic services available to people in a country",
    "example": "Industrial growth has raised the standard of living in the region.",
    "synonyms": ["quality of life", "living conditions"]
  },
  {
    "word": "brand equity",
    "pos": "noun",
    "topics": ["international marketing"],
    "level": "academic",
    "definition": "the commercial value a brand has because of its reputation and customer loyalty",
    "example": "Decades of quality built strong brand equity in overseas markets.",
    "synonyms": ["brand value"]
  },
  {
    "word": "brand loyalty",
    "pos": "noun",
    "topics": ["international marketing"],
    "level": "academic",
    "definition": "the tendency of customers to keep buying the same brand",
    "example": "Strong brand loyalty protects a company from cheaper rivals.",
    "synonyms": ["customer allegiance"]
  },
  {
    "word": "market entry",
    "pos": "noun",
    "topics": ["international marketing"],
    "level": "academic",
    "definition": "the way and the moment a company starts selling in a new market",
    "example": "Choosing the right market entry strategy reduces the risk of failure.",
    "synonyms": ["market launch"]
  },
  {
    "word": "franchising",
    "pos": "noun",
    "topics": ["international marketing"],
    "level": "academic",
    "definition": "a system in which a company lets others use its brand and methods in return for fees",
    "example": "Franchising allowed the café chain to expand quickly across Asia.",
    "synonyms": ["brand licensing"]
  },
  {
    "word": "licensing",
    "pos": "noun",
    "topics": ["international marketing"],
    "level": "academic",
    "definition": "giving another company the legal right to make or sell your product",
    "example": "Licensing let the toy maker enter the market without building a factory.",
    "synonyms": ["permission to produce"]
  },
  {
    "word": "joint venture",
    "pos": "noun",
    "topics": ["international marketing"],
    "level": "academic",
    "definition": "a business project in which two or more companies share costs, risks and profits",
    "example": "The carmaker formed a joint venture with a local partner.",
    "synonyms": ["business partnership"]
  },
  {
    "word": "subsidiary",
    "pos": "noun",
    "topics": ["international marketing", "globalization"],
    "level": "academic",
    "definition": "a company that is owned or controlled by a larger parent company",
    "example": "The firm runs its European business through a subsidiary in Dublin.",
    "synonyms": ["daughter company", "branch company"]
  },
  {
    "word": "positioning",
    "pos": "noun",
    "topics": ["international marketing"],
    "level": "academic",
    "definition": "the image a company creates so that customers see its brand in a particular way",
    "example": "The brand's positioning as a luxury label justified its high prices.",
    "synonyms": ["brand image"]
  },
  {
    "word": "differentiation",
    "pos": "noun",
    "topics": ["international marketing"],
    "level": "academic",
    "definition": "making a product stand out from similar ones by offering something unique",
    "example": "Product differentiation helped the start-up compete with global giants.",
    "synonyms": ["distinction"],
    "verb": "differentiate"
  },
  {
    "word": "value proposition",
    "pos": "noun",
    "topics": ["international marketing"],
    "level": "academic",
    "definition": "the main reason why a customer should choose a company's product",
    "example": "Our value proposition is simple: high quality at a fair price.",
    "synonyms": ["unique selling point"]
  },
  {
    "word": "marketing mix",
    "pos": "noun",
    "topics": ["international marketing"],
    "level": "academic",
    "definition": "the combination of product, price, place and promotion used to sell something",
    "example": "The company adjusted its marketing mix for each country.",
    "synonyms": ["four Ps"]
  },
  {
    "word": "distribution channel",
    "pos": "noun",
    "topics": ["international marketing"],
    "level": "academic",
    "definition": "the route by which goods travel from the producer to the customer",
    "example": "Online shops became the main distribution channel for the brand abroad.",
    "synonyms": ["sales route"]
  },
  {
    "word": "intellectual property",
    "pos": "noun",
    "topics": ["international marketing", "globalization"],
    "level": "academic",
    "definition": "legal rights over ideas, designs, brands and inventions that someone has created",
    "example": "Protecting intellectual property is difficult in markets with weak enforcement.",
    "synonyms": ["patents and trademarks"]
  },
  {
    "word": "counterfeit",
    "pos": "adjective",
    "topics": ["international marketing", "crime"],
    "level": "academic",
    "definition": "made as a fake copy of something valuable in order to deceive people",
    "example": "Counterfeit handbags damage the reputation of luxury brands.",
    "synonyms": ["fake", "forged"]
  },
  {
    "word": "capital punishment",
    "pos": "noun",
    "topics": ["crime and punishment"],
    "level": "academic",
    "definition": "the legal killing of a person as punishment for a serious crime",
    "example": "Many countries have abolished capital punishment.",
    "synonyms": ["death penalty", "execution"]
  },
  {
    "word": "life imprisonment",
    "pos": "noun",
    "topics": ["crime and punishment"],
    "level": "academic",
    "definition": "a prison sentence that lasts for the rest of the offender's life, or for a very long time",
    "example": "The murderer received life imprisonment.",
    "synonyms": ["life sentence"]
  },
  {
    "word": "community service",
    "pos": "noun",
    "topics": ["crime and punishment"],
    "level": "academic",
    "definition": "unpaid work for the public benefit that a court orders instead of prison",
    "example": "The teenager was given 100 hours of community service.",
    "synonyms": ["unpaid public work"]
  },
  {
    "word": "custodial sentence",
    "pos": "noun",
    "topics": ["crime and punishment"],
    "level": "academic",
    "definition": "a punishment in which the offender must spend time in prison",
    "example": "A custodial sentence is rare for first-time offenders.",
    "synonyms": ["prison sentence"]
  },
  {
    "word": "non-custodial sentence",
    "pos": "noun",
    "topics": ["crime and punishment"],
    "level": "academic",
    "definition": "a punishment that does not involve going to prison, such as a fine or community service",
    "example": "Judges often prefer a non-custodial sentence for minor offences.",
    "synonyms": ["alternative sentence"]
  },
  {
    "word": "reoffend",
    "pos": "verb",
    "topics": ["crime and punishment"],
    "level": "academic",
    "definition": "to commit another crime after being punished for an earlier one",
    "example": "Prisoners who receive training are less likely to reoffend.",
    "synonyms": ["relapse into crime"]
  },
  {
    "word": "diminished responsibility",
    "pos": "noun",
    "topics": ["crime and punishment"],
    "level": "academic",
    "definition": "a legal argument that a mental condition reduced a person's ability to control their actions",
    "example": "The defence claimed diminished responsibility to lessen the charge.",
    "synonyms": ["reduced culpability"]
  },
  {
    "word": "plea",
    "pos": "noun",
    "topics": ["crime and punishment"],
    "level": "academic",
    "definition": "a defendant's formal answer to a charge, such as guilty or not guilty",
    "example": "He entered a plea of not guilty.",
    "synonyms": ["formal answer"]
  },
  {
    "word": "bail",
    "pos": "noun",
    "topics": ["crime and punishment"],
    "level": "academic",
    "definition": "money paid to a court so that an accused person can stay free until the trial",
    "example": "The judge granted bail on condition that he surrender his passport.",
    "synonyms": ["security payment"]
  },
  {
    "word": "criminal record",
    "pos": "noun",
    "topics": ["crime and punishment"],
    "level": "academic",
    "definition": "an official list of the crimes that a person has been convicted of",
    "example": "A criminal record can make it hard to find a job.",
    "synonyms": ["conviction history"]
  },
  {
    "word": "zero tolerance",
    "pos": "noun",
    "topics": ["crime and punishment"],
    "level": "academic",
    "definition": "a strict policy of punishing every offence, however small",
    "example": "The school has a zero tolerance policy on bullying.",
    "synonyms": ["strict enforcement"]
  },
  {
    "word": "deter",
    "pos": "verb",
    "topics": ["crime and punishment"],
    "level": "academic",
    "definition": "to make someone less likely to do something by showing the bad results",
    "example": "Visible cameras can deter thieves.",
    "synonyms": ["discourage", "dissuade"],
    "noun": "deterrent"
  },
  {
    "word": "linear",
    "pos": "adjective",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "moving in a straight line from one step to the next, in a fixed order",
    "example": "A linear approach to pollution assumes that one cause produces one clear effect.",
    "synonyms": ["straight", "step-by-step"]
  },
  {
    "word": "non-linear",
    "pos": "adjective",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "not following a straight, predictable path, so a small change can have a very large effect",
    "example": "Climate change is non-linear, because a small rise in temperature can suddenly trigger huge changes.",
    "synonyms": ["unpredictable", "disproportionate"]
  },
  {
    "word": "sequential",
    "pos": "adjective",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "happening one after another in a particular order",
    "example": "Linear thinking breaks a problem into sequential steps and deals with them one at a time.",
    "synonyms": ["consecutive", "successive", "ordered"]
  },
  {
    "word": "causality",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the relationship between a cause and its effect",
    "example": "In a forest ecosystem, causality is rarely simple, because many factors affect each other.",
    "synonyms": ["causation"]
  },
  {
    "word": "cause and effect",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the link between an action or event and the result it produces",
    "example": "Linear thinking focuses on cause and effect, but ecosystems often respond in surprising ways.",
    "synonyms": ["causal link", "causation"]
  },
  {
    "word": "deduce",
    "pos": "verb",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "to reach a conclusion by reasoning from facts or evidence",
    "example": "Scientists deduce the age of a glacier from the layers of ice inside it.",
    "synonyms": ["infer", "conclude", "work out"],
    "noun": "deduction",
    "replaces": ["figure out"]
  },
  {
    "word": "reductionism",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the approach of explaining something complex by studying each of its smallest parts separately",
    "example": "Reductionism studies a single species, while systems thinking studies the whole habitat.",
    "person": "reductionist",
    "synonyms": ["oversimplification"]
  },
  {
    "word": "holistic",
    "pos": "adjective",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "looking at the whole of something and all its parts together, not just one part",
    "example": "A holistic approach to conservation protects the whole ecosystem, not only one rare animal.",
    "synonyms": ["comprehensive", "all-round", "integrated"]
  },
  {
    "word": "interconnected",
    "pos": "adjective",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "linked together, so that each part affects the others",
    "example": "Forests, rivers and wildlife are interconnected, so damaging one harms the rest.",
    "synonyms": ["linked", "interrelated", "interlinked"]
  },
  {
    "word": "interplay",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the way two or more things affect each other",
    "example": "The interplay between rainfall, soil and vegetation decides how healthy a landscape is.",
    "synonyms": ["interaction", "interrelation"]
  },
  {
    "word": "feedback loop",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a process in which the result of something feeds back and either strengthens or weakens its own cause",
    "example": "Melting ice creates a feedback loop: less ice reflects less sunlight, so the planet warms and more ice melts.",
    "synonyms": ["cycle", "self-reinforcing process"]
  },
  {
    "word": "emergence",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the appearance of new behaviour in a whole system that none of its separate parts has on its own",
    "example": "The emergence of a coral reef community cannot be explained by studying a single coral.",
    "verb": "emerge",
    "synonyms": ["appearance", "arising"]
  },
  {
    "word": "complexity",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the state of having many connected parts that are hard to understand",
    "example": "The complexity of the rainforest makes its future very difficult to predict.",
    "synonyms": ["intricacy", "sophistication"]
  },
  {
    "word": "unintended consequence",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a result that nobody planned or expected, often a negative one",
    "example": "Introducing a new species to control pests had an unintended consequence: it destroyed native plants.",
    "synonyms": ["side effect", "knock-on effect", "unforeseen result"]
  },
  {
    "word": "ripple effect",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a chain of further effects that spreads outward from one event",
    "example": "The loss of bees has a ripple effect that reaches farmers, food prices and wild plants.",
    "synonyms": ["knock-on effect", "domino effect", "chain reaction"]
  },
  {
    "word": "component",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "one of the separate parts that together make up a whole",
    "example": "Soil is a vital component of any ecosystem.",
    "synonyms": ["element", "part", "constituent"]
  },
  {
    "word": "paradigm",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a typical model or way of thinking about a subject that most people in a field accept",
    "example": "Systems thinking is a new paradigm in environmental science.",
    "synonyms": ["framework", "model", "worldview"]
  },
  {
    "word": "oversimplify",
    "pos": "verb",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "to describe something so simply that important details and meaning are lost",
    "example": "It is easy to oversimplify climate change by blaming only one industry.",
    "synonyms": ["trivialise", "generalise"],
    "noun": "oversimplification"
  },
  {
    "word": "isolate",
    "pos": "verb",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "to separate one thing from the others so that it can be studied alone",
    "example": "Linear thinking tries to isolate one cause, but in nature causes rarely act alone.",
    "synonyms": ["separate", "detach", "single out"],
    "noun": "isolation"
  },
  {
    "word": "bottleneck",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a point in a system where flow is slowed down and limits the whole process",
    "example": "A shortage of clean water can become a bottleneck for the growth of a whole region.",
    "synonyms": ["obstacle", "constraint", "hold-up"]
  },
  {
    "word": "leverage point",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a place in a system where a small change can produce a big result",
    "example": "Protecting wetlands is a leverage point, because they filter water and shelter many species at once.",
    "synonyms": ["pressure point", "key intervention"]
  },
  {
    "word": "counterintuitive",
    "pos": "adjective",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the opposite of what most people would expect",
    "example": "It is counterintuitive, but removing a predator can reduce the number of the animals it hunted.",
    "synonyms": ["unexpected", "surprising", "paradoxical"]
  },
  {
    "word": "anticipate",
    "pos": "verb",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "to expect something and prepare for it before it happens",
    "example": "Systems thinkers try to anticipate how a policy will affect the whole environment.",
    "synonyms": ["foresee", "predict", "expect"],
    "noun": "anticipation",
    "replaces": ["expect"]
  },
  {
    "word": "trade-off",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a situation where you must give up one good thing in order to gain another",
    "example": "Building a dam brings cheap energy, but the trade-off is the loss of the river habitat.",
    "synonyms": ["compromise", "sacrifice"]
  },
  {
    "word": "rigid",
    "pos": "adjective",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "fixed and unable to change or adapt",
    "example": "A rigid plan cannot respond to the changing needs of a living ecosystem.",
    "synonyms": ["inflexible", "fixed", "strict"]
  },
  {
    "word": "methodical",
    "pos": "adjective",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "done carefully, in an ordered and systematic way",
    "example": "The team took a methodical approach and recorded every species in the area.",
    "synonyms": ["systematic", "orderly", "organised"]
  },
  {
    "word": "systemic",
    "pos": "adjective",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "affecting the whole system, not just one part of it",
    "example": "Plastic pollution is a systemic problem that needs changes at every stage of production.",
    "synonyms": ["widespread", "system-wide", "deep-rooted"]
  },
  {
    "word": "big picture",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the whole situation, including all the main factors, rather than small details",
    "example": "Systems thinking helps us see the big picture of how farming affects rivers and wildlife.",
    "synonyms": ["overview", "broader context", "overall view"]
  },
  {
    "word": "root cause",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the main underlying reason why a problem exists",
    "example": "Treating the symptoms will not work unless we find the root cause of the water pollution.",
    "synonyms": ["underlying cause", "origin", "source"]
  },
  {
    "word": "short-sighted",
    "pos": "adjective",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "ignoring the long-term effects of a decision",
    "example": "Cutting down the forest for quick profit was a short-sighted decision.",
    "synonyms": ["shortsighted", "unwise", "lacking foresight"],
    "tone": "negative"
  },
  {
    "word": "instrumental",
    "pos": "adjective",
    "topics": ["elections"],
    "level": "academic",
    "definition": "playing an important part in making something happen",
    "example": "Women's groups were instrumental in winning the right to vote.",
    "synonyms": ["influential", "key", "pivotal"]
  },
  {
    "word": "uprising",
    "pos": "noun",
    "topics": ["elections"],
    "level": "academic",
    "definition": "an act of resistance against authority, often by force",
    "example": "The uprising ended with the creation of a new government.",
    "synonyms": ["revolt", "rebellion"]
  },
  {
    "word": "voter apathy",
    "pos": "noun",
    "topics": ["elections"],
    "level": "academic",
    "definition": "a lack of interest among voters in taking part in elections",
    "example": "Voter apathy is highest among young people who feel ignored by politicians.",
    "synonyms": ["disengagement", "indifference"]
  },
  {
    "word": "eligible",
    "pos": "adjective",
    "topics": ["elections"],
    "level": "academic",
    "definition": "having the right to do something because you meet the conditions",
    "example": "Everyone over the age of 18 is eligible to vote.",
    "synonyms": ["qualified", "entitled"]
  },
  {
    "word": "turnout",
    "pos": "noun",
    "topics": ["elections"],
    "level": "academic",
    "definition": "the number of people who take part in an election",
    "example": "Turnout was very low because of the heavy rain.",
    "synonyms": ["participation"]
  },
  {
    "word": "pull one's weight",
    "pos": "verb phrase",
    "topics": ["elections"],
    "level": "academic",
    "definition": "to do your fair share of the work in a group",
    "example": "In ancient Athens, every citizen was expected to pull their weight in running the city.",
    "synonyms": ["do your share", "contribute"],
    "cloze": "In ancient Athens, every citizen was expected to ____ in running the city."
  },
  {
    "word": "contraption",
    "pos": "noun",
    "topics": ["elections"],
    "level": "academic",
    "definition": "a strange device that looks complicated or awkward",
    "example": "The voting machine was a clumsy contraption made of wood and string.",
    "synonyms": ["gadget", "device"]
  },
  {
    "word": "polling station",
    "pos": "noun",
    "topics": ["elections"],
    "level": "academic",
    "definition": "a building where people go to vote during an election",
    "example": "She waited in line outside the polling station for an hour.",
    "synonyms": ["voting place"]
  },
  {
    "word": "cast a vote",
    "pos": "verb phrase",
    "topics": ["elections"],
    "level": "academic",
    "definition": "to vote in an election",
    "example": "Every adult citizen has the right to cast a vote.",
    "synonyms": ["vote"]
  },
  {
    "word": "cast a ballot",
    "pos": "verb phrase",
    "topics": ["elections"],
    "level": "academic",
    "definition": "to put your vote into the box in an election",
    "example": "Many people cast a ballot by post before election day.",
    "synonyms": ["vote"]
  },
  {
    "word": "secret ballot",
    "pos": "noun",
    "topics": ["elections"],
    "level": "academic",
    "definition": "a voting method in which nobody can see how each person voted",
    "example": "The secret ballot protects voters from pressure and bribery.",
    "synonyms": ["anonymous vote"]
  },
  {
    "word": "ballot box",
    "pos": "noun",
    "topics": ["elections"],
    "level": "academic",
    "definition": "a sealed box in which voters place their completed ballot papers",
    "example": "The ballot box was sealed and taken to the counting hall."
  },
  {
    "word": "ballot",
    "pos": "noun",
    "topics": ["elections"],
    "level": "academic",
    "definition": "a vote, or the paper used for voting",
    "example": "Voters marked their ballot in private.",
    "synonyms": ["vote", "voting paper"]
  },
  {
    "word": "evade",
    "pos": "verb",
    "topics": ["elections"],
    "level": "academic",
    "definition": "to avoid doing something you should do",
    "example": "Athenian citizens who tried to evade their duty were fined.",
    "synonyms": ["avoid", "dodge", "escape"]
  },
  {
    "word": "urn",
    "pos": "noun",
    "topics": ["elections"],
    "level": "academic",
    "definition": "a container, here used to hold the votes",
    "example": "Citizens dropped a pebble into an urn to show their choice.",
    "synonyms": ["vessel"]
  },
  {
    "word": "tabulation",
    "pos": "noun",
    "topics": ["elections"],
    "level": "academic",
    "definition": "counting and arranging results in an organised table",
    "example": "The tabulation of the results took all night.",
    "synonyms": ["counting", "tally"]
  },
  {
    "word": "obscure",
    "pos": "verb",
    "topics": ["elections"],
    "level": "academic",
    "definition": "to make something difficult to see or understand",
    "example": "A screen was used to obscure the voter's hand.",
    "synonyms": ["hide", "conceal", "cloud"]
  },
  {
    "word": "covertly",
    "pos": "adverb",
    "topics": ["elections"],
    "level": "academic",
    "definition": "in a secret way so that others do not notice",
    "example": "Members covertly placed a black cube in the box.",
    "synonyms": ["secretly", "stealthily"]
  },
  {
    "word": "elaborate",
    "pos": "adjective",
    "topics": ["elections"],
    "level": "academic",
    "definition": "very detailed and complicated",
    "example": "The Greeks developed an elaborate system of voting tokens.",
    "synonyms": ["intricate", "complex"]
  },
  {
    "word": "expel",
    "pos": "verb",
    "topics": ["elections"],
    "level": "academic",
    "definition": "to officially force someone to leave a group or place",
    "example": "The club voted to expel two members.",
    "synonyms": ["remove", "banish", "dismiss"]
  },
  {
    "word": "abstain",
    "pos": "verb",
    "topics": ["elections"],
    "level": "academic",
    "definition": "to choose not to vote",
    "example": "Three members of the committee abstained.",
    "synonyms": ["refrain", "decline"]
  },
  {
    "word": "refrain",
    "pos": "verb",
    "topics": ["elections"],
    "level": "academic",
    "definition": "to stop yourself from doing something",
    "example": "Voters must refrain from wearing campaign badges inside the polling station.",
    "synonyms": ["avoid", "abstain"]
  },
  {
    "word": "legitimacy",
    "pos": "noun",
    "topics": ["elections"],
    "level": "academic",
    "definition": "the quality of being accepted as lawful and fair",
    "example": "Very low turnout can damage the legitimacy of a government.",
    "synonyms": ["lawfulness", "validity"]
  },
  {
    "word": "plurality",
    "pos": "noun",
    "topics": ["elections"],
    "level": "academic",
    "definition": "the largest number of votes, even if it is less than half",
    "example": "She won the seat with a plurality of 38 percent.",
    "synonyms": ["relative majority"]
  },
  {
    "word": "proportional representation",
    "pos": "noun",
    "topics": ["elections"],
    "level": "academic",
    "definition": "a system in which parties win seats in proportion to the votes they receive",
    "example": "Proportional representation gives smaller parties a fairer share of seats."
  },
  {
    "word": "preferential voting",
    "pos": "noun",
    "topics": ["elections"],
    "level": "academic",
    "definition": "a system in which voters rank candidates in order of preference",
    "example": "Under preferential voting, your second choice counts if your first choice loses.",
    "synonyms": ["ranked voting"]
  },
  {
    "word": "first-past-the-post",
    "pos": "noun",
    "topics": ["elections"],
    "level": "academic",
    "definition": "a system in which the candidate with the most votes wins",
    "example": "First-past-the-post is simple, but it can leave many votes unrepresented.",
    "synonyms": ["plurality system"]
  },
  {
    "word": "electorate",
    "pos": "noun",
    "topics": ["elections"],
    "level": "academic",
    "definition": "all the people who are allowed to vote",
    "example": "The electorate voted overwhelmingly for change.",
    "synonyms": ["voters", "voting public"]
  },
  {
    "word": "referendum",
    "pos": "noun",
    "topics": ["elections"],
    "level": "academic",
    "definition": "a vote by all the voters on one question",
    "example": "The country held a referendum on joining the union.",
    "synonyms": ["plebiscite"]
  },
  {
    "word": "compulsory",
    "pos": "adjective",
    "topics": ["elections"],
    "level": "academic",
    "definition": "required by law",
    "example": "Voting is compulsory in Australia.",
    "synonyms": ["mandatory", "obligatory"]
  },
  {
    "word": "suffrage",
    "pos": "noun",
    "topics": ["elections"],
    "level": "academic",
    "definition": "the right to vote in elections",
    "example": "Women won suffrage in many countries in the early twentieth century.",
    "synonyms": ["franchise", "the vote"]
  },
  {
    "word": "democracy",
    "pos": "noun",
    "topics": ["elections"],
    "level": "academic",
    "definition": "a system of government in which citizens choose their leaders by voting",
    "example": "Athens is often called the birthplace of democracy.",
    "synonyms": ["self-rule"]
  },
  {
    "word": "constituency",
    "pos": "noun",
    "topics": ["elections"],
    "level": "academic",
    "definition": "an area and the people in it who elect one representative",
    "example": "Each constituency elects one member of parliament.",
    "synonyms": ["district", "electoral area"]
  },
  {
    "word": "heredity",
    "pos": "noun",
    "topics": ["nature vs nurture"],
    "level": "academic",
    "definition": "the passing of physical or mental characteristics from parents to children through genes",
    "example": "Scientists study heredity to understand why children resemble their parents.",
    "synonyms": ["inheritance"]
  },
  {
    "word": "nurture",
    "pos": "noun",
    "topics": ["nature vs nurture"],
    "level": "academic",
    "definition": "the care and education a child receives while growing up",
    "example": "Some experts believe that nurture matters more than nature.",
    "synonyms": ["upbringing", "rearing"]
  },
  {
    "word": "inherit",
    "pos": "verb",
    "topics": ["nature vs nurture"],
    "level": "academic",
    "definition": "to receive a quality or characteristic from your parents through genes",
    "example": "Children can inherit their parents' eye color.",
    "synonyms": ["receive"]
  },
  {
    "word": "genetic",
    "pos": "adjective",
    "topics": ["nature vs nurture"],
    "level": "academic",
    "definition": "relating to genes and how characteristics pass from parents to children",
    "example": "Eye color is a genetic trait.",
    "synonyms": ["hereditary", "inherited"]
  },
  {
    "word": "trait",
    "pos": "noun",
    "topics": ["nature vs nurture"],
    "level": "academic",
    "definition": "a particular quality or characteristic of a person or animal",
    "example": "Height is a trait that is strongly influenced by genes.",
    "synonyms": ["characteristic", "feature"]
  },
  {
    "word": "innate",
    "pos": "adjective",
    "topics": ["nature vs nurture"],
    "level": "academic",
    "definition": "existing from birth rather than learned",
    "example": "Some people believe that musical ability is innate.",
    "synonyms": ["inborn", "natural"]
  },
  {
    "word": "upbringing",
    "pos": "noun",
    "topics": ["nature vs nurture"],
    "level": "academic",
    "definition": "the way a child is cared for and taught as they grow up",
    "example": "Her strict upbringing shaped her attitude to work.",
    "synonyms": ["raising", "education"]
  },
  {
    "word": "predisposition",
    "pos": "noun",
    "topics": ["nature vs nurture"],
    "level": "academic",
    "definition": "a tendency to behave or develop in a certain way",
    "example": "A genetic predisposition does not guarantee that a person will develop the condition.",
    "synonyms": ["tendency", "inclination"]
  },
  {
    "word": "aptitude",
    "pos": "noun",
    "topics": ["nature vs nurture"],
    "level": "academic",
    "definition": "a natural ability to learn or do something well",
    "example": "He showed an aptitude for mathematics at an early age.",
    "synonyms": ["talent", "gift"]
  },
  {
    "word": "cognitive",
    "pos": "adjective",
    "topics": ["nature vs nurture"],
    "level": "academic",
    "definition": "connected with mental processes such as thinking and understanding",
    "example": "Cognitive ability develops quickly in early childhood.",
    "synonyms": ["mental", "intellectual"]
  },
  {
    "word": "correlate",
    "pos": "verb",
    "topics": ["nature vs nurture"],
    "level": "academic",
    "definition": "to be closely connected, so that a change in one goes with a change in the other",
    "example": "Reading habits correlate strongly with exam success.",
    "synonyms": ["be linked", "be related"]
  },
  {
    "word": "quotient",
    "pos": "noun",
    "topics": ["nature vs nurture"],
    "level": "academic",
    "definition": "a number that is the result of dividing one number by another",
    "example": "IQ stands for intelligence quotient."
  },
  {
    "word": "statistician",
    "pos": "noun",
    "topics": ["nature vs nurture"],
    "level": "academic",
    "definition": "a person who works with statistics",
    "example": "The statistician found no link between the two results.",
    "synonyms": ["data analyst"]
  },
  {
    "word": "spatial",
    "pos": "adjective",
    "topics": ["nature vs nurture", "ecology"],
    "level": "academic",
    "definition": "relating to space and the position or size of things",
    "example": "Architects need strong spatial skills."
  },
  {
    "word": "respectively",
    "pos": "adverb",
    "topics": ["nature vs nurture", "charts"],
    "level": "academic",
    "definition": "in the order mentioned",
    "example": "Nature and nurture refer to heredity and environment, respectively."
  },
  {
    "word": "stance",
    "pos": "noun",
    "topics": ["nature vs nurture"],
    "level": "academic",
    "definition": "a position or attitude on an issue",
    "example": "The authors take a critical stance on IQ tests.",
    "synonyms": ["position", "viewpoint"]
  },
  {
    "word": "assumption",
    "pos": "noun",
    "topics": ["nature vs nurture"],
    "level": "academic",
    "definition": "something you accept as true without proof",
    "example": "The argument rests on the assumption that intelligence is fixed.",
    "synonyms": ["belief", "premise"]
  },
  {
    "word": "underlie",
    "pos": "verb",
    "topics": ["nature vs nurture"],
    "level": "academic",
    "definition": "to be the basic cause or support of something",
    "example": "Several factors underlie differences in test scores.",
    "synonyms": ["support", "form the basis of"]
  },
  {
    "word": "objective",
    "pos": "adjective",
    "topics": ["nature vs nurture"],
    "level": "academic",
    "definition": "based on facts, not personal feelings",
    "example": "The report gives an objective account of the research.",
    "synonyms": ["impartial", "neutral"]
  },
  {
    "word": "subjective",
    "pos": "adjective",
    "topics": ["nature vs nurture", "art history"],
    "level": "academic",
    "definition": "based on personal feelings or opinions",
    "example": "Judging a painting is partly a subjective matter.",
    "synonyms": ["personal", "biased"]
  },
  {
    "word": "hedge",
    "pos": "verb",
    "topics": ["nature vs nurture"],
    "level": "academic",
    "definition": "to soften a statement so that it does not sound too certain",
    "example": "Academic writers often hedge their claims with words such as may and seems.",
    "synonyms": ["qualify", "soften"]
  },
  {
    "word": "intelligence",
    "pos": "noun",
    "topics": ["nature vs nurture"],
    "level": "academic",
    "definition": "the ability to learn, understand and think",
    "example": "Intelligence is shaped by both genes and environment.",
    "synonyms": ["intellect", "brainpower"]
  },
  {
    "word": "socialization",
    "pos": "noun",
    "topics": ["nature vs nurture"],
    "level": "academic",
    "definition": "the process of learning the rules and values of a society",
    "example": "Early socialization shapes how a child behaves with others."
  },
  {
    "word": "stage",
    "pos": "noun",
    "topics": ["process description"],
    "level": "academic",
    "definition": "one step in a longer process",
    "example": "The first stage of the process is picking the olives.",
    "synonyms": ["step", "phase"]
  },
  {
    "word": "phase",
    "pos": "noun",
    "topics": ["process description"],
    "level": "academic",
    "definition": "a distinct period within a process or development",
    "example": "The honeymoon phase of culture shock is full of excitement.",
    "synonyms": ["stage", "period"]
  },
  {
    "word": "sequence",
    "pos": "noun",
    "topics": ["process description"],
    "level": "academic",
    "definition": "a series of things that follow one another in a fixed order",
    "example": "The sequence of events begins with harvesting.",
    "synonyms": ["order", "series"]
  },
  {
    "word": "lastly",
    "pos": "adverb",
    "topics": ["process description"],
    "level": "academic",
    "definition": "used to introduce the final point or step",
    "example": "Lastly, the chocolate is packed and sent to the shops.",
    "synonyms": ["finally"]
  },
  {
    "word": "conclude",
    "pos": "verb",
    "topics": ["process description"],
    "level": "academic",
    "definition": "to end or finish in a particular way",
    "example": "The process will conclude with the packaging of the product.",
    "synonyms": ["finish", "end"]
  },
  {
    "word": "as soon as",
    "pos": "conjunction",
    "topics": ["process description"],
    "level": "academic",
    "definition": "immediately after something happens",
    "example": "As soon as the leaves have been picked, they are washed.",
    "synonyms": ["once", "the moment"]
  },
  {
    "word": "following this",
    "pos": "phrase",
    "topics": ["process description"],
    "level": "academic",
    "definition": "after that",
    "example": "Following this, the paste is pressed to separate the oil.",
    "synonyms": ["after that", "next"]
  },
  {
    "word": "prior to",
    "pos": "phrase",
    "topics": ["process description"],
    "level": "academic",
    "definition": "before",
    "example": "Prior to pressing, the olives are crushed into a paste.",
    "synonyms": ["before"]
  },
  {
    "word": "natural process",
    "pos": "noun",
    "topics": ["process description"],
    "level": "academic",
    "definition": "a process that happens in nature without human action",
    "example": "An avalanche is a natural process."
  },
  {
    "word": "man-made",
    "pos": "adjective",
    "topics": ["process description"],
    "level": "academic",
    "definition": "made by people, not natural",
    "example": "The decline in fish stocks is partly man-made.",
    "synonyms": ["artificial", "synthetic"]
  },
  {
    "word": "artificial",
    "pos": "adjective",
    "topics": ["process description"],
    "level": "academic",
    "definition": "made by people rather than occurring in nature",
    "example": "Plastic is an artificial material.",
    "synonyms": ["synthetic", "man-made"]
  },
  {
    "word": "avalanche",
    "pos": "noun",
    "topics": ["process description"],
    "level": "academic",
    "definition": "a large mass of snow that slides down a mountain",
    "example": "The avalanche buried part of the village."
  },
  {
    "word": "eruption",
    "pos": "noun",
    "topics": ["process description"],
    "level": "academic",
    "definition": "the sudden explosion of lava, ash and gas from a volcano",
    "example": "The eruption of the volcano forced thousands of people to leave."
  },
  {
    "word": "fish stocks",
    "pos": "noun",
    "topics": ["process description"],
    "level": "academic",
    "definition": "the numbers of fish in the sea that can be caught",
    "example": "Overfishing has reduced fish stocks in the North Sea."
  },
  {
    "word": "raw material",
    "pos": "noun",
    "topics": ["process description"],
    "level": "academic",
    "definition": "a basic substance used to make a product",
    "example": "Cocoa beans are the raw material for chocolate."
  },
  {
    "word": "ferment",
    "pos": "verb",
    "topics": ["process description"],
    "level": "academic",
    "definition": "to change chemically through the action of yeast or bacteria",
    "example": "The beans are left to ferment for several days."
  },
  {
    "word": "decomposition",
    "pos": "noun",
    "topics": ["process description"],
    "level": "academic",
    "definition": "the natural process of rotting",
    "example": "Bioplastic breaks down through decomposition.",
    "synonyms": ["decay", "rot"]
  },
  {
    "word": "harvest",
    "pos": "verb",
    "topics": ["process description"],
    "level": "academic",
    "definition": "to gather a crop",
    "example": "Farmers harvest the cocoa pods by hand.",
    "synonyms": ["pick", "gather"]
  },
  {
    "word": "roast",
    "pos": "verb",
    "topics": ["process description"],
    "level": "academic",
    "definition": "to cook with dry heat",
    "example": "The beans are then left to roast for an hour.",
    "synonyms": ["bake"]
  },
  {
    "word": "dissolve",
    "pos": "verb",
    "topics": ["process description"],
    "level": "academic",
    "definition": "to mix into a liquid and seem to disappear",
    "example": "Stir the powder until it begins to dissolve in the water.",
    "synonyms": ["melt"]
  },
  {
    "word": "culture shock",
    "pos": "noun",
    "topics": ["process description"],
    "level": "academic",
    "definition": "the confusion felt when moving to a very different culture",
    "example": "Many students experience culture shock in their first month abroad."
  },
  {
    "word": "reverse culture shock",
    "pos": "noun",
    "topics": ["process description"],
    "level": "academic",
    "definition": "difficulty adjusting after you return to your home culture",
    "example": "After years abroad, she suffered reverse culture shock when she came home."
  },
  {
    "word": "honeymoon phase",
    "pos": "noun",
    "topics": ["process description"],
    "level": "academic",
    "definition": "the early period of excitement in a new situation",
    "example": "During the honeymoon phase, everything about the new country seems wonderful."
  },
  {
    "word": "regression",
    "pos": "noun",
    "topics": ["process description"],
    "level": "academic",
    "definition": "a return to an earlier or worse state",
    "example": "The regression phase brings homesickness and frustration.",
    "synonyms": ["decline", "relapse"]
  },
  {
    "word": "recovery",
    "pos": "noun",
    "topics": ["process description"],
    "level": "academic",
    "definition": "a return to a normal or healthy state",
    "example": "Recovery begins when the person starts to accept the new culture.",
    "synonyms": ["improvement"]
  },
  {
    "word": "undergo",
    "pos": "verb",
    "topics": ["process description", "charts"],
    "level": "academic",
    "definition": "to experience or go through a change or process",
    "example": "The raw pulp must undergo several stages of cleaning.",
    "synonyms": ["experience", "go through"]
  },
  {
    "word": "ecology",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the study of how living things interact with each other and with their environment",
    "example": "Ecology covers everything from a single organism to the whole planet.",
    "synonyms": ["environmental science"]
  },
  {
    "word": "niche separation",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the way species that share a habitat avoid competition by using different resources or different times",
    "example": "Niche separation allows several bird species to live in the same forest."
  },
  {
    "word": "resource partitioning",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the sharing out of limited resources among species so that they can live together",
    "example": "Resource partitioning explains why many kinds of finches can feed on one island."
  },
  {
    "word": "herbivory",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the eating of plants by animals",
    "example": "Herbivory by deer can stop young trees from growing.",
    "synonyms": ["grazing", "plant-eating"]
  },
  {
    "word": "population",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "all the individuals of one species living in a particular area",
    "example": "The wolf population in the park has doubled."
  },
  {
    "word": "community",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "all the different species living and interacting in one area",
    "example": "A pond community includes plants, insects, fish and birds."
  },
  {
    "word": "biosphere",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the parts of Earth where life exists",
    "example": "The biosphere includes the oceans, the soil and the lower atmosphere."
  },
  {
    "word": "species",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a group of living things that can breed with each other",
    "example": "Thousands of new species are discovered every year."
  },
  {
    "word": "abiotic factor",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a non-living part of an ecosystem, such as temperature, water or light",
    "example": "Rainfall is an important abiotic factor in deserts."
  },
  {
    "word": "biotic factor",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a living part of an ecosystem",
    "example": "Predators and parasites are biotic factors."
  },
  {
    "word": "limiting factor",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "something that restricts the growth of a population",
    "example": "Water is the main limiting factor in the desert."
  },
  {
    "word": "intraspecific competition",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "competition between members of the same species",
    "example": "Intraspecific competition for food increases when the population grows."
  },
  {
    "word": "interspecific competition",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "competition between members of different species",
    "example": "Interspecific competition can push one species out of an area."
  },
  {
    "word": "competitive exclusion",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the principle that two species cannot share exactly the same niche for long",
    "example": "Competitive exclusion explains why one species often disappears."
  },
  {
    "word": "fundamental niche",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the full range of conditions in which a species could live",
    "example": "A species' fundamental niche is larger than the area it actually occupies."
  },
  {
    "word": "realized niche",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the conditions in which a species actually lives, after competition is taken into account",
    "example": "The realized niche is usually narrower than the fundamental niche."
  },
  {
    "word": "autotroph",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "an organism that makes its own food, such as a plant",
    "example": "An autotroph uses sunlight to produce energy.",
    "synonyms": ["producer"]
  },
  {
    "word": "heterotroph",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "an organism that must eat other organisms for energy",
    "example": "A cow is a heterotroph because it feeds on plants.",
    "synonyms": ["consumer"]
  },
  {
    "word": "detritivore",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "an animal that feeds on dead plant and animal matter",
    "example": "The earthworm is a detritivore that recycles nutrients into the soil."
  },
  {
    "word": "primary producer",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "an organism, usually a plant or alga, at the base of a food chain",
    "example": "Grass is a primary producer in a grassland."
  },
  {
    "word": "secondary consumer",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "an animal that eats herbivores",
    "example": "A fox is a secondary consumer."
  },
  {
    "word": "energy flow",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the movement of energy from one trophic level to the next",
    "example": "Energy flow through an ecosystem is always one-directional."
  },
  {
    "word": "cellulose",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the substance that forms the cell walls of plants",
    "example": "Cellulose makes up most of the wood in a tree."
  },
  {
    "word": "incur costs",
    "pos": "verb phrase",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "to have to pay for something",
    "example": "Farmers who switch to organic methods may incur costs in the first few years.",
    "synonyms": ["face expenses"]
  },
  {
    "word": "shoots",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the early growth on a plant",
    "example": "Young shoots appear after the first spring rain.",
    "synonyms": ["sprouts"]
  },
  {
    "word": "unlock",
    "pos": "verb",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "to release or discover something that was hidden or closed",
    "example": "Scientists hope to unlock the energy stored in plant waste.",
    "synonyms": ["release", "reveal"]
  },
  {
    "word": "endemic",
    "pos": "adjective",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "found naturally only in one particular place",
    "example": "Madagascar has many endemic species.",
    "synonyms": ["native", "indigenous"]
  },
  {
    "word": "microhabitat",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a very small area with its own conditions, such as the space under a log",
    "example": "Moss grows in the damp microhabitat beneath the rock."
  },
  {
    "word": "ecotone",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a transition zone between two ecosystems",
    "example": "The ecotone between forest and grassland supports many species."
  },
  {
    "word": "dispersal",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the spreading of seeds or animals away from where they started",
    "example": "Seed dispersal by birds helps forests recover.",
    "synonyms": ["spreading", "distribution"]
  },
  {
    "word": "predator-prey relationship",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the link between a hunting animal and the animal it hunts",
    "example": "The predator-prey relationship keeps both populations in balance."
  },
  {
    "word": "tolerance",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the ability of a species to survive in particular conditions",
    "example": "Cacti have a high tolerance for drought.",
    "synonyms": ["resistance"]
  },
  {
    "word": "ecosystem services",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the benefits that nature provides to people",
    "example": "Wetlands provide ecosystem services such as flood control and clean water."
  },
  {
    "word": "anthropogenic",
    "pos": "adjective",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "caused by human activity",
    "example": "Anthropogenic emissions are the main cause of climate change.",
    "synonyms": ["human-made"]
  },
  {
    "word": "pattern",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a regular way in which something happens or is arranged",
    "example": "Scientists study the migration patterns of birds.",
    "synonyms": ["trend", "arrangement"]
  },
  {
    "word": "sustainability",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "using resources in a way that does not harm future generations",
    "example": "Sustainability means meeting present needs without damaging the future."
  },
  {
    "word": "constrict",
    "pos": "verb",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "to make something narrower or tighter",
    "example": "Drought can constrict the flow of rivers.",
    "synonyms": ["narrow", "tighten"]
  },
  {
    "word": "constriction",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the act of becoming narrower, or a narrow part",
    "example": "Constriction of the river channel increased the risk of flooding.",
    "synonyms": ["narrowing"]
  },
  {
    "word": "shift responsibility",
    "pos": "verb phrase",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "to make someone else responsible instead of yourself",
    "example": "Governments should not shift responsibility for climate action onto individuals.",
    "synonyms": ["pass the blame"]
  },
  {
    "word": "embed",
    "pos": "verb",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "to fix something firmly as a basic part of something larger",
    "example": "Schools should embed environmental education in every subject.",
    "synonyms": ["integrate", "incorporate"]
  },
  {
    "word": "persist",
    "pos": "verb",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "to continue to exist, often longer than expected",
    "example": "Plastic pollution can persist in the ocean for hundreds of years.",
    "synonyms": ["continue", "endure"]
  },
  {
    "word": "eradicate",
    "pos": "verb",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "to completely destroy or get rid of something",
    "example": "Efforts to eradicate invasive rats on the island have succeeded.",
    "synonyms": ["eliminate", "wipe out"]
  },
  {
    "word": "intrinsic",
    "pos": "adjective",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "belonging to the nature of something, in itself",
    "example": "Nature has an intrinsic value apart from its usefulness to people.",
    "synonyms": ["inherent", "built-in"]
  },
  {
    "word": "intrinsically",
    "pos": "adverb",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "in a way that belongs to the basic nature of something",
    "example": "A healthy forest is intrinsically valuable.",
    "synonyms": ["inherently", "essentially"]
  },
  {
    "word": "stagnate",
    "pos": "verb",
    "topics": ["charts"],
    "level": "academic",
    "definition": "to stop growing or developing and stay the same",
    "example": "Sales are likely to stagnate at around 200 units a year.",
    "synonyms": ["stall", "flatline"]
  },
  {
    "word": "peak",
    "pos": "verb",
    "topics": ["charts"],
    "level": "academic",
    "definition": "to reach the highest point",
    "example": "The number of visitors peaked in July at 4,500.",
    "synonyms": ["top out", "reach a high"]
  },
  {
    "word": "forecast",
    "pos": "verb",
    "topics": ["charts"],
    "level": "academic",
    "definition": "to say what you expect to happen in future, based on data",
    "example": "Analysts forecast that demand will double by 2030.",
    "synonyms": ["predict", "project"]
  },
  {
    "word": "predict",
    "pos": "verb",
    "topics": ["charts"],
    "level": "academic",
    "definition": "to say what will happen in the future",
    "example": "The graph predicts a steady rise in urban populations.",
    "synonyms": ["forecast", "anticipate"]
  },
  {
    "word": "widen",
    "pos": "verb",
    "topics": ["charts"],
    "level": "academic",
    "definition": "to become larger in distance or difference",
    "example": "The gap between the two countries began to widen after 2001.",
    "synonyms": ["grow", "expand"]
  },
  {
    "word": "overtake",
    "pos": "verb",
    "topics": ["charts"],
    "level": "academic",
    "definition": "to become greater than something else",
    "example": "By 2012, the number of female students had begun to overtake the number of males.",
    "synonyms": ["surpass", "exceed"]
  },
  {
    "word": "outnumber",
    "pos": "verb",
    "topics": ["charts"],
    "level": "academic",
    "definition": "to be greater in number than",
    "example": "Women outnumber men in primary teaching.",
    "synonyms": ["exceed"]
  },
  {
    "word": "twofold",
    "pos": "adverb",
    "topics": ["charts"],
    "level": "academic",
    "definition": "by two times, or doubled",
    "example": "Spending increased twofold between 1995 and 2005.",
    "synonyms": ["double"]
  },
  {
    "word": "threefold",
    "pos": "adverb",
    "topics": ["charts"],
    "level": "academic",
    "definition": "by three times",
    "example": "The number of users increased threefold in five years.",
    "synonyms": ["triple"]
  },
  {
    "word": "marked",
    "pos": "adjective",
    "topics": ["charts"],
    "level": "academic",
    "definition": "clearly noticeable",
    "example": "There was a marked increase in car use after 2000.",
    "synonyms": ["noticeable", "pronounced"]
  },
  {
    "word": "pronounced",
    "pos": "adjective",
    "topics": ["charts"],
    "level": "academic",
    "definition": "very noticeable",
    "example": "The trend was more pronounced among women.",
    "synonyms": ["marked", "distinct"]
  },
  {
    "word": "parallel",
    "pos": "adjective",
    "topics": ["charts"],
    "level": "academic",
    "definition": "similar and developing in the same way",
    "example": "There was a parallel rise in both countries.",
    "synonyms": ["similar", "comparable"]
  },
  {
    "word": "by far",
    "pos": "adverb",
    "topics": ["charts"],
    "level": "academic",
    "definition": "by a very large amount",
    "example": "Wales had by far the highest percentage of over 65s.",
    "synonyms": ["easily", "much"]
  },
  {
    "word": "by contrast",
    "pos": "phrase",
    "topics": ["charts"],
    "level": "academic",
    "definition": "used to show a clear difference between two things",
    "example": "By contrast, the number of students in Japan fell.",
    "synonyms": ["in comparison"]
  },
  {
    "word": "in spite of",
    "pos": "preposition",
    "topics": ["charts"],
    "level": "academic",
    "definition": "without being affected by something",
    "example": "In spite of the economic crisis, sales kept growing.",
    "synonyms": ["despite"]
  },
  {
    "word": "with the exception of",
    "pos": "phrase",
    "topics": ["charts"],
    "level": "academic",
    "definition": "not including",
    "example": "All regions grew, with the exception of Alberta.",
    "synonyms": ["apart from", "except for"]
  },
  {
    "word": "considerably",
    "pos": "adverb",
    "topics": ["charts"],
    "level": "academic",
    "definition": "by a large amount",
    "example": "Prices rose considerably after 2005.",
    "synonyms": ["significantly", "substantially"]
  },
  {
    "word": "dominate",
    "pos": "verb",
    "topics": ["charts"],
    "level": "academic",
    "definition": "to be the largest or most important part of something",
    "example": "Women dominate the teaching profession in primary schools.",
    "synonyms": ["prevail", "lead"]
  },
  {
    "word": "urbanization",
    "pos": "noun",
    "topics": ["charts"],
    "level": "academic",
    "definition": "the movement of people to cities and the growth of cities",
    "example": "Urbanization is happening fastest in Africa and Asia."
  },
  {
    "word": "ageing population",
    "pos": "noun",
    "topics": ["charts"],
    "level": "academic",
    "definition": "a population in which the average age is rising",
    "example": "An ageing population puts pressure on healthcare systems."
  },
  {
    "word": "share",
    "pos": "noun",
    "topics": ["charts"],
    "level": "academic",
    "definition": "a part or proportion of a total",
    "example": "The share of renewable energy rose from 5% to 12%.",
    "synonyms": ["proportion", "percentage"]
  },
  {
    "word": "figure",
    "pos": "noun",
    "topics": ["charts"],
    "level": "academic",
    "definition": "a number, especially one in official statistics",
    "example": "The figure for 2010 was much higher than for 2005.",
    "synonyms": ["number", "statistic"]
  },
  {
    "word": "rebound",
    "pos": "verb",
    "topics": ["charts"],
    "level": "academic",
    "definition": "to recover after a fall",
    "example": "Sales rebounded in the final quarter.",
    "synonyms": ["recover", "bounce back"]
  },
  {
    "word": "spike",
    "pos": "noun",
    "topics": ["charts"],
    "level": "academic",
    "definition": "a sudden sharp rise",
    "example": "There was a spike in visitors during the holidays.",
    "synonyms": ["surge"]
  },
  {
    "word": "volatile",
    "pos": "adjective",
    "topics": ["charts"],
    "level": "academic",
    "definition": "changing quickly and unpredictably",
    "example": "Oil prices were volatile throughout the decade.",
    "synonyms": ["unstable", "erratic"]
  },
  {
    "word": "trend",
    "pos": "noun",
    "topics": ["charts"],
    "level": "academic",
    "definition": "the general direction in which something is changing",
    "example": "The overall trend is upward.",
    "synonyms": ["pattern", "tendency"]
  },
  {
    "word": "substantially",
    "pos": "adverb",
    "topics": ["charts"],
    "level": "academic",
    "definition": "by a large amount",
    "example": "Costs fell substantially.",
    "synonyms": ["considerably"]
  },
  {
    "word": "negligible",
    "pos": "adjective",
    "topics": ["charts"],
    "level": "academic",
    "definition": "so small that it is not important",
    "example": "The change in the number of visitors was negligible.",
    "synonyms": ["insignificant", "tiny"]
  },
  {
    "word": "fraction",
    "pos": "noun",
    "topics": ["charts"],
    "level": "academic",
    "definition": "a very small part of something",
    "example": "Only a fraction of the budget was spent on research.",
    "synonyms": ["portion"]
  },
  {
    "word": "majority",
    "pos": "noun",
    "topics": ["charts"],
    "level": "academic",
    "definition": "more than half of a group",
    "example": "The majority of respondents were under 30.",
    "synonyms": ["most"]
  },
  {
    "word": "minority",
    "pos": "noun",
    "topics": ["charts"],
    "level": "academic",
    "definition": "less than half of a group",
    "example": "Only a small minority of students chose science.",
    "synonyms": ["few"]
  },
  {
    "word": "slightly",
    "pos": "adverb",
    "topics": ["charts"],
    "level": "academic",
    "definition": "by a small amount",
    "example": "Visitor numbers fell slightly in August.",
    "synonyms": ["marginally"]
  },
  {
    "word": "relative to",
    "pos": "phrase",
    "topics": ["charts"],
    "level": "academic",
    "definition": "in comparison with",
    "example": "Salaries rose slowly relative to prices.",
    "synonyms": ["compared with"]
  },
  {
    "word": "steady",
    "pos": "adjective",
    "topics": ["charts"],
    "level": "academic",
    "definition": "continuing at a regular rate without sudden change",
    "example": "Steady growth continued throughout the decade.",
    "synonyms": ["constant", "stable"]
  },
  {
    "word": "stare decisis",
    "pos": "noun",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "the principle that courts should follow earlier decisions",
    "example": "Stare decisis keeps common law decisions consistent and predictable.",
    "synonyms": ["precedent"]
  },
  {
    "word": "ratio decidendi",
    "pos": "noun",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "the legal reasoning that forms the basis of a judge's decision",
    "example": "Later courts must follow the ratio decidendi of earlier cases."
  },
  {
    "word": "obiter dictum",
    "pos": "noun",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "a comment by a judge that is not part of the main decision and is not binding",
    "example": "The judge's remark was an obiter dictum and did not bind later courts."
  },
  {
    "word": "persuasive precedent",
    "pos": "noun",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "an earlier decision that a court may consider but does not have to follow",
    "example": "A ruling from another country is only a persuasive precedent."
  },
  {
    "word": "judge-made law",
    "pos": "noun",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "law that develops from judges' decisions rather than from legislation",
    "example": "Much of the law of contract is judge-made law.",
    "synonyms": ["case law"]
  },
  {
    "word": "codification",
    "pos": "noun",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "the arranging of laws into a systematic written code",
    "example": "Codification made the law easier to find and apply."
  },
  {
    "word": "civil code",
    "pos": "noun",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "a written collection of the main private law rules of a country",
    "example": "France introduced its civil code in 1804."
  },
  {
    "word": "Napoleonic Code",
    "pos": "noun",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "the French civil code of 1804, which influenced many legal systems",
    "example": "The Napoleonic Code spread across Europe and beyond."
  },
  {
    "word": "Roman law",
    "pos": "noun",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "the legal system of ancient Rome, the foundation of civil law",
    "example": "Many civil law systems developed from Roman law."
  },
  {
    "word": "doctrine",
    "pos": "noun",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "a principle or set of principles taught or established in law",
    "example": "The doctrine of precedent is central to common law.",
    "synonyms": ["principle"]
  },
  {
    "word": "legal tradition",
    "pos": "noun",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "a long-standing way of thinking about and organising law",
    "example": "Common law and civil law are the two main legal traditions."
  },
  {
    "word": "equity",
    "pos": "noun",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "a body of law that developed to bring fairness where strict rules were too harsh",
    "example": "Equity allows courts to order remedies other than money.",
    "synonyms": ["fairness"]
  },
  {
    "word": "remedy",
    "pos": "noun",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "a way in which a court puts right a legal wrong",
    "example": "The usual remedy for breach of contract is damages.",
    "synonyms": ["solution", "redress"]
  },
  {
    "word": "damages",
    "pos": "noun",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "money a court orders someone to pay for harm they caused",
    "example": "The court awarded damages to the injured worker.",
    "synonyms": ["compensation"]
  },
  {
    "word": "mixed legal system",
    "pos": "noun",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "a legal system that combines features of more than one tradition",
    "example": "South Africa has a mixed legal system.",
    "synonyms": ["hybrid system"]
  },
  {
    "word": "source of law",
    "pos": "noun",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "the place where legal rules come from, such as statutes or court decisions",
    "example": "Custom is an older source of law."
  },
  {
    "word": "legislature",
    "pos": "noun",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "the body that makes the laws of a country",
    "example": "The legislature passed the bill by a large majority.",
    "synonyms": ["parliament", "assembly"]
  },
  {
    "word": "constitution",
    "pos": "noun",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "the basic laws that set out how a country is governed",
    "example": "The constitution protects freedom of speech."
  },
  {
    "word": "sovereignty",
    "pos": "noun",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "the supreme power of a state to govern itself",
    "example": "Parliamentary sovereignty means that Parliament can make any law.",
    "synonyms": ["supremacy", "independence"]
  },
  {
    "word": "interpretation",
    "pos": "noun",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "the explaining of what a law means",
    "example": "Courts decide the interpretation of unclear statutes.",
    "synonyms": ["reading", "explanation"]
  },
  {
    "word": "enforce",
    "pos": "verb",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "to make sure that a law is obeyed",
    "example": "Police enforce the law.",
    "synonyms": ["apply", "implement"]
  },
  {
    "word": "adjudicate",
    "pos": "verb",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "to make a formal legal decision about a dispute",
    "example": "Judges adjudicate disputes between citizens.",
    "synonyms": ["decide", "rule"]
  },
  {
    "word": "impartial",
    "pos": "adjective",
    "topics": ["law systems", "common law/civil law"],
    "level": "academic",
    "definition": "not favouring any side",
    "example": "A judge must be impartial.",
    "synonyms": ["neutral", "fair"]
  },
  {
    "word": "jury",
    "pos": "noun",
    "topics": ["law systems"],
    "level": "academic",
    "definition": "a group of citizens who decide the facts of a trial",
    "example": "The jury returned a unanimous verdict."
  },
  {
    "word": "magistrate",
    "pos": "noun",
    "topics": ["law systems"],
    "level": "academic",
    "definition": "a judge who deals with minor cases",
    "example": "The magistrate fined him for dangerous driving."
  },
  {
    "word": "prosecutor",
    "pos": "noun",
    "topics": ["law systems"],
    "level": "academic",
    "definition": "the lawyer who presents the case against the accused",
    "example": "The prosecutor called three witnesses."
  },
  {
    "word": "counsel",
    "pos": "noun",
    "topics": ["law systems"],
    "level": "academic",
    "definition": "a lawyer who gives legal advice or argues a case in court",
    "example": "Defence counsel challenged the evidence.",
    "synonyms": ["barrister", "lawyer"]
  },
  {
    "word": "burden of proof",
    "pos": "noun",
    "topics": ["law systems"],
    "level": "academic",
    "definition": "the duty to prove a claim in court",
    "example": "In criminal cases the burden of proof lies with the prosecution."
  },
  {
    "word": "presumption of innocence",
    "pos": "noun",
    "topics": ["law systems"],
    "level": "academic",
    "definition": "the principle that a person is innocent until proven guilty",
    "example": "The presumption of innocence is a basic right."
  },
  {
    "word": "beyond reasonable doubt",
    "pos": "phrase",
    "topics": ["law systems"],
    "level": "academic",
    "definition": "so certain that no sensible doubt remains",
    "example": "The jury must be sure beyond reasonable doubt before it convicts."
  },
  {
    "word": "hearing",
    "pos": "noun",
    "topics": ["law systems"],
    "level": "academic",
    "definition": "a court session in which evidence is heard",
    "example": "The hearing was postponed until next week."
  },
  {
    "word": "appellate",
    "pos": "adjective",
    "topics": ["law systems"],
    "level": "academic",
    "definition": "relating to appeals against a court's decision",
    "example": "The appellate court reviewed the decision."
  },
  {
    "word": "ruling",
    "pos": "noun",
    "topics": ["law systems"],
    "level": "academic",
    "definition": "an official decision made by a judge or court",
    "example": "The ruling surprised many lawyers.",
    "synonyms": ["decision", "judgment"]
  },
  {
    "word": "judgment",
    "pos": "noun",
    "topics": ["law systems"],
    "level": "academic",
    "definition": "a court's final decision in a case",
    "example": "The judgment was delivered in writing.",
    "synonyms": ["ruling", "decision"]
  },
  {
    "word": "dispute",
    "pos": "noun",
    "topics": ["law systems"],
    "level": "academic",
    "definition": "a disagreement, especially one that goes to court",
    "example": "The dispute over land ended up in court.",
    "synonyms": ["disagreement", "conflict"]
  },
  {
    "word": "liability",
    "pos": "noun",
    "topics": ["law systems"],
    "level": "academic",
    "definition": "legal responsibility for something",
    "example": "The company accepted liability for the accident.",
    "synonyms": ["responsibility"]
  },
  {
    "word": "tort",
    "pos": "noun",
    "topics": ["law systems"],
    "level": "academic",
    "definition": "a civil wrong that causes harm, other than breach of contract",
    "example": "Negligence is the most common tort."
  },
  {
    "word": "evidence",
    "pos": "noun",
    "topics": ["law systems"],
    "level": "academic",
    "definition": "facts or objects presented in court to prove something",
    "example": "The evidence against him was weak.",
    "synonyms": ["proof"]
  },
  {
    "word": "witness",
    "pos": "noun",
    "topics": ["law systems"],
    "level": "academic",
    "definition": "a person who gives evidence in court",
    "example": "The witness described what she saw."
  },
  {
    "word": "cross-examine",
    "pos": "verb",
    "topics": ["law systems"],
    "level": "academic",
    "definition": "to question a witness who was called by the other side",
    "example": "The lawyer chose to cross-examine the main witness for two hours.",
    "synonyms": ["question", "interrogate"]
  },
  {
    "word": "hearsay",
    "pos": "noun",
    "topics": ["law systems"],
    "level": "academic",
    "definition": "information heard from other people rather than seen first-hand",
    "example": "Hearsay is not usually accepted as evidence.",
    "synonyms": ["rumor", "gossip"]
  },
  {
    "word": "unwritten",
    "pos": "adjective",
    "topics": ["law systems"],
    "level": "academic",
    "definition": "not set out in a formal legal text",
    "example": "The British constitution is largely unwritten.",
    "synonyms": ["uncodified"]
  },
  {
    "word": "bill",
    "pos": "noun",
    "topics": ["law systems"],
    "level": "academic",
    "definition": "a proposed law",
    "example": "The bill must be approved by both houses.",
    "synonyms": ["draft law"]
  },
  {
    "word": "religious law",
    "pos": "noun",
    "topics": ["law systems"],
    "level": "academic",
    "definition": "legal rules based on religious texts",
    "example": "In some countries religious law governs family matters."
  },
  {
    "word": "hue",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "a pure color, such as red or blue, as it appears on the color wheel",
    "example": "Van Gogh used intense hues of yellow and blue.",
    "synonyms": ["color", "shade"]
  },
  {
    "word": "saturation",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "how pure or intense a color is",
    "example": "Low saturation gives a painting a soft, faded look.",
    "synonyms": ["intensity", "chroma"]
  },
  {
    "word": "palette",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "the range of colors an artist uses",
    "example": "Monet's palette was full of soft blues and greens.",
    "synonyms": ["color scheme"]
  },
  {
    "word": "muted",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "soft and not bright",
    "example": "The muted tones create a melancholy mood.",
    "synonyms": ["subdued", "soft"]
  },
  {
    "word": "vibrant",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "bright, strong and full of energy",
    "example": "The vibrant colors seem to leap off the canvas.",
    "synonyms": ["vivid", "lively"]
  },
  {
    "word": "vivid",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "very bright and clear",
    "example": "The painting gives a vivid picture of Paris street life.",
    "synonyms": ["bright", "intense"]
  },
  {
    "word": "pastel",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "pale and soft in color",
    "example": "The pastel pinks and blues give the scene a dreamy feel.",
    "synonyms": ["pale", "soft"]
  },
  {
    "word": "monochromatic",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "using only one color or shades of one color",
    "example": "The monochromatic canvas is built from different shades of blue.",
    "synonyms": ["single-color"]
  },
  {
    "word": "complementary",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "describing colors that are opposite on the color wheel and make each other look stronger",
    "example": "Artists often place complementary colors such as red and green side by side.",
    "synonyms": ["contrasting"]
  },
  {
    "word": "contrast",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "a clear difference between two things placed together",
    "example": "The contrast between light and dark gives the painting drama.",
    "synonyms": ["difference"]
  },
  {
    "word": "translucent",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "allowing some light to pass through",
    "example": "Thin layers of translucent paint create a glowing surface.",
    "synonyms": ["see-through"]
  },
  {
    "word": "opaque",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "not allowing light through, so solid-looking",
    "example": "Thick opaque paint covers the layers underneath.",
    "synonyms": ["solid", "dense"]
  },
  {
    "word": "subdued",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "quiet and soft, not strong",
    "example": "A subdued palette of browns and greys suits the sad scene.",
    "synonyms": ["muted", "restrained"]
  },
  {
    "word": "garish",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "too bright and unpleasant to look at",
    "example": "Critics called the colors garish and crude.",
    "synonyms": ["gaudy", "loud"]
  },
  {
    "word": "radiant",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "shining brightly",
    "example": "A radiant sunrise fills the sky.",
    "synonyms": ["glowing", "shining"]
  },
  {
    "word": "sombre",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "dark and serious in mood",
    "example": "The sombre colors reflect the grief of the period.",
    "synonyms": ["gloomy", "dark"]
  },
  {
    "word": "earthy",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "having rich natural browns, reds and greens",
    "example": "Cezanne used earthy tones of ochre and green.",
    "synonyms": ["natural", "warm"]
  },
  {
    "word": "bold",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "strong and very noticeable",
    "example": "Gauguin's bold outlines and flat colors were new at the time.",
    "synonyms": ["striking", "daring"]
  },
  {
    "word": "chiaroscuro",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "the strong contrast between light and dark in a painting",
    "example": "Chiaroscuro adds drama and depth to the portrait."
  },
  {
    "word": "atmospheric",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "creating a particular mood or feeling",
    "example": "The atmospheric landscape seems wrapped in mist.",
    "synonyms": ["evocative"]
  },
  {
    "word": "dappled",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "marked with small patches of light and shade",
    "example": "Dappled sunlight falls on the picnickers under the trees.",
    "synonyms": ["mottled", "speckled"]
  },
  {
    "word": "shimmering",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "shining with a soft, trembling light",
    "example": "Monet painted the shimmering surface of the water.",
    "synonyms": ["glittering"]
  },
  {
    "word": "play of light",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "the changing effect of light on surfaces",
    "example": "Impressionists were fascinated by the play of light on water."
  },
  {
    "word": "brushstroke",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "a single mark made by a paintbrush",
    "example": "Visible brushstrokes give the painting energy.",
    "synonyms": ["mark", "stroke"]
  },
  {
    "word": "brushwork",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "the way an artist uses a brush",
    "example": "Van Gogh's turbulent brushwork expresses strong emotion.",
    "synonyms": ["technique"]
  },
  {
    "word": "impasto",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "paint applied so thickly that it stands out from the surface",
    "example": "Van Gogh used impasto to give the sky a sculpted texture."
  },
  {
    "word": "gestural",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "showing the movement of the artist's arm and body",
    "example": "The gestural marks seem to record the painter's physical energy.",
    "synonyms": ["expressive", "spontaneous"]
  },
  {
    "word": "loose",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "free and not carefully controlled",
    "example": "The loose brushwork gives a sense of movement.",
    "synonyms": ["free", "relaxed"]
  },
  {
    "word": "en plein air",
    "pos": "adverb",
    "topics": ["art history"],
    "level": "academic",
    "definition": "outdoors, in natural light",
    "example": "Monet often painted en plein air to capture changing light.",
    "synonyms": ["outdoors"]
  },
  {
    "word": "pointillism",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "painting with tiny dots of pure color",
    "example": "Seurat developed pointillism to make colors glow."
  },
  {
    "word": "texture",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "how a surface looks and feels",
    "example": "Thick paint gives the canvas a rough texture.",
    "synonyms": ["surface", "feel"]
  },
  {
    "word": "tactile",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "that can be felt by touch, with a strong sense of touch",
    "example": "The tactile surface invites the viewer to touch it.",
    "synonyms": ["touchable"]
  },
  {
    "word": "glaze",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "a thin transparent layer of paint",
    "example": "A blue glaze deepened the shadows."
  },
  {
    "word": "foreground",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "the part of a picture closest to the viewer",
    "example": "Flowers fill the foreground of the painting.",
    "synonyms": ["front"]
  },
  {
    "word": "background",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "the part of a picture farthest from the viewer",
    "example": "Hills fade into the background.",
    "synonyms": ["backdrop"]
  },
  {
    "word": "perspective",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "a technique for showing depth and distance",
    "example": "Cezanne rejected traditional perspective."
  },
  {
    "word": "focal point",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "the place the eye is drawn to first",
    "example": "The red umbrella is the focal point of the picture.",
    "synonyms": ["center of interest"]
  },
  {
    "word": "symmetry",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "a balanced arrangement in which both sides match",
    "example": "The symmetry of the design gives a feeling of order.",
    "synonyms": ["balance"]
  },
  {
    "word": "balance",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "an even arrangement of the visual elements",
    "example": "Light shapes on the left balance dark shapes on the right.",
    "synonyms": ["equilibrium"]
  },
  {
    "word": "rhythm",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "a repeated pattern that creates a sense of movement",
    "example": "The rhythm of repeated brushstrokes carries the eye across the canvas.",
    "synonyms": ["pattern", "flow"]
  },
  {
    "word": "abstraction",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "art that does not copy real objects",
    "example": "Abstraction frees color and shape from reality."
  },
  {
    "word": "figurative",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "showing real people or things",
    "example": "Figurative art shows recognizable subjects.",
    "synonyms": ["representational"]
  },
  {
    "word": "serene",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "calm and peaceful",
    "example": "The serene lake scene soothes the viewer.",
    "synonyms": ["calm", "tranquil"]
  },
  {
    "word": "tranquil",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "quiet and calm",
    "example": "A tranquil garden fills the canvas.",
    "synonyms": ["peaceful", "still"]
  },
  {
    "word": "melancholy",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "sad and thoughtful",
    "example": "The painting has a melancholy mood.",
    "synonyms": ["sorrowful", "wistful"]
  },
  {
    "word": "turbulent",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "full of violent movement or strong emotion",
    "example": "The turbulent sky reflects the artist's troubled mind.",
    "synonyms": ["stormy", "chaotic"]
  },
  {
    "word": "anguished",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "suffering great pain or worry",
    "example": "The figure's anguished face makes a deep impression.",
    "synonyms": ["tormented", "distressed"]
  },
  {
    "word": "brooding",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "dark and mysterious in mood",
    "example": "Brooding clouds hang over the empty field.",
    "synonyms": ["gloomy", "moody"]
  },
  {
    "word": "haunting",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "beautiful but sad and difficult to forget",
    "example": "The painting leaves a haunting impression.",
    "synonyms": ["unforgettable"]
  },
  {
    "word": "eerie",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "strange and frightening",
    "example": "An eerie light covers the empty street.",
    "synonyms": ["spooky", "uncanny"]
  },
  {
    "word": "ethereal",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "extremely delicate and light, almost not of this world",
    "example": "Pale blues and whites give the scene an ethereal quality.",
    "synonyms": ["delicate", "heavenly"]
  },
  {
    "word": "evocative",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "bringing strong feelings or memories to mind",
    "example": "The evocative landscape recalls childhood summers.",
    "synonyms": ["suggestive", "atmospheric"]
  },
  {
    "word": "expressive",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "showing feelings clearly",
    "example": "The expressive colors speak of joy and fear.",
    "synonyms": ["emotional", "eloquent"]
  },
  {
    "word": "exuberant",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "full of energy and excitement",
    "example": "Matisse's exuberant colors celebrate life.",
    "synonyms": ["lively", "joyful"]
  },
  {
    "word": "nostalgic",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "feeling or causing a sentimental longing for the past",
    "example": "The nostalgic scene recalls an older way of life.",
    "synonyms": ["wistful"]
  },
  {
    "word": "contemplative",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "quiet and thoughtful",
    "example": "The contemplative mood invites long looking.",
    "synonyms": ["reflective", "thoughtful"]
  },
  {
    "word": "dreamlike",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "strange and unreal, as in a dream",
    "example": "Soft edges give the garden a dreamlike quality.",
    "synonyms": ["surreal", "fantastical"]
  },
  {
    "word": "unsettling",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "making you feel uneasy",
    "example": "The unsettling empty space makes viewers uncomfortable.",
    "synonyms": ["disturbing", "uneasy"]
  },
  {
    "word": "poignant",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "causing deep sadness or sympathy",
    "example": "The poignant portrait shows a lonely old man.",
    "synonyms": ["moving", "touching"]
  },
  {
    "word": "ominous",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "suggesting that something bad will happen",
    "example": "Dark clouds give the scene an ominous feeling.",
    "synonyms": ["threatening", "menacing"]
  },
  {
    "word": "evoke",
    "pos": "verb",
    "topics": ["art history"],
    "level": "academic",
    "definition": "to bring a feeling or memory to mind",
    "example": "Warm colors evoke happiness.",
    "synonyms": ["call up", "summon"]
  },
  {
    "word": "resonate",
    "pos": "verb",
    "topics": ["art history"],
    "level": "academic",
    "definition": "to cause a feeling of shared emotion",
    "example": "The painting will resonate with viewers who have known loss.",
    "synonyms": ["strike a chord"]
  },
  {
    "word": "atmosphere",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "the mood or feeling of a place or picture",
    "example": "The soft light creates a peaceful atmosphere.",
    "synonyms": ["mood", "ambience"]
  },
  {
    "word": "Impressionism",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "a late nineteenth century style that captures light and fleeting moments with loose brushwork",
    "example": "Impressionism takes its name from Monet's Impression, Sunrise."
  },
  {
    "word": "Post-Impressionism",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "a style that came after Impressionism and stressed structure, symbolism and emotion",
    "example": "Post-Impressionism includes the work of Cezanne, Van Gogh and Gauguin."
  },
  {
    "word": "Abstract Expressionism",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "a mid-twentieth century American style of large, non-representational and emotional paintings",
    "example": "Pollock was a leading figure in Abstract Expressionism."
  },
  {
    "word": "avant-garde",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "very new and experimental",
    "example": "The avant-garde artists broke with tradition.",
    "synonyms": ["innovative", "experimental"]
  },
  {
    "word": "transient",
    "pos": "adjective",
    "topics": ["art history"],
    "level": "academic",
    "definition": "lasting only a short time",
    "example": "Impressionists tried to capture the transient effects of light.",
    "synonyms": ["temporary", "brief"]
  },
  {
    "word": "action painting",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "a style in which paint is dripped, thrown or splashed with energetic movement",
    "example": "Pollock's action painting records the movement of his body."
  },
  {
    "word": "color field",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "painting that uses large flat areas of color",
    "example": "Rothko's color field canvases create a quiet, meditative mood."
  },
  {
    "word": "symbolism",
    "pos": "noun",
    "topics": ["art history"],
    "level": "academic",
    "definition": "the use of objects or colors to represent ideas",
    "example": "Gauguin used symbolism to suggest spiritual meaning.",
    "synonyms": ["representation"]
  },
  {
    "word": "abundant",
    "pos": "adjective",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "existing in large amounts",
    "example": "Vegetation is abundant in the rainforest.",
    "synonyms": ["plentiful", "copious"]
  },
  {
    "word": "absorb",
    "pos": "verb",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "to take in a substance such as energy, water or nutrients",
    "example": "Herbivores absorb only a small part of the energy in plants.",
    "synonyms": ["take in", "soak up"]
  },
  {
    "word": "nourishing",
    "pos": "adjective",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "containing the substances needed for health and growth",
    "example": "Young shoots are more nourishing than old leaves.",
    "synonyms": ["nutritious", "healthy"]
  },
  {
    "word": "carbohydrates",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "nutrients such as sugars and starch that are a main source of energy",
    "example": "Seeds are rich in stored carbohydrates.",
    "synonyms": ["starches", "sugars"]
  },
  {
    "word": "germination",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the start of a plant's growth from a seed after a resting period",
    "example": "Warmth and moisture trigger the germination of the seed.",
    "synonyms": ["sprouting"]
  },
  {
    "word": "vegetation",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "plants considered together, especially those in a particular area",
    "example": "Dense vegetation covers the slopes of the mountain.",
    "synonyms": ["plant life", "greenery"]
  },
  {
    "word": "dormancy",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a resting period in which growth or activity is paused",
    "example": "Many seeds survive the winter in a state of dormancy.",
    "synonyms": ["inactivity", "rest"]
  },
  {
    "word": "digest",
    "pos": "verb",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "to break food down so that the body can use it",
    "example": "Cows have a complex stomach to digest grass.",
    "synonyms": ["break down", "process"]
  },
  {
    "word": "digestive tract",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the long tube in the body through which food passes and is broken down",
    "example": "Carnivores have a short digestive tract.",
    "synonyms": ["gut"]
  },
  {
    "word": "nutrient",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a substance that living things need to grow and stay healthy",
    "example": "Nitrogen is an essential nutrient for plants.",
    "synonyms": ["nourishment"]
  },
  {
    "word": "nitrogen",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a gas and chemical element that plants need in order to grow",
    "example": "Seeds are high in nitrogen."
  },
  {
    "word": "protein",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a nutrient that builds and repairs the body",
    "example": "Meat is a rich source of protein."
  },
  {
    "word": "compound",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a substance made of two or more elements joined together",
    "example": "Starch is a compound made of many sugar molecules.",
    "synonyms": ["substance", "chemical"]
  },
  {
    "word": "tissue",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the material that makes up the parts of a living thing",
    "example": "Carnivores get their energy from the tissue of other animals."
  },
  {
    "word": "flesh",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the soft part of an animal's body that is eaten as meat",
    "example": "The flesh of the prey is rich in protein and fat.",
    "synonyms": ["meat"]
  },
  {
    "word": "bud",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a small swelling on a plant from which a leaf or flower grows",
    "example": "A bud will open into a flower in spring.",
    "synonyms": ["shoot"]
  },
  {
    "word": "spore",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a tiny cell produced by ferns and fungi that can grow into a new organism",
    "example": "A single spore can grow into a new fern."
  },
  {
    "word": "secondary producer",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a consumer that makes new body tissue from the plants or animals it eats",
    "example": "An animal that feeds on plants is a secondary producer."
  },
  {
    "word": "energy transfer",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the movement of energy from one organism to another",
    "example": "Energy transfer between trophic levels is never fully efficient."
  },
  {
    "word": "consume",
    "pos": "verb",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "to eat or use up",
    "example": "Herbivores consume large amounts of plant material.",
    "synonyms": ["eat", "devour"]
  },
  {
    "word": "feed on",
    "pos": "verb phrase",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "to eat a particular type of food",
    "example": "Herbivores feed on plants.",
    "synonyms": ["eat", "live on"]
  },
  {
    "word": "concentrate on",
    "pos": "verb phrase",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "to focus your attention or effort on one thing",
    "example": "Some herbivores concentrate on the most nourishing parts of the plant.",
    "synonyms": ["focus on"]
  },
  {
    "word": "constitute",
    "pos": "verb",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "to form or make up a whole",
    "example": "Cellulose can constitute the major part of a plant's biomass.",
    "synonyms": ["make up", "form"]
  },
  {
    "word": "straddle",
    "pos": "verb",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "to be on both sides of something or to cover several levels",
    "example": "Omnivores straddle several trophic levels.",
    "synonyms": ["span", "extend across"]
  },
  {
    "word": "progression",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a gradual movement from one stage to the next",
    "example": "Energy does not follow a simple progression along the chain.",
    "synonyms": ["advance", "sequence"]
  },
  {
    "word": "route",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a path or way from one place to another",
    "example": "A food chain shows one route by which energy passes through a community.",
    "synonyms": ["path", "course"]
  },
  {
    "word": "energy-rich",
    "pos": "adjective",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "containing a lot of energy",
    "example": "Seeds are an energy-rich food.",
    "synonyms": ["high-energy"]
  },
  {
    "word": "linear food chain",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a simple sequence of organisms in which each one is eaten by the next",
    "example": "A linear food chain is rare in nature because most animals eat several foods."
  },
  {
    "word": "landscape",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a large area made up of several connected ecosystems",
    "example": "Forest corridors help animals move across the landscape.",
    "synonyms": ["terrain", "countryside"]
  },
  {
    "word": "behavioural ecology",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the study of how animal behavior helps survival in the environment",
    "example": "Behavioural ecology explains why some birds migrate."
  },
  {
    "word": "population ecology",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the study of how the size of a species' population changes",
    "example": "Population ecology explains why deer numbers rise and fall."
  },
  {
    "word": "community ecology",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the study of how different species living in one area interact",
    "example": "Community ecology looks at how predators affect their prey."
  },
  {
    "word": "ecosystem ecology",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the study of how energy and nutrients move through an ecosystem",
    "example": "Ecosystem ecology tracks how nutrients flow through a lake."
  },
  {
    "word": "physiological ecology",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the study of how an organism's body copes with its environment",
    "example": "Physiological ecology explains how a cactus survives drought."
  },
  {
    "word": "evolutionary ecology",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the study of how interactions between organisms shape their evolution",
    "example": "Evolutionary ecology asks why finches developed different beak sizes."
  },
  {
    "word": "conservation biology",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the science of protecting species and their habitats",
    "example": "Conservation biology guides the protection of endangered species."
  },
  {
    "word": "natural resource management",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the careful use of resources such as fish, forests and farmland",
    "example": "Natural resource management helps to prevent overfishing."
  },
  {
    "word": "environmental impact assessment",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a study of how a project will affect the environment",
    "example": "An environmental impact assessment is required before the dam can be built."
  },
  {
    "word": "restoration ecology",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the science of repairing damaged ecosystems",
    "example": "Restoration ecology helps wetlands recover after they have been drained."
  },
  {
    "word": "disease ecology",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the study of how diseases spread among organisms and their environment",
    "example": "Disease ecology shows how pathogens move between wildlife and people."
  },
  {
    "word": "pathogen",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a tiny organism that causes disease",
    "example": "The pathogen spread quickly through the frog population.",
    "synonyms": ["germ", "disease-causing agent"]
  },
  {
    "word": "salinity",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the amount of salt in water or soil",
    "example": "High salinity limits the plants that can grow in the marsh.",
    "synonyms": ["saltiness"]
  },
  {
    "word": "shelter",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a place that protects an animal from weather or predators",
    "example": "A hollow log provides shelter for small mammals.",
    "synonyms": ["refuge", "protection"]
  },
  {
    "word": "breeding site",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a place where animals reproduce and raise their young",
    "example": "The beach is an important breeding site for turtles.",
    "synonyms": ["nesting site"]
  },
  {
    "word": "outcompete",
    "pos": "verb",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "to be more successful than another species when competing for resources",
    "example": "Invasive plants can outcompete native species for light.",
    "synonyms": ["beat", "displace"]
  },
  {
    "word": "niche differentiation",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the process in which species come to use different niches, which reduces competition",
    "example": "Niche differentiation allows similar birds to share one forest.",
    "synonyms": ["niche separation"]
  },
  {
    "word": "temporal",
    "pos": "adjective",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "relating to time",
    "example": "Temporal partitioning means that hawks hunt by day and owls by night.",
    "synonyms": ["time-related"]
  },
  {
    "word": "dietary",
    "pos": "adjective",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "relating to the food an animal eats",
    "example": "Dietary differences, such as beak size, reduce competition between finches.",
    "synonyms": ["food-related"]
  },
  {
    "word": "overlap",
    "pos": "verb",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "to cover part of the same area or share part of the same space",
    "example": "The feeding ranges of the two species overlap.",
    "synonyms": ["coincide", "intersect"]
  },
  {
    "word": "limited resource",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a supply of food, light, space or another need that is not enough for everyone",
    "example": "Light is a limited resource on the forest floor."
  },
  {
    "word": "grazing",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the feeding of animals on grass and low plants",
    "example": "Heavy grazing can turn a meadow into bare ground.",
    "synonyms": ["feeding"]
  },
  {
    "word": "algae",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "simple plant-like organisms that live mostly in water",
    "example": "Algae form the base of many aquatic food chains."
  },
  {
    "word": "epiphyte",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a plant that grows on another plant without harming it",
    "example": "An orchid growing on a branch is an epiphyte.",
    "synonyms": ["air plant"]
  },
  {
    "word": "legume",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a plant, such as a bean or pea, whose roots host nitrogen-fixing bacteria",
    "example": "Clover is a legume that enriches the soil with nitrogen."
  },
  {
    "word": "nitrogen fixation",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the conversion of nitrogen from the air into a form that plants can use",
    "example": "Nitrogen fixation by bacteria in legume roots is an example of mutualism."
  },
  {
    "word": "primary consumer",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "an animal that eats producers, such as a herbivore",
    "example": "A rabbit is a primary consumer.",
    "synonyms": ["herbivore"]
  },
  {
    "word": "tertiary consumer",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a carnivore that eats other carnivores",
    "example": "A hawk that eats a snake is a tertiary consumer."
  },
  {
    "word": "quaternary consumer",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a top predator that eats tertiary consumers",
    "example": "An orca can act as a quaternary consumer in the ocean."
  },
  {
    "word": "trophic position",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the feeding level that an organism occupies in a food chain",
    "example": "Omnivores occupy more than one trophic position."
  },
  {
    "word": "respiration",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the process in which organisms release energy from food, giving off heat",
    "example": "Most of the energy at each level is lost through respiration."
  },
  {
    "word": "ten percent rule",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the idea that only about ten percent of energy passes to the next trophic level",
    "example": "The ten percent rule explains why food chains are short.",
    "synonyms": ["10% rule"]
  },
  {
    "word": "energy pyramid",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "a diagram showing how energy decreases at each trophic level",
    "example": "The energy pyramid is widest at the bottom, where the producers are.",
    "synonyms": ["trophic pyramid"]
  },
  {
    "word": "nutrient recycling",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the return of nutrients from dead material back into the soil",
    "example": "Decomposers drive nutrient recycling in forests."
  },
  {
    "word": "stability",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the ability to stay balanced and resist change",
    "example": "Food webs with many links have greater stability.",
    "synonyms": ["balance", "steadiness"]
  },
  {
    "word": "fungi",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "organisms such as mushrooms and molds that feed on dead material",
    "example": "Fungi break down fallen leaves and return nutrients to the soil."
  },
  {
    "word": "bacteria",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "tiny single-celled organisms found almost everywhere",
    "example": "Bacteria help to decompose dead animals."
  },
  {
    "word": "distribution",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the way organisms are spread over an area",
    "example": "Ecology studies the distribution and abundance of organisms.",
    "synonyms": ["spread"]
  },
  {
    "word": "abundance",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the number of individuals of a species in an area",
    "example": "The abundance of fish fell after years of overfishing.",
    "synonyms": ["quantity", "numbers"]
  },
  {
    "word": "environment",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the physical surroundings and living things around an organism",
    "example": "Ecology studies how organisms interact with their environment.",
    "synonyms": ["surroundings"]
  },
  {
    "word": "interaction",
    "pos": "noun",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "the way two things affect each other",
    "example": "Interaction between predators and prey shapes the whole ecosystem.",
    "synonyms": ["relationship", "link"]
  },
  {
    "word": "coin",
    "pos": "verb",
    "topics": ["ecology"],
    "level": "academic",
    "definition": "to invent a new word or phrase",
    "example": "Ernst Haeckel was the first to coin the term ecology in 1866.",
    "synonyms": ["invent", "create"]
  },
  {
    "word": "testify",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "to give evidence as a witness in court",
    "example": "The witness refused to testify against her brother.",
    "noun": "testimony",
    "synonyms": [
      "give evidence"
    ]
  },
  {
    "word": "testimony",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "a formal statement that a witness gives in court",
    "example": "The jury found his testimony convincing.",
    "verb": "testify"
  },
  {
    "word": "objection",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "a formal protest by a lawyer that a question or piece of evidence is not allowed",
    "example": "The defence lawyer raised an objection to the question."
  },
  {
    "word": "admissible",
    "pos": "adjective",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "allowed to be used as evidence in court",
    "example": "Evidence obtained illegally may not be admissible.",
    "pron": "/ədˈmɪsəbl/",
    "synonyms": [
      "acceptable"
    ]
  },
  {
    "word": "rebut",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "to prove that a claim or argument is false",
    "example": "The defence called an expert to rebut the prosecution's claim.",
    "pron": "/rɪˈbʌt/",
    "synonyms": [
      "refute",
      "disprove"
    ]
  },
  {
    "word": "plead",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "to state in court whether you are guilty or not guilty",
    "example": "He decided to plead not guilty.",
    "noun": "plea"
  },
  {
    "word": "prosecution",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "the lawyers who bring a criminal case against someone, or the process of bringing it",
    "example": "The prosecution must prove guilt beyond a reasonable doubt.",
    "verb": "prosecute",
    "person": "prosecutor"
  },
  {
    "word": "claimant",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "the person who brings a civil case to court",
    "example": "The claimant asked the court for compensation."
  },
  {
    "word": "litigant",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "a person who is involved in a lawsuit",
    "example": "Every litigant has the right to be heard."
  },
  {
    "word": "submission",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "a formal argument that a lawyer presents to the court",
    "example": "The judge listened carefully to the lawyer's submission."
  },
  {
    "word": "tribunal",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "a special court or panel that decides particular kinds of disputes",
    "example": "The employment dispute was heard by a tribunal, not by a regular court.",
    "pron": "/traɪˈbjuːnəl/"
  },
  {
    "word": "indictment",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "a formal written accusation that someone has committed a serious crime",
    "example": "The grand jury issued an indictment against the company's director.",
    "pron": "/ɪnˈdaɪtmənt/",
    "verb": "indict"
  },
  {
    "word": "injunction",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "a court order that forces someone to do something or to stop doing it",
    "example": "The court granted an injunction to stop the factory from polluting the river.",
    "pron": "/ɪnˈdʒʌŋkʃn/"
  },
  {
    "word": "contest",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "level": "neutral",
    "definition": "to formally oppose a claim or decision",
    "example": "The defendant decided to contest the allegation.",
    "synonyms": [
      "challenge",
      "dispute"
    ]
  },
  {
    "word": "oral argument",
    "pos": "noun phrase",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "arguments that a lawyer makes out loud in court, especially on appeal",
    "example": "After oral argument, the judges retired to consider their decision."
  },
  {
    "word": "put forward",
    "pos": "phrasal verb",
    "topics": [
      "law systems"
    ],
    "level": "neutral",
    "definition": "to present an idea or argument for others to consider",
    "example": "Each lawyer will put forward a different version of the facts.",
    "synonyms": [
      "present",
      "advance"
    ]
  },
  {
    "word": "proceedings",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "the formal steps of a case in court",
    "example": "The proceedings were delayed because a key witness was ill."
  },
  {
    "word": "court proceedings",
    "pos": "noun phrase",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "the formal process of a case being heard in court",
    "example": "Court proceedings can take several years."
  },
  {
    "word": "legal system",
    "pos": "noun phrase",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "the whole set of laws, courts and institutions of a country",
    "example": "Every legal system has its own rules about who may bring a case."
  },
  {
    "word": "standard of proof",
    "pos": "noun phrase",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "how strongly the evidence must prove a case before a court decides",
    "example": "The standard of proof is higher in criminal cases than in civil ones."
  },
  {
    "word": "beyond a reasonable doubt",
    "pos": "phrase",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "the level of certainty needed to convict in a criminal case",
    "example": "A jury can only convict if guilt is proven beyond a reasonable doubt."
  },
  {
    "word": "balance of probabilities",
    "pos": "noun phrase",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "the civil standard of proof: more likely to be true than not",
    "example": "The claimant won because the court found her story true on the balance of probabilities."
  },
  {
    "word": "liable",
    "pos": "adjective",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "legally responsible for something",
    "example": "The company was held liable for the damage.",
    "noun": "liability",
    "synonyms": [
      "responsible"
    ]
  },
  {
    "word": "juror",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "a member of a jury",
    "example": "Each juror must decide the case only on the evidence."
  },
  {
    "word": "bench trial",
    "pos": "noun phrase",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "a trial decided by a judge alone, without a jury",
    "example": "He chose a bench trial because he trusted a judge more than a jury."
  },
  {
    "word": "appeal",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "to ask a higher court to review and change a decision",
    "example": "She decided to appeal the verdict.",
    "person": "appellant"
  },
  {
    "word": "appellant",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "the party who appeals to a higher court",
    "example": "The appellant argued that the judge had misapplied the law."
  },
  {
    "word": "respondent",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "the party who defends against an appeal",
    "example": "The respondent asked the court to uphold the original decision."
  },
  {
    "word": "remand",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "to send a case back to a lower court for further action",
    "example": "The appeal court decided to remand the case to the original judge.",
    "pron": "/rɪˈmɑːnd/"
  },
  {
    "word": "leave to appeal",
    "pos": "noun phrase",
    "topics": [
      "law systems",
      "common law/civil law"
    ],
    "level": "academic",
    "definition": "permission from a court to bring an appeal",
    "example": "The highest court granted leave to appeal in only a few cases."
  },
  {
    "word": "grounds of appeal",
    "pos": "noun phrase",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "the legal reasons given for asking a higher court to review a decision",
    "example": "The grounds of appeal included a mistake in the judge's instructions."
  },
  {
    "word": "error of law",
    "pos": "noun phrase",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "a mistake in how a judge understood or applied the law",
    "example": "The appeal succeeded because the judge made an error of law."
  },
  {
    "word": "cassation",
    "pos": "noun",
    "topics": [
      "law systems",
      "common law/civil law"
    ],
    "level": "academic",
    "definition": "in civil law systems, the review by the highest court of whether the law was applied correctly",
    "example": "The case went to the court of cassation, which reviewed only points of law.",
    "pron": "/kæˈseɪʃn/"
  },
  {
    "word": "binding precedent",
    "pos": "noun phrase",
    "topics": [
      "law systems",
      "common law/civil law"
    ],
    "level": "academic",
    "definition": "an earlier court decision that a lower court must follow",
    "example": "A Supreme Court decision is a binding precedent for all lower courts."
  },
  {
    "word": "distinguish",
    "pos": "verb",
    "topics": [
      "law systems",
      "common law/civil law"
    ],
    "level": "academic",
    "definition": "to show that an earlier case is different from the present one, so it does not have to be followed",
    "example": "The judge chose to distinguish the earlier case because the facts were different."
  },
  {
    "word": "legislator",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "a person who makes laws, such as a member of parliament",
    "example": "A legislator who breaks the rules can lose their seat.",
    "verb": "legislate"
  },
  {
    "word": "parliament",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "neutral",
    "definition": "the elected body that makes the laws of a country",
    "example": "Parliament passed the new statute last year."
  },
  {
    "word": "veto",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "to refuse to approve a proposed law",
    "example": "The president can veto a bill passed by the legislature.",
    "pron": "/ˈviːtəʊ/"
  },
  {
    "word": "constitutional",
    "pos": "adjective",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "relating to a country's constitution, or allowed by it",
    "example": "The court ruled that the new law was constitutional."
  },
  {
    "word": "separation of powers",
    "pos": "noun phrase",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "the division of government into legislative, executive and judicial branches",
    "example": "The separation of powers stops one branch of government from becoming too strong."
  },
  {
    "word": "rule of law",
    "pos": "noun phrase",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "the principle that everyone, including the government, must obey the law",
    "example": "The rule of law means that even ministers can be taken to court."
  },
  {
    "word": "due process",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "fair and proper legal procedure that must be followed before someone is punished",
    "example": "He was denied due process because he never received notice of the hearing."
  },
  {
    "word": "federal",
    "pos": "adjective",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "relating to a system where power is shared between a central government and regional ones",
    "example": "In a federal state such as the US, both national and state governments make laws."
  },
  {
    "word": "unitary",
    "pos": "adjective",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "relating to a state that is governed as one unit by a central government",
    "example": "France is a unitary state with a single central legal system."
  },
  {
    "word": "supranational",
    "pos": "adjective",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "above the level of individual countries",
    "example": "The EU is a supranational union of 27 member states.",
    "pron": "/ˌsuːprəˈnæʃnəl/"
  },
  {
    "word": "primacy",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "the state of being more important; in EU law, the rule that EU law overrides national law",
    "example": "EU law has primacy over national law when the two conflict.",
    "pron": "/ˈpraɪməsi/"
  },
  {
    "word": "supremacy",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "the highest authority or power",
    "example": "The constitution's supremacy means that no ordinary law can contradict it."
  },
  {
    "word": "directive",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "in EU law, a rule that sets a goal member states must reach using their own national laws",
    "example": "Each member state must turn the directive into national law."
  },
  {
    "word": "regulation",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "a rule made by an authority; in EU law, a rule that applies directly in every member state",
    "example": "A regulation takes effect in every member state at the same time."
  },
  {
    "word": "transpose",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "to turn an EU directive into national law",
    "example": "Member states have two years to transpose the directive."
  },
  {
    "word": "treaty",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "neutral",
    "definition": "a formal written agreement between countries",
    "example": "The countries signed a treaty to protect the river."
  },
  {
    "word": "ratify",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "to formally approve a treaty or agreement so that it becomes binding",
    "example": "Parliament voted to ratify the treaty.",
    "noun": "ratification"
  },
  {
    "word": "commutation",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "the reduction of a punishment to a less severe one",
    "example": "The governor granted a commutation, so the death sentence became life in prison.",
    "verb": "commute"
  },
  {
    "word": "commute",
    "pos": "verb",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "to change a punishment to a less severe one",
    "example": "The president decided to commute the prisoner's sentence to ten years.",
    "noun": "commutation"
  },
  {
    "word": "secular",
    "pos": "adjective",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "not connected with religion",
    "example": "Most modern states have a secular legal system, even if some religious rules apply to family matters."
  },
  {
    "word": "reconciliation",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "restoring a friendly relationship between people after a dispute",
    "example": "Customary law often aims at reconciliation, not punishment."
  },
  {
    "word": "annulment",
    "pos": "noun",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "an official declaration that a marriage was never legally valid",
    "example": "The church tribunal granted an annulment.",
    "verb": "annul",
    "pron": "/əˈnʌlmənt/"
  },
  {
    "word": "canon law",
    "pos": "noun phrase",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "the internal law of the Catholic Church",
    "example": "Canon law governs priests, sacraments and church property."
  },
  {
    "word": "personal law",
    "pos": "noun phrase",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "law that applies to people because of their religion or community, wherever they are",
    "example": "Under personal law, a couple may marry and divorce according to their own religion."
  },
  {
    "word": "territorial law",
    "pos": "noun phrase",
    "topics": [
      "law systems"
    ],
    "level": "academic",
    "definition": "law that applies to everyone inside a particular territory",
    "example": "Territorial law applies to everyone inside a country's borders, whatever their religion."
  },
  {
    "word": "in contrast to",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "used to show that two things are very different",
    "example": "In contrast to civil law, common law gives the parties control of the process.",
    "replaces": [
      "but"
    ],
    "synonyms": [
      "unlike",
      "as opposed to"
    ]
  },
  {
    "word": "unlike",
    "pos": "preposition",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "different from",
    "example": "Unlike a civil law judge, a common law judge does not lead the investigation.",
    "replaces": [
      "but"
    ]
  },
  {
    "word": "similarly",
    "pos": "adverb",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "in the same way",
    "example": "Similarly, both systems have courts of appeal.",
    "replaces": [
      "also"
    ],
    "synonyms": [
      "likewise"
    ]
  },
  {
    "word": "compared to",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "when you consider one thing next to another",
    "example": "Compared to civil law, common law relies more on precedent.",
    "synonyms": [
      "in comparison with"
    ]
  },
  {
    "word": "in comparison with",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "used to show how one thing is different from or similar to another",
    "example": "In comparison with a bench trial, a jury trial can take much longer.",
    "synonyms": [
      "compared to"
    ]
  },
  {
    "word": "denote",
    "pos": "verb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "to be the exact meaning of a term",
    "example": "Lawyers use the word tort to denote a civil wrong.",
    "replaces": [
      "means"
    ],
    "synonyms": [
      "signify"
    ]
  },
  {
    "word": "signify",
    "pos": "verb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "to mean or show something, often a deeper meaning",
    "example": "A guilty plea can signify that the defendant accepts responsibility.",
    "replaces": [
      "means"
    ],
    "synonyms": [
      "denote"
    ]
  },
  {
    "word": "imply",
    "pos": "verb",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "to suggest something without saying it directly",
    "example": "Silence does not always imply agreement.",
    "replaces": [
      "means"
    ],
    "synonyms": [
      "suggest"
    ]
  },
  {
    "word": "entail",
    "pos": "verb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "to involve something as a necessary part or result",
    "example": "Filing an appeal does not entail a new trial.",
    "replaces": [
      "means"
    ],
    "synonyms": [
      "involve"
    ]
  },
  {
    "word": "amount to",
    "pos": "phrasal verb",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "to be the same as something in effect",
    "example": "Refusing a fair hearing would amount to a denial of justice.",
    "replaces": [
      "means"
    ]
  },
  {
    "word": "tantamount",
    "pos": "adjective",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "equal in effect to something bad or serious",
    "example": "Ignoring a court order is tantamount to contempt of court.",
    "pron": "/ˈtæntəmaʊnt/",
    "replaces": [
      "means"
    ]
  },
  {
    "word": "boil down to",
    "pos": "phrasal verb",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "to be the main point once everything else is removed",
    "example": "Most legal arguments boil down to one question: who must prove the claim?",
    "replaces": [
      "basically"
    ],
    "synonyms": [
      "come down to"
    ]
  },
  {
    "word": "in effect",
    "pos": "phrase",
    "topics": [
      "conversational"
    ],
    "level": "academic",
    "definition": "in practice, even if not officially",
    "example": "A ruling that courts always follow is, in effect, a precedent.",
    "replaces": [
      "basically"
    ],
    "synonyms": [
      "in practice"
    ]
  },
  {
    "word": "refer to",
    "pos": "phrasal verb",
    "topics": [
      "conversational"
    ],
    "level": "neutral",
    "definition": "to be about or to mean a particular thing",
    "example": "Lawyers use the word jurisdiction to refer to a court's area of authority.",
    "replaces": [
      "means"
    ]
  }
]
