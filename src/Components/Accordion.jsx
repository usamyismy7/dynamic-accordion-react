import React, { useState } from 'react';

const dataCollection = [
    {
        question: 'What Is a Blockchain?',
        answer: 'A blockchain is a distributed database or ledger that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.'
    },
    {
        question: 'How Does a Blockchain Work?',
        answer: 'The goal of blockchain is to allow digital information to be recorded and distributed, but not edited. In this way, a blockchain is the foundation for immutable ledgers, or records of transactions that cannot be altered, deleted, or destroyed. This is why blockchains are also known as a distributed ledger technology (DLT).'
    },
    {
        question: 'Is Blockchain Secure?',
        answer: 'Blockchains are secured through a variety of mechanisms that include advanced cryptographic techniques and mathematical models of behavior and decision-making. Blockchain technology is the underlying structure of most cryptocurrency systems and is what prevents this kind of digital money from being duplicated or destroyed.'
    },
    {
        question: 'How Are Blockchains Used?',
        answer: 'As we now know, blocks on Bitcoin’s blockchain store data about monetary transactions. Today, there are more than 10,000 other cryptocurrency systems running on blockchain. But it turns out that blockchain is actually a reliable way of storing data about other types of transactions as well. Some companies that have already incorporated blockchain include Walmart, Pfizer, AIG, Siemens, Unilever, and a host of others. For example, IBM has created its Food Trust blockchain to trace the journey that food products take to get to their locations.'
    }
]

function Accordion() {
    const [accordion, setActiveAccordion] = useState(-1);

    function toggleAccordion(index){
        if(index === accordion) {
            setActiveAccordion(-1);
            return
        }
        setActiveAccordion(index);
    }
    return(
        <>
            <div className="container">
                <div>
                    <span className="accordion__title">Frequently asked questions</span>
                    <h1>Let's answer some of your questions</h1>
                </div>
                <div className="accordion__faq">
                    {dataCollection.map((item, index)=>
                        <div key={index} onClick={()=>toggleAccordion(index)}>
                            <div className="accordion__faq-heading">
                                <h3 className={accordion===index?"active":""}>{item.question}</h3>
                            </div>
                            <div>
                                {accordion === index ? (<><span className="vertical"></span></>) : (<><span className="horizontal"></span></>)}
                            </div>
                            <div>
                                <p className={accordion === index ? "active" : "inactive"}>{item.answer}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Accordion;