const InputForm = ({onChangeInput, onButtonClick}) => {
    return (
    <div className="bgRank">
        <p className="white"> Paste the image link with JPEG format and Detect The Face </p>
        <div >
            <div className=" mar pattern   bb bw1 b--light-blue pa2">
                <input className=" pa2 w-70  black br-pill bn shadow-5"  onChange={onChangeInput} type="text"  />
                <button className="w-30  grow  link ph3  br-pill  dib white bg-light-blue bn" onClick={onButtonClick}>Detect</button>
            </div>
        </div>
    </div>
    )
}

export default InputForm;