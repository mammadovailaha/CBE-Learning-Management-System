
import imageIcon from "../assets/icons/imageIcon.svg"

const UserProfile = () => {
  return (
    <div className='w-[30px] h-[30px] rounded-full bg-[#969695] border border-[#DAD5D5] flex justify-center items-center  '>
      <img
      className='w-3 h-3 object-cover'
      src={imageIcon} alt="user image" />
    </div>
  )
}

export default UserProfile
