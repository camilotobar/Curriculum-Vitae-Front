function overWireframes(e) {
    Wireframes.innerHTML = 
    '<p><b>Skill Level</b><br>6/10</p>';
    Wireframes.style.backgroundColor = "rgb(0, 134, 105)";
    Wireframes.style.color = "white";
}
function outWireframes(e) {
    Wireframes.innerHTML = 
    '<p><b>Wireframes and Prototypes</b><br>AdobeXD, Figma, MarvelApp</p>';
    Wireframes.style.backgroundColor = "rgb(235, 235, 235)";
    Wireframes.style.color = "black";
}

function overPlatforms(e) {
    Platforms.innerHTML = 
    '<p><b>Skill Level</b><br>8/10</p>';
    Platforms.style.backgroundColor = "rgb(0, 134, 105)";
    Platforms.style.color = "white";
}
function outPlatforms(e) {
    Platforms.innerHTML = 
    '<p><b>Platforms</b><br>Wordpress</p>';
    Platforms.style.backgroundColor = "rgb(235, 235, 235)";
    Platforms.style.color = "black";
}

function overVector(e) {
    Vector.innerHTML = 
    '<p><b>Skill Level</b><br>9/10</p>';
    Vector.style.backgroundColor = "rgb(0, 134, 105)";
    Vector.style.color = "white";
}
function outVector(e) {
    Vector.innerHTML = 
    '<p><b>Vector (Icons)</b><br>Illustrator, Figma</p>';
    Vector.style.backgroundColor = "rgb(235, 235, 235)";
    Vector.style.color = "black";
}

function overBack(e) {
    Back.innerHTML = 
    '<p><b>Skill Level</b><br>9/10</p>';
    Back.style.backgroundColor = "rgb(0, 134, 105)";
    Back.style.color = "white";
}
function outBack(e) {
    Back.innerHTML = 
    '<p><b>Back-end</b><br> Spring (Java), ASP.Net (C#), DJango (Python)</p>';
    Back.style.backgroundColor = "rgb(235, 235, 235)";
    Back.style.color = "black";
}

function overFront(e) {
    Front.innerHTML = 
    '<p><b>Skill Level</b><br>6/10</p>';
    Front.style.backgroundColor = "rgb(0, 134, 105)";
    Front.style.color = "white";
}
function outFront(e) {
    Front.innerHTML = 
    '<p><b>Front-end</b><br> HTML, CSS, VueJS/p>';
    Front.style.backgroundColor = "rgb(235, 235, 235)";
    Front.style.color = "black";
}

function overFrameworks(e) {
    Frameworks.innerHTML = 
    '<p><b>Skill Level</b><br>6/10</p>';
    Frameworks.style.backgroundColor = "rgb(0, 134, 105)";
    Frameworks.style.color = "white";
}
function outFrameworks(e) {
    Frameworks.innerHTML = 
    '<p> <b>Frameworks</b><br> Bootstrap, Material Design</p>';
    Frameworks.style.backgroundColor = "rgb(235, 235, 235)";
    Frameworks.style.color = "black";
}

var Wireframes = document.getElementById('Wireframes');
Wireframes.addEventListener('mouseover', overWireframes);
Wireframes.addEventListener('mouseout', outWireframes);

var Platforms = document.getElementById('Platforms');
Platforms.addEventListener('mouseover', overPlatforms);
Platforms.addEventListener('mouseout', outPlatforms);

var Vector = document.getElementById('Vector');
Vector.addEventListener('mouseover', overVector);
Vector.addEventListener('mouseout', outVector);

var Frameworks = document.getElementById('Frameworks');
Frameworks.addEventListener('mouseover', overFrameworks);
Frameworks.addEventListener('mouseout', outFrameworks);

var Back = document.getElementById('Back');
Back.addEventListener('mouseover', overBack);
Back.addEventListener('mouseout', outBack);

var Front = document.getElementById('Front');
Front.addEventListener('mouseover', overFront);
Front.addEventListener('mouseout', outFront);