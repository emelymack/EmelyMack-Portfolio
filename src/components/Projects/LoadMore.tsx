import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useAppSelector } from '../../hooks/hooks'
import { Project } from '../../types/types'

interface Props {
  endIndex: number,
  setEndIndex: (arg: number) => void,
  projectsData: Project[]
}
const LoadMore = ({setEndIndex, endIndex, projectsData}: Props) => {
  const language: string = useAppSelector(state => state.language)
  const btnText = (language === 'eng') ? 'Load more' : 'Ver más'

  const loadMore = () => {
    setEndIndex(endIndex + 3)
  }

  return (
    <div className="d-flex justify-content-center">
      <Button className={`btn btn-none btn-none-text px-4 ${endIndex >= projectsData.length && 'invisible'}`} onClick={() => loadMore()} >{btnText} <FontAwesomeIcon icon={faChevronDown} className="ms-1" /></Button>
    </div>
  )
}

export default LoadMore