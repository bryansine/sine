import { navlinks, scrollToSection } from "@/lib/utils";
import { Button } from "../ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
  

const MobileNav: React.FC = () => {
  return (
    <div className="lg:hidden">
        <Sheet>
            <SheetTrigger>
                <Button variant={'outline'}><HamburgerMenuIcon /></Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle>
                    <p className="cursor-pointer text-2xl text-accent-foreground transition-colors font-bold" onClick={() => scrollToSection('home')}>muchiri</p>
                </SheetTitle>
                <SheetDescription className="flex flex-col text-left gap-4">
                    <ul className="capitalize text-lg">
                        {navlinks.map((link, index) => (
                            <li className='cursor-pointer text-muted-foreground transition-colors hover:text-accent-foreground' key={index} onClick={() => scrollToSection(link)}>{link}</li>
                        ))}
                    </ul>
                    <Button variant={'outline'} className="">View CV</Button>
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileNav;