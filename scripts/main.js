(function() {
  console.log("js loaded");

  // ELEVATOR JS VARIABLES AND FUNCTIONS
  var projects         = document.getElementById("projectsLink");
  var aboutMe          = document.getElementById("aboutMeLink");
  var contact          = document.getElementById("contactLink");
  var projectsAboutMe  = document.getElementById("projectsAboutMe");
  var projectsContact  = document.getElementById("projectsContact");
  var aboutMeProjects  = document.getElementById("aboutMeProjects");
  var aboutMeContact   = document.getElementById("aboutMeContact");
  var contactProjects  = document.getElementById("contactProjects");
  var contactAboutMe   = document.getElementById("contactAboutMe");
  new Elevator({
    element: projects,
    targetElement: document.querySelector("#projects")
    });
  new Elevator({
    element: aboutMe,
    targetElement: document.querySelector("#aboutMe")
    });
  new Elevator({
    element: contact,
    targetElement: document.querySelector("#contact")
    });
  new Elevator({
    element: projectsAboutMe,
    targetElement: document.querySelector("#aboutMe")
    });
  new Elevator({
    element: projectsContact,
    targetElement: document.querySelector("#contact")
    });
  new Elevator({
    element: aboutMeProjects,
    targetElement: document.querySelector("#projects")
    });
  new Elevator({
    element: aboutMeContact,
    targetElement: document.querySelector("#contact")
    });
  new Elevator({
    element: contactProjects,
    targetElement: document.querySelector("#projects")
    });
  new Elevator({
    element: contactAboutMe,
    targetElement: document.querySelector("#aboutMe")
    });
})();
