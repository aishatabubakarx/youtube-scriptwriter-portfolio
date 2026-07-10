var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_dotenv = __toESM(require("dotenv"), 1);

// server/scriptsData.ts
var initialScripts = [
  {
    id: "docu-1",
    title: "How Salt Built (and Destroyed) Empires",
    niche: "Documentary",
    duration: "22:15",
    wordCount: 3120,
    ctr: "11.2%",
    avd: "74.8%",
    description: "A deep dive into how a simple white mineral governed global trade, financed the Great Wall of China, sparked the French Revolution, and why modern society takes it for granted.",
    thumbnailUrl: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=1200",
    targetAudience: "History buffs, economic curiosity, documentary enthusiasts (Vox/Johnny Harris style)",
    pacingStyle: "Measured, cinematic, episodic with dramatic crescendo",
    storytellingFramework: "The Secret Commodity Pattern (Unveiling the extraordinary behind the ordinary)",
    hookRetentionSecret: "Visual transition from a simple kitchen salt shaker to a bloody ancient Roman battlefield, with custom map overlay",
    sections: [
      {
        chapter: "00:00 - The White Gold Hook",
        timestamp: "00:00",
        visual: "Macro close-up shot of salt crystals falling from a rustic shaker in ultra slow-motion (120fps). The background is a sleek, black kitchen. Camera pans down to match the grain's fall, dissolving seamlessly into a dusty Roman battlefield with marching legionnaires. Overlay: 'THE MINERAL THAT BUILT ROME'. SFX: Wind blowing, marching boots, dramatic orchestral swell.",
        audio: "[NARRATOR - Intense, conversational] Take a look at your kitchen counter. That tiny bottle of salt. If you were born 2,000 years ago, you wouldn't just cook with it. You would kill for it. Soldiers in the Roman Empire were paid in it\u2014literally where the word 'salary' comes from. But how did a simple mineral, something we get for free at fast food joints, become the single most powerful geopolitical weapon on Earth? And how did its scarcity spark revolutions that completely remapped the globe? Let's trace the white gold.",
        pacing: "Fast, high-contrast visual cuts"
      },
      {
        chapter: "02:15 - Chapter 1: The Currency of Survival",
        timestamp: "02:15",
        visual: "3D map of the ancient world. Highlighted routes crossing the Sahara desert and connecting Venice to Central Europe. Bold typography: 'THE SALT ROADS'. Animations show camel caravans traversing sand dunes. SFX: Wind, camel groans, ambient traditional music.",
        audio: "[NARRATOR - Explanatory, engaging] Before refrigeration, human survival had a massive bottleneck: food preservation. Without salt, meat rots in days. In ancient times, if you lived inland, you were entirely dependent on salt merchants. This created some of the most lucrative trade routes in human history, like the Via Salaria in Italy. In West Africa, salt was so precious it was traded ounce-for-ounce with gold. Imagine carrying a block of salt and being able to buy a palace with it. It wasn't just seasoning; it was literally concentrated survival.",
        pacing: "Educational, steady rhythm"
      },
      {
        chapter: "05:40 - Chapter 2: The Emperor's Monopoly",
        timestamp: "05:40",
        visual: "Stylized parchment-style overlay illustrating the Western Han Dynasty of China. Dynamic diagrams showing state salt mines. Animated bars rise showing government revenue. SFX: Wood block hits, ancient stringed instruments.",
        audio: "[NARRATOR - Analytical, dramatic] In 119 BC, Emperor Wu of Han realized something brilliant\u2014and dangerous. People will complain about taxes on income, but they have to eat salt. By nationalizing the salt mines, the Han dynasty funded their military campaigns, constructed massive border defenses, and laid the foundations of the Great Wall of China. This became the ultimate taxation blueprint. For the next two millennia, state-controlled salt monopolies funded empires from Europe to Asia. But taxing a biological necessity has a dark side. It breeds fury.",
        pacing: "Intense, narrative-driven"
      },
      {
        chapter: "10:10 - Chapter 3: The Spark of Revolution",
        timestamp: "10:10",
        visual: "Cinematic, dark, rainy French street scene. Animated historical drawings of the French peasantry being searched by guard forces. Overlay text: 'Gabelle - The Unjust Salt Tax'. High-contrast black and red color palette. SFX: Thunder crackle, angry shouts, clashing swords.",
        audio: "[NARRATOR - Fast-paced, urgent] Enter 18th-century France. The French crown imposed the 'Gabelle'\u2014an absolute, mandatory salt tax. Every citizen over eight years old was legally required to buy a certain amount of salt every week, taxed at an outrageous premium. Smuggling salt became a capital crime. The King's guards had the right to enter peasant homes, searching for illegal, untaxed salt. Over 3,000 citizens were executed or sent to galley ships annually just for salt smuggling. This tax didn't just bankrupt the peasants; it humiliated them. When the Bastille fell in 1789, one of the very first things the revolutionaries did was abolish the Gabelle. Salt had lit the fuse of the French Revolution.",
        pacing: "Suspenseful, high-energy"
      },
      {
        chapter: "14:30 - Chapter 4: The Salt March that Shook an Empire",
        timestamp: "14:30",
        visual: "Historical black-and-white archival footage of Mahatma Gandhi walking alongside thousands of Indians. The visuals slowly transition to color, highlighting the vast Arabian Sea. Map overlay tracing the 240-mile route from Sabarmati to Dandi. SFX: Footsteps on gravel, crowd singing, ocean waves crashing.",
        audio: "[NARRATOR - Solemn, inspiring] A century later, on the other side of the world, another empire made the same mistake. The British Raj outlawed local salt harvesting in India, forcing Indians to buy imported, heavily taxed British salt. In March 1930, a 61-year-old Mahatma Gandhi began a simple 240-mile walk to the coast. His weapon? A handful of muddy salt crystals. On April 6, Gandhi reached the ocean, bent down, and boiled seawater to make salt. He declared: 'With this, I am shaking the foundations of the British Empire.' This simple, non-violent act of defiance galvanized 300 million people, showing that control over basic life resources is the ultimate line an occupier cannot cross.",
        pacing: "Inspiring, paced, epic"
      },
      {
        chapter: "19:00 - Chapter 5: The Forgotten Miracle",
        timestamp: "19:00",
        visual: "Transition back to modern high-end supermarkets. Rows of various salt types: Himalayan Pink, Kosher, Celtic Sea Salt, Maldon, and standard iodized salt. Slow panning close-up of a cheap, blue box of table salt. SFX: Upbeat, modern electronic acoustic fusion.",
        audio: "[NARRATOR - Thoughtful, grounding] Today, salt is so cheap we throw it on icy sidewalks. We've conquered the bottleneck of preservation with electricity and cold chains. But we also engineered a silent health miracle. In the 1920s, governments began mixing iodine into salt. This simple, cheap public health initiative almost instantly wiped out goiters and boosted children's IQs globally. From ancient battlefields to modern public health, salt is the silent programmer of human civilization.",
        pacing: "Resolving, calm, forward-looking"
      },
      {
        chapter: "21:00 - Conclusion & Outro",
        timestamp: "21:00",
        visual: "Back to the kitchen setting. The narrator holds a salt shaker, lets a tiny pinch fall into a boiling pot of pasta. Sleek end-screen cards appear showing other historical scripts. Subscriptions button animated in the center. SFX: Outro theme music fades in.",
        audio: "[NARRATOR - Warm, call-to-action] The next time you season your food, remember: you are holding the currency of empires, the spark of bloody revolutions, and the chemical foundation of human survival. If you enjoyed this journey through hidden histories, hit that subscribe button, leave a comment about which commodity we should unpack next, and I'll see you in the next documentary.",
        pacing: "Engaging, conversational, friendly"
      }
    ]
  },
  {
    id: "health-1",
    title: "The Dopamine Loop: Why You're Always Tired",
    niche: "Health & Longevity",
    duration: "15:30",
    wordCount: 3080,
    ctr: "12.5%",
    avd: "68.9%",
    description: "A biologically accurate, visual analysis of how digital overstimulation is draining your daily energy reserves, and the exact protocol to rebuild your focus baseline.",
    thumbnailUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1200",
    targetAudience: "Self-improvement, productivity seekers, tech workers experiencing burnout",
    pacingStyle: "Scientific yet highly accessible, rhythmic, relatable",
    storytellingFramework: "Problem-Agitate-Solve with a personal narrative hook",
    hookRetentionSecret: "Using an animated cellular level visual showing a receptor burning out under a literal 'dopamine flood'",
    sections: [
      {
        chapter: "00:00 - The Morning Trap Hook",
        timestamp: "00:00",
        visual: "Close-up of a smartphone screen lighting up in a pitch-black room at 6:00 AM. A hand reaches out, eyes bloodshot, scrolling endlessly through rapid-cut video feeds. A brain icon overlays the screen, flashing hot red. SFX: Harsh alarm buzz, rapid mechanical digital clicking, high-frequency hum.",
        audio: "[NARRATOR - Relatable, quiet, punchy] You wake up. You haven't even taken a single step out of bed, yet you reach for your phone. Ten minutes of scrolling later, you feel... heavy. Exhausted. Like your battery is at 20% before your day has even started. This isn't laziness. It's a bio-chemical hijack. Today, we are uncovering the hidden science of Dopamine Burnout, why your phone is literally stealing your physical energy, and the neuro-hacking protocol to reclaim your focus.",
        pacing: "Fast, relatable, claustrophobic visual framing"
      },
      {
        chapter: "01:45 - Chapter 1: The Misunderstood Molecule",
        timestamp: "01:45",
        visual: "3D animation of a synapse. Neurotransmitters jumping across the gap. Graphs showing pleasure vs. motivation curves. Clear typography: 'MOTIVATION, NOT PLEASURE'. SFX: Soft molecular whooshes, chime triggers.",
        audio: "[NARRATOR - Scientific, clear] First, let's bust a massive myth. Dopamine is not the molecule of pleasure. It's the molecule of anticipation. It's the chemical whisper that says: 'Hey, look over there, something good is about to happen.' In nature, dopamine was designed to make you search for berries or pursue a mate. It's the engine of effort. But there's a catch: dopamine operates on a baseline. When you experience a massive spike, your brain immediately compensates with an equal and opposite crash. And in the modern world, those spikes are artificial and unending.",
        pacing: "Educational, explanatory"
      },
      {
        chapter: "04:20 - Chapter 2: The Silent Overstimulation",
        timestamp: "04:20",
        visual: "Split-screen comparing ancient human activities (hunting, reading under a tree) vs. modern activities (triple-screening, gaming, notifications). Overlaid meter showing 'Dopamine Units' spiking out of control. SFX: Sound of slot machines, digital chime notifications in rapid succession.",
        audio: "[NARRATOR - Agitating, logical] Think about your daily stimuli. A short video feed offers a random reward every 5 seconds. A video game rewards you with digital badges. High-sugar snacks trigger evolutionary cravings. Your brain was evolved to handle occasional, natural spikes. Now, it is bathing in a firehose of dopamine. To survive this neurological flood, your brain does something drastic: it down-regulates. It literally burns away or hides its own dopamine receptors. When your receptors are gone, normal life activities feel painfully boring, and your baseline energy crashes. You are always tired because your brain is deaf to its own reward signals.",
        pacing: "Accelerated, high-tension"
      },
      {
        chapter: "08:15 - Chapter 3: The Energy Connection",
        timestamp: "08:15",
        visual: "3D model of the human brain highlighting the prefrontal cortex and the adrenal glands. Energy level meter drops from full to empty. Highlight on the molecule: 'Adenosine'. SFX: Heartbeat, low-frequency hum.",
        audio: "[NARRATOR - Explanatory, clinical] How does mental stimulation turn into physical fatigue? When your dopamine baseline is low, your prefrontal cortex\u2014the decision-making center\u2014has to work twice as hard to maintain focus. This increases mental friction, which translates to massive stress, elevated cortisol, and physical exhaustion. You aren't tired because your muscles are weak; you are tired because your neurological drive is depleted. It's like driving a car with a slipping clutch\u2014you are revving the engine, but none of the power is reaching the wheels.",
        pacing: "Deep, analytical"
      },
      {
        chapter: "11:30 - Chapter 4: Rebuilding the Baseline",
        timestamp: "11:30",
        visual: "Clean, minimalist, soothing nature background. Soft green and beige tones. Timeline infographics showing a 24-hour, 7-day, and 30-day dopamine reset program. Clear bullet points appear on screen. SFX: Water flowing, soft acoustic guitar.",
        audio: "[NARRATOR - Authoritative, encouraging] So, how do we fix it? You don't need to live in a cave. You need a structured neuro-reset. First, the 'Golden Hour' rule: No screens for the first 60 minutes of your day. This prevents your brain from setting an impossibly high dopamine ceiling early on. Second, practice high-friction environments\u2014put blocking apps on your phone. Third, embrace deliberate boredom. Let your mind wander while walking or doing dishes. This allows your brain to grow back those precious receptors, lowering your focus threshold and permanently restoring your daily energy reserves.",
        pacing: "Calm, structured, empowering"
      },
      {
        chapter: "14:10 - Conclusion & Reclaim Protocol",
        timestamp: "14:10",
        visual: "The morning scene again, but this time, the phone is in a drawer. The person is looking out a window, enjoying a warm cup of water, calm and smiling. High-converting subscribe graphic appears. SFX: Soothing swell of positive strings.",
        audio: "[NARRATOR - Warm, personal] Reclaiming your energy isn't about working harder; it's about wanting less. It's about protecting your biological temple from digital hijack. Start tonight by placing your phone across the room. If you want more bio-backed guides to taking back your life, subscribe to the channel, and let me know in the comments how your first screen-free morning went. Stay focused.",
        pacing: "Friendly, resolving, call-to-action"
      }
    ]
  },
  {
    id: "food-1",
    title: "The Dark History of the World's Most Expensive Spice",
    niche: "Food & Culinary Secrets",
    duration: "18:20",
    wordCount: 3010,
    ctr: "10.8%",
    avd: "71.2%",
    description: "An investigative culinary journey into the blood, wars, and corporate espionage that surrounded the humble nutmeg seed, which was once worth more than its weight in gold.",
    thumbnailUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=1200",
    targetAudience: "Foodies, history enthusiasts, crime/corporate mystery lovers",
    pacingStyle: "Mysterious, dark, cinematic, investigative",
    storytellingFramework: "The Heist & Monopoly Structure",
    hookRetentionSecret: "Opening with a high-stakes trade of an entire island for a tiny handful of seeds",
    sections: [
      {
        chapter: "00:00 - The Royal Exchange Hook",
        timestamp: "00:00",
        visual: "Sleek close-up of a dusty, hand-carved wooden chest opening. Inside, laying on velvet, is a single wrinkled nutmeg seed. Visual transitions to a 17th-century parchment treaty. Overlay: 'NUTMEG FOR MANHATTAN'. SFX: Creaking wood, cinematic brass hit, wind whispering.",
        audio: "[NARRATOR - Mysterious, theatrical] In 1667, the British and the Dutch signed a treaty that would seem completely insane today. The British agreed to trade a small, volcanic island in the East Indies, covered in dense jungle, in exchange for a tiny, marshy island on the other side of the world held by the Dutch. That marshy island? Manhattan. And the jungle island? Run Island, the only place on earth where a highly coveted spice grew. This is the story of how nutmeg\u2014the seed you sprinkle on eggnog\u2014sparked a bloody, international corporate war, funded the Dutch Golden Age, and changed the map of New York forever.",
        pacing: "Intense, theatrical, highly visual"
      },
      {
        chapter: "02:30 - Chapter 1: The Spice of Immortality",
        timestamp: "02:30",
        visual: "Graphic animations of medieval plague doctors wearing bird-like masks. Visuals of wealthy merchants sniffing small lockets containing spices. Rich, dark, atmospheric colors. SFX: Flies buzzing, low church bells tolling.",
        audio: "[NARRATOR - Dark, narrative] To understand why nutmeg was so valuable, we have to go back to 14th-century Europe. The Black Death was wiping out entire cities. Physicians had no idea how it spread, but they believed bad smells carried the plague. Nutmeg, with its pungent, aromatic scent, became the ultimate status symbol of protection. Rich noblemen wore little nutmeg graters around their necks, grating it onto everything they ate. Rumors spread that nutmeg was the only cure for the plague. Overnight, a bag of nutmeg in London could buy a life-long estate, an entire ship, or hundreds of livestock. It was a golden ticket.",
        pacing: "Eerie, slow, atmospheric"
      },
      {
        chapter: "05:50 - Chapter 2: The Secret Archipelago",
        timestamp: "05:50",
        visual: "Vibrant drone footage of beautiful, lush volcanic islands surrounded by turquoise water. Animated old map zooming in on the Banda Islands in Indonesia. Visuals of tall nutmeg trees. SFX: Ocean waves, tropical birds, soft wooden flute.",
        audio: "[NARRATOR - Exotic, historical] But there was a massive problem: no European knew where it actually came from. Nutmeg only grew in one highly specific, hyper-isolated spot: the Banda Islands, an active volcanic archipelago in the far corner of Indonesia. For centuries, Arab, Indian, and Chinese traders kept the coordinates a closely guarded secret. Ships sailed into the unknown, many never returning. When Portuguese explorer Afonso de Albuquerque finally cracked the secret in 1512, he didn't just find spices\u2014he found the key to unlimited global wealth.",
        pacing: "Adventurous, sweeping"
      },
      {
        chapter: "09:20 - Chapter 3: The Bloody Monopoly",
        timestamp: "09:20",
        visual: "Stylized drawings of the Dutch East India Company (VOC) fleet. The VOC logo appearing over historic blood splatters. Animated battle lines. Overlay: 'THE VOC - THE WORLD'S DEADLIEST CORPORATION'. SFX: Cannon fire, muskets, chaotic screams.",
        audio: "[NARRATOR - Grave, shocking] In the early 1600s, the Dutch East India Company\u2014or VOC\u2014arrived in Banda with a singular, ruthless goal: an absolute monopoly. Under the command of Governor-General Jan Pieterszoon Coen, the Dutch executed almost the entire indigenous Bandanese population of 15,000 people, replacing them with company-run plantations worked by slaves. If anyone was caught growing or selling nutmeg outside VOC control, the punishment was death. To prevent nutmeg from being grown elsewhere, they soaked every exported seed in lime juice so it couldn't germinate. Nutmeg was now a monopoly baptized in blood.",
        pacing: "High conflict, grim tone"
      },
      {
        chapter: "13:40 - Chapter 4: The Manhattan Swap",
        timestamp: "13:40",
        visual: "High-contrast split screen: One side shows a misty, cold Manhattan island in 1660 with wooden cabins. The other side shows a tropical volcano island. Visual transitions to a signatures sheet of the Treaty of Breda. SFX: Quill scratching on paper, birds, waves.",
        audio: "[NARRATOR - Ironical, engaging] But the British had managed to seize one tiny island in the Banda group: Run Island. For years, they harassed Dutch trade. Exhausted by the conflict, the two powers signed the Treaty of Breda. The Dutch gave up Manhattan, allowing the British to rename it New York. In return, the British surrendered Run Island, giving the Dutch their complete, unblemished nutmeg monopoly. At the time, the Dutch thought they had won the trade of the century. Manhattan was just a cold fur-trading post; Run Island was a literal money press.",
        pacing: "Fast, ironic, witty"
      },
      {
        chapter: "16:10 - Chapter 5: The Ultimate Spiced Espionage",
        timestamp: "16:10",
        visual: "Drawings of a French horticulturist sneaking onto Banda at night, stuffing seeds into his pockets. Animated ship escaping across the ocean. Visuals of nutmeg trees blooming in Mauritius. SFX: Sneaking footsteps, dramatic ticking, ocean breeze.",
        audio: "[NARRATOR - Suspenseful, upbeat] But monopolies never last. In 1769, a French missionary and horticulturist named Pierre Poivre\u2014yes, Peter Pepper\u2014executed one of the greatest acts of agricultural espionage in history. He smuggled nutmeg seedlings out of the Banda Islands under the nose of Dutch warships, successfully planting them in Mauritius. Within decades, nutmeg plantations spread across the French and British colonies, including Grenada. The Dutch monopoly shattered, prices collapsed, and nutmeg transformed from a royal luxury into a common household spice.",
        pacing: "Triumphant, fast-paced"
      },
      {
        chapter: "17:30 - Outro & Visual CTA",
        timestamp: "17:30",
        visual: "Back to a modern kitchen. The narrator grates a fresh nutmeg over a hot latte. Zoom-out to show subscribing visuals and other culinary history videos. SFX: Smooth jazz/acoustic outro fades in.",
        audio: "[NARRATOR - Warm, reflective] The next time you smell that sweet, earthy scent of nutmeg, remember: you are tasting a spice that was bought with the blood of thousands, traded for the island of Manhattan, and smuggled by a man named Peter Pepper. If you love the hidden, dark histories of what we eat, hit subscribe, leave a comment with your favorite spice, and I'll see you in the next culinary investigation.",
        pacing: "Soothing, friendly, concluding"
      }
    ]
  },
  {
    id: "finance-1",
    title: "The Fall of the $40B Coworking Empire",
    niche: "Finance & Business",
    duration: "19:10",
    wordCount: 3150,
    ctr: "10.1%",
    avd: "73.1%",
    description: "An analytical autopsy of the rise and spectacular collapse of WeWork, examining the psychological manipulation of venture capital, charismatic leadership, and real estate reality.",
    thumbnailUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
    targetAudience: "Business students, entrepreneurs, startup founders, finance lovers",
    pacingStyle: "Slick, analytical, fast-paced, high-society corporate vibe",
    storytellingFramework: "The Icarus Paradigm (Charismatic hubris meets market gravity)",
    hookRetentionSecret: "Opening with a dynamic screen split showing the founder's crazy party life on a private jet alongside the real bankruptcy filing papers",
    sections: [
      {
        chapter: "00:00 - The Cult of Adam Hook",
        timestamp: "00:00",
        visual: "Vibrant slow-motion shot of a massive crowd of millennial workers cheering, tequila shots flowing, neon lights blinking. The central figure is a tall man with long hair, screaming into a mic. Suddenly, a record scratch, screen turns grayscale, and bankruptcy papers drop with a stamp: 'CHAPTER 11'. SFX: Loud upbeat party music abruptly cut, paper shuffling, digital buzz.",
        audio: "[NARRATOR - Fast, high-energy, cynical] He convinced the smartest investors on Earth that a real estate sublease company was a 'tech revolutionary' that would 'elevate the world's consciousness.' At his peak, Adam Neumann's company, WeWork, was valued at forty-seven billion dollars. He flew in private gulfstreams, did shots of tequila during board meetings, and leased buildings he personally owned back to his own company. And then, in just thirty days, it all went to zero. How did a company that rented desks pull off the greatest valuation heist in Silicon Valley history? Let's look at the numbers.",
        pacing: "Rapid-fire visual pacing, slick modern styling"
      },
      {
        chapter: "02:15 - Chapter 1: The Tech Lie",
        timestamp: "02:15",
        visual: "Slick animated infographics. Renting a building on long-term lease vs. subleasing on short-term. Comparison graph between WeWork and traditional real estate firms like IWG/Regus. WeWork's multiple is 10x higher. SFX: Sound of keys tapping, chart lines sweeping upwards.",
        audio: "[NARRATOR - Sharp, analytical] In finance, the business model matters. WeWork was doing something very old: buying real estate wholesale and renting it retail. Regus had been doing this for decades, valued at a modest 1x revenue. But Adam realized that real estate multiples are boring. Tech multiples, however, are astronomical. So, WeWork rebranded. They weren't a real estate company; they were a 'physical social network.' They didn't have offices; they had 'community hubs.' This simple semantic pivot allowed them to raise money at tech valuations, convincing SoftBank's Masayoshi Son to dump billions into their lap.",
        pacing: "Intellectual, numeric, clean"
      },
      {
        chapter: "05:30 - Chapter 2: The Masayoshi Son Bet",
        timestamp: "05:30",
        visual: "Dramatic black-and-white photos of Masayoshi Son and Adam Neumann. Text highlight: '$4.4 Billion in 12 minutes'. Animated line showing SoftBank's Vision Fund pouring capital. SFX: Deep synth bass swell, heavy thud.",
        audio: "[NARRATOR - Dramatic, high-stakes] In 2016, Masayoshi Son, the legendary head of SoftBank, met Adam. The meeting lasted exactly twelve minutes. Masa told Adam: 'You are not being crazy enough. In a fight between a smart guy and a crazy guy, the crazy guy wins.' Masa handed him a commitment for billions. This unlimited war chest allowed WeWork to grow at all costs. They signed leases at record-breaking prices, squeezed out competitors, and offered free beer and absolute luxury to renters. But there was a structural flaw. The faster WeWork grew, the more money it lost.",
        pacing: "Tense, building pressure"
      },
      {
        chapter: "09:40 - Chapter 3: The S-1 Disaster",
        timestamp: "09:40",
        visual: "Close-up of the official SEC S-1 filing document. Key quotes highlighted in glowing yellow: 'Our mission: to elevate the world's consciousness.' Infographics showing WeWork losing $219,000 every single hour. SFX: Siren, fast typing, laughter.",
        audio: "[NARRATOR - Humorous, critical] In August 2019, WeWork prepared to go public and filed its S-1 document. Wall Street analysts opened the file expecting a tech company. Instead, they found a spiritual cult pamphlet. The document opened with: 'We dedicate this to the energy of we.' Even worse, the financial disclosures were terrifying. WeWork had forty-seven billion in long-term lease liabilities, but only four billion in committed revenue. Adam had also trademarked the word 'We' and charged his own company six million dollars to buy it from him. The market took one look, and the valuation collapsed from forty-seven billion to less than eight billion in weeks.",
        pacing: "Fast-paced, satirical, informative"
      },
      {
        chapter: "13:50 - Chapter 4: The Golden Parachute",
        timestamp: "13:50",
        visual: "Visual of a private jet flying off into the sunset. Overlay: 'Adam's Exit: $1.7 Billion'. Cut to images of laid-off employees carrying boxes out of WeWork offices. Color grading turns cold and gloomy. SFX: Jet engine roaring, office door closing.",
        audio: "[NARRATOR - Sarcastic, somber] As the IPO collapsed, the board realized Adam had to go. But he had total voting control. To get him to leave, SoftBank had to pay him a staggering one point seven billion dollars. Let that sink in. The founder who led the company to the brink of ruin walked away a billionaire, while thousands of employees who had been paid in worthless stock options were laid off with zero severance. It was the ultimate corporate tragedy. WeWork eventually went bankrupt in 2023, leaving landlords with empty skyscrapers and investors with monumental losses.",
        pacing: "Heavy, slow, emotional contrast"
      },
      {
        chapter: "17:10 - Conclusion: The Era of Easy Money",
        timestamp: "17:10",
        visual: "Transition back to modern co-working space. Abstract 3D graphic showing interest rate curves. A final summary checklist of the lessons learned. SFX: Modern electronic beat resolves.",
        audio: "[NARRATOR - Refined, final] WeWork wasn't just one man's delusion; it was the mascot of a decade of zero interest rates. When capital is free, storytellers are kings, and reality is an afterthought. But eventually, gravity always wins. If you want to understand how the business world really works behind the hype, subscribe to this channel, hit the like button, and let me know in the comments: would you ever work in a WeWork? See you in the next breakdown.",
        pacing: "Polished, resolving"
      }
    ]
  },
  {
    id: "tech-1",
    title: "The Sovereign Chip: The War for Taiwan's Silicon",
    niche: "Tech & Geopolitics",
    duration: "20:45",
    wordCount: 3090,
    ctr: "11.5%",
    avd: "75.4%",
    description: "A comprehensive investigation into TSMC, the extreme physics of EUV lithography, and why the entire global economy relies on a single 100-mile stretch of land.",
    thumbnailUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
    targetAudience: "Tech enthusiasts, geopolitics followers, national security professionals",
    pacingStyle: "High-tech, tense, cinematic, highly detailed",
    storytellingFramework: "The Single Point of Failure (Analyzing a fragile global node)",
    hookRetentionSecret: "Opening with a tactical simulation showing the instant collapse of the global car and phone industry if one single factory stops working",
    sections: [
      {
        chapter: "00:00 - The Fragile Shield Hook",
        timestamp: "00:00",
        visual: "Cinematic macro lens sliding across a microscopic silicon wafer under intense blue laser light. Transition to an aerial military drone shot of the Taiwan Strait. Red target rings flash around a single building marked 'TSMC Fab 18'. SFX: High-tech digital scanning beep, jet hum, dramatic bass drop.",
        audio: "[NARRATOR - Tense, authoritative] If an earthquake or a war were to strike one specific 100-mile stretch of coastline in Taiwan tomorrow, the entire global economy would grind to a screeching halt within seventy-two hours. No new cars would roll off assembly lines. Your smartphone, your medical equipment, your cloud servers\u2014even the navigation systems of advanced fighter jets\u2014would cease production. We are not dependent on oil anymore. We are dependent on a tiny, fragile slice of silicon. Welcome to the war for the sovereign chip.",
        pacing: "Fast, tense, high-stakes"
      },
      {
        chapter: "02:15 - Chapter 1: The Silicon Shield",
        timestamp: "02:15",
        visual: "3D map of Taiwan, highlighting Hsinchu Science Park. Animated logistics lines radiating outwards to Apple, Nvidia, AMD, and Intel. Dynamic text: 'TSMC - 92% of Advanced Chips'. SFX: Data humming, signal whoosh.",
        audio: "[NARRATOR - Analytical, deep] At the heart of this geopolitical standoff is a single company: TSMC. Founded in 1987 by Morris Chang, TSMC pioneered the 'foundry' model\u2014they don't design chips, they only manufacture them for others. Today, they manufacture over ninety percent of the world's most advanced microchips. This has created what Taiwan calls its 'Silicon Shield.' The world cannot afford to let Taiwan fall, because if TSMC goes offline, the global economy collapses. But why can't the US or Europe just build their own TSMC?",
        pacing: "Steady, explanatory"
      },
      {
        chapter: "05:40 - Chapter 2: Shaving Atoms",
        timestamp: "05:40",
        visual: "Highly stylized 3D animation showing a droplet of molten tin falling, being hit by a high-power CO2 laser twice to create EUV light. Zoom-in to show the silicon wafer being etched at a 3-nanometer scale. SFX: High-pitched laser charging sound, sharp electric crackle.",
        audio: "[NARRATOR - Scientific, dramatic] The answer lies in the extreme physics of modern manufacturing. To print features on a chip that are just three nanometers wide\u2014the width of a single DNA strand\u2014you need a machine called an EUV Lithography system. These machines are built by a single Dutch company called ASML. Each machine costs two hundred million dollars, is the size of a double-decker bus, and contains hundreds of thousands of individual parts, including mirrors polished to a smoothness where, if expanded to the size of Germany, the highest bump would be less than a millimeter. It is the most complex machine humanity has ever created. And TSMC is the undisputed master of operating them.",
        pacing: "Fast, visual-heavy, high contrast"
      },
      {
        chapter: "09:50 - Chapter 3: The Geopolitical Standoff",
        timestamp: "09:50",
        visual: "Split-screen: Naval exercises in the South China Sea on one side; US Capitol Hill semiconductor debates on the other. Red and blue animated tactical map. Text: 'CHIPS ACT - $52 Billion'. SFX: Military radio chatter, news broadcast snippets.",
        audio: "[NARRATOR - Serious, geopolitical] This extreme concentration of technological capability has sparked a high-stakes chess match between Washington and Beijing. The United States realizes its dependency is a critical national security vulnerability. Under the CHIPS Act, they are pouring fifty-two billion dollars into building advanced fabs in Arizona. But TSMC's Taiwan factories have a secret ingredient: a hyper-dense ecosystem of local suppliers, engineers who work 24/7, and decades of collective muscle memory. Replicating this ecosystem thousands of miles away is proving to be incredibly difficult.",
        pacing: "Paced, tense"
      },
      {
        chapter: "14:10 - Chapter 4: The Physics Wall",
        timestamp: "14:10",
        visual: "3D chart illustrating Moore's Law plateauing. Visuals showing quantum tunneling (electrons escaping thin silicon gates). Animation of new 3D transistor architectures (GAAFET). SFX: Digital static, glitch effects.",
        audio: "[NARRATOR - Explanatory, futuristic] Beyond politics, the industry faces an even bigger enemy: the laws of physics. We are reaching the physical limits of how small a transistor can be. At one nanometer, electrons begin to jump across barriers due to quantum tunneling\u2014making the switches useless. To keep progress alive, TSMC is forced to pioneer entirely new 3D stacking architectures and alternative materials. The company that solves these physics limitations first will control the computing power of the next century.",
        pacing: "Intense, futuristic"
      },
      {
        chapter: "18:20 - Conclusion: The New Gold",
        timestamp: "18:20",
        visual: "A high-end cleanroom technician looking into a camera. The blue light reflects off their visor. End-screen transitions, highlighting subscription options and technical geopolitics playlists. SFX: Sleek ambient synth outro.",
        audio: "[NARRATOR - Solemn, direct] In the 20th century, empires fought over oil fields. In the 21st century, the battle is fought over cleanrooms, lasers, and atomic-scale mirrors. The country that controls the silicon controls the future. If you want to stay ahead of the technology curve and understand the forces shaping our world, subscribe to this channel, hit that like button, and let me know: do you think the US can successfully duplicate Taiwan's silicon miracle? I'll see you in the comments.",
        pacing: "Polished, confident, resolving"
      }
    ]
  },
  {
    id: "history-1",
    title: "The Lost City Beneath the Sahara Desert",
    niche: "History & Mysteries",
    duration: "21:30",
    wordCount: 3110,
    ctr: "11.9%",
    avd: "76.1%",
    description: "An archaeological investigation combining satellite imagery, climate science, and ancient texts to reveal how a lush, green Sahara home to lost civilizations dried up in just 1,000 years.",
    thumbnailUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200",
    targetAudience: "History lovers, archaeology enthusiasts, climate mystery fans",
    pacingStyle: "Intriguing, cinematic, exploratory, educational",
    storytellingFramework: "The Lost World / Historical Investigation",
    hookRetentionSecret: "Opening with radar satellite scans showing massive ancient river beds hiding directly under the sand dunes",
    sections: [
      {
        chapter: "00:00 - The Satellite Revelation Hook",
        timestamp: "00:00",
        visual: "Epic drone shot sweeping across endless, burning sand dunes of the Sahara. A digital overlay transitions the screen to blue radar imagery, revealing a massive, winding prehistoric river network deep beneath the sand. Animated city grids appear. SFX: Low wind howl, ancient drum beat, digital scan beep.",
        audio: "[NARRATOR - Captivating, exploratory] Look at the Sahara desert today. Nine million square kilometers of unforgiving, sun-scorched sand. But if you look through the eyes of NASA's radar satellites, the sand completely disappears. Hiding underneath the dunes are massive, dried-up riverbeds, wider than the Nile. Rivers that once flowed through a lush, green grassland filled with megafauna, deep lakes, and... lost human civilizations. How did the world's largest desert transform from a green paradise into a wasteland in a geological blink of an eye? And what did they leave behind?",
        pacing: "Mysterious, sweeping, visual-driven"
      },
      {
        chapter: "02:45 - Chapter 1: The Green Sahara",
        timestamp: "02:45",
        visual: "Beautiful, hand-painted digital re-creations of prehistoric Sahara with lakes, giraffes, and hippos. Archive footage of cave paintings in Tassili n'Ajjer showing people swimming. SFX: Sound of water splashing, bird calls, soft ethnic percussion.",
        audio: "[NARRATOR - Visual, fascinating] Just 6,000 years ago, the Sahara looked like an African savanna. Monsoon rains fell regularly, feeding massive river basins like the Tamanrasset River. This wasn't a local phenomenon\u2014it was the African Humid Period. In the mountain plateaus of modern Algeria, there are thousands of ancient cave paintings depicting a world that seems impossible: men hunting hippos, herding cattle, and even swimming in deep pools. Archaeological digs have unearthed fishhooks, harpoons, and crocodile bones in places where water hasn't flowed for millennia.",
        pacing: "Calm, educational, illustrative"
      },
      {
        chapter: "06:15 - Chapter 2: The Wobble of the Earth",
        timestamp: "06:15",
        visual: "3D astronomical simulation showing the Earth rotating on its axis, highlighting its 23.5-degree tilt. Animation showing how a tiny change in orbit (precession) shifts the monsoon rains. SFX: Deep celestial hum, ticking gears of a clock.",
        audio: "[NARRATOR - Scientific, accessible] Why did this green paradise exist, and why did it die? The answer lies in space. Every 20,000 years, the Earth experiences a slight wobble in its orbital tilt, known as axial precession. This wobble changes the angle of solar radiation hitting the Northern Hemisphere. During the Green Sahara period, warmer northern summers drew massive monsoon winds deep into the African interior. But as the Earth's wobble shifted, the monsoons retreated. The rains stopped. The lakes began to dry. The green world was trapped in a feedback loop of desertification.",
        pacing: "Clear, scientific, educational"
      },
      {
        chapter: "10:30 - Chapter 3: The Garamantes Civilization",
        timestamp: "10:30",
        visual: "3D digital reconstruction of ancient stone fortresses rising from the Libyan desert sand. Animations of complex underground tunnels (foggaras) routing water. Overlay text: 'THE GARAMANTES - THE DESERT MASTERS'. SFX: Wind, iron clashing, heavy machinery.",
        audio: "[NARRATOR - Narrative, epic] As the water vanished, humans didn't just die\u2014they adapted. In modern-day Libya, a mysterious civilization arose around 500 BC: the Garamantes. Instead of fleeing, they conquered the drying desert. They engineered a mind-boggling underground irrigation network, digging thousands of miles of tunnels into the solid rock to tap into prehistoric aquifers deep beneath the Sahara. They built majestic stone cities, grew rich crops, and dominated the trans-Saharan trade. But their civilization relied on non-renewable fossil water. When the deep aquifers ran dry, their empire collapsed, swallowed by the shifting dunes.",
        pacing: "Cinematic, suspenseful"
      },
      {
        chapter: "15:10 - Chapter 4: The Richat Structure Secret",
        timestamp: "15:10",
        visual: "Breathtaking satellite photography zooming in on the 'Eye of the Sahara' (Richat Structure) from space. Topographical maps showing concentric circles of rock. Visual comparison to Plato's description of Atlantis. SFX: Cosmic whoosh, choral voice swell.",
        audio: "[NARRATOR - Intriguing, speculative] Perhaps the most famous geological mystery in the Sahara is the Richat Structure, also known as the Eye of the Sahara. Located in Mauritania, this massive 40-kilometer concentric rock formation looks like an impact crater from space, but is actually a deeply eroded volcanic dome. For decades, alternative historians have pointed out its striking resemblance to Plato's circular description of the lost city of Atlantis. While geologists have debunked the Atlantis myth, the Richat remains a striking monument of a prehistoric era when rushing water carved the face of Africa.",
        pacing: "Tense, highly engaging"
      },
      {
        chapter: "19:00 - Conclusion: The Cycle Returns",
        timestamp: "19:00",
        visual: "Back to the sand dunes at sunset. Dynamic graphics showing the timeline of the next green cycle. High-converting subscribe prompts and educational content recommendations. SFX: Uplifting, epic historical score finishes.",
        audio: "[NARRATOR - Thoughtful, deep] The drying of the Sahara is not permanent. In about 15,000 years, the Earth's orbital wobble will complete its circle, monsoons will return, and the Sahara will turn green once again. The sand will retreat, and the secrets of the ancient empires will be uncovered. Until then, they remain locked beneath a golden sea. If you want to explore more hidden secrets of our planet's past, hit subscribe, like this video, and let me know: would you join an expedition into the deep Sahara? I'll see you next time.",
        pacing: "Ethereal, resolving, friendly"
      }
    ]
  },
  {
    id: "crime-1",
    title: "The Cold War Codebreaker Who Knew Too Much",
    niche: "True Crime & Espionage",
    duration: "18:40",
    wordCount: 3040,
    ctr: "12.1%",
    avd: "70.5%",
    description: "An investigative reconstructive thriller detailing the mysterious disappearance of a top-tier NSA cryptanalyst in 1963, and the highly classified files found in his home.",
    thumbnailUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200",
    targetAudience: "True crime lovers, espionage history buffs, puzzle/mystery solvers",
    pacingStyle: "Tense, investigative, film-noir style pacing",
    storytellingFramework: "The Investigative Puzzle (Unraveling a historical conspiracy)",
    hookRetentionSecret: "Opening with a real audio recording of a decrypted spy cipher alongside an eerie police file snapshot",
    sections: [
      {
        chapter: "00:00 - The Midnight Vanish Hook",
        timestamp: "00:00",
        visual: "Stylized retro 1960s rain-slicked street. A black sedan with headlights on idling next to a telephone booth. A man in a trench coat drops a coin, dials a rotary phone. Cut to static police reports. Overlay: 'CASE FILE: TOP SECRET'. SFX: Rain patter, rotary dial clicking, phone ring, high-pitched encrypted telegraph beeps.",
        audio: "[NARRATOR - Low, intense, dramatic] On the night of October 14, 1963, a top-level NSA codebreaker named Raymond Vance walked out of the agency's headquarters in Fort Meade, Maryland. He didn't say goodbye to his colleagues. He didn't go home to his wife. He simply climbed into his car and drove into a blinding rainstorm. Three days later, his car was found abandoned on a bridge over the Potomac River. His wallet was inside. His keys were in the ignition. But when the FBI searched his home, they didn't find suicide notes. They found something far more terrifying: a stack of decrypted Soviet codes that Vance was never authorized to see. This is the mystery of the NSA's most dangerous mind.",
        pacing: "Suspenseful, retro, highly atmospheric"
      },
      {
        chapter: "02:15 - Chapter 1: The Cryptogram Genius",
        timestamp: "02:15",
        visual: "Retro black-and-white photos of Vance, military cryptology charts, code-breaking machines. Red lines highlighting complex math formulas. SFX: Mechanical typewriter clatter, paper tearing.",
        audio: "[NARRATOR - Informative, dark] Raymond Vance was a mathematical prodigy. Recruited straight out of Princeton at age 22, he was placed in the NSA's most secretive division: 'VENONA'. His job was to break the 'One-Time Pad' ciphers used by Soviet spies in the United States. One-time pads are mathematically unbreakable if used correctly. But the Soviets made a fatal mistake\u2014they reused their pads. Vance exploited this loophole, decrypting thousands of high-level diplomatic cables. He was a hero in the shadows. But as he decoded the cables, he realized something: the Soviet network went far higher into the US government than anyone had ever admitted.",
        pacing: "Measured, fast typewriter animation cuts"
      },
      {
        chapter: "05:40 - Chapter 2: The Double Agent Rumor",
        timestamp: "05:40",
        visual: "Retro filing cabinets opening. Microfiche readers displaying redacted files. Red stamp overlay: 'REDACTED'. High-contrast shadow work. SFX: Metal cabinet sliding, microfiche whirring.",
        audio: "[NARRATOR - Suspenseful, investigative] In early 1963, Vance's behavior changed. He became paranoid, telling his wife he was being followed by 'men in grey suits.' He started working late, copying files onto microfilm in the dark. Colleagues reported that Vance was obsessed with a specific series of intercepts from the Soviet embassy in Washington, codenamed 'ALBATROSS'. The intercepts alluded to a double agent working inside the very heart of the NSA's code-breaking division. Was Raymond Vance hunting the mole\u2014or was he the mole himself?",
        pacing: "Tense, building paranoia"
      },
      {
        chapter: "09:50 - Chapter 3: The Potomac Clue",
        timestamp: "09:50",
        visual: "Atmospheric reconstruction of the Potomac River bridge at night. Headlights shining through fog. A water search operation with dive teams. Graphic maps showing current flow. SFX: River flowing, dive breathing, megaphone sirens.",
        audio: "[NARRATOR - Analytical, chilling] When police found Vance's car on the bridge, the FBI immediately declared it a suicide. Case closed. But the forensic evidence told a completely different story. There were no fingerprints on the steering wheel\u2014not even Vance's. The driver's seat was pushed back for someone much taller than Vance's five-foot-seven frame. And most bizarrely, his tire tracks showed he didn't pull over to the side of the bridge; he was run off the road by another heavy vehicle. Divers searched the cold waters of the Potomac for weeks. They never found a body. Raymond Vance had vanished without a trace.",
        pacing: "Slick forensic recreation, scientific analysis"
      },
      {
        chapter: "13:30 - Chapter 4: The Classified Attic",
        timestamp: "13:30",
        visual: "An attic room under dust-mote lighting. A wooden floorboard being lifted to reveal a metal canister. The canister opens to show microfilms. Overlay of decrypted Soviet cables. SFX: Floorboard creak, metal scraping, suspense swell.",
        audio: "[NARRATOR - Shocking, revealing] Ten years after Vance's disappearance, his wife sold the family home. The new owners, during renovation, lifted a floorboard in the attic and found a military-grade canister. Inside were thirty microfilms. When decrypted, they revealed Vance's final, secret project. He had successfully unmasked the identity of the ALBATROSS mole. It was his own supervisor\u2014the director of the division leading the investigation into his disappearance. Vance was silenced because he had solved the puzzle. But did they kill him, or did he escape?",
        pacing: "Thrilling, high-stakes"
      },
      {
        chapter: "16:40 - Conclusion: The Cipher Lives On",
        timestamp: "16:40",
        visual: "Slow panning across a modern cryptography computer screen showing complex hash keys. Subscribe buttons and true crime/espionage playlists appear on-screen. SFX: Dark synth piano outro fades in.",
        audio: "[NARRATOR - Quiet, solemn] Raymond Vance's body was never found. His supervisor was quietly retired without charges\u2014a common Cold War tactic to avoid public embarrassment. To this day, the Vance file remains one of the NSA's most guarded secrets. Was he a casualty of a shadow war, or did he pull off the ultimate escape? If you want to unpack more cold cases and high-stakes historical mysteries, hit subscribe, turn on notifications, and tell me in the comments what you think really happened on that bridge. Sleep with one eye open.",
        pacing: "Atmospheric, lingering"
      }
    ]
  },
  {
    id: "philo-1",
    title: "Why Boredom is Your Superpower",
    niche: "Philosophy & Mindset",
    duration: "14:15",
    wordCount: 3020,
    ctr: "11.1%",
    avd: "70.2%",
    description: "A philosophical and cognitive defense of silence, analyzing why our constant search for distraction is killing original thought and how to re-train your brain for genius.",
    thumbnailUrl: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1200",
    targetAudience: "Creative thinkers, students, professionals looking for cognitive focus",
    pacingStyle: "Poetic, meditative, intellectually stimulating, calm",
    storytellingFramework: "The Paradox Pattern (Turning a perceived negative into a massive positive)",
    hookRetentionSecret: "Opening with a striking visual of a completely silent, white room with a single red button, and an explanation of why people would rather shock themselves than sit in it",
    sections: [
      {
        chapter: "00:00 - The Electric Shock Hook",
        timestamp: "00:00",
        visual: "Sleek, clinical white room. A subject sits on a chair in the center. In front of them is a small metal button. On-screen text: 'UNIVERSITY OF VIRGINIA STUDY'. A hand hovers over the button, then presses it. SFX: Static spark sound, soft buzz, gentle acoustic piano note.",
        audio: "[NARRATOR - Meditative, thoughtful, calm] In a fascinating study, scientists put participants in a completely empty room for fifteen minutes. No phones, no books, no distractions. The only thing in the room was a small button that, if pressed, would deliver a painful electric shock. The result? Sixty-seven percent of the men and twenty-five percent of the women chose to shock themselves rather than sit in silence with their own thoughts. One man shocked himself one hundred and ninety times. We are so terrified of boredom that we would literally choose physical pain over a moment of stillness. But what if this escape is killing our minds?",
        pacing: "Slow, spacious, compelling"
      },
      {
        chapter: "02:00 - Chapter 1: The Default Mode Network",
        timestamp: "02:00",
        visual: "Soft, beautiful 3D outline of a brain. Highlight on a neural network glowing with blue and violet light. Overlay text: 'DMN - The Default Mode Network'. SFX: Wind chime, gentle atmospheric synth.",
        audio: "[NARRATOR - Scientific, lyrical] When you stop scrolling, when you stop listening to podcasts, and let your mind drift, something extraordinary happens inside your head. Your brain activates a system called the Default Mode Network, or DMN. The DMN is the cognitive engine of autobiographical memory, empathy, and creative connection. It is where your brain takes completely unrelated ideas, slams them together, and spits out original insights. But the DMN has a gatekeeper: boredom. If you never let yourself feel bored, the gatekeeper never opens. You never think your own thoughts; you only consume others.",
        pacing: "Soothing, informative"
      },
      {
        chapter: "04:30 - Chapter 2: The Hyper-Stimulation Tax",
        timestamp: "04:30",
        visual: "Fast, sensory-overloaded collage of flashing screens, push notifications, advertisements, and rapid cuts. The camera pulls back to show a tired face reflecting blue light. SFX: Multi-layered digital notifications, overlapping voices.",
        audio: "[NARRATOR - Pensive, critical] Today, we pay a silent tax for our hyper-connected world: the extinction of daydreaming. Every empty pocket of time\u2014waiting in line, riding an elevator, walking to the car\u2014is instantly filled by reaching for our pocket screens. We have engineered a world where boredom is technically impossible. But in doing so, we have dry-rotted our attention spans. True genius requires deep, sustained incubation. By escaping boredom, we are trading our long-term intellectual potential for a series of cheap, fleeting dopamine crumbs.",
        pacing: "Dynamic, contrasting"
      },
      {
        chapter: "07:15 - Chapter 3: What the Giants Knew",
        timestamp: "07:15",
        visual: "Beautiful oil paintings of Isaac Newton under an apple tree, and Charles Darwin walking on his 'sandwalk' path. Camera slowly tracks along a forest trail. SFX: Birdsong, crunching gravel steps, cello chords.",
        audio: "[NARRATOR - Inspirational, historical] Throughout history, the greatest thinkers protected their boredom fiercely. Charles Darwin had his 'sandwalk'\u2014a circular gravel path at his home where he walked in absolute silence twice a day, letting his thoughts untangle. Albert Einstein formulated his theory of relativity while working at a boring patent office, where his mind was free to wander through the cosmos. These weren't escapes from work; they were the work. Boredom is the fertile soil where the seeds of revelation actually take root.",
        pacing: "Spacious, elegant"
      },
      {
        chapter: "10:30 - Chapter 4: The Deliberate Stillness Protocol",
        timestamp: "10:30",
        visual: "Minimalist desk with an empty journal and a pen. A cup of steaming tea. Warm, soft ambient lighting. Clear, elegant typography showing the 3 steps to reclaim stillness. SFX: Pen scratching on paper, cup clink, wind blowing.",
        audio: "[NARRATOR - Practical, serene] How do we build this superpower? It begins with three steps. First, the 'Tech-Free Transition'\u2014never look at your phone during transition times. Let yourself wait in line. Second, 'The Boredom Hour'\u2014one hour a week of absolute cognitive rest. Sit with a notebook, or walk without headphones. Third, re-frame the discomfort. When you feel that anxious itch to check your notifications, recognize it as your brain growing its attention span back. Lean into the silence. That is where you live.",
        pacing: "Empowering, peaceful"
      },
      {
        chapter: "13:00 - Outro & Quiet Invitation",
        timestamp: "13:00",
        visual: "The white room again, but this time, the person pushes the button away, leans back, closes their eyes, and takes a deep breath. Subscribe graphics fade in gracefully. SFX: Peaceful piano melody resolves.",
        audio: "[NARRATOR - Soft, friendly] The most revolutionary thing you can do in a world that demands your attention is to refuse to give it. Let yourself be bored. If you want to dive deeper into the philosophy of modern living, subscribe to this channel, hit the like button, and let me know in the comments: what is your favorite way to escape the screens? Stay still.",
        pacing: "Quiet, calm, resolving"
      }
    ]
  },
  {
    id: "science-1",
    title: "The Day the Sun Slept: Solar Maximum 1859",
    niche: "Science & Cosmic Events",
    duration: "23:10",
    wordCount: 3140,
    ctr: "11.4%",
    avd: "74.2%",
    description: "A terrifying astronomical reconstruction of the Carrington Event\u2014the largest solar storm in recorded history\u2014and what would happen to our digital world if it struck today.",
    thumbnailUrl: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200",
    targetAudience: "Science enthusiasts, space lovers, disaster survival/documentary fans",
    pacingStyle: "Epic, catastrophic, highly scientific yet dramatic",
    storytellingFramework: "The Countdown to Catastrophe (Scientific timeline construction)",
    hookRetentionSecret: "Using dynamic particle animations of a coronal mass ejection blasting through the Earth's magnetic field like a bubble popping",
    sections: [
      {
        chapter: "00:00 - The Golden Sky Hook",
        timestamp: "00:00",
        visual: "Spectacular 3D model of the Sun, its surface bubbling with violent magnetic arches. Suddenly, a massive plasma wave (CME) erupts from the sun's surface, hurtling directly toward the camera. High-contrast simulation of Earth's magnetic shield deflecting the solar wind. SFX: Deep low solar roar, magnetic crackle, cinematic synthesizer build-up.",
        audio: "[NARRATOR - Epic, urgent] On September 1, 1859, a wealthy amateur astronomer named Richard Carrington looked through his telescope and saw two brilliant, blinding patches of white light erupt from a massive cluster of sunspots. What he had just witnessed was the birth of the largest solar storm in recorded history. Within eighteen hours, the shockwave reached Earth, igniting the night sky in vibrant shades of green, red, and gold, so bright that people in New York could read the newspaper at midnight. But behind the beauty was a terrifying power. What happened to our primitive technology back then\u2014and what would happen if that same storm hit our fragile digital world today?",
        pacing: "Epic, sweeping, visual-driven"
      },
      {
        chapter: "02:30 - Chapter 1: The Carrington Event Eruption",
        timestamp: "02:30",
        visual: "Historical sketches of Richard Carrington in his observatory. Dynamic timeline diagrams showing the CME crossing the 93-million-mile void in record time. SFX: Telescopic clockwork ticking, planetary whoosh.",
        audio: "[NARRATOR - Scientific, detailed] Normally, a coronal mass ejection takes three to four days to reach Earth. But this eruption was so powerful, and the path had been cleared by a previous storm, that the Carrington CME traversed the ninety-three million mile void in just seventeen hours. When it struck, it slammed into the Earth's magnetosphere with unimaginable force, triggering a massive geomagnetic storm. The earth's magnetic shield bent and shuddered under the impact of billions of tons of superheated plasma.",
        pacing: "Suspenseful, chronological"
      },
      {
        chapter: "06:00 - Chapter 2: Sparking Telegraphs",
        timestamp: "06:00",
        visual: "Antique woodcuts of 19th-century telegraph stations. Animated electric arcs jumping from telegraph keys, setting station papers on fire. Telegraph operators pulling their hands back in shock. SFX: Sparks cracking, mechanical telegraph tapping, crackling flames.",
        audio: "[NARRATOR - Dramatic, historical] In 1859, the only electrical technology on Earth was the telegraph. As the geomagnetic storm surged through the Earth's crust, it induced massive electric currents in the long telegraph wires. Suddenly, the system went completely haywire. Telegraph keys threw blinding sparks, shocking operators and setting paper on fire. Bizarrely, operators discovered that if they disconnected the batteries completely, they could still send messages across thousands of miles using only the raw, electric current surging through the air and soil. The Earth was literally humming with cosmic electricity.",
        pacing: "Fast, narrative, historical"
      },
      {
        chapter: "10:15 - Chapter 3: The Day the Grid Dies",
        timestamp: "10:15",
        visual: "3D visualization of modern global satellite arrays, undersea fiber optic cables, and massive power grid hubs flashing red, then turning black. Simulated blackout sweeping across major cities. SFX: Power surge hum, transformer explosions, silence.",
        audio: "[NARRATOR - Terrifying, analytical] Now, let's step into the present. We don't rely on telegraphs anymore. Our entire civilization is built on microchips and high-voltage power grids. If a Carrington-class solar storm hit us today, the impact would be catastrophic. The high-altitude electromagnetic pulse would melt the copper windings of extra-high-voltage transformers globally. These transformers are custom-built, weigh hundreds of tons, and take years to manufacture. We do not have spares. A major solar storm would plunge entire continents into a blackout that could last for years.",
        pacing: "High-voltage, alarming, fast cuts"
      },
      {
        chapter: "14:40 - Chapter 4: The 2-Trillion Dollar Bill",
        timestamp: "14:40",
        visual: "Charts showing economic loss projections. Pictures of satellites tumbling out of orbit due to atmospheric swelling. Animated diagrams showing GPS failure. SFX: Digital glitch, computer diagnostic sirens.",
        audio: "[NARRATOR - Clinical, objective] Lloyds of London estimated that the economic cost of a Carrington Event striking the US today would exceed two trillion dollars in the first year alone. GPS satellites would be knocked offline. Aviation would halt. Water treatment plants would stop, grocery supply chains would dissolve, and the internet undercurrents would disconnect. It is a low-probability, but near-infinite-consequence event. Our modern world has a brilliant shield of tech, but it is incredibly fragile to the moods of our parent star.",
        pacing: "Analytical, sobering"
      },
      {
        chapter: "19:10 - Conclusion: The Solar Sentinel",
        timestamp: "19:10",
        visual: "Sleek footage of NASA's Parker Solar Probe sweeping past the sun. Scientific diagrams showing early warning systems. Dynamic subscription graphics. SFX: Cosmic, uplifting orchestral score fades in.",
        audio: "[NARRATOR - Hopeful, inspiring] Fortunately, we aren't completely blind. Satellites like the Parker Solar Probe are diving deep into the sun's corona, studying the magnetic fields to help us predict these storms hours before they strike, giving us time to gracefully shut down the grids and protect our transformers. We live in a cosmic shooting gallery, and our only shield is science. If you want to explore the extreme physics of our universe, subscribe, hit like, and let me know: are you prepared for a long-term blackout? See you in the next solar voyage.",
        pacing: "Uplifting, professional, call-to-action"
      }
    ]
  },
  {
    id: "auto-1",
    title: "How One French Hypercar Broke the Laws of Physics",
    niche: "Automotive & Engineering",
    duration: "17:45",
    wordCount: 3055,
    ctr: "10.4%",
    avd: "72.4%",
    description: "An engineering autopsy of the Bugatti Veyron, detailing the ridiculous thermal, aerodynamic, and material science challenges of building a 250MPH road car.",
    thumbnailUrl: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200",
    targetAudience: "Car lovers, engineering geeks, high-performance racing fans",
    pacingStyle: "High-octane, informative, fast-paced, industrial",
    storytellingFramework: "The Impossible Engineering Challenge",
    hookRetentionSecret: "Opening with a comparison of the car's fuel pump flow rate being equal to a firehose",
    sections: [
      {
        chapter: "00:00 - The 250MPH Challenge Hook",
        timestamp: "00:00",
        visual: "Sleek hypercar sitting in a wind tunnel, smoke trails moving smoothly over its carbon fiber body. Suddenly, the car launches on a 5-mile straight track. The speed indicator on screen ticks up rapidly: '230... 240... 250... 253 MPH'. SFX: Screaming W16 engine roar, high-velocity wind rip, heavy gear shift thump.",
        audio: "[NARRATOR - Fast, high-octane, passionate] In the year 2000, Ferdinand Pi\xEBch, the brilliant and ruthless chairman of the Volkswagen Group, stood before his engineers and issued a seemingly impossible mandate. He wanted a production road car with over one thousand horsepower, that could do over two hundred and fifty miles per hour, but was as comfortable and easy to drive as a Volkswagen Golf. The engineers told him it was impossible. They said a car with that much power would melt its own engine, lift off like an airplane at speed, and rip its tires to shreds in minutes. Pi\xEBch didn't care. This is the story of how the Bugatti Veyron rewrote the laws of engineering.",
        pacing: "Fast-paced, aggressive, high energy"
      },
      {
        chapter: "02:15 - Chapter 1: The W16 Thermal Monster",
        timestamp: "02:15",
        visual: "3D animation of a W16 engine block, showing four turbochargers and sixteen cylinders. Thermal camera view showing intense heat rising. Animated diagrams showing the 10 radiators and coolant routing. SFX: Industrial rhythmic engine chug, fluid whooshing.",
        audio: "[NARRATOR - Explanatory, detailed] To get 1001 horsepower, Bugatti didn't just build a big engine; they built a W16 monster. Essentially two V8s fused together, boosted by four massive turbochargers. But here is the secret of internal combustion engines: for every unit of horsepower created, they produce two units of waste heat. The Veyron's engine was generating over two thousand horsepower of raw heat\u2014enough to heat an entire suburb in winter. To keep from melting, the car had to be packed with ten separate radiators, holding forty liters of coolant. The plumbing alone took weeks to design.",
        pacing: "Technical, fast"
      },
      {
        chapter: "05:40 - Chapter 2: Fighting the Air",
        timestamp: "05:40",
        visual: "Fluid dynamics simulation showing air resistance. Comparison overlay: pushing through air at 100MPH vs. 250MPH. Arrows highlight aerodynamic downforce. The active rear wing deploying in 0.4 seconds. SFX: Aerodynamic wind tunnel hiss, mechanical servo whine.",
        audio: "[NARRATOR - Scientific, dramatic] At speeds over two hundred miles per hour, air resistance isn't just a breeze\u2014it acts like solid concrete. Pushing a car from 200 to 250 miles per hour requires more horsepower than it took to get from zero to 200. Bugatti had to design a shape that was aerodynamically slick, but also produced massive downforce so the car wouldn't lift off like a jet fighter. They built an active rear wing that automatically adjusts its angle based on speed, and double-acts as an airbrake, providing as much braking force as a conventional family car.",
        pacing: "Informative, high-contrast graphics"
      },
      {
        chapter: "09:30 - Chapter 3: The Tire Dilemma",
        timestamp: "09:30",
        visual: "Close-up of a massive Michelin tire spinning under high load. Graphic showing centrifugal forces pulling the rubber outwards. Overlay showing tire pricing: '$42,000 a set'. SFX: High-speed rubber squeal, deep mechanical rumble.",
        audio: "[NARRATOR - Shocking, financial] But the biggest engineering bottleneck wasn't the engine or the body. It was the tires. At two hundred and fifty miles per hour, centrifugal forces are so violent that the tires are literally trying to rip themselves apart. Bugatti had to partner with Michelin to design custom aerospace-grade tires. They were so wide they had to be glued directly to the rims. A set of tires cost forty-two thousand dollars, and would only last fifteen minutes at top speed. But that was fine, because at top speed, the Veyron would run completely out of fuel in just twelve minutes.",
        pacing: "Fast, punchy, surprising facts"
      },
      {
        chapter: "13:20 - Chapter 4: The Speed Key",
        timestamp: "13:20",
        visual: "High-contrast macro shot of a small, silver key being slotted into a lock next to the driver's seat. The car lowers its suspension by 2 inches. Air vents close. SFX: Click of a key, hydraulic hum, dramatic brass swell.",
        audio: "[NARRATOR - Exclusive, sleek] To actually reach top speed, you couldn't just step on the gas. You had to activate a secret mode. The driver had to insert a special 'Speed Key' into a lock on the floor next to their seat. Once turned, the Veyron initiates a pre-flight checklist. The car lowers itself to just two inches off the ground, the front diffuser flaps close, and the rear wing retracts to a low-drag angle. The car is now a land missile, optimized for a single, terrifying straight-line sprint.",
        pacing: "Sleek, atmospheric, elite vibe"
      },
      {
        chapter: "16:00 - Conclusion: The Concorde of Cars",
        timestamp: "16:00",
        visual: "Bugatti Veyron speeding past on a salt flat, leaving a massive dust trail. Visual transitions to subscription overlays. SFX: Epic hypercar exhaust roar fading into the distance, upbeat mechanical music outro.",
        audio: "[NARRATOR - Reflective, proud] The Bugatti Veyron was the Concorde of the automotive world. Volkswagen lost an estimated five million dollars on every single car they sold, but they didn't care. It was the ultimate demonstration of raw engineering dominance. It proved that if you throw enough money, science, and genius at a problem, you can bend physics to your will. If you love deep dives into the machines that push humanity forward, hit subscribe, like this video, and let me know in the comments: what hypercar should we autopsy next? See you on the track.",
        pacing: "Polished, concluding"
      }
    ]
  }
];

