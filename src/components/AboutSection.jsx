import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id='about' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                {/* header for AboutSection */}
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    About <span className='text-primary'> Me</span>
                </h2>

                {/* divides into two sections: left and right */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    {/* left about section */}
                    <div  className='space-y-6'>
                        <h3 className='text-2xl font-semibold'>
                            Passionate Web Developer & Programmer
                        </h3>

                        <p className='text-muted-foreground'>
                            Speacializing and always refining my approach to building new, 
                            better, accessible and responsive web designs.
                        </p>

                        <p className='text-muted-foreground'>
                            Eager to work collborate with teams and clients to create 
                            exciting applications and technologies. Always willing to learn 
                            new techniques to improve accessibility and performance optimization.
                        </p>

                        {/* button that links to contact section */}
                        <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                            <a href='#contact' className='cosmic-button'>
                                {" "}
                                Get In Touch
                            </a>

                            {/* TODO: link proper CV */}
                            <a href='' className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* right about section with 3 cards */}
                    <div className='grid grid-cols-1 gap-6'>
                        <div className='gradient-border p-6 card-hover'> {/* card design */}
                            <div className='flex items-start gap-4'> {/* places icon at top left */}
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Code className='h-6 w-6 text-primary' /> {/* display icon */}
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Web Development</h4>
                                    <p className='text-muted-foreground'>
                                        Creating responsive websites and web applications with 
                                        modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'> {/* card design */}
                                <div className='p-3 rounded-full bg-primary/10'> {/* places icon at top left */}
                                    <User className='h-6 w-6 text-primary' /> {/* display icon */}
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                                    <p className='text-muted-foreground'>
                                        Designing intuitive user interfaces and seamless user 
                                        experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'> {/* card design */}
                                <div className='p-3 rounded-full bg-primary/10'> {/* places icon at top left */}
                                    <Briefcase className='h-6 w-6 text-primary' /> {/* display icon */}
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Project Management</h4>
                                    <p className='text-muted-foreground'>
                                        Leading projects from conception to completion with agile 
                                        methodologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}