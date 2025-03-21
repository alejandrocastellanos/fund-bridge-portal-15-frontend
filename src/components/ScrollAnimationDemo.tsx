
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function ScrollAnimationDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[300px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-ftpurple dark:text-white">
              Join us in building <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                First Tuesday's Future
              </span>
            </h1>
          </>
        }
      >
        <div className="w-full h-full bg-gradient-to-br from-ftpurple-light to-ftpurple-dark flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
            alt="Community collaboration"
            className="mx-auto rounded-2xl object-cover h-full w-full object-center opacity-70"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center px-4">Help Us Grow</h2>
            <p className="text-lg md:text-xl max-w-2xl text-center px-6">
              Your support transforms First Tuesday from a labor-intensive movement into a scalable, 
              data-driven initiative—making business-led volunteerism easier and more impactful.
            </p>
            <button className="mt-8 ft-btn-primary bg-white text-ftpurple hover:bg-ftgray">
              Learn More
            </button>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}

export default ScrollAnimationDemo;