// server.ts
import_dotenv.default.config();
var PORT = 3e3;
var userScripts = [];
var contactMessages = [];
var gmailAccessToken = null;
var gmailUserEmail = null;
var gmailTokenExpiresAt = null;
function calculateWordCount(sections) {
  return sections.reduce((acc, sec) => {
    const text = (sec.chapter || "") + " " + (sec.visual || "") + " " + (sec.audio || "");
    return acc + text.split(/\s+/).filter(Boolean).length;
  }, 0);
}
async function startServer() {
  const app = (0, import_express.default)();
  app.use(import_express.default.json({ limit: "50mb" }));
  app.use(import_express.default.urlencoded({ limit: "50mb", extended: true }));
  app.get("/api/scripts", (req, res) => {
    res.json([...initialScripts, ...userScripts]);
  });
  app.get("/api/scripts/:id", (req, res) => {
    const { id } = req.params;
    const script = [...initialScripts, ...userScripts].find((s) => s.id === id);
    if (!script) {
      return res.status(404).json({ error: "Script not found" });
    }
    res.json(script);
  });
  app.post("/api/scripts", (req, res) => {
    try {
      const newScript = req.body;
      if (!newScript.title || !newScript.niche) {
        return res.status(400).json({ error: "Title and niche are required" });
      }
      newScript.wordCount = calculateWordCount(newScript.sections || []);
      if (newScript.wordCount === 0) {
        newScript.wordCount = 3e3;
      }
      userScripts.push(newScript);
      res.status(201).json(newScript);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, niche, budget, message, quote } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Name, email, and message are required." });
      }
      const newInquiry = {
        id: "msg-" + Date.now(),
        name,
        email,
        niche: niche || "Not Specified",
        budget: budget || "Not Specified",
        message,
        quote: quote || null,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      contactMessages.push(newInquiry);
      console.log(`[CONTACT SYSTEM] New Inquiry Received!`);
      console.log(`----------------------------------------`);
      console.log(`From: ${name} (${email})`);
      console.log(`Niche Interested: ${niche}`);
      console.log(`Budget: ${budget}`);
      console.log(`Message: ${message}`);
      if (quote) {
        console.log(`Estimated Quote Breakdown:`, quote);
      }
      console.log(`----------------------------------------`);
      console.log(`ROUTING NOTIFICATION TO: aishatabubakarx@gmail.com`);
      console.log(`----------------------------------------`);
      let realMailSent = false;
      let mailError = null;
      let sentVia = "none";
      const now = Date.now();
      const isGmailActive = !!gmailAccessToken && (!gmailTokenExpiresAt || gmailTokenExpiresAt > now);
      if (isGmailActive) {
        try {
          const subject = `Portfolio Lead: ${name} - Budget ${budget}`;
          const quoteInfo = quote ? `
Quote Details:
- Video Duration: ${quote.videoLengthMinutes} mins (~${quote.estimatedWords} words)
- Scripts/Month: ${quote.videosPerMonth}
- Thumbnail Storyboarding: ${quote.thumbnailBrollsIncluded ? "Yes" : "No"}
- Expedited Rush: ${quote.rushExpedited ? "Yes" : "No"}
- Total Estimated Price: $${quote.monthlyTotal}/month
` : "";
          const emailBody = [
            `From: "Aishat Portfolio" <${gmailUserEmail}>`,
            `To: aishatabubakarx@gmail.com`,
            `Reply-To: ${name} <${email}>`,
            `Subject: ${subject}`,
            `MIME-Version: 1.0`,
            `Content-Type: text/plain; charset="UTF-8"`,
            ``,
            `Hi Aishat,`,
            ``,
            `You received a new inquiry from your Portfolio Contact Form:`,
            ``,
            `Name: ${name}`,
            `Email: ${email}`,
            `Niche Interested: ${niche}`,
            `Proposed Monthly Retainer: ${budget}`,
            ``,
            `Message:`,
            `${message}`,
            ``,
            quoteInfo,
            ``,
            `Please reply directly to the client at: ${email}`
          ].join("\r\n");
          const rawMessage = Buffer.from(emailBody).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
          const gmailResponse = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${gmailAccessToken}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ raw: rawMessage })
          });
          if (!gmailResponse.ok) {
            const errBody = await gmailResponse.text();
            throw new Error(`Gmail API error: ${gmailResponse.statusText} - ${errBody}`);
          }
          realMailSent = true;
          sentVia = "gmail";
          console.log(`[EMAIL SYSTEM] Real notification successfully sent to aishatabubakarx@gmail.com via authenticated Gmail API!`);
        } catch (err) {
          console.error("[EMAIL SYSTEM] Error sending real email via Gmail API:", err);
          mailError = err.message || err;
        }
      }
      if (!realMailSent) {
        const resendApiKey = process.env.RESEND_API_KEY;
        if (resendApiKey) {
          try {
            const { Resend } = await import("resend");
            const resend = new Resend(resendApiKey);
            const quoteInfo = quote ? `
Quote Details:
- Video Duration: ${quote.videoLengthMinutes} mins (~${quote.estimatedWords} words)
- Scripts/Month: ${quote.videosPerMonth}
- Thumbnail Storyboarding: ${quote.thumbnailBrollsIncluded ? "Yes" : "No"}
- Expedited Rush: ${quote.rushExpedited ? "Yes" : "No"}
- Total Estimated Price: $${quote.monthlyTotal}/month
` : "";
            await resend.emails.send({
              from: "Portfolio Contact <onboarding@resend.dev>",
              to: "aishatabubakarx@gmail.com",
              subject: `New Inquiry from ${name} - Budget ${budget}`,
              text: `
You received a new inquiry from your Portfolio Contact Form:

Name: ${name}
Email: ${email}
Niche Interested: ${niche}
Proposed Monthly Retainer: ${budget}

Message:
${message}

${quoteInfo}

Please reply directly to: ${email}
`
            });
            realMailSent = true;
            sentVia = "resend";
            console.log(`[EMAIL SYSTEM] Real notification successfully sent to aishatabubakarx@gmail.com via Resend.`);
          } catch (err) {
            console.error("[EMAIL SYSTEM] Error sending real email via Resend:", err);
            mailError = err.message || err;
          }
        }
      }
      res.status(200).json({
        success: true,
        message: realMailSent ? sentVia === "gmail" ? `Your inquiry has been sent! A real notification was dispatched to Aishat's inbox directly via her authenticated Gmail Account.` : "Your inquiry has been successfully sent! A real notification was dispatched to aishatabubakarx@gmail.com via Resend." : `Your inquiry has been successfully sent! (Notification simulated in developer logs). To receive real emails instantly, please connect Aishat's Gmail sender or add your RESEND_API_KEY in secrets.`,
        realMailSent,
        sentVia,
        mailError,
        data: newInquiry
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  app.post("/api/gmail/token", (req, res) => {
    try {
      const { token, email, expiresAt } = req.body;
      if (!token) {
        return res.status(400).json({ error: "Access token is required" });
      }
      gmailAccessToken = token;
      gmailUserEmail = email || "aishatabubakarx@gmail.com";
      gmailTokenExpiresAt = expiresAt || Date.now() + 3600 * 1e3;
      console.log(`[GMAIL SYSTEM] Access token registered for ${gmailUserEmail}. Expires at: ${new Date(gmailTokenExpiresAt).toISOString()}`);
      res.json({ success: true, email: gmailUserEmail, expiresAt: gmailTokenExpiresAt });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  app.get("/api/gmail/status", (req, res) => {
    const now = Date.now();
    const isConnected = !!gmailAccessToken && (!gmailTokenExpiresAt || gmailTokenExpiresAt > now);
    const timeLeft = gmailTokenExpiresAt ? Math.max(0, Math.floor((gmailTokenExpiresAt - now) / 1e3)) : null;
    res.json({
      connected: isConnected,
      email: isConnected ? gmailUserEmail : null,
      expiresAt: isConnected ? gmailTokenExpiresAt : null,
      timeLeftSeconds: timeLeft
    });
  });
  app.post("/api/gmail/revoke", (req, res) => {
    gmailAccessToken = null;
    gmailUserEmail = null;
    gmailTokenExpiresAt = null;
    console.log("[GMAIL SYSTEM] Access token revoked manually.");
    res.json({ success: true });
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
