import React from 'react'
import img1 from '../image/Vector.svg'
import{ ConnectWallet }from "@thirdweb-dev/react"
const PriviewId = () => {
  return (
    <div className='container'>
        <div className='pre_Id'>
                <div className='pri_id_img'>
                    <img src={img1} alt='logo' className='logoimg_priview'/>
                    <p>Preview ID</p>

                    <div className='input_btn'>
                        <input type='number' className='input_NUmber'/>
                        <button type='submit'>Search</button>
                    </div>
                </div>


                <div className='connect_btn'>
                    <ConnectWallet   switchToActiveChain={true}/>
                </div>
        </div>
    </div>
  )
}

export default PriviewId
