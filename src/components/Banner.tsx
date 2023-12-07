const Banner = () => {
  const temInlineStyle = {
    background:
      "url('https://s3-alpha-sig.figma.com/img/8c28/35b0/6ca63cff2ec598ec252fe7cea1c7036a?Expires=1702857600&Signature=PkxkO9yMdC~8E3HuUXsYHQfQCzelDyi5Q4Iosd7CkVAB1NmJWRN7cwArUfo9FhPVqStzxr7tUObSV13Z92cUq3ncAgemOPhpKScF49es7Phyi9v1pNYlwnMRy9f5kBsuq8ksFWWbIdnklmuc~fros~Fou~XBIW2KyfHpljFhdfB5ydYDCqU~85MsitAsQW0G-nyxps1pGeSCcoRdfLkIJqWeoN7T2UqEy1f0qV5liYtaFDvHl3oLmRnD4pyRiOs9Qu4pZxgTM5X5-jlJXyqbFjGOklqhBOP3smxPgD7qjpcBxz9Hxrjbq8wJ1BJ2L6ZgjXKQkuaHhUJNr-stMlWjRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'), lightgray 50% / cover no-repeat",
    height: "338px",
  };
  return (
    <section style={temInlineStyle} className="relative">
      <div className="bg-fblack/75 absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
        <div className="text-center text-white">
          <h1 className="text-[36px] font-bold" style={{ fontStyle: "normal" }}>
            High Quality Materials
          </h1>
          <p className="w-[532px] text-sm font-normal">
            At Fixam, we procure our merchandise from reputable producers,
            guaranteeing robustness and dependability with each acquisition.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
