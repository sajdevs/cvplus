import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import  { Swiper,SwiperSlide } from 'swiper/react'
import '../css/home.css'
import 'swiper/css'
import { Link } from 'react-router-dom'
import { TemplateOne, TemplateSix, TemplateThree, TemplateTwo } from './Template'

export default function Home() {

  return (
    <div className='home-container'>
       <div className='home-header'>
         <div className='btns'>
           <Button variant='dark' className='buttons'>Read More</Button>
           <Button variant='dark' className='buttons'>Get Started</Button>
         </div>
       </div>
       <div className='tips-container'>
       <div className='tips-title'><p>Swipe to choose from our Template</p></div>
      <Swiper
            effect={"coverflow"}
        grabCursor={true}
        slidesPerView={2}
        spaceBetween={0}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        className='swiper'
          >
              <SwiperSlide className='swiper-slide'>
               <TemplateOne/>
               </SwiperSlide>
               <SwiperSlide className='swiper-slide'>
                  <TemplateTwo/>
              </SwiperSlide>
               <SwiperSlide className='swiper-slide'>
                   <TemplateThree/>
              </SwiperSlide>
               <SwiperSlide className='swiper-slide'>
                <TemplateSix/>
              </SwiperSlide>
              </Swiper>
       </div>
       <div className='template-carousel mt-5 container-fluid'>
        <Carousel>
           <Carousel.Item>
              <img alt='images' className='carousel-img' src={require('../asset/splash/spl00.jpg')} />
              <Carousel.Caption className='carousel-text'>
               <Link to='../component/resume/resume'> <Button variant='dark'>Create your functional Resume</Button></Link>
              </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
              <img alt='images' className='carousel-img' src={require('../asset/splash/spl02.jpg')} />
              <Carousel.Caption className='carousel-text'>
                <Link to='../component/Cvs/Cv'><Button variant='dark'>Get Your CV</Button></Link>
              </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
              <img alt='images' className='carousel-img' src={require('../asset/splash/spl03.jpg')} />
              <Carousel.Caption className='carousel-text'>
               <Link to='../component/CoverLetter/CoverLetter'><Button variant='dark'>Start your Cover Letter</Button></Link>
              </Carousel.Caption>
           </Carousel.Item>
         </Carousel>
       </div>
    </div>
  )
}
