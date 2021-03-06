(function() {
  // console.log("js loaded");
  // $(document).ready(function(){
  //    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  //    $('.modal-trigger').modal('#modal1');
  //  });
  //PRELOADER FUNCTION
  // window.addEventListener('load', function(event) {
  //   document.getElementById("#preloader").addClass("remove-from-dom");
  //   document.getElementById("#desktop-site").removeClass("remove-from-dom");
  // });
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
