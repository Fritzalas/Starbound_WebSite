function setActive(link) {
    // Remove 'active' class from all links
    const links = document.querySelectorAll('.nav-links li a');
    // Log the clicked link to the console
    console.log('Clicked link:', link.textContent);
    links.forEach(function (item) {
        item.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    link.classList.add('active');
}