import React from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ImagesCard = ({image}) => {
  const imageRef = React.useRef(null);

  useIntersectionObserver(imageRef, { threshold: 0.1 });

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <div ref={imageRef} key={image.id} className="gallery-item a-right" onClick={handleOpen}>
        <img src={image.url} alt={image.title} className="gallery-image" />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className="modal-box">
          <IconButton className="close-button" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <img src={image.url} alt={image.title} className="modal-image" />
        </Box>
      </Modal>
    </>
  );
};

export default ImagesCard;
