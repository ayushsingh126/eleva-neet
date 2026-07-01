import PracticeHeader from "../../components/practice/PracticeHeader";
import DailyGoalCard from "../../components/practice/DailyGoalCard";
import AIRecommendation from "../../components/practice/AIRecommendation";
import PracticeModes from "../../components/practice/PracticeModes";
import WeakAreas from "@/components/practice/WeakAreas";
import ContinuePractice from "@/components/practice/ContinuePractice";
import DailyChallenge from "@/components/practice/DailyChallenge";
import BottomNav from "@/components/BottomNav";

export default function PracticePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] p-6 pb-28">
      <PracticeHeader />
      <DailyGoalCard />
      <AIRecommendation />
      <PracticeModes />
      <WeakAreas />
      <ContinuePractice />
      <DailyChallenge />
      <BottomNav />
    </main>
  );
}