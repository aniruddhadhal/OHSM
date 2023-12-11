import React from 'react'
import Layout from '../components/Layout/Layout'
import Faq from './Faqs'
import "../Styles/Homepage.css"

const Home = () => {
  return (
    <Layout>
        <div className='Hedding'>
          <h4>Chose Your <span>Plan</span></h4>
          <p>Switch or cancel* anytime</p>

        </div>
        <div className='main'>
          <div className='div m-3'>
            <div className="sub">
            <h6>Feature</h6>
            <p>Ideal for</p>
            <p>Features</p>
            <p>Number of properties</p>
            <p>Channel management</p>
            <p>channels</p>
            <p>Boking engine <span>(costomizable)</span></p>
            <p>API access</p>
            <p>Dedicated account manager</p>
            <p>Priority support</p>
            </div>
            

          </div>
          <div className='div m-3'>
            <div className='starter'>
            <h6>Starter</h6>
            <p>Small business</p>
            <p>Basic</p>
            <p>1</p>
            <p>Up to 10</p>
            <p>NO</p>
            <p>No</p>
            <p>No</p>
            <p>No</p>
            <p>Starting at 19 points per month</p>
            <button className='btn btn-primary mb-2'>Start a Free 14-day trial</button>
            </div>

          </div>
          <div className='div m-3'>
            <div className='pro'>
            <h6>Pro</h6>
            <p>Growing business</p>
            <p>Advanced</p>
            <p>Up to 1</p>
            <p>Up to 100</p>
            <p>Yes</p>
            <p>Yes</p>
            <p>No</p>
            <p>Yes</p>
            <p>Starting at 49 points per month</p>
            <button className='btn btn-primary mb-2'>Talk to sales</button>
            </div>

          </div>
          <div className='div m-3'>
            <div className='flex'>
            <h6>Flex</h6>
            <p>Large business</p>
            <p>Custom</p>
            <p>Unlimited</p>
            <p>ALl channels</p>
            <p>Yes</p>
            <p>Yes</p>
            <p>Yes</p>
            <p>Yes</p>
            <p>Starting at 99 points per month</p>
            <button className='btn btn-primary mb-2'>Talk to sales</button>
            </div>

          </div>



        </div>
        <Faq/>
    </Layout>
  )
}

export default Home