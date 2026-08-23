import {Composition, Folder} from "remotion";
import {RadarFilm} from "./RadarFilm";
import {Opening} from "./scenes/Opening";
import {Visibility} from "./scenes/Visibility";
import {Effect} from "./scenes/Effect";
import {Practices} from "./scenes/Practices";
import {Trust} from "./scenes/Trust";
import {Pilot} from "./scenes/Pilot";

export const MyComposition: React.FC = () => <>
  <Folder name="Radar-Scenes">
    <Composition id="01-Opening" component={Opening} durationInFrames={270} fps={30} width={1920} height={1080}/>
    <Composition id="02-Visibility" component={Visibility} durationInFrames={360} fps={30} width={1920} height={1080}/>
    <Composition id="03-Effect" component={Effect} durationInFrames={420} fps={30} width={1920} height={1080}/>
    <Composition id="04-Practices" component={Practices} durationInFrames={390} fps={30} width={1920} height={1080}/>
    <Composition id="05-Trust" component={Trust} durationInFrames={300} fps={30} width={1920} height={1080}/>
    <Composition id="06-Pilot" component={Pilot} durationInFrames={450} fps={30} width={1920} height={1080}/>
  </Folder>
  <Composition id="ArvexoRadar-DesignPartners" component={RadarFilm} durationInFrames={2130} fps={30} width={1920} height={1080}/>
</>;
