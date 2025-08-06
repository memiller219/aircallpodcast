import { useEffect, useState } from "react";

export default function Podcast({ story }) {
  const liveStory = useStoryblokState(story);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated || !liveStory?.content) return null;

  return (
    <div key={liveStory.id}>
      <StoryblokComponent blok={liveStory.content} />
    </div>
  );
}
