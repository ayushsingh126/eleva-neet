type ConversationPromptProps = {
  text: string;
};

export default function ConversationPrompt({
  text,
}: ConversationPromptProps) {
  return (
    <button className="flex w-full items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:shadow-md">
      <span className="text-lg font-medium text-slate-800">
        {text}
      </span>

      <span className="text-2xl text-blue-600">
        →
      </span>
    </button>
  );
}