import React from 'react';
import './HowToUseArticle.css';
import image1 from '../../assets/images/linkedin-sales-solutions-Mis5fyJi7Q0-unsplash.jpg'; 

const HowToUseArticle = () => {
  return (
    <div className="howtouse-section">
      <h2 className="howtouse-title">How To Use Digitalization</h2>
      <h2 className="howtouse-title">In The Classroom</h2>
      <p className="howtouse-subtitle">Mar 25, 2023 <span className="orange-dot"></span> Business <span className="orange-dot"></span> Kimberly Hansen</p>
      <div className="howtouse-row">
        <div className="howtouse-item">
          <img src={image1} alt="1"/>
          <div className="howtouse-text-content">
          </div>
        </div>
        <div className="search-bar-with-info">
    <div className="search-bar-container">
      <i className="fas fa-search search-icon"></i>
      <input type="text" placeholder="Type to search..." className="search-bar" />
    </div>
    <div className="info-box-container">
        <div className="info-box">
          <h3 className="info-box-title">Recent Posts</h3>
          <h4 className="info-box-subtitle">How To Blow Through Capital At An</h4>
          <h4 className="info-box-subtitle">Incredible Rate</h4>
          <p className="info-box-text">Jan 14, 2020</p>
          <hr />
          <h4 className="info-box-subtitle">How To Blow Through Capital At An</h4>
          <h4 className="info-box-subtitle">Incredible Rate</h4>
          <p className="info-box-text">Jan 14, 2020</p>
          <hr />
          <h4 className="info-box-subtitle">How To Blow Through Capital At An</h4>
          <h4 className="info-box-subtitle">Incredible Rate</h4>
          <p className="info-box-text">Jan 14, 2020</p>
          <hr />
          <h4 className="info-box-subtitle">How To Blow Through Capital At An</h4>
          <h4 className="info-box-subtitle">Incredible Rate</h4>
          <p className="info-box-text">Jan 14, 2020</p>
        </div>
        <div className="additional-info-box">
          <h3 className="info-box-title">Categories</h3>
            <h4 className="info-box-subtitle">Technology - <span className="gray-text">20 Posts</span></h4>
            <h4 className="info-box-subtitle">Freelancing - <span className="gray-text">07 Posts</span></h4>
            <h4 className="info-box-subtitle">Writing - <span className="gray-text">16 Posts</span></h4>
            <h4 className="info-box-subtitle">Marketing - <span className="gray-text">11 Posts</span></h4>
            <h4 className="info-box-subtitle">Business - <span className="gray-text">35 Posts</span></h4>
            <h4 className="info-box-subtitle">Education - <span className="gray-text">14 Posts</span></h4>
        </div>
      </div>
  </div>

        <p className="howtouse-content1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. In hac habitasse platea dictumst. Proin dignissim, nulla a tincidunt aliquet, dui est fermentum ligula, at fermentum metus urna vel elit. Curabitur dapibus iaculis volutpat. Sed in eros et justo facilisis lacinia. Pellentesque at neque mollis, vulputate odio at, vestibulum lorem.
        <br />
        <br />
        Integer nec odio praesent libero sed cursus ante dapibus diam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.
        <br />
        Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
        <br />
        <br />
        Integer nec odio praesent libero sed cursus ante dapibus diam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.
        Integer nec odio praesent libero sed cursus ante dapibus diam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.
        <br />
      </p>

      <blockquote className="howtouse-quote">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
      </blockquote>

      <p className="howtouse-content2">
        Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. In hac habitasse platea dictumst. Proin dignissim, nulla a tincidunt aliquet, dui est fermentum ligula, at fermentum metus urna vel elit. Curabitur dapibus iaculis volutpat. Sed in eros et justo facilisis lacinia. Pellentesque at neque mollis, vulputate odio at, vestibulum lorem.
      </p>
      </div>
      <div className="tags-container">
    <span className="tag">Digitalization</span>
    <span className="tag">School</span>
    <span className="tag">IT</span>
    <span className="tag">Design</span>
    <span className="tag">Work</span>
    <span className="tag">Tech</span>
  </div>
    </div>
  )
}

export default HowToUseArticle;
