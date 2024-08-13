import React from 'react';
import {
  MDBFooter,
  MDBContainer
} from 'mdb-react-ui-kit';

function Footer(){

    return (
      <div id="footer" className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', "margin-top": "5rem", "margin-left":"1rem", "margin-right": "1rem", "border-radius":"5px" }}>
        <MDBFooter className='text-center text-white'>
        <MDBContainer className='p-4 pb-0'>
          <section className='mb-4'>
          {/* <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-instagram"></i
      ></a>

      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-github"></i
      ></a> */}
    
      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{"background-color": "#dd4b39"}}
        href="#!"
        role="button"
        ><i class="fab fa-google"></i
      ></a>

      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{"background-color": "#ac2bac"}}
        href="#!"
        role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{"background-color": "#0082ca"}}
        href="#!"
        role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>
      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{"background-color": "#333333"}}
        href="#!"
        role="button"
        ><i class="fab fa-github"></i
      ></a>
          </section>
        </MDBContainer>
  
        
          © 2024 Copyright:
          <a className='text-white' href='#top'>
            TravelWithNaye
          </a>
       
      </MDBFooter>
      </div>
    );
}

export default Footer;