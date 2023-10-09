import React from "react";
import { Container, Row } from "react-bootstrap";
import BoxPersonalInformation from "../components/ui/box/BoxPersonalInformation";
import directivosData from "../data/directivosData";
import imageResponsive from "../assets/profile-cover.jpg";

const BoardDirectorPage = () => {

  return (
    <>
      <Container className="pb-4">
        <div className="pb-4 mt-4 pt-4">
          <h1>
            Nuestra <span className="text-primary">Mesa directiva</span>
          </h1>
          <p>
            Choosing wedding vendors and wedding services for your ceremony and
            reception can be a daunting task. Finding the best vendors that fit
            into your budget takes time. Your first choices may already be
            booked. And you may not even be sure what the wedding of your dreams
            looks like yet. But every successful wedding day is the result of a
            team of professionals working together to take a couple's vision and
            turn it into reality. Don't think of researching and interviewing
            wedding vendors as a chore. Instead, think of it as the first step
            in your wedding planning journey - and one of the most important
            steps overall.
          </p>
        </div>
        <div className="pb-4">
          <img
            src={imageResponsive}
            alt="imagen representariva"
            className="mx-auto d-block img-fluid"
            style={{ minHeight: 500 }}
          />
        </div>
      </Container>
      <div className="section-secondary-grey">
        <Container>
          <Row>
            {directivosData.map((item, i) => {
              return (
                <BoxPersonalInformation key={i} {...item}
                    description={`Tim Chi is the Chief Executive Officer of The Knot Worldwide. After getting married in 2005, Tim set out to make wedding planning less stressful and frustrating. Together with his co-founders, Jeff, Lee, and Sonny, they threw four desks into his empty living room in Chevy Chase, Maryland and created WeddingWire, which became a leading global vendor marketplace serving the wedding industry, helping millions of engaged couples plan, execute and celebrate the most important day of their lives. WeddingWire grew to 1,000 employees worldwide and owned leading wedding brands in North America, Europe, South America and India. In 2019, Tim became CEO of The Knot Worldwide following the merger of XO Group Inc. (parent company of The Knot) and WeddingWire Inc.
<br><br>
Previously, Tim co-founded Blackboard Inc. in 1998. While at Blackboard, Tim pioneered many of Blackboard’s flagship products and strategic initiatives, bringing technology into the classrooms of colleges, universities and school districts across the world. During his tenure, the company raised over $100 million in capital and was taken public on the Nasdaq in 2004.
<br><br>
Tim holds a B.S. in operations research and industrial engineering from Cornell University and an M.S. in engineering management from Tufts University. He resides in Maryland with his family and is based out of The Knot Worldwide’s Chevy Chase headquarters.`}
                />
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BoardDirectorPage;
