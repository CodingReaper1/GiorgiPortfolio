import EarthCanvas from "./EarthCanvas";
import { slideIn } from "../../_utils/motion";
import Section from "../Section";
import FlexBox from "../FlexBox";
import MotionDiv from "../MotionDiv";

import Form from "./Form";
import StarsCanvas from "./StarsCanvas";
import SectionHeadText from "../SectionHeadText";
import SectionSubText from "../SectionSubText";

function Contact() {
  return (
    <Section idName="Contact">
      <FlexBox className="relative z-20 flex-col-reverse gap-10 overflow-hidden py-20 dark:text-white xl:mt-12 xl:grid xl:grid-cols-[45fr_55fr]">
        <MotionDiv
          initial="hidden"
          whileInView="show"
          variants={slideIn(["left", "tween", 0.2, 1])}
          className="rounded-2xl border border-gray-300 bg-white p-6 shadow-md dark:border-none dark:bg-black-100 dark:shadow-none md:p-8"
        >
          <SectionSubText>GET IN TOUCH</SectionSubText>
          <SectionHeadText>Contact.</SectionHeadText>

          <Form />
        </MotionDiv>

        <MotionDiv
          initial="hidden"
          whileInView="show"
          variants={slideIn(["right", "tween", 0.2, 1])}
          className="z-10 h-[350px] md:h-[550px] xl:h-auto"
        >
          <EarthCanvas />
        </MotionDiv>

        <StarsCanvas />
      </FlexBox>
    </Section>
  );
}

export default Contact;
