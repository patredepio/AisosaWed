import Countdown from './Countdown';
import Story from './Story';
import Schedule from './Schedule';
import Hotels from './Hotels';
import Gallery from './Gallery';
import TriviaGame from './TriviaGame';
import ColorPalette from './ColorPalette';

function Home() {
  return (
    <div style={{ width: "100%" }}>
      <Countdown />
      <Story />
      <Schedule />
      <Hotels />
      <Gallery />
      <ColorPalette />
      <TriviaGame />

      {/* Couple Support Section */}
      <section className="section">
        <h2 className="section-title text-2xl">Support the Couple</h2>
        <p className="text-base" style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-text-light)' }}>
          We thank you for all the well wishes, messages and support
        </p>

        <div style={{ textAlign: 'center' }}>
          <div className="card" style={{ maxWidth: '600px', margin: '0 auto', background: 'linear-gradient(135deg, var(--color-accent), #f0f0e8)' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '2rem', marginBottom: '1rem', display: 'block' }}>💝</span>
              <h3 className="text-lg" style={{ margin: '0 0 1rem 0', color: 'var(--color-secondary)' }}>
                Send Your Support
              </h3>
              <p className="text-base" style={{ margin: '0 0 1.5rem 0', lineHeight: '1.6' }}>
                If you still feel like supporting the couple, you can show your love via this account:
              </p>
            </div>

            <div className="card" style={{
              background: 'white',
              padding: 'var(--space-lg)',
              border: '2px solid var(--color-primary)',
              margin: '0 0 1.5rem 0'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <div className="text-md" style={{ fontWeight: 'bold', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>
                  🏦 First Bank Of Nigeria
                </div>
                <div className="text-base" style={{ fontWeight: 'bold', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                  Cole-Onitiri Olakunle and Egbe-Igbingie Aisosa Precious
                </div>
                <div className="text-lg" style={{
                  fontWeight: 'bold',
                  color: 'var(--color-text)',
                  background: 'var(--color-accent)',
                  padding: 'var(--space-sm)',
                  borderRadius: 'var(--radius-sm)',
                  letterSpacing: '1px'
                }}>
                  3221517779
                </div>
              </div>
            </div>

            <p className="text-base" style={{
              margin: 0,
              fontStyle: 'italic',
              color: 'var(--color-secondary)',
              fontWeight: '500'
            }}>
              We thank you for your continued support! 🙏
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;