import {useState} from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-red-500'>Our Summer Collection</p>
        <h1 className='font-bold mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px]'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>Latest Collection </span> <br />
          <span className='text-red-800 font-montserrat font-semibold'>New </span>
          Arrivals
        </h1>

        <p className='font-montserrat text-slate-900 text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>

        <Button label='Shop now' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20'>
          {statistics.map((stat, index) => (
            <div key={index} className='mr-4'>
              <p className='text-4xl font-bold font-palaquin'>{stat.value}</p>
              <p className='text-xl font-semibold  font-montserrat'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center bg-purple-700/35 '>
        <img

          src={bigShoeImg}
          alt=''
          width={610}
          height={500}
          className= 'object-contain relative z-10'
          
        />

        <div className='flex sm:gap-6 gap-4 absolute lg:-bottom-[5%]  sm:left-[40%] sm:-bottom-[10%] max-sm:px-6'>
          {shoes.map((shoe) =>(
            <div key={shoe} className=''>
             <ShoeCard
             imgURL={shoe}
             changeBigShoeImage={(shoe)=>setbigShoeImg(shoe)}
             bigShoeImage={bigShoeImg}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
