import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
    <section 
        id='hero'
        className='relative min-h-screen flex flex-col items-center justify-center px-4'
    >
        <div className='container max-w-4xl mx-auto text-center z-10'>
            <div className='space-y-6'>
                {/* displays first name with animated intro */}
                <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                    <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
                    <span className='text-primary opacity-0 animate-fade-in-delay-1'> Nathan</span>
                    <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'> Martinez</span>
                </h1>

                {/* small intro about section */}
                <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                    I am a self-taught back-end and front-end programmer.
                    Using my knowledge of HTML, SCSS, Javascript, React and Redux,
                    I create interfaces that are minimal, functional and easy to use.
                </p>

                {/* button that links to project section */}
                <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
                    <a href='#projects' className='cosmic-button'>
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        {/* floating cursor to indicate the user that scrolling down is an option */}
        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce'>
            <span className='text-sm text-muted-foreground mb-2'> Scroll </span>
            <ArrowDown className='h-5 w-5 text-primary' />
        </div>

    </section>
);
}