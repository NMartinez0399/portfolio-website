import { Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
    return (
        <section 
            id='contact' 
            className='py-24 px-4 relative bg-secondary/30'
        >
            {/* title for contact section */}
            <div className='continer mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'> 
                    Get In <span className='text-primary'> Touch</span>
                </h2>

                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Have any inquires or a projects to collabaorate on? Get in touch using the form below.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

                        {/* email form link and display */}
                        <div className='space-y-6 justify-center'>
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Mail className='h-6 w-6 text-primary' /> {/* email icon using lucile */}
                                </div>
                                <div>
                                    <h4 className='font-medium'> Email</h4>
                                    <a 
                                        href='mailto:nmartinez0399@gmail.com' // emails personal account
                                        className='text-muted-foreground hover:text-primary transition-colors'
                                    >
                                        nmartinez0399@gmail.com
                                    </a>
                                </div>
                            </div>
                            {/* phone number link and display */}
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Phone className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'> Phone</h4>
                                    <a 
                                        href='tel:+16263209327' // calls personal phone number
                                        className='text-muted-foreground hover:text-primary transition-colors'
                                    >
                                        +1 (626) 320-9327
                                    </a>
                                </div>
                            </div>
                            {/* location info and display */}
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <MapPin className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'> Location</h4>
                                    <a 
                                        className='text-muted-foreground hover:text-primary transition-colors'
                                    >
                                        Santa Clarita, CA, USA
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}