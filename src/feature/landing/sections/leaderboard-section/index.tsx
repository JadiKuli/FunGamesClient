import { IoMdTrophy } from "react-icons/io";
import Leaderboard, { ILeaderboardProps } from "./components/Leaderboard";

const LeaderboardData: ILeaderboardProps[] = [
  {
    rank: 1,
    name: "Ahmad Kasim",
    score: 550,
    color: "#FAB12F",
  },
  {
    rank: 2,
    name: "Lorem Ipsum Dolor",
    score: 400,
    color: "#C0C0C0",
  },
  {
    rank: 3,
    name: "Faqih Fiddin",
    score: 220,
    color: "#6E4D25",
  },
  {
    rank: 4,
    name: "Kasep Andriawan",
    score: 190,
    color: "#000000",
  },
  {
    rank: 5,
    name: "Fitra Eri Ardiansyah",
    score: 150,
    color: "#000000",
  },
  {
    rank: 6,
    name: "Muhammad Hafizh",
    score: 100,
    color: "#000000",
  },
];

export default function LeaderboardSection() {
  return (
    <div className="h-screen w-full flex flex-col gap-5 items-center justify-center">
      <div className="text-center space-y-2 mb-5">
        <h1 className="text-2xl">Leaderboard</h1>
        <h1 className="text-5xl font-semibold">Global Ranking</h1>
      </div>
      {LeaderboardData.map((data, index) => (
        <Leaderboard key={index} {...data} />
      ))}
    </div>
  );
}
