import React, { useState } from "react"
import GenericPage from "../Common/GenericPage"
import axios from "../../lib/axios"
const ContactContent = () => {
  const [form, setForm] = useState({})

  const submit = async () => {
    await axios.post('/api/forms', {
      data: form
    })
  }
  return (
    <div className="flex flex-row align-start">
      {/* <div className="block bg-offwhite py-7 h-[100%]">
        <h1 className={`font-corbel font-semibold text-[70px] text-nowrap text-[black] text-right tracking-tighter uppercase w-[7rem] `}>MC</h1>
        <h1 className={`font-corbel font-semibold text-[70px] text-nowrap text-[black] text-right tracking-tighter uppercase w-[7rem]  `}>MC</h1>
        <h1 className={`font-corbel font-semibold text-[70px] text-nowrap text-[black] text-right tracking-tighter uppercase w-[7rem]  `}>MC</h1>
        <h1 className={`font-corbel font-semibold text-[70px] text-nowrap text-[black] text-right tracking-tighter uppercase w-[7rem]  `}>MC</h1>
      </div> */}
      {/* TABS */}
      <div className="flex flex-col md:flex-row p-4 md:p-20 gap-10 w-full m-auto">
        <div className="">
          <div className="flex flex-row py-2">
            <p className="text-[20px] mr-[2rem]">Email:</p>
            <a className="text-[20px] mr-[2rem]" href="mailto:info@malgam.co.uk">
              info@malgam.co.uk
            </a>
          </div>
          <div className="flex flex-row py-2">
            <p className="text-[20px] mr-[2rem]">Phone:</p>
            <div className="text-[20px] mr-[2rem]"> 07817 252 546 </div>
          </div>
          <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
            <h1 className="block w-full text-center text-grey-darkest mb-6">Send us a message</h1>
            <div className="mb-4 md:flex md:flex-wrap md:justify-between" action="/" method="post">
              <div className="flex flex-col mb-4 md:w-full">
                <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="name">
                  Name
                </label>
                <input className="border py-2 px-3 text-grey-darkest" type="name" name="name" id="name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="flex flex-col mb-4 md:w-full">
                <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="email">
                  Email
                </label>
                <input className="border py-2 px-3 text-grey-darkest" type="email" name="email" id="email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="flex flex-col mb-6 md:w-full">
                <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="message">
                  message
                </label>
                <textarea className="border py-5 px-3 text-grey-darkest" type="message" name="message" id="message" onChange={(e) => setForm({ ...form, body: e.target.value })} />
              </div>
              <button className="block bg-teal hover:bg-teal-dark text-black uppercase text-lg mx-auto p-4 rounded" type="submit" onClick={submit}>
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-[30px] mb-2 mr-[2rem]">Location:</p>
          <iframe className="w-[full] h-[full]" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13823.66046811428!2d31.5484174!3d29.981869349999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1711817086829!5m2!1sen!2seg"></iframe>
        </div>
      </div>
    </div>
  )
}
const ContactPage = () => {
  return <GenericPage title={"Contact Us"} content={ContactContent} />
}

export default ContactPage
