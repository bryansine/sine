import ContentLayout from "@/components/layout/content-layout";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeInTransformVariant, fadeInVariant } from "@/lib/animationVariants";


const intro = ['Hello, I\'m Bryan Sine', 'a software engineer driven to transform complex challenges into impactful and intuitive solutions.'];
const description = [
    "I'm passionate about leveraging technology",
    "to build a better future."
];

const Home: React.FC = () => {
    const homeRef = useRef<HTMLDivElement>(null);
  return (
    <section ref={homeRef} id="home" className=" flex flex-col">
        <div className="min-h-[calc(100vh/3)]"></div>
            
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
    </section>
  )
}

export default Home