import { useEffect, useState } from "react"
const RandomColor = () => {

    const [typeOfColor,setTypeOfColor] = useState('hex')
    const [color,setColor] = useState('#000000')

    const getRandomInt= (max:number) => Math.floor(Math.random() * max)

    const generateHexColor = () =>{
        let hexColor = "#"
        const hexChars = "0123456789ABCDEF"
        for(let i = 0 ; i < 6 ; i++){
            hexColor += hexChars[getRandomInt(hexChars.length)]
        }
        return hexColor
    }

    const generateRgbColor = () =>{
        let r = getRandomInt(256)
        let g = getRandomInt(256)
        let b = getRandomInt(256)
        return `rgb(${r},${g},${b})`
    }

   useEffect(()=>{
    
    setColor(typeOfColor === 'rgb' ? generateRgbColor():generateHexColor())

   },[typeOfColor])

    return (
    <div style={{
        backgroundColor: `${color}`,
        width : '100vw',
        height : '100vh',
        overflow : 'hidden',
    }}>
        <div className="my-buttons">

      <button onClick={()=>setTypeOfColor('hex')}>Create HEX Color</button>
      <button onClick={()=>setTypeOfColor('rgb')}>Create RGB Color</button>
      <button onClick={()=> setColor(typeOfColor === 'rgb' ? generateRgbColor() : generateHexColor())}>Generate Random Color</button>
        </div>
        <div style={{
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
             color: "#fff",
             fontSize: "60px",
             marginTop: "50px",
             flexDirection: 'column',
             gap: '20px'
        }}>
            <div className="headers">

            <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
            <p>{color}</p>
            </div>

        </div>
    </div>
        
  )
}

export default RandomColor
