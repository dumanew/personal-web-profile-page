document.getElementById("funFactBtn").addEventListener("click", function() {
    const facts = [
        "I have an irrational fear of planets!",
        "I have been to Apayao and Tawi Tawi!",
        "I work in eDiscovery!"
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("funFact").textContent = randomFact;
});
