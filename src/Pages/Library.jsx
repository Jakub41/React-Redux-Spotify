import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Col, Card, Button } from "react-bootstrap";
import Footer from "../Components/Footer/Footer";
import { FaPlay } from "react-icons/fa";
import LibraryMiddleware from "../store/Middleware/LibraryMiddleware";

const Library = () => {
  const [playing, setPlaying] = useState({});
  const [playingImage, setPlayingImage] = useState({});
  const [playingDesc, setPlayingDesc] = useState(null);
  const [playingArtist, setPlayingArtist] = useState(null);
  const dispatch = useDispatch();
  const { LibrarySongs } = useSelector(state => ({
    LibrarySongs: state.LibraryReducer.LibrarySongs
  }));

  console.log(LibrarySongs);

  return (
    <div>
      <Container style={{ paddingTop: "30px" }}>
        <div
          style={{
            display: "block",
            marginBottom: "80px",
            marginTop: "20px"
          }}
        >
          <h3 style={{ marginLeft: "80px" }}>Library Songs</h3>
          {LibrarySongs.length > 0 &&
            LibrarySongs.map((O, key) => (
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
                      style={{
                        display: "flex",
                        float: "right",
                        cursor: "pointer",
                        fontSize: "30px",
                        color: "red"
                      }}
                      onClick={() =>
                        dispatch(LibraryMiddleware.removeSongFromLibrary(key))
                      }
                    >
                      x
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          {LibrarySongs.length === 0 && (
            <center>
              <h4>No songs are in Library</h4>
            </center>
          )}
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
export default Library;
