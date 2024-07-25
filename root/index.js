document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('find_out_more');

    button.addEventListener('click', function() {
        const projects = document.getElementById('projects_layout');
        if(projects){
            projects.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('projects');

    button.addEventListener('click', function() {
        const projects = document.getElementById('projects_layout');
        if(projects){
            projects.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('updates');

    button.addEventListener('click', function() {
        const projects = document.getElementById('timeline');
        if(projects){
            projects.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});