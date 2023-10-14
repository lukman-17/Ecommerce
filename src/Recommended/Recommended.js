import Buttons from '../components/Buttons';
import './Recommended.css';

function Recommended({handleClick}){
    return(
<>
    <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className='recommended-flex'>
        <Buttons onClickHandler={handleClick} value="" title="All Products"/>
       <Buttons onClickHandler={handleClick} value="Nike" title="NIKE"/>
       <Buttons onClickHandler={handleClick} value="Adidas" title="ADIDAS"/>
       <Buttons onClickHandler={handleClick} value="Converse" title="CONVERSE"/>
       <Buttons onClickHandler={handleClick} value="New Balance" title="NEW BALANCE"/>
       <Buttons onClickHandler={handleClick} value="Asics" title="ASICS"/>
       </div>
    
    </div>
</>
    );
}
export default Recommended;