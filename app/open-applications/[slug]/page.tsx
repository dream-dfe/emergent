

export default async function OpenProgramPage({
    params,
    searchParams,
  }: {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }) {
    return (
        <>
        <div className="text-center py-12 bg-yellow-400">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white ">
          Open Applications Page
        </h2>
        <p className="mb-4 text-xl  font-extrabold  ">Work in progress ⚒</p>
      </div>
        </>

    );
} 