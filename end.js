// Get the most recent score from localStorage
const mostRecentScore = parseInt(localStorage.getItem('mostRecentScore'));

// Get the element to display the depression level
const depressionLevel = document.getElementById('depressionLevel');

// Check the score and display the corresponding depression level message
if (mostRecentScore >= 1 && mostRecentScore <= 4) {
    depressionLevel.innerText = "Minimal depression";
} else if (mostRecentScore >= 5 && mostRecentScore <= 9) {
    depressionLevel.innerText = "Mild depression";
} else if (mostRecentScore >= 10 && mostRecentScore <= 14) {
    depressionLevel.innerText = "Moderate depression";
} else if (mostRecentScore >= 15 && mostRecentScore <= 19) {
    depressionLevel.innerText = "Moderately severe depression";
} else if (mostRecentScore >= 20 && mostRecentScore <= 27) {
    depressionLevel.innerText = "Severe depression";
} else {
    depressionLevel.innerText = "No score available or invalid score.";
}