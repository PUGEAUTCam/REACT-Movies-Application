import React from 'react';
import { BackdropImg, ContainerSynopsisTitle, ContainerTitle, ImgMovie, LikeContainer, SynopsisText, Tagline } from './style';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import { useLocalStorage } from '../../hooks/useLocalStorage'
import ModalTrailer from '../modalTrailer';

const ContainerMoviePage = ({ dataMovie }) => {
    const imagePoster = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${dataMovie.poster_path}`
    const imageBackdrop = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${dataMovie.backdrop_path}`

    const [like, setLike] = useLocalStorage('LIKE', 0);
    const [dislike, setDislike] = useLocalStorage('DISLIKE', 0);

    const handleAddLike = () => {
        setLike(like + 1)
    };

    const handleAddDislike = () => {
        setDislike(dislike + 1)
    };




    return (
        <div>
            <div>
                <BackdropImg src={imageBackdrop} alt={dataMovie.title} />
                <Tagline>{dataMovie.tagline}</Tagline>
            </div>

            <ContainerTitle>
                <ImgMovie src={imagePoster} alt={dataMovie.title} style={{ position: 'sticky' }} />

                <ContainerSynopsisTitle>
                    {/* Like */}
                    <LikeContainer>

                        <FavoriteBorderIcon
                            onClick={() => handleAddLike()}
                            sx={{ color: 'white' }}
                            fontSize="large"
                        />
                        <p style={{ color: 'white' }}>{like}</p>

                        <NotInterestedIcon
                            onClick={() => handleAddDislike()}
                            sx={{ color: 'white' }}
                            fontSize="large"
                        />
                        <p style={{ color: 'white' }}>{dislike}</p>

                        <ModalTrailer dataMovie={dataMovie} />

                    </LikeContainer>
                    <SynopsisText> {dataMovie.overview}</SynopsisText>
                </ContainerSynopsisTitle>
            </ContainerTitle>



        </div>

    );
};

export default ContainerMoviePage;
