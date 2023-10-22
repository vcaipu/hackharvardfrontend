import { MoonIcon } from 'evergreen-ui';
import Arrow from '../components/Arrow';
import HeaderComp from '../components/HeaderComp';
import SideBar from '../components/SideBar';
import styles from '../styles/Home.module.css'
import Dnd from "./../components/Dnd";
import StarryBackground from '../components/StarryBackground';
import Loading from '../components/Loading';
import EegData from '../components/EegData';

export default function Home(){
  return <div styles={styles.container}>
    <HeaderComp></HeaderComp>
    <StarryBackground color="lightgrey" zIndex={-1}></StarryBackground>

    <div className='openingBanner'>
      <h1><MoonIcon size={60}></MoonIcon>DreamScape</h1>
      <p>Bring Your Dreams to Life!</p>
      <StarryBackground color="white" zIndex={10}></StarryBackground>
    </div>

    <SideBar title="Step 1:" subtitle="Create Your Dream!" description="Show patient image and use ML model to parse EEG Data">
      <Dnd></Dnd>
    </SideBar>

    <SideBar title="Step 2:" subtitle="Generate Images from Data!" description="Use an ML model to generate images corresponding to EEG data">
      <EegData></EegData>
    </SideBar>

    <SideBar title="Step 3:" subtitle="Generate Text and Story!" description="Transformer model translate from image to text, before creating story from that text"></SideBar>

    <SideBar title="Step 4:" subtitle="Generate Video!" description="Use text-to-video model"></SideBar>
  </div>
}