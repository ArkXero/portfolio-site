function TestApp() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#1a1a1a', 
      color: 'white', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'column',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>React App is Working!</h1>
      <p style={{ fontSize: '1.2rem', color: '#ccc' }}>If you can see this, React is properly loaded.</p>
      <div style={{ 
        marginTop: '2rem', 
        padding: '1rem', 
        backgroundColor: '#333', 
        borderRadius: '8px',
        border: '2px solid #667eea'
      }}>
        <p>Next step: Holographic Card Component</p>
      </div>
    </div>
  );
}

export default TestApp;
