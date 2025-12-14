import React from 'react'
function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h3> The Zerodha Universe</h3>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/zerodhaFundhouse.png' style={{width:'60%'}}/>
                    <p className='mt-3'><a  href="https://www.nseindia.com/"className="text-muted text-decoration-none">Asset management</a></p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/sensibullLogo.svg' style={{width:'60%'}}/>
                    <p className='mt-3'><a  href="https://sensibull.com/"className="text-muted text-decoration-none">Options trading platform</a></p>
                </div>
                 <div className='col-4 p-3 mt-5'>
                    <img src='media/images/goldenpiLogo.png' style={{width:'60%'}}/>
                    <p className='mt-3'><a  href="https://goldenpi.com/"className="text-muted text-decoration-none">Bonds trading platform</a></p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/streakLogo.png' style={{width:'60%'}}/>
                    <p className='mt-3'><a  href="https://www.streak.tech/home"className="text-muted text-decoration-none">Algo & strategy platform</a></p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/smallcaseLogo.png' style={{width:'60%'}}/>
                    <p className='mt-3'><a  href="https://smallcase.zerodha.com/"className="text-muted text-decoration-none">Thematic investment platform</a></p>
                </div>
                 <div className='col-4 p-3 mt-5'>
                    <img src='media/images/dittoLogo.png' style={{width:'50%'}}/>
                    <p className='mt-3'><a  href="https://joinditto.in/"className="text-muted text-decoration-none">Personalized advice</a></p>
                    
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:'20%',margin:"0 auto"}}>Sign up for free</button>


            </div>
        
        </div>
        
      );
}

export default Universe;