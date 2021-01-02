import React from 'react'

const Text = ({dat}) => {
    return <div>
            {
dat.map((item,index)=>{
return <p key={index}>{item}</p>

            })
        }
        </div>

}

export default Text;
