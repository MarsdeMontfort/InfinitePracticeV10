const mcqs = [
  {
    type: "mcq",
    question: "According to the WHO, what is antimicrobial resistance (AMR)?",
    choices: [
      "The development of new antibiotics to treat infections",
      "The natural immunity of humans to bacterial infections",
      "A process by which antimicrobials enhance the immune response",
      "The ability of a microorganism to stop an antimicrobial from working against it",
    ],
    answer: "D",
    explanation:
      "WHO defines AMR as the ability of a microorganism to stop an antimicrobial from working against it.",
    source_quote:
      '"the ability of a microorganism (like bacteria,viruses, and some parasites) to stop an antimicrobial (such as antibiotics, antivirals, and antimalarials) from working against it. As a result, standard treatments become ineffective, infections persist and may spread to others."',
    category: "Mechanism of Resistance",
  },
  {
    type: "mcq",
    question:
      "What is the plural form of the word referring to bacterial cells?",
    choices: ["Bacterias", "Bacteri", "Bacteria", "Bacterium"],
    answer: "C",
    explanation: '"Bacteria" is the plural, while "bacterium" is the singular.',
    source_quote:
      "Bacteria - numerous bacterial cells\nBacterium - single bacterial cell",
    category: "Lab/Diagnostics",
  },
  {
    type: "mcq",
    question: "What does the term 'bacterium' refer to?",
    choices: [
      "A group of bacterial colonies",
      "A type of virus",
      "A single bacterial cell",
      "A bacterial infection",
    ],
    answer: "C",
    explanation: '"Bacterium" refers to a single bacterial cell.',
    source_quote:
      "Bacteria - numerous bacterial cells\nBacterium - single bacterial cell",
    category: "Lab/Diagnostics",
  },
  {
    type: "mcq",
    question:
      "What is the typical sequence of events that leads to antibiotic resistance in bacteria?",
    choices: [
      "All bacteria survive antibiotic treatment and become resistant",
      "Antibiotics kill most bacteria, survivors are resistant, and they spread resistance to others",
      "Antibiotics make bacteria weaker and less able to resist drugs",
      "Bacteria mutate spontaneously without exposure to antibiotics",
    ],
    answer: "B",
    explanation:
      "Antibiotics kill most bacteria, but survivors are drug-resistant and can spread resistance.",
    source_quote:
      "antibiotics kill majority of bacteria > survivors are drug-resistant and take over > bacteria give drug-resistance to other bacteria",
    category: "Mechanism of Resistance",
  },
  {
    type: "mcq",
    question: "Can resistance to chemotherapeutic agents develop in humans?",
    choices: [
      "No, only microbes develop resistance",
      "No, humans cannot develop drug resistance",
      "Yes, but only in bacterial infections",
      "Yes, cancer can develop resistance to chemotherapy",
    ],
    answer: "D",
    explanation:
      "Cancer can develop resistance to chemotherapeutic agents in humans.",
    source_quote:
      "Yes, cancer in can be controlled with chemotherapeutic agents but may develop resistance to these drugs",
    category: "Mechanism of Resistance",
  },
  {
    type: "mcq",
    question: "What is a community-acquired infection?",
    choices: [
      "An infection acquired only in hospitals",
      "A type of food poisoning",
      "An infection acquired from a communal setting like a gym or subway",
      "A genetic disorder",
    ],
    answer: "C",
    explanation:
      "Community-acquired infections are acquired from communal settings.",
    source_quote:
      "- infection acquired from a communal setting, e.g. gym, pool, subway, etc. \n\n- source of most AMR infections ",
    category: "Epidemiology",
  },
  {
    type: "mcq",
    question:
      "What is the primary source of most antimicrobial resistant (AMR) infections?",
    choices: [
      "Vector-borne diseases",
      "Hospital-acquired infections",
      "Community-acquired infections",
      "Foodborne illnesses",
    ],
    answer: "C",
    explanation:
      "Most AMR infections originate from community-acquired infections.",
    source_quote:
      "- infection acquired from a communal setting, e.g. gym, pool, subway, etc. \n\n- source of most AMR infections ",
    category: "Epidemiology",
  },
  {
    type: "mcq",
    question: "What is a hospital-acquired (nosocomial) infection?",
    choices: [
      "An infection caught in a healthcare setting like a hospital or nursing home",
      "A genetic disorder",
      "A foodborne illness",
      "An infection acquired while traveling",
    ],
    answer: "A",
    explanation:
      "Hospital-acquired infections are those caught in healthcare settings.",
    source_quote:
      "- infections caught in a healthcare setting, e.g. hospital, nursing home, etc. \n\n- source of most AMR deaths",
    category: "Epidemiology",
  },
  {
    type: "mcq",
    question:
      "What is the primary source of most deaths due to antimicrobial resistance (AMR)?",
    choices: [
      "Hospital-acquired infections",
      "Foodborne illnesses",
      "Vector-borne diseases",
      "Community-acquired infections",
    ],
    answer: "A",
    explanation: "Most AMR deaths are from hospital-acquired infections.",
    source_quote:
      "- infections caught in a healthcare setting, e.g. hospital, nursing home, etc. \n\n- source of most AMR deaths",
    category: "Epidemiology",
  },
  {
    type: "mcq",
    question:
      "Are infections and deaths related to AMR currently increasing or decreasing?",
    choices: [
      "They remain the same",
      "They are unknown",
      "They are increasing",
      "They are decreasing",
    ],
    answer: "C",
    explanation:
      "Infections and deaths related to AMR are increasing despite new technology.",
    source_quote: "False, they are increasing",
    category: "Epidemiology",
  },
  {
    type: "mcq",
    question:
      "Is antimicrobial resistance (AMR) considered a worldwide problem?",
    choices: [
      "Yes, it spreads globally",
      "Only in hospitals",
      "No, it is only a local issue",
      "Only in developing countries",
    ],
    answer: "A",
    explanation:
      "AMR is a worldwide problem, especially due to global connectivity.",
    source_quote:
      "True, it spreads across the entire world especially now that we are globally connected.",
    category: "Epidemiology",
  },
  {
    type: "mcq",
    question: "Is the rate of AMR in the US increasing or decreasing?",
    choices: ["Unknown", "Increasing", "Stable", "Decreasing"],
    answer: "B",
    explanation:
      "AMR is increasing in the US, even though the rate of bacterial infections is constant.",
    source_quote:
      "False, AMR is increasing even though the rate of bacterial infections remains the same (~14M/year)",
    category: "Epidemiology",
  },
  {
    type: "mcq",
    question:
      "What are some factors contributing to higher medical costs associated with AMR?",
    choices: [
      "Additional diagnostic/lab tests",
      "Prolonged hospitalization",
      "All of the above",
      "Additional antibiotic prescriptions",
    ],
    answer: "C",
    explanation:
      "All listed factors contribute to higher medical costs due to AMR.",
    source_quote:
      "- additional antibiotic prescriptions\n- prolonged hospitalization\n- additional diagnostic/lab tests\n- infectious disease specialists",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question:
      "Does AMR increase mortality and the average hospital stay length?",
    choices: ["Yes", "Only hospital stay length", "No", "Only mortality"],
    answer: "A",
    explanation:
      "AMR increases both mortality and the average hospital stay length.",
    source_quote: "True",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question: "What is the proper way to write bacterial nomenclature?",
    choices: [
      "Genus species (e.g., Pseudomonas aeruginosa)",
      "All lowercase (e.g., pseudomonas aeruginosa)",
      "species Genus (e.g., aeruginosa Pseudomonas)",
      "Only the species name (e.g., aeruginosa)",
    ],
    answer: "A",
    explanation:
      "The correct format is Genus species, e.g., Pseudomonas aeruginosa.",
    source_quote: "Genus species (Pseudomonas aeruginosa) ",
    category: "Lab/Diagnostics",
  },
  {
    type: "mcq",
    question:
      "On average, how many years does it take from the introduction of a new antibiotic to clinical resistance?",
    choices: ["1", "20", "8", "2"],
    answer: "C",
    explanation:
      "It takes about 8 years on average for clinical resistance to develop.",
    source_quote: "8",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "What is the most important factor contributing to AMR in healthcare?",
    choices: [
      "Hospital size",
      "Usage of antibiotics",
      "Type of infection",
      "Patient age",
    ],
    answer: "B",
    explanation: "The usage of antibiotics is the most important factor.",
    source_quote: "usage of antibiotics",
    category: "Mechanism of Resistance",
  },
  {
    type: "mcq",
    question: "How does underuse of antibiotics contribute to AMR?",
    choices: [
      "Not finishing prescribed antibiotics allows surviving cells to become resistant",
      "Not prescribing antibiotics prevents resistance",
      "Taking antibiotics for too long kills all bacteria",
      "Using antibiotics only when necessary increases resistance",
    ],
    answer: "A",
    explanation:
      "Not finishing antibiotics allows resistant cells to survive and proliferate.",
    source_quote:
      "Not finishing prescribed antibiotics > surviving cells become resistant",
    category: "Mechanism of Resistance",
  },
  {
    type: "mcq",
    question:
      "How does antibiotic use increase the risk of other infections like C. diff?",
    choices: [
      "Antibiotic use disrupts normal flora, increasing risk of infections like C. diff",
      "Antibiotics directly kill C. diff",
      "Antibiotics prevent all infections",
      "Antibiotics have no effect on other infections",
    ],
    answer: "A",
    explanation:
      "Antibiotic use can increase the risk of infections such as C. diff.",
    source_quote:
      "use of antibiotics increases risk of other infections like C. diff",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question:
      "What proportion of antibiotic prescriptions are estimated to be unnecessary?",
    choices: ["80-95%", "0-10%", "25-75%", "5-15%"],
    answer: "C",
    explanation:
      "An estimated 25-75% of antibiotic prescriptions are not necessary.",
    source_quote:
      "25-75% of prescriptions not necessary, including those:\n- given when not needed\n- continued when not necessary\n- of the wrong dose or wrong antibiotic entirely",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question: "Which is NOT a reason for unnecessary antibiotic prescriptions?",
    choices: [
      "Using the wrong dose or wrong antibiotic",
      "Prescribing antibiotics when not needed",
      "Prescribing the correct antibiotic at the correct dose",
      "Continuing antibiotics when not necessary",
    ],
    answer: "C",
    explanation:
      "Prescribing the correct antibiotic at the correct dose is appropriate, not unnecessary.",
    source_quote:
      "25-75% of prescriptions not necessary, including those:\n- given when not needed\n- continued when not necessary\n- of the wrong dose or wrong antibiotic entirely",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question:
      "Which of the following is NOT a factor contributing to AMR in healthcare?",
    choices: [
      "Lack of antibiotics leading to untreated AMR infections",
      "High patient satisfaction scores",
      "Poor sanitation and personal hygiene",
      "Use of antibiotics in agriculture",
    ],
    answer: "B",
    explanation: "High patient satisfaction does not contribute to AMR.",
    source_quote:
      "- lack of antibiotics - untreated person w/ AMR infection poses risk to other patients\n- poor sanitation and personal hygiene\n- use of antibiotics in agriculture (one of the most important factors!)\n- inadequate infection control in healthcare facilities - lack of handwashing, proper sterilization, and AMR screening",
    category: "Mechanism of Resistance",
  },
  {
    type: "mcq",
    question:
      "Why is the use of antibiotics in agriculture considered important in the context of AMR?",
    choices: [
      "It is one of the most important factors contributing to AMR",
      "It has no effect on AMR",
      "It only increases crop yield",
      "It only affects animal health",
    ],
    answer: "A",
    explanation: "Antibiotic use in agriculture is a major contributor to AMR.",
    source_quote:
      "- lack of antibiotics - untreated person w/ AMR infection poses risk to other patients\n- poor sanitation and personal hygiene\n- use of antibiotics in agriculture (one of the most important factors!)\n- inadequate infection control in healthcare facilities - lack of handwashing, proper sterilization, and AMR screening",
    category: "Mechanism of Resistance",
  },
  {
    type: "mcq",
    question: "How does over sanitation contribute to AMR?",
    choices: [
      "It limits exposure to microbes, weakening the immune system and increasing infection risk",
      "It kills all bacteria, preventing resistance",
      "It improves immune response",
      "It has no effect on AMR",
    ],
    answer: "A",
    explanation:
      "Over sanitation can weaken the immune system, increasing the need for antibiotics.",
    source_quote:
      "- limiting exposure to microbes leads to a weakened immune system > increased risk of developing an infection that requires antibiotic treatment\n- example: infants whose parents licked their pacifier before putting it back in were less likely to develop immune diseases",
    category: "Mechanism of Resistance",
  },
  {
    type: "mcq",
    question:
      "What is an example of how limited microbial exposure can affect immune disease development?",
    choices: [
      "Infants in sterile environments have no health issues",
      "Infants with no microbial exposure never get sick",
      "Infants whose parents licked their pacifier before putting it back in were less likely to develop immune diseases",
      "Infants exposed to more antibiotics have stronger immunity",
    ],
    answer: "C",
    explanation:
      "Parental licking of pacifiers was associated with lower immune disease rates in infants.",
    source_quote:
      "- limiting exposure to microbes leads to a weakened immune system > increased risk of developing an infection that requires antibiotic treatment\n- example: infants whose parents licked their pacifier before putting it back in were less likely to develop immune diseases",
    category: "Epidemiology",
  },
  {
    type: "mcq",
    question: "How does population growth contribute to AMR?",
    choices: [
      "Population growth has no effect on AMR",
      "Population growth increases food demand, leading to more animal farming and antibiotic use",
      "Population growth eliminates antibiotic resistance",
      "Population growth decreases the need for antibiotics",
    ],
    answer: "B",
    explanation:
      "Population growth drives animal farming and antibiotic use, increasing AMR.",
    source_quote:
      "Population increases drive demand for food > increased food demand drives animal farming > animal farming increases occurrence of transmissible diseases > increased disease transmission stimulates widespread use of antibiotics > increase in antibiotic use leads to AMR\n\nALSO \n\nantibiotics are found in trace amounts in meat, driving AMR that way",
    category: "Epidemiology",
  },
  {
    type: "mcq",
    question: "How can antibiotics in meat contribute to AMR?",
    choices: [
      "Antibiotics in meat prevent AMR",
      "Antibiotics in meat have no effect on resistance",
      "Trace amounts of antibiotics in meat can drive AMR",
      "Only high concentrations of antibiotics in meat matter",
    ],
    answer: "C",
    explanation: "Trace antibiotic residues in meat can contribute to AMR.",
    source_quote:
      "Population increases drive demand for food > increased food demand drives animal farming > animal farming increases occurrence of transmissible diseases > increased disease transmission stimulates widespread use of antibiotics > increase in antibiotic use leads to AMR\n\nALSO \n\nantibiotics are found in trace amounts in meat, driving AMR that way",
    category: "Mechanism of Resistance",
  },
  {
    type: "mcq",
    question: "Why are antibiotics used in agriculture?",
    choices: [
      "To sterilize equipment",
      "As growth promoters and for infection control",
      "To treat human infections",
      "To increase crop yield",
    ],
    answer: "B",
    explanation:
      "Antibiotics are used in agriculture for growth promotion and infection control.",
    source_quote:
      "- growth promoters - antibiotics known to increase animal weight\n- infection control - cheaper alternative to hygiene maintenance",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question: "How do antibiotics promote growth in farm animals?",
    choices: [
      "By making animals more active",
      "By increasing immune responses",
      "By killing gut bacteria, increasing hunger and caloric intake",
      "By causing weight loss",
    ],
    answer: "C",
    explanation:
      "Antibiotics kill gut bacteria, making animals hungrier and increasing caloric intake.",
    source_quote:
      "- antibiotics kill bacteria in animal gut > animal hungrier > increased caloric intake\n- antibiotics kill pathogenic bacteria > body does not have to mount immune response > more energy funneled for growth",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "What is another way antibiotics promote growth in farm animals?",
    choices: [
      "By causing infections",
      "By killing pathogenic bacteria, allowing more energy for growth",
      "By stimulating immune system activity",
      "By reducing caloric intake",
    ],
    answer: "B",
    explanation:
      "Killing pathogenic bacteria means less energy is spent on immune responses, allowing more growth.",
    source_quote:
      "- antibiotics kill bacteria in animal gut > animal hungrier > increased caloric intake\n- antibiotics kill pathogenic bacteria > body does not have to mount immune response > more energy funneled for growth",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "What percentage of antibiotics in the US are given to livestock?",
    choices: ["20%", "90%", "50%", "70%"],
    answer: "D",
    explanation: "70% of antibiotics in the US are given to livestock.",
    source_quote: "70",
    category: "Epidemiology",
  },
  {
    type: "mcq",
    question:
      "In what year did the FDA approve the use of antibiotics to promote livestock growth?",
    choices: ["1965", "1951", "1975", "1990"],
    answer: "B",
    explanation:
      "The FDA approved antibiotic use for livestock growth in 1951.",
    source_quote: "1951",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "When did the UN announce that antibiotic use in animals is the leading cause of the AMR crisis?",
    choices: ["1995", "2001", "1980", "2016"],
    answer: "D",
    explanation: "The UN made this announcement in 2016.",
    source_quote: "2016",
    category: "History",
  },
  {
    type: "mcq",
    question: "What is one consequence of antibiotic use in farm animals?",
    choices: [
      "Enhanced development of resistance to antibiotics",
      "Decreased resistance to antibiotics",
      "Improved air quality",
      "Reduced transmission of bacteria to humans",
    ],
    answer: "A",
    explanation:
      "Antibiotic use in farm animals enhances resistance development.",
    source_quote:
      "- enhanced development of resistance to antibiotics\n- transmission of antibiotic resistant bacteria to humans\n- contamination of the environment by air particulates carrying antibiotics, AMR genes, and bacteria\n- emergence of novel AMR mechanisms",
    category: "Mechanism of Resistance",
  },
  {
    type: "mcq",
    question:
      "How can antibiotic-resistant bacteria in farm animals reach humans?",
    choices: [
      "Through transmission of resistant bacteria to humans",
      "By improving animal health only",
      "By eliminating all bacteria",
      "By preventing human infections",
    ],
    answer: "A",
    explanation:
      "Resistant bacteria can be transmitted from farm animals to humans.",
    source_quote:
      "- enhanced development of resistance to antibiotics\n- transmission of antibiotic resistant bacteria to humans\n- contamination of the environment by air particulates carrying antibiotics, AMR genes, and bacteria\n- emergence of novel AMR mechanisms",
    category: "Epidemiology",
  },
  {
    type: "mcq",
    question:
      "How can the environment become contaminated by antibiotics and resistant bacteria from farm animals?",
    choices: [
      "By air particulates carrying antibiotics, AMR genes, and bacteria",
      "By water only",
      "By ultraviolet radiation",
      "By direct injection into the soil",
    ],
    answer: "A",
    explanation:
      "Air particulates can carry antibiotics, AMR genes, and bacteria into the environment.",
    source_quote:
      "- enhanced development of resistance to antibiotics\n- transmission of antibiotic resistant bacteria to humans\n- contamination of the environment by air particulates carrying antibiotics, AMR genes, and bacteria\n- emergence of novel AMR mechanisms",
    category: "Epidemiology",
  },
  {
    type: "mcq",
    question:
      "What is an example of a novel consequence of antibiotic use in farm animals?",
    choices: [
      "Increase in antibiotic efficacy",
      "Eradication of all bacteria",
      "Decrease in animal weight",
      "Emergence of novel AMR mechanisms",
    ],
    answer: "D",
    explanation:
      "Antibiotic use can lead to the emergence of new AMR mechanisms.",
    source_quote:
      "- enhanced development of resistance to antibiotics\n- transmission of antibiotic resistant bacteria to humans\n- contamination of the environment by air particulates carrying antibiotics, AMR genes, and bacteria\n- emergence of novel AMR mechanisms",
    category: "Mechanism of Resistance",
  },
  {
    type: "mcq",
    question: "What is multilocus sequence typing (MLST)?",
    choices: [
      "A technique for growing bacteria in culture",
      "A method of identifying bacterial isolates by measuring DNA sequence variation in housekeeping genes",
      "A process for sterilizing laboratory equipment",
      "A way to sequence viral genomes",
    ],
    answer: "B",
    explanation:
      "MLST identifies bacterial isolates by DNA sequence variation in housekeeping genes.",
    source_quote:
      "method of identifying bacterial isolates by directly measuring the DNA sequence variation in housekeeping genes. for example, E. faecalis ST16",
    category: "Lab/Diagnostics",
  },
  {
    type: "mcq",
    question: "From which sources can bacteria enter the air?",
    choices: ["Leaves", "All of the above", "Humans and animals", "Soil"],
    answer: "B",
    explanation:
      "Bacteria can enter the air from soil, leaves, water, humans and animals, fecal matter, waste water, and composting facilities.",
    source_quote:
      "- soil\n- leaves\n- water\n- humans and animals\n- fecal matter\n- waste water\n- composting facilities",
    category: "Epidemiology",
  },
  {
    type: "mcq",
    question: "How can antibiotic resistant bacteria travel in the air?",
    choices: [
      "By magnetic fields",
      "In aerosol/fluid droplets or on solid particles",
      "Only by direct contact",
      "By sunlight",
    ],
    answer: "B",
    explanation:
      "Antibiotic resistant bacteria can travel in the air in droplets or on solid particles.",
    source_quote: "in aerosol/fluid droplets or on solid particles",
    category: "Epidemiology",
  },
  {
    type: "mcq",
    question: "What does CFU (colony forming unit) estimate?",
    choices: [
      "The number of viable bacteria based on the assumption that a single bacterium forms a single colony",
      "The amount of antibiotic needed to kill bacteria",
      "The number of viruses in a sample",
      "The total number of bacterial species",
    ],
    answer: "A",
    explanation:
      "CFU estimates viable bacteria assuming one bacterium forms one colony.",
    source_quote:
      "unit used to estimate number of viable bacteria under the assumption that a single bacterium will form a single colony",
    category: "Lab/Diagnostics",
  },
  {
    type: "mcq",
    question:
      "Which environment has the highest number of bacteria, most of which are not culturable under laboratory conditions?",
    choices: ["Soil", "Air", "Water", "Human skin"],
    answer: "A",
    explanation:
      "Soil has the highest number of bacteria, but most are not culturable.",
    source_quote:
      "The _____ has the highest number of bacteria, but these are usually not culturable under laboratory conditions.",
    category: "Epidemiology",
  },
  {
    type: "mcq",
    question:
      "Are most bacteria in the soil resistant to antibacterial drugs because the soil shields them?",
    choices: [
      "True, the soil shields them from drugs",
      "True, but only during winter",
      "False, soil bacteria are always susceptible",
      "False, antibiotic resistant bacteria naturally occur in the soil",
    ],
    answer: "D",
    explanation: "Antibiotic resistant bacteria naturally occur in the soil.",
    source_quote:
      "False, antibiotic resistant bacteria naturally occur in the soil",
    category: "Epidemiology",
  },
  {
    type: "mcq",
    question: "What is the most probable number (MPN) method used for?",
    choices: [
      "Measuring antibiotic concentration",
      "Estimating the number of bacteria in a liquid sample based on dilutions to detect no growth",
      "Determining the genetic sequence of bacteria",
      "Counting viral particles",
    ],
    answer: "B",
    explanation:
      "MPN estimates bacterial numbers based on dilution and growth detection.",
    source_quote:
      "statistical method to estimate number of bacteria in liquid sample based on number of dilutions required to detect no growth",
    category: "Lab/Diagnostics",
  },
  {
    type: "mcq",
    question:
      "What percentage of antibiotics is estimated to be excreted in urine and feces, contributing to environmental resistance?",
    choices: ["0-5%", "95-100%", "1-2%", "10-90%"],
    answer: "D",
    explanation:
      "10-90% of antibiotics are excreted, increasing environmental concentrations.",
    source_quote: "10, 90",
    category: "Pharmacokinetics",
  },
  {
    type: "mcq",
    question: "Which is NOT a way antibiotics and/or bacteria can enter water?",
    choices: [
      "Excretions from animal farms entering wastewater",
      "Direct injection of antibiotics into plants",
      "Bacteria and antibiotics from humans and pets entering water systems",
      "Sewer sludge and manure used as fertilizer carrying antibiotics and resistance genes onto crops",
    ],
    answer: "B",
    explanation: "Direct injection into plants is not a typical route.",
    source_quote:
      "- bacteria and antibiotics from humans and pets enter water systems through waste and groundwater\n- excretions from animal farms enter waste water and are also used as manure\n- sewer sludge from wastewater and manure are used as fertilizer > antibiotics and antibiotic resistance genes are carried onto commercial crops",
    category: "Epidemiology",
  },
  {
    type: "mcq",
    question:
      "Is there a system in place to monitor antibiotic concentrations in water, soil, sewage, or manure?",
    choices: ["Only for manure", "No", "Yes", "Only for water"],
    answer: "B",
    explanation: "No system is in place for such monitoring.",
    source_quote: "No",
    category: "Lab/Diagnostics",
  },
  {
    type: "mcq",
    question: "How can humans be exposed to antimicrobial resistance (AMR)?",
    choices: [
      "All of the above",
      "Through what we do, such as recreational water activities",
      "Through what we eat, such as fresh produce",
      "Through what we drink, such as urban water",
    ],
    answer: "A",
    explanation:
      "Humans are exposed to AMR through food, activities, water, and living environment.",
    source_quote:
      "What we eat - e.g. fresh produce\nWhat we do - e.g., recreational waters\nWhat we drink - e.g., drinking and urban water\nWhere we live",
    category: "Epidemiology",
  },
  {
    type: "mcq",
    question:
      "Why is the application of antibiotics to citrus trees for citrus greening disease a concern?",
    choices: [
      "It kills all bacteria in the soil",
      "It makes the fruit unsafe to eat",
      "It can cause new antibiotic resistance to emerge",
      "It increases fruit yield",
    ],
    answer: "C",
    explanation:
      "Applying antibiotics to citrus trees can promote new resistance.",
    source_quote:
      "- there are no treatment options for citrus greening disease available\n- a number of antibiotics can kill these bacteria, but the application of antibiotics to citrus trees can cause new resistance to emerge",
    category: "Mechanism of Resistance",
  },
  {
    type: "mcq",
    question:
      "Are there currently any treatment options available for citrus greening disease?",
    choices: [
      "Yes, vaccines are available",
      "Yes, but only in the early stages",
      "Yes, many antibiotics are effective",
      "No, there are no treatment options available",
    ],
    answer: "D",
    explanation: "There are no treatment options for citrus greening disease.",
    source_quote:
      "- there are no treatment options for citrus greening disease available\n- a number of antibiotics can kill these bacteria, but the application of antibiotics to citrus trees can cause new resistance to emerge",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question:
      "Who first described the antimicrobial property of penicillium mold in 1897?",
    choices: [
      "Ernst Chain",
      "Ernest Duchesne",
      "Alexander Fleming",
      "Howard Florey",
    ],
    answer: "B",
    explanation:
      "Ernest Duchesne was the first to describe the antimicrobial property of penicillium mold in 1897.",
    source_quote:
      "- described antimicrobial property of penicillium mold in 1897",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "Why did Ernest Duchesne not receive credit for his work on penicillium?",
    choices: [
      "He used the wrong organism.",
      "He was discredited by Fleming.",
      "He did not publish his work.",
      "He failed to demonstrate antimicrobial effects.",
    ],
    answer: "C",
    explanation: "Duchesne did not publish his work, so he received no credit.",
    source_quote:
      "- guinea pig studies but did not publish work > received no credit",
    category: "History",
  },
  {
    type: "mcq",
    question: "Who accidentally rediscovered penicillin?",
    choices: [
      "Howard Florey",
      "Alexander Fleming",
      "Ernst Chain",
      "Dorothy Crowfoot Hodgkin",
    ],
    answer: "B",
    explanation: "Alexander Fleming accidentally rediscovered penicillin.",
    source_quote: "- rediscovered penicillin accidentally",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "What observation did Fleming make regarding penicillin mold and bacterial growth?",
    choices: [
      "Penicillin mold had no effect on bacteria.",
      "Penicillin mold enhanced bacterial growth on a plate.",
      "Penicillin mold hindered bacterial growth on a plate.",
      "Penicillin mold only affected viral growth.",
    ],
    answer: "C",
    explanation:
      "Fleming observed that penicillin mold grew on a plate and hindered bacterial growth.",
    source_quote: "- penicillin mold grew on plate > hindered bacterial growth",
    category: "Lab/Diagnostics",
  },
  {
    type: "mcq",
    question: "Did Alexander Fleming publish his findings on penicillin?",
    choices: [
      "He published them posthumously",
      "He only presented them at conferences",
      "No",
      "Yes",
    ],
    answer: "D",
    explanation: "Fleming published his findings on penicillin.",
    source_quote: "- published findings",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "Did early tests of penicillin's antimicrobial activity reveal that all bacteria were inhibited by penicillin?",
    choices: [
      "Only gram-positive bacteria were inhibited",
      "Yes",
      "No",
      "Only gram-negative bacteria were inhibited",
    ],
    answer: "C",
    explanation:
      "Early tests showed that not all bacteria were inhibited by penicillin.",
    source_quote:
      "T or F: Early tests of penicillin's antimicrobial activity revealed that all bacteria were inhibited by penicillin. False",
    category: "Spectrum",
  },
  {
    type: "mcq",
    question:
      "Who was the first to treat patients with crude penicillium extracts?",
    choices: [
      "Ernst Chain",
      "Howard Florey",
      "Cecil George Paine",
      "Alexander Fleming",
    ],
    answer: "C",
    explanation:
      "Cecil George Paine started to treat patients with crude penicillium extracts.",
    source_quote: "- started to treat patients with crude penicillium extracts",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question: "Who was responsible for the first clinical use of penicillin?",
    choices: [
      "Howard Florey",
      "Cecil George Paine",
      "Alexander Fleming",
      "Ernst Chain",
    ],
    answer: "B",
    explanation:
      "Cecil George Paine was the first to use penicillin clinically.",
    source_quote: "- first clinical use of penicillin",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question:
      "Which pharmacologist/pathologist was influenced by Paine and undertook the first purification of penicillin?",
    choices: [
      "Alexander Fleming",
      "Dorothy Crowfoot Hodgkin",
      "Howard Florey",
      "Ernst Chain",
    ],
    answer: "C",
    explanation:
      "Howard Florey was influenced by Paine and undertook the first purification of penicillin.",
    source_quote:
      "- pharmacologist/pathologist influenced by Paine\n- undertook first purification of penicillin",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "Who was the biochemist largely responsible for the purification of penicillin from penicillium?",
    choices: [
      "Alexander Fleming",
      "Ernst Chain",
      "Howard Florey",
      "Dorothy Crowfoot Hodgkin",
    ],
    answer: "B",
    explanation:
      "Ernst Chain was largely responsible for the purification of penicillin.",
    source_quote:
      "- biochemist largely responsible for purification of penicillin from penicillium",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "Who published work on penicillin as a chemotherapeutic agent with Florey in 1940?",
    choices: [
      "Dorothy Crowfoot Hodgkin",
      "Ernst Chain",
      "Cecil George Paine",
      "Alexander Fleming",
    ],
    answer: "B",
    explanation:
      "Ernst Chain published work on penicillin as a chemotherapeutic agent with Florey in 1940.",
    source_quote:
      "- published work on penicillin as a chemotherapeutic agent with Florey in 1940",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "In what year did penicillin become commercially available without prescription?",
    choices: ["1943", "1945", "1940", "1950"],
    answer: "A",
    explanation:
      "Penicillin became commercially available without prescription in 1943.",
    source_quote:
      "When did penicillin become commercially available without prescription? 1943",
    category: "History",
  },
  {
    type: "mcq",
    question: "When did Fleming, Florey, and Chain receive their Nobel Prize?",
    choices: ["1950", "1940", "1943", "1945"],
    answer: "D",
    explanation: "They received the Nobel Prize in 1945.",
    source_quote:
      "When did Fleming, Florey, and Chain receive their Nobel Prize? 1945",
    category: "History",
  },
  {
    type: "mcq",
    question: "Did Fleming predict antibiotic resistance against penicillin?",
    choices: [
      "Yes",
      "No",
      "He predicted resistance to other antibiotics",
      "Only after resistance was discovered",
    ],
    answer: "A",
    explanation: "Fleming predicted antibiotic resistance against penicillin.",
    source_quote:
      "T or F: Fleming predicted antibiotic resistance against penicillin. True, he found that non-lethal quantities of penicillin could lead to resistance",
    category: "Mechanism of Resistance",
  },
  {
    type: "mcq",
    question:
      "What is the formal definition of an antibiotic according to Selman Waksman (1942)?",
    choices: [
      "A synthetic chemical that kills viruses",
      "A substance that only inhibits bacterial growth",
      "A microbial product that kills or inhibits the growth of other microbes",
      "A compound that enhances microbial growth",
    ],
    answer: "C",
    explanation:
      "Waksman defined antibiotics as microbial products that kill or inhibit other microbes.",
    source_quote:
      'Formal definition of antibiotic\n"a microbial product that kills or inhibits the growth of other microbes" - selman waksman, 1942',
    category: "Drug Classes",
  },
  {
    type: "mcq",
    question: "What does 'bactericidal' mean?",
    choices: [
      "Enhances microbial growth",
      "Kills microbes",
      "Only kills viruses",
      "Inhibits microbial growth",
    ],
    answer: "B",
    explanation: "Bactericidal means it kills microbes.",
    source_quote: "bactericidal\nkills microbes",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "What does 'bacteriostatic' mean?",
    choices: [
      "Inhibits microbial growth",
      "Only affects viruses",
      "Kills microbes",
      "Enhances microbial growth",
    ],
    answer: "A",
    explanation: "Bacteriostatic means it inhibits microbial growth.",
    source_quote: "bacteriostatic\ninhibits microbial growth",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Are most antibiotics developed or discovered?",
    choices: ["Developed", "Engineered", "Synthesized", "Discovered"],
    answer: "D",
    explanation: "Most antibiotics are discovered, not developed.",
    source_quote:
      "Generally, antibiotics are not developed, they are _______. However, some antibiotics are fully _______.\ndiscovered ; synthetic",
    category: "History",
  },
  {
    type: "mcq",
    question: "Are some antibiotics fully synthetic?",
    choices: ["Only cephalosporins", "Yes", "Only penicillins", "No"],
    answer: "B",
    explanation: "Some antibiotics are fully synthetic.",
    source_quote:
      "Generally, antibiotics are not developed, they are _______. However, some antibiotics are fully _______.\ndiscovered ; synthetic",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "Who solved the structure of penicillin using x-ray crystallography in 1945?",
    choices: [
      "Dorothy Crowfoot Hodgkin",
      "Alexander Fleming",
      "Ernst Chain",
      "Howard Florey",
    ],
    answer: "A",
    explanation:
      "Dorothy Crowfoot Hodgkin solved the structure of penicillin using x-ray crystallography in 1945.",
    source_quote:
      "Dorothy Crowfoot Hodgkin\nsolved structure of penicillin using x-ray crystallography in 1945",
    category: "History",
  },
  {
    type: "mcq",
    question: "What structural feature characterizes penicillin?",
    choices: [
      "A five-membered ring with a double bond",
      "A beta-lactam ring, a four-membered ring containing a nitrogen attached to a beta carbon",
      "A six-membered ring with a sulfur atom",
      "A single aromatic ring",
    ],
    answer: "B",
    explanation:
      "Penicillin is characterized by a beta-lactam ring, a four-membered ring containing a nitrogen attached to a beta carbon.",
    source_quote:
      "The penicillin structure is characterized by having\na beta-lactam ring, a four-membered containing a nitrogen attached to a beta carbon",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "The skeleton structure of beta-lactam antibiotics mimics the shape of which bacterial peptide?",
    choices: ["D-Glu-D-Ala", "Gly-Gly", "D-Ala-D-Ala", "Lys-Lys"],
    answer: "C",
    explanation:
      "Beta-lactam antibiotics mimic the shape of the D-Ala-D-Ala peptide.",
    source_quote:
      "The skeleton structure of beta-lactam antibiotics mimics the shape of the\nD-Ala-D-Ala peptide",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Why is D-Ala-D-Ala significant in bacterial cell wall synthesis?",
    choices: [
      "It is a fatty acid involved in membrane synthesis",
      "It is the substrate of the bacterial cell wall transpeptidase known as Penicillin Binding Protein (PBP)",
      "It is a toxin produced by bacteria",
      "It is a sugar used in the outer membrane",
    ],
    answer: "B",
    explanation:
      "D-Ala-D-Ala is the substrate of the bacterial cell wall transpeptidase known as PBP.",
    source_quote:
      "Why is D-Ala-D-Ala significant?\nsubstrate of the bacterial cell wall transpeptidase known as Penicillin Binding Protein (PBP)",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "What is the difference between lipid I and lipid II in peptidoglycan synthesis?",
    choices: [
      "Lipid I is only found in gram-positive bacteria; lipid II is only in gram-negative.",
      "Lipid I is NAM attached to pentapeptide; lipid II is NAM pentapeptide fused with NAG.",
      "Lipid I is a degradation product; lipid II is a precursor.",
      "Lipid I is a sugar transporter; lipid II is a peptide transporter.",
    ],
    answer: "B",
    explanation:
      "Lipid I is NAM attached to pentapeptide; lipid II is NAM pentapeptide fused with NAG.",
    source_quote:
      "Lipid I vs lipid II\nlipid I: NAM attached to pentapeptide\nlipid II: NAM pentapeptide fused with NAG > final intermediate in synthesis of peptidoglycan unit",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "What is the function of Penicillin Binding Proteins (PBPs)?",
    choices: [
      "They synthesize DNA.",
      "They transport antibiotics into the cell.",
      "They degrade beta-lactam antibiotics.",
      "They bind to D-Ala-D-Ala at stem termini of the lipid II pentapeptide and catalyze crosslinking of peptide side chains of NAMs.",
    ],
    answer: "D",
    explanation:
      "PBPs bind to D-Ala-D-Ala at stem termini of the lipid II pentapeptide and catalyze crosslinking of peptide side chains.",
    source_quote:
      "Penicillin Binding Protein (PBP)\nbinds to D-Ala-D-Ala molecule at stem termini of the lipid II pentapeptide > catalyzes crosslinking of peptide side chains of NAMs opposite to one another > releases terminal D-Ala of one lipid II and joins two adjacent lipid II molecules",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Do beta-lactam antibiotics bind PBPs reversibly or irreversibly?",
    choices: [
      "Irreversibly",
      "Only in gram-positive bacteria",
      "Reversibly",
      "Only in gram-negative bacteria",
    ],
    answer: "A",
    explanation: "Beta-lactam antibiotics irreversibly bind PBPs.",
    source_quote: "Beta-lactam antibiotics _______ bind PBPs\nirreversibly",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "What is the mechanism of action of beta-lactam antibiotics?",
    choices: [
      "They inhibit DNA replication.",
      "They disrupt protein synthesis.",
      "They block folic acid synthesis.",
      "They bind to transpeptidase active site to prevent cross-linking and construction of the cell wall.",
    ],
    answer: "D",
    explanation:
      "Beta-lactam antibiotics prevent cross-linking and cell wall construction by binding to the transpeptidase active site.",
    source_quote:
      "Mechanism of action of beta-lactam antibiotics\nbind to transpeptidase active site to prevent cross-linking and thus the construction of the cell wall",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Which of the following is not a type of beta-lactam antibiotic?",
    choices: ["Cephalosporins", "Penicillins", "Carbapenems", "Macrolides"],
    answer: "D",
    explanation: "Macrolides are not beta-lactam antibiotics.",
    source_quote:
      "5 types of beta-lactam antibiotics\nPenicillins\nCephalosporins\nCarbapenems\nMonobactams\nClavams",
    category: "Drug Classes",
  },
  {
    type: "mcq",
    question: "Why is peptidoglycan important for bacteria?",
    choices: [
      "It gives the bacterial cell structure and counteracts internal osmotic pressure from the cytoplasm.",
      "It is a signaling molecule.",
      "It is used for energy storage.",
      "It is required for DNA replication.",
    ],
    answer: "A",
    explanation:
      "Peptidoglycan provides structure and counters osmotic pressure in bacteria.",
    source_quote:
      "Why is peptidoglycan important?\nIt gives the bacterial cell structure and counteracts internal osmotic pressure from the cytoplasm. Without it, the bacteria will rupture and die.",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Where is the peptidoglycan layer located in gram-negative bacteria?",
    choices: [
      "Attached to the ribosomes",
      "In the periplasmic space between inner and outer membrane",
      "Inside the cytoplasm",
      "On the outside of the cell",
    ],
    answer: "B",
    explanation:
      "In gram-negative bacteria, the peptidoglycan layer is located in the periplasmic space.",
    source_quote:
      "Peptidoglycan layer in gram-negative vs gram-positive bacteria\ngram-negative: thinner layer and located in periplasmic space between inner and outer membrane\ngram-positive: thick and located on outside of cell",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Where is the peptidoglycan layer located in gram-positive bacteria?",
    choices: [
      "Embedded in the outer membrane",
      "Inside the cytoplasm",
      "On the outside of the cell",
      "In the periplasmic space",
    ],
    answer: "C",
    explanation:
      "In gram-positive bacteria, the peptidoglycan layer is thick and located on the outside of the cell.",
    source_quote:
      "Peptidoglycan layer in gram-negative vs gram-positive bacteria\ngram-negative: thinner layer and located in periplasmic space between inner and outer membrane\ngram-positive: thick and located on outside of cell",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Beta-lactam antibiotics are more effective in which type of bacteria?",
    choices: ["Both equally", "Neither", "Gram-negative", "Gram-positive"],
    answer: "D",
    explanation:
      "Beta-lactam antibiotics are more effective in gram-positive bacteria.",
    source_quote:
      "Beta-lactam antibiotics are more effective in gram-____ bacteria because gram-____ peptidoglycans are less accessible\npositive, negative",
    category: "Spectrum",
  },
  {
    type: "mcq",
    question:
      "What is the initial penicillin naturally derived from mold called?",
    choices: [
      "Penicillin G (Benzylpenicillin)",
      "Ampicillin",
      "Methicillin",
      "Penicillin V",
    ],
    answer: "A",
    explanation:
      "Penicillin G (Benzylpenicillin) is the initial penicillin naturally derived from mold.",
    source_quote:
      "Penicillin G (Benzylpenicillin)\ninitial penicillin naturally derived from mold",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "Which of the following is NOT a semi-synthetic penicillin derivative?",
    choices: ["Penicillin V", "Ampicillin", "Ceftriaxone", "Amoxicillin"],
    answer: "C",
    explanation: "Ceftriaxone is a cephalosporin, not a penicillin derivative.",
    source_quote:
      "What are the 4 semi-synthetic penicillin derivatives?\npenicillin V\nampicillin\namoxicillin\nmethicillin",
    category: "Drug Classes",
  },
  {
    type: "mcq",
    question:
      "What differentiates the penicillin derivatives from one another?",
    choices: [
      "They are all fully synthetic.",
      "Their R groups vary slightly, giving the derivatives different properties.",
      "They have identical structures.",
      "They have different beta-lactam ring structures.",
    ],
    answer: "B",
    explanation:
      "The R groups of penicillin derivatives vary, giving them different properties.",
    source_quote:
      "What differentiates the penicillin derivatives from one another?\ntheir R groups vary slightly, giving the derivatives different properties",
    category: "Drug Classes",
  },
  {
    type: "mcq",
    question: "What does 'narrow spectrum' mean in relation to antibiotics?",
    choices: [
      "Effective against viruses",
      "Kills specific organism, can only be used when type of bacteria is known",
      "Affects a broad range of bacteria",
      "Targets both bacteria and fungi",
    ],
    answer: "B",
    explanation:
      "Narrow spectrum antibiotics kill specific organisms and are used when the type of bacteria is known.",
    source_quote:
      "Narrow vs broad spectrum\nnarrow spectrum - kills specific organism, can only be used when type of bacteria is known\nbroad spectrum - affecting broad range of gram-negative and gram-positive bacteria; prescribed when causative agent is not known",
    category: "Spectrum",
  },
  {
    type: "mcq",
    question: "What does 'broad spectrum' mean in relation to antibiotics?",
    choices: [
      "Kills only one type of bacteria",
      "Is always bactericidal",
      "Only targets viruses",
      "Affects a broad range of gram-negative and gram-positive bacteria; prescribed when causative agent is not known",
    ],
    answer: "D",
    explanation:
      "Broad spectrum antibiotics affect a broad range of bacteria and are used when the causative agent is not known.",
    source_quote:
      "Narrow vs broad spectrum\nnarrow spectrum - kills specific organism, can only be used when type of bacteria is known\nbroad spectrum - affecting broad range of gram-negative and gram-positive bacteria; prescribed when causative agent is not known",
    category: "Spectrum",
  },
  {
    type: "mcq",
    question:
      "Which of the following is a second generation broad spectrum penicillin?",
    choices: ["Penicillin G", "Methicillin", "Ampicillin", "Penicillin V"],
    answer: "C",
    explanation: "Ampicillin is a second generation broad spectrum penicillin.",
    source_quote:
      "Second generation broad spectrum penicillins\nampicillin (aminopenicillin) and amoxicillin \n\n- broad spectrum, meaning they can kill both gram-positive and gram-negative bacteria\n\n- amino group allows these antibiotics to penetrate the outer membrane of gram-negative bacteria \n\n- amoxicillin has hydroxyl group that makes it more lipid soluble therefore more effective at penetrating outer membrane of gram-negative bacteria",
    category: "Drug Classes",
  },
  {
    type: "mcq",
    question:
      "What chemical group allows ampicillin and amoxicillin to penetrate the outer membrane of gram-negative bacteria?",
    choices: [
      "Sulfur atom",
      "Amino group",
      "Carboxyl group",
      "Phosphate group",
    ],
    answer: "B",
    explanation:
      "The amino group allows these antibiotics to penetrate the outer membrane of gram-negative bacteria.",
    source_quote:
      "Second generation broad spectrum penicillins\nampicillin (aminopenicillin) and amoxicillin \n\n- broad spectrum, meaning they can kill both gram-positive and gram-negative bacteria\n\n- amino group allows these antibiotics to penetrate the outer membrane of gram-negative bacteria \n\n- amoxicillin has hydroxyl group that makes it more lipid soluble therefore more effective at penetrating outer membrane of gram-negative bacteria",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "What additional group does amoxicillin have that increases its lipid solubility?",
    choices: [
      "Methyl group",
      "Hydroxyl group",
      "Amino group",
      "Carboxyl group",
    ],
    answer: "B",
    explanation:
      "Amoxicillin has a hydroxyl group that makes it more lipid soluble.",
    source_quote:
      "Second generation broad spectrum penicillins\nampicillin (aminopenicillin) and amoxicillin \n\n- broad spectrum, meaning they can kill both gram-positive and gram-negative bacteria\n\n- amino group allows these antibiotics to penetrate the outer membrane of gram-negative bacteria \n\n- amoxicillin has hydroxyl group that makes it more lipid soluble therefore more effective at penetrating outer membrane of gram-negative bacteria",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Which penicillin derivatives are narrow spectrum?",
    choices: [
      "Penicillin V and methicillin",
      "Penicillin G and ampicillin",
      "Ampicillin and amoxicillin",
      "Amoxicillin and methicillin",
    ],
    answer: "A",
    explanation: "Penicillin V and methicillin are narrow spectrum.",
    source_quote:
      "Which penicillin derivatives are narrow spectrum?\npenicillin V and methicillin (penicillin G is also narrow spectrum)",
    category: "Spectrum",
  },
  {
    type: "mcq",
    question:
      "Penicillin antibiotics are prone to degradation by what enzymes?",
    choices: [
      "Phosphatases",
      "Transpeptidases",
      "Penicillinases (beta lactamases)",
      "DNA polymerases",
    ],
    answer: "C",
    explanation:
      "Penicillin antibiotics are degraded by penicillinases (beta lactamases).",
    source_quote:
      "Penicillin antibiotics are prone to degradation by _____, enzymes that are produced by bacteria as a defense mechanism. These enzymes cleave the __________ structure of penicillins. ______ is a penicillin-derived antibiotic that is resistant to cleavage by these enzymes.\npenicillinases (beta lactamases), beta-lactam ring, methicillin",
    category: "Mechanism of Resistance",
  },
  {
    type: "mcq",
    question: "What structure do beta-lactamases cleave in penicillins?",
    choices: [
      "Phosphate group",
      "Beta-lactam ring",
      "Hydroxyl group",
      "Aromatic ring",
    ],
    answer: "B",
    explanation: "Beta-lactamases cleave the beta-lactam ring of penicillins.",
    source_quote:
      "Penicillin antibiotics are prone to degradation by _____, enzymes that are produced by bacteria as a defense mechanism. These enzymes cleave the __________ structure of penicillins. ______ is a penicillin-derived antibiotic that is resistant to cleavage by these enzymes.\npenicillinases (beta lactamases), beta-lactam ring, methicillin",
    category: "Mechanism of Resistance",
  },
  {
    type: "mcq",
    question:
      "Which penicillin-derived antibiotic is resistant to cleavage by penicillinases?",
    choices: ["Amoxicillin", "Methicillin", "Ampicillin", "Penicillin G"],
    answer: "B",
    explanation: "Methicillin is resistant to beta-lactamase cleavage.",
    source_quote:
      "Penicillin antibiotics are prone to degradation by _____, enzymes that are produced by bacteria as a defense mechanism. These enzymes cleave the __________ structure of penicillins. ______ is a penicillin-derived antibiotic that is resistant to cleavage by these enzymes.\npenicillinases (beta lactamases), beta-lactam ring, methicillin",
    category: "Mechanism of Resistance",
  },
  {
    type: "mcq",
    question: "Which is the weakest class of beta-lactam antibiotics?",
    choices: ["Penicillins", "Clavams", "Cephalosporins", "Carbapenems"],
    answer: "B",
    explanation: "Clavams are the weakest class of beta-lactam antibiotics.",
    source_quote:
      "Out of all five classes of beta lactam antibiotics, which is the weakest?\nClavams",
    category: "Drug Classes",
  },
  {
    type: "mcq",
    question: "Cephalosporins target which bacterial proteins?",
    choices: [
      "Ribosomes",
      "PBPs (Penicillin Binding Proteins)",
      "RNA polymerases",
      "DNA polymerases",
    ],
    answer: "B",
    explanation: "Cephalosporins target PBPs like penicillins.",
    source_quote:
      "Cephalosporins\n- target PBPs like penicillins do, but are more effective because they are less susceptible to degradation by penicillinases\n- characterized by a six-membered ring attached to a beta-lactam ring\n- there are now 5 generations of cephalosporins, each more effective than the last, with more than 70 different types overall",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Why are cephalosporins more effective than penicillins?",
    choices: [
      "They have a broader spectrum.",
      "They are bacteriostatic.",
      "They are less susceptible to degradation by penicillinases.",
      "They are administered intravenously.",
    ],
    answer: "C",
    explanation:
      "Cephalosporins are more effective because they are less susceptible to penicillinase degradation.",
    source_quote:
      "Cephalosporins\n- target PBPs like penicillins do, but are more effective because they are less susceptible to degradation by penicillinases\n- characterized by a six-membered ring attached to a beta-lactam ring\n- there are now 5 generations of cephalosporins, each more effective than the last, with more than 70 different types overall",
    category: "Mechanism of Resistance",
  },
  {
    type: "mcq",
    question: "What ring structure characterizes cephalosporins?",
    choices: [
      "A five-membered ring with a sulfur atom",
      "A three-membered ring",
      "A single four-membered ring",
      "A six-membered ring attached to a beta-lactam ring",
    ],
    answer: "D",
    explanation:
      "Cephalosporins are characterized by a six-membered ring attached to a beta-lactam ring.",
    source_quote:
      "Cephalosporins\n- target PBPs like penicillins do, but are more effective because they are less susceptible to degradation by penicillinases\n- characterized by a six-membered ring attached to a beta-lactam ring\n- there are now 5 generations of cephalosporins, each more effective than the last, with more than 70 different types overall",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "How many generations of cephalosporins are there?",
    choices: ["3", "2", "5", "7"],
    answer: "C",
    explanation: "There are five generations of cephalosporins.",
    source_quote:
      "Cephalosporins\n- target PBPs like penicillins do, but are more effective because they are less susceptible to degradation by penicillinases\n- characterized by a six-membered ring attached to a beta-lactam ring\n- there are now 5 generations of cephalosporins, each more effective than the last, with more than 70 different types overall",
    category: "Drug Classes",
  },
  {
    type: "mcq",
    question: "What structural feature distinguishes carbapenems?",
    choices: [
      "Sulfur to carbon substitution at the thiazolidine ring and a double bond between C2 and C3 of the five-membered ring",
      "A six-membered ring with an oxygen atom",
      "A three-membered ring",
      "A single four-membered ring",
    ],
    answer: "A",
    explanation:
      "Carbapenems have a sulfur to carbon substitution at the thiazolidine ring and a double bond between C2 and C3.",
    source_quote:
      "Carbapenems\n- sulfur to carbon substitution at the thiazolidine ring and a double bond between C2 and C3 of the five-membered ring\n- effective against 98% of bacteria isolated from hospitals, so reserved for antibiotic resistant infections",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "What percentage of bacteria isolated from hospitals are carbapenems effective against?",
    choices: ["50%", "98%", "75%", "100%"],
    answer: "B",
    explanation:
      "Carbapenems are effective against 98% of bacteria isolated from hospitals.",
    source_quote:
      "Carbapenems\n- sulfur to carbon substitution at the thiazolidine ring and a double bond between C2 and C3 of the five-membered ring\n- effective against 98% of bacteria isolated from hospitals, so reserved for antibiotic resistant infections",
    category: "Spectrum",
  },
  {
    type: "mcq",
    question:
      "Why are carbapenems reserved for antibiotic resistant infections?",
    choices: [
      "They are only available orally.",
      "They are effective against 98% of hospital bacteria.",
      "They are toxic to humans.",
      "They are inexpensive.",
    ],
    answer: "B",
    explanation:
      "Carbapenems are reserved because they are effective against most hospital bacteria.",
    source_quote:
      "Carbapenems\n- sulfur to carbon substitution at the thiazolidine ring and a double bond between C2 and C3 of the five-membered ring\n- effective against 98% of bacteria isolated from hospitals, so reserved for antibiotic resistant infections",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question: "What structural feature characterizes monobactams?",
    choices: [
      "A six-membered ring attached to a beta-lactam ring",
      "A five-membered ring with a sulfur atom",
      "A fused double ring structure",
      "A single four-membered beta-lactam ring",
    ],
    answer: "D",
    explanation:
      "Monobactams are characterized by a single four-membered beta-lactam ring.",
    source_quote:
      "Monobactams\n- characterized by a single four-membered beta-lactam ring\n- specifically target gram-negative bacteria",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Monobactams specifically target which type of bacteria?",
    choices: [
      "Gram-negative",
      "Gram-positive",
      "Acid-fast",
      "Both gram-positive and gram-negative",
    ],
    answer: "A",
    explanation: "Monobactams specifically target gram-negative bacteria.",
    source_quote:
      "Monobactams\n- characterized by a single four-membered beta-lactam ring\n- specifically target gram-negative bacteria",
    category: "Spectrum",
  },
  {
    type: "mcq",
    question: "What is the main function of clavams as antibiotics?",
    choices: [
      "They are strong bactericidal agents.",
      "They directly inhibit PBPs.",
      "They mimic other beta-lactam antibiotics and saturate beta-lactamases, defending against antibiotic resistance.",
      "They inhibit DNA replication.",
    ],
    answer: "C",
    explanation:
      "Clavams act as weak antibiotics but saturate beta-lactamases to defend against resistance.",
    source_quote:
      "Clavams\nweak antibiotic, but can mimic other beta-lactam antibiotics > saturates beta lactamases > defense against antibiotic resistance to penicillins",
    category: "Mechanism of Resistance",
  },
  {
    type: "mcq",
    question:
      "What is the most common example of a clavam antibiotic being administered with another beta-lactam antibiotic?",
    choices: [
      "Clavulanic acid with cephalosporin",
      "Clavulanic acid with amoxicillin (Augmentin)",
      "Clavulanic acid with penicillin G",
      "Clavulanic acid with vancomycin",
    ],
    answer: "B",
    explanation:
      "Clavulanic acid is administered with amoxicillin as Augmentin.",
    source_quote:
      "What is the most common example of a clavam antibiotic being administered with another beta-lactam antibiotic?\n- clavulanic acid (a clavam) is administered with amoxicillin in a treatment known as augmentin\n- effective against H. influenzai (formerly known as B. influenzai)",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question:
      "Augmentin (amoxicillin + clavulanic acid) is effective against which pathogen?",
    choices: ["S. aureus", "E. coli", "H. influenzae", "P. aeruginosa"],
    answer: "C",
    explanation: "Augmentin is effective against H. influenzae.",
    source_quote:
      "What is the most common example of a clavam antibiotic being administered with another beta-lactam antibiotic?\n- clavulanic acid (a clavam) is administered with amoxicillin in a treatment known as augmentin\n- effective against H. influenzai (formerly known as B. influenzai)",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question:
      "Which of the following is NOT a main type of non beta-lactam cell wall synthesis inhibitor?",
    choices: ["Cycloserine", "Macrolides", "Vancomycin", "Bacitracin"],
    answer: "B",
    explanation: "Macrolides are not cell wall synthesis inhibitors.",
    source_quote:
      "Main types of non beta-lactam cell wall synthesis inhibitors\n- peptides - vancomycin and bacitracin\n- cycloserine\n- fosfomysin",
    category: "Drug Classes",
  },
  {
    type: "mcq",
    question: "When was vancomycin introduced to the market?",
    choices: ["1958", "1945", "1969", "1953"],
    answer: "A",
    explanation: "Vancomycin was introduced to the market in 1958.",
    source_quote:
      "Vancomycin\n- isolated from actinobacteria in 1953 > introduced to market in only 5 years (1958)\n- glycoprotein composed of combination of amino acids and sugars\n- synthesized by a non-ribosomal peptide synthase",
    category: "History",
  },
  {
    type: "mcq",
    question: "What is vancomycin composed of?",
    choices: [
      "Only sugars",
      "Lipids and sugars",
      "A combination of amino acids and sugars (glycoprotein)",
      "Only amino acids",
    ],
    answer: "C",
    explanation:
      "Vancomycin is a glycoprotein composed of amino acids and sugars.",
    source_quote:
      "Vancomycin\n- isolated from actinobacteria in 1953 > introduced to market in only 5 years (1958)\n- glycoprotein composed of combination of amino acids and sugars\n- synthesized by a non-ribosomal peptide synthase",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "How is vancomycin synthesized?",
    choices: [
      "By RNA polymerase",
      "By a non-ribosomal peptide synthase",
      "By DNA polymerase",
      "By ribosomal protein synthesis",
    ],
    answer: "B",
    explanation:
      "Vancomycin is synthesized by a non-ribosomal peptide synthase.",
    source_quote:
      "Vancomycin\n- isolated from actinobacteria in 1953 > introduced to market in only 5 years (1958)\n- glycoprotein composed of combination of amino acids and sugars\n- synthesized by a non-ribosomal peptide synthase",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Why is vancomycin only effective against gram-positive bacteria?",
    choices: [
      "It is degraded in the periplasmic space.",
      "It binds only to gram-positive DNA.",
      "It is inactivated by gram-negative enzymes.",
      "It is a large molecule (1.4 kDa) that cannot pass through gram-negative porins.",
    ],
    answer: "D",
    explanation:
      "Vancomycin's large size prevents it from passing through gram-negative porins.",
    source_quote:
      "Why is vancomycin only effective against gram-positive bacteria?\n- large, 1.4kDa molecule\n- cannot pass thru porins of gram neg bacteria\n- also the case for a lot of peptide antibiotics",
    category: "Spectrum",
  },
  {
    type: "mcq",
    question:
      "Vancomycin is effective against which resistant pathogen, making it a last reserve antibiotic?",
    choices: ["VRE", "P. aeruginosa", "E. coli", "MRSA"],
    answer: "D",
    explanation: "Vancomycin is effective against MRSA.",
    source_quote:
      "Because of its unique mechanism of action, vancomycin is effective against ______. This makes it a last reserve antibiotic.\nMRSA",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question: "What is the mechanism of action of vancomycin?",
    choices: [
      "It binds terminal D-ala-D-ala dipeptide on pentapeptide of lipid II, caps the dipeptide, shielding it from PBPs, and prevents cross-linking.",
      "It disrupts the outer membrane.",
      "It inhibits DNA gyrase.",
      "It blocks ribosomal subunits.",
    ],
    answer: "A",
    explanation:
      "Vancomycin binds the terminal D-ala-D-ala dipeptide, preventing cross-linking and cell wall synthesis.",
    source_quote:
      "Mechanism of action of Vancomycin\nbinds terminal D-ala-D-ala dipeptide on pentapeptide of lipid II molecule > caps dipeptide, shielding it from PBPs > prevents lipid II incorporation into peptidoglycan > prevents cross-linking > weakens cell wall > bacteria susceptible to lysis",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "When did vancomycin-resistant staphylococci (VRSA) and enterococci (VRE) first emerge?",
    choices: ["1969", "1989", "1958", "1975"],
    answer: "B",
    explanation: "VRSA and VRE first emerged in 1989.",
    source_quote:
      "when did Vancomycin-resistant staphylococci (VRSA) and enterococci (VRE) first emerge? Why did it take this long for resistance to appear?\n- in 1989, 30 years after introduction of vancomycin into clinical use\n- took so long because it is a last resort antibiotic, so use was very limited",
    category: "Epidemiology",
  },
  {
    type: "mcq",
    question:
      "Why did it take 30 years for vancomycin resistance to appear after its introduction?",
    choices: [
      "Because it was combined with penicillin.",
      "Because bacteria could not develop resistance.",
      "Because it was not used in hospitals.",
      "Because vancomycin was a last resort antibiotic and its use was very limited.",
    ],
    answer: "D",
    explanation:
      "Resistance took time to appear because vancomycin use was limited as a last resort antibiotic.",
    source_quote:
      "when did Vancomycin-resistant staphylococci (VRSA) and enterococci (VRE) first emerge? Why did it take this long for resistance to appear?\n- in 1989, 30 years after introduction of vancomycin into clinical use\n- took so long because it is a last resort antibiotic, so use was very limited",
    category: "Epidemiology",
  },
  {
    type: "mcq",
    question:
      "What is the main advantage of antibiotics that target the bacterial cell wall?",
    choices: [
      "Cell walls are not present in eukaryotes, so these antibiotics inhibit bacterial growth without affecting the host.",
      "They are absorbed more rapidly.",
      "They are less likely to cause resistance.",
      "They are more potent than other antibiotics.",
    ],
    answer: "A",
    explanation:
      "Antibiotics that target the cell wall are selective for bacteria and do not affect eukaryotic host cells.",
    source_quote:
      "What is the main advantage to antibiotics that target the bacterial cell wall?\ncell walls are not present in eukaryotes > way to inhibit bacterial growth without affecting the host",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "From what was the bacitracin-producing strain of Bacillus isolated?",
    choices: [
      "A fracture wound of seven year old Margaret Tracy",
      "A hospital sink",
      "A soil sample",
      "A cow's udder",
    ],
    answer: "A",
    explanation:
      "Bacitracin-producing Bacillus was isolated from Margaret Tracy's fracture wound.",
    source_quote:
      "Bacitracin\nstrain of bacillus isolated from fracture wound of seven year old margaret tracy > bacteria exhibited strong antibacterial property",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "What is the role of C-55-isoprenyl pyrophosphate flippase in bacterial cell wall synthesis?",
    choices: [
      "It synthesizes peptidoglycan monomers.",
      "It acts as a ribosomal subunit.",
      "It facilitates transport of lipid II across the bacterial membrane.",
      "It degrades beta-lactam antibiotics.",
    ],
    answer: "C",
    explanation:
      "C-55-isoprenyl pyrophosphate flippase transports lipid II across the membrane.",
    source_quote:
      "C-55-isoprenyl pyrophosphate flippase\n- facilitates transport of lipid II across bacterial membrane\n- binds to lipid I in cytoplasm > lipid I modified with NAG to become lipid II > enzyme flips lipid II across membrane into periplasm > lipid II then incorp into peptidoglycan\n- c-55-isoprenyl pyrophosphate flippase then recharged/flipped back into cytoplasm via dephosphorylation",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "What does bacitracin inhibit in bacterial cell wall synthesis?",
    choices: [
      "Protein synthesis",
      "DNA replication",
      "Transpeptidase activity",
      "Dephosphorylation of C-55-isoprenyl pyrophosphate flippase",
    ],
    answer: "D",
    explanation:
      "Bacitracin inhibits dephosphorylation of the flippase enzyme.",
    source_quote:
      "Mechanism of action of bacitracin\nbinds to c-55-isoprenyl pyrophosphate flippase > inhibits its dephosphorylation > enzyme does not recharge > no incorporation of lipid II into peptidoglycan",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Why is bacitracin only used topically?",
    choices: [
      "It is unstable in the bloodstream.",
      "It is rapidly degraded in the liver.",
      "It causes kidney toxicity.",
      "It is poorly absorbed orally.",
    ],
    answer: "C",
    explanation:
      "Bacitracin is only used topically because of kidney toxicity.",
    source_quote: "Why is bacitracin only used topically?\nkidney toxicity",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question: "Bacitracin is approved by the FDA for use in which industry?",
    choices: [
      "Poultry agriculture",
      "Aquaculture",
      "Dairy farming",
      "Beef cattle",
    ],
    answer: "A",
    explanation: "Bacitracin is approved for use in poultry agriculture.",
    source_quote:
      "Bacitracin is approved by the FDA for use in _______ ________\npoultry agriculture",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question: "From which organism was cycloserine isolated in 1954?",
    choices: ["Penicillium", "Streptomyces", "Bacillus", "Actinobacteria"],
    answer: "B",
    explanation: "Cycloserine was isolated from Streptomyces in 1954.",
    source_quote:
      "Cycloserine\n- isolated from streptomyces in 1954\n- structural analog of D-alanine",
    category: "History",
  },
  {
    type: "mcq",
    question: "Cycloserine is a structural analog of which amino acid?",
    choices: ["Glycine", "L-alanine", "Serine", "D-alanine"],
    answer: "D",
    explanation: "Cycloserine is a structural analog of D-alanine.",
    source_quote:
      "Cycloserine\n- isolated from streptomyces in 1954\n- structural analog of D-alanine",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Why is the small size of cycloserine important?",
    choices: [
      "It allows penetration of the membrane of gram-negative bacteria, making it broad spectrum.",
      "It enhances protein synthesis.",
      "It increases toxicity.",
      "It prevents degradation by beta-lactamases.",
    ],
    answer: "A",
    explanation:
      "Cycloserine's small size allows it to penetrate gram-negative membranes.",
    source_quote:
      "Why is cycloserine size important?\n- small size allows it to penetrate membrane of gram-negative bacteria > acts as a broad spectrum antibiotic\n- small size also enables it to reach sites in the human body usually not accessible to antibiotics > used as a secondary choice for multi-drug resistant and extensive-drug resistant tuberculosis",
    category: "Pharmacokinetics",
  },
  {
    type: "mcq",
    question:
      "What is a clinical use for cycloserine related to its ability to reach sites in the human body not accessible to most antibiotics?",
    choices: [
      "It is used to treat viral infections.",
      "It is used for fungal infections.",
      "It is used as a secondary choice for multi-drug resistant and extensive-drug resistant tuberculosis.",
      "It is used as a first-line agent for MRSA.",
    ],
    answer: "C",
    explanation:
      "Cycloserine is used as a secondary choice for resistant tuberculosis due to its pharmacokinetics.",
    source_quote:
      "Why is cycloserine size important?\n- small size allows it to penetrate membrane of gram-negative bacteria > acts as a broad spectrum antibiotic\n- small size also enables it to reach sites in the human body usually not accessible to antibiotics > used as a secondary choice for multi-drug resistant and extensive-drug resistant tuberculosis",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question:
      "Which enzyme does cycloserine inhibit that is responsible for the racemization of L-alanine to D-alanine?",
    choices: [
      "Transpeptidase",
      "MurA",
      "D-ala-D-ala ligase (DdI)",
      "Alanine racemase (Alr)",
    ],
    answer: "D",
    explanation: "Cycloserine inhibits alanine racemase (Alr).",
    source_quote:
      "Cycloserine mechanism of action\n1) inhibits alanine racemase (Alr), an enzyme responsible for the racemization of L-alanine to D-alanine\n2) inhibits D-ala-D-ala ligase (DdI), enzyme responsible for ligating the two alanines > lipid II lacks dipeptide > no substrate for PBP",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Which enzyme does cycloserine inhibit that is responsible for ligating two alanines?",
    choices: [
      "Alanine racemase (Alr)",
      "D-ala-D-ala ligase (DdI)",
      "MurA",
      "Transpeptidase",
    ],
    answer: "B",
    explanation: "Cycloserine inhibits D-ala-D-ala ligase (DdI).",
    source_quote:
      "Cycloserine mechanism of action\n1) inhibits alanine racemase (Alr), an enzyme responsible for the racemization of L-alanine to D-alanine\n2) inhibits D-ala-D-ala ligase (DdI), enzyme responsible for ligating the two alanines > lipid II lacks dipeptide > no substrate for PBP",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "From which organism was fosfomycin isolated?",
    choices: ["Streptomyces", "Penicillium", "Bacillus", "Actinobacteria"],
    answer: "A",
    explanation: "Fosfomycin was isolated from Streptomyces.",
    source_quote:
      "Fosfomycin\n- isolated in 1969 from streptomyces\n- highly reactive epoxide ring with broad spectrum bactericidal properties\n- enters cell via hexose monophosphate or the glycerophosphate transporter (both sugar transporters)",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "What structural feature gives fosfomycin its broad spectrum bactericidal properties?",
    choices: [
      "Peptide backbone",
      "Highly reactive epoxide ring",
      "Six-membered ring",
      "Beta-lactam ring",
    ],
    answer: "B",
    explanation: "Fosfomycin has a highly reactive epoxide ring.",
    source_quote:
      "Fosfomycin\n- isolated in 1969 from streptomyces\n- highly reactive epoxide ring with broad spectrum bactericidal properties\n- enters cell via hexose monophosphate or the glycerophosphate transporter (both sugar transporters)",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "How does fosfomycin enter bacterial cells?",
    choices: [
      "Through porins only",
      "By endocytosis",
      "By passive diffusion",
      "Via hexose monophosphate or glycerophosphate transporter (both sugar transporters)",
    ],
    answer: "D",
    explanation: "Fosfomycin enters cells via sugar transporters.",
    source_quote:
      "Fosfomycin\n- isolated in 1969 from streptomyces\n- highly reactive epoxide ring with broad spectrum bactericidal properties\n- enters cell via hexose monophosphate or the glycerophosphate transporter (both sugar transporters)",
    category: "Pharmacokinetics",
  },
  {
    type: "mcq",
    question: "Where does fosfomycin operate within the bacterial cell?",
    choices: [
      "On the outer membrane",
      "In the bacterial cytoplasm",
      "In the cell wall",
      "In the periplasmic space",
    ],
    answer: "B",
    explanation: "Fosfomycin operates in the bacterial cytoplasm.",
    source_quote:
      "Fosfomycin mechanism of action\n- operates in bacterial cytoplasm\n- inhibits MurA, an enzyme that catalyzes the addition of enolpyruvate to UDP-N-acetylglucosamine",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Which type of molecule is required as a building block for DNA synthesis?",
    choices: [
      "Deoxynucleoside triphosphates (dNTPs)",
      "Fatty acids",
      "Ribonucleoside monophosphates (rNMPs)",
      "Amino acids",
    ],
    answer: "A",
    explanation:
      "DNA synthesis requires deoxynucleoside triphosphates (dNTPs) as building blocks.",
    source_quote:
      "DNA synthesis requires __________ (dNTP) triphosphates of each of these bases:\nnucleoside\ndATP, dGTP, dCTP, dTTP",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Which of the following is NOT a deoxynucleoside triphosphate required for DNA synthesis?",
    choices: ["dUTP", "dATP", "dTTP", "dGTP"],
    answer: "A",
    explanation:
      "dUTP is not used in DNA synthesis; dATP, dGTP, dCTP, and dTTP are the required dNTPs.",
    source_quote:
      "DNA synthesis requires __________ (dNTP) triphosphates of each of these bases:\nnucleoside\ndATP, dGTP, dCTP, dTTP",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "What is the correct order of precursors in the synthesis of dTTP?",
    choices: [
      "dUMP > dTMP > dTTP",
      "dTMP > dUMP > dTTP",
      "dUMP > dTTP > dTMP",
      "dTTP > dTMP > dUMP",
    ],
    answer: "A",
    explanation: "dUMP is converted to dTMP, which is then converted to dTTP.",
    source_quote:
      "Fill in the blanks regarding the synthesis of dTTP : _______ > ________ > dTTP\ndUMP, dTMP",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Which enzyme converts dUMP to dTMP?",
    choices: [
      "DNA polymerase",
      "Thymidylate synthase",
      "Dihydrofolate reductase",
      "Ribonucleotide reductase",
    ],
    answer: "B",
    explanation:
      "Thymidylate synthase catalyzes the conversion of dUMP to dTMP.",
    source_quote:
      "Thymidylate synthase\n- converts dUMP to dTMP\n- requires cofactor methylene tetrahydrofolate\n- byproduct of reaction: dihydrofolate",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Which cofactor is required by thymidylate synthase for the conversion of dUMP to dTMP?",
    choices: ["FAD", "Biotin", "Methylene tetrahydrofolate", "NADPH"],
    answer: "C",
    explanation:
      "Thymidylate synthase requires methylene tetrahydrofolate as a cofactor.",
    source_quote:
      "Thymidylate synthase\n- converts dUMP to dTMP\n- requires cofactor methylene tetrahydrofolate\n- byproduct of reaction: dihydrofolate",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "What is a byproduct of the thymidylate synthase reaction?",
    choices: ["Dihydrofolate", "dUTP", "Methionine", "NADP+"],
    answer: "A",
    explanation:
      "Dihydrofolate is produced as a byproduct when thymidylate synthase converts dUMP to dTMP.",
    source_quote:
      "Thymidylate synthase\n- converts dUMP to dTMP\n- requires cofactor methylene tetrahydrofolate\n- byproduct of reaction: dihydrofolate",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Which enzyme reduces ribonucleotides to deoxyribonucleotides?",
    choices: [
      "Thymidylate synthase",
      "DNA polymerase",
      "Adenylate kinase",
      "Ribonucleotide reductase",
    ],
    answer: "D",
    explanation:
      "Ribonucleotide reductase reduces ribonucleotides to deoxyribonucleotides.",
    source_quote:
      "Ribonucleotide reductase\nreduces ribonucleotides to deoxyribonucleotides ie dTMP to dTTP",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Ribonucleotide reductase converts dTMP to which molecule?",
    choices: ["dATP", "dUMP", "dCTP", "dTTP"],
    answer: "D",
    explanation: "Ribonucleotide reductase reduces dTMP to form dTTP.",
    source_quote:
      "Ribonucleotide reductase\nreduces ribonucleotides to deoxyribonucleotides ie dTMP to dTTP",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Why might methylene tetrahydrofolate availability limit cellular replication?",
    choices: [
      "It directly provides energy for DNA replication.",
      "It is a cofactor for ribonucleotide reductase.",
      "It is required in large quantities to convert dUMP to dTMP during DNA synthesis.",
      "It is needed for protein synthesis.",
    ],
    answer: "C",
    explanation:
      "Many dTTPs are needed for DNA synthesis, so many methylene tetrahydrofolates are required for dUMP to dTMP conversion.",
    source_quote:
      "How could the methylene tetrahydrofolate cofactor limit cellular replication? What is required to keep a good supply of methylene tetrahydrofolate?\n- many dTTPs are required for each round of DNA synthesis, thus many methylene tetrahydrofolates are required for conversion of dUMP to dTMP\n- conversion of dihydrofolate back into methylene tetrahydrofolate required",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "What is required to replenish methylene tetrahydrofolate in the cell?",
    choices: [
      "Synthesis from glucose",
      "Direct uptake from the environment",
      "Oxidation of folic acid",
      "Conversion of dihydrofolate back into methylene tetrahydrofolate",
    ],
    answer: "D",
    explanation:
      "Dihydrofolate must be converted back into methylene tetrahydrofolate to maintain its supply.",
    source_quote:
      "How could the methylene tetrahydrofolate cofactor limit cellular replication? What is required to keep a good supply of methylene tetrahydrofolate?\n- many dTTPs are required for each round of DNA synthesis, thus many methylene tetrahydrofolates are required for conversion of dUMP to dTMP\n- conversion of dihydrofolate back into methylene tetrahydrofolate required",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Which enzyme converts dihydrofolate to tetrahydrofolate in both eukaryotes and prokaryotes?",
    choices: [
      "DNA polymerase",
      "Dihydrofolate reductase (DHFR)",
      "Ribonucleotide reductase",
      "Thymidylate synthase",
    ],
    answer: "B",
    explanation:
      "Dihydrofolate reductase (DHFR) converts dihydrofolate to tetrahydrofolate.",
    source_quote:
      "Dihydrofolate is turned into tetrahydrofolate by the enzyme ______, an essential enzyme in eukaryotes and prokaryotes. The tetrahydrofolate is then converted into methylene tetrahydrofolate by serine transhydroxymethylase.\ndihydrofolate reductase (DHFR)",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "What enzyme converts tetrahydrofolate to methylene tetrahydrofolate?",
    choices: [
      "Thymidylate synthase",
      "Serine transhydroxymethylase",
      "Dihydrofolate reductase",
      "Folate hydrolase",
    ],
    answer: "B",
    explanation:
      "Serine transhydroxymethylase converts tetrahydrofolate into methylene tetrahydrofolate.",
    source_quote:
      "Dihydrofolate is turned into tetrahydrofolate by the enzyme ______, an essential enzyme in eukaryotes and prokaryotes. The tetrahydrofolate is then converted into methylene tetrahydrofolate by serine transhydroxymethylase.\ndihydrofolate reductase (DHFR)",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Methotrexate inhibits which enzyme in humans?",
    choices: [
      "Thymidylate synthase",
      "Dihydrofolate reductase (DHFR)",
      "DNA polymerase",
      "Ribonucleotide reductase",
    ],
    answer: "B",
    explanation: "Methotrexate inhibits DHFR in humans.",
    source_quote:
      "Methotrexate\ncancer chemotherapeutic agent that binds to DHFR in humans to inhibit the replication of rapidly dividing cells",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "What is the primary clinical use of methotrexate?",
    choices: [
      "Antibacterial agent",
      "Antiviral therapy",
      "Antifungal agent",
      "Cancer chemotherapy",
    ],
    answer: "D",
    explanation:
      "Methotrexate is primarily used as a cancer chemotherapeutic agent.",
    source_quote:
      "Methotrexate\ncancer chemotherapeutic agent that binds to DHFR in humans to inhibit the replication of rapidly dividing cells",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question:
      "Methotrexate and trimethoprim mimic the structure of which molecule?",
    choices: ["Methionine", "Tetrahydrofolate", "Dihydrofolate", "dUMP"],
    answer: "C",
    explanation: "Both methotrexate and trimethoprim mimic dihydrofolate.",
    source_quote: "Methotrexate and trimethoprim mimic\ndihydrofolate",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "In what year was trimethoprim synthesized?",
    choices: ["1962", "1942", "1982", "1950"],
    answer: "A",
    explanation: "Trimethoprim was synthesized in 1962.",
    source_quote:
      "When was trimethoprim synthesized? In general, how does it work?\n- synthesized in 1962\n- potent antibiotic that binds to bacterial DHFR\n- arrests cell cycle (bacteriostatic), but does not kill cells",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "What is the primary molecular target of trimethoprim in bacteria?",
    choices: [
      "Bacterial DNA polymerase",
      "Bacterial dihydrofolate reductase (DHFR)",
      "Bacterial RNA polymerase",
      "Bacterial ribosome",
    ],
    answer: "B",
    explanation: "Trimethoprim binds to bacterial DHFR.",
    source_quote:
      "When was trimethoprim synthesized? In general, how does it work?\n- synthesized in 1962\n- potent antibiotic that binds to bacterial DHFR\n- arrests cell cycle (bacteriostatic), but does not kill cells",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "How does trimethoprim affect bacterial cells?",
    choices: [
      "Induces apoptosis",
      "Causes rapid cell lysis (bactericidal)",
      "Arrests cell cycle (bacteriostatic), but does not kill cells",
      "Inhibits protein synthesis",
    ],
    answer: "C",
    explanation:
      "Trimethoprim is bacteriostatic, arresting the cell cycle but not killing cells.",
    source_quote:
      "When was trimethoprim synthesized? In general, how does it work?\n- synthesized in 1962\n- potent antibiotic that binds to bacterial DHFR\n- arrests cell cycle (bacteriostatic), but does not kill cells",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Is trimethoprim considered a highly selective antibiotic?",
    choices: [
      "Yes, it is highly selective",
      "It only targets Gram-negative bacteria",
      "It only targets Gram-positive bacteria",
      "No, it is broad spectrum",
    ],
    answer: "D",
    explanation: "Trimethoprim is a broad-spectrum antibiotic.",
    source_quote:
      "T or F: Trimethoprim is a highly selective antibiotic.\nFalse, it is a broad spectrum often prescribed to be used in combination with other antibiotics in the treatment of MRSA",
    category: "Spectrum",
  },
  {
    type: "mcq",
    question:
      "Trimethoprim is often prescribed in combination with other antibiotics to treat which infection?",
    choices: ["MRSA", "Syphilis", "Streptococcal pharyngitis", "Tuberculosis"],
    answer: "A",
    explanation: "Trimethoprim is often used in combination therapy for MRSA.",
    source_quote:
      "T or F: Trimethoprim is a highly selective antibiotic.\nFalse, it is a broad spectrum often prescribed to be used in combination with other antibiotics in the treatment of MRSA",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question:
      "Trimethoprim is over how many times more specific for bacterial DHFR than human DHFR?",
    choices: ["1,000", "10,000", "100,000", "1,000,000"],
    answer: "C",
    explanation:
      "Trimethoprim is over 100,000 times more specific for bacterial DHFR than human DHFR.",
    source_quote:
      "Trimethoprim is over __________ times more specific for bacterial DHFR than human DHFR, making it safe to use in humans.\n100,000",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Folate is also known as which vitamin?",
    choices: ["Vitamin B12", "Vitamin B2", "Vitamin B9", "Vitamin B6"],
    answer: "C",
    explanation: "Folate is vitamin B9.",
    source_quote: "What vitamin is folate?\nvitamin B9",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Can bacteria synthesize their own folate?",
    choices: [
      "No, bacteria must supplement folate.",
      "Only Gram-negative bacteria can synthesize folate.",
      "Yes, bacteria can synthesize their own folate.",
      "Only Gram-positive bacteria can synthesize folate.",
    ],
    answer: "C",
    explanation: "Bacteria can synthesize their own folate, unlike humans.",
    source_quote:
      "T or F: Though humans must supplement folate, bacteria can synthesize their own.\nTrue",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "DHF synthesis from GTP requires which two precursors?",
    choices: [
      "Serine and glycine",
      "Dihydropterin and PABA",
      "Methionine and folic acid",
      "Adenine and guanine",
    ],
    answer: "B",
    explanation:
      "Dihydropterin and PABA are required for DHF synthesis from GTP.",
    source_quote:
      "DHF synthesis from GTP requires _______ and _______\ndihydropterin, PABA",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "What does PABA stand for in the context of bacterial dihydrofolate synthesis?",
    choices: [
      "p-aminobenzoate",
      "phenylalanine aminobenzoate",
      "pyridoxal aminobenzoate",
      "para-acetylbenzoic acid",
    ],
    answer: "A",
    explanation: "PABA stands for p-aminobenzoate.",
    source_quote:
      "p-___________ (PABA) is an important precursor in bacterial dihydrofolate synthesis\naminobenzoate",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Which enzyme is essential for the synthesis of dihydrofolate and requires PABA for its function?",
    choices: [
      "Dihydrofolate reductase",
      "Serine transhydroxymethylase",
      "Dihydropteroate synthase (DHPS)",
      "Thymidylate synthase",
    ],
    answer: "C",
    explanation:
      "Dihydropteroate synthase (DHPS) requires PABA for the synthesis of dihydrofolate.",
    source_quote:
      "Dihydropteroate synthase (DHPS)\n- important enzyme in synthesis of dihydrofolate\n- requires p-aminobenzoate (PABA) for functionality",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Who discovered sulfanilamide (sulfa drugs) and in what year?",
    choices: [
      "Waksman, 1944",
      "Domagk, 1932",
      "Ehrlich, 1909",
      "Fleming, 1928",
    ],
    answer: "B",
    explanation: "Sulfanilamide was discovered by Domagk in 1932.",
    source_quote:
      "Sulfanilamide (sulfa drugs)\n- discovered by Domagk in 1932\n- first class of antibacterial drugs\n- mimic PABA > competitive inhibitor of DHPS",
    category: "History",
  },
  {
    type: "mcq",
    question: "Sulfanilamide is the first class of which type of drugs?",
    choices: [
      "Antiparasitic drugs",
      "Antiviral drugs",
      "Antifungal drugs",
      "Antibacterial drugs",
    ],
    answer: "D",
    explanation: "Sulfanilamide is the first class of antibacterial drugs.",
    source_quote:
      "Sulfanilamide (sulfa drugs)\n- discovered by Domagk in 1932\n- first class of antibacterial drugs\n- mimic PABA > competitive inhibitor of DHPS",
    category: "History",
  },
  {
    type: "mcq",
    question: "Sulfanilamide acts as a competitive inhibitor of which enzyme?",
    choices: [
      "Serine transhydroxymethylase",
      "Dihydropteroate synthase (DHPS)",
      "Thymidylate synthase",
      "Dihydrofolate reductase",
    ],
    answer: "B",
    explanation: "Sulfanilamide mimics PABA and competitively inhibits DHPS.",
    source_quote:
      "Sulfanilamide (sulfa drugs)\n- discovered by Domagk in 1932\n- first class of antibacterial drugs\n- mimic PABA > competitive inhibitor of DHPS",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Why are sulfa drugs not considered true antibiotics?",
    choices: [
      "They are toxic to humans",
      "They only target Gram-positive bacteria",
      "They are not of microbial origin",
      "They are bacteriostatic rather than bactericidal",
    ],
    answer: "C",
    explanation:
      "Sulfa drugs are not of microbial origin, so they are not true antibiotics.",
    source_quote:
      "Why are sulfa drugs not true antibiotics?\nthey are not of microbial origin",
    category: "History",
  },
  {
    type: "mcq",
    question: "What is a protodrug?",
    choices: [
      "A drug that is not active in its original form but becomes active once metabolized",
      "A drug that is active only in bacteria",
      "A drug that is only used in cancer therapy",
      "A drug that is resistant to degradation",
    ],
    answer: "A",
    explanation:
      "A protodrug is inactive until metabolized into its active form.",
    source_quote:
      "What is a protodrug?\na drug that is not active in its original form, but becomes active once metabolized",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "What is the protodrug for sulfa-drugs?",
    choices: ["Penicillin", "Prontosil", "Methotrexate", "Trimethoprim"],
    answer: "B",
    explanation: "Prontosil is the protodrug for sulfa-drugs.",
    source_quote:
      "What is the protodrug for sulfa-drugs? How is it activated?\n- prontosil, the first commercial antimicrobial agent\n- turns into active form, sulfonamide, once metabolized by intestinal enzyme in humans",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "How is prontosil activated in humans?",
    choices: [
      "It is directly active without metabolism.",
      "It is activated by exposure to light.",
      "It is metabolized by an intestinal enzyme to form sulfonamide.",
      "It is activated by bacterial enzymes.",
    ],
    answer: "C",
    explanation:
      "Prontosil is converted to sulfonamide by an intestinal enzyme in humans.",
    source_quote:
      "What is the protodrug for sulfa-drugs? How is it activated?\n- prontosil, the first commercial antimicrobial agent\n- turns into active form, sulfonamide, once metabolized by intestinal enzyme in humans",
    category: "Pharmacokinetics",
  },
  {
    type: "mcq",
    question: "Which two antibiotics make up Cotrimoxazol?",
    choices: [
      "Vancomycin and ciprofloxacin",
      "Sulfamethoxazole and trimethoprim",
      "Methotrexate and rifampin",
      "Penicillin and streptomycin",
    ],
    answer: "B",
    explanation:
      "Cotrimoxazol combines sulfamethoxazole (a sulfa drug) and trimethoprim.",
    source_quote:
      "What two antibiotics is the antimicrobial drug Cotrimoxazol composed of, and why is this beneficial?\n- combines a sulfa-drug (sulfamethoxazole) with trimethoprim\n- resistance is less likely because two distinct enzymes are targeted\n- sulfamethoxazole and trimethoprim alone are bacteriostatic, but together become bactericidal > synergistic effect",
    category: "Drug Classes",
  },
  {
    type: "mcq",
    question: "Why is resistance less likely to develop against Cotrimoxazol?",
    choices: [
      "It is only used for short periods",
      "It is rapidly degraded",
      "It is not absorbed by bacteria",
      "Two distinct enzymes are targeted",
    ],
    answer: "D",
    explanation:
      "Cotrimoxazol targets two distinct enzymes, reducing the likelihood of resistance.",
    source_quote:
      "What two antibiotics is the antimicrobial drug Cotrimoxazol composed of, and why is this beneficial?\n- combines a sulfa-drug (sulfamethoxazole) with trimethoprim\n- resistance is less likely because two distinct enzymes are targeted\n- sulfamethoxazole and trimethoprim alone are bacteriostatic, but together become bactericidal > synergistic effect",
    category: "Mechanism of Resistance",
  },
  {
    type: "mcq",
    question:
      "What is the effect when sulfamethoxazole and trimethoprim are used together?",
    choices: [
      "They become ineffective",
      "They become bactericidal due to synergistic effect",
      "They cause toxicity",
      "They remain bacteriostatic",
    ],
    answer: "B",
    explanation: "Together, they are bactericidal due to a synergistic effect.",
    source_quote:
      "What two antibiotics is the antimicrobial drug Cotrimoxazol composed of, and why is this beneficial?\n- combines a sulfa-drug (sulfamethoxazole) with trimethoprim\n- resistance is less likely because two distinct enzymes are targeted\n- sulfamethoxazole and trimethoprim alone are bacteriostatic, but together become bactericidal > synergistic effect",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "What is a synergistic effect in pharmacology?",
    choices: [
      "Combined drugs always cause toxicity",
      "Drugs act independently without affecting each other",
      "Drugs cancel each other's effects",
      "Combined potency of drugs is much higher than the sum of their individual potencies",
    ],
    answer: "D",
    explanation:
      "A synergistic effect means the combined potency is much higher than the sum of individual potencies.",
    source_quote:
      "Synergistic effect\ncombined potency of a combination of drugs is much higher than the sum of their individual potencies",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Which enzyme converts chorismate to aminodeoxychorismate in bacterial PABA synthesis?",
    choices: ["Ribonucleotide reductase", "DHFR", "DHPS", "ADC synthase"],
    answer: "D",
    explanation: "ADC synthase converts chorismate to aminodeoxychorismate.",
    source_quote:
      "How do bacteria synthesize PABA?\nADC synthase converts chorismate into aminodeoxychorismate > ADC lyase converts aminodeoxychorismate into PABA",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Which enzyme converts aminodeoxychorismate into PABA in bacteria?",
    choices: ["DHFR", "ADC synthase", "DHPS", "ADC lyase"],
    answer: "D",
    explanation: "ADC lyase converts aminodeoxychorismate into PABA.",
    source_quote:
      "How do bacteria synthesize PABA?\nADC synthase converts chorismate into aminodeoxychorismate > ADC lyase converts aminodeoxychorismate into PABA",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "What is abyssomicin C and how does it work?",
    choices: [
      "A sulfa drug that inhibits DHPS",
      "A quinolone that inhibits DNA gyrase",
      "An antibiotic that inhibits ADC synthase and ADC lyase, blocking PABA and dihydrofolate synthesis",
      "A cancer chemotherapeutic agent that inhibits DHFR",
    ],
    answer: "C",
    explanation:
      "Abyssomicin C inhibits ADC synthase and lyase, blocking PABA and dihydrofolate synthesis.",
    source_quote:
      "What is abyssomicin C and how does it work? When was it isolated and from what bacteria?\n- recently discovered antibiotic that inhibits ADC synthase and ACD lyase > inhibits PABA > inhibits dihydrofolate synthesis > bacteria can't make dTTP > cell cycle arrest\n- isolated in 2004 from deep sea anctinomycin",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "When and from what was abyssomicin C isolated?",
    choices: [
      "2000, Bacillus subtilis",
      "1932, Streptomyces",
      "1962, Escherichia coli",
      "2004, deep sea actinomycin",
    ],
    answer: "D",
    explanation:
      "Abyssomicin C was isolated in 2004 from deep sea actinomycin.",
    source_quote:
      "What is abyssomicin C and how does it work? When was it isolated and from what bacteria?\n- recently discovered antibiotic that inhibits ADC synthase and ACD lyase > inhibits PABA > inhibits dihydrofolate synthesis > bacteria can't make dTTP > cell cycle arrest\n- isolated in 2004 from deep sea anctinomycin",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "Why is it difficult to develop antibiotics against the central dogma?",
    choices: [
      "Because bacteria do not use DNA or RNA",
      "Because these processes are present in both bacteria and humans, making selective targeting challenging",
      "Because antibiotics cannot penetrate the cell membrane",
      "Because these processes are not essential for bacterial growth",
    ],
    answer: "B",
    explanation:
      "Central dogma processes are conserved, so targeting bacteria without affecting humans is difficult.",
    source_quote:
      "Why is it difficult to develop antibiotics against the central dogma?\nwe need to target these processes in bacteria but not in humans",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Which antibiotics target the process of DNA replication?",
    choices: [
      "Cell wall synthesis inhibitors like penicillin",
      "RNA polymerase inhibitors like rifamycin",
      "DNA gyrase inhibitors like quinolones and novobiocin",
      "Protein synthesis inhibitors like tetracyclines",
    ],
    answer: "C",
    explanation:
      "Quinolones and novobiocin are DNA gyrase inhibitors that target DNA replication.",
    source_quote:
      "Which antibiotics target replication?\n- DNA gyrase inhibitors like quinolones and novobiocin\n- DNA disruptors like metronidazole",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Which of the following is a DNA disruptor used as an antibiotic?",
    choices: ["Rifampin", "Metronidazole", "Vancomycin", "Tetracycline"],
    answer: "B",
    explanation: "Metronidazole is a DNA disruptor used as an antibiotic.",
    source_quote:
      "Which antibiotics target replication?\n- DNA gyrase inhibitors like quinolones and novobiocin\n- DNA disruptors like metronidazole",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "What is the core structural feature of quinolones?",
    choices: [
      "Macrolide lactone ring",
      "Beta-lactam ring",
      "Tetracyclic ring",
      "4-quinolone bicyclic ring",
    ],
    answer: "D",
    explanation: "Quinolones have a 4-quinolone bicyclic ring structure.",
    source_quote: "Quinolone structure\n4-quinolone bicyclic ring",
    category: "Drug Classes",
  },
  {
    type: "mcq",
    question:
      "Who discovered the antimicrobial activity of nalidixic acid and in what year?",
    choices: ["Esher, 1962", "Fleming, 1928", "Waksman, 1944", "Domagk, 1932"],
    answer: "A",
    explanation:
      "Esher accidentally discovered nalidixic acid's activity in 1962.",
    source_quote:
      "Who discovered the antimicrobial activity of the quinolone nalidixic acid and when? By what year was nalidixic acid commercially available, and for the treatment of what condition?\n- activity accidentally discovered in 1962 by Esher\n- nalidixic acid available in 1964 for treatment of UTIs",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "Nalidixic acid became commercially available in 1964 for the treatment of which condition?",
    choices: [
      "Malaria",
      "Urinary tract infections (UTIs)",
      "Pneumonia",
      "Tuberculosis",
    ],
    answer: "B",
    explanation: "Nalidixic acid was available in 1964 for UTIs.",
    source_quote:
      "Who discovered the antimicrobial activity of the quinolone nalidixic acid and when? By what year was nalidixic acid commercially available, and for the treatment of what condition?\n- activity accidentally discovered in 1962 by Esher\n- nalidixic acid available in 1964 for treatment of UTIs",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question:
      "What structural modification characterizes fluoroquinolones like ciprofloxacin?",
    choices: [
      "Addition of a fluorine atom to position six of the quinolone ring",
      "Cyclization of the macrolide ring",
      "Hydroxylation of the tetracyclic ring",
      "Addition of a methyl group to the beta-lactam ring",
    ],
    answer: "A",
    explanation:
      "Fluoroquinolones have a fluorine atom at position six of the quinolone ring.",
    source_quote:
      "Fluoroquinolone (Ciproflaxin) Structure\nddition of fluorine atom to position six of quinolone bicyclic ring > expanded the antimicrobial abilities of first generation quinolones > broad-spectrum bactericidal",
    category: "Drug Classes",
  },
  {
    type: "mcq",
    question:
      "How did the addition of a fluorine atom to quinolones affect their antimicrobial properties?",
    choices: [
      "Expanded their antimicrobial abilities, making them broad-spectrum and bactericidal",
      "Made them ineffective against Gram-negative bacteria",
      "Reduced their toxicity",
      "Limited their use to topical applications",
    ],
    answer: "A",
    explanation:
      "The addition of fluorine expanded the spectrum and potency of fluoroquinolones.",
    source_quote:
      "Fluoroquinolone (Ciproflaxin) Structure\nddition of fluorine atom to position six of quinolone bicyclic ring > expanded the antimicrobial abilities of first generation quinolones > broad-spectrum bactericidal",
    category: "Spectrum",
  },
  {
    type: "mcq",
    question: "Which enzymes are inhibited by fluoroquinolones?",
    choices: [
      "Serine transhydroxymethylase",
      "Type II topoisomerases, including DNA gyrase and topoisomerase IV",
      "Ribosomes",
      "RNA polymerase",
    ],
    answer: "B",
    explanation:
      "Fluoroquinolones inhibit type II topoisomerases, including DNA gyrase and topoisomerase IV.",
    source_quote:
      "Why are fluoroquinolones significant? Which enzymes do fluoroquinolones inhibit?\n- one of the most widely used antibiotics\n- type II topoisomerase inhibitor, including gyrase and topoisomerase IV",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "What is the primary function of DNA gyrase in bacteria?",
    choices: [
      "Synthesis of ribosomal RNA",
      "Degradation of DNA",
      "Introduction of negative supercoils and relaxation of positively supercoiled DNA",
      "Transcription of messenger RNA",
    ],
    answer: "C",
    explanation:
      "DNA gyrase introduces negative supercoils and relaxes positive supercoils in DNA.",
    source_quote:
      "DNA gyrase\n- responsible for introduction of negative supercoils into DNA and relaxation of positively supercoiled DNA\n- heterotetrameric (GyrA and GyrB)\n- GyrA mediates enzyme-catalyzed DNA breakage-reunion\n- GyrB has ATPase activity and facilitates strand passing",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Which subunit of DNA gyrase mediates enzyme-catalyzed DNA breakage and reunion?",
    choices: ["GyrB", "ParE", "GyrA", "ParC"],
    answer: "C",
    explanation: "GyrA mediates DNA breakage-reunion in DNA gyrase.",
    source_quote:
      "DNA gyrase\n- responsible for introduction of negative supercoils into DNA and relaxation of positively supercoiled DNA\n- heterotetrameric (GyrA and GyrB)\n- GyrA mediates enzyme-catalyzed DNA breakage-reunion\n- GyrB has ATPase activity and facilitates strand passing",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Which subunit of DNA gyrase has ATPase activity and facilitates strand passing?",
    choices: ["GyrB", "ParE", "ParC", "GyrA"],
    answer: "A",
    explanation: "GyrB has ATPase activity and facilitates strand passing.",
    source_quote:
      "DNA gyrase\n- responsible for introduction of negative supercoils into DNA and relaxation of positively supercoiled DNA\n- heterotetrameric (GyrA and GyrB)\n- GyrA mediates enzyme-catalyzed DNA breakage-reunion\n- GyrB has ATPase activity and facilitates strand passing",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "To which subunit of DNA gyrase do fluoroquinolones bind?",
    choices: ["ParC", "GyrA", "GyrB", "ParE"],
    answer: "B",
    explanation: "Fluoroquinolones bind to the GyrA subunit of DNA gyrase.",
    source_quote:
      "To which subunit of DNA gyrase do fluoroquinolones bind?\nGyrA",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Which subunit of topoisomerase IV do fluoroquinolones bind to?",
    choices: ["GyrB", "ParC", "GyrA", "ParE"],
    answer: "B",
    explanation:
      "Fluoroquinolones bind to the ParC subunit of topoisomerase IV.",
    source_quote:
      "To which subunit of topoisomerase IV does fluoroquinolones bind?\nParC",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Why are bacterial gyrases a good target for antibiotics?",
    choices: [
      "Because they are involved in protein synthesis",
      "Because gyrases are identical in humans and bacteria",
      "Because they are only present in Gram-negative bacteria",
      "Because bacterial DNA is packaged into supercoils by gyrases, unlike human DNA which is packaged around histones",
    ],
    answer: "D",
    explanation:
      "Bacterial DNA is packaged by gyrases (not found in humans), making them good antibiotic targets.",
    source_quote:
      "Why are gyrases a good target for antibiotics?\nthey package DNA into supercoils whereas human DNA is packaged around histones > targeting bacteiral gyrases will not interfere with human DNA",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Why is the use of fluoroquinolones controversial?",
    choices: [
      "They are ineffective against most bacteria",
      "They are too expensive",
      "They are only available intravenously",
      "They can cause severe toxicity to humans",
    ],
    answer: "D",
    explanation:
      "Fluoroquinolones are controversial due to their severe toxicity to humans.",
    source_quote:
      "Why is the use of fluoroquinolones controversial?\nsevere toxicity to humans",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question: "Metronidazole is primarily activated by which type of bacteria?",
    choices: [
      "Gram-positive cocci only",
      "Aerobic bacteria",
      "Anaerobic bacteria such as C. diff and H. pylori",
      "Mycobacteria",
    ],
    answer: "C",
    explanation:
      "Metronidazole is activated by anaerobic bacteria such as C. diff and H. pylori.",
    source_quote:
      "Metronidazole\n- synthetic derivative of parasitic drug produced by streptomyces accidentally repurposed in 1962\n- prodrug activated by anaerobic bacteria like C. diff and H. pylori\n- activated metronidazole non-specifically and irreversibly binds DNA to form DNA adducts, leading to bacterial death",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "How does activated metronidazole affect bacterial DNA?",
    choices: [
      "It prevents cell wall synthesis",
      "It non-specifically and irreversibly binds DNA to form DNA adducts, leading to bacterial death",
      "It inhibits RNA polymerase",
      "It blocks ribosome assembly",
    ],
    answer: "B",
    explanation:
      "Activated metronidazole binds DNA irreversibly, forming adducts that cause bacterial death.",
    source_quote:
      "Metronidazole\n- synthetic derivative of parasitic drug produced by streptomyces accidentally repurposed in 1962\n- prodrug activated by anaerobic bacteria like C. diff and H. pylori\n- activated metronidazole non-specifically and irreversibly binds DNA to form DNA adducts, leading to bacterial death",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Metronidazole belongs to which drug class?",
    choices: ["Macrolide", "Quinolone", "Nitroimidazole", "Beta-lactam"],
    answer: "C",
    explanation: "Metronidazole is a nitroimidazole.",
    source_quote: "Metronidazole belongs to what drug class?\nnitroimidazole",
    category: "Drug Classes",
  },
  {
    type: "mcq",
    question: "From what bacteria was novobiocin isolated?",
    choices: [
      "Bacillus subtilis",
      "Escherichia coli",
      "Streptomyces (actinobacteria)",
      "Staphylococcus aureus",
    ],
    answer: "C",
    explanation:
      "Novobiocin was isolated from actinobacteria, specifically Streptomyces.",
    source_quote:
      "What bacteria was novobiocin isolated from? What is its general function? Is it still commercially available?\n- isolated from actinobacteria streptomyces\n- gyrase (gyrB) inhibitor\n- withdrawn from market due to inefficacy in humans",
    category: "History",
  },
  {
    type: "mcq",
    question: "What is the general molecular target of novobiocin?",
    choices: [
      "Topoisomerase IV",
      "Gyrase (gyrB) subunit",
      "RNA polymerase",
      "Ribosome",
    ],
    answer: "B",
    explanation: "Novobiocin inhibits the GyrB subunit of DNA gyrase.",
    source_quote:
      "What bacteria was novobiocin isolated from? What is its general function? Is it still commercially available?\n- isolated from actinobacteria streptomyces\n- gyrase (gyrB) inhibitor\n- withdrawn from market due to inefficacy in humans",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Is novobiocin still commercially available?",
    choices: [
      "Only in topical formulations",
      "Only as a veterinary drug",
      "Yes, it is widely used",
      "No, it was withdrawn due to inefficacy in humans",
    ],
    answer: "D",
    explanation:
      "Novobiocin was withdrawn from the market due to inefficacy in humans.",
    source_quote:
      "What bacteria was novobiocin isolated from? What is its general function? Is it still commercially available?\n- isolated from actinobacteria streptomyces\n- gyrase (gyrB) inhibitor\n- withdrawn from market due to inefficacy in humans",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question: "Is metronidazole considered carcinogenic?",
    choices: [
      "Only in animal models",
      "No, there is no link between metronidazole and cancer",
      "Yes, it is a known carcinogen",
      "Only in high doses",
    ],
    answer: "B",
    explanation:
      "There is no link between metronidazole and cancer, despite its DNA-damaging effects.",
    source_quote:
      "T or F: Like many other compounds that bind DNA, metronidazole is carcinogenic.\nFalse, there is no link between metronidazole and cancer, though it does induce DNA damage",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question:
      "Which class of antibiotics targets the process of transcription?",
    choices: [
      "RNA polymerase inhibitors like rifamycin",
      "Protein synthesis inhibitors like tetracyclines",
      "Cell wall synthesis inhibitors like penicillin",
      "DNA gyrase inhibitors like quinolones",
    ],
    answer: "A",
    explanation: "Rifamycins inhibit RNA polymerase, targeting transcription.",
    source_quote:
      "Antibiotics that target the process of transcription\nRNA polymerase inhibitors like rifamycin",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Rifamycin belongs to which class of drugs?",
    choices: ["Tetracyclines", "Cephalosporins", "Ansamycins", "Macrolides"],
    answer: "C",
    explanation: "Rifamycin is an ansamycin.",
    source_quote:
      "Rifamycin belongs to a class of drugs called ______. Many other drugs in this class are used for cancer treatment. These drugs are characterized by an _________ ring bridged by an ______ chain.\nansamycins, aromatic, aliphatic",
    category: "Drug Classes",
  },
  {
    type: "mcq",
    question:
      "What structural feature characterizes ansamycins like rifamycin?",
    choices: [
      "An aromatic ring bridged by an aliphatic chain",
      "A quinolone bicyclic ring",
      "A beta-lactam ring",
      "A macrolide lactone ring",
    ],
    answer: "A",
    explanation:
      "Ansamycins have an aromatic ring bridged by an aliphatic chain.",
    source_quote:
      "Rifamycin belongs to a class of drugs called ______. Many other drugs in this class are used for cancer treatment. These drugs are characterized by an _________ ring bridged by an ______ chain.\nansamycins, aromatic, aliphatic",
    category: "Drug Classes",
  },
  {
    type: "mcq",
    question: "Rifamycin B was isolated from which bacteria and in what year?",
    choices: [
      "Escherichia coli, 1962",
      "Nocardia mediterranei, 1965",
      "Bacillus subtilis, 1932",
      "Streptomyces griseus, 1944",
    ],
    answer: "B",
    explanation: "Rifamycin B was isolated from Nocardia mediterranei in 1965.",
    source_quote:
      "When was rifamycin B discovered and from which bacteria was it isolated? When was it introduced into clinical use? What types of bacteria is it effective against?\n- isolated from Nocardia mediterranei in 1965 by italian research lab > introduced into clinical use three years later\n- broad spectrum effective against mycobacteria, gram-positive bacteria, gram-negative bacteria, and most anaerobes",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "How soon after its discovery was rifamycin B introduced into clinical use?",
    choices: [
      "Ten years later",
      "Twenty years later",
      "Immediately",
      "Three years later",
    ],
    answer: "D",
    explanation:
      "Rifamycin B was introduced into clinical use three years after its discovery.",
    source_quote:
      "When was rifamycin B discovered and from which bacteria was it isolated? When was it introduced into clinical use? What types of bacteria is it effective against?\n- isolated from Nocardia mediterranei in 1965 by italian research lab > introduced into clinical use three years later\n- broad spectrum effective against mycobacteria, gram-positive bacteria, gram-negative bacteria, and most anaerobes",
    category: "History",
  },
  {
    type: "mcq",
    question: "Rifamycin B is effective against which types of bacteria?",
    choices: [
      "Only Gram-positive bacteria",
      "Only Gram-negative bacteria",
      "Mycobacteria, Gram-positive, Gram-negative, and most anaerobes",
      "Only aerobic bacteria",
    ],
    answer: "C",
    explanation:
      "Rifamycin B is broad-spectrum, effective against mycobacteria, Gram-positive, Gram-negative, and most anaerobes.",
    source_quote:
      "When was rifamycin B discovered and from which bacteria was it isolated? When was it introduced into clinical use? What types of bacteria is it effective against?\n- isolated from Nocardia mediterranei in 1965 by italian research lab > introduced into clinical use three years later\n- broad spectrum effective against mycobacteria, gram-positive bacteria, gram-negative bacteria, and most anaerobes",
    category: "Spectrum",
  },
  {
    type: "mcq",
    question: "What is the mechanism of action of rifampin?",
    choices: [
      "Inhibits cell wall synthesis",
      "Inhibits protein synthesis at the ribosome",
      "Inhibits bacterial RNA polymerase to prevent transcription",
      "Inhibits DNA gyrase",
    ],
    answer: "C",
    explanation:
      "Rifampin inhibits bacterial RNA polymerase, blocking transcription.",
    source_quote:
      "Rifampin\n- a rifamycin that inhibits bacterial RNA polymerase to prevent transcription\n- either bactericidal or bacteriostatic depending on concentration\n- crystal structures reveal rifampin binding sterically blocks RNA polymerase",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Rifampin's effect on bacteria can be described as:",
    choices: [
      "Non-specific DNA disruptor",
      "Either bactericidal or bacteriostatic depending on concentration",
      "Always bactericidal",
      "Always bacteriostatic",
    ],
    answer: "B",
    explanation:
      "Rifampin can be bactericidal or bacteriostatic depending on its concentration.",
    source_quote:
      "Rifampin\n- a rifamycin that inhibits bacterial RNA polymerase to prevent transcription\n- either bactericidal or bacteriostatic depending on concentration\n- crystal structures reveal rifampin binding sterically blocks RNA polymerase",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "How does rifampin inhibit RNA polymerase?",
    choices: [
      "It methylates DNA",
      "It sterically blocks the enzyme by binding to it",
      "It inhibits ribosome binding",
      "It degrades RNA polymerase",
    ],
    answer: "B",
    explanation:
      "Crystal structures show rifampin sterically blocks RNA polymerase by binding to it.",
    source_quote:
      "Rifampin\n- a rifamycin that inhibits bacterial RNA polymerase to prevent transcription\n- either bactericidal or bacteriostatic depending on concentration\n- crystal structures reveal rifampin binding sterically blocks RNA polymerase",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Which enzyme does fosfomycin inhibit?",
    choices: ["Beta-lactamase", "Transpeptidase", "D-ala-D-ala ligase", "MurA"],
    answer: "D",
    explanation: "Fosfomycin inhibits MurA.",
    source_quote:
      "Fosfomycin mechanism of action\n- operates in bacterial cytoplasm\n- inhibits MurA, an enzyme that catalyzes the addition of enolpyruvate to UDP-N-acetylglucosamine",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Why is protein synthesis a good target for antibiotics?",
    choices: [
      "Because ribosomes are not essential for bacterial survival",
      "Because prokaryotic and eukaryotic ribosomes are structurally distinct",
      "Because antibiotics cannot cross the cell membrane",
      "Because both bacteria and humans use the same ribosomes",
    ],
    answer: "B",
    explanation:
      "Prokaryotic and eukaryotic ribosomes have structural differences, allowing antibiotics to selectively target bacterial protein synthesis without affecting human cells.",
    source_quote:
      "Why is protein synthesis a good target for antibiotics?\nthe prokaryotic and eukaryotic ribosomes are structurally distinct, so it is easy to target bacterial protein synthesis without targeting human protein synthesis",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "What amino acid does the AUG start codon encode in bacteria?",
    choices: ["Methionine", "Valine", "Leucine", "Formyl-methionine"],
    answer: "D",
    explanation: "In bacteria, the AUG start codon encodes formyl-methionine.",
    source_quote:
      "What does the AUG start codon encode in bacteria?\n- formyl-methionine\n- removed post-translationally\n- eukaryotes produce methionine instead > eukaryotic immune system recognizes Fmet as sign of infection and triggers immune response",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "What happens to formyl-methionine after translation in bacteria?",
    choices: [
      "It is phosphorylated",
      "It is converted to leucine",
      "It remains unchanged",
      "It is removed post-translationally",
    ],
    answer: "D",
    explanation: "Formyl-methionine is removed after translation in bacteria.",
    source_quote:
      "What does the AUG start codon encode in bacteria?\n- formyl-methionine\n- removed post-translationally\n- eukaryotes produce methionine instead > eukaryotic immune system recognizes Fmet as sign of infection and triggers immune response",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "What do eukaryotes use as the first amino acid during translation initiation?",
    choices: ["Glycine", "Valine", "Methionine", "Formyl-methionine"],
    answer: "C",
    explanation:
      "Eukaryotes use methionine, not formyl-methionine, as the first amino acid during translation.",
    source_quote:
      "What does the AUG start codon encode in bacteria?\n- formyl-methionine\n- removed post-translationally\n- eukaryotes produce methionine instead > eukaryotic immune system recognizes Fmet as sign of infection and triggers immune response",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "How does the eukaryotic immune system recognize bacterial infection?",
    choices: [
      "By recognizing glycosylated proteins",
      "By detecting methionine",
      "By detecting formyl-methionine (Fmet)",
      "By detecting ribosomal RNA",
    ],
    answer: "C",
    explanation:
      "The eukaryotic immune system recognizes formyl-methionine as a sign of bacterial infection.",
    source_quote:
      "What does the AUG start codon encode in bacteria?\n- formyl-methionine\n- removed post-translationally\n- eukaryotes produce methionine instead > eukaryotic immune system recognizes Fmet as sign of infection and triggers immune response",
    category: "Lab/Diagnostics",
  },
  {
    type: "mcq",
    question: "What is the structural feature of aminoglycosides?",
    choices: [
      "Macrocyclic lactone ring",
      "Beta-lactam ring",
      "Polypeptide chain",
      "Amino sugars linked by glycosidic bonds",
    ],
    answer: "D",
    explanation:
      "Aminoglycosides are composed of amino sugars linked by glycosidic bonds.",
    source_quote:
      "Aminoglycoside structure\namino sugars linked by glycosidic bonds",
    category: "Drug Classes",
  },
  {
    type: "mcq",
    question: "Which of the following is NOT an example of an aminoglycoside?",
    choices: ["Neomycin", "Erythromycin", "Streptomycin", "Gentamycin"],
    answer: "B",
    explanation: "Erythromycin is a macrolide, not an aminoglycoside.",
    source_quote:
      "Aminoglycloside examples\nstreptomycin, neomycin, kanamycin, and gentamycin",
    category: "Drug Classes",
  },
  {
    type: "mcq",
    question:
      "Antibiotics ending in '-mycin' are typically derived from which genus?",
    choices: ["Pseudomonas", "Bacillus", "Micromonospora", "Streptomyces"],
    answer: "D",
    explanation: "The suffix '-mycin' indicates derivation from Streptomyces.",
    source_quote: "- mycin\nantibiotics derived from streptomyces",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "Antibiotics ending in '-micin' are typically derived from which genus?",
    choices: ["Escherichia", "Bacillus", "Streptomyces", "Micromonospora"],
    answer: "D",
    explanation:
      "The suffix '-micin' indicates derivation from Micromonospora.",
    source_quote: "- micin\nantibiotics derived from micromonospora",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "Aminoglycosides are often used in combination with which class of antibiotics for a synergistic, bactericidal effect?",
    choices: ["Sulfonamides", "Tetracyclines", "Macrolides", "Beta-lactams"],
    answer: "D",
    explanation:
      "Aminoglycosides and beta-lactams have a synergistic, bactericidal effect when used together.",
    source_quote:
      "T or F: Aminoglycosides are often used with beta-lactams\nTrue, a combination of both gives a synergistic, bactericidal effect",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question:
      "How does the structure of aminoglycosides facilitate their function?",
    choices: [
      "Hydrophobic regions insert into membranes",
      "Beta-lactam rings inhibit cell wall synthesis",
      "Negatively charged glycoside bonds interact with the phosphate backbone of target RNA",
      "Positively charged amino groups bind to DNA",
    ],
    answer: "C",
    explanation:
      "Negatively charged glycoside bonds allow aminoglycosides to interact with the phosphate backbone of target RNA.",
    source_quote:
      "How does the structure of aminoglycosides enable them to function?\nnegatively charged glycoside bonds enable them to interact with phosphate backbone of target RNA within 30S subunit of ribosome",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "What is the primary mechanism of action of aminoglycosides?",
    choices: [
      "Disrupt bacterial cell membrane integrity",
      "Inhibit cell wall synthesis by binding to penicillin-binding proteins",
      "Bind to DNA gyrase and inhibit DNA replication",
      "Bind to the 30S ribosomal subunit, inhibit RNA translocation, and cause misreading of mRNA",
    ],
    answer: "D",
    explanation:
      "Aminoglycosides bind to the 30S subunit, inhibit RNA translocation, and cause misreading of mRNA.",
    source_quote:
      "Generally, how do aminoglycosides work?\nbind to 30S ribosomal subunit > inhibition of RNA translocation from A to P site > misreading of mRNA > bacteria unable to synthesize proteins accurately (average bacterial protein of 300 amino acids will have 3 mistakes) > essential proteins unable to fold properly",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "What is a consequence of aminoglycoside-induced misreading of mRNA in bacteria?",
    choices: [
      "Essential proteins are unable to fold properly",
      "Bacteria increase cell wall synthesis",
      "Ribosomes are degraded",
      "DNA replication is enhanced",
    ],
    answer: "A",
    explanation:
      "Misreading of mRNA leads to synthesis of faulty proteins that cannot fold properly.",
    source_quote:
      "Generally, how do aminoglycosides work?\nbind to 30S ribosomal subunit > inhibition of RNA translocation from A to P site > misreading of mRNA > bacteria unable to synthesize proteins accurately (average bacterial protein of 300 amino acids will have 3 mistakes) > essential proteins unable to fold properly",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Who discovered streptomycin and in what year?",
    choices: [
      "Waksman, 1944",
      "Umezawa, 1956",
      "Weinstein, 1963",
      "Fleming, 1928",
    ],
    answer: "A",
    explanation: "Streptomycin was discovered by Waksman in 1944.",
    source_quote:
      "Who discovered streptomycin and when? What bacteria was it isolated from?\ndiscovered in 1944 by Waksman, who pioneered the isolation of aminoglycosides from streptomyces",
    category: "History",
  },
  {
    type: "mcq",
    question: "From which genus was streptomycin isolated?",
    choices: ["Streptomyces", "Penicillium", "Micromonospora", "Bacillus"],
    answer: "A",
    explanation: "Streptomycin was isolated from Streptomyces.",
    source_quote:
      "Who discovered streptomycin and when? What bacteria was it isolated from?\ndiscovered in 1944 by Waksman, who pioneered the isolation of aminoglycosides from streptomyces",
    category: "History",
  },
  {
    type: "mcq",
    question: "Why was streptomycin a significant discovery?",
    choices: [
      "It was the first major antibiotic for treatment of tuberculosis",
      "It was the first antifungal agent",
      "It was the first oral antibiotic",
      "It was the first antibiotic discovered",
    ],
    answer: "A",
    explanation:
      "Streptomycin was the first major antibiotic used to treat tuberculosis.",
    source_quote:
      "Why was streptomycin important?\nfirst major antibiotic for treatment of tuberculosis",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question: "Why is neosporin only sold as a topical treatment?",
    choices: [
      "It is highly toxic and not absorbed by the digestive system",
      "It requires activation by sunlight",
      "It is only effective against viral infections",
      "It is rapidly degraded by stomach acid",
    ],
    answer: "A",
    explanation:
      "Neosporin is highly toxic (can cause hearing loss) and is not absorbed by the digestive system.",
    source_quote:
      "Why is neosporin only sold as a topical treatment?\nhighly toxic (can cause loss of hearing, even when overused as a topical) and is not absorbed by digestive system",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question: "Who discovered kanamycin and in what year?",
    choices: [
      "Waksman, 1944",
      "Hamao Umezawa, 1956",
      "Weinstein, 1963",
      "McGuire, 1952",
    ],
    answer: "B",
    explanation: "Kanamycin was discovered by Hamao Umezawa in 1956.",
    source_quote:
      "Who discovered kanamycin and why was it significant?\n- discovered in 1956 by Hamao Umezawa\n- first treatment for streptomycin resistant tuberculosis",
    category: "History",
  },
  {
    type: "mcq",
    question: "Why was kanamycin significant in the treatment of tuberculosis?",
    choices: [
      "It was the first treatment for streptomycin-resistant tuberculosis",
      "It was the first oral antibiotic for tuberculosis",
      "It cured all forms of tuberculosis",
      "It was less expensive than streptomycin",
    ],
    answer: "A",
    explanation:
      "Kanamycin was significant as the first treatment for streptomycin-resistant tuberculosis.",
    source_quote:
      "Who discovered kanamycin and why was it significant?\n- discovered in 1956 by Hamao Umezawa\n- first treatment for streptomycin resistant tuberculosis",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question: "Who discovered gentamicin and in what year?",
    choices: [
      "Umezawa, 1956",
      "McGuire, 1952",
      "Waksman, 1944",
      "Marvin Weinstein, 1963",
    ],
    answer: "D",
    explanation: "Gentamicin was discovered by Marvin Weinstein in 1963.",
    source_quote:
      "Who discovered gentamicin, and how does it compare to other aminoglycosides?\n- discovered in 1963 by Marvin Weinstein\n- less side effects than other aminoglycosides",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "How does gentamicin compare to other aminoglycosides in terms of side effects?",
    choices: [
      "It causes only nephrotoxicity",
      "It has more side effects",
      "It has the same side effect profile",
      "It has fewer side effects",
    ],
    answer: "D",
    explanation:
      "Gentamicin has fewer side effects than other aminoglycosides.",
    source_quote:
      "Who discovered gentamicin, and how does it compare to other aminoglycosides?\n- discovered in 1963 by Marvin Weinstein\n- less side effects than other aminoglycosides",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question:
      "Due to its rapid bactericidal activity, gentamicin is especially good for the treatment of which type of infection?",
    choices: [
      "Urinary tract infections",
      "Eye infections",
      "Respiratory infections",
      "Skin infections",
    ],
    answer: "B",
    explanation:
      "Gentamicin is particularly useful for treating eye infections due to its rapid bactericidal activity.",
    source_quote:
      "Due to its rapid bactericidal activity, gentamicin is good for the treatment of _____ infections.\neye",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question: "Who discovered tetracycline and in what year?",
    choices: [
      "Weinstein, 1963",
      "McGuire, 1952",
      "Benjamin Duggar, 1945",
      "Waksman, 1944",
    ],
    answer: "C",
    explanation:
      "Tetracycline was isolated from Streptomyces in 1945 by Benjamin Duggar.",
    source_quote:
      "Who discovered tetracycline and when? What bacteria was it isolated from? When was it commercialized?\n- isolated from soil dwelling streptomyces in 1945 by Benjamin Duggar\n- commercialized in 1953",
    category: "History",
  },
  {
    type: "mcq",
    question: "When was tetracycline commercialized?",
    choices: ["1953", "1963", "1956", "1945"],
    answer: "A",
    explanation: "Tetracycline was commercialized in 1953.",
    source_quote:
      "Who discovered tetracycline and when? What bacteria was it isolated from? When was it commercialized?\n- isolated from soil dwelling streptomyces in 1945 by Benjamin Duggar\n- commercialized in 1953",
    category: "History",
  },
  {
    type: "mcq",
    question: "Which of the following is NOT an example of a tetracycline?",
    choices: ["Doxycycline", "Limecycline", "Oxytetracycline", "Erythromycin"],
    answer: "D",
    explanation: "Erythromycin is a macrolide, not a tetracycline.",
    source_quote:
      "Examples of tetracyclines\nDoxycycline, limecycline, oxytetracycline",
    category: "Drug Classes",
  },
  {
    type: "mcq",
    question:
      "What side effect do tetracyclines induce in children, making them not recommended during development?",
    choices: [
      "Liver failure",
      "Tooth discoloration",
      "Hearing loss",
      "Photosensitivity",
    ],
    answer: "B",
    explanation: "Tetracyclines induce tooth discoloration in children.",
    source_quote:
      "Tetracyclines will induce _______ in children, so are not recommended to be taken during development.\ntooth discoloration",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question: "Tetracycline is the most used antibiotic in which field?",
    choices: ["Veterinary medicine", "Agriculture", "Dentistry", "Dermatology"],
    answer: "B",
    explanation: "Tetracycline is most widely used in agriculture.",
    source_quote:
      "Tetracycline is the most used antibiotic in _____.\nagriculture",
    category: "Epidemiology",
  },
  {
    type: "mcq",
    question: "Are tetracyclines considered broad spectrum antibiotics?",
    choices: [
      "No, they are only effective against gram-positive bacteria",
      "No, they only target fungi",
      "No, they only target viruses",
      "Yes, they target gram-positive, gram-negative, and intracellular bacteria",
    ],
    answer: "D",
    explanation:
      "Tetracyclines are broad spectrum, targeting a wide range of bacteria including intracellular types.",
    source_quote:
      "Are tetracyclines broad spectrum?\nyes, can target gram-positive and negative bacteria, plus intracellular bacteria like rickettsia and chlamydia > so effective that it can wipe the healthy human microbiota",
    category: "Spectrum",
  },
  {
    type: "mcq",
    question: "What is a risk of tetracycline's broad spectrum of activity?",
    choices: [
      "It causes severe allergic reactions",
      "It is ineffective against intracellular bacteria",
      "It leads to viral superinfection",
      "It can wipe out the healthy human microbiota",
    ],
    answer: "D",
    explanation:
      "Tetracycline's effectiveness can disrupt normal human microbiota.",
    source_quote:
      "Are tetracyclines broad spectrum?\nyes, can target gram-positive and negative bacteria, plus intracellular bacteria like rickettsia and chlamydia > so effective that it can wipe the healthy human microbiota",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question: "How do tetracyclines inhibit bacterial protein synthesis?",
    choices: [
      "They inhibit DNA gyrase",
      "They bind to the 50S subunit and inhibit peptidyl transferase",
      "They bind to the 30S ribosomal subunit and block amino-acyl tRNA binding",
      "They disrupt cell wall synthesis",
    ],
    answer: "C",
    explanation:
      "Tetracyclines bind to the 30S ribosomal subunit, blocking amino-acyl tRNA binding and translation.",
    source_quote:
      "How do tetracyclines work?\nbind to 30S ribosomal subunit ; binding overlaps with amino-acyl tRNA binding site > block translation",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Who discovered macrolides and in what year?",
    choices: [
      "Umezawa, 1956",
      "Waksman, 1944",
      "Duggar, 1945",
      "McGuire, 1952",
    ],
    answer: "D",
    explanation: "Macrolides were discovered by McGuire in 1952.",
    source_quote:
      "Who discovered macrolides and when? What type of bacteria were they isolated from? What do they have a high affinity for?\n- isolated in 1952 by McGuire from soil actinobacteria\n- high affinity for 50S ribosomal subunit",
    category: "History",
  },
  {
    type: "mcq",
    question: "From what type of bacteria were macrolides first isolated?",
    choices: [
      "Bacillus",
      "Micromonospora",
      "Streptomyces",
      "Soil actinobacteria",
    ],
    answer: "D",
    explanation: "Macrolides were first isolated from soil actinobacteria.",
    source_quote:
      "Who discovered macrolides and when? What type of bacteria were they isolated from? What do they have a high affinity for?\n- isolated in 1952 by McGuire from soil actinobacteria\n- high affinity for 50S ribosomal subunit",
    category: "History",
  },
  {
    type: "mcq",
    question: "What is the primary ribosomal binding target of macrolides?",
    choices: [
      "23S rRNA",
      "30S ribosomal subunit",
      "50S ribosomal subunit",
      "16S rRNA",
    ],
    answer: "C",
    explanation:
      "Macrolides have a high affinity for the 50S ribosomal subunit.",
    source_quote:
      "Who discovered macrolides and when? What type of bacteria were they isolated from? What do they have a high affinity for?\n- isolated in 1952 by McGuire from soil actinobacteria\n- high affinity for 50S ribosomal subunit",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "What is the general structure of macrolides?",
    choices: [
      "Amino sugars linked by glycosidic bonds",
      "Macrocyclic lactones connected to sugar moiety via glucosidic bonds",
      "Polypeptide chain",
      "Beta-lactam ring",
    ],
    answer: "B",
    explanation:
      "Macrolides are macrocyclic lactones connected to a sugar moiety via glucosidic bonds.",
    source_quote:
      "Macrolide (macrocyclic lactone) structure\nmacrocyclic lactones connected to sugar moiety via glucosidic bonds",
    category: "Drug Classes",
  },
  {
    type: "mcq",
    question: "How do macrolides inhibit bacterial protein synthesis?",
    choices: [
      "They bind to the proximal end of the peptide exit tunnel, inhibiting peptidyl transferase",
      "They disrupt the bacterial cell membrane",
      "They inhibit DNA gyrase",
      "They bind to the 30S subunit and block tRNA binding",
    ],
    answer: "A",
    explanation:
      "Macrolides bind to the peptide exit tunnel, leading to inhibition of peptidyl transferase.",
    source_quote:
      "How do macrolides work?\nbind to proximal end of the peptide exit tunnel, leading to peptidyl transferase inhibition",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Which of the following is NOT a macrolide?",
    choices: ["Gentamycin", "Clarithromycin", "Erythromycin", "Azithromycin"],
    answer: "A",
    explanation: "Gentamycin is an aminoglycoside, not a macrolide.",
    source_quote:
      "Macrolide examples\nErythromycin, azithromycin, clarithromycin",
    category: "Drug Classes",
  },
  {
    type: "mcq",
    question:
      "When was chloramphenicol isolated and from what genus of bacteria?",
    choices: [
      "1945, Streptomyces",
      "1947, Streptomyces",
      "1963, Micromonospora",
      "1952, Actinobacteria",
    ],
    answer: "B",
    explanation: "Chloramphenicol was isolated in 1947 from Streptomyces.",
    source_quote:
      "When was chloramphenicol and from what bacteria? What is generally unique about it?\n- isolated in 1947 from streptomyces\n- simple structure so much cheaper to synthesize in vitro > first antibiotic to be synthesized in test tube",
    category: "History",
  },
  {
    type: "mcq",
    question: "What is unique about the synthesis of chloramphenicol?",
    choices: [
      "It was only produced by fermentation",
      "It was the first antibiotic to be synthesized in vitro due to its simple structure",
      "It cannot be synthesized in a test tube",
      "It is the most complex antibiotic to synthesize",
    ],
    answer: "B",
    explanation:
      "Chloramphenicol's simple structure allowed it to be the first antibiotic synthesized in vitro.",
    source_quote:
      "When was chloramphenicol and from what bacteria? What is generally unique about it?\n- isolated in 1947 from streptomyces\n- simple structure so much cheaper to synthesize in vitro > first antibiotic to be synthesized in test tube",
    category: "History",
  },
  {
    type: "mcq",
    question: "Is chloramphenicol a bactericidal or bacteriostatic antibiotic?",
    choices: ["Bacteriostatic", "Neither", "Both", "Bactericidal"],
    answer: "A",
    explanation:
      "Chloramphenicol is a broad spectrum bacteriostatic antibiotic.",
    source_quote:
      "T or F: Chloramphenicol is a broad spectrum bacteriocidal\nFalse, it is a broad spectrum bacteriostatic - inhibits replication but does not kill cells",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Why is chloramphenicol often used in the treatment of bacterial meningitis?",
    choices: [
      "It is bactericidal against meningitis pathogens",
      "It is the only antibiotic effective against viruses",
      "It enhances immune cell function",
      "Its small size allows it to diffuse into areas normally inaccessible to antibiotics",
    ],
    answer: "D",
    explanation:
      "Chloramphenicol's small molecular size enables it to penetrate body compartments like the CNS.",
    source_quote:
      "Why is chloramphenicol often used in the treatment of bacterial meningitis?\nits small size enables it to diffuse to body areas normally not accessible by antibiotics",
    category: "Pharmacokinetics",
  },
  {
    type: "mcq",
    question: "What is a major downside of chloramphenicol use in humans?",
    choices: [
      "It is rapidly excreted in urine",
      "It is only effective topically",
      "It causes severe allergic reactions in all patients",
      "It is toxic to human mitochondria and causes serious side effects",
    ],
    answer: "D",
    explanation:
      "Chloramphenicol is toxic to human mitochondria, leading to serious side effects.",
    source_quote:
      "What is the main downside to chloramphenicol?\ntoxic to human mitochondria > serious side effects",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question: "How does chloramphenicol inhibit bacterial protein synthesis?",
    choices: [
      "It inhibits DNA gyrase",
      "It disrupts the bacterial cell membrane",
      "It binds to the 30S subunit and blocks tRNA binding",
      "It binds to the 50S subunit and inhibits peptidyl transferase",
    ],
    answer: "D",
    explanation:
      "Chloramphenicol binds to the 50S ribosomal subunit and inhibits peptidyl transferase.",
    source_quote:
      "How does chloramphenicol work?\nbinds to 50S and inhibits peptidyl transferase",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Oxazolidinones were initially developed as which type of drug?",
    choices: [
      "MAOI for depression",
      "Antifungal agent",
      "Antiviral drug",
      "Beta-lactam antibiotic",
    ],
    answer: "A",
    explanation:
      "Oxazolidinones were first developed as monoamine oxidase inhibitors (MAOIs) for depression.",
    source_quote:
      "What type of drug was oxazolidinones repurposed from? When were they approved for clinical use and under what name?\n- initially developed as MAOI for depression\n- approved for clinical use under the name linezoid in 2000",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "Under what name were oxazolidinones approved for clinical use and in what year?",
    choices: [
      "Linezolid, 2000",
      "Gentamicin, 1963",
      "Kanamycin, 1956",
      "Erythromycin, 1952",
    ],
    answer: "A",
    explanation:
      "Oxazolidinones were approved for clinical use as linezolid in 2000.",
    source_quote:
      "What type of drug was oxazolidinones repurposed from? When were they approved for clinical use and under what name?\n- initially developed as MAOI for depression\n- approved for clinical use under the name linezoid in 2000",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "Why are oxazolidinones considered unique among antibiotics approved before 2000?",
    choices: [
      "They are the only antibiotics derived from fungi",
      "They represent a novel structural class not seen in the previous two decades",
      "They are the first antibiotics to inhibit cell wall synthesis",
      "They are the first antibiotics to be synthesized in vitro",
    ],
    answer: "B",
    explanation:
      "Oxazolidinones are the first antibiotic with a novel structural class in the two decades prior to 2000.",
    source_quote:
      "Why are oxazolidinones unique?\nthey are the first antibiotic with a completely novel structural class in the past 2 decades prior to 2000",
    category: "History",
  },
  {
    type: "mcq",
    question: "How do oxazolidinones inhibit bacterial protein synthesis?",
    choices: [
      "They bind to the 30S subunit and block tRNA binding",
      "They bind to the 50S ribosomal subunit and inhibit formation of the initiation complex",
      "They inhibit DNA gyrase",
      "They disrupt the bacterial cell membrane",
    ],
    answer: "B",
    explanation:
      "Oxazolidinones bind to the 50S subunit and prevent formation of the initiation complex.",
    source_quote:
      "How do oxazolidinones work?\nbind to 50S ribosomal subunit and inhibit the formation of initiation complex (the complex between mRNA, the ribosome, and tRNA charged with fmet)",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "From which genus of bacteria were streptogramins originally isolated?",
    choices: ["Bacillus", "Escherichia", "Pseudomonas", "Streptomyces"],
    answer: "D",
    explanation:
      "Streptogramins were isolated from Streptomyces during the golden age of antibiotics.",
    source_quote:
      "- isolated from streptomyces during golden age of antibiotics\n- comes in mixture of 2 structurally distinct compounds: streptogramin A and B (70:30 ratio) that are bacteriostatic when separate but bactericidal when combined (100-fold increase in potency",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "What is the typical ratio of streptogramin A to B in the antibiotic mixture?",
    choices: ["90:10", "30:70", "50:50", "70:30"],
    answer: "D",
    explanation:
      "Streptogramins are typically used as a 70:30 mixture of A to B.",
    source_quote:
      "- isolated from streptomyces during golden age of antibiotics\n- comes in mixture of 2 structurally distinct compounds: streptogramin A and B (70:30 ratio) that are bacteriostatic when separate but bactericidal when combined (100-fold increase in potency",
    category: "Drug Classes",
  },
  {
    type: "mcq",
    question:
      "What is the effect of streptogramin A and B when used separately?",
    choices: [
      "They are bacteriostatic",
      "They cause resistance",
      "They are bactericidal",
      "They are inactive",
    ],
    answer: "A",
    explanation:
      "Streptogramin A and B are bacteriostatic when used separately.",
    source_quote:
      "- isolated from streptomyces during golden age of antibiotics\n- comes in mixture of 2 structurally distinct compounds: streptogramin A and B (70:30 ratio) that are bacteriostatic when separate but bactericidal when combined (100-fold increase in potency",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "What is the effect when streptogramin A and B are combined?",
    choices: [
      "They lose activity",
      "They become bactericidal",
      "They remain bacteriostatic",
      "They become toxic",
    ],
    answer: "B",
    explanation: "When combined, streptogramin A and B are bactericidal.",
    source_quote:
      "- isolated from streptomyces during golden age of antibiotics\n- comes in mixture of 2 structurally distinct compounds: streptogramin A and B (70:30 ratio) that are bacteriostatic when separate but bactericidal when combined (100-fold increase in potency",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "By how much does the potency of streptogramins increase when A and B are combined?",
    choices: ["100-fold", "10-fold", "2-fold", "1,000-fold"],
    answer: "A",
    explanation:
      "Potency increases 100-fold when streptogramin A and B are combined.",
    source_quote:
      "- isolated from streptomyces during golden age of antibiotics\n- comes in mixture of 2 structurally distinct compounds: streptogramin A and B (70:30 ratio) that are bacteriostatic when separate but bactericidal when combined (100-fold increase in potency",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Where does streptogramin A bind on the bacterial ribosome?",
    choices: [
      "16S rRNA",
      "30S subunit decoding center",
      "Peptidyl transferase center of the 50S subunit",
      "Ribosomal protein S12",
    ],
    answer: "C",
    explanation:
      "Streptogramin A binds to the peptidyl transferase catalytic center of the 50S subunit.",
    source_quote:
      "- streptogramin A binds to peptidyl transferase catalytic center of 50S subunit > prevent attachment of tRNA at P and A sites > cessation of polypeptide formation\n- streptogramin A binding induces conformational change that enhances binding of streptogramin B > streptogramin B binds to 23S rRNA within the 50S ribosomal exit tunnel > release of unfinished polypeptide fragments",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "What is the immediate effect of streptogramin A binding to the ribosome?",
    choices: [
      "Prevents attachment of tRNA at P and A sites",
      "Inhibits DNA replication",
      "Blocks ribosome assembly",
      "Degrades mRNA",
    ],
    answer: "A",
    explanation:
      "Streptogramin A prevents the attachment of tRNA at the P and A sites.",
    source_quote:
      "- streptogramin A binds to peptidyl transferase catalytic center of 50S subunit > prevent attachment of tRNA at P and A sites > cessation of polypeptide formation\n- streptogramin A binding induces conformational change that enhances binding of streptogramin B > streptogramin B binds to 23S rRNA within the 50S ribosomal exit tunnel > release of unfinished polypeptide fragments",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "What effect does streptogramin A binding have on streptogramin B?",
    choices: [
      "It inhibits streptogramin B binding",
      "It enhances streptogramin B binding",
      "It degrades streptogramin B",
      "It has no effect on streptogramin B",
    ],
    answer: "B",
    explanation:
      "Streptogramin A induces a conformational change that enhances the binding of streptogramin B.",
    source_quote:
      "- streptogramin A binds to peptidyl transferase catalytic center of 50S subunit > prevent attachment of tRNA at P and A sites > cessation of polypeptide formation\n- streptogramin A binding induces conformational change that enhances binding of streptogramin B > streptogramin B binds to 23S rRNA within the 50S ribosomal exit tunnel > release of unfinished polypeptide fragments",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "To which component does streptogramin B bind on the ribosome?",
    choices: [
      "23S rRNA within the 50S ribosomal exit tunnel",
      "16S rRNA of the 30S subunit",
      "Ribosomal protein L7/L12",
      "Peptidyl transferase center of the 30S subunit",
    ],
    answer: "A",
    explanation:
      "Streptogramin B binds to the 23S rRNA within the 50S ribosomal exit tunnel.",
    source_quote:
      "- streptogramin A binds to peptidyl transferase catalytic center of 50S subunit > prevent attachment of tRNA at P and A sites > cessation of polypeptide formation\n- streptogramin A binding induces conformational change that enhances binding of streptogramin B > streptogramin B binds to 23S rRNA within the 50S ribosomal exit tunnel > release of unfinished polypeptide fragments",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "What is the outcome of streptogramin B binding to the ribosome?",
    choices: [
      "Release of unfinished polypeptide fragments",
      "Inhibition of DNA synthesis",
      "Increase in ribosome assembly",
      "Activation of tRNA synthetase",
    ],
    answer: "A",
    explanation:
      "Streptogramin B binding results in the release of unfinished polypeptide fragments.",
    source_quote:
      "- streptogramin A binds to peptidyl transferase catalytic center of 50S subunit > prevent attachment of tRNA at P and A sites > cessation of polypeptide formation\n- streptogramin A binding induces conformational change that enhances binding of streptogramin B > streptogramin B binds to 23S rRNA within the 50S ribosomal exit tunnel > release of unfinished polypeptide fragments",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "From which bacterium was mupirocin first isolated?",
    choices: [
      "Pseudomonas fluorescens",
      "Bacillus subtilis",
      "Streptomyces griseus",
      "Escherichia coli",
    ],
    answer: "A",
    explanation: "Mupirocin was isolated from Pseudomonas fluorescens.",
    source_quote:
      "- isolated in 1971 from pseudomonas fluorescencs, bacteria ubiquitously present in soil and water\n- non-ribosomal translational inhibitor",
    category: "History",
  },
  {
    type: "mcq",
    question: "In what year was mupirocin isolated?",
    choices: ["1985", "1971", "1962", "1940"],
    answer: "B",
    explanation: "Mupirocin was isolated in 1971.",
    source_quote:
      "- isolated in 1971 from pseudomonas fluorescencs, bacteria ubiquitously present in soil and water\n- non-ribosomal translational inhibitor",
    category: "History",
  },
  {
    type: "mcq",
    question: "What is the general function of mupirocin?",
    choices: [
      "Non-ribosomal translational inhibitor",
      "RNA polymerase inhibitor",
      "Cell wall synthesis inhibitor",
      "DNA gyrase inhibitor",
    ],
    answer: "A",
    explanation: "Mupirocin is a non-ribosomal translational inhibitor.",
    source_quote:
      "- isolated in 1971 from pseudomonas fluorescencs, bacteria ubiquitously present in soil and water\n- non-ribosomal translational inhibitor",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "What enzyme does mupirocin inhibit?",
    choices: [
      "RNA polymerase",
      "Transpeptidase",
      "DNA gyrase",
      "Isoleucyl-tRNA synthetase",
    ],
    answer: "D",
    explanation: "Mupirocin inhibits isoleucyl-tRNA synthetase.",
    source_quote:
      "binds to and inhibits isoleucyl-tRNA synthetase, enzyme responsible for charging tRNA molecule with isoleucine",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "What is the role of isoleucyl-tRNA synthetase in the cell?",
    choices: [
      "Synthesizing ribosomal RNA",
      "Charging tRNA with isoleucine",
      "Inhibiting cell wall synthesis",
      "Degrading mRNA",
    ],
    answer: "B",
    explanation:
      "Isoleucyl-tRNA synthetase charges tRNA molecules with isoleucine.",
    source_quote:
      "binds to and inhibits isoleucyl-tRNA synthetase, enzyme responsible for charging tRNA molecule with isoleucine",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Why does mupirocin not inhibit eukaryotic isoleucyl-tRNA synthetase?",
    choices: [
      "Eukaryotes lack isoleucyl-tRNA synthetase",
      "Mupirocin cannot enter eukaryotic cells",
      "Structural differences between the eukaryotic and prokaryotic enzymes",
      "Eukaryotic tRNAs are not charged with isoleucine",
    ],
    answer: "C",
    explanation:
      "There are distinct structural differences between the eukaryotic and prokaryotic versions of the enzyme.",
    source_quote:
      "there are distinct structural differences between the eukaryotic and prokaryotic versions of the enzyme",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Mupirocin is a ______-dependent bacteri_____.",
    choices: [
      "time, -static",
      "time, -cidal",
      "concentration, -static",
      "concentration, -cidal",
    ],
    answer: "D",
    explanation:
      "Mupirocin is a concentration-dependent bactericidal antibiotic.",
    source_quote:
      "Mupirocin is a _______-dependent bacteri_____.\nconcentration, -cidal",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Why is mupirocin only administered topically as Bactroban?",
    choices: [
      "It is rapidly metabolized into inactive acids when given orally or intravenously",
      "It is unstable at body temperature",
      "It cannot penetrate the skin barrier",
      "It causes severe systemic toxicity if given orally",
    ],
    answer: "A",
    explanation:
      "Mupirocin is rapidly metabolized into monic acid and carboxylic acid when administered orally or intravenously.",
    source_quote:
      "when administered orally or intravenously, it is rapidly metabolized into monic acid and carboxylic acid",
    category: "Pharmacokinetics",
  },
  {
    type: "mcq",
    question:
      "What is the general mechanism of action of lipopeptide antibiotics?",
    choices: [
      "They inhibit cell wall synthesis",
      "They disrupt bacterial membranes by forming pores",
      "They inhibit protein synthesis",
      "They block DNA replication",
    ],
    answer: "B",
    explanation: "Lipopeptides poke holes in the outer membrane of bacteria.",
    source_quote:
      "What is the general function of lipopetides?\npoke holes in outer membrane of bacteria",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Which of the following are the two main types of lipopeptide antibiotics?",
    choices: [
      "Macrolides and fluoroquinolones",
      "Polymyxins and daptomycin",
      "Tetracyclines and aminoglycosides",
      "Vancomycin and bacitracin",
    ],
    answer: "B",
    explanation:
      "The two main types of lipopeptides are polymyxins and daptomycin.",
    source_quote:
      "What are the two main types of lipopeptides?\npolymyxins (gram-negative bacteria) and daptomycin (gram-positive bacteria)",
    category: "Drug Classes",
  },
  {
    type: "mcq",
    question:
      "Polymyxins are primarily effective against which type of bacteria?",
    choices: ["Gram-negative", "Gram-positive", "Mycobacteria", "Anaerobes"],
    answer: "A",
    explanation: "Polymyxins are used against gram-negative bacteria.",
    source_quote:
      "What are the two main types of lipopeptides?\npolymyxins (gram-negative bacteria) and daptomycin (gram-positive bacteria)",
    category: "Spectrum",
  },
  {
    type: "mcq",
    question:
      "Daptomycin is mainly used to treat infections caused by which type of bacteria?",
    choices: ["Gram-positive", "Fungi", "Viruses", "Gram-negative"],
    answer: "A",
    explanation: "Daptomycin is mainly used for gram-positive bacteria.",
    source_quote:
      "What are the two main types of lipopeptides?\npolymyxins (gram-negative bacteria) and daptomycin (gram-positive bacteria)",
    category: "Spectrum",
  },
  {
    type: "mcq",
    question:
      "What structural feature of polymyxin allows it to disrupt bacterial membranes?",
    choices: [
      "A peptide chain attached to a fatty acid side chain",
      "A phosphate group",
      "A sugar moiety",
      "A beta-lactam ring",
    ],
    answer: "A",
    explanation:
      "Polymyxin has a peptide chain attached to a fatty acid side chain, enabling membrane disruption.",
    source_quote:
      "- peptide chain attached to fatty acid side chain > hydrophobic fatty acid chain penetrates and disrupts fatty acid layer of cell membrane\n- peptine chain rich in non-proteinogenic amino acids like 2,4-diaminobutyrate > protonated at physiological pH > molecule has strong pos charge that interacts with neg charged lipid A of LPS",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "What is the role of the hydrophobic fatty acid chain in polymyxin?",
    choices: [
      "Inhibits DNA synthesis",
      "Penetrates and disrupts the fatty acid layer of the cell membrane",
      "Binds to ribosomal RNA",
      "Blocks peptidoglycan cross-linking",
    ],
    answer: "B",
    explanation:
      "The hydrophobic fatty acid chain of polymyxin penetrates and disrupts the fatty acid layer of the cell membrane.",
    source_quote:
      "- peptide chain attached to fatty acid side chain > hydrophobic fatty acid chain penetrates and disrupts fatty acid layer of cell membrane\n- peptine chain rich in non-proteinogenic amino acids like 2,4-diaminobutyrate > protonated at physiological pH > molecule has strong pos charge that interacts with neg charged lipid A of LPS",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Why does polymyxin have a strong positive charge at physiological pH?",
    choices: [
      "It is phosphorylated",
      "Its peptide chain is rich in non-proteinogenic amino acids like 2,4-diaminobutyrate",
      "It binds calcium ions",
      "It contains a sulfate group",
    ],
    answer: "B",
    explanation:
      "Polymyxin's peptide chain is rich in non-proteinogenic amino acids like 2,4-diaminobutyrate, which are protonated at physiological pH.",
    source_quote:
      "- peptide chain attached to fatty acid side chain > hydrophobic fatty acid chain penetrates and disrupts fatty acid layer of cell membrane\n- peptine chain rich in non-proteinogenic amino acids like 2,4-diaminobutyrate > protonated at physiological pH > molecule has strong pos charge that interacts with neg charged lipid A of LPS",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "With what component of the bacterial outer membrane does polymyxin's positive charge interact?",
    choices: [
      "Teichoic acids",
      "Negatively charged lipid A of LPS",
      "Peptidoglycan",
      "Capsular polysaccharide",
    ],
    answer: "B",
    explanation:
      "Polymyxin's positive charge interacts with the negatively charged lipid A of LPS.",
    source_quote:
      "- peptide chain attached to fatty acid side chain > hydrophobic fatty acid chain penetrates and disrupts fatty acid layer of cell membrane\n- peptine chain rich in non-proteinogenic amino acids like 2,4-diaminobutyrate > protonated at physiological pH > molecule has strong pos charge that interacts with neg charged lipid A of LPS",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "Why were lipopeptide antibiotics originally discontinued for clinical use?",
    choices: [
      "They are ineffective against bacteria",
      "They are too expensive",
      "They have poor oral bioavailability",
      "They are neurotoxic and nephrotoxic",
    ],
    answer: "D",
    explanation:
      "Lipopeptides were discontinued due to neurotoxicity and nephrotoxicity.",
    source_quote:
      "- they are neurotoxic and nephrotoxic\n- transmission electron microscopy reveals they are effective against superbugs like A. baumannii, P. aeruginosa, and K. pneumoniae",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question: "Why are lipopeptides being reconsidered for clinical use?",
    choices: [
      "They have oral formulations available",
      "They are effective against superbugs like A. baumannii, P. aeruginosa, and K. pneumoniae",
      "Their toxicity has been eliminated",
      "They are now cheaper to produce",
    ],
    answer: "B",
    explanation:
      "Lipopeptides are effective against superbugs such as A. baumannii, P. aeruginosa, and K. pneumoniae.",
    source_quote:
      "- they are neurotoxic and nephrotoxic\n- transmission electron microscopy reveals they are effective against superbugs like A. baumannii, P. aeruginosa, and K. pneumoniae",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question: "Daptomycin is effective against which group of bacteria?",
    choices: [
      "Gram-negative bacteria",
      "Fungi",
      "Gram-positive bacteria like enterococci",
      "Acid-fast bacteria",
    ],
    answer: "C",
    explanation:
      "Daptomycin is effective against gram-positive bacteria such as enterococci.",
    source_quote:
      "- effective against gram-positive bacteria like enterococci\n- mechanism not understood but believed that it oligomerizes inside bacterial membrane > membrane curvature and disruption",
    category: "Spectrum",
  },
  {
    type: "mcq",
    question: "What is the proposed mechanism of action for daptomycin?",
    choices: [
      "Inhibits DNA gyrase",
      "Oligomerizes inside the bacterial membrane, causing membrane curvature and disruption",
      "Inhibits folic acid synthesis",
      "Blocks peptidoglycan synthesis",
    ],
    answer: "B",
    explanation:
      "Daptomycin is believed to oligomerize inside the bacterial membrane, leading to membrane curvature and disruption.",
    source_quote:
      "- effective against gram-positive bacteria like enterococci\n- mechanism not understood but believed that it oligomerizes inside bacterial membrane > membrane curvature and disruption",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "What is isoniazid primarily used to treat?",
    choices: [
      "Tuberculosis",
      "Lyme disease",
      "Staphylococcal infections",
      "Pneumonia",
    ],
    answer: "A",
    explanation: "Isoniazid is the most commonly used antituberculosis drug.",
    source_quote:
      "- most commonly used antituberculosis drug\n- protodrug metabolized by Mtb* catalase peroxidase > fusion of isoniazid with NAD forms isonicotinic acyl-NAD > isonicotinic acyl-NAD inactivates enoyl acyl carrier protein responsible for synthesis of mycolic acid (major component of Mtb cell wall)\n\n* Mtb = M. tuberculosis",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question: "What enzyme metabolizes isoniazid in M. tuberculosis?",
    choices: [
      "Beta-lactamase",
      "DNA gyrase",
      "RNA polymerase",
      "Catalase peroxidase",
    ],
    answer: "D",
    explanation: "Isoniazid is metabolized by Mtb catalase peroxidase.",
    source_quote:
      "- most commonly used antituberculosis drug\n- protodrug metabolized by Mtb* catalase peroxidase > fusion of isoniazid with NAD forms isonicotinic acyl-NAD > isonicotinic acyl-NAD inactivates enoyl acyl carrier protein responsible for synthesis of mycolic acid (major component of Mtb cell wall)\n\n* Mtb = M. tuberculosis",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "What is the active form of isoniazid after metabolism in M. tuberculosis?",
    choices: [
      "Isoniazid sulfate",
      "Isoniazid phosphate",
      "Isonicotinic acyl-NAD",
      "Isoniazid-glutathione conjugate",
    ],
    answer: "C",
    explanation: "Fusion of isoniazid with NAD forms isonicotinic acyl-NAD.",
    source_quote:
      "- most commonly used antituberculosis drug\n- protodrug metabolized by Mtb* catalase peroxidase > fusion of isoniazid with NAD forms isonicotinic acyl-NAD > isonicotinic acyl-NAD inactivates enoyl acyl carrier protein responsible for synthesis of mycolic acid (major component of Mtb cell wall)\n\n* Mtb = M. tuberculosis",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "What is the target of isonicotinic acyl-NAD in M. tuberculosis?",
    choices: [
      "Enoyl acyl carrier protein",
      "Ribosomal RNA",
      "DNA gyrase",
      "Transpeptidase",
    ],
    answer: "A",
    explanation:
      "Isonicotinic acyl-NAD inactivates enoyl acyl carrier protein.",
    source_quote:
      "- most commonly used antituberculosis drug\n- protodrug metabolized by Mtb* catalase peroxidase > fusion of isoniazid with NAD forms isonicotinic acyl-NAD > isonicotinic acyl-NAD inactivates enoyl acyl carrier protein responsible for synthesis of mycolic acid (major component of Mtb cell wall)\n\n* Mtb = M. tuberculosis",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question:
      "What major cell wall component synthesis is inhibited by isoniazid in M. tuberculosis?",
    choices: ["Teichoic acid", "Peptidoglycan", "Lipid A", "Mycolic acid"],
    answer: "D",
    explanation:
      "Isoniazid inhibits the synthesis of mycolic acid, a major cell wall component of M. tuberculosis.",
    source_quote:
      "- most commonly used antituberculosis drug\n- protodrug metabolized by Mtb* catalase peroxidase > fusion of isoniazid with NAD forms isonicotinic acyl-NAD > isonicotinic acyl-NAD inactivates enoyl acyl carrier protein responsible for synthesis of mycolic acid (major component of Mtb cell wall)\n\n* Mtb = M. tuberculosis",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "How was teixobactin isolated?",
    choices: [
      "From marine sponges",
      "By culturing previously unculturable soil bacteria using a new approach",
      "From human microbiota",
      "By chemical synthesis",
    ],
    answer: "B",
    explanation:
      "Teixobactin was isolated from soil bacteria using a new approach that enabled culturing of previously unculturable bacteria.",
    source_quote:
      "- novel antibiotic isolated from soil bacteria > isolated via new approach that enables previously unculturable soil bacteria to be cultured\n- non-ribosomal peptide made of unusual amino acids\n- produced by gram-negative bacteria but effective against gram-postive",
    category: "History",
  },
  {
    type: "mcq",
    question: "What type of molecule is teixobactin?",
    choices: [
      "Aminoglycoside",
      "Non-ribosomal peptide made of unusual amino acids",
      "Beta-lactam antibiotic",
      "Macrolide",
    ],
    answer: "B",
    explanation:
      "Teixobactin is a non-ribosomal peptide made of unusual amino acids.",
    source_quote:
      "- novel antibiotic isolated from soil bacteria > isolated via new approach that enables previously unculturable soil bacteria to be cultured\n- non-ribosomal peptide made of unusual amino acids\n- produced by gram-negative bacteria but effective against gram-postive",
    category: "Mechanism of Action",
  },
  {
    type: "mcq",
    question: "Which type of bacteria produce teixobactin?",
    choices: [
      "Gram-negative bacteria",
      "Gram-positive bacteria",
      "Actinomycetes",
      "Fungi",
    ],
    answer: "A",
    explanation: "Teixobactin is produced by gram-negative bacteria.",
    source_quote:
      "- novel antibiotic isolated from soil bacteria > isolated via new approach that enables previously unculturable soil bacteria to be cultured\n- non-ribosomal peptide made of unusual amino acids\n- produced by gram-negative bacteria but effective against gram-postive",
    category: "History",
  },
  {
    type: "mcq",
    question: "Teixobactin is effective against which group of bacteria?",
    choices: [
      "Viruses",
      "Fungi",
      "Gram-negative bacteria",
      "Gram-positive bacteria",
    ],
    answer: "D",
    explanation: "Teixobactin is effective against gram-positive bacteria.",
    source_quote:
      "- novel antibiotic isolated from soil bacteria > isolated via new approach that enables previously unculturable soil bacteria to be cultured\n- non-ribosomal peptide made of unusual amino acids\n- produced by gram-negative bacteria but effective against gram-postive",
    category: "Spectrum",
  },
  {
    type: "mcq",
    question:
      "Why are discoveries like teixobactin and odilorhabdin not as promising for drug development as they might seem?",
    choices: [
      "They are only effective in vitro",
      "They are only produced in small quantities",
      "Neither has reached clinical trials and drug development is lengthy, expensive, and unprofitable for antibiotics",
      "They are highly toxic",
    ],
    answer: "C",
    explanation:
      "Neither teixobactin nor odilorhabdin have reached clinical trials; drug development is costly, slow, and not profitable for antibiotics.",
    source_quote:
      "- neither teixobactin nor odilorhabdin have made it to clinical trials\n- 90% of drugs fail during development\n- drug development takes time (10-20 years) and money (over 2 billion dollars)\n- pharma companies do not pursue antibiotic development due to profit loss > treatment only lasts for a week, short compared to treatment for chronic conditions",
    category: "History",
  },
  {
    type: "mcq",
    question: "What percentage of drugs typically fail during development?",
    choices: ["10%", "90%", "25%", "50%"],
    answer: "B",
    explanation: "90% of drugs fail during development.",
    source_quote:
      "- neither teixobactin nor odilorhabdin have made it to clinical trials\n- 90% of drugs fail during development\n- drug development takes time (10-20 years) and money (over 2 billion dollars)\n- pharma companies do not pursue antibiotic development due to profit loss > treatment only lasts for a week, short compared to treatment for chronic conditions",
    category: "History",
  },
  {
    type: "mcq",
    question: "How long does drug development typically take?",
    choices: ["10-20 years", "25-30 years", "1 year", "2-3 years"],
    answer: "A",
    explanation: "Drug development takes 10-20 years.",
    source_quote:
      "- neither teixobactin nor odilorhabdin have made it to clinical trials\n- 90% of drugs fail during development\n- drug development takes time (10-20 years) and money (over 2 billion dollars)\n- pharma companies do not pursue antibiotic development due to profit loss > treatment only lasts for a week, short compared to treatment for chronic conditions",
    category: "History",
  },
  {
    type: "mcq",
    question: "What is the estimated cost to develop a new drug?",
    choices: [
      "500 million dollars",
      "5 billion dollars",
      "Over 2 billion dollars",
      "Less than 100 million dollars",
    ],
    answer: "C",
    explanation: "Drug development costs over 2 billion dollars.",
    source_quote:
      "- neither teixobactin nor odilorhabdin have made it to clinical trials\n- 90% of drugs fail during development\n- drug development takes time (10-20 years) and money (over 2 billion dollars)\n- pharma companies do not pursue antibiotic development due to profit loss > treatment only lasts for a week, short compared to treatment for chronic conditions",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "Why do pharmaceutical companies often avoid antibiotic development?",
    choices: [
      "Because antibiotics are too toxic",
      "Because treatments are short and thus less profitable compared to chronic condition treatments",
      "Because antibiotics are unstable",
      "Because antibiotics are only effective in animals",
    ],
    answer: "B",
    explanation:
      "Antibiotic treatments typically last only a week, making them less profitable than drugs for chronic conditions.",
    source_quote:
      "- neither teixobactin nor odilorhabdin have made it to clinical trials\n- 90% of drugs fail during development\n- drug development takes time (10-20 years) and money (over 2 billion dollars)\n- pharma companies do not pursue antibiotic development due to profit loss > treatment only lasts for a week, short compared to treatment for chronic conditions",
    category: "History",
  },
  {
    type: "mcq",
    question: "Why have new classes of antibiotics not been found since 1990?",
    choices: [
      "Antibiotics are no longer needed",
      "Regulatory barriers prevent new discoveries",
      "Bacteria have become invulnerable",
      "All known targets have already been exploited (discovery void period)",
    ],
    answer: "D",
    explanation:
      "We are in a discovery void period, having developed antibiotics against all known targets.",
    source_quote:
      "we are in the discovery void period in which we have already developed antibiotics against all known targets",
    category: "History",
  },
  {
    type: "mcq",
    question: "When was the golden age of antibiotics?",
    choices: ["1900-1920", "1960-1980", "1940-1962", "1980-2000"],
    answer: "C",
    explanation: "The golden age of antibiotics was from 1940 to 1962.",
    source_quote: "When was the golden age of antibiotics?\n1940-1962",
    category: "History",
  },
  {
    type: "mcq",
    question: "What is the estimated useful lifespan of a single antibiotic?",
    choices: ["100 years", "5 years", "50 years", "10 years"],
    answer: "C",
    explanation: "Any single antibiotic is only useful for about 50 years.",
    source_quote:
      "It is estimated that any single antibiotic is only useful for about ____ years, meaning that antibiotics discovered during the golden age are at the end of their effectiveness.\n50",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "What is a promising alternative treatment for bacterial infections if antibiotics become ineffective?",
    choices: [
      "Increasing antibiotic dosage",
      "Vaccination",
      "Use of lytic bacteriophage to lyse bacteria",
      "Gene therapy",
    ],
    answer: "C",
    explanation:
      "The use of lytic bacteriophage is considered the most promising alternative.",
    source_quote:
      "- haemoperfusion devices, pumps that filter bacteria from blood\n- quorum sensing inhibitors that disrupt cell to cell communication btwn bacteria > reduce the bacteria's pathogenicity\n- use of lytic bacteriophage to lyse bacteria, most promising approach\n- deliver pathogen-specific antibodies that opsonize bacteria (make bacteria more visible to immune system)\n- administration of liposomes, artificial membrane-bound vesicles that capture toxins and remove them without disrupting host cell membrane\n- providing resources to maintain survival of host ie replenishing fluids and electrolytes for diarrheal infections",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question:
      "Despite extensive screening, what is common to nearly all drugs?",
    choices: [
      "They are always bactericidal",
      "They are completely safe",
      "They have some side effects",
      "They are only effective in vitro",
    ],
    answer: "C",
    explanation: "Almost all drugs have some side effects.",
    source_quote:
      "Despite extensive screening to eliminate toxic candidates, almost all drugs have some _______.\nside effects",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question: "Adverse drug reactions (ADR) cause how many deaths annually?",
    choices: ["10,000", "1,000", "Over 100,000", "1 million"],
    answer: "C",
    explanation: "ADRs are estimated to cause over 100,000 deaths annually.",
    source_quote:
      "It is estimated that adverse drug reactions (ADR) cause over _______ deaths annually.\n100K",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question: "Adverse drug reactions (ADR) are what leading cause of death?",
    choices: ["Second", "Tenth", "Fourth", "First"],
    answer: "C",
    explanation: "ADR are the fourth leading cause of death.",
    source_quote:
      "Adverse drug reactions (ADR) are the _____ leading cause of death.\nfourth",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question:
      "Antibiotics are responsible for what fraction of ER visits for adverse drug reactions?",
    choices: ["1 out of 10", "1 out of 2", "1 out of 100", "1 out of 4"],
    answer: "D",
    explanation:
      "Antibiotics are responsible for 1 out of 4 ER visits for adverse drug reactions.",
    source_quote:
      "Antibiotics are responsible for ___ out of ___ ER visits for adverse drug reactions.\n1, 4",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question:
      "How many FDA-approved drugs withdrawn from the US market between 1990 and 2000 were quinolone antibiotics?",
    choices: ["0", "1", "3", "5"],
    answer: "C",
    explanation: "Three out of ten withdrawn drugs were quinolone antibiotics.",
    source_quote:
      "10 FDA approved drugs were withdrawn from the US market between 1990 and 2000. ____ of these were quinolone antibiotics.\n3",
    category: "History",
  },
  {
    type: "mcq",
    question:
      "Which of the following is NOT a known adverse reaction to fluoroquinolones?",
    choices: [
      "Bone marrow suppression",
      "CNS effects",
      "Peripheral neuropathy",
      "Tendonitis",
    ],
    answer: "A",
    explanation:
      "Bone marrow suppression is not listed as a fluoroquinolone adverse effect.",
    source_quote:
      "Adverse reactions to fluoroquinolones include:\ntendonitis, tendon rupture, peripheral neuropathy, CNS effects, exacerbation of myasthenia gravis, mental health side effects (disorientation, agitation, delirium)",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question: "What is the main side effect of antibiotic use?",
    choices: [
      "Antibiotic resistance",
      "Photosensitivity",
      "Nephrotoxicity",
      "Hepatotoxicity",
    ],
    answer: "A",
    explanation:
      "The main side effect of antibiotic use is antibiotic resistance.",
    source_quote:
      "What is the main side effect of antibiotic use?\nantibiotic resistance",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question: "What type of side effects are common to nearly all antibiotics?",
    choices: [
      "Neurotoxicity",
      "Gastrointestinal issues",
      "Ototoxicity",
      "Photosensitivity",
    ],
    answer: "B",
    explanation:
      "Gastrointestinal issues are common to nearly all antibiotics.",
    source_quote:
      "____________ issues are side effects common to nearly all antibiotics.\nGastrointestinal",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question:
      "What is a common allergic side effect of beta-lactam antibiotics?",
    choices: [
      "Photosensitivity",
      "Hepatotoxicity",
      "Hearing loss",
      "Itchy skin and rashes",
    ],
    answer: "D",
    explanation:
      "Beta-lactams commonly cause allergies like itchy skin and rashes.",
    source_quote:
      "beta-lactam side effects\nallergies like itchy skin and rashes",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question: "Which antibiotics are known to cause photosensitivity?",
    choices: [
      "Tetracyclines, quinolones, and sulfonamides",
      "Aminoglycosides and vancomycin",
      "Carbapenems and rifampin",
      "Macrolides and penicillins",
    ],
    answer: "A",
    explanation:
      "Tetracyclines, quinolones, and sulfonamides cause photosensitivity.",
    source_quote:
      "Which antibiotics cause photosensitivity ?\ntetracyclines, quunolones, and sulfonamides",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question: "Which antibiotics can damage the kidneys?",
    choices: [
      "Tetracyclines and sulfonamides",
      "Macrolides and penicillins",
      "Aminoglycosides and vancomycin",
      "Carbapenems and rifampin",
    ],
    answer: "C",
    explanation: "Aminoglycosides and vancomycin can damage the kidneys.",
    source_quote:
      "Which antibiotics can damage your kidneys?\naminoglycosides and vancomycin",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question: "Which antibiotics can cause liver damage?",
    choices: [
      "Quinolones and sulfonamides",
      "Beta-lactams and macrolides",
      "Carbapenems, rifampin, isoniazid, and tetracyclines",
      "Aminoglycosides and vancomycin",
    ],
    answer: "C",
    explanation:
      "Carbapenems, rifampin, isoniazid, and tetracyclines can damage the liver.",
    source_quote:
      "Which antibiotics can damage the liver?\ncarbapenems, rifampin, isoniazid, and tetracyclines",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question: "Tetracyclines can cause what type of discoloration?",
    choices: [
      "Hair discoloration",
      "Tooth discoloration",
      "Nail discoloration",
      "Skin discoloration",
    ],
    answer: "B",
    explanation: "Tetracyclines cause tooth discoloration.",
    source_quote: "Tetracyclines cause _____ discoloration.\ntooth",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question: "Which antibiotics can be neurotoxic?",
    choices: [
      "Tetracyclines and sulfonamides",
      "Rifampin, isoniazid, and quinolones",
      "Beta-lactams and macrolides",
      "Aminoglycosides and vancomycin",
    ],
    answer: "B",
    explanation: "Rifampin, isoniazid, and quinolones can be neurotoxic.",
    source_quote:
      "Which antibiotics can be neurotoxic?\nrifampin, isoniazid, and quinolones",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question: "Aminoglycosides can cause permanent loss of which sense?",
    choices: ["Hearing", "Touch", "Taste", "Vision"],
    answer: "A",
    explanation: "Aminoglycosides can cause permanent hearing loss.",
    source_quote:
      "Aminoglycosides can cause permanent ______ loss, including if neomycin gets into body through open wounds.\nhearing",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question: "Antibiotic side effects may be a result of what phenomenon?",
    choices: [
      "Microbiota dysbiosis",
      "Drug-drug interactions",
      "Allergic reactions",
      "Metabolic acidosis",
    ],
    answer: "A",
    explanation:
      "Research suggests that antibiotic side effects could result from microbiota dysbiosis.",
    source_quote:
      "Research suggests that antibiotic side effects could be a result of ________ _______.\nmicrobiota dysbiosis",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question: "Why do antibiotics lead to secondary infections?",
    choices: [
      "They kill off members of the normal microbiota that keep pathogens in check",
      "They increase bacterial virulence",
      "They induce viral replication",
      "They suppress the immune system",
    ],
    answer: "A",
    explanation:
      "Antibiotics can kill normal microbiota that help keep pathogenic microbes in check, leading to secondary infections.",
    source_quote:
      "Why do antibiotics lead to secondary infections?\nthey kill off the members of the normal microbiota responsible for keeping pathogenic microbes in check",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question:
      "Which of the following is a common secondary infection caused by antibiotic use?",
    choices: [
      "Streptococcal pharyngitis",
      "C. difficile infection",
      "Tuberculosis",
      "Influenza",
    ],
    answer: "B",
    explanation:
      "C. diff infection is a common and dangerous secondary infection caused by antibiotics.",
    source_quote:
      "What secondary infections can antibiotic use cause?\n- fungal infections like vaginitis\n- c. diff (most common and extremely dangerous)",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question: "How is C. difficile infection commonly treated?",
    choices: [
      "Surgical removal",
      "Fecal transfer",
      "Immunotherapy",
      "Antiviral drugs",
    ],
    answer: "B",
    explanation: "Fecal transfer is 90% effective for treating C. diff.",
    source_quote: "How is C. diff treated?\nfecal transfer (90% effective)",
    category: "Clinical Use",
  },
  {
    type: "mcq",
    question: "What is a serious side effect of chloramphenicol?",
    choices: [
      "Hearing loss",
      "Nephrotoxicity",
      "Photosensitivity",
      "Increased risk of aplastic anemia",
    ],
    answer: "D",
    explanation:
      "Chloramphenicol suppresses bone marrow activity, increasing the risk of aplastic anemia.",
    source_quote:
      "Side effects of chloramphenicol\nsuppresses bone marrow activity > increases chances of developing aplastic anemia from 1:500K to 1:40K",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question: "What is a major safety concern with metronidazole?",
    choices: [
      "It causes tooth discoloration",
      "It induces photosensitivity",
      "It causes nephrotoxicity",
      "It is listed as a human carcinogen due to DNA binding",
    ],
    answer: "D",
    explanation:
      "Metronidazole is placed on the list of human carcinogens due to its ability to irreversibly bind DNA.",
    source_quote:
      "Side effects of metronidazole\n- placed on list of human carcinogens due to ability to irreversibly bind DNA > has been shown to induce cancer in animal models, but not humans\n- Stevens-Johnson syndrome: severe cutaneous reaction marked by rapid epidermal necrosis (also seen with sulfa antibiotics and penicillins)",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question: "Which severe cutaneous reaction can metronidazole cause?",
    choices: [
      "Urticaria",
      "Erythema multiforme",
      "Stevens-Johnson syndrome",
      "Toxic epidermal necrolysis",
    ],
    answer: "C",
    explanation: "Metronidazole can cause Stevens-Johnson syndrome.",
    source_quote:
      "Side effects of metronidazole\n- placed on list of human carcinogens due to ability to irreversibly bind DNA > has been shown to induce cancer in animal models, but not humans\n- Stevens-Johnson syndrome: severe cutaneous reaction marked by rapid epidermal necrosis (also seen with sulfa antibiotics and penicillins)",
    category: "Side Effects",
  },
  {
    type: "mcq",
    question:
      "Which glycopeptide has been restricted due to high nephrotoxicity but is now used as a last-resort antibiotic for MRSA?",
    choices: ["Vancomycin", "Teicoplanin", "Daptomycin", "Bacitracin"],
    answer: "A",
    explanation:
      "Vancomycin has been restricted due to nephrotoxicity but is used as a last-resort antibiotic for MRSA.",
    source_quote:
      "The glycopeptide ______ has been restricted due to its high nephrotoxicity, but has been brought back as last reserve antibiotic for MRSA infections.\nvancomycin",
    category: "Side Effects",
  },
];
