import { Button } from "../components/Button";

export function MovieDetails() {
  return (
    <div className="flex flex-col">
      <img src="https://cdn.discordapp.com/attachments/1096518234032853123/1126150464338153573/image_11.png" alt="" />
      <h1 className="text-white pt-6 pb-3 font-700">Terrifier 2</h1>
      <div className="flex pb-3 justify-start gap-6">
        <p className="text-s text-white font-500">2022</p>
        <p className="text-s text-white-dimmed font-500">Horror/Thriller</p>
        <p className="text-s text-white-dimmed font-500">2h 18m</p>
        <p className="text-s text-white-dimmed font-500 pl-10"> <span className="text-green">70%</span> Score</p>
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <p className="text-s text-white-dimmed font-700">Director: <span className="text-white">Damian Leone</span></p>
          <p className="text-s text-white-dimmed font-500">Writer: <span className="text-white">Damian Leone</span></p>
        </div>
        <Button>Cast & Crew</Button>
      </div>
      <hr className="" />
      <div className="flex flex-col">
      <h2 className="text-white">Synopsis</h2>
      <p className="text-white-dimmed text-m font-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, repellat ipsum. Delectus blanditiis quam quibusdam molestiae ... </p>
      <a className="text-yellow text-m font-500 underline" href=""> Read more</a>
      </div>
      <Button> Get Reservation</Button>
    </div>

  );
}