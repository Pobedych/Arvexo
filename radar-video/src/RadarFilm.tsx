import {TransitionSeries,linearTiming} from "@remotion/transitions";import {fade} from "@remotion/transitions/fade";
import {Opening} from "./scenes/Opening";import {Visibility} from "./scenes/Visibility";import {Effect} from "./scenes/Effect";import {Practices} from "./scenes/Practices";import {Trust} from "./scenes/Trust";import {Pilot} from "./scenes/Pilot";
export const RadarFilm:React.FC=()=> <TransitionSeries>
  <TransitionSeries.Sequence durationInFrames={270}><Opening/></TransitionSeries.Sequence>
  <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames:12})}/>
  <TransitionSeries.Sequence durationInFrames={360}><Visibility/></TransitionSeries.Sequence>
  <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames:12})}/>
  <TransitionSeries.Sequence durationInFrames={420}><Effect/></TransitionSeries.Sequence>
  <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames:12})}/>
  <TransitionSeries.Sequence durationInFrames={390}><Practices/></TransitionSeries.Sequence>
  <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames:12})}/>
  <TransitionSeries.Sequence durationInFrames={300}><Trust/></TransitionSeries.Sequence>
  <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames:12})}/>
  <TransitionSeries.Sequence durationInFrames={450}><Pilot/></TransitionSeries.Sequence>
</TransitionSeries>;
