document.addEventListener('DOMContentLoaded', function() {
    const buttonFindOutMore = document.getElementById('find_out_more');
    const buttonProjects = document.getElementById('projects');
    const buttonUpdates = document.getElementById('updates');
    const navbar = document.getElementById('navbar');
    const projectsLayout = document.getElementById('projects_layout');
    const timeline = document.getElementById('timeline');
    const home = document.getElementById('home');
    const body_top = document.getElementById('body_top');
    
    // Function to navigate to projects layout without scrolling
    function goToProjectsLayout() {
        if (projectsLayout) {
            projectsLayout.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        navbar.classList.remove('sticky');
         // Ensure navbar is not fixed after navigation
    }

    // Function to navigate to timeline without scrolling
    function goToTimeline() {
        if (timeline) {
            timeline.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        navbar.classList.remove('sticky'); // Ensure navbar is not fixed after navigation
    }
    function goToTop(){
        if(body_top){
            body_top.scrollIntoView({behavior: "smooth", block: "start"})
        }
    }
    home.addEventListener('click', () => {
        goToTop();
    });

    // Event listener for 'Find Out More' button
    buttonFindOutMore.addEventListener('click', function() {
        goToProjectsLayout();
    });

    // Event listener for 'Projects' button
    buttonProjects.addEventListener('click', function() {
        goToProjectsLayout();
    });

    // Event listener for 'Updates' button
    buttonUpdates.addEventListener('click', function() {
        goToTimeline();
    });

    // Event listener for window scroll to manage navbar fixed class
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.classList.remove('sticky');
        } else {
            // Scrolling up
            navbar.classList.add('sticky');
        }

        lastScrollTop = scrollTop; // Update last scroll position
    });
});
