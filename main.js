function toggleSection(sectionId) {
    const arr = ["about", "skills","projects"];
    console.log(sectionId)
    for (let i = 0; i < arr.length; i++) {
        var section = document.getElementById(arr[i]);

        if (arr[i] === sectionId) {
            var link = document.getElementById(arr[i]+ "-link");
            console.log(link)
            section.classList.remove('hidden');
            section.classList.add('visible');
            link.classList.add("active");
            link.classList.remove("nav-link");
            
        } else {
            var link = document.getElementById(arr[i]+ "-link");
            console.log(link)
            section.classList.add('hidden');
            section.classList.remove('visible');
            link.classList.remove("active");
            link.classList.add("nav-link");
        }
    }
}



function toggleSkillSection(sectionId) {
    var technical = document.getElementById("technical");
    var soft = document.getElementById("soft");
    var technicalHeading = document.getElementById("technical-heading");
    var softHeading = document.getElementById("soft-heading");

    if (sectionId === "technical") {
        technical.style.display = "flex";
        soft.style.display = "none";
        technicalHeading.classList.add("active");
        softHeading.classList.remove("active");
    } else if (sectionId === "soft") {
        technical.style.display = "none";
        soft.style.display = "flex";
        softHeading.classList.add("active");
        technicalHeading.classList.remove("active");
    }
}



// Show the technical skills section by default
toggleSkillSection('technical');


