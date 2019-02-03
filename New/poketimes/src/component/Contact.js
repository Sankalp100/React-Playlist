import React from 'react'
import Rainbow from '../HOC/Rainbow'

const Contect  = (props) => {
    console.log(props)
    return (
        <div className="comtainer">
            <h4 className="center"> Contect </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem aspernatur, porro, ipsam nam quos accusantium modi repudiandae provident tempore sequi tempora voluptatum, assumenda minus pariatur. Fuga aliquam rerum ea sunt.</p>
            
        </div>
    )
}

export default Rainbow(Contect) 