import { IoMdTrophy } from "react-icons/io";

export type ILeaderboardProps = {
  rank?: number;
  name?: string;
  score?: number;
  color?: string;
};

export default function Leaderboard({
  rank = 1,
  name = "Ahmad Kasim",
  score = 0,
  color = "#FAB12F",
}: ILeaderboardProps) {
  return (
    <div className="w-2/3 h-16 justify-between flex">
      <div className="w-20 h-full bg-white skew-x-12 rounded-lg">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 skew-x-[-12deg]">
          <IoMdTrophy size={36} style={{ color }} />
        </div>
      </div>
      <div className="w-20 h-full bg-white skew-x-12 rounded-lg text-black font-bold text-2xl">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 skew-x-[-12deg]">
          <h1>{rank}</h1>
        </div>
      </div>
      <div className="w-2/3 h-full bg-white skew-x-12 rounded-lg flex items-center justify-center text-black font-semibold text-lg">
        <div className="skew-x-[-12deg]">
          <p>{name}</p>
        </div>
      </div>
      <div className="w-30 h-full bg-white skew-x-12 rounded-lg flex items-center justify-center text-black font-semibold text-2xl">
        <div className="skew-x-[-12deg] flex items-end">
          <h2 style={{ color }}>{score}</h2>
          <p className="text-xs font-normal">$soccer</p>
        </div>
      </div>
    </div>
  );
}
