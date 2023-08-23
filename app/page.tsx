import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bilmm izle">
        <div className="hareket">
          █ █ █ <span className="text-red-500">█ █ █ █ █ █ █ █ █ █ </span>48%
          <br />
          <br />
          &gt; Site is under maintanance
          <br />
          &gt; Closed on: Aug 23 2023
          <br />
          &gt; Meanwhile, checkout:
          <br />
          &nbsp; &nbsp;
          <u>
            <a href="https://github.com/Akshay-Vs">Github,</a>
          </u>
          <u>
            <a href="https://www.linkedin.com/in/akshay-vs-653667231/">LinkedIn,</a>
          </u>
          <u>
            <a href="https://www.instagram.com/akshay._.vs__/">Instagram</a>
          </u>
          <br /> &gt; - Akshay Vs <span id="imlec">█</span>
        </div>
      </div>
    </main>
  );
}
