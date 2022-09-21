export default function ProjectsCarousel({ project }) {
  return (
    <div>
      <img src={project.image} alt={`imagem de ${project.title}`} />
    </div>
  );
}
