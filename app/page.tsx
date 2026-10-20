import { Anatomy } from "./_components/anatomy";
import { Cover } from "./_components/cover";
import { Colophon, EditorialNote } from "./_components/editorial-note";
import { Feature } from "./_components/feature";
import { Finale } from "./_components/finale";
import { Gate } from "./_components/gate";
import { Lookbook } from "./_components/lookbook";
import { LoveCoupons } from "./_components/love-coupons";
import { MusicPlayer } from "./_components/music-player";
import { Quiz } from "./_components/quiz";
import { Roles } from "./_components/roles";
import { SixReasons } from "./_components/six-reasons";
import { SecretLetter } from "./_components/secret-letter";
import { Timeline } from "./_components/timeline";
import { Wishes } from "./_components/wishes";

export default function Home() {
  return (
    <>
      <Gate />
      <MusicPlayer />
      <Cover />
      <main>
        <Feature />
        <Timeline />
        <Anatomy />
        <SixReasons />
        <Lookbook />
        <SecretLetter />
        <Roles />
        <Quiz />
        <LoveCoupons />
        <Wishes />
        <EditorialNote />
        <Finale />
      </main>
      <Colophon />
    </>
  );
}
