import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PlayCircleOutlineSharpIcon from '@mui/icons-material/PlayCircleOutlineSharp';
import HyperModal from 'react-hyper-modal';
import { BtnTrailer } from './style';

const ModalTrailer = ({ dataMovie }) => {

    //Modal trailer
    // const [isOpen, setOpen] = useState(false)
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    const [dataTrailer, setDataTrailer] = useState(null);

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${dataMovie.id}/videos?api_key=cf0710105c7cebaf3b51cf0e45affb42&language=en-US`)
            .then((res) => setDataTrailer(res.data.results[1]))
    }, []);


    const movieTrailer = `https://www.themoviedb.org/video/play?key=${dataTrailer?.key}&width=1000&height=500`


    return (
        <div>
            <HyperModal
                isOpen={open}
                requestClose={() => setOpen(false)}
            >
                <iframe
                    width="100%%"
                    height="100%%"
                    src={movieTrailer} >
                </iframe>

            </HyperModal>
            {
                dataTrailer && <BtnTrailer onClick={() => setOpen(true)}>
                    <PlayCircleOutlineSharpIcon sx={{ color: 'white', fontSize: '41px', marginTop: '4px' }} />
                </BtnTrailer>
            }
        </div>
    );
};

export default ModalTrailer;