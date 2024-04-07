import Project from '../Project';
import programme from '../../programme.json'
import { Programme } from '.';

const ProgrammeGallery = () => {

  return (
    <>
      <h1>These are my projects!</h1>

      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </>
  )
}

export default ProgrammeGallery;