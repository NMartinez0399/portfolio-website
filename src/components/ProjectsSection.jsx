import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'Random Quote Generator',
        description: 'App that displays a random quote and can tweet/X it.',
        image: '/projects/random-quote-app.png',
        tags: ['React'],
        demoUrl: '#',
        githubUrl: '#',
    },
    {
        id: 2,
        title: 'True or False',
        description: 'App that indicates whether the two data types match or not.',
        image: '/projects/true-or-false-app.png',
        tags: ['JavaScript', 'HTML', 'CSS'],
        demoUrl: '#',
        githubUrl: '#',
    },
    {
        id: 3,
        title: 'Your Food\'s Gotten Cold',
        description: 'Short visual novel made in 2 days.',
        image: '/projects/your-foods-gotten-cold-app.png',
        tags: ['Godot'],
        demoUrl: '#',
        githubUrl: '#',
    },
];

export const ProjectsSection = () => {
    return (
        <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                {/* Projects section title and description */}
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'> 
                    Featured <span className='text-primary'> Projects </span>
                </h2>

                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Here are some of my recent projects. Please explore the live demo and gitHub repos.
                </p>

                {/* maps through project and displays each one in 3 grid col */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, id) => (
                        <div 
                            key={id} 
                            className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'
                        >
                            <div className='h-48 overflow-hidden'>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    // fills square and image expands within when hovered over
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                            </div>

                            {/* displays tags for each project to see which skill is associated */}
                            <div className='p-6'>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tags.map((tag) => (
                                        <span 
                                            className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            
                                {/* displays project name underneath tags */}
                                <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                                {/* displays project description underneath title */}
                                <p className='text-muted-foreground text-xs mb-4'>{project.description}</p>
                                {/* displays and links to github/live project */}
                                <div className='flex justify-between items-center'>
                                    <div className='flex space-x-3'>
                                        <a 
                                            href={project.demoUrl} 
                                            target='_blank'
                                            className='text-foreground/80 hover:text-primary duration-300'
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a 
                                            href={project.githubUrl}
                                            target='_blank' 
                                            className='text-foreground/80 hover:text-primary duration-300'
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Link to github profile */}
                <div className='text-center mt-12'>
                    <a 
                        className='cosmic-button w-fit flex items-center mx-auto gap-2'
                        target='_blank'
                        href='https://github.com/NMartinez0399'
                    >
                        Check Out My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};