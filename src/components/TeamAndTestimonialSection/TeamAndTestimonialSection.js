import React from 'react';
import './TeamSection.css';
import img_client1 from '../../assets/images/vince-veras-AJIqZDAUD7A-unsplash.jpg';
import img_client2 from '../../assets/images/christina-wocintechchat-com-PlikkWB79qs-unsplash.jpg';
import img_client3 from '../../assets/images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg';
import img_team1 from '../../assets/images/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg';
import img_team2 from '../../assets/images/itay-verchik-6ZKGBzrDd3I-unsplash.jpg';
import img_team3 from '../../assets/images/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.jpg';
import img_team4 from '../../assets/images/the-connected-narrative-N8lRH2uxih4-unsplash.jpg';

const TeamAndTestimonialSection = () => {
  return (
    <React.Fragment>
      <section className="team-section">
        <div className="team-header">
          <div className="team-titles">
            <h3 className="team-header-title">Meet Our Team</h3>
            <h2 className="team-header-subtitle">Experienced Team Members</h2>
          </div>
          <button className="browse-team-button">Browse Team <i className="fas fa-arrow-right"></i></button>
        </div>

        <div className="team-gallery">
          <div className="team-member">
          <img src={img_team1} alt="Team member 1" />
            <h3>Kristine Palmer</h3>
            <p>Chief Operation Officer</p>
          </div>
          <div className="team-member">
          <img src={img_team2} alt="Team member 2" />
            <h3>Mark Aubri</h3>
            <p>Senior Consultant</p>
          </div>
          <div className="team-member">
          <img src={img_team3} alt="Team member 3" />
            <h3>Kimberly Hansen</h3>
            <p>Senior Consultant</p>
          </div>
          <div className="team-member">
          <img src={img_team4} alt="Team member 4" />
            <h3>Justin Willoman</h3>
            <p>Senior Tech Consultant</p>
          </div>
        </div>

        <div className="dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      <div className="testimonials">
        <div className="title">
          <p>Testimonial</p>
          <h2>What Our Clients Say</h2>
        </div>

        <div className="testimonial-wrapper">
          <div className="testimonial">
            <div className="stars">★★★★★</div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
            <div className="client-info">
              <img src={img_client1} alt="Client image1" className="client-image"/>
              <div className="client-text">
                <p className="client-name">Cassandra Warren</p>
                <p className="client-title">Business Manager</p>
              </div>
            </div>
          </div>

          <div className="testimonial">
            <div className="stars">★★★★★</div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
            <div className="client-info">
              <img src={img_client2} alt="Client image2" className="client-image"/>
              <div className="client-text">
                <p className="client-name">Cassandra Warren</p>
                <p className="client-title">Business Manager</p>
              </div>
            </div>
          </div>

          <div className="testimonial">
            <div className="stars">★★★★★</div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
            <div className="client-info">
              <img src={img_client3} alt="Client image3" className="client-image"/>
              <div className="client-text">
                <p className="client-name">Cassandra Warren</p>
                <p className="client-title">Business Manager</p>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-button-wrapper">
          <button className="testimonial-button">All Reviews<i className="fas fa-arrow-right"></i></button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TeamAndTestimonialSection;
