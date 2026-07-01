import MentorHeader from '../../components/mentor/MentorHeader';
import MentorSummary from '../../components/mentor/MentorSummary';
import InsightCard from '../../components/mentor/InsightCard';
import QuickActions from '../../components/mentor/QuickActions';
import ContinueConversation from '../../components/mentor/ContinueConversation';
import ChatThread from "../../components/mentor/ChatThread";
import ChatInput from "../../components/mentor/ChatInput";
import BottomNav from "../../components/BottomNav";

export default function MentorPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] p-6">
      <MentorHeader />

      <MentorSummary weeklyHours="10.5h" focus="Newton's Laws" />
      <InsightCard
        subject="Physics"
        title="Newton's Third Law"
        description="Many NEET students think the reaction force appears only after the action. It doesn't — both forces exist simultaneously. The book pushes the table down; the table pushes the book up at the same instant."
        fact="This concept appears in 2–3 NEET questions every year."
      />
      <QuickActions />
      <ContinueConversation />

<ChatThread />
<ChatInput />
<BottomNav />
</main>
  );
}
