import React from "react";
import Playlist from "react-mp3-player";
import Swal from "sweetalert2";

const Footer = props => {
  const tracks = [
    {
      img: props.img,
      name: props.artist,
      desc: props.desc,
      src: props.src
    }
  ];
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: toast => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
  });
  if (JSON.stringify(props.img).length > 3) {
    Toast.fire({
      icon: "success",
      title: "Your song has started"
    });
  }

  return (
    <div>
      <Playlist tracks={tracks} />
    </div>
  );
};
export default Footer;
