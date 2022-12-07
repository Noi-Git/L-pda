import React from 'react'

const ProfileCard = ({ title, handle, image }) => {
  return (
    <div>
      <img src={image} alt={`${title} logo`} />
      <div> Title: {title} </div>
      <div> Handle: {handle} </div>
    </div>
  )
}

export default ProfileCard
