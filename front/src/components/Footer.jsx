import React from 'react';
import logo from '../../public/logo.png';

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-12 text-center">
          {/* <img src={logo} alt="Logo" style={{ width: '70px', height: 'auto' }} /> */}
            <h5 className="my-3">ABOUT THE SHOP</h5>
            <p>
              At Reet Jewellers, we take pride in offering a stunning collection of gold and silver jewellery that blends timeless elegance with modern craftsmanship. With a commitment to quality and authenticity, we bring you beautifully designed pieces that celebrate every occasion and reflect your unique style. From traditional designs to contemporary creations, our jewellery is crafted with precision and passion, ensuring every customer finds something truly special. At Reet Jewellers, your trust is our most valued treasure.
            </p>
            <div className="social-links">
            <a href="https://www.facebook.com/" className="btn btn-outline-light btn-sm me-2"><i className="bi bi-facebook"></i></a>
            {/* <a href="#" className="btn btn-outline-light btn-sm me-2"><i className="bi bi-twitter"></i></a> */}
            <a href="https://www.instagram.com/" className="btn btn-outline-light btn-sm me-2"><i className="bi bi-instagram"></i></a>
            {/* <a href="#" className="btn btn-outline-light btn-sm"><i className="bi bi-youtube"></i></a> */}
          </div>

            <div className='text-center pt-3'>
            <ul className="list-unstyled d-flex justify-content-center flex-wrap"> {/* Add flex styles here */}
             
              <li className="me-3">
                <a href="/about" className="text-decoration-none text-white" aria-label="About us">About us</a>
              </li>
              <li className="me-3">
                <a href="/contact" className="text-decoration-none text-white" aria-label="FAQs">FAQs</a>
              </li>
              <li className="me-3">
                <a href="/contact" className="text-decoration-none text-white" aria-label="Contact">Contact</a>
              </li>
              <li className="me-3">
                <a href="#" className="text-decoration-none text-white" aria-label="Terms of Service">Terms of Service</a>
              </li>
              <li className="me-3">
                <a href="#" className="text-decoration-none text-white" aria-label="Refund policy">Refund policy</a>
              </li>
            </ul>

            </div>
          </div>
          
        
        </div>
        <hr />
        <div className="row">
          <div className="col-12 mb-3 text-center">
            <small>&copy; {new Date().getFullYear()} Reet Jewellers</small>
          </div>
        </div>
      </div>
    </footer>
  );
}
