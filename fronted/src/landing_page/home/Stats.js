import React from 'react'

function Stats() {
    return (
        <div className='container py-5'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-6 px-4'>
                    <h1 className='mb-4 fs-2'>Trust with confidnece</h1>
                    <h5>Customer-first always</h5>
                    <p className='ftext-muted'>That's why 1.3+ crore customers trust Zerodha with  3.5+ lakh crores rupees wirth of equity investments.</p>
                    <h5>No spam or gimmicks</h5>
                    <p className='ftext-muted'>No gimmicks, spam, "gamification", or annoying push notifications.High quality apps that you use at your pace, the way like.</p>
                    <h5>The Zerodha universe</h5>
                    <p className='ftext-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h5>Do better with money</h5>
                    <p className='ftext-muted'>With initiatives like Nudge and kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-12 col-md-6 px-4 text-center'>
                    <img
                        src='media/images/ecosystem.png'
                        className='img-fluid'
                        alt='ecosystem'
                        style={{maxWidth: '400px'}}
                    />
                    <div className='text-center mt-3'>
                        <a href='' className='d-inline-block mx-3' style={{textDecoration:"none"}}>Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' className='d-inline-block mx-3' style={{textDecoration:"none"}}>Try Kite demo</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;