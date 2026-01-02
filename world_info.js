


window.onload = function() {
    showSection('landing');
};


function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.section-content');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    var sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
}

