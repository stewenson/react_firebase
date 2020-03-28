import React from 'react';
import { getDetailData } from "../../Redux/Actions/MovieActions/FetchDetailMovie";
import { clearDetailData } from '../../Redux/Actions/MovieActions/ClearDetailMovieData';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import {useDispatch ,useSelector} from "react-redux";
import DetailMovie from '../Pages/Movies/DetailMovie';
import Progress from "../Progress/Progress";
import '../../Styles/MovieStyle/DialogDetailStyle.scss';

export default function MovieDetailModal(props) {
    const content= useSelector(state => state);
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        dispatch(getDetailData(props.id));
    };

    const handleClose = () => {
        setOpen(false);
        dispatch(clearDetailData());
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    let data;
    if (content.detailMovie.detailData){
        const result = content.detailMovie.detailData;
        data = (
            <DetailMovie
            title={result.Title}
            img={result.Poster}
            rated={result.Rated}
            runtime={result.Runtime}
            year={result.Year}
            released={result.Released}
            boxoffice={result.BoxOffice}
            plot={result.Plot}
            language={result.Language}
            genre={result.Genre}
            director={result.Director}
            writer={result.Writer}
            actors={result.Actors}
            awards={result.Awards}
            imdblink={result.imdbID}
            production={result.Production}
        />);
    } else {
        data = (<Progress />);
    }
    return (
        <div className="DialogDetail">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Detail
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                style={{maxWidth: '100%'}}
            >
                <DialogContent>
                    {data}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
