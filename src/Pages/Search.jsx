import React, { useState} from 'react';
import {Container, Card, Button, Form, FormControl} from 'react-bootstrap';
import Slider from "react-slick";
import { getSearch } from "../Services/BaseDeezerAPI.js";
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer/Footer.jsx';
import { FaPlay } from "react-icons/fa";

const Search = () =>  {
  const [artists, setArtists] = useState({});
  const [search, setSearch] = useState(null);
  const [playing, setPlaying] = useState({});
  const [playingImage, setPlayingImage] = useState({});
  const [playingDesc, setPlayingDesc] = useState(null);
  const [playingArtist, setPlayingArtist] = useState(null);

    if(search != null && search.length >= 3) {
      
    const fetchAsync = async () => {
    await getSearch(search).then((data) => 
     
    setArtists(data), 
    setSearch(null)  
    )
  }
  fetchAsync();
}
  


function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", borderRadius:'100px' }}
      onClick={onClick}
    />
  );
}


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <Arrow />,
      prevArrow: <Arrow />  
  };
 const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value) 

  }

  

  return (
    <div>
    <Container style={{textAlign: 'center'}}> <br/><br/>
<h3>Search for your favorite artists, songs and albums!</h3>

<Form style={{display: 'block', margin: '20px'}} block>
      <FormControl onChange={handleChange} size="lg" type="text" placeholder="Type any albums/artists/songs" className="mr-sm-2" />
     
    </Form>
   
<Slider {...settings}>
   {artists.data
                      && artists.data.map(O => (
                        <Container>
                          <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title> {O.artist.name}      <img className="borderImg" src={O.album.cover}></img></Card.Title>
    <Card.Text>
      <Link to={`/pages/album/${O.album.id}`}><p><b>Album:</b> {O.album.title}</p></Link>
      <Button onClick={() => {
        setPlaying(O.preview)
        setPlayingImage(O.album.cover)
        setPlayingDesc(O.album.title)
        setPlayingArtist(O.artist.name)
      }} variant="outline-warning">Play preview <FaPlay/></Button>
    </Card.Text>
   <Link to={`artist/${O.artist.id}`}>  <Button variant="warning">Go to artist</Button></Link>
  </Card.Body>
</Card>
</Container>
                   
                      ))}	
      </Slider>


   


    
</Container>
    <Footer artist={playingArtist} desc={playingDesc} img={playingImage} src={playing}/>
  </div>
  );
}

export default Search;
