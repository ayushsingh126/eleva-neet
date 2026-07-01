import ConversationPrompt from "./ConversationPrompt";

const prompts = [
  "Why do I keep losing marks on free body diagrams?",
  "What's the fastest way to revise Organic Chemistry?",
  "Can you quiz me on today's topic right now?",
];

export default function ContinueConversation() {
  return (
    <section className="mt-8">
      <h2 className="mb-5 text-2xl font-bold text-slate-900">
        Continue the conversation
      </h2>

      <div className="space-y-4">
        {prompts.map((prompt) => (
          <ConversationPrompt
            key={prompt}
            text={prompt}
          />
        ))}
      </div>
    </section>
  );
}