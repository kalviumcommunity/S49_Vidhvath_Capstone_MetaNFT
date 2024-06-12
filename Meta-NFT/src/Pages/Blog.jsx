import React from 'react';

// INTERNAL IMPORT 
import Style from '../styles/Blog.module.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className={Style.blog}>
      <div className={Style.blog_box}>
        <div className={Style.blog_box_heading}>
          <h1>Welcome to Our NFT Marketplace Blog</h1>
          <p>
            Welcome to the official blog of our NFT marketplace, where creativity meets the blockchain! Here, we explore the vibrant world of NFTs (Non-Fungible Tokens) and celebrate the artists, collectors, and enthusiasts who make this community so unique. Whether you're new to NFTs or a seasoned collector, our blog is your go-to resource for everything you need to know about the digital art revolution.
          </p>
        </div>
        <div className={Style.blog_box_mission}>
          <h2>Our Mission</h2>
          <p>
            At our NFT marketplace, we are passionate about empowering creators and collectors. Our mission is to provide a platform where artists can showcase their work, connect with a global audience, and earn recognition and revenue for their creations. Simultaneously, we offer collectors the opportunity to discover and invest in unique digital assets that resonate with their passions.
          </p>
        </div>
        <div className={Style.blog_box_content}>
          <h2>What You'll Find on Our Blog</h2>
          <div className={Style.blog_box_content_list}>
            <div className={Style.blog_box_content_item}>
              <h3>1. Artist Spotlights</h3>
              <p>Discover talented artists from around the world and learn about their creative process. From emerging talents to established names, we shine a spotlight on those who are shaping the future of digital art.</p>
            </div>
            <div className={Style.blog_box_content_item}>
              <h3>2. Collector's Corner</h3>
              <p>Dive into the world of NFT collecting. Get tips on how to start your collection, understand the value of NFTs, and explore different investment strategies.</p>
            </div>
            <div className={Style.blog_box_content_item}>
              <h3>3. Marketplace Updates</h3>
              <p>Stay up-to-date with the latest developments on our NFT marketplace. From new features and partnerships to exciting NFT drops, our blog keeps you informed.</p>
            </div>
            <div className={Style.blog_box_content_item}>
              <h3>4. Educational Content</h3>
              <p>Learn about blockchain technology, smart contracts, and how NFTs are transforming various industries. Our educational articles aim to demystify complex concepts and empower our community.</p>
            </div>
            <div className={Style.blog_box_content_item}>
              <h3>5. Community Stories</h3>
              <p>Hear from our community members, including artists, collectors, and industry experts. Their stories and experiences provide valuable insights into the NFT ecosystem.</p>
            </div>
          </div>
        </div>
        <div className={Style.blog_box_involved}>
          <h2>Get Involved</h2>
          <p>We invite you to join our community of creators and collectors. Whether you're an artist looking to showcase your work or a collector seeking unique digital assets, our NFT marketplace is here to support you. Follow our blog for the latest updates, sign up for our newsletter, and connect with us on social media to stay connected.</p>
        </div>
        <div className={Style.blog_box_connect}>
          <h2>Connect with Us</h2>
          <ul>
            <li><a href="https://www.linkedin.com/in/vidhvath-j/">Linkin</a></li>
            <li><a href="mailto:vidhvathj.2005@gmail.com">Email</a></li>
            <li><a href="https://x.com/VidhvathJ">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
        <div className={Style.blog_box_stay_tuned}>
          <h2>Stay Tuned!</h2>
          <p>Thank you for visiting our blog. We're excited to embark on this journey with you as we explore the limitless possibilities of NFTs. Stay tuned for inspiring stories, valuable insights, and a celebration of creativity in the digital age.</p>
          <p>Happy collecting!</p>
          <p>The MetaNFT </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
