// // import React from 'react';
// // import Button from '@material-ui/core/Button';
// // import Dialog from '@material-ui/core/Dialog';
// // import ReactPlayer from "react-player";
// // // import '../../../Styles/TheMovieDBAPi/Responsive.scss';
// // import Modal from '@material-ui/core/Modal';
// // import { makeStyles } from '@material-ui/core/styles';
// //
// //
// // function rand() {
// //     return Math.round(Math.random() * 20) - 10;
// // }
// //
// // function getModalStyle() {
// //     const top = 50 + rand();
// //     const left = 50 + rand();
// //
// //     return {
// //         top: `${top}%`,
// //         left: `${left}%`,
// //         transform: `translate(-${top}%, -${left}%)`,
// //     };
// // }
// //
// // const useStyles = makeStyles((theme) => ({
// //     paper: {
// //         position: 'absolute',
// //         width: 400,
// //         backgroundColor: theme.palette.background.paper,
// //         border: '2px solid #000',
// //         boxShadow: theme.shadows[5],
// //         padding: theme.spacing(2, 4, 3),
// //     },
// // }));
// //
// // export default function Trailer() {
// //     const classes = useStyles();
// //     // getModalStyle is not a pure function, we roll the style only on the first render
// //     const [modalStyle] = React.useState(getModalStyle);
// //     const [open, setOpen] = React.useState(false);
// //
// //     const handleOpen = () => {
// //         setOpen(true);
// //     };
// //
// //     const handleClose = () => {
// //         setOpen(false);
// //     };
// //
// //     return (
// //         <React.Fragment>
// //             <div style={modalStyle} className={classes.paper}>
// //                 <h2 id="simple-modal-title">Text in a modal</h2>
// //                 <p id="simple-modal-description">
// //                     Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
// //                 </p>
// //             </div>
// //             );
// //
// //             return (
// //             <div>
// //                 <button type="button" onClick={handleOpen}>
// //                     Open Modal
// //                 </button>
// //                 <Modal
// //                     open={open}
// //                     onClose={handleClose}
// //                     aria-labelledby="simple-modal-title"
// //                     aria-describedby="simple-modal-description"
// //                 >
// //                     <div style={modalStyle} className={classes.paper}>
// //                         <h2 id="simple-modal-title">Text in a modal</h2>
// //                         <p id="simple-modal-description">
// //                             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
// //                         </p>
// //                     </div>
// //
// //                 </Modal>
// //             </div>
// //             {/*<Button variant="outlined" color="primary" onClick={handleClickOpen}>*/}
// //             {/*    Watch*/}
// //             {/*</Button>*/}
// //             {/*<Dialog*/}
// //             {/*    open={open}*/}
// //             {/*    onClose={handleClose}*/}
// //
// //             {/*>*/}
// //             {/*    <div className='player-wrapper'>*/}
// //             {/*        <ReactPlayer*/}
// //             {/*            className='react-player'*/}
// //             {/*            url='https://www.youtube.com/watch?v=SUXWAEX2jlg'*/}
// //             {/*            width='100%'*/}
// //             {/*            height='100%'*/}
// //             {/*        />*/}
// //             {/*    </div>*/}
// //             {/*</Dialog>*/}
// //
// //         </React.Fragment>
// //     );
// // }
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';
// import ReactPlayer from "react-player";
// import Iframe from "react-iframe";
// import '../../../Styles/TheMovieDBAPi/Responsive.scss';
//
// const useStyles = makeStyles((theme) => ({
//     modal: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     paper: {
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
// }));
//
// export default function Trailer() {
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(false);
//
//     const handleOpen = () => {
//         setOpen(true);
//     };
//
//     const handleClose = () => {
//         setOpen(false);
//     };
//
//     return (
//         <div>
//             <button type="button" onClick={handleOpen}>
//                 Watch
//             </button>
//             <Modal
//                 aria-labelledby="transition-modal-title"
//                 aria-describedby="transition-modal-description"
//                 className={classes.modal}
//                 open={open}
//                 onClose={handleClose}
//                 closeAfterTransition
//                 BackdropComponent={Backdrop}
//                 BackdropProps={{
//                     timeout: 500,
//                 }}
//             >
//                 {/*<Fade  in={open}>*/}
//                 {/*    <div in={open} className='player-wrapper'>*/}
//                 {/*        <ReactPlayer*/}
//                 {/*            className='react-player'*/}
//                 {/*            url='https://www.youtube.com/watch?v=SUXWAEX2jlg'*/}
//                 {/*            width='100%'*/}
//                 {/*            height='100%'*/}
//                 {/*            controls={true}*/}
//                 {/*        />*/}
//                 {/*    </div>*/}
//                     <Fade  in={open}>
//                         <div>
//                             <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
//                                     width="450px"
//                                     height="450px"
//                                     // display="initial"
//                                     // allowFullScreen={true}
//                                     allowFullScreen
//                             />
//                         </div>
//
//                 </Fade>
//             </Modal>
//         </div>
//     );
// }
//
// // <ReactPlayer
// //     className='react-player'
// //     url='https://www.youtube.com/watch?v=SUXWAEX2jlg'
// //     width='100%'
// //     height='100%'
// // />