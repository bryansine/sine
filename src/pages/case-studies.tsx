import React, { useRef } from "react";
import data from '@/lib/case-studies';
import Card from "@/components/app/card";

const CaseStudies: React.FC = () => {
    const caseStudiesRef = useRef<HTMLDivElement>(null);
  return (
    <section ref={caseStudiesRef} id="case studies" className="min-h-screen">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-6">
            {data.map((item, index) => (
                <Card key={index} item={item}/> 
            ))}
        </div>
    </section>
  )
}

export default CaseStudies;