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
    // Update the navigation text after language change
    updateNavigationText();
}
function updateNavigationText() {
    // Update all navigation links with their localized text
    document.querySelector('.nav-links li a[data-en="Home"]').textContent = getLocalizedString("home");
    document.querySelector('.nav-links li a[data-en="Our Team"]').textContent = getLocalizedString("ourTeam");
    document.querySelector('.nav-links li a[data-en="Supporters"]').textContent = getLocalizedString("supporters");
    document.querySelector('.nav-links li a[data-en="Lab"]').textContent = getLocalizedString("lab");
    document.querySelector('.nav-links li a[data-en="Contact"]').textContent = getLocalizedString("contact");
    document.querySelector('.nav-links li a[data-en="News"]').textContent = getLocalizedString("news");
}
// Function to get the string based on the selected language
function getLocalizedString(key) {
    // Get the current language from the lang attribute
    const currentLang = document.documentElement.lang;

    const translations = {
        en: {
            home: "Home",
            ourTeam: "Our Team",
            supporters: "Supporters",
            lab: "Lab",
            contact: "Contact",
            news: "News",
        },
        el: {
            home: "Αρχική",
            ourTeam: "Η Ομάδα Μας",
            supporters: "Υποστηρικτές",
            lab: "Εργαστήριο",
            contact: "Επικοινωνία",
            news: "Νέα",
        }
    };

    // Return the translation based on the current language
    return translations[currentLang][key] || key; // Return the key if translation is missing
}
