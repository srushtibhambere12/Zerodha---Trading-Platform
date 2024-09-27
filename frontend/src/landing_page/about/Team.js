import React from "react";

function Team() {
  return (
    <div className="container about">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div className="row p-3 " style={{ lineHeight: "1.8" }}>
        <div className="col-lg-6 col-md-6 col-sm-12 p-4 text-center">
          <img src="media/images/nithinKamath.jpg" alt="img"></img>
          <h4 className="mt-4">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 p-4 about-content">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>
          Playing basketball is his zen.
          </p>

          <p>Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
