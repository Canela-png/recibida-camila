import React from "react";

export default function FelicitacionCamila() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#ffe4e6',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '600px',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '1.5rem',
        padding: '2rem',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#db2777' }}>¡FELICITACIONES, CAMILA!</h1>
        <p style={{ marginTop: '1rem', color: '#374151' }}>
          Después de años de esfuerzo, estudio, risas, lágrimas, guardias, finales interminables y una vocación que se hizo más fuerte con cada paso... <strong>¡HOY TE RECIBISTE DE FONOAUDIÓLOGA!</strong>
        </p>
        <p style={{ marginTop: '1rem', color: '#374151' }}>
          Una profesional que no solo entiende de voz, lenguaje, audición y comunicación, sino que también sabe escuchar con el corazón, acompañar con empatía y sanar con palabras.
        </p>
        <div style={{ textAlign: 'left', color: '#374151', marginTop: '1rem' }}>
          <p>🎓 Tu voz que eligió esta carrera con amor</p>
          <p>📚 Tus madrugadas de estudio y perseverancia</p>
          <p>👂 Tus ganas de mejorar la vida de otros/as</p>
          <p>💗 Tu pasión por acompañar procesos únicos</p>
        </div>
        <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#374151' }}>
          Gracias por elegir una profesión que transforma vidas. Gracias por no rendirte nunca. Gracias por inspirar con tu camino.
        </p>
        <p style={{ marginTop: '1rem', fontWeight: '600', color: '#db2777' }}>
          ¡Que este sea solo el comienzo de una carrera llena de logros, aprendizajes y momentos hermosos! 🌈
        </p>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#6b7280' }}>
          📍 Fecha de recibida: <strong>18/07/2025</strong>
        </p>
        <h2 style={{ marginTop: '2rem', fontSize: '1.25rem', fontWeight: 'bold', color: '#be185d' }}>
          ¡A brindar por vos, Fono recién recibida! 🥂
        </h2>
      </div>
    </main>
  );
}