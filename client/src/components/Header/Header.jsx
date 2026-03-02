// 1.search functionality when clicked on search button only
import React, { useState } from 'react';
import './Header.css';
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';

export const Header = () => {
  const { setInput } = useAppContext();   // global context setter
  const [localInput, setLocalInput] = useState(''); // local state for input

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInput(localInput); // update context only on submit
  };

  return (
    <div className='header'>
      <div className='item'>
        <div className='header-item'>
          <p>New: AI feature integrated</p>
          <img src={assets.star_icon} alt="" />
        </div>

        <h1 className='title'>
          Your own <span className='text'>blogging</span> <br />
          <span>Platform.</span>
        </h1>

        <p className='description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="Search for Blog..."
            value={localInput}                     // controlled local input
            onChange={(e) => setLocalInput(e.target.value)}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  );
};







//2. this function or code is used to search  the input without clicking search button



// import React from 'react';
// import './Header.css';
// import { assets } from '../../assets/assets';
// import { useAppContext } from '../../context/AppContext';

// export const Header = () => {
//   const { input, setInput } = useAppContext();

//   const onSubmitHandler = (e) => {
//     e.preventDefault();
//     // nothing needed — input already in context
//   };

//   return (
//     <div className='header'>
//       <div className='item'>
//         <div className='header-item'>
//           <p>New: AI feature integrated</p>
//           <img src={assets.star_icon} alt="" />
//         </div>

//         <h1 className='title'>
//           Your own <span className='text'>blogging</span> <br />
//           <span>Platform.</span>
//         </h1>

//         <p className='description'>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         </p>

//         <form onSubmit={onSubmitHandler}>
//           <input
//             type="text"
//             placeholder="Search for Blog..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//           />
//           <button type='submit'>Search</button>
//         </form>
//       </div>
//     </div>
//   );
// };

