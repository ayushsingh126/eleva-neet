import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileCard from "@/components/profile/ProfileCard";
import StatsGrid from "@/components/profile/StatsGrid";
import GoalsCard from "@/components/profile/GoalsCard";
import SettingsList from "@/components/profile/SettingsList";
import LogoutButton from "@/components/profile/LogoutButton";
import BottomNav from "@/components/BottomNav";
import AIForecast from "@/components/profile/AIForecast";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] p-6 pb-28 space-y-6">
      <ProfileHeader />

      <ProfileCard />

      <StatsGrid />

      <AIForecast />

      <GoalsCard />

      <SettingsList />

      <LogoutButton />
      <BottomNav />
    </main>
  );
}