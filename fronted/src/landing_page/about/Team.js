import React from 'react'
function Team() {
    return ( 
        <div className='container'>
        <div className="row p-5  " > 
                <h1 className='text-center fs-3 mb-5'>People</h1>
                <div className='col-6 p-3 text-center'>
                    <img src='media/images/nithinKamath.jpg' style={{borderRadius:"150%",width:"60%"}}/>
                    <h5 className='mt-5'>Nithin Kamath</h5>
                    <h8 className="mt-5 text-muted">Founder, CEO</h8>
                    
                </div>
                <div className='col-6'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

<p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

<p>Playing basketball is his zen.</p>

<p>Connect on <a href='https://nithinkamath.me/' className=" text-decoration-none" >Homepage </a>/ <a href='https://tradingqna.com/u/nithin/summary'className=" text-decoration-none" >TradingQnA</a> / <a href='https://x.com/Nithin0dha'className=" text-decoration-none" >Twitter</a></p>

                </div>
            </div>
            </div>
     );
}

export default Team;