import { Icon } from '@iconify/react'
import NumberOfPeople from '../assets/svgs/NumberOfPeople.svg';
import Tour from '../assets/svgs/Tour.svg';
import Transport from '../assets/svgs/Transport.svg';
import Types from '../assets/svgs/Types.svg'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTours } from '../slices/fetchTours';

export default function Panel() {
const dispatch = useDispatch();

const searchParam = useSelector((state)=> state.fetchAvaliableTour.params);

const handleSearch = () => {
  dispatch(fetchTours(searchParam))
}
const handleParamChange = (key,value) => {
  dispatch(new Set [searchParam({...searchParam,[key]:value})]);
}

  return(
  <section style={{backgroundColor:"#FFFFFF20",padding:"1.25em",borderRadius:"0.75em"}}>
{/*Public Tour */}
    <section>
      <section style={{display:'flex'}}>
         <button
      style={{display:'flex',gap:"0.625em",padding:"1em 1em 1em 1em",alignItems:"baseline",backgroundColor:"#FFFFFFFF",borderRadius:"0.8em 0em 0em 0em"}}>
    
     <Icon
     icon="ic:baseline-public"
     color='#FA8B02'
     height={24}
     width={24}
     />   
     <h4>Public Tour</h4> 
      </button>


      <button
      style={{display:'flex',gap:"0.625em",padding:"1em 1em 1em 1em",alignItems:"baseline",backgroundColor:"#FFFFFFFF",borderRadius:"0em 0.8em 0.8em 0em"}}>
    <img
    src={NumberOfPeople}
    color='#FA8B02'
    />
     <h4>Private Tour</h4> 
      </button>
      </section>
     
       <section style={{display:"flex", alignItems:"flex-start",gap:"0.8em",padding:"0.8em",backgroundColor:"#FFFFFFFF",borderRadius:"0 0.8em 0.8em 0.8em"}} >
      <section style={{display:'flex',gap:"0.8em"}}>

      <section style={{display:"flex", alignItems:"baseline",gap:"0.2em"}}>
       <img
       src={NumberOfPeople}
       alt='Choose a number of people'
       height={24}
       width={24}
       />
        <section >
          <h5>Number of people</h5>
          <select onChange={(e)=> handleParamChange('group_size', e.target.value)}>
            <option>
              Choose number
            </option>
          </select>
        </section>
      </section>

       <section  style={{display:"flex",alignItems:"baseline",gap:"0.4em"}} >
        <Icon
        icon="system-uicons:calendar-month"
        height={24}
        width={24}
        />
        <section >
          <h5>Date</h5>
          <select>
            <option>
              Choose date
            </option>
          </select>
        </section>
      </section>

       <section  style={{display:"flex",alignItems:"baseline",gap:"0.4em"}} >
        <Icon
        icon="system-uicons:clock"
        height={24}
        width={24}
        />
        <section >
          <h5>Time</h5>
          <select>
            <option>
              Choose time
            </option>
          </select>
        </section>
      </section>

      <section style={{display:"flex",alignItems:"baseline",gap:"0.4em"}}  >
        <img
        src={Tour}
        />
        <section>
          <h5>Tour</h5>
          <select onChange={(e)=> handleParamChange('title', e.target.value)}>
            <option>
              Choose tour
            </option>
          </select>
        </section>
      </section>

      <section style={{display:"flex",alignItems:"baseline",gap:"0.4em"}}>
        <img
        src={Transport}
        />
        <section> 
          <h5>Transporation</h5>
          <select onChange={(e)=> handleParamChange('transport', e.target.value)}>
            <option>
              Choose transporation
            </option>
          </select>
        </section>
      </section>
 </section>
 <button
 onClick={handleSearch}
 style={{
  backgroundColor:"#FA8B02",
  borderRadius:"0.75em",
  height:"5em",
  width:"5em"

 }}
 >
 <Icon
 icon="akar-icons:search"
 color='#FFFFFF'
 height={32}
 width={32}
 />
 </button>
    </section>
   
    </section> 
    {/*PrivateTour */}
       <section>
    //PrivateTour
    <section style={{display:"flex", alignItems:"flex-start",gap:"0.8em",padding:"0.8em",backgroundColor:"#FFFFFFFF",borderRadius:"0 0.8em 0.8em 0.8em"}} >
      <section style={{display:'flex',gap:"0.8em"}}>

      <section style={{display:"flex", alignItems:"baseline",gap:"0.2em"}}>
       <section  style={{display:"flex",alignItems:"baseline",gap:"0.4em"}} >
        <Icon
        icon="system-uicons:calendar-month"
        height={24}
        width={24}
        />
        <section >
          <h5>Date</h5>
          <select>
            <option>
              Choose date
            </option>
          </select>
        </section>
      </section>

       <section  style={{display:"flex",alignItems:"baseline",gap:"0.4em"}} >
        <Icon
        icon="system-uicons:clock"
        height={24}
        width={24}
        />
        <section >
          <h5>Time</h5>
          <select>
            <option>
              Choose time
            </option>
          </select>
        </section>
      </section>

      <section style={{display:"flex",alignItems:"baseline",gap:"0.4em"}}  >
        <img
        src={Tour}
        />
        <section>
          <h5>Tour</h5>
          <select>
            <option>
              Choose tour
            </option>
          </select>
        </section>
      </section>

      <section style={{display:"flex",alignItems:"baseline",gap:"0.4em"}}>
        <img
        src={Types}
        />
        <section> 
          <h5>Types</h5>
          <select>
            <option>
              Choose types
            </option>
          </select>
        </section>
      </section>
      </section>
 <button
 style={{
  backgroundColor:"#FA8B02",
  borderRadius:"0.75em",
  height:"5em",
  width:"5em"

 }}
 >
 <Icon
 icon="akar-icons:search"
 color='#FFFFFF'
 height={32}
 width={32}
 />
 </button>
    </section>
   
    </section>
    </section>

      </section>
  )
}