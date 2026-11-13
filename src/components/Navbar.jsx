function Navbar() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#1e293b',
        color: '#ffffff',
      }}
    >
      <h1 style={{ margin: 0, fontSize: '1.25rem' }}>
        Dashboard de Ciencia de Datos
      </h1>
      <span style={{ fontSize: '1rem', fontWeight: '500' }}>
        [ANDREA BARRANCO ROBLES]
      </span>
    </header>
  );
}

export default Navbar;