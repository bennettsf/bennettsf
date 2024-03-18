import React from 'react'
import "./Introduction.css"
import profile_pic from '../../assets/cutprofilepic.png'

function Introduction() {
  return (
    <div className='introduction'>
        <h1>Welcome To My Page!</h1>
        <img className='profile-pic' src={profile_pic}/>
        <p>My name is Bennett and I'm currently a student at North Seattle College in the Application Development bachelors program. I'm pursuing a career in software/web development. I also have a bachelors of science in Anthropology from Central Washington University!</p>
        <p>If you'd like to check out any of my recent repositories, you can find them on the left! Most of them are in-class assignments that cover different React and Web Development techniques. My main projects that are more relevent will be listed below.</p>
    </div>
  )
}

export default Introduction