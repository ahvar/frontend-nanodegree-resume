/*
*This file contains JavaScript code to dynamically build the resume. 
*Arthur Vargas
*/

var	bio = {

		"name": "Arthur Vargas",
		"role": "Developer",
		"contacts":

		{

			"mobile": "336-416-7584",
			"email": "ahvargas92@gmail.com",
			"github": "https://github.com/ahvar",
			"twitter": "@ahvargas",
			"location": "Raleigh, NC"

		},

		"welcomeMessage": "Welcome to my online resume!",
		"skills": ["HTML", "CSS", "JavaScript", "Java"],
		"biopic": "http://www.dsicomedytheater.com/pix/people/Arthur_Vargas.jpg"
};

var education = {

		"schools": [{
			"name": "North Carolina State University",
			"location": "Raleigh, NC",
			"degree": "BS & BA",
			"majors": ["English", "Biology"],
			"dates": 2006,
			"url": "www.ncsu.edu"
		}],
		"onlineCourses": [{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"date": 2016,
			"url": "www.udacity.com"
		}, {
			"title": "How to Use Git and Github",
			"school": "Udacity",
			"date": 2015,
			"url": "www.udacity.com"
		}, {
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"date": 2015,
			"url": "www.udacity.com"
		}]
};

var	work = {
		"jobs": [{
			"employer": "Reichhold Inc.",
			"title": "Sales Trainee",
			"location": "Durham, NC",
			"dates": "07/2007 - 10/2008",
			"description": "A global supplier to the Composite & Coating Industry."
		}, {
			"employer": "Polyzen Inc.",
			"title": "Inside Sales Representative",
			"location": "Apex, NC",
			"dates": "05/2009 - 08/2014",
			"description": "A contract manufacturer of disposable medical devices."
		}, {
			"employer": "Robling Medical Inc.",
			"title": "Inside Sales Representative",
			"location": "Apex, NC",
			"dates": "02/2015 - 09/2015",
			"description": "A contract manufacturer of medical products."
		}]
};
var projects = [
                
                {
                	"title": "Portfolio Website",
                	"dates": "2016",
                	"description": "A portfolio of development work",
                	"images": ["images/Project_photo1.jpg"]
                }
                
              ];

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
 * bio.display function iterates through the bio object in 
 * resumeDetail.json and appends the information to index.html 
 */
bio.display = function() {
	"use strict";
	
	//assign formatted HTML to formattedVariable
	formattedheaderName = HTMLheaderName.replace("%data%",bio.name);
	formattedheaderRole = HTMLheaderRole.replace("%data%",bio.role);
	formattedcontactGeneric = HTMLcontactGeneric.replace("%data%",bio.contacts.index);
	
	formattedbioPic = HTMLbioPic.replace("%data%",bio.biopic);
	formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	formattedskillsStart = HTMLskillsStart.replace("%data%",bio.skills.key);
	
	//insert formatted HTML into index.html
	$("#header").prepend(formattedheaderRole);
	$("#header").prepend(formattedheaderName);
	$("#header").append(formattedbioPic, formattedwelcomeMsg);
	$("#header").append(HTMLskillsStart);
	
	var i = 0;
	while(i < bio.skills.length) {
		formattedskills = HTMLskills.replace("%data%",bio.skills[i].toString());
		$("#header").append(formattedskills);
		$("#footerContacts").append(formattedskills);	
		i++;
	}
	
	
	/* The for/each loop iterates through the contacts object and inserts the data
	 * into the correct HTML string.  The formatted string is assigned to formattedVariable
	 */
	$.each(bio.contacts,function(index,value) {
			formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
			formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
			formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
			formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
			formattedBlog = HTMLblog.replace("%data%",bio.contacts.blog);
			formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);				
	});
	
	/*append formatted HTML to index*/
	$("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
	$("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);	
};


/*
 * The education.display function iterates through the education objects in 
 * resumeDetail.json and appends the information to index.html 
 */
education.display = function() {
	"use strict";
	$("#education").append(HTMLschoolStart);
	for(var i = 0; i < education.schools.length; i++) {
		formattedschoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
		formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$(".education-entry:last").append(formattedschoolName + formattedschoolDegree,formattedschoolDates,
				formattedschoolLocation);
		for(var j = 0; j < education.schools[i].majors.length; j++) {
			formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
			$(".education-entry:last").append(formattedschoolMajor);
		}
	}
	$("#education").append(HTMLonlineClasses);
	for(var i = 0; i < education.onlineCourses.length; i++) {
		$("#education").append(HTMLschoolStart);
		formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
		formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
		formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
		$(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool, formattedonlineDate, formattedURL);	
	}
};

/*
 * The work.display function iterates through the work objects in 
 * resumeDetail.json and appends the information to index.html 
 */
work.display = function() {
	"use strict";
	for(var i = 0; i < work.jobs.length; i++) {
		$("#workExperience").append(HTMLworkStart);
		formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
		formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
		formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
		formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
		formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
		$(".work-entry:last").append(formattedEmployer,formattedTitle,formattedLocation,formattedDates,formattedDescription);
	}
};

/*
 * The projects.display function iterates through the projects array in 
 * resumeDetail.json and appends the information to index.html 
 */
projects.display = function() {
	"use strict";
	for(var i = 0; i < projects.length; i++) {
		$("#projects").append(HTMLprojectStart);
		formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects[i].title);
		formattedprojectDates = HTMLprojectDates.replace("%data%", projects[i].dates);
		formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects[i].description);
		$(".project-entry:last").append(formattedprojectTitle, formattedprojectDates, formattedprojectDescription);
		for(var j = 0; j < projects[i].images.length; j++) {
			formattedprojectImage = HTMLprojectImage.replace("%data%", projects[i].images[j]);
			$(".project-entry:last").append(formattedprojectImage);
		}
	}
};
	
work.display();
projects.display();
education.display();
bio.display();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

function inName(name) {
		console.log(name);
		var newName = name;
		newName = newName[0].toUpperCase() + newName.slice(1, newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();
		return newName;
}
	


	 
	 		