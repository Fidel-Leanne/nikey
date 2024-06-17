import React from 'react'

const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImage}) => {
  return (
    <div>

            <img
                src={shoe.thumbnail}
                alt=''
                width={200}
                height={200}
                className='object-contain relative z-10  border border-stone-800'
              />
    </div>
  )
}

export default ShoeCard