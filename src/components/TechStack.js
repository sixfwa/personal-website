import React from "react"
import TechStackStyles from "./styles/techstack.module.scss"
import { FaPython, FaNodeJs, FaJava, FaReact } from "react-icons/fa"
import {
  DiMongodb,
  DiJavascript1,
  DiPostgresql,
  DiDjango,
} from "react-icons/di"

const TechStack = () => {
  return (
    <div className={TechStackStyles.container}>
      <div className={TechStackStyles.react}>
        <FaReact size="3em" />
        <h4>React</h4>
      </div>
      <div className={TechStackStyles.node}>
        <FaNodeJs size="3em" />
        <h4>NodeJS</h4>
      </div>
      <div className={TechStackStyles.mongodb}>
        <DiMongodb size="3em" />
        <h4>MongoDB</h4>
      </div>
      <div className={TechStackStyles.javaScript}>
        <DiJavascript1 size="3em" />
        <h4>JavaScript</h4>
      </div>
      <div className={TechStackStyles.flutter}>
        <DiDjango size="3em" />
        <h4>Django</h4>
      </div>
      <div className={TechStackStyles.python}>
        <FaPython size="3em" />
        <h4>Python</h4>
      </div>
      <div className={TechStackStyles.java}>
        <FaJava size="3em" />
        <h4>Java</h4>
      </div>
      <div className={TechStackStyles.postgres}>
        <DiPostgresql size="3em" />
        <h4>PostgreSQL</h4>
      </div>
    </div>
  )
}

export default TechStack
