import React, { useEffect, useState } from "react";
import {
  Container,
  Col,
  Card,
  Button,
  Form,
  FormControl
} from "react-bootstrap";
import ArtistsMiddleware from "../store/Middleware/ArtistsMiddleWare";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer.jsx";
import { FaPlay, FaHeart } from "react-icons/fa";
import { Spinner } from "../Components/Spinner/Spinner.js";
import { useDispatch, useSelector } from "react-redux";
import LibraryMiddleware from "../store/Middleware/LibraryMiddleware";

const App = () => {
  const [playing, setPlaying] = useState({});
  const [playingImage, setPlayingImage] = useState({});
  const [playingDesc, setPlayingDesc] = useState(null);
  const [playingArtist, setPlayingArtist] = useState(null);

  const [HideAlbumOne, setHideAlbumOne] = useState(false);
  const [HideAlbumTwo, setHideAlbumTwo] = useState(false);
  const [HideAlbumThree, setHideAlbumThree] = useState(false);
  const dispatch = useDispatch();
  const {
    displaySpinner,
    displaySpinnerTwo,
    displaySpinnerThree,
    artists,
    artistsTwo,
    artistsThree
  } = useSelector(state => ({
    artists: state.artistsReducer.artists,
    artistsTwo: state.artistsReducer.artistsTwo,
    artistsThree: state.artistsReducer.artistsThree,
    displaySpinner: state.artistsReducer.displaySpinner,
    displaySpinnerTwo: state.artistsReducer.displaySpinnerTwo,
    displaySpinnerThree: state.artistsReducer.displaySpinnerThree
  }));
  const artistNames = {
    one: "The Beatles",
    two: "Queen",
    three: "Bee Gees"
  };

  useEffect(() => {
    dispatch(ArtistsMiddleware.getArtistOne(artistNames.one));
    dispatch(ArtistsMiddleware.getArtistTwo(artistNames.two));
    dispatch(ArtistsMiddleware.getArtistThree(artistNames.three));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  console.log("artist", displaySpinnerThree);

  return (
    <div>
      <Container style={{ paddingTop: "30px" }}>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Filter band name"
            onChange={e => (
              !artistNames.one
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
                ? setHideAlbumOne(true)
                : setHideAlbumOne(false),
              !artistNames.two
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
                ? setHideAlbumTwo(true)
                : setHideAlbumTwo(false),
              !artistNames.three
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
                ? setHideAlbumThree(true)
                : setHideAlbumThree(false)
            )}
            className="mr-sm-2"
          />
          <Button variant="outline-warning">Filter</Button>
        </Form>
        <div
          style={{
            display: HideAlbumOne ? "none" : "block",
            marginBottom: "80px",
            marginTop: "20px"
          }}
        >
          <h3>{artistNames.one}</h3>
          <Slider {...settings}>
            {artists.data &&
              artists.data.map((O, key) => (
                <Col key={key}>
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        {" "}
                        <img className="borderImg" src={O.album.cover}></img>
                      </Card.Title>
                      <div>
                        <Link to={`/pages/album/${O.album.id}`}>
                          <p>
                            <b>Album:</b> {O.album.title}
                          </p>
                        </Link>
                        <Button
                          onClick={() => {
                            setPlaying(O.preview);
                            setPlayingImage(O.album.cover);
                            setPlayingDesc(O.album.title);
                            setPlayingArtist(O.artist.name);
                          }}
                          variant="outline-warning"
                        >
                          Play preview <FaPlay />
                        </Button>
                      </div>
                      <Link to={`/pages/artist/${O.artist.id}`}>
                        {" "}
                        <Button variant="warning">Go to artist</Button>
                      </Link>
                      <div
                        style={{ float: "right", cursor: "pointer" }}
                        onClick={() =>
                          dispatch(LibraryMiddleware.setSongToLibrary(O))
                        }
                      >
                        <FaHeart />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Slider>
          <Spinner displaySpinner={displaySpinner} />
        </div>
        <div
          style={{
            display: HideAlbumTwo ? "none" : "block",
            marginBottom: "80px",
            marginTop: "20px"
          }}
        >
          <h3>{artistNames.two}</h3>
          <Slider {...settings}>
            {artistsTwo.data &&
              artistsTwo.data.map((O, key) => (
                <Col key={key}>
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        {" "}
                        <img
                          alt="artist"
                          className="borderImg"
                          src={O.album.cover}
                        ></img>
                      </Card.Title>
                      <div>
                        <Link to={`/pages/album/${O.album.id}`}>
                          <p>
                            <b>Album:</b> {O.album.title}
                          </p>
                        </Link>
                        <Button
                          onClick={() => {
                            setPlaying(O.preview);
                            setPlayingImage(O.album.cover);
                            setPlayingDesc(O.album.title);
                            setPlayingArtist(O.artist.name);
                          }}
                          variant="outline-warning"
                        >
                          Play preview <FaPlay />
                        </Button>
                      </div>
                      <Link to={`/pages/artist/${O.artist.id}`}>
                        {" "}
                        <Button variant="warning">Go to artist</Button>
                      </Link>
                      <div
                        style={{ float: "right", cursor: "pointer" }}
                        onClick={() =>
                          dispatch(LibraryMiddleware.setSongToLibrary(O))
                        }
                      >
                        <FaHeart />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Slider>
          <Spinner displaySpinner={displaySpinnerTwo} />
        </div>

        <div
          style={{
            display: HideAlbumThree ? "none" : "block",
            marginBottom: "180px",
            marginTop: "20px"
          }}
        >
          <h3>{artistNames.three}</h3>
          <Slider {...settings}>
            {artistsThree.data &&
              artistsThree.data.map((O, key) => (
                <Col key={key}>
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        {" "}
                        <img
                          alt="artist"
                          className="borderImg"
                          src={O.album.cover}
                        ></img>
                      </Card.Title>
                      <div>
                        <Link to={`/pages/album/${O.album.id}`}>
                          <p>
                            <b>Album:</b> {O.album.title}
                          </p>
                        </Link>
                        <Button
                          onClick={() => {
                            setPlaying(O.preview);
                            setPlayingImage(O.album.cover);
                            setPlayingDesc(O.album.title);
                            setPlayingArtist(O.artist.name);
                          }}
                          variant="outline-warning"
                        >
                          Play preview <FaPlay />
                        </Button>
                      </div>
                      <Link to={`/pages/artist/${O.artist.id}`}>
                        {" "}
                        <Button variant="warning">Go to artist</Button>
                      </Link>
                      <div
                        style={{ float: "right", cursor: "pointer" }}
                        onClick={() =>
                          dispatch(LibraryMiddleware.setSongToLiberary(O))
                        }
                      >
                        <FaHeart />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Slider>
          <Spinner displaySpinner={displaySpinnerThree} />
        </div>
      </Container>
      <Footer
        artist={playingArtist}
        desc={playingDesc}
        img={playingImage}
        src={playing}
      />
    </div>
  );
};
App.propTypes = {
  artists: PropTypes.string
};
export default App;
