import { CardProject } from "./CardProject";
import { useAppSelector } from "../../hooks/hooks";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Project, ProjectFilters, projectCategory } from "../../types/types";
import { data } from "./data";
import LoadMore from "./LoadMore";

export const Projects = () => {
  const language: string = useAppSelector(state => state.language)
  const title = (language === 'eng') ? 'Projects' : 'Proyectos'
  const subtitle =(language === 'eng') ? "Some of the work I've done" : 'Algunos de los proyectos en los que trabajé'
  const [ endIndex, setEndIndex ] = useState(window.innerWidth >= 992 ? 6 : 3)
  const [ shownData, setShownData ] = useState<Project[]>([])
  const [ projectsData, setProjectsData ] = useState(data(language))

  useEffect(() => {
    const slicedData = projectsData.slice(0, endIndex)
    setShownData(slicedData)
  }, [endIndex, projectsData])


  const filterProjects = (e: any, projectFilter: ProjectFilters) => {
    const dropdown = document.getElementById('dropdown-filters')
    dropdown?.childNodes.forEach((el: any) => {
      if(el !== e) el.classList.remove('active')
    })
    e.target.classList.add('active')

    switch (projectFilter) {
      case ProjectFilters.All:
        setProjectsData(data(language))
        break;
      case ProjectFilters.Personal:
        const filteredPersonal = data(language).filter((el) => el.category === projectCategory.Personal)
        setProjectsData(filteredPersonal)
        break;
      case ProjectFilters.Work:
          const filteredWork = data(language).filter((el) => el.category === projectCategory.Work)
          setProjectsData(filteredWork)
          break;
      default:
        setProjectsData(data(language))
        break;
    }
  }

  return (
    <div id="projects" className="container pt-5" data-aos="fade-up">
      <div className="text-center title">
        <h1 className="fw-bold text-center mb-3">{title}</h1>
        <span style={{fontSize: '18px'}}>{subtitle}</span>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <DropdownButton title="Filter" >
          <div id="dropdown-filters">
            <Dropdown.Item href="#" active={true} onClick={(e) => filterProjects(e, ProjectFilters.All)}>All projects</Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={(e) => filterProjects(e, ProjectFilters.Personal)}>Personal projects</Dropdown.Item>
            <Dropdown.Item href="#/action-3" onClick={(e) => filterProjects(e, ProjectFilters.Work)}>Work projects</Dropdown.Item>
          </div>  
        </DropdownButton>
      </div>
      <div className="row row-cols-1 row-cols-md-3 mb-3 mt-0 mb-md-5 gy-4 justify-content-center">
        {shownData.map(project => (
          <CardProject key={project.title} img={project.img} title={project.title} description={project.description} webSrc={project.webSrc} gitHubSrc={project.gitHubSrc} />
        ))}
      </div>
      <LoadMore endIndex={endIndex} setEndIndex={setEndIndex} projectsData={projectsData} />
    </div>
  )
}