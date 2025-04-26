// components/Timeline.jsx
import React from "react";
import { motion } from "framer-motion";
import jQuery from 'jquery';
import styles from "./TimelineStyles.module.css";

const timelineData = [
  {
    year: "2020",
    title: "Started Learning Code",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg",
    description: "Began with HTML, CSS, and JavaScript.",
  },
  {
    year: "2021",
    title: "First Project",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-video.svg",
    description: "Built my first React app.",
  },
  {
    year: "2022",
    title: "Freelancing",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-music.svg",
    description: "Worked with clients on web design projects.",
  },
  {
    year: "2023",
    title: "Internship",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg",
    description: "Frontend Developer Intern at TechCorp.",
  },
];

// Initialize jQuery for smooth scrolling
jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});

const Timeline = () => {
  return (
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="timeline-item"
>
<section id="cd-timeline" class="cd-container">
		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Picture"/>
			</div> 

			<div class="cd-timeline-content">
				<h2>Title of section 1</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
				<a href="#0" class="cd-read-more">Read more</a>
				<span class="cd-date">Jan 14</span>
			</div> 
		</div> 

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg" alt="Movie"/>
			</div> 

			<div class="cd-timeline-content">
				<h2>Title of section 2</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
				<a href="#0" class="cd-read-more">Read more</a>
				<span class="cd-date">Jan 18</span>
			</div> 
		</div> 

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Picture"/>
			</div> 

			<div class="cd-timeline-content">
				<h2>Title of section 3</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.</p>
				<a href="#0" class="cd-read-more">Read more</a>
				<span class="cd-date">Jan 24</span>
			</div> 
		</div> 

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Location"/>
			</div>

			<div class="cd-timeline-content">
				<h2>Title of section 4</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
				<a href="#0" class="cd-read-more">Read more</a>
				<span class="cd-date">Feb 14</span>
			</div> 
		</div> 

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Location"/>
			</div> 

			<div class="cd-timeline-content">
				<h2>Title of section 5</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
				<a href="#0" class="cd-read-more">Read more</a>
				<span class="cd-date">Feb 18</span>
			</div> 
		</div>

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg" alt="Movie"/>
			</div> 

			<div class="cd-timeline-content">
				<h2>Final Section</h2>
				<p>This is the content of the last section</p>
				<span class="cd-date">Feb 26</span>
			</div>
		</div>
	</section> 
</motion.div>  
  );
};
export default Timeline;
