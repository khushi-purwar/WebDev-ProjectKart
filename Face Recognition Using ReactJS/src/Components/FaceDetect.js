import  './faceDetect.css' ;

const FaceDetect = ({imgUrl , box}) => {
    return (
        <div className="center">
            <img id="InputImage" className="white bw2 w-500 h-50 br2" alt =" faces" src={imgUrl} width="auto" height="auto" />
            <div className="bound_box " style={{top: box.topRow, right: box.rightCol , left: box.leftCol , bottom: box.bottomRow}}>

            </div>

        </div>
    )
}

export default FaceDetect;