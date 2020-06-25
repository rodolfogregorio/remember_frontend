import { createStyles } from "@material-ui/core";
import { red, purple } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
  circle: {
    display: 'inline-block',
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: '#38B49D',
    position: 'relative',
    top: '33vh',
    left: 200,
    marginRight: 200,
    '&::before': {
      display: 'inline-block',
      content: `''`,
      borderTop: '2px solid rgba(0,0,0,0.8)',
      position: 'absolute',
      width: 200,
      left: -200,
      top: 10,
    },
    '&::after': {
      display: 'inline-block',
      content: `''`,
      // borderRight: '1px dashed rgba(255,255,255,0.5)',
      position: 'absolute',
      // width: 200,
      // height: 25,
      left: -10,
      bottom: 30,
      width: 0,
      height: 0,
      borderLeft: '20px solid transparent',
      borderRight: '20px solid transparent',
      borderTop: '20px solid rgba(0,0,0,0.8)',
    },
  },
  img: {
    zIndex: -1,
    borderRadius: 25,
    border: '1px solid rgba(0,0,0,0.8)',
    position: 'absolute',
    objectFit: 'cover',
    width: 240,
    height: 144,
    bottom: 50,
    left: -110,
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.05)',
      transition: 'all 0.2s ease-in-out',
    },
  },
  filter: {
    zIndex: 3,
    position: 'absolute',
    borderRadius: 25,
    backgroundColor: 'rgba(30,30,30,0.3)',
    width: 242,
    height: 146,
    bottom: 50,
    left: -110,
  },
  load: {
    zIndex: 4,
    position: 'absolute',
    left: -10,
    bottom: 108,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5%',
    outline: 'none',
  },
  imgLightBox: {
    maxWidth:'70%',
    maxHeight: '120vh',
  },
  date: {
    position: 'absolute',
    top: -30,
    left: -108,
    fontWeight: 400,
    fontSize: 15,
  },
});

export default styles