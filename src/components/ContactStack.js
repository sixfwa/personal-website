import React from "react"

import contactStackStyles from "./styles/contactstack.module.scss"
import {
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineMedium,
  AiOutlineGithub,
} from "react-icons/ai"

const ContactStack = () => {
  return (
    <div className={contactStackStyles.container}>
      <a href="mailto:sixfwali@gmail.com" className={contactStackStyles.email}>
        <AiOutlineMail size="3em" />
        <h4>sixfwali@gmail.com</h4>
      </a>
      <a
        href="https://twitter.com/sixfwa"
        className={contactStackStyles.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineTwitter size="3em" />
        <h4>@sixfwa</h4>
      </a>
      <a
        className={contactStackStyles.medium}
        href="https://medium.com/@sixfwa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineMedium size="3em" />
        <h4>sixfwa</h4>
      </a>
      <a
        className={contactStackStyles.github}
        href="https://github.com/sixfwa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineGithub size="3em" />
        <h4>sixfwa</h4>
      </a>
    </div>
  )
}

export default ContactStack
