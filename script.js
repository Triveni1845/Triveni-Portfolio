// ================================
// NAVBAR SCROLL EFFECT
// ================================

window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#111";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
    } else {
        navbar.style.background = "#080808";
        navbar.style.boxShadow = "none";
    }
});


// ================================
// SMOOTH SCROLL (optional improvement)
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});

document.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", function () {
        this.classList.toggle("flipped");
    });
});
// ================= MODAL DATA =================

const projectData = {
    project1: `
        <h3>Skin Disease Prediction System</h3>
        <p><b>Technologies:</b> PHP, HTML, CSS, MySQL</p>

        <p>• Web-based system that predicts skin diseases based on symptoms.</p>
        <p>• Provides disease suggestions for awareness and early consultation.</p>
        <p>• Designed user-friendly UI using HTML & CSS.</p>
    `,

    project2: `
        <h3>Skill Gap Analyzer</h3>
        <p><b>Technologies:</b> Python, Flask, MongoDB, HTML, CSS, JS</p>

        <p>• Compares resume with job descriptions.</p>
        <p>• Extracts missing skills using AI logic.</p>
        <p>• Stores results in MongoDB database.</p>
        <p>• Sends email notifications with analysis results.</p>
    `
,
project3: `
    <h3>Personal Portfolio Website</h3>

    <p><b>Technologies:</b> HTML, CSS, JavaScript, EmailJS, AOS</p>

    <p>• Designed and developed a responsive personal portfolio website.</p>

    <p>• Showcases education, skills, projects, internship, and certificates.</p>

    <p>• Integrated EmailJS contact form for direct communication.</p>

    <p>• Added certificate popup viewer, animations, and mobile responsiveness.</p>

    <p>• Includes GitHub, LinkedIn, and downloadable resume links.</p>
`,
};

// ================= OPEN MODAL =================

function openModal(projectKey){
    document.getElementById("modal-body").innerHTML = projectData[projectKey];
    document.getElementById("modal").style.display = "flex";
}

// ================= CLOSE MODAL =================

function closeModal(){
    document.getElementById("modal").style.display = "none";
}

// close when clicking outside box
window.onclick = function(event){
    let modal = document.getElementById("modal");
    if(event.target === modal){
        modal.style.display = "none";
    }
}
window.addEventListener("load", () => {
    AOS.init({
        duration: 1500,
        once: true
    });
});
function toggleMenu(){
    document.querySelector(".nav-links").classList.toggle("show");
}
(function () {
    emailjs.init("3tkjGp7mhIC1QH0KV"); // replace this
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_ppjusc3",   // replace
        "template_5rqyhsp",  // replace
        this
    ).then(() => {
        alert("Message sent successfully!");
        this.reset();
    }).catch((error) => {
        alert("Failed to send message!");
        console.log(error);
    });
});
function openCertificate(imageSrc){
    document.getElementById("certificateModal").style.display = "flex";
    document.getElementById("certificateImage").src = imageSrc;
}

function closeCertificate(){
    document.getElementById("certificateModal").style.display = "none";
}