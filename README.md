[![Netlify Status](https://api.netlify.com/api/v1/badges/7129c594-abf1-4942-9bff-456bccfe430e/deploy-status)](https://app.netlify.com/sites/sebastian-javier-guzman/deploys)

# Personal Portfolio Project

This project is built to continue my journey as a Web Developer, practicing and improving me foundations and knowledge of HTML5, CSS3 and Javascript, the core of Client side rendering.

Feel free to improve the code and add any sugestions you think may help raising the bar on what an accesible professional web site should look like.

## HTML5

Make use of all the appropiate semantic elements that relate with the content that we want to display, to improve accessibilty and enrich user's with disabilities experience.

## CSS3

Practice Mobile first approach on all styles to ensure a good visual response no matter which device is accessing the page.
Use of taylored animations on specific places to give a little movement to the site.
The following breakpoints were applied:
```
Mobile:  width < 600px;
Tablet:  width < 900px;
Desktop: width > 900px;
```

## Javascript (ECMAS6)

Pure Javascript Vainilla Scripts built without using frameworks to manipulate Events or DOM content.

## Form Handling

Form functionality: to achieve form submission without setting a server, this projects uses the <a target="_blank" href="https://formsubmit.co/">`Form Submit`</a> API to accomplish it's goal.

As this is a simple and straight forward API to use, the only configuration that may have to do to accomplish the Contact form to work as expected is to replace `FORM_ACTION_URL` with the url where you want the form data to be sent:

```
<form action="FORM_ACTION_URL" method="POST">
```
If you want the user to be redirected to a specific page after submiting the form and validating the through recaptcha, you can replace `DEPLOY_URL` with the destination url you want.

#### Aditional Notes

To see a live demo of this project, you do it here: https://sebastian-javier-guzman.netlify.app/
