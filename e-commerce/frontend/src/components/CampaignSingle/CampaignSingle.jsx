import React from 'react'
import "./CampaignSingle.css"

export const CampaignSingle = () => {
  return (
    <section className="campaign-single">
    <div className="container">
      <div className="campaign-wrapper">
        <h2>New Season Sale</h2>
        <strong>40% OFF</strong>
        <span></span>
        <a href="#" className="btn btn-lg">
          SHOP NOW
          <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>
  );
};
export default CampaignSingle;

