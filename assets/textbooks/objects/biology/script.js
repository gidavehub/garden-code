document.addEventListener('DOMContentLoaded', () => {
    // --- Data Store ---
    const textbookData = [
        {
            title: "Chapter 1: Introduction to Biology",
            sections: [
                {
                    id: "ch1_sec1",
                    title: "1.1 The Study of Life",
                    content: `
                        <h2>1.1 The Study of Life</h2>
                        <p>Welcome to the fascinating world of biology! Biology is the natural science dedicated to the study of life and living organisms. Derived from the Greek words "bios" (meaning life) and "logos" (meaning "study"), biology encompasses a vast and eclectic field of inquiry. It explores everything from the smallest microorganisms to the largest ecosystems, seeking to understand the intricate mechanisms and interactions that define being alive.</p>
                        <p>At its core, biology investigates the structure, function, growth, origin, evolution, and distribution of all living things. It's a discipline that constantly evolves, incorporating new discoveries and technologies to deepen our understanding of the myriad life forms that inhabit our planet. From the bacteria thriving in extreme environments to the complex physiology of the human body, biology provides the tools and concepts to explore and comprehend the living world.</p>
                        <h3>Why is the study of biology important?</h3>
                        <p>Beyond satisfying our innate curiosity about the world around us, biology plays a crucial role in our daily lives and the well-being of our planet. Advances in biological knowledge have led to remarkable developments in medicine, enabling us to diagnose, treat, and prevent diseases. In agriculture, biological principles are applied to improve crop yields and develop sustainable farming practices, helping to feed a growing global population. Furthermore, understanding ecological principles is vital for addressing environmental challenges such as climate change, pollution, and the conservation of biodiversity. Biological research provides insights into how living organisms function, evolve, and interact with each other and their environment, ultimately informing public health policies and conservation efforts.</p>
                        <h3>The scope of biology</h3>
                        <p>The scope of biology is immense. Biologists may investigate life at various levels of organization, from the molecular and cellular level to the level of entire organisms, populations, communities, and ecosystems. This broad scope is necessary to address the tremendous diversity of life on Earth, a diversity that has arisen through the process of evolution. Indeed, evolution is one of the central, unifying themes in biology, explaining the unity and diversity observed among living organisms. Other fundamental concepts that underpin all biological study include the idea that the cell is the basic unit of life, that genes (composed of DNA or RNA) are the fundamental units of heredity, that all organisms require and transform energy to survive, and that all organisms strive to maintain a stable internal environment, a state known as homeostasis.</p>
                        <p>The journey through biology will take us through many specialized disciplines. For instance, cell biologists delve into the intricacies of cell structure and function. Anatomists investigate the physical structure of organisms, while physiologists focus on their internal workings and functions. Botanists dedicate their studies to plants, and zoologists specialize in animals. Molecular biology examines biological processes at the molecular level, often overlapping with biochemistry, which studies the chemical substances and vital processes occurring in living organisms. Genetics explores heredity and the variation of inherited characteristics. Ecology examines how organisms interact with each other and their abiotic (non-living) environment. Evolutionary biology, as mentioned, studies the processes that have led to the diversity of life over vast spans of time, including processes like natural selection and speciation.</p>
                        <div class='suggested-image-placeholder'>[Suggested insertion: Diagram illustrating the interconnections between different fields of biology, e.g., a web diagram showing how molecular biology, ecology, genetics, etc., all contribute to the broader understanding of life.]</div>
                        <p>The study of life on Earth has a long history, representing a continuous quest for knowledge... (rest of the content from your input for 1.1)</p>
                    `,
                    mcqs: [
                        {
                            question: "What are the Greek words from which 'biology' is derived, and what do they mean?",
                            options: [
                                { text: "'Bio' (earth) and 'logos' (study)", correct: false, feedback: "Incorrect. 'Bio' means life." },
                                { text: "'Bios' (life) and 'logos' (study)", correct: true, feedback: "Correct! 'Bios' means life and 'logos' means study." },
                                { text: "'Bios' (animal) and 'logy' (science)", correct: false, feedback: "Incorrect. While animals are part of biology, these aren't the direct etymological roots as described." },
                                { text: "'Bion' (unit) and 'ology' (knowledge)", correct: false, feedback: "Incorrect. These terms are related but not the primary roots given for biology." }
                            ]
                        },
                        {
                            question: "Which of these is NOT listed as a central, unifying theme or fundamental concept in biology?",
                            options: [
                                { text: "The cell is the basic unit of life.", correct: false, feedback: "Incorrect. This is a fundamental concept in biology." },
                                { text: "Genes are the fundamental units of heredity.", correct: false, feedback: "Incorrect. This is a fundamental concept in biology." },
                                { text: "All living organisms are composed of at least two cells.", correct: true, feedback: "Correct! Some organisms are single-celled. The concept is that all living things are composed of one or more cells." },
                                { text: "Evolution explains the unity and diversity of life.", correct: false, feedback: "Incorrect. This is a central, unifying theme." }
                            ]
                        },
                        {
                            question: "What technological advancement in the 17th century significantly advanced biology by opening up the unseen world of microorganisms?",
                            options: [
                                { text: "The telescope", correct: false, feedback: "Incorrect. Telescopes are for distant objects." },
                                { text: "The printing press", correct: false, feedback: "Incorrect. While important for disseminating knowledge, it didn't directly reveal microorganisms." },
                                { text: "The microscope", correct: true, feedback: "Correct! Antonie van Leeuwenhoek's refinement of the microscope was key." },
                                { text: "The computer", correct: false, feedback: "Incorrect. Computers came much later." }
                            ]
                        },
                        {
                            question: "According to the text, advancements in biological knowledge have NOT directly led to developments in which of the following fields for societal benefit?",
                            options:
                            [
                                { text: "Medicine", correct: false, feedback: "Incorrect. Biology has led to remarkable developments in medicine." },
                                { text: "Agriculture", correct: false, feedback: "Incorrect. Biological principles improve crop yields and sustainable farming." },
                                { text: "Space Exploration (e.g., building rockets)", correct: true, feedback: "Correct. While biology might be involved in astrobiology, rocket construction is primarily an engineering and physics challenge, not a direct societal benefit from biological advances listed here." },
                                { text: "Public health policies", correct: false, feedback: "Incorrect. Biological research informs public health policies." }
                            ]
                        },
                        {
                            question: "What field of biology explores heredity and the variation of inherited characteristics?",
                            options: [
                                { text: "Ecology", correct: false, feedback: "Incorrect. Ecology studies interactions between organisms and their environment." },
                                { text: "Physiology", correct: false, feedback: "Incorrect. Physiology focuses on the internal workings and functions of organisms." },
                                { text: "Genetics", correct: true, feedback: "Correct! Genetics is the study of heredity and variation." },
                                { text: "Anatomy", correct: false, feedback: "Incorrect. Anatomy investigates the physical structure of organisms." }
                            ]
                        }
                    ]
                },
                {
                    id: "ch1_sec2",
                    title: "1.2 Characteristics of Living Things",
                    content: `
                        <h2>1.2 Characteristics of Living Things</h2>
                        <p>What exactly distinguishes a living organism from a non-living entity? While it might seem straightforward, defining "life" can be complex. Instead of a single definition, biologists identify a set of properties or characteristics that, taken together, describe most known living things. These are not absolute criteria, as some non-living things may exhibit one or two, and some living entities (like viruses) present borderline cases.</p>
                        <p>The key characteristics of living things typically include:</p>
                        <ul>
                            <li><strong>Order/Organization:</strong> Living things are highly organized, meaning they consist of one or more cells, which are the basic units of life...</li>
                            <li><strong>Response to Stimuli (Sensitivity):</strong> Living organisms can detect and respond to changes in their internal or external environment...</li>
                            <li><strong>Reproduction:</strong> All living things have the ability to reproduce...</li>
                            <li><strong>Adaptation and Evolution:</strong> Living organisms are adapted to their environments...</li>
                            <li><strong>Growth and Development:</strong> Living organisms exhibit growth...</li>
                            <li><strong>Regulation/Homeostasis:</strong> Living organisms possess mechanisms to maintain a stable internal environment...</li>
                            <li><strong>Energy Processing (Metabolism):</strong> All living things require a constant input of energy...</li>
                            <li><strong>Made of Cells:</strong> The cell theory, a fundamental concept in biology, states that all known living things are composed of one or more cells...</li>
                        </ul>
                        <div class='suggested-image-placeholder'>[Suggested insertion: Table summarizing the characteristics of life with brief examples for each. Images depicting examples like a plant responding to light, an animal reproducing, and a complex multicellular organism showing organization.]</div>
                        <p>It's important to note that some non-living things can exhibit some of these characteristics... (rest of the content from your input for 1.2)</p>
                    `,
                    mcqs: [ /* Populate with 5 MCQs for this section */ ]
                },
                {
                    id: "ch1_sec3",
                    title: "1.3 Levels of Biological Organization",
                    content: `
                        <h2>1.3 Levels of Biological Organization</h2>
                        <p>Life is organized in a hierarchical manner, from the very small to the very large. Understanding these levels is crucial for comprehending the complexity and interconnectedness of living systems...</p>
                        <p>The major levels of biological organization, from simplest to most complex, are:</p>
                        <ol>
                            <li>Atoms</li>
                            <li>Molecules</li>
                            <li>Organelles</li>
                            <li>Cells</li>
                            <li>Tissues</li>
                            <li>Organs</li>
                            <li>Organ Systems</li>
                            <li>Organism</li>
                            <li>Population</li>
                            <li>Community</li>
                            <li>Ecosystem</li>
                            <li>Biome</li>
                            <li>Biosphere</li>
                        </ol>
                        <div class='suggested-image-placeholder'>[Suggested insertion: A pyramid or nested diagram illustrating the levels of biological organization from atoms to the biosphere, with clear labels and iconic images for each level.]</div>
                        <p>The study of biology can occur at any of these levels... (rest of the content from your input for 1.3)</p>
                    `,
                    mcqs: [ /* Populate with 5 MCQs for this section */ ]
                },
                {
                    id: "ch1_sec4",
                    title: "1.4 The Scientific Method",
                    content: `
                        <h2>1.4 The Scientific Method</h2>
                        <p>Biology, like all sciences, relies on a systematic approach to understanding the natural world. This approach is known as the scientific method...</p>
                        <p>Key components generally include:</p>
                        <ul>
                            <li>Observation</li>
                            <li>Question</li>
                            <li>Hypothesis</li>
                            <li>Prediction</li>
                            <li>Experimentation/Testing</li>
                            <li>Data Analysis</li>
                            <li>Conclusion</li>
                            <li>Communication/Reporting</li>
                        </ul>
                        <div class='suggested-image-placeholder'>[Suggested insertion: A flowchart illustrating the steps of the scientific method... Perhaps a sidebar with a famous biological discovery...]</div>
                        <p>It's important to recognize that science is a dynamic and collaborative endeavor... (rest of the content from your input for 1.4)</p>
                    `,
                    mcqs: [ /* Populate with 5 MCQs for this section */ ]
                }
            ]
        },
        {
            title: "Chapter 2: Classification of Life",
            sections: [
                {
                    id: "ch2_sec1",
                    title: "2.1 Domains and Kingdoms",
                    content: `
                        <h2>2.1 Domains and Kingdoms</h2>
                        <h3>Introduction</h3>
                        <p>The sheer diversity of life on Earth is astounding... To make sense of this incredible variety, biologists use a system of classification...</p>
                        <h3>Domains</h3>
                        <p>Today, the most widely accepted system at the highest level organizes life into three Domains: Bacteria, Archaea, and Eukarya...</p>
                        <h4>Domain Bacteria:</h4>
                        <p>Cell Type: Prokaryotic...</p>
                        <h4>Domain Archaea:</h4>
                        <p>Cell Type: Prokaryotic...</p>
                        <h4>Domain Eukarya:</h4>
                        <p>Cell Type: Eukaryotic...</p>
                        <p>This domain encompasses a vast array of life forms and is further subdivided into several Kingdoms. The most commonly recognized kingdoms within Eukarya are: Kingdom Protista, Kingdom Fungi, Kingdom Plantae, Kingdom Animalia.</p>
                        <div class='suggested-image-placeholder'>[Suggested insertion: A diagram illustrating the three domains and the kingdoms within Eukarya... A table comparing the key characteristics...]</div>
                        <p>The classification into domains and kingdoms is a dynamic framework... (rest of the content for 2.1)</p>
                    `,
                    mcqs: [ /* MCQs for this section */ ]
                },
                {
                    id: "ch2_sec2",
                    title: "2.2 Taxonomy and Binomial Nomenclature",
                    content: `
                        <h2>2.2 Taxonomy and Binomial Nomenclature</h2>
                        <p>Beyond the broad categories of domains and kingdoms, biologists use a more detailed hierarchical system to classify organisms called taxonomy...</p>
                        <p>The standard hierarchical levels are: Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species.</p>
                        <h3>Binomial Nomenclature:</h3>
                        <p>A crucial aspect of taxonomy is providing a unique, universally accepted scientific name for each species... developed by Carl Linnaeus...</p>
                        <p>Key features: Two Parts, Italicization or Underlining, Uniqueness, Universality.</p>
                        <div class='suggested-image-placeholder'>[Suggested insertion: A diagram illustrating the taxonomic hierarchy with an example organism... Examples of correctly formatted binomial names.]</div>
                        <p>Why is classification important?... (rest of the content for 2.2)</p>
                    `,
                    mcqs: [ /* MCQs for this section */ ]
                },
                // Add more sections for Ch2 here, then more chapters
            ]
        },
        // --- ADD ALL OTHER CHAPTERS AND SECTIONS HERE FOLLOWING THE SAME STRUCTURE ---
        // Example for a future chapter to show structure:
        /*
        {
            title: "Chapter 3: Basic Chemistry for Biology",
            sections: [
                {
                    id: "ch3_sec1",
                    title: "3.1 Structure of Atoms",
                    content: "<h2>3.1 Structure of Atoms</h2><p>Content for 3.1...</p><div class='suggested-image-placeholder'>[Suggested image for atoms]</div>",
                    mcqs: [  ]
                },
                // more sections for Ch3
            ]
        }
        */
    ];

    const glossaryData = [
        { term: "Adaptation", definition: "A trait that enhances an organism's survival and reproduction in a specific environment." },
        { term: "Atom", definition: "The fundamental unit of matter." },
        { term: "Biology", definition: "The natural science dedicated to the study of life and living organisms." },
        { term: "Biosphere", definition: "The sum of all ecosystems on Earth; the part of Earth inhabited by life." },
        { term: "Cell", definition: "The basic structural and functional unit of life." },
        { term: "Community", definition: "All the different populations of different species that live together in a particular area and interact with each other." },
        { term: "DNA (Deoxyribonucleic Acid)", definition: "The molecule that carries genetic information." },
        { term: "Ecosystem", definition: "A community of living organisms (biotic factors) along with their non-living physical environment (abiotic factors), functioning together as a unit." },
        { term: "Evolution", definition: "The process by which different kinds of living organisms are thought to have developed and diversified from earlier forms during the history of the earth. One of the central, unifying themes in biology." },
        { term: "Gene", definition: "The fundamental unit of heredity, composed of DNA or RNA." },
        { term: "Homeostasis", definition: "The maintenance of a stable internal environment in an organism despite fluctuations in the external environment." },
        { term: "Hypothesis", definition: "A proposed explanation for an observation or a tentative answer to a scientific question that must be testable and falsifiable." },
        { term: "Metabolism", definition: "The sum of all chemical reactions that occur within an organism." },
        { term: "Molecule", definition: "Two or more atoms joined together by chemical bonds." },
        { term: "Organelle", definition: "Specialized structures within cells that perform specific functions." },
        { term: "Organism", definition: "An individual living being." },
        { term: "Population", definition: "A group of individuals of the same species living in the same geographic area at the same time." },
        { term: "Reproduction", definition: "The ability of living things to create new individuals of the same type." },
        { term: "Scientific Method", definition: "A systematic approach to understanding the natural world, involving observation, questioning, hypothesizing, predicting, testing, analyzing data, and concluding." },
        { term: "Theory (Scientific)", definition: "A broad, well-substantiated explanation for aspects of the natural world that is supported by a large body of evidence." }
        // Add all other glossary terms here
    ];


    // --- DOM Elements ---
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const chapterListUl = document.getElementById('chapter-list');
    const sectionContentDisplay = document.getElementById('section-content-display');
    const textbookCoverDisplay = document.getElementById('textbook-cover');

    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResultsDiv = document.getElementById('search-results');
    const glossaryListDiv = document.getElementById('glossary-list');

    // --- Tab Navigation Logic ---
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(button.dataset.tab).classList.add('active');
        });
    });

    // --- Home Tab: Chapter/Section Navigation and Content Loading ---
    function populateChapterNav() {
        textbookData.forEach((chapter, chapterIndex) => {
            const chapterLi = document.createElement('li');
            const chapterTitleSpan = document.createElement('span');
            chapterTitleSpan.textContent = chapter.title;
            chapterLi.appendChild(chapterTitleSpan);

            const sectionsUl = document.createElement('ul');
            chapter.sections.forEach(section => {
                const sectionLi = document.createElement('li');
                const sectionTitleSpan = document.createElement('span');
                sectionTitleSpan.textContent = section.title;
                sectionTitleSpan.dataset.chapterIndex = chapterIndex;
                sectionTitleSpan.dataset.sectionId = section.id; // Use ID for selection
                sectionLi.appendChild(sectionTitleSpan);
                sectionsUl.appendChild(sectionLi);

                sectionTitleSpan.addEventListener('click', (e) => {
                    loadSection(section.id);
                    document.querySelectorAll('.chapter-nav ul ul li span').forEach(s => s.classList.remove('active-section'));
                    e.target.classList.add('active-section');
                });
            });
            chapterLi.appendChild(sectionsUl);
            chapterListUl.appendChild(chapterLi);

            chapterTitleSpan.addEventListener('click', () => {
                // Toggle section list visibility
                const isVisible = sectionsUl.style.display === 'block';
                document.querySelectorAll('.chapter-nav ul ul').forEach(ul => ul.style.display = 'none'); // Close all others
                sectionsUl.style.display = isVisible ? 'none' : 'block';
            });
        });
    }

    function findSectionById(sectionId) {
        for (const chapter of textbookData) {
            const foundSection = chapter.sections.find(sec => sec.id === sectionId);
            if (foundSection) return foundSection;
        }
        return null;
    }


    function loadSection(sectionId) {
        const section = findSectionById(sectionId);

        if (section) {
            textbookCoverDisplay.style.display = 'none';
            sectionContentDisplay.style.display = 'block';
            let htmlContent = section.content;

            // MCQs
            if (section.mcqs && section.mcqs.length > 0) {
                htmlContent += '<div id="mcq-container"><h3>Interactive Questions</h3>';
                section.mcqs.forEach((mcq, index) => {
                    htmlContent += `
                        <div class="mcq" id="mcq-${section.id}-${index}">
                            <p>${index + 1}. ${mcq.question}</p>
                            <ul class="mcq-options">
                                ${mcq.options.map((opt, optIndex) => `
                                    <li data-correct="${opt.correct}" data-feedback="${opt.feedback}" onclick="handleMcqOptionClick(this, 'mcq-${section.id}-${index}')">
                                        ${String.fromCharCode(65 + optIndex)}. ${opt.text}
                                    </li>
                                `).join('')}
                            </ul>
                            <div class="mcq-feedback"></div>
                        </div>
                    `;
                });
                htmlContent += '</div>';
            }
            sectionContentDisplay.innerHTML = htmlContent;
            sectionContentDisplay.scrollTop = 0; // Scroll to top of content
        } else {
            sectionContentDisplay.innerHTML = '<p>Section not found.</p>';
        }
    }

    // Make handleMcqOptionClick globally accessible for inline onclick
    window.handleMcqOptionClick = function(selectedOptionLi, mcqId) {
        const mcqDiv = document.getElementById(mcqId);
        const options = mcqDiv.querySelectorAll('.mcq-options li');
        const feedbackDiv = mcqDiv.querySelector('.mcq-feedback');
        const isCorrect = selectedOptionLi.dataset.correct === 'true';

        options.forEach(opt => {
            opt.classList.add('disabled'); // Disable all options after one is clicked
            opt.onclick = null; // Remove click listener
            if (opt === selectedOptionLi) {
                opt.classList.add(isCorrect ? 'correct' : 'incorrect');
            }
        });

        feedbackDiv.textContent = selectedOptionLi.dataset.feedback;
        feedbackDiv.className = 'mcq-feedback ' + (isCorrect ? 'correct-feedback' : 'incorrect-feedback');
    }


    // --- Search Tab Logic ---
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        searchResultsDiv.innerHTML = '';
        if (query.length < 2) {
            searchResultsDiv.innerHTML = '<p>Please enter at least 2 characters to search.</p>';
            return;
        }

        let resultsFound = 0;
        const resultsHtml = [];

        textbookData.forEach((chapter) => {
            chapter.sections.forEach(section => {
                const titleMatch = section.title.toLowerCase().includes(query);
                const contentMatch = section.content.toLowerCase().includes(query);

                if (titleMatch || contentMatch) {
                    resultsFound++;
                    let snippet = '';
                    const contentLower = section.content.toLowerCase();
                    const queryIndex = contentLower.indexOf(query);

                    if (queryIndex !== -1) {
                        const start = Math.max(0, queryIndex - 50);
                        const end = Math.min(contentLower.length, queryIndex + query.length + 50);
                        snippet = section.content.substring(start, end);
                        // Basic highlighting (more robust solution would involve careful HTML parsing)
                        const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
                        snippet = snippet.replace(regex, '<mark>$1</mark>');
                        snippet = `...${snippet}...`;
                    } else if (titleMatch) {
                         snippet = section.content.substring(0, 100) + "..."; // First 100 chars as snippet if title matches
                    }


                    resultsHtml.push(`
                        <div class="search-result-item">
                            <h4>${chapter.title} - ${section.title}</h4>
                            <p>${snippet || 'Content match, snippet generation needs refinement.'}</p>
                            <button onclick="navigateToSection('${section.id}')">Go to Section</button>
                        </div>
                    `);
                }
            });
        });

        if (resultsFound > 0) {
            searchResultsDiv.innerHTML = `<h3>Found ${resultsFound} result(s):</h3>` + resultsHtml.join('');
        } else {
            searchResultsDiv.innerHTML = '<p>No results found.</p>';
        }
    }
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }

    // Make navigateToSection globally accessible for inline onclick
    window.navigateToSection = function(sectionId) {
        // Switch to home tab
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        document.querySelector('.tab-button[data-tab="home"]').classList.add('active');
        document.getElementById('home').classList.add('active');

        // Load the section
        loadSection(sectionId);

        // Highlight in nav (and expand parent chapter if needed)
        document.querySelectorAll('.chapter-nav ul ul li span').forEach(s => s.classList.remove('active-section'));
        const navSpan = document.querySelector(`.chapter-nav ul ul li span[data-section-id="${sectionId}"]`);
        if (navSpan) {
            navSpan.classList.add('active-section');
            // Ensure parent chapter is expanded
            const parentUl = navSpan.closest('ul');
            if (parentUl) parentUl.style.display = 'block';
        }
    }


    // --- Glossary Tab Logic ---
    function populateGlossary() {
        // Sort glossary data alphabetically by term
        glossaryData.sort((a, b) => a.term.localeCompare(b.term));

        glossaryData.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('glossary-item');
            div.innerHTML = `<strong>${item.term}:</strong> ${item.definition}`;
            glossaryListDiv.appendChild(div);
        });
    }


    // --- Initializations ---
    if (chapterListUl) populateChapterNav();
    if (glossaryListDiv) populateGlossary();

});