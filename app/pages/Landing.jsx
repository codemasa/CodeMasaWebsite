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



class Landing extends React.Component {
  render() {
    return (
      <Main>
        <main>


          <section className="intro">
              <h2>Cody Masao</h2>
              <div>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel gravida nisi. Vestibulum ac consequat lorem. In in mi massa. Donec ut tellus sit amet sem ornare fermentum at et nunc. Pellentesque ac elementum metus. Praesent non venenatis lacus. In sagittis urna in nulla sagittis mattis.</p>
              </div>
          </section>

          <div>
               <div className="services">
                  <div className="service-one">
                  <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                  <p className="service-title">Front End</p>
                  <p>Mauris vitae turpis ut sem blandit consequat et at ligula. Suspendisse quam lectus, tristique dapibus sapien et, tempus suscipit nisl.</p>
                  </div>
                  <div className="service-two">
                  <p className="service-icon"><i className="fas fa-crop"></i></p>
                  <p className="service-title">Back End</p>
                  <p>Nulla eu metus faucibus, vehicula tortor quis, venenatis odio. Nullam purus mauris, feugiat in odio vitae, posuere volutpat libero. Sed et convallis libero.</p>

                  </div>
                  <div className="service-three">
                  <p className="service-icon"><i className="fas fa-code"></i></p>
                  <p className="service-title">Services</p>
                  <p>Ut ornare vitae enim a rhoncus. Nullam aliquet tristique scelerisque. Sed volutpat dictum risus ac laoreet. Suspendisse id lorem in enim sollicitudin varius.</p>

            </div>
          </div>

              </div>



          <div className="gallery">
           <div className="gallery-item-one"></div>
           <div className="gallery-item-two"></div>
           <div className="gallery-item-three"></div>
           <div className="gallery-item-four"></div>
           <div className="gallery-item-five"></div>
           <div className="gallery-item-six"></div>

          </div>

          <section>
              <h2>About Me</h2>
              <div>
                <p>Integer sit amet venenatis erat. Cras elementum tortor odio, sit amet euismod nunc cursus ut. Donec sollicitudin orci sed enim volutpat, volutpat rutrum magna semper. Fusce leo lacus, pulvinar sit amet dignissim in, consectetur eget nulla. Etiam ac turpis augue. Sed tincidunt pulvinar tincidunt. Integer ac blandit magna. Nulla dapibus convallis luctus. </p>
                <p>Ut elementum urna sit amet elit egestas hendrerit. Vivamus quis sem fringilla, tincidunt nisi non, congue libero. Etiam cursus nulla quis sapien varius, eget accumsan augue mattis. Cras accumsan sapien nulla, eu eleifend odio tempus sit amet. Suspendisse gravida hendrerit sapien, ut molestie mi pellentesque eget. Aliquam eleifend velit vel libero elementum, vitae consectetur nisl sollicitudin. Suspendisse volutpat fringilla vehicula.</p>
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
