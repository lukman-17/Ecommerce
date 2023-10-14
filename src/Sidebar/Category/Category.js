import Input from"../../components/Input";
import './Category.css';
import App from "../../App";
function Category({handleChange}){
    return(
    <div className="kl"> 
    <h2 className='sidebar-title'>Category</h2>

 <div> 
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test"/>
          <span className="checkmark"></span>All
      </label>
      <Input handleChange={handleChange}
        value="sneakers"
        title="Sneakers"
        name="test"
      />
      <Input handleChange={handleChange}
        value="sports"
        title="Sports"
        name="test"
      />
      <Input handleChange={handleChange}
        value="high ankel"
        title="High Ankel"
        name="test"
      />
     
     </div>

   </div>
   
    );
}
export default Category;