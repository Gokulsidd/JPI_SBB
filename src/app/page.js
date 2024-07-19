import Form from "@/components/form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-row min-h-screen  items-start justify-start gap-x-12 p-24">
      <Form />
      <div className="flex-1 my-2 p-2 min-w-[500px] md:border border-gray-200  shadow-sm rounded-md">table</div>
    </main>
  );
}
