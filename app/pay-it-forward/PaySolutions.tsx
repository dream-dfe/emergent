import Container from "../../components/common/Container";

const PaySolutions = () => {
  return (
    <Container>
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 my-12">
        {" "}
        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 ">
          Initiative Solution
        </h2>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Digital literacy and financial literacy have been identified as the
          biggest skills gaps that widen inequitable life outcomes between women
          and men.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md ">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Digital literacy
          </h2>
          <p className="mb-5 font-light text-gray-500 ">
            Digital literacy encompasses the skills required to use technology
            safely, effectively and responsibly as technology continues to
            become more and more ingrained in daily life. Critical skills for
            girls when it comes to digital participation, online safety,
            educational progress and literacy for the changing world of work and
            business
          </p>
        </article>
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md ">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Financial literacy{" "}
          </h2>
          <p className="mb-5 font-light text-gray-500 ">
            {" "}
            Financial literacy is the ability to understand and effectively use
            various financial skills, including personal financial management,
            budgeting, and investing. Financial literacy skills and knowledge
            allow girls to make informed and effective decisions with all of
            their financial resources.
          </p>
        </article>
      </div>
    </Container>
  );
};

export default PaySolutions;
