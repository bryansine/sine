import ContentLayout from "@/components/layout/content-layout";
// import { Button } from "@/components/ui/button";
// import { scrollToSection } from "@/lib/utils";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeInTransformVariant, fadeInVariant } from "@/lib/animationVariants";

const intro = ['Robert Muchiri', 'I build and design software']
const description = [
    'I’m a multi-disciplinary designer and developer',
    'who builds software with an aesthetic touch;',
    'software that is both beautiful and functional.'
]

const Home: React.FC = () => {
    const homeRef = useRef<HTMLDivElement>(null);
  return (
    <section ref={homeRef} id="home" className=" flex flex-col">
        <div className="min-h-[calc(100vh/3)]">
            
        </div>
        <ContentLayout
            title="software engineer"
            border={false}
        >
            {intro.map((text, index) => (
                <motion.h1
                variants={fadeInTransformVariant}
                initial='initial'
                whileInView='animate'
                custom={index}
                viewport={{ once: true }}
            >
                <div className="bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent text-4xl font-bold">
                    {text}
                </div>
            </motion.h1>))}
            <div className='text-muted-foreground lg:text-lg'>
                {description.map((text, index) => (
                <motion.p 
                    variants={fadeInVariant}
                    initial='initial'
                    whileInView='animate'
                    custom={index}
                    viewport={{ once: true }}
                    className=''>
                        {text}
                    </motion.p>))}
            </div>
        </ContentLayout>
        {/* <div className="flex flex-col gap-6"> */}
            {/* <p className="text-primary lg:text-xl">Hi there, I'm</p>
            <div className="bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent lg:text-7xl text-4xl font-bold">
                <h1 className=''>Robert Muchiri<br />I build and design software</h1>
            </div>
            <div className='text-muted-foreground lg:text-xl'>
                <p className=''>I’m a multi-disciplinary designer and developer who builds</p>
                <p className=''>software with an aesthetic touch; software that's both beautiful</p>
                <p className=''>and functional.</p>
            </div> */}
            {/* <div className="flex items-center gap-2">
                <Button onClick={() => scrollToSection('case studies')}>Case Studies</Button>
                <Button variant={'ghost'} onClick={() => scrollToSection('contact')}>Let's talk</Button>
            </div> */}
        {/* </div> */}
    </section>
  )
}

export default Home