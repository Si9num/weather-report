import '../styles/preload.css'

export function Preloader(){
    
    return(
        <div className="preloader" >
            <div className="preloaderImg">
                <img src={require('../assets/logo.PNG')} alt='logo'></img>
            </div>
        </div>
    )
}