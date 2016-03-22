/*
*This file contains JavaScript code to dynamically build the resume. 
*Arthur Vargas
*/

/*variables to contain formatted HTML strings*/
var formattedheaderName;
var formattedheaderRole;
var formattedcontactGeneric;

var formattedMobile;
var formattedEmail;
var formattedTwitter;
var formattedGithub;
var formattedBlog;
var formattedLocation;

var formattedbioPic;
var formattedwelcomeMsg;
var formattedskillsStart;
var formattedskills;

var formattedschoolName;
var formattedschoolDegree;
var formattedschoolDates;
var formattedschoolLocation;
var formattedschoolMajor;

var formattedonlineTitle;
var formattedonlineSchool;
var formattedonlineDate;
var formattedURL;

var formattedEmployer;
var formattedTitle;
var formattedLocation;
var formattedDates;
var formattedDescription;

var formattedprojectTitle;
var formattedprojectDates;
var formattedprojectDescription;
var formattedprojectImage;


/*
 * jQuery.getJSON fetches/parses JSON data in resumeDetail.json and passes the resulting object
 * to the callback function 
 */
$.getJSON('resumeDetail.json', function(data) {
	
	/*
	 * jQuery.each function iterates through object properties and arrays contents
	 * in the data object and calls the respective display functions 
	 */
	$(data).each(function(index,value) {
		
		/*
		 * bio.display function iterates through the bio object in 
		 * resumeDetail.json and appends the information to index.html 
		 */
		data.bio.display = function() {
			"use strict";
			
			//assign formatted HTML to formattedVariable
			formattedheaderName = HTMLheaderName.replace("%data%",data.bio.name);
			formattedheaderRole = HTMLheaderRole.replace("%data%",data.bio.role);
			formattedcontactGeneric = HTMLcontactGeneric.replace("%data%",data.bio.contacts.index);
			
			formattedbioPic = HTMLbioPic.replace("%data%",data.bio.biopic);
			formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",data.bio.welcomeMessage);
			formattedskillsStart = HTMLskillsStart.replace("%data%",data.bio.skills.key);
			
			//insert formatted HTML into index.html
			$("#header").prepend(formattedheaderName);
			$("#header").prepend(formattedheaderRole);
			$("#header").append(formattedbioPic, formattedwelcomeMsg);
			$("#topContacts").append(HTMLskillsStart);
			
			var i = 0;
			while(data.bio.skills.length >= i) {
				formattedskills = HTMLskills.replace("%data%",data.bio.skills[i].toString());
				$("#topContacts").append(formattedskills);
				$("#footerContacts").append(formattedskills);	
				i++;
			}
			
			
			/* The for/in loop iterates through the contacts object and inserts the data
			 * into the correct HTML string.  The formatted string is assigned to formattedVariable
			 */
			for(var info in data.bio.contacts) {
				if(data.bio.contacts[info].mobile)
					formattedMobile = HTMLmobile.replace("%data%",data.bio.contacts[info].mobile);
				else if (data.bio.contacts[info].email)
					formattedEmail = HTMLemail.replace("%data%",data.bio.contacts[info].email);
				else if(data.bio.contacts[info].twitter)
					formattedTwitter = HTMLtwitter.replace("%data%",data.bio.contacts[info].twitter);
				else if(data.bio.contacts[info].github)
					formattedGithub = HTMLgithub.replace("%data%",data.bio.contacts[info].github);
				else if(data.bio.contacts[info].blog)
					formattedBlog = HTMLblog.replace("%data%",data.bio.contacts[info].blog);
				else if(data.bio.contacts[info].location)
					formattedLocation = HTMLlocation.replace("%data%",data.bio.contacts[info].location);				
			}
			
			/*append formatted HTML to index*/
			$("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
			$("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);	
		};
		
		/*
		 * The education.display function iterates through the education objects in 
		 * resumeDetail.json and appends the information to index.html 
		 */
		data.education.display = function() {
			"use strict";
			for(var i = 0; i <= data.education.schools.length; i++) {
				$("#education").append(HTMLschoolStart);
				for(var schoolDetail in data.education.schools[i]) {
					formattedschoolName = HTMLschoolName.replace("%data%", data.education.schools[schoolDetail].name);
					formattedschoolDegree = HTMLschoolDegree.replace("%data%", data.education.schools[schoolDetail].degree);
					formattedschoolDates = HTMLschoolDates.replace("%data%", data.education.schools[schoolDetail].dates);
					formattedschoolLocation = HTMLschoolLocation.replace("%data%", data.education.schools[schoolDetail].location);
					formattedschoolMajor = HTMLschoolMajor.replace("%data%", data.education.schools[schoolDetail].majors);
					$(".education-entry:last").append(formattedschoolName + formattedschoolDegree, formattedschoolDates, 
						formattedschoolLocation, formattedschoolMajor);
				}
			}
			for(var i = 0; i <= data.education.onlineCourses[i]; i++) {
				$("#education").append(HTMLonlineClasses);
				for (var onlineCourse in data.education.onlineCourses[i]) {
					$("#education").append(HTMLschoolStart);
					formattedonlineTitle = HTMLonlineTitle.replace("%data%", data.education.onlineCourses[onlineCourse].title);
					formattedonlineSchool = HTMLonlineSchool.replace("%data%", data.education.onlineCourses[onlineCourse].school);
					formattedonlineDate = HTMLonlineDates.replace("%data%", data.education.onlineCourses[onlineCourse].date);
					formattedURL = HTMLonlineURL.replace("%data%", data.education.onlineCourses[onlineCourse].url);
					$(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool, formattedonlineDate, formattedURL);
				}
			}
		};
		
		/*
		 * The work.display function iterates through the work objects in 
		 * resumeDetail.json and appends the information to index.html 
		 */
		data.work.display = function() {
			"use strict";
			for(var i = 0; i <= data.work.jobs[i]) {
				$("#workExperience").append(HTMLworkStart);
				for(var job in data.work.jobs[job]) {
					$("#work-foldable-content").append(HTMLworkStart);
					formattedEmployer = HTMLworkEmployer.replace("%data%",data.work.jobs[job].employer);
					formattedTitle = HTMLworkTitle.replace("%data%",data.work.jobs[job].title);
					formattedLocation = HTMLworkLocation.replace("%data%",data.work.jobs[job].location);
					formattedDates = HTMLworkDates.replace("%data%",data.work.jobs[job].dates);
					formattedDescription = HTMLworkDescription.replace("%data%",data.work.jobs[job].description);
					$(".work-entry:last").append(formattedEmployer,formattedTitle,formattedLocation,formattedDates,formattedDescription);
				}
			}
		};
		
		/*
		 * The projects.display function iterates through the projects array in 
		 * resumeDetail.json and appends the information to index.html 
		 */
		data.projects.display = function() {
			"use strict";
			for(var i = 0; i <= data.projects[i]; i++) {
				$("#projects").append(HTMLprojectStart);
				formattedprojectTitle = HTMLprojectTitle.replace("%data%", data.projects[i].title);
				formattedprojectDates = HTMLprojectDates.replace("%data%", data.projects[i].dates);
				formattedprojectDescription = HTMLprojectDescription.replace("%data%", data.projects[i].description);
				$(".project-entry:last").append(formattedprojectTitle, formattedprojectDates, formattedprojectDescription);
				for(var j = 0; j <= data.projects[i].images[j].length; j++) {
					formattedprojectImage = HTMLprojectImage.replace("%data%", data.projects[i].images[j]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		};
		
		data.work.display();
		data.projects.display();
		data.education.display();
		data.bio.display();
		$("#main").append(internationalizeButton);
		$("#mapDiv").append(googleMap);
		
	});

	function inName(name) {
		console.log(name);
		var newName = name;
		newName = newName[0].toUpperCase() + newName.slice(1, newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();
		return newName;
	}
	
});

	 
	 		