import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import ModalVideo from 'react-modal-video'
// import PlayCircleOutlineSharpIcon from '@mui/icons-material/PlayCircleOutlineSharp';
import { Modal } from 'react-responsive-modal';
import HyperModal from 'react-hyper-modal';

const ModalTrailer = ({ dataMovie }) => {

    //Modal trailer
    // const [isOpen, setOpen] = useState(false)
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    const [dataTrailer, setDataTrailer] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${dataMovie.id}/videos?api_key=cf0710105c7cebaf3b51cf0e45affb42&language=en-US`)
            .then((res) => setDataTrailer(res.data.results[0]))
    }, []);

    const movieTrailer = `https://www.themoviedb.org/video/play?key=${dataTrailer.key}&width=557&height=313`


    return (
        <div>

            <HyperModal
                isOpen={open}
                requestClose={() => setOpen(false)}
            >
                <iframe id="inlineFrameExample"
                    title="Inline Frame Example"
                    width="100%"
                    height="100%"
                    src={movieTrailer} >
                </iframe>

            </HyperModal>
            <button onClick={() => setOpen(true)}> X</button>
        </div>
    );
};

export default ModalTrailer;

