import React from 'react';
import PropTypes from 'prop-types';

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl h-[130px] flex ${
        bigShoeImage === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex flex-1 justify-center items-center bg-fuchsia-600/50 rounded-xl relative z-10 max-sm:p-4'>
        <img
          src={imgURL.thumbnail}
          alt=''
          width={127}
          height={103}
          className='object-contain'
        />
      </div>
    </div>
  );
};

ShoeCard.propTypes = {
  imgURL: PropTypes.shape({
    bigShoe: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  changeBigShoeImage: PropTypes.func.isRequired,
  bigShoeImage: PropTypes.string.isRequired,
};

export default ShoeCard;
