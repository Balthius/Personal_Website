import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center p-24 text-2xl">
        <p>
          This is my person website,created in <strong>Next.js</strong> to help
          consolidate information about me, and my skillset.
        </p>
        <br></br>
        <p>
          Please browse my page, and I would appreciate any feedback or
          suggestions regarding the structure of the site itself.
        </p>
        <br></br>
      </main>
    </div>
  );
}
