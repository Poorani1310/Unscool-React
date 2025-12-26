import saleimg from "../images/sale_img_1.jpg"

function Saleimage(){
    return (
    <div class="sale_image">
        <img src={saleimg} alt="Sale image"/>
        <div class="sale_image__offer">
            <h3>Udemy Flash Sale! 24 hrs to save.</h3>
            <p>Get the top courses for just Rs499/- just one day to save but lifetime to learn.</p>
        </div>
    </div>)
}

export default Saleimage