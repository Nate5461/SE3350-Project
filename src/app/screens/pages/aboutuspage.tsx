// AboutUsPage.tsx

import React from "react";
import Image from "next/image";
import "./style.css"; // Import your stylesheet

export const AboutUsPage = (): JSX.Element => {
  return (
    <div className="page">
      <div className="top-bar">
        <Image src="/OLLI.png" width={50} height={50} alt="logo" />
        <div className="title">Cheer</div>
        <div className="navigation">
          <div className="tab">Home</div>
          <div className="tab">Services</div>
          <div className="tab">Contact</div>
          <div className="tab">About Us</div>
        </div>
      </div>
      <div className="section" style={{ overflow: 'hidden' }}>
        <Image src="/OLLI.png" fill={true} alt='logo' objectFit="cover" />
        <div className="container">
          <p className="text-wrapper" style={{ backgroundColor: "rgba(250,250,250,0.2)", color: '#000' }}>
            About Us
          </p>
          <p className="description" style={{ backgroundColor: "rgba(250,250,250,0.2)", color: '#000' }}>
            CHEER Group consists of families caring for an adult with higher functioning intellectual disabilities.
            We pool our resources to share in hiring support workers on a 4:1 ratio.
            Sharing support worker wages means it costs far less than the usual 1:1 ratio.
            Many of our families feel that, while support is definitely required, the level of 1:1 is not necessary
            and the 1:4 is plenty of support for their person. We have two energetic full-time support staff,
            a part-time staff, and some volunteer grade 12 students. Currently, the rate is $13.50 per hour,
            as more attend the rate goes down. The Cheer Group Program can be paid through Passport funding!
            The best part is that attendees are spending time with their friends in their community!
            We follow a preset calendar of events published in the month prior.
            You sign up and pay for just what you use. There are even times when you can request some 1:1 support if needed.
            We have our clubhouse located at Rock Glen Family Resort and the use of their beautiful facilities,
            including an indoor pool, sauna, fitness centre, hall, and kitchen. Some of our projects are integrated
            with the wider community, and there are planned special outings each month.
            We focus on building life skills, social skills, and leisure skills. We aim to build in as much community inclusion
            as possible with a focus on the “normal”.
            Attendees must be able to look after their own self-care needs. Caregivers must be engaged, and
            interested in their person’s success and the success of the group as a whole.
            Family get-togethers and volunteering are a great part of this group.
            We chose the name CHEER as the Webster dictionary gives the definition as “shout for joy, in praise or encouragement,
            give comfort and support to.” Which fits exactly our purpose.
          </p>
          
        </div>
      </div>
    </div>
  );
};
