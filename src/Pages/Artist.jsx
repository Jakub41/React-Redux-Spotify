import React, { useEffect, useState } from "react";
import { Container, Card, Col, Button } from "react-bootstrap";
import { getArtist, getSearch } from "../Services/BaseDeezerAPI.js";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer.jsx";
import Slider from "react-slick";
import { FaPlay } from "react-icons/fa";

const Artist = () => {
  const [artists, setArtists] = useState({});
  const [artistAlbums, setArtistAlbums] = useState({});
  const [artistData, setArtistData] = useState(
    window.location.pathname.split("/").pop()
  );
  const [playing, setPlaying] = useState({});
  const [playingImage, setPlayingImage] = useState({});
  const [playingDesc, setPlayingDesc] = useState(null);
  const [playingArtist, setPlayingArtist] = useState(null);

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

  useEffect(() => {
    const fetchAsync = async () => {
      await getArtist(artistData).then(
        data => (
          getSearch(data.name).then(dataTwo => setArtistAlbums(dataTwo)),
          setArtists(data),
          setArtistData(null)
        )
      );
    };
    fetchAsync();
  }, []);

  return (
    <div>
      <Container style={{ textAlign: "center", marginTop: "20px" }}>
        {" "}
        <br />
        <br />
        <Card style={{ border: "0px" }}>
          <Card.Body>
            <Card.Title>
              Artist:{" "}
              <b>
                <font color="#e84e0f">{artists.name}</font>
              </b>{" "}
            </Card.Title>
            <img className="borderImg" src={artists.picture}></img>
            <Card.Text>
              <h4>
                Number of fans: <b>{artists.nb_fan}</b>
              </h4>
              <br />
              <p>
                {" "}
                <h4>
                  Albums{" "}
                  <b>
                    <br />
                    <br />
                    <Slider {...settings}>
                      {artistAlbums.data &&
                        artistAlbums.data.map(O => (
                          <Col key={O.id}>
                            <Card>
                              <Card.Body>
                                <Card.Title>
                                  {" "}
                                  <img
                                    className="borderImg"
                                    src={O.album.cover}
                                  ></img>
                                </Card.Title>
                                <Card.Text>
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
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                    </Slider>
                  </b>
                </h4>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
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

export default Artist;
