import Head from "next/head";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Podcast({ story }) {
  const liveStory = useStoryblokState(story);

  if (!liveStory?.content) return null;

  return (
    <>
      <Head>
        <title>Aircall | Podcast</title>
        <meta
          name="description"
          content="Listen to the latest podcast episodes and interviews on Aircall."
        />
        <meta property="og:title" content="Podcast | Aircall" />
        <meta
          property="og:description"
          content="Listen to the latest podcast episodes and interviews on Aircall."
        />
        <meta property="og:type" content="website" />
      </Head>
      <div>
        <StoryblokComponent blok={liveStory.content} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const slug = "podcast";
  const sbParams = {
    version: "draft",
  };

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data?.story ?? null,
    },
    revalidate: 3600,
  };
}
