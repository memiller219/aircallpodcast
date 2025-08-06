import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";

export default async function Podcast() {
  const slug = "podcast";
  const sbParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  const story = data?.story;

  if (!story?.content) return null;

  return (
    <div>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}
