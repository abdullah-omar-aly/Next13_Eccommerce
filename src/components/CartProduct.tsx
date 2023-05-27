import React from 'react'
import Link from 'next/link'
import { faXmark, faPlus, faMinus, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartProduct({productData}: any) {

  return (
    <div className=" border-b border-normal-gray py-3 flex gap-3"        >
        <Link
        className='w-20 h-20 bg-gray-200 rounded-sm block overflow-hidden'
            href={`/products/${productData.id}`}

        >

                <img
                    src={productData.image}
                    alt=""
                    className='object-fit '
                />
                {/* <Image src={} /> */}
        </Link>
        <div className='flex flex-col justify-between flex-grow'>
            <div className='flex justify-between'>
                <span className='capitalize'>
                    <Link
                        href={`/products/${productData.id}`}
                        className="w-40 inline-block truncate"
                        // onClick={() => { dispatch(cartActions.hideCart()) }}
                    >
                            {productData.title}
                    </Link>
                </span>
                <button className='mr-3 border-none' onClick={() => { 
                    // dispatch(cartActions.removeCartProduct({ productId: productData.id })) 
                    }}>
                    <FontAwesomeIcon icon={faXmarkCircle} />
                </button>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center justify-center '>
                    <button
                        className='border border-normal-gray  px-1 text-sm'
                        onClick={() => {
                            // dispatch(cartActions.decreaseProductQuantity({
                            //     productId: productData.id,
                            //     quantity: 1
                            // }))
                        }}
                    >
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className='p-2 border border-normal-gray'>
                        {/* {productData.quantity} */}
                        3
                        </span>
                    <button
                        className='border border-normal-gray px-1 text-sm'
                        onClick={() => {
                            // dispatch(cartActions.increaseProductQuantity({
                            //     productId: productData.id,
                            //     quantity: 1
                            // }))
                        }}

                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <div className='w-fit pr-3'><FontAwesomeIcon className="text-primary" icon={faXmark} /> {productData.price} $</div>
            </div>
        </div>
    </div>
  )
}

export default CartProduct