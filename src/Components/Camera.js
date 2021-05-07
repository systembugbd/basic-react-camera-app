import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Webcam from "react-webcam";
import { Button, Grid, Paper } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(3),
  },
  videos: {
    width: "100%",
  },
  Button: {
    marginTop: theme.spacing(3),
    borderRadius: "100%",
    padding: theme.spacing(2),
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  images: {
    width: "100%",
    height: "100%",
  },
  videos: {
    width: "100%",
  },
}));

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

 




const Camera = () => {
  const [imgSrc, setImgSrc] = useState(
    "https://via.placeholder.com/500x280/f5f/fff/?text=Save+Your+Photo"
  );
  const [gifImgSrc, setGifImgSrc] = useState();
  const [arrayOfCaptureImg, setArrayOfCaptureImg] = useState([]);
  const [clickCout, setClickCount] = useState(0);

  // const webcamRef = React.createRef()
const setofImgArr=[];
  const webcamRef = React.useRef(null);
  
  const capture = React.useCallback(
    (e) => {
      const imageSrcBase64 = webcamRef.current.getScreenshot();
      setImgSrc(imageSrcBase64);
      setofImgArr.push(imageSrcBase64)
      setArrayOfCaptureImg(setofImgArr)
      setClickCount(1)
    },
    [webcamRef]
  );


  let currentFrame = 0; //Call it a frame because we're making a gif and every image (so every array index) will be a frame
  function changePicture(){
     setGifImgSrc(arrayOfCaptureImg[currentFrame])  //Get the gif element and set its source to the current frame
       currentFrame++; //Increase the current frame by 1
       if(currentFrame == arrayOfCaptureImg.length){ //If we've gone past the end of our array of frames, then:
            currentFrame = 0; //Reset back to frame 0
       }
  }
  
  setInterval(changePicture,5000);
 
  const download = () => {
       let random = Math.floor(Math.random()*100);
       let a = document.createElement('a')
       a.href=imgSrc;
       console.log(a.href)
       a.download=`yourWebcamImage_${random}.jpg`;
       a.click()
  }
  



  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            {<Webcam /> ? (
               
              <Webcam
                className={classes.videos}
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={720}
                width={1280}
                videoConstraints={videoConstraints}
                screenshotQuality= "1"
               
              />
             

            ) : (
              <img
                src="https://via.placeholder.com/500x280/09f/fff/?text=Open+Your+Camera"
                className={classes.images}
              />
            )}

               
            <Button onClick={capture} className={classes.Button} variant="contained" color="primary"> <Icon style={{ fontSize: 60 }}>camera</Icon></Button> 
               
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            {imgSrc ? (
               <img
               src={imgSrc}
               className={classes.images}
             /> 
             
            ) : (
              <img
                src="https://via.placeholder.com/500x280/f5f/fff/?text=Save+Your+Photo"
                className={classes.images}
              />
            )}
  <Button onClick={download} className={classes.Button} variant="contained" color="primary"> <Icon style={{ fontSize: 60 }}>download</Icon></Button> 
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4} >
               {
                   
                   
                   arrayOfCaptureImg !="" ? 
                         
                             <Paper>
                                   <img src={gifImgSrc} className={classes.images} />
                              </Paper>
                      :
                      ""
                   

                   


               }
        </Grid>
      </Grid>
    </div>
  );
};

export default Camera;
