import { Container, Card, Button, Col, Row } from "react-bootstrap";
import { getAlbum } from "../Services/BaseDeezerAPI.js";
import React, { Component } from "react";
import Footer from "../Components/Footer/Footer.jsx";
import { FaPlay, FaStar } from "react-icons/fa";
import {
  addComment,
  getAllComments,
  deleteComment
} from "../Services/CRUDCommentAPI";
import Swal from "sweetalert2";

export default class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Albums: [],
      AlbumTracks: [],
      AlbumArtist: [],
      playing: "",
      playingImage: "",
      playingDesc: "",
      playingAlbum: "",
      playingSong: "",
      comments: [],
      deleteId: ""
    };
  }

  deezerAlbumData() {
    setTimeout(() => {
      getAlbum(window.location.pathname.split("/").pop()).then(data =>
        this.setState({
          Albums: data,
          AlbumTracks: data.tracks.data,
          AlbumArtist: data.artist
        })
      );
    }, 100);
  }
  fetchComments() {
    getAllComments(null, window.location.pathname.split("/").pop()).then(data =>
      this.setState({ comments: data })
    );
  }

  prompt(param1, param2) {
    const { value: formValues } = Swal.fire({
      title: "Rate this album",
      html:
        `<br><p>Rating:</p> <input max="5" id="swal-input1" value="${param1}" type="number" class="swal2-input"/>` +
        `<p>Comment:</p> <textarea style="    height: 100px;"  value="${param2}" id="swal-input2" class="swal2-input"/>`,
      focusConfirm: false,
      preConfirm: () => {
        const body = {
          comment: document.querySelector("#swal-input2").value,
          rate: document.querySelector("#swal-input1").value,
          elementId: window.location.pathname.split("/").pop()
        };
        Swal.fire("The Internet?", "That thing is still around?", "question");
        return [addComment(JSON.stringify(body)), window.location.reload()];
      }
    });

    if (formValues) {
      Swal.fire(JSON.stringify(formValues));
    }
  }

  componentDidMount() {
    this.deezerAlbumData();
    this.fetchComments();
  }

  render() {
    const {
      Albums,
      AlbumTracks,
      AlbumArtist,
      playing,
      playingImage,
      playingSong,
      comments
    } = this.state;
    const instance = document;

    return (
      <div>
        <Container style={{ textAlign: "center" }}>
          {" "}
          <br />
          <br />
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    Album:{" "}
                    <b>
                      <font Color="#e84e0f">{Albums.title}</font>
                    </b>{" "}
                  </Card.Title>
                  <img className="borderImg" src={Albums.cover}></img>

                  <Card.Text>
                    <h4>
                      Artist: <b>{AlbumArtist.name}</b>
                    </h4>
                    {AlbumTracks.map(O => (
                      <div style={{ margin: "10px" }}>
                        <p>{O.title}</p>
                        <Button
                          onClick={() => {
                            this.setState({
                              playing: O.preview,
                              playingSong: O.title,
                              playingImage: Albums.cover,
                              playingDesc: Albums.title,
                              playingArtist: AlbumArtist.name
                            });
                          }}
                          variant="outline-warning"
                        >
                          Play preview <FaPlay />{" "}
                        </Button>
                      </div>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={5}>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <h4>Comments:</h4>
                    <br />
                    <Button onClick={this.prompt}>Add rating</Button>
                    {Object.values(comments).map((key, index) => (
                      <div
                        id={`a${index}`}
                        style={{
                          borderRadius: "10px",
                          boxShadow: "0 0 4px",
                          margin: "20px"
                        }}
                      >
                        <h5>{key.comment}</h5>
                        <FaStar
                          style={{ color: key.rate > 0 ? "orange" : "black" }}
                        />
                        <FaStar
                          style={{ color: key.rate > 1 ? "orange" : "black" }}
                        />
                        <FaStar
                          style={{ color: key.rate > 2 ? "orange" : "black" }}
                        />
                        <FaStar
                          style={{ color: key.rate > 3 ? "orange" : "black" }}
                        />
                        <FaStar
                          style={{ color: key.rate > 4 ? "orange" : "black" }}
                        />

                        <div>
                          <Button
                            onClick={props =>
                              Swal.fire({
                                title: `Are you sure? ${key._id} `,
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, delete the comment!"
                              }).then(result => {
                                if (result.value) {
                                  instance.querySelector(`#a${index}`).remove();
                                  deleteComment(null, key._id);
                                  console.log(Object.values(comments));
                                  Swal.fire(
                                    "Deleted!",
                                    "Your comment has been deleted.",
                                    "success"
                                  );
                                }
                              })
                            }
                            style={{ margin: "10px" }}
                            variant="outline-danger"
                          >
                            Delete
                          </Button>
                          <Button
                            onClick={() => this.prompt(key._id, key._id)}
                            style={{ margin: "10px" }}
                            variant="outline-danger"
                          >
                            Edit
                          </Button>
                        </div>
                      </div>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer
          desc={`Song: ${playingSong}`}
          img={playingImage}
          src={playing}
        />
      </div>
    );
  }
}
