# Travel Rehab Jobs
This is an app that connects traveling rehab specialists looking for contracts to facilities and companies offering contracts. When someone signs in they can choose employer or employee, and employees choose which occupation they are. The Employers can post new jobs that anyone can see. And the employees see those jobs (next version will have ability to apply).

### Planning
My wife is a traveling physical therapist, and we had this idea for a website/app that would remove the need for a recruiter or recruiting company. This project is the bare bones of that idea. I knew there needed to be different types of users. On the front end, the two types of users have different options, but both types use the same schema on the back end. As a website, I wanted there to be a constant header and footer that didn't change, and have the main body change with every click. The "navbar" triggers different HTML to fill the #main-content div. This makes this SPA feel like a multiple page application.

### Wireframes

![HomePage Wireframe](https://imgur.com/a/FtB2jiu)

![Jobs Page Wireframe](https://imgur.com/a/cADLMRg)

![New Job Wireframe](https://imgur.com/a/yQZLRw9)

### User Stories
* As an user, I want to create my own account.
* As an employer, I want to add a new job.
* As a employer, I want to edit/delete jobs I have posted.
* As a user, I want to update my account info and/or password.
* As a employee, I want to look at jobs relevant to me.

### Technologies used:
* HTML
* CSS 
* Bootstrap 
* JavaScript
* JQuery

### Problems
I didn't have many problems I wasn't able to solve quickly, but one notable problem was how to make a difference between the employer and employee users. I wanted the experience to be different, and only allow employers to post jobs. I accomplished this by checking the user.type, and if it was "employer" then only links with .employer-only would be shown. I also had an issue with connecting event listeners to dynamic HTML. I ended up attaching them to the #main-content div and using the selector parameter in the $().on() method.

### Future
There are several additions I would like to make. First, I want a real way for employees to actually apply. Ideally they could send a cover letter and resume file in an email straight from the website to the employer. I need to research sendGrid to accomplish this. Additionally, I want employees to be able to see the jobs they have applied to, and for the employers to see their jobs postings and all the employees that have applied. I may do this on the back end by adding a key to the schema that is an array which has all the ids of employees that have applied. Then I would filter it on the front end.

#### Links
[Deployed Front End](https://tavvycat.github.io/Travel-Jobs-Client/)

[Repo for Back End](https://github.com/TavvyCat/Travel-Job-API)

[Deployed Back End](https://travel-jobs-api.herokuapp.com/)