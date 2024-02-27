import { Button } from "@/components/ui/button";
import { handleEmailClick } from "@/lib/utils";
import { CheckIcon, ClipboardCopyIcon } from "@radix-ui/react-icons";
import React, { useRef, useState } from "react";

const Contact: React.FC = () => {
    const contactRef = useRef<HTMLDivElement>(null);
    const [isCopied, setIsCopied] = useState(false);
  
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText('developedbyrobbie@gmail.com');
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    };
  return (
    <section ref={contactRef} id="contact" className="min-h-[calc(100vh-7rem)] flex items-center">
        <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 gap-4">
            <div className="text-muted-foreground">
                <h1 className="lg:text-5xl text-3xl font-bold">Have an opportunitity?</h1>
                <p className="text-right float-right max-w-[20rem]">I'm open for collaboration, feedback or simply having a chat feel free to reach out</p>
            </div>
            <div className="flex items-center gap-2 justify-self-center">
                <div
                    onClick={handleEmailClick}
                    className="lg:text-3xl text-lg font-bold cursor-pointer text-muted-foreground hover:text-accent-foreground transition-colors underline">
                    developedbyrobbie@gmail.com
                </div>
                <Button variant={'outline'} size={'icon'} onClick={handleCopy}>
                    {isCopied ? <CheckIcon />: <ClipboardCopyIcon />}
                </Button>
            </div>
        </div>
    </section>
  )
}

export default Contact;