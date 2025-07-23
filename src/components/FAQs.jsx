import React from 'react'

const FAQs = () => {

const faqs = [
    {
        question: "How long does the onboarding process take?",
        answer: "Ideally, onboarding takes 1 month, with 1 session per day."
    },
    {
        question: "Where can I get project-related details (Project Training & Duration)?",
        answer: [
            "A project lead will conduct your training.",
            "You should also plan your domain-specific training with your manager/buddy.",
            "Your project manager or buddy will connect you with a focal point for further guidance."
        ]
    },
    {
        question: "What internal apps do I need to use? How do I install SnagIt, Visio, or the Windows app?",
        answer: [
            "Details about SnagIt and Visio are available in the Drawing Tools card.",
            "The Windows app can be installed via the Company Portal."
        ]
    },
    {
        question: "Where can I find internal style guides and templates?",
        answer: "Your manager or buddy will share the relevant guides and templates with you."
    },
    {
        question: "What is the editorial review process workflow?",
        answer: [
            "Information about the editorial review process is available in the Optional section of the Training card.",
            "Your project specific work flow depends on the work flow followed by the team."
        ]
    },
    {
        question: "How do I raise concerns or issues to HR or other teams?",
        answer: [
            "Reach out to your manager.",
            "Follow the instructions shared during induction (usually sent to your personal email)."
        ]
    },
    {
        question: "How do I access community groups or forums?",
        answer: "You can join internal communities via Yammer."
    }
];

   
return (
    <>
        <div className="max-w-6xl mx-auto mt-20 p-8 bg-white rounded-2xl shadow-lg">
            <h2 className="text-center mb-8 font-bold text-3xl text-gray-900 animate-fade-in">
                Frequently Asked Questions
            </h2>
            <div>
                {faqs.map((faq, idx) => (
                    <details
                        key={idx}
                        className="mb-5 bg-gray-100 rounded-lg p-5 border-none shadow transition-all duration-300 ease-in-out hover:shadow-md"
                        style={{ animationDelay: `${idx * 100}ms` }}
                    >
                        <summary className="font-semibold text-lg cursor-pointer outline-none transition-colors duration-200 hover:text-blue-600">
                            {faq.question}
                        </summary>
                        <div className="mt-3 text-gray-700 text-base leading-relaxed transform transition-all duration-300 ease-in-out">
                            {faq.answer instanceof Array ? (
                                <ul className="list-disc pl-5 space-y-2">
                                    {faq.answer.map((line, lineIdx) => (
                                        <li key={lineIdx}>{line}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{faq.answer}</p>
                            )}
                        </div>
                    </details>
                ))}
            </div>
        </div>
        
    </>
)
}

export default FAQs