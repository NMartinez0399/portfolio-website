export const AboutSection = () => {
    return (
        <section id='about' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    About <span className='text-primary'> Me</span>
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
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
                    </div>

                    <div>

                    </div>
                </div>

            </div>
        </section>
    );
}