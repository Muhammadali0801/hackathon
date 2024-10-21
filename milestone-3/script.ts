document.getElementById('resume-form')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    
    // Get values from form inputs
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    // Update the resume display
    document.getElementById('personal-info')!.innerHTML = `<h3>${name}</h3><p>Email: ${email}</p><p>Phone: ${phone}</p>`;
    document.getElementById('education-info')!.innerHTML = `<h3>Education</h3><p>${education}</p>`;
    document.getElementById('skills-info')!.innerHTML = `<h3>Skills</h3><p>${skills}</p>`;
    document.getElementById('experience-info')!.innerHTML = `<h3>Work Experience</h3><p>${experience}</p>`;
});
