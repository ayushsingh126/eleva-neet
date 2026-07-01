import LevelCard from "@/components/progress/LevelCard";
import ProgressHeader from "../../components/progress/ProgressHeader";
import WeeklyStudyChart from "@/components/progress/WeeklyStudyChart";
import SubjectPerformance from "@/components/progress/SubjectPerformance";
import AccuracyTrend from "@/components/progress/AccuracyTrend";
import Achievements from "@/components/progress/Achievements";
import RecentActivity from "@/components/progress/RecentActivities";
import BottomNav from "@/components/BottomNav";

export default function ProgressPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] p-6 pb-28">
      <ProgressHeader />
      <LevelCard />
      <WeeklyStudyChart />
      <SubjectPerformance />
      <AccuracyTrend />
      <Achievements />
      <RecentActivity />
      <BottomNav />
    </main>
  );
}