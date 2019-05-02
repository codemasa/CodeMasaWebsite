import { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`
/* Base 10 typography scale courtesty of @wesbos 1.6rem === 16px */
html {
  font-size: 15px;
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
  font-size: 4vw;
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





 /*------------- SERVICES -------------------*/



.services p.service-icon {
  font-size: 3.4vw;
  padding: 30px 0px 30px 90px;
  margin: 0px 0px 30px 0px;
  text-align: left;
  color: rgba(29,30,34,1);
  filter: grayscale(0%);
  border-bottom: 2px solid rgba(29,30,34,1);
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
