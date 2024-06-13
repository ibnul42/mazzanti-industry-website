'use client'
import axios from 'axios'
import React, { useState } from 'react'

export default function Testpage() {
    const [file, setFile] = useState(null)

    const upload = async () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'tnimizyq')
        axios.post('https://api.cloudinary.com/v1_1/dk5mn64w4/image/upload',formData)
        .then(res => console.log(res))
    }

  return (
    <div className='text-black'>
      <input type="file" 
      onChange={(e) => setFile(e.target.files[0])}
      name="" id="" />
      <button onClick={upload}>Upload</button>
    </div>
  )
}
