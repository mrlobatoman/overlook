// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/booking-logo.png'


fetch('http://localhost:3001/api/v1/customers')
 .then(resp => resp.json())
 .then(data => console.log(data))
console.log('This is the JavaScript entry file - your code begins here.');
