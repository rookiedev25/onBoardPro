import React from 'react'

const FAQs = () => {
    const faqs = [
        {
            question: "What is the purpose of this dashboard?",
            answer: "This dashboard helps you monitor and manage your onboarding process efficiently."
        },
        {
            question: "Is my data secure?",
            answer: "Yes, we use industry-standard security measures to protect your data."
        },
        {
            question: "Who can access the dashboard?",
            answer: "Only authorized users with valid credentials can access the dashboard."
        },
        {
            question: "Where can I find support?",
            answer: "You can contact support via the 'Help' section or email us directly."
        },
        {
            question: "How often is the data updated?",
            answer: "Data is updated in real-time as changes occur."
        }
        ,
        {
            question: "Can I export dashboard data?",
            answer: "Yes, you can export data in CSV or PDF format from the dashboard."
        },
        {
            question: "What types of analytics are available?",
            answer: "The dashboard provides onboarding progress, completion rates, and user activity analytics."
        },
        {
            question: "How do I customize my dashboard view?",
            answer: "You can filter, sort, and rearrange widgets to personalize your dashboard experience."
        },
        {
            question: "Are notifications available for onboarding tasks?",
            answer: "This is planned for next version with important updates."
        }
    ]
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
                            {faq.answer}
                        </div>
                    </details>
                ))}
            </div>
        </div>
        <style jsx>{`
            details[open] > summary {
                margin-bottom: 10px;
            }
            details[open] > div {
                animation: slideDown 0.3s ease-in-out;
            }
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `}</style>
    </>
)
}

export default FAQs