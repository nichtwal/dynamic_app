import { LunaPark } from "./components/LunaPark";
import { Face } from "./components/face";
import { Footer } from "./components/footer";
import { TextMagnifer } from "./components/header";
import { Logo } from "./components/logo";
import { PortretBlock } from "./components/portret";
import { StyledText } from "./components/styledtext";
import { TextBlock } from "./components/textBlock";
import { textCollection } from "./shared/config";
function App() {
  return (
    <>
      <TextMagnifer />
      <Logo appearance="_top"/>
      <Face />
      <StyledText />
      <TextBlock text={textCollection.slice(0, 3)}/>
      <PortretBlock />
      <TextBlock text={textCollection.slice(3, 4)} className="_second"/>
      <LunaPark />
      <TextBlock text={textCollection.slice(4)}  className="_third" />
      <Logo appearance="_bot"/>
      <Footer />
    </>
  );
}

export default App;
