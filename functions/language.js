// Language change function
function changeLanguage(language) {
    // Get all elements with the data-en and data-el attributes
    const elements = document.querySelectorAll('[data-en], [data-el]');

    // Update the <html> lang attribute
    if (language === 'en') {
        document.documentElement.setAttribute('lang', 'en');  // Set language to English
    } else if (language === 'el') {
        document.documentElement.setAttribute('lang', 'el');  // Set language to Greek
    }

    // Loop through each element and change its text content
    elements.forEach(element => {
        if (language === 'en') {
            // Set the text to the English version (data-en)
            element.textContent = element.getAttribute('data-en');
        } else if (language === 'el') {
            // Set the text to the Greek version (data-el)
            element.textContent = element.getAttribute('data-el');
        }
    });
}
