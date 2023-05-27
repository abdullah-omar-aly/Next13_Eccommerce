import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus, faMinus, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import CartProduct from './CartProduct';

function ShoppingCart({closeDrawer}: {closeDrawer: () => void}) {
    const cartProducts = [
        {
            "id": 1,
            "title": "Wooden Furniture Desk - 120x95x50 cm - Black - WO.FU.26",
            "price": 2023,
            "tags": ['office-furniture'],
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "image": "https://eg-rv.homzmart.net/catalog/product/1/_/1_1425.jpg",
            "rating": {
              "rate": 3.9,
              "count": 120
            },
            "discount": 40
        
          },
          {
            "id": 2,
            "title": "Bed 120x195×120 cm - Grey",
            "price": 2690,
            "tags": ['rooms'],
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        
            "image": "https://eg-rv.homzmart.net/catalog/product/s/h/shefur1.jpg",
            "rating": {
              "rate": 3.9,
              "count": 120
            },
            "discount": 33
        
          },
    ]
    return (
        <div>
                <div className='w-full bg-dark-gray border border-red-500  h-screen text-white px-4 flex flex-col '>
                    <h2 className=' py-6 uppercase  border-normal-gray border-b font-semibold text-lg flex justify-between items-center h-20'>
                        <div>
                            <span>your cart</span>
                            <span className='ml-3 text-sm font-normal lowercase text-slate-300'>{`(2 items)`}</span>
                        </div>
                        <button
                            onClick={closeDrawer}
                            className='cursor-pointer text-2xl mr-2 p-2 border-none'
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </h2>

                    {
                        cartProducts.length === 0
                            ? <p className='text-sm pt-4'>Your cart is currently empty</p>
                            : <div
                                className='flex flex-col justify-between h-full '
                            >

                                <div className='cart-items flex flex-col overflow-auto '
                                    style={{ maxHeight: "calc(100vh - 240px)" }}
                                >
                                    {cartProducts.map((cartProduct, ind) => (
                                        <CartProduct key={ind} productData={cartProduct} />
                                    ))}
                                    <style jsx={true}>
                                        {`
                                .cart-items::-webkit-scrollbar {
                                    width: 5px;
                                  }
                                `}
                                    </style>
                                </div>
                                <div className='border-t border-normal-gray h-40'>
                                    <div className='flex justify-between items-center py-2' >
                                        <span className='uppercase'>subtotal</span>
                                        <span>{2000} $</span>
                                    </div>
                                    <p className="text-center italic text-slate-400">Shipping, taxes, and discounts calculated at checkout</p>
                                    <button
                                        className='uppercase bg-primary w-full py-2 my-3 border-none'
                                    >
                                        <span className='mr-3'>check out</span>
                                        <FontAwesomeIcon icon={faArrowRightLong} />

                                    </button>
                                </div>
                            </div>



                    }

                </div>
        </div>
    )
}

export default ShoppingCart