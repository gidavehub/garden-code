// This is the corrected import for node-fetch to support both old and new versions.
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// --- API KEYS ---
const PIXABAY_API_KEY = '50785199-e2bd8421f9803d55c4bacd08c';
const YOUTUBE_API_KEY = 'YOUR_YOUTUBE_API_KEY_HERE';

// Source data structure (Unchanged)
const textbookStructure = [
    {
        name: "Chapter 1: Fundamentals of Atomic Structure",
        sections: [
            "1.1 Subatomic Particles: Protons, Neutrons, Electrons",
            "1.2 Atomic Number, Mass Number, and Isotopes",
            "1.3 Electron Configuration and Orbital Diagrams",
            "1.4 Quantum Numbers and Their Significance"
        ]
    },
    {
        name: "Chapter 2: The Periodic Table and Periodicity",
        sections: [
            "2.1 Development of the Periodic Table (Mendeleev to Modern)",
            "2.2 Periodic Trends: Atomic Radii, Ionization Energy, Electronegativity",
            "2.3 Groups and Periods: s‐Block, p‐Block, d‐Block, f‐Block Elements",
            "2.4 Predicting Properties from Position in the Table"
        ]
    },
    {
        name: "Chapter 3: Ionic and Covalent Bonding",
        sections: [
            "3.1 Ionic Bond Formation and Lattice Energy",
            "3.2 Covalent Bonding: Lewis Structures and Octet Rule",
            "3.3 Polar vs. Nonpolar Covalent Bonds; Electronegativity Differences",
            "3.4 Metallic Bonding and Alloys"
        ]
    },
    {
        name: "Chapter 4: Molecular Geometry and VSEPR Theory",
        sections: [
            "4.1 VSEPR Basics: Predicting Shapes of Molecules",
            "4.2 Bond Angles, Hybridization, and Molecular Orbitals (Introductory)",
            "4.3 Polarity of Molecules and Their Physical Properties",
            "4.4 Intermolecular Forces: London Dispersion, Dipole–Dipole, Hydrogen Bonding"
        ]
    },
    {
        name: "Chapter 5: The Mole Concept and Avogadro’s Number",
        sections: [
            "5.1 Definition and Applications of the Mole",
            "5.2 Molar Mass Calculations and Conversions",
            "5.3 Empirical and Molecular Formulas",
            "5.4 Stoichiometric Calculations: Reactants to Products"
        ]
    },
    {
        name: "Chapter 6: Chemical Reactions and Equations",
        sections: [
            "6.1 Writing and Balancing Chemical Equations (Including Redox, Acid–Base)",
            "6.2 Types of Reactions: Combination, Decomposition, Displacement, Combustion (Review and Expansion)",
            "6.3 Limiting Reactants, Percent Yield, and Theoretical Yield",
            "6.4 Concentration Units: Molarity, Molality, Percent Composition (Applied to Solutions)"
        ]
    },
    {
        name: "Chapter 7: Gases and Gas Laws",
        sections: [
            "7.1 Ideal Gas Law (PV = nRT) and Kinetic Molecular Theory",
            "7.2 Boyle’s, Charles’s, and Avogadro’s Laws",
            "7.3 Partial Pressures and Dalton’s Law",
            "7.4 Real Gases and Deviations from Ideal Behavior"
        ]
    },
    {
        name: "Chapter 8: Liquids and Solids",
        sections: [
            "8.1 Intermolecular Forces in Liquids: Vapor Pressure, Boiling Point",
            "8.2 Phase Diagrams and Phase Transitions",
            "8.3 Types of Solids: Ionic, Covalent Network, Molecular, Metallic",
            "8.4 Crystallography and Unit Cells (Introductory)"
        ]
    },
    {
        name: "Chapter 9: Solutions and Their Properties",
        sections: [
            "9.1 Types of Solutions: Saturated, Unsaturated, Supersaturated",
            "9.2 Solubility Rules and Factors Affecting Solubility",
            "9.3 Colligative Properties: Vapor Pressure Lowering, Boiling Point Elevation, Freezing Point Depression",
            "9.4 Osmosis and Osmotic Pressure"
        ]
    },
    {
        name: "Chapter 10: Acid–Base Equilibria and pH",
        sections: [
            "10.1 Definitions: Arrhenius, Brønsted–Lowry, Lewis Acids and Bases",
            "10.2 pH, pOH, and pKw Calculations",
            "10.3 Strong vs. Weak Acids/Bases and Dissociation Constants (K_a, K_b)",
            "10.4 Buffer Systems, Titration Curves, and Indicators"
        ]
    },
    {
        name: "Chapter 11: Chemical Thermodynamics",
        sections: [
            "11.1 The First Law: Internal Energy, Heat, and Work",
            "11.2 Enthalpy Changes: Calorimetry and Hess’s Law",
            "11.3 The Second Law: Entropy and Spontaneity (ΔG = ΔH − TΔS)",
            "11.4 Thermochemical Equations and Applications"
        ]
    },
    {
        name: "Chapter 12: Chemical Kinetics",
        sections: [
            "12.1 Reaction Rates and Rate Laws (Zero, First, Second Order)",
            "12.2 Rate Constants and Activation Energy (Arrhenius Equation)",
            "12.3 Collision Theory and Transition‐State Theory",
            "12.4 Catalysis: Homogeneous and Heterogeneous Catalysts"
        ]
    },
    {
        name: "Chapter 13: Chemical Equilibrium",
        sections: [
            "13.1 Dynamic Equilibrium in Closed Systems",
            "13.2 Le Châtelier’s Principle and Shifts in Equilibrium",
            "13.3 Equilibrium Constants (K_c, K_p) and Their Calculations",
            "13.4 Applications: Solubility Equilibria (K_sp), Common‐Ion Effect"
        ]
    },
    {
        name: "Chapter 14: Redox Reactions and Electrochemistry",
        sections: [
            "14.1 Oxidation Numbers and Balancing Redox Equations (Review & Application)",
            "14.2 Electrochemical Cells: Galvanic and Electrolytic",
            "14.3 Standard Electrode Potentials and Cell EMF",
            "14.4 Applications: Batteries, Corrosion, Electroplating"
        ]
    },
    {
        name: "Chapter 15: Introduction to Organic Compounds",
        sections: [
            "15.1 Carbon Bonding, Functional Groups, and Nomenclature",
            "15.2 Isomerism: Structural, Geometric (cis/trans), Optical",
            "15.3 Saturated vs. Unsaturated Hydrocarbons (Alkanes, Alkenes, Alkynes)",
            "15.4 Aromaticity and Benzene Chemistry (Introductory)"
        ]
    },
    {
        name: "Chapter 16: Reactions of Organic Molecules",
        sections: [
            "16.1 Substitution, Addition, Elimination, and Rearrangement Reactions",
            "16.2 Reaction Mechanisms: Free Radical, Nucleophilic, Electrophilic",
            "16.3 Alcohols, Ethers, Aldehydes, Ketones, Carboxylic Acids, and Derivatives (Key Reactions)",
            "16.4 Polymer Chemistry (Addition vs. Condensation Polymers)"
        ]
    },
    {
        name: "Chapter 17: Laboratory Techniques and Safety",
        sections: [
            "17.1 Common Laboratory Apparatus (Glassware, Balances, Burettes, etc.)",
            "17.2 Safety Protocols: Handling Chemicals, Protective Equipment",
            "17.3 Measurement and Data Recording Best Practices (Chemical Context)",
            "17.4 Qualitative Analysis: Identifying Cations and Anions (Systematic Approach)"
        ]
    },
    {
        name: "Chapter 18: Experimental Investigations (Selected Examples)",
        sections: [
            "18.1 Titration Techniques (Acid–Base, Redox, Complexometric)",
            "18.2 Preparation and Standardization of Solutions",
            "18.3 Rates of Reaction: Methods for Monitoring",
            "18.4 Thermochemistry Experiments (Calorimetry - Practical Application)"
        ]
    },
    {
        name: "Chapter 19: WAEC Chemistry Practice Questions",
        sections: [
            "19.1 Multiple‐Choice Quizzes (All Topics)",
            "19.2 Structured and Essay‐Type Questions with Mark Schemes",
            "19.3 Practical and Alternative to Practical (ATTP) Questions"
        ]
    },
    {
        name: "Chapter 20: Cambridge IGCSE/WAEC Combined Practice",
        sections: [
            "20.1 Syllabus Coverage and Key Differences (Comparative Overview)",
            "20.2 Mock Exam Papers and Detailed Solutions (Integrated or Comparative Style)",
            "20.3 Revision Strategies and Common Pitfalls (Combined Advice)"
        ]
    }
];

