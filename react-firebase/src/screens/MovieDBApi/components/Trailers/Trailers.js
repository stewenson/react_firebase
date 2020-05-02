import React from 'react';
import Modal from 'react-modal';
import Button from '@material-ui/core/Button';
import TrailerCarousel from "../../components/TrailerCarousel/TrailerCarousel";
import '../../../../Styles/TheMovieDBAPi/MovieTrailers.scss';
import Progress from "../../../../Components/Progress/Progress";

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 : '80%',
        height                : 'auto',
        borderRadius          : '10px',
        background            : 'rgba(1,1,1,1)'
    }
};

Modal.setAppElement('#root')

export default function Trailers(props){
    const [modalIsOpen,setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = 'orange';
    // }

    function closeModal(){
        setIsOpen(false);
    }

    return (
        <div>
            <Button className='trailer-modal' variant="contained" color="secondary" onClick={openModal}>Trailers</Button>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {props.videos.video ?
                    <TrailerCarousel videos={props.videos.video}/>
                    :
                    <Progress/>
                }
            </Modal>
        </div>
    );
}
