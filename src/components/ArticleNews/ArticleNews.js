import React from 'react'
import '../ArticleNews/ArticleNews.css'
import img_backgroundlines1 from '../../assets/images/linkedin-sales-solutions-Mis5fyJi7Q0-unsplash.jpg';
import img_backgroundlines2 from '../../assets/images/emiliano-vittoriosi-vEN1bsdSjxM-unsplash.jpg';
import img_backgroundlines3 from '../../assets/images/kobu-agency-ipARHaxETRk-unsplash.jpg';
import img_backgroundlines4 from '../../assets/images/the-climate-reality-project-Hb6uWq0i4MI-unsplash.jpg';
import img_backgroundlines5 from '../../assets/images/damir-kopezhanov-nC6CyrVBtkU-unsplash.jpg';
import img_backgroundlines6 from '../../assets/images/annie-spratt-FSFfEQkd1sc-unsplash.jpg';
import img_backgroundlines7 from '../../assets/images/carlos-muza-hpjSkU2UYSU-unsplash.jpg';
import img_backgroundlines8 from '../../assets/images/marek-levak-zANXcXyByos-unsplash.jpg';
import img_backgroundlines9 from '../../assets/images/oli-dale-xjSkI_seiZY-unsplash.jpg';

import { Link } from 'react-router-dom';

const ArticleNews = () => {
  return (
    <section className="news-articles-section">
          <div className="news-articles-header">
            <div className="news-articles-titles">
              <h2 className="news-articles-header-subtitle">Our News & Articles</h2>
            </div>
          </div>
        
          <div className="news-articles-gallery">
                <div className="news-article">
                    <Link to="/newsdetails" className="news-article-link">
                        <img src={img_backgroundlines1} alt="Article image1"/>
                        <h2>Business</h2>
                        <h3>How To Use Digitalization</h3>
                    </Link>
                    <div className="news-date-box">
                        <div className="day">25</div>
                        <div className="month">Mar</div>
                    </div>
                    <h3>In The Classroom</h3>
                    <p>Lorem ipsum...</p>
                </div>

            <div className="news-article">
              <div className="news-date-box">
                <div className="day">17</div>
                <div className="month">Mar</div>
              </div>
              <img src={img_backgroundlines2} alt="Article image2"/> 
              <h2>Business</h2>
              <h3>How To Implement Chat GPT</h3>
              <h3>In Your Projects</h3>
              <p>Lorem ipsum...</p>
            </div>
            <div className="news-article">
              <div className="news-date-box">
                <div className="day">13</div>
                <div className="month">Mar</div>
              </div>
              <img src={img_backgroundlines3} alt="Article image3"/>
              <h2>Business</h2>
              <h3>The Guide To Support</h3>
              <h3>Modern CSS Design</h3>
              <p>Lorem ipsum...</p>
            </div>
            <div className="news-article">
              <div className="news-date-box">
                <div className="day">12</div>
                <div className="month">Mar</div>
              </div>
              <img src={img_backgroundlines4} alt="Article image1"/> 
              <h2>Business</h2>
              <h3>Why You Need To Implement The</h3>
            <h3>Five S's</h3>
              <p>Lorem ipsum...</p>
            </div>
            <div className="news-article">
              <div className="news-date-box">
                <div className="day">07</div>
                <div className="month">Mar</div>
              </div>
              <img src={img_backgroundlines5} alt="Article image2"/> 
              <h2>Business</h2>
              <h3>Get More Involved With Your</h3>
              <h3>End Users</h3>
              <p>Lorem ipsum...</p>
            </div>
            <div className="news-article">
              <div className="news-date-box">
                <div className="day">02</div>
                <div className="month">Mar</div>
              </div>
              <img src={img_backgroundlines6} alt="Article image3"/>
              <h2>Business</h2>
              <h3>Guided Tour Of Our New Head Office</h3>
              <h3>In Stockholm</h3>
              <p>Lorem ipsum...</p>
            </div>
            <div className="news-article">
              <div className="news-date-box">
                <div className="day">28</div>
                <div className="month">Feb</div>
              </div>
              <img src={img_backgroundlines7} alt="Article image1"/> 
              <h2>Business</h2>
              <h3>Using Business Intelligence To Get</h3>
              <h3>Insights Into Our Businesses</h3>
              <p>Lorem ipsum...</p>
            </div>
            <div className="news-article">
              <div className="news-date-box">
                <div className="day">18</div>
                <div className="month">Feb</div>
              </div>
              <img src={img_backgroundlines8} alt="Article image2"/> 
              <h2>Business</h2>
              <h3>Apple Has Released New Products. Are</h3>
              <h3>They Any Good?</h3>
              <p>Lorem ipsum...</p>
            </div>
            <div className="news-article">
              <div className="news-date-box">
                <div className="day">11</div>
                <div className="month">Feb</div>
              </div>
              <img src={img_backgroundlines9} alt="Article image3"/>
              <h2>Business</h2>
              <h3>How To Improve Your Teams And Get A</h3>
              <h3>Better Result</h3>
              <p>Lorem ipsum...</p>
            </div>

          </div>
        
          <div className="news-pagination">
    <button className="pagination-button"><i className="fas fa-chevron-left"></i></button>
    <button className="pagination-number">1</button>
    <button className="pagination-number">2</button>
    <button className="pagination-number">3</button>
    <button className="pagination-dots">...</button>
    <button className="pagination-number">9</button>
    <button className="pagination-button"><i className="fas fa-chevron-right"></i></button>
</div>


    </section>
  )
}

export default ArticleNews