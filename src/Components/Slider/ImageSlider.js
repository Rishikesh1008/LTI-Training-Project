import React, { useState , useEffect } from 'react';
// import goaa from './Images/goa.jpg';
import { SliderData } from './SliderData';
import './slider.css'
import $ from 'jquery'

const ImageSlider = ({ slides }) => {

  
  return (
    <div class="container py-4">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="2000">  
            <ol class="carousel-indicators">  
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>  
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>  
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>  
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>  
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>  
            </ol>  
            <div class="carousel-inner">  
                <div class="carousel-item active">  
                    <img src={SliderData[0].image} alt="Slider-1" />  
                    <div class="carousel-caption">  
                        {/* <h5>Slider-1</h5>  
                        <p>This is slider-1</p>   */}
                    </div>  
                </div>  
                <div class="carousel-item">  
                    <img src={SliderData[1].image} alt="Slider-2" />  
                    <div class="carousel-caption">  
                        {/* <h5>Slider-2</h5>  
                        <p>This is slider-2</p>   */}
                    </div>  
                </div>  
                <div class="carousel-item">  
                    <img src={SliderData[2].image} alt="Slider-3" />  
                    <div class="carousel-caption">  
                        {/* <h5>Slider-3</h5>  
                        <p>This is slider-3</p>   */}
                    </div>  
                </div>  
                <div class="carousel-item">  
                    <img src={SliderData[3].image} alt="Slider-4" />  
                    <div class="carousel-caption">  
                        {/* <h5>Slider-4</h5>  
                        <p>This is slider-4</p>   */}
                    </div>  
                </div>  
                <div class="carousel-item">  
                    <img src={SliderData[4].image}alt="Slider-5" />  
                    <div class="carousel-caption">  
                        {/* <h5>Slider-5</h5>  
                        <p>This is slider-5</p>   */}
                    </div>  
                </div>
            </div>  
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">  
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>  
                <span class="sr-only">Previous</span>  
            </a>  
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">  
                <span class="carousel-control-next-icon" aria-hidden="true"></span>  
                <span class="sr-only">Next</span>  
            </a>  
        </div> 
    </div> 
  );
};

export default ImageSlider;