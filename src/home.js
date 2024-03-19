import image from "./badbank.jpg"
export default function Home(){
    return(
        <>
        <div id="home">
         <h3>Welcome to <span id="span-1">Wiki</span>-<span id="span-2">BANK</span></h3>
         <img src={image} alt="home" height='200px' width='350px'></img>

         <h4>"Online banking"</h4>
         <p> Empowering Financial Knowledge and Inclusion</p>
          <p>Creating account deposit money and withdraw your money safely
            .</p>

        </div>
        
       
        </>
    )
}