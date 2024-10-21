var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    // Get values from form inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // Update the resume display
    document.getElementById('personal-info').innerHTML = "<h3>".concat(name, "</h3><p>Email: ").concat(email, "</p><p>Phone: ").concat(phone, "</p>");
    document.getElementById('education-info').innerHTML = "<h3>Education</h3><p>".concat(education, "</p>");
    document.getElementById('skills-info').innerHTML = "<h3>Skills</h3><p>".concat(skills, "</p>");
    document.getElementById('experience-info').innerHTML = "<h3>Work Experience</h3><p>".concat(experience, "</p>");
});
