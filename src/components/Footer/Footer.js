import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark text-white py-3 mt-5">
        <div className='container'>
            <nav className='row'>
                <Link to={'/'} className='col-12 col-md-4 d-flex align-item-center justify-content-center my-3'>
                    <img src='https://i.imgur.com/oHxyamj.jpg' className="img-fluid" alt="mandala-logo" />
                </Link>
                <ul className='col-12 col-md-4 list-unstyled mb-1'>
                    <li className='font-weight-bold my-3 fs-4'>Mandala Cakes</li>
                    <li className='text-center'>Bakery & Pastry</li>
                    <li className='text-center'>Address: Obispo Salguero 479, Córdoba Capital</li>
                    <li className='text-center'>Monday to Saturday from 10 a.m. to 8 p.m</li>
                    <li className='text-center'>Orders and prices only through WhatsApp</li>
                </ul>
                <ul className='col-12 col-md-4 list-unstyled mb-1'>
                    <li className='font-weight-bold my-3 fs-5'>Social Media</li>
                    <li className='d-flex justify-content-evenly mb-2'>
                        <a href='https://www.facebook.com/mandalacakesok/' target='_blank'><h4><i className="bi bi-facebook btn-outline-light"/></h4></a>
                        <a href='https://www.instagram.com/mandalacakes/' target='_blank'><h4><i className="bi bi-instagram btn-outline-light"/></h4></a>
                        <a href='https://api.whatsapp.com/send/?phone=5493517657602&text&type=phone_number&app_absent=0' target='_blank'><h4><i className="bi bi-whatsapp btn-outline-light"/></h4></a>
                        <a href='https://twitter.com/mandalacakes' target='_blank'><h4><i className="bi bi-twitter btn-outline-light"/></h4></a>
                    </li>
                </ul>
                <hr></hr>
                <div className='container'>
                    <p className='text-center mb-0 mt-1'>&copy; Copyright 2022 Mandala Cakes. All rights reserved.</p>
                </div>
            </nav>
        </div>
    </footer>
  )
}

export default Footer



