import "@/app/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import TopNav from "@/app/components/TopNav";
import SubHeader from "@/app/components/SubHeader";
import Navbar from "@/app/components/Navbar";
import NavItem from "@/app/components/NavItem";
import HeroSection from "@/app/components/HeroSection";
import Releases from "@/app/components/Releases";
import ReleaseCard from "@/app/components/ReleaseCard";
import Articles from "@/app/components/Articles";
import LatestArticles from "@/app/components/LatestArticles";
import Footer from "@/app/components/Footer";
import Page from "@/app/components/Page";

const components = {
  TopNav: TopNav,
  SubHeader: SubHeader,
  NavItem: NavItem,
  Navbar: Navbar,
  HeroSection: HeroSection,
  releases: Releases,
  ReleaseCard: ReleaseCard,
  articles: Articles,
  LatestArticles: LatestArticles,
  footer: Footer,
  page: Page,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});
