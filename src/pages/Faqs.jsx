import React from 'react'
import FaqItem from '../components/FaqItem'
import '../Styles/Faqs.css'



const Faq = () => {
  const faqsData = [
    {
      id: 0,
      questionText: 'What is ONE STOP Hospitallity Mangagement Solution?',
      answerText:
        'a hotel PMS built in the cloud to consistently meet and exceed modern guest expectations.',
    },
    {
      id: 1,
      questionText: 'What are the benefits of using ONE STOP?',
      answerText:
        '......................',
    },
    {
      id: 2,
      questionText:
        'Is ONE STOP right for my property?',
      answerText:
        '.........................',
    },
    {
      id: 3,
      questionText:'What features does ONE STOP offer?',
      answerText:
        '.................',
    },
    {
      id:4,
      questionText:'How much does ONE STOP offer?',
      answerText:'............',


    },
    {
      id:5,
      questionText:'What kind of support does ONE STOP offer?',
      answerText:'......'

    }
  ]
  return (
   
      
    <div className="app-container">
    <div className="faqs-card-container">
      <h1 className="heading">Frequently Asked Questions</h1>
      <ul className="faqs-list-container">
        {faqsData.map(eachFaq => (
          <FaqItem key={eachFaq.id} faqData={eachFaq} />
        ))}
      </ul>
    </div>
  </div>
        
    
  )
}

export default Faq