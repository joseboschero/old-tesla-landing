function BackgroundVideo() {
  return (
    <div className="absolute top-0 bottom-0 h-full w-full z-10">
      <video
        className="object-center object-cover h-full w-full"
        autoPlay
        muted
        loop
        src="background-video.webm"
      ></video>
    </div>
  );
}

export default BackgroundVideo;
