Assignment: Build your own website!
In this exercise you need to create your own web page. Use everything what you've learnt so far.

There are some requirements you should fulfill:

The page should contain at least 3 subpages.
Its html should be W3C valid.
It should contain properly used HTML5 elements
It should contain a navigation menu
It should contain a contact page with a form to send email to the author (you don't need to create server side logic, only the front end)
Contact page should have validation written in JavaScript using regular expressions
Optional: It should contain a welcome screening which displays an animation
DO NOT use any CSS frameworks (e.g. Bootstrap)
DO NOT use any JavaScript frameworks (e.g. jQuery, React)
Remember to use sources (images, sounds etc.) only with proper usage rights, labeled 'for reuse', and give attribution to the original author. You can find many websites with free photos and graphics to commercial use, e.g. pixabay
Step by step:
Setup repository
Create a new GitHub repository for your site with README.md file
Add .gitignore file if needed
Clone the repository to your machine
Create your index page
Before you start coding sketch up how your web pages should look like. You can do it on paper or with any wire frame application. This is your choice. The purpose is to visualize different sections and parts that will be in your page and how should they be arranged.
Create a new html file in your repository root directory named: index.html
Set the doctype to HTML5
Add <head> part and setup basic meta data and the <title> of the page
Add part
Add <header> to the body which will contain navigation menu. First menu item should link to index.
Add a <div> element to the body which has a class named: content. This will contain the part of the pages which differs from each other.
Add an image of you and a small introduction next to it about yourself.
Add some content to it (e.g. the description of the exercise) to see where will it be. You can fill it with arbitrary content. Take care to use the different html tags properly so it can express your intent.
Add <footer> and add some content to it. Take example from other sites.
After you finish commit your changes into your repository with a descriptive comment.
Make it nice
Create a new folder named css in your repository's root directory
Create a style.css file in that newly created folder. This will contain all your rules about your site's appearance.
Add a reference to it in your index.html file's head part.
Define basic rules for the body element. (Default background, font, alignment...) These rules are inherited in the child elements (every element which located inside the body).
Write css rules to make all the site like your sketch.
Create a contact page
Copy your index.html file and give it the name: contact.html
Add a link to your navigation menu which redirects to this html page
Delete the inner content of div.content element
Create a form inside it
Add two <input> field and a <textarea> field to the form and proper <label>s to them. The first input field is the name which has a placeholder text: Enter your name The second input field is the email with placeholder text: Give your email The textarea will contain the message so give some handful instruction in the placeholder text. Do not forget add named all your form element.
Add a submit button wich should has the text SEND on it. It should be disabled by default.
Open your style.css file and at the bottom of it and write some rules which makes it nice. (e.g. horizontally centered and the fields has the same width). You can see an example on the https://codecool.pl/kontakt/ web site. Maybe it is familiar to you. ;)
Commit your changes into your repository.
Add JavaScript form validation to contact page
Write code that will enable submit button if all form fields are not empty. It should get back to being disabled if content of any field will be empty again.
Write JavaScript code using regular expressions that will check if name fulfills following restrictions:
it is not empty and does not contain only whitespace characters
it contains only letters and space
each word in it starts with capital letters
it is not longer than
Write code using regular expressions that will check if email fulfills following restrictions:
it is not empty and does not contain only whitespace characters
it is a valid email address
Write code that will fire validation methods for each field when the submit button is pressed. It should not cause page reloading.
If there are validation errors after clicking SEND, display them on the form. There are many ways to do that, you can find some example designs on that page.
If there are no errors after clicking SEND, the page should display an alert with information that message has been sent. After that, each field of form should be cleared.
After you finish commit your changes into your repository with a descriptive comment. If you feel that it would be good to have separate commits for each step, do it.
Create your custom pages
Create your new html file(s) based on the index.html
Add the proper link to the navigation menu on every other html files.
Fill it with custom content
Extend your stylesheet if needed
Do not forget to commit and push your changes into your repository!
Validate your pages
Go to https://validator.w3.org/
Validate your sites
Fix the issues
While checking your implementation, we will give you feedback on conforming requirements and on UX/UI of your solution.

Hosting your page
If you want, you can try out hosting your page online using GitHub Pages. It's used by many developers to host different type of static pages. You can find many homepages of open source projects hosted as a page on GitHub Pages. Even our mentors use it, for hosting JavaScript clone of Space Invaders for example.
