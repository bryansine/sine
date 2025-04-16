import ContentLayout from "@/components/layout/content-layout";
import { useRef } from "react";
import { motion } from "framer-motion";
import { fadeInTransformVariant, fadeInVariant } from "@/lib/animationVariants";
import { tech } from "@/lib/utils";

const intro = [
    "I'm driven by the challenge of engineering software that solves complex problems with both efficiency and visual appeal.",
    "I strive to create solutions that not only function flawlessly but also leave a positive and lasting impression on the user."
];


const description = [
    "My journey in the software industry has equipped me with a diverse skill set and a strong command of various tools, which I apply with precision to my work.",
    "I'm proud of my progress and the expertise I've gained, and I'm confident in my ability to continue growing and reaching new heights in my career."
];
const About = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
  return (
    <section ref={aboutRef} id="about">
        <ContentLayout
            title="about"
            border={true}
        >
            <div className="max-w-3xl space-y-4 lg:mb-36">
                <h3 className="text-lg font-bold">
                    {intro.map((text, index) => (
                    <motion.h1
                        variants={fadeInTransformVariant}
                        initial='initial'
                        whileInView='animate'
                        custom={index}
                        viewport={{ once: true }}
                    >
                        {text}
                    </motion.h1>))}
                </h3>
                <p className="text-muted-foreground">
                    {description.map((text, index) => (
                    <motion.h1
                        variants={fadeInVariant}
                        initial='initial'
                        whileInView='animate'
                        custom={index}
                        viewport={{ once: true }}
                    >
                        {text}
                    </motion.h1>))}
                </p>
            </div>
            <div className="">
                <ContentLayout
                    title="technologies"
                    border={true}
                >
                    <div className="lg:space-y-4 md:space-y-4 lg:block md:block gap-2 flex">
                        {tech.map((item, index) => (
                            <div className="lg:grid md:grid grid-cols-5" key={index}>
                                <motion.h3
                                    className="capitalize"
                                    variants={fadeInTransformVariant}
                                    initial='initial'
                                    whileInView='animate'
                                    custom={index}
                                    viewport={{ once: true }}
                                >
                                    {item.title}
                                </motion.h3>
                                {item.items.map((tech, index) => (
                                    <motion.div
                                        className="text-muted-foreground"
                                        key={index}
                                        variants={fadeInVariant}
                                        initial='initial'
                                        whileInView='animate'
                                        custom={index}
                                        viewport={{ once: true }}
                                    >
                                        <p className="lg:hidden">{tech.includes('/') ? `${tech.split('/')[1]}` : `${tech}`}</p>
                                        <p className="hidden lg:block">{tech}</p>
                                    </motion.div>
                                ))}
                            </div>
                        ))}
                    </div>
                </ContentLayout>
            </div>
        </ContentLayout>
    </section>
  )
}

export default About