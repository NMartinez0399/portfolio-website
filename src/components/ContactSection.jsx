import { BirdIcon, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from '../lib/utils';
import { useToast } from '../hooks/use-toast'
import { useState } from "react";

export const ContactSection = () => {
    const { toast } = useToast(); // toast ui
    const [isSubmitting, setIsSubmitting] = useState(false); // to checks if form is submitting

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.target);

        formData.append('access_key', '3dcd3ca2-3f99-4ae9-8a9b-786d9f8af64b');

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch ("https://api.web3forms.com/submit", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json'
            },
            body: json,
        }).then((res => res.json));

        if (res.success) {
            console.log('Success', res);
        }

        setTimeout(() => {
            toast({
                title: 'Message sent!',
                description: 'Thank you for your message. I\'ll get back to you soon.',
            });
            setIsSubmitting(false);
        }, 1500); // imitates send message load time by 1.5secs
    };

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

                        {/* social media links */}
                        <div className='pt-8'>
                            <h4 className='font-medium mb-4'> Connect With Me</h4>
                            <div className='flex space-x-4 justify-center'>
                                <a href='#' target='_blank'>
                                    <Linkedin />
                                </a>
                                <a href='#' target='_blank'>
                                    <Instagram />
                                </a>
                                <a href='#' target='_blank'>
                                    <BirdIcon />
                                </a>
                                <a href='#' target='_blank'>
                                    <Facebook />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div 
                        className='bg-card p-8 rounded-lg shadow-xs' 
                        onSubmit={onSubmit} // calls toast function
                    >
                        <h3 className='text-2-xl font-semibold mb-6'> Send A Message</h3>

                        <form className='space-y-6'  >
                            {/* user name input section */}
                            <div>
                                <label 
                                    htmlFor='name' 
                                    className='block text-sm font-medium mb-2'
                                > 
                                    Your Name
                                </label>
                                <input 
                                    type='text' 
                                    id='name' 
                                    name='name' 
                                    required 
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' 
                                    placeholder='Nathan Martinez...'
                                />
                            </div>

                            {/* user email input section */}
                            <div>
                                <label 
                                    htmlFor='email' 
                                    className='block text-sm font-medium mb-2'
                                > 
                                    Your Email
                                </label>
                                <input 
                                    type='email' 
                                    id='email' 
                                    name='email' 
                                    required 
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' 
                                    placeholder='example@gmail.com'
                                />
                            </div>

                            {/* user message input section */}
                            <div>
                                <label 
                                    htmlFor='message' 
                                    className='block text-sm font-medium mb-2'
                                > 
                                    Your Message
                                </label>
                                <textarea 
                                    type='message' 
                                    id='message' 
                                    name='message' 
                                    required 
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none' 
                                    placeholder='Type message here...'
                                />
                            </div>

                            <button 
                                type='submit' 
                                disabled={isSubmitting}
                                className={cn(
                                    'cosmic-button w-full flex items-center justify-center gap-2',

                                )}
                            >
                                {isSubmitting ? "Submitting..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}