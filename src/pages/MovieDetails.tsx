import { Button } from '../components/Button';

export function MovieDetails() {
  return (
    <div className="flex flex-col pt-2">
      <img
        src="https://cdn.discordapp.com/attachments/1096518234032853123/1126150464338153573/image_11.png"
        alt=""
      />
      <h1 className="text-white pt-6 pb-3 font-700 text-[1.25rem]">
        Terrifier 2
      </h1>
      <div className="flex pb-3 justify-between">
        <div className="flex gap-6">
          <p className="text-s text-white font-500">2022</p>
          <p className="text-s text-white-dimmed font-500">Horror/Thriller</p>
          <p className="text-s text-white-dimmed font-500">2h 18m</p>
        </div>
        <p className="text-s text-white-dimmed font-500 ">
          {' '}
          <span className="text-green">70%</span> Score
        </p>
      </div>
      <div className="flex justify-between items-center pb-4">
        <div className="flex flex-col gap-2">
          <p className="text-s text-white-dimmed font-700">
            Director:{' '}
            <span className="text-white font-700 pl-[0.62rem]">
              Damian Leone
            </span>
          </p>
          <p className="text-s text-white-dimmed font-500">
            Writer:{' '}
            <span className="text-white font-500 pl-[1.44rem]">
              Damian Leone
            </span>
          </p>
        </div>
        <Button
          variant="secondary"
          className="w-[10.4375rem] h-[2.375rem] text-s"
          label="Cast & Crew"
        ></Button>
      </div>
      <hr className="border-white-dimmed" />
      <div className="flex flex-col pt-4 pb-[3.19rem]">
        <p className="text-white font-700 text-m pb-3">Synopsis</p>
        <p className="text-white-dimmed text-m font-500 leading-6">
          {' '}
          After being resurrected by a sinister entity, Art the Clown returns to
          Miles County where ....
        </p>
        <a
          className="text-yellow text-m font-500 underline underline-offset-2"
          href=""
        >
          {' '}
          Read more
        </a>
      </div>
      <Button> Get Reservation</Button>
    </div>
  );
}
