import React from 'react'

export default function Header () {
    let balance = 921.48

    return (
        <> 
        <style jsx> {`
            .cartheader {
                width: 540px;
                height: 125px;
                background: #EC755D;
                border-radius: 20px;
                padding: 10px;
                display: flex;
                align-items: center;
            }
            .balanceblock {
                margin-left: 32px;
                font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;
color: #FFFFFF;
            }
            .balancetext {
                width: 100px;
            }
            .total {
                font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 42px;
            }
            .circles {
                display: flex;
                flex-direction: row;
            padding-right: 39px;
            margin-left: 275px;
    
            }
            .whitecircle {
                height: 48px;
                width: 48px;
                border: 2px solid #FFFFFF;
                border-radius: 50%;
                z-index: 5;
                margin-right: -20px;
                

            }
            .blackcircle {
                height: 48px;
                width: 48px;
                border: 2px solid;
                border-radius: 50%;
                background:  #382314;
                
            }
        `}
        </style>
        <div className="cartheader">
            <div className = 'balanceblock'>
            <div className= 'balancetext'>My balance</div>
            <div className ='total'>${balance}</div>
            </div>
            <div className ='circles'>
                <div className ='whitecircle'></div>
                <div className ='blackcircle'></div>
            </div>
        </div>
    </>
    )
}