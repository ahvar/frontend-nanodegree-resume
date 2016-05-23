# [Resume](http://ahvar.github.io/resume/index.html)

Details my professional and educational credentials.  

## Usage

Click the "Resume" header to open in a web browser.  Alternatively, download and extract all files from frontend-nanodegree-resume repository and open in a browser by double-clicking the index.html file.

## Organization

The resume contains the following files:

* **index.html**: The main HTML document. Contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.
* **js/helper.js**: Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. More on helper.js further down.
* **js/resumeBuilder.js**: This file is empty. You should write your code here.
* **js/jQuery.js**: The jQuery library.
* **css/style.css**: Contains all of the CSS needed to style the page.
* **README.md**: 
* and some images in the images directory.
Each string has a title that describes how it should be used. For instance, `HTMLworkStart` should be the first `<div>` in the Work section of the resume. `HTMLschoolLocation` contains a `%data%` placeholder which should be replaced with the location of one of your schools.

#### Sections

The resume has four distinct sections: work, education, projects and a header with biographical information. Resumebuilder.js contains four JSON objects, each one representing a different resume section. For example:

** `bio` contains:
        
            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string 
                  github: string
                  twitter: string 
                  location: string
            welcomeMessage: string 
            skills: array of strings
            biopic: url
            display: function taking no parameters

** `education` contains:
      
            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: integer (graduation date)
                 url: string
            onlineCourses: array with
                 title: string
                 school: string
                 date: integer (date finished)
                 url: string
            display: function taking no parameters

** `work` contains
          
            jobs: array of objects with
                 employer: string 
                 title: string 
                 location: string 
                 dates: string (works with a hyphen between them)
                 description: string 
            display: function taking no parameters

** `projects` contains:

            projects: array of objects with
                  title: string 
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters

* Resumebuilder.js iterates through each JSON object and appends its information to index.html in the correct section.

 
* The resume includes an interactive map that is appended to  `<div id=”mapDiv”>` using the Google script element: `<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places"></script>` . 

* All of the code for adding elements to the resume is contained within functions and all of those functions are encapsulated within the same objects containing resume data. 
* The resume will `console.log()` information about click locations. 

## LICENSE

This resume was developed as part of Udacity's Frontend Nanodegree program.  

## AUTHORS

Udacity Inc.  and Arthur Vargas
