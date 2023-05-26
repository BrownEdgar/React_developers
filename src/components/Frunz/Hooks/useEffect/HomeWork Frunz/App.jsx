import React, { useState, useEffect } from 'react'

import './App.css'

export default function App() {
	const [data, setData] = useState([
		{
			id: 1,
			question: "Ինչ է JSX-ը",
			answer: 'JSX-ը JavaScript-ի շարահյուսական ընդլայնումն է: Այն օգտագործվում է React-ի հետ՝ նկարագրելու համար, թե ինչպիսին պետք է լինի օգտատիրոջ միջերեսը: Օգտագործելով JSX, մենք կարող ենք գրել HTML կառուցվածքներ նույն ֆայլում, որը պարունակում է JavaScript կոդ:'
		},
        {
			id: 2,
			question: "Ինչպե՞ս եք թարմացնում բաղադրիչի վիճակը:",
			answer: 'Մենք կարող ենք թարմացնել բաղադրիչի վիճակը՝ օգտագործելով ներկառուցված «setState()» մեթոդը.'
		},
        {
			id: 3,
			question: "Ինչ է Redux-ը",
			answer: 'Redux-ը բաց կոդով JavaScript գրադարան է, որն օգտագործվում է հավելվածի վիճակը կառավարելու համար: React-ն օգտագործում է Redux-ը՝ օգտատիրոջ միջերեսը ստեղծելու համար: Այն JavaScript հավելվածների համար կանխատեսելի վիճակի կոնտեյներ է և օգտագործվում է ամբողջ հավելվածի պետական ​​կառավարման համար:'
		}
	])
	const [isShow, setIsShow] = useState(false);
    const [nextQuestion,setnextQuestion] = useState(0);

	const toggleShow = () => { 
		setIsShow(!isShow)
	}

   const  nextQuestions = () => {
    const next = nextQuestion +1>= data.length ? 0 : nextQuestion + 1;
    setnextQuestion(next)
    }
    useEffect(() => {
        setnextQuestion(0);
      }, [data]);
	return (
		<div className='wrap'>
			<div className={`box ${isShow ? 'active' : ''}`}>
				<div className="question">
					<p>{data[nextQuestion].question}</p>
					<button onClick={toggleShow}>show answer</button>
				</div>
				<div className="answer">
					<p>{data[nextQuestion].answer}</p>
					<button onClick={toggleShow}>hide answer</button>
                <button>Next</button>
				</div>
                <button onClick={nextQuestions}className='nextbtn'>Next</button>

			</div>
		</div>
	)
}
