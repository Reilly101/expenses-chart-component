import React, {useState, useEffect} from 'react'
import ChartComp from './ChartComp'

export default function Footer() {
    const [amount,setAmount] = useState('--')


    const percentige = '+2.4%'

    useEffect(()=>{
        fetch('https://random-data-api.com/api/users/random_user')
        .then(d=>d.json())
        .then(data=>setAmount(data.id))
    },[])//invoced once after component is mounted

    return (
        <>
            <style jsx> {`
                .cardbottom {
                    background: ${amount%2 ? '#FFFBF6' : 'red'};
                    border-radius: ${100/5}px;
width: 540px;
height: 511px;
margin-top: 24px;
padding: 40px;
                }
                .spendingtitle {
                    color: #382314;
                    font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 42px;
padding-bottom: 66px;
                }
                .bottomcontainer {
                    display: flex;
                    justify-content: space-between;
                    width:460px;
                    height: 87px;
                    
                    
                }
                .title {
                    color: #92857A;
                    font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;
                }
                .moneyspend {
                    color: #382314;
                    font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 62px;
                }
                .calculated {
                 color: #382314;
                 font-family: 'DM Sans';
                 font-style: normal;
                 font-weight: 700;
                 font-size: 18px;
                 line-height: 23px;
                 text-align: right;
                }
                .period {
                    color: #92857A;
                    font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;
                } 
                .blockright {
                    margin-top: 25px;
                }
                .bottomcontainer {
                    margin-top: 36px;
                }
            `}
            </style>
            <div className="cardbottom">
                <div className = "spendingtitle">Spending-Last 7 days</div>
                <div className =  "barchart">
                    <ChartComp/>
                </div>
                <div className = "bottomcontainer">
                    <div className ="leftblock">
                    <div className ="title">Total this month</div>
                    <div className = 'moneyspend'>${amount}</div>
                    </div>
                    <div className ="blockright">
                    <div className = 'calculated'>{percentige}</div>
                    <div className = "period">from last month</div>
                    </div>
                </div>
        
        </div>
        </>
    )
}