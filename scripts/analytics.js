(function() {
  // console.log("Analytics.js Loaded!");

  // Save Google Analytics ID to memory
  var gaID = "UA-85710672-1";


  // assign event listeners to all button interactions

  //INTRO SECTION
  var $projects    = $("#projectsLink");
  var $aboutMeLink = $("#aboutMe");
  var $contactLink = $("#contactLink");
  var $resumeLink  = $("#resumeLink");

  // // write a function that sends tracking data to GA
  // function projectsTracker() {
  //   ga("projects.send", "pageview");
  //   //console log for testing
  //   console.log('projets sent');
  // };

  // call the function that sends tracking data to GA
  $projects.click(projectsTracker);
})();
