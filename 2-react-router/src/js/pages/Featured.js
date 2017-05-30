import React from "react";

import Article from "../components/Article";

export default class Featured extends React.Component {
  render() {
    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
    ].map((title, i) => <Article key={i} title={title}/> );

    // const Articles = [
    //   <Article key={1} title={"Akash Details"} />,
    //   <Article key={2} title={"Banginwar Details"} />,
    //   <Article key={3} title={"BCA Details"} />,
    //   <Article key={4} title={"MCA Details"} />,
    //   <Article key={5} title={"MS Details"} />,
    //   <Article key={6} title={"DellEMC Details"} />
    // ];

    const adText = [
      "Ad spot #1",
    ];

    const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
    console.log("featured");
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              {randomAd}
            </div>
          </div>
        </div>

        <div class="row">{Articles}</div>
      </div>
    );
  }
}
