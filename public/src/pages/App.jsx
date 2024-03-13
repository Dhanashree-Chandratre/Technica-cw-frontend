import { useEffect, useState } from "react";
import Crossword from "./Crossword";
import { useNavigate } from "react-router-dom";

export default function App(){
    const sets =[
        {
            arr :[
            ['-','-', '-', '-', '-', '-', '2', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-','-', '-', '1', 'C', 'A', 'S', 'A', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-','-', '-', '-', '-', '-', 'H', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-','-', '-', '-', '-', '-', 'O', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-','-', '-', '-', '-', '-', 'P', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-','-', '-', '-', '3', '-', 'V', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-','-', '-', '-', 'R', '-', 'E', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-','-', '-', '-', 'E', '-', 'R', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['4','P', 'U', 'L', 'S', 'E', 'S', 'Y', 'N', 'C', '-', '-', '-', '5', '-', '-', '-', '-', '-', '-'],
            ['-','-', '-', '-', 'E', '-', 'E', '-', '-', '-', '-', '-', '-', 'C', '-', '-', '-', '-', '-', '-'],
            ['-','-', '-', '-', 'R', '-', '-', '-', '-', '6', 'A', 'L', 'G', 'O', 'T', 'R', 'I', 'V', 'I', 'A'],
            ['-','-', '-', '-', 'V', '-', '-', '-', '-', '-', '7', '-', '-', 'D', '-', '-', '-', '-', '-', '-'],
            ['-','-', '-', '-', 'A', '-', '-', '-', '-', '-', 'H', '-', '-', 'E', '-', '-', '-', '-', '-', '-'],
            ['-','-', '-', '8', 'T', 'E', 'C', 'H', 'T', 'U', 'E', 'S', 'D', 'A', 'Y', 'S', '-', '-', '-', '-'],
            ['-','-', '-', '-', 'I', '-', '-', '-', '-', '-', 'X', '-', '-', 'S', '-', '-', '-', '-', '-', '-'],
            ['-','-', '-', '-', 'O', '-', '-', '-', '-', '-', 'B', '-', '-', 'Y', '-', '-', '-', '-', '-', '-'],
            ['-','-', '-', '-', '-', '-', '-', '-', '-', '-', 'U', '-', '-', 'M', '-', '-', '-', '-', '-', '-'],
            ['-','-', '-', '-', '-', '-', '-', '-', '-', '-', 'G', '-', '-', 'P', '-', '-', '9', '-', '-', '-'],
            ['-','-', '-', '-', '-', '-', '-', '-', '-', '-', 'S', '-', '-', 'T', '-', '-', 'A', '-', '-', '-'],
            ['-','-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'O', '-', '-', 'M', '-', '-', '-'],
            ['-','-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'T', '-', '-', 'O', '-', '-', '-'],
            ['-','-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '10', 'T', 'E', 'C', 'H','N', 'I', 'C', 'A'],
            ['-','-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'G', '-', '-', '-'],
            ['-','-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'U', '-', '-', '-'],
            ['-','-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'S', '-', '-', '-'] 
          ] , 
          grid : [
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],    
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''] 
        ],
        downstarting : [
            [1,6], [6,4], [9,13] , [12,10], [18, 16]
        ],

        downwords : ["SHOPVERSE", "RESERVATIO", "CODEASYMPTOTE", "HEXBUGS","AMONGUS"],
        
        acrossstarting : [
            [1,4], [8,1], [10,10], [13, 4], [21, 12]
        ],
        
        acrosswords : ["CASA", "PULSESYNC", "ALGOTRIVIA", "TECHTUESDAYS","TECHNICA"],
        
        across : `1. Elevate awareness through an enlightening webinar on combating substance
        4. ISTE's electrical event in graVITas'23
        6. Our google forms quiz which was an insight on data structure and algorithm
        8. Tuesday's Instagram story unveiled the beauty of cutting-edge technologies 
        10. Name of the hackathon
        `,
        down: `2. Empower buyers to shop locally with a QR-scanning webapp marvel
        3. Effortless dining: App updates restaurant seating, ensuring comfort and efficiency 
        5. Immersive workshop delving into designing, analyzing data structures, algorithms—learning from scratch
        7. At Gravitas'22, we crafted an electrifying bot for our thrilling event. What was the name of that event 
        9. our event in RIVIERA'23.`
        },
        {
            arr : [
                ['-','-','-','-','-','-','1','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','S','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','H','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','O','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','P','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','V','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','E','-','-','-','-','-','-','2','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','R','-','-','-','-','-','-','T','-','-','-','-','-','-'],
                ['3','C','O','D','E','A','S','Y','M','P','T','O','T','E','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','E','-','-','-','-','-','-','A','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-','-','C','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-','-','H','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-','-','F','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-','-','O','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','4','H','O','R','I','Z','O','N','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-','-','V','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','5','P','U','L','S','E','S','Y','N','C','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-','-','L','-','-','-','-','-','6'],
                ['-','-','-','-','-','-','-','-','-','-','-','-','-','L','-','-','-','-','-','N'],
                ['-','-','-','-','-','-','-','-','7','R','A','N','S','O','M','E','W','A','R','E'],
                ['-','-','-','-','-','-','-','-','-','-','-','9','-','R','-','-','-','-','-','B'],
                ['-','-','-','-','-','8','V','A','L','U','E','C','R','E','E','D','-','-','-','U'],
                ['-','-','-','-','-','-','-','-','-','-','-','R','-','-','-','-','-','-','-','L'],
                ['-','-','-','-','-','-','-','-','-','10','P','Y','G','A','M','E','-','-','-','A'],
                ['-','-','-','-','-','-','-','-','-','-','-','P','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','T','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','O','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','X','-','-','-','-','-','-','-','-']
            ],
            
            grid : [
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
                ['','','','','','','','','','','','','','','','','','','','',],
            ],
            
            downstarting : [
                [1,6], [7,13], [18,27], [21, 11]
            ],
            downwords : ["SHOPVERSE", "TEACHFORVELLORE", "NEBULA", "CRYPTOX"],
            
            acrossstarting : [
                [8,1], [14,11], [16, 9], [19, 9],[21,6], [23, 10]
            ],
            
            acrosswords : ["CODEASYMPTOTE", "HORIZON", "PULSESYNC", "RANSOMWARE", "VALUECREED","PYGAME",],

            across:`3. Immersive workshop delving into designing, analyzing data structures, algorithms—learning from scratch \n
            4. ISTE-VIT's grand tech fest: workshops, hackathon—where innovation takes flight!
            5. ISTE's electrical event in graVITas'23 
            7. Nishchay Singh's webinar: Secure data insights, online threat defense, Google efficiency! 
            8. The hackathon's key supporter: our esteemed title sponsor 
            10. Gravitas'23 workshop: Crafting a captivating game, starting from absolute scratch..`
            ,
            down:`1. Empower buyers to shop locally with a QR-scanning webapp marvel. 
            2. ISTE-VIT's initiative: inspiring young minds through knowledge in school outreach
            6. Gravitas 2023: A spectacle event featuring ideation, code challenges, lightning research, and tech quizzing 
            9. Gravitas'22 workshop: Crafting NFTs from scratch and mastering website minting 
            `
        },
        {
            arr : [
                ['-','-','-','-','-','-','-','1','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','2','-','A','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','P','-','L','-','-','-','-','-','-','-','4','-','-','-'],
                ['-','-','-','-','-','Y','-','G','-','3','P','U','L','S','E','S','Y','N','C'],
                ['-','-','-','-','-','G','-','O','-','-','-','-','-','-','-','H','-','-','-'],
                ['-','-','5','Q','U','A','N','T','U','M','-','-','-','-','-','O','-','-','-'],
                ['-','-','-','-','-','M','-','R','-','-','-','-','-','-','-','P','-','-','-'],
                ['-','-','-','-','-','E','-','I','-','-','-','7','-','-','-','V','-','-','-'],
                ['-','-','-','-','-','-','6','V','A','L','U','E','C','R','E','E','D','-','-'],
                ['-','-','-','-','-','-','-','I','-','-','-','L','-','-','-','R','-','-','-'],
                ['8','R','A','N','S','O','M','A','W','A','R','E','-','-','-','S','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','C','-','-','-','E','-','-','-'],
                ['-','-','-','-','-','-','9','I','G','N','I','T','I','A','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','R','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','O','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','10','P','H','O','T','O','N','I','X','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','I','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','X','-','-','-','-','-','-','-']
            ],    
            grid : [
                ['','','','','','','','','','','','','','','','','','',''],
                ['','','','','','','','','','','','','','','','','','',''],
                ['','','','','','','','','','','','','','','','','','',''],
                ['','','','','','','','','','','','','','','','','','',''],
                ['','','','','','','','','','','','','','','','','','',''],
                ['','','','','','','','','','','','','','','','','','',''],
                ['','','','','','','','','','','','','','','','','','',''],
                ['','','','','','','','','','','','','','','','','','',''],
                ['','','','','','','','','','','','','','','','','','',''],
                ['','','','','','','','','','','','','','','','','','',''],
                ['','','','','','','','','','','','','','','','','','',''],
                ['','','','','','','','','','','','','','','','','','',''],
                ['','','','','','','','','','','','','','','','','','',''],
                ['','','','','','','','','','','','','','','','','','',''],
                ['','','','','','','','','','','','','','','','','','',''],
                ['','','','','','','','','','','','','','','','','','',''],
                ['','','','','','','','','','','','','','','','','','',''],
                ['','','','','','','','','','','','','','','','','','',''],
            ],
            
            downstarting : [
                [1,7], [2,5], [3,15], [8,11]
            ],
            
            downwords : ["ALGOTRIVIA", "PYGAME", "SHOPVERSE", "ELECTRONIX"],
            
            acrossstarting : [
                [3,10], [5,3], [8,7], [10,1], [12,7], [15,6]
            ],
            
            acrosswords : ["PULSESYNC", "QUANTUM", "VALUECREED", "RANSOMWARE", "IGNITIA", "PHOTONIX"],
            

            down:`
            1.Our google forms quiz which was an insight on data structure and algorithm
            2. Gravitas'23 workshop: Crafting a captivating game, starting from absolute scratch.
            4. Empower buyers to shop locally with a QR-scanning webapp marvel.
            7. Gravitas'23 workshop: Crafting a captivating game, starting from absolute scratch.
            `,
            across:`
            3. At Gravitas'23, ISTE sparkled with an event crafting health innovation.
            5. Gravitas '22: Electrifying competition embracing tech, management, design, aptitude—student excellence unleashed!
            6. The hackathon's key supporter: our esteemed title sponsor
            8. Nishchay Singh's webinar: Secure data insights, online threat defense, Google efficiency!
            9. A remarkable fusion: three dynamic workshops and an exhilarating 36-hour hackathon.
            10. Horizon '21 workshop: Photoshop, craft UI/UX with Adobe XD—launch design career!`
        }
    ]
    const navigate = useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem("user")){
            navigate('/register');
        }
    })
    const [index , setindex ] = useState(null);
    
        useEffect(()=>{
        const randomDecimal = Math.random();
        setindex(Math.floor(randomDecimal * 3));
    },[]);  

    return (
        <>
            { index !== null ? <Crossword   info={sets[index]}  /> : <div></div>}
        </>
    )
}