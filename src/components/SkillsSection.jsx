const skills = [
    // Front end
    { name: 'HTML/CSS', level: 95, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'React', level: 75, category: 'frontend' },

    // Backend
    { name: 'Python', level: 80, category: 'backend' },
    { name: 'Node.js', level: 60, category: 'backend' },
    { name: 'Express.js', level: 60, category: 'backend' },

    // Tools
    { name:'Git/Github', level: 90, category: 'tools' },
    { name: 'VS Code', level: 90, category: 'tools' },
    { name: 'Docker', level: 10, category: 'tools' },
    { name: 'Figma', level: 10, category: 'tools' },
]

export const SkillsSection = () => {
    return (
        <section 
            id='skills' 
            className='py-24 px-4 relative bg-secondary/30'
        >
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    My <span className='text-primary'> Skills</span>
                </h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {skills.map((skill, key) => (
                        <div 
                            key={key} 
                            className='bg-card p-6 rounded-large shadow-xs card-hover'
                        >
                            <div className='text-left mb-4'>
                                <h3 className='font-semibold text-lg'> {skill.name}</h3>
                            </div>
                            <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}