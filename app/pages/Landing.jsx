import React from 'react';
import Helmet from 'react-helmet-async';
import Page from '../components/Page.jsx';
import Contents from '../components/Contents.jsx';
import SSCProject from '../components/SSCProject.jsx';
import LissajousProject from '../components/Lissajous.jsx';
import TakeANoteProject from '../components/TakeANote.jsx';
import FoodOrder from '../components/FoodOrder.jsx';
import Form from '../components/Form.jsx';
import styled from 'styled-components';
import liss from '../resources/liss.png';
import food from '../resources/food.png';
import ssc from '../resources/ssc.png';
import tan from '../resources/TaN.png';
import krab from '../resources/krab.png';
import res from '../resources/res.png';

const Main = styled.div
`
  background-color: #393f4d;
  color: #feda6a;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  -webkit-box-shadow: 0px 10px 54px -11px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 10px 54px -11px rgba(0,0,0,0.75);
  box-shadow: 0px 10px 54px -11px rgba(0,0,0,0.75);
`
const Gallery = styled.div
`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 820px;
  width: 95%;
  margin: 180px auto 0px auto;
  -webkit-box-shadow: 0px 10px 20px -11px rgba(0,0,0,0.9);
  -moz-box-shadow: 0px 10px 20px -11px rgba(0,0,0,0.9);
  box-shadow: 0px 10px 20px -11px rgba(0,0,0,0.9);

  &div{
  width: 100%;
  height: 100%;
  position: relative;
   overflow: hidden;
   filter: grayscale(83%);
 }
`

const GalleryItemOne = styled.div
`
  background: url(${food});
  background-size: 160%;
  grid-column-end: span 2;
  grid-row-end: span 2;
  &:hover{
    background-size: 115%;
    filter: grayscale(0%);
  }
`

const GalleryItemTwo = styled.div
`
  background: url(${liss});
  background-size: 160%;
  &:hover{
    background-size: 115%;
    filter: grayscale(0%);
  }
`
const GalleryItemThree = styled.div
`
  background: url(${res});
  background-size: 160%;
  &:hover{
    background-size: 135%;
    filter: grayscale(0%);
  }
`
const GalleryItemFour = styled.div
`
  background: url(${tan});
  background-size: 160%;
  &:hover{
    background-size: 115%;
    filter: grayscale(0%);
  }
`
const GalleryItemFive = styled.div
`
  background: url(${ssc});
  background-size: 160%;
  &:hover{
    background-size: 105%;
    filter: grayscale(0%);
  }
`
const GalleryItemSix = styled.div
`
  background: url("${krab}");
  background-size: 160%;
  &:hover{
    background-size: 115%;
    filter: grayscale(0%);
  }
`



class Landing extends React.Component {
  render() {
    return (
      <Main>
        <main>


          <section className="intro">
              <h2>Cody Masao</h2>
              <div>
               <p>My name is Cody-Joe Abe, and I am a Software Engineer looking for a position in the San Francisco Bay area. I specialize in Fullstack Web Development and Mobile Application Development.</p>
              </div>
          </section>

          <div>
               <div className="services">
                  <div className="service-one">
                  <p className="service-title">Front End</p>
                  <p>Mauris vitae turpis ut sem blandit consequat et at ligula. Suspendisse quam lectus, tristique dapibus sapien et, tempus suscipit nisl.</p>
                  </div>
                  <div className="service-two">
                  <p className="service-title">Back End</p>
                  <p>Nulla eu metus faucibus, vehicula tortor quis, venenatis odio. Nullam purus mauris, feugiat in odio vitae, posuere volutpat libero. Sed et convallis libero.</p>

                  </div>
                  <div className="service-three">
                  <p className="service-title">Services</p>
                  <p>Ut ornare vitae enim a rhoncus. Nullam aliquet tristique scelerisque. Sed volutpat dictum risus ac laoreet. Suspendisse id lorem in enim sollicitudin varius.</p>

            </div>
          </div>

              </div>



          <Gallery>
           <GalleryItemOne/>
           <GalleryItemTwo/>
           <GalleryItemThree/>
           <GalleryItemFour/>
           <GalleryItemFive/>
           <GalleryItemSix/>

          </Gallery>

          <section>
              <h2>About Me</h2>
              <div>
                <p>I like music and I play multiple instruments. I am not bragging or anything. Its just the piano, guitar, bass, ukulele, and I sing.</p>
                <p>I love movies and like to pretend I am a screenwriter from time to time. I want to direct a short film one day, but maybe not. </p>
                </div>
          </section>


          <section>
              <h2>Contact Me</h2>
              <Form />

          </section>


        </main>
      </Main>
    );
  }
}

export default Landing;
