import './main-page.css'
import {useState} from 'react';
function MainPage() {
    const [randomRGB, setRandomRGB] = useState<string[]>([]);
    const changeColor = () => {
        const rgbArr: string[] = [];
        for(let i = 0; i < 3; i++) {
            rgbArr.push((Math.random() * 255).toFixed())
        }
    setRandomRGB(() => rgbArr);
    

    }
    return (
        <h1 style={{backgroundColor: `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`}} onClick={changeColor} className="lee">Łee</h1>
    )
}
export default MainPage