/**
 * Fetches a single image URL from Pixabay based on a search term.
 * @param {string} searchTerm The term to search for.
 * @returns {Promise<string>} The URL of the first image found, or an empty string.
 */
async function getPixabayImage(searchTerm) {
    const url = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(searchTerm)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=3`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`Pixabay API error for "${searchTerm}": ${response.statusText}`);
            return "";
        }
        const data = await response.json();
        // The results are in an array called "hits"
        return data.hits && data.hits.length > 0 ? data.hits[0].largeImageURL : "";
    } catch (error) {
        console.error(`Error fetching Pixabay image for "${searchTerm}":`, error);
        return "";
    }
}

/**
 * Fetches video URLs from YouTube based on a search term.
 * @param {string} searchTerm The term to search for.
 * @param {number} count The number of video URLs to return.
 * @returns {Promise<string[]>} An array of video URLs.
 */
async function getYouTubeVideos(searchTerm, count) {
    if (!YOUTUBE_API_KEY || YOUTUBE_API_KEY === 'YOUR_YOUTUBE_API_KEY_HERE') {
        // console.warn(`YouTube API key is not set. Skipping YouTube search for "${searchTerm}".`);
        return Array(count).fill(""); // Return empty strings if key is missing
    }
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchTerm)}&maxResults=${count}&key=${YOUTUBE_API_KEY}&type=video`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`YouTube API error for "${searchTerm}": ${response.statusText}`);
            return [];
        }
        const data = await response.json();
        return data.items ? data.items.map(item => `https://www.youtube.com/watch?v=${item.id.videoId}`) : [];
    } catch (error) {
        console.error(`Error fetching YouTube video for "${searchTerm}":`, error);
        return [];
    }
}

