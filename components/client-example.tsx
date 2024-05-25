"use client";

import { useSession } from "next-auth/react";
import CustomLink from "./custom-link";
import SessionData from "./session-data";
import { Divide } from "lucide-react";

export default function ClientExample() {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">クライアントサイドレンダリング</h1>
      <p>
        このページは
        <CustomLink href="https://nextjs.authjs.dev/react#usesession">
          <code>useSession</code>
        </CustomLink>{" "}
        React
        Hookを使用して、クライアントサイドでセッションデータを取得しています。
      </p>

      <div className="flex flex-col rounded-md bg-neutral-100">
        <div className="p-4 font-bold rounded-t-md bg-neutral-200">
          Current Session
        </div>
        <pre className="py-6 px-4 whitespace-pre-wrap break-all">
          {status === "loading" ? (
            <div>Loading...</div>
          ) : (
            <>{JSON.stringify(session, null, 2)}</>
          )}
        </pre>
      </div>
    </div>
  );
}
