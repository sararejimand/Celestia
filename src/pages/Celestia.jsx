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
            }
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
                fontSize: '2.2rem',
                letterSpacing: '1px',
                fontFamily: 'Georgia, serif'
            }}>
                Celestia 
            </h1>
        
            <p style={{ textAlign: 'center', maxWidth: '600px', margin: '1rem auto 3rem', opacity: 0.8 }}>
                Cliquez sur une étoile pour découvrir une légende céleste...
            </p>
        
            {/* clickable stars go here */}
        
        
        {/* Stars on the screen */}
            {stars.map((star) => {
    const top = Math.floor(Math.random() * 80) + 10 // between 10% and 90%
    const left = Math.floor(Math.random() * 80) + 10 // between 10% and 90%

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
                backgroundColor: 'rgb(0, 24, 39)',
                padding: '2rem',
                borderRadius: '12px',
                maxWidth: '400px',
                textAlign: 'center',
                boxShadow: '0 0 20px rgba(172, 178, 223, 0.2)',
                cursor: 'default'
                }}
                onClick={e => e.stopPropagation()}
            >
                <h2>{selectedStar.name}</h2>
                <p style={{ fontSize: '1rem', marginTop: '1rem' }}>{selectedStar.text}</p>
                <button
                style={{
                    marginTop: '1.5rem',
                    padding: '0.5rem 1rem',
                    backgroundColor: 'white',
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
