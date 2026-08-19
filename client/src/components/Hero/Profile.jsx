
import React from 'react'
import profileIMG from "../../../public/profileImg.png";
import Image from 'next/image'
import { LuSparkles } from 'react-icons/lu'

const Profile = () => {
  return (
    <div className="  relative flex items-center justify-center">

  {/* Background Glow */}
  <div
    className="
      absolute
        w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]
      rounded-full bg-pink-500/20 blur-[120px]"
  />

  {/* Small Dot */}
  <div
    className="
       absolute 
          top-5 right-5 sm:top-10 sm:right-10
          w-3 h-3 sm:w-4 sm:h-4 
          rounded-full bg-pink-500"
  />

  {/* Profile Image */}
   <Image
        src={profileIMG}
        alt="Profile"
        className="
          relative z-10
          w-[280px] sm:w-[350px] md:w-[420px] 
          object-contain
          drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] overflow-hidden"
      />

  {/* Bottom Curve */}
  <div
    className="
      absolute -bottom-2 sm:-bottom-2 lg:bottom-14 z-20
      w-[250px] sm:w-[350px] md:w-[450px] xl:w-[500px] 
          h-[180px] sm:h-[200px] md:h-[220px]
      border-b-[4px] border-pink-500
      rounded-b-full rotate-[-12deg] sm:rotate-[-8deg]"
  />

  {/* Star */}
  <div
    className="
      absolute
      -bottom-5 md:-bottom-3 lg:bottom-10
       left-1/3
      -translate-x-1/2
      text-pink-300
      text-4xl
      z-20
    "
  >
    <LuSparkles/>
  </div>
{/* ✦ */}
</div>
  )
}

export default Profile
