import { Hero } from "@/components/hero";
import { Mission } from "@/components/mission";
import { SiteFooter } from "@/components/site-footer";
import { TeamMembers } from '@/components/team-members'
import { Partners } from '@/components/partners'
import { Guests } from '@/components/guests'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Mission />
      {/* <TeamMembers /> */}
      <Guests />
      <Partners />
      <SiteFooter />
    </>
  );
}
