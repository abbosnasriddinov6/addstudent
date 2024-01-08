// import * as React from 'react';
// import Reactt, { useState } from 'react';
// import PropTypes from 'prop-types';
// import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// import { useSpring, animated } from '@react-spring/web';

// const Fade = React.forwardRef(function Fade(props, ref)  {
//   const {
//     children,
//     in: open,
//     onClick,
//     onEnter,
//     onExited,
//     ownerState,
//     ...other
//   } = props;
//   const style = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: open ? 1 : 0 },
//     onStart: () => {
//       if (open && onEnter) {
//         onEnter(null, true);
//       }
//     },
//     onRest: () => {
//       if (!open && onExited) {
//         onExited(null, true);
//       }
//     },
//   });

//   return (
//     <animated.div ref={ref} style={style} {...other}>
//       {React.cloneElement(children, { onClick })}
//     </animated.div>
//   );
// });

// Fade.propTypes = {
//   children: PropTypes.element.isRequired,
//   in: PropTypes.bool,
//   onClick: PropTypes.any,
//   onEnter: PropTypes.func,
//   onExited: PropTypes.func,
//   ownerState: PropTypes.any,
// };

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };



// export default function SpringModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const [person, setPerson] = useState({
//     firstName: '',
//     lastName: '',
//     phone: 0,
//   });
//   const [student, setStudent] = useState({
//     firstName: '',
//     lastName: '',
//     phone: 0,
//   });

//   const addStudent = (e) => {
//     e.preventDefault();
//     setStudent(person);
//   };

//   return (
    
//     <div>
      
//       <Button onClick={handleOpen}>Add Student</Button>
//       <Modal
      
//         aria-labelledby="spring-modal-title"
//         aria-describedby="spring-modal-description"
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         slots={{ backdrop: Backdrop }}
//         slotProps={{
//           backdrop: {
//             TransitionComponent: Fade,
//           },
//         }}
//       >
//         <Fade in={open}>
//           <Box sx={style}>
//           <div className="w-50 mx-auto">
//       <form onSubmit={addStudent}>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="firstName">
//             Firstname
//           </label>
//           <input
//             className="form-control"
//             type="text"
//             name="firstName"
//             id="firstName"
//             value={person.firstName}
//             onChange={(e) =>
//               setPerson({
//                 ...person,
//                 firstName: e.target.value,
//               })
//             }
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="lastName">
//             LastName
//           </label>
//           <input
//             className="form-control"
//             type="text"
//             name="lastName"
//             id="lastName"
//             value={person.lastName}
//             onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="phone">
//             phone
//           </label>
//           <input
//             className="form-control"
//             type="number"
//             name="age"
//             id="age"
//             value={person.age}
//             onChange={(e) => setPerson({ ...person, age: e.target.value })}
//           />
//         </div>
//         <button type="submit" className="btn btn-dark btn-block w-100">
//           Add student
//         </button>
//       </form>
//       <div className="my-5">
//         <h2>
//           {student.firstName} {student.lastName}{' '}
//           {student.age ? student.age : ''}
//         </h2>
//       </div>
//     </div>

//           </Box>
//         </Fade>
//       </Modal>
//     </div>
//   );
// }

import React, { useState } from 'react';

const FuncStudent = () => {
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    age: 0,
  });
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    age: 0,
  });

  const addStudent = (e) => {
    e.preventDefault();
    setStudent(person);
  };
  return (
    <div className="divinput">
      <form onSubmit={addStudent}>
        <div className="mb">
          <label className="label " htmlFor="firstName">
            <h4 className='text'>Firstname</h4>
          </label>
          <input
            className="form"
            type="text"
            name="firstName"
            id="firstName"
            placeholder='Firstname...'
            value={person.firstName}
            onChange={(e) =>
              setPerson({
                ...person,
                firstName: e.target.value,
              })
            }
          />
        </div>
        <div className="mb">
          <label className="" htmlFor="lastName">
            <h4 className='text'>LastName</h4>
          </label>
          <input
            className="form"
            type="text"
            name="lastName"
            id="lastName"
            placeholder='Lastname...'
            value={person.lastName}
            onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
          />
        </div>
        <div className="mb">
          <label className="label" htmlFor="age">
          <h4 className='text'>Phone</h4>
          </label>
          <input
            className="form"
            type="text"
            name="age"
            id="age"
            placeholder='Tel...'
            value={person.age}
            onChange={(e) => setPerson({ ...person, age: e.target.value })}
          />
        </div>
        <button type="submit"  className='button'>
          Add cantact
        </button>
      </form>
      <div className="my">
        <h2>
          {student.firstName} {student.lastName}  {' '}
          {student.age ? student.age : ''} 
        </h2>
        
          <button className='dele'>Edit</button>
          <button className='dele'>Delete</button>
        
      </div>
    </div>
  );
};

export default FuncStudent;
