import Countdown from './Countdown';
import Story from './Story';
import Schedule from './Schedule';
import Hotels from './Hotels';
import Gallery from './Gallery';
import TriviaGame from './TriviaGame';

function Home() {
  return (
    <div style={{ width: "100%" }}>
      <Countdown />
      <Story />
      <Schedule />
      <Hotels />
      <Gallery />
      <TriviaGame />
    </div>
  );
}

export default Home;