import Input from '../../components/Input';
import './Price.css';
import App from '../../App';
function Price({handleChange}){
    return (
      
      <> 
       <div className='ml'>
        <h2 className='sidebar-title price-title'>Price</h2>

        <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2"/>
        <span className="checkmark"></span>All
        </label>
         
        <Input
          handleChange={handleChange}
          value={10000}
          title="0-10000"
          name="test2"
        
        />
         <Input
          handleChange={handleChange}
          value={15000}
          title="10000-15000"
          name="test2"
        />
         <Input
          handleChange={handleChange}
          value={20000}
          title="15000-20000"
          name="test2"
        />
  
    </div>
    </>
    );
};
export default Price;
