import { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`
/* Base 10 typography scale courtesty of @wesbos 1.6rem === 16px */
html {
  font-size: 10px;
}
body {
  margin: 0;
  padding: 0;
  font-family: Raleway;
  color: #111;
}
body * {
  transition: all 0.300s ease-in-out;
}
/* Relative Type Scale */
/* https://blog.envylabs.com/responsive-typographic-scales-in-css-b9f60431d1c4 */
:root {
  --step-up-5: 2em;
  --step-up-4: 1.7511em;
  --step-up-3: 1.5157em;
  --step-up-2: 1.3195em;
  --step-up-1: 1.1487em;
  /* baseline: 1em */
  --step-down-1: 0.8706em;
  --step-down-2: 0.7579em;
  --step-down-3: 0.6599em;
  --step-down-4: 0.5745em;
  --step-down-5: 0.5em;
  /* Colors */
  --header: rgb(0,0,0);
}
/* https://css-tricks.com/snippets/css/system-font-stack/ */
/* Define the "system" font family */
/* Fastest loading font - the one native to their device */
@font-face {
  font-family: system;
  font-style: normal;
  font-weight: 300;
  src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
}
/* Modern CSS Reset */
/* https://alligator.io/css/minimal-css-reset/ */
body, h1, h2, h3, h4, h5, h6, p, ol, ul, input[type=text], input[type=email], button {
  margin: 0;
  padding: 0;
  font-weight: normal;
}
body, h1, h2, h3, h4, h5, h6, p, ol, ul, input[type=text], input[type=email], button {
  font-family: "system"
}
*, *:before, *:after {
  box-sizing: inherit;
}
ol, ul {
  list-style: none;
}
img {
  max-width: 100%;
  height: auto;
}
/* Links */
a {
  text-decoration: underline;
  color: inherit;
&.active {
    text-decoration: none;
  }
}
/*------------- MAIN SECTION -------------------*/


main {

  position: relative;
  z-index: 3;
 overflow: hidden;
}


main section {
  width: 70%;
  padding: 90px 0;
  margin: 50px auto 150px auto;
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: center;

}

main section h2 {
  font-size: 4.3rem;
  color: #ddd;
  text-transform: uppercase;
 line-height: 4.2rem;
 padding-right: 10px;
 border-right: 3px solid #ddd;
}



main section div {
  position: relative;

}

main section div p {
  padding-left: 10px;
}


/*------------- GALLERY -------------------*/

.gallery{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 820px;
  width: 95%;
  margin: 180px auto 0px auto;
  -webkit-box-shadow: 0px 10px 20px -11px rgba(0,0,0,0.9);
 -moz-box-shadow: 0px 10px 20px -11px rgba(0,0,0,0.9);
 box-shadow: 0px 10px 20px -11px rgba(0,0,0,0.9);
}

.gallery div {
  width: 100%;
  height: 100%;
  position: relative;
   overflow: hidden;
   filter: grayscale(83%);
}

/* images are not compressed, remember to compress them before deployment */
.gallery div.gallery-item-one {
  background: url("./images/toa-heftiba-526264-unsplash.jpg");
  background-size: 160%;
 grid-column-end: span 2;
 grid-row-end: span 2;
}

.gallery div.gallery-item-two {
  background: url("./images/chuttersnap-598266-unsplash.jpg");
  background-size: 160%;
}
.gallery div.gallery-item-three {
  background: url("./images/rawpixel-196509-unsplash.jpg");
  background-size: 160%;
}

.gallery div.gallery-item-four {
  background: url("./images/rawpixel-284723-unsplash.jpg");
  background-size: 160%;
}
.gallery div.gallery-item-five {
  background: url("./images/volkan-olmez-73767-unsplash.jpg");
  background-size: 160%;
}
.gallery div.gallery-item-six {
  background: url("./images/taduuda-72915-unsplash.jpg");
  background-size: 160%;
}
.gallery div.gallery-item-one:hover, .gallery div.gallery-item-two:hover, .gallery div.gallery-item-three:hover, .gallery div.gallery-item-four:hover, .gallery div.gallery-item-five:hover, .gallery div.gallery-item-six:hover{
  background-size: 100%;
  filter: grayscale(0%);
}

 /*------------- SERVICES -------------------*/
 div.services {
  display: grid;
  height: auto;
  grid-template-columns: repeat(3,1fr);
 padding: 10px;

}


.services div {
  text-align: center;
  background: #393f4d;
  width: 90%;
  border-radius: 10px;
  margin: 10px auto 50px auto;

  -webkit-box-shadow: 0px 10px 30px -9px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 10px 30px -9px rgba(0,0,0,0.75);
  box-shadow: 0px 10px 30px -9px rgba(0,0,0,0.75);

}

.services p.service-icon {
  font-size: 3.4rem;
  padding: 30px 0px 30px 90px;
  margin: 0px 0px 30px 0px;
  text-align: left;
  color: rgba(29,30,34,1);
  filter: grayscale(0%);
  border-bottom: 2px solid rgba(29,30,34,1);
}
.services p.service-title{
  font-size: 3.1rem;
  padding: 0;
  margin: 0;
}

.services p:last-of-type{
  padding: 0px 90px 20px 90px;
  text-align: left;
}

button{
  background-color: #CCBBAA;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
}
button:focus{
  outline: none;
}
button:active{
  background-color: #BBCCAA;
}
canvas{
  display: inline-block;
}

.buttonClass{
  display: inline-grid;
  position: absolute;
}
.small-menu{
  margin-right: 40px;
  font-size: 20px;
}
.buttonClass{
  width: 1.5em;
  height: 5em;
}
`
