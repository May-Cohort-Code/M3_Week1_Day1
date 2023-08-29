
function AboutMe(){
    let myName = {
        firstName:"Bright",
        lastName:"Mensah"
    }
    let myNumbers = [1,2,3,4,6,7,8]

    return(
        <div>
            <h1 id="main-h1" className="main-paragraphs">Hello my name Is {myName.lastName}</h1>
            <h2>{myNumbers}</h2>
            <img src="./logo192.png" alt="" />
            <img src="./predator.jpg" alt="" />
        </div>
    )
}

export default AboutMe