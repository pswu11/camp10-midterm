import { Button } from "../components/Button";

export function MovieDetails() {
  return (
    <>
      <img src="https://cdn.discordapp.com/attachments/1096518234032853123/1126150464338153573/image_11.png" alt="" />
      <h1 className="text-white font-700">Terrifier 2</h1>
      <div>
        <p className="text-s text-white font-500">2022</p>
        <p className="text-s text-white-dimmed font-500">Horror/Thriller</p>
        <p className="text-s text-white-dimmed font-500">2h 18m</p>
        <p className="text-s text-white-dimmed font-500"> <span className="text-green">70%</span> Score</p>
      </div>
      <div>
        <div>
          <p className="text-s text-white-dimmed font-700">Director: <span className="text-white">Damian Leone</span></p>
          <p className="text-s text-white-dimmed font-500">Writer: <span className="text-white">Damian Leone</span></p>
        </div>
        <Button>Cast & Crew</Button>
      </div>
      <hr />
      <h2 className="text-white">Synopsis</h2>
      <p className="text-white-dimmed text-m font-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, repellat ipsum. Delectus blanditiis quam quibusdam molestiae ... </p>
      <a className="text-yellow text-m font-500 underline" href=""> Read more</a>
      <Button> Get Reservation</Button>
    </>

  );
}