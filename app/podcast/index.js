import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Podcast({ story }) {
  const liveStory = useStoryblokState(story);

  if (!liveStory?.content) return null;

  return (
    <div>
      <StoryblokComponent blok={liveStory.content} />
    </div>
  );
}

export async function getStaticProps() {
  const slug = "podcast";
  const sbParams = {
    version: "draft",
  };

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  console.log(`Data from storyblok: ${data}`);

  return {
    props: {
      story: data?.story ?? null,
    },
    revalidate: 3600,
  };
}
