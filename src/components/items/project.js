import React from "react"
import projectStyles from "./project.module.scss"

const Project = ({ title, description, logo, url, github }) => {
  return (
    <div
      className={projectStyles.project}
      style={{ backgroundImage: `url(${logo})` }}
    >
      <div className={projectStyles.info}>
        <h3 className={projectStyles.text}>{title}</h3>
        <p className={projectStyles.text}>{description}</p>
        <div className={projectStyles.links}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            URL
          </a>
          {"  "}|{"  "}
          <a href={github} target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
