export default function Home() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
      minHeight: '100vh',
      color: 'white',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5em', marginBottom: '15px' }}>YD购UI</h1>
          <div style={{
            background: 'rgba(255,0,0,0.2)',
            border: '1px solid rgba(255,0,0,0.4)',
            borderRadius: '8px',
            padding: '10px 15px',
            display: 'inline-block'
          }}>
            <p style={{ margin: 0, color: '#ff6b6b' }}>所有UI都为空壳，要想使用需在UI内添加脚本</p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          <div 
            style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              cursor: 'pointer',
              color: 'black'
            }}
            onClick={() => window.location.href = '/red-ar-ui.html'}
          >
            <img 
              src="https://cccimg.com/view.php/ca452a08d00b579d95121e5a647ee390.png" 
              alt="红ARUI" 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h3>红ARUI</h3>
              <p>点击查看</p>
            </div>
          </div>

          <div 
            style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden', 
              cursor: 'pointer',
              color: 'black'
            }}
            onClick={() => window.location.href = '/greatwall-ui.html'}
          >
            <img 
              src="https://cccimg.com/view.php/ed4afdcc2532ace35b8184b98a67f6fc.jpg" 
              alt="长城UI" 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h3>长城UI</h3>
              <p>点击查看</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}