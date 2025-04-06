    import { useState } from 'react'

    const stars = [
            {
            id: 1,
            name: 'Vega',
            text: "Dans les légendes orientales, Vega est une tisserande céleste, séparée à jamais de son amant par la Voie lactée.",
            top: 20,
            left: 15
            },
            {
            id: 2,
            name: 'Orion',
            text: "Chasseur géant des mythes grecs, Orion fut placé dans le ciel après avoir été vaincu par un scorpion envoyé par Gaïa.",
            top: 35,
            left: 60
            },
            {
            id: 3,
            name: 'Cassiopée',
            text: "Reine orgueilleuse, Cassiopée fut condamnée à tourner éternellement dans le ciel, attachée à son trône d'étoiles.",
            top: 55,
            left: 25
            },
            {
            id: 4,
            name: 'Altair',
            text: "Altair, l’amant de Vega, se trouve de l’autre côté de la Voie lactée. Une fois par an, les amoureux peuvent se rejoindre.",
            top: 70,
            left: 75
            },
            {
            id: 5,
            name: 'Sirius',
            text: "Chez les anciens Égyptiens, Sirius annonçait la crue du Nil. Il était associé à la déesse Isis.",
            top: 45,
            left: 80
            },
            {
            id: 6,
            name: 'Andromède',
            text: "Sacrifiée au monstre marin par ses parents, Andromède fut sauvée par Persée et placée dans le ciel par les dieux.",
            top: 60,
            left: 10
            },
            {
                id: 7,
                name: 'Bételgeuse',
                text: "Dans l’épaule d’Orion brille Bételgeuse, une étoile géante rouge sur le point d’exploser — symbole de puissance et de fin imminente.",
                top: 30    
            },
            {
                id: 8,
                name: 'Alcyone',
                text: "Alcyone est la plus brillante des Pléiades, sept sœurs célestes poursuivies par Orion, transformées en étoiles pour échapper à son désir.",
                top: 50,
                left: 40},
                {
                id: 9,
                name: 'Polaris',
                text: "Polaris, l’étoile du Nord, a guidé marins et voyageurs depuis des siècles. Elle reste fixe dans le ciel, comme un phare éternel.",
                top: 70,
                },
                {
                id: 10,
                name: 'Capella',
                text: "Capella symbolisait la chèvre nourricière de Zeus. Chez les Romains, elle annonçait les tempêtes — à la fois nourricière et furieuse.",
                top: 20,
                left: 80},
                {
                id: 11,
                name: 'Rigel',
                text: "Rigel marque le pied d’Orion. Elle brille avec intensité mais annonce aussi la fin du chasseur, blessé par le scorpion céleste.",
                top: 80,
                left: 20}
        ]
        
            

    function Celestia() {
    const [selectedStar, setSelectedStar] = useState(null)

        return (
<div style={{
    backgroundImage: 'url("/bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    color: 'white',
    width: '100vw',
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'Georgia, serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
    }}>

        
            <h1 style={{
                textAlign: 'center',
                paddingTop: '2rem',
                fontSize: '2.9rem',
                letterSpacing: '1px',
                fontFamily: "'Caveat', cursive",
                
            }}>
                Celestia 
            </h1>
        
            <p style={{ textAlign: 'center', maxWidth: '600px', margin: '1rem auto 3rem', opacity: 0.8, fontSize: '1.2rem' }}>
                Cliquez sur une étoile pour découvrir une légende céleste...
            </p>
        

        
        

            {stars.map((star) => {
            const top = Math.floor(Math.random() * 80) + 10 
           const left = Math.floor(Math.random() * 80) + 10 

    return (
        <div
        key={star.id}
        onClick={() => setSelectedStar(star)}
        style={{
            position: 'absolute',
            top: `${star.top}%`,
            left: `${star.left}%`,
            fontSize: '1.5rem',
            color: 'white',
            cursor: 'pointer',
            textShadow: '0 0 8px white',
            userSelect: 'none',
            animation: 'twinkle 2s infinite ease-in-out'
        }}
        >
        ✦
        </div>
    )
    })}


        {/* Modal */}
        {selectedStar && (
            <div
            onClick={() => setSelectedStar(null)}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
            }}
            >
            <div
                style={{
                backgroundColor: 'rgba(1, 18, 28, 0.79)',
                padding: '2rem',
                borderRadius: '12px',
                maxWidth: '400px',
                textAlign: 'center',
                boxShadow: '0 0 20px rgba(95, 135, 157, 0.2)',
                cursor: 'default'
                }}
                onClick={e => e.stopPropagation()}
            >
                <h2 style= {{fontFamily: "'Caveat', cursive", fontSize:'2.2rem'}}>{selectedStar.name}</h2>
                <p style={{ fontSize: '1rem', marginTop: '1rem' }}>{selectedStar.text}</p>
                <button
                style={{
                    marginTop: '1.5rem',
                    padding: '0.5rem 1rem',
                    backgroundColor: 'rgb(169, 214, 238)',
                    fontFamily: 'arial, sans-serif',
                    fontWeight: 'bold',
                    color: '#0b0c2a',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer'
                }}
                onClick={() => setSelectedStar(null)}
                >
                Fermer
                </button>
            </div>
            </div>
        )}
        </div>
    )
    }

export default Celestia
