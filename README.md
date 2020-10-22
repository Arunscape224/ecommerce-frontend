# Full Stack Ecommerce Web App

The frontend built for the Surface Group E-Commerce Website.

![screenshot](https://i.imgur.com/iAizmMc.png)

## Installation
1) clone the backend and run that project.
2) clone this repo
3) Install the dependencies using NPM or Yarn

```bash
yarn
```

## Run In Development Mode
```bash
yarn run dev
```


## Technologies Used (not all listed, reference package.json):

	* React + Redux Hooks (framework + state management)

	* Reactstrap/Bootstrap + SCSS (styling library + CSS pre-processing) 

	* Axios (HTTP request library, some requests are done using the built in Fetch api)

	* React Rating (allows products to have ratings displayed through 'star' svg icons. Calculating avg rating and displaying it in the product details, as well as the review form utilize this package.)

    * Email.js (easy contact form handling)

    * moment (DATE object formatting)

    * braintree-web-drop-in-react (braintree clientside portal)



## Various Features / Pages 
 *note: some pages may be left out, and there may be more to come!

### Dark Mode 🌙 / Light Mode ☀️

Toggling the icon located in the footer triggers a redux action that toggles a theme object and stores it in localStorage to persist the theme while navigating through the website. Initially, the theme is using the init state from redux, but once localStorage has been set, the theme values are being used from the localStorage 'theme' object.


![screenshot](https://i.imgur.com/PSCCp1D.png)

### Contact Form 

At the bottom of the home page, you will find a simple contact form. To avoid complicating the contact form, I've opted out of writing server side code or using a package like node-mailer with a simple solution: Email JS. On submit, the form will send off the request, clear the form fields, and render a friendly alert that your submission has been received.

![screenshot](https://i.imgur.com/PSCCp1D.png)

### Product Page

When you click into a product, you will be taken to that products page where all the details are laid out in a responsive, readable format. I used react-magnify to magnify the image on hover, as well as created a calculator modal to populate the input field with the amount of boxes required depending on the square feet needing to be covered. 


![screenshot](https://i.imgur.com/fxQZ95h.png)

At the bottom is a review form that renders for authenticated users. The average rating is calculated and displayed at the top of the page. 

![screenshot](https://i.imgur.com/xxttMIF.png)



### Cart page

The AddToCart button located on the product page adds that item to the cart, and redirects you to the cart/checkout page. Authenticated users will see a Braintree portal that allows you to checkout if there are items in the cart. The cartItems array is created in localStorage, allowing it to persist on page reload. Quantities can be updated and the total will be recalculated in real time, as well as the quantity in the cart icon located in the top right section of the navigation.

![screenshot](https://i.imgur.com/rk3Rs1v.png)

### Admin Dashboard

The admin dashboard can only be accessed by users who have their 'admin' attribute set to true. In the dashboard, you will see the all orders laid out, allowing you to edit the status of the order. On the right are links to the pages that allow you to Create, Update and Delete Products and Categories.

![screenshot](https://i.imgur.com/bu6WMCq.png)

### Create A New Product

Admin route to fill in Product data and create a new product. Uses form data and react-dropzone, as the image being uploaded needs to be serialized to be stored in the mongodb database as a property of the product.

![screenshot](https://i.imgur.com/eFW02bX.png)

### Manage Products

Admin route to manage products. The trash icon will delete that specific item, and the pencil icon will take you to a form similar to the 'Create Product' page that fetches the product info and auto fills the form. At that point, the admin can change the fields and submit the changes to be redirected to that updated products page.

![screenshot](https://i.imgur.com/nlwGsK7.png)

### Signup Page

Simple form that allows users who aren't registered to create a profile. Middleware in place to check if a user is logged in will determine what routes users have access to.

![screenshot](https://i.imgur.com/8H6RGOs.png)

### Login Page

Login form for returning users. Redirects to dashboard.

![screenshot](https://i.imgur.com/j7ihSGf.png)

### Home Page Product Slider

Animated with css transitions, this slider component flips through a shortened products array to create a smooth UI. It is layered with a gradient container to give a 'frosty' effect, appropriate to the 'theme' of the UI.

![screenshot](https://i.imgur.com/33QhROs.png)