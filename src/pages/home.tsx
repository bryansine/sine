import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import React, { useRef } from "react"

const Home: React.FC = () => {
    const homeRef = useRef<HTMLDivElement>(null);
  return (
    <section ref={homeRef} id="home" className="min-h-screen flex items-center">
        <div className="flex flex-col gap-6">
            <p className="text-primary lg:text-xl">Hi there, I'm</p>
            <div className="bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent lg:text-7xl text-4xl font-bold">
                <h1 className='font-grot'>Robert Muchiri</h1>
                <h1 className=''>I build and design software</h1>
            </div>
            <div className='text-muted-foreground lg:text-xl'>
                <p className=''>I’m a multi-disciplinary designer and developer who builds</p>
                <p className=''>software with an aesthetic touch; software that's both beautiful</p>
                <p className=''>and functional.</p>
            </div>
            <div className="flex items-center gap-2">
                <Button onClick={() => scrollToSection('case studies')}>Case Studies</Button>
                <Button variant={'ghost'} onClick={() => scrollToSection('contact')}>Let's talk</Button>
            </div>
        </div>
    </section>
  )
}

export default Home