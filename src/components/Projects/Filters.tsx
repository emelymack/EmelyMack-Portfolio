import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { ProjectFilters } from '../../types/types'

const Filters = (filterProjects: (e: any, projectFilter: ProjectFilters) => void) => {
  return (
    <DropdownButton title="Filter" >
      <div id="dropdown-filters">
        <Dropdown.Item href="#" active={true} onClick={(e) => filterProjects(e, ProjectFilters.All)}>All projects</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={(e) => filterProjects(e, ProjectFilters.Personal)}>Personal projects</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={(e) => filterProjects(e, ProjectFilters.Work)}>Work projects</Dropdown.Item>
      </div>  
    </DropdownButton>
  )
}

export default Filters