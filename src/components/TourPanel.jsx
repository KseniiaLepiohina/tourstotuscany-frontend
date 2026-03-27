// import { Icon } from '@iconify/react'
// import NumberOfPeople from '../assets/svgs/NumberOfPeople.svg';
// import Tour from '../assets/svgs/Tour.svg';
// import Transport from '../assets/svgs/Transport.svg';
// import Types from '../assets/svgs/Types.svg'
// import { useGetAllToursByFiltesQuery } from '../services/tourApi';
// import { useSelector,useDispatch } from 'react-redux';
// import { setGroupSize,setTransport,setTitle } from '../slices/panelSlice';

// export default function Panel() {

//   return (
//     <section className="panel_wrapper">
//       <section>
//         <section className="btns_container">

//           <button className='public'>
//             <Icon icon="ic:baseline-public" color='#FA8B02' height={24} width={24} />
//             <h4>Public Tour</h4>
//           </button>

//           <button
//             className="private">
//             <img src={NumberOfPeople} alt='numberOfPeople' color='#FA8B02' />
//             <h4>Private Tour</h4>
//           </button>

//         </section>

//         <PublicTours />
//       </section>
//       <PrivateTours />

//     </section>
//   )
// }

// const PublicTours = () => {
//   const dispatch = useDispatch(); 
// const selectedGroupSize = useSelector((state)=> state.panel.group_size);
// const selectedTransport = useSelector((state)=> state.panel.transport);
// const selectedTitle = useSelector((state)=> state.panel.title);
// const {data:filter, isLoading, error} =  useGetAllToursByFiltesQuery({
// title: selectedTitle.trim() !== "" ? selectedTitle : undefined,
//   transport: selectedTransport.trim() !== "" ? selectedTransport : undefined,
//   group_size: selectedGroupSize !== "" ? Number(selectedGroupSize) : undefined});
// const getOptions = (key) => {
//     if (!filter) return [];
//     return [...new Set(filter.map(item => item[key]))];
//   };
// console.log("Отримані дані від API:", filter);
// const fullState = useSelector((state) => state.panel);
// console.log("Весь слайс панелі:", fullState);
// console.log("Error API:", error);
//   return (
//     <section className='panel_container' >
//       <section className='panel_search_body'>

//         <section className='panel_search_container'>
//           <img src={NumberOfPeople} alt='People' height={24} width={24} />
//           <section>
//             <h5>Number of people</h5>
//             <select 
//               value={selectedGroupSize} 
//               onChange={(e) => dispatch(setGroupSize(e.target.value))} // Оновлюємо Redux
//             >
//               <option value="">choose number of people</option>
//               {getOptions('group_size').map((size) => (
//                 <option key={size} value={size}>{size}</option>
//               ))}
//             </select>
//           </section>
//         </section>

//         <section className='panel_search_container' >
//           <Icon icon="system-uicons:calendar-month" height={24} width={24} />
//           <section >
//             <h5>Date</h5>
//             <select>
//               <option>
//                 Choose date
//               </option>
//             </select>
//           </section>
//         </section>

//         <section className='panel_search_container' >
//           <Icon icon="system-uicons:clock" height={24} width={24} />
//           <section >
//             <h5>Time</h5>
//             <select>
//               <option>
//                 Choose time
//               </option>
//             </select>
//           </section>
//         </section>

//         <section className='panel_search_container'>
//           <img src={Tour} alt='select tour' />
//           <section>
//             <h5>Tour</h5>
//             <select 
//               value={selectedTitle} 
//               onChange={(e) => dispatch(setTitle(e.target.value))}
//             >
//               <option value="">All Tours</option>
//               {getOptions('title').map((titleName) => (
//                 <option key={titleName} value={titleName}>{titleName}</option>
//               ))}
//             </select>
//           </section>
//         </section>

//         <section className='panel_search_container'>
//           <img src={Transport} alt='select transport' />
//           <section>
//             <h5>Transportation</h5>
//             <select 
//               value={selectedTransport} 
//               onChange={(e) => dispatch(setTransport(e.target.value))}
//             >
//               <option value="">Any</option>
//               {getOptions('transport').map((type) => (
//                 <option key={type} value={type}>{type}</option>
//               ))}
//             </select>
//           </section>
//         </section>

//       </section>
//       <button className='panel_search_btn' >
//         <Icon icon="akar-icons:search" color='#FFFFFF' height={32} width={32} />
//       </button>
//     </section>
//   )
// }


// const PrivateTours = () => {
//   return (
//     <section className='panel_container' >
//       <section className='panel_search_body'>

//         <section className='panel_search_container'>

//           <section className='panel_search_container' >
//             <Icon icon="system-uicons:calendar-month" height={24} width={24} />
//             <section >
//               <h5>Date</h5>
//               <select>
//                 <option>
//                   Choose date
//                 </option>
//               </select>
//             </section>
//           </section>

//           <section className='panel_search_container' >
//             <Icon icon="system-uicons:clock" height={24} width={24} />
//             <section >
//               <h5>Time</h5>
//               <select>
//                 <option>
//                   Choose time
//                 </option>
//               </select>
//             </section>
//           </section>

//           <section className='panel_search_container'  >
//             <img src={Tour} alt='select tour' />
//             <section>
//               <h5>Tour</h5>
//               <select>
//                 <option>
//                   Choose tour
//                 </option>
//               </select>
//             </section>
//           </section>

//           <section className='panel_search_container'>
//             <img src={Types} alt='select types' />
//             <section>
//               <h5>Types</h5>
//               <select>
//                 <option>
//                   Choose types
//                 </option>
//               </select>
//             </section>
//           </section>

//         </section>

//       </section>
//       <button className='panel_search_btn'>
//         <Icon icon="akar-icons:search" color='#FFFFFF' height={32} width={32} />
//       </button>
//     </section>
//   )
// }
