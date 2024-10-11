"use client";

import { AnimationScope, motion, MotionProps } from "framer-motion";
import React from "react";

type MotionDivTypes = {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
  reactRef?: AnimationScope;
} & MotionProps;

// To return motion.anyHtmlTag, becouse i dont want to make something like entire home page client side + its flexible, i know it hurts your eyes but it works :D
function MotionComponent({
  as: component = "div",
  children,
  className,
  reactRef,
  ...rest
}: MotionDivTypes) {
  const MotionComponent = motion[
    component as keyof typeof motion
  ] as React.ElementType;

  return (
    <MotionComponent
      ref={reactRef}
      className={className}
      {...rest}
      viewport={{ once: true }}
    >
      {children}
    </MotionComponent>
  );
}

export default MotionComponent;
