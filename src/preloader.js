import { useEffect } from 'react'
import './preload.css'

export function Preloader(){
    
    
    return(
        <div className="preloader" >
            <div className="preloaderImg">
                <img src={require('./assets/logo.PNG')}></img>
            </div>
        </div>
    )
}