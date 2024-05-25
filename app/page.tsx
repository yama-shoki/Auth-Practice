import { auth } from "@/auth";
import CustomLink from "@/components/custom-link";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">🚀NextAuth.js Tutorial</h1>
      <div>
        <CustomLink href="/server-example" className="underline">
          サーバー
        </CustomLink>
        と
        <CustomLink href="/client-example" className="underline">
          クライアント
        </CustomLink>
        の2通りの方法で認証のデモを作成しています。サインイン時のみ、{" "}
        <Link href="/protected-page" className="underline">
          protectedページ
        </Link>
        を見ることができます。
      </div>
      <div className="flex flex-col rounded-md bg-neutral-100">
        <div className="p-4 font-bold rounded-t-md bg-neutral-200">
          Current Session
        </div>
        <pre className="py-6 px-4 whitespace-pre-wrap break-all">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  );
}
