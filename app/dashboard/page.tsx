import Header from "../../components/Header";
import CommitmentCard from "../../components/CommitmentCard";
import CurrentMissionCard from "../../components/CurrentMissionCard";
import UpcomingMissionCard from "../../components/UpcomingMissionCard";
import WhyTodayMatters from "../../components/WhyTodayMatters";
import TodaysWin from "../../components/TodaysWin";
import TomorrowPreview from "../../components/TomorrowPreview";
import CustomizeTodayPlan from "../../components/CustomizeTodayPlan";
import BottomNav from "../../components/BottomNav";

export default function Dashboard() {
  const upcomingMissions = [
    {
      title: "Equilibrium & Le Chatelier",
      subject: "Chemistry",
      duration: "40 min",
      difficulty: "Medium",
    },
    {
      title: "Cell Division – Meiosis",
      subject: "Biology",
      duration: "35 min",
      difficulty: "Easy",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 pt-6 pb-28">
      <Header />

      <div className="mt-6">
        <CommitmentCard
          studyTime="3h 15m"
          momentum={82}
        />
      </div>

      <div className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">
            Today's Mission
          </h2>

          <span className="text-sm font-semibold text-blue-600">
            4 tasks
          </span>
        </div>

        <CurrentMissionCard
          title="Newton's Laws & Applications"
          subject="Physics"
          chapter="Chapter 5"
          duration="45 min"
          totalConcepts={18}
          completedConcepts={0}
          progress={0}
          estimatedCompletion="4:45 PM"
          trend="+8%"
        />
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          Upcoming Missions
        </h2>

        <div className="space-y-4">
          {upcomingMissions.map((mission) => (
            <UpcomingMissionCard
              key={mission.title}
              {...mission}
/>
          ))}
        </div>
      </div>
      <WhyTodayMatters
  title="Why Today Matters"
  description="Mastering Newton's Laws today will make Rotational Motion and Work, Energy & Power much easier next week. Finishing today's missions keeps you on pace for your weekly goal."
/>

<TodaysWin
  title="Today's Win"
  description="Finish today's Organic Chemistry mission and you'll be ready for Alcohols & Phenols tomorrow."
  benefits={[
    "Stronger reaction mechanisms",
    "Better preparation for three upcoming chapters",
    "Increased confidence in Organic Chemistry",
  ]}
/>
<TomorrowPreview
  subject="Physics"
  chapter="Current Electricity"
  duration="2h 40m"
/>
<CustomizeTodayPlan />
<BottomNav />
    </main>
  );
}