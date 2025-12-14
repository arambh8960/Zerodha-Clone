import React from 'react'

function Footer() {
    return ( 
        <footer style={{backgroundColor:"rgb(250,250,250)"}}>
        <div className='container border-top mt-5' >
            <div className='row mt-5'>
                <div className='col-3'>
                    <img src='media/images/logo.svg' style={{width:"50%"}}/>
                    <p className='small text-muted'>
                        &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
                    </p>
                </div>

                <div className='col-3'>
                    <p className='fw-bold'>Company</p>
                    <div className='mt-3'>
                        <a href='' className='text-muted text-decoration-none mb-2 d-block'>About</a>
                        <a href='' className='text-muted text-decoration-none mb-2 d-block'>Products</a>
                        <a href='' className='text-muted text-decoration-none mb-2 d-block'>Pricing</a>
                        <a href='' className='text-muted text-decoration-none mb-2 d-block'>Referral programme</a>
                        <a href='' className='text-muted text-decoration-none mb-2 d-block'>Referral programme</a>
                        <a href='' className='text-muted text-decoration-none mb-2 d-block'>Careers</a>
                        <a href='' className='text-muted text-decoration-none mb-2 d-block'>Zerodha.tech</a>
                        <a href='' className='text-muted text-decoration-none mb-2 d-block'>Press & media</a>
                        <a href='' className='text-muted text-decoration-none mb-2 d-block'>Zerodha cares (CSR)</a>
                    </div>
                </div>

                <div className='col-3'>
                    <p className='fw-bold'>Support</p>
                    <div className='mt-3'>
                        <a href='' className='text-muted text-decoration-none d-block mb-2'>Contact</a>
                        <a href='' className='text-muted text-decoration-none d-block mb-2'>Support portal</a>
                        <a href='' className='text-muted text-decoration-none d-block mb-2'>Z-Connect blog</a>
                        <a href='' className='text-muted text-decoration-none d-block mb-2'>List of charges</a>
                        <a href='' className='text-muted text-decoration-none d-block mb-2'>Downloads & resources</a>
                    </div>
                </div>

                <div className='col-3'>
                    <p className='fw-bold'>Account</p>
                    <div className='mt-3'>
                        <a href='' className='text-muted text-decoration-none d-block mb-2'>Open an account</a>
                        <a href='' className='text-muted text-decoration-none d-block mb-2'>Fund transfer</a>
                        <a href='' className='text-muted text-decoration-none d-block mb-2'>60-day challenge</a>
                    </div>
                </div>
                </div>

            <div className='mt-5'>
            <p className=' small text-muted'>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

<p className='small text-muted'>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

<p className='small text-muted'>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

<p className='small text-muted'>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

<p className='small text-muted'>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>
</div>
<div className="d-flex flex-wrap gap-4 mt-4">
    <a  href="https://www.nseindia.com/"className="text-muted text-decoration-none">NSE</a>
    <a  href="https://www.bseindia.com/"className="text-muted text-decoration-none">BSE</a>
    <a href="https://www.mcxindia.com/"className="text-muted text-decoration-none">MCX</a>
    <a href=""className="text-muted text-decoration-none">Terms & conditions</a>
    <a href=""className="text-muted text-decoration-none">Terms & conditions</a>
    <a href=""className="text-muted text-decoration-none">Policies & procedures</a>
    <a href=""className="text-muted text-decoration-none">Privacy policy</a>
    <a href=""className="text-muted text-decoration-none">Disclosure</a>
    <a href=""className="text-muted text-decoration-none">For investor's attention</a>
   
</div>
        </div>
        </footer>
     );
}

export default Footer;
