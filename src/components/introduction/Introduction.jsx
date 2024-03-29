import React from 'react'
import "./Introduction.css"
import profile_pic from '../../assets/cutprofilepic.png'

function Introduction() {
  return (
    <div className='introduction'>
        <h1>Welcome To My Personal Page!</h1>
        <img className='profile-pic' src={profile_pic}/>
        <p>Hello, name is Bennett and I'm a student at North Seattle College! I'm currently enrolled in the Application Development Bachelors program, pursuing a career in software/web development. I also have a bachelors degree in Anthropology from Central Washington University, where I used to work as an archaeologist.</p>
        <p>If you'd like to check out any of my recent repositories, you can find them on the left! Most of them are in-class assignments that cover different React and Web Development techniques. My main projects that are more relevant will be listed below. Also feel free to connect with me through LinkedIn.</p>
    </div>
  )
}

export default Introduction