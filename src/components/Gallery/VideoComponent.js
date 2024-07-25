const VideoComponent = ({ url }) => (
    <iframe
      width="560"
      height="315"
      src={url}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      title="Video player"
    />
  );
  
  // Usage with YouTube URL
  <VideoComponent url="https://www.youtube.com/embed/wuNdXr1ZBHo" />
  