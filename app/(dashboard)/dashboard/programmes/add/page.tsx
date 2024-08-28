import NewProgrammeForm from "./NewProgrammeForm";

export default function AddProgramme() {
  return (
    <section className="mx-auto max-w-6xl px-5">
      <div className="my-5 text-center">
        <h2 className="text-2xl font-semibold"> Add a new Programme</h2>
      </div>
      <NewProgrammeForm />
    </section>
  );
}
