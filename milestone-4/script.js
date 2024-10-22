// Select the editable sections
var displayName = document.getElementById('display-name');
var displayEmail = document.getElementById('display-email');
var displayPhone = document.getElementById('display-phone');
var displayEducation = document.getElementById('display-education');
var displaySkills = document.getElementById('display-skills');
var displayExperience = document.getElementById('display-experience');
// Add contenteditable attribute to make the sections editable
[displayName, displayEmail, displayPhone, displayEducation, displaySkills, displayExperience].forEach(function (section) {
    section.setAttribute('contenteditable', 'true');
});
// Save changes on blur event (when user clicks outside after editing)
[displayName, displayEmail, displayPhone, displayEducation, displaySkills, displayExperience].forEach(function (section) {
    section.addEventListener('blur', function () {
        saveContent(section);
    });
});
// Function to save content (and optionally save to localStorage for persistence)
function saveContent(section) {
    var updatedContent = section.textContent || '';
    console.log("Updated content for ".concat(section.id, ": ").concat(updatedContent));
    // Save to localStorage for persistence after reload
    localStorage.setItem(section.id, updatedContent);
}
// Load saved content from localStorage (on page load)
window.addEventListener('DOMContentLoaded', function () {
    [displayName, displayEmail, displayPhone, displayEducation, displaySkills, displayExperience].forEach(function (section) {
        var savedContent = localStorage.getItem(section.id);
        if (savedContent) {
            section.textContent = savedContent;
        }
    });
});
