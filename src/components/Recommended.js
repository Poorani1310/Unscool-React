import c1 from "../images/c1.jpg"
import c2 from "../images/c2.jpg"
import c3 from "../images/c3.jpg"
import c4 from "../images/c4.jpg"

function Recommended(){
    return(
        <div class="recommended">
        <h2>Recommended for you</h2>
        <p>Pick the best fit</p>
        <div class="card-container">
            <div>
                <img src={c1}/>
                <p>Python Data Visualisation Master Class</p>
                <p>Col Steel</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>1449 <del>2999</del></p>
            </div>
        
            <div>
                <img src={c2}/>
                <p>Python Data Visualisation Master Class</p>
                <p>Col Steel</p>
                <p>4.9 ⭐⭐⭐⭐⭐</p>
                <p>449 <del>999</del></p>
            </div>
        
            <div>
                <img src={c3}/>
                <p>Python Data Visualisation Master Class</p>
                <p>Col Steel</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>749 <del>1999</del></p>
            </div>
        
            <div>
                <img src={c4}/>
                <p>Python Data Visualisation Master Class</p>
                <p>Col Steel</p>
                <p>4.9 ⭐⭐⭐</p>
                <p>899 <del>1999</del></p>
            </div>
        </div>
    </div>
    )
}

export default Recommended