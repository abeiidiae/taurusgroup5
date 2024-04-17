// Function to enable editing of review
function editReview(button) {
    // Get the parent box element
    const box = button.parentNode;

    // Find the paragraph element containing the review text
    const reviewParagraph = box.querySelector('p');

    // Prompt the user to enter a new review
    const newReview = prompt('Enter your updated review:', reviewParagraph.textContent);

    // Update the review text if user input is not null
    if (newReview !== null) {
        reviewParagraph.textContent = newReview;
    }
}
