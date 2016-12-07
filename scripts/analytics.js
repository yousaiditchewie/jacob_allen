(function() {
  // console.log("Analytics.js Loaded!");

  // Save Google Analytics ID to memory
  // var gaID = "UA-85710672-1";


  //ASSIGN EVENT LISTENERS TO ALL BUTTON INTERACTIONS

  // **DECLARE INTERACTION VARIABLES BY ID
  //INTRO SECTION
  var $mainProjects = $("#projectsLink");
  var $mainAboutMe  = $("#aboutMe");
  var $mainContact  = $("#contactLink");
  var $mainResume   = $("#resumeLink");

  //**ALL SECTION HEADERS**
  //PROJECTS HEADER
  var $projectsAboutMe = $("#projectsAboutMe");
  var $projectsContact = $("#projectsContact");
  var $projectsResume  = $("#projectsResume");

  //ABOUT ME HEADER
  var $aboutMeProjects = $("#aboutMeProjects");
  var $aboutMeContact  = $("#aboutMeContact");
  var $aboutMeResume   = $("#aboutMeResume");

  //CONTACT HEADER
  var $contactProjects = $("#contactProjects");
  var $contactAboutMe  = $("#contactAboutMe");
  var $contactResume   = $("#contactResume");

  // DEFINE FUNCTIONS FOR SENDING EVENTS TO GA
  function projectsTracker() {
    ga("send", {
      "hitType":       "event",
      "eventCategory": "click",
      "eventAction":   "viewProjects",
      "eventLabel":    "viewProjects"
    });
    //console log for testing
    console.log('projects sent');
  };

  function aboutMeTracker() {
    ga("send", {
      "hitType":       "event",
      "eventCategory": "click",
      "eventAction":   "viewAboutMe",
      "eventLabel":    "viewAboutMe"
    });
    console.log("about me sent");
  };

  function contactTracker() {
    ga("send", {
      "hitType":       "event",
      "eventCategory": "click",
      "eventAction":   "viewContact",
      "eventLabel":    "viewContact"
    });
    console.log("contact sent");
  };

  function resumeTracker() {
    ga("send", {
      "hitType":       "event",
      "eventCategory": "click",
      "eventAction":   "viewResume",
      "eventLabel":    "viewResume"
    });
    console.log("resume sent");
  };
  // CALL FUNCTION SENDING EVENTS TO GA
  // **FOR ALL PROJECTS LINKS
  $mainProjects.click(projectsTracker);
  $aboutMeProjects.click(projectsTracker);
  $contactProjects.click(projectsTracker);

  // **FOR ALL ABOUT ME LINKS
  $mainAboutMe.click(aboutMeTracker);
  $projectsAboutMe.click(aboutMeTracker);
  $contactAboutMe.click(aboutMeTracker);

  // **FOR ALL CONTACT LINKS
  $mainContact.click(contactTracker);
  $projectsContact.click(contactTracker);
  $aboutMeContact.click(contactTracker);

  // **FOR ALL RESUME LINKS
  $mainResume.click(resumeTracker);
  $projectsResume.click(resumeTracker);
  $aboutMeResume.click(resumeTracker);
  $contactResume.click(resumeTracker);


})();