/**
 * Main function to build the final object with media URLs.
 */
async function buildMediaObject() {
    const result = [];
    for (const chapterData of textbookStructure) {
        console.log(`Processing ${chapterData.name}...`);
        
        // Use more specific search terms for better results
        const chapterTitle = chapterData.name.split(':').slice(1).join(':').trim();
        const chapterSearchTerm = chapterTitle + " chemistry background";
        
        const chapterVideos = await getYouTubeVideos(chapterData.name + " chemistry tutorial", 3);
        const newChapter = {
            name: chapterData.name,
            image: await getPixabayImage(chapterSearchTerm),
            video: chapterVideos,
            sections: []
        };
        
        for (const sectionTitle of chapterData.sections) {
             // *** THIS IS THE NEW, CORRECTED LOGIC ***
             // 1. Clean the title to get the core concepts.
             let cleanTitle = sectionTitle
                .replace(/^\d+\.\d+\s*/, '')      // Remove leading "1.1 "
                .replace(/ \(.*?\)/g, '')         // Remove text in parentheses like (Introductory)
                .split(':')[0]                    // Take only the part before a colon
                .split(',')[0]                    // And take only the part before the first comma
                .trim();                          // Remove leading/trailing whitespace

             // 2. Create a shorter, more effective search term.
             const sectionSearchTerm = cleanTitle + " scientific illustration";
             
             const sectionVideo = await getYouTubeVideos(sectionTitle + " chemistry explained", 1);
             const newSection = {
                 title: sectionTitle,
                 image: await getPixabayImage(sectionSearchTerm),
                 video: sectionVideo[0] || "" // Ensure it's a string, not an array
             };
             newChapter.sections.push(newSection);
        }
        
        result.push(newChapter);
    }
    
    return result;
}

// Run the script and print the final JSON object
buildMediaObject().then(finalObject => {
    console.log("\n--- GENERATED JSON OBJECT ---");
    console.log(JSON.stringify(finalObject, null, 2));
    console.log("\n--- SCRIPT COMPLETE ---");
});