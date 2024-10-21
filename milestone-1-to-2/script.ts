// Get references to the buttons and sections
const toggleSkillsBtn = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

const toggleWorkBtn = document.getElementById('toggle-work-btn') as HTMLButtonElement;
const workExperienceSection = document.getElementById('work-experience') as HTMLElement;

// Function to toggle visibility of the Skills section
const toggleSkills = (): void => {
  if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
    skillsSection.style.display = 'block';
    toggleSkillsBtn.textContent = 'Hide Skills';
  } else {
    skillsSection.style.display = 'none';
    toggleSkillsBtn.textContent = 'Show Skills';
  }
};

// Function to toggle visibility of the Work Experience section
const toggleWorkExperience = (): void => {
  if (workExperienceSection.style.display === 'none' || workExperienceSection.style.display === '') {
    workExperienceSection.style.display = 'block';
    toggleWorkBtn.textContent = 'Hide Work Experience';
  } else {
    workExperienceSection.style.display = 'none';
    toggleWorkBtn.textContent = 'Show Work Experience';
  }
};

// Add event listeners to the buttons
toggleSkillsBtn.addEventListener('click', toggleSkills);
toggleWorkBtn.addEventListener('click', toggleWorkExperience);
