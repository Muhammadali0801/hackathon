// Get references to the buttons and sections
var toggleSkillsBtn = document.getElementById('toggle-skills-btn');
var skillsSection = document.getElementById('skills');
var toggleWorkBtn = document.getElementById('toggle-work-btn');
var workExperienceSection = document.getElementById('work-experience');
// Function to toggle visibility of the Skills section
var toggleSkills = function () {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
        toggleSkillsBtn.textContent = 'Hide Skills';
    }
    else {
        skillsSection.style.display = 'none';
        toggleSkillsBtn.textContent = 'Show Skills';
    }
};
// Function to toggle visibility of the Work Experience section
var toggleWorkExperience = function () {
    if (workExperienceSection.style.display === 'none' || workExperienceSection.style.display === '') {
        workExperienceSection.style.display = 'block';
        toggleWorkBtn.textContent = 'Hide Work Experience';
    }
    else {
        workExperienceSection.style.display = 'none';
        toggleWorkBtn.textContent = 'Show Work Experience';
    }
};
// Add event listeners to the buttons
toggleSkillsBtn.addEventListener('click', toggleSkills);
toggleWorkBtn.addEventListener('click', toggleWorkExperience);
