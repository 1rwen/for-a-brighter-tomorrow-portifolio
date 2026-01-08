export default function SoundCloud() {
  const trackUrl =
    "https://soundcloud.com/luckynumber0/apologie";

  const src =
    "https://w.soundcloud.com/player/?url=" +
    encodeURIComponent(trackUrl) +
    "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";

  return (
    <div className="w-full">
      <div className="relative w-full aspect-[16/9] justify-center items-center flex">
        <iframe
          title="SoundCloud player"
          src={src}
          className="w-[70%] h-[30%] rounded-lg"
          frameBorder={0}
          allow="autoplay"
          loading="eager"
        />
      </div>
    </div>
  );
}
