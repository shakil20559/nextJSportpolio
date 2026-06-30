import React from 'react'
import { LuSparkles } from 'react-icons/lu'
import HabibaPortpolio from './HabibaPort'
import WeatherAppProject from './WeatherApp'
const Project = () => {
  return (
    <div className='project_container'>

        {/* project header */}
      <div 
        className='flex items-center justify-between
        my-4 px-4 sm:px-6 lg:px-8 xl:px-10 
        w-full h-20 bg-gray-800/80 rounded-xl'>
        <span className='text-3xl text-blue-500/80 hidden sm:block '>{'</>'}</span>
        
        <div className='project_headerTitle 
            flex items-center justify-center  mx-auto 
            gap-3 sm:gap-6 xl:gap-10
            text-blue-100 whitespace-nowrap font-medium
            text-xl sm:text-2xl md:text-3xl lg:text-4xl'> 
            <LuSparkles className='text-fuchsia-400'/> 
            <h3 className='tracking-wider'>
                IDEAS TURN INTO  
                <span className='text-fuchsia-400'> CODE</span> 
            </h3>
            <LuSparkles className='text-fuchsia-400'/>
        </div>
        <span className='text-3xl text-blue-500/80 hidden sm:block '>{'</>'}</span>
      </div>

      <div className='flex flex-col lg:flex-row gap-4 py-6 px-4 sm:px-6'>
          <HabibaPortpolio/>
          <WeatherAppProject/>
      </div>
        

    </div>
  )
}

export default Project