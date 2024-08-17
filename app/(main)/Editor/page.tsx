import NotesPicker from "@/components/otherComponents/RichTextEditor/NotePicker";
import Notes from "@/components/otherComponents/RichTextEditor/Notes";

export default function page() {
  return (
    <main className="bg-slate-950 w-full min-h-screen pb-10">
      <NotesPicker />
      <Notes />
    </main>
  );
}
