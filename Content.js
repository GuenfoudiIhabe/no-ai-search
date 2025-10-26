// Function to remove AI panels
function removeAIPanels() {
    // Only very specific AI-related selectors
    const selectors = [
        "#llm-snippet",                    // AI panel ID
        "#chatllm-conversation",           // AI conversation ID
        "#chatllm-main-answer-content",    // AI answer content
        ".chatllm-answer-list",            // AI answer list class
        ".chatllm-content",                // AI content class
        "[class*='chatllm-']",             // Any class starting with chatllm-
        "div[id^='llm-']",                 // Any div with ID starting with llm-
        "#eKIzJc"                          // Original ID
    ];

    let removed = false;
    selectors.forEach(selector => {
        try {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (element && element.parentNode) {
                    console.log(`Removing AI panel with selector: ${selector}`, element);
                    element.remove();
                    removed = true;
                }
            });
        } catch (e) {
            console.error(`Error with selector ${selector}:`, e);
        }
    });

    return removed;
}

// Run immediately
console.log("AI Remover: Starting...");
removeAIPanels();

// Run periodically
setInterval(() => {
    removeAIPanels();
}, 500);

// Also watch for DOM changes
const observer = new MutationObserver((mutations) => {
    removeAIPanels();
});

observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});