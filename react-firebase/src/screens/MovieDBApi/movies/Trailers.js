import React from 'react';
import Modal from 'react-modal';
import Button from '@material-ui/core/Button';
import TrailerCarousel from "../components/TrailerCarousel/TrailerCarousel";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import '../../../Styles/TheMovieDBAPi/MovieTrailers.scss';
import Progress from "../../../Components/Progress/Progress";

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 : '90%',
        height                : 'auto',
        borderRadius          : '10px'
    }
};

Modal.setAppElement('#root')

export default function Trailers(props){
    // console.log(props.videos.video)
    let subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'orange';
    }

    function closeModal(){
        setIsOpen(false);
    }

    return (
        <div>
            <Button className='trailer-modal' variant="contained" color="secondary" onClick={openModal}>Trailers</Button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <h2 ref={_subtitle => (subtitle = _subtitle)}>Trailers</h2>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button onClick={closeModal} variant="outlined" color="primary">
                                close
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
                    {props.videos.video ?
                        <TrailerCarousel videos={props.videos.video}/>
                        :
                        <Progress/>
                    }
            </Modal>
        </div>
    );
}
