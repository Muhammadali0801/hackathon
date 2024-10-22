// Select the editable sections
const displayName = document.getElementById('display-name') as HTMLElement;
const displayEmail = document.getElementById('display-email') as HTMLElement;
const displayPhone = document.getElementById('display-phone') as HTMLElement;
const displayEducation = document.getElementById('display-education') as HTMLElement;
const displaySkills = document.getElementById('display-skills') as HTMLElement;
const displayExperience = document.getElementById('display-experience') as HTMLElement;

// Add contenteditable attribute to make the sections editable
[displayName, displayEmail, displayPhone, displayEducation, displaySkills, displayExperience].forEach(section => {
    section.setAttribute('contenteditable', 'true');
});

// Save changes on blur event (when user clicks outside after editing)
[displayName, displayEmail, displayPhone, displayEducation, displaySkills, displayExperience].forEach(section => {
    section.addEventListener('blur', () => {
        saveContent(section);
    });
});

// Function to save content (and optionally save to localStorage for persistence)
function saveContent(section: HTMLElement): void {
    const updatedContent = section.textContent || '';
    console.log(`Updated content for ${section.id}: ${updatedContent}`);

    // Save to localStorage for persistence after reload
    localStorage.setItem(section.id, updatedContent);
}

// Load saved content from localStorage (on page load)
window.addEventListener('DOMContentLoaded', () => {
    [displayName, displayEmail, displayPhone, displayEducation, displaySkills, displayExperience].forEach(section => {
        const savedContent = localStorage.getItem(section.id);
        if (savedContent) {
            section.textContent = savedContent;
        }
    });
});
