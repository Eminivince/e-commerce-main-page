import React from 'react'
import Navlogo from '../images/logo.svg'
import Carticon from '../images/icon-cart.svg'
import Userimage from '../images/image-avatar.png'
import image1 from '../images/image-product-1.jpg'
import image1thumbnail from '../images/image-product-1-thumbnail.jpg'
import image2 from '../images/image-product-2.jpg'
import image2thumbnail from '../images/image-product-2-thumbnail.jpg'
import image3 from '../images/image-product-3.jpg'
import image3thumbnail from '../images/image-product-3-thumbnail.jpg'
import image4 from '../images/image-product-4.jpg'
import image4thumbnail from '../images/image-product-4-thumbnail.jpg'

const Navbar = () => {
    const arrayOfImage = [image1, image2, image3, image4]

  return (
    <div>
        {/* NavBar */}
        <div className='nav-container'>
            <nav className='flex justify-between mx-20 items-center h-24 border-b-2'>
                <div className='nav-logo-n-links flex'>
                    <img src={Navlogo} alt='logo' className='nav-logo'/>
                    <ul className='flex justify-between ml-10 w-96'>
                        <li className=''><a href='#'>Collections</a></li>
                        <li><a href='#'>Men</a></li>
                        <li><a href='#'>Women</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>

                <div className='cart-icon flex h-7 w-28  justify-between'>
                    <img src={Carticon} alt='carticon' className='hover:cursor-pointer'/>
                    <img src={Userimage} alt='userimage' className='hover:cursor-pointer' />
                </div>
            </nav>
        </div>

        {/* Hero Section */}

        <div className='hero-container flex mx-28 mt-8 space-x-16'>
            {/* Image Gallery */}
            <div className='image-gallery flex flex-col'>
                <div className='main-image-container'>
                    <img src={image1} alt='mainimage' className='main-image rounded-2xl basis-1 mb-8' />
                </div>

                <div className='carousel-container flex justify-between mb-2'>
                    <img src={image1thumbnail} alt='image1' className='carousel-image basis-1 rounded-lg w-16' />
                    <img src={image1thumbnail} alt='image1' className='carousel-image basis-1 rounded-xl w-16' />
                    <img src={image1thumbnail} alt='image1' className='carousel-image basis-1 rounded-xl w-16' />
                    <img src={image1thumbnail} alt='image1' className='carousel-image basis-1 rounded-xl w-16' />
                </div>                
            </div>

            {/* Product Info */}

            <div className='product-info mt-8'>
                <h3 className='text-red-700 font-semibold text-3xl mb-2'>SNEAKERS COMPANY</h3>
                <h1 className='font-bold text-6xl mb-10'>Fall Limited Edition Sneakers</h1>
                <p className='text-xl mb-6 pr-12'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

                {/* Price and Discount */}
                <div className='price-n-discount mb-6'>
                    <div className='flex'>
                        <p className='price font-bold text-2xl'>${125}.00</p>
                        <p className='discount bg-slate-300 ml-4 px-1 text-xs font-bold text-orange-600 rounded pt-2'>50%</p>
                    </div>
                    <div className='struckout line-through font-bold text-slate-500'>$250</div> 
                </div>

                    {/* Cart Button */}
                <div className='flex justify-between font-bold'>
                    <div className='increment--decrement flex px-32 bg-slate-300 rounded-lg justify-center items-center py-3 font-extrabold'>
                        <p className='text-orange-600'>-</p>
                        <span className='mr-6 ml-6'>0</span>
                        <p className='text-orange-600'>+</p>
                    </div>
                    
                    <div className='addcart--button flex px-32 py-4 rounded-lg bg-orange-600 text-white hover:cursor-pointer'>
                        <img src={Carticon} alt='addcarticon' />
                        <p className='ml-4'>Add to cart</p>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Navbar