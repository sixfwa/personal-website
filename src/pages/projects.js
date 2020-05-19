import React, { useState } from "react"
import Layout from "../components/layout"
import projectsStyles from "./projects.module.scss"
import Head from "../components/head"
import Project from "../components/items/project"

const ProjectPage = () => {
  const [miniProjects] = useState([
    {
      title: "COEUS",
      description: "A Flask web application for sentiment analysis",
      image:
        "https://images.unsplash.com/photo-1589735527279-8935bce906ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      link: "https://coeus-analysis.herokuapp.com/",
      github: "https://github.com/sixfwa/coeus-sentiment-analysis",
    },
    {
      title: "Shopping List",
      description: "A shopping list application built using ReactJS",
      image:
        "https://images.unsplash.com/photo-1589763980315-f49dd8cdbef1?ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80",
      link: "https://francis-shopping-list.netlify.app/",
      github:
        "https://github.com/sixfwa/shopping-list-app-react/tree/master/shopping-list",
    },
    {
      title: "Project Hermes",
      description:
        "A simple blog application built using Django and PostgreSQL",
      image:
        "https://images.unsplash.com/photo-1589827606411-2c50ee040db0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=343&q=80",
      link: "https://thawing-depths-53145.herokuapp.com/",
      github: "https://github.com/sixfwa/hermes-django",
    },
  ])

  return (
    <Layout>
      <Head title="Projects" />
      <h1>Projects</h1>
      <h3>Mini Projects</h3>
      <div className={projectsStyles.container}>
        {miniProjects.map(project => {
          return (
            <Project
              title={project.title}
              description={project.description}
              logo={project.image}
              url={project.link}
              github={project.github}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default ProjectPage
